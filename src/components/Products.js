import React, { Component } from 'react'
import Card from './Card'

export class Products extends Component {
  render() {
    return (
      <main> {/*Обращаемся к массиву объектов и перебираем все товары*/}
        {this.props.items.map(el => (
            <Card changeShowProductMW={this.props.changeShowProductMW} key={el} item={this.props.dataItems.find(item => item.id === el)} onAdd={this.props.add} inBasket={this.props.inBasket}/> /*Указываем уникальный ключ, Передаем в свойство item элемент для отображения*/
        ))}
      </main>
    )
  }
}

export default Products
