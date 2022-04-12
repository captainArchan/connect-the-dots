let data = {
    canvas:null,
    ctx: null,
    clickedDot: null,
    dots: [{x: 342, y: 10},  {x: 281, y: 71},  {x: 178, y:203},  {x: 303, y:192},  {x: 115, y:315}, 
    {x: 270, y:306},  {x: 190, y:349},  {x: 85, y:395},  {x: 47, y:443},  {x: 340, y:433}, 
    {x: 336, y:570},  {x: 409, y:570},  {x: 401, y:435},  {x: 708, y:442},  {x: 635, y:388}, 
    {x: 542, y:350}, {x: 447, y:318},  {x: 619, y:323},  {x: 411, y:199},  {x: 556, y:198},  
    {x: 491, y:141}, {x: 381,y: 55}, {x: 342, y: 10}]
};
let number = 1;

function circleCollision (c1, c2){
    let a = c1.r + c2.r,
        x = c1.x - c2.x,
        y = c1.y - c2.y;
    if (a > Math.sqrt( (x*x) + (y*y) )) return true;
    else return false; 
}



function prepCanvas (){
    let res = window.devicePixelRatio || 1,
        scale = 1/res;
    data.canvas = document.getElementById('dots');
    data.ctx = data.canvas.getContext('2d');

    data.canvas.width = window.innerWidth*res;
    data.canvas.height = window.innerHeight*res;
    data.canvas.style.width = window.innerWidth + 'px';
    data.canvas.style.height = window.innerHeight + 'px';
    data.ctx.scale(res, res);

    data.canvas.addEventListener('mousedown', function(e){
        console.log(e);
        checkDots(e);
    })
}

function drawDots(){
    let i = 0;
    for (; i <data.dots.length; i++){
        let d = data.dots[i];
        if(i !== 0){
            data.ctx.font = "30px Arial";
            data.ctx.fillText(i, d.x-15, d.y+40);
        }
        data.ctx.beginPath();
        data.ctx.arc(d.x, d.y, 10, 0, 2*Math.PI);
        data.ctx.fillStyle = '#777' ;
        data.ctx.fill();
        data.ctx.closePath();
        
        
    }
}
function drawLine (toDot){
    data.ctx.beginPath();
    data.ctx.moveTo(data.dots[number-1].x, data.dots[number-1].y);
    data.ctx.lineTo(toDot.x, toDot.y);
    data.ctx.lineWidth = 5;
    data.ctx.strokeStyle = '#777';
    data.ctx.stroke();
    data.ctx.closePath();
    number++;
    checkEnd(number);

    
}

function checkEnd(number){
    if(number === data.dots.length ){
        alert("End");
    }
}

function checkDots(e){
    let col = null;
    
    let d = data.dots[number],
        c1 = {x: d.x, y: d.y, r:10},
        c2 = {x: e.pageX, y: e.pageY, r:10};
    if(circleCollision (c1, c2)){
        col = d;
    }
    console.log(col)
    if(col !== null){
        drawLine(col);
    }



        
    
}


prepCanvas();
drawDots();