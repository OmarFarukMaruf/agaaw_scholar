interface CountryProps {
  params: {
    country: string;
  };
}

export default async function CountryDetails({ params }: CountryProps) {
  const { country } = await params;

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 capitalize">
        Study in {country.replace(/-/g, " ")}
      </h1>

      <p className="text-gray-700 mb-6">
        This is a placeholder page. Later, you will fetch:
      </p>

      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>Opportunities</li>
        <li>Top universities</li>
        <li>How to apply</li>
        <li>When to apply</li>
        <li>Visa policy</li>
        <li>Average cost of living</li>
        <li>Job opportunities</li>
        <li>Available scholarships</li>
      </ul>
    </section>
  );
}