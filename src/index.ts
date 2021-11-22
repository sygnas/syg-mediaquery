/**
 * check media query
 *
 * @author   Hiroshi Fukuda <info.sygnas@gmail.com>
 * @license  MIT
 */

import { TMedias } from "./types";

class sygMediaquery {
  // media list
  private static medias: TMedias = {
    large: "screen and (min-width:801px)",
    tablet: "screen and (min-width:601px) and (max-width:800px)",
    mobile: "screen and (max-width:600px)",
  };

  /**
   * get query string
   */
  static getQueryString(): object {
    return this.medias;
  }

  /**
   * set media query
   * @param name {String} media name
   * @param value {String} media query string
   */
  static setMedia(name: string, value: string): void {
    this.medias[name] = value;
  }

  /**
   * reset media query
   * @param medias {Object} media query list
   */
  static resetMedias(medias: TMedias): void {
    this.medias = medias;
  }

  /**
   * check target media
   * @param name {String} media name
   * @return {Bool} is hit target media
   */
  static isMedia(name: string): boolean {
    const media: string = this.medias[name];
    return window.matchMedia(media).matches;
  }

  /**
   * get hit media list
   * @return {Array} hit media list
   */
  static getHitMedias(): string[] {
    const hitlist: string[] = [];

    Object.keys(this.medias).forEach((name) => {
      if (this.isMedia(name)) {
        hitlist.push(name);
      }
    });
    return hitlist;
  }
}

export default sygMediaquery;
