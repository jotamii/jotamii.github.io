(function () {
  var navLinks = document.querySelectorAll('.menu a');
  var targets = [];

  navLinks.forEach(function (navLink) {
    var href = navLink.getAttribute('href');
    var target = document.querySelector(href);
    targets.push(target);

    navLink.addEventListener('click', function (event) {
      event.preventDefault();

      window.scroll({
        top: target.offsetTop - 50,
        behavior: "smooth"
      })
    })
  })
})()