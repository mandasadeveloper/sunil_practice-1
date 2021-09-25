import React,{useState,useCallback} from 'react'; 
import {Card,Tabs} from '@shopify/polaris';
import IndexTableWithBulkActionsExample from "./Table";
import Data from "./Data";
function List(){
    const [selected, setSelected] = useState(0);
  
  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: 'all-customers-1',
      content: 'All',
      accessibilityLabel: 'All customers',
      panelID: 'all-customers-content-1',
    },
    {
      id: 'accepts-marketing-1',
      content: 'Active',
      panelID: 'accepts-marketing-content-1',
    },
    {
      id: 'repeat-customers-1',
      content: 'Draff',
      panelID: 'repeat-customers-content-1',
    },
    {
      id: 'prospects-1',
      content: 'Achived',
      panelID: 'prospects-content-1',
    },
  ];
  return(
    <Card>
    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>             
            </Tabs>
            <Data/>
            <IndexTableWithBulkActionsExample />
    </Card>
);
}
export default List;