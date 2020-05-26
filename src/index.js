import React from 'react';
import {render} from 'react-dom';
import './css/style.css'

const target = document.getElementById('root');

const item = {
   brand: 'Tiger of Sweden',
   title: 'Leonard coat',
   description: 'Minimalistic coat in cotton-blend',
   descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
   price: 399,
   currency: '£'
};

const mainContent = {
   width: '350px',
   padding: 8,
   border: '1px dotted red'
};
const itemBrand = {
   marginBottom: '5px',
   fontFamily: 'Arial',
   fontWeight: 200
};
const itemTitle = {
   marginBottom: '5px',
   fontFamily: 'Arial',
   fontWeight: 300,
   fontSize: '40px',
   textTransform: 'uppercase'
};
const itemDescription = {
   marginBottom: '15px',
   fontFamily: 'Arial',
   fontWeight: 500,
   fontSize: '16px',
   textTransform: 'uppercase',
   color: 'gray'
};
const itemDescriptionFull = {
   fontFamily: 'Arial',
   fontSize: '14px',
};
const divider = {
   width: '300px',
   height: '1px',
   backgroundColor: 'gray',
   margin: '20px auto 20px'
};
const price = {
   fontFamily: 'Arial',
   fontSize: '30px',
};
const purchaseInfo = {
   display: 'flex',
   justifyContent: 'space-between',
}
const button = {
   padding: '5px 20px',
   color: 'white',
   backgroundColor: 'black',
   lineHeight: '98%'
}


function ShopItem({item}) { 
   return (
      <div>
         <div className='main-content' style={ mainContent }>
            <h2 style={ itemBrand }>{ item.brand }</h2>
            <h1 style={ itemTitle }>{ item.title }</h1>
            <h3 style={ itemDescription }>{ item.description }</h3>
            <div className='description' 
                 style={ itemDescriptionFull }>{ item.descriptionFull }
            </div>
            <div className='highlight-window mobile'>
               <div className='highlight-overlay'></div>
            </div>
            <div className='divider' 
                 style={divider}>
            </div>
            <div className='purchase-info' 
                 style={ purchaseInfo }>
               <div className='price'
                    style={ price }>{ item.currency }{ item.price }
               </div>
               <button style={ button }>Добавить в корзину</button>
            </div>
         </div>
      </div>
   )
}

render(<ShopItem item={ item }/>, target);
