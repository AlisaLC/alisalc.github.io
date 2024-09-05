import { Footer, Header, Section, TextOnlySection } from "../../containers";
import { Navbar, ProjectCarousel, SkillList } from "../";
import { Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography } from "@material-tailwind/react";

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
    name: "Face Gallery Bot",
    description: "Find your face among all the pictures in a gallery using MTCNN",
    image: "assets/MTCNN.png",
    link: "https://github.com/AlisaLC/FaceGalleryTelegramBot",
  },
  {
    name: "Paper Denoiser",
    description: "a test for using different models in denoising crumpled black and white papers with ink stains",
    image: "assets/UNet.png",
    link: "https://github.com/AlisaLC/PaperDenoiser",
  },
  {
    name: "GraDino",
    description: "A Python AutoGrad module",
    image: "assets/gradino.jpeg",
    link: "https://github.com/AlisaLC/GraDino",
  },
  {
    name: "Yu Gi Oh! 3D",
    description: "A 3D implentation of Yu Gi Oh! card game",
    image: "",
    link: "https://github.com/AlisaLC/AP-YuGiOh3D",
    video: "https://www.aparat.com/video/video/embed/videohash/m926r89/vt/frame"
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
    name: "Deep Learning",
    content: [
      {
        name: "PyTorch",
        percentage: 90,
      },
      {
        name: "Transformers",
        percentage: 90,
      },
      {
        name: "Spark",
        percentage: 90,
      },
      {
        name: "Scikit-learn",
        percentage: 85,
      },
      {
        name: "Large Language Models",
        percentage: 85,
      },
      {
        name: "Deep Learning",
        percentage: 85,
      },
    ]
  },
  {
    name: "Programming",
    content: [
      {
        name: "Python",
        percentage: 95
      },
      {
        name: "Go",
        percentage: 90,
      },
      {
        name: "Docker",
        percentage: 85,
      },
      {
        name: "TypeScript",
        percentage: 85,
      },
      {
        name: "PosgreSQL",
        percentage: 85,
      },
      {
        name: "Django",
        percentage: 85,
      },
    ]
  }
]

function Landing() {
  return (
    <>
      <Navbar />
      <Header />
      <Section name="About Me" side="left" dino={crocs[0]}>
        <TextOnlySection>
          <p>I am a final-year Computer Engineering student at Sharif University of Technology, with a strong focus on adversarial attacks in the context of Large Language Models (LLMs). My research interests lie at the intersection of bias, fairness, and the vulnerabilities of LLMs to adversarial manipulation in natural language processing. Through both my academic studies and industry experience as a Machine Learning Engineer at Yektanet and System Group, I have developed a deep understanding of the challenges posed by these models. My recent publication addresses the bias inherent in LLMs and explores methods to enhance their fairness and explore their biases. I am eager to bring my expertise to a research team committed to advancing AI in a way that is both ethical and robust against adversarial threats.</p>
        </TextOnlySection>
      </Section>
      <Section name="Skills" side="right" dino={crocs[1]}>
        <SkillList skills={skills} />
      </Section>
      <Section name="Projects" side="left" dino={crocs[2]}>
        <ProjectCarousel projects={projects} />
      </Section>
      <Section name="Experiences" side="right" dino={crocs[3]}>
        <Typography variant="h2" color="white" className="text-left mb-2">Research Experience</Typography>
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon color="white" />
              <Typography variant="h3" color="white" className="text-left">
                Sharif University of Technology
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="h4" color="white" className="text-left">
                Research Assistant - Prof. Soleymani
              </Typography>
              <Typography variant="small" color="white" className="text-left">
                <p>Conducted research to develop metrics for assessing alignment, diversity, and quality in diffusion-based image
                  generators across various prompts.</p>
                <p>Developed a comprehensive pipeline for image generation, incorporating prompt rewriting to enhance diversity and
                  quality, followed by image generation and rigorous testing for quality, diversity, and alignment to identify optimal
                  outputs.</p>
                <p>Performed statistical analyses to detect gender bias in actions using verb + object combinations generated by GPT
                  and crawled from the LAION dataset.</p>
                <p>Investigated methodologies to mitigate biases in task-specific generated images through prompt tuning and inpainting
                  techniques, leading to a paper accepted at ECAI 2024.</p>
                <p>Collaborated on research in self-supervised representation learning, where I implemented contrastive learning
                  methodologies, including the Barlow Twins method, to enhance model performance and robustness and VICReg
                  (Variance-Invariance-Covariance Regularization) to stabilize the training process, further improving the eﬀiciency and
                  reliability of the model.</p>
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader className="h-3">
              <TimelineIcon color="white" />
              <Typography variant="h3" color="white" className="text-left">
                Okinawa Institute of Science and Technology
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="h4" color="white" className="text-left">
                Research Assistant - Prof. Sabokroo
              </Typography>
              <Typography variant="small" color="white" className="text-left">
                <p>Conducted comprehensive research on the impacts of simple to complex backdoor attacks on diverse continual
                  learning methods, with a focus on developing effective defense mechanisms against these attacks.</p>
                <p>Explored various strategies to mitigate or expedite recovery from catastrophic forgetting resulting from backdoor
                  attacks, alongside the implementation and evaluation of proactive defense methodologies.</p>
                <p>Delved into the study of different adversarial attacks, including Fast Gradient Sign Method (FGSM) and Projected
                  Gradient Descent (PGD), emphasizing the development of robust models to withstand such attacks.</p>
                <p>Spearheaded an implementation of the NFGSM (Noisy Fast Gradient Sign Method) defense mechanism to bolster
                  model resilience and enhance overall robustness against adversarial attacks, thus contributing to the advancement of
                  defense strategies in the field.</p>
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </Section>
      <Footer />
    </>
  );
}

export default Landing;