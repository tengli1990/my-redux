export default function timeMiddleware(store){
  return (next)=>(action)=>{
     console.log('2.timeMiddleware')
     next(action)
     console.log('2.run')
  }
 }