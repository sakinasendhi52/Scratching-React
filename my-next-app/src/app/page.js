import StudentCard from "./components/StudentCard";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import styles from "../app/page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.centerAlign}>
        <HomePage/>
        <AboutPage/>
        <h2 className={styles.title}>STUDENT DETAILS</h2>
        <StudentCard id="101" name="Robert Davis" city="Toronto" state="Ontario" country="Canada" course="Full Stack Development"/>
        <StudentCard id="102" name="Emma Johnson" city="Los Angeles" state="California" country="USA" course="Database Management System"/>
        <StudentCard id="103" name="Hannah Lewis" city="London" state="England" country="United Kingdom" course="Cloud Computing"/>
        <StudentCard id="104" name="David Johnson" city="Vancouver" state="British Columbia" country="Canada" course="Machine Learning"/>
        <StudentCard id="105" name="Joseph Anderson" city="Melbourne" state="Victoria" country="Australia" course="Cyber Security"/>
      </div>
    </>
  );
}
