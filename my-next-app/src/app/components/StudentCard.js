import styles from "../page.module.css";

export default function StudentCard(props) {
  return (
    <div className={styles.studentCardWrapper} id="studentCard">
      <div className={styles.studentCardBox}>

        <div className={styles.studentCardHeader}>
          <div className={styles.studentCardLogo}>🎓</div>

          <div>
            <h3>STUDENT ID CARD</h3>
            <p>STUDENT INFORMATION</p>
          </div>
        </div>

        <div className={styles.studentCardProfile}>
          <div className={styles.studentCardAvatar}>
            {props.name.charAt(0)}
          </div>

          <div>
            <h2>{props.name}</h2>
            <p>ID: {props.id}</p>
          </div>
        </div>

        <div className={styles.studentCardDetails}>

          <div>
            <small>City</small>
            <strong>{props.city}</strong>
          </div>

          <div>
            <small>State</small>
            <strong>{props.state}</strong>
          </div>

          <div>
            <small>Country</small>
            <strong>{props.country}</strong>
          </div>

          <div>
            <small>Course</small>
            <strong>{props.course}</strong>
          </div>

        </div>

        <div className={styles.studentCardFooter}>
          <span>● ACTIVE STUDENT</span>
          <span>#{props.id}</span>
        </div>

      </div>
    </div>
  );
}