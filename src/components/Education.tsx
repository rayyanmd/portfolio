export function Education() {
  const educationItems = [
    {
      year: "2023 - Now",
      degree: "SMA",
      institution: "SMAN 5 Tambun Selatan",
    },
    {
      year: "2020 - 2023",
      degree: "SMP",
      institution: "SMP Al Muslim",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex items-center py-12 md:py-0"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl retro-heading text-retro-purple">
              Education
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed retro-text">
              My academic journey and qualifications
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12">
          <div className="relative pl-8 opacity-0 fade-in fade-in-1">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-retro-purple"></div>
            {educationItems.map((item, index) => (
              <div key={index} className="mb-8 relative">
                <div className="absolute left-[-38px] top-[52px] w-4 h-4 rounded-full bg-retro-purple"></div>
                <div className="retro-card mt-6">
                  <div className="font-bold text-retro-purple retro-text text-lg">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold retro-text">
                    {item.degree}
                  </h3>
                  <div className="text-muted-foreground retro-text">
                    {item.institution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
