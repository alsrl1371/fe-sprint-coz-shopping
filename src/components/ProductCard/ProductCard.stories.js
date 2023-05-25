import React from 'react';
import ProductCard from './ProductCard';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

export default {
  title: 'Basic/ProductCard',
  component: ProductCard,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/storybook']} initialIndex={0}>
        <Routes>
          <Route path='/storybook' element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
};

export const Default = () => <ProductCard />;
