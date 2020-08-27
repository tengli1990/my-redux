let initState = {
   count:0
}

export default function counterReducer(state,action){
  if(!state){
    state = initState
  }
  switch(action.type){
    case 'INCREASE':
      return {
        ...state,
        count:++state.count
      }
    case 'DECREASE':
      return {
        ...state,
        count: --state.count
      }
    default :
      return state
  }
}