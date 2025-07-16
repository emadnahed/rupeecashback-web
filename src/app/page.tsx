import Image from "next/image";
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

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <HeroSection />
            
      <SectionCard
        background="radial-gradient(100.39% 102.54% at 100% 0%, #3ECD52 0%, #14481B 100%)"
        title="Earn every time you shop!"
        subtitle="Your RupeeCashback is always real money, ready to spend the moment you earn it. Forget endless waiting; it's all about instant access. Shop, earn, and do it all again."
        imageSrc="/GreenContainer.svg"
        imageAlt="Phone showing cashback"
      />

      <SectionCard
        background="radial-gradient(100.39% 102.54% at 100% 0%, #09B2CC 0%, #0738AC 100%)"
        title="The real money."
        subtitle="You won't find points here — just real cash. Withdraw it or spend it however you like with RupeeCashback."
        imageSrc="/BlueContainer.svg"
        imageAlt="Phone showing cashback"
        
      />

      <SectionCard
        background="radial-gradient(112.5% 111.22% at 104.39% 0%, #A788FD 0%, #250878 100%)"
        title="Pay how you want."
        subtitle="Pay your way, earn your way. It's your money — we don't touch it. No cash-out fees, ever."
        imageSrc="/PurpleContainer.svg"
        imageAlt="Phone showing cashback"
      />

      <MoneyBackFeelingContainer/>

      <ItGetsEvenBetter/>

      {/* New TextImageSection components */}
      <PointlessSection />
      <KeepTogetherSection />
      <FeeFreeZoneSection />
      <CashCarefreeSection />

      {/* What's it like to live the Rupester life section */}
      <WhatItsLikeToLiveTheRupsterlife />

      {/* Spotted QR section */}
      <SpottedQRSection />

      {/* Footer */}
      <Footer />

    </div>
  );
}
