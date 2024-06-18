const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

        while (true) {
            let numero = prompt("Introduce un número de DNI (entre 0 y 99999999) o pulsa Cancelar para terminar:");

            
            if (numero === null) {
                break;
            }

            // Convierte la entrada en un número
            let numeroDNI = parseInt(numero);

            // Verifica si la entrada es un número válido
            if (isNaN(numeroDNI) || numeroDNI < 0 || numeroDNI > 99999999) {
                alert("Eso no es un número válido de DNI. Por favor, introduce un número entre 0 y 99999999.");
            } else {
                // Calcula la letra del DNI
                let resto = numeroDNI % 23;
                let letra = letrasDNI[resto];
                

                alert("INPUT:  " + numeroDNI + " OUTPUT: " + "'" + letra + "'");
            }
            
            // document.write(`Input ${numeroDNI} Output ${letra}`);

        }
