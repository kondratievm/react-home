import React from 'react';
import {ShopItem} from './shopcard/shopcard';
import {shopObject} from './shopcard/shopcard';
import {menuItems} from './menu/menu';
import {ModalMenu} from './menu/menu';


export const App = () => {
   return (
      <div>
         {/* <ShopItem item={shopObject}/> */}
         <ModalMenu items={menuItems} isOpen={true}/>
      </div>
   )
}