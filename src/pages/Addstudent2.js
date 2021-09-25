import { Form } from "@shopify/polaris";
import axios from "axios";
import React,{useCallback, useState} from "react";
const AddStudent=()=>
{
    const [state, setState] = useState({
        fname:"",
        lname:"",
        email:""
    });

  const handleInput = useCallback((e)=>{
    e.preventDefault();
     setState({...state,[e.target.name]:e.target.value});
  });

   const saveStudent= async (e)=>{
        e.preventDefault();
        const data ={
            fname:state.fname,
            lname:state.lname,
            email:state.email,
        }

        axios.post('http://127.0.0.1:8000/api/demo', data).then(res =>{
            if(res.data.status === 200){
                console.log(res.data.message);
                setState({
                    fname:"",
                    lname:"",
                    email:""
                });
            }
        });
    }
        return(
            <Form onSubmit={saveStudent}>
                    <div className="mb-3">
                    <label  className="form-label">First Name</label>
                    <input type="text" className="form-control" name="fname" value={state.fname} onChange={handleInput}/>
                    </div>
                    <div className="mb-3">
                    <label  className="form-label">Last Name</label>
                    <input type="text" className="form-control" name="lname" value={state.lname} onChange={handleInput}/>
                    </div>
                    <div className="mb-3">
                    <label  className="form-label">Email</label>
                    <input type="text" className="form-control" name="email" value={state.email} onChange={handleInput}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
        );
    

}
export default AddStudent 