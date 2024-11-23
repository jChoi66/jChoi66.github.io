const $ = (selector) => document.querySelector(selector);


$('#loading').querySelector('.button').addEventListener('mouseover', () => {
  $('.aleft').classList.add('on');
  $('.aright').classList.add('on');
});
$('#loading').querySelector('.button').addEventListener('mouseleave', () => {
  $('.aleft').classList.remove('on');
  $('.aright').classList.remove('on');
});

$('#loading').querySelector('.button').addEventListener('click', () => {
  $('#loading').querySelector('.star').classList.add('rotate');

setTimeout(() => {
  location.href = "main.html";
}, 1000);
});