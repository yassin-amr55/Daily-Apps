import { Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const PlayStoreIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
    </svg>
  );

  const handlePrivacyClick = () => {
    navigate('/SecureVault/pp');
  };

  const handleBackToDaily = () => {
    navigate('/');
  };

  return (
    <footer className="bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/assets/SecureVault assets/icon.png" alt="SecureVault Logo" className="w-12 h-12 rounded-full shadow-lg" />
              <div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">SecureVault</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Secure your digital life</div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Bank-level encryption for your passwords, emails, and sensitive data. Store everything securely on your device.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={handleBackToDaily}
                className="block text-left text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                ← Back to Daily Apps
              </button>
              <a href="#features" className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Features
              </a>
              <a href="#screenshots" className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Screenshots
              </a>
              <button
                onClick={handlePrivacyClick}
                className="block text-left text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Get the App</h3>
            <a
              href="https://play.google.com/store/apps/details?id=com.dailyapps.securevault"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <PlayStoreIcon />
              Get it on Play Store
            </a>

            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/daily.app.s/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://x.com/daily_app_s"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="X"
              >
                <svg
                  className="w-5 h-5 text-gray-700 dark:text-gray-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <g strokeLinecap="round" strokeLinejoin="round" fill="none">
                    <path d="M6 5 L18 17" stroke="rgba(0,0,0,0.65)" strokeWidth="4" />
                    <path d="M6 19 L18 7" stroke="rgba(0,0,0,0.65)" strokeWidth="4" />
                    <path d="M6 5 L18 17" stroke="currentColor" strokeWidth="2.2" />
                    <path d="M6 19 L18 7" stroke="currentColor" strokeWidth="2.2" />
                  </g>
                </svg>
              </a>
              <a
                href="mailto:todomaster.todo@gmail.com"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700 text-center text-gray-600 dark:text-gray-400 text-sm">
          © 2025 SecureVault. All rights reserved.
        </div>
      </div>
    </footer>
  );
}