import React from 'react';

const ProductFeatures: React.FC = () => {
  return (
    <section className="py-24 bg-cream dark:bg-background-dark/30">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {['Tested Efficacy', 'Pure Ingredients', 'Sustainable'].map((feature, idx) => (
            <div key={idx} className="text-center">
              <h4 className="font-serif text-xl text-moss-green dark:text-white mb-3 italic">{feature}</h4>
              <p className="text-sage dark:text-gray-300 text-sm">Experience the difference of authentically crafted luxury ayurveda.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
