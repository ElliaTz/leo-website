import AppChangeSection from "./components/AppChangeSection";
import HeroSection from "./components/HeroSection";
import HowAppWorksSection from "./components/HowAppWorksSection";
import Navbar from "./components/NavBar";
import ValueByRoleSection from "./components/ValueByRoleSection";
import WhatIsItSection from "./components/WhatIsItSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhatIsItSection />
      <AppChangeSection />
      <HowAppWorksSection />
      <ValueByRoleSection />
    </div>
  );
}

export default App;
