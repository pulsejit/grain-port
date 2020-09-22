// const tl = gsap.timeline();
// tl.from('li', 1.6, {
//     y:200,
//     ease:'power4.out',
//     // delay:1,
//     skewY:40,
//     stagger:{
//         amount:0.4
//     }
// });
// tl.from('p, .resume', 1.4, { y:100, stagger:{amount: 0.3}  })

// tl.from('.email, h1, p, .resume', 1.8, { y:225, stagger: .1, ease:'power4.easeOut'});

// {defaults: { duration:1.2, ease: 'expo.easeInOut' }}


let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
// console.log(width);
// if(width <= 502){
//     document.getElementById('rem').classList.remove('hide');
// }


if(width > 502){
    const tl = gsap.timeline();
    tl.from('li', 1.6, {
        y:200,
        ease:'power4.out',
        // delay:1,
        skewY:40,
        stagger:{
            amount:0.4
        }
    });
    tl.from('.email, h1, p, .resume', 1.8, { y:225, stagger: .1, ease:'power4.easeOut'});
}
