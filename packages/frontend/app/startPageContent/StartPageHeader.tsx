import React from "react";
import { 
    Navbar, 
    NavbarContent, 
    NavbarItem, 
    Button
     } from "@nextui-org/react";
import { Link } from 'react-scroll'

const StartPageHeader = () => {
    return (
        <Navbar shouldHideOnScroll className="h-[81px] w-full bg-[#999999]">
            <NavbarContent
                justify="center"
                className="gap-8"
            >
                <NavbarItem>
                    <Link 
                        activeClass="active" 
                        to="launchpad" 
                        spy={true} 
                        smooth={true} 
                        offset={-70} 
                        duration={500} 
                        className="text-[24px] hover:underline cursor-pointer" 
                        color="foreground"
                    >
                        Launchpad
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link 
                        activeClass="active" 
                        to="about" 
                        spy={true} 
                        smooth={true} 
                        offset={-70} 
                        duration={500} 
                        className="text-[24px] hover:underline cursor-pointer" 
                        color="foreground"
                    >
                        About Project
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                     activeClass="active" 
                     to="newsletter" 
                     spy={true} 
                     smooth={true} 
                     offset={-70} 
                     duration={500} 
                     className="text-[24px] hover:underline cursor-pointer" 
                     color="foreground"
                    >
                        Newsletter
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <Button
                    style={{
                        width: '154px',
                        height: '42px',
                        borderRadius: '8px',
                        backgroundColor: '#D6DA1D',
                        color: '#000',
                        fontSize: '20px',
                    }}
                >
                    App Soon
                </Button>
            </NavbarContent>
        </Navbar>
    )
}

export default StartPageHeader