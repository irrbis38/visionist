document.addEventListener('DOMContentLoaded', function (event) {
  let controller = new ScrollMagic.Controller();

  // move about block
  let moveAboutBlock = gsap.timeline().to('.about__container', { x: '-105%' });

  new ScrollMagic.Scene({
    triggerElement: '.about__container',
    triggerHook: 'onLeave',
    duration: '200%',
  })
    .setPin('.about__container')
    .setTween(moveAboutBlock)
    .addTo(controller);

  // move blue figure
  new ScrollMagic.Scene({
    triggerElement: '.svg-image-pathnew',
    triggerHook: 'onLeave',
    offset: '800%',
    duration: '400%',
  })
    .setPin('.svg-image-pathnew')
    // .addIndicators()
    .addTo(controller);

  // change scale of blue figure
  const TL_changeScale = gsap
    .timeline()
    .fromTo('.svg-image-pathnew', { scale: 1 }, { scale: 20 });

  new ScrollMagic.Scene({
    triggerElement: '.build',
    triggerHook: 'onLeave',
    offset: '250%',
    duration: '25%',
  })
    .setPin('.svg-image-pathnew')
    .setTween(TL_changeScale)
    // .addIndicators()
    .addTo(controller);

  // change opacity of blue figure
  const TL_changeFillOpacity = gsap
    .timeline()
    .fromTo('.blue__path', { fillOpacity: 0.06 }, { fillOpacity: 1 });

  new ScrollMagic.Scene({
    triggerElement: '.build',
    triggerHook: 'onLeave',
    offset: '250%',
    duration: '25%',
  })
    .setPin('.svg-image-pathnew')
    .setTween(TL_changeFillOpacity)
    // .addIndicators()
    .addTo(controller);

  // fix the build block
  new ScrollMagic.Scene({
    triggerElement: '.build',
    triggerHook: 'onLeave',
    duration: '110%',
  })
    .setPin('.build', { pushFollowers: true })
    // .addIndicators()
    .addTo(controller);

  // build__title color
  const TL_titleColorChange = gsap
    .timeline()
    .fromTo(
      '.build__title',
      { color: '#0c2742', scale: 1.56, translateX: '-52%', translateY: '125%' },
      { color: '#fff', scale: 1, translateX: '0', translateY: '0' }
    );

  new ScrollMagic.Scene({
    triggerElement: '.build',
    triggerHook: 'onLeave',
    offset: '250%',
    duration: '25%',
  })
    .setTween(TL_titleColorChange)
    // .addIndicators()
    .addTo(controller);

  // change opacity of block info
  const TL_changeBuildOpacity = gsap
    .timeline()
    .fromTo('.build__hidden', { opacity: 0 }, { opacity: 1 });

  new ScrollMagic.Scene({
    triggerElement: '.build',
    triggerHook: 'onLeave',
    offset: '600%',
    duration: '40%',
  })
    .setTween(TL_changeBuildOpacity)
    // .addIndicators()
    .addTo(controller);
});
