var menu = document.querySelector("#nav-prt2 i")
var full = document.querySelector("#full-scr-nav")

var flag = 0;
menu.addEventListener("click", function () {
    if (flag == 0) {

        full.style.top = "0%"
        document.querySelector("#nav h2").style.color = "#222"
        document.querySelector("#nav h3").style.color = "#222"
        document.querySelector("#nav i").style.color = "#222"
        flag = 1
    } else {
        full.style.top = "-100%"
        document.querySelector("#nav h2").style.color = "#dadada"
        document.querySelector("#nav h3").style.color = "#dadada"
        document.querySelector("#nav i").style.color = "#dadada"
        flag = 1
    }

})
var t1 = gsap.timeline()
t1.from("#page1 h1", {
    y: 60,
    duration: 0.7,
    opacity: 0
})
    .from("#page1 h2", {
        y: 50,
        duration: 0.7,
        opacity: 0,
        delay: "-0.2"
    })
    .from("#page1 h3", {
        y: 50,
        duration: 0.7,
        opacity: 0,
        delay: "-0.2"
    })
gsap.to("#page2 img", {
    scale: 1,
    scrollTrigger: {
        triggers: "#page1 h2",
        scroller: "body",
        markers: true,
        start: "top 80%",
        end: "top 0%",
        scrub: 3
    }

})
gsap.from("#page2 h1", {
    rotateX: "0",
    opacity: 1,
    scrollTrigger: {
        trigger: "#h11",
        scroller: "body",
        markers: true,
        start: "top 70%",
        end: "top 60%",
        scrub: 2
    }
})

var slide1h1 = document.querySelectorAll("#page6 .slide1-of-h1  h1");
slide1h1.forEach(function (elem) {
    gsap.to(elem, {
        tranform: 'translateX(-100%)',
        duration: 4,
        scrollTrigger: {
            trigger: "#page6",
            scroller: "body",
            scrub: 3
        }
    })

})
var slide2h1 = document.querySelectorAll("#page6 .slide2-of-h1  h1");
slide2h1.forEach(function (elem) {
    gsap.to(elem, {
        tranform: 'translateX(0%)',
        duration: 4,
        scrollTrigger: {
            trigger: "#page6",
            scroller: "body",
            scrub: 3
        }
    })

})

