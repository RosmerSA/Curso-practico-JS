// Acá tenemos la funcion que calcula la media aritmetica o promedio.

// function calcularMediaAritmetica(lista) {
//     let sumaLista = 0;

//     for(let i = 0; i < lista.length; i ++) {
//         sumaLista = sumaLista + lista[i];
//     }

//     const promedioLista = sumaLista / lista.length;

//     return promedioLista;
// }

function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

//Acá tenemos la función para calcular la media.

function esPar(numerito) {
    if(numerito %  2 === 0) {
        return true;
    } else {
        return false;
    }
}


function calcularMediana(lista) {
    let mitadLista = Math.floor(lista.length / 2);
    let mediana;
    
    listaOrdenada = lista.sort(function(a, b) {
        return a - b;
    });

    if (esPar(listaOrdenada.length)) {

        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista]; 
        
        mediana = (elemento1 + elemento2) / 2;

    } else {
        mediana = lista[mitadLista]; 
    }

    return mediana;   
}

// Calcular el Moda en JavaScript

const lista1 = [
    1,
    1,
    2,
    3,
    1,
    5,
    7,
    7,
    9,
    6,
    6,
    1,
    3,
    2,
    2
];

function encontrarModa (lista) {

	const listaCount = {};
	
	lista.map(
		function(elemento) {
			if (listaCount[elemento]) {
				listaCount[elemento] += 1;
			} else {
				listaCount[elemento] = 1;
			}
		}
	);
	
	const listaArray = Object.entries(listaCount).sort(
		function (elementoA, elementoB) {
			return elementoA[1] - elementoB[1];
		}
	);
	
	const moda = listaArray[listaArray.length - 1];
	
	return moda;
}


// Reto encontrar el rango medio.

/*
Para realizar esta función tenemos que organizar con .sort() el arrays de números que recibamos,
luego tomamos el valor más bajo y el valor más alto y lo dividimos entre 2.

trataremos de mostrar en la web "el numero de menor valor", "el número de mayor valor" y tambien
y como es de esperar el rango medio.
*/

function calcularRangoMedio (lista) {
    let valorMenor;
    let valorMayor;
    let rangoMedio;

    const arrayOrdenado = lista.sort( function(a, b) {
        return a - b;
    });

    valorMenor = "El número de menor valor es: " + arrayOrdenado[0];
    valorMayor = "El número de mayor valor es: " + arrayOrdenado[arrayOrdenado.length - 1];
    rangoMedio = "El rango medio es: " + ((arrayOrdenado[0] +  arrayOrdenado[arrayOrdenado.length - 1]) / 2);

    return [valorMenor, valorMayor, rangoMedio];
};