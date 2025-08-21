'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Trash2 } from 'lucide-react';

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

interface TodoItemProps {
  todo: Todo;
  onUpdate: (updates: Partial<Todo>) => void;
  onDelete: () => void;
}

const priorityColors = {
  low: 'text-green-500',
  medium: 'text-yellow-500',
  high: 'text-orange-500',
  urgent: 'text-red-500',
};

export function TodoItem({ todo, onUpdate, onDelete }: TodoItemProps) {
  return (
    <Card className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-3">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={(checked) => onUpdate({ completed: checked as boolean })}
        />
        <div className="flex flex-col">
          <span
            className={cn(
              "text-body-lg font-medium",
              todo.completed && "line-through text-text-secondary"
            )}
          >
            {todo.title}
          </span>
          {todo.description && (
            <span className="text-body-sm text-text-secondary">{todo.description}</span>
          )}
          <div className="flex items-center space-x-2 text-body-sm mt-1">
            <span className={cn(
              "font-semibold",
              priorityColors[todo.priority]
            )}>
              {todo.priority}
            </span>
            {todo.dueDate && (
              <span className="text-text-secondary">
                Due: {format(new Date(todo.dueDate), 'MMM dd, yyyy')}
              </span>
            )}
            {todo.category && (
              <span className="text-text-secondary">Category: {todo.category}</span>
            )}
            {todo.tags && todo.tags.length > 0 && (
              <div className="flex space-x-1">
                {todo.tags.map((tag) => (
                  <span key={tag} className="bg-gray-subtle text-text-primary px-2 py-0.5 rounded-full text-caption">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Button variant="ghost" size="icon" onClick={onDelete}>
        <Trash2 className="h-5 w-5 text-text-secondary" />
      </Button>
    </Card>
  );
}
