import {customerTypes} from 'action/constant';

const initialState = {
  customers: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case sessionTypes.FETCH_CUSTOMERS:
      return {
        customers: action.response.data
        ...state,
      };
    default:
      return state;
  }
}
