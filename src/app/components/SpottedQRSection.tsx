import React from 'react';
import styles from './SpottedQRSection.module.css';
import TextSpanning from './TextSpanning';

const SpottedQRSection: React.FC = () => (
  <section className={styles.section} aria-label="Spotted QR section">
    <div className={styles.container}>
      {/* Main Title */}
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>
          <TextSpanning
            spans={[
              { 
                text: "Spotted a", 
                fontFamily: 'gilroy', 
                fontWeight: 400,
                // fontSize: '89px',
                fontSize: '100%' ,
                style: { lineHeight: '99px', letterSpacing: '0px' }
              }
            ]}
          />
          <br />
          <TextSpanning
            spans={[
              { 
                text: "RupeeCashback", 
                fontFamily: 'albra', 
                fontWeight: 500,
                fontStyle: 'italic',
                fontSize: '100%' ,
                // fontSize: '63%' ,
                style: { lineHeight: '99px', letterSpacing: '0px' }
              },
              { 
                text: " QR?", 
                fontFamily: 'gilroy', 
                fontWeight: 400,
                fontSize: '100%' ,
                // fontSize: '63%' ,
                style: { lineHeight: '99px', letterSpacing: '0px' }
              }
            ]}
          />
        </h2>
      </div>

      {/* Phone and Steps */}
      <div className={styles.phoneStepsContainer}>
        {/* Phone Image */}
        <div className={styles.phoneContainer}>
          <img 
            src="/CashbackQR.svg" 
            alt="Phone showing QR scan interface" 
            className={styles.phoneImage}
          />
        </div>



      
      </div>      
    </div>
  </section>
);

export default SpottedQRSection; 