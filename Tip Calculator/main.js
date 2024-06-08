function calculatetip(){
    let billamt = document.getElementById("billamt").value;
    let servicequal = document.getElementById("servicequal").value;
    let peopleamt = document.getElementById("peopleamt").value;

    if (billamt === "" || servicequal == 0){
        alert("Please enter values");
        return;
    }
    if (peopleamt === "" || peopleamt <= 1){
        peopleamt = 1;
        document.getElementById("each").style.display = "none";
    } 
    else{
        document.getElementById("each").style.display = "block";
    }

    let total = (billamt * servicequal) / peopleamt;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("tip").innerHTML = total;
    document.getElementById("totaltip").style.display = "block";

}

document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";


document.getElementById("calculate").onclick = function(){
    calculatetip();
};