/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews2 = document.querySelectorAll('.services__modal')
const modalBtns2 = document.querySelectorAll('.services__button')
const modalClose2 = document.querySelectorAll('.services__modal-close')


let modal2 = function(modalClick) {
    modalViews2[modalClick].classList.add('active-modal')
}

modalBtns2.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal2(i)
    })
})

modalClose2.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})




/*=============== MIXITUP FILTER PORTFOLIO ===============*/

// let mixerPortfolio = mixitup('.work__container', {
//     selectors: {
//         target: '.work__card'
//     },
//     animation: {
//         duration: 300
//     }
// });

// /* Link active work */ 
// const linkWork = document.querySelectorAll('.work__item')

// function activeWork() {
//     linkWork.forEach ( l => l.classList.remove('active-work'))
//     this.classList.add('active-work')
// }

// linkWork.forEach (l => l.addEventListener('click', activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/

let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 48,
          },
    },

  });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 

const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal(`.nav__link, .nav__logo-svg,`)
sr.reveal(`.greeting__container`, {delay: 700})
sr.reveal(`.gallery__container, .change-theme`, {delay: 900, origin: 'bottom'})


/*=============== EMAIL FORMS ===============*/

let btn = document.getElementById('btn')
btn.addEventListener('click', function(e) {
    e.preventDefault()
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let message = document.getElementById('message').value
    let body = 'name: ' + name + '<br> email: ' + email + '<br> message: ' + message

    Email.send({
        SecureToken : "2c217342-b5ba-4223-a2d8-6272cc53e604",
        To : 'flavuskka@gmail.com',
        From : "info@madebyflavia.dev",
        Subject : "contact message",
        Body : body
    }).then(
      message => alert(message) 
    );

})



/*=============== RESPONSIVE HAMBURGER MENU ===============*/


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__list");
const navLink = document.querySelectorAll(".nav__link");
const navLinkFont = document.querySelectorAll(".nav__link-font");
const navLinkIcon = document.querySelectorAll(".nav__link-icon");

// Function to add labels (pre-allocate space)
function addLabels() {
  const labels = ["instagram", "twitter", "artstation", "behance", "ko-fi", "commissions"];
  navLinkIcon.forEach((icon, index) => {
    const label = document.createElement("p");
    label.textContent = labels[index];
    icon.insertAdjacentElement("afterend", label);
  });
}

// Function to remove labels
function removeLabels() {
  const insertedPs = document.querySelectorAll(".nav__link-icon + p");
  insertedPs.forEach(element => {
    element.remove();
  });
}

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  // Toggle the "hide" class for nav__link-font elements
  navLinkFont.forEach(font => {
    font.classList.toggle("hide");
  });

  // Toggle the "hide" class for nav__link-icon elements
  navLinkIcon.forEach(icon => {
    icon.classList.toggle("hide");
  });

  if (hamburger.classList.contains("active")) {
    // When the menu is active, add labels
    addLabels();
  } else {
    // When the menu is not active, remove labels
    removeLabels();
  }
});



if (window.location.hash) {
  history.pushState("", document.title, window.location.pathname + window.location.search);
}
