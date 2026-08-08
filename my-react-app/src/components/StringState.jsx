import { useState } from "react";

// Component to demonstrate useState with a String value
function StringState(){

    // Create a state variable with initial value "REACT JS"
    // str = current value
    // setStr = function used to update the value
    const [str, setStr] = useState("REACT JS");

    return(
        <>
            {/* Table row for String State */}
            <tr>

                {/* State data type */}
                <td>String</td>

                {/* Display the current string value */}
                <td>{str}</td>

                <td>

                    {/* 
                        Update Button:
                        Changes the string from REACT JS to NEXT JS
                    */}
                    <button
                        className="updateBtn"
                        onClick={() => setStr("NEXT JS")}
                    >
                        Update
                    </button>

                    {/* 
                        Reset Button:
                        Changes the string back to REACT JS
                    */}
                    <button
                        className="resetBtn"
                        onClick={() => setStr("REACT JS")}
                    >
                        Reset
                    </button>

                </td>
            </tr>
        </>
    );
}

export default StringState;