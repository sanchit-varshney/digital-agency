import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <HeroSection />
                        <Services />
                        <Testimonials />
                        <Blogs />
                    </>
                } />
                <Route path="/about" element={<div>About Page</div>} />
                <Route path="/services" element={<div>Services Page</div>} />
                <Route path="/projects" element={<div>Projects Page</div>} />
                <Route path="/contact" element={<div>Contact Page</div>} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
