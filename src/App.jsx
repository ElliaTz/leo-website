import AppChangeSection from "./components/AppChangeSection";
import HeroSection from "./components/HeroSection";
import HowAppWorksSection from "./components/HowAppWorksSection";
import MeasurableValueSection from "./components/MeasurableValueSection";
import Navbar from "./components/NavBar";
import PilotKPISection from "./components/PilotKPISection";
import ValueByRoleSection from "./components/ValueByRoleSection";
import WhatIsItSection from "./components/WhatIsItSection";
import WhyNowSection from "./components/WhyNowSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhatIsItSection />
      <AppChangeSection />
      <HowAppWorksSection />
      <ValueByRoleSection />
      <MeasurableValueSection />
      <PilotKPISection />
      <WhyNowSection />
    </div>
  );
}

export default App;
