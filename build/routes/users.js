"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var router = _express["default"].Router();
/* GET users listing. */


router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
module.exports = router;
//# sourceMappingURL=users.js.map