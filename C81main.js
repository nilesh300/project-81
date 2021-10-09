canvas = document.getElementById("myCanvas");
 ctx= canvas.getContext("2d");
  color = "red";
  ctx.beginPath();
   ctx.strokeStyle = "brown";
    ctx.lineWidth = 2;
   ctx.arc(350, 200, 40 ,0 , 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
   ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
   ctx.arc(450, 200, 40 ,0 , 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
   ctx.strokeStyle = "orange";
    ctx.lineWidth = 2;
   ctx.arc(300, 200, 40 ,0 , 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
   ctx.strokeStyle = "green";
    ctx.lineWidth = 2;
   ctx.arc(400, 200, 40 ,0 , 2*Math.PI);
    ctx.stroke();

    
    ctx.beginPath();
   ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
   ctx.arc(350, 200, 40 ,0 , 2*Math.PI);
    ctx.stroke();
 canvas.addEventListener("mousedown", my_mousedown);


 function my_mousedown(e){
    color = document.getElementById("color").value;
     
    console.log(color);
    
     mouse_x = e.clientX - canvas.offsetLeft;
      mouse_y = e.clientY - canvas.offsetTop;

      console.log("X = " + mouse_x + " ,Y = " + mouse_y);
       circle(mouse_x , mouse_y);
 }

 function circle(mouse_x,mouse_y){

    ctx.beginPath(); 
    ctx.strokeStyle = color;
     ctx.lineWidth = 2;
     ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI); 
     ctx.stroke(); 
 }