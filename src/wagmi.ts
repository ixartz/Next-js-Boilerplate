'use client';
import type { Transport } from 'viem';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  coinbaseWallet,
  ledgerWallet,
  metaMaskWallet,
  rabbyWallet,
  rainbowWallet,
  safeWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { createConfig, http } from 'wagmi';
import {
  arbitrum,
  arbitrumSepolia,
  avalanche,
  avalancheFuji,
  mainnet,
  polygon,
  polygonAmoy,
  sepolia,
  zkSync,
  zkSyncSepoliaTestnet,
} from 'wagmi/chains';

import polygon_logo from '../public/assets/images/polygon_logo.svg';
import zksync_logo from '../public/assets/images/zksync_logo.svg';

const walletConnectProjectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

if (!walletConnectProjectId) {
  throw new Error(
    'WalletConnect project ID is not defined. Please check your environment variables.',
  );
}

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [
        metaMaskWallet,
        rainbowWallet,
        walletConnectWallet,
        ledgerWallet,
        rabbyWallet,
        coinbaseWallet,
        argentWallet,
        safeWallet,
      ],
    },
  ],
  { appName: 'Next-Web3-Boilerplate', projectId: walletConnectProjectId },
);

// Fix missing icons
const customZkSyncSepoliaTestnet = { ...zkSyncSepoliaTestnet, iconUrl: zksync_logo.src };
const customPolygonAmoyTestnet = { ...polygonAmoy, iconUrl: polygon_logo.src };

const transports: Record<number, Transport> = {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
  [avalanche.id]: http(),
  [avalancheFuji.id]: http(),
  [arbitrum.id]: http(),
  [arbitrumSepolia.id]: http(),
  [zkSync.id]: http(),
  [zkSyncSepoliaTestnet.id]: http(),
  [polygon.id]: http(),
  [polygonAmoy.id]: http(),
};
export const wagmiConfig = createConfig({
  chains: [
    mainnet,
    sepolia,
    avalanche,
    avalancheFuji,
    arbitrum,
    arbitrumSepolia,
    zkSync,
    customZkSyncSepoliaTestnet,
    polygon,
    customPolygonAmoyTestnet,
  ],
  connectors,
  transports,
  ssr: true,
});
