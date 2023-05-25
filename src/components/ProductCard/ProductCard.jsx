import React, { useState } from 'react';
import { styled } from 'styled-components';
import Modal from '../Modal/Modal';
import { BsStarFill, BsStar } from 'react-icons/bs';
import ToastMessage from '../ToastMessage/ToastMessage';
import useModal from '../../hooks/useModal';
import useToast from '../../hooks/useToast';

const ProductCard = ({ product, isBookmarked, toggleBookmark }) => {
  const [isBookmarkHovered, setIsBookmarkHovered] = useState(false);
  const [isBookmarkClicked, setIsBookmarkClicked] = useState(false);
  const { isModalOpened, openModal, closeModal } = useModal();
  const { isBookmarkAdded, handleBookmarkAdd, handleBookmarkRemove } =
    useToast();

  const handleProductClick = () => {
    openModal();
  };

  const handleCloseModal = () => {
    closeModal();
  };

  const handleBookmarkClick = () => {
    if (!isModalOpened) {
      toggleBookmark(product.id);
      if (!isBookmarked) {
        handleBookmarkAdd();
      } else {
        handleBookmarkRemove();
      }
      setIsBookmarkClicked(!isBookmarked);
    }
  };

  const handleBookmarkMouseEnter = () => {
    setIsBookmarkHovered(true);
  };

  const handleBookmarkMouseLeave = () => {
    setIsBookmarkHovered(false);
  };

  if (!product) {
    return null;
  }

  const isBookmarkedStyle =
    isBookmarked || isBookmarkHovered ? 'bookmarked' : '';

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

  const BookmarkButton = styled.button.attrs(({ disabled }) => ({
    disabled: disabled,
  }))`
    background: none;
    border: none;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    transition: transform 0.2s ease-in-out;
  `;

  const StyledBookmarkFilled = styled(BsStarFill)`
    transition: transform 0.2s ease-in-out;

    &:active {
      transform: scale(1.2);
    }

    ${BookmarkButton}:hover & {
      transform: translateY(-3px);
    }
  `;

  const StyledBookmarkOutlined = styled(BsStar)`
    transition: transform 0.2s ease-in-out;

    &:active {
      transform: scale(1.2);
    }

    ${BookmarkButton}:hover & {
      transform: translateY(-3px);
    }
  `;

  return (
    <div>
      <ProductContainer>
        <BookmarkStyle>
          <BookmarkButton
            disabled={isModalOpened}
            onClick={handleBookmarkClick}
            onMouseEnter={handleBookmarkMouseEnter}
            onMouseLeave={handleBookmarkMouseLeave}
            className={`${isBookmarkedStyle} ${
              isBookmarkClicked ? 'clicked' : ''
            }`}
          >
            {isBookmarked ? (
              <StyledBookmarkFilled size={24} color='gold' />
            ) : (
              <StyledBookmarkOutlined size={24} color='gold' />
            )}
          </BookmarkButton>
        </BookmarkStyle>
        <ImgStyle
          src={
            product.brand_image_url
              ? product.brand_image_url
              : product.image_url
          }
          alt='상품 이미지'
          onClick={handleProductClick}
        />
        {productType}
      </ProductContainer>
      {isBookmarkClicked && <ToastMessage isBookmarkAdded={!isBookmarked} />}
      <Modal
        isOpen={isModalOpened}
        onClose={handleCloseModal}
        product={product}
      />
    </div>
  );
};

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

export default ProductCard;
