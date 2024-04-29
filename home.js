var tl = gsap.timeline();


function svg() {
    
 var svg = document.querySelector(".string svg");
var finalPath = "M 10 150 Q 700 150 1390 150";
var currentPath = "M 10 150 Q 700 150 1390 150";


svg.addEventListener('mousemove', function (e) {
    let y = e.y;
    let x = e.x;
    currentPath = `M 10 150 Q ${x} ${y} 1390 150`;
    gsap.to("svg path",{
        attr:{d:currentPath},
        duration:0.2,
        ease:"power3.out"
    })
})



svg.addEventListener('mouseleave', function () {
    gsap.to("svg path",{
        attr:{d:finalPath},
        ease:"elastic.out(1,0.2)"
    })
})
};
svg();