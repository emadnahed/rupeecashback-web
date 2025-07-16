import React from 'react';
import styles from './page.module.css';
import MerchantHeader from './components/MerchantHeader';
import Image from 'next/image';

export default function MerchantJoin() {
  return (
    <div className={styles.page}>
      <MerchantHeader />
      
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            From lost customers<br />
            to <span className={styles.emphasizedText}>lasting loyalty.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            A premium <span className={styles.emphasizedText}>cashback ecosystem</span> that empowers businesses to drive <span className={styles.emphasizedText}>growth & rewards</span> customers<br />
            for every spend—<span className={styles.emphasizedText}>seamlessly, securely, sustainably.</span>
          </p>
        </div>
        
        <Image
          src="/Merchants/hand-shake-- 1.svg"
          alt="Business handshake"
          className={styles.heroImage}
          width={1200}
          height={800}
          priority
        />
        
        <div className={styles.problemSection}>
          <h2 className={styles.problemTitle}>The problem.</h2>
        </div>
      </section>
    </div>
  );
} 