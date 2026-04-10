import React from 'react';
import { Product } from '../../../../types';

interface ProductGalleryProps {
  product: Product;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ product }) => {
  const galleryImages = [product.image, product.image, product.image];

  return (
    <div className="lg:col-span-7 grid grid-cols-12 gap-4">
      <div className="col-span-12 relative overflow-hidden group">
        <img
          alt={product.name}
          className="w-full h-[600px] object-cover rounded-2xl"
          src={galleryImages[0]}
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="col-span-6 mt-4">
        <img
          alt={`${product.name} detail view`}
          className="w-full h-[300px] object-cover rounded-2xl"
          src={galleryImages[1]}
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="col-span-6 -mt-12">
        <img
          alt={`${product.name} alternative view`}
          className="w-full h-[350px] object-cover rounded-2xl"
          src={galleryImages[2]}
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
