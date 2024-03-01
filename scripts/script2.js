
var prctgt = document.querySelector("#prctg")

val = ival.value




function calc(){

    sec2.innerHTML = ``
    sec2.style.display = `block` 

    if(ival.value === "" || prctg.value === ""){
        sec2.innerHTML = `Preencha todos os campos.`
        sec2.style.fontSize = `1.5em`

    }else if( prctg.value < 0){
        sec2.innerHTML = `A porcentagem não pode ser negativa.`
        sec2.style.fontSize = `1.5em`

    }else if( oper.value == '+'){
        res = ival.value * (1 + (prctg.value / 100))
        sec2.innerHTML += `${res.toFixed(1)}`
        sec2.style.fontSize = `5em`
    }
    else if(oper.value == '-'){
        if(prctg.value > 100){
            sec2.innerHTML = `Você não pode diminuir mais que 100% de um valor.`
            sec2.style.fontSize = `1.5em`

        } else{
            res = ival.value * (1 - (prctg.value / 100))
            sec2.innerHTML += `${res.toFixed(1)}` 
            sec2.style.fontSize = `5em`
        }
        
        
    }
    

}
