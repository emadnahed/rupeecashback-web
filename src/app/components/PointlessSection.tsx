import React from 'react';
import TextImageSection from './TextImageSection';

const PointlessSection: React.FC = () => (
  <TextImageSection
    title={[
      { text: "Completely ", fontFamily: 'gilroy', fontWeight: 400 },
      { text: "pointless", fontFamily: 'gilroy', fontWeight: 400, fontStyle: 'italic' },
      { text: ".", fontFamily: 'gilroy', fontWeight: 400 }
    ]}
    description={[
      { 
        text: "Points are cool, but real cash is cooler. With RupeeCashback, you don't earn tokens or stars — you earn actual rupees. Straight to your wallet. No waiting, no conversions, just money that's ready to spend. Call it what you want — it's coming back to you.",
        fontFamily: 'gilroy', 
        fontWeight: 400 
      }
    ]}
    imageSrc="/RupeeTitled.svg"
    imageAlt="Tilted rupee symbol representing real money cashback"
    background="#000"
    
  />
);

export default PointlessSection; 