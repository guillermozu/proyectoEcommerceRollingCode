let numero = "";
let suma = "";

do {
    
  numero = parseInt(prompt("Ingrese un numero para sumar"));
  if (!isNaN(numero))
    if (numero){
        suma += numero 
    }else{
    document.write("debe ingresar un numero")
}
  }while (numero);

// document.write(numero);

document.write(suma);