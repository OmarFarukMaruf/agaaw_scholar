import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import CountryPreview from "@/components/home/CountryPreview";
import ScholarshipPreview from "@/components/home/ScholarshipPreview";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full">
      <Hero />
      <Features />
      <CountryPreview />
      <ScholarshipPreview />
    </main>
  );
}