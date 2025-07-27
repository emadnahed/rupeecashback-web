import React from 'react';
import styles from './SolutionSection.module.css';
import Image from 'next/image';

const SolutionSection = () => {
  return (
    <section className={styles.solutionSection}>
      <div className={styles.container}>
        {/* Main Solution Header */}
        <div className={styles.header}>
          <p className={styles.introducing}>Introducing</p>
          <h2 className={styles.title}>
            <span className={styles.the}>The</span> <span className={styles.solution}>solution.</span>
          </h2>
          <h3 className={styles.subtitle}>Cashback QR Code System.</h3>
          <p className={styles.description}>
            Cashback QR Code System is an innovative solution designed to provide instant<br />
            customer rewards, thereby enhancing <span className={styles.italic}>customer loyalty.</span>
          </p>
        </div>

        {/* Instant Rewards Section */}
        <div className={styles.featureSection}>
          <div className={styles.featureContent}>
            <h3 className={styles.featureTitle}>
              Instant <span className={styles.featureTitleItalic}>Rewards.</span>
            </h3>
            <p className={styles.featureDescription}>
              Customers receive immediate <span className={styles.bold}>cashback</span>, making<br />
              the shopping experience more <span className={styles.italic}>rewarding.</span>
            </p>
          </div>
          <div className={styles.featureImage}>
            <Image 
              src="/Merchants/mobileThunderIcon.svg" 
              alt="Mobile phone with cashback rewards" 
              width={400}
              height={400}
            />
          </div>
        </div>

        {/* Boosting Loyalty Section */}
        <div className={`${styles.featureSection} ${styles.reverse}`}>
          <div className={styles.featureImage}>
            <Image 
              src="/Merchants/miniatureToyRocket.svg" 
              alt="Rocket representing business growth" 
              width={400}
              height={400}
            />
          </div>
          <div className={styles.featureContent}>
            <h3 className={styles.featureTitle}>
              Boosting <span className={styles.featureTitleItalic}>Loyalty.</span>
            </h3>
            <p className={styles.featureDescription}>
              This system encourages customers <span className={styles.italic}>to return</span>,<br />
              fostering long-term <span className={styles.italic}>relationships.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
