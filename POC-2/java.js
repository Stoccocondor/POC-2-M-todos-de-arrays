
// Método sort
const numerosParaOrdenar = [5, 2, 9, 1, 5, 6];
const numerosOrdenados = numerosParaOrdenar.slice().sort((a, b) => a - b);
document.getElementById("sortResult").innerText = `Números ordenados: ${numerosOrdenados}`;

// Método filter
const numerosParaFiltrar = [1, 2, 3, 4, 5, 6];
const numerosPares = numerosParaFiltrar.filter(num => num % 2 === 0);
document.getElementById("filterResult").innerText = `Números pares: ${numerosPares}`;

// Método map
const numerosParaDobrar = [1, 2, 3, 4, 5];
const numerosDobrados = numerosParaDobrar.map(num => num * 2);
document.getElementById("mapResult").innerText = `Números dobrados: ${numerosDobrados}`;

// Método reduce
const numerosParaSomar = [1, 2, 3, 4, 5];
const soma = numerosParaSomar.reduce((acc, curr) => acc + curr, 0);
document.getElementById("reduceResult").innerText = `Soma dos números: ${soma}`;

// Operador spread
const arrayOriginal = [1, 2, 3];
const arrayCopiado = [...arrayOriginal];
document.getElementById("spreadResult").innerText = `Array copiado: ${arrayCopiado}`;
