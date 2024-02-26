"use client";
import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import Link from "next/link";
import { Select, SelectItem } from "@nextui-org/select";

interface Positions {
  [key: number]: UserPosition;
}
interface Props {
    amountSteps: string;
}

type UserPosition = {
  step: string;
  timeframe: string;
};


export default function TableAmountCreate ({
    amountSteps
  }: Props) {
  console.log({amountSteps});

  const columns = [
    {name: "Steps of project", uid: "step"},
    {name: "Timeframe", uid: "timeframe"},
  ];

  const [dataSteps, setDataSteps] = useState([
    {
      step: "",
      timeframe: "Hello1",
    },
  ]);
  type Step = typeof dataSteps[0];

  useEffect(() => {
    (async () => {

      var userSteps: Positions = [];
      var newStep: UserPosition = {
        step: "",
        timeframe: "",
      };

      var dataStepsInside: any = [];

      for (let i = 1; i <= Number(amountSteps); i++) {
        if(i == 1) {
          newStep.step = "Seed round"; 
        } else if(i == Number(amountSteps)) {
          newStep.step = "Last efforts";
        } else {
          newStep.step = (i - 1).toString() + " sprint"; 
        }
        newStep.timeframe = "Hello";

        dataStepsInside.push(
          (userSteps[Number(i-1)] = {
            step: newStep.step,
            timeframe: newStep.timeframe,
          })
        );
      }
      setDataSteps(dataStepsInside);
    })();
  }, [amountSteps]); 

  ////////////////////////////////////

  const renderCell = React.useCallback((steping: Step, columnKey: React.Key) => {
    const cellValue = steping[columnKey as keyof Step];

    switch (columnKey) {
    //   case "asset":
    //     return (
    //       <User
    //         avatarProps={{ src: order.avatar }}
    //         description={
    //           <Link href={{ pathname: order.link }}>
    //             <div className="text-[#006FEE] text-[14px] hover:text-[#002E62] font-medium">
    //               Open Order
    //             </div>
    //           </Link>
    //         }
    //         name={cellValue}
    //       />
    //     );

      case "step":
        return <p className="text-bold text-sm capitalize">{cellValue}</p>;

     // case "timeframe":
       
     
     return
         <p className="text-bold text-sm capitalize">{cellValue}</p>;
               {/* <Link href="">
                <div className="text-[#006FEE] text-[14px] hover:text-[#002E62] font-medium">
                   Open Order
                 </div>
               </Link> */}
          
          //  <Select
          //            // onChange={steping.timeframe}
          //               variant="bordered"
          //               label="Amount steps"
          //               //placeholder="Amount steps"
          //               className="w-[187px]"
          //               radius="lg"
          //               size="sm"
          //               aria-label="coin"
          //              >
          //              <SelectItem key="0" value="0">{cellValue}</SelectItem>
          //              <SelectItem key="4" value="4">4</SelectItem>
          //              <SelectItem key="5" value="5">5</SelectItem>
          //              <SelectItem key="6" value="6">6</SelectItem>
          //              <SelectItem key="7" value="7">7</SelectItem>
          //              <SelectItem key="8" value="8">8</SelectItem>
          //              <SelectItem key="9" value="9">9</SelectItem>
          //              <SelectItem key="10" value="10">10</SelectItem>
          //            </Select>
      
       

      default:
        return cellValue;
    }
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen flex flex-col items-center">
        <div className="p-[15px] xl:w-[1262px] w-11/12 border-1-solid-#3D59AD rounded-[15px] bg-[#7980A580] mt-[5px]">
          <Tabs variant="underlined" aria-label="Orders" className="w-full">
            <Tab key="active-orders" title="Set every timeframe">
              <Table isStriped >
                <TableHeader columns={columns}>
                  {(column) => (
                    <TableColumn key={column.uid}>{column.name}</TableColumn>
                  )}
                </TableHeader>
                <TableBody items={dataSteps}>
                  {(item) => (
                    <TableRow key={item.step}>
                      {(columnKey) => (
                        <TableCell>{renderCell(item, columnKey)}</TableCell>
                      )}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </Tab>

            {/* <Tab key="orders-history" title=".">
              <Table aria-label="Orders History Table">
                <TableHeader>
                  <TableColumn>Step</TableColumn>
                  <TableColumn>Timeframe</TableColumn>
                  <TableColumn>Fee Balance</TableColumn>
                  <TableColumn>Order Balance</TableColumn>
                  <TableColumn>Balance, USD</TableColumn>
                </TableHeader>
                <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
              </Table>
            </Tab> */}
            
          </Tabs>
        </div>
      </div>
    </>
  );
};
