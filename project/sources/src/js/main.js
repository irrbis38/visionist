document.addEventListener("DOMContentLoaded", function (event) {
  const tl = gsap.timeline();
  tl.fromTo(".about__container", { x: "0", y: "0" }, { x: "-105%", y: "0" });

  const aboutBlock = document.querySelector(".about");
  ScrollTrigger.create({
    animation: tl,
    trigger: ".about",
    start: "top top",
    end: () => aboutBlock.offsetWidth * 2,
    scrub: true,
    pin: true,
    markers: true,
  });
});
