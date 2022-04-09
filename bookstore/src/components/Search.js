import React from 'react';


function Search ({setInputText, todos, setTodos, inputText}) {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };  
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, 
      {text: inputText, completed: false, id: Math.random() * 1000}
    ]);
    setInputText('');
  };
  

  return (
    <form>
      <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          placeholder="Title of book"
          className='todo-input'
      />
      <div className='select'>
        <button 
          onClick={submitTodoHandler}
          type='submit' 
          className='todo-button'>
          Add new book
        </button>
      </div>
    </form>
    );
};

export default Search;