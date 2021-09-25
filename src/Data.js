import React,{useState,useCallback} from 'react'; 
import {Button,ButtonGroup,Icon,TextField,ResourceList,Filters,ChoiceList,RangeSlider} from '@shopify/polaris';
import {
  FavoriteMajor, SortMinor
} from '@shopify/polaris-icons';
function Data() {
    const [accountStatus, setAccountStatus] = useState(null);
    const [moneySpent, setMoneySpent] = useState(null);
    const [taggedWith, setTaggedWith] = useState(null);
    const [queryValue, setQueryValue] = useState(null);
  
    const handleAccountStatusChange = useCallback(
      (value) => setAccountStatus(value),
      [],
    );
    const handleMoneySpentChange = useCallback(
      (value) => setMoneySpent(value),
      [],
    );
    const handleTaggedWithChange = useCallback(
      (value) => setTaggedWith(value),
      [],
    );
    const handleFiltersQueryChange = useCallback(
      (value) => setQueryValue(value),
      [],
    );
    const handleAccountStatusRemove = useCallback(
      () => setAccountStatus(null),
      [],
    );
    const handleMoneySpentRemove = useCallback(() => setMoneySpent(null), []);
    const handleTaggedWithRemove = useCallback(() => setTaggedWith(null), []);
    const handleQueryValueRemove = useCallback(() => setQueryValue(null), []);
    const handleFiltersClearAll = useCallback(() => {
      handleAccountStatusRemove();
      handleMoneySpentRemove();
      handleTaggedWithRemove();
      handleQueryValueRemove();
    }, [
      handleAccountStatusRemove,
      handleMoneySpentRemove,
      handleQueryValueRemove,
      handleTaggedWithRemove,
    ]);

  
    const filters = [
      {
        key: 'accountStatus',
        label: 'Product vender',
        filter: (
          <ChoiceList
            title="Product vender"
            titleHidden
            choices={[
              {label: 'My public app', value: 'My public app'},
            ]}
            selected={accountStatus || []}
            onChange={handleAccountStatusChange}
            allowMultiple
          />
        ),
        shortcut: true,
      },
      {
        key: 'taggedWith',
        label: 'Tagged with',
        filter: (
          <TextField
            label="Tagged with"
            value={taggedWith}
            onChange={handleTaggedWithChange}
            labelHidden
          />
        ),
        shortcut: true,
      },
      {
        key: 'moneySpent',
        label: 'More filters',
        filter: (
          <RangeSlider
            label="Money spent is between"
            labelHidden
            value={moneySpent || [0, 500]}
            prefix="$"
            output
            min={0}
            max={2000}
            step={1}
            onChange={handleMoneySpentChange}
          />
        ),           
      },
    ];
  
    const appliedFilters = [];
    if (!isEmpty(accountStatus)) {
      const key = 'accountStatus';
      appliedFilters.push({
        key,
        label: disambiguateLabel(key, accountStatus),
        onRemove: handleAccountStatusRemove,
      });
    }
    if (!isEmpty(moneySpent)) {
      const key = 'moneySpent';
      appliedFilters.push({
        key,
        label: disambiguateLabel(key, moneySpent),
        onRemove: handleMoneySpentRemove,
      });
    }
    if (!isEmpty(taggedWith)) {
      const key = 'taggedWith';
      appliedFilters.push({
        key,
        label: disambiguateLabel(key, taggedWith),
        onRemove: handleTaggedWithRemove,
      });
    }
  
    return (
        <>
          <ResourceList
            resourceName={{singular: 'customer', plural: 'customers'}}
            filterControl={
              <Filters
                queryValue={queryValue}
                filters={filters}
                appliedFilters={appliedFilters}
                onQueryChange={handleFiltersQueryChange}
                onQueryClear={handleQueryValueRemove}
                onClearAll={handleFiltersClearAll}
               >
                <div style={{marginLeft:"0.6em"}}>
                <ButtonGroup>
                <Button disabled><div style={{display:"flex"}}><Icon source={FavoriteMajor}/><span style={{margin:"3px 0px 0px 4px"}}>Saved</span></div></Button>
                <Button><div style={{display:"flex"}}><Icon source={ SortMinor}/><span style={{margin:"3px 0px 0px 4px"}}>Short</span></div></Button>
                </ButtonGroup>
                </div>
           </Filters>
            }
            items={[""]}
            renderItem={(item) => {
            }}
          />
        </>
    );
  
    function disambiguateLabel(key, value) {
      switch (key) {
        case 'moneySpent':
          return `Money spent is between $${value[0]} and $${value[1]}`;
        case 'taggedWith':
          return `Tagged with ${value}`;
        case 'accountStatus':
          return value.map((val) => `Product vender is ${val}`).join(', ');
        default:
          return value;
      }
    }
  
    function isEmpty(value) {
      if (Array.isArray(value)) {
        return value.length === 0;
      } else {
        return value === '' || value == null;
      }
    }
  }
  export default Data;