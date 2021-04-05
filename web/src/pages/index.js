import React, { useState } from "react";
import * as styles from "../styles/global.scss";
import { DesignBackground } from "../components/DesignSection";
import DevelopmentBackground from "../components/DevelopmentSection";
import {
  navCont,
  container,
  visible,
  hidden,
  headerCont,
  foregroundContainer,
  ctaCont,
} from "../styles/index.module.scss";

// markup
const IndexPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSection = () =>
    setActiveIndex(activeIndex + 1 > 2 ? activeIndex : activeIndex + 1);
  const prevSection = () =>
    setActiveIndex(activeIndex - 1 < 0 ? activeIndex : activeIndex - 1);

  return (
    <div className={container}>
      <div className={foregroundContainer}>
        <div className={navCont}>
          <svg
            onClick={prevSection}
            className={activeIndex - 1 >= 0 ? visible : hidden}
            viewBox="0 0 104 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M48.132 128.03C50.9102 130.719 55.3417 130.646 58.0302 127.868L101.842 82.596C104.53 79.8179 104.458 75.3864 101.679 72.6979C98.9014 70.0094 94.4698 70.082 91.7813 72.8601L52.8377 113.102L12.596 74.1582C9.8179 71.4697 5.38634 71.5424 2.69785 74.3205C0.00935658 77.0986 0.082005 81.5302 2.86012 84.2187L48.132 128.03ZM44.0009 1.11474L46.0009 123.115L59.9991 122.885L57.9991 0.885261L44.0009 1.11474Z" />
          </svg>

          <svg
            onClick={nextSection}
            className={activeIndex + 1 <= 2 ? visible : hidden}
            viewBox="0 0 104 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M48.132 128.03C50.9102 130.719 55.3417 130.646 58.0302 127.868L101.842 82.596C104.53 79.8179 104.458 75.3864 101.679 72.6979C98.9014 70.0094 94.4698 70.082 91.7813 72.8601L52.8377 113.102L12.596 74.1582C9.8179 71.4697 5.38634 71.5424 2.69785 74.3205C0.00935658 77.0986 0.082005 81.5302 2.86012 84.2187L48.132 128.03ZM44.0009 1.11474L46.0009 123.115L59.9991 122.885L57.9991 0.885261L44.0009 1.11474Z" />
          </svg>
        </div>
        <HeroHeader
          head={
            activeIndex === 0
              ? "Design"
              : activeIndex === 1
              ? "Develop"
              : activeIndex === 2
              ? "Explore"
              : null
          }
          subhead={
            activeIndex === 0
              ? "View Work"
              : activeIndex === 1
              ? "View Work"
              : activeIndex === 2
              ? "Say Hello"
              : null
          }
        />
      </div>

      {activeIndex === 0
        ? (<DesignBackground/>)
        : activeIndex === 1
        ? (<DevelopmentBackground/>)
        : activeIndex === 2
        ? (<DevelopmentBackground/>)
        : null}
    </div>
  );
};

const HeroHeader = ({ head, subhead }) => {
  return (
    <>
      <div className={headerCont}>
        <h1>{head}</h1>
        <div className={ctaCont}>
          <h2>{subhead}</h2>
          <svg
            viewBox="0 0 359 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M356.95 56.9497C359.683 54.2161 359.683 49.7839 356.95 47.0503L312.402 2.50253C309.668 -0.231144 305.236 -0.231144 302.503 2.50253C299.769 5.23619 299.769 9.66835 302.503 12.402L342.1 52L302.503 91.598C299.769 94.3316 299.769 98.7638 302.503 101.497C305.236 104.231 309.668 104.231 312.402 101.497L356.95 56.9497ZM0 59H352V45H0L0 59Z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
