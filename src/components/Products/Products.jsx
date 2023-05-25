import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { UlStyle } from '../../GlobalStyle';

const Products = ({ products, bookmarkedProducts, toggleBookmark }) => {
  return (
    <div>
      <UlStyle>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isBookmarked={bookmarkedProducts.includes(product.id)}
            toggleBookmark={() => toggleBookmark(product.id)}
          />
        ))}
      </UlStyle>
    </div>
  );
};

export default Products;
