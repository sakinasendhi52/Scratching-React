import { useState } from "react";

// Component to demonstrate useState with an Object value
function ObjectState(){

    // Create an Object state with initial properties
    // person = current object
    // setPerson = function used to update the object
    const [person, setPerson] = useState({
        name: "Liana",
        age: 19
    });

    return(
        <>
            {/* Table row for Object State */}
            <tr>

                {/* State data type */}
                <td>Object</td>

                {/* 
                    JSON.stringify() converts the JavaScript object
                    into a string so that it can be displayed
                */}
                <td>
                    {JSON.stringify(person)}
                </td>

                <td>

                    {/* 
                        Update Button:
                        Spread Operator copies the existing object
                        and adds a new city property.

                        Before:
                        { name: "Liana", age: 19 }

                        After:
                        { name: "Liana", age: 19, city: "Mumbai" }
                    */}
                    <button
                        className="updateBtn"
                        onClick={() =>
                            setPerson({
                                ...person,
                                city: "Mumbai"
                            })
                        }
                    >
                        Update
                    </button>

                    {/* 
                        Reset Button:
                        Restores the object to its original values
                    */}
                    <button
                        className="resetBtn"
                        onClick={() =>
                            setPerson({
                                name: "Liana",
                                age: 19
                            })
                        }
                    >
                        Reset
                    </button>

                </td>
            </tr>
        </>
    );
}

export default ObjectState;