import React from 'react';
import TextImageSection from './TextImageSection';

const CashCarefreeSection: React.FC = () => (
  <TextImageSection
    title={[
      { text: "Cash made ", fontFamily: 'gilroy', fontWeight: 400 },
      { text: "carefree", fontFamily: 'gilroy', fontWeight: 400, fontStyle: 'italic' },
      { text: ".", fontFamily: 'gilroy', fontWeight: 400 }
    ]}
    description={[
      { 
        text: "Every transaction is protected with Face ID, so only you can approve it. There's nothing to lose — and nothing for anyone else to misuse.",
        fontFamily: 'gilroy', 
        fontWeight: 400 
      }
    ]}
    imageSrc="/Lock.svg"
    imageAlt="Security lock representing protected transactions"
    background="#000"
    reverse={true}
  />
);

export default CashCarefreeSection; 