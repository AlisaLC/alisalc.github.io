import { Carousel } from "@material-tailwind/react";
import { useState } from "react";

interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
  video?: string;
}

interface Props {
  projects: Project[];
}

const ProjectCarousel = ({ projects }: Props) => {
  const [autoplay, setAutoplay] = useState(true);

  return (
    <Carousel transition={{ duration: 0.5 }} autoplay={autoplay} className="rounded-xl">
      {projects.map((member) => (
        <div className="flex flex-col items-center justify-center h-96 bg-gray-900" onClick={() => { setAutoplay(false) }} key={member.name}>
          <a href={member.link}>
            {member.video && <div className="block w-150 h-auto">
              <iframe src={member.video} allowFullScreen />
            </div>}
            {!member.video && <img src={member.image} alt="" className="w-48 h-48 rounded-full" />}
            <h1 className="text-2xl font-bold text-white mt-4">{member.name}</h1>
          </a>
          <h2 className="text-xl text-white w-84">{member.description}</h2>
        </div>
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
