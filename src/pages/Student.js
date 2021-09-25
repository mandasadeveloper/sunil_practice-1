import React,{Component} from "react";
import { Link } from "react-router-dom";
class Student extends Component
{
    render(){
        return(
            <div>
                  <Link to={'add-student'} className="btn btn-primary btn-sm">Add</Link>
            </div>
        );
    }

}
export default Student 