// show menu 
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// menu show 
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// menu hidden 
if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-menu')
    })
}

// remove menu mobile 

const navlink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav link we remove the shoe menu class 

    navMenu.classList.remove('show-menu')
}

navlink.forEach(n => n.addEventListener('click', linkAction))


// change background header 
function scrollHeader(){
    const header = document.getElementById("header")
    // when the scroll is greater than 100 viewport innerHeight, add the scroll-header class to the header tag 

    if(this.scrollY >= 100) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}

window.addEventListener('scroll', scrollHeader)


// swiper discover 
let  swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    }
})


// video 

const videoFile = document.getElementById('video-file'),
    videoButton = document.getElementById('video-button'),
    videoIcon = document.getElementById('video-icon');

function playPause(){
    if(videoFile.paused){
        // play video
        videoFile.play()
        // we change the icon 
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else{
        //pause video 
        videoFile.pause()
        // we change the icon 
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
}


videoButton.addEventListener('click', playPause)

function finalVideo(){
    // video end icon change 

    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}

videoFile.addEventListener("ended", finalVideo)

// show scroll up 
function scrollup(){
    const scrollUp = document.getElementById("scroll-up")

    // when the scroll is higher 200 viewport innerHeight, add the show scroll class to the tag with the scroll-top class 

    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove("show-scroll")
}

window.addEventListener("scroll", scrollup);

// scroll sections Active link 

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;

        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}

window.addEventListener('scroll', scrollActive)


// scroll reveal animation 

    const sr = ScrollReveal({
        distance : '60px',
        duration: 2800,
    })

    sr.reveal(`.home__data, .home__social-link, .home__info, 
                .discover__container,
                .experience__data, .experience__overlay,
                .place__card, 
                .sponsor__content,
                .footer__data, .footer__rights`, {
        origin: 'top',
        interval: 100,
    })

    sr.reveal(` .about__data,
                .video__description,
                .subscribe__description `, {
                    origin: 'left'
                })

    sr.reveal(` .about__img-overlay,
                .video__content,
                .subscribe__form `, {
                origin: 'right',
                interval: 100
            })


// dark light theme 
const themeButton = document.getElementById("theme-button")
const darktheme = 'dark-theme'
const icontheme = 'ri-sun-line'

// previously selected theme (if user select) 

const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")

// we obtain the current theme that the interface has by validating the dark theme class 

const getCurrentTheme = () => document.body.classList.contains(darktheme) ? "dark" : "light"

const getCurrentIcon = () => document.body.classList.contains(icontheme) ? "ri-moon-line" : "ri-sun-line"

// we validate if the user previously choose a theme


if(selectedTheme){
    // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darktheme)

    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](icontheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    // add or remove the dark /icon theme

    document.body.classList.toggle(darktheme)
    themeButton.classList.toggle(icontheme)

    // we save the theme and the current icon that the user choose 
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())


})