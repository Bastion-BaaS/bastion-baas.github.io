$(document).ready(function() {
  const removeClasses = (numExcluded) => {
    for (let i = 1; i <= 10; i++) {
      if (i === numExcluded) { continue }
      $(`#sidebar ul li:nth-child(${i})`).removeClass("active-link");
    }
  }

  const addClass = (section) => {
    $(`#sidebar ul li:nth-child(${section})`).addClass("active-link");
  }

  $(window).scroll(function() {
    let scrollPos = $(window).scrollTop();
    
    let section1Top = $("body").offset().top;
    let section2Top = $(".two").offset().top - 200;
    let section3Top = $(".three").offset().top - 400;
    let section4Top = $(".four").offset().top - 400;
    let section5Top = $(".five").offset().top - 400;
    let section6Top = $(".six").offset().top - 400;
    let section7Top = $(".seven").offset().top - 400;
    let section8Top = $(".eight").offset().top - 400;
    let section9Top = $(".nine").offset().top - 400;
    let section10Top = $(".ten").offset().top - 25;

    let sections = [
      section1Top,
      section2Top,
      section3Top,
      section4Top,
      section5Top,
      section6Top,
      section7Top,
      section8Top,
      section9Top,
      section10Top
    ]

    for (let i = 1; i <= 10; i++) {
      if (scrollPos >= sections[i-1] && (sections[i] === undefined || scrollPos < sections[i])) {
        addClass(i)
        removeClasses(i);
      } 
    }
  });
});