import Navbar from "./components/Header";
import HeroSection from "./components/Hero";
import FeatureSection from "./components/Features";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Reviews";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/Login' || location.pathname === '/signup';

  return (
    <>
      {!isAuthPage && <Navbar />}
      
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <div id="features">
                <FeatureSection />
              </div>
              <div id="workflow">
                <Workflow />
              </div>
              <div id="pricing">
                <Pricing />
              </div>
              <div id="reviews">
                <Testimonials />
              </div>
            </>
          } />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-black scroll-smooth text-white overflow-x-hidden">
      <Router>
        <Layout />
      </Router>
    </div>
  );
};

export default App;