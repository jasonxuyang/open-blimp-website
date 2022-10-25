import styles from "../styles/pages/home.module.scss";
import ButtonPrimary from "../components/shared/button-primary";
import ContentBlock from "../components/home/content-block";
import Image from "next/image";
import img1 from "../public/img/img1.png";
import img2 from "../public/img/img2.png";
import placeHolder from "../public/img/img_placeholder.png";
import hero from "../public/img/img_hero.jpg";
import IconBlock from "../components/home/icon-block";

export default function Home() {
  return (
    <main className={styles.home_container}>
      <section id={styles.section_hero}>
        <div className={styles.hero_img_wrapper}>
          <Image
            src={hero}
            className={styles.hero_img}
            layout="fill"
            alt="img"
          />
        </div>
        <div className={styles.hero_content}>
          <h1>
            An Open Source Blimp Designed for Indoor Applications in
            Human-Occupied Environments
          </h1>
          <p>
            OpenBlimp is a lighter-than-air UAV developed by Georgia Tech&apos;s
            System Research Lab to support research on mobile sensor networks,
            human-robot interaction, 3D motion control, networked robotics, and
            other aspects of autonomy in an indoor environment.
          </p>
          <ButtonPrimary
            linkText="Get Started"
            href="https://www.notion.so/OpenBlimp-Docs-cbe8a34e08de4f79ae80e9781a82d98c"
          />
        </div>
      </section>
      <section id={styles.section_1}>
        <div className={`${styles.img_block} ${styles.left_img_block}`}>
          <Image src={img1} layout="fill" alt="img" />
        </div>
        <ContentBlock
          heading="Flexibly Designed for Indoor Applications"
          body="The diameter of OpenBlimp is 0.7 meters, ensuring agility in a confined indoor space. Additionally, OpenBlimp also features omnidirectional actuation and can be customized with a larger envelope to increase payload capacity."
          linkText="Learn More"
          href="https://www.notion.so/OpenBlimp-Docs-cbe8a34e08de4f79ae80e9781a82d98c"
        />
      </section>

      <section id={styles.section_2}>
        <ContentBlock
          heading="Extended Flight Endurance"
          body="The lifting force provided by the buoyancy of the envelope enables OpenBlimp to have a loiter time for over 2 hours without any need for consistent propulsion."
          linkText="Learn More"
          href="https://www.notion.so/OpenBlimp-Docs-cbe8a34e08de4f79ae80e9781a82d98c"
        />
        <div className={`${styles.img_block} ${styles.right_img_block}`}>
          <Image src={placeHolder} layout="fill" alt="img" />
        </div>
      </section>

      <section id={styles.section_3}>
        <div className={`${styles.img_block} ${styles.left_img_block}`}>
          <Image src={img2} layout="fill" alt="img" />
        </div>
        <ContentBlock
          heading="Safe for Human Interaction Experiments"
          body="Cushioned with a helium-filled envelope, OpenBlimp is safe for humans to touch, feel, and collide with."
          linkText="Learn More"
          href="https://www.notion.so/OpenBlimp-Docs-cbe8a34e08de4f79ae80e9781a82d98c"
        />
      </section>

      <section id={styles.section_4}>
        <h2>Research Topics</h2>
        <div className={styles.icon_block_container}>
          <IconBlock
            text="Source Seeking"
            href="https://www.notion.so/OpenBlimp-Docs-cbe8a34e08de4f79ae80e9781a82d98c"
          />
          <IconBlock
            text="Swarming Applications"
            href="https://www.notion.so/OpenBlimp-Docs-cbe8a34e08de4f79ae80e9781a82d98c"
          />
          <IconBlock
            text="Human Robot Interaction"
            href="https://www.notion.so/OpenBlimp-Docs-cbe8a34e08de4f79ae80e9781a82d98c"
          />
        </div>
      </section>
    </main>
  );
}
