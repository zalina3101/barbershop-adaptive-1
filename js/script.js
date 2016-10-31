var navMain = document.querySelector('.menu');
var navToggle = document.querySelector('.menu__toggle');
var navWrapper = document.querySelector('.menu__wrapper');

navMain.classList.remove('.menu--nojs');

  navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('menu__toggle--closed')) {
        navToggle.classList.remove('menu__toggle--closed');
        navWrapper.classList.remove('menu__wrapper--closed');
        navToggle.classList.add('menu__toggle--opened');
        navWrapper.classList.add('menu__wrapper--opened');
      } else {
        navToggle.classList.add('menu__toggle--closed');
        navWrapper.classList.add('menu__wrapper--closed');
        navToggle.classList.remove('menu__toggle--opened');
        navWrapper.classList.remove('menu__wrapper--opened');
      }
});
