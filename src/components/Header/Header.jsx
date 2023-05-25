import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import DropdownButton from '../DropdownButton/DropdownButton';

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderContainer>
        <TitleContainer>
          <Logo />
          <HeaderTitle>COZ Shopping</HeaderTitle>
        </TitleContainer>
        <DropdownButton />
      </HeaderContainer>
    </HeaderStyle>
  );
};

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderStyle = styled.div`
  position: sticky;
  top: 0px;
  z-index: 1;
  background: #ffffff;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 76px;
  align-items: center;
  height: 80px;
`;

const HeaderTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  margin-left: 8px;
`;

export default Header;
