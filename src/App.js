import logo from "./logo.svg";
import "./App.css";
import "./style/allmediaquery.css";
import Topnavbar from "./components/topnavbar/topnavbar";
import Main from "./components/mainhero/main";
import HeroSection from "./components/mainhero/heroSection";
import Service from "./components/services/service";
import WorkSectionParent from "./components/worksection/workSectionParent";

function App() {
  return (
    <>
      <div className="app-wrapper">
        <Topnavbar />
        <Main />
        <HeroSection />
      </div>
      <div className="secondSectionWrapper">
        <Service/>
        
      </div>
      <WorkSectionParent/>
    </>
  );
}

export default App;
