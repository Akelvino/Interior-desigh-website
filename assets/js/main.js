const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const closeHambug = document.getElementById("close-hambug")
const openHambug = document.getElementById("open-hambug")

openHambug.addEventListener("click", ()=>{
  navMenu.classList.remove("translate-x-full")
})

closeHambug.addEventListener("click", ()=>{
  navMenu.classList.add("translate-x-full")
})

//swiper
const swiper = new Swiper('.swiper', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },  

  pagination: {
    el: '.swiper-pagination',
  },


  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

//scroll reveal
const sr = ScrollReveal({
  origin : 'bottom',
  distance : "60px",
  duration : 3000,
  delay : 600,

})

sr.reveal(".hero__title",{"origin":'top'});
sr.reveal(".hero__subtitle",{"origin":'top','delay':700});
sr.reveal(".hero__btn",{"origin":'top','delay':700});
sr.reveal(".hero_main_image",{"delay":800});
sr.reveal(".hero__image",{"delay":500});

sr.reveal(".about__image", {'origin':'top','delay':300});
sr.reveal(".scroll_down_image", {'delay':400});
sr.reveal(".featured__image2", {'delay':600});
sr.reveal(".stats", {'delay':600});
sr.reveal(".about__form", {'delay':700});

sr.reveal(".service__title",{'delay':500});
sr.reveal(".service__items",{'distance':'100px', 'interval':100});

sr.reveal(".service-secondary-title",{'delay':500});
sr.reveal(".service-secondary-img1",{'delay':600});
sr.reveal(".service-secondary-img2",{'delay':600});
sr.reveal(".service__images",{'delay':600});
sr.reveal(".service__p",{'delay':700});

sr.reveal(".projects__title", {'delay':500})
sr.reveal(".swiper-slide", {'delay':700})
sr.reveal(".testimonials__title", {'delay':500})

sr.reveal(".contact", {'delay':100})
sr.reveal(".footer", {'delay':200})


