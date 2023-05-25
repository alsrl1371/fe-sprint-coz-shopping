import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import useDetectClose from '../hooks/useDetectClose';
import { login, logout, onUserStateChange } from '../api/firebase';
import User from './User';
import { FaSignOutAlt } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../images/logo.png';

export default function Header() {
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <HeaderStyle>
      <HeaderContainer>
        <TitleContainer>
          <StyledLink to='/'>
            <img className='w-16' src={logo} alt='로고'></img>
          </StyledLink>
          <HeaderTitle>COZ Shopping</HeaderTitle>
        </TitleContainer>
        <DropdownContainer>
          <DropdownButton
            className='mr-9'
            onClick={myPageHandler}
            ref={myPageRef}
          >
            <GiHamburgerMenu size='26'></GiHamburgerMenu>
          </DropdownButton>
          <Menu isDropped={myPageIsOpen}>
            <Ul>
              <Li>
                {user && <User user={user} />}
                {!user && <ButtonStyle onClick={login}>Login</ButtonStyle>}
                {user && (
                  <ButtonStyle onClick={logout}>
                    <FaSignOutAlt
                      className='ml-3 cursor-pointer'
                      size='20'
                    ></FaSignOutAlt>
                  </ButtonStyle>
                )}
              </Li>
              <Li>
                <StyledLink to='/products/list'>상품리스트 페이지</StyledLink>
              </Li>
              <Li>
                <StyledLink to='/bookmark'>북마크 페이지</StyledLink>
              </Li>
            </Ul>
          </Menu>
        </DropdownContainer>
      </HeaderContainer>
    </HeaderStyle>
  );
}

const ButtonStyle = styled.button``;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
const DropdownContainer = styled.div`
  display: flex;
  position: relative;
  text-align: center;
`;

const HeaderStyle = styled.div`
  position: sticky;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const DropdownButton = styled.div`
  cursor: pointer;
`;

const Menu = styled.div`
  background: #ffffff;
  position: absolute;
  top: 52px;
  left: 50%;
  display: flex;
  width: 250px;
  height: 150px;
  text-align: center;
  justify-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  opacity: 0;
  visibility: hidden;
  transform: translate(-75%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  &:after {
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translate(130%, -50%);
    border: 12px solid transparent;
    border-top-width: 0;
    border-bottom-color: #ffffff;
  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-75%, 5%);
      left: 50%;
    `};
`;

const Ul = styled.ul`
  & > li {
    width: 100%;
    padding: 10px 0px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > li:nth-of-type(2) {
    border-top: 1px solid #e4e4e4;
  }
  & > li:nth-of-type(3) {
    border-top: 1px solid #e4e4e4;
  }

  list-style-type: none;
  padding: 14px 0px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Li = styled.li``;
