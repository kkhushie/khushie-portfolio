
gsap.to(".cover", 1.5, {
    opacity: 1,
    // y:-1200,
    height: 0,
    // duration:1.3,
    delay: 1.7,
    stagger: {
        amount: 0.2
    },
    ease: "power4.inOut"
})
// gsap.to(".cover",{
//     opacity:1,
//     y:0,
//     delay:2
// })
gsap.to(".cover .text .first", {
    x: 0, duration: 0.9,



})
gsap.to(".cover .text .third", {
    pin: true,
    x: 0, duration: 0.9,

})
gsap.to(".cover .text .fifth", {
    pin: true,
    x: 0, duration: 0.9,

})
gsap.to(".cover .text .seventh", {
    pin: true,
    x: 0, duration: 0.9,

})
gsap.to(".cover .text .ninth", {
    pin: true,
    x: 0, duration: 0.9
})

gsap.to(".cover .text .second", {
    pin: true,
    x: 0, duration: 0.9,
    delay: 0.2
})
gsap.to(".cover .text .forth", {
    delay: 0.2,
    x: 0, duration: 0.9
})
gsap.to(".cover .text .sixth", {
    delay: 0.2,
    x: 0, duration: 0.9
})
gsap.to(".cover .text .eighth", {
    delay: 0.2,
    x: 0, duration: 0.9
})
gsap.to(".cover .text .tenth", {
    delay: 0.2,
    x: 0, duration: 0.9
})
gsap.to(".cover .text .twe", {
    delay: 0.2,
    x: 0, duration: 0.9
})
gsap.to(".cover .text .eleventh", {
    x: 0, duration: 0.9
})
gsap.to(".cover .text .thirteen", {
    x: 0, duration: 0.9
})
gsap.to(".cover .text .fourteen", {
    delay: 0.2,
    x: 0, duration: 0.9
})
gsap.to(".cover .text .fifteen", {
    x: 0,
    duration: 0.9
})
gsap.to(".cover .text .sixteen", {
    delay: 0.2,
    x: 0,
    duration: 0.9
})
gsap.to(".cover .text .seventeen", {
    x: 0,
    duration: 0.9
})
gsap.to(".logo", {
    y: 0,
    // x:0,
    delay: 1.7,
pin:true,
    duration: 1.5,
    // height: "190px",
    ease: "power4.inOut",
    stagger: {
        amount: 0.5
    }

})
let overlay = document.querySelector(".overlay")

function overlaystyle() {
    overlay.style.display = "none"
}
gsap.to(".overlay", {
   
    height: 0,
    delay: 3.9,
   
   
})
gsap.to(".bar", 1.5, {
    height: 0,
    delay:1.5,
    stagger: {
        amount: 0.5
    },
    ease: "power4.inOut",
  
})
gsap.from("p", 1.5, {
    delay: 1.9,
    y: 700,
    stagger: {
        amount: 0.5
    },
    ease: "power4.inOut"
})
gsap.from(".content h1", 1.5, {
    delay: 1.9,
    y: 700,
    stagger: {
        amount: 0.5
    },
    ease: "power4.inOut"
})
gsap.from(".menu div", 1.5, {
    delay: 1.9,
    y: 700,
    stagger: {
        amount: 0.5
    },
    ease: "power4.inOut"
})
gsap.from(".main2", 1.5, {
    delay: 1.7,
    y: 700,
    stagger: {
        amount: 0.5
    },
    ease: "power4.inOut"
})
gsap.to(".menu div", {
    scale: 0.91,
    repeat: -1,
    ease: "power4.inOut",
    // duration:1.2
})
// let menues = document.querySelectorAll(".menu div");
// menues.forEach(function (e) {
//     e.addEventListener("click", function () {
//         alert("cliked")
//     })
// })
let manubar = document.querySelectorAll(".mn")
manubar.forEach(function (e) {
e.addEventListener("click", function () {
    alert("Helllo")
})
})
gsap.to(".main-two",{
    opacity:1,
    duration:0.3,
    scrollTrigger:{
        trigger:".main-two",
        scroller:"body",
        start:" 60% bottom",
        end:"50% top ",
        scrub:3,
    
    }
})
gsap.to(".main-three",{
    opacity:1,
    height:"20vh",
    scrollTrigger:{
        trigger:".main-three",
        scroller:"body",
        start:" 60% top",
        end:"10% top ",
        scrub:3,
    }
})
gsap.to(".cl", {
    opacity:1,
    // stagger: {
    //     amount: 0.7
    // },
    duration:0.3,
    scrollTrigger:{
        trigger:".cl",
        scroller:"body",
        start:" 80% top",
        end:"50% top ",
        scrub:2,
    },
    ease: "power4.inOut",
  
})
