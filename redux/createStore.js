const createStore = function (reducer, initState, rewriteCreateStore) {
  let state = initState
  let listeners = []

  if(rewriteCreateStore){
    const newCreateStore = rewriteCreateStore(createStore)
    return newCreateStore(reducer,initState)
  }

  function getState() {
    return state
  }

  function subscribe(litener) {
    listeners.push(litener)
  }

  function dispatch(action) {
    state = reducer(state, action)
    for (let listener of listeners) {
      listener()
    }
  }

  function replaceReducer(newReducer) {
    reducer = newReducer
    dispatch({ type: Symbol() })
  }

  dispatch({ type: Symbol() })

  return {
    getState,
    subscribe,
    dispatch,
    replaceReducer
  }
}

export default createStore