
import ProjectShowcases from "@/components/FrontendComponent/action/ProjectShowcases/ProjectShowcase";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";

export default function page() {
  return (
    <div className="mt-16 container mx-auto">
      <div>
        <SectionTitle
          title="EXPLORE FEATURES"
          subTitle="Presenting Our successful Project "
        ></SectionTitle>
      </div>
      <div className="min-h-[100vh]">
        <ProjectShowcases />
      </div>
    </div>
  );
}
