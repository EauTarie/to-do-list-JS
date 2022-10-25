const liNumber = document.querySelectorAll('li')

let longueur = liNumber.length
console.log(liNumber)
const ul = document.getElementById('first-todo')

document.getElementById('submit').addEventListener('click', e=>{
    
    const li = document.createElement("li")
    const inputValue =document.getElementById('todo-add').value
    const text = document.createTextNode(inputValue)
    li.appendChild(text)
    // document.append(ul)
    document.getElementById("first-todo").appendChild(li);
    // console.log(toDoData)
})