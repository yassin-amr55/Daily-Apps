import { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-orange-900 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8 animate-bounce">
          <CheckCircle2 className="w-20 h-20 text-blue-600 dark:text-white mx-auto" strokeWidth={2} />
        </div>
        <h1 className="text-4xl font-bold text-blue-600 dark:text-white mb-4">TodoMaster</h1>
        <div className="w-64 h-2 bg-blue-200 dark:bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 dark:bg-white rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-blue-600/80 dark:text-white/80 mt-4 text-sm">Loading {progress}%</p>
      </div>
    </div>
  );
}
