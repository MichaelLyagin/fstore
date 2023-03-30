import React, { Component } from 'react'
import { AiOutlineClose } from 'react-icons/ai';

export class ProductMW extends Component {
  render() {
    return (
        <div className='back' >
            <div className='helpMW' onClick={() => this.props.closeModalWindow()}></div>
            <div className='cardMW'>
                <AiOutlineClose className='close' onClick={() => this.props.closeModalWindow()}/>
                <img src={"./img/" + this.props.item.img} className='imgMW'/>
                <p className='nameMW'>{this.props.item.title}</p>
                <p className='descMW'>{this.props.item.des}</p>
                <p className='priceMW'>{this.props.item.price} ₽</p>
                <div onClick={() => this.props.onAdd(this.props.item)}>
                {this.checkAdd(this.props.item)}
                </div> {/*При нажатии на + анониманя функция вызываем метод для добавления товара в карзину*/}
            </div>
      </div>
    )
  }
  checkAdd(item){ //Метод проверки на добавление в корзину
    let added = false
    this.props.inBasket.forEach(el => {
      if(el.id === item.id)
      added = true
    })
    if(added)
    return(<div className='InBasketMW'>В корзине</div>)
    else return(<div className='addMW'>+</div>)
  }
}

export default ProductMW