import type { Address } from 'viem';
import { useCallback, useEffect, useState } from 'react';
import { recoverMessageAddress } from 'viem';
import { useSignMessage } from 'wagmi';

export function useSignMessageHook() {
  const [recoveredAddress, setRecoveredAddress] = useState<Address>();
  const { data: signature, variables, error, isPending, signMessage } = useSignMessage();

  const recoverAddress = useCallback(async () => {
    if (variables?.message && signature) {
      const recoveredAddress = await recoverMessageAddress({
        message: variables?.message,
        signature,
      });
      setRecoveredAddress(recoveredAddress);
    }
  }, [signature, variables?.message]);

  useEffect(() => {
    recoverAddress();
  }, [recoverAddress]);

  return { signature, recoveredAddress, error, isPending, signMessage };
}
