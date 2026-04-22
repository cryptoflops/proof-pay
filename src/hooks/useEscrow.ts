'use client';

import { useReadContract, useWriteContract, useWaitForTransactionReceipt, useAccount } from 'wagmi';
import { parseUnits } from 'viem';
import { ESCROW_ADDRESS, CUSD_ADDRESS, ProofPayEscrowABI, ERC20ABI, CELO_CHAIN_ID } from '@/contracts';

// --- Read Hooks ---

export function useEscrowDetails(escrowId: bigint) {
  return useReadContract({
    address: ESCROW_ADDRESS,
    abi: ProofPayEscrowABI,
    functionName: 'escrows',
    args: [escrowId],
    chainId: CELO_CHAIN_ID,
  });
}

export function useEscrowCounter() {
  return useReadContract({
    address: ESCROW_ADDRESS,
    abi: ProofPayEscrowABI,
    functionName: 'escrowCounter',
    chainId: CELO_CHAIN_ID,
  });
}

export function useCusdBalance() {
  const { address } = useAccount();

  return useReadContract({
    address: CUSD_ADDRESS,
    abi: ERC20ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    chainId: CELO_CHAIN_ID,
    query: { enabled: !!address },
  });
}

export function useCusdAllowance() {
  const { address } = useAccount();

  return useReadContract({
    address: CUSD_ADDRESS,
    abi: ERC20ABI,
    functionName: 'allowance',
    args: address ? [address, ESCROW_ADDRESS] : undefined,
    chainId: CELO_CHAIN_ID,
    query: { enabled: !!address },
  });
}

// --- Write Hooks ---

export function useApproveEscrow() {
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const approve = (amount: string) => {
    writeContract({
      address: CUSD_ADDRESS,
      abi: ERC20ABI,
      functionName: 'approve',
      args: [ESCROW_ADDRESS, parseUnits(amount, 18)],
      chainId: CELO_CHAIN_ID,
    });
  };

  return { approve, hash, isPending, isConfirming, isSuccess, error };
}

export function useCreateEscrow() {
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const createEscrow = (freelancer: `0x${string}`, amount: string) => {
    writeContract({
      address: ESCROW_ADDRESS,
      abi: ProofPayEscrowABI,
      functionName: 'createEscrow',
      args: [freelancer, parseUnits(amount, 18)],
      chainId: CELO_CHAIN_ID,
    });
  };

  return { createEscrow, hash, isPending, isConfirming, isSuccess, error };
}

export function useReleaseEscrow() {
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const releaseEscrow = (escrowId: bigint) => {
    writeContract({
      address: ESCROW_ADDRESS,
      abi: ProofPayEscrowABI,
      functionName: 'releaseEscrow',
      args: [escrowId],
      chainId: CELO_CHAIN_ID,
    });
  };

  return { releaseEscrow, hash, isPending, isConfirming, isSuccess, error };
}

export function useDisputeEscrow() {
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const disputeEscrow = (escrowId: bigint) => {
    writeContract({
      address: ESCROW_ADDRESS,
      abi: ProofPayEscrowABI,
      functionName: 'disputeEscrow',
      args: [escrowId],
      chainId: CELO_CHAIN_ID,
    });
  };

  return { disputeEscrow, hash, isPending, isConfirming, isSuccess, error };
}

export function useClaimRefund() {
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const claimRefund = (escrowId: bigint) => {
    writeContract({
      address: ESCROW_ADDRESS,
      abi: ProofPayEscrowABI,
      functionName: 'claimRefund',
      args: [escrowId],
      chainId: CELO_CHAIN_ID,
    });
  };

  return { claimRefund, hash, isPending, isConfirming, isSuccess, error };
}
