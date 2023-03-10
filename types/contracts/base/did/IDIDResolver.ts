/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface IDIDResolverInterface extends utils.Interface {
  functions: {
    "resolveAddressToDid(address)": FunctionFragment;
    "resolveAddressToTokenId(address)": FunctionFragment;
    "resolveDidToAddress(string)": FunctionFragment;
    "resolveDidToTokenId(string)": FunctionFragment;
    "resolveTokenIdToAddress(uint256)": FunctionFragment;
    "resolveTokenIdToDid(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "resolveAddressToDid"
      | "resolveAddressToTokenId"
      | "resolveDidToAddress"
      | "resolveDidToTokenId"
      | "resolveTokenIdToAddress"
      | "resolveTokenIdToDid"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "resolveAddressToDid",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "resolveAddressToTokenId",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "resolveDidToAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "resolveDidToTokenId",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "resolveTokenIdToAddress",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "resolveTokenIdToDid",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "resolveAddressToDid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resolveAddressToTokenId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resolveDidToAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resolveDidToTokenId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resolveTokenIdToAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resolveTokenIdToDid",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IDIDResolver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDIDResolverInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    resolveAddressToDid(
      address_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    resolveAddressToTokenId(
      address_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    resolveDidToAddress(
      did: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    resolveDidToTokenId(
      did: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    resolveTokenIdToAddress(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    resolveTokenIdToDid(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  resolveAddressToDid(
    address_: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  resolveAddressToTokenId(
    address_: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  resolveDidToAddress(
    did: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  resolveDidToTokenId(
    did: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  resolveTokenIdToAddress(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  resolveTokenIdToDid(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    resolveAddressToDid(
      address_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    resolveAddressToTokenId(
      address_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    resolveDidToAddress(
      did: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    resolveDidToTokenId(
      did: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    resolveTokenIdToAddress(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    resolveTokenIdToDid(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    resolveAddressToDid(
      address_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    resolveAddressToTokenId(
      address_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    resolveDidToAddress(
      did: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    resolveDidToTokenId(
      did: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    resolveTokenIdToAddress(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    resolveTokenIdToDid(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    resolveAddressToDid(
      address_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resolveAddressToTokenId(
      address_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resolveDidToAddress(
      did: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resolveDidToTokenId(
      did: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resolveTokenIdToAddress(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resolveTokenIdToDid(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
