'use client';
import type { FC, MouseEvent } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ethers } from 'ethers'; // Import ethers.js for signature parsing

import { Loader2 } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { useSignTypedData } from 'wagmi'; // Change the import

const SignMessage: FC = () => {
  const { data: signature, error, isPending, signTypedData } = useSignTypedData();
  const [typedData, setTypedData] = useState<any>({});

  const { toast } = useToast();

  const handleSignMessage = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const localTypedData = {
      domain: {
        name: 'HyperliquidSignTransaction',
        version: '1',
        chainId: 42161,
        verifyingContract: '0x0000000000000000000000000000000000000000',
      },
      message: {
        amount: '10',
        destination: '0xaddress', // todo: change this to the destination address
        hyperliquidChain: 'Mainnet',
        signatureChainId: '0xa4b1',
        time: Date.now(),
        token: 'USDC:0x6d1e7cde53ba9467b783cb7c530ce054',
        type: 'spotSend',
      },
      primaryType: 'HyperliquidTransaction:SpotSend',
      types: {
        'EIP712Domain': [{ name: 'name', type: 'string' }, { name: 'version', type: 'string' }, { name: 'chainId', type: 'uint256' }, { name: 'verifyingContract', type: 'address' }],
        'HyperliquidTransaction:SpotSend': [{ name: 'hyperliquidChain', type: 'string' }, { name: 'destination', type: 'string' }, { name: 'token', type: 'string' }, { name: 'amount', type: 'string' }, { name: 'time', type: 'uint64' }],
      },
    };

    setTypedData(localTypedData);

    signTypedData(localTypedData as any);
  };

  const executeTransfer = useCallback(async () => {
    const { r, s, v } = ethers.Signature.from(signature);

    try {
      const response = await fetch('https://api.hyperliquid.xyz/exchange', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: typedData.message,
          nonce: typedData.message.time,
          signature: { r, s, v },
        }),
      });

      const data = await response.json();
      if (data.status === 'ok') {
        toast({
          title: 'Transfer successful',
        });
      }
    } catch {
      toast({
        title: 'Transfer failed',
      });
    }
  }, [signature, typedData, toast]);

  useEffect(() => {
    if (signature) {
      // Call the async function
      executeTransfer();
    }

    if (error) {
      toast({
        title: 'An error occured:',
        description: error.message,
      });
    }
  }, [signature, error, toast, executeTransfer]);

  return (
    <div className="flex w-[45%] min-w-[270px] flex-col gap-2 rounded-md border border-gray-300 p-4">
      Sign Message
      <Button
        variant="ghost"
        onClick={handleSignMessage}
      >
        {isPending
          ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Loading...
              </>
            )
          : (
              'Sign Message'
            )}
      </Button>
    </div>
  );
};

export default SignMessage;
