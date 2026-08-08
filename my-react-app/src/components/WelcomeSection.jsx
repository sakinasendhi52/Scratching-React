import MountainImage from "../assets/images/mountain-image.jpg";

function WelcomeSection() {

    // Student information
    const studentName = "Sakina Sendhi";
    const courseName = "Full Stack Development";
    const instituteName = "Red and White Institute";

    // Get the current date
    let date = new Date();

    return (
        <>
            {/* Welcome / JSX & Components Section */}
            <div className="center-align welcomeSection">

                {/* Section heading */}
                <h2 className="center-align task">
                    Task : JSX & Components
                </h2>

                {/* Student information table */}
                <table className="tableData center-align">

                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Course Name</th>
                            <th>Institute Name</th>
                            <th>Current Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{studentName}</td>
                            <td>{courseName}</td>
                            <td>{instituteName}</td>
                            <td>{date.toDateString()}</td>
                        </tr>
                    </tbody>

                </table>

                {/* Mountain image heading */}
                <h3 className="padding mountainTitle">
                    Mountain Image
                </h3>

                {/* Mountain image */}
                <div className="mountainImageContainer">
                    <img
                        src={MountainImage}
                        alt="Mountain Image"
                        width="700px"
                    />
                </div>

            </div>
        </>
    );
}

export default WelcomeSection;