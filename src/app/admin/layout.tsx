import Link from "next/link";
import "./admin.css";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="admin-layout flex">
        {/* Sidebar */}
        <aside className="w-60 h-screen bg-gray-900 text-gray-100 p-6 flex flex-col gap-4">
          <h2 className="text-xl font-bold mb-6">Agaaw Admin</h2>

          <nav className="flex flex-col gap-3">
            <Link href="/admin" className="hover:text-white">Dashboard</Link>
            <Link href="/admin/scholarships" className="hover:text-white">
              Scholarships
            </Link>
            <Link href="/admin/countries" className="hover:text-white">
              Countries
            </Link>
          </nav>
        </aside>

        {/* Main content area */}
        <main className="flex-1 min-h-screen bg-gray-100 p-10">
          {children}
        </main>
      </body>
    </html>
  );
}