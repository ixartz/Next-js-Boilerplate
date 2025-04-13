'use client';
import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { isAddress, parseEther } from 'viem';
import { useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';

const TransferNative: FC = () => {
  const { data, error, isPending, isError, sendTransaction } = useSendTransaction();
  const { data: receipt, isLoading } = useWaitForTransactionReceipt({ hash: data });
  const { toast } = useToast();
  const [amount, setAmount] = useState<string>('');
  const [receiver, setReceiver] = useState<string>('');

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAmount(event.target.value);
  };

  const handleReceiverChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setReceiver(event.target.value);
  };

  const handleTransfer = () => {
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

    sendTransaction({
      to: receiver,
      value: parseEther(amount),
    });
  };

  useEffect(() => {
    if (receipt) {
      toast({
        title: 'Transfer successfully sent!',
        description: `Hash: ${receipt.transactionHash}`,
      });
      setAmount('0');
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
      Transfer Native Token
      <Input placeholder="address" value={receiver} onChange={handleReceiverChange} />
      <Input
        placeholder="amount"
        type="number"
        value={amount}
        onChange={handleAmountChange}
      >
      </Input>

      <Button
        variant="ghost"
        onClick={handleTransfer}
        disabled={isLoading || isPending}
      >
        {isLoading || isPending
          ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Loading...
              </>
            )
          : (
              'Transfer'
            )}
      </Button>
    </div>
  );
};

export default TransferNative;
