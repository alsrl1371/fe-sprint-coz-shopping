import React from 'react';
import { styled } from 'styled-components';

const databaseURL =
  'https://coz-shopping-default-rtdb.asia-southeast1.firebasedatabase.app/';

class MainProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      products: {},
    };
  }
  _get() {
    fetch(`${databaseURL}/products.json`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.status.Text);
        }
        return res.json();
      })
      .then((products) => this.setState({ products: products }));
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.products !== this.state.products;
  }
  componentDidMount() {
    this._get();
  }
  render() {
    return (
      <div className='flex'>
        {Object.keys(this.state.products).map((id) => {
          const product = this.state.products[id];
          return (
            <div>
              <ProductContainer>
                {product.id < 1 && (
                  <ImgStyle src={product.img} alt='애플워치 이미지'></ImgStyle>
                )}
                <div className='flex justify-between text-xl font-bold'>
                  {product.id < 1 && <div>{product.name}</div>}
                  <div>
                    {product.id < 1 && (
                      <div className='flex justify-end text-blue-700'>
                        {product.discount}
                      </div>
                    )}
                    {product.id < 1 && (
                      <div className='font-medium'>{product.price}</div>
                    )}
                  </div>
                </div>
              </ProductContainer>
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
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MainProducts;
