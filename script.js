// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() { var newItem = prompt("type an item");
// console.log(newItem);})

var button =  document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function liEvent() {
    for (i = 0; i < li.length; i++) {
        li[i].addEventListener('click', toggleDone)
    }
}

function toggleDone() {
    this.classList.toggle("done");
}

liEvent();
buttonListElement();

function createListElement(){
    var li = document.createElement("li");
    var button = document.createElement("button");
    li.addEventListener("click", toggleDone);
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.style.paddingLeft=("5px");
    li.appendChild(button);
    button.innerHTML = " X ";
    button.style.cssFloat = "right";
    
    input.value = "";


liEvent();
buttonListElement();
}

function addListAfterClick(){
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterEnter(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterEnter);



function buttonListElement() {
    var button = document.querySelectorAll('li button');
    for (i = 0; i < button.length; i++) {
        button[i].addEventListener('click', clearElement)
    }
}

function clearElement() {
    for (var i = 0; i < li.length; i++) {
        this.parentNode.remove()
    }
}


