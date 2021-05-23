function calcular() {
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let valor = document.getElementById('valor')
    let res = document.getElementById('res')

    let linha1 = document.getElementById('linha1')
    let linha2 = document.getElementById('linha2')
    let linha3 = document.getElementById('linha3')
    let linha4 = document.getElementById('linha4')
    let linha5 = document.getElementById('linha5')

    let imc = peso / (altura ** 2)
    res.innerHTML = `Seu IMC é ${imc.toFixed(2)}`

    if (imc < 17) {
        valor.innerHTML = 'Muito abaixo do peso'
        linha1.style.background = 'rgb(4, 94, 1)'
        linha1.style.color = 'white'
    } else if (imc < 18.9) {
        valor.innerHTML = 'Peso ideal'
        linha2.style.background = 'rgb(4, 94, 1)'
        linha2.style.color = 'white'
    } else if (imc < 25) {
        valor.innerHTML = 'Sobrepeso'
        linha3.style.background = 'rgb(4, 94, 1)'
        linha3.style.color = 'white'
    } else if (imc < 30) {
        valor.innerHTML = 'Obesidade'
        linha4.style.background = 'rgb(4, 94, 1)'
        linha4.style.color = 'white'
    } else if (imc < 40) {
        valor.innerHTML = 'Obesidade severa'
        linha5.style.background = 'rgb(4, 94, 1)'
        linha5.style.color = 'white'
    } else {
        valor.innerHTML = 'Obesidade mórbida'
        linha5.style.background = 'rgb(4, 94, 1)'
        linha5.style.color = 'white'
    }
}

function limpar() {
    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''
    valor.innerHTML = ''
    res.innerHTML = ''
    let linhas = [1, 2, 3, 4, 5]
    linhas.map(l => {
        eval(`linha${l}`).style.background = ''
        eval(`linha${l}`).style.color = ''
    })

}