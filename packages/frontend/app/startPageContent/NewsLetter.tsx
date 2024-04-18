import React, {useState, useEffect} from "react";
import { Button, Input } from "@nextui-org/react";


const NewsLetter = () => {
    
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        console.log(email)
        alert("Thank you for subscribing! You will now receive the latest updates.")
        setEmail("")
    };


    return (
        <div className="flex max-[1028px]:flex-col min-[1029px]:justify-between max-[1028px]:items-start items-center w-[98%]
                 h-fit min-[1029px]:h-[222px] rounded-[20px] bg-[#657276B2] max-[1028px]:gap-3 max-[1028px]:py-[20px] mt-[180px]">
            <div className="flex flex-col ml-[39px]">
                <div className="text-[#FFF] text-[24px] font-normal">
                    Never want to miss a sale ?
                </div>
                <div className="text-[#EBEE4F] text-[32px] font-extrabold">
                    Sign up for our newsletter and get the latest news and updates.
                </div>
            </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-3 items-start sm:items-center mr-[39px] max-[1028px]:ml-[39px]">
                    <div>
                        <Input
                            isClearable
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            size="lg"
                            type="email" 
                            label="Email"
                            style={{
                                width: '300px',
                                borderRadius: '20px'
                            }}
                        />
                    </div>
                    <div>
                        <Button
                            style={{
                                backgroundColor: '#D6D940',
                                borderRadius:'20px',
                                color: '#000',
                                fontSize: '24px',
                                fontWeight: '400',
                                width: '164px',
                                height: '62px'
                            }}
                            onClick={handleSubscribe}
                        >
                            Subscribe
                        </Button>
                    </div>
                </div>
        </div>
    )
}

export default NewsLetter