import React from 'react';
import { styled } from 'styled-components';
import MainProducts from '../components/MainProducts';

export default function MainPage() {
  return (
    <Container>
      <section>
        <UlStyle>
          <StyleH1 className='text-4xl mb-4 font-bold w-full'>
            상품 리스트
          </StyleH1>
          <LiStyle>
            <MainProducts />
          </LiStyle>
        </UlStyle>
        <UlStyle>
          <StyleH1 className='text-4xl mb-4 font-bold'>북마크 리스트</StyleH1>
          <div className='flex'>
            <div></div>
          </div>
        </UlStyle>
      </section>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const StyleH1 = styled.h1`
  margin-left: 76px;
`;

const UlStyle = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  justify-content: center;
  width: 100%;
`;

const LiStyle = styled.li`
  margin-left: 52px;
`;
