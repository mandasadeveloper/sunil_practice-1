import React,{useCallback,useState} from "react";
import {Button,Popover,ActionList,Badge} from "@shopify/polaris";
import "./index.css";
export default function Stetus() {
    const [popoverActive, setPopoverActive] = useState(false);
    const togglePopoverActive = useCallback(
      () => setPopoverActive((popoverActive) => !popoverActive),
      [],
    );
  
    const activator = (
      <Button plain monochrome removeUnderline={true} onClick={togglePopoverActive} disclosure>
        <Badge status="success"> Active</Badge>
      </Button>
    );
  
    return (     
        <Popover
          active={popoverActive}
          activator={activator}
          onClose={togglePopoverActive}
        >
          <Popover.Pane fixed>
            <Popover.Section>
              <p>SALES CHANNELS AND APPS</p>
            </Popover.Section>
          </Popover.Pane>
          <Popover.Pane>
            <ActionList
              items={[
                {content: 'Online store'},               
              ]}
            />
          </Popover.Pane>
        </Popover>     
    );
  }