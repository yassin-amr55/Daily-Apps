import { BarChart3, Bell, Mic } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: BarChart3,
    title: 'Daily Routines',
    description: 'Track your daily progress with visual indicators. Reorder tasks by drag & drop, skip days when needed, and watch your consistency grow.',
    highlights: ['Progress tracking', 'Drag & drop reorder', 'Skip day option']
  },
  {
    icon: Bell,
    title: 'Scheduled Reminders',
    description: 'Set precise dates and times for your tasks. Get notified hours before with local notifications that work even offline.',
    highlights: ['Date & time picker', 'Early reminders', 'Local notifications']
  },
  {
    icon: Mic,
    title: 'Voice Notes & Quick Add',
    description: 'Capture tasks instantly with voice recording. No typing needed—just speak your thoughts and they become actionable tasks.',
    highlights: ['Voice recording', 'Quick capture', 'Instant tasks']
  }
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = feature.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-slate-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 dark:from-orange-500 dark:to-red-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>

      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        {feature.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
        {feature.description}
      </p>

      <div className="space-y-2">
        {feature.highlights.map((highlight, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-orange-500 dark:to-red-500" />
            <span className="text-sm text-gray-700 dark:text-gray-300">{highlight}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
      {/* Gradient blend from animated background */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-gray-50/50 to-gray-50 dark:from-transparent dark:via-slate-900/50 dark:to-slate-900" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Everything you need to stay on track
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Powerful features designed to help you build and maintain healthy routines
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
