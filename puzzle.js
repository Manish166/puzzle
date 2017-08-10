/**
 * Created by Manish on 8/10/2017.
 */
var numOfGates = 0;
var coinsToTakeAway = 0;
//calling on click of calculate button
function calculate(clicked_id) {
    //getting values from input box
    getvalues()
    // makeCircle(numOfGates)

    // applying equation [a*2^n+(2^n-1)] a=coinsToTakeAway n=numOfGates
    var power = Math.pow(2,numOfGates);             //separately calculating 2^n
    var result = (power*coinsToTakeAway)+(power-1)

    // updating the result on page
    document.getElementById('coins_to_pick').innerHTML=result
}

// function makeCircle(numOfGates) {
//     for (var i=0; i<=numOfGates; i++){
//         var y = document.createElement("div");
//         var k=i*i
//         y.setAttribute("id","circle"+i);
//         y.style.border="2px solid red";
//         y.style.borderRadius="50%";
//         y.style.height="50px";
//         y.style.width="50px"
//         if (i==0) {
//             document.getElementById("coins_to_pick_div").appendChild(y);
//         }else {
//             console.log("circle"+(i-1));
//             document.getElementById("circle"+(i-1)).appendChild(y);
//         }
//     }
// }

function getvalues() {
    numOfGates = document.getElementById('num_of_gates').value;
    coinsToTakeAway = document.getElementById('coins_to_take').value;
    return numOfGates, coinsToTakeAway;
}