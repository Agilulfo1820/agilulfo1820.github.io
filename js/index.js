$( document ).ready(function() {


    /* Smooth scrolling */
    function scrollToTarget(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    document.querySelectorAll('a[data-scroll="true"]').forEach(function(a) {
      a.addEventListener('click', scrollToTarget);
    });


    /* Menu toggle */
    function toggleMenu(e) {
      e.preventDefault();
      var menu = document.getElementById('main-menu');
      menu.classList.toggle('open');
      if (this.getAttribute('aria-expanded') === 'true') {
        this.setAttribute('aria-expanded', 'false');
      } else {
        this.setAttribute('aria-expanded', 'true');
      }
    }
    var toggle = document.getElementById('menu-toggle');
    toggle.addEventListener('click', toggleMenu);


});
