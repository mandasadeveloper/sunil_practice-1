import { Button, FormLayout,Page,TextField,Form, ButtonGroup, Select, Icon } from "@shopify/polaris";
import { useCallback,useEffect,useState} from "react";
import axios from "axios";
import {
  MobileCancelMajor
} from '@shopify/polaris-icons'; 

const Profile = () => {  

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


const [formFields, setFormFields] = useState([{}]); //for add new filed and label
const fieldDelete= async (e, id)=>{     //delete filed
  e.preventDefault();
    axios.delete(`http://127.0.0.1:8000/api/delete/${id}`).then(res =>{
        console.log("delete");
});
}
function addTextFields(e){                   //create new input filed
  e.preventDefault();
  if(field!="" && label!=""){
    setFormFields([...formFields,{}])
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
 
 var display=fetchField.map((item)=>{
   if(item.field === "Radio"){
   console.log("radio btn")
   }else{
    return (
      <TextField
        type={item.field}
        placeholder={"Enter " + item.label} 
        label={item.label}
        value=""
        name=""                           
        connectedRight={<Button onClick={(e)=> fieldDelete(e, item.id)}><Icon source={MobileCancelMajor}/></Button>}
  />
    )
   }
 });


const [fname, setFname] = useState('');     //hooks for input filed 
const [lname, setLname] = useState(''); 
const [phone, setPhone] = useState(''); 
const [email, setEmail] = useState('');               
const [label, setLabel] = useState('');
const [field, setField] = useState('');
const [typevalue, setTypevalue] = useState('');

const handleFnameChange = useCallback((value) => setFname(value), []);
const handleLabelChange = useCallback((value) => setLabel(value), []);
const handleFieldChange = useCallback((value) => setField(value), []);
const handleEmailChange = useCallback((value) => setEmail(value), []);
const handleLnameChange = useCallback((value) => setLname(value), []);
const handlePhonchange  = useCallback((value) => setPhone(value), []);
const handleTypeValue  = useCallback((value) => setTypevalue(value), []);


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
        fname:fname,
        lname:lname,
        email:email,
        phone:phone,        
    }
axios.post('http://127.0.0.1:8000/api/profile', data).then(res =>{
        if(res.data.status === 200){
            alert(res.data.message);
            setFname('');
            setLname('');
            setEmail('');
            setPhone('');           
        }
    });
}   

return (
         <Page          
         breadcrumbs={[{content: 'Orders', url: '/'}]}                 
         title="Profile"      
         >                             
        <Form onSubmit={handleSubmit}>       
            <FormLayout>                            
            <TextField
                value={fname}
                onChange={handleFnameChange}
                placeholder="Enter first name"
                name="fname"
                label="First Name"
                type="text"               
                />  
              <TextField
                value={lname}
                onChange={handleLnameChange}
                placeholder="Enter last name"
                label="Last Name"
                name="lname"
                type="text"               
              />                                        
              <TextField
                // disabled
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter email"
                label="Email"
                name="email"
                type="email"               
                />  
              <TextField              
                value={phone}
                onChange={handlePhonchange}
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
                  <TextField              
                  value={label}
                  onChange={handleLabelChange}                 
                  label="Field label"
                  name="label"
                  type="text"
                  connectedRight={<Button onClick={() => removeFormFields(index)}><Icon source={MobileCancelMajor}/></Button>}                   
                  />                  
                  </FormLayout.Group>
                  {increment.map((element, index) => (
                     <div>                       
                <TextField  
                  value={typevalue}     
                  onChange={handleTypeValue}                         
                  label="Values"
                  name="value"
                  type="text"                
                  connectedRight={<Button onClick={() => Increment_field()}>Add</Button>}                   
                  />  
                {
                 index ?                    
                  <TextField  
                  value={typevalue}     
                  onChange={handleTypeValue}                         
                  label="Values"
                  name="value"
                  type="text"                
                  connectedRight={<Button onClick={() => Increment_field()}>Add</Button>}                   
                  />                   
                : null
              }
            </div>
          ))}                        
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
export default Profile

