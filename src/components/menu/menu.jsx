import React from 'react';

export const menuItems = [
   { title: 'Main', href: '#home' },
   { title: 'About', href: '#about' },
   { title: 'Contacts', href: '#contacts' }
];

export const ModalMenu = function (props) {
   const isOpen = props.isOpen;
   const listItems = menuItems.map((listItem) => <li><a href={listItem.href}>{listItem.title}</a></li>);

   if (isOpen) {
      return (
         <div className="menu menu-open">
            <div className="menu-toggle"><span></span></div>
            <nav>
               <ul>
                  {listItems}
               </ul>
            </nav>
         </div>
      )
   }
   return (
      <div className="menu">
         <div className="menu-toggle"><span></span></div>
      </div>
   )
}

