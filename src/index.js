import React from 'react';
import ReactDOM from 'react-dom/client';
import ShopItem from './ShopItem';
import '../src/main.css'

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ShopItem item={item} />);