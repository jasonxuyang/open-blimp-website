import Link from "next/link";
import styles from "../../styles/components/button-primary.module.scss";

export default function ButtonPrimary({ linkText, href }) {
  return (
    <Link href={href} passHref>
      <a className={styles.button_primary}>{linkText}</a>
    </Link>
  );
}
