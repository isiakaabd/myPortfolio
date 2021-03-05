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
