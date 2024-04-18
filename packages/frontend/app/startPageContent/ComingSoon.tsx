import React from "react";
import { Button } from "@nextui-org/react";
import LoadingCard from "@/components/LoadingProjectCard"

const ComingSoon = () => {
    return (
        <div className="flex flex-col w-full mt-[85px]">
            <div className="flex justify-between items-center w-[723px] mb-[70px] ml-[36px]">
                <span className="text-[36px] text-[#FFF] font-bold">
                    Upcoming on Launchpad
                </span>
                <Button
                    isDisabled
                    style={{
                        borderRadius: '13px',
                        width: '199px',
                        height: '43.6px',
                        textAlign: 'center',
                        fontSize: '20px',
                        fontWeight: '300',
                        color: '#000',
                        backgroundColor: '#938C8C'
                    }}
                >
                    Coming Soon
                </Button>
            </div>
            <div className="flex justify-between items-center mx-[32px]">
                <div>
                    <LoadingCard />
                </div>
                <div>
                    <LoadingCard />
                </div>
                <div>
                    <LoadingCard />
                </div>
            </div>
        </div>
    )
}

export default ComingSoon