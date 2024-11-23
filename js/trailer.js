const $ = (selector) => document.querySelector(selector);

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  console.log(scrollTop);



});

$('#header').addEventListener('click', () => {
  $('.menupage').classList.add('on');
});
$('.close').addEventListener('click', () => {
  $('.menupage').classList.remove('on');
});

let menuLi = $('.menutxt').querySelectorAll('li');
let mimgLi = document.querySelector('.main_img').querySelectorAll('li');
menuLi.forEach((li, index) => {
  li.addEventListener('mouseover', function () {
    menuLi.forEach((li, index) => {
      li.classList.remove('on');
    });
    mimgLi.forEach((li, index) => {
      li.classList.remove('on');
    });
    this.classList.add('on')
    mimgLi[index].classList.add('on');
  });
  li.addEventListener('mouseleave', function() {
    menuLi.forEach((li, index) => {
      li.classList.remove('on');
    });
    mimgLi.forEach((li, index) => {
      li.classList.remove('on');
    });
    menuLi[3].classList.add('on');
    mimgLi[3].classList.add('on');
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.7,
  spaceBetween: 20,
  mousewheel: true,
  direction: "vertical",
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

$('.playpause').addEventListener('click', () => {
  if ($('.vid1').paused) {
    $('.vid1').play();
  } else {
    $('.vid1').pause();
  }
});

$('.vid1').addEventListener('pause', () => {
  $('.playpause').classList.add('on');
  console.log('1');
});
$('.vid1').addEventListener('play', () => {
  $('.playpause').classList.remove('on');
  console.log('2');
});