'use strict';

/**
 * check media query
 *
 * @author   Hiroshi Fukuda <info.sygnas@gmail.com>
 * @license  MIT
 */
var sygMediaquery = /** @class */ (function () {
    function sygMediaquery() {
    }
    /**
     * get query string
     */
    sygMediaquery.getQueryString = function () {
        return this.medias;
    };
    /**
     * set media query
     * @param name {String} media name
     * @param value {String} media query string
     */
    sygMediaquery.setMedia = function (name, value) {
        this.medias[name] = value;
    };
    /**
     * reset media query
     * @param medias {Object} media query list
     */
    sygMediaquery.resetMedias = function (medias) {
        this.medias = medias;
    };
    /**
     * check target media
     * @param name {String} media name
     * @return {Bool} is hit target media
     */
    sygMediaquery.isMedia = function (name) {
        var media = this.medias[name];
        return window.matchMedia(media).matches;
    };
    /**
     * get hit media list
     * @return {Array} hit media list
     */
    sygMediaquery.getHitMedias = function () {
        var _this = this;
        var hitlist = [];
        Object.keys(this.medias).forEach(function (name) {
            if (_this.isMedia(name)) {
                hitlist.push(name);
            }
        });
        return hitlist;
    };
    // media list
    sygMediaquery.medias = {
        large: "screen and (min-width:801px)",
        tablet: "screen and (min-width:601px) and (max-width:800px)",
        mobile: "screen and (max-width:600px)",
    };
    return sygMediaquery;
}());

module.exports = sygMediaquery;
