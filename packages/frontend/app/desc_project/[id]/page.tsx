"use client";
//import { Card, CardBody, CardHeader } from "@nextui-org/card";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button, Input, Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import { Chip } from "@nextui-org/chip";
import ICON from "@/public/icon_2.png";
import CHECK from "@/public/check_blue.png";
import DOLLAR from "@/public/dollar_logo.png";
import CLOCK from "@/public/flat_clock.png";
import VOTE from "@/public/vote_2.png";
//import Chart from "@/components/chart";
import React, { useEffect, useState, ChangeEvent } from "react";
import { Select, SelectItem } from "@nextui-org/select"; 
import { ethers } from "ethers";
//import defaultProvider from "../../defaultProvider";
import { useWalletStore } from "@/service/store";
import ModalWindowTx from "../../ModalWindowTx";
import ModalClaimTokens from "@/app/ModalClaimTokens";
import ModalClaimVoting from "@/app/ModalVoting";
import CommonModalWindow from "@/app/CommonModalWindow";
import ModalViewDescStep from "@/app/ModalViewDescStep";

interface timeframeEverySteps {
  [key: number]: any;
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const {
    account,
    signer,
    provider,
    ABIcreateProject,
    ABIprojectsKeeper,
    ABIvoting,
    ABIstartFunds,
    ABIordering,
    ABIclaiming,
    isOpenCommonModal,
    setIsOpenCommonModal,
    contentCommonModal,
    setContentCommonModal,
  } = useWalletStore();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isShowProject, setIsShowProject] = useState<boolean>(false);
  const [isOpenModalTx, setIsOpenModalTx] = useState<boolean>(false);
  const [isOpenModalClaim, setIsOpenModalClaim] = useState<boolean>(false);
  const [isOpenModalVote, setIsOpenModalVote] = useState<boolean>(false);
 // const [isOpenCommonModal, setIsOpenCommonModal] = useState<boolean>(false);
  const [isOpenModalViewDescStep, setIsOpenModalViewDescStep] = useState<boolean>(false);
  const [stepText, setStepText] = useState<string>("Example");
  const [currectSprintTask, setCurrectSprintTask] = useState<string>("");
  
  const [projectOwner, setProjectOwner] = useState<string>("");
  const [projectOwnerFull, setProjectOwnerFull] = useState<string>("");
  const [tokenAddr, setTokenAddr] = useState<string>("");
  const [projectName, setProjectName] = useState<string>("");
  const [projectSymbol, setProjectSymbol] = useState<string>("");

  const [maxSupply, setMaxSupply] = useState<number>(0);
  const [seedPhase, setSeedPhase] = useState<number>(0);
  const [miniSeed, setMiniSeed] = useState<number>(0);
  const [allOrdered, setAllOrdered] = useState<number>(0);
  const [myOrdered, setMyOrdered] = useState<number>(0);
  const [claimed, setClaimed] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  const [amountSteps, setAmountSteps] = useState<number>(0);
  const [timeframe_1, setTimeframe_1] = useState<number>(0);
  const [timeframe_2, setTimeframe_2] = useState<number>(0);
  const [timeframe_3, setTimeframe_3] = useState<number>(0);
  const [timeframe_4, setTimeframe_4] = useState<number>(0);
  const [timeframe_5, setTimeframe_5] = useState<number>(0);
  const [timeframe_6, setTimeframe_6] = useState<number>(0);
  
  const [isPublicSeed, setIsPublicSeed] = useState<boolean>(false);
  const [isProjectAlive, setIsProjectAlive] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<any>(0);
  const [nativeDataTime_0, setNativeDataTime_0] = useState<string>("");
  const [nativeDataTime_1, setNativeDataTime_1] = useState<string>("");
  const [nativeDataTime_2, setNativeDataTime_2] = useState<string>("");
  const [nativeDataTime_3, setNativeDataTime_3] = useState<string>("");
  const [nativeDataTime_4, setNativeDataTime_4] = useState<string>("");
  const [nativeDataTime_5, setNativeDataTime_5] = useState<string>("");
  const [nativeDataTime_6, setNativeDataTime_6] = useState<string>("");

  const [nativeNearestVoteStart, setNativeNearestVoteStart] = useState<any>("");
  const [nativeNearestVoteFinish, setNativeNearestVoteFinish] = useState<any>("");
  const [currentDateNumber, setCurrentDateNumber] = useState<number>(0);
  const [timeSeedEndNumber, setTimeSeedEndNumber] = useState<number>(0);
  const [timeHalf1_2, setTimeHalf1_2] = useState<number>(0);
  const [nearestVoteStartNumber, setNearestVoteStartNumber] = useState<number>(0);
  const [nearestVoteFinishNumber, setNearestVoteFinishNumber] = useState<number>(0);
  const [isVoted, setIsVoted] = useState<boolean>(false);
  const [isRefund, setIsRefund] = useState<boolean>(false);

  const [inProgress, setInProgress] = useState<string>("");
  const [colorProgress, setColorProgress] = useState<string>("");
  const [witchStepAlive, setWitchStepAlive] = useState<number>(0);
  const [dataframes, setDataframes] = useState<string>("");
  const [amountFund, setAmountFund] = useState<number>(0);
  const [seedAmount, setSeedAmount] = useState<string>("");

  const [negativePower, setNegativePower] = useState<number>(0);
  const [userTokensClaimable, setUserTokensClaimable] = useState<number>(0);

  const [txhash, setTxhash] = useState("");

  const miniTxhash = txhash.substring(0, 5) + "....." + txhash.slice(45);
  const hashLink = process.env.NEXT_PUBLIC_HASH_LINK_MUMBAI;
  const hashLinkPlus = hashLink + txhash;
  

  const addrCreateProject = "0xEaE9C5B069e3d068b990C1fc1DD200A44e87D7F7";
  const createProjectProvider = new ethers.Contract(
      addrCreateProject,
      ABIcreateProject,
      provider
    );
  const addrProjectKeeper = "0x12870B750A6C4FCDA70a7F06FE3F84aE61857D3d";
  const projectKeeperProvider = new ethers.Contract(
      addrProjectKeeper,
      ABIprojectsKeeper,
      provider
    );
  const addrVoting = "0x310762F6C124Fa8177865AaBc84F806bcdDC5388";
  const votingSigner = new ethers.Contract(
      addrVoting ,
      ABIvoting,
      signer
    );
    const votingProvider = new ethers.Contract(
      addrVoting ,
      ABIvoting,
      provider
    );
    const addrStartFunds = "0x9721f8F39c84CDeC6559214627D0186744c88101";
    const startFundsSigner = new ethers.Contract(
      addrStartFunds ,
      ABIstartFunds,
      signer
    );
    const addrOrdering = "0xdBeb8462FF3FebEadED9Dd4fc954365A66e3f093";
    const orderingSigner = new ethers.Contract(
      addrOrdering,
      ABIordering,
      signer
    );
    const orderingProvider = new ethers.Contract(
      addrOrdering,
      ABIordering,
      provider
    );
    const addrClaiming = "0x13D159d5775E9813b066883dEDf7711A256cDb77";
    const claimingSigner = new ethers.Contract(
      addrClaiming,
      ABIclaiming,
      signer
    );

  useEffect(() => {
    (async () => {
       const [tokenAddr, projectOwner, projectName, projectSymbol] = await createProjectProvider.projectsViewMain(params.id);
       const miniProjectOwner = projectOwner.substring(0, 6) + "..." + projectOwner.slice(36);
       setProjectOwner(miniProjectOwner);
       setProjectOwnerFull(projectOwner.toString());
       const miniTokenAddr = tokenAddr.substring(0, 6) + "..." + tokenAddr.slice(36);
       setTokenAddr(miniTokenAddr);
       setProjectName(projectName);
       setProjectSymbol(projectSymbol);
       

       const myOrdered = await orderingProvider.getUserOrderedTokens(params.id, account);
       const myClaimed = await orderingProvider.getTokensAlreadyClaimed(params.id, account);
       //console.log({myOrdered});

        const [curruntSupplyOrdered, maxSupply, miniSeed, price, seedPhase, isProjectAlive, isProjectGetAllTokens, amountFund] = await createProjectProvider.projectsViewPrice(params.id);
       // const amountFund = ordered * price; // received
        // if(Number(ordered) != 0) {
        //   setAmountFund(amountFund);
        // }

        // const aaa = Number(amountFund) / 10**18;
        // console.log({aaa});
        const maxSupplyEthers = Number(maxSupply) / 10**18;
        const seedPhaseEthers = Number(seedPhase) / 10**18;
        const minSeedEthers = Number(miniSeed) / 10**18;
        const orderedEthers = Number(curruntSupplyOrdered) / 10**18;
        const priceEthers = Number(price) / 10**18;
        setMaxSupply(maxSupplyEthers);
        setSeedPhase(seedPhaseEthers);
        setMiniSeed(minSeedEthers);
        setAllOrdered(orderedEthers);
        setPrice(priceEthers);
        setIsProjectAlive(isProjectAlive);
        setAmountFund(Number(amountFund) / 10**18);
        setMyOrdered(Number(myOrdered) / 10**18);
        setClaimed(Number(myClaimed) / 10**18);

        const [amountSteps, timeFrame, , dataTime, , startTime, isPublicSeed] = await createProjectProvider.projectsViewSteps(params.id);
        setAmountSteps(Number(amountSteps));
        // установка периодов этапов
        const timeFrameArr: timeframeEverySteps = timeFrame;
        const timeframeDays_1 = Number(timeFrameArr[0]) / 60; //  / 86400; // how many days
        const timeframeDays_2 = Number(timeFrameArr[1]) / 60; //  / 86400;
        const timeframeDays_3 = Number(timeFrameArr[2]) / 60; //  / 86400;
        const timeframeDays_4 = Number(timeFrameArr[3]) / 60; //  / 86400;
        setTimeframe_1(timeframeDays_1);
        setTimeframe_2(timeframeDays_2);
        setTimeframe_3(timeframeDays_3);
        setTimeframe_4(timeframeDays_4);
        if(amountSteps == 5) {
          const timeframeDays_5 = Number(timeFrameArr[4]) / 60; //  / 86400;
          setTimeframe_5(timeframeDays_5);
        } else if (amountSteps == 6) {
          const timeframeDays_5 = Number(timeFrameArr[4]) / 60; //  / 86400;
          const timeframeDays_6 = Number(timeFrameArr[5]) / 60; //  / 86400;
          setTimeframe_5(timeframeDays_5);
          setTimeframe_6(timeframeDays_6);
        }
    // установка дат этапов

        const dataTimeArr: timeframeEverySteps = dataTime;
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        

        const dataTimeNum_0 = dataTimeArr[0];
        const dataTimeData_0 = new Date(Number(dataTimeNum_0) * 1000);
        var year_0 = dataTimeData_0.getFullYear();
        var month_0 = months[dataTimeData_0.getMonth()];
        var date_0 = dataTimeData_0.getDate();
        const nativeDataTime_0 = date_0.toString() + "." + month_0 + "." + year_0.toString();
        
        
        const nativeDataStartTime = dataTimeData_0.toLocaleString();
        setStartTime(nativeDataStartTime);
        setNativeDataTime_0(nativeDataTime_0);

        const dataTimeNum_1 = dataTimeArr[1];
        const dataTimeData_1 = new Date(Number(dataTimeNum_1) * 1000);
        //const nativeDataTime_1 = dataTimeData_1.toLocaleString();
        var year_1 = dataTimeData_1.getFullYear();
        var month_1 = months[dataTimeData_1.getMonth()];
        var date_1 = dataTimeData_1.getDate();
        const nativeDataTime_1 = date_1.toString() + "." + month_1 + "." + year_1.toString();
        setNativeDataTime_1(nativeDataTime_1);

        const dataTimeNum_2 = dataTimeArr[2];
        const dataTimeData_2 = new Date(Number(dataTimeNum_2) * 1000);
        //const nativeDataTime_2 = dataTimeData_2.toLocaleString();
        var year_2 = dataTimeData_2.getFullYear();
        var month_2 = months[dataTimeData_2.getMonth()];
        var date_2 = dataTimeData_2.getDate();
        const nativeDataTime_2 = date_2.toString() + "." + month_2 + "." + year_2.toString();
        setNativeDataTime_2(nativeDataTime_2);

        const dataTimeNum_3 = dataTimeArr[3];
        const dataTimeData_3 = new Date(Number(dataTimeNum_3) * 1000);
        //const nativeDataTime_3 = dataTimeData_3.toLocaleString();
        var year_3 = dataTimeData_3.getFullYear();
        var month_3 = months[dataTimeData_3.getMonth()];
        var date_3 = dataTimeData_3.getDate();
        const nativeDataTime_3 = date_3.toString() + "." + month_3 + "." + year_3.toString();
        setNativeDataTime_3(nativeDataTime_3);

        const dataTimeNum_4 = dataTimeArr[4];
          const dataTimeData_4 = new Date(Number(dataTimeNum_4) * 1000);
          //const nativeDataTime_4 = dataTimeData_4.toLocaleString();
          var year_4 = dataTimeData_4.getFullYear();
          var month_4 = months[dataTimeData_4.getMonth()];
          var date_4 = dataTimeData_4.getDate();
          const nativeDataTime_4 = date_4.toString() + "." + month_4 + "." + year_4.toString();
          setNativeDataTime_4(nativeDataTime_4);
        if(amountSteps == 5) {
          const dataTimeNum_5 = dataTimeArr[5];
          const dataTimeData_5 = new Date(Number(dataTimeNum_5) * 1000);
          //const nativeDataTime_5 = dataTimeData_5.toLocaleString();
          var year_5 = dataTimeData_5.getFullYear();
          var month_5 = months[dataTimeData_5.getMonth()];
          var date_5 = dataTimeData_5.getDate();
          const nativeDataTime_5 = date_5.toString() + "." + month_5 + "." + year_5.toString();
          setNativeDataTime_5(nativeDataTime_5);

        } else if (amountSteps == 6) {
          const dataTimeNum_5 = dataTimeArr[5];
          const dataTimeData_5 = new Date(Number(dataTimeNum_5) * 1000);
          //const nativeDataTime_5 = dataTimeData_5.toLocaleString();
          var year_5 = dataTimeData_5.getFullYear();
          var month_5 = months[dataTimeData_5.getMonth()];
          var date_5 = dataTimeData_5.getDate();
          const nativeDataTime_5 = date_5.toString() + "." + month_5 + "." + year_5.toString();
          setNativeDataTime_5(nativeDataTime_5);

          const dataTimeNum_6 = dataTimeArr[6];
          const dataTimeData_6 = new Date(Number(dataTimeNum_6) * 1000);
          //const nativeDataTime_6 = dataTimeData_6.toLocaleString();
          var year_6 = dataTimeData_6.getFullYear();
          var month_6 = months[dataTimeData_6.getMonth()];
          var date_6 = dataTimeData_6.getDate();
          const nativeDataTime_6 = date_6.toString() + "." + month_6 + "." + year_6.toString();
          setNativeDataTime_6(nativeDataTime_6);
        }
  // берем текущую дату и дату завершения сида, чтобы использовать в проверке на кнопку инвестирования
        const currentDate = new Date();
        const currentDateNumber = currentDate.getTime();
        setCurrentDateNumber(currentDateNumber);
        setTimeSeedEndNumber(Number(dataTimeNum_1) * 1000);
   // время начала клейма токенов
        const timeHalf1_2 = (Number(dataTimeNum_1) * 1000) + (((Number(dataTimeNum_2) * 1000) - (Number(dataTimeNum_1) * 1000)) / 2);
        setTimeHalf1_2(timeHalf1_2);
      
        const witchStepAlive = await createProjectProvider.witchStepAlive(params.id);
        setWitchStepAlive(witchStepAlive);
        setIsPublicSeed(isPublicSeed);
   // расчет времени начала и конца голосования 
   // и проверка факта голосования
        
        const negativeVote = await votingSigner.viewProjectResultVoting(params.id, witchStepAlive);
        //var negativeVote: number = 0;
        if(Number(witchStepAlive) > 1) {
          const dataNearestVoteStart = dataTimeArr[Number(witchStepAlive)];
          const nearestVoteStartNumber = Number(dataNearestVoteStart) * 1000;
          const dataTimeNearestVoteStart = new Date(nearestVoteStartNumber);
          const nativeNearestVoteStart = dataTimeNearestVoteStart.toLocaleString();
          setNativeNearestVoteStart(nativeNearestVoteStart);
          setNearestVoteStartNumber(nearestVoteStartNumber)
          const votingTime: number = 180;
          const nearestVoteFinishNumber = (Number(dataNearestVoteStart) * 1000) + (votingTime * 1000);
          const dataTimeNearestVoteFinish = new Date(nearestVoteFinishNumber);
          const nativeNearestVoteFinish = dataTimeNearestVoteFinish.toLocaleString();
          setNativeNearestVoteFinish(nativeNearestVoteFinish);
          setNearestVoteFinishNumber(nearestVoteFinishNumber);

          const isVoted = await votingProvider.viewUserIsVoting(params.id, witchStepAlive, account);
          setIsVoted(isVoted);
        }
    // расчет силы голоса
        if(Number(negativeVote) != 0) {
           const negativePower = Number(negativeVote) / ((Number(curruntSupplyOrdered) / 100));
           setNegativePower(negativePower);
        }
        

  ////// отображение текущего этапа
        if(!isPublicSeed) {
          setInProgress("Pre launch");
          setColorProgress("bg-[#e73326]");
        } else if(!isProjectAlive) {
          setInProgress("Negative vote"); 
          setColorProgress("bg-[#e73326]");
        } else if(isPublicSeed && ((Number(witchStepAlive) == 0 ) && currentDateNumber > Number(dataTimeNum_1) * 1000)) {
          setInProgress("Not enouth funds"); 
          setColorProgress("bg-[#e73326]");
        } else if(isPublicSeed && Number(witchStepAlive) == 0) {
          setInProgress("Seed phase"); 
          setColorProgress("bg-[#45D483]");
        } else if(isPublicSeed && Number(witchStepAlive) == 1) {
          setInProgress("Seed phase"); 
          setColorProgress("bg-[#45D483]");
        } else if(isPublicSeed && Number(witchStepAlive) == 2) {
          setInProgress("1st sprint"); 
          setColorProgress("bg-[#45D483]");
        } else if(isPublicSeed && Number(witchStepAlive) == 3) {
          setInProgress("2nd sprint"); 
          setColorProgress("bg-[#45D483]");
        } else if(isPublicSeed && Number(witchStepAlive) == 4 && Number(amountSteps) == 4) {
          if(isProjectGetAllTokens){
            setInProgress("Goal achieved"); 
            setColorProgress("bg-[#6fa8dc]");
          } else {
          setInProgress("Last force"); 
          setColorProgress("bg-[#45D483]");
          }
        } else if(isPublicSeed && Number(witchStepAlive) == 4 && (Number(amountSteps) == 5 || Number(amountSteps) == 6)) {
          setInProgress("3rd sprint"); 
          setColorProgress("bg-[#45D483]");
        } else if(isPublicSeed && Number(witchStepAlive) == 5 && Number(amountSteps) == 5) {
          if(isProjectGetAllTokens){
            setInProgress("Goal achieved"); 
            setColorProgress("bg-[#6fa8dc]");
          } else {
          setInProgress("Last force"); 
          setColorProgress("bg-[#45D483]");
          }
        } else if(isPublicSeed && Number(witchStepAlive) == 5 && Number(amountSteps) == 6) {
          setInProgress("4th sprint"); 
          setColorProgress("bg-[#45D483]");
        } else if(isPublicSeed && Number(witchStepAlive) == 5 && Number(amountSteps) == 6) {
          if(isProjectGetAllTokens){
            setInProgress("Goal achieved"); 
            setColorProgress("bg-[#6fa8dc]");
          } else {
          setInProgress("Last force"); 
          setColorProgress("bg-[#45D483]");
          }
        }
        ///
  // установка возможности рефанда пользователя
      if(isPublicSeed && Number(witchStepAlive) == 0) {
        setIsRefund(true);
      }

        // if (!isPublicSeed) {
        //   setInProgress("Pre launch");
        //   setColorProgress("bg-[#e73326]");

        // } else if (Number(witchStepAlive) == 0 && isPublicSeed){
        //   setInProgress("Seed phase"); 
        //   setColorProgress("bg-[#45D483]");
        // }


    })();
  }, []); 

  const inputSeedAmount = async () => {
    onOpenChange();
  }

  // input seed amount
  const changeSeedAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setSeedAmount(e.target.value);
  };

 // investing by users
  const makeInvest = async () => {
    try {
      const amountSeedBigint = ethers.parseUnits(seedAmount, 18);
      const _amountSeed = ethers.formatUnits(amountSeedBigint, 0);

      const tx = await orderingSigner.order(params.id,
        {value: _amountSeed}
        );
            setTxhash(tx.hash);
            console.log({tx});
            onOpen();
            setIsOpenModalTx(true);
             const response = await tx.wait();
            setIsOpenModalTx(false);
           console.log("responseTx: ", response);
           const moveLink = "/desc_project/" + params.id;
          // window.location.replace(moveLink);
      } catch (error) {
        onOpen();
        console.error(error);
      }
  }

  ////////////////// claiming ////////////////////////////
  // open ModalClaimTokens
  const showClaimPreview = async () => {
    if(myOrdered == 0) {
      setIsOpenCommonModal(true);
      setContentCommonModal("You don't have any tokens!");
    } else {
    checkAvailableClaim();
    setIsOpenModalClaim(true);
    }
  }
      //close modal claim
      const handleOpenModalClaim = async () => {
        setIsOpenModalClaim(false);
      };
  // check Available Claim tokens for user
  const checkAvailableClaim = async () => {
    try {
    const userTokensClaimable = await claimingSigner.earned(params.id, account);
    setUserTokensClaimable(Number(userTokensClaimable) / 10**18);
    } catch (error) {
      // if(error.args == "You don't have any tokens."){
      //   console.log("nowwww");
      // }
      console.error(error);
    }
  }

  // claim tokens by users
  const handleMakeClaim = async () => {
    try {

      const tx = await claimingSigner.claimTokens(params.id);
            setTxhash(tx.hash);
            console.log({tx});
            setIsOpenModalTx(true);
             const response = await tx.wait();
            setIsOpenModalTx(false);
           console.log("responseTx: ", response);
           const moveLink = "/desc_project/" + params.id;
          // window.location.replace(moveLink);
      } catch (error) {
        console.error(error);
      }
  }

   ////////////////// voting ////////////////////////////
  // open modal vote
  const showVotePreview = async () => {
    setIsOpenModalVote(true);
  }
   // close modal vote
   const handleOpenModalVote = async () => {
    setIsOpenModalVote(false);
  }
  // voting
  const handleMakeVote = async () => {
    try {
      const tx = await votingSigner.vote(params.id);
            setTxhash(tx.hash);
            console.log({tx});
            setIsOpenModalTx(true);
             const response = await tx.wait();
            setIsOpenModalTx(false);
           console.log("responseTx: ", response);
           const moveLink = "/desc_project/" + params.id;
          // window.location.replace(moveLink);
      
    } catch (error) {
        console.error(error);
      }
    }

// refund money
    const refund = async () => {
      try {
        const tx = await orderingSigner.refundUsers(params.id);
              setTxhash(tx.hash);
              console.log({tx});
              setIsOpenModalTx(true);
               const response = await tx.wait();
              setIsOpenModalTx(false);
             console.log("responseTx: ", response);
             const moveLink = "/desc_project/" + params.id;
            // window.location.replace(moveLink);
        
      } catch (error) {
          setIsOpenCommonModal(true);
          setContentCommonModal("Not any funds to back!");
          console.error(error);
        }
    }

    //  user describe every stes
  function handleViewDescStep(e: React.ChangeEvent<HTMLSelectElement>) {
    //const stepDesc = // вытаскиваем текст который хранится в соотношение данных:
                     // 1) e.target.value  - какой этап
                     // 2) params.id - какого проекта
                     // 3) account - кто владелец
    // setStepText(stepDesc);
    if(e.target.value == "1") {
      setContentCommonModal("This is just angel phase");
      setIsOpenCommonModal(true);
    } else {
   // setNumberReviewStep(e.target.value);
    //setIsOpenModalDescribeStep(true);
      if (e.target.value == "2") {
        setCurrectSprintTask("1st sprint");
      } else if (e.target.value == "3") {
        setCurrectSprintTask("2nd sprint");
      } else if (e.target.value == "4") {
        if(amountSteps == 4) {
        setCurrectSprintTask("Final force");
        } else if(amountSteps == 5 || amountSteps == 6){
        setCurrectSprintTask("3rd sprint");
        } 
      } else if (e.target.value == "5") {
        if(amountSteps == 5) {
          setCurrectSprintTask("Final force");
        } else if(amountSteps == 6){
          setCurrectSprintTask("4th sprint");
        } 
      } else if (e.target.value == "6") {
        setCurrectSprintTask("Final force");
      }
      setIsOpenModalViewDescStep(true);
    }
  }

     // close modal desc step
     const handleOpenViewDescStep = async () => {
      setIsOpenModalViewDescStep(false);
    }

    // common modal for waiting for tx
    const handleOpenModalTx = async () => {
      setIsOpenModalTx(false);
    };
    // modal for any errors
    const handleOpenCommonChange = async () => {
      setIsOpenCommonModal(false);
    };

    console.log({isPublicSeed});
    console.log({currentDateNumber})
    console.log({timeHalf1_2})
    console.log({isProjectAlive})

  return (
    <>
    <div className="flex flex-col h-full lg:h-screen flex flex-col items-center">
      <Card className="xl:w-[886px] w-5/6 border-1-solid-#3D59AD rounded-[15px] bg-[#7980A580] mt-[80px] max-[1023px]:mb-[30px] flex flex-col items-center">
        <div className="xl:w-[773px] w-11/12">
          <CardHeader className="flex max-[680px]:flex-col justify-between content-center max-[680px]:items-start">
            <div className="flex max-[680px]:flex-col justify-between">
              <div className="flex justify-between content-center gap-[21px] text-white font-medium text-[20px] font-inter">
                <Image src={ICON} alt="" width={31} height={31} />
                <p>{projectName}</p>
              </div>
              <div className="min-[681px]:ml-[48px]">
                <Chip
                  radius="sm"
                  classNames={{
                    base: colorProgress,
                    content: "text-white font-medium text-[20px] font-inter",
                  }}
                >
                  {inProgress}
                </Chip>
              </div>
            </div>
            <div className="flex justify-end text-[#f8f8ed] font-medium text-[16px] font-inter">
              <p>
                Current seed, $ETH:{" "}{amountFund}
              </p>
            </div>
          </CardHeader>
          <Divider className="bg-white" />
          <CardBody className="grid grid-cols-1 lg:grid-cols-2 gap-[18px]"> 
{/* ////////////// */}
          <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="main" title="Main">

        <div className="flex max-[347px]:flex-col max-[347px]:items-center justify-around w-full xl:w-[370px] h-[230px] bg-[#F1F3FF] rounded-[15px]">
                  <div className="flex flex-col content-center justify-center">
                    <div className="flex flex-col content-center font-inter text-[16px] text-[#4C5270] font-semibold">
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={CHECK} alt="" width={25} height={25} />
                        <p>Project's address:{" "}{tokenAddr}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={CHECK} alt="" width={25} height={25}/>
                        <p>Token's owner:{" "}{projectOwner}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={CHECK} alt="" width={25} height={25} />
                        <p>Project's name:{" "}{projectName}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={CHECK} alt="" width={25} height={25}/>
                        <p>Project's symbol:{" "}{projectSymbol}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={CHECK} alt="" width={25} height={25} />
                        <p>Amount steps:{" "}{amountSteps}</p>
                      </div>
                    </div>
                   
                    {isPublicSeed && currentDateNumber <= timeSeedEndNumber && account != projectOwnerFull.toLowerCase() ? 
                    <Button
                      onClick={inputSeedAmount}
                      className="
                      bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
                      text-white w-[185px] h-[36px] rounded-[15px] mt-[18px] font-semibold font-inter text-[16px]"
                    >
                      Become an angel
                    </Button>
                    : " " // поставить сюда кнопку получить транш
                     } 
                   
                  </div>
                </div>

        </Tab>
        <Tab key="tokens" title="Tokens">
  {/* // блок с данными о количествах токенов */}  
        <div className="flex max-[347px]:flex-col max-[347px]:items-center justify-around w-full xl:w-[370px] h-[280px] bg-[#F1F3FF] rounded-[15px]">
                  <div className="flex flex-col content-center justify-center">
                    <div className="flex flex-col content-center font-inter text-[16px] text-[#4C5270] font-semibold">
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={DOLLAR} alt="" width={25} height={25} />
                        <p>Max token supply, ${projectSymbol}:{" "}{maxSupply.toFixed(2)}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={DOLLAR} alt="" width={25} height={25}/>
                        <p>Seed phase, ${projectSymbol}:{" "}{seedPhase.toFixed(2)}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={DOLLAR} alt="" width={25} height={25} />
                        <p>Minimum seed, ${projectSymbol}:{" "}{miniSeed.toFixed(2)}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={DOLLAR} alt="" width={25} height={25}/>
                        <p>All ordered tokens, ${projectSymbol}:{" "}{allOrdered.toFixed(2)}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={DOLLAR} alt="" width={25} height={25}/>
                        <p>My ordered tokens, ${projectSymbol}:{" "}{myOrdered.toFixed(2)}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={DOLLAR} alt="" width={25} height={25}/>
                        <p>My claimed tokens, ${projectSymbol}:{" "}{claimed.toFixed(2)}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={DOLLAR} alt="" width={25} height={25}/>
                        <p>Token's price, $ETH:{" "}{price.toFixed(4)}</p>
                      </div>
                    </div>
                    {isPublicSeed && currentDateNumber > timeHalf1_2 && isProjectAlive && myOrdered != 0 ? 
                    <div>
                    <Button
                      onClick={showClaimPreview}
                      className="
                      bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
                      text-white w-[185px] h-[36px] rounded-[15px] mt-[18px] font-semibold font-inter text-[16px]"
                    >
                      Claim tokens
                    </Button>
                    
                    <Button
                      onClick={refund}
                      className="
                      bg-gradient-to-r from-blue-500 to-red-500 hover:from-pink-500 hover:to-yellow-500
                      text-white w-[135px] h-[36px] rounded-[15px] mt-[18px] font-semibold font-inter text-[16px] ml-[10px]"
                    >
                      Refund
                    </Button>
                    </div>
                    : 
                    <>
                    {!isRefund && isPublicSeed ?
                    <div>
                    <Button
                      onClick={showClaimPreview}
                      className="
                      bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
                      text-white w-[185px] h-[36px] rounded-[15px] mt-[18px] font-semibold font-inter text-[16px]"
                    >
                      Claim tokens
                    </Button>
                    
                     <Button
                      onClick={refund}
                      className="
                      bg-gradient-to-r from-blue-500 to-red-500 hover:from-pink-500 hover:to-yellow-500
                      text-white w-[135px] h-[36px] rounded-[15px] mt-[18px] font-semibold font-inter text-[16px] ml-[10px]"
                    >
                      Refund
                    </Button>
                    </div>
                    : ""
                    }
                    </>
                   }
                  </div>
                </div>

        </Tab>
  {/* // блок с описания этапов */}
        <Tab key="steps" title="Steps">
          
               <div className="flex max-[347px]:flex-col max-[347px]:items-center justify-around w-full xl:w-[370px] h-[270px] bg-[#F1F3FF] rounded-[15px]">
                  <div className="flex flex-col content-center justify-center">
                    <div className="flex flex-col content-center font-inter text-[16px] text-[#4C5270] font-semibold">
                      {amountSteps == 4 ?
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        {/* <Image src={CLOCK} alt="" width={40} height={40}/> */}
                        <p>
                        <Select 
                        onChange={handleViewDescStep} 
                        variant="bordered" label="Timeframes/descriptions" className="w-[287px] h-[17px] text-[#1d9fab]" radius="lg" size="sm"> 
                          <SelectItem key="1" value="1" className="text-[#ffffff] bg-[#F9607CF0]">
                            Seed phase, days:{" "} {timeframe_1}
                          </SelectItem>
                          <SelectItem key="2" value="2" className="text-[#ffffff] bg-[#F9607CF0]">
                            1st sprint, days:{" "}{timeframe_2}
                            </SelectItem>
                          <SelectItem key="3" value="3" className="text-[#ffffff] bg-[#F9607CF0]">
                            2nd sprint, days:{" "}{timeframe_3}
                            </SelectItem>
                            <SelectItem key="4" value="4" className="text-[#ffffff] bg-[#F9607CF0]">
                            Last fores, days:{" "}{timeframe_4}
                            </SelectItem>  
                        </Select>
                        </p>
                      </div>
                      : ""}
                      {amountSteps == 5 ?
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        {/* <Image src={CLOCK} alt="" width={40} height={40}/> */}
                        <p>
                        <Select 
                        onChange={handleViewDescStep} 
                        variant="bordered" label="Timeframes/descriptions" className="w-[287px] h-[17px] text-[#1d9fab]" radius="lg" size="sm"> 
                          <SelectItem key="1" value="1" className="text-[#ffffff] bg-[#F9607CF0]">
                            Seed phase, days:{" "} {timeframe_1}
                          </SelectItem>
                          <SelectItem key="2" value="2" className="text-[#ffffff] bg-[#F9607CF0]">
                            1st sprint, days:{" "}{timeframe_2}
                            </SelectItem>
                          <SelectItem key="3" value="3" className="text-[#ffffff] bg-[#F9607CF0]">
                            2nd sprint, days:{" "}{timeframe_3}
                            </SelectItem>
                            <SelectItem key="4" value="4" className="text-[#ffffff] bg-[#F9607CF0]">
                            3rd sprint, days:{" "}{timeframe_4}
                            </SelectItem>
                            <SelectItem key="5" value="5" className="text-[#ffffff] bg-[#F9607CF0]">
                            Last fores, days:{" "}{timeframe_5}
                            </SelectItem>  
                        </Select>
                        </p>
                      </div>
                      : ""}
                      {amountSteps == 6 ?
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        {/* <Image src={CLOCK} alt="" width={40} height={40}/> */}
                        <p>
                        <Select 
                        onChange={handleViewDescStep} 
                        variant="bordered" label="Timeframes/descriptions" className="w-[287px] h-[17px] text-[#1d9fab]" radius="lg" size="sm"> 
                          <SelectItem key="1" value="1" className="text-[#ffffff] bg-[#F9607CF0]">
                            Seed phase, days:{" "}{timeframe_1}
                          </SelectItem>
                          <SelectItem key="2" value="2" className="text-[#ffffff] bg-[#F9607CF0]">
                            1st sprint, days:{" "}{timeframe_2}
                            </SelectItem>
                          <SelectItem key="3" value="3" className="text-[#ffffff] bg-[#F9607CF0]">
                            2nd sprint, days:{" "}{timeframe_3}
                            </SelectItem>
                            <SelectItem key="4" value="4" className="text-[#ffffff] bg-[#F9607CF0]">
                            3rd sprint, days:{" "}{timeframe_4}
                            </SelectItem>
                            <SelectItem key="5" value="5" className="text-[#ffffff] bg-[#F9607CF0]">
                            4th sprint, days:{" "}{timeframe_5}
                            </SelectItem>
                            <SelectItem key="6" value="6" className="text-[#ffffff] bg-[#F9607CF0]">
                            Last fores, days:{" "}{timeframe_6}
                            </SelectItem>  
                        </Select>
                        </p>
                      </div>
                      : ""}
                     
  {/* // отображение дат этапов */}
              
                  {!isPublicSeed ? 
                      <div className="flex flex-row justify-start gap-[10px] mt-[15px]">
                      <Image src={CLOCK} alt="" width={25} height={25} />
                      <p>Start time:{" "} {inProgress}</p>
                      </div>
                    :
                    <>
                      <div className="flex flex-row justify-start gap-[10px] mt-[15px]">
                        <Image src={CLOCK} alt="" width={25} height={25} />
                        <p>Start time:{" "} {startTime}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={CLOCK} alt="" width={25} height={25}/>
                        <p>Seed:{" "} {nativeDataTime_0} {""}{"--> "} {nativeDataTime_1}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={CLOCK} alt="" width={25} height={25} />
                        <p>1-st:{" "} {nativeDataTime_1} {""}{"--> "} {nativeDataTime_2}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={CLOCK} alt="" width={25} height={25}/>
                        <p>2-nd:{" "} {nativeDataTime_2} {""}{"--> "} {nativeDataTime_3}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={CLOCK} alt="" width={25} height={25}/>
                        <p>3-rd:{" "} {nativeDataTime_3} {""}{"--> "} {nativeDataTime_4}</p>
                      </div>
                      {amountSteps == 5 ?
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                      <Image src={CLOCK} alt="" width={25} height={25}/>
                      <p>4-th:{" "} {nativeDataTime_4} {""}{"--> "} {nativeDataTime_5}</p>
                    </div>
                    : ""}
                    {amountSteps == 6 ?
                    <>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                      <Image src={CLOCK} alt="" width={25} height={25}/>
                      <p>5-th:{" "} {nativeDataTime_4} {""}{"--> "} {nativeDataTime_5}</p>
                    </div>
                    <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                    <Image src={CLOCK} alt="" width={25} height={25}/>
                      <p>6-th:{" "} {nativeDataTime_5} {""}{"--> "} {nativeDataTime_6}</p>
                    </div>
                   </>
                    : ""} 
                    </>
                   }
                  </div>
               </div>
              </div>

        </Tab>
 {/* // блок с данными о голосованиях */}
        <Tab key="voting" title="Voting">
          
          <div className="flex max-[347px]:flex-col max-[347px]:items-center justify-around w-full xl:w-[370px] h-[200px] bg-[#F1F3FF] rounded-[15px]">
                  <div className="flex flex-col content-center justify-center">
                    <div className="flex flex-col content-center font-inter text-[16px] text-[#4C5270] font-semibold">
                {witchStepAlive < 2 ? 
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                      <Image src={VOTE} alt="" width={25} height={25} />
                      <p>Don't start work yet !</p>
                    </div>
                      :
                      <>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={VOTE} alt="" width={25} height={25} />
                        <p>The nearest voting start:{" "}{nativeNearestVoteStart}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={VOTE} alt="" width={25} height={25}/>
                        <p>The nearest voting finish:{" "}{nativeNearestVoteFinish}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={VOTE} alt="" width={25} height={25} />
                        <p>Negative vote, %:{" "}{negativePower}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={VOTE} alt="" width={25} height={25} />
                        {!isVoted ? 
                        <p>My vote: Not yet</p>
                        :
                        <p>My vote: Already voted</p>
                         }
                      </div>
                      </>
                  }
                  {myOrdered != 0 && !isVoted &&
                  currentDateNumber > nearestVoteStartNumber && 
                  currentDateNumber <= nearestVoteFinishNumber ? 
                    <Button
                      onClick={showVotePreview}
                      className="
                      bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
                      text-white w-[185px] h-[36px] rounded-[15px] mt-[18px] font-semibold font-inter text-[16px]"
                    >
                      Vote
                    </Button>
                    : " " 
                     } 
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div> 
        </CardBody>
      </div>
   </Card>  
 </div>

                  <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                        <ModalContent className="flex flex-col items-center">
                          {(onClose) => (
                            <>
                              <ModalHeader className="text-[#F9607C]">
                                Inter your seed amount
                              </ModalHeader>
                              <ModalBody className="flex flex-row">
                                <div className="text-right">
                                   <Input
                                    onChange={changeSeedAmount}
                                    value={seedAmount}
                                    type="number"
                                    label="Amount, $Matic"
                                    variant="bordered"
                                    className="w-[187px]"
                                    radius="lg"
                                    size="sm"
                                    />
                                  
                                </div>
                              </ModalBody>
                              <ModalFooter>
                                <Button color="danger" onPress={onClose}>
                                  Later
                                </Button>
                                <Button
                                  color="primary"
                                  onPress={makeInvest}
                                >
                                  Let's do it 
                                </Button>
                              </ModalFooter>
                            </>
                          )}
                        </ModalContent>
                      </Modal>
    <ModalClaimTokens
        isOpenModalClaim={isOpenModalClaim}
        onOpenModalClaim={handleOpenModalClaim}
        onMakeClaim={handleMakeClaim}
        projectSymbol={projectSymbol}
        userTokensClaimable={userTokensClaimable}
      />
      <ModalClaimVoting
        isOpenModalVote={isOpenModalVote}
        onOpenModalVote={handleOpenModalVote}
        onMakeVote={handleMakeVote}
        projectSymbol={projectSymbol}
        myOrdered={myOrdered}
      />
    <ModalWindowTx
        isOpenModalTx={isOpenModalTx}
        onOpenModalTx={handleOpenModalTx}
        miniTxhash={miniTxhash}
        hashLinkPlus={hashLinkPlus}
      />
      <ModalViewDescStep
        isOpenModalViewDescStep={isOpenModalViewDescStep}
        onOpenModalViewDescStep={handleOpenViewDescStep}
        stepText={stepText}
        currectSprintTask={currectSprintTask}
      />
       <CommonModalWindow
        isOpenCommonModal={isOpenCommonModal}
        onOpenCommonChange={handleOpenCommonChange}
        contentCommonModal={contentCommonModal}
      />
      </>
  );
}
