import { Button, Form } from "@shopify/polaris";
import axios from "axios";
import { useState } from "react";
import { FormControl, FormLabel } from "react-bootstrap";

const ProfileInputField=()=>{
    const [allField,setallField]=useState({
        fname:"",
        lname:"",
        email:"",
        phone:"",
        add:""
        });

        const handleSubmit= async (e)=>{
            e.preventDefault();
            const data = {
                fname:allField.fname,
                lname:allField.lname,
                email:allField.email,
                phone:allField.phone,        
            }
        axios.post('http://127.0.0.1:8000/api/profile', data).then(res =>{
                if(res.data.status === 200){
                    alert(res.data.message);                    
                }
            });
        }  

        const handleChange=(e)=>{
            const {name, value}=e.target;  
            setallField((preValue)=>{
              console.log(preValue);
              return{
                ...preValue,
                [name]:value,
              }
            })
          }

        return(
            <>
             <FormLabel>First name</FormLabel>                       
            <FormControl
                size="lg"
                value={allField.fname}
                onChange={handleChange}
                placeholder="Enter first name"
                name="fname"            
                type="text"               
                />  
                 <FormLabel>Last name</FormLabel> 
              <FormControl
              size="lg"
                value={allField.lname}
                onChange={handleChange}
                placeholder="Enter last name"
                label="Last Name"
                name="lname"
                type="text"               
              />
               <FormLabel>Email</FormLabel>                                         
              <FormControl
              size="lg"
                // disabled
                value={allField.email}
                onChange={handleChange}
                placeholder="Enter email"
                label="Email"
                name="email"
                type="email"               
                /> 
              <FormLabel>Phone</FormLabel>  
              <FormControl
              size="lg"              
                value={allField.phone}
                onChange={handleChange}
                placeholder="Enter phone"
                label="Phone number"
                name="phone"
                type="text"                               
              />             
            </>
        )
}
export default ProfileInputField