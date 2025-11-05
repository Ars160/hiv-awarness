import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import StatsBlock from "./components/StatsBlock";
import Contact from "./components/Contact";
import ProfileCard from "./components/ProfileCard"; // Предполагается, что компонент ProfileCard находится в отдельном файле
import VideoSection from "./components/VideoSection";
import TestingSection from "./components/TestingSection";
import NewsSection from "./components/NewsSection";
import SupportSection from "./components/SupportSection";
import Features from "./components/Features";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Hero />

        <section>
          <Courses />
        </section>
        
        <section id="stats">
          <StatsBlock />
        </section>

        <section id="video-section">
          <VideoSection />
        </section>

        <section id="testing-section">
          <TestingSection />
        </section>

        <section id="news-section">
          <NewsSection />
        </section>

        <section id="support-section">
          <SupportSection />
        </section>

        <section id="team-section">
        <ProfileCard />
        </section> 

         <section id="вопросы">
          <Features/>
        </section>

        <section id="contact"> 
            <Contact />
        </section> 
        
        <section id="данные">
          <Footer />
        </section>

        <SpeedInsights />
      </main>
    </Router>
  );
}

export default App;
