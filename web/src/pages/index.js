import * as React from "react";
import { HeroSection, HeroHeader } from "../components/hero";
import * as styles from "../styles/global.scss";
import { DesignBackground } from "./DesignSection";
import { wrapper, sectionWrapper, header } from "./index.module.scss";

// markup
const IndexPage = () => {
  return (
    <>
      <DesignSection></DesignSection>
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
export default IndexPage;
