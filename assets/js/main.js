/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SERVICES MODAL ===============*/
// Get the modal
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

// When the user clicks on the button, open the modal
let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixer = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */
const workLinks = document.querySelectorAll(".work__item");

function activeWork(workLink) {
  workLinks.forEach((wl) => {
    wl.classList.remove("active-work");
  });
  workLink.classList.add("active-work");
}

workLinks.forEach((wl) => {
  wl.addEventListener("click", () => {
    activeWork(wl);
  });
});

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
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the light / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(`.nav__menu`, {
  delay: 100,
  scale: 0.1,
  origin: "bottom",
  distance: "300px",
});

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, {
  delay: 100,
});

sr.reveal(`.home__social, .home__scroll`, {
  delay: 100,
  origin: "bottom",
});

sr.reveal(`.about__img`, {
  delay: 100,
  origin: "left",
  scale: 0.9,
  distance: "30px",
});

sr.reveal(`.about__data, .about__description, .about__button-contact`, {
  delay: 100,
  scale: 0.9,
  origin: "right",
  distance: "30px",
});

sr.reveal(`.skills__content`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.services__title, services__button`, {
  delay: 100,
  scale: 0.9,
  origin: "top",
  distance: "30px",
});

sr.reveal(`.work__card`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.testimonial__container`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.contact__info, .contact__title-info`, {
  delay: 100,
  scale: 0.9,
  origin: "left",
  distance: "30px",
});

sr.reveal(`.contact__form, .contact__title-form`, {
  delay: 100,
  scale: 0.9,
  origin: "right",
  distance: "30px",
});

sr.reveal(`.footer, footer__container`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});
/* ScrollReveal for Languages */
ScrollReveal().reveal('.sr-lang', {
  origin: 'bottom',
  distance: '20px',
  duration: 600,
  interval: 100
});

/* === Moving pill indicator on hover + return to active === */
(function(){
  const menu = document.querySelector('.nav__menu');
  if(!menu) return;

  const links = menu.querySelectorAll('.nav__link');
  const indicator = menu.querySelector('.nav__indicator');
  if(!indicator || !links.length) return;

  let active = menu.querySelector('.nav__link.active-link') || links[0];

  function moveTo(el){
    const m = menu.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const x = r.left - m.left;
    const y = r.top  - m.top;
    indicator.style.width  = r.width + 'px';
    indicator.style.height = r.height + 'px';
    indicator.style.transform = `translate(${x}px, ${y}px)`;
    menu.classList.add('has-indicator');
  }

  // init at active
  moveTo(active);

  // hover follow
  links.forEach(l=>{
    l.addEventListener('mouseenter', ()=> moveTo(l));
    l.addEventListener('click', ()=>{
      links.forEach(a=>a.classList.remove('active-link'));
      l.classList.add('active-link');
      active = l;
      moveTo(active);
    });
  });

  // leave: return to active
  menu.addEventListener('mouseleave', ()=> moveTo(active));

  // responsive: recalc on resize/scroll
  window.addEventListener('resize', ()=> moveTo(active));
})();
/* === Work filter moving indicator (hover + active + click animation) === */
(function(){
  const wrap = document.querySelector('.work__filters');
  if(!wrap) return;

  const items = wrap.querySelectorAll('.work__item');
  const indi  = wrap.querySelector('.work__indicator');
  if(!indi || !items.length) return;

  let active = wrap.querySelector('.active-work') || items[0];

  function moveTo(el, withSnap=false){
    const c = wrap.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const x = r.left - c.left;
    const y = r.top  - c.top;
    indi.style.width  = r.width + 'px';
    indi.style.height = r.height + 'px';
    // thêm snap easing nhẹ khi gọi từ click
    indi.classList.toggle('snap', !!withSnap);
    indi.style.transform = `translate(${x}px, ${y}px)`;
    wrap.classList.add('has-indicator');
  }

  // init
  moveTo(active);

  // hover -> chạy tới item
  items.forEach(it=>{
    it.addEventListener('mouseenter', ()=> moveTo(it));
    it.addEventListener('focus', ()=> moveTo(it)); // keyboard
  });

  // click -> set active + pulse + press
  function pressFeedback(el){
    el.classList.add('is-press');
    indi.classList.add('pulse');
    // xoá class sau animation
    setTimeout(()=> el.classList.remove('is-press'), 160);
    indi.addEventListener('animationend', ()=> indi.classList.remove('pulse'), {once:true});
  }

  items.forEach(it=>{
    it.addEventListener('click', ()=>{
      items.forEach(a=>a.classList.remove('active-work'));
      it.classList.add('active-work');
      active = it;
      moveTo(active, true);   // snap easing
      pressFeedback(it);
    });

    // keyboard: Enter/Space
    it.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        it.click();
      }
    });
  });

  // rời chuột -> quay về active
  wrap.addEventListener('mouseleave', ()=> moveTo(active));

  // responsive
  window.addEventListener('resize', ()=> moveTo(active));
})();
