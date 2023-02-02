function meuEscopo(){

    const form = document.querySelector('.formulario')
    
    
    form.addEventListener('submit', function(evento) { //pode colocar tb event ou e

        evento.preventDefault();
        const inputPeso = document.querySelector('#peso') // pode usar tbm o form. ou até msm o evento.target
        const inputAltura = document.querySelector('#altura')
        
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if(!peso){
            setResultado('Peso Inválido', false)
            return;
        }

        if(!altura){
            setResultado('Altura Inválida', false)
            return;
        }

        const imc = getImc(peso, altura);
        const nivelImc = getNivelImc(imc)
        const msg = `Seu IMC é ${imc} (${nivelImc})`;
        setResultado(msg, true)
    })

    function getImc(peso, altura){
        const imc = peso / altura ** 2;
        return imc.toFixed(2)

    }

    function getNivelImc(imc){
        const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if(imc > 39.9) {
            return nivel[5]
        }
        if(imc > 34.9) {
            return nivel[4]
        }
        if(imc > 29.9) {
            return nivel[3]
        }
        if(imc > 24.9) {
            return nivel[2]
        }
        if(imc > 18.9) {
            return nivel[1]
        }
        if(imc < 18.9) {
            return nivel[0]
        }
    }

    function createParagraph(){
        //criando elemento em js
        const newParagraph = document.createElement('p') //criando um parágrafo
        
        return newParagraph;
    }

    function setResultado(mensagem, isValid){
        const resultado = document.querySelector('.resultado')
        resultado.innerHTML = '' //toda vez que chamar vai limpar

        const newParagraph = createParagraph();
        if (isValid){
            newParagraph.classList.add('paragrafo-resultado')
        }else{
            newParagraph.classList.add('bad')
        }
        newParagraph.innerHTML = mensagem

        // //inserir o elemento criado 

        resultado.appendChild(newParagraph)
    }

}

meuEscopo();