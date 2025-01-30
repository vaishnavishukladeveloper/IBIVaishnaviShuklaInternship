import './App.css';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import Location from "./components/Location/Location";
import Leaves from "./components/Leaves/Leaves";
import Footer from "./components/Footer";
import { LanguageProvider } from "./components/LanguageContext";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <LanguageProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaves" element={<Leaves />} />
            <Route path="/location" element={<Location />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
          <Footer />
        </LanguageProvider>
      </div>
    </Router>
  );
}

export default App;
/*
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/location" element={<Location />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      <Footer />
*/
