import { Shield, Lock, Key, Eye, Download, Smartphone } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "AES-256-GCM encryption with PBKDF2 key derivation ensures your data is protected with military-grade security."
    },
    {
      icon: Lock,
      title: "PIN Protection",
      description: "Secure your vault with a 4 or 6-digit PIN. Your PIN is hashed and salted, making it impossible to reverse-engineer."
    },
    {
      icon: Key,
      title: "Password Generator",
      description: "Generate strong, random passwords with customizable length and character sets. Never use weak passwords again."
    },
    {
      icon: Eye,
      title: "Multiple Data Types",
      description: "Store passwords, email accounts, usernames, and PINs all in one secure location with organized categories."
    },
    {
      icon: Download,
      title: "Export & Import",
      description: "Backup your encrypted data to JSON files. Import and export your vault data while maintaining security."
    },
    {
      icon: Smartphone,
      title: "Offline First",
      description: "All data is stored locally on your device. No internet required, no servers, no data breaches possible."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Security Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            SecureVault combines advanced encryption with user-friendly design to keep your sensitive information safe and accessible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 dark:from-orange-500 dark:to-red-500 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}