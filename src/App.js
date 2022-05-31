import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App; //we always export the function so that it can be reused elsewhere.


// { title } = dynamic variable or value. It returns whatever is inside as a string!
// we can write a string, number or array inside the curly brackets but not objects or boolean variables
