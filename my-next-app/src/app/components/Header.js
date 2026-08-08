import Link from "next/link";
import styles from "../page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>

        <div className={styles.logo}>
          <span>✦</span>
          NEXT JS WEBSITE
        </div>

        <nav className={styles.navBar}>
          <ul>
            <li>
              <a href="#homePage">Home</a>
            </li>

            <li>
              <a href="#aboutPage">About</a>
            </li>

            <li>
              <a href="#studentCard">Students</a>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}