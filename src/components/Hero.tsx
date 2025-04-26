"use client";
import Image from "next/image";
import Donate from "./Donate";
import { useState } from "react";

export function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-12 md:py-0 crt">
      <Donate open={open} setOpen={setOpen} />
      <div className="scanline"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex h-full items-center justify-center opacity-0 fade-in fade-in-4">
            <div className="relative w-full max-w-[200px] lg:max-w-[600px] h-full overflow-hidden rounded-lg">
              <Image
                src="/profile.svg"
                alt="Profile Image"
                width={600}
                height={800}
                className="object-cover pixel-border [mask-image:linear-gradient(to_bottom,black,transparent)]"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4 z-10">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none retro-heading text-retro-green opacity-0 fade-in fade-in-1">
                Rayyan Muhammad
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl retro-text opacity-0 fade-in fade-in-2">
                A student.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[500px]:flex-row opacity-0 fade-in fade-in-3">
              <a href="#about" className="retro-button bg-transparent">
                Learn More
              </a>
            </div>
            <div className="flex flex-col gap-2 min-[500px]:flex-row opacity-0 fade-in fade-in-3">
              <a
                href="#contact"
                className="retro-button bg-retro-green text-black hover:bg-retro-green/90"
              >
                Contact Me
              </a>
              <a
                href="#messages"
                className="retro-button bg-blue-500 text-white hover:bg-blue-400"
              >
                Leave a Message
              </a>
              <button
                onClick={() => setOpen(true)}
                className="text-left retro-button bg-retro-pink text-white hover:bg-retro-pink/90"
              >
                Buy me a tea 🍵
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
