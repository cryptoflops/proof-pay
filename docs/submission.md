# ProofPay -- Proof-of-Ship Submission

## One-Liner
Trustless escrow for freelancers and clients on Celo -- lock payment, verify delivery, release with proof.

## Problem Statement
Freelancers in emerging markets face chronic payment disputes. Clients worry about paying upfront for undelivered work. Freelancers worry about completed work going unpaid. Existing escrow services charge high fees, require bank accounts, and aren't accessible to the 10M+ MiniPay users who transact in cUSD.

### Competitive Landscape
| App | Strength | Weakness |
|-----|----------|----------|
| **Escrow.com** | Established, trusted | High fees, requires bank, no crypto |
| **PayPal disputes** | Wide adoption | Slow resolution, biased toward buyers |
| **Smart contract escrows (Ethereum)** | Trustless | High gas, not mobile-friendly |
| **ProofPay** | MiniPay native, cUSD, 7-day auto-refund, zero platform fees | New, needs adoption |

## Solution
ProofPay provides a dead-simple escrow flow accessible from MiniPay:
1. **Client creates escrow** -- locks cUSD specifying the freelancer address
2. **Freelancer delivers** -- work happens off-chain
3. **Client releases** -- funds go to freelancer instantly
4. **Dispute path** -- either party can flag dispute; client can claim refund after 7-day timeout

No intermediary. No fees. Fully on-chain. Accessible from any MiniPay wallet.

## Architecture
See [architecture.md](./architecture.md) for full system diagram, escrow lifecycle state machine, and tech stack.

**Key frameworks:**
- Next.js 16, React 19, TypeScript
- Wagmi 2 + Viem 2
- Reown AppKit
- Tailwind CSS 3
- Cloudflare Pages

## Smart Contract
- **ProofPayEscrow** deployed on Celo Mainnet
- Address: `0x5B2632C8f00160A6b398EB592095427ca9F75B7a`
- [View on CeloScan](https://celoscan.io/address/0x5B2632C8f00160A6b398EB592095427ca9F75B7a)

## Milestones

| Milestone | Status | PR/Evidence |
|-----------|--------|-------------|
| Escrow contract deployed to Celo Mainnet | Done | Foundry deploy broadcast |
| MiniPay wallet detection + auto-connect | Done | `useMiniPay` hook |
| Stablecoin balance display (cUSD/cEUR) | Done | `MiniPayBar` component |
| Celo chain forcing in MiniPay context | Done | `useMiniPay` chain switch |
| Create/release/dispute/refund flow | Done | `useEscrow` hooks + UI |
| Landing page with security section | Done | `app/page.tsx` |
| NPM package published | Done | `@cryptoflops/proof-pay` |

## Slide Deck
See [deck.md](./deck.md) -- 10 slides covering problem, solution, escrow lifecycle, security model, MiniPay integration, competitive landscape, milestones.
