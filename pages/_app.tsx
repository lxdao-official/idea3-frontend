import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import '@rainbow-me/rainbowkit/styles.css';
import toast, { Toaster } from 'react-hot-toast';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { mainnet, goerli } from 'wagmi/chains';
const { chains, provider } = configureChains([goerli], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: 'Task3',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
const theme = createTheme({
  type: 'light', // it could be "light" or "dark"
  theme: {
    space: {},
    fonts: {
      sans: 'Montserrat, sans-serif',
      mono: 'Montserrat, sans-serif',
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} initialChain={goerli}>
        <NextUIProvider theme={theme}>
          <Component {...pageProps} />
          <Toaster />
        </NextUIProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
