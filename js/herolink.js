window.onload = function (){

  let hero = document.querySelector('.hero');

  let herolink = document.querySelector('.hero-link-box');

  let linkbox = document.querySelector('.hero-link');

  hero.appendChild(herolink);

  linkbox.addEventListener('click',function () {

    document.body.scrollTop = 650;

    document.documentElement.scrollTop = 650;
  })
}
