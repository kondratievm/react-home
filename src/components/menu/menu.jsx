import React from 'react';
import './menu.scss';

export const menuItems = [
   { title: 'Главная страница', href: '#home' },
   { title: 'О компании', href: '#about' },
   { title: 'Контакты', href: '#contacts' }
];

function CloseBtn(props) {
   const isClosed = props.isClosed;
   if (isClosed) {
      return (
         <div>
            <input id="menu__toggle" type="checkbox" checked/>
            <label className="menu__btn" for="menu__toggle">
               <span></span>
            </label>
         </div>
      )
   }
   return (
      <div>
         <input id="menu__toggle" type="checkbox" />
         <label className="menu__btn" for="menu__toggle">
            <span></span>
         </label>
      </div>
   )
}

export const ModalMenu = function (props) {
   const isOpen = props.isOpen;
   const listItems = menuItems.map((listItem, index) =>
      <li key={index}>
         <a href={listItem.href}>{listItem.title}</a>
      </li>);

   if (isOpen) {
      return (
         <div>
            <CloseBtn isClosed={true} />
            <div className="menu menu-open">
               <div className="menu-toggle"><span></span></div>
               <nav>
                  <ul>
                     {listItems}
                  </ul>
               </nav>
            </div>
         </div>
      )
   }
   return (
      <div>
         <CloseBtn isClosed={false} />
         <div className="menu menu-closed">
            <div className="menu-toggle"><span></span></div>
         </div>
      </div>
   )
}
