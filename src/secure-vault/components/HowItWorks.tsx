import { Download, Shield, Key, Lock } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Download,
      title: "Download & Install",
      description: "Get SecureVault from the Play Store and install it on your Android device."
    },
    {
      icon: Lock,
      title: "Set Your PIN",
      description: "Create a secure 4 or 6-digit PIN to protect your vault. This PIN encrypts all your data."
    },
    {
      icon: Key,
      title: "Add Your Data",
      description: "Store passwords, emails, usernames, and PINs in organized categories with encryption."
    },
    {
      icon: Shield,
      title: "Stay Secure",
      description: "Your data is encrypted with AES-256 and stored locally. Only you can access it with your PIN."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How SecureVault Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get started with SecureVault in just a few simple steps and enjoy peace of mind with your digital security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 dark:from-orange-500 dark:to-red-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-2 border-blue-500 dark:border-orange-500 flex items-center justify-center">
                  <span className="text-sm font-bold text-blue-600 dark:text-orange-500">{index + 1}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 dark:bg-slate-800 rounded-full">
            <Shield className="w-5 h-5 text-blue-600 dark:text-orange-500" />
            <span className="text-blue-800 dark:text-orange-400 font-medium">
              100% offline • No data collection • Bank-level encryption
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}