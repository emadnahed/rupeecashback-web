import React from 'react';
import TextImageSection from './TextImageSection';

const FeeFreeZoneSection: React.FC = () => (
  <TextImageSection
    title={[
      { text: "Fee-", fontFamily: 'gilroy', fontWeight: 400 },
      { text: "Free", fontFamily: 'gilroy', fontWeight: 400, fontStyle: 'italic' },
      { text: " zone.", fontFamily: 'gilroy', fontWeight: 400 }
    ]}
    description={[
      { 
        text: "Your money should stay yours. No annual fees. No signup fees. No hidden conditions — ever.",
        fontFamily: 'gilroy', 
        fontWeight: 400 
      }
    ]}
    imageSrc="/CapturedMoney.svg"
    imageAlt="Money being captured representing fee-free transactions"
    background="#000"
  />
);

export default FeeFreeZoneSection; 