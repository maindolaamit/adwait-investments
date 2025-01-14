import MissionSection from "@/app/components/home/mission";
import VisionSection from "@/app/components/home/vision";
import TeamSection from "@/app/components/home/team-section";
import ServicesSection from "@/app/components/home/services-section";

const HomePage = () => {
  return (
      <>
        <MissionSection/>
        <hr className="border-gray-300"/>
        <VisionSection/>
        <ServicesSection/>
        <TeamSection/>
      </>);
}
export default function Home() {
  return (
      <HomePage/>
  );
}
