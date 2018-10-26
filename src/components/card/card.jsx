import React, { Component } from 'react';
import './card.scss';


class Card extends Component {
  state={
    'editable':false,
    'description':this.props.description
  }

  dragStart(e) {e.card = {...this.props}}

  enableEdit= () => this.setState({'editable':true});
  saveDescription= () => {
    this.setState({'editable':false});
    this.props.updateCardDescription({...this.props,'description':this.state.description});
  }
  deleteCard= () =>this.props.deleteCard(this.props);
  onChangeInput = (event) => (this.setState({ description: event.target.value }));

  render() {
    return <div className='cb-card' data-id={this.props.id} draggable='true' onDragStart={this.dragStart.bind(this)}>
      <header className="card-header">
        <p className="card-header-title">
          {this.props.title}
        </p>
        <span className="card-header-icon" aria-label="more options">
        </span>
      </header>
      <div className="card-content">
        <div className="content">
          {this.state.editable?
            <div className="content"><textarea className="editable" onChange={this.onChangeInput} value={this.state.description}></textarea></div>:
            <div className="content">{this.state.description}</div>
          }
        </div>
      </div>
      <footer className="card-footer">
       { 
         this.state.editable?
          <span onClick={this.saveDescription} className="card-footer-item">Save <span className="icon"><i className="far fa-save"></i> </span></span>:
          <span onClick={this.enableEdit} className="card-footer-item">Edit <span className="icon"><i className="far fa-edit"></i> </span></span>
        }
        <span onClick={this.deleteCard} className="card-footer-item">Delete <span className="icon"><i className="fas fa-trash-alt"></i></span></span>
      </footer>
    </div>
  }


}
export default Card;