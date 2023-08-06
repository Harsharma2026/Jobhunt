import Nav from "./Components/navbar";
import Intro from "./Components/mainp";
import Options from "./Components/fields";
import Enroll from "./Components/enroll";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <Options />
      <Enroll />
    </div>
  );
}

export default App;
