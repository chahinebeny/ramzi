switchcolor(0);
function switchcolor(m){
    let dots = document.getElementsByClassName("color");
    let captionTextcolor = document.getElementById("caption-color");
    captionTextcolor.innerHTML = dots[m].alt;
  }
  