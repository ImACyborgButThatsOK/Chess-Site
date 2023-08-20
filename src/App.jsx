import Bonus from "./Components/Bonus/Bonus";
import Content from "./Components/Content/Content";
import Feedback from "./Components/Feedback/Feedback";
import Intro from "./Components/Intro/Intro";
import More from "./Components/More/More";
import MoreQuestions from "./Components/MoreQuestions/MoreQuestions";
import Navbar from "./Components/Navbar/Navbar";
import Offer from "./Components/Offer/Offer";
import Presentation from "./Components/Presentation/Presentation";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Presentation />
      <Content />
      <Bonus />
      <More />
      <Feedback />
      <Offer />
      <MoreQuestions />
    </div>
  );
}

export default App;
