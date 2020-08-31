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
    // 替换reducer之后需要进行重新初始化
    dispatch({ type: Symbol() })
  }
  // 重新初始化数据结构及默认数据
  dispatch({ type: Symbol() })

  return {
    getState,
    subscribe,
    dispatch,
    replaceReducer
  }
}

export default createStore