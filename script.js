var val1t = document.querySelector('#ival1')
var val2t = document.querySelector('#ival2')
var sec2 = document.querySelector('#sec2')



function calc(){
    var val1 = Number(val1t.value)
    var val2 = Number(val2t.value)
    sec2.style.display = "block"
    sec2.innerHTML = ""
    //Definir e esvaziar o vetor quando executar novamente.
    array = [] 

    if((val1t.value || val2t.value) == ""){//parei aq****
        sec2.innerHTML = `Insira os valores.`
        sec2.style.fontSize = "1.5em"
    } else if((val1 || val2) <= 0){
        sec2.innerHTML = `Insira valores positivos.`
        sec2.style.fontSize = "1.5em"
        
    }else{
        
        array.push(val1)
        array.push(val2)
        array.sort()
        menor = array[0]
        maior = array[1]


        
        sec2.innerHTML += `${maior}` 


    }




}