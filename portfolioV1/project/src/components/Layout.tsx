import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}

