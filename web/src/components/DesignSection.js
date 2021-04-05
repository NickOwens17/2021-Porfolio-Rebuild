import React from "react";
import {
  designBgElems,
  exOneStyle,
  exTwoStyle,
  exThreeStyle,
  exFourStyle,
  exFiveStyle,
  exSixStyle,
  exSevenStyle,
  exEightStyle,
} from "../styles/DesignSection.module.scss";
import { motion } from "framer-motion";

const exOne = (
  <motion.div
    className={exOneStyle}
    initial={{ opacity: 0.7, x: -300, y: 300 }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.6, ease: "backIn", delay: 0.4 }}
  >
    <svg
      width="696"
      height="307"
      viewBox="0 0 696 307"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M474.298 21.4282L541.963 61.7352C546.453 64.4099 548.14 69.9827 545.849 74.5746L518.775 128.847L413.194 66.5538L462.234 22.5504C465.532 19.5914 470.447 19.1342 474.298 21.4282ZM392.378 85.2308L506.843 152.765L270.512 626.508C267.939 631.666 261.408 633.555 256.328 630.61L-18.4999 471.307C-24.3618 467.909 -25.2488 459.959 -20.2649 455.487L392.378 85.2308Z"
        fill="#CB261B"
      />
    </svg>
  </motion.div>
);

const exTwo = (
  <motion.div
    className={exTwoStyle}
    initial={{ opacity: 0.7, x: -300, y: -600 }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.6, ease: "backIn", delay: 0.4 }}
  >
    <svg
      width="252"
      height="366"
      viewBox="0 0 252 366"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M246.703 341.65L207.382 364.278C202.867 366.876 197.114 365.574 194.159 361.284L172.32 329.584L235.557 292.827L250.922 329.08C252.895 333.734 251.084 339.128 246.703 341.65ZM228.382 275.9L114.331 6.8091C111.857 0.972228 104.646 -1.11905 99.4332 2.48864L4.40219 68.2579C-0.132278 71.3962 -1.27042 77.6129 1.85811 82.154L161.941 314.519L228.382 275.9Z"
        fill="#E3362B"
      />
    </svg>
  </motion.div>
);

const exThree = (
  <motion.div
    className={exThreeStyle}
    initial={{ opacity: 0.7, x: 1200, y: -600 }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.6, ease: "backIn", delay: 0.4 }}
  >
    <svg
      width="392"
      height="385"
      viewBox="0 0 392 385"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33.3011 371.16L3.04434 323.035C0.509624 319.003 1.29034 313.477 4.89144 309.962L36.1698 279.424L81.1086 350.276L46.6793 373.629C42.073 376.753 36.1275 375.656 33.3011 371.16ZM97.3929 339.231L50.5531 265.381L310.616 11.477C315.431 6.77599 322.96 7.7394 325.886 13.4309L386.787 131.889C389.155 136.494 387.518 142.444 383.048 145.476L97.3929 339.231Z"
        fill="#A4332C"
      />
    </svg>
  </motion.div>
);

const exFour = (
  <motion.div
    className={exFourStyle}
    initial={{ opacity: 0.7, x: -50, y: 600 }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.6, ease: "backIn", delay: 0.4 }}
  >
    <svg
      width="346"
      height="347"
      viewBox="0 0 346 347"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M167.525 19.0411L212.366 34.104C216.618 35.5322 219.398 39.6165 219.168 44.0957L217.357 79.4094L139.935 53.7748L155.469 23.9065C157.742 19.5372 162.857 17.4729 167.525 19.0411ZM131.411 70.166L216.388 98.3023L205.885 303.08C205.511 310.372 197.702 314.817 191.241 311.417L54.5634 239.494C49.6926 236.931 47.8088 230.914 50.3484 226.031L131.411 70.166Z"
        fill="#5B1C18"
      />
    </svg>
  </motion.div>
);

const exFive = (
  <motion.div
    className={exFiveStyle}
    initial={{ opacity: 0.7, x: 20, y: 400 }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.6, ease: "backIn", delay: 0.4 }}
  >
    <svg
      width="561"
      height="418"
      viewBox="0 0 561 418"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M160.64 34.7645L220.719 21.7264C225.164 20.7619 229.892 23.1042 232.117 27.3732L270.591 101.163L134.879 106.194L153.83 41.1549C154.781 37.8924 157.354 35.4776 160.64 34.7645ZM120.383 155.942L295.763 149.44L445.106 435.868C448.591 442.551 444.332 450.179 437.117 450.179L48.8182 450.179C41.9408 450.179 36.6808 443.195 38.5993 436.611L120.383 155.942Z"
        fill="#CB261B"
      />
    </svg>
  </motion.div>
);

const exSix = (
  <motion.div
    className={exSixStyle}
    initial={{ opacity: 0.7, x: 20, y: -600 }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.6, ease: "backIn", delay: 0.4 }}
  >
    <svg
      width="619"
      height="467"
      viewBox="0 0 619 467"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M339.006 438.161L280.516 431.387C275.998 430.864 272.281 427.119 271.554 422.36L264.772 377.977L359.876 388.609L349.012 431.044C347.815 435.717 343.627 438.696 339.006 438.161ZM364.801 369.37L261.696 357.843L201.474 -36.3174C200.479 -42.8336 205.391 -48.3851 211.58 -47.7389L452.86 -22.5462C459.021 -21.9029 463.317 -15.4415 461.723 -9.21508L364.801 369.37Z"
        fill="#CB261B"
      />
    </svg>
  </motion.div>
);

const exSeven = (
  <motion.div
    className={exSevenStyle}
    initial={{ opacity: 0.7, x: 600, y: 100 }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.6, ease: "backIn", delay: 0.4 }}
  >
    <svg
      width="307"
      height="622"
      viewBox="0 0 307 622"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.9601 250.064L54.6537 188.64C56.6046 184.859 60.734 182.727 64.9462 183.325L134.455 193.194L75.2189 290.357L26.9666 263.378C22.2599 260.746 20.4875 254.856 22.9601 250.064ZM96.6133 302.32L160.856 196.942L480.533 242.33C485.843 243.084 489.613 247.893 489.077 253.23L465.076 492.318C464.356 499.482 456.53 503.561 450.245 500.048L96.6133 302.32Z"
        fill="#AA3E37"
      />
    </svg>
  </motion.div>
);

const exEight = (
  <motion.div
    className={exEightStyle}
    initial={{ opacity: 0.7, x: -500, y: -800 }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.6, ease: "backIn", delay: 0.4 }}
  >
    <svg
      width="382"
      height="579"
      viewBox="0 0 382 579"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M347.884 577.682L277.712 567.264C275.046 566.868 272.652 565.413 271.074 563.227L227.234 502.526L327.339 460.64L358.923 564.891C361.05 571.913 355.142 578.759 347.884 577.682ZM319.596 435.08L211.261 480.41L16.6728 210.982C13.9898 207.268 14.1751 202.205 17.1222 198.696L174.91 10.8388C180.018 4.75755 189.836 6.77033 192.138 14.3709L319.596 435.08Z"
        fill="#8A261F"
      />
    </svg>
  </motion.div>
);

const containerVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}
//TODO: add orchestration -- parent div should control 
export const DesignBackground = () => {
  return (
    <motion.div className={designBgElems}>
      {exOne}
      {exTwo}
      {exThree}
      {exFour}
      {exFive}
      {exSix}
      {exSeven}
      {exEight}
    </motion.div>
  );
};
