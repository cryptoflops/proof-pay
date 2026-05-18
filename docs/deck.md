# ProofPay Slide Deck

> 10 slides for Proof-of-Ship submission

---

## Slide 1: Title

**ProofPay**
Trustless escrow for freelancers and clients on Celo.

Lock payment. Verify delivery. Release with proof.

---

## Slide 2: Problem

**Freelancers get ghosted. Clients get scammed.**

- Gig economy is exploding in MiniPay markets (Africa, LatAm, SEA)
- Clients fear paying upfront for undelivered work
- Freelancers fear delivering work and never getting paid
- Existing escrow services charge high fees and require bank accounts
- None of them work with mobile crypto wallets

---

## Slide 3: Solution

**ProofPay -- zero-fee, trustless escrow inside MiniPay.**

- Client locks cUSD in smart contract escrow
- Freelancer delivers work off-chain
- Client releases funds instantly
- Dispute path with 7-day timeout auto-refund
- No intermediary. No fees. Fully on-chain.

---

## Slide 4: Escrow Lifecycle

```
         createEscrow()
              │
              ▼
         ┌─────────┐
         │ Created  │
         └────┬─────┘
              │
    ┌─────────┼──────────┐
    ▼         ▼          ▼
Released  Disputed   Refunded
(client   (either    (client,
 calls     party)     after 7d)
 release)
```

Simple state machine: Created → Released | Disputed | Refunded

---

## Slide 5: Architecture

```
┌─────────────┐     ┌───────────────┐     ┌──────────────┐
│  MiniPay    │     │  Next.js 16   │     │ Celo Mainnet │
│  WebView    │────▶│  React 19     │────▶│ Chain 42220  │
│             │     │  Wagmi + Viem │     │              │
│  Client or  │     │  AppKit       │     │ ProofPay     │
│  Freelancer │◀────│  useMiniPay   │◀────│ Escrow.sol   │
└─────────────┘     └───────────────┘     └──────────────┘
```

- Landing page + escrow management app
- Both parties use the same MiniPay interface
- Escrow state tracked fully on-chain

---

## Slide 6: Smart Contract

**ProofPayEscrow** -- deployed on Celo Mainnet

Address: `0x5B2632C8f00160A6b398EB592095427ca9F75B7a`

| Function | Purpose |
|----------|---------|
| `createEscrow(freelancer, amount)` | Lock cUSD |
| `releaseEscrow(id)` | Pay freelancer |
| `disputeEscrow(id)` | Flag dispute |
| `claimRefund(id)` | Refund after 7d timeout |

---

## Slide 7: MiniPay Integration

All 6 checklist items covered:

- [x] MiniPay wallet detection via `window.ethereum.isMiniPay`
- [x] Auto-connect using injected connector
- [x] Celo chain enforcement (`switchChain` on mismatch)
- [x] Stablecoin balance display (cUSD + cEUR)
- [x] Loading state for async provider detection
- [x] Mobile-first responsive design

---

## Slide 8: Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS 3 |
| Web3 | Wagmi 2.19 + Viem 2.39 |
| Wallet | Reown AppKit 1.8 |
| Contract | Solidity 0.8.19 (Foundry) |
| Hosting | Cloudflare Pages |
| Package | `@cryptoflops/proof-pay` on NPM |

---

## Slide 9: Competitive Landscape

| | ProofPay | Escrow.com | PayPal | ETH Escrows |
|---|----------|------------|--------|-------------|
| Zero fees | Yes | 3-5% | 2.9% | Gas only |
| Mobile wallet native | MiniPay | No | App | No |
| Crypto/stablecoin | cUSD | No | No | ETH |
| Auto-refund timeout | 7 days | Manual | 180d dispute | Varies |
| Trustless | Yes | Third-party | Centralized | Yes |

---

## Slide 10: Milestones & Status

| Milestone | Status |
|-----------|--------|
| Escrow contract on Celo Mainnet | Done |
| MiniPay hook (all 6 items) | Done |
| Stablecoin balance display | Done |
| Create/release/dispute/refund flow | Done |
| Landing page with security section | Done |
| Architecture docs | Done |
| Competitive analysis | Done |
| NPM package published | Done |
| Slide deck | Done |

**Live contract**: [CeloScan](https://celoscan.io/address/0x5B2632C8f00160A6b398EB592095427ca9F75B7a)
