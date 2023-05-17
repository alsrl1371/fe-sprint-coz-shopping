import React, { useEffect, useState } from 'react';
import * as firebase from '../api/firebase';
import { styled } from 'styled-components';
import MainProducts from '../components/MainProducts';
import MainBookmark from '../components/MainBookmark';

export default function MainPage() {
  const [bookmarkedProducts, setBookmarkedProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchBookmarkedProducts = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarkedProducts(bookmarks);
  };

  useEffect(() => {
    fetchBookmarkedProducts();
  }, []);

  useEffect(() => {
    firebase
      .getProductsAll()
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  const getProductById = (productId) => {
    return products.find((product) => product.id === productId);
  };

  const toggleBookmark = (productId) => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    if (bookmarks.includes(productId)) {
      const updatedBookmarks = bookmarks.filter((id) => id !== productId);
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    } else {
      const updatedBookmarks = [...bookmarks, productId];
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    }
    fetchBookmarkedProducts();
  };

  const filteredProducts = products.filter(
    (product) => !bookmarkedProducts.includes(product.id)
  );

  return (
    <Container>
      <Section>
        <StyleH1 className='text-4xl mb-4 font-bold w-full'>
          상품 리스트
        </StyleH1>
        <ProductList>
          <MainProducts
            products={filteredProducts}
            bookmarkedProducts={bookmarkedProducts}
            toggleBookmark={toggleBookmark}
          />
        </ProductList>
      </Section>
      <Section>
        <StyleH1 className='text-4xl mb-4 font-bold'>북마크 리스트</StyleH1>
        <ProductList>
          <MainBookmark
            bookmarkedProducts={bookmarkedProducts}
            getProductById={getProductById}
            toggleBookmark={toggleBookmark}
          />
        </ProductList>
      </Section>
    </Container>
  );
}

const StyleH1 = styled.h1`
  margin-left: 76px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  justify-content: center;
  width: 100%;
`;

const ProductList = styled.ul`
  margin-left: 52px;
  display: flex;
`;
