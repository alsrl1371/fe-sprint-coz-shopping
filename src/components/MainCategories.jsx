import React from 'react';
import { styled } from 'styled-components';

const databaseURL =
  'https://coz-shopping-default-rtdb.asia-southeast1.firebasedatabase.app/';

class MainCategories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: {},
    };
  }
  _get() {
    fetch(`${databaseURL}/categories.json`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.status.Text);
        }
        return res.json();
      })
      .then((categories) => this.setState({ categories: categories }));
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.categories !== this.state.categories;
  }
  componentDidMount() {
    this._get();
  }
  render() {
    return (
      <div className='flex'>
        {Object.keys(this.state.categories).map((id) => {
          const category = this.state.categories[id];
          return (
            <div>
              <CategoryContainer>
                {category.id < 1 && (
                  <ImgStyle src={category.img} alt='애플워치 이미지'></ImgStyle>
                )}
                <div className='flex justify-between text-xl font-bold'>
                  {category.id < 1 && <div>{category.name}</div>}
                </div>
              </CategoryContainer>
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
const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MainCategories;
