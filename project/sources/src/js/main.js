document.addEventListener("DOMContentLoaded", function (event) {
  const first = document.querySelector(".first");
  const aboutBlock = document.querySelector(".about");

  // move about block
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".about__container", {
    x: "-105%",
    scrollTrigger: {
      trigger: ".about__container",
      start: "top top",
      end: () => aboutBlock.offsetWidth * 2,
      scrub: true,
      pin: true,
    },
  });
  // move blue figure
  gsap.to(".svg-image-pathnew", {
    scrollTrigger: {
      trigger: ".svg-image-pathnew",
      start: () => first.offsetHeight * 2,
      end: () => first.offsetHeight * 4,
      scrub: true,
      pin: true,
    },
  });
});
