function cardBoard(state = { columnList: [] }, action) {

    let newColumnList=[];
    switch (action.type) {
        case 'ADD_COLUMN':
            return {
                ...state,
                columnList: [
                    ...state.columnList,
                    action.column
                ],
            }
        case 'DELETE_COLUMN':
            var filteredColumnList = state.columnList.filter(function(column, index, arr){
                return column.id !== action.column.id;
            });

            return {
                ...state,
                columnList: filteredColumnList,
            }
        case 'ADD_CARD':
            newColumnList = state.columnList.map(column => {
                if (column.id === action.card.columnId) {
                    return {
                        ...column,
                        cardList: [
                            ...column.cardList,
                            action.card
                        ]
                    }
                }
                return column
            })
            return {
                ...state,
                columnList: newColumnList,
            }

        case 'MOVE_CARD':
        let trapCard = action.card;
        newColumnList = state.columnList.map(column => {
            if (column.id === trapCard.columnId) {
                var cardListFilter = column.cardList.filter(function(card, index, arr){
                    return card.id !== trapCard.id;
                
                });
                return {
                    ...column,
                    cardList:cardListFilter
                }
            }
            return column
        })

        let   firstStepState = {
                ...state,
                columnList: newColumnList,
            }
        trapCard.columnId = action.newColumn
            newColumnList = firstStepState.columnList.map(column => {
                if (column.id === action.newColumn) {
                    return {
                        ...column,
                        cardList: [
                            ...column.cardList,
                            trapCard
                        ]
                    }
                }
                return column
            })
        return {
            ...firstStepState,
            columnList: newColumnList,
        }

        case 'DELETE_CARD':
            newColumnList = state.columnList.map(column => {
                if (column.id === action.card.columnId) {
                    var cardListFilter = column.cardList.filter(function(card, index, arr){
                        return card.id !== action.card.id;
                    
                    });
                    return {
                        ...column,
                        cardList:cardListFilter
                    }
                }
                return column
            })
            return {
                ...state,
                columnList: newColumnList,
            }
        case 'UPDATE_CARD_DESCRIPTION':
            newColumnList = state.columnList.map(column => {
                if (column.id === action.card.columnId) {
                    let newCardList = column.cardList.map(card=>{
                        if (card.id === action.card.id) {
                            return {
                                ...card,
                                'description':action.card.description
                            }
                        }
                        return card;
                        })
                    return {
                        ...column,
                        cardList:newCardList
                    }
                }
                return column
            })
        return {
            ...state,
            columnList: newColumnList,
        }

        default:
            return state
    }
}

export default cardBoard;