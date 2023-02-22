import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import '@rainbow-me/rainbowkit/styles.css';
import toast, { Toaster } from 'react-hot-toast';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';
import { config } from '../config';
const { chains, provider } = configureChains(
  [config.chain],
  [
    infuraProvider({
      apiKey: '65b8d84e5b0f4245b8df59f87373cd5b',
    }),
  ],
);

const { connectors } = getDefaultWallets({
  appName: 'Idea3',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} initialChain={config.chain}>
        <NextUIProvider>
          <Component {...pageProps} />
          <Toaster
            containerStyle={{
              zIndex: 99999999999,
            }}
          />
        </NextUIProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
