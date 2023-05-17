import React from 'react';
import { useEffect, useState } from 'react';
import firebase from '../api/firebase';
import ProductCard from './ProductCard';

export default function MainProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    firebase
      .getProductsMain()
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  return (
    <div>
      <ul className='flex'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
}
