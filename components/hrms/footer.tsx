export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-background/70">
          &copy; {currentYear} Enterprise HRMS. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
