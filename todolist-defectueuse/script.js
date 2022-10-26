// Paramètre globaux (capture de la liste, catch phrase, console liNumber) //
let liNumber = document.querySelectorAll('li')
let catchPhrase = "Le nombre d'élément dans la liste est de  : ";
console.log(liNumber)


// CREATION D'UN ELEMENT DANS LA LISTE //
document.getElementById('submit').addEventListener('click', e=>{
    
    liNumber = document.querySelectorAll('li')
    const li = document.createElement("li")
    li.setAttribute('class', 'delete')
    li.setAttribute('id', liNumber.length+1)
    const inputValue =document.getElementById('todo-add').value
    const text = document.createTextNode(inputValue)
    const button = document.createElement('button')
    button.setAttribute('id',liNumber.length+1)
    // button.setAttribute('onclick', 'FunctionDelete()')
    // button.createTextNode('Supprimer')
    li.appendChild(text)
    li.appendChild(button)
    document.getElementById("first-todo").appendChild(li);
    console.log(e)
    document.getElementById('list-length').innerHTML = catchPhrase + (liNumber.length+1)
})

let buttonNumber = document.querySelectorAll('.delete')
console.log(buttonNumber);
// SUPPRESSION D'UN ELEMENT DANS LA LISTE //


// TEST //

const boxes = document.getElementsByClassName('delete');

for (const deletes of boxes) {
  deletes.addEventListener('click', (event) => {
    liNumber = document.querySelectorAll('li')
    event.target.remove();
    document.getElementById('list-length').innerHTML = catchPhrase + (liNumber.length -1)
  });
}

//FIN TEST //
// TEXTE LONGUEUR DE LA LISTE //
document.getElementById('list-length').innerHTML = 
catchPhrase + liNumber.length