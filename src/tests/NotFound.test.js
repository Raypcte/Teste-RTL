import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from './renderWithRounter';

describe('Teste o componente Not Found', () => {
  it('Teste se a página contém um heading h2', () => {
    renderWithRouter(<NotFound />);

    const h2 = screen.getByRole('heading', { name: /Page requested not found/i });
    expect(h2).toBeInTheDocument();

    const imagem = screen.getByRole('img', { name: /pikachu crying/i });
    expect(imagem).toBeInTheDocument();
    expect(imagem).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
