/**
 * check media query
 *
 * @author   Hiroshi Fukuda <info.sygnas@gmail.com>
 * @license  MIT
 */

const syg_mediaquery = {

    /**
     * media list
     */
    _medias: {
        large: 'screen and (min-width:801px)',
        tablet: 'screen and (min-width:601px) and (max-width:800px)',
        mobile: 'screen and (max-width:600px)'
    },

    /**
     * get query string
     * @returns {Object}
     */
    get_query_string(){
      return syg_mediaquery._medias;
    },

    /**
     * set media query
     * @param name {String} media name
     * @param value {String} media query string
     */
    set_media(name, value) {
        syg_mediaquery._medias[name] = value;
    },

    /**
     * reset media query
     * @param medias {Object} media query list
     */
    reset_medias(medias) {
        syg_mediaquery._medias = medias;
    },

    /**
     * check target media
     * @param name {String} media name
     * @return {Bool} is hit target media
     */
    is_media(name) {
        const media = syg_mediaquery._medias[name];
        return window.matchMedia(media).matches;
    },

    /**
     * get hit media list
     * @return {Array} hit media list
     */
    get_hit_medias() {
        const medias = syg_mediaquery._medias;
        const hitlist = [];

        Object.keys(medias).forEach((name) => {
            if (syg_mediaquery.is_media(name)) {
                hitlist.push(name);
            }
        });

        return hitlist;
    }
};

export default syg_mediaquery;