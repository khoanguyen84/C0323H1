let width = 10;
let height = 5;
let reactangle = "";
for(let i = 1 ; i <= height; i++){
    for(let j = 1; j <= width; j++){
        if(i == 1 || i == height || j == 1 || j == width){
            reactangle += "*";
        }
        else{
            reactangle += " ";
        }
    }
    reactangle += "\n";
}

console.log(reactangle);