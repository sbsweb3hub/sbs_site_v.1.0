"use client";
import React, { useEffect, useState } from "react";

import { Select, SelectItem } from "@nextui-org/select";


interface Props {
    amountSteps: string;
    onSelectorMonth_1:  () => void;
}



export default function Selector4 ({
    amountSteps,
    onSelectorMonth_1
  }: Props) {
  console.log({amountSteps});



  useEffect(() => {
    (async () => {

    })();
  }, [amountSteps]); 

  return (
    <>
      <div className="flex flex-col h-screen flex flex-col items-center">
        <div className="p-[15px] xl:w-[1262px] w-11/12 border-1-solid-#3D59AD rounded-[15px] bg-[#7980A580] mt-[5px]">
        <div className="flex min-[466px]:flex-wrap max-[466px]:grid max-[466px]:grid-cols-1 md:flex-nowrap max-[466px]:gap-[15px] gap-[41px] mt-[15px]">
                      {/* <Input
                        onChange={setTokenAmountSteps}
                        value={amountSteps}
                        type="number"
                        label="Amount steps"
                        variant="bordered"
                        className="w-[187px]"
                        radius="lg"
                        size="sm"
                      /> */}
              
                      <Select
                        onChange={onSelectorMonth_1}
                        variant="bordered"
                        label="Month_1"
                        //placeholder="Amount steps"
                        className="w-[187px]"
                        radius="lg"
                        size="sm"
                        aria-label="coin"
                       >
                       <SelectItem key="1" value="1">1</SelectItem>
                       <SelectItem key="2" value="2">2</SelectItem>
                       <SelectItem key="3" value="3">3</SelectItem>
                       <SelectItem key="4" value="4">4</SelectItem>
                       <SelectItem key="5" value="5">5</SelectItem>
                       <SelectItem key="6" value="6">6</SelectItem>
                     </Select>
                
                     </div>
        </div>
      </div>
    </>
  );
};
