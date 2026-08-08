import { useState } from "react";

// Component to demonstrate useState with a Number value
export default function NumberState(){

    // Create a number state with initial value 10
    // num = current number
    // setNumber = function used to update the number
    const [num, setNumber] = useState(10);

    return(
        <>
            {/* Table row for Number State */}
            <tr>

                {/* State data type */}
                <td>Number</td>

                {/* Display the current number */}
                <td>{num}</td>

                <td>

                    {/* 
                        Update Button:
                        Changes the number from 10 to 20
                    */}
                    <button
                        className="updateBtn"
                        onClick={() => setNumber(20)}
                    >
                        Update
                    </button>

                    {/* 
                        Reset Button:
                        Changes the number back to 10
                    */}
                    <button
                        className="resetBtn"
                        onClick={() => setNumber(10)}
                    >
                        Reset
                    </button>

                </td>
            </tr>
        </>
    );
}