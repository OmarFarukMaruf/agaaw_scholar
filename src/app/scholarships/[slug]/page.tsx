interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ScholarshipDetails({ params }: PageProps) {
  const { slug } = await params;

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 capitalize">
        {slug.replace(/-/g, " ")}
      </h1>

      <p className="text-gray-700 mb-6">
        This is a placeholder page. Later we will fetch real details from the
        database using the slug.
      </p>

      <div className="mt-10 border p-6 rounded-lg shadow">
        <p className="font-semibold text-lg">📌 Later this will include:</p>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>Scholarship Overview</li>
          <li>Eligibility Requirements</li>
          <li>Deadline & Timeline</li>
          <li>Application Process</li>
          <li>Benefits</li>
          <li>Official Website Link</li>
        </ul>
      </div>
    </section>
  );
}