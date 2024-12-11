import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AboutSection from './components/about/AboutSection';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import HomeSection from './components/home/HomeSection';
import LawsAndReportPart from './components/laws/LawsAndReportPart';
import Footer from './components/footer/Footer';
import Blog from './components/blog/Blog';
import Register from './components/Register/Register';
import RegistorForm from './components/Register/RegistorForm';
import Whatwedo from './components/about/Whatwedo';
import LearnAbout from './components/about/LearnAbout';
import Synopsis from './components/laws/synopsis';
import TermsAndCondition from './components/footer/TermsAndCondition';
import PrivacyPolicy from './components/footer/PrivacyPolicy';
import Dashboard from './components/dashboard/DashBoard';
import BodyDonation from './components/about/BodyDonation';

function App() {
  const [showModal, setShowModal] = useState(false);

  // Show the modal on page load
  useEffect(() => {
    setShowModal(true);
    
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Router>
      <>
        <Header />

      
        <Routes>
          <Route path="/" element={<HomeSection />} />

          <Route path="/about" element={<AboutSection />} />
          <Route path="/learn" element={<LearnAbout />} />
          <Route path="/wwd" element={<Whatwedo />} />
          <Route path="/bds" element={<BodyDonation />} />
          
          <Route path="/laws" element={<LawsAndReportPart />} />
          <Route path="/syno" element={<Synopsis />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/register" element={<Register />} />
          <Route path="/registerform" element={<RegistorForm />} />

          <Route path="/termsandcondition" element={<TermsAndCondition />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />


          <Route path="/db" element={<Dashboard />} />




        </Routes>

        <Footer />
      </>
    </Router>
  );
}

export default App;
