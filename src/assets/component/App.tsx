import "../../App.css";
// import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Time from "./Time";
import BasicTabs from "./Tab";
// import Date from "./Date";
import Extra from "./Extra";
import Weather from "./Weather";
import Nav2 from "./Nav2";
import Stack from "./Stack";

function App() {
  return (
    <div>
      <Nav2 />
      <Weather />
      <Time />
      <AboutMe />
      <BasicTabs />
      <Extra />
      <Extra />
      <Stack />
    </div>
  );
}

export default App;
