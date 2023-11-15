// mixItUp
const containerEl = document.querySelector(".projects__container");
var mixer = mixitup(containerEl, {
  animation: {
    enable: false,
  },
});

mixer.filter("*");

// Popup
let currentSlide = 0;

document
  .getElementById("openPopup")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah tautan berperilaku seperti tautan biasa
    document.getElementById("smartpetfeeder").style.display = "block";
    showSlide(currentSlide);
  });

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("smartpetfeeder").style.display = "none";
});

document.getElementById("prevSlide").addEventListener("click", function () {
  showSlide(currentSlide - 1);
});

document.getElementById("nextSlide").addEventListener("click", function () {
  showSlide(currentSlide + 1);
});

function showSlide(n) {
  const slides = document
    .getElementsByClassName("slides")[0]
    .getElementsByTagName("img");
  currentSlide = (n + slides.length) % slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[currentSlide].style.display = "block";
}

// swiper

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    640: {
        slidesPerView: 1, // Jumlah slide yang ditampilkan pada viewport dengan lebar 640px atau lebih
      },
      768: {
        slidesPerView: 2, // Jumlah slide yang ditampilkan pada viewport dengan lebar 768px atau lebih
      },
      1024: {
        slidesPerView: 3, // Jumlah slide yang ditampilkan pada viewport dengan lebar 1024px atau lebih
      },
  },
});

//   sertifikat1
document.querySelectorAll(".sertifikat1__items, .sertifikat2__items, .sertifikat3__items").forEach(function (image) {
  image.addEventListener("click", function () {
    const enlargedImage = document.getElementById("enlarged-image");
    enlargedImage.src = this.src;
    document.getElementById("overlay").style.display = "flex";
  });
});

document.getElementById("close-button").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
});


// nav toggle
const navMenu = document.querySelector('.nav__menu')
const navOpenBtn = document.querySelector('.nav__toggle-open')
const navCloseBtn = document.querySelector('.nav__toggle-close')

const openNavHandler = () => {
    navMenu.style.display = 'flex';
    navOpenBtn.style.display = 'none';
    navCloseBtn.style.display = 'inline-block';
}


const closeNavHandler = () => {
    navMenu.style.display = 'none';
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn.style.display = 'none';
}

navOpenBtn.addEventListener('click', openNavHandler)
navCloseBtn.addEventListener('click', closeNavHandler)

// close nav 
const navItems = navMenu.querySelectorAll('a');
if (window.innerWidth < 768) {
    navItems.forEach(item => {
        item.addEventListener('click', closeNavHandler);
    })
} 

// theme

const themeBtn = document.querySelector('.nav__theme-btn');
themeBtn.addEventListener('click', ()=> {
    let bodyClass = document.body.className;
    if (!bodyClass) {
        bodyClass = 'dark';
        document.body.className = bodyClass;
        // change toggle icon
        themeBtn.innerHTML = "<i class='uil uil-sun'></i>"

        // simpan tema di lokal storage (di refresh tidak berubah)
        window.localStorage.setItem('theme', bodyClass);
    } else {
        bodyClass = '';
        document.body.className = bodyClass;
        themeBtn.innerHTML = "<i class='uil uil-moon'></i>"
        window.localStorage.setItem('theme', bodyClass);
    }
})

// load theme
window.addEventListener('load', () => {
    document.body.className = window.localStorage.getItem('theme');
})