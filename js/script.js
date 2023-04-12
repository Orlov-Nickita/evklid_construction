// убираем пунктирный outline у фокус-элементов в Firefox и, соответственно, других браузеров

const onfocus1 = document.querySelector('.header__search');
const onfocus2 = document.querySelector('.header__search-active');
const onfocus3 = document.querySelector('.header__search-close');
const onfocus4 = document.querySelectorAll('.how__btn');

function focusfunc(element) {
  element.addEventListener('focus', (event) => {
    event.target.style.outline = '2px solid var(--color-ff9900)';
  });

  element.addEventListener('blur', (event) => {
    event.target.style.outline = '2px solid transparent';
  });
};

focusfunc(onfocus1);
focusfunc(onfocus2);
focusfunc(onfocus3);

onfocus4.forEach(function(el) {
  focusfunc(el);
});

// slider - swiper

let swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  a11y: {
    paginationBulletMessage: 'Перейти на слайд {{index}}'
  },
});

// burger

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  });
});

// loupe - search

let loupe = document.querySelector('.header__search');
let search_field = document.querySelector('.header__search-form');
let search_close = document.querySelector('.header__search-close');

loupe.addEventListener('click', function () {
  search_field.classList.toggle('header__search-form-active');
});

search_close.addEventListener('click', function () {
  search_field.classList.toggle('header__search-form-active');
});

// tabs

function escapeRegExp(string) {
  return string.replace('\"', '').replace('\"', '');
};

let tabsBtn = document.querySelectorAll('.how__btn');
let tabsItem = document.querySelectorAll('.step__text');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (el) {
    const path = el.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('how__btn-active') });
    el.currentTarget.classList.add('how__btn-active');

    const tab = document.querySelector(`[data-target="${path}"]`)

    tabsItem.forEach(function (element) { element.classList.remove('step__text--active') });
    // tab.style.setProperty('--max-height', tab.scrollHeight + 'px');
    if (window.screen.width >= 1023) {
      tab.style.setProperty('--max-height', tab.scrollHeight + 'px');
    }
    tab.classList.add('step__text--active');
    document.querySelector('.step').style.setProperty('--step-active', escapeRegExp(`url('../img/how/how-step-"${path}".jpg')`));

  });
});

// accordeon

new Accordion('.accordeon__list', {
  elementClass: 'accordeon__item',
  triggerClass: 'accordeon__control',
  panelClass: 'accordeon__content',
  activeClass: 'accordeon--active'
});

let acc_item = document.querySelectorAll('.accordeon__item');
let acc_title = document.querySelectorAll('.accordeon__title');
let plus = document.querySelectorAll('.accordeon__plus');

acc_title.forEach(function (element) {

  element.addEventListener('click', function (elem) {
    const title = elem.currentTarget.dataset.title;

    plus.forEach(function (element) { element.classList.remove('accordeon__plus--active') });

    acc_item.forEach(function (btn) {

      if (btn.classList.contains('accordeon--active')) {
        document.querySelector(`[data-plus="${title}"]`).classList.add('accordeon__plus--active');
      };
    });
  });
});
