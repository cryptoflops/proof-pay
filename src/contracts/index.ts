import type { Address } from 'viem';
import ProofPayEscrowABI from '@/abi/ProofPayEscrow.json';
import ERC20ABI from '@/abi/ERC20.json';

// Celo Mainnet deployed addresses
export const ESCROW_ADDRESS = '0x5B2632C8f00160A6b398EB592095427ca9F75B7a' as Address;
export const CUSD_ADDRESS = '0x765DE816845861e75A25fCA122bb6898B8B1282a' as Address;

export const CELO_CHAIN_ID = 42220;

export { ProofPayEscrowABI, ERC20ABI };
