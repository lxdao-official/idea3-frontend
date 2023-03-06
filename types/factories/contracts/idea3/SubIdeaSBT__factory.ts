/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SubIdeaSBT,
  SubIdeaSBTInterface,
} from "../../../contracts/idea3/SubIdeaSBT";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_ideaSBT",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri_",
        type: "string",
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
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ideaId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "markdown",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "submitter",
        type: "address",
      },
    ],
    name: "SubIdeaSubmitted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ideaId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "subideaId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "markdown",
        type: "string",
      },
    ],
    name: "editSubIdea",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ideaId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "subideaId",
        type: "uint256",
      },
    ],
    name: "getSubIdea",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ideaId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "markdown",
            type: "string",
          },
          {
            internalType: "address",
            name: "submitter",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "createAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "updateAt",
            type: "uint256",
          },
        ],
        internalType: "struct SubIdeaSBT.SubIdeaStruct",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ideaId",
        type: "uint256",
      },
    ],
    name: "getSubIdeaCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "canEdit",
        type: "bool",
      },
    ],
    name: "setCanEdit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "setFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "feeOn",
        type: "bool",
      },
    ],
    name: "setFeeOn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "subIdeaCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ideaId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "markdown",
        type: "string",
      },
    ],
    name: "submitSubIdea",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "uri",
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
        internalType: "address payable",
        name: "recipient",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040526003805460ff61ffff60a81b011916600160a81b179055662386f26fc100006004553480156200003357600080fd5b5060405162002f4338038062002f43833981016040819052620000569162000176565b806200006281620000a1565b505060038054610100600160a81b0319163361010002179055600780546001600160a01b0319166001600160a01b0392909216919091179055620002b3565b8051620000b6906002906020840190620000ba565b5050565b828054620000c89062000276565b90600052602060002090601f016020900481019282620000ec576000855562000137565b82601f106200010757805160ff191683800117855562000137565b8280016001018555821562000137579182015b82811115620001375782518255916020019190600101906200011a565b506200014592915062000149565b5090565b5b808211156200014557600081556001016200014a565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156200018a57600080fd5b82516001600160a01b0381168114620001a257600080fd5b602084810151919350906001600160401b0380821115620001c257600080fd5b818601915086601f830112620001d757600080fd5b815181811115620001ec57620001ec62000160565b604051601f8201601f19908116603f0116810190838211818310171562000217576200021762000160565b8160405282815289868487010111156200023057600080fd5b600093505b8284101562000254578484018601518185018701529285019262000235565b82841115620002665760008684830101525b8096505050505050509250929050565b600181811c908216806200028b57607f821691505b60208210811415620002ad57634e487b7160e01b600052602260045260246000fd5b50919050565b612c8080620002c36000396000f3fe6080604052600436106101555760003560e01c8063965bc7d2116100bf578063e985e9c511610079578063f2fde38b11610056578063f2fde38b14610474578063f3fe3bc314610494578063fc4064b3146104dd57005b8063e985e9c5146103d1578063ed87539314610427578063f242432a1461045457005b8063b7bf5f72116100a7578063b7bf5f7214610371578063d2b38a4714610384578063d7c903a2146103a457005b8063965bc7d214610331578063a22cb4651461035157005b806351cff8d911610110578063860d248a116100f8578063860d248a1461027b5780638da5cb5b146102c45780639435dbc51461031b57005b806351cff8d91461023b57806369fe0e2d1461025b57005b80630e89341c1161013e5780630e89341c146101c15780632eb2c2d6146101ee5780634e1273f41461020e57005b8062fdd58e1461015e57806301ffc9a71461019157005b3661015c57005b005b34801561016a57600080fd5b5061017e6101793660046121d4565b6104fd565b6040519081526020015b60405180910390f35b34801561019d57600080fd5b506101b16101ac36600461222e565b6105da565b6040519015158152602001610188565b3480156101cd57600080fd5b506101e16101dc366004612252565b6106bf565b60405161018891906122e5565b3480156101fa57600080fd5b5061015c6102093660046124a9565b610784565b34801561021a57600080fd5b5061022e610229366004612557565b61084d565b604051610188919061265f565b34801561024757600080fd5b5061015c610256366004612672565b6109a5565b34801561026757600080fd5b5061015c610276366004612252565b610b01565b34801561028757600080fd5b506101e16040518060400160405280600681526020017f303138303032000000000000000000000000000000000000000000000000000081525081565b3480156102d057600080fd5b506003546102f690610100900473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610188565b34801561032757600080fd5b5061017e60055481565b34801561033d57600080fd5b5061015c61034c36600461268f565b610b93565b34801561035d57600080fd5b5061015c61036c3660046126f4565b610c7f565b61015c61037f366004612729565b610ce1565b34801561039057600080fd5b5061015c61039f366004612766565b610ee0565b3480156103b057600080fd5b5061017e6103bf366004612252565b60009081526006602052604090205490565b3480156103dd57600080fd5b506101b16103ec366004612781565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205460ff1690565b34801561043357600080fd5b506104476104423660046127ba565b610fb8565b60405161018891906127dc565b34801561046057600080fd5b5061015c61046f36600461284c565b611118565b34801561048057600080fd5b5061015c61048f366004612672565b6111da565b3480156104a057600080fd5b506101e16040518060400160405280600681526020017f303138303031000000000000000000000000000000000000000000000000000081525081565b3480156104e957600080fd5b5061015c6104f8366004612766565b611382565b600073ffffffffffffffffffffffffffffffffffffffff83166105a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201527f616c6964206f776e65720000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5060009081526020818152604080832073ffffffffffffffffffffffffffffffffffffffff949094168352929052205490565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a2600000000000000000000000000000000000000000000000000000000148061066d57507fffffffff0000000000000000000000000000000000000000000000000000000082167f0e89341c00000000000000000000000000000000000000000000000000000000145b806106b957507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6007546040517fc87b56dd0000000000000000000000000000000000000000000000000000000081526004810183905260609173ffffffffffffffffffffffffffffffffffffffff169063c87b56dd9060240160006040518083038186803b15801561072a57600080fd5b505afa15801561073e573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526106b991908101906128b5565b73ffffffffffffffffffffffffffffffffffffffff85163314806107ad57506107ad85336103ec565b610839576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206e6f7220617070726f7665640000000000000000000000000000000000606482015260840161059e565b610846858585858561145b565b5050505050565b606081518351146108e0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d617463680000000000000000000000000000000000000000000000606482015260840161059e565b6000835167ffffffffffffffff8111156108fc576108fc6122f8565b604051908082528060200260200182016040528015610925578160200160208202803683370190505b50905060005b845181101561099d5761097085828151811061094957610949612937565b602002602001015185838151811061096357610963612937565b60200260200101516104fd565b82828151811061098257610982612937565b602090810291909101015261099681612995565b905061092b565b509392505050565b60035460408051808201909152600681527f3031383030310000000000000000000000000000000000000000000000000000602082015290610100900473ffffffffffffffffffffffffffffffffffffffff163314610a31576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059e91906122e5565b50604051479060009073ffffffffffffffffffffffffffffffffffffffff84169083908381818185875af1925050503d8060008114610a8c576040519150601f19603f3d011682016040523d82523d6000602084013e610a91565b606091505b5050905080610afc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f6661696c20776974686472617700000000000000000000000000000000000000604482015260640161059e565b505050565b60035460408051808201909152600681527f3031383030310000000000000000000000000000000000000000000000000000602082015290610100900473ffffffffffffffffffffffffffffffffffffffff163314610b8d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059e91906122e5565b50600455565b600083815260086020908152604080832085845290915290206003015473ffffffffffffffffffffffffffffffffffffffff163314610c2e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6e6f7420746865207375626d6974746572000000000000000000000000000000604482015260640161059e565b600083815260086020908152604080832085845282529091208251610c5b92600290920191840190612116565b50506000918252600860209081526040808420928452919052902042600590910155565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f63616e6f7420617070726f766500000000000000000000000000000000000000604482015260640161059e565b600354760100000000000000000000000000000000000000000000900460ff1615610d7257600454341015610d72576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f666565206e6f7420656e6f756768000000000000000000000000000000000000604482015260640161059e565b600082815260066020908152604080832054815160c081018352818152808401878152818401878152336060840152426080840181905260a08401528887526008865284872084885286529390952081518155945160018601559151805191949293610de692600285019290910190612116565b5060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816004015560a08201518160050155905050610e6133846001604051806020016040528060008152506117a3565b600160056000828254610e7491906129ce565b90915550506000838152600660205260408120805460019290610e989084906129ce565b90915550506040517f171ce3401c3b023ef60ea025b4f154b0973566ca62ee694f28ef9c02d486d27790610ed39083908690869033906129e6565b60405180910390a1505050565b60035460408051808201909152600681527f3031383030310000000000000000000000000000000000000000000000000000602082015290610100900473ffffffffffffffffffffffffffffffffffffffff163314610f6c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059e91906122e5565b50600380549115157501000000000000000000000000000000000000000000027fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff909216919091179055565b6110076040518060c00160405280600081526020016000815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b6008600084815260200190815260200160002060008381526020019081526020016000206040518060c0016040529081600082015481526020016001820154815260200160028201805461105a90612a2c565b80601f016020809104026020016040519081016040528092919081815260200182805461108690612a2c565b80156110d35780601f106110a8576101008083540402835291602001916110d3565b820191906000526020600020905b8154815290600101906020018083116110b657829003601f168201915b5050509183525050600382015473ffffffffffffffffffffffffffffffffffffffff166020820152600482015460408201526005909101546060909101529392505050565b73ffffffffffffffffffffffffffffffffffffffff8516331480611141575061114185336103ec565b6111cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206e6f7220617070726f7665640000000000000000000000000000000000606482015260840161059e565b6108468585858585611923565b60035460408051808201909152600681527f3031383030310000000000000000000000000000000000000000000000000000602082015290610100900473ffffffffffffffffffffffffffffffffffffffff163314611266576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059e91906122e5565b5060408051808201909152600681527f3031383030320000000000000000000000000000000000000000000000000000602082015273ffffffffffffffffffffffffffffffffffffffff82166112e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059e91906122e5565b5060035460405173ffffffffffffffffffffffffffffffffffffffff80841692610100900416907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36003805473ffffffffffffffffffffffffffffffffffffffff909216610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff909216919091179055565b60035460408051808201909152600681527f3031383030310000000000000000000000000000000000000000000000000000602082015290610100900473ffffffffffffffffffffffffffffffffffffffff16331461140e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059e91906122e5565b5060038054911515760100000000000000000000000000000000000000000000027fffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffff909216919091179055565b81518351146114ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d61746368000000000000000000000000000000000000000000000000606482015260840161059e565b73ffffffffffffffffffffffffffffffffffffffff841661158f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161059e565b3361159e818787878787611b6f565b60005b845181101561170e5760008582815181106115be576115be612937565b6020026020010151905060008583815181106115dc576115dc612937565b6020908102919091018101516000848152808352604080822073ffffffffffffffffffffffffffffffffffffffff8e1683529093529190912054909150818110156116a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e7366657200000000000000000000000000000000000000000000606482015260840161059e565b60008381526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8e8116855292528083208585039055908b168252812080548492906116f39084906129ce565b925050819055505050508061170790612995565b90506115a1565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051611785929190612a80565b60405180910390a461179b818787878787611c75565b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416611846576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161059e565b33600061185285611f0f565b9050600061185f85611f0f565b905061187083600089858589611b6f565b60008681526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8b168452909152812080548792906118ad9084906129ce565b9091555050604080518781526020810187905273ffffffffffffffffffffffffffffffffffffffff808a1692600092918716917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461191a83600089898989611f5a565b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff84166119c6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161059e565b3360006119d285611f0f565b905060006119df85611f0f565b90506119ef838989858589611b6f565b60008681526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8c16845290915290205485811015611aad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e7366657200000000000000000000000000000000000000000000606482015260840161059e565b60008781526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8d8116855292528083208985039055908a16825281208054889290611af79084906129ce565b9091555050604080518881526020810188905273ffffffffffffffffffffffffffffffffffffffff808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4611b64848a8a8a8a8a611f5a565b505050505050505050565b60035460ff1615611bf75773ffffffffffffffffffffffffffffffffffffffff8416611bf7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f63616e6f74206275726e00000000000000000000000000000000000000000000604482015260640161059e565b73ffffffffffffffffffffffffffffffffffffffff85161561179b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f63616e6f74207472616e73666572000000000000000000000000000000000000604482015260640161059e565b73ffffffffffffffffffffffffffffffffffffffff84163b1561179b576040517fbc197c8100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063bc197c8190611cec9089908990889088908890600401612aae565b602060405180830381600087803b158015611d0657600080fd5b505af1925050508015611d54575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252611d5191810190612b19565b60015b611e3e57611d60612b36565b806308c379a01415611db45750611d75612b52565b80611d805750611db6565b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059e91906122e5565b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e204552433131353560448201527f526563656976657220696d706c656d656e746572000000000000000000000000606482015260840161059e565b7fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c81000000000000000000000000000000000000000000000000000000001461191a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e73000000000000000000000000000000000000000000000000606482015260840161059e565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110611f4957611f49612937565b602090810291909101015292915050565b73ffffffffffffffffffffffffffffffffffffffff84163b1561179b576040517ff23a6e6100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063f23a6e6190611fd19089908990889088908890600401612bfa565b602060405180830381600087803b158015611feb57600080fd5b505af1925050508015612039575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261203691810190612b19565b60015b61204557611d60612b36565b7fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e61000000000000000000000000000000000000000000000000000000001461191a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e73000000000000000000000000000000000000000000000000606482015260840161059e565b82805461212290612a2c565b90600052602060002090601f016020900481019282612144576000855561218a565b82601f1061215d57805160ff191683800117855561218a565b8280016001018555821561218a579182015b8281111561218a57825182559160200191906001019061216f565b5061219692915061219a565b5090565b5b80821115612196576000815560010161219b565b73ffffffffffffffffffffffffffffffffffffffff811681146121d157600080fd5b50565b600080604083850312156121e757600080fd5b82356121f2816121af565b946020939093013593505050565b7fffffffff00000000000000000000000000000000000000000000000000000000811681146121d157600080fd5b60006020828403121561224057600080fd5b813561224b81612200565b9392505050565b60006020828403121561226457600080fd5b5035919050565b60005b8381101561228657818101518382015260200161226e565b83811115612295576000848401525b50505050565b600081518084526122b381602086016020860161226b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061224b602083018461229b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff8211171561236b5761236b6122f8565b6040525050565b600067ffffffffffffffff82111561238c5761238c6122f8565b5060051b60200190565b600082601f8301126123a757600080fd5b813560206123b482612372565b6040516123c18282612327565b83815260059390931b85018201928281019150868411156123e157600080fd5b8286015b848110156123fc57803583529183019183016123e5565b509695505050505050565b600067ffffffffffffffff821115612421576124216122f8565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261245e57600080fd5b813561246981612407565b6040516124768282612327565b82815285602084870101111561248b57600080fd5b82602086016020830137600092810160200192909252509392505050565b600080600080600060a086880312156124c157600080fd5b85356124cc816121af565b945060208601356124dc816121af565b9350604086013567ffffffffffffffff808211156124f957600080fd5b61250589838a01612396565b9450606088013591508082111561251b57600080fd5b61252789838a01612396565b9350608088013591508082111561253d57600080fd5b5061254a8882890161244d565b9150509295509295909350565b6000806040838503121561256a57600080fd5b823567ffffffffffffffff8082111561258257600080fd5b818501915085601f83011261259657600080fd5b813560206125a382612372565b6040516125b08282612327565b83815260059390931b85018201928281019150898411156125d057600080fd5b948201945b838610156125f75785356125e8816121af565b825294820194908201906125d5565b9650508601359250508082111561260d57600080fd5b5061261a85828601612396565b9150509250929050565b600081518084526020808501945080840160005b8381101561265457815187529582019590820190600101612638565b509495945050505050565b60208152600061224b6020830184612624565b60006020828403121561268457600080fd5b813561224b816121af565b6000806000606084860312156126a457600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156126c957600080fd5b6126d58682870161244d565b9150509250925092565b803580151581146126ef57600080fd5b919050565b6000806040838503121561270757600080fd5b8235612712816121af565b9150612720602084016126df565b90509250929050565b6000806040838503121561273c57600080fd5b82359150602083013567ffffffffffffffff81111561275a57600080fd5b61261a8582860161244d565b60006020828403121561277857600080fd5b61224b826126df565b6000806040838503121561279457600080fd5b823561279f816121af565b915060208301356127af816121af565b809150509250929050565b600080604083850312156127cd57600080fd5b50508035926020909101359150565b6020815281516020820152602082015160408201526000604083015160c0606084015261280c60e084018261229b565b905073ffffffffffffffffffffffffffffffffffffffff6060850151166080840152608084015160a084015260a084015160c08401528091505092915050565b600080600080600060a0868803121561286457600080fd5b853561286f816121af565b9450602086013561287f816121af565b93506040860135925060608601359150608086013567ffffffffffffffff8111156128a957600080fd5b61254a8882890161244d565b6000602082840312156128c757600080fd5b815167ffffffffffffffff8111156128de57600080fd5b8201601f810184136128ef57600080fd5b80516128fa81612407565b6040516129078282612327565b82815286602084860101111561291c57600080fd5b61292d83602083016020870161226b565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156129c7576129c7612966565b5060010190565b600082198211156129e1576129e1612966565b500190565b848152836020820152608060408201526000612a05608083018561229b565b905073ffffffffffffffffffffffffffffffffffffffff8316606083015295945050505050565b600181811c90821680612a4057607f821691505b60208210811415612a7a577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b604081526000612a936040830185612624565b8281036020840152612aa58185612624565b95945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525060a06040830152612ae760a0830186612624565b8281036060840152612af98186612624565b90508281036080840152612b0d818561229b565b98975050505050505050565b600060208284031215612b2b57600080fd5b815161224b81612200565b600060033d1115612b4f5760046000803e5060005160e01c5b90565b600060443d1015612b605790565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc803d016004833e81513d67ffffffffffffffff8160248401118184111715612bae57505050505090565b8285019150815181811115612bc65750505050505090565b843d8701016020828501011115612be05750505050505090565b612bef60208286010187612327565b509095945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525084604083015283606083015260a06080830152612c3f60a083018461229b565b97965050505050505056fea26469706673582212207123b09b35f06c941bd0285c0104115bafb04c68cca02e69e5b483650f7cc16964736f6c63430008090033";

type SubIdeaSBTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SubIdeaSBTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SubIdeaSBT__factory extends ContractFactory {
  constructor(...args: SubIdeaSBTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _ideaSBT: PromiseOrValue<string>,
    uri_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SubIdeaSBT> {
    return super.deploy(_ideaSBT, uri_, overrides || {}) as Promise<SubIdeaSBT>;
  }
  override getDeployTransaction(
    _ideaSBT: PromiseOrValue<string>,
    uri_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_ideaSBT, uri_, overrides || {});
  }
  override attach(address: string): SubIdeaSBT {
    return super.attach(address) as SubIdeaSBT;
  }
  override connect(signer: Signer): SubIdeaSBT__factory {
    return super.connect(signer) as SubIdeaSBT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SubIdeaSBTInterface {
    return new utils.Interface(_abi) as SubIdeaSBTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SubIdeaSBT {
    return new Contract(address, _abi, signerOrProvider) as SubIdeaSBT;
  }
}
