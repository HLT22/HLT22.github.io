function hit(a, b) {
  if (a == 1) {
    pos++;
    ctx.clearRect(0, 0, 600, 400);                                                                                                              // clearInterval(id);
    img.src = "https://hlt22.github.io/Assets/batterHit.png"
    ctx.drawImage(img, 409, 66, 120, 120);
    ctx.fillRect(462 - 35 * (b - 462), 400 - .60 * b, Math.round(ballSize * 20 + 10), Math.round(ballSize * 20 + 10));

  } else {
      pos++;
      ballSize = ballSize - 0.0021;
      ctx.clearRect(0, 0, 600, 400);
      img.src = "https://hlt22.github.io/Assets/batterReady.png"
      ctx.drawImage(img, 409, 66, 120, 120);
      ctx.fillRect(b, 400 - .60 * b, Math.round(ballSize * 20 + 10), Math.round(ballSize * 20 + 10));
  }
}
