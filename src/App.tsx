import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import DataDisplay from "./components/DataDisplay";
import { store } from "./store";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <Services />
                  <Testimonials />
                  <Blogs />
                </>
              }
            />
            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/services" element={<div>Services Page</div>} />
            <Route path="/projects" element={<div>Projects Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
            <Route path="/data" element={<DataDisplay />} /> {/*  extra route  */}
          </Routes>
          <Footer />
        </div>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
