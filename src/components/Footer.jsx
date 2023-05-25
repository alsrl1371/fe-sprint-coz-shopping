import React from 'react';
import { styled } from 'styled-components';

export default function Footer() {
  return (
    <FooterStyle>
      <div>개인정보 처리방침 | 이용 약관</div>
      <div>All rights reserved @ Codestates</div>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  width: 100%;
  height: 58px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #888888;
  margin-top: 40px;
`;
