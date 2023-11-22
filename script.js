// Referenciar os espaços de resultado
const resultado01 = document.getElementById('res01');
const resultado02 = document.getElementById('res02');
const resultado03 = document.getElementById('res03');
const resultado04 = document.getElementById('res04');
const resultado05 = document.getElementById('res05');
const resultado06 = document.getElementById('res06');
const resultado07 = document.getElementById('res07');
const resultado08 = document.getElementById('res08');
const resultado09 = document.getElementById('res09');
const resultado10 = document.getElementById('res10');

// Ativar cálculo da tabuada
const calculoBotao = document.getElementById('calcular');
calculoBotao.addEventListener('click', calcularTabuada);

//Executar o aplicativo
function calcularTabuada() {
    // Obtendo o input do usuário
    const numeroCalculo = document.getElementById('numberInput').value;
    
    // Calculando resultados
    const x1 = Number(numeroCalculo) * 1;
    const x2 = Number(numeroCalculo) * 2;
    const x3 = Number(numeroCalculo) * 3;
    const x4 = Number(numeroCalculo) * 4;
    const x5 = Number(numeroCalculo) * 5;
    const x6 = Number(numeroCalculo) * 6;
    const x7 = Number(numeroCalculo) * 7;
    const x8 = Number(numeroCalculo) * 8;
    const x9 = Number(numeroCalculo) * 9;
    const x10 = Number(numeroCalculo) * 10;

    // Registrar resultados no grid
    resultado01.innerText = x1.toLocaleString();
    resultado02.innerText = x2.toLocaleString();
    resultado03.innerText = x3.toLocaleString();
    resultado04.innerText = x4.toLocaleString();
    resultado05.innerText = x5.toLocaleString();
    resultado06.innerText = x6.toLocaleString();
    resultado07.innerText = x7.toLocaleString();
    resultado08.innerText = x8.toLocaleString();
    resultado09.innerText = x9.toLocaleString();
    resultado10.innerText = x10.toLocaleString();
}

// Limpar tabuada
const resetBotao = document.getElementById('resetButton');
resetBotao.addEventListener('click', resetTabuada);
function resetTabuada() {
    resultado01.innerText = '';
    resultado02.innerText = '';
    resultado03.innerText = '';
    resultado04.innerText = '';
    resultado05.innerText = '';
    resultado06.innerText = '';
    resultado07.innerText = '';
    resultado08.innerText = '';
    resultado09.innerText = '';
    resultado10.innerText = '';
}