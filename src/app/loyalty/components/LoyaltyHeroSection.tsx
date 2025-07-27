import React from 'react';
import styles from './LoyaltyHeroSection.module.css';
import TextSpanning from '../../components/TextSpanning';

interface LoyaltyHeroSectionProps {
  isMobile: boolean;
}

const LoyaltyHeroSection: React.FC<LoyaltyHeroSectionProps> = ({ isMobile }) => {
  const titleSpans = [
    {
      text: "Your Money,",
      fontFamily: "gilroy" as const,
      fontWeight: "bold" as const,
      fontSize: isMobile ? "48px" : "80px",
      color: "#FFFFFF"
    },
    {
      text: " Maximized.",
      fontFamily: "gilroy" as const,
      fontWeight: "bold" as const,
      fontSize: isMobile ? "48px" : "80px",
      color: "#FFFFFF",
      fontStyle: "italic" as const
    }
  ];

  const descriptionSpans = [
    {
      text: "A unified ",
      fontFamily: "gilroy" as const,
      fontWeight: "normal" as const,
      fontSize: isMobile ? "16px" : "20px",
      color: "#FFFFFF"
    },
    {
      text: "ecosystem",
      fontFamily: "gilroy" as const,
      fontWeight: "normal" as const,
      fontSize: isMobile ? "16px" : "20px",
      color: "#FFFFFF",
      fontStyle: "italic" as const
    },
    {
      text: " of advanced financial solutions, engineered for the ",
      fontFamily: "gilroy" as const,
      fontWeight: "normal" as const,
      fontSize: isMobile ? "16px" : "20px",
      color: "#FFFFFF"
    },
    {
      text: "discerning individual.",
      fontFamily: "gilroy" as const,
      fontWeight: "normal" as const,
      fontSize: isMobile ? "16px" : "20px",
      color: "#FFFFFF",
      fontStyle: "italic" as const
    }
  ];


  const bottomTextSpans = [
    {
      text: "Join thousands of Indians who've already discovered the secret to",
      fontFamily: "gilroy" as const,
      fontWeight: "normal" as const,
      fontSize: isMobile ? "14px" : "18px",
      color: "#FFFFFF"
    }
  ];

  const bottomSecondLineSpans = [
    {
      text: "making their money work smarter With ",
      fontFamily: "gilroy" as const,
      fontWeight: "normal" as const,
      fontSize: isMobile ? "14px" : "18px",
      color: "#FFFFFF"
    },
    {
      text: "RupeeStack.",
      fontFamily: "gilroy" as const,
      fontWeight: "normal" as const,
      fontSize: isMobile ? "14px" : "18px",
      color: "#FFFFFF",
      fontStyle: "italic" as const
    }
  ];

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heroCenterContent}>
            <h1 className={styles.title}>
              <TextSpanning spans={titleSpans} />
            </h1>
            <div className={styles.description}>
              <p className={styles.descriptionLine}>
                <TextSpanning spans={descriptionSpans} />
              </p>
            </div>
          </div>

          <div className={styles.bottomText}>
            <p className={styles.bottomLine}>
              <TextSpanning spans={bottomTextSpans} />
            </p>
            <p className={styles.bottomLine}>
              <TextSpanning spans={bottomSecondLineSpans} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyHeroSection;