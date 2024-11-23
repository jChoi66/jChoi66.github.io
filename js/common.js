let navLi = document.querySelector('.menutxt').querySelectorAll('li');
let mimgLi = document.querySelector('.main_img').querySelectorAll('li');
navLi.forEach((li, index) => {
  li.addEventListener('mouseover', function () {
    mimgLi.forEach((li, index) => {
      li.classList.remove('on');
    });
    mimgLi[index].classList.add('on');
  });
});