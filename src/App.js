import { useState } from 'react';
import List from './components/List';
import data from './data';
import './App.css';

function App() {
  const [ people, setPeople ] = useState(data);

  const deletePeople = () =>{
    // console.log(1);
    setPeople([]);
  }



  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
      <List people = {people} />
      <button onClick={deletePeople}>clear all</button>
      </section>
    </main>
  );
}

export default App;


// props bu App.js dan List.jsx ga junatiladigan malumot.
