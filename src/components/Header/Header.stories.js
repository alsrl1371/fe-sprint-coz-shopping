import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';

export default {
  title: 'Basic/Header',
  component: Header,
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

export const Default = () => <Header />;
