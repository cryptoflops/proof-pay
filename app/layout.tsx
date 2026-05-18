import type { Metadata } from 'next';
import { Epilogue, Space_Grotesk } from 'next/font/google';
import ClientWrapper from '@/components/ClientWrapper';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';
import './globals.css';

const epilogue = Epilogue({ subsets: ['latin'], variable: '--font-epilogue' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'ProofPay Landing Page',
  description: 'Trustless Payments, Proven Security.',
  other: {
    'talentapp:project_verification': 'a44b60e03f561c1e74bcee03a9a91ac60b249c6889bd5707023b839e8e036e565c9afc9f58070cbc8edd3a9812994e3e4f43350ab24e1afd7d7612baaab0cd1f',
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
            <Image src="/logo.png" alt="ProofPay Logo" width={32} height={32} className="rounded-md object-contain" />
            <span className="text-xl font-black tracking-tighter text-secondary-fixed uppercase">ProofPay</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link className="font-epilogue tracking-tight font-bold text-secondary-fixed hover:text-secondary transition-colors active:scale-95 transition-transform" href="/#how-it-works">How It Works</Link>
            <Link className="font-epilogue tracking-tight font-bold text-white/60 hover:text-secondary-fixed transition-colors active:scale-95 transition-transform" href="/#security">Security</Link>
          </nav>
          <Link href="/app" className="bg-secondary-fixed text-on-secondary-fixed px-4 py-2 font-label-caps text-label-caps hover:bg-secondary transition-all active:scale-95 text-center flex items-center justify-center">Launch App</Link>
        </header>

        <ClientWrapper>{children}</ClientWrapper>

        <footer className="w-full py-12 px-6 flex flex-col items-center gap-6 bg-[#052219] border-t border-white/5 full-width mt-20 relative z-10">
          <div className="flex justify-center mb-2">
            <ShieldCheck className="text-secondary-fixed w-10 h-10" />
          </div>
          <nav className="flex gap-6">
            <Link className="font-epilogue text-xs uppercase tracking-widest text-secondary-fixed hover:text-secondary-fixed transition-colors opacity-100 font-bold" href="/#security">Security</Link>
            <a className="font-epilogue text-xs uppercase tracking-widest text-white/40 hover:text-secondary-fixed transition-colors opacity-100 font-bold" href="https://celoscan.io/address/0xc496A211dB0ef052663017aF2a3e14296F012faD" target="_blank" rel="noopener noreferrer">Verified Contract</a>
            <a className="font-epilogue text-xs uppercase tracking-widest text-white/40 hover:text-secondary-fixed transition-colors opacity-100 font-bold" href="https://github.com/cryptoflops/proof-pay/blob/main/README.md" target="_blank" rel="noopener noreferrer">Docs</a>
          </nav>
          <p className="font-epilogue text-xs uppercase tracking-widest text-white/40 font-bold">© 2026 ProofPay. Secured by Celo.</p>
        </footer>
      </body>
    </html>
  );
}