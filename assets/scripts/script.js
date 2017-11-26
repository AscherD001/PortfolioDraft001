var title = document.getElementById("title");
var nav = document.getElementById("nav");
var bodyWrap3 = document.getElementById("bodyWrap3");
var wide80 = document.getElementsByClassName("wide80");
var heading = document.getElementsByClassName("heading");
var portfolio = document.getElementsByClassName("portfolioElement");
var links = document.getElementsByClassName("portfolioAnchor");

var git = document.getElementById("git");
var linkedin = document.getElementById("linkedin");
var footer = document.getElementById("footer");

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
var titleStart = window.innerHeight * 0.4;
var titleHeight = titleStart;
title.style.top = titleHeight + "px";

var resize = function() {
  footer.style.left = ( bodyWrap3.clientWidth / 2 - footer.clientWidth / 2 ) + "px";
  git.style.left = ( (bodyWrap3.clientWidth / 2 - git.clientWidth / 2 ) - 60) + "px";
  linkedin.style.left = ( (bodyWrap3.clientWidth / 2 - linkedin.clientWidth / 2 ) + 60) + "px";

  if(window.innerWidth >= 640 && window.innerWidth < 1200) {
    footer.style.fontSize = "5vw";
    nav.style.fontSize = "5vw";
    nav.style.height = "5vw";
    nav.style.lineHeight = "7vw";
  } else if(window.innerWidth < 640) {
    footer.style.fontSize = "34px";
    nav.style.fontSize = "34px";
    nav.style.height = "34px";
    nav.style.lineHeight = "34px";
  } else if(window.innerWidth >= 1200) {
    footer.style.fontSize = "50px";
  }

  for(var i = 0; i < wide80.length; i ++) {
    if(window.innerWidth <= 980) {
      wide80[i].style.fontSize = "4.8vw";
    } else {
      wide80[i].style.fontSize = "48px";
    }
  }
  for(var i = 0; i < heading.length; i ++) {
    if(window.innerWidth <= 980) {
      heading[i].style.fontSize = "10vw";
    } else {
      heading[i].style.fontSize = "100px";
    }
  }
  for(var i = 0; i < links.length; i ++) {
    if(window.innerWidth <= 980) {
      links[i].style.fontSize = "4vw";
    } else {
      links[i].style.fontSize = "40px";
    }
  }
  for(var i = 0; i < portfolio.length; i ++) {
    portfolio[i].style.width = "22vw";
    portfolio[i].style.margin = "0 1vw 0 1vw";
  }
}

window.onscroll = function() {
  var init = false;

  titleHeight = titleStart + (window.scrollY * 0.45);
  title.style.top = titleHeight + "px";

  if(window.scrollY >= window.innerHeight * 0.9) {
    nav.style.top = "0px";
    title.style.display = "none";
  } else {
    nav.style.top = "-100px";
    title.style.display = "";
  }
  if(!init) {
    resize();
    init = true;
  }
}


document.getElementById("git").onmouseover = function() {
  document.getElementsByClassName("git")[0].style.fill = "#FFA500";
}
document.getElementById("git").onmouseout = function() {
  document.getElementsByClassName("git")[0].style.fill = "lightgrey";
}
document.getElementById("linkedin").onmouseover = function() {
  document.getElementsByClassName("linkedin")[0].style.fill = "#0077B5";
}
document.getElementById("linkedin").onmouseout = function() {
  document.getElementsByClassName("linkedin")[0].style.fill = "lightgrey";
}
window.onresize = resize;