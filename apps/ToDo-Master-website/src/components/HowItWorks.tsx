import { Plus, Bell, CheckCircle2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    icon: Plus,
    title: 'Add tasks',
    description: 'Create daily routines, scheduled tasks, or capture quick voice notes'
  },
  {
    icon: Bell,
    title: 'Set reminders',
    description: 'Choose when to be notified and get reminders before the deadline'
  },
  {
    icon: CheckCircle2,
    title: 'Stay consistent',
    description: 'Track your progress and build lasting habits one day at a time'
  }
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = step.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setProgress(100);
          }, 300 + index * 200);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="text-center space-y-4">
        <div className="relative inline-block">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 dark:from-orange-500 dark:to-red-500 flex items-center justify-center shadow-lg mx-auto">
            <Icon className="w-10 h-10 text-white" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-sm font-bold text-gray-900 dark:text-white shadow-lg border-2 border-gray-100 dark:border-slate-700">
            {index + 1}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {step.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 max-w-xs mx-auto">
          {step.description}
        </p>

        {index === 0 && isVisible && (
          <div className="mt-6 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg">
            <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-orange-500 dark:to-red-500 transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {index === 1 && isVisible && (
          <div className="mt-6 inline-flex items-center gap-2 bg-white dark:bg-slate-800 rounded-full px-4 py-2 shadow-lg">
            <Bell className="w-4 h-4 text-blue-500 dark:text-orange-500 animate-bounce" />
            <span className="text-sm text-gray-700 dark:text-gray-300">Reminder set!</span>
          </div>
        )}

        {index === 2 && isVisible && (
          <div className="mt-6 flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((day, i) => (
              <div
                key={day}
                className={`w-8 h-8 rounded-lg transition-all duration-500 ${
                  i < 4
                    ? 'bg-gradient-to-br from-green-500 to-emerald-400'
                    : 'bg-gray-200 dark:bg-slate-700'
                }`}
                style={{ transitionDelay: `${i * 100 + 500}ms` }}
              />
            ))}
          </div>
        )}
      </div>

      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gray-300 to-transparent dark:from-slate-600 dark:to-transparent" />
      )}
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
      {/* Gradient blend from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-gray-50/50 to-gray-50 dark:from-slate-800 dark:via-slate-900/50 dark:to-slate-900" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, powerful workflow
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Three easy steps to building better habits and staying productive
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
