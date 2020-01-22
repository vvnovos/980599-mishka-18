var navMenu = document.querySelector(".nav-list");
var buttonMenu = document.querySelector(".page-header__nav-button");
var mql = window.matchMedia("(min-width: 768px)")

navMenu.classList.add("visually-hidden");
buttonMenu.classList.remove("visually-hidden");
buttonMenu.classList.remove("page-header__nav-button--closed");

buttonMenu.addEventListener("click", function(evt) {
navMenu.classList.toggle("visually-hidden");
buttonMenu.classList.toggle("page-header__nav-button--closed");
});

mediaqueryresponse(mql);
mql.addListener(mediaqueryresponse);

function mediaqueryresponse(mql) {
  if (mql.matches){
    navMenu.classList.remove("visually-hidden");
  }else{
    navMenu.classList.add("visually-hidden");
  }
}
//http://www.javascriptkit.com/dhtmltutors/cssmediaqueries4.shtml
