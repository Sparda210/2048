const $canvas = document.getElementById("myCanvas");
var $ctx = $canvas.getContext("2d");
var color =    ['#808080','#FFFFFF','#FFFF96','#FFFF32','#FFFF00','#FF96FF','#FF9696','#FF9632','#FF9600','#FF32FF','#FF3296','#FF3232','#FF3200','#FF00FF','#FF0096','#FF0032',
                '#FF0000','#96FFFF','#96FF96','#96FF32','#96FF00','#9696FF','#969696','#969632','#969600','#9632FF','#963296','#963232','#963200','#9600FF','#960096','#96032',];
var Numb =     ['','2','4','8',                                 //0-3
                '16','32','64',                                 //4-6
                '128','256','512',                              //7-9
                '1024','2048','4096','8192',                    //10-13
                '16K','32K','65K',                              //14-16
                '131K','262K','524K'                            //17-19
                ,'1M','2M','1M','8M',                           //20-23
                '16M','33M','67M',                              //24-26
                '134M','268M','536M',                           //27-29
                '1B','2B'];                                     //30-31
let Bricks = [];
var mTab = [];

function first(x,y){
    for(var index = 0; index < x; index ++){
        Bricks[index] = [];
        mTab[index] = [];
        for(var index2 = 0; index2 < y; index2++){
            Bricks[index][index2] = {
                color: color[0],
                Numb: Numb[0],
                index: 0,
                alpha: 1.0,
            }
            mTab[index][index2] = 0;
        }
    }
}

function fillRoundedRect(ctx, x, y, w, h, r, Br){
    ctx.globalAlpha = Br.alpha;
    ctx.beginPath();
    ctx.fillStyle = Br.color;
    ctx.moveTo(x + (w /2), y);
    ctx.arcTo(x + w, y, x + w, y + (h / 2), r);
    ctx.arcTo(x + w, y + h, x + (w / 2), y + h, r);
    ctx.arcTo(x, y + h, x, y + (h / 2), r);
    ctx.arcTo(x, y, x + (w / 2), y, r);
    ctx.closePath();
    ctx.fill();
    ctx.font = "30px Arial";
    ctx.fillStyle = "#000000";
    if (Br.index < 4) {var otstup = 42;}
    else if (Br.index < 7) {var otstup = 32;}
    else if (Br.index < 10) {var otstup = 22;}
    else if (Br.index < 14) {var otstup = 12;}
    else if (Br.index < 17) {var otstup = 22;}
    else if (Br.index < 20) {var otstup = 12;}
    else if (Br.index < 24) {var otstup = 32;}
    else if (Br.index < 27) {var otstup = 22;}
    else if (Br.index < 30) {var otstup = 12;}
    else var otstup = 42;
    ctx.fillText(Br.Numb, x + otstup, y+60);
}

function drawBriks(x,y,w,h,r){
    for(var index = 0; index < x; index ++){
        for(var index2 = 0; index2 < y; index2++){
            fillRoundedRect($ctx, 3 + (w+3) * index,3 + (h+3) * index2,w,h,r,Bricks[index][index2]);
        }
    }
}

function drawNewBriks(x, y, w, h, r, id){
    var br1 = {
        color: color[id],
        Numb: Numb[id],
        index: id,
        alpha: 1.0,
    }
    fillRoundedRect($ctx, x,y,w,h,r,br1);
}

function drawLine(x,y,w,h,r,id){
    var br1 = {
        color: color[id],
        Numb: Numb[0],
        index: id,
        alpha: 0.5,
    }
    for(var index2 = 6; index2 >= y; index2--){
        fillRoundedRect($ctx, 3 + (w+3) * x,3 + (h+3) * index2,w,h,r,br1);
    }
    br1.Numb = Numb[id];
    fillRoundedRect($ctx, 3 + (w+3) * x,3 + (h+3) * y,100,100,5,br1);
}

first(5,7);