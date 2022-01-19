var button = document.getElementById("button");
var input = document.getElementById("input");
var list = document.getElementById("list");

button.addEventListener('click', addList);

var rm = 1;

function addList() {
    var temp = document.createElement('li');
    temp.setAttribute("id", "list");
    temp.setAttribute("id", "li" + rm);
    temp.innerHTML = input.value;
    temp.innerHTML += 
    "<button class='button' type='button' onclick='remove(" + rm + ")'>&nbsp;X&nbsp;</button>";
    list.appendChild(temp);
    rm++;
}

function remove(rm) {
    var li = document.getElementById('li' + rm);
    list.removeChild(li);
}