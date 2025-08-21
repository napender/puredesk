'use client';

import { useState, useEffect } from 'react';
import { TodoItem } from './todo-item';
import { TodoForm } from './todo-form';
import { TodoFilters } from './todo-filters';
import { Card } from '@/components/ui/card';

interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category?: string;
  dueDate?: Date;
  tags: string[];
}

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch('/api/todos');
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (todoData: Omit<Todo, 'id'>) => {
    console.log('Adding todo:', todoData);
    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todoData),
      });
      const newTodo = await response.json();
      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const updateTodo = async (id: string, updates: Partial<Todo>) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });
      const updatedTodo = await response.json();
      setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await fetch(`/api/todos/${id}`, { method: 'DELETE' });
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'active': return !todo.completed;
      case 'completed': return todo.completed;
      default: return true;
    }
  });

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-heading-2 text-text-primary">To-Do List</h1>
        <div className="text-sm text-text-secondary">
          {todos.length} total, {todos.filter(t => !t.completed).length} active
        </div>
      </div>

      <Card className="p-6">
        <TodoForm onSubmit={addTodo} />
      </Card>

      <TodoFilters 
        currentFilter={filter} 
        onFilterChange={setFilter}
        stats={{
          total: todos.length,
          active: todos.filter(t => !t.completed).length,
          completed: todos.filter(t => t.completed).length,
        }}
      />

      <div className="space-y-3">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={(updates) => updateTodo(todo.id, updates)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </div>

      {filteredTodos.length === 0 && (
        <Card className="p-8 text-center">
          <div className="text-4xl mb-4">📝</div>
          <h3 className="text-body-lg text-text-primary mb-2">
            {filter === 'completed' ? 'No completed tasks' : 
             filter === 'active' ? 'No active tasks' : 'No tasks yet'}
          </h3>
          <p className="text-text-secondary">
            {filter === 'all' ? 'Add your first task to get started!' : 
             `Switch to see ${filter === 'active' ? 'completed' : 'active'} tasks`}
          </p>
        </Card>
      )}
    </div>
  );
}
