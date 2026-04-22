import AppKitButton from '@/components/AppKitButton';

export default function Home() {
  return (
    <main className="flex-grow pt-24 px-container-padding max-w-7xl mx-auto w-full relative">
      <section className="py-20 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="flex-1 space-y-8 ml-asymmetric-offset reveal-item">
          <h1 className="font-display-xl text-display-xl text-on-background leading-tight max-w-2xl">
            Trustless Payments, <br/>
            <span className="text-secondary-fixed">Proven Security.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            The absolute security required for escrow services combined with the cutting-edge speed of the Celo blockchain.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="bg-secondary-fixed text-on-secondary-fixed px-8 py-4 font-label-caps text-label-caps hover:bg-secondary transition-colors relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12"></div>
              <span className="relative z-10">Get Started</span>
            </button>
            <button className="glass-panel px-8 py-4 font-label-caps text-label-caps text-on-background hover:bg-white/5 transition-colors">
              Documentation
            </button>
          </div>
          <div className="pt-4">
             <AppKitButton />
          </div>
        </div>

        <div className="flex-1 w-full max-w-md relative reveal-item pl-asymmetric-offset md:pl-0">
          <div className="absolute -inset-4 bg-secondary-fixed/20 blur-3xl rounded-full z-0"></div>
          <div className="glass-panel p-8 rounded-none relative z-10 border-t-secondary-fixed/50">
            <div className="flex justify-between items-start mb-8">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant">check_circle</span>
              <span className="bg-primary-container text-secondary-fixed px-3 py-1 font-label-caps text-label-caps border border-secondary-fixed/30 transform translate-x-4 -translate-y-4 shadow-[4px_4px_0px_0px_rgba(183,245,105,0.2)]">SECURED</span>
            </div>
            <div className="space-y-6">
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Contract Status</p>
                <p className="font-headline-md text-headline-md text-secondary-fixed">Locked &amp; Verified</p>
              </div>
              <div className="h-px w-full bg-white/10"></div>
              <div className="flex justify-between">
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Amount</p>
                  <p className="font-body-lg text-body-lg text-on-background">500 cUSD</p>
                </div>
                <div className="text-right">
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Network</p>
                  <p className="font-body-lg text-body-lg text-on-background">Celo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <h2 className="font-headline-lg text-headline-lg text-on-background mb-12 reveal-item ml-asymmetric-offset">Digital Fort Knox Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="glass-panel p-8 md:col-span-2 relative overflow-hidden group reveal-item ml-asymmetric-offset">
            <div className="absolute top-0 right-0 p-4">
              <span className="material-symbols-outlined text-4xl text-secondary-fixed/50 group-hover:text-secondary-fixed transition-colors">account_balance_wallet</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-background mb-4">Non-Custodial Escrow</h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Payments are securely held in the immutable ProofPayEscrow smart contract. We never hold your funds. Transparency through cryptography.
            </p>
          </div>

          <div className="glass-panel p-8 relative overflow-hidden group reveal-item">
            <div className="absolute top-0 right-0 p-4">
              <span className="material-symbols-outlined text-4xl text-secondary-fixed/50 group-hover:text-secondary-fixed transition-colors">gavel</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-background mb-4">7-Day Dispute</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Built-in security for both clients and providers with a rigid dispute window before automated release.
            </p>
          </div>

          <div className="glass-panel p-8 md:col-span-3 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group reveal-item mr-asymmetric-offset">
            <div className="flex-1">
              <h3 className="font-headline-md text-headline-md text-on-background mb-4">Mobile-First Celo Native</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                Designed explicitly for the Celo MiniPay environment. One-tap actions, minimal gas fees, and a seamless mobile experience for rapid transactions.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="material-symbols-outlined text-6xl text-secondary-fixed">phone_iphone</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 flex justify-center reveal-item">
        <div className="w-full max-w-md ml-asymmetric-offset">
          <h3 className="font-headline-md text-headline-md text-on-background mb-8">Test the Protocol</h3>
          <div className="space-y-6">
            <div className="relative">
              <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2">RECIPIENT ADDRESS</label>
              <input className="w-full bg-transparent border-0 border-b border-white/20 text-on-background font-body-md px-0 py-2 focus:ring-0 focus:border-secondary-fixed transition-colors placeholder-white/20" placeholder="0x..." type="text"/>
            </div>
            <div className="relative">
              <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2">AMOUNT (cUSD)</label>
              <input className="w-full bg-transparent border-0 border-b border-white/20 text-on-background font-body-md px-0 py-2 focus:ring-0 focus:border-secondary-fixed transition-colors placeholder-white/20" placeholder="0.00" type="number"/>
            </div>
            <button className="w-full bg-secondary-fixed text-on-secondary-fixed py-4 font-label-caps text-label-caps hover:bg-secondary transition-colors mt-4">
              Initialize Escrow
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
