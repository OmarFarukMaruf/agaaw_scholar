import { SCHOLARSHIPS } from "@/data/scholarships";
import { COUNTRIES } from "@/data/countries";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Total Scholarships</h2>
          <p className="text-4xl font-bold mt-2">{Object.keys(SCHOLARSHIPS).length}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Total Countries</h2>
          <p className="text-4xl font-bold mt-2">{Object.keys(COUNTRIES).length}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Admins</h2>
          <p className="text-4xl font-bold mt-2">1</p>
        </div>
      </div>
    </div>
  );
}