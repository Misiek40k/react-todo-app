// selectors
export const getSearchString = ({ searchString }) => searchString;
export const countAllCards = ({ cards }) => cards.length;
export const countVisibleCards = ({ cards, searchString }) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const FILTER = createActionName('FILTER');

// action creators
export const createAction_changeSearchString = payload => ({ payload, type: FILTER });

// reducer
export default function reducer(statePart = '', action = {}) {
    switch (action.type) {
        case FILTER:
            return action.payload;
        default:
            return statePart;
    }
}

