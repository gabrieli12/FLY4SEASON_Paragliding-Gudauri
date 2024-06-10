window.addEventListener('scroll', function(){
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 5)
    header.classList.toggle('sticky2', window.scrollY > 800)
})
