const Moralis = require('moralis');

export default (context, inject) => {
    inject('myFunction', () => ()=>{
        return Moralis;
    })
  }