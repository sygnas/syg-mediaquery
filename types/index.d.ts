/**
 * check media query
 *
 * @author   Hiroshi Fukuda <info.sygnas@gmail.com>
 * @license  MIT
 */
import { TMedias } from "./types";
declare class sygMediaquery {
    private static medias;
    /**
     * get query string
     */
    static getQueryString(): object;
    /**
     * set media query
     * @param name {String} media name
     * @param value {String} media query string
     */
    static setMedia(name: string, value: string): void;
    /**
     * reset media query
     * @param medias {Object} media query list
     */
    static resetMedias(medias: TMedias): void;
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
