import { config } from './../config';
import { ethers } from 'ethers';

import ABI_IDEA from '../contracts/idea3/Idea.sol/Idea.json';

import { Idea } from '../typechain-types';
import { Client, useProvider, useSigner } from 'wagmi';

export const useIdea = () => {
  const { data: signer } = useSigner();
  const contract = new ethers.Contract(config.contract, ABI_IDEA.abi, signer!);
  return contract as Idea;
};

export const useIdeaRead = () => {
  const provider = useProvider();
  const contract = new ethers.Contract(config.contract, ABI_IDEA.abi, provider);
  return contract as Idea;
};
