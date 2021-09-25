import { Layout,Card,ResourceList,TextStyle, Avatar, Page, } from "@shopify/polaris";
import { Link } from "react-router-dom";
export default function LayOut(){
    return(  
        <Page title="Setting">
        <Layout>
<Layout.Section oneThird>
    <Card>      
      <Card.Section>
        <ResourceList          
          items={[
            {
              id: 1,
              url: '/profile',
              name: 'User profile',
              sku: 'Setup',             
              media: (<Avatar/>),
            },        
          ]}
          renderItem={(item) => {
            const {id,url,name, sku, media} = item;
            return (
              <ResourceList.Item
                id={id}               
                media={media}              
              >
               <Link to={url} style={{color:"black", textDecoration: 'none'}}>
               <h3>
                  <TextStyle variation="strong">{name}</TextStyle>
                </h3>
                <div>{sku}</div>    </Link>          
              </ResourceList.Item>
            );
          }}
        />
      </Card.Section>
    </Card>
  </Layout.Section>
  <Layout.Section oneThird>
    <Card>      
      <Card.Section>
        <ResourceList          
          items={[
            {
              id: 1,
              url: '/register',
              name: 'Registration',
              sku: 'Registration',             
              media: (<Avatar/>),
            },        
          ]}
          renderItem={(item) => {
            const {id,url,name, sku, media} = item;
            return (
              <ResourceList.Item
                id={id}               
                media={media}              
              >
               <Link to={url} style={{color:"black", textDecoration: 'none'}}>
               <h3>
                  <TextStyle variation="strong">{name}</TextStyle>
                </h3>
                <div>{sku}</div>    </Link>          
              </ResourceList.Item>
            );
          }}
        />
      </Card.Section>
    </Card>
  </Layout.Section>
  <Layout.Section oneThird>
    <Card>      
      <Card.Section>
        <ResourceList          
          items={[
            {
              id: 1,
              url: '/login',
              name: 'Login',
              sku: 'login',             
              media: (<Avatar/>),
            },        
          ]}
          renderItem={(item) => {
            const {id,url,name, sku, media} = item;
            return (
              <ResourceList.Item
                id={id}               
                media={media}              
              >
               <Link to={url} style={{color:"black", textDecoration: 'none'}}>
               <h3>
                  <TextStyle variation="strong">{name}</TextStyle>
                </h3>
                <div>{sku}</div>    </Link>          
              </ResourceList.Item>
            );
          }}
        />
      </Card.Section>
    </Card>
  </Layout.Section>
  
</Layout>         
        </Page>    
     );

}