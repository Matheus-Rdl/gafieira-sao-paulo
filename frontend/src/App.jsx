import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import WaveBgFotter from "./components/wave-footer/wave-footer";
import WaveBg1 from "./components/wave-header-1/wave-header-1";
import WaveBg2 from "./components/wave-header-2/wave-header-2";
import Home from "./pages/home/home";


function App() {
  return (
    <>
      <Header />
      <WaveBg1 />
      {/*
      */}
      {/*
      <WaveBg2 />
      */}
      <Home/>
      <WaveBgFotter/>
      <Footer/>
    </>
  );
}

export default App;
