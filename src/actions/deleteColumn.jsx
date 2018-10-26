
const deleteColumn = column => {
    return {
      type: 'DELETE_COLUMN',
      column
    }
  };
  
  export default deleteColumn;