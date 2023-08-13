import Bonus from "./Components/Bonus/Bonus";
import Content from "./Components/Content/Content";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Presentation from "./Components/Presentation/Presentation";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Presentation />
      <Content />
      <Bonus />
    </div>
  );
}

export default App;
