import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Message from './component/Message';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';


function App() {
  return (
    <div className="App">
    
    <ClassClick/>
    <FunctionClick/>

    <Counter/>

    <Message/>

    <Greet name = "Nymisha"  college = "IIT">
      <p> This is children property</p>
    </Greet>

    <Greet name = "Shiny" college = "Oxford">
      <button>click me</button>
    </Greet>
    <Greet />

    <Welcome name ="Sankar" alias = "Nymisha"/>

    </div>
  );
}

export default App;