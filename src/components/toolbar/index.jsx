import { connect } from 'react-redux';
import Toolbar from './toolbar.jsx';
import addColumn from '../../actions/addColumn'

//const mapDispatchToProps = (dispatch) => ({ addColumn(column){ dispatch(addColumn(column)) } });

const mapDispatchToProps = (dispatch) =>
    ({
        addColumn: (column) => {
            return dispatch(addColumn(column));
        }
    });


export default connect(null, mapDispatchToProps)(Toolbar);