/*
quando clicar no pokémon da listagem temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

para isso vamos precisar trabalhar com dois elementos
1 - listagem
2 - cartão do pokémon

precisamos criar duas variáveis no JS pra trabalhar com o elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémon

- remover a classe aberto só do cartão que esta aberto
- ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar
- remover a classe ativo que marca o pokémon selecionado
- adicionar a classe ativo no item da lista selecionado 
*/


// precisamos criar duas variáveis no JS pra trabalhar com o elementos da tela 
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    // vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémon

    pokemon.addEventListener('click', () => {
        // remover a classe aberto só do cartão que esta aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado 
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
        
    })
})