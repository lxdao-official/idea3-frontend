import { goerli } from 'wagmi';
import { polygon } from '@wagmi/core/chains';

export const config =
  process.env.NODE_ENV == 'production'
    ? {
        sbt: '0x10F76ae93dF55FC1d971EEFdc0B3c769c6c85469',
        nft: '0xC3358FA122719aC967728693A0EEAC57B105f8C6',
        chain: polygon,
        opensea: 'https://opensea.io/assets/matic',
      }
    : {
        sbt: '0x6D273d385Ad8311E28B82fF24a4d573B431B437a',
        nft: '0xC3358FA122719aC967728693A0EEAC57B105f8C6',
        chain: goerli,
        opensea: 'https://testnets.opensea.io/assets/goerli',
      };
