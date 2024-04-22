"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import { Chip } from "@nextui-org/chip";
import ETH from "@/public/eth.svg";
import WBTC from "@/public/btc.svg";
import USDC from "@/public/usdc.svg";
import Chart from "@/components/chart";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Contract } from "ethers";
import { maxUint128 } from "viem";
import defaultProvider from "../../defaultProvider";
import abiContract from "../../abiContract";
import { useWalletStore } from "@/service/store";

export default function OrderPage({ params }: { params: { id: string } }) {
  const {
    account,
    positionManagerContractAddress,
    USDTContractAddress,
    ETHContractAddress,
  } = useWalletStore();

  const [nameOrder, setNameOrder] = useState<string>("");
  const [inRange, setInRange] = useState<string>("");
  const [colorRange, setColorRange] = useState<string>("");
  const [ETH_WBTC, setETH_WBTC] = useState<string>("");
  const [iconETH_WBTC, setIconETH_WBTC] = useState<any>(ETH);
  const [amountUSDC, setAmountUSDC] = useState<string>("");
  const [amountETH_WBTC, setAmountETH_WBTC] = useState<string>("");
  const [feeUSDC, setFeeUSDC] = useState<string>("");
  const [feeETH_WBTC, setFeeETH_WBTC] = useState<string>("");
  const [balanceDollars, setBalanceDollars] = useState<string>("");
  const [feeDollars, setFeeDollars] = useState<string>("");
  const [priceView, setPriceView] = useState<string>("");

  return (
    <div className="flex flex-col h-full lg:h-screen flex flex-col items-center">
      <Card className="xl:w-[886px] w-5/6 border-1-solid-#3D59AD rounded-[15px] bg-[#7980A580] mt-[110px] max-[1023px]:mb-[30px] flex flex-col items-center">
        <div className="xl:w-[773px] w-11/12">
          <CardHeader className="flex max-[680px]:flex-col justify-between content-center max-[680px]:items-start">
            <div className="flex max-[680px]:flex-col justify-between">
              <div className="flex justify-between content-center gap-[21px] text-white font-medium text-[20px] font-inter">
                <Image src={iconETH_WBTC} alt="" width={31} height={31} />
                <p>{nameOrder}</p>
              </div>
              <div className="min-[681px]:ml-[48px]">
                <Chip
                  radius="sm"
                  classNames={{
                    base: colorRange,
                    content: "text-white font-medium text-[20px] font-inter",
                  }}
                >
                  {inRange}
                </Chip>
              </div>
            </div>
            <div className="flex justify-end text-[#F1F1F166] font-medium text-[16px] font-inter">
              <p>
                {ETH_WBTC} current price: $ {priceView}
              </p>
            </div>
          </CardHeader>
          <Divider className="bg-white" />
          <CardBody className="grid grid-cols-1 lg:grid-cols-2 gap-[18px]">
            <div className="flex flex-col justify-center content-center ">
              <Chart />
            </div>
            <div className="flex flex-col item-center justify-center gap-[22px]">
              <div className="flex flex-col">
                <div className="h-[25px] w-[138px] text-center text-[#F1F1F166] font-medium text-[14px] font-inter">
                  Order balance
                </div>
                <div className="flex max-[347px]:flex-col max-[347px]:items-center justify-around w-full xl:w-[370px] h-[145px] bg-[#F1F3FF] rounded-[15px]">
                  <div className="flex flex-col content-center justify-center">
                    <div className="text-black text-center font-medium text-[32px] font-inter">
                      $ {balanceDollars}
                    </div>
                    <div className="flex flex-col content-center font-inter text-[16px] text-[#4C5270] font-semibold">
                      <div className="flex flex-row justify-start gap-[40px]">
                        <Image src={USDC} alt="" width={18} height={18} />
                        <p>{amountUSDC}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[40px]">
                        <Image
                          src={iconETH_WBTC}
                          alt=""
                          width={18}
                          height={18}
                        />
                        <p>{amountETH_WBTC}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <Button className="bg-[#6078F9] w-[120px] min-[419px]:w-[172px] rounded-[6px] text-[#FFFFFF] font-semibold text-[16px] font-inter">
                      Close order
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="h-[25px] w-[138px] text-center text-[#F1F1F166] font-medium text-[14px] font-inter">
                  Fee balance
                </div>
                <div className="flex max-[347px]:flex-col max-[347px]:items-center justify-around w-full xl:w-[370px] h-[145px] bg-[#F1F3FF] rounded-[15px]">
                  <div className="flex flex-col content-center justify-center">
                    <div className="text-black text-center font-medium text-[32px] font-inter">
                      $ {feeDollars}
                    </div>
                    <div className="flex flex-col content-center font-inter text-[16px] text-[#4C5270] font-semibold">
                      <div className="flex flex-row justify-start gap-[40px]">
                        <Image src={USDC} alt="" width={18} height={18} />
                        <p>{feeUSDC}</p>
                      </div>
                      <div className="flex flex-row justify-start gap-[40px]">
                        <Image
                          src={iconETH_WBTC}
                          alt=""
                          width={18}
                          height={18}
                        />
                        <p>{feeETH_WBTC}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <Button className="bg-[#6078F9] w-[120px] min-[419px]:w-[172px] rounded-[6px] text-[#FFFFFF] font-semibold text-[16px] font-inter">
                      Claim fees
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </div>
      </Card>
    </div>
  );
}
