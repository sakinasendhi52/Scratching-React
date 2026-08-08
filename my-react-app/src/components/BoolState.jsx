import { useState } from "react";

// Component to demonstrate useState with a Boolean value
function BoolState(){

    // Create a Boolean state with initial value true
    // login = current Boolean value
    // setLogin = function used to update the Boolean value
    const [login, setLogin] = useState(true);

    return(
        <>
            {/* Table row for Boolean State */}
            <tr>

                {/* State data type */}
                <td>Boolean</td>

                {/* 
                    Conditional rendering:
                    If login is true  → "Logged In"
                    If login is false → "Logged Out"
                */}
                <td>
                    {login ? "Logged In" : "Logged Out"}
                </td>

                <td>

                    {/* 
                        Update Button:
                        !login reverses the current Boolean value.

                        true  → false
                        false → true
                    */}
                    <button
                        className="updateBtn"
                        onClick={() => setLogin(!login)}
                    >
                        Update
                    </button>

                    {/* 
                        Reset Button:
                        Sets the Boolean value back to true
                        which displays "Logged In"
                    */}
                    <button
                        className="resetBtn"
                        onClick={() => setLogin(true)}
                    >
                        Reset
                    </button>

                </td>
            </tr>
        </>
    );
}

export default BoolState;