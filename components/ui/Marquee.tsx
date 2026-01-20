
import React from 'react';

interface MarqueeProps {
  items: string[];
  variant?: 'large-text' | 'small-logos';
  reverse?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ items, variant = 'large-text', reverse = false }) => {
  const content = (
    <div className={`flex items-center gap-12 lg:gap-24 px-6`}>
      {items.map((item, idx) => (
        <React.Fragment key={`${item}-${idx}`}>
          <span className={
            variant === 'large-text' 
              ? "text-5xl md:text-8xl font-serif text-terracotta-gold font-medium uppercase tracking-widest"
              : "text-2xl md:text-3xl font-serif text-gold-muted/40 uppercase tracking-widest"
          }>
            {item}
          </span>
          {variant === 'large-text' && <span className="text-2xl text-gold-muted">•</span>}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className={`overflow-hidden flex whitespace-nowrap ${variant === 'small-logos' ? 'mask-fade' : ''}`}>
      <div className={`flex items-center ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {content}
        {content}
      </div>
    </div>
  );
};

export default Marquee;
