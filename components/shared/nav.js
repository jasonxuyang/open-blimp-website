import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../../styles/components/nav.module.scss";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = (e) => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <div
      className={`${styles.nav_wrapper} ${
        isScrolled ? styles.opaque : styles.transparent
      }`}
    >
      <div className={styles.nav_container}>
        <Link href={"/home"} passHref>
          <a className={styles.nav_logo}>OpenBlimp</a>
        </Link>
        <div className={styles.nav_links_container}>
          <Link href={"/home"} passHref>
            <a className={styles.nav_link}>Research</a>
          </Link>
          <Link href={"/home"} passHref>
            <a className={styles.nav_link}>Docs</a>
          </Link>
          <Link href={"/home"} passHref>
            <a className={styles.nav_link}>Github</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
