export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative inline-flex w-fit items-center p-2 ${className}`}>
      {/* Top Left Corner Bracket */}
      <div className="absolute top-0 left-0 w-4 h-8 md:w-6 md:h-10 border-t-[2px] border-l-[2px] border-current"></div>
      
      {/* Main Content */}
      <div className="flex items-center gap-3 z-10 ml-3 mr-2 md:ml-4 md:mr-3">
        <span className="font-serif text-3xl md:text-4xl tracking-wider pt-1 font-bold">SBA</span>
        <div className="w-[1.5px] h-10 md:h-12 bg-current opacity-80"></div>
        <div className="flex flex-col font-sans text-[11px] md:text-[13px] leading-[1.15] tracking-wide font-medium">
          <span>Syabil</span>
          <span>Binar</span>
          <span>Amerta</span>
        </div>
      </div>

      {/* Bottom Right Corner Bracket */}
      <div className="absolute bottom-0 right-0 w-4 h-8 md:w-6 md:h-10 border-b-[2px] border-r-[2px] border-current"></div>
    </div>
  );
}
