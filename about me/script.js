// hier komt je code
// console.log("Hallo wereld!");

let knopje = document.querySelector("div");
let menu = document.querySelector("#menu");
let vakjes = document.querySelectorAll(".vakje");


knopje.addEventListener("click",verschijn);

function verschijn() {
  console.log("hetwerkt");
   let i = 0;

   if( vakjes[i].classList.contains("begin")) {

     while (i < vakjes.length){
       vakjes[i].classList.remove("begin");
       vakjes[i].classList.add("weg");
       console.log("hetwerkt");
       i++;
       menu.classList.remove("zindex");
       menu.classList.add("zindexweg");
        }



   } else {

   while (i < vakjes.length){
     vakjes[i].classList.remove("weg");
     vakjes[i].classList.add("begin");
     console.log("hetwerkt");
     i++;
     menu.classList.add("zindex");
     menu.classList.remove("zindexweg");
      }

   }

}

/*Scroll */

let een = document.querySelector(".een");
let twee = document.querySelector(".twee");
let drie = document.querySelector(".drie");

window.addEventListener("scroll", function() {
      if (window.pageYOffset > 400) {
            een.classList.remove("onzichtbaar");
      } else {
            een.classList.add("onzichtbaar");
      }
});

window.addEventListener("scroll", function() {
      if (window.pageYOffset > 780) {
            twee.classList.remove("onzichtbaar");
      } else {
            twee.classList.add("onzichtbaar");
      }
});

window.addEventListener("scroll", function() {
      if (window.pageYOffset > 1100) {
            drie.classList.remove("onzichtbaar");
      } else {
            drie.classList.add("onzichtbaar");
      }
});
