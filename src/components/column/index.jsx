import { connect } from 'react-redux';
import Column from './column.jsx';
import addCard from '../../actions/addCard'
import deleteColumn from '../../actions/deleteColumn'
import moveCard from '../../actions/moveCard'

//const mapDispatchToProps = (dispatch) => ({ addColumn(column){ dispatch(addColumn(column)) } });

const mapDispatchToProps = (dispatch) =>
    ({
        addCard: (card) => {
            return dispatch(addCard(card));
        },
        deleteColumn: (column) => {
            return dispatch(deleteColumn(column));
        },
        moveCard: (card,columnId) => {
            return dispatch(moveCard(card,columnId));
        }
    });


export default connect(null, mapDispatchToProps)(Column);