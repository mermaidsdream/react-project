import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import ItemsList from './components/ItemsList';
import Statistics from './components/Statistics';
import books from './components/books.json';
import {Book} from './components/Book';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  
  
  
  return (
    <div className="App">
      {books.map(({id, title}) => 
      <Book key={id} title={title} />)}
      <Search 
      inputText={inputText}
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      />
      <Statistics 
      
      />
      <ItemsList 
      setTodos={setTodos} 
      todos={todos}
      />
    </div>
  );
}

export default App;
