var names = ["HOANG", "NGUYEN", "HAI"];
function random(min, max)
{
    var minValue = Math.ceil(min);
    var maxValue = Math.floor(max);
    return Math.floor(Math.random()*(maxValue - minValue) + minValue);
}

function chooseName(nameArray)
{   
    var randomNameIndex = random(0, nameArray.length);
    document.getElementById("para").innerHTML = names[randomNameIndex];
}

