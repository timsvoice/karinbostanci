$(document).foundation();

//splash 
function resizesplash() {
      var heights = window.innerHeight;
      document.getElementById("splash").style.height = heights + "px";
  }

  resizesplash();
  window.onresize = function() {
      resizesplash();
};