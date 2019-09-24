(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.rollupDemo = factory());
}(this, function () { 'use strict';

  var version = "1.0.0";

  var rollupDemo =
  /*#__PURE__*/
  function () {
    function rollupDemo(data) {
      this.version = version;
      this.data = data;
    }

    var _proto = rollupDemo.prototype;

    _proto.log = function log() {// return Promise.resolve(this)
    };

    return rollupDemo;
  }();

  return rollupDemo;

}));
