import "./reset.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Meals from "./pages/Meals/Meals";
import TheHomePage from "./pages/TheHomePage/TheHomePage";
import Involved from "./pages/Involved/Involved";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<TheHomePage />} />
          <Route path="/skills" element={<Home />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/involved" element={<Involved />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
