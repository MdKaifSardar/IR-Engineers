import "./App.css";
import { OurService } from "./data/Images/images";
import Home from "./pages/Home";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WhyChooseUs from "./pages/WhyChooseUs";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourservice" element={<OurService />} />
          <Route path="/whychooseus" element={<WhyChooseUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
