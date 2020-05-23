import React from 'react';
import {render} from 'react-dom';

const target = document.getElementById('root');

// const user = {
//    name: 'Petrov Petr',
//    age: 30,
//    hobby: ['codding', 'music', 'sport']
// };

// const UserInfo = function(props) {
//    const {name, age, hobby} = props;

//    return (
//       <ul className='info-list'>
//          <li>FIO: {name}</li>
//          <li>Age: {age}</li>
//          <li>Hobby: {hobby.join(', ')}</li>
//       </ul>
//    )
// }

// const app = (
//    <main>
//       <UserInfo name={user.name} age={user.age} hobby={user.hobby}/>
//    </main>
// );

// const HelloComponent = props => {
//    let {name} = props;

//    return (
//       <h1>Hi, {name}!</h1>
//    )
// }

// const app = (
//    <main>
//       <HelloComponent name='Maxim'/>
//    </main>
// );

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
