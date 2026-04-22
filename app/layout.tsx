import type { Metadata } from 'next';
import { Epilogue, Space_Grotesk } from 'next/font/google';
import ClientWrapper from '@/components/ClientWrapper';
import Link from 'next/link';
import './globals.css';

const epilogue = Epilogue({ subsets: ['latin'], variable: '--font-epilogue' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'ProofPay Landing Page',
  description: 'Trustless Payments, Proven Security.',
  other: {
    'talentapp:project_verification': '2a8f74653e33a535639514d4b4b623692c63085536770b7a9688392ff64bd776eef2d6c868751f3b7f7bf9a5dcc3f2b5b4313d5acba0e40a2e049dd3a8e341e5',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${epilogue.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-background min-h-screen flex flex-col font-body-md text-on-background antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
        
        <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 h-16 bg-[#052219]/80 backdrop-blur-xl border-b border-white/10 no-shadows">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary-fixed">shield_lock</span>
            <span className="text-xl font-black tracking-tighter text-secondary-fixed uppercase">ProofPay</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link className="font-epilogue tracking-tight font-bold text-secondary-fixed hover:text-secondary transition-colors active:scale-95 transition-transform" href="#">Features</Link>
            <Link className="font-epilogue tracking-tight font-bold text-white/60 hover:text-secondary-fixed transition-colors active:scale-95 transition-transform" href="#">Security</Link>
          </nav>
          <button className="bg-secondary-fixed text-on-secondary-fixed px-4 py-2 font-label-caps text-label-caps hover:bg-secondary transition-colors">Launch App</button>
        </header>

        <ClientWrapper>{children}</ClientWrapper>

        <footer className="w-full py-12 px-6 flex flex-col items-center gap-6 bg-[#052219] border-t border-white/5 full-width mt-20 relative z-10">
          <div className="flex justify-center mb-2">
            <span className="material-symbols-outlined text-secondary-fixed text-4xl">shield_lock</span>
          </div>
          <nav className="flex gap-6">
            <Link className="font-epilogue text-xs uppercase tracking-widest text-secondary-fixed hover:text-secondary-fixed transition-colors opacity-100" href="#">Security</Link>
            <Link className="font-epilogue text-xs uppercase tracking-widest text-white/40 hover:text-secondary-fixed transition-colors opacity-100" href="#">Terms</Link>
            <Link className="font-epilogue text-xs uppercase tracking-widest text-white/40 hover:text-secondary-fixed transition-colors opacity-100" href="#">Docs</Link>
          </nav>
          <p className="font-epilogue text-xs uppercase tracking-widest text-white/40">© 2024 ProofPay. Secured by Celo.</p>
        </footer>
      </body>
    </html>
  );
}