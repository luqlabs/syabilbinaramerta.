export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative inline-flex w-fit items-center bg-foreground text-background p-3 md:p-4 rounded-sm shadow-md ${className}`}>
      {/* Top Left Corner Bracket */}
      <div className="absolute top-2.5 left-2.5 w-4 h-8 md:w-6 md:h-10 border-t-[1.5px] border-l-[1.5px] border-white"></div>
      
      {/* Main Content */}
      <div className="flex items-center gap-3 z-10 ml-3 mr-2 md:ml-5 md:mr-4">
        <span className="font-serif text-3xl md:text-4xl tracking-wider pt-1">SBA</span>
        <div className="w-[1.5px] h-10 md:h-12 bg-white"></div>
        <div className="flex flex-col font-serif text-[11px] md:text-[13px] leading-[1.15] tracking-wide">
          <span>Syabil</span>
          <span>Binar</span>
          <span>Amerta</span>
        </div>
      </div>

      {/* Bottom Right Corner Bracket */}
      <div className="absolute bottom-2.5 right-2.5 w-4 h-8 md:w-6 md:h-10 border-b-[1.5px] border-r-[1.5px] border-white"></div>
    </div>
  );
}
