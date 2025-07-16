import React from 'react';
import styles from './ItGetsEvenBetter.module.css';
import TextSpanning from './TextSpanning';

const ItGetsEvenBetter: React.FC = () => (
  <section className={styles.section} aria-label="It gets even better section">
    <div className={styles.text}>
  <TextSpanning
     spans={[
          { 
            text: "It gets even ", 
            fontFamily: 'gilroy', 
            fontWeight: 700
          },
          { 
            text: "better", 
            fontFamily: 'albra', 
            fontWeight: 500,
            fontStyle: 'italic'
          },
          { 
            text: ".", 
            fontFamily: 'albra', 
            fontWeight: 500
          }
     ]}
   />
    </div>
  </section>
);

export default ItGetsEvenBetter; 