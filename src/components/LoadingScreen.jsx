import { useEffect, useState } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 8;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      {/* Animated background blobs */}
      <div className="loading-background">
        <div className="loading-blob-1" />
        <div className="loading-blob-2" />
        <div className="loading-blob-3" />
      </div>

      <div className="loading-content">
        <div className="loading-icon">
          {/* Daily Apps Logo/Icon */}
          <div className="loading-logo">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m-6 4h6m-6 4h6" />
            </svg>
          </div>
        </div>
        
        <h1 className="loading-title">
          Daily Apps
        </h1>
        <p className="loading-subtitle">Your productivity companion</p>
        
        <div className="loading-progress-container">
          <div 
            className="loading-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="loading-percentage">Loading {progress}%</p>
      </div>
    </div>
  );
}