import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import WaveBgFotter from "./components/wave-footer/wave-footer";
import WaveBg from "./components/wave-header/wave-header";
import Home from "./pages/home/home";


function App() {
  return (
    <>
      <Header />
      <WaveBg />
      <Home/>
      <WaveBgFotter/>
      <Footer/>
    </>
  );
}

export default App;
