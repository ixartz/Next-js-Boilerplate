'use client';
import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

import { useTransfer } from '@/hooks/useERC20';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { isAddress, parseEther } from 'viem';
import { useWaitForTransactionReceipt } from 'wagmi';

const ERC20_ADDRESS = '0xCEFf3B2B5e3D97Fbc2892eA7267737Ff20633EcD';

const TransferERC20: FC = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState<string>('');
  const [receiver, setReceiver] = useState<string>('');
  const [token, setToken] = useState<string>('');

  const { hash, error, isError, isPending, transfer } = useTransfer(ERC20_ADDRESS);
  const { data: receipt, isLoading } = useWaitForTransactionReceipt({ hash });

  const handleTokenAddressChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setToken(event.target.value);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAmount(event.target.value);
  };

  const handleReceiverChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setReceiver(event.target.value);
  };

  const handleTransfer = () => {
    if (token.length === 0 || !isAddress(token)) {
      toast({
        title: 'Error:',
        description: 'The token address is not set!',
      });
      return;
    }

    if (receiver.length === 0 || !isAddress(receiver)) {
      toast({
        title: 'Error:',
        description: 'The receiver address is not set!',
      });
      return;
    }

    if (Number.parseFloat(amount) <= 0) {
      toast({
        title: 'Error:',
        description: 'The amount to send must be greater than 0.',
      });
      return;
    }

    transfer(
      receiver,
      parseEther(amount),
    );
  };

  useEffect(() => {
    if (receipt) {
      toast({
        title: 'Transfer successfully sent!',
        description: `Hash: ${receipt.transactionHash}`,
      });
      setToken('');
      setAmount('');
      setReceiver('');
    }

    if (isError && error) {
      toast({
        title: 'An error occured:',
        description: error.message,
      });
    }
  }, [receipt, isError, error, toast]);

  return (
    <div className="flex w-[45%] min-w-[270px] flex-col gap-2 rounded-md border border-gray-300 p-4">
      Transfer ERC20 Token
      <Input placeholder="token address" value={token} onChange={handleTokenAddressChange} />

      <Input placeholder="receiver address" value={receiver} onChange={handleReceiverChange} />

      <Input
        placeholder="amount"
        value={amount}
        min={0}
        onChange={handleAmountChange}
      >
      </Input>

      <Button
        variant="ghost"
        onClick={handleTransfer}
        disabled={isPending || isLoading}
      >
        {(isPending || isLoading)
          ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Confirming...
              </>
            )
          : (
              'Transfer'
            )}
      </Button>
    </div>
  );
};

export default TransferERC20;
