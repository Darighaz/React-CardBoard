import { connect } from 'react-redux';
import deleteCard from '../../actions/deleteCard'
import updateCardDescription from '../../actions/updateCardDescription'
import Card from './card.jsx';

//const mapDispatchToProps = (dispatch) => ({ addColumn(column){ dispatch(addColumn(column)) } });

const mapDispatchToProps = (dispatch) =>
    ({
        deleteCard: (card) => {
            return dispatch(deleteCard(card));
        },
        updateCardDescription: (card) => {
            return dispatch(updateCardDescription(card));
        }
    });

export default connect(null, mapDispatchToProps)(Card);