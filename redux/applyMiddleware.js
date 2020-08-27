import comose from './comose.js'

export default function applyMiddleware(...middlewares){
  return function(oldCreateStore){
    return function(reducer, initState){
        const store = oldCreateStore(reducer, initState)
        const chain = middlewares.map(middleware=>middleware(store))
        const dispatch = comose(chain)(store.dispatch)
        return {
          ...store,
          dispatch
        }
    }
  }
}