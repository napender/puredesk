'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface TodoFormProps {
  onSubmit: (todoData: { title: string; description?: string; priority: 'low' | 'medium' | 'high' | 'urgent'; category?: string; dueDate?: Date; tags: string[] }) => void;
}

export function TodoForm({ onSubmit }: TodoFormProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    console.log('Form submitted with:', { title });

    onSubmit({
      title,
      description: undefined,
      priority: 'medium',
      category: undefined,
      dueDate: undefined,
      tags: [],
    });

    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Todo title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button type="submit">Add Todo</Button>
    </form>
  );
}