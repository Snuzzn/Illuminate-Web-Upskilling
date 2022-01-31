import "./App.css";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="mainContainer">
        <Navbar />
        <Hero />
      </div>
      <div className="footer">Written by Sano</div>
    </>
  );
}

export default App;
