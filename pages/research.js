import styles from "../styles/pages/research.module.scss";
import Article from "../components/research/article";

const TAGS = {
  SOURCE_SEEKING: "Source Seeking",
  SWARMING: "Swarming",
  HUMAN_ROBOT_INTERACTION: "Human Robot Interaction",
};

const PAPERS = [
  {
    date: "Feb 6th, 2022",
    heading:
      "Monocular Vision-based Localization and Pose Estimation with a Nudged Particle Filter and Ellipsoidal Confidence Tubes",
    body: "This paper proposes a filtering strategy using the particle filter to estimate the pose of a camera given a sequence of newly acquired images.",
    img: "/img/research/autonomous_exploration.png",
    tags: [TAGS.SOURCE_SEEKING],
    href: "https://www.gtsr.gatech.edu/gtsr-research/sdodc/",
  },
  {
    date: "Feb 6th, 2022",
    heading: "Autonomous Exploration for Multi-Agent Systems",
    body: "This paper proposes a nudged particle filter for estimating the pose of a camera mounted on flying robots collecting a video sequence.",
    img: "/img/research/monocular_vision.png",
    tags: [TAGS.SOURCE_SEEKING],
    href: "https://www.gtsr.gatech.edu/gtsr-research/sdodc/",
  },
];

export default function Home() {
  return (
    <main className={styles.research_container}>
      <h1 className={styles.title}>Ongoing Research</h1>
      <div className={styles.papers}>
        {PAPERS.map((paper, index) => {
          return (
            <Article
              key={index}
              date={paper.date}
              heading={paper.heading}
              body={paper.body}
              img={paper.img}
              tags={paper.tags}
              href={paper.href}
            />
          );
        })}
      </div>
    </main>
  );
}
