import type { Address } from 'viem';
import ProofPayEscrowABI from '@/abi/ProofPayEscrow.json';
import ERC20ABI from '@/abi/ERC20.json';

// Celo Sepolia Testnet deployed addresses
export const ESCROW_ADDRESS = '0xb69FC82CfaF73eD118F446D424465B848e781f54' as Address;
export const CUSD_ADDRESS = '0xef6d34199F521876a401C4c87332F1469E54Bc80' as Address;

export const CELO_SEPOLIA_CHAIN_ID = 11142220;

export { ProofPayEscrowABI, ERC20ABI };
