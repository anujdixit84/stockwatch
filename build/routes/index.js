"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var router = _express["default"].Router();
/* GET home page. */


router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
module.exports = router;
//# sourceMappingURL=index.js.map