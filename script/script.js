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
const rolagem = document.querySelector('.rolagem')  
rolagem.addEventListener('wheel', (event) => {
        event.preventDefault()
        rolagem.scrollLeft =  rolagem.scrollLeft + event.deltaY 
})
