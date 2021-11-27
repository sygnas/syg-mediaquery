'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_virtual/_rollupPluginBabelHelpers.js');

/**
 * check media query
 *
 * @author   Hiroshi Fukuda <info.sygnas@gmail.com>
 * @license  MIT
 */
var sygMediaquery = /*#__PURE__*/function () {
  function sygMediaquery() {
    _rollupPluginBabelHelpers.classCallCheck(this, sygMediaquery);
  }

  _rollupPluginBabelHelpers.createClass(sygMediaquery, null, [{
    key: "getMedias",
    value: // media list

    /**
     * get medias
     */
    function getMedias() {
      return this.medias;
    }
    /**
     * add media query
     * @param name {String} media name
     * @param value {String} media query string
     */

  }, {
    key: "addMedia",
    value: function addMedia(name, value) {
      this.medias[name] = value;
    }
    /**
     * remove media query
     * @param name {String} media name
     */

  }, {
    key: "removeMedia",
    value: function removeMedia(name) {
      delete this.medias[name];
    }
    /**
     * check target media
     * @param name {String} media name
     * @return {Bool} is hit target media
     */

  }, {
    key: "isMedia",
    value: function isMedia(name) {
      var media = this.medias[name];
      return window.matchMedia(media).matches;
    }
    /**
     * get hit media list
     * @return {Array} hit media list
     */

  }, {
    key: "getHitMedias",
    value: function getHitMedias() {
      var _this = this;

      var hitlist = [];
      Object.keys(this.medias).forEach(function (name) {
        if (_this.isMedia(name)) {
          hitlist.push(name);
        }
      });
      return hitlist;
    }
  }]);

  return sygMediaquery;
}();

_rollupPluginBabelHelpers.defineProperty(sygMediaquery, "medias", {});

exports["default"] = sygMediaquery;
//# sourceMappingURL=index.js.map
