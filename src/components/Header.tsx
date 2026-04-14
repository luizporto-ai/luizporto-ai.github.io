"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <div className={styles.spacer} />
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            @oluizporto
          </Link>
          <nav className={styles.nav}>
            <a
              href="/#work"
              className={styles.link}
            >
              work
            </a>
            <Link
              href="/blog"
              className={`${styles.link} ${pathname.startsWith("/blog") ? styles.active : ""}`}
            >
              writing
            </Link>
            <Link
              href="/about"
              className={`${styles.link} ${pathname === "/about" ? styles.active : ""}`}
            >
              about
            </Link>
          </nav>
          <a
            href="https://instagram.com/oluizporto"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Instagram
          </a>
        </div>
      </header>
    </>
  );
}
