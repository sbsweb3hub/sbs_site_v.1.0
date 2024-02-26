import React from "react";
import { Card, CardFooter, Image, Button, CardBody, Divider } from "@nextui-org/react";
import { useWalletStore } from "@/service/store";
import WhyNeed from "./startPageContent/WhyNeed";
import Partners from "./startPageContent/Partners";
import Greating from "./startPageContent/Greating";
import Benefits from "./startPageContent/Benefits";
import FooterStartPage from "./startPageContent/FooterStartPage";
//import TradingView from "./TradingView";

const StartPage = () => {
  const { handleIsConnected } = useWalletStore();

  return (
   
    <div className="flex flex-col items-center
               rounded-[15px] max-[466px]:w-11/12 max-[640px]:px-[15px] max-[640px]:pb-[15px] sm:w-[664px] sm:h-[1510px] mt-[129px] max-[472px]:mx-[10px]">
    <Greating />
      <Card isFooterBlurred radius="lg" className="border-none">
        <Image
          alt="Owl"
          className="object-cover"
          height={300}
          src="/shots_1.png"
          width={300}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="ext-large text-red-500">Welcome to SBS</p>
          <Button
            className="text-large text-red-500 bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="md"
            onClick={() => handleIsConnected()}
          >
            Connect
          </Button>
        </CardFooter>
      </Card>
    
      <WhyNeed />
      <Benefits />
      <Partners />
      <FooterStartPage />
      </div>
    
  );
};
export default StartPage;
