function navSlide() {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".menu-links");
    const navLinks = document.querySelectorAll(".menu-links li");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("menu-active");

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s';
            }
        });
    });
}

navSlide();


const anchor = document.getElementsByClassName("anchor");

for(i=0;i<anchor.length;i++) {
    anchor[i].onclick = function() {

        for(i=0;i<anchor.length;i++) {
            anchor[i].classList.remove("current");
        };

        this.classList.add("current");
    };
}


const fadeInUp = document.querySelectorAll(".fade-in-up");
const fadeZero = document.querySelectorAll(".why-box");
const fadeImg = document.querySelectorAll(".img-fade");


appearOptions = {
    threshold: "0.5",
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll)
    {
        entries.forEach(entry=> {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
}
,appearOptions);

fadeInUp.forEach(fadeInUp => {
    appearOnScroll.observe(fadeInUp);
});

fadeZero.forEach(fadeZero => {
    appearOnScroll.observe(fadeZero);
});

fadeImg.forEach(fadeImg => {
    appearOnScroll.observe(fadeImg);
});