import React, { Component } from 'react'


export class Card extends Component { //Компонент карточка товара
  render() {
    return (
      <div className='card'>
        <div className='helpdiv' onClick={() => this.props.changeShowProductMW(this.props.item)}>
        <img src={"./img/" + this.props.item.img} className='img'/>
        <p className='name'>{this.props.item.title}</p>
        <p className='price'>{this.props.item.price} ₽</p>
        </div>
        <div onClick={() => this.props.onAdd(this.props.item)}>
        {this.checkAdd(this.props.item)}
        </div> {/*При нажатии на + анонимня функция вызываем метод для добавления товара в карзину*/}
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
    return(<div className='InBasket'>В корзине</div>)
    else return(<div className='add'>+</div>)
  }
}

export default Card