function chooseName()
{   
    var names = ["HOANG", "NGUYEN", "HAI"];
    var randomNameIndex = Math.floor(Math.random()*names.length);
    document.getElementById("para").innerHTML = names[randomNameIndex];
}