import React from 'react';
import styles from './page.module.css';
import ProblemCard from './components/ProblemCard';
import MerchantHeader from './components/MerchantHeader';
import SolutionSection from './components/SolutionSection';
import ReservedCashback from './components/ReservedCashback';
import WhyRetailersLoveUs from './components/WhyRetailersLoveUs';
import JoinRevolution from './components/JoinRevolution';
import MerchantFooter from './components/MerchantFooter';
import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join RupeeCashback - Partner with Us | Merchant Registration",
  description: "Transform lost customers into lasting loyalty with RupeeCashback's premium cashback ecosystem. Empower your business growth while rewarding your customers seamlessly.",
  keywords: "merchant registration, business partnership, cashback ecosystem, customer loyalty, business growth",
  openGraph: {
    title: "Join RupeeCashback - Partner with Us | Merchant Registration",
    description: "Transform lost customers into lasting loyalty with RupeeCashback's premium cashback ecosystem. Empower your business growth while rewarding your customers seamlessly.",
    type: "website",
  },
};

export default function MerchantJoin() {
  return (
    <div className={styles.completeMerchantpage}>
      <MerchantHeader />
      <section className={styles.heroSection} style={{ marginBottom: 0, paddingBottom: 30, borderBottom: 'none' }}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitleMain}>
            From lost customers<br />
            <span className={styles.heroTitleItalic}>to lasting loyalty.</span>
          </h1>
          <p className={styles.heroSubtitleMain}>
            A premium <span className={styles.heroSubtitleItalic}>cashback ecosystem</span> that empowers businesses to drive <span className={styles.heroSubtitleItalic}>growth & rewards</span> customers<br />
            for every spend—<span className={styles.heroSubtitleItalic}>seamlessly, securely, sustainably.</span>
          </p>
        </div>
      </section>
              
      <Image
          src="/Merchants/handShake.svg"
          alt="Business handshake"
          className={styles.heroImage}
          width={0}
          height={0}
          // priority
        />


      {/* Problem Section */}
      <section className={styles.problemSection} style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0, borderTop: 'none', borderBottom: 'none' }}>
        <div className={styles.problemHeader}>
          <h2 className={styles.problemTitle}>
            <span className={styles.problemTitleItalic}>The</span> <span className={styles.problemTitleBold}>problem.</span>
          </h2>
          <p className={styles.problemDesc}>
  Competing with big chains gets tougher <span className={styles.problemDescItalic}>every day.</span> They’ve got corporate budgets for flashy promotions while you’re trying to keep regulars coming back with <span className={styles.problemDescItalic}>whatever you can manage.</span> The reality? They’re winning customers with <span className={styles.problemDescItalic}>better incentives</span>, and <span className={styles.problemDescItalic}>you’re losing ground.</span>
</p>
        </div>
      </section>

      {/* Problem Cards Section */}
      <div style={{ background: '#000', width: '100%', padding: '48px 0 120px 0', marginTop: 0 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', marginTop: 0 }}>
          <ProblemCard
            titleLabel={<span>Problem 1</span>}
            titleMain="Customer"
            titleEmphasis={<span>Retention.</span>}
            desc={<span>Many retailers struggle to keep<br />customers coming back.</span>}
            imageSrc="/Merchants/customerRetention.svg"
            imageAlt="Customer Retention Illustration"
            imagePosition="right"
          />
          <ProblemCard
            titleLabel={<span>Problem 2</span>}
            titleMain="No Unified"
            titleEmphasis={<span>System.</span>}
            desc={<span>Most small and mid-sized <em>retailers</em> don’t have access to simple tools that help them <em>reward loyalty</em> and track visit behavior.</span>}
            imageSrc="/Merchants/messed-up-system 1.svg"
            imageAlt="Messed Up System Illustration"
            imagePosition="left"
          />
          <ProblemCard
            titleLabel={<span>Problem 3</span>}
            titleMain="Consumer"
            titleEmphasis={<span>Preferences.</span>}
            desc={<span><em>Customers</em> are more likely to choose stores that offer better <em>rewards and incentives.</em></span>}
            imageSrc="/Merchants/cross-and-check-marks-on-a-board-at-a-shop- 1.svg"
            imageAlt="Consumer Preferences Illustration"
            imagePosition="right"
          />
        </div>
      </div>

      {/* Solution Section */}
      <SolutionSection />

      {/* Reserved Cashback Section */}
      <ReservedCashback />

      {/* Why Retailers Love Us Section */}
      <WhyRetailersLoveUs />

      {/* Join Revolution Section */}
      <JoinRevolution />

      {/* Footer */}
      <MerchantFooter />
    </div>
  );
}