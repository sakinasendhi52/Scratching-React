import styles from "../page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.footerContainer}>

        <div className={styles.footerBrand}>
          <h3>✦ NEXT JS WEBSITE</h3>
          <p>
            Building modern and responsive web experiences
            with Next.js.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <h4>Quick Links</h4>

          <a href="#homePage">Home</a>
          <a href="#aboutPage">About</a>
          <a href="#studentCard">Students</a>
        </div>

        <div className={styles.footerContact}>
          <h4>Connect</h4>
          <p>📧 hello@example.com</p>
          <p>📍 India</p>
        </div>

      </div>

      <div className={styles.footerBottom}>
        <p>© 2026 Next JS Website. All Rights Reserved.</p>
      </div>

    </footer>
  );
}