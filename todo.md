# Steps to Merge ToDo Master Website into Daily Apps

## Prerequisites
The ToDo Master website uses **TypeScript + Tailwind CSS**, while Daily Apps uses **JavaScript + vanilla CSS**. We need to set up both to work together.

## 1. Install TypeScript Support
```bash
# Install TypeScript and related dependencies
npm install -D typescript @types/react @types/react-dom @types/node
npm install -D @vitejs/plugin-react-swc

# Create tsconfig.json
npx tsc --init
```

## 2. Install and Configure Tailwind CSS
```bash
# Install Tailwind (it's already installed, but make sure it's configured)
npm install -D tailwindcss postcss autoprefixer

# Update tailwind.config.js to include ToDo Master files
```

Update `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Add tsx support
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 3. Update Vite Config for TypeScript
Edit `vite.config.js`:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Optional: for cleaner imports
    },
  },
})
```

## 4. Copy ToDo Master Files
```bash
# Create the todo-master folder structure
mkdir -p src/todo-master/components
mkdir -p src/todo-master/assets

# Copy all TypeScript components (keep .tsx extension)
cp apps/ToDo-Master-website/src/components/* src/todo-master/components/

# Copy the main App.tsx (rename to avoid conflicts)
cp apps/ToDo-Master-website/src/App.tsx src/todo-master/TodoMasterApp.tsx

# Copy CSS and assets
cp apps/ToDo-Master-website/src/index.css src/todo-master/todo-master.css
cp -r apps/ToDo-Master-website/src/assets/* src/todo-master/assets/
```

## 5. Copy Public Assets
```bash
# Copy all public assets (screenshots, icons, etc.)
cp -r apps/ToDo-Master-website/public/* public/
```

## 6. Install Missing Dependencies
Check `apps/ToDo-Master-website/package.json` and install missing dependencies:
```bash
# Common dependencies from ToDo Master
npm install lucide-react  # For icons
npm install clsx          # For conditional classes (if used)
# Add any other dependencies found in ToDo Master's package.json
```

## 7. Update Main CSS to Include Tailwind
Edit `src/index.css` to include Tailwind directives at the top:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Your existing CSS below */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* ... rest of your existing CSS */
}
```

## 8. Create TypeScript ToDo Master App Component
Edit `src/todo-master/TodoMasterApp.tsx`:

```tsx
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import LoadingScreen from './components/LoadingScreen';
import AnimatedBackground from './components/AnimatedBackground';
import './todo-master.css';

interface TodoMasterAppProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

function HomePage({ theme, toggleTheme }: TodoMasterAppProps) {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Features />
      <Screenshots />
      <HowItWorks />
      <Footer />
    </div>
  );
}

function TodoMasterApp({ theme, toggleTheme }: TodoMasterAppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload images
    const imageUrls = [
      '/assets/screenshots/screenshot1 tilted.png',
      '/assets/screenshots/screenshot1.png',
      '/assets/screenshots/screenshot2.png',
      '/assets/screenshots/screenshot5.png',
      '/assets/screenshots/screenshot4.png'
    ];

    const imagePromises = imageUrls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = reject;
        img.src = url;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setTimeout(() => setIsLoading(false), 1200);
      })
      .catch(() => {
        setTimeout(() => setIsLoading(false), 1500);
      });
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage theme={theme} toggleTheme={toggleTheme} />} />
      <Route path="/pp" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default TodoMasterApp;
```

## 9. Update Main App.jsx (Keep as JavaScript)
Edit `src/App.jsx`:

```jsx
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import AppsShowcase from './components/AppsShowcase'
import About from './components/About'
import Footer from './components/Footer'
import TodoMasterApp from './todo-master/TodoMasterApp' // Import TypeScript component
import './App.css'

// Home page component
function HomePage({ theme, toggleTheme }) {
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <AppsShowcase />
      <About />
      <Footer />
    </>
  )
}

function SecureVaultPage() {
  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>SecureVault</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px' }}>
        Keep your passwords safe with local encryption and easy access.
      </p>
      <button 
        onClick={() => window.location.href = '/'}
        style={{
          padding: '1rem 2rem',
          background: 'white',
          border: 'none',
          borderRadius: '50px',
          color: '#11998e',
          fontSize: '1rem',
          cursor: 'pointer',
          fontWeight: '600'
        }}
      >
        ← Back to Daily Apps
      </button>
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <Router>
      <div className={`app ${theme}`}>
        <Routes>
          <Route path="/" element={<HomePage theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/ToDo-Master-website/*" element={<TodoMasterApp theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/SecureVault" element={<SecureVaultPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
```

## 10. Handle Component Name Conflicts
Since both projects have components with same names, rename ToDo Master components:

```bash
# In src/todo-master/components/ folder:
mv Header.tsx TodoHeader.tsx
mv Footer.tsx TodoFooter.tsx
mv Hero.tsx TodoHero.tsx
# Update imports in TodoMasterApp.tsx accordingly
```

## 11. Create tsconfig.json
Create `tsconfig.json` in project root:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## 12. Test the Integration
1. Run `npm run dev`
2. Check for TypeScript compilation errors
3. Verify Tailwind classes work in ToDo Master components
4. Test navigation between Daily Apps (vanilla CSS) and ToDo Master (Tailwind)
5. Ensure theme switching works across both apps

## 13. Potential Issues & Solutions

### CSS Conflicts
- Tailwind's reset might affect your vanilla CSS components
- Solution: Use CSS modules or scope your vanilla CSS

### TypeScript Errors
- Some components might have type errors
- Solution: Add proper TypeScript types or use `// @ts-ignore` temporarily

### Build Issues
- Mixed JS/TS might cause build problems
- Solution: Ensure Vite config supports both

## Notes:
- ✅ Daily Apps components stay as JavaScript + vanilla CSS
- ✅ ToDo Master components stay as TypeScript + Tailwind
- ✅ Both work together in the same project
- ✅ Shared theme system works across both
- ✅ Tailwind only affects ToDo Master components (scoped)
- ✅ Your existing Daily Apps styling is preserved