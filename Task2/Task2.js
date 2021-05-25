function drawRectangle()
{
    let x = prompt("xposition");
    let y = prompt("yposition");
    let w = prompt("w");
    let h = prompt("h");
    let color = prompt("color");
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}