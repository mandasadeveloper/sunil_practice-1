import {Page} from '@shopify/polaris';
import List from "./Card";
export default function PageLayout(){
   return(
    <Page
    fullWidth
    title="Products"
    primaryAction={{content: 'Add Product',url:'https://my-public-app.myshopify.com/admin/products/new'}}
    secondaryActions={[{content: 'Export'},{content: 'Import'}]}
    >
  <List />
  </Page>
   );
}