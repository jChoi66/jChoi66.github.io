const $ = (selector) => document.querySelector(selector);

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  console.log(scrollTop);

  if (scrollTop > 1200) {
    $('.popch1 .intromore').classList.add('on');
  } else {
    $('.popch1 .intromore').classList.remove('on');
  }

  if (scrollTop > 1200) {
    $('.popch2 .intromore').classList.add('on');
  } else {
    $('.popch2 .intromore').classList.remove('on');
  }

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
    menuLi[2].classList.add('on');
    mimgLi[2].classList.add('on');
  });
});


$('.ch1').addEventListener('click', () => {
  $('.popch1').classList.add('on');
});
$('.popch1 .close').addEventListener('click', () => {
  $('.popch1').classList.remove('on');
});

$('.ch2').addEventListener('click', () => {
  $('.popch2').classList.add('on');
});
$('.popch2 .close').addEventListener('click', () => {
  $('.popch2').classList.remove('on');
});

let anchor = gsap.timeline({repeat: -1});
anchor.to('.anchor', {y: 10, duration: 1});
anchor.to('.anchor', {y: 0, duration: 1});


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
        
  x: -2500,
    scrollTrigger: {
    trigger: "#section01",
    start: "top top",
    end: 'bottom bottom',
    scrub: true,
    }
});

gsap.to('.fill', {
        
  x: 391,
    scrollTrigger: {
    trigger: "#section01",
    start: "top top",
    end: 'bottom bottom',
    scrub: true,
    }
});

gsap.to('.popch1 .intro img', {
        
  y: -200,
    scrollTrigger: {
    trigger: "#section01",
    start: "top top",
    end: 'bottom bottom',
    scrub: true,
    }
});

gsap.to('.popch2 .intro img', {
        
  y: -320,
    scrollTrigger: {
    trigger: "#section01",
    start: "top top",
    end: 'bottom bottom',
    scrub: true,
    }
});