const buttons = document.querySelectorAll(".btn");
// document.getElementById("btn").style.backgroundColor = colorMarker();

bgColor = colorMarker();

function colorMarker( ) {
    let color = Math.floor(Math.random()* 256);
    console.log(color);
}

