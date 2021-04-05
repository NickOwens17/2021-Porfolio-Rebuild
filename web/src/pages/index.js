import React, { useState} from "react";
import { HeroHeader } from "../components/hero";
import * as styles from "../styles/global.scss";
import { DesignBackground } from "../components/DesignSection";
import DevelopmentBackground from "../components/DevelopmentSection"
import { navCont, sectionWrapper, header, visible, hidden } from "../styles/index.module.scss";
import { motion } from "framer-motion";

// markup
const IndexPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextSection = () => setActiveIndex(activeIndex + 1);
  const prevSection = () => setActiveIndex(activeIndex - 1);

  const navArrowVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0}
  };

  return (
    <>
      <div className={navCont}>
        <svg onClick={prevSection} className={(activeIndex - 1) >= 0 ? visible: hidden} viewBox="0 0 104 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48.132 128.03C50.9102 130.719 55.3417 130.646 58.0302 127.868L101.842 82.596C104.53 79.8179 104.458 75.3864 101.679 72.6979C98.9014 70.0094 94.4698 70.082 91.7813 72.8601L52.8377 113.102L12.596 74.1582C9.8179 71.4697 5.38634 71.5424 2.69785 74.3205C0.00935658 77.0986 0.082005 81.5302 2.86012 84.2187L48.132 128.03ZM44.0009 1.11474L46.0009 123.115L59.9991 122.885L57.9991 0.885261L44.0009 1.11474Z" />
        </svg>
      
        <svg onClick={nextSection} className={(activeIndex + 1) <= 2 ?  visible: hidden} viewBox="0 0 104 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48.132 128.03C50.9102 130.719 55.3417 130.646 58.0302 127.868L101.842 82.596C104.53 79.8179 104.458 75.3864 101.679 72.6979C98.9014 70.0094 94.4698 70.082 91.7813 72.8601L52.8377 113.102L12.596 74.1582C9.8179 71.4697 5.38634 71.5424 2.69785 74.3205C0.00935658 77.0986 0.082005 81.5302 2.86012 84.2187L48.132 128.03ZM44.0009 1.11474L46.0009 123.115L59.9991 122.885L57.9991 0.885261L44.0009 1.11474Z" />
        </svg>
      </div> 
      {activeIndex === 0 ? DesignSection : activeIndex === 1 ? DevelopmentSection() : activeIndex === 2 ? ExploreSection() : null}
    </>
  );
};


const DesignSection =  (
 
    <div className={sectionWrapper}>
      <div className={header}>
        <HeroHeader head="Design" subhead="view work" />
      </div>
      <DesignBackground></DesignBackground>
    </div>
 
);

const DevelopmentSection = () => {
  return (
    <div className={sectionWrapper}>
      <div className={header}>
        <HeroHeader head="Develop" subhead="view work" />
      </div>
      <DevelopmentBackground></DevelopmentBackground>
    </div>
  );
};

const ExploreSection = () => {
  return (
    <div className={sectionWrapper}>
      <div className={header}>
        <HeroHeader head="Explore" subhead="view work" />
      </div>
    </div>
  );
};



export default IndexPage;
