//import logo from './logo.svg';
// import './App.css';
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import {dark} from './styles/Themes';

import Navigation from "./components/Navigation";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Roadmap from "./components/sections/Roadmap";
import Showcase from "./components/sections/Showcase";
import Team from "./components/sections/Team";
import Faq from "./components/sections/Faq";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
    <GlobalStyles />
    <ThemeProvider theme={dark}>
    <Navigation />
    <Home />
    <About />
    <Showcase />
    <Team />
    <Faq />
        <Footer />
      <ScrollToTop/>
      </ThemeProvider>
    </div>
  );
}

export default App;
