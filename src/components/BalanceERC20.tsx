'use client';
import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { useToast } from '@/hooks/use-toast';
import { useBalanceOf } from '@/hooks/useERC20';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

const BalanceERC20: FC = () => {
  const { address } = useAccount();
  const { toast } = useToast();
  const [token, setToken] = useState<string>('');

  const { data, error, isError, isPending } = useBalanceOf(address!, token as `0x${string}`);

  const handleTokenAddressChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setToken(event.target.value);
  };

  useEffect(() => {
    if (data) {
      toast({
        title: 'Balance:',
        description: `Your balance is ${data}`,
      });
    }

    if (isError && error) {
      toast({
        title: 'An error occured:',
        description: error.message,
      });
    }
  }, [data, isError, error, toast]);

  return (
    <div className="flex w-[45%] min-w-[270px] flex-col gap-2 rounded-md border border-gray-300 p-4">
      Check ERC20 Token Balance
      <Input placeholder="token address" value={token} onChange={handleTokenAddressChange} />

      <Button
        variant="ghost"
        disabled
      >
        {(isPending)
          ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Checking...
              </>
            )
          : (
              'Check Balance'
            )}
      </Button>
    </div>
  );
};

export default BalanceERC20;
