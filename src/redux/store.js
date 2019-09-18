import {createStore} from 'redux';

const initialState = {
   puppers: []
}

export const UPDATE_PUPPERS = 'UPDATE_PUPPERS';

function reducer(state = initialState, action) {
   const {type, payload} = action;

   switch(type) {
      case UPDATE_PUPPERS:
         return {
            ...state,
            puppers: payload
         }
      default: return state;
   }
}

export default createStore(reducer)