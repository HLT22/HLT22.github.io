function myMove() {
  let id = null;
  const elemH = document.getElementById("animateH");
  const elemU = document.getElementById("animateU");
  const elemN = document.getElementById("animateN");
  const elemT = document.getElementById("animateT");
  const elemE = document.getElementById("animateE");
  const elemR = document.getElementById("animateR");
  let pos = 180;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      ypos=pos**2/500 + 60; // divided by 400 is a good benchmark
      elemH.style.top = ypos + "px";
      elemH.style.left = pos - 18 + "px";

      elemU.style.top = ypos + 9 + "px";
      elemU.style.left = pos - 9 + "px";

      elemN.style.top = ypos + 18 + "px";
      elemN.style.left = pos + 0 + "px";

      elemT.style.top = ypos + 27 + "px";
      elemT.style.left = pos + 9 + "px";

      elemE.style.top = ypos + 36 + "px";
      elemE.style.left = pos + 18 + "px";

      elemR.style.top = ypos + 45 + "px";
      elemR.style.left = pos + 27 + "px";
    }
  }
}
