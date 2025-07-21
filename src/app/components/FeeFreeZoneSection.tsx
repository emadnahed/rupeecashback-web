import React from 'react';
import TextImageSection from './TextImageSection';

const FeeFreeZoneSection: React.FC = () => (
  <TextImageSection
    title={[
      { 
        text: "Fee-", 
        fontFamily: 'gilroy', 
        fontWeight: 500,
        fontSize: '55px',
        style: { lineHeight: '52px', letterSpacing: '-2px' }
      },
      { 
        text: "Free", 
        fontFamily: 'albra', 
        fontWeight: 500, 
        fontStyle: 'italic',
        fontSize: '55px',
        style: { lineHeight: '52px', letterSpacing: '-2px' }
      },
      { 
        text: " zone.", 
        fontFamily: 'gilroy', 
        fontWeight: 500,
        fontSize: '55px',
        style: { lineHeight: '52px', letterSpacing: '-2px' }
      }
    ]}
    description={[
      { 
        text: "Your money should stay yours. No annual fees. No signup fees. No hidden conditions — ever.",
        fontFamily: 'gilroy', 
        fontWeight: 400,
        fontSize: '21px',
        style: { lineHeight: '29px', letterSpacing: '-1px' }
      }
    ]}
    imageSrc="/CapturedMoney.svg"
    imageAlt="Money being captured representing fee-free transactions"
    background="#000"
  />
);

export default FeeFreeZoneSection; 