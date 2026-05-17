import { ahfrrActionTypes}  from '../Types/ahfrrTypes'

const initialState = {
    modalType: null,
    modalProps: {
      open: false,
      instrument: {},
      background:{}
    }
  }

  export default (state = initialState, action) => {
    switch (action.type) {
      case ahfrrActionTypes.showModal:
        return {
          modalProps: action.payload,
          
        }
      case ahfrrActionTypes.hideModal:
        return {
          modalProps: initialState.modalProps,
        }
      default:
        return state
    }
  }