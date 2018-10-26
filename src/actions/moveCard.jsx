const moveCard = (card, newColumn) => {
  return {
    type: 'MOVE_CARD',
    card,
    newColumn
  }
};

export default moveCard;