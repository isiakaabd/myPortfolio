
const animated_bg =document.querySelectorAll(".animated-bg");
const animated_bg_text =document.querySelectorAll(".animated-bg-text");
const text = document.querySelector(".text-loading") 
const navbar = document.querySelector(".nav_wrapper")
const imageContainer =document.getElementById("image-container");
const AboutMe = document.getElementById("aboutMe");
const skillset = document.getElementById("skillset");
const pin = document.getElementById("pin");
const mySelf = document.getElementById("myself");
const skill1 = document.getElementById("skill1");
const skill2 = document.getElementById("skill2");
const skill3 = document.getElementById("skill3");
const skill4 = document.getElementById("skill4");
const skill5 = document.getElementById("skill5");
const skill6 = document.getElementById("skill6");
const skill7 = document.getElementById("skill7");
const skill8 = document.getElementById("skill8");
const skill9 = document.getElementById("skill9");
const twitter = document.getElementById("twitter");
const github= document.getElementById("github");
const gmail= document.getElementById("gmail");
const linkedin= document.getElementById("linkedin");
const letTalk= document.getElementById("lets Talk");





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

function getInfo(){
    imageContainer.innerHTML=`<img src="/project/ISIAKA.png" class="w-100" alt="Isiaka Abdulahi">`;
     AboutMe.innerText= "About Me";
     letTalk.innerText= "Let's Talk";
     skillset.innerText= "My Skillset"
   pin.innerHTML= ` <img src="https://previews.123rf.com/images/headoff/headoff1306/headoff130600011/20364438-a-colourful-3d-rendered-notice-board-pin-illustration.jpg" alt="pin">`  
   mySelf.innerText ="Hi! I'm  Isiaka Abdulahi. A Frontend Developer with a focus on building fast, robust, SEO optimized and optimized User Experiences. I believe in developing Interfaces which bring a smile."
     
     skill1.innerHTML = 'HTML'
     skill2.innerHTML = '&nbsp;CSS&nbsp;'
     skill3.innerHTML = 'JAVASCRIPT'
     skill4.innerHTML = 'REACT'
     skill5.innerHTML = 'REDUX'
     skill6.innerHTML = '&nbsp; D3&nbsp;'
     skill7.innerHTML = '&nbsp;GIT&nbsp;'
     skill8.innerHTML = 'FIGMA'
     skill9.innerHTML = 'GITHUB'

    //  medias
    gmail.innerHTML = `<a href="mailto:isiakaabd@gmail.com" target="_blank">Gmail</a>`
   linkedin.innerHTML = `<a href="https://www.linkedin.com/in/isiaka-abdulahi-1bb16514a/" target="_blank">Linkedin</a>`
    twitter.innerHTML = `<a href="https://twitter.com/isiakaabd" target="_blank">Twitter</a>`
    github.innerHTML = `<a href="https://www.github.com/isiakaabd" target="_blank">Github</a>`
animated_bg.forEach((bg) => bg.classList.remove("animated-bg"))
animated_bg_text.forEach((bgs) => bgs.classList.remove("animated-bg-text"))


}


setTimeout(getInfo,2500)