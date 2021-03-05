 const navbar = document.querySelector(".nav_wrapper")
//  to change the background color on scrolling
 window.addEventListener("scroll", ()=>{
   
navbar.classList.toggle("sticky",window.scrollY  > 0)
 })