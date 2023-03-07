import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import '@rainbow-me/rainbowkit/styles.css';
import toast, { Toaster } from 'react-hot-toast';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { config } from '../config';
import {
  BindDidContext,
  DIDContext,
  useBindDid,
  useDID,
} from '../contexts/did.context';
const { chains, provider } = configureChains(
  [config.chain],
  process.env.NODE_ENV == 'production'
    ? [
        infuraProvider({
          apiKey: config.infuraApiKey,
        }),
      ]
    : [
        jsonRpcProvider({
          rpc: () => {
            return { http: 'http://localhost:8545' };
          },
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
  const didContext = useDID();
  const didBindContext = useBindDid();
  return (
    <DIDContext.Provider value={didContext}>
      <BindDidContext.Provider value={didBindContext}>
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
      </BindDidContext.Provider>
    </DIDContext.Provider>
  );
}
