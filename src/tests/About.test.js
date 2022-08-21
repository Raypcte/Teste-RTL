import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from './renderWithRounter';

describe('Teste o componente About', () => {
  it('Teste se a página contém as informações sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const h1About = screen
      .getByRole('heading', { name: /about pokédex/i });

    expect(h1About).toBeInTheDocument();

    const p1 = screen
      .getByText(/this application simulates a pokédex/i);

    expect(p1).toBeInTheDocument();

    const paragrafo2 = screen.getByText(/one can filter pokémons by/i);

    expect(paragrafo2).toBeInTheDocument();

    const imagem = screen.getByRole('img', { name: /pokédex/i });

    expect(imagem).toBeInTheDocument();
    expect(imagem).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
