//selecionando os elementos
const buttonBackId = document.getElementById("back-btn");
const buttonBack = document.getElementsByClassName("button-back");
const backBtnCorrente = document.getElementById("back-btn-corrente");
const backBtnConsumo = document.getElementById("back-btn-consumo");
const backBtnTensao = document.getElementById("back-btn-tensao");
const backBtnDistancia = document.getElementById("back-btn-distancia");
const backBtnDisjuntor = document.getElementById("back-btn-disjuntor");
const calcPotencia = document.getElementById("calc-potencia");
const calcCorrente = document.getElementById("calc-corrente");
const calcConsumo = document.getElementById("calc-consumo");
const calcTensao = document.getElementById("calc-tensao");
const calcDistancia = document.getElementById("calc-distancia");
const calcDisjuntor = document.getElementById("calc-disjuntor");
const overlay = document.getElementById("overlay");
const modalPotencia = document.getElementById("modal-potencia");
const modalConsumo = document.getElementById("modal-consumo");
const modalTensao = document.getElementById("modal-tensao");
const modalCorrente = document.getElementById("modal-corrente");
const modalDistancia = document.getElementById("modal-distancia");
const modalDisjuntor = document.getElementById("modal-disjuntor");
const pagesForm = document.getElementById("pages-form");



//Eventos dos botões para entrar no calculo desejado
calcPotencia.addEventListener("click", function(){
    //pagesForm.style.display = "none";    
    modalPotencia.style.display = "flex"; 
    //overlay.style.display ="block"; 
});

calcCorrente.addEventListener("click", function() {

    //pagesForm.style.display = "none";
    modalCorrente.style.display = "flex";
});

calcConsumo.addEventListener("click", function() {

    //pagesForm.style.display = "none";
    modalConsumo.style.display = "flex";
});

calcTensao.addEventListener("click", function() {
    //pagesForm.style.display = "none";
    modalTensao.style.display = "flex";
});

calcDistancia.addEventListener("click", function() {
    //pagesForm.style.display ="none";
    modalDistancia.style.display = "flex";
});

calcDisjuntor.addEventListener("click", () => {
    //pagesForm.style.display = "none";
    modalDisjuntor.style.display = "flex";
});

//botão de voltar do modal
buttonBackId.addEventListener('click', () => {
    modalPotencia.style.display = "none";
    pagesForm.style.display = 'flex';
});

backBtnCorrente.addEventListener('click', () => {
    modalCorrente.style.display = "none";
    pagesForm.style.display = 'flex';
});

backBtnConsumo.addEventListener('click', () => {
    modalConsumo.style.display = "none";
    pagesForm.style.display = 'flex';
});

backBtnTensao.addEventListener('click', () => {
    modalTensao.style.display = "none";
    pagesForm.style.display = 'flex';
});

backBtnDistancia.addEventListener('click', () => {
    modalDistancia.style.display = "none";
    pagesForm.style.display = 'flex';
});

backBtnDisjuntor.addEventListener('click', () => {
    modalDisjuntor.style.display = "none";
    pagesForm.style.display = 'flex';
});

//calculos 
const buttonPotencia = document.getElementById("button-potencia");
const buttonCorrente = document.getElementById("button-corrente");
const buttonConsumo = document.getElementById("button-consumo");


//Potência
let calculoPotencia;

buttonPotencia.addEventListener("click", function() {
    const resultPotencia = document.getElementById("result-potencia");
    const potenciaTensao = parseFloat(document.getElementById("potencia-tensao").value);
    const potenciaCorrente = parseFloat(document.getElementById("potencia-corrente").value);

    if(potenciaTensao === 0 || potenciaCorrente === 0 || isNaN(potenciaTensao, potenciaCorrente)) {
        alert("Informar valor válidos");        
        return;
    }

    calculoPotencia =  potenciaTensao * potenciaCorrente;
    resultPotencia.innerText = `Potência ${calculoPotencia} WATTS`; 
      
});

//CORRENTE
let calculoCorrente;

buttonCorrente.addEventListener("click", function() {
    const correntePotencia = parseFloat(document.getElementById("corrente-potencia").value);
    const correnteTensao = parseFloat(document.getElementById("corrente-tensao").value);
    const resultCorrente = document.getElementById("result-corrente");

    if(correntePotencia === 0 || correnteTensao ===0 || isNaN(correntePotencia, correnteTensao)){
        alert("Informar valor válido");
        return;
    }

    calculoCorrente = correntePotencia / correnteTensao;
    resultCorrente.innerText = `Corrente ${calculoCorrente.toFixed(2)} AMPERES` 
});

//CONSUMO
let calculoConsumo;
let hora = 24;
let kwh = 1000;
let valor = 0.95;

buttonConsumo.addEventListener("click", function(){
    const consumoPotencia = document.getElementById("consumo-potencia").value;
    const consumoDias = document.getElementById("consumo-dias").value;
    const resultConsumo = document.getElementById("result-consumo");

    if(consumoPotencia === 0 || consumoDias === 0 || isNaN(consumoPotencia, consumoDias)){
        alert("Informar valor válido");
        return;
    }

    calculoConsumo = (consumoPotencia * hora) / kwh * consumoDias * valor;
    resultConsumo.innerText = `Consumo R$${calculoConsumo.toFixed(2)}`;
});

//TENSÃO
let calculoTensao;
const buttonTensao = document.getElementById("button-tensao");

buttonTensao.addEventListener("click", function(){
    const tensaoPotencia = parseFloat(document.getElementById("tensao-potencia").value);
    const tensaoCorrente = parseFloat(document.getElementById("tensao-corrente").value);
    const resultTensao = document.getElementById("result-tensao");

    if(tensaoPotencia ===0 || tensaoCorrente === 0 || isNaN(tensaoPotencia, tensaoCorrente)){
        alert("Informar valor válido")
    }

    calculoTensao = tensaoPotencia / tensaoCorrente;
    resultTensao.innerText = `Tensão ${calculoTensao} VOLTS`;    
});

//DISTÂNCIA
const buttonDistancia = document.getElementById("button-distancia");
let calculoDistancia;
let condutividade = 56;
let quedaTensão = 0.04;

buttonDistancia.addEventListener("click", function(){
    const distanciaMetro = parseFloat(document.getElementById("distancia-metro").value);
    const distanciaTensao = parseFloat(document.getElementById("disntancia-tensao").value);
    const distanciaCorrente = parseFloat(document.getElementById("distancia-corrente").value);
    const resultDistancia = document.getElementById("result-distancia");


    if(distanciaMetro === 0 || distanciaTensao === 0 || distanciaCorrente === 0 || isNaN(distanciaMetro, distanciaTensao, distanciaCorrente)){
        alert("Informar valor válido")
    }

    calculoDistancia = (2 * distanciaMetro * distanciaCorrente) / (condutividade * distanciaTensao * quedaTensão);
    resultDistancia.innerText = `Bitola do cabo ${calculoDistancia.toFixed(2)}mm²`;     
});

//CABO
const buttonCabo = document.getElementById("button-cabo");

buttonCabo.addEventListener("click", function(){
    const caboCorrente = parseFloat(document.getElementById("cabo-corrente").value);
    const resultCabo = document.getElementById("result-cabo");

    if(caboCorrente <= 15.5){
        resultCabo.innerText = "Bitola do cabo é 1,5mm²"
    } else if( caboCorrente > 15.5 && caboCorrente <= 21){
        resultCabo.innerText = "Bitola do cabo é 2,5mm²"
    } else if(caboCorrente > 21 && caboCorrente <=28){
        resultCabo.innerText = "Bitola do cabo é 4mm²"
    } else if(caboCorrente >28 && caboCorrente <=36){
        resultCabo.innerText = "Bitola do cabo é 6mm²"        
    } else if(caboCorrente >36 && caboCorrente <=50){
        resultCabo.innerText = "Bitola do cabo é 10mm²"
    } else if(caboCorrente >50 && caboCorrente <=68){
        resultCabo.innerText = "Bitola do cabo é 16mm²"
    } else if(caboCorrente >68 && caboCorrente <=89){
        resultCabo.innerText = "Bitola do cabo é 25mm²"
    } else if(caboCorrente >89 && caboCorrente <=110){
        resultCabo.innerText = "Bitola do cabo é 35mm²"
    } else if(caboCorrente >110 && caboCorrente <=134){
        resultCabo.innerText = "Bitola do cabo é 50mm²"
    } else if(caboCorrente >134 && caboCorrente <=171){
        resultCabo.innerText = "Bitola do cabo é 70mm²"
     } else if(caboCorrente >171 && caboCorrente <=207){
        resultCabo.innerText = "Bitola do cabo é 95mm²"
    } else if(caboCorrente >207 && caboCorrente <=239){
        resultCabo.innerText = "Bitola do cabo é 120mm²"
    } else if(caboCorrente >239 && caboCorrente <=275){
        resultCabo.innerText = "Bitola do cabo é 150mm²"
    } else if(caboCorrente >275 && caboCorrente <=314){
        resultCabo.innerText = "Bitola do cabo é 185mm²"
    } else if(caboCorrente >314 && caboCorrente <=370){
        resultCabo.innerText = "Bitola do cabo é 240mm²"
    } else if(caboCorrente >370 && caboCorrente <=426){
        resultCabo.innerText = "Bitola do cabo é 300mm²"
    } else if(caboCorrente >426 && caboCorrente <=510){
        resultCabo.innerText = "Bitola do cabo é 400mm²"
    } else if(caboCorrente >510 && caboCorrente <=587){
        resultCabo.innerText = "Bitola do cabo é 500mm²"
    } 
});









