import { IdeaSBT } from './../typechain-types/contracts/idea3/IdeaSBT';
import { config } from './../config';
import { ethers } from 'ethers';

import ABI_IDEASBT from '../contracts/idea3/IdeaSBT.sol/IdeaSBT.json';
import ABI_IDEANFT from '../contracts/idea3/IdeaNFT.sol/IdeaNFT.json';

import { Client, useProvider, useSigner } from 'wagmi';
import { IdeaNFT } from '../typechain-types';

export const useIdeaSBT = () => {
  const { data: signer } = useSigner();
  const contract = new ethers.Contract(config.sbt, ABI_IDEASBT.abi, signer!);
  return contract as IdeaSBT;
};

export const useIdeaNFT = () => {
  const { data: signer } = useSigner();
  const contract = new ethers.Contract(config.nft, ABI_IDEANFT.abi, signer!);
  return contract as IdeaNFT;
};

export const useIdeaSBTRead = () => {
  const provider = useProvider();
  const contract = new ethers.Contract(config.sbt, ABI_IDEASBT.abi, provider);
  return contract as IdeaSBT;
};
export const useIdeaNFTRead = () => {
  const provider = useProvider();
  const contract = new ethers.Contract(config.nft, ABI_IDEANFT.abi, provider);
  return contract as IdeaNFT;
};
