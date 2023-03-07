import { polygon, localhost, Chain } from '@wagmi/core/chains';

export const config =
  process.env.NODE_ENV == 'production'
    ? {
        sbt: '0x73775C5B9CdC0C55aaEc159ED32613639C4e5995',
        did: '0xe4ed8783df1b4e8328870cfe0c4cb7c494f347d3',
        chain: polygon,
        infuraApiKey: '65b8d84e5b0f4245b8df59f87373cd5b',
        opensea: 'https://opensea.io/assets/matic',
      }
    : {
        sbt: '0x1291Be112d480055DaFd8a610b7d1e203891C274',
        did: '0x8f86403A4DE0BB5791fa46B8e795C547942fE4Cf',
        chain: {
          id: 31337,
          name: 'localhost',
          rpcUrls: {
            default: {
              http: ['http://localhost:8545'],
            },
          },
          explorer: 'https://etherscan.io',
          network: 'localhost',
          nativeCurrency: {
            name: 'Ether',
            symbol: 'ETH',
            decimals: 18,
          },
        } as Chain,
        infuraApiKey: '65b8d84e5b0f4245b8df59f87373cd5b',
        opensea: 'https://testnets.opensea.io/assets/goerli',
      };
