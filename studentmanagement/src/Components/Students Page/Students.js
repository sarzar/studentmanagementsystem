import "./Students.css";
import Display from "./DisplayData";
import Form from "./StudentForm";

function Students(){
    return (
    <>
        <div className="student-page">
        <div className="div-box"> 
        <Form/>
        <Display/>
        </div>
        </div>
    </>
    )
};
export default Students;