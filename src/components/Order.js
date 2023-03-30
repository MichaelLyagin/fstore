import React, { Component } from 'react'
import { BiTrashAlt } from 'react-icons/bi';
import Counter from './Counter';

export class Order extends Component {
  render() {
    return (
      <div className='orderRow'>
        <img src={"./img/" + this.props.item.img} className='imgBasket'/>
        <p className='nameBasket'>{this.props.item.title}</p>
        <p className='priceBasket'>{this.props.item.price} ₽</p>
        <Counter key={this.props.item.id} addCounter={this.props.addCounter} decCounter={this.props.decCounter} item={this.props.item}/>
        <div className='trashCan' onClick={() => this.props.delete(this.props.item.id)}><BiTrashAlt className='can'/></div>
      </div>
    )
  }
}

export default Order