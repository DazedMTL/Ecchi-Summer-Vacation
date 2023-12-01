//=============================================================================
// TRP_SkitMZ_MVPatchB.js
//=============================================================================
/*:
 * @author Thirop
 * @plugindesc できるだけ下に配置<ver1.01>
 * @help
 * 【更新履歴】
 * 1.01 2021/7/17  空になったspriteへの非同期処理エラー回避
 *
 */
//=============================================================================

(function () {
  "use strict";

  var parameters = PluginManager.parameters("TRP_SkitMZ_Config");

  var _Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function (command, args) {
    if (command === "skit" && args[0] === "picker") {
      if (!TRP_CORE.skitParameters.useMultiLayer) {
        SoundManager.playBuzzer();
        return;
      }
      TRP_SkitDevPicker.startPickExp(
        args[1],
        args[2],
        args[3] === "true" || args[3] === true
      );
      this.setWaitMode("skit");
    } else {
      _Game_Interpreter_pluginCommand.call(this, command, args);
    }
  };

  //=============================================================================
  // Sprite
  //=============================================================================
  var _Sprite_refresh = Sprite.prototype._refresh;
  Sprite.prototype._refresh = function () {
    if (!!this.texture) {
      _Sprite_refresh.call(this);
    }
  };

  //=============================================================================
  // Game_Picture
  //=============================================================================
  Game_Picture.prototype.initAnimation = function () {
    this._animation = null;
    this._animationOffset = { x: 0, y: 0 };
  };
  Game_Picture.prototype.animation = function () {
    return this._animation;
  };
  Game_Picture.prototype.startAnimation = function () {
    this._animation = null;
  };
  Game_Picture.prototype.requestAnimation = function (animationId, mirror) {
    this._animation = {
      id: animationId,
      mirror: mirror,
    };
  };

  //=============================================================================
  // SkitActor
  //=============================================================================
  SkitActor.prototype.startAnimation = function (animationId, mirror) {
    var animation = $dataAnimations[animationId];
    if (
      !parameters.noAnimationMirror &&
      !(animation && animation.name.contains("<noMirror>"))
    ) {
      mirror = mirror ^ !this.isReverse();
    }

    var picture = this.picture();
    if (picture) {
      picture.requestAnimation(animationId, mirror);
    }
  };

  //=============================================================================
  // Sprite_Picture
  //=============================================================================
  Sprite_Picture.prototype.show = function () {};
  Sprite_Picture.prototype.initAnimation = function () {
    this._animationSprites = [];
    this._effectTarget = this;

    this._animationOffset = { x: 0, y: 0 };
  };

  Sprite_Picture.prototype.updateAnimation = function () {
    var picture = this.picture();
    var animation;
    if (picture) {
      this._animationOffset = picture.animationOffset();
      if ((animation = picture.animation())) {
        var data = $dataAnimations[animation.id];
        this.startAnimation(data, animation.mirror, 0);
        picture.startAnimation();
      }
    }
    this.updateAnimationSprites();
  };

  Sprite_Picture.prototype.updateAnimationSprites = function () {
    if (this._animationSprites.length > 0) {
      var sprites = this._animationSprites.clone();
      this._animationSprites = [];
      for (var i = 0; i < sprites.length; i++) {
        var sprite = sprites[i];
        if (sprite.isPlaying() && this.opacity) {
          this._animationSprites.push(sprite);
        } else {
          sprite.remove();
        }
      }
    }
  };

  Sprite_Picture.prototype.isAnimationPlaying = function () {
    return this._animationSprites.length > 0;
  };

  Sprite_Picture.prototype.startAnimation = function (
    animation,
    mirror,
    delay
  ) {
    var picture = this.picture();
    var sprite = new Sprite_Animation();
    sprite.setup(this._effectTarget, animation, mirror, delay);

    sprite.z = 101;
    this.parent.addChild(sprite);
    this._animationSprites.push(sprite);
  };

  Sprite_Picture.prototype.adjustAnimationSprite = function (
    sprite,
    animation
  ) {
    if (animation.position !== 3) {
      sprite.y += this.height / 2;

      if (this._animationOffset) {
        if (this.scale.x < 0) {
          sprite.x -= this._animationOffset.x || 0;
        } else {
          sprite.x += this._animationOffset.x || 0;
        }
        sprite.y += this._animationOffset.y || 0;
      }
    }
  };

  //=============================================================================
  // Sprite_Animation
  //=============================================================================
  var _Sprite_Animation_updatePosition =
    Sprite_Animation.prototype.updatePosition;
  Sprite_Animation.prototype.updatePosition = function () {
    _Sprite_Animation_updatePosition.call(this);

    if (this._target && this._target instanceof Sprite_Picture) {
      this._target.adjustAnimationSprite(this, this._animation);
    }
  };

  //=============================================================================
  // Window_Message for ExLipSync
  //=============================================================================
  if (Game_Message.prototype.onPronounce) {
    if (!Window_Message.prototype.processNormalCharacter) {
      Window_Message.prototype.processNormalCharacter = function (textState) {
        Window_Base.prototype.processNormalCharacter.call(this, textState);
      };
    }
    var _Window_Message_processNormalCharacter =
      Window_Message.prototype.processNormalCharacter;
    Window_Message.prototype.processNormalCharacter = function (textState) {
      $gameMessage.onPronounce(textState.buffer);
      _Window_Message_processNormalCharacter.call(this, textState);
    };
  }
})();
