
const initialState = 5;
const multAndDivtnReducerNumber = (state = initialState, action) => {
    switch (action.type) {
        case 'MUILTI': return state * 5;
        case 'DIVITION': return state / 5;
        default: return state;
    }
};

export default multAndDivtnReducerNumber;