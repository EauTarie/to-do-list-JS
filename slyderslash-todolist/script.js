
document.getElementById('total').innerHTML = `Total : ${document.querySelectorAll('li').length}`

document.getElementById('add').onclick = function(){

    if (document.getElementById('text').value.length == 0) {
        alert("Rentrez une tâche")
    } else {
        document.getElementById('tasks').innerHTML += `
        <li>
            ${document.getElementById('text').value}
            <button class="delete" onclick="deleteItem(this)">Supprimer</button>
        </li>`
        document.getElementById('total').innerHTML = `Total : ${document.querySelectorAll('li').length}`
    }
}


function deleteItem(e) {
  e.parentNode.remove()
  document.getElementById('total').innerHTML = `Total : ${document.querySelectorAll('li').length}`
  if(document.querySelectorAll('li').length == 0){
    document.getElementById('total').innerHTML += `</br> Vous pouvez vous reposer, travail terminé !!!!`
  }
} 