// Funciones Helpers

function esPar (numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

// Función para calcular mediana

const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function medianaDeSalarios (lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = (personaMitad1 + personaMitad2) / 2;

        return mediana;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
};

const medianaGeneral = medianaDeSalarios(salariosSorted);

// Función para calcular el TOP 10 salarios 

/*
function top10Mediana (lista) {

    // Esta es la manera de sacar el 10% de la lista
    const spliceCorte = Math.round(lista.length / 10);
    
    // Acá ordenamos la lista en reversa para luego sacar los primeros 10 (top 10 salarios)
    const topSalariosSorted = lista.sort(
        function (a, b) {
            return b - a;
        }
    );

    // 
    const top10 = topSalariosSorted.splice(0, spliceCorte);

    return medianaDeSalarios(top10);
}

*/

// solución de la clase

const spliceStart = (salariosSorted.length * 90) / 100;
const spliceEnd = salariosSorted.length - spliceStart;

const salariosColTop10 = salariosSorted.splice(spliceStart, spliceEnd);

const medianaTop10 = medianaDeSalarios(salariosColTop10);

// llamando los resultados de nuestras medianas

console.log({
    medianaGeneral,
    medianaTop10
});