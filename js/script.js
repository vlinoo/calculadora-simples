function calcule(){
    let put1 = parseInt(document.querySelector("#input").value)
    let put2 = parseInt(document.querySelector("#input2").value)
    let operation = document.querySelector("select").value
    let resultado = document.querySelector("h1")

    switch(operation){
        case '+':
            calculo = put1 + put2
            resultado.innerHTML = calculo
            break

        case '-':
            calculo = put1 - put2
            resultado.innerHTML = calculo
            break

        case 'x':
            calculo = put1 * put2
            resultado.innerHTML = calculo
            break

        case '/':
            calculo = put1 / put2
            resultado.innerHTML = calculo
            break
    }
    
}