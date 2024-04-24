"use client";
import { ethers } from "ethers";
import React, { useState, useEffect, ChangeEvent } from "react";
import { Button, Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { MetaMaskInpageProvider } from "@metamask/providers";
import ModalWindow from "../ModalWindowConnect";
import CommonModalWindow from "../CommonModalWindow";
import ModalWindowTx from "../ModalWindowTx";
import ERC20abi from "../ERC20";
import { useWalletStore } from "@/service/store";
import { AmountStepsSelects } from "./AmountStepsSelects/index";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}
interface Accounts {
  [key: number]: any;
}

export default function Home() {
  const {
    handleIsConnected,
    isConnect,
    account,
    handleConnectNotice,
    provider,
    signer,
    contractSigner,
    usdtSigner,
    ethSigner,
    //createProjectSigner,
    //contractAddrCreateProject,
    ABIcreateProject,
    isOpenModalConnect,
    setIsOpenModalConnect,
    setIsOpenCommonModal,
    isOpenCommonModal,
    contentCommonModal,
    setContentCommonModal,
    positionManagerContractAddress,
    USDTContractAddress,
    ETHContractAddress,
  } = useWalletStore();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isOpenModalTx, setIsOpenModalTx] = useState<boolean>(false);
  const [coin, setCoin] = useState<string>("");
  const [deal, setDeal] = useState<string>("");
 // const [isCoin, setIsCoin] = useState<boolean>(false);
 // const [isDeal, setIsDeal] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [symbol, setSymbol] = useState<string>("");
  const [amountCoin, setAmountCoin] = useState<string>("");
  const [targetPrice, setTargetPrice] = useState<string>("");
  const [maxSupply, setMaxSupply] = useState<string>("");
  const [publicSeed, setPublicSeed] = useState<string>("");
  const [minSeed, setMinSeed] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [amountSteps, setAmountSteps] = useState<string>("");

  const [txhash, setTxhash] = useState("");

  const miniTxhash = txhash.substring(0, 5) + "....." + txhash.slice(45);
  const hashLink = process.env.NEXT_PUBLIC_HASH_LINK_MUMBAI;
  const hashLinkPlus = hashLink + txhash;

  // const ERC20_ETH = new ethers.Contract(ETHContractAddress, ERC20abi, provider);
  // const ERC20_USDC = new ethers.Contract(
  //   USDTContractAddress,
  //   ERC20abi,
  //   provider
  // );
  const addrCreateProject = "0xEaE9C5B069e3d068b990C1fc1DD200A44e87D7F7";
  const createProjectSigner = new ethers.Contract(
      addrCreateProject,
      ABIcreateProject,
      signer
    );

  const [priceUSDC_ETH, setPriceUSDC_ETH] = useState<number>(0);
 // const [priceUSDT_BTC, setPriceUSDT_BTC] = useState<number>(0);

  // const getOpenBuyPosition = async () => {
  //   onOpenChange();

  //   try {
  //     const allowance = await usdtSigner.allowance(
  //       account,
  //       positionManagerContractAddress
  //     );

  //     const allowanceToString = ethers.formatUnits(allowance, 0);
  //     const allowanceToNumber = +allowanceToString / 10 ** 18;
  //     const amountCoinBigint = ethers.parseUnits(amountCoin, 18);
  //     const amountCoin_ = ethers.formatUnits(amountCoinBigint, 0);
  //     let targetPriceReady = BigInt(Math.sqrt(1 / +targetPrice) * 2 ** 96);
  //     let targetReady_ = targetPriceReady.toString();

  //     const maxUint256 = ethers.MaxInt256;

  //     allowanceToNumber < +amountCoin
  //       ? await usdtSigner.approve(positionManagerContractAddress, maxUint256)
  //       : null;

  //     const tx = await contractSigner.openBuyPosition(
  //       USDTContractAddress,
  //       ETHContractAddress,
  //       "3000",
  //       targetReady_,
  //       amountCoin_,
  //       "0",
  //       {
  //         gasLimit: 850000,
  //       }
  //     );

  //     setTxhash(tx.hash);
  //     setIsOpenModalTx(true);
  //     const response = await tx.wait();
  //     setIsOpenModalTx(false);
  //     console.log("responseTxSwap1: ", response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const getOpenSellPosition = async () => {
  //   onOpenChange();
  //   try {
  //     const allowance = await ethSigner.allowance(
  //       account,
  //       positionManagerContractAddress
  //     );

  //     const allowanceToString = ethers.formatUnits(allowance, 0);
  //     const allowanceToNumber = +allowanceToString / 10 ** 18;
  //     const amountCoinBigint = ethers.parseUnits(amountCoin, 18);
  //     const amountCoin_ = ethers.formatUnits(amountCoinBigint, 0);
  //     let targetPriceReady = BigInt(Math.sqrt(1 / +targetPrice) * 2 ** 96);
  //     let targetReady_ = targetPriceReady.toString();

  //     const maxUint256 = ethers.MaxInt256;

  //     allowanceToNumber < +amountCoin
  //       ? await ethSigner.approve(positionManagerContractAddress, maxUint256)
  //       : null;

  //     const tx = await contractSigner.openSellPosition(
  //       USDTContractAddress,
  //       ETHContractAddress,
  //       "3000",
  //       targetReady_,
  //       amountCoin_,
  //       "0",
  //       {
  //         gasLimit: 850000,
  //       }
  //     );

  //     setTxhash(tx.hash);
  //     setIsOpenModalTx(true);
  //     const response = await tx.wait();
  //     setIsOpenModalTx(false);
  //     console.log("responseTxSwap1: ", response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleOpenModal = async () => {
    onOpenChange();
  };
  const handleOpenCommonChange = async () => {
    setIsOpenCommonModal(false);
  };
  const handleOpenModalTx = async () => {
    setIsOpenModalTx(false);
  };

  // set the price
  // useEffect(() => {
  //   (async () => {
  //     if (isCoin && isDeal) {
  //       const sqrtPriceX96EthUsdt = await contractSigner.getCurrentSqrtPriceX96(
  //         ETHContractAddress,
  //         USDTContractAddress,
  //         "3000"
  //       );
  //       // console.log("sqrtPriceX96EthUsdt", sqrtPriceX96EthUsdt);
  //       const priceUSDT_ETH = Number(sqrtPriceX96EthUsdt) ** 2 / 2 ** 192;
  //       // console.log("priceUSDT_ETH: ", 1 / priceUSDT_ETH);
  //       setPriceUSDC_ETH(1 / priceUSDT_ETH);

  //     }
  //   })();
  // }, [isCoin, isDeal]); // eslint-disable-line react-hooks/exhaustive-deps

  // check errors
  
  // const previewOrder = async () => {
  //   const balanceInWeiUSDC = await ERC20_USDC.balanceOf(account);
  //   const balanceUSDC: string = ethers.formatEther(balanceInWeiUSDC);
  //   const balanceUSDCview: number = Number(balanceUSDC) * 10 ** 12;
  //   console.log("balanceUSDCview: ", balanceUSDCview);

  //   //const balanceInWeiETH = await provider.getBalance(account);
  //   const balanceInWeiETH = await ERC20_ETH.balanceOf(account);
  //   const balanceETH: string = ethers.formatEther(balanceInWeiETH);
  //   const balanceETHview: number = Number(balanceETH);
  //   console.log("ETHbalance: ", balanceETHview);

  //   if (deal == "BUY" && Number(amountCoin) > balanceUSDCview) {
  //     setIsOpenCommonModal(true);
  //     setContentCommonModal("Incorrect amount! You don't have enough USDC");
  //     setAmountCoin("");
  //   } else if (
  //     coin == "ETH" &&
  //     deal == "SELL" &&
  //     Number(amountCoin) > balanceETHview
  //   ) {
  //     setIsOpenCommonModal(true);
  //     setContentCommonModal("Incorrect amount! You don't have enough ETH");
  //     setAmountCoin("");
  //   } else {
  //     if (
  //       coin == "WBTC" &&
  //       deal == "BUY" &&
  //       Number(targetPrice) > priceUSDT_BTC
  //     ) {
  //       setIsOpenCommonModal(true);
  //       setContentCommonModal(
  //         "Incorrect target price. NEED LOWER than current price!"
  //       );
  //       setTargetPrice("");
  //     } else if (
  //       coin == "WBTC" &&
  //       deal == "SELL" &&
  //       Number(targetPrice) < priceUSDT_BTC
  //     ) {
  //       setIsOpenCommonModal(true);
  //       setContentCommonModal(
  //         "Incorrect target price. NEED UPPER than current price!"
  //       );
  //       setTargetPrice("");
  //     } else if (
  //       coin == "ETH" &&
  //       deal == "BUY" &&
  //       Number(targetPrice) > priceUSDC_ETH
  //     ) {
  //       setIsOpenCommonModal(true);
  //       setContentCommonModal(
  //         "Incorrect target price. NEED LOWER than current price!"
  //       );
  //       setTargetPrice("");
  //     } else if (
  //       coin == "ETH" &&
  //       deal == "SELL" &&
  //       Number(targetPrice) < priceUSDC_ETH
  //     ) {
  //       setIsOpenCommonModal(true);
  //       setContentCommonModal(
  //         "Incorrect target price. NEED UPPER than current price!"
  //       );
  //       setTargetPrice("");
  //     } else {
  //       onOpenChange();
  //       countAverage();
  //     }
  //   }
  // };
  const [stepMonth_1, setStepMonth_1] = useState<string>("");
  const [stepMonth_2, setStepMonth_2] = useState<string>("");
  const [stepMonth_3, setStepMonth_3] = useState<string>("");
  const [stepMonth_4, setStepMonth_4] = useState<string>("");
  const [stepMonth_5, setStepMonth_5] = useState<string>("");
  const [stepMonth_6, setStepMonth_6] = useState<string>("");
  const [timeframeProject, setTimeframeProject] = useState<any>("")
  //var timeframeProject: any = new Array();
  
  const createProject = async () => {
    const priceBigint = ethers.parseUnits(price, 18);
    const _priceBigint = ethers.formatUnits(priceBigint, 0);

    const maxSupplyBigint = ethers.parseUnits(maxSupply, 18);
    const _maxSupplyBigint = ethers.formatUnits(maxSupplyBigint, 0);
  
    const minSeedBigint = ethers.parseUnits(minSeed, 18);
    const _minSeedBigint = ethers.formatUnits(minSeedBigint, 0);

    const publicSeedBigint = ethers.parseUnits(publicSeed, 18);
    const _publicSeedBigint = ethers.formatUnits(publicSeedBigint, 0);

    try {
    const tx = await createProjectSigner.create(
            name,
            symbol,
            _maxSupplyBigint,
            _minSeedBigint,
            _priceBigint,
            _publicSeedBigint,
            amountSteps,
            timeframeProject
          );
          setTxhash(tx.hash);
          console.log({tx});
          onOpen();
          setIsOpenModalTx(true);
           const response = await tx.wait();
          setIsOpenModalTx(false);
         console.log("responseTx: ", response);
        // window.location.replace("/ownerprojects");
    } catch (error) {
      onOpen();
      console.error(error);
    }

  }
  const previewProject = async () => {
    // check errors
    if (name != "" && symbol != "" && maxSupply != "" && publicSeed != "" && minSeed != "" && price != "" && amountSteps != "") {
      if(+maxSupply <= +publicSeed) {
        setIsOpenCommonModal(true);
        setContentCommonModal("MaxSupply need more than tokens for seed!");
      } else if(+publicSeed < +minSeed) {
        setIsOpenCommonModal(true);
        setContentCommonModal("Tokens for seed need more than MinSeed!");
      } else {
       onOpenChange();
       var timeframeProject2: any = new Array();
       const monthTime: number = 60; //2592000; // 1 month = 30 days
       timeframeProject2.push((+stepMonth_1 * monthTime).toString());
       timeframeProject2.push((+stepMonth_2 * monthTime).toString());
       timeframeProject2.push((+stepMonth_3 * monthTime).toString());
       timeframeProject2.push((+stepMonth_4 * monthTime).toString());
       if(amountSteps == "5") {
        timeframeProject2.push((+stepMonth_5 * monthTime).toString());
       } else if(amountSteps == "6") {
        timeframeProject2.push((+stepMonth_5 * monthTime).toString());
        timeframeProject2.push((+stepMonth_6 * monthTime).toString());
       }
        setTimeframeProject(timeframeProject2);
      }
         } else {
          setIsOpenCommonModal(true);
          setContentCommonModal("All values must be filled in!");
      }
  }

  // input name
  const setTokenName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  // input symbol
  const setTokenSymbol = (e: ChangeEvent<HTMLInputElement>) => {
    setSymbol((e.target.value).toUpperCase());
  };
    // input max supply
  const setTokenMaxSupply = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxSupply(e.target.value);
  };
  // input publis seed
  const setTokenPublicSeed = (e: ChangeEvent<HTMLInputElement>) => {
    setPublicSeed(e.target.value);
  };
    // input seed
  const setTokenPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };
  // input minimun seed
  const setTokenMinSeed = (e: ChangeEvent<HTMLInputElement>) => {
    setMinSeed(e.target.value);
  };
    // input amount steps
//   const setTokenAmountSteps = (e: ChangeEvent<HTMLInputElement>) => {
//     setAmountSteps(e.target.value);
//   };
  //
  function setTokenAmountSteps(e: React.ChangeEvent<HTMLSelectElement>) {
    var currectAmountSteps = amountSteps;
    if(currectAmountSteps != e.target.value) {
      setStepMonth_1("");
      setStepMonth_2("");
      setStepMonth_3("");
      setStepMonth_4("");
      setStepMonth_5("");
      setStepMonth_6("");
    }
    setAmountSteps(e.target.value);
}

  const [halfPrice, setHalfPrice] = useState<number>(0);
  const [predictBuySell, setPredictBuySell] = useState<number>(0);
  const [feeProfit, setFeeProfit] = useState<number>(0);
  //count average buy/sell
  const countAverage = () => {
    const annualPercent = 50;
    // buy
    if (deal == "BUY") {
      const halfPrice =
        (priceUSDC_ETH - Number(targetPrice)) / 2 + Number(targetPrice);
      setHalfPrice(halfPrice);
      const predictBuySell = Number(amountCoin) / halfPrice;
      setPredictBuySell(predictBuySell);
      const feeProfit = ((Number(amountCoin) / 100) * annualPercent) / 365;
      setFeeProfit(feeProfit);
    } else {
      // sell
      const halfPrice =
        (Number(targetPrice) - priceUSDC_ETH) / 2 + priceUSDC_ETH;
      setHalfPrice(halfPrice);
      const predictBuySell = halfPrice * Number(amountCoin);
      setPredictBuySell(predictBuySell);
      const feeProfit = ((predictBuySell / 100) * annualPercent) / 365;
      setFeeProfit(feeProfit);
    }
  };
  // bg-gradient-to-r from-cyan-500 to-blue-500 // bg-[url('../public/owl.svg')]
  return (
    <>
        <>
            <div className="flex flex-col h-screen flex flex-col items-center
             bg-[url('../public/shots_clear.png')]
            ">
              <div className=" flex flex-col items-center
               
                
                rounded-[15px] max-[466px]:w-11/12 max-640px]:px-[15px] max-[640px]:pb-[15px] sm:w-[464px] sm:h-[310px] mt-[129px] max-[472px]:mx-[10px]">
                {!isConnect ? (
                  <>
                    <div className="font-bold flex min-[466px]:flex-wrap max-[466px]:grid max-[466px]:grid-cols-1 md:flex-nowrap max-[466px]:gap-[15px] gap-[41px] mt-[15px]">
                      <Input
                        onChange={setTokenName}
                        value={name}
                        type="text"
                        label="Token's name"
                        variant="bordered"
                        className="w-[187px]"
                        radius="lg"
                        size="sm"
                      />
                      <Input
                        onChange={setTokenSymbol}
                        value={symbol}
                        type="text"
                        label="Token's symbol"
                        variant="bordered"
                        className="w-[187px]"
                        radius="lg"
                        size="sm"
                      />
                    </div>
                    <div className="font-bold flex min-[466px]:flex-wrap max-[466px]:grid max-[466px]:grid-cols-1 md:flex-nowrap max-[466px]:gap-[15px] gap-[41px] mt-[15px]">
                      <Input
                        onChange={setTokenMaxSupply}
                        value={maxSupply}
                        type="number"
                        label="Token's max supply"
                        variant="bordered"
                        className="w-[187px]"
                        radius="lg"
                        size="sm"
                      />
                      <Input
                        onChange={setTokenPublicSeed}
                        value={publicSeed}
                        type="number"
                        label="Tokens for seed"
                        variant="bordered"
                        className="w-[187px]"
                        radius="lg"
                        size="sm"
                      />
                    </div>
                    <div className="font-bold flex min-[466px]:flex-wrap max-[466px]:grid max-[466px]:grid-cols-1 md:flex-nowrap max-[466px]:gap-[15px] gap-[41px] mt-[15px]">
                      <Input
                        onChange={setTokenPrice}
                        value={price}
                        type="number"
                        label="Token's price"
                        variant="bordered"
                        className="w-[187px]"
                        radius="lg"
                        size="sm"
                      />
                      <Input
                        onChange={setTokenMinSeed}
                        value={minSeed}
                        type="number"
                        label="Min tokens seed"
                        variant="bordered"
                        className="w-[187px]"
                        radius="lg"
                        size="sm"
                      />
                    </div>
  {/* BOTTON PREVIEW bg-[#F9607CF0]*/}
                  {amountSteps == "4" && stepMonth_1 && stepMonth_2 && stepMonth_3 && stepMonth_4
                  ||
                  amountSteps == "5" && stepMonth_1 && stepMonth_2 && stepMonth_3 && stepMonth_4 && stepMonth_5
                  ||
                  amountSteps == "6" && stepMonth_1 && stepMonth_2 && stepMonth_3 && stepMonth_4 && stepMonth_5 && stepMonth_6
                  ? 
                  <div>
                    <Button
                      onClick={previewProject}
                      className="
                      bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
                      text-white w-[185px] h-[36px] rounded-[15px] mt-[18px] font-semibold font-inter text-[16px]"
                    >
                      Preview Order
                    </Button>
                    </div>
                   : "" }

                    <div className="font-bold flex min-[466px]:flex-wrap max-[466px]:grid max-[466px]:grid-cols-1 md:flex-nowrap max-[466px]:gap-[15px] gap-[41px] mt-[15px]">
              
                      <Select
                        onChange={setTokenAmountSteps}
                        variant="bordered"
                        label="Amount steps"
                        //placeholder="Amount steps"
                        className="w-[187px] mb-3"
                        radius="lg"
                        size="sm"
                        aria-label="coin"
                       >
                       <SelectItem key="0" value="0">roll up</SelectItem>
                       <SelectItem key="4" value="4">4</SelectItem>
                       <SelectItem key="5" value="5">5</SelectItem>
                       <SelectItem key="6" value="6">6</SelectItem>
                     </Select>
                
                     </div>

                     <AmountStepsSelects 
                        amountSteps={amountSteps}
                        handleStepMonth_1={(event) => setStepMonth_1(event.target.value)}
                        handleStepMonth_2={(event) => setStepMonth_2(event.target.value)}
                        handleStepMonth_3={(event) => setStepMonth_3(event.target.value)}
                        handleStepMonth_4={(event) => setStepMonth_4(event.target.value)}
                        handleStepMonth_5={(event) => setStepMonth_5(event.target.value)}
                        handleStepMonth_6={(event) => setStepMonth_5(event.target.value)}
                     />

                    <>
                      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                        <ModalContent className="flex flex-col items-center">
                          {(onClose) => (
                            <>
                              <ModalHeader className="text-[#F9607C]">
                                Your Project
                              </ModalHeader>
                              <ModalBody className="flex flex-row">
                                <div className="text-right">
                                  <p>{" "}Token's name:{" "}{name}{" "}</p>
                                  <p>{" "}Token's symbol:{" "}{symbol}{" "}</p>
                                  <p>{" "}Max supply:{" "}{Number(maxSupply).toFixed(1)}{" $"}{symbol}</p>
                                  <p>{" "}Public seed:{" "}{Number(publicSeed).toFixed(1)}{" $"}{symbol}</p>
                                  <p>{" "}Minimum need:{" "}{Number(minSeed).toFixed(1)}{" $"}{symbol}</p>
                                  <p>{" "}Token's price:{" "}{Number(price).toFixed(4)}{" $Matic"}</p>
                                  <p>{" "}Amount steps:{" "}{amountSteps}{" "}</p>
                                  <p>{" "}Public seed round:{" "}{stepMonth_1}{" month/s"}</p>
                                  <p>{" "}First sprint:{" "}{stepMonth_2}{" month/s"}</p>
                                  <p>{" "}Second sprint:{" "}{stepMonth_3}{" month/s"}</p>
                                  <p>{" "}
                                  {amountSteps == "4" ? "Last force:" : "Third sprint:"}
                                     {" "}{stepMonth_4}{" month/s"}</p>

                                  {amountSteps == "5" || amountSteps == "6" ? 
                                  <p>{" "}
                                  {amountSteps == "5" ? "Last force:" : "Fourth sprint:"}
                                     {" "}{stepMonth_5}{" month/s"}</p>
                                  : "" }
                                  {amountSteps == "6" ? 
                                  <p>{" "}Last force:{" "}{stepMonth_6}{" month/s"}</p>
                                  : "" }
                                </div>
                              </ModalBody>
                              <ModalFooter>
                                <Button color="danger" onPress={onClose}>
                                  Change data
                                </Button>
                                <Button
                                  color="primary"
                                  onPress={createProject}
                                >
                                  Let's do it
                                </Button>
                              </ModalFooter>
                            </>
                          )}
                        </ModalContent>
                      </Modal>
                    </>
                  </>
                ) : (
                  <div className="text-center mt-[25px]">
                    <p> Please choose the asset </p>
                    <p> you want to use </p>
                    <p> and</p>
                    <p> option you want to deal</p>
                    <p> </p>
                  </div>
                )}
              </div>
            </div>
      </>
      <ModalWindow
        isConnect={isConnect}
        isOpenModalConnect={isOpenModalConnect}
        onOpenChange={handleOpenModal}
        onClickConnect={handleIsConnected}
      />
      <CommonModalWindow
        isOpenCommonModal={isOpenCommonModal}
        onOpenCommonChange={handleOpenCommonChange}
        contentCommonModal={contentCommonModal}
      />
      <ModalWindowTx
        isOpenModalTx={isOpenModalTx}
        onOpenModalTx={handleOpenModalTx}
        miniTxhash={miniTxhash}
        hashLinkPlus={hashLinkPlus}
      />
    </>
  );
}
