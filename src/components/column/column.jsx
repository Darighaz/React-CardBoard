import React, { Component } from 'react';
import './column.scss';
import Guid from '../../service/guid'
import Card from '../card/'


class Column extends Component {
    state = {
        cardTitle: ''
    }

    onDrop = (e) =>{
        e.preventDefault()
        let card = e.card;
        let columnId = this.props.id
        this.props.moveCard(card,columnId)
    }
    onDragOver = (e) =>{e.preventDefault()}

    addCard = (event) => {
        if (event.keyCode !== 13) return;
        if (this.state.cardTitle === '') return;
        this.props.addCard(
            {
                columnId: this.props.id,
                title: this.state.cardTitle,
                id: Guid(),

            }
        );
        this.setState(
            { cardTitle: '' }
        );
    }

    deleteColumn = () => this.props.deleteColumn({id: this.props.id})

    onChangeInput = (event) => (this.setState({ cardTitle: event.target.value }));

    render() {
        const { cardTitle } = this.state;
        return <div className="cb-column" onDrop={this.onDrop} onDragOver={this.onDragOver}>
            <div className="column-title">{this.props.title}</div>
            <div id="scroll" className="box" onDrop={this.dragOver}>
                {this.props.cardList.map((card, i) => <Card key={card.id} columnId={card.columnId} id={card.id} description={card.description} title={card.title}></Card>)}
            </div>
            <div>
                <input type="text" onKeyUp={this.addCard} onChange={this.onChangeInput} value={cardTitle} placeholder="Añadir Tarea"></input>
                <span onClick={this.deleteColumn} className="icon"><i className="fas fa-trash-alt"></i></span>
            </div>
        </div>
    }

}
export default Column;