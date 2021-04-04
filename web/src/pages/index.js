import React, { useState} from "react";
import { HeroHeader } from "../components/hero";
import * as styles from "../styles/global.scss";
import { DesignBackground } from "../components/DesignSection";
import DevelopmentBackground from "../components/DevelopmentSection"
import { wrapper, sectionWrapper, header } from "./index.module.scss";

// markup
const IndexPage = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  
  return (
    <>
      {activeIndex === 1 ? DesignSection() : activeIndex == 2 ? DevelopmentSection() : activeIndex == 3 ? DevelopmentSection() : null}
    </>
  );
};

const DesignSection = () => {
  return (
    <div className={sectionWrapper}>
      <div className={header}>
        <HeroHeader head="Design" subhead="view work" />
      </div>
      <DesignBackground></DesignBackground>
    </div>
  );
};

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
