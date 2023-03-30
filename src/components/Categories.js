import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props) 
        this.state = {
            cat: [ /*Состояние содержащее массив категорий*/
                {
                    key: 'all',
                    name: 'Всё',
                    img: 'Vector.svg'
                },
                {
                    key: 'chair',
                    name: 'Кресла',
                    img: 'mdi_chair.svg'
                },
                {
                    key: 'table',
                    name: 'Столы',
                    img: 'material-symbols_table-restaurant.svg'
                },
                {
                    key: 'cupboard',
                    name: 'Шкафы',
                    img: 'Vector (1).svg'
                    
                },
                {
                    key: 'sofa',
                    name: 'Диваны',
                    img: 'mdi_sofa-single-outline.svg'
                },
                {
                    key: 'bed',
                    name: 'Кровати',
                    img: 'teenyicons_bed-double-solid.svg'
                },
            ]
        }
    }
  
    render() {
    return (
      <div className='catBlock'>
        {this.state.cat.map(el => ( /*Обработкик события. Вызывается анонимная функция, в которой обращаемся к методу selectCategory и передаем в него ключ*/
            <div key={el.key} onClick={() => this.props.selectCategory(el.key)} className={((this.props.selectedCat === el.key) ? 'selectedDiv' : '')}>
                <img className='catImg' src={'./img/' + el.img} /><span>{el.name}</span>
            </div>
        ))}
      </div>
    )
  }
}

export default Categories