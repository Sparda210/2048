var New1 = 0;
var New2 = 0;
var brickRowCount = 7;
var brickColumnCount = 5;
var brickWeight = 100;
var brickHeight = 100;
var brickRad = 5;
var New1_coorx = 550;
var New2_coorx = 653;
var Coulumn = 0;

function shutDown(x){
    for (var index = brickRowCount-1; index > 0; index--){
        if (mTab[x][index] != 0 && mTab[x][index-1] == 0){
            mTab[x][index-1] = mTab[x][index];
            mTab[x][index] = 0;
        }
        Bricks[x][index].color = color[mTab[x][index]],
        Bricks[x][index].Numb = Numb[mTab[x][index]];
        Bricks[x][index].index = mTab[x][index];
    }

    Bricks[x][0].color = color[mTab[x][0]],
    Bricks[x][0].Numb = Numb[mTab[x][0]];
    Bricks[x][0].index = mTab[x][0];
    draw();
}

function checkDesk(x,y){
    var nx = 0;
    var ny = 0;
    if (mTab[x][y] != 0)
        if (x == 0){
            if (y == 0){
                if (mTab[x][y] == mTab[x+1][y]){
                    mTab[x][y] += 1;
                    mTab[x+1][y] = 0;
                    nx = x;
                    ny = y;
                }
            }else{
                if (mTab[x][y] == mTab[x+1][y] && mTab[x][y] == mTab[x][y-1]){
                    mTab[x][y-1] += 2;
                    mTab[x+1][y] = 0;
                    mTab[x][y] = 0;
                    nx = x;
                    ny = y-1;
                }else if(mTab[x][y] == mTab[x+1][y]){
                    mTab[x][y] += 1;
                    mTab[x+1][y] = 0;
                    nx = x;
                    ny = y;
                }else if(mTab[x][y] == mTab[x][y-1]){
                    mTab[x][y-1] += 1;
                    mTab[x][y] = 0;
                    nx = x;
                    ny = y-1;
                }
            }
        }else if (x == brickColumnCount-1){
            if (y == 0){
                if (mTab[x][y] == mTab[x-1][y]){
                    mTab[x][y] += 1;
                    mTab[x+1][y] = 0;
                    nx = x;
                    ny = y;
                }
            }else{
                if (mTab[x][y] == mTab[x-1][y] && mTab[x][y] == mTab[x][y-1]){
                    mTab[x][y-1] += 2;
                    mTab[x-1][y] = 0;
                    mTab[x][y] = 0;
                    nx = x;
                    ny = y-1;
                }else if(mTab[x][y] == mTab[x-1][y]){
                    mTab[x][y] += 1;
                    mTab[x-1][y] = 0;
                    nx = x;
                    ny = y;
                }else if(mTab[x][y] == mTab[x][y-1]){
                    mTab[x][y-1] += 1;
                    mTab[x][y] = 0;
                    nx = x;
                    ny = y-1;
                }
            }
        }else{
            if (y == 0){
                if (mTab[x][y] == mTab[x-1][y] && mTab[x][y] == mTab[x+1][y]){
                    mTab[x][y] += 2;
                    mTab[x-1][y] = 0;
                    mTab[x+1][y] = 0;
                    nx = x;
                    ny = y;
                }else if(mTab[x][y] == mTab[x-1][y]){
                    mTab[x][y] += 1;
                    mTab[x-1][y] = 0;
                    nx = x;
                    ny = y;
                }else if(mTab[x][y] == mTab[x+1][y]){
                    mTab[x][y] += 1;
                    mTab[x+1][y] = 0;
                    nx = x;
                    ny = y;
                }
            }else{
                if (mTab[x][y] == mTab[x-1][y] && mTab[x][y] == mTab[x+1][y] && mTab[x][y] == mTab[x][y-1]){
                    mTab[x][y-1] += 3;
                    mTab[x][y] = 0;
                    mTab[x-1][y] = 0;
                    mTab[x+1][y] = 0;
                    nx = x;
                    ny = y-1;
                }else if (mTab[x][y] == mTab[x-1][y] && mTab[x][y] == mTab[x+1][y]){
                    mTab[x][y] += 2;
                    mTab[x-1][y] = 0;
                    mTab[x+1][y] = 0;
                    nx = x;
                    ny = y;
                }else if (mTab[x][y] == mTab[x-1][y] && mTab[x][y] == mTab[x][y-1]){
                    mTab[x][y-1] += 2;
                    mTab[x-1][y] = 0;
                    mTab[x][y] = 0;
                    nx = x;
                    ny = y-1;
                }else if (mTab[x][y] == mTab[x+1][y] && mTab[x][y] == mTab[x][y-1]){
                    mTab[x][y-1] += 2;
                    mTab[x+1][y] = 0;
                    mTab[x][y] = 0;
                    nx = x;
                    ny = y-1;
                }else if (mTab[x][y] == mTab[x-1][y]){
                    mTab[x][y] += 1;
                    mTab[x-1][y] = 0;
                    nx = x;
                    ny = y;
                }else if (mTab[x][y] == mTab[x+1][y]){
                    mTab[x][y] += 1;
                    mTab[x+1][y] = 0;
                    nx = x;
                    ny = y;
                }else if (mTab[x][y] == mTab[x][y-1]){
                    mTab[x][y-1] += 1;
                    mTab[x][y] = 0;
                    nx = x;
                    ny = y-1;
                }
            }
        }
    for(x = 0; x < brickColumnCount; x++){
        for(y = 0; y < brickRowCount; y++){
            Bricks[x][y].color = color[mTab[x][y]],
            Bricks[x][y].Numb = Numb[mTab[x][y]];
            Bricks[x][y].index = mTab[x][y];
        }
    }
    draw();
    if (nx != 0 || ny != 0) {
        nx-1 > 0 ? setTimeout(shutDown, 100, nx-1) :'';
        nx+1 < 5 ? setTimeout(shutDown, 100, nx+1) :'';
        setTimeout(checkDesk, 300, nx, ny);
        setTimeout(checkDesk, 300, nx, ny);
    }
}

function mouseMove(e) {
    draw();
    var relativeX = e.clientX - $canvas.offsetLeft;
    var Rows = 0;
    for (var index = brickRowCount-1; index >= 0; index--){
        
    }
    if(relativeX > 3 && relativeX < New1_coorx) {
        for(var index = 1; index <= brickColumnCount; index++){
            if (relativeX < 3 + (brickWeight+3) * index){
                Coulumn = index - 1;
                drawLine(index-1,3,brickWeight,brickHeight,brickRad,New1);
                return
            }
        }
    }
}

function mouseClick() {
    for(var index = 0; index < brickRowCount; index++){
        if (mTab[Coulumn][index] == 0){
            Bricks[Coulumn][index].color = color[New1],
            Bricks[Coulumn][index].Numb = Numb[New1];
            Bricks[Coulumn][index].index = New1;
            mTab[Coulumn][index] = New1;
            $ctx.clearRect(0, 0, $canvas.width, $canvas.height);
            New1 = New2;
            New2 = Math.ceil(Math.random() * 10);
            drawNewBriks(New1_coorx,50,brickWeight,brickHeight,brickRad,New1);
            drawNewBriks(New2_coorx,50,brickWeight,brickHeight,brickRad,New2);
            draw();
            checkDesk(Coulumn,index);
            return
        }
    }
}

function newgame(){
    drawBriks(brickColumnCount,brickRowCount,brickWeight,brickHeight,brickRad)
    New1 = Math.ceil(Math.random() * 10);
    New2 = Math.ceil(Math.random() * 10);
    drawNewBriks(New1_coorx,50,brickWeight,brickHeight,brickRad,New1);
    drawNewBriks(New2_coorx,50,brickWeight,brickHeight,brickRad,New2);
}

function draw(){
    $ctx.clearRect(0, 0, 550, $canvas.height);
    drawBriks(brickColumnCount,brickRowCount,brickWeight,brickHeight,brickRad);
}



newgame();

document.addEventListener("mousemove", mouseMove, false);
document.addEventListener("click", mouseClick, false);