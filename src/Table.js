import React from "react";
import {
  TextStyle,
  IndexTable,
  useIndexResourceState,
  Link,
  Thumbnail,
  Icon
} from "@shopify/polaris";
import {
  ViewMinor
} from '@shopify/polaris-icons';
import Stetus from "./badge";
import "./index.css";

export default function IndexTableWithBulkActionsExample() {
  const product = [
    {
      id: '0',
      img: <div style={{ padding: "10px 0px" }}><Thumbnail
        source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
        alt="Black leather pet collar" /></div>,
      Product:<Link monochrome url="https://help.shopify.com/manual" removeUnderline={true}><div id="view"><span id="view">billowing pond</span><span className="show hide"><Icon source={ViewMinor}/></span></div></Link>,
      Stetus: <Stetus/>,
      Inventory:<span style={{color:"rgba(109,113,117,1)"}}>Inventory not trackd</span>,
      Type: '',
      Vendor: 'My Public App',
    },
    {
      id: '1',
      img: <div style={{ padding: "10px 0px" }}><Thumbnail
        source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
        alt="Black leather pet collar" /></div>,      
      Product:<Link monochrome url="https://help.shopify.com/manual" removeUnderline={true}><div id="view"><span id="view">fulfilling orders</span><span className="show hide"><Icon source={ViewMinor}/></span></div></Link>,
      Stetus: <Stetus/>,
      Inventory:<span style={{color:"rgba(109,113,117,1)"}}>Inventory not trackd</span>,
      Type: '',
      Vendor: 'My Public App',
    },
    {
      id: '2',
      img: <div style={{ padding: "10px 0px" }}><Thumbnail
        source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
        alt="Black leather pet collar" /></div>,
        Product:<Link monochrome url="https://help.shopify.com/manual" removeUnderline={true}><div id="view"><span id="view">fulfilling orders</span><span className="show hide"><Icon source={ViewMinor}/></span></div></Link>,
      Stetus: <Stetus/>,
      Inventory:<span style={{color:"rgba(109,113,117,1)"}}>Inventory not trackd</span>,
      Type: '',
      Vendor: 'My Public App',
    },
  ];
  const resourceName = {
    singular: 'product1',
    plural: 'product',
  };

  const {
    selectedResources,
    allResourcesSelected,
    handleSelectionChange,
  } = useIndexResourceState(product);

  const promotedBulkActions = [
    {
      content: 'Edit product',
      onAction: () => console.log('Todo: implement bulk edit'),
    },
  ];
  const bulkActions = [
    { 
      content: 'Set as active',
      onAction: () => console.log('Todo: implement bulk add tags'),
    },
    {
      content: 'Set as draft',
      onAction: () => console.log('Todo: implement bulk remove tags'),
    },
    {
      content: 'Archive Products',
      onAction: () => console.log('Todo: implement bulk delete'),
    },
    {
      content: 'Delete products',
      onAction: () => console.log('Todo: implement bulk delete'),
    },
    {
      content: 'Add available channel(s)',
      onAction: () => console.log('Todo: implement bulk delete'),
    },
  ];

  const rowMarkup = product.map(
    ({ id, img, Product, Stetus, Inventory, Type, Vendor }, index) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}>
        <IndexTable.Cell>{img}</IndexTable.Cell>
        <IndexTable.Cell>
          <TextStyle variation="strong">{Product}</TextStyle>
        </IndexTable.Cell>
        <IndexTable.Cell>{Stetus}</IndexTable.Cell>
        <IndexTable.Cell>{Inventory}</IndexTable.Cell>
        <IndexTable.Cell>{Type}</IndexTable.Cell>
        <IndexTable.Cell>{Vendor}</IndexTable.Cell>
      </IndexTable.Row>
    ),
  );

  return (
    <>
      <IndexTable
        resourceName={resourceName}
        itemCount={product.length}
        selectedItemsCount={allResourcesSelected ? 'All' : selectedResources.length}
        onSelectionChange={handleSelectionChange}        
        promotedBulkActions={promotedBulkActions}
        bulkActions={bulkActions}
        headings={[
          { title: '' },
          { title: 'Product' },
          { title: 'Stetus' },
          { title: 'Inventory' },
          { title: 'Type' },
          { title: 'Vender' },
        ]}
      >
        {rowMarkup}
      </IndexTable>
    </>
  );


}