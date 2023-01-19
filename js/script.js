function calcule(){
    let put1 = parseInt(document.querySelector("#input").value)
    let put2 = parseInt(document.querySelector("#input2").value)
    let operation = document.querySelector("select").value
    let resultado = document.querySelector("h1")

    switch(operation){
        case '+':
            calculo = put1 + put2
            resultado.innerHTML = `O resultado da soma de ${put1} e ${put2} é ${calculo}`
            break

        case '-':
            calculo = put1 - put2
            resultado.innerHTML = `O resultado da subtração  de ${put1} e ${put2} é ${calculo}`
            break

        case 'x':
            calculo = put1 * put2
            resultado.innerHTML = `O resultado da multiplicação de ${put1} e ${put2} é ${calculo}`
            break

        case '/':
            calculo = put1 / put2
            resultado.innerHTML = `O resultado da divisão de ${put1} e ${put2} é ${calculo}`
            break
    }
    
}