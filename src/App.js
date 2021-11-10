import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Message from './component/Message';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
import Table from './component/Table';
import Stylesheet from './component/StyleSheet';
 

function App() {
  return (
    <div className="App">
    <Stylesheet/>
    <Table/>
    <NameList/>
    <UserGreeting/>

    <ParentComponent/>
    <EventBind/>
    
    </div>
  );
}

export default App;