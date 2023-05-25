import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import { getProductsAll } from '../api/firebase';
import styled from 'styled-components';
import { AiOutlineArrowDown } from 'react-icons/ai';

export default function ProductsListPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [bookmarkedProducts, setBookmarkedProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [loadCount, setLoadCount] = useState(8);

  const fetchBookmarkedProducts = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarkedProducts(bookmarks);
  };

  useEffect(() => {
    fetchBookmarkedProducts();
  }, []);

  useEffect(() => {
    setIsLoading(true);

    getProductsAll()
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Failed to load products:', error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setVisibleProducts(
      products
        .filter((product) => !bookmarkedProducts.includes(product.id))
        .slice(0, loadCount)
    );
  }, [products, bookmarkedProducts, loadCount]);

  const toggleBookmark = (productId) => {
    const updatedBookmarks = [...bookmarkedProducts];

    if (updatedBookmarks.includes(productId)) {
      // 이미 북마크된 상품인 경우 북마크 제거
      const index = updatedBookmarks.indexOf(productId);
      updatedBookmarks.splice(index, 1);
    } else {
      // 북마크되지 않은 상품인 경우 북마크 추가
      updatedBookmarks.push(productId);
    }

    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    setBookmarkedProducts(updatedBookmarks);
  };

  const handleLoadMore = () => {
    setLoadCount((prevCount) => prevCount + 8);
  };

  return (
    <div className='flex flex-col items-center'>
      <h1>Products List Page</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <React.Fragment>
          <GridContainer>
            {visibleProducts.map((product) => (
              <ProductItem key={product.id}>
                <ProductCard
                  product={product}
                  isBookmarked={bookmarkedProducts.includes(product.id)}
                  toggleBookmark={() => toggleBookmark(product.id)}
                />
              </ProductItem>
            ))}
          </GridContainer>
          <div>
            {visibleProducts.length < products.length && (
              <ButtonStyle onClick={handleLoadMore}>
                <AiOutlineArrowDown />
              </ButtonStyle>
            )}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  max-width: 1600px;
  margin: 0 auto;
`;

const ProductItem = styled.div`
  flex: 0 0 0 calc(20% - 0px);
  margin: 12px;
`;

const ButtonStyle = styled.button`
  color: #8cb4ff;
  font-size: 48px;
  font-weight: 600;

  &:hover {
    transform: translateY(20px);
    transition-duration: 0.5s;
  }
`;
