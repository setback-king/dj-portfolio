import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllProjects from "./components/AllProjects";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />

        <Routes>
          <Route path="/dj-portfolio" element={<AllProjects />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
