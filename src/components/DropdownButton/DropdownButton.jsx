import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSignOutAlt } from 'react-icons/fa';
import { login, logout, onUserStateChange } from '../../api/firebase';
import useDetectClose from '../../hooks/useDetectClose';
import User from '../User/User';

const DropdownButton = () => {
  const [myPageIsOpen, myPageHandler] = useDetectClose(false);
  const [user, setUser] = useState();
  const dropdownRef = useRef(null);

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <DropdownContainer>
      <StyledDropdownButton
        className='mr-9'
        onClick={myPageHandler}
        ref={dropdownRef}
      >
        <GiHamburgerMenu size='26' />
      </StyledDropdownButton>
      <Menu isDropped={myPageIsOpen} ref={dropdownRef}>
        <Ul>
          <Li>
            {user && <User user={user} />}
            {!user && <button onClick={login}>Login</button>}
            {user && (
              <button onClick={logout}>
                <FaSignOutAlt className='ml-3 cursor-pointer' size='20' />
              </button>
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
  );
};

const StyledDropdownButton = styled.div`
  cursor: pointer;
`;

const DropdownContainer = styled.div`
  display: flex;
  position: relative;
  text-align: center;
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

export default DropdownButton;
