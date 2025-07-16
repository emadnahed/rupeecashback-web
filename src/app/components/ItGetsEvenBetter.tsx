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
            fontWeight: 400
          },
          { 
            text: "better", 
            fontFamily: 'gilroy', 
            fontWeight: 400,
            fontStyle: 'italic'
          },
          { 
            text: ".", 
            fontFamily: 'gilroy', 
            fontWeight: 400
          }
     ]}
   />
    </div>
  </section>
);

export default ItGetsEvenBetter; 