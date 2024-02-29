var val1t = document.querySelector('#ival1')
var val2t = document.querySelector('#ival2')
var sec2 = document.querySelector('#sec2')


function calc(){
    var val1 = Number(val1t.value)
    var val2 = Number(val2t.value)
    //Mostrar a section
    sec2.style.display = "block"
    //Limpar a section toda vez que executar 
    sec2.innerHTML = ""
    //Definir e esvaziar o vetor quando executar.
    array = [] 

    //Verificar se os inputs estão vázios
    if(val1t.value === "" || val2t.value === ""){//parei aq****
        sec2.innerHTML = `Insira todos os valores.`
        sec2.style.fontSize = "1.5em"

    //Verificar se os números são negativos
    } else if(val1 <= 0 || val2 <= 0){
        sec2.innerHTML = `Insira valores positivos.`
        sec2.style.fontSize = "1.5em"

    //Código principal
    }else{

        sec2.style.fontSize = "1em"
        sec2.style.borderWidth = "5px"
        
        //Implementar os dois valores no vetor
        array.push(val1)
        array.push(val2)
        //Deixar em ordem crescente
        array.sort()
        //Definir o maior e menor para o cálculo
        menor = array[0]
        maior = array[1]
        
        //Cálculo
        dif = ((menor * 100) / maior) - 100
        //Resultado sempre será positivo
        difPos = Math.abs(dif)
        
        //Exibir resultado para cada possibilidade de valor maior que o outro 
        if(val1 > val2){
           sec2.innerHTML += `<p>O valor 1 é maior</p>`
            sec2.innerHTML += `<p id="nump">${difPos.toFixed(0)}%</p>` 
            sec2.innerHTML += `<p>do que o valor 2</p>` 
        } else if( val2 > val1){
            sec2.innerHTML += `<p>O valor 2 é maior</p>`
            sec2.innerHTML += `<p id="nump">${difPos.toFixed(0)}%</p>` 
            sec2.innerHTML += `<p>do que o valor 1</p>` 
        } else{
            sec2.innerHTML += `<p>Os valores não são diferentes.</p>`
        }

        
    }
}

//Animação da section 2 
function entrar(){
    sec2.style.transform = "scale(105%)"
    sec2.style.transition = ".5s"
}
function sair(){
    sec2.style.transform = "scale(100%)"
    sec2.style.transition = ".5s"
}