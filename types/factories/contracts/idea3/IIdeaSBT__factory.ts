/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IIdeaSBT,
  IIdeaSBTInterface,
} from "../../../contracts/idea3/IIdeaSBT";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "approveIdea",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "unapproveIdea",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IIdeaSBT__factory {
  static readonly abi = _abi;
  static createInterface(): IIdeaSBTInterface {
    return new utils.Interface(_abi) as IIdeaSBTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IIdeaSBT {
    return new Contract(address, _abi, signerOrProvider) as IIdeaSBT;
  }
}
