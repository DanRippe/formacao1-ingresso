let spanQtdeInferior = document.getElementById('qtd-inferior');
let spanQtdeSuperior = document.getElementById('qtd-superior');
let spanQtdePista = document.getElementById('qtd-pista');

let qtdeInferior = parseInt(spanQtdeInferior.innerText);
let qtdeSuperior = parseInt(spanQtdeSuperior.innerText);
let qtdePista = parseInt(spanQtdePista.innerText);

function comprar() {
    
    let tipoIngresso = document.getElementById('tipo-ingresso').value;    
    let quantidade = parseInt(document.getElementById('qtd').value);        

    if (tipoIngresso == 'inferior') {
        if (qtdeInferior >= quantidade){
            qtdeInferior = qtdeInferior - quantidade;
        } else {
            alert('Não é possível comprar essa quantidade de ingresso(s) para Cadeira Inferior!');
        }        
    }

    if (tipoIngresso == 'superior') {
        if (qtdeSuperior >= quantidade){
            qtdeSuperior = qtdeSuperior - quantidade;
        } else {
            alert('Não é possível comprar essa quantidade de ingresso(s) para Cadeira Superior!');
        }        
    }

    if (tipoIngresso == 'pista') {
        if (qtdePista >= quantidade){
            qtdePista = qtdePista - quantidade;
        } else {
            alert('Não é possível comprar essa quantidade de ingresso(s) para Pista!');
        }        
    }

    spanQtdeInferior.innerHTML = `<span id="qtd-inferior">${qtdeInferior}</span>`;
    spanQtdeSuperior.innerHTML = `<span id="qtd-superior">${qtdeSuperior}</span>`;
    spanQtdePista.innerHTML = `<span id="qtd-pista">${qtdePista}</span>`;
}