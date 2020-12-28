const toggleButton = document.getElementsByClassName('toggle')[0]
const navContact = document.getElementsByClassName('nav-contact')[0]
const navLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})

navLinks.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})



// scroll behaviour contact

const contact = document.querySelector(".nav-contact")

contact.addEventListener('click', () => {
    document.querySelector(".contact-header").scrollIntoView({
        behavior: "smooth"
    });
})

// scroll behaviour project

const project = document.querySelector('.nav-project');

project.addEventListener('click', () => {
    document.querySelector('.project-area').scrollIntoView({
        behavior: "smooth"
    });
})

// scroll behaviour about
const about = document.querySelector('.nav-about');

about.addEventListener('click', () => {
    document.querySelector('.about-header').scrollIntoView({
        behavior: 'smooth'
    })
})

// scroll behaviour about
// const skills = document.querySelector('.nav-skills');

// skills.addEventListener('click', () => {
//     document.querySelector('.skill-header').scrollIntoView({
//         behavior: 'smooth'
//     })
// })

const test = document.querySelector('.land-button');

test.addEventListener('click',() =>{
    document.querySelector('.contact-header').scrollIntoView({
        behavior:'smooth'
    })
})
