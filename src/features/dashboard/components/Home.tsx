import { DashboardLayout } from "../../../shared/components";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="bg-black p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white mb-4">Dashboard</h2>
        <p className="text-gray-400">
          Welcome to your dashboard. Use the sidebar navigation to explore
          different sections.
        </p>
      </div>
    </DashboardLayout>
  );
}
