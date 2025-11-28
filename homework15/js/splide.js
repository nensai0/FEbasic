var splide = new Splide(".splide", {
  arrows: false,
  pagination: false,
});
splide.mount();
// Все кнопки
var buttons = document.querySelectorAll("#custom-pagination [data-slide]");

// При клике — переходим на выбранный слайд
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    var index = parseInt(button.getAttribute("data-slide"));
    splide.go(index);
  });
});

splide.on("move", function (newIndex) {
  buttons.forEach((btn) => btn.classList.remove("active"));
  buttons[newIndex].classList.add("active");
});

document.addEventListener('DOMContentLoaded', function () {
  new Splide('.testimonials', {
    type: 'loop',
    perPage: 1,
    pagination: true,
    arrows: false,
    autoplay: true,
    interval: 5000,
  }).mount();
});