import { DashboardLayout } from '@/components/dashboard/dashboard-layout';
import { TodoList } from '@/components/tools/todos/todo-list';

export default function TodosPage() {
  return (
    <DashboardLayout>
      <TodoList />
    </DashboardLayout>
  );
}