export function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-12 md:py-0 bg-muted/50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl retro-heading text-retro-orange">
              About Me
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed retro-text">
              I&apos;m a passionate developer with a love for creating beautiful
              and functional websites.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="retro-card opacity-0 fade-in fade-in-1">
            <h3 className="text-2xl font-bold retro-text text-retro-purple mb-4">
              My Story
            </h3>
            <p className="retro-text text-lg">
              Hey there! I'm Ray — a tech enthusiast 💻 who's been coding since
              I was a kid 👨‍💻. Over the years, I've fallen in love with
              JavaScript and all the possibilities it opens up. I'm passionate
              about building cool, creative, and useful things — from small side
              projects to big ideas. I'm always exploring new tools, sharpening
              my skills, and pushing myself to grow as a developer 🚀. Outside
              of coding, I enjoy writing music and playing instruments like
              guitar and piano 🎸🎹 — blending creativity into everything I do.
              My ultimate goal? To keep leveling up and create tech that makes
              an impact.
            </p>
          </div>
          <div className="space-y-4 opacity-0 fade-in fade-in-2">
            <div className="retro-card">
              <h3 className="text-2xl font-bold retro-text text-retro-blue mb-4">
                Main Skills
              </h3>
              <ul className="grid grid-cols-2 gap-2 retro-text text-lg">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-retro-green"></span>
                  JavaScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-retro-orange"></span>
                  React
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-retro-purple"></span>
                  Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-retro-pink"></span>
                  TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-retro-green"></span>
                  Node.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-retro-orange"></span>
                  Python
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
