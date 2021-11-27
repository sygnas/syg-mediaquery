/**
 * check media query
 *
 * @author   Hiroshi Fukuda <info.sygnas@gmail.com>
 * @license  MIT
 */
declare class sygMediaquery {
    private static medias;
    /**
     * get medias
     */
    static getMedias(): object;
    /**
     * add media query
     * @param name {String} media name
     * @param value {String} media query string
     */
    static addMedia(name: string, value: string): void;
    /**
     * remove media query
     * @param name {String} media name
     */
    static removeMedia(name: string): void;
    /**
     * check target media
     * @param name {String} media name
     * @return {Bool} is hit target media
     */
    static isMedia(name: string): boolean;
    /**
     * get hit media list
     * @return {Array} hit media list
     */
    static getHitMedias(): string[];
}
export default sygMediaquery;
