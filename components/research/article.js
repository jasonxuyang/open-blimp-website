/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/components/article.module.scss";
import Link from "next/link";

export default function Article({
  date,
  heading,
  body,
  img,
  alt = "",
  href,
  tags,
}) {
  return (
    <div className={styles.article_container}>
      <div className={styles.content}>
        <div>{date}</div>
        <Link href={href} passHref>
          <a>
            <h3>{heading}</h3>
          </a>
        </Link>
        <p>{body}</p>
        <div className={styles.tagsContainer}>
          {tags.map((tag, index) => {
            return (
              <div key={index} className={styles.tag}>
                {tag}
              </div>
            );
          })}
        </div>
      </div>
      <img src={img} alt={alt} className={styles.img} />
    </div>
  );
}
