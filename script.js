//Allow user control with arrow key
document.addEventListener('keydown', function (e) {
    document.getElementById("player1").style.top= "180px";

    if (e.repeat) return;

    if (e.key === 'ArrowUp') {
        document.getElementById("player1").style.top= "100px";
        direction = 'north'
    }
 

    if (e.key === 'ArrowDown') {
       document.getElementById("player1").style.top= "180px";
        direction = 'south'
    }
})

document.addEventListener('keyup', function(e) {
  
})
