
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


 const imageContainer =document.getElementById("image-container");
 const AboutMe = document.getElementById("aboutMe");
// const content = document.getElementById("content");
 const pin = document.getElementById("pin");
 const mySelf = document.getElementById("myself");
// const date = document.getElementById("date");



function getInfo(){
    imageContainer.innerHTML=`<img src="/project/ISIAKA.png" class="w-100" alt="Isiaka Abdulahi">`;
     AboutMe.innerText= "About Me";
    // content.innerText= "REMLAD DATA is a reliable web to buy Cheap SME Data & Direct Data Bundles, Airtime VTU, Cable Subscriptions, Pay Electricity Bills & More..."
   pin.innerHTML= ` <img src="https://previews.123rf.com/images/headoff/headoff1306/headoff130600011/20364438-a-colourful-3d-rendered-notice-board-pin-illustration.jpg" alt="pin">`  
   mySelf.innerText ="Hi! I'm  Isiaka Abdulahi. A Frontend Developer with a focus on building fast, robust, SEO optimized and optimized User Experiences. I believe in developing Interfaces which bring a smile."
     
    // date.innerHTML = 'Feb 21, 2021'

animated_bg.forEach((bg) => bg.classList.remove("animated-bg"))
animated_bg_text.forEach((bgs) => bgs.classList.remove("animated-bg-text"))


}


setTimeout(getInfo,2500)