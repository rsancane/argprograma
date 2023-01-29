
 /* let contador= 1
 function mostrarDatos() {
     if (contador== 1) {
   document.getElementById("datoscont").innerHTML =  "email: rsancane@gmail.com //Tel: 11-2403-5088";
   contador= 0 
 } else {
     document.getElementById("datoscont").innerHTML = " "
     contador= 1;
 }
 } **/

 const btn = document.querySelector('#boton') 
 const divinvis = document.querySelector("#datoscont")
 btn.addEventListener("click", function() {
  if(divinvis.style.display === "block") {
     divinvis.style.display = "none"
  } else {
     divinvis.style.display = "block";
  }
 })