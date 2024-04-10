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
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Textarea, Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import Image from "next/image";
import { Chip } from "@nextui-org/chip";
import ICON from "@/public/icon_2.png";
import CHECK from "@/public/check_blue.png";
import DOLLAR from "@/public/dollar_logo.png";
import CLOCK from "@/public/flat_clock.png";
import VOTE from "@/public/vote_2.png";
import React, { useEffect, useState, ChangeEvent } from "react";
import { Select, SelectItem } from "@nextui-org/select"; 
import { ethers } from "ethers";
import defaultProvider from "../../defaultProvider";
import { useWalletStore } from "@/service/store";
import ModalWindowTx from "../../ModalWindowTx";
import CommonModalWindow from "../../CommonModalWindow";
//import ModalDescribeStep from "../../ModalDescribeStep";

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
    ABIgetFunds,
    isOpenCommonModal,
    setIsOpenCommonModal,
    contentCommonModal,
    setContentCommonModal,
  } = useWalletStore();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isShowProject, setIsShowProject] = useState<boolean>(false);
  const [isOpenModalTx, setIsOpenModalTx] = useState<boolean>(false);
  const [isOpenModalDescribeStep, setIsOpenModalDescribeStep] = useState<boolean>(false);
  const [numberReviewStep, setNumberReviewStep] = useState<string>("");
  const [stepText, setStepText] = useState<string>("");
  const [currectSprintTask, setCurrectSprintTask] = useState<string>("");
  
  const [projectOwner, setProjectOwner] = useState<string>("");
  const [tokenAddr, setTokenAddr] = useState<string>("");
  const [projectName, setProjectName] = useState<string>("");
  const [projectSymbol, setProjectSymbol] = useState<string>("");

  const [maxSupply, setMaxSupply] = useState<number>(0);
  const [seedPhase, setSeedPhase] = useState<number>(0);
  const [miniSeed, setMiniSeed] = useState<number>(0);
  const [ordered, setOrdered] = useState<number>(0);
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
  const [isProjectGetAllTokens, setIsProjectGetAllTokens] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<any>(0);
  const [nativeDataTime_0, setNativeDataTime_0] = useState<string>("");
  const [nativeDataTime_1, setNativeDataTime_1] = useState<string>("");
  const [nativeDataTime_2, setNativeDataTime_2] = useState<string>("");
  const [nativeDataTime_3, setNativeDataTime_3] = useState<string>("");
  const [nativeDataTime_4, setNativeDataTime_4] = useState<string>("");
  const [nativeDataTime_5, setNativeDataTime_5] = useState<string>("");
  const [nativeDataTime_6, setNativeDataTime_6] = useState<string>("");
  
  const [currentDateNumber, setCurrentDateNumber] = useState<number>(0);
  const [nativeNearestVoteStart, setNativeNearestVoteStart] = useState<any>("");
  const [nativeNearestVoteFinish, setNativeNearestVoteFinish] = useState<any>("");

  const [inProgress, setInProgress] = useState<string>("");
  const [colorProgress, setColorProgress] = useState<string>("");
  const [witchStepAlive, setWitchStepAlive] = useState<number>(0);
  const [dataframes, setDataframes] = useState<string>("");
  const [amountFund, setAmountFund] = useState<number>(0);

  const [negativePower, setNegativePower] = useState<number>(0);
  const [isTranche, setIsTranche] = useState<boolean>(false);
  const [isGetRemainProjectTokens, setIsGetRemainProjectTokens] = useState<boolean>(false);

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
  const createProjectSigner = new ethers.Contract(
      addrCreateProject,
      ABIcreateProject,
      signer
    );
  const addrProjectKeeper = "0x12870B750A6C4FCDA70a7F06FE3F84aE61857D3d";
  const projectKeeperProvider = new ethers.Contract(
      addrProjectKeeper,
      ABIprojectsKeeper,
      provider
    );
  const addrVoting = "0x310762F6C124Fa8177865AaBc84F806bcdDC5388";
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
    const addrGetFunds = "0xa12c590345AFb37B89A829A39B8B33D1EF4661eb";
    const getFundsSigner = new ethers.Contract(
      addrGetFunds,
      ABIgetFunds,
      signer
    );

  useEffect(() => {
    (async () => {
       const [tokenAddr, projectOwner, projectName, projectSymbol] = await createProjectProvider.projectsViewMain(params.id);
       const miniProjectOwner = projectOwner.substring(0, 6) + "..." + projectOwner.slice(32);
       setProjectOwner(miniProjectOwner);
       const miniTokenAddr = tokenAddr.substring(0, 6) + "..." + tokenAddr.slice(32);
       setTokenAddr(miniTokenAddr);
       setProjectName(projectName);
       setProjectSymbol(projectSymbol);
      // console.log({projectOwner});

        const [ordered, maxSupply, miniSeed, price, seedPhase, isProjectAlive, isProjectGetAllTokens, amountFund] = await createProjectProvider.projectsViewPrice(params.id);
        //const amountFund = ordered * price; // received
        // if(Number(ordered) != 0) {
        //   setAmountFund(amountFund);
        // }
        const maxSupplyEthers = Number(maxSupply) / 10**18;
        const seedPhaseEthers = Number(seedPhase) / 10**18;
        const minSeedEthers = Number(miniSeed) / 10**18;
        const orderedEthers = Number(ordered) / 10**18;
        const priceEthers = Number(price) / 10**18;
        setMaxSupply(maxSupplyEthers);
        setSeedPhase(seedPhaseEthers);
        setMiniSeed(minSeedEthers);
        setOrdered(orderedEthers);
        setPrice(priceEthers);
        setIsProjectAlive(isProjectAlive);
        setIsProjectGetAllTokens(isProjectGetAllTokens);
        setAmountFund(Number(amountFund) / 10**18);
        const [amountSteps, timeFrame, , dataTime, , , isPublicSeed] = await createProjectProvider.projectsViewSteps(params.id);
        setAmountSteps(Number(amountSteps));
        // установка периодов этапов
        const timeFrameArr: timeframeEverySteps = timeFrame;
        const timeframeDays_1 = Number(timeFrameArr[0]) / 60; // / 86400; // how many days
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

          
          var dataTimeNum_5: any;
          var dataTimeNum_6: any;
        if(amountSteps == 5) {
          dataTimeNum_5 = dataTimeArr[5];
          const dataTimeData_5 = new Date(Number(dataTimeNum_5) * 1000);
          //const nativeDataTime_5 = dataTimeData_5.toLocaleString();
          var year_5 = dataTimeData_5.getFullYear();
          var month_5 = months[dataTimeData_5.getMonth()];
          var date_5 = dataTimeData_5.getDate();
          const nativeDataTime_5 = date_5.toString() + "." + month_5 + "." + year_5.toString();
          setNativeDataTime_5(nativeDataTime_5);

        } else if (amountSteps == 6) {
          dataTimeNum_5 = dataTimeArr[5];
          const dataTimeData_5 = new Date(Number(dataTimeNum_5) * 1000);
          //const nativeDataTime_5 = dataTimeData_5.toLocaleString();
          var year_5 = dataTimeData_5.getFullYear();
          var month_5 = months[dataTimeData_5.getMonth()];
          var date_5 = dataTimeData_5.getDate();
          const nativeDataTime_5 = date_5.toString() + "." + month_5 + "." + year_5.toString();
          setNativeDataTime_5(nativeDataTime_5);
          dataTimeNum_6 = dataTimeArr[6];
          const dataTimeData_6 = new Date(Number(dataTimeNum_6) * 1000);
          //const nativeDataTime_6 = dataTimeData_6.toLocaleString();
          var year_6 = dataTimeData_6.getFullYear();
          var month_6 = months[dataTimeData_6.getMonth()];
          var date_6 = dataTimeData_6.getDate();
          const nativeDataTime_6 = date_6.toString() + "." + month_6 + "." + year_6.toString();
          setNativeDataTime_6(nativeDataTime_6);
        }

        const witchStepAlive = await createProjectProvider.witchStepAlive(params.id);
        setWitchStepAlive(Number(witchStepAlive));
        setIsPublicSeed(isPublicSeed);

     // данные для кнопки голосования
        const negativeVote = await votingProvider.viewProjectResultVoting(params.id, witchStepAlive);
        //var negativeVote: number = 0;
        const votingTime: number = 180; // 3 минуты 
        if(Number(witchStepAlive) > 1) {
          const dataNearestVoteStart = dataTimeArr[Number(witchStepAlive)];
          const dataTimeNearestVoteStart = new Date(Number(dataNearestVoteStart) * 1000);
          const nativeNearestVoteStart = dataTimeNearestVoteStart.toLocaleString();
          setNativeNearestVoteStart(nativeNearestVoteStart);
          
          const dataTimeNearestVoteFinish = new Date((Number(dataNearestVoteStart) * 1000) + (votingTime * 1000));
          const nativeNearestVoteFinish = dataTimeNearestVoteFinish.toLocaleString();
          setNativeNearestVoteFinish(nativeNearestVoteFinish);
        }

        if(Number(negativeVote) != 0) {
           const negativePower = Number(negativeVote) / ((Number(ordered) / 100));
           setNegativePower(negativePower);

        }
    // данные для кнопки получения транша
        const currentDate = new Date();
        const currentDateNumber = currentDate.getTime();
        setCurrentDateNumber(currentDateNumber);
        //console.log("111 :", Number(dataTimeNum_1) * 1000);
        //console.log({currentDateNumber});
       if((Number(witchStepAlive) == 1 && Number(ordered) == Number(seedPhase) && currentDateNumber < (Number(dataTimeNum_1) * 1000))
       ||
          (Number(witchStepAlive) == 1 && currentDateNumber > (Number(dataTimeNum_1) * 1000))
       ||
          (Number(witchStepAlive) == 2 && currentDateNumber > ((Number(dataTimeNum_2) * 1000) + votingTime * 1000))
       ||
          (Number(witchStepAlive) == 3 && currentDateNumber > ((Number(dataTimeNum_3) * 1000) + votingTime * 1000))
       ||
          (Number(witchStepAlive) == 4 && currentDateNumber > ((Number(dataTimeNum_4) * 1000 + votingTime * 1000)) && Number(amountSteps) == 5)
       ||
          (Number(witchStepAlive) == 5 && currentDateNumber > (Number(dataTimeNum_5) * 1000) && Number(amountSteps) == 6)
       ) {
         setIsTranche(true);
       }

    // установка возможности заклеймить остатки токенов при завершении проекта
      if((Number(amountSteps) == 4 && Number(witchStepAlive) == 4 && currentDateNumber > (Number(dataTimeNum_4) * 1000))
      ||
        (Number(amountSteps) == 5 && Number(witchStepAlive) == 5 && currentDateNumber > (Number(dataTimeNum_5) * 1000))
      ||
        (Number(amountSteps) == 6 && Number(witchStepAlive) == 6 && currentDateNumber > (Number(dataTimeNum_6) * 1000))
       ) {
        setIsGetRemainProjectTokens(true);
       }


      // console.log({isTranche})
      // console.log({isProjectAlive})


        //////
        //var stepAlive: string = "";
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

        // if (!isPublicSeed) {
        //   setInProgress("Pre launch");
        //   setColorProgress("bg-[#e73326]");

        // } else if (witchStepAlive == 0 && isPublicSeed){
        //   setInProgress("Seed phase"); 
        //   setColorProgress("bg-[#45D483]");
        // }


    })();
  }, []); 
  
// start project
  const startSeed = async () => {
    try {
      const tx = await startFundsSigner.start(params.id);
            setTxhash(tx.hash);
            console.log({tx});
            onOpen();
            setIsOpenModalTx(true);
             const response = await tx.wait();
            setIsOpenModalTx(false);
           console.log("responseTx: ", response);
           const moveLink = "/ownerprojects/" + params.id;
          // window.location.replace(moveLink);
      } catch (error) {
        onOpen();
        console.error(error);
      }
  }

// delete project at all
  const deleteProject = async () => {
    try {
      const tx = await createProjectSigner.deleteProjectFromArr(params.id);
            setTxhash(tx.hash);
            console.log({tx});
            setIsOpenModalTx(true);
             const response = await tx.wait();
            setIsOpenModalTx(false);
           console.log("responseTx: ", response);
           const moveLink = "/ownerprojects/" + params.id;
          // window.location.replace(moveLink);
      } catch (error) {
        console.error(error);
      }
  }

  // get next tranche
  const getTranche = async () => {
    try {
      const tx = await getFundsSigner.getNextFund(params.id);
            setTxhash(tx.hash);
            console.log({tx});
            setIsOpenModalTx(true);
             const response = await tx.wait();
            setIsOpenModalTx(false);
           console.log("responseTx: ", response);
           const moveLink = "/ownerprojects/" + params.id;
          // window.location.replace(moveLink);
      } catch (error) {
        console.error(error);
      }
  }

  // claim Remain Project's tokens after success
  
  const claimRemainTokens = async () => {
    try {
      const tx = await getFundsSigner.getAllProjectTokens(params.id);
            setTxhash(tx.hash);
            console.log({tx});
            setIsOpenModalTx(true);
             const response = await tx.wait();
            setIsOpenModalTx(false);
           console.log("responseTx: ", response);
           const moveLink = "/ownerprojects/" + params.id;
          // window.location.replace(moveLink);
      } catch (error) {
        console.error(error);
      }
  }

  //  user describe every stes
  function handleReviewStep(e: React.ChangeEvent<HTMLSelectElement>) {
    if(e.target.value == "1") {
      setContentCommonModal("There is no need to fill this phase");
      setIsOpenCommonModal(true);
    } else {
    setNumberReviewStep(e.target.value);
    setIsOpenModalDescribeStep(true);
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
    }
  }
// text from textarea description steps
  const setText = (e: ChangeEvent<HTMLInputElement>) => {
    setStepText(e.target.value);
  };

 // record descriptions to server
  const handleRecordDescribeStep = () => {
    // отправить: stepText + numberReviewStep + account + params.id на сервер
  }

  // close modal describe Step
  const handleOpenModalDescribeStep = async () => {
    setIsOpenModalDescribeStep(false);
  }
  // close common modal error
  const handleOpenCommonChange = async () => {
    setIsOpenCommonModal(false);
  };

  const handleOpenModalTx = async () => {
    setIsOpenModalTx(false);
  };

  return (
    <>
    <div className="flex flex-col h-full lg:h-screen flex flex-col items-center">
      <Card className="xl:w-[886px] w-5/6 border-1-solid-#3D59AD rounded-[15px] bg-[#a0dd85] mt-[80px] max-[1023px]:mb-[30px] flex flex-col items-center">
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
                Current seed, $Matic:{" "}{amountFund}
              </p>
            </div>
          </CardHeader>
          <Divider className="bg-white" />
          <CardBody className="grid grid-cols-1 lg:grid-cols-2 gap-[18px]">
   {/* <div className="flex flex-col justify-center content-center "> */}

            <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
 {/* // блок с данными владельце и токене */}
        <Tab key="main" title="Main">

        <div className="flex max-[347px]:flex-col max-[347px]:items-center justify-around w-full xl:w-[370px] h-[230px] bg-[#F1F3FF] rounded-[15px]">
                  <div className="flex flex-col content-center justify-center">
                    <div className="flex flex-col content-center font-inter text-[16px] text-[#4C5270] font-semibold">
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={CHECK} alt="" width={25} height={25} />
                        <p>Token's address:{" "}{tokenAddr}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={CHECK} alt="" width={25} height={25}/>
                        <p>Project's owner:{" "}{projectOwner}</p>
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
                   
                    {!isPublicSeed ? 
                    <div>
                    <Button
                      onClick={startSeed}
                      className="
                      bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
                      text-white w-[185px] h-[36px] rounded-[15px] mt-[18px] font-semibold font-inter text-[16px]"
                    >
                      Start seed phase
                    </Button>
                     <Button
                     onClick={deleteProject}
                     className="
                     bg-gradient-to-r from-blue-500 to-red-500 hover:from-pink-500 hover:to-yellow-500
                     text-white w-[135px] h-[36px] rounded-[15px] mt-[18px] font-semibold font-inter text-[16px] ml-[10px]"
                   >
                     Delete project
                   </Button>
                   </div>
                    : 
                    <>
                    {isTranche && isProjectAlive ? 
                    <div>
                     <Button
                      onClick={getTranche}
                      className="
                      bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
                      text-white w-[185px] h-[36px] rounded-[15px] mt-[18px] font-semibold font-inter text-[16px]"
                    >
                      Get the tranche 
                    </Button>
                  </div>
                    : "" }
                    </>
                     } 
                   
                  </div>
                </div>

        </Tab>
   {/* // блок с данными о количествах токенов */}
        <Tab key="tokens" title="Tokens">
          
        <div className="flex max-[347px]:flex-col max-[347px]:items-center justify-around w-full xl:w-[370px] h-[220px] bg-[#F1F3FF] rounded-[15px]">
                  <div className="flex flex-col content-center justify-center">
                    <div className="flex flex-col content-center font-inter text-[16px] text-[#4C5270] font-semibold">
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={DOLLAR} alt="" width={25} height={25} />
                        <p>Max token supply, ${projectSymbol}:{" "}{maxSupply}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={DOLLAR} alt="" width={25} height={25}/>
                        <p>Seed phase, ${projectSymbol}:{" "}{seedPhase}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={DOLLAR} alt="" width={25} height={25} />
                        <p>Minimum seed, ${projectSymbol}:{" "}{miniSeed}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={DOLLAR} alt="" width={25} height={25}/>
                        <p>Ordered tokens, ${projectSymbol}:{" "}{ordered}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={DOLLAR} alt="" width={25} height={25}/>
                        <p>Token's price, $Matic:{" "}{price}</p>
                      </div>
                    </div>
                    {isGetRemainProjectTokens && !isProjectGetAllTokens ? 
                    <Button
                      onClick={claimRemainTokens}
                      className="
                      bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
                      text-white w-[185px] h-[36px] rounded-[15px] mt-[18px] font-semibold font-inter text-[16px]"
                    >
                      Claim remain tokens
                    </Button>
                    : "" }
                  </div>
                </div>

        </Tab>
{/* // блок с данными о временах и описание этапов */}
        <Tab key="steps" title="Steps">
          
        <div className="flex max-[347px]:flex-col max-[347px]:items-center justify-around w-full xl:w-[370px] h-[290px] bg-[#F1F3FF] rounded-[15px]">
                  <div className="flex flex-col content-center justify-center">
                    <div className="flex flex-col content-center font-inter text-[16px] text-[#4C5270] font-semibold">
                      {amountSteps == 4 ?
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        {/* <Image src={CLOCK} alt="" width={40} height={40}/> */}
                        <p>
                        <Select
                        onChange={handleReviewStep} 
                        variant="bordered" label="Timeframes/descriptions" className="w-[287px] h-[17px] text-[#1d9fab]" radius="lg" size="sm"
                        > 
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
                        onChange={handleReviewStep} 
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
                        onChange={handleReviewStep} 
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
                        <p>1){" "} {nativeDataTime_0} {""}{"--> "} {nativeDataTime_1}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={CLOCK} alt="" width={25} height={25} />
                        <p>2){" "} {nativeDataTime_1} {""}{"--> "} {nativeDataTime_2}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={CLOCK} alt="" width={25} height={25}/>
                        <p>3){" "} {nativeDataTime_2} {""}{"--> "} {nativeDataTime_3}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                        <Image src={CLOCK} alt="" width={25} height={25}/>
                        <p>4){" "} {nativeDataTime_3} {""}{"--> "} {nativeDataTime_4}</p>
                      </div>
                      {amountSteps == 5 ?
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                      <Image src={CLOCK} alt="" width={25} height={25}/>
                      <p>5){" "} {nativeDataTime_4} {""}{"--> "} {nativeDataTime_5}</p>
                    </div>
                    : ""}
                    {amountSteps == 6 ?
                    <>
                      <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                      <Image src={CLOCK} alt="" width={25} height={25}/>
                      <p>5){" "} {nativeDataTime_4} {""}{"--> "} {nativeDataTime_5}</p>
                    </div>
                    <div className="flex flex-row justify-start gap-[10px] mt-[5px]">
                    <Image src={CLOCK} alt="" width={25} height={25}/>
                      <p>6){" "} {nativeDataTime_5} {""}{"--> "} {nativeDataTime_6}</p>
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
          
        <div className="flex max-[347px]:flex-col max-[347px]:items-center justify-around w-full xl:w-[370px] h-[170px] bg-[#F1F3FF] rounded-[15px]">
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
                      </>
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
    {/* <ModalDescribeStep
        isOpenModalDescribeStep={isOpenModalDescribeStep}
        onOpenModalDescribeStep={handleOpenModalDescribeStep}
        onRecordDescribeStep={handleRecordDescribeStep}
        numberReviewStep={numberReviewStep}
        setText={setText}
        stepText={stepText}
      /> */}
    <ModalWindowTx
        isOpenModalTx={isOpenModalTx}
        onOpenModalTx={handleOpenModalTx}
        miniTxhash={miniTxhash}
        hashLinkPlus={hashLinkPlus}
      />
      <CommonModalWindow
        isOpenCommonModal={isOpenCommonModal}
        onOpenCommonChange={handleOpenCommonChange}
        contentCommonModal={contentCommonModal}
      />

  {/* window for describe every steps */}
      <Modal
      isOpen={isOpenModalDescribeStep}
      onOpenChange={handleOpenModalDescribeStep}
         >
       <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Text of your tasks
            </ModalHeader>
            <ModalBody>
              <p></p>
              <Textarea
                label={currectSprintTask}
                variant="bordered"
                placeholder="We will develop..."
                disableAnimation
                disableAutosize
                classNames={{
                  base: "max-w-xs",
                  input: "resize-y min-h-[40px]",
                }}
                onChange={setText}
                value={stepText}
              />

              <p></p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onPress={handleOpenModalDescribeStep}>
                Fill later
              </Button>
              <Button color="primary" onPress={handleRecordDescribeStep}>
                Save my deal
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
      </>
  );
}
