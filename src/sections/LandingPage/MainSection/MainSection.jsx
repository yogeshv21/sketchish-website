import Styles from "./style.module.css";

import { svg } from "@/assets/icons";
import { AnimatedDiv, ParticlesJs } from "@/components";

const MainSection = ({
  animation = true,
  color = "white",
  heading,
  gradient,
  para,
}) => {
  return (
    <div className={Styles.main_sec_cont}>
      {animation && (
        <>
          <ParticlesJs />
          {/* <div className={Styles.animated_cursors}>
            <AnimatedDiv className={"a"} img={svg.CursorA} />
            <AnimatedDiv className={"b"} img={svg.CursorB} />
            <AnimatedDiv className={"c"} img={svg.CursorC} />
            <AnimatedDiv className={"d"} img={svg.CursorD} />
          </div> */}
        </>
      )}
      <div className={Styles.text_wraper}>
        <h1 className={Styles.main_heading} style={{ color: color }}>
          {heading} <br />{" "}
          <span className={Styles.gredient_animation}>{gradient}</span>
        </h1>
        <p className={Styles.para_line} style={{ color: color }}>
          {para}
        </p>
        {/* <p
          className={`${Styles.contact_link} ${
            color == "black" ? Styles.black_color : ""
          }`}
        >
          let’s start talking{" "}
          <svg
            className={Styles.gradient_arrow}
            xmlns="http://www.w3.org/2000/svg"
            width="51"
            height="17"
            viewBox="0 0 51 17"
            fill="none"
          >
            <path
              d="M0.5 8.5H49.5M49.5 8.5L42 1M49.5 8.5L42 16"
              stroke="url(#paint0_linear_1864_152670)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1864_152670"
                x1="49.5"
                y1="8"
                x2="19.6184"
                y2="-15.9016"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FA38A1" />
                <stop offset="0.568946" stop-color="#8F00FF" />
              </linearGradient>
            </defs>
          </svg>
        </p> */}
      </div>
    </div>
  );
};

export default MainSection;
