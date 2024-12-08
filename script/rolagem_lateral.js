const rolagem = document.querySelector('.rolagem')  
rolagem.addEventListener('wheel', function(movimento){
        movimento.preventDefault()
        rolagem.scrollLeft =  rolagem.scrollLeft + (1.8 * movimento.deltaY) 
})

incio = 0
function direita() { 
    const Postes = document.querySelectorAll('.Postes'); 
    if (incio > 0) {
        incio--; 
        Postes[incio].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest', 
            inline: 'center', 
        })
    }
}

function esquerda() {
    const Postes = document.querySelectorAll('.Postes'); 
    if (incio < Postes.length - 1) {
        incio++;
        Postes[incio].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
         })
    }
}

