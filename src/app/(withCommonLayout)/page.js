import ProjectShowcaseCard from "@/components/FrontendComponent/action/ProjectShowcases/ProjectShowcaseCard";
import Clients from "@/components/FrontendComponent/Clients/Clients";
import BannerSection from "@/components/FrontendComponent/HomePage/BannerSection/BannerSection";
import ProjectShowcaseDetails from "@/components/FrontendComponent/ProjectShowcaseDetails/ProjectShowcaseDetails";

export default function Home() {
  return (
    <div>
      <BannerSection></BannerSection>

      <Clients />

      <ProjectShowcaseDetails />
    </div>
  );
}
