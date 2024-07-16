
document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.scroll-container > div');
    const paginationContainer = document.createElement('div');
    paginationContainer.classList.add('pagination-container');
    document.body.appendChild(paginationContainer);

    pages.forEach((page, index) => {
        const paginationDot = document.createElement('span');
        paginationDot.classList.add('pagination-dot');
        paginationDot.addEventListener('click', () => {
            page.scrollIntoView({ behavior: 'smooth', inline: 'start' });
            updatePagination(index);
        });
        paginationContainer.appendChild(paginationDot);
    });

    const updatePagination = (currentIndex) => {
        const dots = paginationContainer.querySelectorAll('.pagination-dot');
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };

    updatePagination(0);

    const container = document.querySelector('.scroll-container');
    container.addEventListener('scroll', () => {
        const currentIndex = Math.round(container.scrollLeft / container.clientWidth);
        updatePagination(currentIndex);
    });
});






const applyAnimations = () => {
    const t1 = gsap.timeline();

    document.querySelectorAll('.heading, .description').forEach(element => {
        gsap.fromTo(element,
            {
                y: -30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                delay: 0.2,
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    scroller: "body",
                }
            }
        );
    });

    t1.from('.p1img3', {
        y: -100,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
    });

    t1.from('.p2img1', {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
        scrollTrigger: {
            trigger: ".p2img2",
            scroller: "body",
            start: "top 60%",
            scrub: 4,
        },
    });

    t1.from('.p2img2', {
        y: -100,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
        scrollTrigger: {
            trigger: ".p2img2",
            scroller: "body",
            start: "top 60%",
            scrub: 4,
        },
    });

    gsap.from('.p1img2', {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
    });

    t1.from('.page3-right img', {
        y: -200,
        duration: 1,
        delay: 0.3,
        opacity: 0,
        scrollTrigger: {
            trigger: ".page3-right img",
            scroller: "body",
            start: "top 60%",
            end: "top 60%",
            scrub: 4,
        },
    });

    t1.from('.p4img1', {
        y: 200,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
        scrollTrigger: {
            trigger: ".p4img2",
            scroller: "body",
            start: "top 60%",
            scrub: 4,
        },
    });

    t1.from('.p4img2', {
        y: -200,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
        scrollTrigger: {
            trigger: ".p4img2",
            scroller: "body",
            start: "top 60%",
            scrub: 4,
        },
    });

    t1.from('.p5img1,.p5img2', {
        y: -100,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        scale: 0,
        scrollTrigger: {
            trigger: ".p5img1,.p5img2",
            scroller: "body",
            scrub: 4,
        },
    });

    t1.from('.p5img4,.p5img5', {
        y: 100,
        duration: 0.8,
        scrollTrigger: {
            trigger: ".p5img4,.p5img5",
            scroller: "body",
            scrub: 2,
        },
    });

    t1.from('.p5img3', {
        duration: 0.8,
        delay: 0.5,
        scale: 0.3,
        scrollTrigger: {
            trigger: ".p5img3",
            scroller: "body",
            scrub: 4,
        },
    });

    t1.from('.p6img1', {
        y: -300,
        duration: 0.8,
        delay: 0.5,
        scrollTrigger: {
            trigger: ".p6img1",
            scroller: "body",
            scrub: 2,
        },
    });

    t1.from('.p7img1,.p7img2', {
        y: -200,
        duration: 0.8,
        delay: 0.5,
        scrollTrigger: {
            trigger: ".p7img1,.p7img2",
            scroller: "body",
            scrub: 2,
        },
    });
};

if (window.innerWidth >= 700) {
    applyAnimations();
}

window.addEventListener('resize', () => {
    if (window.innerWidth >= 700) {
        applyAnimations();
    } else {
        gsap.globalTimeline.clear();
    }
});
