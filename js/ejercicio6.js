let fruta = prompt("Ingrese el nombre de la fruta: ")

if (fruta === "" || fruta === null) {
    console.error("Debe ingresar un nombre de fruta válida");
  } else {
    switch (fruta.toLowerCase()) {
      case "manzana":
        
        document.write(`El precio de ${fruta} es $1000`);
        break;
      case "banana":
        document.write(`El precio de ${fruta} es $1200`);
        break;
      case "pera":
        document.write(`El precio de ${fruta} es $1800`);
        break;
      case "mandarina":
        document.write(`El precio de ${fruta} es $9000`);
        break;

      default:
        alert("No tenemos la fruta que solicitó");
        break;
    }
  }
