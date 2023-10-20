let btn = document.querySelector(".btn");
let colorName = document.querySelector(".color-name");
let body = document.querySelector(".body")


function colors(){
    let hex = "ABCDEF0123456789";
    let harsh = "#";
    for(let i = 0; i < 6; i++){
        let colorCode = Math.floor(Math.random() * hex.length);
        colorCode = hex[colorCode]
        harsh = harsh + colorCode;

        }
        console.log(harsh);
        body.style.background = harsh;
        colorName.textContent = harsh;
        return harsh;
}

btn.addEventListener("click", colors);
setInterval(colors, 1000)









// Try two (Same color generator project)
// let btn = document.querySelector("btn");
// let body = document.querySelector("body");
// let colorName = document.querySelector("color-name");

// let genColor = () => {
//     let colorpicker = ["a","b","c","d","e","f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     let colorcombinator = "#";

//     let whilecounter = 0;
//     while(whilecounter < 6){
//         arrayCounter = Math.floor(Math.random() * colorpicker.length);
//         colorcombinator += colorpicker[arrayCounter];        
        
//         whilecounter++;
//     }
    
//     // colorName.textContent = colorcombinator;
//     body.style.background = colorcombinator;
//     return colorcombinator;
// }
// // console.log(genColor());
// btn.addEventlistener("click", genColor);
// setInterval(genColor, 2000);

// End of Try two (Same color generator project)