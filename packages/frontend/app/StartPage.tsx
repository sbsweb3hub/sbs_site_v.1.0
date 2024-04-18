import React from "react";
import { Element } from 'react-scroll';
import Partners from "./startPageContent/Partners";
import LetterFadeInText from "./startPageContent/FadedText"
import { Gemunu_Libre } from 'next/font/google'
import ComingSoon from './startPageContent/ComingSoon'
import AboutProject from "./startPageContent/AboutProject";
import NewsLetter from "./startPageContent/NewsLetter";
import StartPageHeader from "./startPageContent/StartPageHeader";
import StartPageFooter from "./startPageContent/StartPageFooter";

const gemunuLibre = Gemunu_Libre({subsets: ['latin']})

const StartPage = () => {

  return (
   
    <div className="flex flex-col items-center
               rounded-[15px] max-[466px]:w-11/12 max-[640px]:px-[15px] max-[640px]:pb-[15px] w-screen  h-full max-[472px]:mx-[10px]">

        <StartPageHeader/>        
        <div
          className={gemunuLibre.className}
          style={{
            fontSize: '128px',
            color: '#D6DA1D',
            fontWeight: '400',
            marginTop: '199px',
            marginBottom: '20px'
        }}
        >
          <LetterFadeInText text="Blaunchpad" useWaypoint={false}/>
        </div>
        <div className="w-[959px] text-[32px] text-[#FFF] font-medium text-center mt-[16px]">
          Our unbelievable platform will send your project to the moon inevitable. Just create and participate and have fun.
        </div>
        <Element name="launchpad" className="element"></Element>
        <ComingSoon />
        <div className="text-[36px] text-[#FFF] font-bold mt-[180px]">
            <LetterFadeInText text="About Project"  useWaypoint={true} />
        </div>
        <Element name="about" className="element"></Element>
        <div className="flex w-8/12">
          <AboutProject />
        </div>
        <Partners />
        <Element name="newsletter" className="element"></Element>
        <NewsLetter/>
        <StartPageFooter/>
    </div>
      
  );
};
export default StartPage;
