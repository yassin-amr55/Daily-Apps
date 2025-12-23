import { useEffect, useState, useRef } from 'react';

export default function PhoneMockup() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!phoneRef.current) return;

      const rect = phoneRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;

      const progress = Math.max(0, Math.min(1, 1 - (elementTop / windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translateY = scrollProgress * -30;
  const scale = 1 + scrollProgress * 0.05;

  return (
    <div
      ref={phoneRef}
      className="relative"
      style={{
        transform: `translateY(${translateY}px) scale(${scale})`,
        transition: 'transform 0.1s cubic-bezier(0.22, 0.9, 0.2, 1)',
      }}
    >
      <img 
        src="/secure-vault-icon.png" 
        alt="SecureVault App Screenshot" 
        className="w-full max-w-md mx-auto drop-shadow-2xl rounded-3xl"
      />
    </div>
  );
}