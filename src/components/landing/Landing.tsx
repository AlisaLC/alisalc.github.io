import { Footer, Header, Section, TextOnlySection } from "../../containers";
import { Navbar, ProjectCarousel, SkillList } from "../";

function shuffle(array: number[]) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

var crocs = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

const projects = [
  {
    name: "WSS Chat Bot",
    description: "QA Chat bot using OpenAI API for Winter Seminar Series using Retrieval Augmented Generation",
    image: "assets/RAG.png",
    link: "https://github.com/AlisaLC/WSSChatBot",
  },
  {
    name: "Yu Gi Oh! 3D",
    description: "A 3D implentation of Yu Gi Oh! card game",
    image: "",
    link: "https://github.com/AlisaLC/AP-YuGiOh3D",
    video: "https://www.aparat.com/video/video/embed/videohash/m926r89/vt/frame"
  },
  {
    name: "Face Gallery Bot",
    description: "Find your face among all the pictures in a gallery using MTCNN",
    image: "assets/MTCNN.png",
    link: "https://github.com/AlisaLC/FaceGalleryTelegramBot",
  },
  {
    name: "GraDino",
    description: "A Python AutoGrad module",
    image: "assets/gradino.jpeg",
    link: "https://github.com/AlisaLC/GraDino",
  },
  {
    name: "Paper Denoiser",
    description: "a test for using different models in denoising crumpled black and white papers with ink stains",
    image: "assets/UNet.png",
    link: "https://github.com/AlisaLC/PaperDenoiser",
  },
  {
    name: "Annoy Go",
    description: "a fast read-only native implementation of Annoy (Approximate Nearest Neighbors by Spotify) in Go",
    image: "assets/annoy.png",
    link: "https://github.com/AlisaLC/annoy-go",
  },
];

const skills = [
  {
    name: "Python",
    percentage: 95
  },
  {
    name: "PyTorch",
    percentage: 90,
  },
  {
    name: "Transformers",
    percentage: 85,
  },
  {
    name: "Deep Learning",
    percentage: 85,
  },
  {
    name: "System Design",
    percentage: 80,
  }
]

function Landing() {
  return (
    <>
      <Navbar />
      <Header />
      <Section name="About Me" side="left" dino={crocs[0]}>
        <TextOnlySection>
          <p>I am Ali Salesi, a student of Computer Engineering at Sharif University of Technology. In my journey as a software engineer and a machine learning engineer, I've gained practical and research experience. My time as a Software Engineer at System Group, working on Cloud Sepidar, increased my proficiency in system architecture. My time as a Machine Learning Engineer at Yektanet gave me experience with big data and how to be proficient while processing huge loads of data.</p>
          <p>I look forward to the opportunity, to bring my skills and passion to the research team and contribute to the future where AI is being used everywhere to improve the quality of everyday life.</p>
        </TextOnlySection>
      </Section>
      <Section name="Skills" side="right" dino={crocs[1]}>
        <SkillList skills={skills} />
      </Section>
      <Section name="Projects" side="left" dino={crocs[2]}>
        <ProjectCarousel projects={projects} />
      </Section>
      <Section name="Background" side="right" dino={crocs[3]}>
        <TextOnlySection>
          <p>In my academic journey and practical experiences, I have cultivated a strong foundation in machine learning and deep learning fundamentals, demonstrating proficiency in the use of cutting-edge technologies. I am well-versed in the PyTorch framework, having utilized it extensively in various projects, underscoring my practical skills in implementing and experimenting with deep learning models.</p>
          <p>Furthermore, my exploration of VLMs has equipped me with a nuanced understanding of the intersection between computer vision and natural language processing. I enjoy working with multi-modal models. I am excited about the prospect of leveraging these skills and experiences to contribute meaningfully to the research on novel high-quality image generation methods.</p>
        </TextOnlySection>
      </Section>
      <Footer />
    </>
  );
}

export default Landing;