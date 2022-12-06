import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import styles from "../../styles/components/nav.module.scss";

export default function Nav({ isHome = true }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    if (window.innerWidth <= 960) {
      setIsMobile(true);
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  if (isMobile)
    return (
      <>
        <div className={styles.nav_wrapper_mobile}>
          {!mobileNavIsOpen && (
            <HiMenuAlt4
              className={styles.burger}
              onClick={() => {
                setMobileNavIsOpen(true);
              }}
            />
          )}
          {mobileNavIsOpen && (
            <HiX
              className={styles.burger}
              onClick={() => {
                setMobileNavIsOpen(false);
              }}
            />
          )}
        </div>
        {mobileNavIsOpen && (
          <div className={styles.nav_mobile_menu}>
            <Link href={"/home"} passHref>
              <a
                className={styles.nav_logo}
                onClick={() => {
                  setMobileNavIsOpen(false);
                }}
              >
                OpenBlimp
              </a>
            </Link>
            <div className={styles.nav_links_container}>
              <Link href={"https://open-blimp.notion.site/"} passHref>
                <a className={styles.nav_link}>Docs</a>
              </Link>
              <Link
                href={"https://github.com/thedancomplex/open-blimp"}
                passHref
              >
                <a className={styles.nav_link}>Github</a>
              </Link>
              <Link href={"/research"} passHref>
                <a className={styles.nav_link}>Research</a>
              </Link>
            </div>
          </div>
        )}
      </>
    );

  return (
    <div
      className={`${styles.nav_wrapper} ${
        isScrolled || !isHome ? styles.opaque : styles.transparent
      }`}
    >
      <HiMenuAlt4 />
      <div className={styles.nav_container}>
        <Link href={"/home"} passHref>
          <a className={styles.nav_logo}>OpenBlimp</a>
        </Link>
        <div className={styles.nav_links_container}>
          <Link href={"https://open-blimp.notion.site/"} passHref>
            <a className={styles.nav_link}>Docs</a>
          </Link>
          <Link href={"https://github.com/thedancomplex/open-blimp"} passHref>
            <a className={styles.nav_link}>Github</a>
          </Link>
          <Link href={"/research"} passHref>
            <a className={styles.nav_link}>Research</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
