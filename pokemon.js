
async function fetchData(){
    
    try{
    const pokemonname= document.getElementById("pokemonName").value.toLowerCase();
     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`); //fetch greturns promise, so use await
     
     if(!response.ok){
        throw new Error("could not fetch resource");
     }
     
     const data = await response.json(); //.json() returns promise, so use await
     const pokemonSprite = data.sprites.front_default;
     const imgelement = document.getElementById("pokemonSprite");
     imgelement.src=pokemonSprite;
     imgelement.style.display = "block";

    }
    catch(error){
        console.error(error);
    }

}