let numero = Number(prompt("Ingrese el número"));


switch (true) {
  case numero % 2 == 0: 
    document.write(`${numero} es divisible por 2`);
  break;
  case numero % 3 == 0:
    document.write(`${numero} es divisible por 3`);
    break;

//   case numero % 3  == 0:
//     document.write(`${numero} es divisible por 3`);
// V break;
  case numero % 5 == 0:
    document.write(`${numero} es divisible por 5`);
  break;
  case numero % 7 == 0:
        document.write(`${numero} es divisible por 7`);
  break;
        
  default:
    document.write(`${numero} no es divisible por 2,3, 5 ni 7`);
    
  break;
}

  
  
  
  
  