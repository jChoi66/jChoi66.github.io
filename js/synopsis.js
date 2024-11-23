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
    menuLi[1].classList.add('on');
    mimgLi[1].classList.add('on');
  });
});


$('.ep1').addEventListener('click', () => {
  $('.sy1').classList.add('on');
});
$('.sy1 .popclose').addEventListener('click', () => {
  $('.sy1').classList.remove('on');
});

$('.ep2').addEventListener('click', () => {
  $('.sy2').classList.add('on');
});
$('.sy2 .popclose').addEventListener('click', () => {
  $('.sy2').classList.remove('on');
});

$('.ep3').addEventListener('click', () => {
  $('.sy3').classList.add('on');
});
$('.sy3 .popclose').addEventListener('click', () => {
  $('.sy3').classList.remove('on');
});

$('.ep4').addEventListener('click', () => {
  $('.sy4').classList.add('on');
});
$('.sy4 .popclose').addEventListener('click', () => {
  $('.sy4').classList.remove('on');
});

$('.ep5').addEventListener('click', () => {
  $('.sy5').classList.add('on');
});
$('.sy5 .popclose').addEventListener('click', () => {
  $('.sy5').classList.remove('on');
});

$('.ep6').addEventListener('click', () => {
  $('.sy6').classList.add('on');
});
$('.sy6 .popclose').addEventListener('click', () => {
  $('.sy6').classList.remove('on');
});

$('.ep7').addEventListener('click', () => {
  $('.sy7').classList.add('on');
});
$('.sy7 .popclose').addEventListener('click', () => {
  $('.sy7').classList.remove('on');
});

$('.ep8').addEventListener('click', () => {
  $('.sy8').classList.add('on');
});
$('.sy8 .popclose').addEventListener('click', () => {
  $('.sy8').classList.remove('on');
});

$('.ep9').addEventListener('click', () => {
  $('.sy9').classList.add('on');
});
$('.sy9 .popclose').addEventListener('click', () => {
  $('.sy9').classList.remove('on');
});

$('.ep10').addEventListener('click', () => {
  $('.sy10').classList.add('on');
});
$('.sy10 .popclose').addEventListener('click', () => {
  $('.sy10').classList.remove('on');
});


gsap.to('.fix01', {
          
  scrollTrigger: {
    trigger: ".trigger01",
    start: "top top",
    end: 'bottom bottom',
    pin: true,
    pinSpacing: false,
    scrub: true,
  }
});

gsap.to('.horizontal01', {
      
  x: -3210,
    scrollTrigger: {
    trigger: "#section01",
    start: "top top",
    end: 'bottom bottom',
    scrub: true,
    }
});

gsap.to('.progress_bar .fill', {
      
  width: 197,
    scrollTrigger: {
    trigger: "#section01",
    start: "top top",
    end: 'bottom bottom',
    scrub: true,
    }
});