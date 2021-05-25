function countChar()
{
    var noidung = document.getElementById("textarea").value;
    var dodai = noidung.length;
    if (dodai > 200)
    {
        alert("You have typed more than the allowed characters!");
    }
    else
    {
        document.getElementById("sokytu").value = dodai;
    }
    
}