import React, { useEffect, useState } from 'react'
import { BsFillCartPlusFill , BsFillCartCheckFill } from 'react-icons/bs'
import {getItem , setItem} from '../services/LocalStorageFunc'
import { Link } from 'react-router-dom'

import './store.css'

const Store = () => {
const [data , setData] = useState([])
const [cart , setCart] = useState( getItem('Cart') || [])

   useEffect(() => {
    const fetchApi = async () => {
        const url = 'https://api.mercadolibre.com/sites/MLB/search?q=celular'
        const response = await fetch(url)
        const objJson = await response.json()
        setData(objJson.results)
    }
    fetchApi()
   },[]) 

   const handleClick = (obj) => {
    const element = cart.find((e) => e.id === obj.id)
    if(element){
        const arrFilter = cart.filter((e) => e.id !== obj.id)
        setCart(arrFilter)
        setItem('Cart_shop' , arrFilter)
    }else {
      setCart([...cart , obj])
      setItem('Cart_shop' , [...cart , obj])
    }
   }
  return (
 
    <div className='container'>
    <h1>STORE</h1> 
      <Link className='cart' to='/cart'>Carrinho</Link> 

        {
            data.map((e) => (
                <div className='container-shop' key={e.id}>
                    <h4>{e.title}</h4>
                    <img src={e.thumbnail}/>
                    <h4>$ {e.price}</h4>
                    <button onClick={() => handleClick(e)}>
                        {
                          cart.some(itemCart => itemCart.id === e.id) ? (

                            <BsFillCartCheckFill className="icons"/>
                          ):(
                            <BsFillCartPlusFill className="icons-confirm"/>
                          )
                        }
                    </button>
                </div>
            ))
        }

    </div>
  )
}

export default Store