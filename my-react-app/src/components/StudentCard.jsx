function StudentCard(props){
    return(
        <>
            {/* Student Card Container */}
            {/* Student ID Card */}
                <div className="studentCard">

                    {/* Card Header */}
                    <h3 className="padding">
                        STUDENT ID CARD
                    </h3>

                    {/* Student Details */}
                    <div>ID : {props.id}</div>
                    <div>NAME : {props.name}</div>
                    <div>CITY : {props.city}</div>
                    <div>STATE : {props.state}</div>
                    <div>COUNTRY : {props.country}</div>
                    <div>COURSE : {props.course}</div>

                </div>

        </>
    );
}

export default StudentCard;