import React from 'react';
import { styled } from 'styled-components';
import MainProducts from '../components/MainProducts';
import MainCategories from '../components/MainCategories';
import MainExhibitions from '../components/MainExhibitions';
import MainBrands from '../components/MainBrands';

export default function MainPage() {
  return (
    <Container>
      <section>
        <UlStyle>
          <div className='text-4xl mb-4 font-bold w-full'>상품 리스트</div>
          <div className='flex'>
            <div>
              <MainProducts />
            </div>
            <div className='xl:ml-6'>
              <MainCategories />
            </div>
            <div className='xl:ml-6'>
              <MainExhibitions />
            </div>
            <div className='xl:ml-6'>
              <MainBrands />
            </div>
          </div>
        </UlStyle>
        <UlStyle>
          <div className='text-4xl mb-4 font-bold'>북마크 리스트</div>
          <div className='flex'>
            <div>
              <MainProducts />
            </div>
            <div className='xl:ml-6'>
              <MainCategories />
            </div>
            <div className='xl:ml-6'>
              <MainExhibitions />
            </div>
            <div className='xl:ml-6'>
              <MainBrands />
            </div>
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

const UlStyle = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 76px;
  justify-content: center;
  width: 100%;
`; //eslint-disable-line no-unused-vars
