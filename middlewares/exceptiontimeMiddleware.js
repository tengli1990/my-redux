export default function execptiontimeMiddleware(store) {
  return (next) => (action) => {
    console.log('1.execptiontimeMiddleware')
    try {
      next(action)
      console.log('1.run')
    } catch (e) {
      console.error('程序出错', e)
    }
  }

}