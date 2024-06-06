/*=============== SHOW MENU ====================*/
const navMenu = document.getElementById("nav-menu"),
  navTonggle = document.getElementById("nav-tonggle"),
  navClose = document.getElementById("nav-close");

/* menu show */
if (navTonggle) {
  navTonggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* menu hiden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach(n => n.addEventListener("click", linkAction));

/*=============== SHADOW HEADER ====================*/
function shadowHeader() {
  const header = document.getElementById("header");
  if (window.scrollY >= 10) {
    header.classList.add("shadow-header");
  } else {
    header.classList.remove("shadow-header");
  }
}

window.addEventListener("scroll", shadowHeader);

/*=============== SWIPER FAVORITES ====================*/
const swiperFavorites = new Swiper(".favorites__swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
});

/*=============== SHOW SCROLL UP ====================*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SHOW SECTION ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        '.nav__menu a[href*="' + sectionId + '"]'
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== SHOW REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true,
});

sr.reveal(".home__data, .favorites__container, .footer__container");
sr.reveal(".home__circle, .home__img", { delay: 600, scale: 0.5 });
sr.reveal(".products", { interval: 1000, delay: 1000 });
sr.reveal(".contact__container", { origin: "right" });

/*=============== SEND VIA WHASAPP ====================*/
function sendwhatsapp() {
  var phonenumber = "+6287816668120";

  var nama_barang = document.querySelector(".nama_barang").value;
  var warna = document.querySelector(".warna").value;
  var size = document.querySelector(".size").value;
  var jumlah = document.querySelector(".jumlah").value;
  var pembayaran = document.querySelector(".pembayaran").value;
  var nama = document.querySelector(".nama").value;
  var kota = document.querySelector(".kota").value;
  var kecamatan = document.querySelector(".kecamatan").value;
  var desa = document.querySelector(".desa").value;
  var alamat = document.querySelector(".alamat").value;

  var url =
    "https://wa.me/" +
    phonenumber +
    "?text=" +
    "*Nama Barang:* " +
    nama_barang +
    "%0a" +
    "*Warna :* " +
    warna +
    "%0a" +
    "*Size :* " +
    size +
    "%0a" +
    "*Jumlah Pesanan :* " +
    jumlah +
    "%0a" +
    "*Metode Pembayaran :* " +
    pembayaran +
    "%0a" +
    "*Nama Penerima :* " +
    nama +
    "%0a" +
    "*Kota :* " +
    kota +
    "%0a" +
    "*Kecamatan :* " +
    kecamatan +
    "%0a" +
    "*Desa :* " +
    desa +
    "%0a" +
    "*Alamat Lengkap :* " +
    alamat +
    "%0a";

  window.open(url, "_blank").focus();

  document.querySelector(".size").value = "";
  document.querySelector(".jumlah").value = "";
  document.querySelector(".pembayaran").value = "";
  document.querySelector(".nama").value = "";
  document.querySelector(".kota").value = "";
  document.querySelector(".kecamatan").value = "";
  document.querySelector(".desa").value = "";
  document.querySelector(".alamat").value = "";
}
