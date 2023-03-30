import React, { useState } from 'react'
import { BsBasket3 } from 'react-icons/bs';
import Order from './Order';

export default function Header(props) {
  let [basketOpen, setBasketOpen] = useState(false) //состояние basketOpen, функция setBasketOpen и хук useState
  let sum = 0
  props.basket.forEach(el => sum += el.price*el.amount)

  return (
    <header>
        <div>
            <span className='logo'><span className='logoF'>F</span>Store</span>
            <ul className='nav'>
                <li><BsBasket3 onClick={() => setBasketOpen(basketOpen = !basketOpen)} className={`basketIcon ${basketOpen && 'active'}`} /></li> {/*При нажатии анониманя функция обращаетс к функции изменяющей состояние на противоположние*/} 
                <li>Магазины</li> {/*Если basketOpen == true то присваивается доп. класс active*/} 
                <li>Контакты</li>
                <li>Вход</li>
            </ul>
            {basketOpen && (
              <div className='basketMenu'> {/*Вывод товаров в корзине*/} 
                  {props.basket.length > 0 ?
                  <div>
                    {props.basket.map(el => (
                    <Order key={el.id} item={el} delete={props.delete} addCounter={props.addCounter} decCounter={props.decCounter}/>
                    ))}
                    <div className='sum'>Сумма: {sum} ₽</div>
                    <div className='checkout'>Оформить заказ</div>
                  </div> : <div className='empty'>
                    Корзина пуста
                  </div> }
              </div>
            )}
        </div>
        <div className='banner'>

        </div>
    </header>
  )
}

