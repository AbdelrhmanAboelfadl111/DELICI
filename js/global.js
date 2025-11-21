function playSound(id) {
    $(id)[0].currentTime = 0;
    $(id)[0].play();
};
function openPopUp(classNamePopUp) {
    document.querySelector("." + classNamePopUp).classList.add("show");
};
function closePopUp(classNamePopUp) {
    setTimeout(
        function () {
            document.querySelector("." + classNamePopUp).classList.remove("show");
        }, 300
    );
};
function stopClose(classNameBox) {
    document.querySelector("." + classNameBox).addEventListener("click", (e) => {
        e.stopPropagation();
    });
}
function scrolled() {
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 1) {
            $("nav").addClass("scrolled");
        } else {
            $("nav").removeClass("scrolled");
        }
    })
}
function toScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        const navHeight = document.getElementById("NAV").offsetHeight;

        if (target) {
            // شغّل lenis
            lenis.start();

            // اقفل الناف الجانبية لو مفتوحة
            document.querySelectorAll(".pop-up-nav.show").forEach(p => {
                p.classList.remove("show");
            });
            lenis.scrollTo(target, {
                offset: -navHeight,
                duration: 1.2,
                easing: (t) => 1 - Math.pow(2, -10 * t)
            });
        }
    });
});

}
function activateNavOnScroll() {
    const allLiItemsForCleanup = document.querySelectorAll(
        "nav .nav-links ul li, .nav-links ul li"
    );
    const allLinks = document.querySelectorAll(
        "nav .nav-links ul li a, .nav-links ul li a"
    );
    var navHeight = document.getElementById("NAV").offsetHeight;
    function updateActive(scrollPos) {
        allLiItemsForCleanup.forEach(i => i.classList.remove("active"));
        let foundActive = false;
        allLinks.forEach(link => {
            if (foundActive) return;
            const sectionId = link.getAttribute("href");
            const section = document.querySelector(sectionId);
            if (!section) return;
            const sectionTop = section.offsetTop - (navHeight + 150);
            const sectionBottom = sectionTop + section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                const activeLinks = document.querySelectorAll(`a[href="${sectionId}"]`);
                
                activeLinks.forEach(activeLink => {
                    activeLink.closest('li').classList.add("active");
                });
                foundActive = true; 
            }
        });
    }
    if (window.lenis) {
        lenis.on("scroll", e => {
            updateActive(e.scroll);
        });
    } else {
        window.addEventListener("scroll", () => {
            updateActive(window.scrollY);
        });
    }
}