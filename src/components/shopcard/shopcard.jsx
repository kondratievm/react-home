import React from 'react';
import './shopcard.scss';


export function ShopItem({item}) { 
   return (
      <div>
         <div className='mainContent'>
            <h2 className='itemBrand'>{ item.brand }</h2>
            <h1 className='itemTitle'>{ item.title }</h1>
            <h3 className='itemDescription'>{ item.description }</h3>
            <div className='itemDescriptionFull'>{ item.descriptionFull }</div>
            <div className='highlight-window mobile'>
               <div className='highlight-overlay'></div>
            </div>
            <div className='divider'></div>
            <div className='purchaseInfo'>
               <div className='price'>{ item.currency }{ item.price }</div>
               <button className='button'>Добавить в корзину</button>
            </div>
         </div>
      </div>
   )
}
