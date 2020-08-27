export default function loggerMiddleware(store){
  return (next)=>(action)=>{
     console.log('3.loggerMiddleware')
     next(action)
     console.log('3.run')
  }
 }