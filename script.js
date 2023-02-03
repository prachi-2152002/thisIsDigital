
var swiper = new Swiper(".mySwiper", {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
     delay: 2500,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });

gsap.from("#img1",{
   delay:0.4,
   opacity:1,
   duration:1,
   y:80
})

gsap.from("#img2",{
    delay:0.4,
    opacity:1,
    duration:1,
    x:80
 })

 gsap.from("#img3",{
    delay:0.4,
    opacity:1,
    duration:1,
    y:40
 })

 gsap.from("#main h1",{
    delay:0.4,
    opacity:1,
    duration:1,
   
 })

 gsap.from("#section2 h2",{
    scrollTrigger:{
       trigger:"#section2 h2",
       scroll:"#main1",
       start:"top 70%"
    },
    opacity:1,
   //  ease:expo.easeInOut,
    duration:0.1,
    y:100
})

gsap.from("#section2 h1",{
   scrollTrigger:{
      trigger:"#section2 h1",
      scroll:"#main1",
      start:"top 70%",
   },
   opacity:1,
   // ease:expo.easeInOut,
   duration:0.1,
   y:100
})

gsap.from("#abt",{
   scrollTrigger:{
      trigger:"#abt",
      scroll:"#main1",
      start:"top 60%",
   },
   opacity:1,
   // ease:expo.easeInOut,
   duration:0.1,
   y:90
})

gsap.from("#img4",{
   scrollTrigger:{
      trigger:"#img4",
      scroll:"#main1",
      start:"top 70%",
   },
   opacity:1,
   duration:.1,
   y:160
})

gsap.from("#img5",{
   scrollTrigger:{
      trigger:"#img4",
      scroll:"#main1",
      start:"top 70%",
   },
   delay:.1,
   opacity:1,
   duration:.1,
   y:160
})

gsap.from("#img6",{
   scrollTrigger:{
      trigger:"#img4",
      scroll:"#main1",
      start:"top 20%",
   },
   delay:.2,
   opacity:1,
   duration:.1,
   y:160
})

gsap.from("#img7",{
   scrollTrigger:{
      trigger:"#img4",
      scroll:"#main1",
      start:"top 50%",
   },
   opacity:1,
   duration:.5,
   y:160
})


gsap.from("#section4 h1",{
   scrollTrigger:{
      trigger:"#section4 h1",
      scroll:"#main1",
      start:"top 80%",
   },
   opacity:1,
   duration:.8,
   y:140
})

// gsap.from("#service1",{
//    scrollTrigger:{
//       trigger:"#service1",
//       scroll:"#main1",
//       start:"top 70%",
//    },
//    opacity:1,
//    duration:.1,
//    y:180
// })

gsap.from("#boxo",{
   scrollTrigger:{
      trigger:"#boxo",
      scroll:"#main1",
      start:"top 70%",
   },
   opacity:1,
   duration:.1,
   y:180
})

gsap.from("#boxo1",{
   scrollTrigger:{
      trigger:"#boxo1",
      scroll:"#main1",
      start:"top 90%",
   },
   opacity:1,
   duration:.1,
   y:130
})

