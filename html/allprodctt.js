const model= document.querySelector(".model");
const modelcon= document.querySelector(".modal-con");
let y = 0 ;
let cmp = 0 ;
document.getElementById("seeDetailsProductsss").addEventListener("click", function () {
  model.style.display = "flex";
  modelcon.style.display = "flex";
  y = 1 ;
});

modelcon.addEventListener("click",function(){
  y = 0
    
 })
 model.addEventListener("click",function(){

  if (y == 1) {
    model.style.display = "none";
  }
 })


