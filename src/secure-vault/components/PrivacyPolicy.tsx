import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => {
    // Apply dark mode if needed
    const isDark = document.body.classList.contains('dark');
    if (isDark) {
      document.body.classList.add('dark');
    }
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="mb-8">
            <Link
              to="/SecureVault"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 text-white rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to SecureVault
            </Link>
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 bg-clip-text text-transparent">
              SecureVault
            </h1>
            <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300">Privacy Policy</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Effective Date: December 4, 2025 | Last Updated: December 4, 2025
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 space-y-12">
          
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              <strong>Privacy First:</strong> SecureVault is designed with your privacy as the top priority. All your data is stored locally on your device and is never transmitted to any server or third party.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 bg-clip-text text-transparent border-b border-gray-200 dark:border-gray-700 pb-3">
              1. Information Collection and Use
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              <p>SecureVault does NOT collect, transmit, or share any personal information. Specifically:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>No Account Required:</strong> The app does not require you to create an account or provide any personal information.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>No Data Transmission:</strong> Your passwords, emails, usernames, and PINs are stored exclusively on your device.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>No Analytics:</strong> We do not use any analytics services to track your usage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>No Advertising:</strong> The app contains no advertisements or tracking pixels.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 bg-clip-text text-transparent border-b border-gray-200 dark:border-gray-700 pb-3">
              2. Data Storage
            </h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                All data stored by SecureVault remains on your device:
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Local Storage Only:</strong> All credentials are encrypted and stored in your device's local storage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Encryption:</strong> Your data is protected using AES-256-GCM encryption with a master key derived from your PIN.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>No Cloud Backup:</strong> The app does not automatically back up your data to any cloud service.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Export Control:</strong> You have full control over data export through the app's export feature.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 bg-clip-text text-transparent border-b border-gray-200 dark:border-gray-700 pb-3">
              3. Data Security
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>We take your security seriously:</p>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>All sensitive data is encrypted using industry-standard AES-256-GCM encryption.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Your PIN is hashed using SHA-256 and never stored in plain text.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>The encryption master key is derived from your PIN using PBKDF2 with 100,000 iterations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Data is only decrypted when you unlock the app with your PIN.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 bg-clip-text text-transparent border-b border-gray-200 dark:border-gray-700 pb-3">
              4. Your Rights
            </h2>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-medium">
                You have complete control over your data:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong>Access:</strong> View all your stored data within the app at any time
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong>Export:</strong> Export all your data to a JSON file
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong>Delete:</strong> Delete individual items or clear all data
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong>Portability:</strong> Your exported data is in standard JSON format
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 bg-clip-text text-transparent border-b border-gray-200 dark:border-gray-700 pb-3">
              5. Contact Us
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                If you have any questions about this Privacy Policy or SecureVault's privacy practices, please contact us:
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-900 dark:text-white">Email:</span>
                    <a href="mailto:todomaster.todo@gmail.com" className="text-blue-600 dark:text-orange-500 hover:underline font-medium">
                      todomaster.todo@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-900 dark:text-white">Developer:</span>
                    <span>DailyApps</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              <strong>Summary:</strong> SecureVault is a completely offline password manager. Your data never leaves your device, we don't collect any information about you, and we don't use any third-party services. Your privacy is 100% protected.
            </p>
          </div>

        </div>

        {/* Footer */}
        <footer className="text-center mt-16 space-y-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            &copy; 2025 SecureVault. All rights reserved.
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            Built with privacy in mind • Designed for security
          </p>
        </footer>
      </div>
    </div>
  );
}