//Declaration des constantes globals//
const catchPhrase = "Total des taches à faire : "
const finishedCatchPhrase = "Bravo ! Vous avez fini toutes vos tâches !"
let numberOfLi = document.querySelectorAll('li')
console.log(numberOfLi)

/* 
HELPER FUNCTION TO SET ATTRIBUTES 
[
    ref: 
    https://stackoverflow.com/questions/12274748/setting-multiple-attributes-for-an-element-at-once-with-javascript
    ]
*/ 
function setAttributes(el, attrs) {
    for(let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

// AJOUTE UNE TACHE LISTE //
function addTask() {
    // Creation de la liste //
    const newLi= document.createElement('li')
    setAttributes(newLi, {'class' : 'delete', 'id' : numberOfLi.length+1})
    const inputValue =document.getElementById('todo-add').value
    const liText = document.createTextNode(inputValue)
    newLi.appendChild(liText)
    document.getElementById("first-todo").appendChild(newLi);

    // Creation du bouton //
    const newButton = document.createElement('button')
    setAttributes(newButton, { 'class' : 'delete', 'id' : numberOfLi.length+1, 'onclick' : 'deleteTask(this)'})
    const buttonText = document.createTextNode('Supprimer')
     newButton.appendChild(buttonText);
    //test//
    document.getElementById(newLi['id']).appendChild(newButton)
    //fin test//

    // Get the length of all the li //
    numberOfLi = document.querySelectorAll('li')
    document.getElementById('list-length').innerHTML = catchPhrase + numberOfLi.length
    console.log(setAttributes)
}

// Supprimer une tache de la liste //

function deleteTask(e) {
    e.parentNode.remove()
    numberOfLi = document.querySelectorAll('li')
    document.getElementById('list-length').innerHTML = catchPhrase + numberOfLi.length 
    // Décompte des tâches // 
    if(numberOfLi.length>0) {
        document.getElementById('list-length').innerHTML = catchPhrase + numberOfLi.length
    } else {
        document.getElementById('list-length').innerHTML = finishedCatchPhrase
        }
}


// Résumé des taches à faire : //
document.getElementById('list-length').innerHTML = catchPhrase + numberOfLi.length
