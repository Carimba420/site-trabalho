//parte do butão de voltar ao topo
function topo(){
     window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
     backToTopButton = document.getElementById('backToTop');
     footer = document.querySelector('footer');
     footerTop = footer.offsetTop; 

     if (window.scrollY < 700) {
         backToTopButton.style.display = 'none';
     } else {
         backToTopButton.style.display = 'block';
     }

     if (window.scrollY + window.innerHeight >= footerTop) {
         offset = window.scrollY + window.innerHeight - footerTop;
         backToTopButton.style.bottom = (20 + offset) + 'px';
     } else {
         backToTopButton.style.bottom = '20px';
     }
 });

//parte do menu movel
function menuShow(){
   let menuMobile = document.querySelector('.mobile-menu')
   if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "./img/menu_white_36dp.svg"
   }
   else{
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "./img/close_white_36dp.svg"
   }
}

//parte da rolagem lateral
const rolagem = document.querySelector('.rolagem')  
rolagem.addEventListener('wheel', (event) => {
        event.preventDefault()
        rolagem.scrollLeft =  rolagem.scrollLeft + (1.8 * event.deltaY) 
})

//parte da rolegm com butões
incio = 0;
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


