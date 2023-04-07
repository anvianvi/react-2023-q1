import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductCard from './card';
import { IProduct } from '../../interfaces';

const mockData: IProduct = {
  id: 1,
  title: 'Name',
  price: 100,
  category: 'category',
  description: '',
  image: '',
  rating: {
    rate: 0,
    count: 0,
  },
};

describe('Card', () => {
  it('Render', () => {
    render(<ProductCard products={[mockData]} />);

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('category')).toBeInTheDocument();
  });
});
