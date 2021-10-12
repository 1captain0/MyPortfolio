var id = null;
var i = null;
var elem = document.getElementById("a1");   

var pos = parseInt(elem.style.left);
var temp = pos;
clearInterval(id);
clearInterval(i);
id = setInterval(frame, 2);
function frame() {
  if (pos == 1050) {
    clearInterval(id);
    var i = setInterval(move,2);
  } else {
    pos++; 
    elem.style.left = pos + "px"; 
    console.log(pos);
  }
}

function move(){
  if(pos>=100){
    pos--;
    elem.style.left = pos + "px";
    console.log(pos);
  }
  else{
    clearInterval(i);
    id = setInterval(frame,2);
  }
}
