'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/ui/sidebar';
import { Topbar } from '@/components/ui/topbar';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Topbar 
        onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <div className="flex">
        <Sidebar 
          collapsed={sidebarCollapsed}
          className="fixed left-0 top-16 h-[calc(100vh-4rem)]"
        />
        <main 
          className={cn(
            "flex-1 transition-all duration-300 pt-16 pl-64",
            sidebarCollapsed && "pl-20"
          )}
        >
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
