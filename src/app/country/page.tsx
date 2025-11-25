const Countries = () => {
  const { data: countries, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("countries")
        .select(`
          *,
          scholarships:scholarships(count)
        `)
        .order("name", { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Study <span className="bg-hero-gradient bg-clip-text text-transparent">Destinations</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore countries and their educational opportunities
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : countries && countries.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {countries.map((country) => (
              <CountryCard
                key={country.id}
                id={country.id}
                name={country.name}
                slug={country.slug}
                flagEmoji={country.flag_emoji || undefined}
                description={country.description || undefined}
                imageUrl={country.image_url || undefined}
                scholarshipCount={country.scholarships?.[0]?.count || 0}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-border p-12 text-center">
            <p className="text-muted-foreground">
              No countries available yet. Check back soon!
            </p>
          </div>
        )}
      </div>
      
      <footer className="border-t border-border py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Agaaw. Connecting students with global opportunities.</p>
        </div>
      </footer>
    </div>
  );
};

export default Countries;
