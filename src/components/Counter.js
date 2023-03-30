import React, { Component } from 'react'

export class Counter extends Component {
  render() {
    return (
        <div className='counter'>
            <div className='counterButton'>
                <div className='minus' onClick={() => this.props.decCounter(this.props.item)}>—</div>
                <div className='amount'>{this.props.item.amount}</div>
                <div className='plus' onClick={() => this.props.addCounter(this.props.item)}>+</div>
            </div>
        </div>
    )
  }
}

export default Counter