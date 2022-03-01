import styles from "../../styles/components/content-block.module.scss";
import ButtonLink from "../shared/button-link";

export default function ContentBlock({ heading, body, linkText, href }) {
  return (
    <div className={styles.content_block_container}>
      <h2>{heading}</h2>
      <p>{body}</p>
      <ButtonLink linkText={linkText} href={href} />
    </div>
  );
}
