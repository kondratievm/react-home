import React from 'react';
import {render} from 'react-dom';

const target = document.getElementById('root');

const todoList = [
   'купить молоко',
   'прочитать статью',
   'купить билеты'
];

function List({ list, title}) {
   if (!list) {
      return null;
   }
   if (!list.length) {
      return <p>Список пуст</p>
   }

   const items = list.map((item, index) => <li key={index}>{item}</li>);

   return (
      <div>
         <h1>{title}</h1>
         <ul>
            { items }
         </ul>
      </div>
   )
}

render(<List list={todoList} title='Список'/>, target);
