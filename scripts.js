
Shery.mouseFollower({
    //Parameters are optional.
    // skew: true,
    // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    // duration: 1,
    text: "Alok",
    debug: true,
});
Shery.makeMagnet(".magnet-target" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});
Shery.makeMagnet(".social1" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.makeMagnet(".fheading" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

// Shery.makeMagnet(".tag" /* Element to target.*/, {
//     //Parameters are optional.
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
// });

Shery.makeMagnet(".random-btn" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.makeMagnet(".reviewimage" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
    debug: true,
});


Shery.hoverWithMediaCircle(".homevid", {
    // images: ["./assets/logo.png"],
    videos: ["https://videos.pexels.com/video-files/3252855/3252855-uhd_2560_1440_25fps.mp4"]

});
Shery.hoverWithMediaCircle(".homemain", {
    images: ["./assets/logo.png"],

});


//Image Slider
gsap.to(".fleftelm", {
    scrollTrigger: {
        trigger: "#fimages1",
        pin: true,
        start: "top top",
        end: "buttom buttom",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power1
})
let sections1 = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images1", {
    style: 5,
    config: { onMouse: { value: 1 } },
    slideStyle: (setScroll) => {
        sections1.forEach(function (section, index) {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function (prog) {
                    setScroll(prog.progress + index)
                },
            });
        });
    },
});

gsap.to(".frightelm", {
    scrollTrigger: {
        trigger: "#fimages2",
        pin: true,
        start: "top top",
        end: "buttom buttom",
        endTrigger: ".last2",
        scrub: 1
    },
    y: "-300%",
    ease: Power1
})
let sections2 = document.querySelectorAll(".frightelm");
Shery.imageEffect(".images2", {
    style: 5,
    config: { onMouse: { value: 1 } },
    slideStyle: (setScroll) => {
        sections2.forEach(function (section, index) {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function (prog) {
                    setScroll(prog.progress + index)
                },
            });
        });
    },
});

Shery.imageEffect(".img", {
    style: 6,
    //debug: true,
    gooey: true,
});




$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#right").toggleClass("show_list");
    $("#right").fadeIn();

});


//NavBar scroll

['about', 'course', 'service', 'activity', 'review', 'slider'].forEach(id => {
    document.getElementById(`${id}-link`).addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({
            top: document.getElementById(id === 'about' ? 'homelast' :
                id === 'course' ? 'featured1' :
                    id === 'service' ? 'featured2' :
                        id === 'activity' ? 'dev' : id).offsetTop - 50,
            behavior: 'smooth'
        });
    });
});
