let maxGarantia = 3000000
let minGarantia = 5000
let maxEmprestimo = 100000
let minEmprestimo = 3000

const submit = () => {
    const valorGarantia = document.getElementById('valorGarantia').value
    const valorEmprestimo = document.getElementById('valorEmprestimo').value
    const parcela = document.getElementById('parcela').value
    const div = document.getElementById('results')
    
    if ((valorEmprestimo <= (valorGarantia*0.80)) && (valorGarantia >= minGarantia) && (valorGarantia <= maxGarantia) && (valorEmprestimo >= minEmprestimo) && (valorEmprestimo<= maxEmprestimo)) {
        const valorTotalAPagar = (((638 / 100) + (234 / 100) + (parcela / 1000) + 1) * valorEmprestimo).toFixed(2)
        const valorDaParcela = (valorTotalAPagar / parcela).toFixed(2)
        console.log(valorDaParcela, valorTotalAPagar)

        div.innerHTML = `
            <p> Valor por parcela ${valorDaParcela}</p>
            <p> Valor total ${valorTotalAPagar}</p>
        `
    } else {
        console.log('error')
    }
}

const renderizarPagina = () => {
    const garantia = document.getElementById('garantia').value
    const rangeGarantia = document.getElementById('rangeGarantia')
    const rangeEmprestimo = document.getElementById('rangeEmprestimo')

    if (garantia == 'veiculo') {
        maxGarantia = 3000000
        minGarantia = 5000
        maxEmprestimo = 100000
        minEmprestimo = 3000
        
        parcela.innerHTML = `
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
        `
        rangeGarantia.innerHTML = `
            <p>Valor da garantia</p>
            <p>R$ ${minGarantia},00 - R$ ${maxGarantia},00</p>
        `                
        rangeEmprestimo.innerHTML = `
            <p>Valor do empréstimo </p>
            <p>R$ ${minEmprestimo},00 - R$ ${maxEmprestimo},00</p>
        
        `
    } else if (garantia == 'imovel') {
        maxGarantia = 100000000
        minGarantia = 50000
        maxEmprestimo = 4500000
        minGarantia = 30000

        parcela.innerHTML = `
            <option value="120">120</option>
            <option value="180">180</option>
            <option value="240">240</option>
        `
        rangeGarantia.innerHTML = `
            <p>Valor da garantia</p>
            <p>R$ ${minGarantia},00 - R$ ${maxGarantia},00</p>
        `                
        rangeEmprestimo.innerHTML = `
            <p>Valor do empréstimo</p>
            <p>R$ ${minEmprestimo},00 - R$ ${maxEmprestimo},00</p>
        
        `
    } else {
        console.log('error')
    }
}

renderizarPagina()