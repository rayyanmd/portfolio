import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import { AboutMe } from "@/src/components/AboutMe";
import { Education } from "@/src/components/Education";
import { Contact } from "@/src/components/Contact";
import { MessageForm } from "@/src/components/MessageForm";
import { MessageList } from "@/src/components/MessageList";
import { Footer } from "@/src/components/Footer";
import { Projects } from "../components/Projects";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <Education />
        <Contact />
        <section
          id="messages"
          className="min-h-screen flex items-center py-12 md:py-0"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl retro-heading text-retro-pink">
                  Anonymous Messages
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed retro-text">
                  Leave me a message or check out my responses
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-10 py-12 md:grid-cols-2">
              <MessageForm />
              <MessageList />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
