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

  addCat("Boba", "Sock fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");

  addCat("Barnaby", "Tuna", "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg");

  addCat("Max", "Whiskas Temptations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg");

  addCat("reeceCat", "monsterMunch", "http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg");

}

window.addEventListener('load', app);