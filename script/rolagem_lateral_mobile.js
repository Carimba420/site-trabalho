incio_mobile = 21;
function mobile_direita() { 
    const Postes = document.querySelectorAll('.Postes'); 
    if (incio_mobile > 21) {
        incio_mobile--; 
        Postes[incio_mobile].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest', 
            inline: 'center', 
        })
    }
}

function mobile_esquerda() {
    const Postes = document.querySelectorAll('.Postes'); 
    if (incio_mobile < Postes.length - 1) {
        incio_mobile++;
        Postes[incio_mobile].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
         })
    }
}