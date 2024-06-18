let nota = parseInt(prompt("Ingrese la nota de 0 a 10:"))

if  (nota >= "0" && nota <= 10){ 
    
  
if (nota <= 2){
    alert("Muy deficiente")
}else if(nota <= 4){
    alert("Insuficiente")
}else if(nota <= 6){
    alert("suficiente")
}else if(nota == 7){
    alert("Bien")
}else if(nota <= 9){
    alert("Notable")
}else if(nota == 10){
    alert("sobresaliente")
}
}else{
document.write("Debe ingresar un número entre 0 y 10");
}
