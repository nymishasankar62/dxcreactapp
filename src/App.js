import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Message from './component/Message';
import Counter  from './component/Counter';

 

function App() {
    return (
      <div className="App">
      <Counter/>    
      <Message/>
  
      <Greet name = "Nymisha"  college = "IIT">
        <p> This is children property</p>
      </Greet>
  
      <Greet name = "Honey" college = "Oxford">
        <button>Click me</button>
      </Greet>
      <Greet />
  
      <welcome name ="Shiny" alias = "Nymisha"/>
  
      </div>
    );
  }
  
  export default App;