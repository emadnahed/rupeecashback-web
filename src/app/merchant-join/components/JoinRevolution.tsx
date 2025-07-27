import React from 'react';
import styles from './JoinRevolution.module.css';
import Image from 'next/image';

const JoinRevolution = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.qrSection}>
            <div className={styles.qrCode}>
              <Image
                src="/qrCodeStand.svg"
                alt="QR Code"
                width={120}
                height={120}
              />
            </div>
            <div className={styles.qrText}>
              <p className={styles.joinText}>Join the</p>
              <p className={styles.revolutionText}>Revolution.</p>
            </div>
          </div>
          
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <Image
                src="/RupeeCashbackLogo.svg"
                alt="Rupee Cashback"
                width={200}
                height={60}
              />
            </div>
            <div className={styles.divider}>|</div>
            <div className={styles.merchantText}>
              <span className={styles.merchants}>Merchants.</span>
            </div>
          </div>
          
          <p className={styles.tagline}>
            From lost customers to <span className={styles.taglineItalic}>lasting loyalty.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinRevolution;