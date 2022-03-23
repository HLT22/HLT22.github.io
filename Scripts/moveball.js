function ballpath(x, img) {
  pos++;
  ballSize = ballSize - 0.0021;
  ctx.clearRect(0, 0, 600, 400);
  ctx.drawImage(img, 409, 66, 120, 120);
  ctx.fillRect(x, 400 - .60 * x, Math.round(ballSize * 20 + 10), Math.round(ballSize * 20 + 10));
}
