import styled from 'styled-components';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <LogoLink to='/'>
      <img className='w-16' src={logo} alt='로고'></img>
    </LogoLink>
  );
};

const LogoLink = styled(Link)`
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

export default Logo;
