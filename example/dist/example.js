(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  var colors = {
    Reset: "\x1b[0m",
    Bright: "\x1b[1m",
    Dim: "\x1b[2m",
    Underscore: "\x1b[4m",
    Blink: "\x1b[5m",
    Reverse: "\x1b[7m",
    Hidden: "\x1b[8m",
    fg: {
      Black: "\x1b[30m",
      Red: "\x1b[31m",
      Green: "\x1b[32m",
      Yellow: "\x1b[33m",
      Blue: "\x1b[34m",
      Magenta: "\x1b[35m",
      Cyan: "\x1b[36m",
      White: "\x1b[37m",
      Crimson: "\x1b[38m"
    },
    bg: {
      Black: "\x1b[40m",
      Red: "\x1b[41m",
      Green: "\x1b[42m",
      Yellow: "\x1b[43m",
      Blue: "\x1b[44m",
      Magenta: "\x1b[45m",
      Cyan: "\x1b[46m",
      White: "\x1b[47m",
      Crimson: "\x1b[48m"
    }
  };
  var isInBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object";
  var crayon = {
    log: function log() {
      var _console;

      (_console = console).log.apply(_console, arguments);
    },
    warn: function warn() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (isInBrowser) {
        var _console2;

        (_console2 = console).warn.apply(_console2, args);
      } else {
        console.warn([colors.fg.Yellow].concat(args, [colors.Reset]).join(''));
      }
    },
    error: function error() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (isInBrowser) {
        var _console3;

        (_console3 = console).error.apply(_console3, args);
      } else {
        console.error([colors.fg.Red].concat(args, [colors.Reset]).join(''));
      }
    }
  };

  crayon.log('This is a log');
  crayon.warn('This is a warn');
  crayon.error('This is a error');

})));
