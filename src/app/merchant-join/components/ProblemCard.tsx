import React from 'react';
import styles from './ProblemCard.module.css';
import Image from 'next/image';

interface ProblemCardProps {
  titleLabel: React.ReactNode;
  titleMain: string;
  titleEmphasis: React.ReactNode;
  desc: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  className?: string;
}

const ProblemCard: React.FC<ProblemCardProps> = ({
  titleLabel,
  titleMain,
  titleEmphasis,
  desc,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  className = '',
}) => {
  return (
    <div className={`${styles.card} ${styles[imagePosition]} ${className}`}>
      {imagePosition === 'left' && (
        <div className={styles.cardImageWrapper}>
          <Image src={imageSrc} alt={imageAlt} className={styles.cardImage} width={373} height={373} />
        </div>
      )}
      <div className={styles.cardContent}>
        <div className={styles.cardLabel}>{titleLabel}</div>
        <div className={styles.cardTitle}>
          <span className={styles.cardTitleMain}>{titleMain} </span>
          <span className={styles.cardTitleEmphasis}>{titleEmphasis}</span>
        </div>
        <div className={styles.cardDesc}>{desc}</div>
      </div>
      {imagePosition === 'right' && (
        <div className={styles.cardImageWrapper}>
          <Image src={imageSrc} alt={imageAlt} className={styles.cardImage} width={373} height={373} />
        </div>
      )}
    </div>
  );
};

export default ProblemCard;
