import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRounter from './renderWithRounter';

describe('Teste o componente Pokemon Details', () => {
  it('Teste se as informações detalhadas do pokémon selecionado', () => {
    renderWithRounter(<App />);

    const texto = screen.getByRole('link', { name: /more details/i });
    expect(texto).toBeInTheDocument();

    userEvent.click(texto);

    const sumario = screen.getByRole('heading', { name: /summary/i });
    expect(sumario).toBeInTheDocument();

    const detalhes = screen.getByText(/this intelligent pokémon roasts hard berries/i);
    expect(detalhes).toBeInTheDocument();

    const local = screen.getByRole('heading', { name: /game locations of pikachu/i });
    expect(local).toBeInTheDocument();

    const locais = screen.getAllByAltText('Pikachu location');
    locais.forEach((imag) => {
      expect(imag).toHaveAttribute('src', imag.src);
      expect(imag).toHaveAttribute('alt', imag.alt);
    });
    const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(checkbox);
    const favoritado = screen.getByText(/pokémon favoritado\?/i);
    expect(favoritado).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();

    const estrela = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(estrela).toBeInTheDocument();
    expect(estrela).toHaveAttribute('src', '/star-icon.svg');
    expect(estrela).toHaveAttribute('alt', 'Pikachu is marked as favorite');

    const details = screen.getByRole('heading', { name: /pikachu details/i });
    expect(details).toBeInTheDocument();
  });
});
