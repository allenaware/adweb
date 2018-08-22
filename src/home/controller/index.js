const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
      var model ={title:'hello',body:'hello'};
      this.assign('model', model); //给模板赋值
      return this.display();
  }
};
