function contar(){
    let inicio = document.getElementById('txt_i')
    let fim = document.getElementById('txt_f')
    let passo = document.getElementById('txt_p')
    let res = document.getElementById('res')


    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
       // alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert('Passo Inválido! Considerando Passo: 1')
            p = 1
            
        }
        if ( i < f){
            // Contagem crescente
            for(let c =i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
        }
        
        } else {
            // Contagem regressiva
            for( let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } 
        res.innerHTML += `\u{1F3C1}`

        
    }
} 