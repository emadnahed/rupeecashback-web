import React from 'react';
import styles from '../page.module.css';

export default function ProblemSection() {
  return (
    <div className={styles.problemSectionContainer}>
      <div className={styles.problemContent}>
        <h2 className={styles.problemMainTitle}>The problem.</h2>
        <p className={styles.problemDescription}>
          Competing with big chains gets tougher <span className={styles.emphasizedText}>every day.</span> They've got corporate budgets for flashy promotions while you're<br />
          trying to keep regulars coming back with <span className={styles.emphasizedText}>whatever you can manage.</span> The reality? They're winning customers with <span className={styles.emphasizedText}>better<br />
          incentives,</span> and you're <span className={styles.emphasizedText}>losing ground.</span>
        </p>
        <div className={styles.customerRetentionSection}>
          <p className={styles.customerRetentionProblem}>Problem 1</p>
          <h3 className={styles.customerRetentionTitle}>Customer Retention.</h3>
        </div>
      </div>
    </div>
  );
} 