import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRounter';
import App from '../App';
import data from '../data';

describe('Teste o componente Pokedex', () => {
  it('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);

    const h2 = screen.getByRole('heading', { name: /encountered pokémons/i });

    expect(h2).toBeInTheDocument();

    const proximo = screen.getByRole('button', { name: /Próximo pokémon/i });
    expect(proximo).toBeInTheDocument();

    // const pokemon1 = screen.getByText(/Pikachu/i);
    // expect(pokemon1).toBeInTheDocument();
    // userEvent.click(proximo);

    // const pokemon2 = screen.getByText(/charmander/i);
    // expect(pokemon2).toBeInTheDocument();
    // userEvent.click(proximo);

    data.forEach((pokemon) => {
      const poke = screen.getByText(pokemon.name);
      expect(poke).toBeInTheDocument();
      userEvent.click(proximo);
    });
    const pokemon1 = screen.getByText(/Pikachu/i);
    expect(pokemon1).toBeInTheDocument();
  });

  it(`Deve existir um botão de filtragem 
  para cada tipo de pokémon, sem repetição`, () => {
    renderWithRouter(<App />);
    const tipos = screen.getAllByTestId('pokemon-type-button');
    tipos.forEach((tipo) => {
      const botaozinho = screen.getByRole('button', { name: tipo.innerHTML });
      expect(botaozinho).toBeInTheDocument();
    });

    const all = screen.getByRole('button', { name: /all/i });
    expect(all).toBeInTheDocument();
    userEvent.click(all);

    const nome = screen.getByText(/pikachu/i);
    expect(nome).toBeInTheDocument();
  });
});
