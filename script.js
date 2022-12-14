const footer = document.getElementById("footer");
const pTitle = document.getElementById("pizzaTitle");
const pDesc = document.getElementById("pizzaDesc");
const pPrice = document.getElementById("pizzaPrice");
const pImg = document.getElementById("pizzaImg");
const pSize = document.getElementById("size");
const pOrder = document.getElementById("order");

var choice = [].slice.call(footer.querySelectorAll(".fBox"), 0);
var index = 2;
var titles = ["American Pepperoni", "Classic Italiano", "Veggie Supreme", "Royal Canadian", "Smokey Bacon", "The Loaded"];
var descs = ["The traditional American double pepperoni loaded with pizza mozzarella, homemade sauce and of course lots of love!",
"The classic Italian margherita with traditional tomato sauce, mozzarella and Italian herbs.",
"Pizza loaded with tomato, onion, corn, olives and lots of cheese. Who doesn't love veggies and cheese?",
"We Canadians love meat eh! Royal Canadian pizza is loaded with Pepperoni, bacon crumble and 100% Canadian mozza cheese.",
"Bacon is ❤️! This smokey and delicious is has loads of bacon and cheese.",
"You know how we load our pizza right? This loaded treat is our speciality. You only get it here at Pitzeria!"];
var prices = [7.99, 9.49, 8.99, 12.49, 11.99, 12.99];
var imgs = ["https://raw.githubusercontent.com/imrishit98/Pitzeria/master/img/american-pepperoni-pizza.jpg",
"https://raw.githubusercontent.com/imrishit98/Pitzeria/master/img/italiano-pizza.jpg",
 "https://raw.githubusercontent.com/imrishit98/Pitzeria/master/img/veggie-lover-pizza.jpg",
 "https://raw.githubusercontent.com/imrishit98/Pitzeria/master/img/canadian-pizza.jpg", 
 "https://raw.githubusercontent.com/imrishit98/Pitzeria/master/img/bacon-pizza.jpg", 
 "https://raw.githubusercontent.com/imrishit98/Pitzeria/master/img/loaded-pizza.jpg"];

footer.addEventListener("click", function(e) {
  index = choice.indexOf(e.target);
  e.preventDefault;

  pTitle.innerHTML = titles[index];
  pDesc.innerHTML = descs[index];
  pImg.src = imgs[index];
  pSize.selectedIndex = 0;
  pPrice.innerHTML = prices[index];
  pOrder.style.marginRight = "61px";

  pTitle.classList.remove("animateLeft");
  pDesc.classList.remove("anmiateLeft");
  pImg.classList.remove("animateRight");

  void pTitle.offsetWidth;
  void pDesc.offsetWidth;

 pTitle.classList.add("animateLeft");
 pDesc.classList.add("animateLeft");
 pImg.classList.add("animateRight");





}, false);

function theSize(selTag) {
  pPrice.innerHTML = (prices[index] + selTag.selectedIndex * 2 ).toFixed(2);

}
function toggleItem(elem) {
  for (var i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function (e) {
      var current = this;
      for ( var i = 0; i < elem.length; i ++) {
        if (current != elem[i]) {
          elem[i].classList.remove('active');

        } else if (current.classList.contains('active') === true) {
          current.classList.remove('active');
        } else {
          current.classList.add('active');
        }
      }
      e.preventDefault();
    });

  };

}
toggleItem(document.querySelectorAll('.fBox'))


