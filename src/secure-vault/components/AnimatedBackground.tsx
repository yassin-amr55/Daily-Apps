export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated overlay blobs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-400/20 dark:bg-orange-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob" />
      <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-400/20 dark:bg-red-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-400/20 dark:bg-orange-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />
    </div>
  );
}