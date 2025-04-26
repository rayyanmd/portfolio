"use client";

import Link from "next/link";

export function Header() {
  function handleScrollToTop() {
    window.scrollTo(0, 0);
    window.history.pushState({}, "", "/");
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-xl items-center">
        <div className="mr-4 flex">
          <button
            onClick={handleScrollToTop}
            className="mr-6 flex items-center space-x-2"
          >
            <span className="font-press-start-2p text-sm sm:text-base retro-glow">
              RAY :3
            </span>
          </button>
        </div>
        <div className="hidden sm:flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <button
              onClick={handleScrollToTop}
              className="font-vt323 text-lg px-3 py-2 hover:text-retro-orange transition-colors"
            >
              Home
            </button>
            <Link
              href="#about"
              className="font-vt323 text-lg px-3 py-2 hover:text-retro-orange transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="font-vt323 text-lg px-3 py-2 hover:text-retro-orange transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#education"
              className="font-vt323 text-lg px-3 py-2 hover:text-retro-orange transition-colors"
            >
              Education
            </Link>
            <Link
              href="#contact"
              className="font-vt323 text-lg px-3 py-2 hover:text-retro-orange transition-colors"
            >
              Contact
            </Link>
            <Link
              href="#messages"
              className="font-vt323 text-lg px-3 py-2 hover:text-retro-orange transition-colors"
            >
              Messages
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
