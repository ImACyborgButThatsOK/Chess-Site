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
    </div>
  );
}

export default App;
