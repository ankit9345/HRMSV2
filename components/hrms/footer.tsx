export function Footer() {
  return (
    <footer className="bg-[#4a4a4a] py-4">
      <div className="container px-4 md:px-6 flex flex-col items-center gap-3">
        <img 
          src="/images/logo.png" 
          alt="Enhance Services" 
          className="h-8 w-auto"
        />
        <p className="text-center text-sm text-white/80">
          © Copyright 2023 Enhance Services - All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
