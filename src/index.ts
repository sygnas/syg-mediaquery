/**
 * check media query
 *
 * @author   Hiroshi Fukuda <info.sygnas@gmail.com>
 * @license  MIT
 */

import { TMedias } from "./types";

class sygMediaquery {
  // media list
  private static medias: TMedias = {};

  /**
   * get medias
   */
  static getMedias(): object {
    return this.medias;
  }

  /**
   * add media query
   * @param name {String} media name
   * @param value {String} media query string
   */
  static addMedia(name: string, value: string): void {
    this.medias[name] = value;
  }

  /**
   * remove media query
   * @param name {String} media name
   */
  static removeMedia(name: string): void {
    delete this.medias[name];
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
