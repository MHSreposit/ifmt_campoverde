"use client";
import { useEffect, useRef } from "react";

type SpriteAnimProps = {
  src: string;
  frameWidth: number;
  frameHeight: number;
  totalFrames: number;
  fps?: number;
};

export function SpriteAnimIfmt({
  src,
  frameWidth,
  frameHeight,
  totalFrames,
  fps = 24,
}: SpriteAnimProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const image = new Image();

    image.src = src;

    let frame = 0;
    let lastTime = 0;
    const frameDuration = 1000 / fps;

    image.onload = () => {
      canvas.width = frameWidth;
      canvas.height = frameHeight;

      ctx.imageSmoothingEnabled = false;

      const cols = Math.floor(image.width / frameWidth);

function animate(time: number) {
  if (time - lastTime >= frameDuration) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 🔒 GARANTE FRAME VÁLIDO
    if (frame >= totalFrames) {
      frame = 0;
    }

    const col = frame % cols;
    const row = Math.floor(frame / cols);

    const x = col * frameWidth;
    const y = row * frameHeight;

    const scale = 2; // aumenta 2x

    canvas.width = frameWidth * scale;
    canvas.height = frameHeight * scale;

    ctx.drawImage(
      image,
      col * frameWidth,
      row * frameHeight,
      frameWidth,
      frameHeight,
      0,
      0,
      frameWidth * scale,
      frameHeight * scale
    );


    frame++;
    lastTime = time;
  }

  requestAnimationFrame(animate);
}


      requestAnimationFrame(animate);
    };
  }, [src, frameWidth, frameHeight, totalFrames, fps]);

  return <canvas ref={canvasRef} />;
}
