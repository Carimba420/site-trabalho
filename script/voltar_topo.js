function topo(){
    window.scrollTo({ 
        top: 0, behavior: 'smooth'
    })
}

window.addEventListener('scroll', function() {
    backToTopButton = document.getElementById('backToTop')
    footer = document.querySelector('footer')

    if (window.scrollY < 700) {
        backToTopButton.style.display = 'none'
    } else {
        backToTopButton.style.display = 'block'
    }

    if (window.scrollY + window.innerHeight >= footer.offsetTop) {
        distancia_do_footer = window.scrollY + window.innerHeight - footer.offsetTop;
        backToTopButton.style.bottom = (20 + distancia_do_footer) + 'px'
    } else {
        backToTopButton.style.bottom = '20px'
    }
})
