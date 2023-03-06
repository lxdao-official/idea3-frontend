import { IdeaDID } from './../types/contracts/idea3/IdeaDID';
import { IdeaSBT } from './../types/contracts/idea3/IdeaSBT';
import { config } from './../config';
import { ethers } from 'ethers';

import ABI_IDEASBT from '../abi/contracts/idea3/IdeaSBT.sol/IdeaSBT.json';
import ABI_IDEADID from '../abi/contracts/idea3/IdeaDID.sol/IdeaDID.json';
// import ABI_IDEANFT from '../abi/IdeaNFT.json';

import { Client, configureChains, useProvider, useSigner } from 'wagmi';
import { infuraProvider } from 'wagmi/dist/providers/infura';
import { jsonRpcProvider } from 'wagmi/dist/providers/jsonRpc';
// import { IdeaNFT } from '../types';

export const useIdeaSBT = () => {
  const { data: signer } = useSigner();
  const contract = new ethers.Contract(config.sbt, ABI_IDEASBT, signer!);
  return contract as IdeaSBT;
};

export const useIdeaDID = () => {
  const { data: signer } = useSigner();
  const contract = new ethers.Contract(config.did, ABI_IDEADID, signer!);
  return contract as IdeaDID;
};

// export const useIdeaNFT = () => {
//   const { data: signer } = useSigner();
//   const contract = new ethers.Contract(config.nft, ABI_IDEANFT.abi, signer!);
//   return contract as IdeaNFT;
// };
const { chains, provider } = configureChains(
  [config.chain],
  [
    infuraProvider({
      apiKey: config.infuraApiKey,
    }),
    jsonRpcProvider({
      rpc: () => {
        return { http: 'http://localhost:8545' };
      },
    }),
  ],
);
const contract = new ethers.Contract(
  config.sbt,
  ABI_IDEASBT,
  provider({
    chainId: config.chain.id,
  }),
);
export const useIdeaSBTRead = () => {
  return contract as IdeaSBT;
};
// export const useIdeaNFTRead = () => {
//   const provider = useProvider();
//   const contract = new ethers.Contract(config.nft, ABI_IDEANFT.abi, provider);
//   return contract as IdeaNFT;
// };
