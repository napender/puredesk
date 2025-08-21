'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface Tool {
  id: string;
  name: string;
  icon: string;
  path: string;
}

const tools: Tool[] = [
  { id: 'dashboard', name: 'Dashboard', icon: '📊', path: '/dashboard' },
  { id: 'todos', name: 'To-Do List', icon: '✓', path: '/dashboard/todos' },
  { id: 'notes', name: 'Notes', icon: '📝', path: '/dashboard/notes' },
];

const otherItems = [
  { id: 'settings', name: 'Settings', icon: '⚙️', path: '/dashboard/settings' },
  { id: 'help', name: 'Help', icon: '❓', path: '/dashboard/help' },
];

interface SidebarProps {
  collapsed?: boolean;
  className?: string;
}

export function Sidebar({ collapsed = false, className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside 
      className={cn(
        "bg-bg-card border-r border-border-light transition-all duration-300 z-10",
        collapsed ? "w-20" : "w-64",
        className
      )}
    >
      <div className="p-4">
        <div className="mb-8">
          <h3 className={cn(
            "text-text-secondary text-sm font-medium uppercase tracking-wide",
            collapsed && "text-center"
          )}>
            {collapsed ? "TOOLS" : "MENU"}
          </h3>
        </div>

        <nav className="space-y-2">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.path}
              className={cn(
                "flex items-center px-3 py-2 rounded-lg text-text-primary transition-colors",
                "hover:bg-hover-bg",
                pathname === tool.path && "bg-accent-primary text-white hover:bg-accent-primary",
                collapsed && "justify-center"
              )}
            >
              <span className="text-lg">{tool.icon}</span>
              {!collapsed && (
                <span className="ml-3 font-medium">{tool.name}</span>
              )}
            </Link>
          ))}
        </nav>

        <div className="mt-8">
          <h3 className={cn(
            "text-text-secondary text-sm font-medium uppercase tracking-wide mb-4",
            collapsed && "text-center"
          )}>
            {collapsed ? "OTHER" : "OTHERS"}
          </h3>
          <nav className="space-y-2">
            {otherItems.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className={cn(
                  "flex items-center px-3 py-2 rounded-lg text-text-primary transition-colors",
                  "hover:bg-hover-bg",
                  pathname === item.path && "bg-accent-primary text-white hover:bg-accent-primary",
                  collapsed && "justify-center"
                )}
              >
                <span className="text-lg">{item.icon}</span>
                {!collapsed && (
                  <span className="ml-3 font-medium">{item.name}</span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
