import { DashboardLayout } from '@/components/dashboard/dashboard-layout';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">Welcome to your Dashboard!</h1>
      <p className="text-gray-600">Select a tool from the sidebar to get started.</p>
    </DashboardLayout>
  );
}