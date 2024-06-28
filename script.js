let time = gsap.timeline();
time.from(".navbar h1", {
  y: -30,
  opacity: 0,
  duration: 1,
});
time.from(".navbar li", {
  y: -30,
  opacity: 0,
  stagger: 0.3,
});
time.from("h2", {
    scale:0,
    opacity:0,
//   scrollTrigger:{
//     trigger:" h2",
//     scroller:"body",
//     markers:true,
//     start:"top 0%",
//     end:"top -200%",
//     scrub:1,
//     duration:1,
//     pin:true,
//   }
});
gsap.from(".page_1 .Box_1", {
  scale: 0,
  opacity: 0,
  rotate: 360,
  duration: 1,
  x: 300,
  scrollTrigger: {
    trigger: ".page_1 .Box_1",
    scroller: "body",
    // markers:true,
    start: "top 50%",
    end: "top 40%",
    scrub: 2,
  },
});
gsap.from(".page_1 .Box_4", {
  scale: 0,
  opacity: 0,
  rotate: 360,
  duration: 1,
  x: -300,
  scrollTrigger: {
    trigger: ".page_1 .Box_1",
    scroller: "body",
    // markers:true,
    start: "top 40%",
    end: "top 30%",
    scrub: 2,
  },
});

gsap.to(".Scroller2 h1", {
  transform: "translate(-255%)",
  scrollTrigger: {
    trigger: ".Scroller2 ",
    scroller: "body",
    // markers:true,
    start: "top 0%",
    end: "top -300%",
    scrub: 3,
    pin: true,
  },
});

var path = "M 200 500 Q 750 500 1700 500";
var finalpath = "M 200 500 Q 750 500 1700 500";
var string = document.querySelector(".svg");

string.addEventListener("mousemove", function (dets) {
  path = `M 200 500 Q ${dets.x} ${dets.y} 1700 500`;

  gsap.to(".svg path", {
    attr: { d: path },
    duration: 0.2,
    ease: "circ.out",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to(".svg path", {
    attr: { d: finalpath },
    duration: 0.3,
    ease: "elastic.out(1,0.2)",
  });
});


var maincursor = document.querySelector("body")
var copycursor = document.querySelector(".cursor")

maincursor.addEventListener("mousemove" , function(moment) {

  gsap.to(copycursor , {
    x:moment.x,
    y:moment.y,
    duration:1,
    ease: "back.out(4)",
  })
})

var backimg = document.querySelector(".backimg" )

backimg.addEventListener("mouseenter" , function() {
    gsap.to(copycursor , {
        scale:2,
         background:"rgb(123, 66, 66)"
    })
})
backimg.addEventListener("mouseout" , function() {
    gsap.to(copycursor , {
        scale:1,
        background:"red",
       
    })
})



var navtime = gsap.timeline()

navtime.to(".sidemenu" , {
  right:0,
  duration:0.4,
})
navtime.from(".sidemenu h3" , {
  x:100,
  stagger:0.2,
  opacity:0,
  duration:0.4
})
navtime.from(".sidemenu i " , {
  opacity:0
})
navtime.pause()
var openbtn = document.querySelector(".navmanu i")
var closebtn = document.querySelector(".sidemenu i")

openbtn.addEventListener("click" , function() {
  navtime.play()
})

closebtn.addEventListener("click" ,function() {
  navtime.reverse()
})