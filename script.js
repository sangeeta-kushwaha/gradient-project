let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let copyDiv = document.querySelector(".copyCode")
let rgb1 = "rgb(92,145,229)"
let rgb2 = "rgb(152,63,198)"

const hexValue = () => {
    let myHexValues = "0123456789abcdef"
    let colors = "#"
    
    for( let i=0;i<6;i++){
        colors = colors + myHexValues[Math.floor(Math.random()*16)];
    }
    return colors;
}


const handler1 = () =>{
    rgb1 = hexValue();
    console.log(rgb1);
    btn1.innerText = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1} ,${rgb2})`; 
    copyDiv.innerHTML = `background-image: linear-gradient (to right,  ${rgb1},   ${rgb2})`;
    
}

const handler2 = () =>{
    rgb2 = hexValue();
    console.log(rgb2);
    btn2.innerText = rgb2;

    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1} ,${rgb2})`; 
    copyDiv.innerHTML = `background-image:linear-gradient (to right,   ${rgb1},  ${rgb2})`;
    
}
 
button1.addEventListener("click", handler1);
button2.addEventListener("click", handler2);

copyDiv.addEventListener("click",() =>{
    navigator.clipboard.writeText(copyDiv.innerText)
})