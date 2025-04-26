import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { SiGithub, SiInstagram, SiX } from "@icons-pack/react-simple-icons";

export function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/rayyanmd",
      icon: <SiGithub className="h-6 w-6" />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/rayyanmmd",
      icon: <SiInstagram className="h-6 w-6" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/ryrysigitaris",
      icon: <SiX className="h-6 w-6" />,
    },
    {
      name: "Email",
      url: "mailto:rayyan@rayyan.web.id",
      icon: <Mail className="h-6 w-6" />,
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-12 md:py-0 bg-muted/50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl retro-heading text-retro-blue">
              Get In Touch
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed retro-text">
              Connect with me on social media or send me a message
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12">
          <div className="flex flex-wrap justify-center gap-4 opacity-0 fade-in fade-in-1">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-background border-2 border-white hover:bg-retro-blue/20 transition-colors glitch"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
