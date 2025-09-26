import HeroSection from "./HeaderSection";
import AboutSection from "./AboutSection";
import { TargetSectorsSection } from "./TargetSection";
import MissionVisionValues from "./Values";
import ContactForm from "./ContactAs";
import OurClients from "./OurClients";
import HumanAs from "./HumanAs";
import AchievementsSection from "./Achievements";
import Information from "./Information";
import FloatingWhatsApp from "./WhatsappLogo";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <div id="who-us">
        <AboutSection />
      </div>
      <FloatingWhatsApp />

      <div id="target-sections">
        <TargetSectorsSection />
      </div>
      <div id="our-values">
        <MissionVisionValues />
      </div>
      <div id="our-services">
        <Information />
      </div>
      <AchievementsSection />
      <OurClients />
      <HumanAs />
      <div id="contact-us">
        <ContactForm />
      </div>
    </div>
  );
};

export default HomePage;
