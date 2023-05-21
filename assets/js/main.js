/* === Mostrar Menu === */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Valide se as variáveis existem
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // Adicionar a class show-menu à tag div com a class nav__menu
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/* === REMOVER MENU MOBILE === */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Quando clicamos em cada nav__link, removemos a class show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* === SCROLL SECTIONS ACTIVE LINK === */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/* === MUDAR BACKGROUND HEADER === */
function scrollHeader() {
    const nav = document.getElementById('header')
    // Quando a rolagem for maior que 200 de altura da janela de visualização, adicione a classe scroll-header à tag do cabeçalho
    if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* === MOSTRAR SCROLL TOP === */
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    // Quando a rolagem for maior que 560 de altura da janela de visualização, adicione a classe show-scroll à tag a com a classe scroll-top
    if (this.scrollY >= 560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}
window.addEventListener('scroll', scrollTop)

/* === Mixitup filtro do Portfolio === */
const mixer = mixitup('.portfolio__container', {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
});

/* Link para ativar portfolio */
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))

/* === Swiper Carousel === */
const mySwiper = new Swiper('.testimonial__container', {
    spaceBetween: 16,
    loop: true,
    grabCursor: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints:{
        640:{
            slidesPerview: 2,
        },
        1024:{
            slidesPerview: 3,
        },  
    }
  });

/* === Gsap Animation === */
gsap.from('.home__img', {opacity: 0, duration: 2, delay: .5, x:60})
gsap.from('.home__data', {opacity: 0, duration: 2, delay: .8, y:25})
gsap.from('.home__greeting, .home__name, .home__profession, .home__button', {opacity: 0, duration: 2, delay:1, y:25, ease:'expo.out', stagger: .2})
gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 2, delay:1.5, y:25, ease:'expo.out', stagger: .2})
gsap.from('.nav__item', {opacity: 0, duration: 2, delay:1.8, y:25, ease:'expo.out', stagger: .2})
gsap.from('.home__social-icon', {opacity: 0, duration: 2, delay:2.3, y:25, ease:'expo.out', stagger: .2})