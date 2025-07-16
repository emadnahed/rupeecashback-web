import React from 'react';
import styles from './WhatItsLikeToLiveTheRupsterlife.module.css';
import TextSpanning from './TextSpanning';

const WhatItsLikeToLiveTheRupsterlife: React.FC = () => (
  <section className={styles.section} aria-label="What's it like to live the Rupester life section">
    <div className={styles.container}>
      {/* Main Title */}
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>
          <TextSpanning
            spans={[
              { 
                text: "What's it like to live", 
                fontFamily: 'gilroy', 
                fontWeight: 400
              }
            ]}
          />
          <br />
          <TextSpanning
            spans={[
              { 
                text: "the ", 
                fontFamily: 'gilroy', 
                fontWeight: 400
              },
              { 
                text: "Rupester", 
                fontFamily: 'gilroy', 
                fontWeight: 400,
                fontStyle: 'italic'
              },
              { 
                text: " life?", 
                fontFamily: 'gilroy', 
                fontWeight: 400
              }
            ]}
          />
        </h2>
      </div>

      {/* Cards Grid */}
      <div className={styles.cardsGrid}>
        {/* Card 1: The real cashback feeling */}
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.iconWrapper}>
              <img 
                src="/RupeeSided.svg" 
                alt="Rupee coin icon" 
                className={styles.iconImage}
              />
            </div>
            <h3 className={styles.cardTitle}>
              <TextSpanning
                spans={[
                  { text: "The real ", fontFamily: 'gilroy', fontWeight: 400 },
                  { text: "cashback", fontFamily: 'gilroy', fontWeight: 400, fontStyle: 'italic' }
                ]}
              />
              <br />
              <TextSpanning
                spans={[
                  { text: "feeling", fontFamily: 'gilroy', fontWeight: 400, fontStyle: 'italic' },
                  { text: ".", fontFamily: 'gilroy', fontWeight: 400 }
                ]}
              />
            </h3>
            <button className={styles.cardButton}>What's That</button>
          </div>
        </div>

        {/* Card 2: The easy money */}
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.iconWrapper}>
              <img 
                src="/qrCodeStand.svg" 
                alt="QR code scanner icon" 
                className={styles.iconImage}
              />
            </div>
            <h3 className={styles.cardTitle}>
              <TextSpanning
                spans={[
                  { text: "The easy money.", fontFamily: 'gilroy', fontWeight: 400 }
                ]}
              />
              <br />
              <TextSpanning
                spans={[
                  { text: "scan, receive, go", fontFamily: 'gilroy', fontWeight: 400, fontStyle: 'italic' },
                  { text: ".", fontFamily: 'gilroy', fontWeight: 400 }
                ]}
              />
            </h3>
            <button className={styles.cardButton}>What's That</button>
          </div>
        </div>

        {/* Card 3: Reserved Cashback */}
        <div className={`${styles.card} ${styles.wideCard}`}>
          <div className={styles.cardContent}>
            <div className={styles.reservedSection}>
              <p className={styles.introducing}>Introducing</p>
              <h3 className={styles.reservedTitle}>
                <TextSpanning
                  spans={[
                    { text: "Reserved ", fontFamily: 'gilroy', fontWeight: 400 },
                    { text: "Cashback", fontFamily: 'gilroy', fontWeight: 400, fontStyle: 'italic' },
                    { text: ".", fontFamily: 'gilroy', fontWeight: 400 }
                  ]}
                />
              </h3>
              <p className={styles.reservedDescription}>
                <TextSpanning
                  spans={[
                    { text: "Reserved Cashback", fontFamily: 'gilroy', fontWeight: 400, fontStyle: 'italic' },
                    { text: " lets you go beyond one-time rewards. Customers get base cashback today, and a higher offer if they return within your set ", fontFamily: 'gilroy', fontWeight: 400 },
                    { text: "window", fontFamily: 'gilroy', fontWeight: 400, fontStyle: 'italic' },
                    { text: ".", fontFamily: 'gilroy', fontWeight: 400 }
                  ]}
                />
              </p>
              <button className={styles.learnMoreButton}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhatItsLikeToLiveTheRupsterlife; 