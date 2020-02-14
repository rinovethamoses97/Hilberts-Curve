let order;
let n;
let total;
let len;
let coord=[];
let counter=1;
function setup(){
    createCanvas(600,600);
    order=6;
    n=pow(2,order);
    total=n*n
    len=width/n;
    for(let i=0;i<total;i++){
        let point=hilbert(i);
        point[0]=point[0]*len+len/2;
        point[1]=point[1]*len+len/2;
        coord.push(point);
    }
}
function draw(){
    background(0);
    stroke(255);
    noFill();
    beginShape();
    for(let i=0;i<counter;i++){
        vertex(coord[i][0],coord[i][1]);
    }
    endShape();
    counter++;
    if(counter==total){
        counter=0;
    }
}
function hilbert(i){
    let points=[[0,0],[0,1],[1,1],[1,0]];
    let index=i&3;
    let point=points[index];
    for(let j=1;j<order;j++){
        i=i>>>2;
        index=i&3;
        let len=pow(2,j);
        if(index==0){
            let temp=point[0];
            point[0]=point[1];
            point[1]=temp;
        }
        else if(index==1){
            point[1]+=len;
        }
        else if(index==2){
            point[0]+=len;
            point[1]+=len;
        }
        else if(index==3){
            let temp=len-1-point[0];
            point[0]=len-1-point[1];
            point[1]=temp;
            point[0]+=len;
        }
    }
    return point;
}