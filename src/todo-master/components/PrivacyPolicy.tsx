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
              to="/ToDo-Master"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 text-white rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to ToDo Master
            </Link>
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 bg-clip-text text-transparent">
              ToDo Master
            </h1>
            <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300">Privacy Policy</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Effective Date: January 1, 2025 | Last Updated: January 1, 2025
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 space-y-12">
          
          {/* Section 1 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 bg-clip-text text-transparent border-b border-gray-200 dark:border-gray-700 pb-3">
              1. Introduction
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              <p>
                Welcome to ToDo Master ("we," "us," or "our"). We are committed to protecting your privacy and ensuring transparency in how we handle your information. This Privacy Policy explains our practices regarding the collection, use, disclosure, and safeguarding of your information when you use our mobile and web application (the "App").
              </p>
              <p>
                ToDo Master is designed to help you build consistent routines and manage your tasks efficiently. We prioritize your privacy by design and do not collect personal data unless absolutely necessary for the app's core functionality.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 bg-clip-text text-transparent border-b border-gray-200 dark:border-gray-700 pb-3">
              2. Information We Collect
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">2.1 Information You Provide</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We do not require you to create an account or provide personal information to use ToDo Master. All your tasks, routines, voice notes, and settings are stored locally on your device and remain under your complete control.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">2.2 Automatically Collected Information</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  To improve your experience and fix issues, we may collect anonymous usage statistics. This information is completely anonymized and includes:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 dark:bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>App usage patterns and feature interactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 dark:bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Device information (operating system, app version)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 dark:bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Crash reports to help us identify and fix technical issues</span>
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-medium">
                  This information cannot be used to identify you personally and is used solely for app improvement.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 bg-clip-text text-transparent border-b border-gray-200 dark:border-gray-700 pb-3">
              3. How We Use Your Information
            </h2>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We use the collected information exclusively to:
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Provide and maintain the App's core functionality</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Improve the App's performance and user experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Identify and resolve bugs and technical issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Analyze usage trends to develop new features</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 bg-clip-text text-transparent border-b border-gray-200 dark:border-gray-700 pb-3">
              4. Data Sharing and Disclosure
            </h2>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-medium">
                <strong>We do not sell, trade, or otherwise transfer your personal information to third parties.</strong> Your data remains on your device and is not shared with us or any other entities except in these limited circumstances:
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>You explicitly choose to share or export your data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Required by law or to protect our legal rights</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Anonymous analytics data processed by trusted third-party services</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 bg-clip-text text-transparent border-b border-gray-200 dark:border-gray-700 pb-3">
              5. Data Security
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                We implement industry-standard security measures to protect your information. Since your personal data is stored locally on your device, its security primarily depends on your device's security practices.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Security Recommendations:</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Use strong passwords and biometric authentication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Keep your device and the app updated</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Regularly backup your data</span>
                  </li>
                </ul>
              </div>
              <p>
                For any data transmitted to our servers (such as crash reports), we use industry-standard encryption and secure protocols to protect your information in transit and at rest.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 bg-clip-text text-transparent border-b border-gray-200 dark:border-gray-700 pb-3">
              6. Your Rights and Choices
            </h2>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-medium">
                You have complete control over your data with the following rights:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong>Access:</strong> View all your data within the App
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong>Delete:</strong> Remove your data at any time through settings
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong>Export:</strong> Backup or transfer your data
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong>Opt-out:</strong> Disable analytics in App settings
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 bg-clip-text text-transparent border-b border-gray-200 dark:border-gray-700 pb-3">
              7. Children's Privacy
            </h2>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                ToDo Master is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take immediate steps to delete it and terminate the account if applicable.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 bg-clip-text text-transparent border-b border-gray-200 dark:border-gray-700 pb-3">
              8. Changes to This Privacy Policy
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                We may update this Privacy Policy periodically to reflect changes in our practices or for legal, operational, or regulatory reasons. When we make changes, we will:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Update the "Last Updated" date at the top of this policy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Notify you through the App or other appropriate means</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Provide a reasonable notice period for significant changes</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 bg-clip-text text-transparent border-b border-gray-200 dark:border-gray-700 pb-3">
              9. Contact Us
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please don't hesitate to contact us:
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
                    <span className="font-semibold text-gray-900 dark:text-white">Response Time:</span>
                    <span>We typically respond within 48 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="text-center mt-16 space-y-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            &copy; 2025 ToDo Master. All rights reserved.
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            Built with privacy in mind • Designed for productivity
          </p>
        </footer>
      </div>
    </div>
  );
}
