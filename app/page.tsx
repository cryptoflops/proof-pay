'use client';

import { useState, useEffect } from 'react';
import AppKitButton from '@/components/AppKitButton';
import { SUPPORTED_TOKEN } from '@/contracts';
import { trackEvent } from '@/utils/analytics';
import { useCreateEscrow, useEscrowDetails } from '@/hooks/useEscrow';
import { useAccount } from 'wagmi';

export default function Home() {
  const { isConnected, address } = useAccount();
  const { createEscrow, isPending: isCreating, isSuccess: isCreateSuccess } = useCreateEscrow();

  const [recipient, setRecipient] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [escrowId, setEscrowId] = useState<string>('');

  // Auto-fill from URL for "Share Link" feature
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const reqId = params.get('request_id');
      const reqAmount = params.get('amount');
      if (reqId) setRecipient(reqId);
      if (reqAmount) setAmount(reqAmount);
    }
  }, []);

  const handleCreate = () => {
    if (!recipient || !amount) return;
    trackEvent('escrow_created', { amount, token: SUPPORTED_TOKEN.symbol });
    createEscrow(recipient as `0x${string}`, amount);
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined' && isConnected) {
      const url = `${window.location.origin}?request_id=${address}&amount=${amount}`;
      navigator.clipboard.writeText(url);
      trackEvent('escrow_link_copied');
      alert('Payment link copied to clipboard!');
    }
  };

  return (
    <main className="flex-grow pt-24 px-container-padding max-w-7xl mx-auto w-full relative">
      <section className="py-12 md:py-20 flex flex-col items-center justify-between gap-12 relative z-10">
        <div className="flex-1 w-full max-w-md relative reveal-item md:pl-0">
          <div className="absolute -inset-4 bg-secondary-fixed/20 blur-3xl rounded-full z-0"></div>
          <div className="glass-panel p-8 rounded-none relative z-10 border-t-secondary-fixed/50 flex flex-col gap-6">
            <div className="flex justify-between items-start mb-2">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant">gavel</span>
              <span className="bg-primary-container text-secondary-fixed px-3 py-1 font-label-caps text-label-caps border border-secondary-fixed/30 transform translate-x-4 -translate-y-4 shadow-[4px_4px_0px_0px_rgba(183,245,105,0.2)]">ESCROW</span>
            </div>
            
            <h1 className="font-display-sm text-display-sm text-on-background leading-tight">
              Secure <span className="text-secondary-fixed">Payment</span>
            </h1>

            {isCreateSuccess ? (
              <div className="flex flex-col gap-4 py-8 items-center text-center">
                <span className="material-symbols-outlined text-secondary-fixed text-6xl">check_circle</span>
                <p className="font-headline-md text-secondary-fixed">Escrow Created!</p>
                
                {/* Timeline State */}
                <div className="w-full flex justify-between items-center relative mt-6 before:absolute before:top-1/2 before:-translate-y-1/2 before:w-full before:h-1 before:bg-white/10 before:-z-10">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-secondary-fixed shadow-[0_0_10px_rgba(183,245,105,0.5)]"></div>
                    <span className="text-xs text-on-surface-variant font-label-caps uppercase">Created</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/20"></div>
                    <span className="text-xs text-on-surface-variant font-label-caps uppercase">Funded</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/20"></div>
                    <span className="text-xs text-on-surface-variant font-label-caps uppercase">Completed</span>
                  </div>
                </div>

                <button onClick={() => window.location.reload()} className="mt-8 text-on-surface-variant underline text-sm hover:text-white">
                  Create another
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="relative">
                  <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2">RECIPIENT ADDRESS</label>
                  <input 
                    className="w-full bg-transparent border-0 border-b border-white/20 text-on-background font-body-md px-0 py-2 focus:ring-0 focus:border-secondary-fixed transition-colors placeholder-white/20" 
                    placeholder="0x..." 
                    type="text"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2">AMOUNT ({SUPPORTED_TOKEN.symbol})</label>
                  <input 
                    className="w-full bg-transparent border-0 border-b border-white/20 text-on-background font-body-md px-0 py-2 focus:ring-0 focus:border-secondary-fixed transition-colors placeholder-white/20" 
                    placeholder="0.00" 
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                
                <div className="pt-4 space-y-4">
                  {!isConnected ? (
                     <div className="flex justify-center"><AppKitButton /></div>
                  ) : (
                    <>
                      <button 
                        onClick={handleCreate}
                        disabled={isCreating || !recipient || !amount}
                        className="w-full bg-secondary-fixed text-on-secondary-fixed py-4 font-label-caps text-label-caps hover:bg-secondary transition-colors disabled:opacity-50 flex justify-center items-center gap-2"
                      >
                        {isCreating ? <span className="material-symbols-outlined animate-spin">sync</span> : null}
                        {isCreating ? 'Creating...' : 'Initialize Escrow'}
                      </button>
                      <button 
                        onClick={handleCopyLink}
                        className="w-full glass-panel py-3 font-label-caps text-label-caps hover:bg-white/5 transition-colors flex justify-center items-center gap-2"
                      >
                        <span className="material-symbols-outlined text-[18px]">link</span>
                        Share Payment Request Link
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 relative z-10 text-center max-w-2xl mx-auto space-y-4">
        <h2 className="font-headline-md text-headline-md text-on-background mb-4">Non-Custodial Escrow</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Payments are securely held in the immutable ProofPay smart contract. We never hold your funds. Transparency through cryptography.
        </p>
      </section>

    </main>
  );
}
