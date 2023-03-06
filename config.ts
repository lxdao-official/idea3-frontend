import { polygon, localhost } from '@wagmi/core/chains';

export const config =
  process.env.NODE_ENV == 'production'
    ? {
        sbt: '0x10F76ae93dF55FC1d971EEFdc0B3c769c6c85469',
        did: '',
        chain: polygon,
        infuraApiKey: '65b8d84e5b0f4245b8df59f87373cd5b',
        opensea: 'https://opensea.io/assets/matic',
      }
    : {
        sbt: '0xe70f935c32dA4dB13e7876795f1e175465e6458e',
        did: '0xd9140951d8aE6E5F625a02F5908535e16e3af964',
        chain: localhost,
        infuraApiKey: '65b8d84e5b0f4245b8df59f87373cd5b',
        opensea: 'https://testnets.opensea.io/assets/goerli',
      };
