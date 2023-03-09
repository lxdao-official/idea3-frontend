/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "IERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155MetadataURI__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "DID",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DID__factory>;
    getContractFactory(
      name: "DIDResolver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DIDResolver__factory>;
    getContractFactory(
      name: "IDIDResolver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDIDResolver__factory>;
    getContractFactory(
      name: "Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Metadata__factory>;
    getContractFactory(
      name: "Price",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Price__factory>;
    getContractFactory(
      name: "MockERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockERC20__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "SBT1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SBT1155__factory>;
    getContractFactory(
      name: "SBT721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SBT721__factory>;
    getContractFactory(
      name: "Comment",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Comment__factory>;
    getContractFactory(
      name: "Topic",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Topic__factory>;
    getContractFactory(
      name: "ERC721Tradable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Tradable__factory>;
    getContractFactory(
      name: "IdeaDID",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IdeaDID__factory>;
    getContractFactory(
      name: "IdeaSBT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IdeaSBT__factory>;
    getContractFactory(
      name: "IIdeaSBT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IIdeaSBT__factory>;
    getContractFactory(
      name: "HandleProxyForDID",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HandleProxyForDID__factory>;
    getContractFactory(
      name: "HandleProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HandleProxy__factory>;
    getContractFactory(
      name: "IHandleProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IHandleProxy__factory>;
    getContractFactory(
      name: "SubIdeaSBT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SubIdeaSBT__factory>;

    getContractAt(
      name: "ERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155>;
    getContractAt(
      name: "IERC1155MetadataURI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155MetadataURI>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Enumerable>;
    getContractAt(
      name: "IERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Enumerable>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "DID",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DID>;
    getContractAt(
      name: "DIDResolver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DIDResolver>;
    getContractAt(
      name: "IDIDResolver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDIDResolver>;
    getContractAt(
      name: "Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Metadata>;
    getContractAt(
      name: "Price",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Price>;
    getContractAt(
      name: "MockERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockERC20>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "SBT1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SBT1155>;
    getContractAt(
      name: "SBT721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SBT721>;
    getContractAt(
      name: "Comment",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Comment>;
    getContractAt(
      name: "Topic",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Topic>;
    getContractAt(
      name: "ERC721Tradable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Tradable>;
    getContractAt(
      name: "IdeaDID",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IdeaDID>;
    getContractAt(
      name: "IdeaSBT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IdeaSBT>;
    getContractAt(
      name: "IIdeaSBT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IIdeaSBT>;
    getContractAt(
      name: "HandleProxyForDID",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HandleProxyForDID>;
    getContractAt(
      name: "HandleProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HandleProxy>;
    getContractAt(
      name: "IHandleProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IHandleProxy>;
    getContractAt(
      name: "SubIdeaSBT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SubIdeaSBT>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
