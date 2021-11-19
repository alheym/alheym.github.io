window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
          menuItem = menu.querySelectorAll('.menu__item'),
          hamburger = document.querySelector('.hamburger');
    
          hamburger.addEventListener('click', () => {
              hamburger.classList.toggle('hamburger__active');
              menu.classList.toggle('menu__active');
          });

          menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('hamburger__active');
                menu.classList.remove('menu__active');
            });
          });

});