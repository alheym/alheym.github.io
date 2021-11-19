const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      list = document.querySelector('.menu__overlay');
      close = document.querySelector('.menu__close');

      hamburger.addEventListener('click', () => {
            menu.classList.add('active');
      });

      close.addEventListener('click', () => {
          menu.classList.remove('active');
      });

      document.addEventListener('click', (e) => {
          if (e.target === list && menu.classList.contains('active')) {
              menu.classList.remove('active');
          }
      })

      document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {;
    lines[i].style.width = item.innerHTML;
});

$('.skills__item').each(function(i) {
    $(this).hover(function(e) {
        e.preventDefault();
        $('.skills__item__content').eq(i).toggleClass('skills__item__content_active');
        $('.skills__item__descr').eq(i).toggleClass('skills__item__descr_active');
    })
})

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");


        $('form').trigger('reset');
    });
    return false;
});



