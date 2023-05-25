import React from 'react';
import { styled } from 'styled-components';
import { IoIosClose } from 'react-icons/io';

const Modal = ({ isOpen, onClose, product }) => {
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer onClick={handleModalClick}>
      <ModalContent>
        <ImgStyle
          src={
            product.brand_image_url
              ? product.brand_image_url
              : product.image_url
          }
          alt='상품 이미지'
        />
        <ButtonStyle onClick={onClose}>
          <IoIosClose size='45' color='#FFFFFF' />
        </ButtonStyle>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;

const ImgStyle = styled.img`
  width: 744px;
  height: 480px;
  border-radius: 12px;
  object-fit: cover;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 12px;
  position: relative;
`;

const ButtonStyle = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
`;
