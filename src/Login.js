import { Button, FormLayout,Page,TextField,Form } from "@shopify/polaris";
import { useCallback } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Login(){   
  
        const [fname, setPassword] = useState('');       
        const [email, setEmail] = useState('');          

        const handleSubmit = useCallback((_event) => {
          setEmail('');        
          setPassword('');  
                          
        }, []);                 
        const handleEmailChange = useCallback((value) => setEmail(value), []);
        const handlePasswordChange = useCallback((value) => setPassword(value), []);
         
        return (
         <Page
         primaryAction={<Link to="/"><h2>Back</h2></Link>}  
         title="Login"   
         >     
         <br/>   
        <Form onSubmit={handleSubmit}>       
            <FormLayout>                 
              <TextField
                value={email}
                onChange={handleEmailChange}
                label="Email"
                type="email"               
              />           
               <TextField
                value={fname}
                onChange={handlePasswordChange}
                label="Password"
                type="password"               
              />                                                                
              <Button submit>Login</Button>
            </FormLayout>
          </Form>
         </Page>
        );
}