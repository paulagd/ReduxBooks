//state arg is not an application state, only the state this reducer is responsable of
export default function(state = null, action) {  //if state = undefined, posal a null
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
