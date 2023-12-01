//=============================================================================
// TRP_SkitMZ_MVPatchA.js
//=============================================================================
/*:
 * @author Thirop
 */
//=============================================================================

var Sprite_AnimationMV = Sprite_Animation;

(function () {
  "use strict";

  if (!Sprite._emptyBaseTexture) {
    Sprite._emptyBaseTexture = new PIXI.BaseTexture();
  }

  PluginManager.registerCommand = function () {};

  StorageManager.fsMkdir = function (path) {
    const fs = require("fs");
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
  };
})();
