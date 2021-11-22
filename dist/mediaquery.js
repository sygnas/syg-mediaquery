var sygMediaquery = (function () {
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

    return sygMediaquery;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWFxdWVyeS5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogY2hlY2sgbWVkaWEgcXVlcnlcbiAqXG4gKiBAYXV0aG9yICAgSGlyb3NoaSBGdWt1ZGEgPGluZm8uc3lnbmFzQGdtYWlsLmNvbT5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG5pbXBvcnQgeyBUTWVkaWFzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY2xhc3Mgc3lnTWVkaWFxdWVyeSB7XG4gIC8vIG1lZGlhIGxpc3RcbiAgcHJpdmF0ZSBzdGF0aWMgbWVkaWFzOiBUTWVkaWFzID0ge1xuICAgIGxhcmdlOiBcInNjcmVlbiBhbmQgKG1pbi13aWR0aDo4MDFweClcIixcbiAgICB0YWJsZXQ6IFwic2NyZWVuIGFuZCAobWluLXdpZHRoOjYwMXB4KSBhbmQgKG1heC13aWR0aDo4MDBweClcIixcbiAgICBtb2JpbGU6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KVwiLFxuICB9O1xuXG4gIC8qKlxuICAgKiBnZXQgcXVlcnkgc3RyaW5nXG4gICAqL1xuICBzdGF0aWMgZ2V0UXVlcnlTdHJpbmcoKTogb2JqZWN0IHtcbiAgICByZXR1cm4gdGhpcy5tZWRpYXM7XG4gIH1cblxuICAvKipcbiAgICogc2V0IG1lZGlhIHF1ZXJ5XG4gICAqIEBwYXJhbSBuYW1lIHtTdHJpbmd9IG1lZGlhIG5hbWVcbiAgICogQHBhcmFtIHZhbHVlIHtTdHJpbmd9IG1lZGlhIHF1ZXJ5IHN0cmluZ1xuICAgKi9cbiAgc3RhdGljIHNldE1lZGlhKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubWVkaWFzW25hbWVdID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogcmVzZXQgbWVkaWEgcXVlcnlcbiAgICogQHBhcmFtIG1lZGlhcyB7T2JqZWN0fSBtZWRpYSBxdWVyeSBsaXN0XG4gICAqL1xuICBzdGF0aWMgcmVzZXRNZWRpYXMobWVkaWFzOiBUTWVkaWFzKTogdm9pZCB7XG4gICAgdGhpcy5tZWRpYXMgPSBtZWRpYXM7XG4gIH1cblxuICAvKipcbiAgICogY2hlY2sgdGFyZ2V0IG1lZGlhXG4gICAqIEBwYXJhbSBuYW1lIHtTdHJpbmd9IG1lZGlhIG5hbWVcbiAgICogQHJldHVybiB7Qm9vbH0gaXMgaGl0IHRhcmdldCBtZWRpYVxuICAgKi9cbiAgc3RhdGljIGlzTWVkaWEobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgbWVkaWE6IHN0cmluZyA9IHRoaXMubWVkaWFzW25hbWVdO1xuICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYSkubWF0Y2hlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgaGl0IG1lZGlhIGxpc3RcbiAgICogQHJldHVybiB7QXJyYXl9IGhpdCBtZWRpYSBsaXN0XG4gICAqL1xuICBzdGF0aWMgZ2V0SGl0TWVkaWFzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBoaXRsaXN0OiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgT2JqZWN0LmtleXModGhpcy5tZWRpYXMpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzTWVkaWEobmFtZSkpIHtcbiAgICAgICAgaGl0bGlzdC5wdXNoKG5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBoaXRsaXN0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN5Z01lZGlhcXVlcnk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7Ozs7Ozs7UUFTQTtTQXdEQzs7OztRQTdDUSw0QkFBYyxHQUFyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjs7Ozs7O1FBT00sc0JBQVEsR0FBZixVQUFnQixJQUFZLEVBQUUsS0FBYTtZQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUMzQjs7Ozs7UUFNTSx5QkFBVyxHQUFsQixVQUFtQixNQUFlO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3RCOzs7Ozs7UUFPTSxxQkFBTyxHQUFkLFVBQWUsSUFBWTtZQUN6QixJQUFNLEtBQUssR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDekM7Ozs7O1FBTU0sMEJBQVksR0FBbkI7WUFBQSxpQkFTQztZQVJDLElBQU0sT0FBTyxHQUFhLEVBQUUsQ0FBQztZQUU3QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO2dCQUNwQyxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3BCO2FBQ0YsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxPQUFPLENBQUM7U0FDaEI7O1FBckRjLG9CQUFNLEdBQVk7WUFDL0IsS0FBSyxFQUFFLDhCQUE4QjtZQUNyQyxNQUFNLEVBQUUsb0RBQW9EO1lBQzVELE1BQU0sRUFBRSw4QkFBOEI7U0FDdkMsQ0FBQztRQWtESixvQkFBQztLQXhERDs7Ozs7Ozs7In0=
