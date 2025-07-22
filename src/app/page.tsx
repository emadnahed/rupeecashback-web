'use client'
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Header from './components/Header';
import HeroSection from "./components/HeroSection";
import SectionCard from "./components/SectionCard";
import MoneyBackFeelingContainer from "./components/MoneyBackFeelingContainer";
import ItGetsEvenBetter from "./components/ItGetsEvenBetter";
import PointlessSection from "./components/PointlessSection";
import KeepTogetherSection from "./components/KeepTogetherSection";
import FeeFreeZoneSection from "./components/FeeFreeZoneSection";
import CashCarefreeSection from "./components/CashCarefreeSection";
import WhatItsLikeToLiveTheRupsterlife from "./components/WhatItsLikeToLiveTheRupsterlife";
import SpottedQRSection from "./components/SpottedQRSection";
import Footer from "./components/Footer";
import MoneyBackContentSection from "./components/MoneyBackContentSection";

export default function Home() {
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

  // Define content variations for the first card
  const firstCardDesktopContent = {
    titleLine1: {
      regularText: "every",
      italicText: "Earn "
    },
    titleLine2: {
      regularText: "time you ",
      italicText: "shop!"
    },
    paragraphLines: [
      "Your RupeeCashback is always real money,",
      "ready to spend the moment you earn it.",
      "Forget endless waiting; it's all about instant",
      "access. Shop, earn, and do it all again."
    ],
  };

  const firstCardMobileContent = {
    titleLine1: {
      regularText: "every time",
      italicText: "Earn "
    },
    titleLine2: {
      regularText: "you ",
      italicText: "shop!"
    },
    paragraphLines: [
      "Get instant cashback with every",
      "purchase. Shop, earn, repeat—no delays."
    ],
  };

  // Define content variations for the second card (placeholder for now)
  const secondCardDesktopContent = {
    titleLine1: {
      regularText: "The real",
      italicText: ""
    },
    titleLine2: {
      regularText: "",
      italicText: "money."
    },
    paragraphLines: [
      "You won't find points here — just real cash.",
      "Withdraw it or spend it however you like",
      "with RupeeCashback."
    ],
  };

  const secondCardMobileContent = { // Placeholder
    titleLine1: {
      regularText: "Real",
      italicText: "The "
    },
    titleLine2: {
      regularText: "",
      italicText: "money."
    },
    paragraphLines: [
      "Get instant cash.",
      "Withdraw or spend it as you like."
    ],
  };

  // Define content variations for the third card (placeholder for now)
  const thirdCardDesktopContent = {
    titleLine1: {
      regularText: " how",
      italicText: "Pay"
    },
    titleLine2: {
      regularText: "you ",
      italicText: "want."
    },
    paragraphLines: [
      "Pay your way, earn your way. It's",
      "your money — we won't touch it. No",
      "cash-out fees, ever."
    ],
  };

  const thirdCardMobileContent = { // Placeholder
    titleLine1: {
      regularText: "how",
      italicText: "Pay "
    },
    titleLine2: {
      regularText: "you ",
      italicText: "want."
    },
    paragraphLines: [
      "Pay your way, earn your way.",
      "No cash-out fees, ever."
    ],
  };

  const currentFirstCardContent = isMobile ? firstCardMobileContent : firstCardDesktopContent;
  const currentSecondCardContent = isMobile ? secondCardMobileContent : secondCardDesktopContent;
  const currentThirdCardContent = isMobile ? thirdCardMobileContent : thirdCardDesktopContent;

  return (
    <div className={styles.page}>
      <Header />
      <HeroSection />
      
      <SectionCard
        background="radial-gradient(100.39% 102.54% at 100% 0%, #3ECD52 0%, #14481B 100%)"
        titleLine1={currentFirstCardContent.titleLine1}
        titleLine2={currentFirstCardContent.titleLine2}
        paragraphLines={currentFirstCardContent.paragraphLines}
        imageSrc="/GreenContainer.svg"
        imageAlt="Phone showing cashback"
      />

      <SectionCard
        background="radial-gradient(100.39% 102.54% at 100% 0%, #09B2CC 0%, #0738AC 100%)"
        titleLine1={currentSecondCardContent.titleLine1}
        titleLine2={currentSecondCardContent.titleLine2}
        paragraphLines={currentSecondCardContent.paragraphLines}
        imageSrc="/BlueContainer.svg"
        imageAlt="Phone showing cashback"
      />

      <SectionCard
        background="radial-gradient(112.5% 111.22% at 104.39% 0%, #A788FD 0%, #250878 100%)"
        titleLine1={currentThirdCardContent.titleLine1}
        titleLine2={currentThirdCardContent.titleLine2}
        paragraphLines={currentThirdCardContent.paragraphLines}
        imageSrc="/PurpleContainer.svg"
        imageAlt="Phone showing cashback"
      />

      <MoneyBackFeelingContainer/>
      <MoneyBackContentSection/>
      <ItGetsEvenBetter/>
      <PointlessSection />
      <KeepTogetherSection />
      <FeeFreeZoneSection />
      <CashCarefreeSection />
      <WhatItsLikeToLiveTheRupsterlife isMobile={isMobile} />
      <SpottedQRSection />
      <Footer />
    </div>
  );
}
