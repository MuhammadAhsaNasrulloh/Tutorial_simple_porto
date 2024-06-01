document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('parallax-section').classList.add('parallax');
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      document.getElementById('mobile-menu').classList.add('hidden');
    });
  });

  document.getElementById('home-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('parallax-section').classList.add('parallax');
    document.getElementById('parallax-section').scrollIntoView({
      behavior: 'smooth'
    });
  });

  document.getElementById('nav-toggle').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  });