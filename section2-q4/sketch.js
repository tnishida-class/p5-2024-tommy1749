// ギリシャ国旗
function setup() {
  const blue = color(13, 94, 175);
  createCanvas(270, 180);
  // noStroke();
  background(255);

  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
   noStroke() 
    if(i%2==0){
      fill(blue);
rect(0, i * d, width,( i+1)*d);
       }else{
         fill(255)
rect(0, i * d, width,( i+1)*d);  
       }
  }
noStroke()
  fill(blue);
  let size = d * 5;
  rect(0, 0, size, size);
noStroke()
  fill(255);
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
rect(2*d,0,d,size)
  rect(0,2*d,size,d)
}
