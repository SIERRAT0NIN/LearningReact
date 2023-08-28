import "../../App.css";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Time from "./Time";
import BasicTabs from "./Tab";
// import Date from "./Date";
import Extra from "./Extra";
// import Weather from "./Weather";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Date /> */}

      <Time />
      <AboutMe />
      <BasicTabs />
      <Extra />
      <Extra />
    </div>
  );
}

export default App;
