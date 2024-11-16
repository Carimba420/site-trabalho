const nav = document.querySelector('nav')   
 nav.addEventListener('wheel', (event) => {
        event.preventDefault()
        nav.scrollLeft =  nav.scrollLeft + event.deltaY 
})
const section = document.querySelector('section')
    
 section.addEventListener('wheel', (event) => {
        event.preventDefault()
        section.scrollLeft =  section.scrollLeft + event.deltaY 
})
