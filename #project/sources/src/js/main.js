document.addEventListener("DOMContentLoaded", function (event) {
  let controller = new ScrollMagic.Controller();

  // Определение начального значения трансформации для build__title
  const TL_titleColorChangeWide = gsap.timeline().fromTo(
    ".build__title",
    {
      color: "#0c2742",
      scale: 1.56,
      translateX: "-52%",
      translateY: "125%",
    },
    { color: "#fff", scale: 1, translateX: "0", translateY: "0" }
  );

  const TL_titleColorChangeNarrow = gsap.timeline().fromTo(
    ".build__titleSmall",
    {
      color: "#0c2742",
      scale: 1.2,
      translateX: "24%",
      translateY: "125%",
    },
    { color: "#fff", scale: 1, translateX: "0", translateY: "0" }
  );

  // Создание сцен для смещения build__title

  const wideScene = new ScrollMagic.Scene({
    triggerElement: ".build",
    triggerHook: "onLeave",
    offset: "250%",
    duration: "25%",
  }).setTween(TL_titleColorChangeWide);

  const narrowScene = new ScrollMagic.Scene({
    triggerElement: ".build",
    triggerHook: "onLeave",
    offset: "250%",
    duration: "25%",
  }).setTween(TL_titleColorChangeNarrow);

  wideScene.addTo(controller);
  narrowScene.addTo(controller);

  //====================================================
  // fix header by scroll
  new ScrollMagic.Scene({
    triggerElement: ".first",
    triggerHook: "onLeave",
    offset: "20px",
    duration: 0,
  })
    .setClassToggle(".first", "fixed")
    .addTo(controller);

  const tl = gsap.timeline();
  tl.fromTo(
    ".about__container",
    { x: "0", y: "0" },
    { x: "-50%", y: "0", duration: 9 }
  );

  ScrollTrigger.create({
    animation: tl,
    trigger: ".about",
    start: "top top",
    end: "bottom",
    scrub: true,
    pin: true,
  });
  //===========================

  // move blue figure
  new ScrollMagic.Scene({
    triggerElement: ".about",
    triggerHook: "onEnter",
    offset: "900px",
    duration: "5000px",
  })
    .setPin(".svg-image-pathnew")
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
    // .setPin('.svg-image-pathnew')
    .setTween(TL_changeScale)
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
    // .setPin('.svg-image-pathnew')
    .setTween(TL_changeFillOpacity)
    .addTo(controller);

  // fix the build block
  new ScrollMagic.Scene({
    triggerElement: ".build",
    triggerHook: "onLeave",
    duration: "900px",
  })
    .setPin(".build")
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
    .fromTo(".news-pathnew", { translateY: "40%" }, { translateY: "-23%" });

  new ScrollMagic.Scene({
    triggerElement: ".news",
    triggerHook: "onLeave",
    duration: "70%",
  })
    .setTween(TL_newFigureTransform)
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
    .addTo(controller);

  // .testimonials__infowrapper change color
  const TL_infowrapper = gsap
    .timeline()
    .fromTo(".testimonials__infowrapper", { opacity: "0" }, { opacity: "1" });

  new ScrollMagic.Scene({
    triggerElement: ".news",
    triggerHook: "onLeave",
    duration: "70%",
  })
    .setTween(TL_infowrapper)
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
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      767: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });

  // Slider in testimonials block
  const testimonialsSwiper = new Swiper(".testimonials__slider", {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
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

  // burger-menu
  const menuBurger = document.querySelector(".menu__burger");
  const burgerNavbar = document.querySelector(".burger__navbar");
  const burgerOverlay = document.querySelector(".burger__overlay");
  const burgerLinks = document.querySelectorAll(".burger__link");
  const burgerApply = document.querySelector(".burger__appply");

  menuBurger.addEventListener("click", () => {
    menuBurger.classList.toggle("active");
    burgerNavbar.classList.toggle("active");
    burgerOverlay.classList.toggle("active");
    body.classList.toggle("lock");
  });

  const hideBurgerNavbar = () => {
    menuBurger.classList.remove("active");
    burgerNavbar.classList.remove("active");
    burgerOverlay.classList.remove("active");
    body.classList.remove("lock");
  };

  burgerOverlay.addEventListener("click", hideBurgerNavbar);
  burgerApply.addEventListener("click", hideBurgerNavbar);
  burgerLinks.forEach((el) => el.addEventListener("click", hideBurgerNavbar));
});
