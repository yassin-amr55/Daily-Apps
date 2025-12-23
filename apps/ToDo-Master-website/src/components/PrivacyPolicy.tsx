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
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="text-center mb-8">
          <div className="mb-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-orange-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-orange-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to the website
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-blue-600 dark:text-orange-500 mb-2">To-Do Master</h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">Privacy Policy</h2>
        </header>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
          <div className="section">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-orange-500">1. Introduction</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Welcome to To-Do Master ("we," "us," or "our"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile and web application (the "App").
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              To-Do Master is designed to help you manage your tasks and to-do lists efficiently. We prioritize your privacy and do not collect personal data unless necessary for the app's functionality.
            </p>
          </div>

          <div className="section">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-orange-500">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">2.1 Information You Provide</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We do not require you to create an account or provide personal information to use To-Do Master. All your to-do items, categories, and settings are stored locally on your device.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">2.2 Automatically Collected Information</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To improve your experience, we may collect anonymous usage statistics through the app's analytics features. This may include:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
              <li>App usage patterns (e.g., which features you use most)</li>
              <li>Device information (e.g., operating system, app version)</li>
              <li>Crash reports to help us fix issues</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              This information is collected anonymously and cannot be used to identify you personally.
            </p>
          </div>

          <div className="section">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-orange-500">3. How We Use Your Information</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
              <li>Provide and maintain the App's functionality</li>
              <li>Improve the App's performance and user experience</li>
              <li>Fix bugs and technical issues</li>
              <li>Analyze usage trends to enhance features</li>
            </ul>
          </div>

          <div className="section">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-orange-500">4. Data Sharing and Disclosure</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties. Your data remains on your device and is not shared with us or any other entities unless:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
              <li>You explicitly choose to share it (e.g., exporting data)</li>
              <li>Required by law or to protect our rights</li>
              <li>We use third-party services for analytics, which collect anonymous data</li>
            </ul>
          </div>

          <div className="section">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-orange-500">5. Data Security</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We take reasonable measures to protect your information. Since your data is stored locally on your device, its security depends on your device's security practices. We recommend using strong passwords and keeping your device updated.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              For any data transmitted to our servers (e.g., crash reports), we use industry-standard encryption and security protocols.
            </p>
          </div>

          <div className="section">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-orange-500">6. Your Rights and Choices</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              You have control over your data:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
              <li><strong>Access:</strong> You can view all your data within the App</li>
              <li><strong>Delete:</strong> You can delete your data at any time through the App's settings</li>
              <li><strong>Export:</strong> Export your data for backup or transfer</li>
              <li><strong>Opt-out:</strong> Disable analytics in the App's settings</li>
            </ul>
          </div>

          <div className="section">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-orange-500">7. Children's Privacy</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To-Do Master is not intended for children under 6. We do not knowingly collect personal information from children under 6. If we become aware that we have collected such information, we will take steps to delete it.
            </p>
          </div>

          <div className="section">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-orange-500">8. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </div>

          <div className="section">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-orange-500">9. Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy or our practices, please contact us at:
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mt-4">
              <p className="text-gray-700 dark:text-gray-300"><strong>Email:</strong> todomaster.todo@gmail.com</p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-8 text-gray-500 dark:text-gray-400">
          <p>&copy; 2025 To-Do Master. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
