import ProductCard from '../ProductCard/ProductCard';
import { UlStyle } from '../../GlobalStyle';

export default function MainProducts({
  products,
  bookmarkedProducts,
  toggleBookmark,
}) {
  return (
    <div>
      <UlStyle>
        {products.slice(-4).map((product) => (
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
}
