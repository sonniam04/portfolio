function menubar() {
    let nav = document.getElementById("navigation-bar")
    nav.classList.toggle("toggle")
}
function scrollToAbout(section) {
    let nav = document.getElementById("navigation-bar")
    nav.classList.toggle("toggle")
    const view = document.getElementById(section);
    view.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    
}
function initSlider() {
  let current = 0;
  const slides = document.querySelectorAll('.slide');
  const total = slides.length;
    console.log(slides)
  function moveSlide(direction) {
    slides.forEach(slide => slide.classList.remove("active"));

    current = (current + direction + total) % total;

    slides[current].classList.add("active");
  }

  document.querySelector(".next").onclick = () => moveSlide(1);
  document.querySelector(".prev").onclick = () => moveSlide(-1);
}

initSlider();
