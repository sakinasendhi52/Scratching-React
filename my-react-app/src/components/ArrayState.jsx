import { useState } from "react";

// Component to demonstrate useState with an Array value
function ArrayState(){

    // Create an Array state with initial values
    // numArr = current array
    // setArr = function used to update the array
    const [numArr, setArr] = useState([2, 4, 6]);

    return(
        <>
            {/* Table row for Array State */}
            <tr>

                {/* State data type */}
                <td>Array</td>

                {/* 
                    join(", ") converts the array into a
                    comma-separated string for displaying
                */}
                <td>[{numArr.join(", ")}]</td>

                <td>

                    {/* 
                        Update Button:
                        Spread Operator creates a new array
                        containing the existing values and adds 8.

                        Example:
                        [2, 4, 6] → [2, 4, 6, 8]
                    */}
                    <button
                        className="updateBtn"
                        onClick={() => setArr([...numArr, 8])}
                    >
                        Update
                    </button>

                    {/* 
                        Reset Button:
                        Restores the array to its original values
                    */}
                    <button
                        className="resetBtn"
                        onClick={() => setArr([2, 4, 6])}
                    >
                        Reset
                    </button>

                </td>
            </tr>
        </>
    );
}

export default ArrayState;