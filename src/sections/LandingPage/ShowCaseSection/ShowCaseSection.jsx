import { images } from "@/assets/images";
import { SectionHeader } from "@/components";
import Image from "next/image";
import Styles from "./style.module.css";

const MobileCard = ({img, appName}) => {
  return <div className={Styles.mobile_card}>
     <div className={Styles.img_cont}>
         <Image className={Styles.img} src={img}/>
     </div>
     <p className={Styles.app_name}>
       {appName}
     </p>
  </div>;
};
const WebCard = ({img, appName}) => {
  return <div className={Styles.web_card}>
    <div className={Styles.img_cont}>
         <Image className={Styles.img} src={img}/>
     </div>
     <p className={Styles.app_name}>
       {appName}
     </p>
  </div>;
};

const ShowCaseSection = () => {
  return (
    <section className={Styles.section_cont}>
      <SectionHeader
        heading={"Our work is versatile in every"}
        gradient={"venture Simply Impactful Solutions"}
        para={
          "We have build the trust across the globe. Here you’ll find every kind of versatility. Our portfolio is as diverse as our team. Ranging from SaaS, B2B, B2C, D2C, and Fintech to Hospitality."
        }
        color={"white"}
      />
      <div className={Styles.app_showcase_cont}>
        <div className={`${Styles.cards_cont} ${Styles.scroll_to_lft}`}>
          <MobileCard img={images.screen_1} appName={"GoDaddy Spark"}/>
          <MobileCard img={images.screen_2} appName={"HeyArrow CRM"}/>
          <MobileCard img={images.screen_3} appName={"FMR Fitness App"}/>
          <MobileCard img={images.screen_4} appName={"Automate.io"}/>
          <MobileCard img={images.screen_5} appName={"Apptaizer"}/>
          <MobileCard img={images.screen_6} appName={"Apptaizer reservation"}/>
          <MobileCard img={images.screen_7} appName={"InAccord"}/>
          <MobileCard img={images.screen_8} appName={"Bajaj Home Automation"}/>
          <MobileCard img={images.screen_9} appName={"Fit Man Cook"}/>
          <MobileCard img={images.screen_10} appName={"Fitness"}/>
        </div>
        <div className={`${Styles.cards_cont} ${Styles.scroll_to_lft}`}>
          <MobileCard img={images.screen_1} appName={"GoDaddy Spark"}/>
          <MobileCard img={images.screen_2} appName={"HeyArrow CRM"}/>
          <MobileCard img={images.screen_3} appName={"FMR Fitness App"}/>
          <MobileCard img={images.screen_4} appName={"Automate.io"}/>
          <MobileCard img={images.screen_5} appName={"Apptaizer"}/>
          <MobileCard img={images.screen_6} appName={"Apptaizer reservation"}/>
          <MobileCard img={images.screen_7} appName={"InAccord"}/>
          <MobileCard img={images.screen_8} appName={"Bajaj Home Automation"}/>
          <MobileCard img={images.screen_9} appName={"Fit Man Cook"}/>
          <MobileCard img={images.screen_10} appName={"Fitness"}/>
        </div>
      </div>
      <div className={Styles.app_showcase_cont}>
        <div className={`${Styles.cards_cont} ${Styles.scroll_to_rgt}`}>
          <WebCard img={images.web_screen_1} appName={"InAccord - SaaS Application"}/>
          <WebCard img={images.web_screen_2} appName={"Automate.io"}/>
          <WebCard img={images.web_screen_3} appName={"Puzzleapp.io"}/>
          <WebCard img={images.web_screen_4} appName={"Trip Center"}/>
          <WebCard img={images.web_screen_5} appName={"C&B Operations - Managed by HeyArrow"}/>
          <WebCard img={images.web_screen_6} appName={"Andro - AI recruitment platform"}/>
          <WebCard img={images.web_screen_7} appName={"Tax1099 by Zenwork"}/>
          <WebCard img={images.web_screen_8} appName={"eVisic"}/>
          <WebCard img={images.web_screen_9} appName={"ApTask - Lead Generation"}/>
          <WebCard img={images.web_screen_10} appName={"Diet fitness website"}/>
        </div>
        <div className={`${Styles.cards_cont} ${Styles.scroll_to_rgt}`}>
          <WebCard img={images.web_screen_1} appName={"InAccord - SaaS Application"}/>
          <WebCard img={images.web_screen_2} appName={"Automate.io"}/>
          <WebCard img={images.web_screen_3} appName={"Puzzleapp.io"}/>
          <WebCard img={images.web_screen_4} appName={"Trip Center"}/>
          <WebCard img={images.web_screen_5} appName={"C&B Operations - Managed by HeyArrow"}/>
          <WebCard img={images.web_screen_6} appName={"Andro - AI recruitment platform"}/>
          <WebCard img={images.web_screen_7} appName={"Tax1099 by Zenwork"}/>
          <WebCard img={images.web_screen_8} appName={"eVisic"}/>
          <WebCard img={images.web_screen_9} appName={"ApTask - Lead Generation"}/>
          <WebCard img={images.web_screen_10} appName={"Diet fitness website"}/>
        </div>
      </div>
      {/* <div className={Styles.btn_cont}>
        <Button className={Styles.btn} background={"white"} color={"black"} width={"16%"} animate={true}>view all WORK</Button>
      </div> */}
    </section>
  );
};

export default ShowCaseSection;
