
const calcular = document.getElementById('calcular');
 

function imc(){
    const name = document.getElementById('name').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    if(name !== '' && altura!=='' && peso!== ''){
        const valorIMC = (peso/(altura*altura)).toFixed(1);
        let classicafacao ='';
        if(valorIMC < 18.5){
            classicafacao = 'abaixo do peso.';
            
        }else if(valorIMC < 25){
            classicafacao ='Com peso ideal. Parabéns';


        }else if( valorIMC < 30){
            classicafacao =' Levemente acimda do peso.';
        }else if( valorIMC < 35){
            classicafacao='Você está com obesidade grau 1.';
        }else if(valorIMC <40){
            classicafacao='Obesidade grau 2';

        }else{
            classicafacao='Obesidade grau 3. Cuidado!!!';
        }
        resultado.textContent = `${name} seu IMC é ${valorIMC} e você está ${classicafacao}`;
    }else{
    resultado.textContent = 'Preencha todos os campos';
    }

}

calcular.addEventListener('click', imc);