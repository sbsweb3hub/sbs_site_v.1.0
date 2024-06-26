import { create } from "zustand";
import { Contract, ethers } from "ethers";
import ERC20abi from "../app/ERC20"; // TODO: move to common place
import abiCreateProject from "./abi/abiCreateProject";
import abiProjectsKeeper from "./abi/abiProjectsKeeper";
import abiVoting from "./abi/abiVoting";
import abiStartFunds from "./abi/abiStartFunds";
import abiOrdering from "./abi/abiOrdering";
import abiClaiming from "./abi/abiClaiming";
import abiGetFundForProject from "./abi/abiGetFundForProject";

interface WalletState {
  isConnect: boolean;
  account: string;
  provider: ethers.BrowserProvider | any;
  signer: ethers.Signer | null;
  network: ethers.Network | null;
  isOpenCommonModal: boolean;
  contentCommonModal: string;
  isOpenModalConnect: boolean;
  positionManagerContractAddress: string;
  USDTContractAddress: string;
  ETHContractAddress: string;
  contractSigner: ethers.Contract | any;
  usdtSigner: ethers.Contract | any;
  ethSigner: ethers.Contract | any;
  createProjectSigner: ethers.Contract | any;
  positionManagerContractAbi: string;
  USDTContractAbi: string[];
  ETHContractAbi: string[];
  contractAddrCreateProject: string;
  ABIcreateProject: any[];
  ABIprojectsKeeper: any[];
  ABIvoting: any[];
  ABIstartFunds: any[];
  ABIordering: any[];
  ABIclaiming: any[];
  ABIgetFunds: any[];
  networks: any[];
  setIsOpenModalConnect: (isOpen: boolean) => void;
  setIsOpenCommonModal: (isOpen: boolean) => void;
  setContentCommonModal: (content: string) => void;
  setIsConnect: (isConnect: boolean) => void;
  setAccount: (account: string) => void;
  setProvider: (provider: ethers.BrowserProvider | null) => void;
  setSigner: (signer: ethers.Signer | null) => void;
  setNetwork: (network: ethers.Network | null) => void;
  setContractSigner: (signer: ethers.Contract | any) => void;
  setUsdtSigner: (signer: ethers.Contract | any) => void;
  setEthSigner: (signer: ethers.Contract | any) => void;
  setCreateProjectSigner: (signer: ethers.Contract | any) => void;
  reinitializeContracts: () => void;
  handleIsConnected: () => void;
  handleConnectNotice: () => void;
  switchNetwork: (chainID: any) => void;
  disconnectWallet: () => void;
}

export const useWalletStore = create<WalletState>((set, get) => ({
  isConnect: false,
  account: "",
  provider: "",
  signer: null,
  network: null,
  isOpenCommonModal: false,
  contentCommonModal: "Error",
  contractSigner: "",
  usdtSigner: "",
  ethSigner: "",
  createProjectSigner: "",
  contractAddrCreateProject: process.env.CREATE_PROJECT_CONTRACT!,
  positionManagerContractAddress: process.env.NEXT_PUBLIC_POSITION_MANAGER_ADDRESS_MUMBAI!,
  USDTContractAddress: process.env.NEXT_PUBLIC_USDT_ERC20_ADDRESS_MUMBAI!,
  ETHContractAddress: process.env.NEXT_PUBLIC_ETH_ERC20_ADDRESS_MUMBAI!,
  positionManagerContractAbi: process.env.NEXT_PUBLIC_POSITION_MANAGER_ABI!,
  USDTContractAbi: ERC20abi,
  ETHContractAbi: ERC20abi,
  ABIcreateProject: abiCreateProject,
  ABIprojectsKeeper: abiProjectsKeeper,
  ABIvoting: abiVoting,
  ABIstartFunds: abiStartFunds,
  ABIordering: abiOrdering,
  ABIclaiming: abiClaiming,
  ABIgetFunds: abiGetFundForProject,
  isOpenModalConnect: false,
  networks: [
    {
      name: "Polygon",
      chainId: "0x89",
    },
    {
      name: "Polygon Mumbai",
      chainId: "0x13881",
    },
  ],
  switchNetwork: async (chainId) => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId }],
        });
        get().reinitializeContracts();
      } else {
        console.log("MetaMask is not installed!");
      }
    } catch (error) {
      console.error("Failed to switch network", error);
    }
  },
  disconnectWallet: () => {
    set({
      isConnect: false,
      account: "",
      provider: null,
      signer: null,
      network: null,
    });
  },
  setIsOpenModalConnect: (isOpen) => set({ isOpenModalConnect: isOpen }),
  setIsConnect: (isConnect) => set(() => ({ isConnect })),
  setAccount: (account) => set(() => ({ account })),
  setProvider: (provider) => set(() => ({ provider })),
  setSigner: (signer) => set(() => ({ signer })),
  setNetwork: (network) => set(() => ({ network })),
  setIsOpenCommonModal: (isOpen) => set({ isOpenCommonModal: isOpen }),
  setContentCommonModal: (content) => set({ contentCommonModal: content }),
  setContractSigner: (contract) => set({ contractSigner: contract }),
  setUsdtSigner: (contract) => set({ usdtSigner: contract }),
  setEthSigner: (contract) => set({ ethSigner: contract }),
  setCreateProjectSigner: (contract) => set({createProjectSigner: contract}),
  reinitializeContracts: async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = (await window.ethereum.request({
        method: "eth_requestAccounts",
      })) as string[];
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const network = await provider.getNetwork();
      const {
        positionManagerContractAddress,
        USDTContractAddress,
        ETHContractAddress,
        positionManagerContractAbi,
        USDTContractAbi,
        ETHContractAbi,
        contractAddrCreateProject,
        ABIcreateProject,
        ABIprojectsKeeper,
        ABIvoting,
        ABIstartFunds,
        ABIordering,
        ABIclaiming,
        ABIgetFunds,
      } = get();

      const newContractSigner = new ethers.Contract(
        positionManagerContractAddress,
        positionManagerContractAbi,
        signer
      );

      const newUsdtSigner = new ethers.Contract(
        USDTContractAddress,
        USDTContractAbi,
        signer
      );

      const newEthSigner = new ethers.Contract(
        ETHContractAddress,
        ETHContractAbi,
        signer
      );

      // const newCreateProjectSigner = new ethers.Contract(
      //   contractAddrCreateProject,
      //   ABIcreateProject,
      //   signer
      // );

      set({
        account: accounts[0],
        provider,
        signer,
        network,
        isConnect: true,
        isOpenModalConnect: false,
        contractSigner: newContractSigner,
        usdtSigner: newUsdtSigner,
        ethSigner: newEthSigner,
       // createProjectSigner: newCreateProjectSigner,
      });
    }
  },

  handleIsConnected: async () => {
    console.log("handleIsConnected");
    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
    } else {
      await get().reinitializeContracts();
      const { network } = get();
      if (network) {
        if (Number(network.chainId) !== 11155111) {
          console.log("Wrong network. Need Sepolia");
          // Обновите состояние, используя методы set

          try {
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [
                {
                  chainId: "0xaa36a7",
                },
              ],
            });
          } catch (switchError) {
            if (switchError.code === 4902) {
              try {
                await window.ethereum.request({
                  method: "wallet_addEthereumChain",
                  params: [
                    {
                      chainId: "0xaa36a7",
                      chainName: "Sepolia",
                      rpcUrls: ["https://eth-sepolia.g.alchemy.com/v2/demo/"],
                      nativeCurrency: {
                        name: "ETH",
                        symbol: "ETH",
                        decimals: 18,
                      },
                      blockExplorerUrls: ["https://sepolia.etherscan.io/"],
                    },
                  ],
                });
              } catch (addError) {
                console.error("Failed to add the network", addError);
              } finally {
                await get().reinitializeContracts();
              }
            } else {
              // Обработка других ошибок
              console.error("Failed to switch the network", switchError);
            }
          } finally {
            await get().reinitializeContracts();
          }
        } else {
          await get().reinitializeContracts();
        }
      }
    }
  },
  handleConnectNotice: () => {
    set({
      isOpenCommonModal: true,
      contentCommonModal: "Please connect to MetaMask!",
    });
  },
}));
