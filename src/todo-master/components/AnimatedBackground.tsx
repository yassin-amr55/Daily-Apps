export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Light mode animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 dark:opacity-0 animate-gradient" />
      
      {/* Dark mode animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 opacity-0 dark:opacity-100 animate-gradient-dark" />
      
      {/* Animated overlay blobs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-400/20 dark:bg-orange-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob" />
      <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-400/20 dark:bg-red-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-400/20 dark:bg-orange-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />
    </div>
  );
}
