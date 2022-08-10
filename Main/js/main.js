// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "vertical",
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });

/* top_btn */
const topBtn = document.querySelector(".top_btn");

topBtn.addEventListener("click", () => {
  gsap.to(window, 0.5, {
    //gsap.to(요소, 시간, {애니메이션옵션})
    scrollTo: 0,
  });
});

/* */
