// YE to wala he
// gsap.to("#box",{
//     x:200,
//     y:200,
//     backgroundColor:"yellow",
//     duration:2,
//     ease:Expo.easeInOut

// })
// ye from wala he
// gsap.from("#box",{
//     x:200,
//     duration:2,
//     // ease:Expo.easeInOut

// })
// // ye fromTO wala he
// gsap.fromTo("#box", {
//     x: 200,
//     y: 200,
//     backgroundColor: "yellow",
//     // duration: 2,
//     ease: Expo.easeInOut
// }, {
//     x: 260,
//     y: 300,
//     backgroundColor: "purple",
//     ease: Expo.easeInOut,


// })


// Isme ye pata chalega ki kab animation complete hogaya
// gsap.to("#box",{
//     x: 200,
//     ease: Expo.easeInOut,
//     duration: 2,
//     onComplete: function(){
//         alert();
//     }


// })
// Isme ye pata chalega ki kab animation start hogaya
// gsap.to("#box",{
//     x: 200,
//     ease: Expo.easeInOut,
//     duration: 2,
//     onStart: function(){
//         alert();
//     }


// })
// // Isme ye pata chalega ki kab animation progress hogaya
// gsap.to("#box",{
//     x: 200,
//     ease: Expo.easeInOut,
//     duration: 2,
//     onProgress: function(){
//         console.log("hey");;
//     }


// })
// Isme ye pata chalega ki kab animation updatess hogaya
gsap.to("#box",{
    x: 200,
    ease: Expo.easeInOut,
    duration: 2,
    onUpdate: function(){
        console.log("hey");;
    }


})