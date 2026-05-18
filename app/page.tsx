'use client';

import Link from 'next/link';
import { Gavel, Shield, Wallet, ArrowRight, CheckCircle2, ShieldCheck, Zap, Sparkles, ExternalLink } from 'lucide-react';
import { SUPPORTED_TOKEN } from '@/contracts';

export default function LandingHome() {
  return (
    <main className="flex-grow pt-20 overflow-x-hidden relative">
      
      {/* Background visual accents */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-secondary-fixed/5 blur-[160px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#0c3c2e]/20 blur-[130px] rounded-full -z-10"></div>

      {/* Hero Section */}
      <section className="py-20 md:py-32 px-container-padding max-w-7xl mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-8 reveal-item">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-[#052219]/80 border border-secondary-fixed/30 px-4 py-1.5 rounded-full text-secondary-fixed text-xs font-label-caps uppercase tracking-widest mx-auto shadow-[0_4px_20px_rgba(183,245,105,0.1)]">
            <Sparkles size={12} className="text-secondary-fixed shrink-0" />
            <span>Built on Celo Network</span>
          </div>

          {/* Heading */}
          <h1 className="font-display-xl text-4xl md:text-6xl text-on-background leading-[1.1] tracking-tight">
            Trustless Payments, <br className="hidden md:inline" />
            <span className="text-secondary-fixed font-black">Proven Security.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            The next-generation non-custodial escrow platform on Celo. Lock stablecoins like <span className="text-white font-bold">{SUPPORTED_TOKEN.symbol}</span> safely inside immutable smart contracts. Zero third-party risk.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link 
              href="/app"
              className="w-full sm:w-auto bg-secondary-fixed text-on-secondary-fixed px-8 py-4 font-label-caps text-label-caps hover:bg-secondary transition-all active:scale-[0.98] shadow-[0_12px_30px_rgba(183,245,105,0.15)] flex items-center justify-center gap-2 tracking-wider"
            >
              <span>Launch Application</span>
              <ArrowRight size={16} />
            </Link>
            
            <a 
              href="https://celoscan.io/address/0xc496A211dB0ef052663017aF2a3e14296F012faD"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-white/10 hover:border-white/20 text-on-surface-variant hover:text-white px-8 py-4 font-label-caps text-label-caps transition-all active:scale-[0.98] flex items-center justify-center gap-2 bg-white/5"
            >
              <span>View Smart Contract</span>
              <ExternalLink size={14} className="opacity-60" />
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section (How it Works) */}
      <section id="how-it-works" className="py-20 bg-[#052219]/30 border-y border-white/5 relative z-10 px-container-padding">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="font-display-sm text-3xl font-black text-on-background">
              The Escrow <span className="text-secondary-fixed">Lifecycle</span>
            </h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              How ProofPay securely protects both buyers and sellers in 3 simple, fully automated steps on-chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Timeline line overlay on desktop */}
            <div className="hidden md:block absolute top-[68px] left-[15%] right-[15%] h-0.5 bg-white/10 -z-10"></div>

            {/* Step 1 */}
            <div className="glass-panel p-8 rounded-none border border-white/5 relative hover:border-secondary-fixed/30 transition-all group hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-full bg-primary-container border border-secondary-fixed/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(183,245,105,0.1)]">
                <Wallet className="w-6 h-6 text-secondary-fixed" />
              </div>
              <div className="space-y-3">
                <span className="text-[10px] text-secondary-fixed font-label-caps uppercase tracking-wider font-bold">Step 01</span>
                <h3 className="font-headline-md text-xl text-on-background font-bold">Deposit & Lock</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  The buyer deposits cUSD into the immutable ProofPay escrow contract. The funds are locked transparently on-chain.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="glass-panel p-8 rounded-none border border-white/5 relative hover:border-secondary-fixed/30 transition-all group hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-full bg-primary-container border border-secondary-fixed/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(183,245,105,0.1)]">
                <Gavel className="w-6 h-6 text-secondary-fixed" />
              </div>
              <div className="space-y-3">
                <span className="text-[10px] text-secondary-fixed font-label-caps uppercase tracking-wider font-bold">Step 02</span>
                <h3 className="font-headline-md text-xl text-on-background font-bold">Await Fulfilling</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  The seller provides the goods, services, or completes the required work as agreed in the transaction terms.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="glass-panel p-8 rounded-none border border-white/5 relative hover:border-secondary-fixed/30 transition-all group hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-full bg-primary-container border border-secondary-fixed/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(183,245,105,0.1)]">
                <CheckCircle2 className="w-6 h-6 text-secondary-fixed" />
              </div>
              <div className="space-y-3">
                <span className="text-[10px] text-secondary-fixed font-label-caps uppercase tracking-wider font-bold">Step 03</span>
                <h3 className="font-headline-md text-xl text-on-background font-bold">Safe Release</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Upon verification or validation of conditions, the escrow funds are automatically released directly to the seller.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Trust Signals Section */}
      <section id="security" className="py-24 px-container-padding max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Trust Cards */}
          <div className="space-y-6 relative">
            <div className="absolute -inset-4 bg-secondary-fixed/5 blur-3xl rounded-full -z-10"></div>
            
            <div className="glass-panel p-6 rounded-none border border-white/5 flex gap-4 items-start">
              <div className="bg-[#052219] p-3 rounded-none border border-secondary-fixed/20 shrink-0">
                <ShieldCheck className="w-6 h-6 text-secondary-fixed" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-label-caps">Non-Custodial Escrow</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  ProofPay does not control, manage, or hold custody of your digital assets. All transactions are handled purely by decentralized, immutable smart contract code.
                </p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-none border border-white/5 flex gap-4 items-start">
              <div className="bg-[#052219] p-3 rounded-none border border-secondary-fixed/20 shrink-0">
                <Zap className="w-6 h-6 text-secondary-fixed" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-label-caps">Ultra-Low Gas Fees</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Running on the high-speed Celo network means fees are fractions of a cent. Escrow operations will cost you less than a tenth of a penny.
                </p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-none border border-white/5 flex gap-4 items-start">
              <div className="bg-[#052219] p-3 rounded-none border border-secondary-fixed/20 shrink-0">
                <Gavel className="w-6 h-6 text-secondary-fixed" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-label-caps">0% Protocol Fees</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  No hidden margins. No cut of your transactions. ProofPay is a utility tool designed exclusively to build trusted micro-payments on Celo.
                </p>
              </div>
            </div>
          </div>

          {/* Marketing Copy */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] text-secondary-fixed font-label-caps uppercase tracking-widest font-bold">Security First</span>
              <h2 className="font-display-sm text-3xl font-black text-on-background leading-tight">
                Designed to Prevent <br />
                <span className="text-secondary-fixed">Fraud and Disputes</span>
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                By standardizing on Celo smart contracts, transaction flows are completely decentralized. Neither party can act in bad faith or run away with locked resources, providing peace of mind for freelancers, merchant checkouts, and marketplace payments.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-label-caps">Verified Celo Deployment</h4>
              <div className="bg-primary-container/80 border border-white/10 p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Contract Address</p>
                  <p className="font-mono text-xs text-secondary-fixed break-all select-all font-bold">
                    0xc496A211dB0ef052663017aF2a3e14296F012faD
                  </p>
                </div>
                <a 
                  href="https://celoscan.io/address/0xc496A211dB0ef052663017aF2a3e14296F012faD" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 text-white p-2.5 rounded-none border border-white/10 text-center shrink-0 flex items-center justify-center gap-1.5 transition-all active:scale-[0.98]"
                >
                  <span className="text-[10px] uppercase font-label-caps font-bold tracking-wider">Celoscan</span>
                  <ExternalLink size={12} className="opacity-60" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-t from-[#031410] to-[#101415] border-t border-white/5 relative z-10 text-center px-container-padding">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-display-sm text-3xl font-black text-on-background">
            Ready to secure your <span className="text-secondary-fixed">payments?</span>
          </h2>
          <p className="text-xs text-on-surface-variant max-w-lg mx-auto leading-relaxed">
            Connect your wallet to lock secure escrow transactions in seconds, or share pre-filled request links with clients.
          </p>
          <div className="pt-4">
            <Link 
              href="/app"
              className="inline-flex bg-secondary-fixed text-on-secondary-fixed px-8 py-4 font-label-caps text-label-caps hover:bg-secondary transition-all active:scale-[0.98] shadow-[0_12px_30px_rgba(183,245,105,0.15)] items-center gap-2 tracking-wider"
            >
              <span>Launch Escrow dApp</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
