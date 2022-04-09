import React from 'react';

function Statistics () {
    
    
    
    return (
      <div className='statistics-container'>
          <ul className='statistics-list'>
              <li className='statistics-list-item-all'>
                All: 0
              </li>
              <li className='statistics-list-item-read'>
                Read: 0
              </li>
              <li className='statistics-list-item-notread'>
                Not read: 0
              </li>
          </ul>
          <button 
            className='statistics-remove-button'
            >
              Remove All
          </button>
      </div>
    );
};

export default Statistics;