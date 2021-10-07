
var drag
var count = 3
var flag = false
var arr = []
var valArr = []


document.addEventListener("dragstart", function (event) {

  drag = event.target;
  event.target.style.opacity = .5;
  localStorage.setItem('flag', true)
}, false);

document.addEventListener("dragend", function (event) {
  event.target.style.opacity = "";
}, false);

document.addEventListener("dragover", function (event) {
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function (event) {

  if (event.target.className == "visible") {
    event.target.style.background = 'pink'
  }

}, false);

document.addEventListener("dragleave", function (event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "visible") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function (event) {

  event.preventDefault();

  if (event.target.className == "visible") {
    event.target.style.background = ""
    drag.parentNode.removeChild(drag);
    event.target.appendChild(drag);
    var body = document.querySelector('body').innerHTML
    localStorage.setItem('body', body)
  }
}, false);



document.getElementById('press').addEventListener('keyup', function (event) {


  if (event.keyCode === 13) {
    var text = document.getElementById('press').value
    var btn = document.createElement('BUTTON')
    btn.className = 'buttons'
    btn.innerHTML = text
    btn.setAttribute('draggable', 'true')
    document.getElementById('press').value = " "
    var add = document.getElementById('add')
    add.append(btn)
    var body = document.querySelector('body').innerHTML
    localStorage.setItem('body', body)
    localStorage.setItem('flag', true)

  }

})


window.onload = function () {
  if (localStorage.getItem('flag')) {
    document.querySelector('body').innerHTML = localStorage.getItem('body')
  }

  //localStorage.clear()
}

