/**
 * Created by Manish on 8/10/2017.
 */
var numOfGates = 0;
var coinsToTakeAway = 0;
var result = 0;
//calling on click of calculate button
function calculate(clicked_id) {
    //getting values from input box
    getvalues()

    // applying equation [a*2^n+(2^n-1)] a=coinsToTakeAway n=numOfGates
    var power = Math.pow(2,numOfGates);             //separately calculating 2^n
    result = (power*coinsToTakeAway)+(power-1)

    makeCircle(numOfGates, result)
    // updating the result on page
    document.getElementById('coins_to_pick').innerHTML=result
}

function makeCircle(numOfGates, result) {
    for (var i=0; i<=numOfGates; i++){
        var y = document.createElement("div");
        y.setAttribute("id","circle"+i);
        y.setAttribute("class", "circles");
        if (i==0) {
            y.innerHTML=coinsToTakeAway;
            document.getElementById("coins_to_pick_div").appendChild(y);
        }else {
            document.getElementById("circle"+(i-1)).appendChild(y);
            if (i==numOfGates){
                y.innerHTML=result;
            }
        }
    }
}

function getvalues() {
    numOfGates = document.getElementById('num_of_gates').value;
    coinsToTakeAway = document.getElementById('coins_to_take').value;
    return numOfGates, coinsToTakeAway;
}