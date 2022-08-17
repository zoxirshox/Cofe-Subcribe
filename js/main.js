/*var elForm = document.querySelector("[choose-coffee__form]");
var elToggle = document.querySelector("[data-button-toggle-class]");
elToggle.addEventListener("click", function(evt) {
  document.body.classList.toggle("d-none")
  document.body.style.re
})*/


var elForm1 = document.querySelector("[choose-coffee__form1 ]");
var elForm2= document.querySelector("[choose-coffee__form2 ]");
var elForm3 = document.querySelector("[choose-coffee__form3 ]");
var elForm4 = document.querySelector("[choose-coffee__form4 ]");
var elForm5 = document.querySelector("[choose-coffee__form5 ]");

var elToggle1 = document.querySelector("[btn-toggle1]");
var elToggle2= document.querySelector("[btn-toggle2]");
var elToggle3= document.querySelector("[btn-toggle3]");
var elToggle4= document.querySelector("[btn-toggle4]");
var elToggle5 = document.querySelector("[btn-toggle5]");

elToggle1.addEventListener("click", function(evt) {
  document.body.classList.toggle("d-none")
})

elToggle2.addEventListener("click", function(evt) {
  document.body.classList.toggle("d-none")
})

elToggle3.addEventListener("click", function(evt) {
  document.body.classList.toggle("d-none")
})

elToggle4.addEventListener("click", function(evt) {
  document.body.classList.toggle("d-none")
})

elToggle5.addEventListener("click", function(evt) {
  document.body.classList.toggle("d-none")
})
















toggle(elTextToggle1, elContentToggle1);
toggle(elTextToggle2, elContentToggle2);
toggle(elTextToggle3, elContentToggle3);
toggle(elTextToggle4, elContentToggle4);
toggle(elTextToggle5, elContentToggle5);

function toggle(text, content) {
  text.addEventListener("click", function (evt) {
    content.classList.toggle("visually-hidden");
  });
}