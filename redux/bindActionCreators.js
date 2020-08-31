export  default class bindActionCreators {
  constructor(actions, dispatch) {
    const actionCreators = {}

    for(let key in actions){
      const actionKey = actions[key]
      if(typeof actionKey === 'function'){
        actionCreators[key] = this.bindActionCreate(dispatch, actionKey)
      }
    }
console.log(actionCreators)
    return actionCreators
  }

  bindActionCreate(dispatch,action){
    return function(){
      return dispatch(action.apply(this,arguments))
    }
  }
}

