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

/* Poster uitschuiven */

let project = document.querySelector(".pijl");
let posters = document.querySelector(".posters");
project.addEventListener("click", function() {
  posters.classList.toggle("zichtbaar");
})


/* Scrol */




let broos = document.querySelector(".Broos");
let pijlscroll = document.querySelector(".pijlscroll");

window.addEventListener("scroll", function() {
      if (window.pageYOffset > 550) {
            broos.classList.add("onzichtbaar");
            pijlscroll.classList.add("onzichtbaar");
      } else {
            broos.classList.remove("onzichtbaar");
            pijlscroll.classList.remove("onzichtbaar");
      }
});
