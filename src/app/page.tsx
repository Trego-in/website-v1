import React from "react";
import SectionHero from "@/app/(server-components)/SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import { TaxonomyType } from "@/data/types";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionOurFeatures from "@/components/SectionOurFeatures";
import BackgroundSection from "@/components/BackgroundSection";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";
import SectionHowItWork from "@/components/SectionHowItWork";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import SectionGridAuthorBox from "@/components/SectionGridAuthorBox";
import SectionGridCategoryBox from "@/components/SectionGridCategoryBox";
import SectionBecomeAnAuthor from "@/components/SectionBecomeAnAuthor";
import SectionVideos from "@/components/SectionVideos";
import SectionClientSay from "@/components/SectionClientSay";

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-map",
    name: "General Service",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://res.cloudinary.com/dsbtb8n4p/image/upload/t_1250_750/v1726398618/Car_Service_Abstract_Illustration_xumypw.avif",
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "Express Service",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://res.cloudinary.com/dsbtb8n4p/image/upload/t_1250_750/v1726398706/express_k1bb4r.avif",
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "Emergency Assistance",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://res.cloudinary.com/dsbtb8n4p/image/upload/t_1250_750/v1726400539/emergency_cjgu45.avif",
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "Roadside Assistance",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://res.cloudinary.com/dsbtb8n4p/image/upload/t_1250_750/v1726400728/rsa_n1lwvf.avif",
  },
  {
    id: "5",
    href: "/listing-stay-map",
    name: "Cleaning & Spa",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://res.cloudinary.com/dsbtb8n4p/image/upload/t_1250_750/v1726400850/spa_msepsr.jpg",
  },
];

const DEMO_CATS_2: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-map",
    name: "Expert Technician  ",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://res.cloudinary.com/dsbtb8n4p/image/upload/t_1250_750/v1726409786/expert_technician_os5grj.avif",
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "Genuine Parts",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://res.cloudinary.com/dsbtb8n4p/image/upload/t_1250_750/v1726409788/genuine_parts_clksd8.avif",
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "Boost Resale Value",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://res.cloudinary.com/dsbtb8n4p/image/upload/t_1250_750/v1726409933/boost_resalve_value_y7gu3a.avif",
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "Maintains Warranty",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://res.cloudinary.com/dsbtb8n4p/image/upload/t_1250_750/v1726409791/warranty_tyokwr.avif",
  },
  {
    id: "5",
    href: "/listing-stay-map",
    name: "Top Service Quality",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://res.cloudinary.com/dsbtb8n4p/image/upload/t_1250_750/v1726409789/top_service_pi6coy.avif",
  }
];

function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        <SectionHero className="pt-10 lg:pt-16 lg:pb-16" />

        {/* SECTION 1 */}
        <SectionSliderNewCategories categories={DEMO_CATS} />

        <SectionOurFeatures />

        <SectionGridFeaturePlaces cardType="card2" />

        <SectionHowItWork />

        <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black/20" />
          <SectionSliderNewCategories
            categories={DEMO_CATS_2}
            categoryCardType="card4"
            itemPerRow={4}
            heading="Service Assistance"
            subHeading="Why should we choose only authorized service centers?"
            sliderStyle="style2"
          />
        </div>

        <SectionSubscribe2 />

        <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox />
        </div>

        <SectionGridCategoryBox />

        <div className="relative py-16">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div>

        <SectionSliderNewCategories
          heading="Explore by vehicle category"
          subHeading="Explore deals for car & bike service"
          categoryCardType="card5"
          itemPerRow={5}
        />

        <SectionVideos />

        <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div>
      </div>
    </main>
  );
}

export default PageHome;
