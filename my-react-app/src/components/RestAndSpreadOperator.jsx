function RestAndSpreadOperator(){

    // Arrays for demonstrating the Spread Operator
    let arr1 = ["Mango", "Banana", "Apple"],
        arr2 = ["Kiwi", "Strawberry"];

    // Merge two arrays using Spread Operator
    let newArr = [...arr1, ...arr2];


    // Objects for demonstrating object spreading
    let obj1 = {
        name: "Liana",
        age: 25,
    }

    let obj2 = {
        city: "Mumbai",
        country: "India"
    }

    // Merge two objects
    let newObj = {...obj1, ...obj2};


    // Employee object for copying an object
    let employeeObj = {
        id: 1,
        name: "John Smith",
        age: 30,
        department: "IT",
        salary: 60000,
    };

    // Create a copy using Spread Operator
    let cpyObj = {...employeeObj};


    // Array for demonstrating Rest Operator
    let numArr = [1, 4, 2, 8, 9];

    // Rest Operator collects all arguments into an array
    function arraySum(...numbers){
        let total = 0;

        for(let num of numbers){
            total += num;
        }

        return total;
    }

    // Spread the array as individual arguments
    let sum = arraySum(...numArr);


    return(
        <>
            {/* Rest & Spread Operator Section */}
            <div className="center-align restSpreadSection">

                {/* Section Heading */}
                <h2 className="task">
                    Task : Rest & Spread Operator
                </h2>


                {/* Merge Two Arrays */}
                <div className="operatorTable">
                    <table className="tableData">

                        <tbody>
                            <tr>
                                <th rowSpan={2}>Merge Two Arrays</th>
                                <th>Array 1</th>
                                <th>Array 2</th>
                                <th>Merge Array</th>
                            </tr>

                            <tr>
                                <td>{arr1.join(", ")}</td>
                                <td>{arr2.join(", ")}</td>
                                <td>{newArr.join(", ")}</td>
                            </tr>
                        </tbody>

                    </table>
                </div>


                {/* Merge Two Objects */}
                <div className="operatorTable">
                    <table className="tableData">

                        <tbody>
                            <tr>
                                <th rowSpan={2}>Merge Two Objects</th>
                                <th>Object 1</th>
                                <th>Object 2</th>
                                <th>Merge Object</th>
                            </tr>

                            <tr>
                                <td>{JSON.stringify(obj1)}</td>
                                <td>{JSON.stringify(obj2)}</td>
                                <td>{JSON.stringify(newObj)}</td>
                            </tr>
                        </tbody>

                    </table>
                </div>


                {/* Copy an Object */}
                <div className="operatorTable">
                    <table className="tableData">

                        <tbody>
                            <tr>
                                <th rowSpan={2}>Copy an Object</th>
                                <th>Object</th>
                                <th>Copy Object</th>
                            </tr>

                            <tr>
                                <td>{JSON.stringify(employeeObj)}</td>
                                <td>{JSON.stringify(cpyObj)}</td>
                            </tr>
                        </tbody>

                    </table>
                </div>


                {/* Function using Rest Operator */}
                <div className="operatorTable">
                    <table className="tableData">

                        <tbody>
                            <tr>
                                <th rowSpan={2}>Function using the Rest Operator</th>
                                <th>Array</th>
                                <th>Sum using Function</th>
                            </tr>

                            <tr>
                                <td>{JSON.stringify(numArr)}</td>
                                <td>{sum}</td>
                            </tr>
                        </tbody>

                    </table>
                </div>

            </div>
        </>
    );
}

export default RestAndSpreadOperator;