//receber resposta da API

const pokemonName = document.querySelector(".pokemon__name");
const pokemonNumber = document.querySelector(".pokemon_number");
const pokemonImagem = document.querySelector(".pokemon_imagem");
const form = document.querySelector(".form");
const input = document.querySelector(".input_search");
const buttonPrev = document.querySelector(".btn-prev");
const buttonNext = document.querySelector(".btn-next");

let contadora;

const fetchPokemon = async (Pokemon) => {

   const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${Pokemon}`);

   if(APIResponse.status === 200){
       const data = await APIResponse.json();
      return data;

   }


};

const renderPokemon = async (Pokemon) => {

    pokemonName.textContent = "Carregando..."
    pokemonImagem.src = "https://tenor.com/pt-BR/view/loading-slow-net-turtle-net-gif-17258660" 

   const data = await fetchPokemon(Pokemon);

    if (data) {
        
        pokemonNumber.textContent = data.id;
        pokemonName.textContent = data.name;
        pokemonImagem.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
     
        input.value = ""
        contadora = data.id;
        console.log(data);

    } else {
        
        pokemonName.textContent = "Não encontrado :C";
        pokemonNumber.textContent = ""
        pokemonImagem.src = "https://media.tenor.com/nVcFQ4t1ObIAAAAM/afonsinha-meme.gif"
    }
  
};

form.addEventListener("submit",(event)=>{

    event.preventDefault();
    renderPokemon(input.value.toLowerCase());


});

buttonPrev.addEventListener("click", (event)=>{

    if (contadora >1) {
        contadora -=1
        renderPokemon(contadora)
        input.value = ""
        contadora = data.id
    } else {
        
    }

});

buttonNext.addEventListener("click", (event)=>{

        contadora <1
        contadora +=1
        renderPokemon(contadora)
    
    

});

renderPokemon(1)