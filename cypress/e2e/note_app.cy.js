// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// DEV
// describe("Note app", function () {
//   it("front page can be opened", function () {
//     cy.visit("http://localhost:8080");
//     cy.contains("bulbasaur");
//     cy.contains(
//       "Pokémon and Pokémon character names are trademarks of Nintendo."
//     );
//   });
// });

// PROD
describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('/')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
})

const pokemonList = {
  id: 133,
  abilities: [
    {
      ability: {
        name: 'anticipation',
        url: 'https://pokeapi.co/api/v2/ability/107/',
      },
      is_hidden: true,
      slot: 3,
    },
    {
      ability: {
        name: 'adaptability',
        url: 'https://pokeapi.co/api/v2/ability/91/',
      },
      is_hidden: false,
      slot: 2,
    },
  ],
  name: 'eevee',
  stats: [
    {
      base_stat: 55,
      effort: 0,
      stat: {
        name: 'attack',
        url: 'https://pokeapi.co/api/v2/stat/2/',
      },
    },
    {
      base_stat: 55,
      effort: 0,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: 'normal',
        url: 'https://pokeapi.co/api/v2/type/1/',
      },
    },
  ],
  sprites: { front_default: 'URL' },
}

// const previous = {
//   url: 'https://pokeapi.co/api/v2/pokemon/132/',
//   name: 'ditto',
//   id: 132,
// }

describe('Pokemon Page', function () {
  beforeEach(function () {
    cy.visit('/')
  })

  it('can click on a pokemon and navigate to its page', function () {
    cy.contains('ivysaur').click()
    cy.url().should('include', '/pokemon/ivysaur') // optional, but confirms the route changed
    cy.contains('ivysaur')
    cy.contains('chlorophyll')
  })
})
