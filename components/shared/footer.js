import Link from "next/link";
import styles from "../../styles/components/footer.module.scss";
import ButtonPrimary from "./button-primary";

export default function Footer() {
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.footer_container}>
        <div className={styles.footer_content_container}>
          <h2>Get Involed</h2>
          <p>
            Interested in learning how you could contribute to this open source
            project?
          </p>
          <ButtonPrimary linkText="Contact Us" href="/home" />
        </div>

        <div className={styles.footer_links_container}>
          <Link href={"/home"} passHref>
            <a className={styles.footer_link}>Facebook</a>
          </Link>
          <Link href={"/home"} passHref>
            <a className={styles.footer_link}>Instagram</a>
          </Link>
          <Link href={"/home"} passHref>
            <a className={styles.footer_link}>GTSR</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
