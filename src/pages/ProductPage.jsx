import React from 'react'


import img1 from '../assets/images/image1.png'
import img2 from '../assets/images/image2.png'
import img3 from '../assets/images/image3.png'
import img4 from '../assets/images/image4.png'
import img5 from '../assets/images/image5.png'
import img6 from '../assets/images/image6.png'
import img7 from '../assets/images/image7.png'
import img8 from '../assets/images/image8.png'
import img9 from '../assets/images/image9.png'
import img10 from '../assets/images/image10.png'
import MenuCard from '../components/MenuCard'



const products = [
  {
    title: 'Chinese Food',
    detail: 'Egg , oli etc',
    price: '$5.00',
    image: img1
  }, {
    title: 'Burger',
    detail: 'Kaba , salate , tomto',
    price: '$3.50',
    image: img2
  }, {
    title: 'Ex Burger',
    detail: 'kakaba, salata , onine',
    price: '$4.00',
    image: img3
  }, {
    title: 'Chicken Burger',
    detail: 'chicken, onine, salada',
    price: '$5.50',
    image: img4
  }, {
    title: 'Pizza',
    detail: 'Tomato, chese, chicken',
    price: '$6.00',
    image: img5
  }, {
    title: 'Salte Pizza',
    detail: 'tomato, onine, etc',
    price: '$2.00',
    image: img6
  }, {
    title: 'Mushroom Pizza',
    detail: 'mushroom, cheese, etc',
    price: '$2.45',
    image: img7
  }, {
    title: 'Meet Pizza',
    detail: 'meet , cheese , tomato',
    price: '$5.50',
    image: img8
  },
  {
    title: 'Taco Bell',
    detail: 'kema , salata, tomato',
    price: '$4.00',
    image: img9
  }, {
    title: 'Taco ',
    detail: 'kema, etc',
    price: '$4.40',
    image: img10
  }
]


const ProductPage = () => {
  return (
    <div className="p-4">
      <h2 className="text-center mb-4">Full Menu</h2>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {products.map((item, key) => (
          <MenuCard key={key} item={item} />
        ))}
      </div>
    </div>
  )
}

export default ProductPage