// Shopping List Excersize - LAB5
var total = 0
var pricelist = {
  name: ['milk','cheese','eggs','bread','sugar','salt',"banana","strawberry"],
  price: [5.30,3.2,4.3,2.5,3.6,10,4.85,1.99]
};

var shoplist = ["cheese","eggs","sugar"];

shoplist.forEach(function(x) {
  var displayshoplist = document.createElement ('ol');
  var locationindex= pricelist.name.indexOf(x);
  displayshoplist.innerHTML =  x +"...$"+pricelist.price[locationindex].toFixed(2);
  div1.appendChild(displayshoplist);
  total += pricelist.price[locationindex];
});

var thetotal = document.createElement('h3');
thetotal.innerHTML =  "TOTAL= $"+total.toFixed(2);
div1.appendChild(thetotal);
div1.setAttribute('class','fancy');

function additemfun (){
  var valueofnewitem = document.getElementById('newitem').value;
  var valueofnewitemprice = document.getElementById('newitemprice').value;
  var valueofnewitempriceNum = Number(valueofnewitemprice);
  if (pricelist.name.indexOf(valueofnewitem)>-1) {
    shoplist.push(valueofnewitem);
  }
  else {
    pricelist.name.push(valueofnewitem);
    pricelist.price.push(valueofnewitempriceNum);
  }

};
