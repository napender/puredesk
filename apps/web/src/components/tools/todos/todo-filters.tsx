'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TodoFiltersProps {
  currentFilter: 'all' | 'active' | 'completed';
  onFilterChange: (filter: 'all' | 'active' | 'completed') => void;
  stats: {
    total: number;
    active: number;
    completed: number;
  };
}

export function TodoFilters({ currentFilter, onFilterChange, stats }: TodoFiltersProps) {
  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={currentFilter === 'all' ? 'default' : 'outline'}
        onClick={() => onFilterChange('all')}
      >
        All ({stats.total})
      </Button>
      <Button
        variant={currentFilter === 'active' ? 'default' : 'outline'}
        onClick={() => onFilterChange('active')}
      >
        Active ({stats.active})
      </Button>
      <Button
        variant={currentFilter === 'completed' ? 'default' : 'outline'}
        onClick={() => onFilterChange('completed')}
      >
        Completed ({stats.completed})
      </Button>
    </div>
  );
}
