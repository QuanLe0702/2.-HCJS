let bv = document.getElementById("bv");
let ctx = bv.getContext("2d");

function drawLine(){
    ctx.moveTo(10,10);
    ctx.lineTo(200,200);
    ctx.strokeStyle="blue";
    ctx.stroke();
}

function drawRect(){
    ctx.strokeStyle="red";
    ctx.strokeRect(50, 50, 200, 100);

    ctx.fillStyle="yellow";
    ctx.fillRect(150, 100, 200, 100);
}

function drawCir(){
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.arc(200, 180, 60, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(280, 200, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
}

function drawImage(imgNo) {
    let img = null;
    switch (imgNo) {
        case 1:
            img = document.getElementById("h1");
            break;
        case 2:
            img = document.getElementById("h2");
            break;
        case 3:
            img = document.getElementById("h3");
            break;
    }
    ctx.beginPath();
    ctx.drawImage(img, 50, 50, 400, 200);

}


function drawText() {
    ctx.beginPath();
    ctx.font = "30px Arial";
    ctx.fillText("Hello World", 10, 50);

    ctx.font = "36px Arial";
    ctx.strokeStyle="Pink";
    ctx.strokeText("Hello World", 10, 100);

}