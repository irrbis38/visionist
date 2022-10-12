document.addEventListener("DOMContentLoaded", function (event) {
  const first = document.querySelector(".first");
  const aboutBlock = document.querySelector(".about");
  const buildBlock = document.querySelector(".build");

  gsap.registerPlugin(ScrollTrigger);

  // move about block
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
      end: () => first.offsetHeight * 6,
      scrub: true,
      pin: true,
    },
  });

  // change scale of blue figure
  const TL_changeScale = gsap.timeline();
  TL_changeScale.fromTo(".svg-image-pathnew", { scale: 1 }, { scale: 20 });
  ScrollTrigger.create({
    animation: TL_changeScale,
    trigger: ".build",
    start: "top top",
    end: `bottom top`,
    scrub: true,
    pin: true,
  });

  // change opacity of blue figure
  const TL_changeFillOpacity = gsap.timeline();
  TL_changeFillOpacity.fromTo(
    ".blue__path",
    { fillOpacity: 0.06 },
    { fillOpacity: 1 }
  );

  ScrollTrigger.create({
    animation: TL_changeFillOpacity,
    trigger: ".build",
    start: "top top",
    end: `+=900px`,
    scrub: true,
  });

  // build__title color
  const TL_titleColorChange = gsap.timeline();
  TL_titleColorChange.fromTo(
    ".build__title",
    { color: "#0c2742", scale: 1.56, translateX: "-52%", translateY: "125%" },
    { color: "#fff", scale: 1, translateX: "0", translateY: "0" }
  );

  ScrollTrigger.create({
    animation: TL_titleColorChange,
    trigger: ".build",
    start: "top top",
    end: `+=900px`,
    scrub: true,
  });

  // change scale of blue figure
  // const TL_changeBuildOpacity = gsap.timeline();
  // TL_changeBuildOpacity.fromTo(
  //   ".build__hidden",
  //   { opacity: 0 },
  //   { opacity: 1 }
  // );
  // ScrollTrigger.create({
  //   animation: TL_changeBuildOpacity,
  //   trigger: ".build",
  //   start: "5000px",
  //   end: `+=400px`,
  //   scrub: true,
  //   pin: true,
  //   markers: true,
  // });
});

const buildBlock = document.querySelector(".build");
elem.getBoundingClientRect();
// window.addEventListener("scroll", () => {
//   console.dir(document.body);
// });

console.dir(buildBlock.getBoundingClientRect().top);
