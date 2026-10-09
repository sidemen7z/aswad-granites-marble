import Hero from "@/components/home/Hero";
import ArtOfStone from "@/components/home/ArtOfStone";
import Materials from "@/components/home/Materials";
import NavyFeature from "@/components/home/NavyFeature";
import Finder from "@/components/home/Finder";
import MasonryGallery from "@/components/home/MasonryGallery";
import EditorialAbout from "@/components/home/EditorialAbout";
import Estimator from "@/components/home/Estimator";
import EditorialCta from "@/components/home/EditorialCta";
import { Testimonials, Faq } from "@/components/home/Story";
import { Marquee } from "@/components/Reveal";

export default function Home() {
  return (
    <div>
      <Hero />
      <ArtOfStone />
      <Materials />
      <NavyFeature />
      <div className="pt-48 lg:pt-56">
        <Finder />
      </div>
      <MasonryGallery />
      <EditorialAbout />
      <Estimator />
      <Testimonials />
      <Faq />
      <Marquee
        items={[
          "Premium Natural Stone",
          "Kondhwa Budruk, Pune",
          "40+ Granite Colours",
          "Custom Countertops",
          "4.2 star Google Rating",
          "Call +91 96865 72109",
        ]}
      />
      <EditorialCta />
    </div>
  );
}
