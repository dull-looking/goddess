'use strict';
// app/middleware/robot.js
// options === app.config.robot
module.exports = (options, app) => {
  return function* robotMiddleware(next) {
    const source = this.get('user-agent') || '';
    const match = options.ua.some(ua => ua.test(source));
    if (match) {
      this.status = 403;
      this.message = 'Go away, robot.';
    } else {
      yield next;
    }
  };
};
// config/config.default.js
// mount middleware
exports.middleware = [
  'robot',
];
// middleware config
exports.robot = {
  ua: [
    /Baiduspider/i,
  ],
};
