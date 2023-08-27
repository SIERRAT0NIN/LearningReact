// import "./App.css";
import "../../App.css";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Time from "./Time";
import BasicTabs from "./Tab";

function App() {
  return (
    <div>
      <Navbar />
      <Time />
      <AboutMe />
      <BasicTabs />
    </div>
  );
}

export default App;
