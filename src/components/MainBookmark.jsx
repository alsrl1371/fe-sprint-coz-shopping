import React from 'react';
import ProductCard from './ProductCard';
import { styled } from 'styled-components';

export default function MainBookmark({
  bookmarkedProducts,
  getProductById,
  toggleBookmark,
}) {
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
}

const UlStyle = styled.ul`
  display: flex;
`;
