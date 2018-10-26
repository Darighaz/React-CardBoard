import { connect } from 'react-redux';
import Board from './board.jsx';
//import addColumn from '../../actions/addColumn'

//const mapDispatchToProps = (dispatch) => ({ addColumn(column){ dispatch(addColumn(column)) } });

const mapStateToProps = ({ columnList }) => ({ columnList })
export default connect(mapStateToProps, null)(Board);