export default function FloatingBubbles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="glass-bubble w-32 h-32 left-[10%] bottom-[-10%] animate-float-1" />
      <div className="glass-bubble w-48 h-48 left-[75%] bottom-[-20%] animate-float-2" />
      <div className="glass-bubble w-20 h-20 left-[45%] bottom-[-5%] animate-float-3" />
      <div className="glass-bubble w-64 h-64 left-[25%] bottom-[-30%] animate-float-4" />
      <div className="glass-bubble w-24 h-24 left-[85%] bottom-[-15%] animate-float-5" />
    </div>
  );
}
