import logo from './logo.svg';
import './App.css';
import store from "./store";
import {addEmployee, removeEmployee} from './actions';

function App() {

  const emp = {
    id: 1,
    fullname: 'Jane Smith',
    description: 'Description'
  };
  const emp2 = {
    id: 2,
    fullname: 'Bob Smith',
    description: 'Description'
  };
  store.dispatch(addEmployee(emp))
  //UI Components need to subscribe to the store so that they're notified of changes
  /*store.subscribe (()=> {
    console.log("Store changed!", store.getState());
  });*/
  console.log(store.getState());

  store.dispatch(addEmployee(emp2));
  console.log(store.getState());

  store.dispatch(removeEmployee(1));
  console.log(store.getState());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
