// mixItUp
const containerEl = document.querySelector(".projects__container");
var mixer = mixitup(containerEl, {
  animation: {
    enable: false,
  },
});

mixer.filter("*");

// ============================= START POPUP =============================
// POS
let currentSlidePos = 0;

document
  .getElementById("openPopupPos")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah tautan berperilaku seperti tautan biasa
    document.getElementById("pointofsale").style.display = "block";
    showSlidePos(currentSlidePos);
  });

document.getElementById("closePopupPos").addEventListener("click", function () {
  document.getElementById("pointofsale").style.display = "none";
});

document.getElementById("prevSlidePos").addEventListener("click", function () {
  showSlidePos(currentSlidePos - 1);
});

document.getElementById("nextSlidePos").addEventListener("click", function () {
  showSlidePos(currentSlidePos + 1);
});

function showSlidePos(n) {
  const slides = document
    .getElementsByClassName("slidesPos")[0]
    .getElementsByTagName("img");
  currentSlidePos = (n + slides.length) % slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[currentSlidePos].style.display = "block";
}

// Smart Home App
let currentSlideSHA = 0;

document
  .getElementById("openPopupSmartHomeApp")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah tautan berperilaku seperti tautan biasa
    document.getElementById("smarthome").style.display = "block";
    showSlide(currentSlideSHA);
  });

  document.getElementById("closePopupSHA").addEventListener("click", function () {
  document.getElementById("smarthome").style.display = "none";
});

document.getElementById("prevSlideSHA").addEventListener("click", function () {
  showSlideSHA(currentSlideSHA - 1);
});

document.getElementById("nextSlideSHA").addEventListener("click", function () {
  showSlideSHA(currentSlideSHA + 1);
});

function showSlideSHA(n) {
  const slides = document
    .getElementsByClassName("slidesSHA")[0]
    .getElementsByTagName("img");
    currentSlideSHA = (n + slides.length) % slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[currentSlideSHA].style.display = "block";
}

// Smart Pet Feeder IoT
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

// Smart Pet Feeder APP
let currentSlideSPFA = 0;

document
  .getElementById("openPopupSPFA")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah tautan berperilaku seperti tautan biasa
    document.getElementById("smartpetfeederApp").style.display = "block";
    showSlideSPFA(currentSlideSPFA);
  });

document.getElementById("closePopupSPFA").addEventListener("click", function () {
  document.getElementById("smartpetfeederApp").style.display = "none";
});

document.getElementById("prevSlideSPFA").addEventListener("click", function () {
  showSlideSPFA(currentSlideSPFA - 1);
});

document.getElementById("nextSlideSPFA").addEventListener("click", function () {
  showSlideSPFA(currentSlideSPFA + 1);
});

function showSlideSPFA(n) {
  const slides = document
    .getElementsByClassName("slidesSPFA")[0]
    .getElementsByTagName("img");
  currentSlideSPFA = (n + slides.length) % slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[currentSlideSPFA].style.display = "block";
}

// popup/modal smarthome iot
let currentSlideSHI = 0;

document
  .getElementById("openPopupSmartHomeIot")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah tautan berperilaku seperti tautan biasa
    document.getElementById("smarthomeIot").style.display = "block";
    showSlideSHI(currentSlideSHI);
  });

document.getElementById("closePopupSHI").addEventListener("click", function () {
  document.getElementById("smarthomeIot").style.display = "none";
});

document.getElementById("prevSlideSHI").addEventListener("click", function () {
  showSlideSHI(currentSlideSHI - 1);
});

document.getElementById("nextSlideSHI").addEventListener("click", function () {
  showSlideSHI(currentSlideSHI + 1);
});

function showSlideSHI(n) {
  const slides = document
    .getElementsByClassName("slidesSHI")[0]
    .getElementsByTagName("img");
  currentSlideSHI = (n + slides.length) % slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[currentSlideSHI].style.display = "block";
}

// ============================= END POPUP =============================


// ============================= STRAT MODAL =============================

// ============================= END MODAL =============================



// ============================= START SWIPPER =============================

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
document
  .querySelectorAll(
    ".sertifikat1__items, .sertifikat2__items, .sertifikat3__items, .sertifikat4__items, .sertifikat5__items, .sertifikat6__items"
  )
  .forEach(function (image) {
    image.addEventListener("click", function () {
      const enlargedImage = document.getElementById("enlarged-image");
      enlargedImage.src = this.src;
      document.getElementById("overlay").style.display = "flex";
    });
  });

document.getElementById("close-button").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
});
// ============================= END SWIPPER =============================


// ====================== START NAV MOBILE ============================
const navMenu = document.querySelector(".nav__menu");
const navOpenBtn = document.querySelector(".nav__toggle-open");
const navCloseBtn = document.querySelector(".nav__toggle-close");
const navItems = navMenu.querySelectorAll("a");

const openNavHandler = () => {
  navMenu.style.display = "flex";
  navOpenBtn.style.display = "none";
  navCloseBtn.style.display = "inline-block";
};

const closeNavHandler = () => {
  navMenu.style.display = "none";
  navOpenBtn.style.display = "inline-block";
  navCloseBtn.style.display = "none";
};

const updateNavVisibility = () => {
  if (window.innerWidth <= 768) {
    // Layar kecil, atur tampilan tombol sesuai dengan keadaan menu
    if (navMenu.style.display === "flex") {
      navOpenBtn.style.display = "none";
      navCloseBtn.style.display = "inline-block";
    } else {
      navMenu.style.display = "none";
      navOpenBtn.style.display = "inline-block";
      navCloseBtn.style.display = "none";
    }
  } else {
    // Layar besar, pastikan navigasi terbuka
    navMenu.style.display = "flex";
    navOpenBtn.style.display = "none";
    navCloseBtn.style.display = "none";
  }
};

navOpenBtn.addEventListener("click", () => {
  openNavHandler();
  updateNavVisibility();
});

navCloseBtn.addEventListener("click", () => {
  closeNavHandler();
  updateNavVisibility();
});

// Tutup menu navigasi pada perangkat mobile saat mengklik item navigasi
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    closeNavHandler();
    updateNavVisibility();
  });
});

// Perbarui visibilitas navigasi saat ukuran jendela diubah
window.addEventListener("resize", updateNavVisibility);

// Panggil updateNavVisibility saat halaman dimuat
updateNavVisibility();
// ====================== END NAV MOBILE ============================

// mode gelap
const themeBtn = document.querySelector(".nav__theme-btn");

themeBtn.addEventListener("click", () => {
  let bodyClass = document.body.className;

  if (!bodyClass || bodyClass === "light") {
    bodyClass = "dark";
    themeBtn.innerHTML = "<i class='uil uil-sun'></i>";
    changeImage("image1", "./assets/header-dark-mode.jpg");
    changeImage("image2", "./assets/about-dark-mode2.png");
  } else {
    bodyClass = "light";
    themeBtn.innerHTML = "<i class='uil uil-moon'></i>";
    changeImage("image1", "./assets/header-light-mode.jpg");
    changeImage("image2", "./assets/about-light-mode.png");
  }

  document.body.className = bodyClass;
  window.localStorage.setItem("theme", bodyClass);
});

function changeImage(imageId, imageSrc) {
  const imageElement = document.getElementById(imageId);
  if (imageElement) {
    imageElement.src = imageSrc;
  }
}
