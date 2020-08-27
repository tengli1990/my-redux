
export default function comose(funcs){
  if(funcs.length === 0){
    return function(...args){
      return args
    }
  }

  if(funcs.length === 1){
    return funcs[0]
  }

  return funcs.reduce((a,b)=>(args)=>a(b(args)))
}