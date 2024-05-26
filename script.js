
const colorcodecontainer = document.getElementById("Color-code")
const optioncolors= document.getElementById("option-color")
let randomcolor =null
function RandomNumberBetween(min,max){
return min+Math.floor(Math.random()*(max-min+1))
}
function generateRandomColorRgb(){
    const red= RandomNumberBetween(0,255);
    const green=RandomNumberBetween(0,255);
    const blue=RandomNumberBetween(0,255);
    return `rgb(${red},${green},${blue})`
}
function validateresult(el){

const selectedcolor= el.target.style.backgroundColor
console.log(selectedcolor==randomcolor)

}
function startGame(){
    randomcolor=generateRandomColorRgb()
    colorcodecontainer.innerText=randomcolor
const ansIndex= RandomNumberBetween(0,5)
for( let i=0; i<6; i++ ){
 const div=document.createElement("div")
 div.addEventListener("click",validateresult)
 div.style.backgroundColor=i=== ansIndex?randomcolor: generateRandomColorRgb()
 optioncolors.append(div)

}
}
window.addEventListener("load",()=> startGame())