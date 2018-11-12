var r = 150;
function setup() {
  createCanvas(600,600);
  
  fill(255,200,200);
  rect(0,0,500,500);
  fill(0,200,200);
  triangle(0,0,250,0,0,500);

}

function draw() {
  fill(r,61,105);
  rect(0,0,500,500);
  var i = -100;
  
  while (i< width) {
    
    noStroke();
    // The distance between the current rectangle 
    // and the mouse is equal to the absolute value 
    // of the difference between i and mouseX.
    var distance = abs(mouseY - i); 
    
    // That distance is used to fill the color of 
    // a rectangle at horizontal location i.
    fill(0,101,distance);
    quad(0,i-50,220-0.4*i,60+0.8*i,200-0.4*i,100+0.8*i,0,i);
    // Increase i by 10
    i += 35;
    if(i>=0){
      break;}
    
  }
  var j = 0;
  while (j < width) {
    
    noStroke();
    // The distance between the current rectangle 
    // and the mouse is equal to the absolute value 
    // of the difference between i and mouseX.
    var distance = abs(mouseY - j); 
    
    // That distance is used to fill the color of 
    // a rectangle at horizontal location i.
    fill(255,distance,distance);
    quad(0,j-50,220-0.4*j,60+0.8*j,200-0.4*j,100+0.8*j,0,j);
    // Increase i by 10
    j += 50;
    
  }
  
  
  var k = 250 ;
  
  while (k< width) {
    
    noStroke();
    // The distance between the current rectangle 
    // and the mouse is equal to the absolute value 
    // of the difference between i and mouseX.
    var distance = abs(mouseY - k); 
    
    // That distance is used to fill the color of 
    // a rectangle at horizontal location i.
    fill(255,distance,distance);
    quad(k+125,500,500,k,500,k+25,k+150,500);
    // Increase i by 10
    k += 20;
    if(k>=360){
      break;}
  }
  var l = 250;
  while (l < width) {
    
    noStroke();
    // The distance between the current rectangle 
    // and the mouse is equal to the absolute value 
    // of the difference between i and mouseX.
    var distance = abs(mouseX - l); 
    
    // That distance is used to fill the color of 
    // a rectangle at horizontal location i.
    fill(210,distance,distance);
    quad(l,0,l+50,0,l-250+50,500,l-250,500);
    // Increase i by 10
    l += 50;
    if(l>=500){
      break;}
    
  }
  
    
  if(mouseY >= 250) {
    r = r + 1; 
  }
  else {
    r = r - 1;
  }

  // If r is greater than 255, set it back to 255.  
  // If r is less than 0, set it back to 0.
  if (r > 255) {
    r = 255; 
  } 
  else if (r < 0) {
    r = 0; 
  } // fading 
  
}





  


  
  
  
    
    
    
    
    
    
