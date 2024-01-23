import CommonStyles from "../utils/commonStyles.module.css";

// Sections
import { Brands, FooterSection, MainSection, OurServicesSection, ReviewsSection, ShowCaseSection, StatisticsSection, TechnologySection, YourGrowthSection } from "@/sections";

export const metadata = {
  title: 'Empower Your Business with Cutting-Edge IT Services | Sketchish',
  description: 'Transform your business with our comprehensive IT services. From seamless network solutions to advanced cybersecurity, Sketchish delivers tailored technology solutions for optimal efficiency and growth. Explore our expertise today!',
  siteName: 'Sketchish',
  images: [
    {
      url: 'https://nextjs.org/og.png',
      width: 800,
      height: 600,
    },
    {
      url: 'https://nextjs.org/og-alt.png',
      width: 1800,
      height: 1600,
      alt: 'My custom alt',
    },
  ],
  locale: 'en_US',
  type: 'website',
}

export default function Home() {
  return (
    <>
      <MainSection heading={"A rare combination of"} gradient={"Software Engineering & Experience Designing"} para={"We’re human-centred team that help us to stand from the crowd."}/>
      <div className={CommonStyles.show_container}>
        <Brands />
        <YourGrowthSection />
        <OurServicesSection/>
        <StatisticsSection/>
        <ReviewsSection/>
        <ShowCaseSection />
        <TechnologySection/>
        {/* <BlogSection/> */}
        <FooterSection background={"white"}/>
      </div>
    </>
  );
}
