import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { UlStyle } from '../../GlobalStyle';

export const MainBookmark = ({
  bookmarkedProducts,
  getProductById,
  toggleBookmark,
}) => {
  return (
    <UlStyle>
      {bookmarkedProducts.slice(-4).map((productId) => (
        <ProductCard
          key={productId}
          product={getProductById(productId)}
          isBookmarked={true}
          toggleBookmark={() => toggleBookmark(productId)}
        />
      ))}
    </UlStyle>
  );
};
