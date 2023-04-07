import { fireEvent, render, screen } from '@testing-library/react';
import Gallery from './galery';
import { Photo } from 'interfaces';

describe('galery', () => {
  it('renders gallery component', () => {
    render(<Gallery />);
    const mygallery = screen.getByTestId('gallery') as HTMLElement;
    expect(mygallery).toBeInTheDocument();
  });
  const photo1: Photo = {
    id: 1,
    urls: {
      regular: 'https://example.com/photo1.jpg',
      full: 'https://example.com/photo1.jpg',
      large: 'https://example.com/photo1.jpg',
      small: 'https://example.com/photo1.jpg',
      raw: 'https://example.com/photo1.jpg',
    },
    alt_description: 'Photo 1',
    user: {
      username: 'user1',
      name: 'User One',
    },
    width: 1000,
    height: 800,
    color: null,
  };
  const photo2: Photo = {
    id: 2,
    urls: {
      regular: 'https://example.com/photo2.jpg',
      full: 'https://example.com/photo2.jpg',
      large: 'https://example.com/photo2.jpg',
      small: 'https://example.com/photo2.jpg',
      raw: 'https://example.com/photo2.jpg',
    },
    alt_description: 'Photo 2',
    user: {
      username: 'user2',
      name: 'User Two',
    },
    width: 1200,
    height: 900,
    color: null,
  };
  const photos: Photo[] = [photo1, photo2];

  it('renders the gallery with the given photos', () => {
    render(<Gallery photos={photos} />);
    expect(screen.getByTestId('gallery')).toBeInTheDocument();
    expect(screen.getAllByTestId('card')).toHaveLength(2);
  });
});
