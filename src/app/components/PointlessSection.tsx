import React from 'react';
import TextImageSection from './TextImageSection';

const PointlessSection: React.FC = () => (
  <TextImageSection
    title={[
      { 
        text: "Completely ", 
        fontFamily: 'gilroy', 
        fontWeight: 500, 
        fontSize: '55px',
        style: { lineHeight: '52px', letterSpacing: '-2px' }
      },
      { 
        text: "point", 
        fontFamily: 'gilroy', 
        fontWeight: 700, 
        fontSize: '55px', 
        fontStyle: 'italic',
        style: { lineHeight: '52px', letterSpacing: '-2px', textDecoration: 'line-through' }
      },
      { 
        text: "less", 
        fontFamily: 'gilroy', 
        fontWeight: 700, 
        fontSize: '55px', 
        fontStyle: 'italic',
        style: { lineHeight: '52px', letterSpacing: '-2px' }
      },
      { 
        text: ".", 
        fontFamily: 'gilroy', 
        fontWeight: 700, 
        fontSize: '55px',
        style: { lineHeight: '52px', letterSpacing: '-2px' }
      }
    ]}
    description={[
      { 
        text: "Points are cool, but real cash is cooler. With RupeeCashback, you don't earn tokens or stars — you earn actual rupees. Straight to your wallet. No waiting, no conversions, just money that's ready to spend. Call it what you want —",
        fontFamily: 'gilroy', 
        fontWeight: 400,
        fontSize: '21px',
        style: { lineHeight: '29px', letterSpacing: '-1px' }
      },
      {
        text: "\nit's coming back to you.",
        fontFamily: 'gilroy',
        fontWeight: 400,
        fontSize: '21px',
        style: { lineHeight: '29px', letterSpacing: '-1px' }
      }
    ]}
    imageSrc="/RupeeTitled.svg"
    imageAlt="Tilted rupee symbol representing real money cashback"
    background="#000"
  />
);

export default PointlessSection; 