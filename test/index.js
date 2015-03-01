var assert = require("assert");

var classSet = require("../classset-extra");

describe("classSet", function () {
  it("should set one class", function () {
    var classes = classSet({
      test: true
    });

    assert.equal(classes, "test");
  });

  it("should not set one class", function () {
    var classes = classSet({
      test: false
    });

    assert.equal(classes, "");
  });

  it("should set two classes", function () {
    var classes = classSet({
      test1: true
      , test2: true
    });

    assert.equal(classes, "test1 test2");
  });

  it("should not set two classes", function () {
    var classes = classSet({
      test1: false
      , test2: true
    });

    assert.equal(classes, "test2");
  });

  it("should set two classes with namespace", function () {
    var classes = classSet({
      test1: true
      , test2: true
    }, {
      namespace: "test"
    });

    assert.equal(classes, "test-test1 test-test2");
  });

  it("should not set two classes with namespace", function () {
    var classes = classSet({
      test1: true
      , test2: false
    }, {
      namespace: "test"
    });

    assert.equal(classes, "test-test1");
  });
});
