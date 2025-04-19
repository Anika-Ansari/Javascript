// function addTodo() {
//     var todo = document.getElementById("todo");
//     var list = document.getElementById("list");
//     console.log(todo.value);
//     var li = document.createElement("li");
//     var text = document.createTextNode(todo.value);
//     li.appendChild(text);
//     var delButton = document.createElement("button");
//     var delText = document.createTextNode("Delete")
//     delButton.appendChild(delText);
//     delButton.setAttribute('onclick','delTodo()')
//     var editButton = document.createElement("button");
//     var editText = document.createTextNode("Edit")
//     editButton.appendChild(editText)
//     editButton.setAttribute('onclick','editTodo()')
//     li.appendChild(delButton);
//     li.appendChild(editButton);
//     list.after(li);
//     todo.value = "";
// }

function addTodo() {
    var todo = document.getElementById("todo");
    var list = document.getElementById("list");
    var date = new Date();
    list.innerHTML = `
    <li>
    <input class= 'todo-input' type = 'text' value ='${todo.value}' disabled/> 
    ${date.toLocaleString()}
     <button onclick= 'delTodo()'>Delete</button> 
      <button onclick = 'editTodo(this)'>Edit</button> 
     </li>`

}

function delTodo() {
    event.target.parentNode.remove();
}

var edit = false;
function editTodo(e) {
    // var oldValue =event.target.parentNode.firstChild.nodeValue;
    // var EditValue = prompt("Enter updated Value",oldValue);
    // event.target.parentNode.firstChild.nodeValue=EditValue;
    if (edit) {
        e.parentNode.childNodes[1].disabled = true;
        e.parentNode.childNodes[1].blur();
        e.parentNode.childNodes[5].innerHTML = 'edit'
        edit =false;
    } else {
        e.parentNode.childNodes[1].disabled = false;
        e.parentNode.childNodes[1].focus()
        e.parentNode.childNodes[5].innerHTML = 'update'
        edit =true;
    }

}

function deleteAll() {
    var list = document.getElementById("list");
    list.innerHTML = "";
}

