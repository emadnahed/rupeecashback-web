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
      <div className={styles.heroCenterContent}>
        <h1 className={styles.title}>
          <TextSpanning spans={titleSpans} />
        </h1>
        <div className={styles.description}>
          <TextSpanning spans={descriptionSpans} />
        </div>
      </div>

      <div className={styles.bottomText}>
        <TextSpanning spans={bottomTextSpans} />
        <TextSpanning spans={bottomSecondLineSpans} />
      </div>
    </section>
  );
};

export default LoyaltyHeroSection;