import * as React from "react";
import { HeroHeader } from "../components/hero";
import * as styles from "../styles/global.scss";
import { DesignBackground } from "../components/DesignSection";
import DevelopmentBackground from "../components/DevelopmentSection"
import { wrapper, sectionWrapper, header } from "./index.module.scss";

// markup
const IndexPage = () => {
  return (
    <>
      {/* <DesignSection></DesignSection> */}
      <DevelopmentSection></DevelopmentSection>
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




export default IndexPage;
