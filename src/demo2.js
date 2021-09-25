import { TextField } from '@shopify/polaris';
import React, { useCallback, useState } from 'react'
import { FormControl } from 'react-bootstrap';

const Demo2 = () => {

    const [formValues, setFormValues] = useState({
        fname:"",
        lname:""
    });

        const handleFnameChange = (event) => {
            const {name,value} = event.target
                setFormValues((prevNote) =>{
                return {
                ...prevNote,
                [name]: value
                };
                });
        }
       
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(formValues));
    }

    return (
        <form  onSubmit={handleSubmit}>        
            <div className="form-inline">
              <label>Name</label>              
              <FormControl type="text" name="fname" value={formValues.fname} onChange={handleFnameChange} />
              <label>Email</label>
              <FormControl type="text" name="lname" value={formValues.lname} onChange={handleFnameChange} />            
            </div>
          <div className="button-section">             
              <button className="button submit" type="submit">Submit</button>
          </div>
      </form>
    )
}

export default Demo2