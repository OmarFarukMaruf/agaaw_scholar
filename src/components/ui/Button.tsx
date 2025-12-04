export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-teal-700 text-white px-6 py-2 rounded-md hover:bg-teal-800 transition">
      {children}
    </button>
  );
}