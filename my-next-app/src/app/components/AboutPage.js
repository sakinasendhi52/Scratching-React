import Link from "next/link";
import styles from "../page.module.css";

export default function About() {
  return (
    <main className={styles.about} id="aboutPage">
      <section className={styles.features}>
        <p>ABOUT ME</p>
        <h2>What I Do</h2>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Frontend Development</h3>
            <p>
              Creating responsive and interactive websites using modern
              frontend technologies.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Backend Development</h3>
            <p>
              Building reliable applications and working with databases and
              server-side technologies.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Problem Solving</h3>
            <p>
              Turning ideas and problems into simple, efficient and practical
              solutions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}