import React from 'react';
import { styled } from 'styled-components';
import Bookmark from './Bookmark';

export default function ProductCard({ product }) {
  const productType = (() => {
    if (product.type === 'Product') {
      return (
        <div className='flex justify-between text-xl font-bold'>
          <div className='w-40'>{product.title}</div>
          <div>
            <div className='flex justify-end text-xl text-blue-500'>
              {product.discountPercentage}%
            </div>
            <div className='text-xl'>{product.price}원</div>
          </div>
        </div>
      );
    } else if (product.type === 'Category') {
      return (
        <div className='flex justify-between text-xl font-bold'>
          <div># {product.title}</div>
        </div>
      );
    } else if (product.type === 'Exhibition') {
      return (
        <div className='text-xl font-bold'>
          <div>{product.title}</div>
          <div>
            <div className='text-xl font-medium'>{product.sub_title}</div>
          </div>
        </div>
      );
    } else if (product.type === 'Brand') {
      return (
        <div className='flex justify-between text-xl font-bold'>
          <div className='w-40'>{product.brand_name}</div>
          <div>
            <div>관심고객수</div>
            <div className='flex justify-end text-xl text-blue-500'>
              {product.follower}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  })();

  return (
    <div>
      <ProductContainer>
        <BookmarkStyle>
          <Bookmark />
        </BookmarkStyle>
        <ImgStyle
          src={
            product.brand_image_url
              ? product.brand_image_url
              : product.image_url
          }
          alt='상품 이미지'
        ></ImgStyle>
        {productType}
      </ProductContainer>
    </div>
  );
}

const ImgStyle = styled.img`
  display: flex;
  width: 264px;
  height: 210px;
  border-radius: 12px;
  object-fit: cover;
  cursor: pointer;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  width: 264px;
`;

const BookmarkStyle = styled.div`
  position: relative;
  left: 235px;
  top: 205px;
`;
