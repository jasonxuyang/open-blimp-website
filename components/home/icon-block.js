import styles from "../../styles/components/icon-block.module.scss";
import Link from "next/link";

export default function IconBlock({ text, href }) {
  return (
    <Link href={href} passHref>
      <div className={styles.icon_block_wrapper}>
        <a>{text}</a>
      </div>
    </Link>
  );
}
