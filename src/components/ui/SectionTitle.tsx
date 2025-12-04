export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-bold text-center mb-10">
      {children}
    </h2>
  );
}