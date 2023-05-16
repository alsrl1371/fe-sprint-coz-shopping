import React from 'react';
import { styled } from 'styled-components';

const databaseURL =
  'https://coz-shopping-default-rtdb.asia-southeast1.firebasedatabase.app/';

class MainExhibitions extends React.Component {
  constructor() {
    super();
    this.state = {
      exhibitions: {},
    };
  }
  _get() {
    fetch(`${databaseURL}/exhibitions.json`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.status.Text);
        }
        return res.json();
      })
      .then((exhibitions) => this.setState({ exhibitions: exhibitions }));
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.exhibitions !== this.state.exhibitions;
  }
  componentDidMount() {
    this._get();
  }
  render() {
    return (
      <div className='flex'>
        {Object.keys(this.state.exhibitions).map((id) => {
          const exhibitions = this.state.exhibitions[id];
          return (
            <div>
              <ExhibitionContainer>
                {exhibitions.id < 1 && (
                  <ImgStyle
                    src={exhibitions.img}
                    alt='애플워치 이미지'
                  ></ImgStyle>
                )}
                <div className='text-xl font-bold'>
                  {exhibitions.id < 1 && <div>{exhibitions.name}</div>}
                </div>
                <div className='text-xl font-medium'>
                  {exhibitions.id < 1 && <div>{exhibitions.word}</div>}
                </div>
              </ExhibitionContainer>
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
const ExhibitionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MainExhibitions;
