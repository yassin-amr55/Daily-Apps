import { FileText, Shield, Lock, Key, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PhoneMockup from './PhoneMockup.tsx';

export default function Hero() {
  const navigate = useNavigate();

  const PlayStoreIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
    </svg>
  );

  const handlePrivacyClick = () => {
    navigate('/SecureVault/pp');
  };

  const handleBackToDaily = () => {
    navigate('/');
  };

  return (
    <section id="download" className="relative min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ paddingTop: '80px' }}>
      {/* Gradient blend to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-gray-50/30 to-gray-50 dark:from-transparent dark:via-slate-900/30 dark:to-slate-900 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Secure your<br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 bg-clip-text text-transparent">
                  digital life
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                Bank-level encryption for your passwords, emails, and sensitive data. Store everything securely on your device with PIN protection.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 dark:from-orange-500 dark:to-red-500 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">AES-256 encryption with PIN protection</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 dark:from-orange-500 dark:to-red-500 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">Store passwords, emails, usernames & PINs</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 dark:from-orange-500 dark:to-red-500 flex items-center justify-center">
                  <Key className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">Built-in password generator</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.yourcompany.securevault"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <PlayStoreIcon />
                Get it on Play Store
              </a>
              <button
                onClick={handleBackToDaily}
                className="px-6 py-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Daily Apps
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}