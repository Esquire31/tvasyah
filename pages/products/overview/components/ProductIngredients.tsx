import React from 'react';
import { Leaf } from 'lucide-react';

interface ProductIngredientsProps {
  ingredients: string[];
}

const ProductIngredients: React.FC<ProductIngredientsProps> = ({ ingredients }) => {
  const ingredientCards = ingredients.length
    ? ingredients
    : ['Saffron', 'Turmeric', 'Neem', 'Ashwagandha'];

  return (
    <section className="py-24 bg-cream dark:bg-background-dark/30">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="mb-12 text-center">
          <span className="text-gold-muted text-[10px] font-bold tracking-[0.4em] uppercase block mb-4">Ingredient Ritual</span>
          <h2 className="text-4xl md:text-5xl font-serif text-moss-green dark:text-white italic tracking-tight">Key ingredients that ground the formula</h2>
          <p className="mt-4 text-sage dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Each ingredient is selected for its botanical potency and sensorial richness, blending time-honored Ayurveda with modern luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredientCards.map((ingredient) => (
            <div key={ingredient} className="rounded-3xl border border-sage/10 bg-white/80 dark:bg-background-dark/80 p-8 shadow-xl shadow-sage/5 hover:border-moss-green transition-colors">
              <div className="flex items-center justify-center mb-6 w-14 h-14 rounded-full bg-moss-green/10 text-moss-green mx-auto">
                <Leaf size={24} />
              </div>
              <h3 className="font-serif text-xl text-moss-green dark:text-white text-center mb-3">{ingredient}</h3>
              <p className="text-sage dark:text-gray-300 text-sm leading-relaxed text-center">
                {ingredient === 'Saffron' && 'A rare botanical brightening agent that helps restore luminosity.'}
                {ingredient === 'Ashwagandha' && 'A calming adaptogen to support skin resilience and balance.'}
                {ingredient === 'Golden Jojoba' && 'A nourishing carrier that melts into skin for a dewy finish.'}
                {ingredient === 'Silk Extract' && 'A softening complex that leaves skin feeling smooth and supple.'}
                {ingredient === 'Neem' && 'A purifying herb that supports a clear, balanced complexion.'}
                {ingredient === 'Kokum Butter' && 'A restorative emollient that helps protect and replenish moisture.'}
                {ingredient === 'Turmeric' && 'A powerful antioxidant that calms and brightens skin tone.'}
                {ingredient === 'Brahmi' && 'A restorative herb that helps soothe and nourish stressed skin.'}
                {!['Saffron','Ashwagandha','Golden Jojoba','Silk Extract','Neem','Kokum Butter','Turmeric','Brahmi'].includes(ingredient) && 'A premium botanical chosen for its potent benefits.'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductIngredients;
