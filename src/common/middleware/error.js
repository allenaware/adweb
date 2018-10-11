module.exports = (options, app) => {
    return (ctx, next) => {
       return next().then(()=>{
        if(ctx.status===404)
        {
            console.log('middl');
            ctx.redirect('/');
        }
  
       });
  
    }
  }
  