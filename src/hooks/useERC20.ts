import { ERC20_Abi } from '@/abi/ERC20';
import { isAddress } from 'viem';

import {
  useReadContract,
  useWriteContract,
} from 'wagmi';

export const useTransfer = (tokenAddr: `0x${string}`) => {
  const {
    data: hash,
    error,
    isError,
    isPending,
    writeContract,
  } = useWriteContract();

  function transfer(recipient: string, amount: bigint, tokenAddress = tokenAddr) {
    return writeContract({
      abi: ERC20_Abi.abi,
      address: tokenAddress,
      functionName: 'transfer',
      args: [recipient, amount],
    });
  }

  return {
    hash,
    error,
    isError,
    isPending,
    transfer,
  };
};

export const useBalanceOf = (userAddress: string, tokenAddress: `0x${string}`) => {
  const isValidUserAddress = userAddress && isAddress(userAddress);
  const isValidTokenAddress = tokenAddress && isAddress(tokenAddress);

  const {
    data,
    error,
    isError,
    isPending,
  } = useReadContract({
    abi: ERC20_Abi.abi,
    address: isValidTokenAddress ? tokenAddress : undefined,
    functionName: 'balanceOf',
    args: isValidUserAddress ? [userAddress] : undefined,
  });

  if (!isValidUserAddress || !isValidTokenAddress) {
    return {
      data: undefined,
      error: undefined,
      isError: undefined,
      isPending: undefined,
    };
  }

  return {
    data,
    error,
    isError,
    isPending,
  };
};
