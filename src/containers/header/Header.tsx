import { Typography } from "@material-tailwind/react";
import Typewriter from "typewriter-effect";
import "./header.css";

const Header = () => {
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
		              "Reinforcement Learning",
                  "Big Data",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
        </div>
        <div className="flex items-center gap-4">
          <img src="assets/me.png" alt="logo" className="lg:max-w-[24rem] md:max-w-[22rem] min-w-[16rem]" />
        </div>
      </div>
    </div>
  );
};

export default Header;