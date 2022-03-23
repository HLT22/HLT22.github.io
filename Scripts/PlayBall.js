const canvas = document.getElementById("ballField");
const ctx = canvas.getContext("2d");

let img = document.createElement("img");


let contactTick = null;      // used to keep track of wether contact was made

function pitch() {           //sends the ball towards the batter
  let id = null;

  contactTick = null;       //resets contact ticker

  img.src = "https://hlt22.github.io/Assets/batterHit.png";
  img.src = "https://hlt22.github.io/Assets/batterReady.png";

  ctx.clearRect(0, 0, 600, 400);



  ctx.fillStyle = "#fff";

  let pos = 0;
  let ballSize = 1;

  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {           //continuously redraws the canvas img, new frame every time, makes a new frame
    if (pos == 480) {          //ends frame generation if pos reaches 480
      clearInterval(id);
    } else if (pos >=462) {     //determines what to do with the ball once it reaches the batter
        hit(contactTick, pos)   //sends the ball off like it has been hit or resets batter and lets the ball go to the catcher
      } else {                 //moves ball toward batter
          ballpath(pos,img)
    }
  }
}
