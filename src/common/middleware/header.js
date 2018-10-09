module.exports = (options, app) => {
  return (ctx, next) => {
     return next().then(()=>{
       ctx.set({
         "X-Powered-By":'nginx1.1'
       })

     });

  }
}
