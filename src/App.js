import About from "./components/about";
import { Contact } from "./components/contact";
import { Feature } from "./components/features";
import { Footer } from "./components/footer";
import Header from "./components/header";
import { Services } from "./components/services";
import { Sponsor } from "./components/sponsers";
import { Statistic } from "./components/statistics";
import { Step } from "./components/steps";
import { Team } from "./components/team";
import Work from "./components/work";
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className="App bg-black" >
      <AnimatedCursor
        innerSize={16}
        outerSize={26}
        color='255,68,204'
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={2}
      />
      <Header />
      <About />

      <Work />
      {/* <Step /> */}
      <div style={{
        backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover',
        backgroundImage: ' url("https://www.fonewalls.com/wp-content/uploads/2020/09/Neon-Border-AMOLED-Black-Wallpaper-08.jpg%22) '
      }}>
        <Services />
        <Feature />
        <Sponsor />
        <Statistic />
        <Team />

        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
