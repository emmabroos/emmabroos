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



let knop = document.querySelector("#knop");
let form = document.querySelector("form");
let antwoord = document.querySelector("#antwoord");

knop.addEventListener("click",verdwijn);

function verdwijn() {
  form.classList.add("onzichtbaar");
  antwoord.classList.remove("onzichtbaar");  
}
