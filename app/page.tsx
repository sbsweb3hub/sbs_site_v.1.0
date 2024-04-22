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
import ModalWindowConnect from "./ModalWindowConnect";
import StartPage from "./StartPage";
import ListProjects from "./ListProjects";
import CommonModalWindow from "./CommonModalWindow";
import ModalWindowTx from "./ModalWindowTx";
import ERC20abi from "./ERC20";
import { useWalletStore } from "@/service/store";

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
    isOpenModalConnect,
    setIsOpenCommonModal,
    isOpenCommonModal,
    contentCommonModal,
  } = useWalletStore();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isOpenModalTx, setIsOpenModalTx] = useState<boolean>(false);

  const [txhash, setTxhash] = useState("");

  const miniTxhash = txhash.substring(0, 5) + "....." + txhash.slice(45);
  const hashLink = process.env.NEXT_PUBLIC_HASH_LINK_MUMBAI;
  const hashLinkPlus = hashLink + txhash;

  const handleOpenModal = async () => {
    onOpenChange();
  };
  const handleOpenCommonChange = async () => {
    setIsOpenCommonModal(false);
  };
  const handleOpenModalTx = async () => {
    setIsOpenModalTx(false);
  };


  return (
    <>
      <>
        {!isConnect ? (
          <div className="flex flex-col h-full flex flex-col items-center">
            <StartPage />
          </div>
        ) : (
          <div className="flex flex-col h-full flex flex-col items-center">
            <ListProjects />
          </div>
          // <>
          // <div className="flex flex-col h-screen flex flex-col items-center">
          //     <div className=" flex flex-col items-center bg-white rounded-[15px] max-[466px]:w-11/12 max-[640px]:px-[15px] max-[640px]:pb-[15px] sm:w-[464px] sm:h-[263px] mt-[129px] max-[472px]:mx-[10px]">
          //       <div className="flex min-[466px]:flex-wrap max-[466px]:grid max-[466px]:grid-cols-1 items-center md:flex-nowrap max-[466px]:gap-[15px] gap-[43px] mt-[63px]">    
          //       </div>  
          //      <p>Shom me the projects</p>
          //    </div>
          // </div>
          // </>
        )}
      </>
      <ModalWindowConnect
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
