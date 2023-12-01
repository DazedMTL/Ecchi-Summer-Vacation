//=============================================================================
// TRP_SkitExAlphaFilter.js
//=============================================================================
/*:
 * @author Thirop
 * @plugindesc 表情透過時の表示修正。※なるべく下に配置
 * @help
 * WebGL使用時のみAlphaFilterを用いて透過処理を改善
 *
 */
//=============================================================================

(function () {
  "use strict";

  var pluginName = "TRP_SkitExAlphaFilter";

  (function () {
    if (PIXI.filters.AlphaFilter) return;

    /*!
     * pixi.js - v4.5.4
     * Compiled Wed, 23 Aug 2017 10:08:43 UTC
     *
     * pixi.js is licensed under the MIT License.
     * http://www.opensource.org/licenses/mit-license
     */
    var _default =
      "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}";
    /*!
     * @pixi/filter-alpha - v5.2.4
     * Compiled Sun, 03 May 2020 22:42:17 UTC
     *
     * @pixi/filter-alpha is licensed under the MIT License.
     * http://www.opensource.org/licenses/mit-license
     */

    var fragment$3 =
      "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n";

    /**
     * Simplest filter - applies alpha.
     *
     * Use this instead of Container's alpha property to avoid visual layering of individual elements.
     * AlphaFilter applies alpha evenly across the entire display object and any opaque elements it contains.
     * If elements are not opaque, they will blend with each other anyway.
     *
     * Very handy if you want to use common features of all filters:
     *
     * 1. Assign a blendMode to this filter, blend all elements inside display object with background.
     *
     * 2. To use clipping in display coordinates, assign a filterArea to the same container that has this filter.
     *
     * @class
     * @extends PIXI.Filter
     * @memberof PIXI.filters
     */

    PIXI.filters.AlphaFilter = /*@__PURE__*/ (function (Filter) {
      function AlphaFilter(alpha) {
        if (alpha === void 0) {
          alpha = 1.0;
        }

        Filter.call(this, _default, fragment$3, { uAlpha: 1 });

        this.alpha = alpha;
      }

      if (Filter) {
        AlphaFilter.__proto__ = Filter;
      }
      AlphaFilter.prototype = Object.create(Filter && Filter.prototype);
      AlphaFilter.prototype.constructor = AlphaFilter;

      var prototypeAccessors = { alpha: { configurable: true } };

      /**
       * Coefficient for alpha multiplication
       *
       * @member {number}
       * @default 1
       */
      prototypeAccessors.alpha.get = function () {
        return this.uniforms.uAlpha;
      };

      prototypeAccessors.alpha.set = function (
        value // eslint-disable-line require-jsdoc
      ) {
        this.uniforms.uAlpha = value;
      };

      Object.defineProperties(AlphaFilter.prototype, prototypeAccessors);

      return AlphaFilter;
    })(PIXI.Filter);
  })();

  var _Sprite_Picture_initialize = Sprite_Picture.prototype.initialize;
  Sprite_Picture.prototype.initialize = function (pictureId) {
    _Sprite_Picture_initialize.call(this, pictureId);

    this._alphaFilter = null;
    if (this.isBustPicture() && Graphics.isWebGL()) {
      this._alphaFilter = new PIXI.filters.AlphaFilter();
      var filters = this.filters;
      filters = filters || [];
      filters.push(this._alphaFilter);
      this.filters = filters;
    }
  };

  var _Sprite_Picture_update = Sprite_Picture.prototype.update;
  Sprite_Picture.prototype.update = function () {
    _Sprite_Picture_update.call(this);

    if (this._alphaFilter) {
      this._alphaFilter.alpha = this.opacity / 255;
      this.opacity = 255;
    }
  };
})();
