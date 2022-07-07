import logo from './logo.svg';
import './App.css';

function App() {
  function repeat() {
    let i = 0;
    while (i < 10) {
    i++;
    let name = "<h1 id=a"+i+">Hello World</h1>";
    document.getElementById("helloWorld").innerHTML += name; 
  }
  } 
  return (
    <div className="App">
      <h6>By Franco</h6>
      <button onClick={repeat}>REPEAT</button>
    </div>
  );
}

export default App;
