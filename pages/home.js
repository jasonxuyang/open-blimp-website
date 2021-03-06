import styles from "../styles/pages/home.module.scss";
import ButtonPrimary from "../components/shared/button-primary";
import ContentBlock from "../components/home/content-block";
import Image from "next/image";
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
          <h1>An Open Source Blimp Designed and Built for Research</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            scelerisque consectetur nibh, at porta nisl porta ut. Nulla
            fermentum felis sapien, sed convallis risus luctus et.
          </p>
          <ButtonPrimary
            linkText="Get Started"
            href="https://www.notion.so/OpenBlimp-Docs-cbe8a34e08de4f79ae80e9781a82d98c"
          />
        </div>
      </section>
      <section id={styles.section_1}>
        <div className={`${styles.img_block} ${styles.left_img_block}`}>
          <Image src={placeHolder} layout="fill" alt="img" />
        </div>
        <ContentBlock
          heading="Designed for Research Applications"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque consectetur nibh, at porta nisl porta ut. Nulla fermentum felis sapien, sed convallis risus luctus et."
          linkText="See Hardware Specs"
          href="https://www.notion.so/OpenBlimp-Docs-cbe8a34e08de4f79ae80e9781a82d98c"
        />
      </section>

      <section id={styles.section_2}>
        <ContentBlock
          heading="Stable Flight"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque consectetur nibh, at porta nisl porta ut. Nulla fermentum felis sapien, sed convallis risus luctus et."
          linkText="Learn More"
          href="https://www.notion.so/OpenBlimp-Docs-cbe8a34e08de4f79ae80e9781a82d98c"
        />
        <div className={`${styles.img_block} ${styles.right_img_block}`}>
          <Image src={placeHolder} layout="fill" alt="img" />
        </div>
      </section>

      <section id={styles.section_3}>
        <div className={`${styles.img_block} ${styles.left_img_block}`}>
          <Image src={placeHolder} layout="fill" alt="img" />
        </div>
        <ContentBlock
          heading="Built with Onboard Computing"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque consectetur nibh, at porta nisl porta ut. Nulla fermentum felis sapien, sed convallis risus luctus et."
          linkText="See Demo"
          href="https://www.notion.so/OpenBlimp-Docs-cbe8a34e08de4f79ae80e9781a82d98c"
        />
      </section>

      <section id={styles.section_4}>
        <h2>Get Started with our Demos</h2>
        <div className={styles.icon_block_container}>
          <IconBlock
            text="Source Seeking Demo"
            href="https://www.notion.so/OpenBlimp-Docs-cbe8a34e08de4f79ae80e9781a82d98c"
          />
          <IconBlock
            text="Joystick Demo"
            href="https://www.notion.so/OpenBlimp-Docs-cbe8a34e08de4f79ae80e9781a82d98c"
          />
          <IconBlock
            text="Placeholder"
            href="https://www.notion.so/OpenBlimp-Docs-cbe8a34e08de4f79ae80e9781a82d98c"
          />
        </div>
      </section>
    </main>
  );
}
