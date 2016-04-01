// var listitems = document.getElementsByTagName('li');
// var listitems = document.getElementsByClassName('food');
// var favitems = document.getElementById('favorite');
//
// console.log(listitems);
//
// console.log(favitems);
//
// var newElement = document.createElement ('li');
// newElement.innerHTML = 'banana cream pie';
// var foodlist = document.getElementById('foodlist');
// foodlist.appendChild(newElement);
// foodlist.setAttribute('class','fancy');
// // document.getElementById('foodlist').appendChild(newElement);

// Shopping List Excersize - LAB5
var total = 0
var pricelist = {
  name: ['milk','cheese','eggs','bread','sugar','salt',"banana","strawberry"],
  price: [5.30,3.2,4.3,2.5,3.6,10,4.85,1.99]
};
var shoplist = ["cheese","eggs","sugar"];
shoplist.forEach(function(x) {
  var displayshoplist = document.createElement ('li');
  var locationindex= pricelist.name.indexOf(x);
  displayshoplist.innerHTML =  x +"...$"+pricelist.price[locationindex].toFixed(2);
  div1.appendChild(displayshoplist);
  total += pricelist.price[locationindex];
});

var thetotal = document.createElement('h3');
thetotal.innerHTML =  "TOTAL= $"+total.toFixed(2);
div1.appendChild(thetotal);
div1.setAttribute('class','fancy');
