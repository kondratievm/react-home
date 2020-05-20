import React from 'react';
import {render} from 'react-dom';

let welcome = <h1>HUI</h1>;
let target = document.getElementById('root');

const user = {
   name: 'Petr Petrov',
   age: 40,
   hobby: [
      'codding',
      'music',
      'sport'
   ]
};

const userInfoList = (
   <ul className='info-list'>
      <li>FIO: {user.name}</li>
      <li>Age: {user.age}</li>
      <li>Hobby: {user.hobby}</li>
   </ul>
)

render(userInfoList, target);
