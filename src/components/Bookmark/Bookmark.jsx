import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { UlStyle } from '../../GlobalStyle';

export const Bookmark = ({
  bookmarkedProducts,
  getProductById,
  toggleBookmark,
}) => {
  return (
    <UlStyle>
      {bookmarkedProducts && bookmarkedProducts.length > 0 ? (
        bookmarkedProducts.map((productId) => (
          <ProductCard
            key={productId}
            product={getProductById(productId)}
            isBookmarked={true}
            toggleBookmark={() => toggleBookmark(productId)}
          />
        ))
      ) : (
        <div>No bookmarked products</div>
      )}
    </UlStyle>
  );
};
