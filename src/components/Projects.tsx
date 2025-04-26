import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export function Projects() {
  const projects: Project[] = [
    {
      title: "Retro Portfolio",
      description:
        "A personal portfolio website with a retro design, built with Next.js and Tailwind CSS.",
      image: "/projects/portfolio.png?height=400&width=600",
      tags: ["Next.js", "Tailwind CSS", "Supabase"],
      liveUrl: "https://rayyan.web.id",
      githubUrl: "https://github.com/rayyanmd/portfolio",
    },
    {
      title: "Metronome for Band",
      description:
        "An application that allows musicians to use a metronome with their band members at the same time (synced metronome) with the song structure",
      image: "/projects/metronome.png?height=400&width=600",
      tags: ["JavaScript", "Web Audio API"],
      liveUrl: "https://metronome.ray.toys/",
      githubUrl: "https://github.com/rayyanmd/metronome-for-band",
    },
    {
      title: "Nanabung",
      description:
        "A Simple Yet Powerful Finance & Saving Tracker App\n(Coming Soon 😎)",
      image: "placeholder.svg",
      tags: ["React Native", "Supabase"],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-12 md:py-0 bg-muted/50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl retro-heading text-retro-blue">
              My Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed retro-text">
              Check out some of the projects I&apos;ve worked on
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="retro-card flex flex-col group overflow-hidden opacity-0 fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="relative h-48 w-full overflow-hidden mb-4">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold retro-text mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground retro-text mb-4">
                {project.description.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 text-xs rounded-md bg-background border border-border retro-text"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-button flex items-center gap-1 text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Link>
                )}
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-button flex items-center gap-1 text-sm"
                  >
                    <SiGithub className="h-4 w-4" />
                    Code
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed retro-text mb-12">
          Check out my other projects in my{" "}
          <Link
            href="https://github.com/rayyanmd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </Link>
        </p>
      </div>
    </section>
  );
}
