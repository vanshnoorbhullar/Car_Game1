canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=100;
car1_height=90;
car2_width=100;
car2_height=90;
background_img="racing car.jpg";

car1_img="car1.png";
car2_img="car2.png";

car1x=10;
car1y=10;
car2x=10;
car2y=100;

function add(){
    background_imgTAG=new Image();
    background_imgTAG.onload=uploadbackgroud;
    background_imgTAG.src=background_img;

    car1_imgTAG=new Image();
    car1_imgTAG.onload=uploadcar1;
    car1_imgTAG.src=car1_img;
    car2_imgTAG=new Image();
    car2_imgTAG.onload=uploadcar2;
    car2_imgTAG.src=car2_img;
    
}
function uploadbackgroud(){
    ctx.drawImage(background_imgTAG,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_imgTAG,car1x,car1y,car1_width,car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_imgTAG,car2x,car2y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    key_press=e.keyCode;
    console.log(key_press);
    if (key_press=="38"){
        up();
        console.log("Up Key Is Pressed");
    }
    if (key_press=="40"){
        down();
        console.log("Down Key Is Pressed");
    }
    if (key_press=="37"){
        left(); 
        console.log("Left Key Is Pressed");
    }
    if (key_press=="39"){
        right();
        console.log("Right Key Is Pressed");
    }
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    key_press2=e.keyCode;
    console.log(key_press2);
    if (key_press2=="87"){
        w();
        console.log("W Key Is Pressed");
    }
    if (key_press2=="83"){
        s();
        console.log(" S Key Is Pressed");
    }
    if (key_press2=="65"){
        a(); 
        console.log("A Key Is Pressed");
    }
    if (key_press2=="68"){
        d();
        console.log("D Key Is Pressed");
    }
}
