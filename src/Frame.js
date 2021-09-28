import { Route, Switch } from "react-router";
import Login from "./Login/Login"
import Register from "./Register/Register";
import LayOut from "./Layout";
import Error from "./Error";
import ProfileInputField from "./profile/profile_input_field";
import Demo from "./profile/demo";
import Student from "./pages/Student";
import Addstudent from "./pages/Addstudent";
import Demo2 from "./demo2"
import {
TopBar,
ActionList,
Navigation,
AppProvider,
Frame,
} from "@shopify/polaris";
import { 
useState,useCallback,
HomeMajor,
OrdersMajor,
 } from "react";
import Profile from "./profile/Profile";
import AddField from "./profile/AddField";
import { Link } from "react-router-dom";
const FrameExample=()=>{
      
    const [searchActive, setSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [userMenuActive, setUserMenuActive] = useState(false); 
       
    const handleSearchFieldChange = useCallback((value) => {
      setSearchValue(value);
      setSearchActive(value.length > 0);
    }, []);
    const toggleUserMenuActive = useCallback(
      () => setUserMenuActive((userMenuActive) => !userMenuActive),
      [],
    );
    const userMenuActions = [
      {
        items: [{content: 'Community forums'}],
      },
    ];

  
    const userMenuMarkup = (
      <TopBar.UserMenu
        actions={userMenuActions}
        name="Mandasa Technologies"
        initials="MT"
        open={userMenuActive}
        onToggle={toggleUserMenuActive}
      />
    );
  
    const searchResultsMarkup = (
      <ActionList
        items={[{content: 'Shopify help center'}, {content: 'Community forums'}]}
      />
    );
  
    const searchFieldMarkup = (
      <TopBar.SearchField
        onChange={handleSearchFieldChange}
        value={searchValue}
        placeholder="Search"
      />
    );
  
    const topBarMarkup = (
      <TopBar
        showNavigationToggle
        userMenu={userMenuMarkup}
        searchResultsVisible={searchActive}
        searchField={searchFieldMarkup}
        searchResults={searchResultsMarkup}     
      />
    );
  
    const navigationMarkup = (
      <Navigation location="/">
        <Navigation.Section
          items={[
            {
              label: 'App',              
            },
          ]}
        />
        <Navigation.Section
          separator
          title="App"
          items={[
            {
              label: 'Dashboard',                                      
            },
            {
              label:(<Link to= "/" className="Link">Setting</Link>)                           
            },
            {
              label:(<Link to= "/gift" className="Link">Gift Card</Link>)                           
            },
            {
              label:(<Link to= "/manage-address" className="Link">Manage Address</Link>)                           
            },
          ]}  
        />
      </Navigation>
    );
  
    const theme = {
      logo: {
        width: 124,               
      },
    };
  
    return (      
        <AppProvider
          theme={theme}         
        >
          <Frame
            topBar={topBarMarkup}
            navigation={navigationMarkup}       
          >  
          <Switch>
    <Route exact path="/" component={LayOut}/>
    <Route exact path="/profile" component={Profile}/>
    <Route exact path="/manage-address" component={Register}/>
    <Route exact path="/gift" component={Login}/>
    <Route exact path="/add" component={AddField}/>
    <Route exact path="/demo2" component={Demo2}/>
    <Route exact path="/demo" component={Demo}/>
    <Route component={Error}/>
   </Switch>     
          </Frame>
        </AppProvider>
    );
  }
  export default FrameExample