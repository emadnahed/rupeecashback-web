'use client'
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Header from '../components/Header';
import Footer from "../components/Footer";
import LoyaltyHeroSection from "./components/LoyaltyHeroSection";
import LoyaltyExperiencesSection from "./components/LoyaltyExperiencesSection";
import LoyaltyPayAppSection from './components/LoyaltyPayAppSection';
import LoyaltyMoneyBackSection from './components/LoyaltyMoneyBackSection';
import LoyaltySecureCoreSection from './components/LoyaltySecureCoreSection';
import LoyaltyNormalSection from './components/LoyaltyNormalSection';

export default function Loyalty() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450); // Changed mobile breakpoint to 450px
    };

    // Set initial state
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.page}>
      <Header />
      <LoyaltyHeroSection isMobile={isMobile} />
      <LoyaltyExperiencesSection isMobile={isMobile} />
      <LoyaltyPayAppSection isMobile={isMobile} />
      <LoyaltyMoneyBackSection isMobile={isMobile} />
      <LoyaltySecureCoreSection isMobile={isMobile} />
      {/* <LoyaltyNormalSection isMobile={isMobile} /> */}
      <Footer />
    </div>
  );
}