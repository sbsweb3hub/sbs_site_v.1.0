import React from "react";
import {Accordion, AccordionItem, Avatar } from "@nextui-org/react";

export default function WhyNeed() {
    const angelContent =
    "Angels hedges their investment risks and oversees the project implementation process. They get an accurate vision of the integrity of the team, of its intention to follow exactly the set step of creating a product.";
    const creatorContent =
    "The opportunity to receive a trust from the angels. To prove your intentions and desires to implement the product. Be sure of constant financing through decentralized distribution by a smart contract.";
    const industryContent =
    "Improvement of the startup support sphere. We create conditions for the launch of new finished products. The more tools there are, the more competition there is, which is a guide to the best service, user-friendly interfaces and cheap products.";

  return (
    <>
     <p className="typing-text text-left text-black-600/55 text-[24px] mt-[30px]">
      Why do they need to use it?
      </p>
        <Accordion selectionMode="multiple">
      <AccordionItem
        key="1"
        aria-label="Web3 project's angels"
        startContent={
          <Avatar
            isBordered
            color="primary"
            radius="lg"
            src="/portfel.jpeg"
          />
        }
        subtitle="Safe & Openness"
        title="Web3 project's angels"
      >
        {angelContent}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Project's creators"
        startContent={
          <Avatar
            isBordered
            color="success"
            radius="lg"
            src="/idea.png"
          />
        }
        subtitle="Fairness"
        title="Project's creators"
      >
        {creatorContent}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Crypto industry"
        startContent={
          <Avatar
            isBordered
            color="warning"
            radius="lg"
            src="/blockchain.png"
          />
        }
        subtitle="Healthy development"
        title="Crypto industry"
      >
        {industryContent}
      </AccordionItem>
    </Accordion>
    </>
  );
}
