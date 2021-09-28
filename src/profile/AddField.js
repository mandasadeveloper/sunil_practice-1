import { FormLayout,Select,Form,Button,ButtonGroup, TextField, Icon} from "@shopify/polaris";
import { useCallback, useState } from "react";
import axios from "axios";
import {
    MobileCancelMajor
  } from '@shopify/polaris-icons';
import { FormControl, FormLabel } from "react-bootstrap";
const AddField = ()=>{
    const [formValues, setFormValues] = useState([{}]); //hooks for increment and decrement 
    const [label, setLabel] = useState('');
    const [field, setField]=useState('');
    const [addvalue, setAddvalue]=useState('');
    const [allField,setallField]=useState({        
        add:""
        });

    function addFormFields(){
    setFormValues([...formValues,{}])
    } 
    let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
    } 

    const handleLabelChange = useCallback((value)=> setLabel(value),[]);
    const handleFieldChange = useCallback((value)=> {
      setField(value)
      setAddvalue(
     <>
      <TextField              
        value={label}
        onChange={handleLabelChange}                 
        label="Field label"
        name="label"
        type="text"
        connectedRight={<Button onClick={()=>removeFormFields()}><Icon source={MobileCancelMajor}/></Button>}                   
        />                         
     </>   
        )
    },[]);
    const options = [
        {label: 'Input', value: 'text'},
        {label: 'Email', value: 'email'},
        {label: 'Date', value: 'date'},
        {label: 'Radio', value: 'radio'},
        {label: 'URL', value: 'url'},
        {label: 'Multiple select', value: 'checkbox'},
        {label: 'Textarea', value: 'textarea'},
      ];

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


    const [increment, setincrement] = useState([{}]); //hooks increment and decrement for value of input filed
function Increment_field(){
  setincrement([...increment,{}])
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
    return(
        <Form>
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
                  {addvalue}
                  </FormLayout.Group>                                                               
                {increment.map((element, index) => (
                     <div>                                         
                {
                 index ?                                               
                 <>
                  <FormLabel>Value</FormLabel>
                 <div style={{display:"flex"}}>
                 <FormControl  
                  size= "lg"
                  value={allField.add}     
                  onChange={handleChange}                                          
                  name="add"
                  type="text"                                  
                  />  
                  <Button onClick={() => Increment_field()}>Add</Button>                  
                 </div>
                  </>               
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
          </Form>
    )
    
}
export default AddField