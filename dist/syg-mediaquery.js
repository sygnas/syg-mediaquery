(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['syg-mediaquery'] = factory());
}(this, (function () { 'use strict';

/**
 * check media query
 *
 * @author   Hiroshi Fukuda <info.sygnas@gmail.com>
 * @license  MIT
 */

var syg_mediaquery = {

    /**
     * media list
     */
    _medias: {
        large: 'screen and (min-width:801px)',
        tablet: 'screen and (min-width:601px) and (max-width:800px)',
        mobile: 'screen and (max-width:600px)'
    },

    /**
     * set media query
     * @param name {String} media name
     * @param value {String} media query string
     */
    set_media: function set_media(name, value) {
        syg_mediaquery._medias[name] = value;
    },


    /**
     * reset media query
     * @param medias {Object} media query list
     */
    reset_medias: function reset_medias(medias) {
        syg_mediaquery._medias = medias;
    },


    /**
     * check target media
     * @param name {String} media name
     * @return {Bool} is hit target media
     */
    is_media: function is_media(name) {
        var media = syg_mediaquery._medias[name];
        return window.matchMedia(media).matches;
    },


    /**
     * get hit media list
     * @return {Array} hit media list
     */
    get_hit_medias: function get_hit_medias() {
        var medias = syg_mediaquery._medias;
        var hitlist = [];

        Object.keys(medias).forEach(function (name) {
            if (syg_mediaquery.is_media(name)) {
                hitlist.push(name);
            }
        });

        return hitlist;
    }
};

return syg_mediaquery;

})));
//# sourceMappingURL=syg-mediaquery.js.map
