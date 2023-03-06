/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  HandleProxyForDID,
  HandleProxyForDIDInterface,
} from "../../../../contracts/idea3/proxy/HandleProxyForDID";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_didAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "CANNOT_TRANSFER_TO_ZERO_ADDRESS",
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
    inputs: [],
    name: "NOT_CURRENT_OWNER",
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
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getHandleByAddress",
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
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_didAddress",
        type: "address",
      },
    ],
    name: "setDIDAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161075038038061075083398101604081905261002f91610062565b60008054336001600160a01b031991821617909155600180549091166001600160a01b0392909216919091179055610092565b60006020828403121561007457600080fd5b81516001600160a01b038116811461008b57600080fd5b9392505050565b6106af806100a16000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063eebfbb6511610050578063eebfbb6514610123578063f2fde38b14610136578063f3fe3bc31461014957600080fd5b8063860d248a146100775780638da5cb5b146100c95780639f4f2b4e1461010e575b600080fd5b6100b36040518060400160405280600681526020017f303138303032000000000000000000000000000000000000000000000000000081525081565b6040516100c091906104f1565b60405180910390f35b6000546100e99073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100c0565b61012161011c366004610542565b610185565b005b6100b3610131366004610542565b61025d565b610121610144366004610542565b610329565b6100b36040518060400160405280600681526020017f303138303031000000000000000000000000000000000000000000000000000081525081565b60005460408051808201909152600681527f303138303031000000000000000000000000000000000000000000000000000060208201529073ffffffffffffffffffffffffffffffffffffffff163314610215576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020c91906104f1565b60405180910390fd5b50600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6001546040517f2d2857c200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526060921690632d2857c29060240160006040518083038186803b1580156102c957600080fd5b505afa1580156102dd573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261032391908101906105ae565b92915050565b60005460408051808201909152600681527f303138303031000000000000000000000000000000000000000000000000000060208201529073ffffffffffffffffffffffffffffffffffffffff1633146103b0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020c91906104f1565b5060408051808201909152600681527f3031383030320000000000000000000000000000000000000000000000000000602082015273ffffffffffffffffffffffffffffffffffffffff8216610433576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020c91906104f1565b506000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60005b838110156104dc5781810151838201526020016104c4565b838111156104eb576000848401525b50505050565b60208152600082518060208401526105108160408501602087016104c1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60006020828403121561055457600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461057857600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000602082840312156105c057600080fd5b815167ffffffffffffffff808211156105d857600080fd5b818401915084601f8301126105ec57600080fd5b8151818111156105fe576105fe61057f565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156106445761064461057f565b8160405282815287602084870101111561065d57600080fd5b61066e8360208301602088016104c1565b97965050505050505056fea26469706673582212206802381c6dac3fdd2a961dce6b0dbc0375204b7d47cfd1ccd9842766d5ee05d764736f6c63430008090033";

type HandleProxyForDIDConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HandleProxyForDIDConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HandleProxyForDID__factory extends ContractFactory {
  constructor(...args: HandleProxyForDIDConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _didAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HandleProxyForDID> {
    return super.deploy(
      _didAddress,
      overrides || {}
    ) as Promise<HandleProxyForDID>;
  }
  override getDeployTransaction(
    _didAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_didAddress, overrides || {});
  }
  override attach(address: string): HandleProxyForDID {
    return super.attach(address) as HandleProxyForDID;
  }
  override connect(signer: Signer): HandleProxyForDID__factory {
    return super.connect(signer) as HandleProxyForDID__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HandleProxyForDIDInterface {
    return new utils.Interface(_abi) as HandleProxyForDIDInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HandleProxyForDID {
    return new Contract(address, _abi, signerOrProvider) as HandleProxyForDID;
  }
}