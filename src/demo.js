import { Button, FormLayout,Page,TextField,Form, ButtonGroup, Select, Icon } from "@shopify/polaris";
import { useCallback,useEffect,useState} from "react";
import axios from "axios";
import { FormControl, FormLabel } from "react-bootstrap";
import {
  MobileCancelMajor
} from '@shopify/polaris-icons'; 

const Demo = () => {  
  const [allField,setallField]=useState({
    fname:"",
    lname:"",
    email:"",
    phone:"",
    });

  

  const [label, setLabel]=useState('');
  const [field, setField]=useState('');
  const [addvalue, setAddvalue]=useState('');

  const handleLabelChange = useCallback((value)=> setLabel(value),[]);
  const handleFieldChange = useCallback((value)=> {
    setField(value)
  },[]);
  const handleAddvalueChange = useCallback((value)=> setAddvalue(value),[]);
    
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

const [formValues, setFormValues] = useState([{}]); //hooks for increment and decrement 

function addFormFields(){
setFormValues([...formValues,{}])
} 
let removeFormFields = (i) => {
let newFormValues = [...formValues];
newFormValues.splice(i, 1);
setFormValues(newFormValues)
} 

const [increment, setincrement] = useState([{}]); //hooks increment and decrement for value of input filed
function Increment_field(){
  setincrement([...increment,{}])
} 

 //for add new filed and label
const fieldDelete= async (e, id)=>{     //delete filed
  e.preventDefault();
    axios.delete(`http://127.0.0.1:8000/api/delete/${id}`).then(res =>{
        console.log("delete");
});
}
function addTextFields(e){                   //create new input filed
  e.preventDefault();
  if(field!="" && label!=""){
    const dataField = {
      field:field,
      label:label
  }
  axios.post('http://127.0.0.1:8000/api/field', dataField).then(res =>{
      if(res.data.status === 200){
          alert(res.data.message);        
      }
  });
  } 
 }
 
 const [fetchField, setFetchField]=useState([]);   // data access in webpage
 useEffect(()=>{
   axios.get('http://127.0.0.1:8000/api/demo').then(res=>{
     if(res.data.status === 200){
       setFetchField(res.data.filed);          
     }
   });
 },[]);
 var selectLabel = (
  <TextField              
  value={label}
  onChange={handleLabelChange}                 
  label="Field label"
  name="label"
  type="text"
  connectedRight={<Button onClick={() => removeFormFields()}><Icon source={MobileCancelMajor}/></Button>}                   
  />   
 )
 var display=fetchField.map((item)=>{
   console.log(item.field);
    return (
     <>
      <FormLabel>{item.label}</FormLabel>
      <FormControl
        size="lg"
        type={item.field}
        placeholder={"Enter " + item.label} 
        value=""
        name={item.field}                           
        // connectedRight={<Button onClick={(e)=> fieldDelete(e, item.id)}><Icon source={MobileCancelMajor}/></Button>}
  />
  <Button onClick={(e)=> fieldDelete(e, item.id)}><Icon source={MobileCancelMajor}/></Button>
     </>
    )
 });


const options = [
  {label: 'Input', value: 'input'},
  {label: 'Email', value: 'email'},
  {label: 'Date', value: 'date'},
  {label: 'Radio', value: 'radio'},
  {label: 'URL', value: 'url'},
  {label: 'Multiple select', value: 'checkbox'},
  {label: 'Textarea', value: 'textarea'},
];

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

return (
         <Page          
         breadcrumbs={[{content: 'Orders', url: '/'}]}                 
         title="Demo"      
         >                             
        <Form onSubmit={handleSubmit}>       
            <FormLayout>     
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
              {display}              
              {formValues.map((element, index) => (
            <div>
              {
              index ? 
              <>
              <FormLayout>
               <FormLayout.Group condensed>
               <Select
                  label="Select field type"
                  options={options}
                  onChange={handleFieldChange}
                  value={field}
                  />
                  {field}         
                  </FormLayout.Group>
                                  
                <ButtonGroup>                 
                <Button onClick={addTextFields}>Create</Button> 
                </ButtonGroup>
                </FormLayout>
                </>
                : null
              }
            </div>
          ))}                               
            <ButtonGroup>             
              <Button onClick={() => addFormFields()}>Add Field</Button>                                                                      
              <Button submit>Submit</Button>
              </ButtonGroup>
            </FormLayout>
          </Form>
         </Page>
    );
}
export default Demo

