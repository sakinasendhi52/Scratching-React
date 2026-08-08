import Link from "next/link";
import styles from "../page.module.css";

export default function Home() {
  return (
    <main className={styles.home} id="homePage">
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.subtitle}>WELCOME TO MY WEBSITE</p>

          <h1>
            Learn, Build & <span>Grow</span>
          </h1>

          <p className={styles.description}>
            Explore my projects, skills and journey as a Full Stack Developer.
            I love creating modern and user-friendly web applications.
          </p>

          <div className={styles.buttons}>
            <a href="#aboutPage" className={styles.primaryBtn}>
              About Me
            </a>

            <a href="#studentCard" className={styles.secondaryBtn}>
              Student Cards
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}