const canvas = document.querySelector('#draw');
const ctx = canvas.getContext("2d");
// console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

ctx.lineWidth = 40;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.strokeStyle = "#f00";
ctx.fillStyle = "#f00";

let hue = 0;
let direction = true;
let x = 0;
let y = 0;

function draw(e) {
    if (!isDrawing) return;
    // console.log(e.type);
    if (e.type == "mousemove") {
        x = e.offsetX;
        y = e.offsetY;
    } else {
        //处理触摸屏操作
        x = e.changedTouches[0].clientX;
        y = e.changeTouches[0].cluentY;
    }
    //彩虹效果   
    ctx.strokeStyle = `hsl(${hue},90%,50%)`;
    if (hue >= 360) hue = 0;
    hue++;

    if (ctx.lineWidth > 70 || ctx.lineWidth < 20) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }


    //水墨效果
    //ctx.strokeStyle = `rgba(0, 0, 0, ${ hue })`;			
    //if(hue >= 0.7) hue = 0;
    //hue += 0.01;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    [lastX, lastY] = [x, y];
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
// canvas.addEventListener('mousemove', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

canvas.addEventListener('touchstart', (e) => {
    isDrawing = true;
    lastX = e.changedTouches[0].clientX;
    lastY = e.changedTouches[0].clientY;
});

canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', () => isDrawing = false);
canvas.addEventListener('touchcancel', () => isDrawing = false);