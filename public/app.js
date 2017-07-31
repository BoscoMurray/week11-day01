var createName = function(passedName) {
  var name = document.createElement("li");
  name.innerText = "Name: " + passedName;
  return name;
}

var createFaveFood = function(passedFaveFood) {
  var faveFood = document.createElement("li");
  faveFood.innerText = "Favourite food: " + passedFaveFood;
  return faveFood;
}

var createImg = function(imgUrl) {
  var img = document.createElement("img");
  img.width = 500;
  img.src = imgUrl;
  return img;
}

var createImgLi = function(img) {
  var imgLi = document.createElement("li");
  imgLi.appendChild(img);
  return imgLi;
}

var createCat = function() {
  var cat = document.createElement("ul");
  cat.classList.add("cat");
  return cat;
}

var appendElements = function(cat, name, faveFood, imgLi) {
  cat.appendChild(name);
  cat.appendChild(faveFood);
  cat.appendChild(imgLi);

  var cats = document.querySelector("#cats");
  cats.appendChild(cat);
}

var addCat = function(name, faveFood, imgUrl) {
  var name = createName(name);
  var faveFood = createFaveFood(faveFood);
  var img = createImg(imgUrl);
  var imgLi = createImgLi(img);
  var cat = createCat();

  appendElements(cat, name, faveFood, imgLi)
}

var app = function () {

  addCat("reeceCat", "monsterMunch", "http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg");

  // var name = document.createElement("li");
  // name.innerText = "Name: Boba";

  // var faveFood = document.createElement("li");
  // faveFood.innerText = "Favourite Food: Sock fluff";

  // var img = document.createElement("img");
  // img.width = 500;
  // img.src = "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg";

  // var imgLi = document.createElement("li");
  // imgLi.appendChild(img);

  // var cat = document.createElement("ul");
  // cat.classList.add("cat");
  // cat.appendChild(name);
  // cat.appendChild(faveFood);
  // cat.appendChild(imgLi);

  // var cats = document.querySelector("#cats");
  // cats.appendChild(cat);

}

window.addEventListener('load', app);