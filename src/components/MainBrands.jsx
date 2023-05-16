import React from 'react';
import { styled } from 'styled-components';

const databaseURL =
  'https://coz-shopping-default-rtdb.asia-southeast1.firebasedatabase.app/';

class MainBrands extends React.Component {
  constructor() {
    super();
    this.state = {
      brands: {},
    };
  }
  _get() {
    fetch(`${databaseURL}/brands.json`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.status.Text);
        }
        return res.json();
      })
      .then((brands) => this.setState({ brands: brands }));
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.brands !== this.state.brands;
  }
  componentDidMount() {
    this._get();
  }
  render() {
    return (
      <div className='flex'>
        {Object.keys(this.state.brands).map((id) => {
          const brand = this.state.brands[id];
          return (
            <div>
              <BrandContainer>
                {brand.id < 1 && (
                  <ImgStyle src={brand.img} alt='애플워치 이미지'></ImgStyle>
                )}
                <div className='flex justify-between text-xl font-bold'>
                  {brand.id < 1 && <div>{brand.name}</div>}
                  {brand.id < 1 && <div>{brand.customer_word}</div>}
                </div>
                <div className='flex justify-end text-xl font-midium'>
                  {brand.id < 1 && <div>{brand.customer}</div>}
                </div>
              </BrandContainer>
            </div>
          );
        })}
      </div>
    );
  }
}

const ImgStyle = styled.img`
  display: flex;
  width: 264px;
  height: 210px;
  border-radius: 12px;
  object-fit: cover;
  cursor: pointer;
`;
const BrandContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MainBrands;
