import { Typography } from "@material-tailwind/react";
import Typewriter from "typewriter-effect";
import "./header.css";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const baseImageRef = useRef<HTMLImageElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [alpha, setAlpha] = useState(0);
  const [rising, setRising] = useState(true);
  const [me, setMe] = useState("me.png");

  const generateNoise = (width: number, height: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = width;
    canvas.height = height;

    const imageData = context.createImageData(width, height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.floor(Math.random() * 255);
      data[i] = noise;
      data[i + 1] = noise;
      data[i + 2] = noise;
      data[i + 3] = alpha;
    }

    context.putImageData(imageData, 0, 0);
    if (rising) {
      if (alpha + 20 > 255) {
        setRising(false)
        if (me == "me.png") {
          setMe("me2.jpg")
        } else if (me == "me2.jpg") {
          setMe("me3.jpg")
        } else {
          setMe("me.png")
        }
      }
    } else {
      if (alpha - 40 < 0) {
        setRising(true)
      }
    }
    if (rising) {
      setTimeout(() => { setAlpha(alpha + 20) }, 100)
    } else {
      setTimeout(() => { setAlpha(alpha - 40) }, 100)
    }
  };

  useEffect(() => {
    if (imageLoaded && baseImageRef.current) {
      const baseImage = baseImageRef.current;
      const width = baseImage.clientWidth;
      const height = baseImage.clientHeight;

      generateNoise(width, height);
    }
  }, [imageLoaded, alpha]);

  return (
    <div className="p-4 md:p-8 header-wrapper flex items-center justify-between flex-col h-[52rem] md:h-[40rem] lg:h-[28rem]">
      <div className="container mx-auto flex items-center justify-between flex-col-reverse lg:flex-row md:mb-8">
        <div className="flex items-center gap-4 w-1/2 min-w-1/2 h-1/2 min-h-1/2">
          <Typography
            variant="h1"
            color="white"
            className="p-1 font-normal header-type-writer text-4xl md:text-5xl"
          >
            <Typewriter
              options={{
                strings: [
                  "Large Language Models",
                  "Diffusion Models",
                  "Adversarial Attacks",
                  "Bias and Safety",
                  "Vision Language Models",
                  "Big Data",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
        </div>
        <div className="flex items-center gap-4">
          <img
            src={"assets/" + me}
            alt="logo"
            className="lg:max-w-[24rem] md:max-w-[22rem] min-w-[16rem] rounded-full z-100"
            ref={baseImageRef}
            onLoad={() => setImageLoaded(true)}
          />
          <canvas
            ref={canvasRef}
            className="lg:block lg:ml-[-25rem] md:block md:ml-[-23rem] sm:hidden rounded-full z-20"
            style={{
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;