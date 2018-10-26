import React, { Component } from 'react';
import './toolbar.scss';
import Guid from '../../service/guid'

class Toolbar extends Component{
    state={
        columName: ''
    }

    addColumn = (event) => {
        if (event.keyCode !== 13) return;
        if (this.state.columName === '') return;
        this.props.addColumn(
            {
                title: this.state.columName,
                id:Guid(),
                cardList:[]
            }
        );
        this.setState(
                {columName: ''}
        );
    }

    onChangeInput = (event) => (this.setState({ columName: event.target.value}));

    render() {
        const { columName } = this.state;
        return <div className="cb-toolbar">
            <div>
                <input type="text" onKeyUp={this.addColumn} onChange={this.onChangeInput} value={columName}></input>
            </div>
        </div>
    }
}


export default Toolbar;