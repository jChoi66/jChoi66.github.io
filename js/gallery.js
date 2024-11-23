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
    menuLi[4].classList.add('on');
    mimgLi[4].classList.add('on');
  });
});


// gsap.to('.pic1', {
        
//   y: -200,
//     scrollTrigger: {
//     trigger: "#section01",
//     start: "200 top",
//     end: "+=400",
//     scrub: true,
//     }
// });

// gsap.to('.pic2', {
        
//   y: -200,
//     scrollTrigger: {
//     trigger: "#section01",
//     start: "top top",
//     end: "+=400",
//     scrub: true,
//     }
// });


window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  console.log(scrollTop);

  if (scrollTop > 800) {
    $('.pic4').classList.add('on');
  } else {
    $('.pic4').classList.remove('on');
  }

  if (scrollTop > 900) {
    $('.pic6').classList.add('on');
  } else {
    $('.pic6').classList.remove('on');
  }

  if (scrollTop > 1100) {
    $('.pic5').classList.add('on');
  } else {
    $('.pic5').classList.remove('on');
  }

  if (scrollTop > 1900) {
    $('.pic7').classList.add('on');
  } else {
    $('.pic7').classList.remove('on');
  }

  if (scrollTop > 2000) {
    $('.pic9').classList.add('on');
  } else {
    $('.pic9').classList.remove('on');
  }

  if (scrollTop > 2300) {
    $('.pic8').classList.add('on');
  } else {
    $('.pic8').classList.remove('on');
  }

  if (scrollTop > 3000) {
    $('.pic10').classList.add('on');
  } else {
    $('.pic10').classList.remove('on');
  }

  if (scrollTop > 3100) {
    $('.pic12').classList.add('on');
  } else {
    $('.pic12').classList.remove('on');
  }

  if (scrollTop > 3150) {
    $('.pic11').classList.add('on');
  } else {
    $('.pic11').classList.remove('on');
  }

  if (scrollTop > 3950) {
    $('.pic13').classList.add('on');
  } else {
    $('.pic13').classList.remove('on');
  }

  if (scrollTop > 4000) {
    $('.pic15').classList.add('on');
  } else {
    $('.pic15').classList.remove('on');
  }

  if (scrollTop > 4150) {
    $('.pic14').classList.add('on');
  } else {
    $('.pic14').classList.remove('on');
  }

  if (scrollTop > 4900) {
    $('.pic18').classList.add('on');
  } else {
    $('.pic18').classList.remove('on');
  }

  if (scrollTop > 5000) {
    $('.pic17').classList.add('on');
  } else {
    $('.pic17').classList.remove('on');
  }

  if (scrollTop > 5200) {
    $('.pic16').classList.add('on');
  } else {
    $('.pic16').classList.remove('on');
  }
})