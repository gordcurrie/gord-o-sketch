var line_size = 2
var start_x = 10;
var start_y = 10;
var start_width = line_size;
var start_height = line_size;

var colors_array = {'black':'rgb(0,0,0)', 'red':'rgb(200,0,0)', 'green':'rgb(0,200,0)', 'blue':'rgb(0,0,200)'};

var canvas = document.getElementById('test');
canvas.focus();
var ctx = canvas.getContext('2d');

function shake()
{
   canvas.setAttribute('class', 'drop');
   setTimeout("canvas.setAttribute('class','none')",100);
   if((Math.floor(Math.random()*6)) == 1)
   {
      canvas.width = canvas.width;
   }
}

function color_pick()
{
   var draw_color = colors_array[document.getElementById("colors_select").value];
   ctx.fillStyle = draw_color;
   document.getElementById('colors_select').blur();
   canvas.focus();
}
ctx.fillRect (start_x, start_y, start_width, start_height);

function make_image()
{
   var colors_div = document.getElementById('save_button');
   var img = canvas.toDataURL("image/jpeg");
   var image_file = document.createElement("a");
   image_file.setAttribute("href", img);
   image_file.setAttribute("title", "Right-click and save");
   image_file.appendChild(document.createTextNode("Picture"));
   colors_div.appendChild(document.createElement("br"));
   colors_div.appendChild(image_file);
}

function move_left()
{
   if (start_x > 0)
   {
      start_x -= line_size;
      ctx.fillRect (start_x, start_y, start_width, start_height);
   }
}

function move_right()
{
   if (start_x < 497)
   {
      start_x += line_size;
      ctx.fillRect (start_x, start_y, start_width, start_height);
   }
}

function move_up()
{
   if(start_y > 0)
   {
      start_y -= line_size;
      ctx.fillRect (start_x, start_y, start_width, start_height);
   }
}

function move_down()
{
   if(start_y < 497)
   {
      start_y += line_size;
      ctx.fillRect (start_x, start_y, start_width, start_height);
   }
}
function key_press(key_id)
{  
   switch(key_id)
   {
      case 68:
      case 39:
         move_right();
         break;
      case 65:
      case 37:
         move_left();
         break;
      
      case 87:
      case 38:
         move_up();
         break;
      case 83:
      case 40:
         move_down();
         break;
   }
}