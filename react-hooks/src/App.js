import { useState, useEffect, useRef, useMemo } from 'react';

import { Home } from './components/home/Home';
import { ContextComponent } from './components/contextComponent/ContextComponent';
import { ThemeProvider } from './components/themeContext/ThemeContext';

import './App.css';
import food from './assets/food.jpg';

function App({ themeStyles }) {
  const [count, setCount] = useState(0);
  const [data, setData] = useState('posts');
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const prevName = useRef('');
  const multiplyNumber = useMemo(() => {
    return slower(count);
  }, [count])

  function counter() {
    setCount(prevCount => prevCount + 1)
  }

  function renderComments() {
    setData('comments');
  }

  function renderPosts() {
    setData('posts');
  }
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${data}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [data])
  
  useEffect(() => {
    prevName.current = name
  }, [name])
  
  return (
    <div className='wrapper'>
      <input placeholder='What is your name?' value={name} onChange={e => setName(e.target.value)} />
      <h2>Hi, {name} 🙂 Have a great day {prevName.current}!</h2>
      <ThemeProvider>
        <ContextComponent />
      </ThemeProvider>
      <img src={food} />
      <div className='views-counter'>{multiplyNumber} 👁️‍🗨️ views </div>
      <Home 
        count={count} 
        counter={counter} 
        data={data}
        renderComments={renderComments}
        renderPosts={renderPosts}
        items={items} 
      /> 
    </div>
  );
}

const slower = (n) => {
  console.log('call slower func');
  for (let i = 0; i <= 1000000000; i++) {
  } return n;
}

export default App;
