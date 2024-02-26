import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import POLY from "@/public/polygon.png";
import NOMIS from "@/public/nomis.jpeg";
import OxScore from "@/public/0xScore.png";
import Chain from "@/public/Chainanalisis.png";

export default function Partners() {
  const list = [
    {
      title: "Polygon",
      img: "/polygon.png",
      price: "Network",
    },
    {
      title: "Arbitrum",
      img: "/arbitrum.png",
      price: "Soon",
    },
    {
      title: "Binance",
      img: "/BSChain.png",
      price: "Soon",
    },
    {
      title: "Ethereum",
      img: "/ethereum2.png",
      price: "Soon",
    },
    {
      title: "Nomis",
      img: "/nomis.jpeg",
      price: "Score",
    },
    {
      title: "Gitcoin",
      img: "/gitcoin.jpeg",
      price: "Score",
    },
    {
      title: "0xScore",
      img: "/0xScore.png",
      price: "Score",
    },
    {
      title: "Chainalysis",
      img: "/Chainanalisis.png",
      price: "AML",
    },
  ];

  return (
    <>
    <p className="typing-text text-left text-black-600/55 mt-[30px] mb-[10px]">
      What we will use?
    </p>
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
    </>
  );
}
