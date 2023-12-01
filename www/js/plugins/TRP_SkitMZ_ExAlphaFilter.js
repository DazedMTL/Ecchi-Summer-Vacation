//=============================================================================
// TRP_SkitMZ_ExAlphaFilter.js
//=============================================================================
/*:
 * @target MZ
 * @author Thirop
 * @plugindesc 表情透過時の表示修正。※なるべく下に配置
 * @help
 * AlphaFilterを用いて透過処理を改善
 *
 */
//=============================================================================

(function () {
  "use strict";

  var _Sprite_Picture_initialize = Sprite_Picture.prototype.initialize;
  Sprite_Picture.prototype.initialize = function (pictureId) {
    _Sprite_Picture_initialize.call(this, pictureId);

    this._alphaFilter = null;
    if (this.isBustPicture()) {
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
