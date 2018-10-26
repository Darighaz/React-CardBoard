import React, { Component } from 'react';
import './board.scss';
import Column from '../column/'

class Board extends Component{

    render() {
        return <div className="cb-board">
            <div  id="scroll" className="columns">
                {this.props.columnList.map((column, i) => <Column key={column.id} id={column.id} title={column.title} cardList={column.cardList}></Column>)}
            </div>
        </div>
    }
}
export default Board;