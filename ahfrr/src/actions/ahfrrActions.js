import { ahfrrActionTypes } from '../Types/ahfrrTypes'

export const showModal = (modalProps) => {
  const types=ahfrrActionTypes;
  const here="here";
  return dispatch => 
  {
    dispatch({type: ahfrrActionTypes.showModal, payload: modalProps});
  }
};

export const showModal1 = ( modalProps, modalType ) => {
try{
  const here="here";
  
  return dispatch => {
    const here2="here2";
  //   dispatch({type: ActionTypes.showModal});
    }
}
catch (error) 
  {
    const here1=error;
  }
  };

export const hideModal = () => dispatch => {
  const here="here";
  dispatch({ type: ahfrrActionTypes.hideModal});
}
//#endregion

