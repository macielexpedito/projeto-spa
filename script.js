
const elemento = {

    aside: document.querySelector('aside'),
    sections: document.querySelectorAll('section')

}

console.log(elemento.aside);

elemento.aside.addEventListener('click', (e)=>{

    e.preventDefault();

    if(e.target.tagName === 'BUTTON'){

        console.log(e.target.id);

        displayController(e.target.id);

    }

});

function displayController(id){

    elemento.sections.forEach(section => {

        section.classList.add('painel');

        if(section.classList.contains(id)){

            section.classList.remove('painel');

        }

    });
}

elemento.sections[0].classList.add('moeda');
elemento.sections[1].classList.add('imc');
elemento.sections[2].classList.add('temperatura');
elemento.sections[3].classList.add('velocidade');
elemento.sections[4].classList.add('massa');
elemento.sections[5].classList.add('regraDeTres');

document.getElementById('converter').addEventListener('click', async ()=>{ 

    const valor = Number(document.getElementById('valor').value);

    const tipo = document.getElementById('tipo').value;

    const resultado = document.querySelectorAll('.resultado')[0];

    try{

        const resposta = await fetch(
        'https://economia.awesomeapi.com.br/json/last/USD-BRL'
        );

        const dados = await resposta.json();

        const cotacao = Number(dados.USDBRL.bid);

        if(tipo === 'usd'){

            resultado.textContent =
            'R$ ' + (valor * cotacao).toFixed(2);

        }

        else{

            resultado.textContent =
            'US$ ' + (valor / cotacao).toFixed(2);

        }

    }

    catch{

        resultado.textContent = 'Erro na API';

    }

});

function calcularIMC(peso, altura) {
    return peso / (altura ** 2);
}

// Classifica o IMC com base no gênero
function classificarIMC(imc, genero) {

    if (genero === "homem") {

        if (imc < 18.5) {
            return "Abaixo do peso";
        } else if (imc < 25) {
            return "Normal";
        } else if (imc < 30) {
            return "Sobrepeso";
        } else {
            return "Obesidade";
        }

    } else {

        if (imc < 18.5) {
            return "Abaixo do peso";
        } else if (imc < 24) {
            return "Normal";
        } else if (imc < 29) {
            return "Sobrepeso";
        } else {
            return "Obesidade";
        }

    }
}

function controllerIMC() {

    
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
    });

    const btnCalcular = document.getElementById("calcular");
        
    btnCalcular.addEventListener("click", () => {

        const peso = parseFloat(document.getElementById("peso").value);
        const altura = parseFloat(document.getElementById("altura").value);
        const genero = document.getElementById("genero").value;

        

        const imc = calcularIMC(peso, altura);
        
        const resultado = btnCalcular.parentElement.querySelector(".resultado");


        resultado.innerHTML = `
            Gênero: ${genero}<br>
            IMC: ${imc.toFixed(2)}
            Classificação: ${classificarIMC(imc, genero)}
        `;
    });
}

controllerIMC();

const tipoTemp = document.getElementById("tipoTemp");
const resultadoTemp = document.querySelectorAll(".resultado")[2];
const btnConverter = document.getElementById("converterTemp");

function converterTemperatura() {

    const valor = parseFloat(document.getElementById("temp").value);

    if (isNaN(valor)) {
        resultadoTemp.textContent = "Digite uma temperatura válida.";
        return;
    }

    if (tipoTemp.value === "celsius") {

        const tempF = (valor * 9 / 5) + 32;

        resultadoTemp.textContent =
            `${valor.toFixed(2)} °C é igual a ${tempF.toFixed(2)} °F`;

    } else {

        const tempC = (valor - 32) * 5 / 9;

        resultadoTemp.textContent =
            `${valor.toFixed(2)} °F é igual a ${tempC.toFixed(2)} °C`;
    }
}

function controllerTemp() {

    btnConverter.addEventListener("click", function (e) {
        e.preventDefault();
        converterTemperatura();
    });

}

controllerTemp();

const tipoVel = document.getElementById("tipoVel");
const resultadoVel = document.querySelectorAll(".resultado")[3];
const btnConverterVel = document.getElementById("converterVel");

function converterVelocidade() {

const valor = parseFloat(document.getElementById("km").value);

if (isNaN(valor)) {
resultadoVel.textContent = "Digite uma velocidade válida.";
return;
}

if (tipoVel.value === "kmhToMs") {

const velMilhas = valor * 0.621371;

resultadoVel.textContent =
`${valor.toFixed(2)} km/h é igual a ${velMilhas.toFixed(2)} mph`;

} else {

const velKm = valor / 0.621371;

resultadoVel.textContent =
`${valor.toFixed(2)} mph é igual a ${velKm.toFixed(2)} km/h`;
}
}

function controllerVel() {

btnConverterVel.addEventListener("click", function (e) {
e.preventDefault();
converterVelocidade();
});

}

controllerVel();

const tipoPeso = document.getElementById("tipoPeso");
const resultadoPeso = document.querySelectorAll(".resultado")[4];
const btnConverterPeso = document.getElementById("converterPeso");

function converterMassa() {

const valor = parseFloat(document.getElementById("Peso").value);

if (isNaN(valor)) {
resultadoPeso.textContent = "Digite um peso válido.";
return;
}  
if (tipoPeso.value === "kgToLb") {

const pesoLibra = valor * 2.20462;

resultadoPeso.textContent =
`${valor.toFixed(2)} kg é igual a ${pesoLibra.toFixed(2)} lbs`;

} else {

const pesoKg = valor / 2.20462;

resultadoPeso.textContent =
`${valor.toFixed(2)} lbs é igual a ${pesoKg.toFixed(2)} kg`;
}
}

function controllerPeso() {

btnConverterPeso.addEventListener("click", function (e) {
e.preventDefault();
converterMassa();
});

}

controllerPeso();

const btnCalcularRegra = document.getElementById("calcularRegra");

btnCalcularRegra.addEventListener("click", calcular);

function calcular() {
const a = parseFloat(document.getElementById("a").value);
const b = parseFloat(document.getElementById("b").value);
const c = parseFloat(document.getElementById("c").value);

const resultado = (b * c) / a;

const resultados = document.querySelectorAll(".resultado");

resultados[5].textContent = "Resultado: " + resultado;
}







