import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works } from "./components";
import CyberWave from "./components/CyberWave";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <CyberWave />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative w-full overflow-hidden">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
