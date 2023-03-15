import React , {useState} from 'react'
import { getItem , setItem} from '../services/LocalStorageFunc'
import { BsCartDashFill } from 'react-icons/bs'
import './store.css'
import Header from '../components/Header'
const Cart = () => {
    const [data , setData] = useState(getItem('Cart_shop') || [])
    
    const removeItem = (obj) => {
       const arrFilter = data.filter((e) => e.id !== obj.id)
       setData(arrFilter)
       setItem('Cart_shop' , arrFilter)
    }
    const subTotal = data.reduce((acc , cur) => acc + cur.price,0)
  return (
    
      <div className='container-cart'>
        {`Valor Total da Compra: ${subTotal}`}
        <Header/>
        <h1>Carrinho</h1>
        <div>
        {
            data.map((e) => (
            <div className='container-shop-two' key={e.id}>
                <h4>{e.title}</h4>
                <img src={e.thumbnail} alt={e.title}/>
                <h4>$ {e.price}</h4>
                <button onClick={ () => removeItem(e)}>
                    <BsCartDashFill className="remove"/>
                </button>
            </div>
            ))
        }
        </div>
    </div>
  )
}

export default Cart