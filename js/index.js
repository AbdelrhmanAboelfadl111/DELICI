const carouselEl = document.getElementById('carouselExampleCaptions');
const audio = document.getElementById("myAudio");
const lenis = new Lenis({
  duration: 1.2,
  smooth: true,
});
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    lenis.start();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      lenis.scrollTo(target, {
        offset: 0,
        duration: 1.2,
        easing: (t) => 1 - Math.pow(2, -10 * t)
      });
    }
  });
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
document.addEventListener('wheel', function (e) {
    if (e.target.closest('.pop-up')) {
        e.stopPropagation();
    }
}, { passive: false });
document.addEventListener('touchmove', function (e) {
    if (e.target.closest('.pop-up')) {
        e.stopPropagation();
    }
}, { passive: false });

// =============================================================================================

$(window).on("load", function() {
    setTimeout(() => {
        $("div.loading").addClass("unshow");
    }, 2000);
});
$(".nav-links ul li ").click(function () {
    $(".nav-links ul li ").removeClass("active");
    $(this).addClass("active");
});
$(".nav-links-side ul li ").click(function () {
    $(".nav-links-side ul li ").removeClass("active");
    $(this).addClass("active");
});
$(".menu").click(function () {
    const targetOffset = $('section#Menu').offset().top;
    const navHeight = $('#NAV').outerHeight(); // ارتفاع الناف بالبيكسل
    lenis.scrollTo(targetOffset - navHeight, { // نطرح ارتفاع الناف
        duration: 1.2,
        easing: (t) => 1 - Math.pow(2, -10 * t)
    });
});
carouselEl.addEventListener('slide.bs.carousel', function (e) {
    audio.currentTime = 0; 
    audio.play();
});
scrolled();
toScroll();
activateNavOnScroll();