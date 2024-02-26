import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function Greating() {
  return (
    <Card className="max-w-[750px] h-[420px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="/logo_1.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="typing-text">The main vision</p>
          {/* <p className="text-small text-default-500">nextui.org</p> */}
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <ul className="list-disc ml-[25px] mr-[15px]">
          <li>Turn an idea into a finished product using the infrastructure / SBS-Hub. </li>
          <Divider className="my-4" />
          <li>SBS-Hub provides all the tools and competencies that are necessary for the implementation of each specific task.</li>
          <Divider className="my-4" />
          <li> Do you have an idea? - come and implement it.</li>
          <li>Are you a professional in your field? - come and find the perfect project for yourself.</li>
          <li>Do you have a desire to support the project? - come and become the angel of the future unicorn. </li>
      </ul>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://sbsweb3hubs-organization.gitbook.io/light-paper/"
        >
          Explore more on GitBook.
        </Link>
      </CardFooter>
    </Card>
  );
}
