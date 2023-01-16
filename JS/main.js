const MinimumTime = 500; 
const MaximumTime= 1250;

let PlayerPoints = 0;

const PlayerPointsElement = document.querySelector(".player-points");

const AllTiles = document.querySelectorAll(".tile");

GetRandomNumber(1,50);

function GetRandomNumber(min,max){
    let random= Math.random();
    console.log(random);
    console.log (min);
    console.log(max);
    return Math.floor(Math.random() * (max - min + 1) +min );
}