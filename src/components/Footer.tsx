export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left retro-text">
          &copy; {currentYear} Rayyan Muhammad. All rights reserved.
        </p>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-right retro-text">
          Built with Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
