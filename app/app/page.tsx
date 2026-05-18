'use client';

import { useState, useEffect } from 'react';
import AppKitButton from '@/components/AppKitButton';
import { SUPPORTED_TOKEN } from '@/contracts';
import { trackEvent } from '@/utils/analytics';
import { useCreateEscrow } from '@/hooks/useEscrow';
import { useAccount } from 'wagmi';
import Link from 'next/link';
import { Gavel, CheckCircle2, Link as LinkIcon, AlertCircle, Check, ArrowLeft, Shield, Sparkles } from 'lucide-react';

export default function AppHome() {
  const { isConnected, address } = useAccount();
  const { createEscrow, isPending: isCreating, isSuccess: isCreateSuccess } = useCreateEscrow();

  const [recipient, setRecipient] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

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
    if (!recipient || !amount || !isValidAddress(recipient)) return;
    trackEvent('escrow_created', { amount, token: SUPPORTED_TOKEN.symbol });
    createEscrow(recipient as `0x${string}`, amount);
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined' && isConnected) {
      const url = `${window.location.origin}/app?request_id=${address}&amount=${amount}`;
      navigator.clipboard.writeText(url);
      trackEvent('escrow_link_copied');
      alert('Payment link copied to clipboard!');
    }
  };

  const isValidAddress = (addr: string) => {
    return /^0x[a-fA-F0-9]{40}$/.test(addr);
  };

  const isAddressDirty = recipient.length > 0;
  const isAddressValid = isValidAddress(recipient);

  return (
    <main className="flex-grow pt-28 px-container-padding max-w-7xl mx-auto w-full relative">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-secondary-fixed/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-md mx-auto mb-16">
        <Link href="/" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors mb-6 text-sm font-label-caps uppercase tracking-wider">
          <ArrowLeft size={16} className="text-secondary-fixed" /> Back to landing page
        </Link>

        <div className="glass-panel p-8 rounded-none relative z-10 border-t-2 border-t-secondary-fixed/50 flex flex-col gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex justify-between items-start mb-2">
            <Gavel className="w-10 h-10 text-secondary-fixed" />
            <span className="bg-primary-container text-secondary-fixed px-3 py-1 font-label-caps text-label-caps border border-secondary-fixed/30 shadow-[4px_4px_0px_0px_rgba(183,245,105,0.2)] uppercase tracking-widest text-[10px]">
              ESCROW PANEL
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="font-display-sm text-display-sm text-on-background leading-tight">
              Create <span className="text-secondary-fixed">Escrow</span>
            </h1>
            <p className="text-xs text-on-surface-variant">
              Lock stablecoins in a secure, verified Celo smart contract. Funds are only released when conditions are met.
            </p>
          </div>

          {isCreateSuccess ? (
            <div className="flex flex-col gap-6 py-6 items-center text-center reveal-item">
              <CheckCircle2 className="text-secondary-fixed w-16 h-16 animate-pulse" />
              <div className="space-y-1">
                <p className="font-headline-md text-secondary-fixed text-xl font-bold">Escrow Initialized!</p>
                <p className="text-xs text-on-surface-variant">Your transaction has been submitted to the Celo network.</p>
              </div>

              {/* Progress Timeline */}
              <div className="w-full flex justify-between items-center relative mt-6 px-4 before:absolute before:top-3 before:left-4 before:right-4 before:h-0.5 before:bg-white/10 before:-z-10">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary-fixed flex items-center justify-center shadow-[0_0_15px_rgba(183,245,105,0.5)]">
                    <Check size={12} className="text-on-secondary-fixed" />
                  </div>
                  <span className="text-[10px] text-white font-bold font-label-caps uppercase">1. Created</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#1b2015] border border-white/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                  </div>
                  <span className="text-[10px] text-on-surface-variant font-label-caps uppercase">2. Awaiting Proof</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#1b2015] border border-white/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                  </div>
                  <span className="text-[10px] text-on-surface-variant font-label-caps uppercase">3. Released</span>
                </div>
              </div>

              <div className="w-full p-4 bg-primary-container/30 border border-white/5 text-left text-xs rounded-sm space-y-2 mt-4">
                <div className="flex items-center gap-2 text-secondary-fixed font-bold">
                  <Sparkles size={14} />
                  <span>Next Step: Share payment link</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed">
                  Send the payment request link to the payer. They will fund the escrow directly through their wallet.
                </p>
              </div>

              <div className="flex flex-col w-full gap-2 mt-4">
                <button
                  onClick={handleCopyLink}
                  className="w-full bg-secondary-fixed text-on-secondary-fixed py-3.5 font-label-caps text-label-caps hover:bg-secondary transition-all active:scale-[0.98] flex justify-center items-center gap-2"
                >
                  <LinkIcon size={16} />
                  Copy request Link
                </button>

                <button 
                  onClick={() => window.location.reload()} 
                  className="w-full border border-white/10 hover:border-white/20 py-3.5 text-xs font-label-caps uppercase tracking-wider transition-all hover:bg-white/5 mt-2"
                >
                  Create another Escrow
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Recipient Input */}
              <div className="relative">
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="recipient" className="font-label-caps text-label-caps text-on-surface-variant block uppercase tracking-wider text-[11px]">
                    RECIPIENT ADDRESS
                  </label>
                  {isAddressDirty && (
                    <span className={`text-[10px] font-bold ${isAddressValid ? 'text-secondary-fixed' : 'text-error'}`}>
                      {isAddressValid ? 'Valid Address' : 'Invalid Format'}
                    </span>
                  )}
                </div>
                <input 
                  id="recipient"
                  className={`w-full bg-transparent border-0 border-b ${isAddressDirty ? (isAddressValid ? 'border-secondary-fixed' : 'border-error') : 'border-white/20'} text-on-background font-body-md px-0 py-2.5 focus:ring-0 focus:border-secondary-fixed transition-colors placeholder-white/20 outline-none`} 
                  placeholder="0x..." 
                  type="text"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                />
                {isAddressDirty && !isAddressValid && (
                  <p className="text-[10px] text-error mt-1 flex items-center gap-1">
                    <AlertCircle size={10} /> Must be a valid 40-character Celo/EVM address
                  </p>
                )}
              </div>

              {/* Amount Input */}
              <div className="relative">
                <label htmlFor="amount" className="font-label-caps text-label-caps text-on-surface-variant block mb-1 uppercase tracking-wider text-[11px]">
                  AMOUNT ({SUPPORTED_TOKEN.symbol})
                </label>
                <div className="text-[11px] text-on-surface-variant/60 mb-2">
                  Celo-native {SUPPORTED_TOKEN.symbol} stablecoin payment
                </div>
                <input 
                  id="amount"
                  className="w-full bg-transparent border-0 border-b border-white/20 text-on-background font-body-md px-0 py-2.5 focus:ring-0 focus:border-secondary-fixed transition-colors placeholder-white/20 outline-none" 
                  placeholder="0.00" 
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              {/* Fee & Contract Info */}
              <div className="p-4 bg-primary-container border border-white/5 space-y-3 rounded-sm">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-on-surface-variant">Protocol Fee:</span>
                  <span className="text-secondary-fixed font-bold">0%</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-on-surface-variant">Network Fee:</span>
                  <span className="text-on-surface-variant/80">Estimated &lt; 0.001 CELO</span>
                </div>
                <div className="h-px bg-white/5 my-1"></div>
                <div className="flex items-center gap-2 text-[10px] text-on-surface-variant/70 leading-relaxed">
                  <Shield size={12} className="text-secondary-fixed shrink-0" />
                  <span>Escrow locked securely in smart contract. We never hold your keys or tokens.</span>
                </div>
              </div>
              
              <div className="pt-2 space-y-4">
                {!isConnected ? (
                  <div className="flex flex-col items-center gap-4">
                    <p className="text-xs text-on-surface-variant text-center">Connect wallet to authorize and deploy your escrow.</p>
                    <div className="flex justify-center w-full"><AppKitButton /></div>
                  </div>
                ) : (
                  <>
                    <button 
                      onClick={handleCreate}
                      disabled={isCreating || !recipient || !amount || !isAddressValid}
                      className="w-full bg-secondary-fixed text-on-secondary-fixed py-4 font-label-caps text-label-caps hover:bg-secondary transition-all active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none flex justify-center items-center gap-2 tracking-wider"
                    >
                      {isCreating ? <span className="material-symbols-outlined animate-spin text-[18px]">sync</span> : null}
                      {isCreating ? 'Creating Escrow...' : 'Initialize Escrow'}
                    </button>
                    
                    <button 
                      onClick={handleCopyLink}
                      disabled={!recipient || !amount || !isAddressValid}
                      className="w-full glass-panel py-3 font-label-caps text-label-caps hover:bg-white/5 transition-all active:scale-[0.98] flex justify-center items-center gap-2 text-xs disabled:opacity-40"
                    >
                      <LinkIcon size={14} />
                      Share request link
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
