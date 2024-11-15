import "./App.css";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WhyChooseUs from "./pages/WhyChooseUs";
import OurServices from "./pages/OurServices";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourservice" element={<OurServices />} />
          <Route path="/whychooseus" element={<WhyChooseUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
