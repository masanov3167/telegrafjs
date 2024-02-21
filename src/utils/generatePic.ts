import { readFileSync } from "fs";
import path from "path";
import { createCanvas, loadImage } from "canvas";

const generatePic = async (text: string) => {
    try {
      const file = readFileSync(
        path.join("public", "cat.jpg")
      );
      const canvas = createCanvas(500,500);
      const ctxCanvas = canvas.getContext("2d");
      ctxCanvas.fillStyle = "#ffffff";
      ctxCanvas.fillRect(0, 0, canvas.width, canvas.height);
      const image = await loadImage(file);
      ctxCanvas.drawImage(image, 0, 0, canvas.width, canvas.height);
      ctxCanvas.font = "bold 30px Arial";
      ctxCanvas.textAlign = "center";
      ctxCanvas.fillText(
        text,
        canvas.width / 2,
        canvas.height / 1.4
      );
      const buffer = canvas.toBuffer("image/png");
      return buffer;
    } catch (e) {
      console.log(String(e));
  
      return false;
    }
  };

  export default generatePic;