
const animated_bg =document.querySelectorAll(".animated-bg");
const animated_bg_text =document.querySelectorAll(".animated-bg-text");
const text = document.querySelector(".text-loading") 
const navbar = document.querySelector(".nav_wrapper")
//  to change the background color on scrolling
 window.addEventListener("scroll", ()=>{
   
navbar.classList.toggle("sticky",window.scrollY  > 0)
 })


// Number of projects function



let load = 0

const textFunction = () => {
load ++
if (load> 19){
    clearInterval(int)
}

text.innerText = `${load} `
text.style.opacity =scale(load,0,20,0,1)

}

// using setInterval to call the textFunction
let int = setInterval(textFunction,100)

// for scale
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}


//


// const header =document.getElementById("header");
// const title = document.getElementById("title");
// const content = document.getElementById("content");
// const profile_image = document.getElementById("profile-image");
// const ProfileName = document.getElementById("name");
// const date = document.getElementById("date");



function getInfo(){
    // header.innerHTML=`<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="image header by isiaka Abdulahi">`;
    // title.innerText= "Welcome To Remlad Ventures";
    // content.innerText= "REMLAD DATA is a reliable web to buy Cheap SME Data & Direct Data Bundles, Airtime VTU, Cable Subscriptions, Pay Electricity Bills & More..."
    // profile_image.innerHTML= `<img src="/ISIAKA.png" alt="REMLAD CEO">`  
    // ProfileName.innerText ="ISIAKA ABDULAHI"
    // date.innerHTML = 'Feb 21, 2021'

animated_bg.forEach((bg) => bg.classList.remove("animated-bg"))
animated_bg_text.forEach((bgs) => bgs.classList.remove("animated-bg-text"))


}


setTimeout(getInfo,2500)