const $ = (selector) => document.querySelector(selector);

setTimeout(() => {
  $('.title').classList.add('on');
}, "400");

$('#topbutton').addEventListener('click', () => {
  window.scrollTo(0,0);
});

// 메뉴
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
    menuLi[0].classList.add('on');
    mimgLi[0].classList.add('on');
  });
});
// 메뉴


let p01 = $('#section01').querySelector('.paragraph01');
let scrollPrev = 0;
window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  console.log(scrollTop);

  if (scrollTop > 1300) {
    $('#topbutton').classList.add('on');
  } else {
    $('#topbutton').classList.remove('on');
  }

  if (scrollTop > 1100) {
    $('#section01').querySelector('.mtitle').classList.add('on');
  } else {
    $('#section01').querySelector('.mtitle').classList.remove('on');
  }

  if (scrollTop > 1130) {
    p01.querySelectorAll('div')[0].style.opacity = '1';
  } else {
    p01.querySelectorAll('div')[0].style.opacity = '.1';
  }
  if (scrollTop > 1170) {
    p01.querySelectorAll('div')[1].style.opacity = '1';
  } else {
    p01.querySelectorAll('div')[1].style.opacity = '.1';
  }
  if (scrollTop > 1210) {
    p01.querySelectorAll('div')[2].style.opacity = '1';
  } else {
    p01.querySelectorAll('div')[2].style.opacity = '.1';
  }
  if (scrollTop > 1290) {
    p01.querySelectorAll('div')[3].style.opacity = '1';
  } else {
    p01.querySelectorAll('div')[3].style.opacity = '.1';
  }
  if (scrollTop > 1330) {
    p01.querySelectorAll('div')[4].style.opacity = '1';
  } else {
    p01.querySelectorAll('div')[4].style.opacity = '.1';
  }
  if (scrollTop > 1370) {
    p01.querySelectorAll('div')[5].style.opacity = '1';
  } else {
    p01.querySelectorAll('div')[5].style.opacity = '.1';
  }
  if (scrollTop > 1450) {
    p01.querySelectorAll('div')[6].style.opacity = '1';
  } else {
    p01.querySelectorAll('div')[6].style.opacity = '.1';
  }
  if (scrollTop > 1500) {
    p01.querySelectorAll('div')[7].style.opacity = '1';
  } else {
    p01.querySelectorAll('div')[7].style.opacity = '.1';
  }
  if (scrollTop > 1580) {
    p01.querySelectorAll('div')[8].style.opacity = '1';
  } else {
    p01.querySelectorAll('div')[8].style.opacity = '.1';
  }
  if (scrollTop > 1610) {
    p01.querySelectorAll('div')[9].style.opacity = '1';
  } else {
    p01.querySelectorAll('div')[9].style.opacity = '.1';
  }
  if (scrollTop > 1640) {
    p01.querySelectorAll('div')[10].style.opacity = '1';
  } else {
    p01.querySelectorAll('div')[10].style.opacity = '.1';
  }
  if (scrollTop > 1670) {
    p01.querySelectorAll('div')[11].style.opacity = '1';
  } else {
    p01.querySelectorAll('div')[11].style.opacity = '.1';
  }
  if (scrollTop > 1750) {
    p01.querySelectorAll('div')[12].style.opacity = '1';
  } else {
    p01.querySelectorAll('div')[12].style.opacity = '.1';
  }
  if (scrollTop > 1800) {
    p01.querySelectorAll('div')[13].style.opacity = '1';
  } else {
    p01.querySelectorAll('div')[13].style.opacity = '.1';
  }
  if (scrollTop > 1860) {
    p01.querySelectorAll('div')[14].style.opacity = '1';
  } else {
    p01.querySelectorAll('div')[14].style.opacity = '.1';
  }

  // if (scrollTop > 2000 && scrollTop < 2980) {
  //   if (scrollTop > scrollPrev) {
  //     // console.log('down');
  //     window.scrollTo(0,2980);
  //     scrollPrev = scrollTop;
  //   }
  //   if (scrollTop < scrollPrev) {
  //     // console.log('up');
  //     window.scrollTo(0,2000);
  //     scrollPrev = scrollTop;
  //   }
  // }

  if (scrollTop > 2600) {
    $('#section02').querySelector('.mtitle').classList.add('on');
  } else {
    $('#section02').querySelector('.mtitle').classList.remove('on');
  }

  if (scrollTop > 2800) {
    $('#section02').querySelector('.text01').classList.add('on');
  } else {
    $('#section02').querySelector('.text01').classList.remove('on');
  }

  if (scrollTop > 3000) {
    $('#section02').querySelector('.text02').classList.add('on');
  } else {
    $('#section02').querySelector('.text02').classList.remove('on');
  }

  if (scrollTop > 3200) {
    $('#section02').querySelector('.about_pic').classList.add('on');
  } else {
    $('#section02').querySelector('.about_pic').classList.remove('on');
  }

  if (scrollTop > 3350) {
    $('#section02').querySelector('.about_txt1').classList.add('on');
  } else {
    $('#section02').querySelector('.about_txt1').classList.remove('on');
  }

  if (scrollTop > 3600) {
    $('#section02').querySelector('.about_txt2').classList.add('on');
  } else {
    $('#section02').querySelector('.about_txt2').classList.remove('on');
  }

  if (scrollTop > 4400) {
    $('#section03').querySelector('.mtitle').classList.add('on');
  } else {
    $('#section03').querySelector('.mtitle').classList.remove('on');
  }

  if (scrollTop > 8400) {
    $('#section04').querySelector('.mtitle').classList.add('on');
  } else {
    $('#section04').querySelector('.mtitle').classList.remove('on');
  }

  if (scrollTop > 8600) {
    $('#section04').querySelector('.text01').classList.add('on');
  } else {
    $('#section04').querySelector('.text01').classList.remove('on');
  }

  if (scrollTop > 8700) {
    $('#section04').querySelector('.text02').classList.add('on');
  } else {
    $('#section04').querySelector('.text02').classList.remove('on');
  }

  if (scrollTop > 8800) {
    $('#section04').querySelector('.text03').classList.add('on');
  } else {
    $('#section04').querySelector('.text03').classList.remove('on');
  }

  if (scrollTop > 8900) {
    $('#section04').querySelector('.text04').classList.add('on');
  } else {
    $('#section04').querySelector('.text04').classList.remove('on');
  }

  if (scrollTop > 9000) {
    $('#section04').querySelector('.text05').classList.add('on');
  } else {
    $('#section04').querySelector('.text05').classList.remove('on');
  }

  if (scrollTop > 9100) {
    $('#section04').querySelector('.text06').classList.add('on');
  } else {
    $('#section04').querySelector('.text06').classList.remove('on');
  }

  let tt = -1;
  if (scrollTop > 4600) {
    
    setInterval(textOpacity,100);
  	function textOpacity() {
      if (tt < 30) {
        tt++;
        $('#section03 .paragraph01')
        .querySelectorAll('p')[tt].style.opacity = '1';
      }
	  }
  }

  if (scrollTop > 8840) {
    $('#header').classList.add('dark');
  } else {
    $('#header').classList.remove('dark');
  }
});


// section01
  let anchor = gsap.timeline({repeat: -1});
  anchor.to('#section01 .anchor', {y: 10, duration: 1});
  anchor.to('#section01 .anchor', {y: 0, duration: 1});


  gsap.to('#section01 .line', {
        
    height: 592,
      scrollTrigger: {
      trigger: "#section01",
      start: "400 top",
      end: "+=592",
      scrub: true,
      }
  });


// section02
  gsap.to('#section02 .line', {
        
    height: 438,
      scrollTrigger: {
      trigger: "#section02",
      start: "-1000 top",
      end: "+=438",
      scrub: true,
      }
  });


//section03
gsap.to('#section03 .line', {
        
  height: 438,
    scrollTrigger: {
    trigger: "#section03",
    start: "top bottom",
    end: "+=438",
    scrub: true,
    }
});

  gsap.to('#section03 .wapic1', {
        
    y: -400,
      scrollTrigger: {
      trigger: "#section03",
      start: "top top",
      end: 'bottom bottom',
      scrub: true,
      }
  });

  gsap.to('#section03 .wapic2', {
        
    y: -400,
      scrollTrigger: {
      trigger: "#section03",
      start: "top top",
      end: 'bottom bottom',
      scrub: true,
      }
  });

  gsap.to('#section03 .wapic3', {
        
    y: -400,
      scrollTrigger: {
      trigger: "#section03",
      start: "top top",
      end: 'bottom bottom',
      scrub: true,
      }
  });

  gsap.to('#section03 .wapic4', {
        
    y: -400,
      scrollTrigger: {
      trigger: "#section03",
      start: "top top",
      end: 'bottom bottom',
      scrub: true,
      }
  });

  gsap.to('#section03 .wapic5', {
        
    y: -400,
      scrollTrigger: {
      trigger: "#section03",
      start: "top top",
      end: 'bottom top',
      scrub: true,
      }
  });

  gsap.to('#section03 .wapic6', {
        
    y: -400,
      scrollTrigger: {
      trigger: "#section03",
      start: "top top",
      end: 'bottom top',
      scrub: true,
      }
  });

// section04

gsap.to('#section04 .line', {
        
  height: 438,
    scrollTrigger: {
    trigger: "#section04",
    start: "top bottom",
    end: "+=438",
    scrub: true,
    }
});

  $('#section04').querySelector('.button').addEventListener('mouseover', () => {
    $('.aleft').classList.add('on');
    $('.aright').classList.add('on');
  });
  $('#section04').querySelector('.button').addEventListener('mouseleave', () => {
    $('.aleft').classList.remove('on');
    $('.aright').classList.remove('on');
  });















  // gsap.to('.fix03', {
          
  //   scrollTrigger: {
  //     trigger: "#section03",
  //     start: "top top",
  //     end: 'bottom bottom',
  //     pin: true,
  //     pinSpacing: false,
  //     scrub: true,
  //   }
  // });

  // gsap.to('.horizontal03', {
        
  //   x: -2080,
  //     scrollTrigger: {
  //     trigger: "#section03",
  //     start: "top top",
  //     // end: () => "+=" + 1440,
  //     end: 'bottom bottom',
  //     // horizontal: true,
  //     scrub: true,
  //     }
  // });