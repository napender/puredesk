import { Pool } from 'pg';

// In-memory store for mock todos
let mockTodos: any[] = [];

// Mock the Pool for now since we don't have a database set up
const pool = {
  query: async (text: string, params?: any[]) => {
    console.log("Mock DB Query:", text, params);
    if (text.includes("SELECT")) {
      return { rows: mockTodos }; // Return current mock todos
    } else if (text.includes("INSERT")) {
      const newTodo = {
        id: 'mock-id-' + Math.random().toString(36).substr(2, 9),
        user_id: params[0],
        title: params[1],
        description: params[2],
        priority: params[3],
        category: params[4],
        dueDate: params[5],
        tags: params[6],
        completed: false,
        order_index: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      mockTodos.push(newTodo);
      return { rows: [newTodo] }; // Return the newly created todo
    } else if (text.includes("UPDATE")) {
        const id = params[0];
        const updates: { [key: string]: any } = {};
        // Assuming the update query is always for 'completed' for now
        // The PATCH request sends { completed: boolean } as body
        // The params will be [id, userId, completedValue]
        updates["completed"] = params[2]; 

        const index = mockTodos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            const updatedTodo = { ...mockTodos[index], ...updates, updated_at: new Date().toISOString() };
            mockTodos[index] = updatedTodo;
            return { rows: [updatedTodo] };
        }
        return { rows: [] }; // Todo not found
    } else if (text.includes("DELETE")) {
        const id = params[0];
        const initialLength = mockTodos.length;
        mockTodos = mockTodos.filter(todo => todo.id !== id);
        return { rowCount: initialLength - mockTodos.length }; // Return rowCount for delete
    }
    return { rows: [] };
  },
};

export const db = {
  query: (text: string, params?: any[]) => pool.query(text, params),
};