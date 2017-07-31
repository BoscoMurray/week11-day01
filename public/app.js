var app = function () {

  var name = document.createElement("li");
  name.innerText = "Name: Boba";

  var faveFood = document.createElement("li");
  faveFood.innerText = "Favourite Food: Sock fluff";

  var img = document.createElement("img");
  img.width = 500;
  img.src = "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg";

  var imgLi = document.createElement("li");
  imgLi.appendChild(img);

  var cat = document.createElement("ul");
  cat.classList.add("cat");
  cat.appendChild(name);
  cat.appendChild(faveFood);
  cat.appendChild(imgLi);

  var cats = document.querySelector("#cats");
  cats.appendChild(cat);

}

window.addEventListener('load', app);