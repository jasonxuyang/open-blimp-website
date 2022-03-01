import Link from "next/link";
import styles from "../../styles/components/button-link.module.scss";

export default function ButtonLink({ linkText, href }) {
  return (
    <Link href={href} passHref>
      <div className={styles.button_link}>
        <a className={styles.link_text}>{linkText}</a>
      </div>
    </Link>
  );
}
