const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "#845EC2";
    context.fillRect(0, 0, width, height);

    const cx = width * 0.5;
    const cy = height * 0.5;

    const w = width * 0.01;
    const h = height * 0.1;
    let x, y;

    const num = 40;
    const radius = width * 0.3;

    const text = "JD";
    context.font = "500 7rem tahoma"; // Définit la taille et la police du texte
    context.textAlign = "center"; // Centre le texte horizontalement
    context.textBaseline = "middle"; // Centre le texte verticalement

    context.fillStyle = "#FFD700"; // Définit la couleur du texte
    context.fillText(text, width / 2, height / 2); // Dessine le texte au centre du canvas

    const colors = ["#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"];
    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(0.1, 2), random.range(0.2, 0.5));

      context.fillStyle = random.pick(colors);
      context.beginPath();
      context.rect(-w * 0.5, random.range(500, -h * 2), w, h);
      context.fill();
      context.restore();

      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = random.range(5, 20);

      context.beginPath();
      context.arc(
        0,
        0,
        radius * random.range(0.7, 1.3),
        slice * random.range(1, -8),
        slice * random.range(1, 5)
      );
      context.strokeStyle = random.pick(colors);
      context.stroke();

      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
