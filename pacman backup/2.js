

let matrix = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 ], 
    [1,2,2,2,2,2,2,1,2,2,2,2,2,2,1 ],
    [1,2,1,1,1,1,2,1,2,1,1,1,1,2,1 ],
    [1,2,1,2,2,2,2,2,2,2,2,2,1,2,1 ],
    [1,2,1,2,1,2,2,2,2,2,1,2,1,2,1 ],
    [1,2,1,2,1,2,2,2,2,2,1,2,1,2,1 ],
    [1,2,2,2,1,4,2,2,2,2,1,2,2,2,1 ],
    [1,2,1,2,1,2,2,2,2,2,1,2,1,2,1 ],
    [1,2,1,2,2,2,2,2,2,2,2,2,1,2,1 ],
    [1,2,1,1,1,1,2,1,2,1,1,1,1,2,1 ],
    [1,2,2,2,2,2,2,1,2,2,2,2,2,2,1 ],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 ]
];

const boundary =1;
const point = 2;
const end = 3;
const pacman = 4;

let pacman = {x:6,y:4,direction:'right'};

function blockFormation(m){
     let blockMatrix = [];
    for(let i of m){
      for(let j of i){
        let b = document.createElement('div');
        b.classList.add('block');

        if(j===boundary) b.classList.add('boundary');
        else if(j===point) b.classList.add('point');
        else if(j===end) b.classList.add('end');
        else if(j===pacman) {
            b.classList.add('right');
            b.classList.add('pacman.direction');}

            blockMatrix.push(b);}

            let finish = document.createElement('br');
            blockMatrix.push(finish);}
           
            return blockMatrix ;
 }

 function grid(){
     let g = document.createElement('div');
     let blocks = blockFormation(matrix);
     for( let p of blocks){
     g.appendChild(p);}

     document.body.appendChild(g);
 }

 function removeGrid(){
  document.body.removeChild(g) ;  
    }

    function keyboardListener(){
        Document.addEventListener('keydown', press(e));
         function press(e){
             if(e.keyCode === 37)         left();
             else if(e.keyCode === 38)    up();
             else if(e.keyCode === 39)    right();
             else if(e.keyCode === 40)    down();

             removeGrid();
             grid();
         }
    }

    function left(){
        pacman.direction='left';
        if(matrix[pacman.x][pacman.y-1]!==boundary ){
        matrix[pacman.x][pacman.y]=end;
        pacman.y=pacman.y-1;
        matrix[pacman.x][pacman.y]=pacman;
        }
    }

    function up(){
        pacman.direction='up';
        if(matrix[pacman.x-1][pacman.y]!==boundary ){
        matrix[pacman.x][pacman.y]=end;
        pacman.x=pacman.x-1;
        matrix[pacman.x][pacman.y]=pacman;
        }
    }
    function right(){
        pacman.direction='right';
        if(matrix[pacman.x][pacman.y+1]!==boundary ){
        matrix[pacman.x][pacman.y]=end;
        pacman.y=pacman.y+1;
        matrix[pacman.x][pacman.y]=pacman;
        }
    }
    function down(){
        pacman.direction='down';
        if(matrix[pacman.x+1][pacman.y]!==boundary ){
        matrix[pacman.x][pacman.y]=end;
        pacman.x=pacman.x+1;
        matrix[pacman.x][pacman.y]=pacman;
        }
    }
    
    function main(){
        grid();
        keyboardListener();
    }

    main();