document.addEventListener("DOMContentLoaded", function (event) {
  let controller = new ScrollMagic.Controller();

  // fix header by scroll
  new ScrollMagic.Scene({
    triggerElement: ".first",
    triggerHook: "onLeave",
    offset: "20px",
    duration: 0,
  })
    .setClassToggle(".first", "fixed")
    // .addIndicators()
    .addTo(controller);

  // move about block
  let moveAboutBlock = gsap.timeline().to(".about__container", { x: "-105%" });

  new ScrollMagic.Scene({
    triggerElement: ".about__container",
    triggerHook: "onLeave",
    duration: "200%",
  })
    .setPin(".about__container")
    .setTween(moveAboutBlock)
    .addTo(controller);

  // move blue figure
  new ScrollMagic.Scene({
    triggerElement: ".svg-image-pathnew",
    triggerHook: "onLeave",
    offset: "800%",
    duration: "400%",
  })
    .setPin(".svg-image-pathnew")
    // .addIndicators()
    .addTo(controller);

  // change scale of blue figure
  const TL_changeScale = gsap
    .timeline()
    .fromTo(".svg-image-pathnew", { scale: 1 }, { scale: 20 });

  new ScrollMagic.Scene({
    triggerElement: ".build",
    triggerHook: "onLeave",
    offset: "250%",
    duration: "25%",
  })
    .setPin(".svg-image-pathnew")
    .setTween(TL_changeScale)
    // .addIndicators()
    .addTo(controller);

  // change opacity of blue figure
  const TL_changeFillOpacity = gsap
    .timeline()
    .fromTo(".blue__path", { fillOpacity: 0.06 }, { fillOpacity: 1 });

  new ScrollMagic.Scene({
    triggerElement: ".build",
    triggerHook: "onLeave",
    offset: "250%",
    duration: "25%",
  })
    .setPin(".svg-image-pathnew")
    .setTween(TL_changeFillOpacity)
    // .addIndicators()
    .addTo(controller);

  // fix the build block
  new ScrollMagic.Scene({
    triggerElement: ".build",
    triggerHook: "onLeave",
    duration: "150%",
  })
    .setPin(".build", { pushFollowers: true })
    // .addIndicators()
    .addTo(controller);

  // build__title color
  const TL_titleColorChange = gsap
    .timeline()
    .fromTo(
      ".build__title",
      { color: "#0c2742", scale: 1.56, translateX: "-52%", translateY: "125%" },
      { color: "#fff", scale: 1, translateX: "0", translateY: "0" }
    );

  new ScrollMagic.Scene({
    triggerElement: ".build",
    triggerHook: "onLeave",
    offset: "250%",
    duration: "25%",
  })
    .setTween(TL_titleColorChange)
    // .addIndicators()
    .addTo(controller);

  // change opacity of block info
  const TL_changeBuildOpacity = gsap
    .timeline()
    .fromTo(".build__hidden", { opacity: 0 }, { opacity: 1 });

  new ScrollMagic.Scene({
    triggerElement: ".build",
    triggerHook: "onLeave",
    offset: "600%",
    duration: "40%",
  })
    .setTween(TL_changeBuildOpacity)
    // .addIndicators()
    .addTo(controller);

  // change opacity of block info
  const TL_translateBuildMore = gsap
    .timeline()
    .fromTo(".build__more", { opacity: 0, y: "50px" }, { opacity: 1, y: "0" });

  new ScrollMagic.Scene({
    triggerElement: ".build",
    triggerHook: "onLeave",
    offset: "650%",
    duration: "10%",
  })
    .setTween(TL_translateBuildMore)
    .addTo(controller);

  // .news-pathnew translate
  const TL_newFigureTransform = gsap
    .timeline()
    .fromTo(".news-pathnew", { translateY: "40%" }, { translateY: "-10%" });

  new ScrollMagic.Scene({
    triggerElement: ".news",
    triggerHook: "onLeave",
    duration: "70%",
  })
    .setTween(TL_newFigureTransform)
    // .addIndicators()
    .addTo(controller);

  // .news-pathnew change color
  const TL_newPathChangeColor = gsap
    .timeline()
    .fromTo(
      ".news__path",
      { fill: "#1B75BC", fillOpacity: "0.06" },
      { fill: "#02AD23", fillOpacity: "1" }
    );

  new ScrollMagic.Scene({
    triggerElement: ".news",
    triggerHook: "onLeave",
    duration: "70%",
  })
    .setTween(TL_newPathChangeColor)
    // .addIndicators()
    .addTo(controller);

  // Slider in news block
  const newsSwiper = new Swiper(".news__slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });

  document
    .querySelector(".testimonials__prev")
    .addEventListener("click", () => {
      console.log("prev");
    });

  // Slider in testimonials block
  const testimonialsSwiper = new Swiper(".testimonials__slider", {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".prev",
      prevEl: ".next",
    },
  });

  // map
  const body = document.body;
  const mapOpener = document.querySelector(".footer__map");
  const map = document.querySelector(".map");
  const mapOverlay = document.querySelector(".map__overlay");
  const mapClose = document.querySelector(".map__close");

  mapOpener.addEventListener("click", () => {
    map.classList.add("active");
    body.classList.add("lock");
  });

  mapOverlay.addEventListener("click", () => {
    map.classList.remove("active");
    body.classList.remove("lock");
  });

  mapClose.addEventListener("click", () => {
    map.classList.remove("active");
    body.classList.remove("lock");
  });

  // Scroll over the page
  // const scrollButton = document.querySelector(".intro__scroll");

  // const scrolldelay = setTimeout(pageScroll, 1);

  // function pageScroll() {
  //   window.scrollBy(0, 5);
  //   scrolldelay;
  // }

  // scrollButton.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   pageScroll();
  // });

  // console.dir(window);
});
