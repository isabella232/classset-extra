(function (root, factory) {
  /* istanbul ignore next */
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports === "object") {
    module.exports = factory();
  } else {
    root.classSet = factory();
  }
}(this, function () {

  var classSet = exports = function (obj, options) {
    options = options || {};

    var out = [];

    for (var key in obj) {
      if (obj[key]) {
        out.push(options.namespace ? options.namespace + "-" + key : key);
      }
    }

    return out.join(" ");
  };

  return exports;
}));
