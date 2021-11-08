import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import welcome from './component/welcome';
 

function App() {
  return (
    <div className="App">
    <Greet name = "Nymisha"  college = "IIT">
      <p> This is children property</p>
    </Greet>
    <Greet name = "Shiny" college = "Oxford"/>
    <Greet name ="Honey"/>

    <welcome/>

    </div>
  );
}

export default App;