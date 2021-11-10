import './App.css';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
import Table from './component/Table';
import StyleSheet from './component/StyleSheet';
import Inline from './component/Inline';
import './Appstyles.css'
import styles from './Appstyles.module.css';
import Stylesheet from './component/StyleSheet';

 

function App() {
  return (
    <div className="App">
    <h1 className = {styles.success}>success</h1>
    <h1 className = 'error'>error</h1>

    <Inline/>
    <StyleSheet  enabled = {true}/>
    <Table/>
    <NameList/>
    <UserGreeting/>

    <ParentComponent/>
    <EventBind/>
    
    </div>
  );
}

export default App;
 
