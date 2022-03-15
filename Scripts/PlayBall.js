const canvas = document.getElementById("ballField");
const ctx = canvas.getContext("2d");

let img = document.createElement("img");


let contactTick = null;

function pitch() {
  let id = null;

  contactTick = null;

  img.src = "https://hlt22.github.io/Assets/batterReady.png";

  ctx.clearRect(0, 0, 600, 400);



  ctx.fillStyle = "#fff";

  let pos = 0;
  let ballSize = 1;

  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 480) {
      clearInterval(id);
    } else if (pos >=462) {
        if (contactTick == 1) {
          clearInterval(id);
          img.src = "https://hlt22.github.io/Assets/batterHit.png"
          ctx.drawImage(img, 409, 66, 120, 120);
          ctx.fillRect(x, 400 - .60 * x, Math.round(ballSize * 20 + 10), Math.round(ballSize * 20 + 10));
      
        } else {
            pos++;
            ballSize = ballSize - 0.0021;
            x = pos;
            ctx.clearRect(0, 0, 600, 400);
            img.src = "https://hlt22.github.io/Assets/batterReady.png"
            ctx.drawImage(img, 409, 66, 120, 120);
            ctx.fillRect(x, 400 - .60 * x, Math.round(ballSize * 20 + 10), Math.round(ballSize * 20 + 10));
        }

    } else if (pos >= 461){
        if (contactTick == 1) {
          pos++;
          ballSize = ballSize - 0.0021;
          x = pos;
          ctx.clearRect(0, 0, 600, 400);
          img.src = "https://hlt22.github.io/Assets/batterHit.png"
          ctx.drawImage(img, 409, 66, 120, 120);
          ctx.fillRect(x, 400 - .60 * x, Math.round(ballSize * 20 + 10), Math.round(ballSize * 20 + 10));
          } else {
            pos++;
            ballSize = ballSize - 0.0021;
            x = pos;
            ctx.clearRect(0, 0, 600, 400);
            img.src = "https://hlt22.github.io/Assets/batterReady.png"
            ctx.drawImage(img, 409, 66, 120, 120);
            ctx.fillRect(x, 400 - .60 * x, Math.round(ballSize * 20 + 10), Math.round(ballSize * 20 + 10));
          }
      } else {
          pos++;
          ballSize = ballSize - 0.0021;
          x = pos;
          ctx.clearRect(0, 0, 600, 400);
          ctx.drawImage(img, 409, 66, 120, 120);
          ctx.fillRect(x, 400 - .60 * x, Math.round(ballSize * 20 + 10), Math.round(ballSize * 20 + 10));

    }
  }
}

function swing() {
  img.src = "https://hlt22.github.io/Assets/batterSwing.png";
  if (x > 445 && x < 460) {
    contactTick = 1;
    frame();
  }
}
