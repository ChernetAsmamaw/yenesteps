import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import DownloadCTA from "./components/DownloadCTA";
import Footer from "./components/Footer";
import ComingSoon from "./components/ComingSoon";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <main>
                  <Hero />
                  <Services />
                  <Features />
                  <DownloadCTA />
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
