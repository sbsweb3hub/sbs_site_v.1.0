import React from "react";
import {Card, CardBody, Divider} from "@nextui-org/react";

export default function Benefits() {
  return (
    <>
    <div className="wrapper mb-[20px] mt-[30px]">
        <div className="typing-demo">What are the benefits?!</div>
       </div>

      <Card className="max-w-[750px] h-[350px]">
      <CardBody> 
      <ul className="list-disc ml-[25px] mr-[15px]">
          <li>The roadmap of the project is divided into stages, all of which have a clear plan and schedule. </li>
          <Divider className="my-4" />
          <li>The project financing is organised in instalments. Each of the stages is accompanied by a thorough report, which contains the actual results and achievements of the team.</li>
          <Divider className="my-4" />
          <li>Smart contracts are used in such a way that the team is able to access the money only if they have completed the previous stage successfully. </li>
          <Divider className="my-4" />
          <li> Having analysed the report, investors can vote for further transactions or against them. </li>
      </ul>
      </CardBody>
      </Card>
      </>
  );
}