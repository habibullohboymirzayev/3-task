
var elList = document.querySelector("#pokemon_list")

var newPokemonlist = pokemons.slice(0,20)

function renderPokemon(array,place) {
    
    elList.innerHTML = null
    

    for (var item of newPokemonlist) {
        console.log(item);
        // creat li element
        var newLi = document.createElement("li")
        newLi.classList.add("col-3", "mb-4")
        
        // creat div element
        var newDiv = document.createElement("div")
        newDiv.classList.add("card")
        
        var newImg = document.createElement("img")
        newImg.setAttribute("src", 'http://www.serebii.net/pokemongo/pokemon/003.png')
        newImg.setAttribute("alt", "Card image")
       
        
        
        var newInnerDiv = document.createElement("div")
        newInnerDiv.classList.add("card-body")
    
        var newHading = document.createElement("h4")
        newHading.classList.add("card-title")
        newHading.textContent = item.name
        
        var newP = document.createElement("p")
        newP.setAttribute("class", "card-text fs-5 d-flex align-items-center")
        newP.textContent = item.type
    
        var newP2 = document.createElement("p")
        newP2.setAttribute("class", "card-text fs-5 d-flex align-items-center")
        newP2.textContent = item.weight
    
        var newP3 = document.createElement("p")
        newP3.setAttribute("class", "card-text fs-5 d-flex align-items-center")
        newP3.textContent = item.height
    
    
        newInnerDiv.appendChild(newHading)
        newInnerDiv.appendChild(newP)
        newInnerDiv.appendChild(newP2)
        newInnerDiv.appendChild(newP3)
    
        
        newDiv.appendChild(newImg)
        newDiv.appendChild(newInnerDiv)
    
        newLi.appendChild(newDiv)
    
        console.log(newLi);
        elList.appendChild(newLi)
        
    }

  
    
    
}

renderPokemon(newPokemonlist)
