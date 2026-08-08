import { useState, useEffect } from "react";

function StudentInformation() {

    // Store the list of students.
    // If students already exist in localStorage, load them.
    // Otherwise, start with an empty array.
    const [students, setStudent] = useState(
        JSON.parse(localStorage.getItem("Students")) || []
    );

    // State for the Add Student input
    const [addName, setAddName] = useState("");

    // State for the Delete Student input
    const [deleteName, setDeleteName] = useState("");


    // Runs whenever the students array changes.
    // Saves the updated students list into localStorage.
    useEffect(() => {
        localStorage.setItem("Students", JSON.stringify(students));
    }, [students]);


    return (
        <>
            <table className="studentData">

                <tbody>

                    {/* Table heading */}
                    <tr>
                        <th colSpan={2}>
                            Student Information Manager
                        </th>
                    </tr>


                    {/* Display all students */}
                    <tr>
                        <td>Students</td>

                        <td>
                            {students.join(", ")}
                        </td>
                    </tr>


                    {/* Add Student section */}
                    <tr>
                        <td>Add Student</td>

                        <td>

                            {/* Input for entering student name */}
                            <input
                                type="text"
                                placeholder="Enter name"
                                value={addName}
                                onChange={(e) =>
                                    setAddName(e.target.value)
                                }
                            />

                            {/* Add Student button */}
                            <button
                                onClick={() => {

                                    // Check if the input is not empty
                                    if (addName != "") {

                                        // Add the new student to the array
                                        setStudent([
                                            ...students,
                                            addName
                                        ]);

                                        // Show success message
                                        alert(
                                            `${addName} Student Added`
                                        );

                                        // Clear the input
                                        setAddName("");

                                    } else {

                                        // Show error if input is empty
                                        alert("Enter Student Name");
                                    }
                                }}
                            >
                                Add Student
                            </button>

                        </td>
                    </tr>


                    {/* Delete Student section */}
                    <tr>
                        <td>Delete Student</td>

                        <td>

                            {/* Input for entering student name to delete */}
                            <input
                                type="text"
                                placeholder="Enter name"
                                value={deleteName}
                                onChange={(e) =>
                                    setDeleteName(e.target.value)
                                }
                            />

                            {/* Delete Student button */}
                            <button
                                onClick={() => {

                                    // Variable to store the index
                                    // of the student to be deleted
                                    let id = null;


                                    // Check if the input is empty
                                    if (deleteName == "") {

                                        alert(
                                            "Enter Name to delete"
                                        );

                                    }

                                    // Check whether the student exists
                                    // Case-insensitive comparison is used
                                    else if (
                                        !students.some(
                                            (student) =>
                                                student.toLowerCase() ===
                                                deleteName.toLowerCase()
                                        )
                                    ) {

                                        alert("No such Student");

                                    }

                                    else {

                                        // Find the index of the student
                                        students.forEach((s, i) => {

                                            if (
                                                s.toLowerCase() ==
                                                deleteName.toLowerCase()
                                            ) {
                                                id = i;
                                            }

                                        });


                                        // Create a copy of the students array
                                        let updatedStudent = [
                                            ...students
                                        ];


                                        // Remove one student from the array
                                        // using the index found above
                                        updatedStudent.splice(id, 1);


                                        // Update React state
                                        setStudent(updatedStudent);


                                        // Show success message
                                        alert(
                                            `${deleteName} Student Deleted`
                                        );


                                        // Reset the index variable
                                        id = null;


                                        // Clear the delete input
                                        setDeleteName("");
                                    }

                                }}
                            >
                                Delete Student
                            </button>

                        </td>
                    </tr>

                </tbody>

            </table>
        </>
    );
}

export default StudentInformation;