import React from 'react';
import { styled } from 'styled-components';
import Bookmark from './Bookmark';

export default function ProductCard({ product }) {
  let productType;
  switch (product.type) {
    case 'Product':
      productType = (
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
      break;
    case 'Category':
      productType = (
        <div className='flex justify-between text-xl font-bold'>
          <div># {product.title}</div>
        </div>
      );
      break;
    case 'Exhibition':
      productType = (
        <div className='text-xl font-bold'>
          <div>{product.title}</div>
          <div>
            <div className='text-xl font-medium'>{product.sub_title}</div>
          </div>
        </div>
      );
      break;
    case 'Brand':
      productType = (
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
      break;
    default:
      return null;
  }

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
          alt=''
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
