'use client';

import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TopbarProps {
  onToggleSidebar: () => void;
}

export function Topbar({ onToggleSidebar }: TopbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-bg-card border-b border-border-light h-16 flex items-center px-6 z-20">
      <button 
        onClick={onToggleSidebar}
        className="text-text-secondary hover:text-text-primary transition-colors"
      >
        <Menu className="h-6 w-6" />
      </button>
      <div className="ml-4 text-xl font-semibold text-text-primary">Puredesk</div>
    </header>
  );
}
