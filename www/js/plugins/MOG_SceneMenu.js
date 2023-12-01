//=============================================================================
// MOG_SceneMenu.js
//=============================================================================

/*:
 * @plugindesc (v1.2) Modifica a cena de menu principal.
 * @author Moghunter
 *
 * @param Actor Hud X-Axis
 * @desc Posição X-Axis da Hud do personagem.
 * @default 0
 *
 * @param Actor Hud Y-Axis
 * @desc Posição Y-Axis da Hud do personagem.
 * @default 0
 *
 * @param Char X-Axis
 * @desc Posição X-Axis da imagem do personagem.
 * @default 20
 *
 * @param Char Y-Axis
 * @desc Posição Y-Axis da image do personagem.
 * @default 0
 *
 * @param HP Meter X-Axis
 * @desc Posição X-Axis do medidor de HP.
 * @default 17
 *
 * @param HP Meter Y-Axis
 * @desc Posição Y-Axis do medidor de HP.
 * @default 93
 *
 * @param MP Meter X-Axis
 * @desc Posição X-Axis do medidor de MP.
 * @default 17
 *
 * @param MP Meter Y-Axis
 * @desc Posição Y-Axis do medidor de MP.
 * @default 144
 *
 * @param HP Number X-Axis
 * @desc Posição X-Axis do número de HP.
 * @default 100
 *
 * @param HP Number Y-Axis
 * @desc Posição Y-Axis do número de HP.
 * @default 73
 *
 * @param HPMax Number X-Axis
 * @desc Posição X-Axis do número de HP maximo.
 * @default 140
 *
 * @param HPMax Number Y-Axis
 * @desc Posição Y-Axis do número de HP maximo.
 * @default 100
 *
 * @param MP Number X-Axis
 * @desc Posição X-Axis do número de MP.
 * @default 100
 *
 * @param MP Number Y-Axis
 * @desc Posição Y-Axis do número de MP.
 * @default 124
 *
 * @param MPMax Number X-Axis
 * @desc Posição X-Axis do número de MP maximo.
 * @default 140
 *
 * @param MPMax Number Y-Axis
 * @desc Posição Y-Axis do número de MP maximo.
 * @default 151
 *
 * @param Commands X-Axis
 * @desc Posição X-Axis dos comandos.
 * @default 180
 *
 * @param Commands Y-Axis
 * @desc Posição Y-Axis dos comandos.
 * @default 50
 *
 * @param Command Active X-Axis
 * @desc Posição X-Axis do comando selecionado.
 * @default 40
 *
 * @param Command Active Y-Axis
 * @desc Posição Y-Axis do comando selecionado.
 * @default 148
 *
 * @param Com Name Visible
 * @desc Apresentar o nome do comando.
 * @default true
 *
 * @param Com Name X-Axis
 * @desc Posição X-Axis do nome do comando.
 * @default 40
 *
 * @param Com Name Y-Axis
 * @desc Posição Y-Axis do nome do comando.
 * @default 96
 *
 * @param Com Name FontSize
 * @desc Definição do tamanho da fonte do nome do comando.
 * @default 22
 *
 * @param Max Visible Faces
 * @desc Definição da quantidade de faces apresentadas.
 * @default 5
 *
 * @param Face Sel X-Axis
 * @desc Posição X-Axis das faces.
 * @default 240
 *
 * @param Face Sel Y-Axis
 * @desc Posição Y-Axis das faces.
 * @default 128
 *
 * @param Gold X-Axis
 * @desc Posição X-Axis do dinheiro.
 * @default 260
 *
 * @param Gold Y-Axis
 * @desc Posição Y-Axis do dinheiro.
 * @default 580
 *
 * @param Time X-Axis
 * @desc Posição X-Axis do tempo.
 * @default 565
 *
 * @param Time Y-Axis
 * @desc Posição Y-Axis do tempo.
 * @default 60
 *
 * @param Time FontSize
 * @desc Definição do tamanho da fonte do tempo.
 * @default 22
 *
 * @param Location X-Axis
 * @desc Posição X-Axis da localização.
 * @default 450
 *
 * @param Location Y-Axis
 * @desc Posição Y-Axis da localização.
 * @default 575
 *
 * @param Time FontSize
 * @desc Definição do tamanho da fonte da localização.
 * @default 26
 *
 * @param Magic Circle Visible
 * @desc Apresentar o circulo mágico.
 * @default true
 *
 * @param Magic Circle X-Axis
 * @desc Posição X-Axis do círculo mágico.
 * @default 700
 *
 * @param Magic Circle Y-Axis
 * @desc Posição Y-Axis do círculo mágico.
 * @default 140
 *
 * @param Magic Circle Rotation
 * @desc Velocidade de rotação do círculo mágico.
 * @default 0.001
 *
 * @help
 * =============================================================================
 * +++ MOG - Scene Menu (v1.2) +++
 * By Moghunter
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * Modifica a cena de menu principal.
 *
 * =============================================================================
 * UTILIZAÇÃO
 * =============================================================================
 * As imagens do sistema deverão ser gravados na pasta.
 *
 * /img/menus/main/
 *
 * =============================================================================
 * HISTÓRICO
 * =============================================================================
 * (1.2) - Correção do crash caso não usar o plugin do Menu Cursor.
 * (1.1) - Correção do plugin parameter da posição do nome do comando.
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
var Imported = Imported || {};
Imported.MMOG_SceneMenu = true;
var Moghunter = Moghunter || {};

Moghunter.parameters = PluginManager.parameters("MOG_SceneMenu");
Moghunter.scMenu_layoutStatusX = Number(
  Moghunter.parameters["Actor Hud X-Axis"] || 0
);
Moghunter.scMenu_layoutStatusY = Number(
  Moghunter.parameters["Actor Hud Y-Axis"] || 0
);
Moghunter.scMenu_CharX = Number(Moghunter.parameters["Char X-Axis"] || 20);
Moghunter.scMenu_CharY = Number(Moghunter.parameters["Char Y-Axis"] || 0);
Moghunter.scMenu_HPMeterX = Number(
  Moghunter.parameters["HP Meter X-Axis"] || 17
);
Moghunter.scMenu_HPMeterY = Number(
  Moghunter.parameters["HP Meter Y-Axis"] || 93
);
Moghunter.scMenu_MPMeterX = Number(
  Moghunter.parameters["MP Meter X-Axis"] || 17
);
Moghunter.scMenu_MPMeterY = Number(
  Moghunter.parameters["MP Meter Y-Axis"] || 144
);
Moghunter.scMenu_HPNumberX = Number(
  Moghunter.parameters["HP Number X-Axis"] || 100
);
Moghunter.scMenu_HPNumberY = Number(
  Moghunter.parameters["HP Number Y-Axis"] || 73
);
Moghunter.scMenu_HPNumber2X = Number(
  Moghunter.parameters["HPMax Number X-Axis"] || 140
);
Moghunter.scMenu_HPNumber2Y = Number(
  Moghunter.parameters["HPMax Number Y-Axis"] || 100
);
Moghunter.scMenu_MPNumberX = Number(
  Moghunter.parameters["MP Number X-Axis"] || 100
);
Moghunter.scMenu_MPNumberY = Number(
  Moghunter.parameters["MP Number Y-Axis"] || 124
);
Moghunter.scMenu_MPNumber2X = Number(
  Moghunter.parameters["MPMax Number X-Axis"] || 140
);
Moghunter.scMenu_MPNumber2Y = Number(
  Moghunter.parameters["MPMax Number Y-Axis"] || 151
);
Moghunter.scMenu_LVNumberX = Number(
  Moghunter.parameters["LV Number X-Axis"] || 95
);
Moghunter.scMenu_LVNumberY = Number(
  Moghunter.parameters["LV Number Y-Axis"] || 40
);
Moghunter.scMenu_statesX = Number(Moghunter.parameters["States X-Axis"] || 0);
Moghunter.scMenu_statesY = Number(Moghunter.parameters["States Y-Axis"] || 180);
Moghunter.scMenu_NameX = Number(Moghunter.parameters["Name X-Axis"] || 0);
Moghunter.scMenu_NameY = Number(Moghunter.parameters["Name Y-Axis"] || 0);
Moghunter.scMenu_NameFontSize = Number(
  Moghunter.parameters["Name FontSize"] || 23
);
Moghunter.scMenu_ComX = Number(Moghunter.parameters["Commands X-Axis"] || 180);
Moghunter.scMenu_ComY = Number(Moghunter.parameters["Commands Y-Axis"] || 50);
Moghunter.scMenu_ComWX = Number(
  Moghunter.parameters["Command Active X-Axis"] || 40
);
Moghunter.scMenu_ComWY = Number(
  Moghunter.parameters["Command Active Y-Axis"] || 148
);
Moghunter.scMenu_ComNameVisible = String(
  Moghunter.parameters["Com Name Visible"] || "true"
);
Moghunter.scMenu_ComNameX = Number(
  Moghunter.parameters["Com Name X-Axis"] || 40
);
Moghunter.scMenu_ComNameY = Number(
  Moghunter.parameters["Com Name Y-Axis"] || 96
);
Moghunter.scMenu_ComNameFontSize = Number(
  Moghunter.parameters["Com Name FontSize"] || 22
);
Moghunter.scMenu_maxVisibleFaces = Number(
  Moghunter.parameters["Max Visible Faces"] || 5
);
Moghunter.scMenu_FaceSelX = Number(
  Moghunter.parameters["Face Sel X-Axis"] || 240
);
Moghunter.scMenu_FaceSelY = Number(
  Moghunter.parameters["Face Sel Y-Axis"] || 128
);
Moghunter.scMenu_GoldNumberX = Number(
  Moghunter.parameters["Gold X-Axis"] || 260
);
Moghunter.scMenu_GoldNumberY = Number(
  Moghunter.parameters["Gold Y-Axis"] || 580
);
Moghunter.scMenu_playTimeNumberX = Number(
  Moghunter.parameters["Time X-Axis"] || 565
);
Moghunter.scMenu_playTimeNumberY = Number(
  Moghunter.parameters["Time Y-Axis"] || 60
);
Moghunter.scMenu_playTimeNumberFontSize = Number(
  Moghunter.parameters["Time FontSize"] || 24
);
Moghunter.scMenu_locationX = Number(
  Moghunter.parameters["Location X-Axis"] || 450
);
Moghunter.scMenu_locationY = Number(
  Moghunter.parameters["Location Y-Axis"] || 575
);
Moghunter.scMenu_locationFontSize = Number(
  Moghunter.parameters["Location FontSize"] || 26
);
Moghunter.scMenu_MagicCircleV = String(
  Moghunter.parameters["Magic Circle Visible"] || "true"
);
Moghunter.scMenu_MagicCircleX = Number(
  Moghunter.parameters["Magic Circle X-Axis"] || 700
);
Moghunter.scMenu_MagicCircleY = Number(
  Moghunter.parameters["Magic Circle Y-Axis"] || 140
);
Moghunter.scMenu_MagicCircleR = Number(
  Moghunter.parameters["Magic Circle Rotation"] || 0.001
);

//=============================================================================
// ** ImageManager
//=============================================================================

//==============================
// * Main
//==============================
ImageManager.loadMenusMain = function (filename) {
  return this.loadBitmap("img/menus/main/", filename, 0, true);
};

//==============================
// * Main Faces1
//==============================
ImageManager.loadMenusFaces1 = function (filename) {
  return this.loadBitmap("img/menus/faces/faces1/", filename, 0, true);
};

//==============================
// * Main Faces2
//==============================
ImageManager.loadMenusFaces2 = function (filename) {
  return this.loadBitmap("img/menus/faces/faces2/", filename, 0, true);
};

//==============================
// * Main Faces3
//==============================
ImageManager.loadMenusFaces3 = function (filename) {
  return this.loadBitmap("img/menus/faces/faces3/", filename, 0, true);
};

//==============================
// * Main Faces4
//==============================
ImageManager.loadMenusFaces4 = function (filename) {
  return this.loadBitmap("img/menus/faces/faces4/", filename, 0, true);
};

//==============================
// * Main Commands
//==============================
ImageManager.loadMenusMainCommands = function (filename) {
  return this.loadBitmap("img/menus/main/commands/", filename, 0, true);
};

//=============================================================================
// ** Scene Menu
//=============================================================================
var _mog_scmenu_create = Scene_Menu.prototype.create;
Scene_Menu.prototype.create = function () {
  _mog_scmenu_create.call(this);
  this.loadBitmapsMain();
  this.createField();
  this.createMonogatari();
};

//==============================
// * loadBitmapsMain
//==============================
Scene_Menu.prototype.loadBitmapsMain = function () {
  this._facesBitmaps = [];
  for (var i = 0; i < $gameParty.members().length; i++) {
    this._facesBitmaps[i] = ImageManager.loadMenusFaces2(
      "Actor_" + $gameParty.members()[i]._actorId
    );
  }
  this._comBitmaps = [];
  this._comList = this._commandWindow._list;
  for (var i = 0; i < this._comList.length; i++) {
    this._comBitmaps[i] = ImageManager.loadMenusMainCommands(
      this._comList[i].name
    );
  }
  this._arrowImg = ImageManager.loadMenusMain("FaceArrow");
  this._goldImg = ImageManager.loadMenusMain("GoldNumber");
};

//==============================
// * Create Field
//==============================
Scene_Menu.prototype.createField = function () {
  this._field = new Sprite();
  this.addChild(this._field);
};

//==============================
// * Create Monogatari(mod)
//==============================
Scene_Menu.prototype.createMonogatari = function () {
  if (String(Moghunter.scMenu_MagicCircleV) === "true") {
    this.createMagicCircle();
  }
  //	 this.createCharacters();
  //	 this.createLayout();
  //     this.createCharStatus();
  this.createCommands();
  this.createCommandName();
  //	 this.createPlayTime();
  //	 this.createLocation();
};
//==============================
// * Create After
//==============================
Scene_Menu.prototype.createAfter = function () {
  this.createSelection();
  this.createFaceArrow();
  this.createGold();
};

//==============================
// * create Gold Number (mod)
//==============================
Scene_Menu.prototype.createGold = function () {
  this._name = new Sprite(new Bitmap(400, 30));
  this._name.x = Moghunter.scMenu_GoldNumberX;
  this._name.y = Moghunter.scMenu_GoldNumberY;
  this._name.bitmap.fontSize = 18;
  this._name.bitmap.textColor = "#ffffff";
  this._name.bitmap.outlineColor = "#24184f";
  this._name.bitmap.outlineWidth = 0;
  this._name.bitmap.drawText(
    $gameParty.gold() + " 円 ゆうき:" + $gameVariables.value(58),
    0,
    0,
    400,
    30,
    "right"
  );
  this.addChild(this._name);
};

//==============================
// * create Magic Circle
//==============================
Scene_Menu.prototype.createMagicCircle = function () {
  this._magicCircle = new Sprite(ImageManager.loadMenusMain("MagicCircle"));
  this._magicCircle.anchor.x = 0.5;
  this._magicCircle.anchor.y = 0.5;
  this._magicCircle.x = Moghunter.scMenu_MagicCircleX;
  this._magicCircle.y = Moghunter.scMenu_MagicCircleY;
  this._field.addChild(this._magicCircle);
};

//==============================
// * create Magic Circle
//==============================
Scene_Menu.prototype.updateMagicCircle = function () {
  this._magicCircle.rotation += Moghunter.scMenu_MagicCircleR;
};

//==============================
// * play Time Sec
//==============================
Scene_Menu.prototype.playTimeSec = function () {
  return $gameSystem.playtime() % 60;
};

//==============================
// * create Play Time
//==============================
Scene_Menu.prototype.createPlayTime = function () {
  this._playTime = new Sprite(new Bitmap(200, 32));
  this._playTime.x = Moghunter.scMenu_playTimeNumberX;
  this._playTime.y = Moghunter.scMenu_playTimeNumberY;
  this._playTime.bitmap.fontSize = Moghunter.scMenu_playTimeNumberFontSize;
  this._field.addChild(this._playTime);
  this._playTimeSec = this.playTimeSec();
  this.refreshTime();
};

//==============================
// * refresh Time
//==============================
Scene_Menu.prototype.refreshTime = function () {
  this._playTime.bitmap.clear();
  this._playTimeSec = this.playTimeSec();
  this._playTime.bitmap.drawText(
    $gameSystem.playtimeText(),
    0,
    0,
    200,
    32,
    "right"
  );
};

//==============================
// * update Time
//==============================
Scene_Menu.prototype.updateTime = function () {
  if (this._playTimeSec != this.playTimeSec()) {
    this.refreshTime();
  }
};

//==============================
// * create Location
//==============================
Scene_Menu.prototype.createLocation = function () {
  this._location = new Sprite(new Bitmap(260, 32));
  this._location.x = Moghunter.scMenu_locationX;
  this._location.y = Moghunter.scMenu_locationY;
  this._location.bitmap.fontSize = Moghunter.scMenu_locationFontSize;
  var mapName = $gameMap.displayName();
  this._location.bitmap.drawText(mapName, 0, 0, 260, 32, "center");
  this._field.addChild(this._location);
};

//==============================
// * Refresh Number
//==============================
Scene_Menu.prototype.refresh_number = function (sprites, value, img_data, x) {
  numbers = Math.abs(value).toString().split("");
  for (var i = 0; i < sprites.length; i++) {
    sprites[i].visible = false;
    if (i < numbers.length) {
      var n = Number(numbers[i]);
      sprites[i].setFrame(n * img_data[0], 0, img_data[0], img_data[1]);
      var nx = -(img_data[0] * i) + img_data[0] * numbers.length;
      sprites[i].x = x - nx;
      sprites[i].visible = true;
    } else {
      var n = 0;
      sprites[i].setFrame(n * img_data[0], 0, img_data[0], img_data[1]);
      var nx =
        -(img_data[0] * i) + img_data[0] * (sprites.length + numbers.length);
      sprites[i].x = x - nx;
    }
  }
};
//==============================
// * maxMembers
//==============================
Scene_Menu.prototype.maxMembers = function () {
  return Math.min(
    Math.max($gameParty.members().length, 0),
    $gameParty.maxBattleMembers()
  );
};

//==============================
// * Create Characters
//==============================
Scene_Menu.prototype.createCharacters = function () {
  this._characters = [];
  for (var i = 0; i < this.maxMembers(); i++) {
    this._characters[i] = new MBustMenu(
      i,
      $gameParty.members()[i],
      this.maxMembers()
    );
    this._field.addChild(this._characters[i]);
  }
};

//==============================
// * Create Char Status
//==============================
Scene_Menu.prototype.createCharStatus = function () {
  this._charStatus = [];
  for (var i = 0; i < this.maxMembers(); i++) {
    this._charStatus[i] = new MCharStatus(
      i,
      $gameParty.members()[i],
      this.maxMembers()
    );
    this._field.addChild(this._charStatus[i]);
  }
};

//==============================
// * Update
//==============================
var _mog_smenu_update = Scene_Menu.prototype.createGoldWindow;
Scene_Menu.prototype.createGoldWindow = function () {
  _mog_smenu_update.call(this);
  if (this._goldWindow) {
    this._goldWindow.visible = false;
  }
};

//==============================
// * create Layout
//==============================
Scene_Menu.prototype.createLayout = function () {
  this._layout = new Sprite(ImageManager.loadMenusMain("Layout"));
  this._field.addChild(this._layout);
};

//==============================
// * create Commands
//==============================
Scene_Menu.prototype.createCommands = function () {
  this._commands = [];
  this._compos = [];
  this._comzoom = [];
  var h = 0;
  this._comField = new Sprite();
  this._field.addChild(this._comField);
  for (var i = 0; i < this._comList.length; i++) {
    this._commands[i] = new Sprite(this._comBitmaps[i]);
    this._commands[i].anchor.x = 0.5;
    this._commands[i].anchor.y = 0.5;
    this._commands[i].x = -30 - 30 * i;
    this._commands[i].y = 122 + 96 * i;
    this._commands[i].opacity = 255;
    this._compos[i] = [415, 122 + 96 * i];
    this._comzoom[i] = 0;
    this._comField.addChild(this._commands[i]);
    h = h === 0 ? 1 : 0;
  }
};

//==============================
// * update Commands
//==============================
Scene_Menu.prototype.updateCommands = function () {
  // this.updateComField();
  for (var i = 0; i < this._commands.length; i++) {
    if (this.isComEnabled(i)) {
      var nx = this._statusWindow.active
        ? Moghunter.scMenu_ComWX
        : this._compos[i][0];
      var ny = this._statusWindow.active
        ? Moghunter.scMenu_ComWY
        : this._compos[i][1];
      if (this._commandWindow.isCurrentItemEnabled()) {
        this._commands[i].opacity += 20;
      }
      if (this._comzoom[i] === 0 && !this._statusWindow.active) {
        this._commands[i].scale.x += 0.01;
        if (this._commands[i].scale.x >= 1.0) {
          this._commands[i].scale.x = 1.0;
          this._comzoom[i] = 1;
        }
      } else {
        this._commands[i].scale.x -= 0.01;
        if (this._commands[i].scale.x <= 1.0) {
          this._commands[i].scale.x = 1.0;
          this._comzoom[i] = 0;
        }
      }
    } else {
      var nx = this._compos[i][0];
      var ny = this._compos[i][1];
      if (this._commands[i].opacity > 180 || this._statusWindow.active) {
        this._commands[i].opacity -= 10;
        if (this._commands[i].opacity < 180 && !this._statusWindow.active) {
          this._commands[i].opacity = 180;
        }
      }
      if (!this._statusWindow.active && this._commands[i].opacity < 180) {
        this._commands[i].opacity += 10;
        if (this._commands[i].opacity > 180) {
          this._commands[i].opacity = 180;
        }
      }
      if (this._commands[i].scale.x > 1.0) {
        this._commands[i].scale.x -= 0.01;
      }
      this._comzoom[i] = 0;
    }
    this._commands[i].x = this.commandMoveTo(this._commands[i].x, nx);
    this._commands[i].y = this.commandMoveTo(this._commands[i].y, ny);
    this._commands[i].scale.y = this._commands[i].scale.x;
  }
};

//==============================
// * update Com Field
//==============================
Scene_Menu.prototype.updateComField = function () {
  if (!this._statusWindow.active) {
    this._comField.opacity += 15;
    if (this._comField.y < 0) {
      this._comField.y += 3;
      if (this._comField.y > 0) {
        this._comField.y = 0;
      }
    }
  } else {
    this._comField.opacity -= 15;
    if (this._comField.y > -50) {
      this._comField.y -= 3;
      if (this._comField.y < -50) {
        this._comField.y = -50;
      }
    }
  }
};

//==============================
// * is Com Enabled
//==============================
Scene_Menu.prototype.isComEnabled = function (index) {
  if (index != this._commandWindow._index) {
    return false;
  }
  return true;
};

//==============================
// * Command Move To
//==============================
Scene_Menu.prototype.commandMoveTo = function (value, real_value) {
  if (value == real_value) {
    return value;
  }
  var dnspeed = 0.2 + Math.abs(value - real_value) * 0.13;
  if (value > real_value) {
    value -= dnspeed;
    if (value < real_value) {
      value = real_value;
    }
  } else if (value < real_value) {
    value += dnspeed;
    if (value > real_value) {
      value = real_value;
    }
  }
  return Math.floor(value);
};

//==============================
// * create Command Name
//==============================
Scene_Menu.prototype.createCommandName = function () {
  this._commandName = new Sprite(new Bitmap(100, 32));
  this._commandName.bitmap.fontSize = Moghunter.scMenu_ComNameFontSize;
  this._commandNameIndex = -2;
  this._commandNameIndex2 = -2;
  this._field.addChild(this._commandName);
  this._commandName.visible =
    String(Moghunter.scMenu_ComNameVisible) === "true" ? true : false;
};

//==============================
// * update Command Name
//==============================
Scene_Menu.prototype.updateCommandName = function () {
  if (this._statusWindow.active) {
    if (this._commandNameIndex2 != this._statusWindow._index) {
      this.refreshActorName();
    }
  } else {
    if (this._commandNameIndex != this._commandWindow._index) {
      this.refreshCommandName();
    }
  }
  this._commandName.x = this.commandMoveTo(
    this._commandName.x,
    Moghunter.scMenu_ComNameX
  );
  this._commandName.y = this.commandMoveTo(
    this._commandName.y,
    Moghunter.scMenu_ComNameY
  );
  this._commandName.opacity += 10;
};

//==============================
// * refresh Command Name
//==============================
Scene_Menu.prototype.refreshCommandName = function () {
  this._commandNameIndex = this._commandWindow._index;
  this._commandNameIndex2 = -2;
  this._commandName.bitmap.clear();
  this._commandName.bitmap.drawText(
    this._comList[this._commandNameIndex].name,
    0,
    0,
    100,
    32,
    "center"
  );
  this._commandName.x = Moghunter.scMenu_ComNameX - 100;
  this._commandName.y = Moghunter.scMenu_ComNameY;
  this._commandName.opacity = 0;
};

//==============================
// * refresh Actor Name
//==============================
Scene_Menu.prototype.refreshActorName = function () {
  this._commandNameIndex = -2;
  this._commandNameIndex2 = this._statusWindow._index;
  this._commandName.bitmap.clear();
  var actor = $gameParty.members()[this._statusWindow._index];
  if (!actor) {
    return;
  }
  this._commandName.bitmap.drawText(actor.name(), 0, 0, 100, 32, "center");
  this._commandName.x = Moghunter.scMenu_ComNameX - 100;
  this._commandName.y = Moghunter.scMenu_ComNameY;
  this._commandName.opacity = 0;
};

//==============================
// * create Selection
//==============================
Scene_Menu.prototype.createSelection = function () {
  this._selection = [];
  this._selectionPos = [];
  this._selzoom = [];
  this._selMax = Math.min(Math.max(Moghunter.scMenu_maxVisibleFaces, 2), 999);
  this._selField = new Sprite();
  this._field.addChild(this._selField);
  this._selField.opacity = 0;
  this._selField.x = 50;
  for (var i = 0; i < $gameParty.members().length; i++) {
    this._selection[i] = new Sprite(this._facesBitmaps[i]);
    this._selectionPos[i] = [
      Moghunter.scMenu_FaceSelX + (4 + this._facesBitmaps[i].width) * i,
      Moghunter.scMenu_FaceSelY,
    ];
    this._selection[i].anchor.x = 0.5;
    this._selection[i].anchor.y = 0.5;
    this._selection[i].opacity = 160;
    this._selection[i].vsb = false;
    this._selection[i].x = this._selectionPos[i][0];
    this._selection[i].y = this._selectionPos[i][1];
    this._selField.addChild(this._selection[i]);
  }
};

//==============================
// * update Selection
//==============================
Scene_Menu.prototype.updateSelection = function () {
  if (this._statusWindow.active) {
    this._selField.opacity += 15;
    if (this._selField.x > 0) {
      this._selField.x -= 4;
      if (this._selField.x < 0) {
        this._selField.x = 0;
      }
    }
  } else {
    if (this._selField.x < 50) {
      this._selField.x += 4;
      if (this._selField.x > 50) {
        this._selField.x = 50;
      }
    }
    this._selField.opacity -= 15;
  }
  for (var i = 0; i < this._selection.length; i++) {
    if (this._statusWindow._index < this._selMax) {
      var nindex = 0;
      if (i > this._selMax) {
        this._selection[i].vsb = false;
      } else {
        this._selection[i].vsb = true;
      }
    } else {
      var ni = this._statusWindow._index - this._selMax;
      var nindex = (4 + this._facesBitmaps[i].width) * ni;
      if (i < ni || i > ni + this._selMax) {
        this._selection[i].vsb = false;
      } else {
        this._selection[i].vsb = true;
      }
    }
    if (i === this._statusWindow._index) {
      this._selection[i].opacity += 15;
      if (this._selzoom[i] === 0) {
        this._selection[i].scale.x += 0.015;
        if (this._selection[i].scale.x > 1.3) {
          this._selection[i].scale.x = 1.3;
          this._selzoom[i] = 1;
        }
      } else {
        this._selection[i].scale.x -= 0.015;
        if (this._selection[i].scale.x < 1.0) {
          this._selection[i].scale.x = 1.0;
          this._selzoom[i] = 0;
        }
      }
    } else {
      if (!this._selection[i].vsb) {
        this._selection[i].opacity -= 15;
      } else if (this._selection[i].vsb) {
        if (this._selection[i].opacity < 160) {
          this._selection[i].opacity += 15;
          if (this._selection[i].opacity > 160) {
            this._selection[i].opacity = 160;
          }
        }
        if (this._selection[i].opacity > 160) {
          this._selection[i].opacity -= 15;
          if (this._selection[i].opacity < 160) {
            this._selection[i].opacity = 160;
          }
        }
      } else {
        if (this._selection[i].opacity > 160) {
          this._selection[i].opacity -= 10;
          if (this._selection[i].opacity < 160) {
            this._selection[i].opacity = 160;
          }
        }
      }
      this._selzoom[i] = 0;
      this._selection[i].scale.x -= 0.01;
      if (this._selection[i].scale.x < 1.0) {
        this._selection[i].scale.x = 1.0;
      }
    }
    var nx = this._selectionPos[i][0] - nindex;
    var ny = this._selectionPos[i][1];
    this._selection[i].x = this.commandMoveTo(this._selection[i].x, nx);
    this._selection[i].y = this.commandMoveTo(this._selection[i].y, ny);
    this._selection[i].scale.y = this._selection[i].scale.x;
  }
  this.updateArrow();
};

//==============================
// * create Face Arrow
//==============================
Scene_Menu.prototype.createFaceArrow = function () {
  this._arrow = [];
  this._arrowPos = [];
  this._arrowAni = [0, 0];
  for (var i = 0; i < 2; i++) {
    this._arrow[i] = new Sprite(this._arrowImg);
    if (i === 1) {
      this._arrow[i].scale.x = -1.0;
      this._arrowPos[i] = [
        this._selection[0].x +
          (4 + this._arrowImg.width * 2) +
          (4 + this._facesBitmaps[0].width) * this._selMax,
        Moghunter.scMenu_FaceSelY,
      ];
    } else {
      this._arrowPos[i] = [
        this._selection[0].x - (4 + this._arrowImg.width * 2),
        Moghunter.scMenu_FaceSelY,
      ];
    }
    this._arrow[i].anchor.x = 0.5;
    this._arrow[i].anchor.y = 0.5;
    this._arrow[i].x = this._arrowPos[i][0];
    this._arrow[i].y = this._arrowPos[i][1];
    this._selField.addChild(this._arrow[i]);
  }
};

//==============================
// * update Arrow
//==============================
Scene_Menu.prototype.updateArrow = function () {
  this.updateArrowAni();
  for (var i = 0; i < this._arrow.length; i++) {
    if (i === 0) {
      var nx = this._arrowPos[i][0] - this._arrowAni[1];
      this._arrow[i].visible = this.isArrow1Visible();
    } else {
      var nx = this._arrowPos[i][0] + this._arrowAni[1];
      this._arrow[i].visible = this.isArrow2Visible();
    }
    var ny = this._arrowPos[i][1];
    this._arrow[i].x = this.commandMoveTo(this._arrow[i].x, nx);
    this._arrow[i].y = this.commandMoveTo(this._arrow[i].y, ny);
  }
};

//==============================
// * is Arrow1 Visible
//==============================
Scene_Menu.prototype.isArrow1Visible = function () {
  if (this._statusWindow._index <= this._selMax) {
    return false;
  }
  return true;
};

//==============================
// * is Arrow2 Visible
//==============================
Scene_Menu.prototype.isArrow2Visible = function () {
  if (this._statusWindow._index >= this._selection.length - 1) {
    return false;
  }
  if ($gameParty.members().length < this._selMax + 2) {
    return false;
  }
  return true;
};

//==============================
// * update Arrow Ani
//==============================
Scene_Menu.prototype.updateArrowAni = function () {
  this._arrowAni[0]++;
  if (this._arrowAni[0] < 20) {
    this._arrowAni[1]++;
  } else if (this._arrowAni[0] < 40) {
    this._arrowAni[1]--;
  } else {
    this._arrowAni[1] = 0;
    this._arrowAni[0] = 0;
  }
};

//==============================
// * check Touch On Sprites
//==============================
Scene_Menu.prototype.checkTouchOnSprites = function () {
  if (this._statusWindow.active) {
    this.checkTouchSelection();
  } else {
    this.checkTouchCommand();
  }
};

//==============================
// * checkTouchSelection
//==============================
Scene_Menu.prototype.checkTouchSelection = function () {
  for (var i = 0; i < this._selection.length; i++) {
    if (this.isOnSprite(this._selection[i])) {
      this.setTouchSelection(i);
    }
  }
  for (var i = 0; i < this._arrow.length; i++) {
    if (this.isOnSprite(this._arrow[i])) {
      this.setTouchArrow(i);
    }
  }
};

//==============================
// * set Touch Arrow
//==============================
Scene_Menu.prototype.setTouchArrow = function (index) {
  SoundManager.playCursor();
  if (index === 0) {
    this._statusWindow.cursorUp();
  } else {
    this._statusWindow.cursorDown();
  }
};

//==============================
// * set Touch Selection
//==============================
Scene_Menu.prototype.setTouchSelection = function (index) {
  this._statusWindow.select(index);
  this._statusWindow.processOk();
};

//==============================
// * checkTouchCommand
//==============================
Scene_Menu.prototype.checkTouchCommand = function () {
  for (var i = 0; i < this._commands.length; i++) {
    if (this.isOnSprite(this._commands[i])) {
      this.setTouchCommand(i);
    }
  }
};

//==============================
// * set Touch Command
//==============================
Scene_Menu.prototype.setTouchCommand = function (index) {
  this._commandWindow.select(index);
  this._commandWindow.processOk();
};

//==============================
// * on Sprite
//==============================
Scene_Menu.prototype.isOnSprite = function (sprite) {
  var cw = sprite.bitmap.width / 2;
  var ch = sprite.bitmap.height / 2;
  if (sprite.visible === false) {
    return false;
  }
  if (sprite.opacity === 0) {
    return false;
  }
  if (TouchInput.x < sprite.x - cw) {
    return false;
  }
  if (TouchInput.x > sprite.x + cw) {
    return false;
  }
  if (TouchInput.y < sprite.y - ch) {
    return false;
  }
  if (TouchInput.y > sprite.y + ch) {
    return false;
  }
  return true;
};

//==============================
// * update Touch Screen
//==============================
Scene_Menu.prototype.updateTouchScreen = function () {
  if (TouchInput.isTriggered()) {
    this.checkTouchOnSprites();
  }
};

//==============================
// * update Window Status
//==============================
Scene_Menu.prototype.updateWindowStatus = function () {
  this._statusWindow.visible = false;
  this._statusWindow.x = -this._statusWindow.width;
  this._statusWindow.updateScrollRoll();
};

//==============================
// * update
//==============================
var _mog_mono_scmenu_update = Scene_Menu.prototype.update;
Scene_Menu.prototype.update = function () {
  _mog_mono_scmenu_update.call(this);
  if (this._commands) {
    this.updateCommands();
  }
  if (this._commandName) {
    this.updateCommandName();
  }
  if (
    !this._selection &&
    this._facesBitmaps &&
    this._facesBitmaps[0].isReady()
  ) {
    this.createAfter();
  }
  if (this._selection) {
    this.updateSelection();
  }
  if (this._playTime) {
    this.updateTime();
  }
  if (this._magicCircle) {
    this.updateMagicCircle();
  }
  this.updateWindowStatus();
  this.updateTouchScreen();
};

//=============================================================================
// * MBustMenu
//=============================================================================
function MBustMenu() {
  this.initialize.apply(this, arguments);
}

MBustMenu.prototype = Object.create(Sprite.prototype);
MBustMenu.prototype.constructor = MBustMenu;

//==============================
// * Initialize
//==============================
MBustMenu.prototype.initialize = function (index, actor, maxmembers) {
  Sprite.prototype.initialize.call(this);
  this._index = index;
  this._actor = actor;
  this._maxMembers = maxmembers;
  this.createCharaters();
};

//==============================
// * Pos X
//==============================
MBustMenu.prototype.posX = function () {
  var space = Math.floor((Graphics.boxWidth - 32) / this._maxMembers);
  return 16 + space / 2 + space * this._index;
};

//==============================
// * create Characters(mod)
//==============================
MBustMenu.prototype.createCharaters = function () {
  if ($gameVariables.value(8) == 100) {
    this._char = new Sprite(
      ImageManager.loadMenusFaces3(
        "actor_i" +
          this._actor._actorId +
          "_" +
          $gameActors.actor(1)._equips[1]._itemId +
          "_" +
          $gameVariables.value(83)
      )
    );
  } else {
    this._char = new Sprite(
      ImageManager.loadMenusFaces3(
        "actor_" +
          this._actor._actorId +
          "_" +
          $gameActors.actor(1)._equips[1]._itemId +
          "_" +
          $gameVariables.value(83)
      )
    );
  }

  this._char.anchor.x = 0.5;
  this._char.anchor.y = 1.0;
  this._char.x = this.posX() + Moghunter.scMenu_CharX;
  this._char.y = Graphics.boxHeight + Moghunter.scMenu_CharY;
  this._orgX = this._char.x;
  this._char.x -= 50;
  this._wait = 5 + 10 * this._index;
  this._char.opacity = 0;
  this.addChild(this._char);
};

//==============================
// * Update
//==============================
MBustMenu.prototype.update = function () {
  Sprite.prototype.update.call(this);
  if (this._wait > 0) {
    this._wait--;
    return;
  }
  this._char.opacity += 10;
  if (this._char.x < this._orgX) {
    this._char.x += 2;
    if (this._char.x > this._orgX) {
      this._char.x = this._orgX;
    }
  }
};

//=============================================================================
// * MCharStatus
//=============================================================================
function MCharStatus() {
  this.initialize.apply(this, arguments);
}

MCharStatus.prototype = Object.create(Sprite.prototype);
MCharStatus.prototype.constructor = MCharStatus;

//==============================
// * Initialize
//==============================
MCharStatus.prototype.initialize = function (index, actor, maxmembers) {
  Sprite.prototype.initialize.call(this);
  this._index = index;
  this._actor = actor;
  this._maxMembers = maxmembers;
  this.x = 50;
  this._wait = 5 + 5 * this._index;
  this.opacity = 0;
  this.loadBitmaps();
};

//==============================
// * loadBitmaps
//==============================
MCharStatus.prototype.loadBitmaps = function () {
  this._layoutImg = ImageManager.loadMenusMain("LayoutStatus");
  this._numberImg = ImageManager.loadMenusMain("HPNumber");
  this._numberImg2 = ImageManager.loadMenusMain("MPNumber");
  this._numberImg3 = ImageManager.loadMenusMain("LVNumber");
  this._HPMeterImg = ImageManager.loadMenusMain("HPMeter");
  this._MPMeterImg = ImageManager.loadMenusMain("MPMeter");
  this._state_img = ImageManager.loadSystem("IconSet");
};

//==============================
// * Pos X
//==============================
MCharStatus.prototype.posX = function () {
  var space = Math.floor((Graphics.boxWidth - 32) / this._maxMembers);
  return 16 + space / 2 + space * this._index;
};

//==============================
// * create Sprites
//==============================
MCharStatus.prototype.createSprites = function () {
  this.createLayoutStatus();
  this.createHPMeter();
  this.createMPMeter();
  this.createHPNumber();
  this.createMPNumber();
  this.createLVNumber();
  this.createStates();
  this.createName();
  this.createOthers();
  this.createHStatus();
  this.createNextEXP();
};

//==============================
// * Create Name (mod)
//==============================
MCharStatus.prototype.createName = function () {
  this._name = new Sprite(new Bitmap(120, 32));
  this._name.x = this._layout.x + Moghunter.scMenu_NameX;
  this._name.y = this._layout.y + Moghunter.scMenu_NameY + 8;
  this._name.bitmap.fontSize = Moghunter.scMenu_NameFontSize;
  this._name.bitmap.textColor = "#ffffff";
  this._name.bitmap.outlineWidth = 5;
  this._name.bitmap.outlineColor = "#24184f";
  this._name.bitmap.drawText(this._actor.name(), 5, 0, 120, 32, "left");
  this.addChild(this._name);
};

//==============================
// * Create States
//==============================
MCharStatus.prototype.createStates = function () {
  this._states_data = [0, 0, 0];
  this._state_icon = new Sprite(this._state_img);
  this._state_icon.x = this._layout.x + Moghunter.scMenu_statesX;
  this._state_icon.y = this._layout.y + Moghunter.scMenu_statesY;
  this._state_icon.visible = false;
  this.addChild(this._state_icon);
  this.refresh_states();
};

//==============================
// * Create States
//==============================
MCharStatus.prototype.refresh_states = function () {
  this._states_data[0] = 0;
  this._states_data[2] = 0;
  this._state_icon.visible = false;
  if (this._actor.allIcons().length == 0) {
    this._states_data[1] = 0;
    return;
  }
  if (this._actor.allIcons()[this._states_data[1]]) {
    this._states_data[0] = this._actor.allIcons()[this._states_data[1]];
    this._state_icon.visible = true;
    var sx = (this._states_data[0] % 16) * 32;
    var sy = Math.floor(this._states_data[0] / 16) * 32;
    this._state_icon.setFrame(sx, sy, 32, 32);
  }
  this._states_data[1] += 1;
  if (this._states_data[1] >= this._actor.allIcons().length) {
    this._states_data[1] = 0;
  }
};

//==============================
// * Update States
//==============================
MCharStatus.prototype.update_states = function () {
  this._states_data[2] += 1;
  if (this.need_refresh_states()) {
    this.refresh_states();
  }
};

//==============================
// * Need Refresh States
//==============================
MCharStatus.prototype.need_refresh_states = function () {
  if (this._states_data[2] > 60) {
    return true;
  }
  return false;
};

//==============================
// * create HP Meter (mod)
//==============================
MCharStatus.prototype.createHPMeter = function () {
  this._hpMeter = new Sprite(this._HPMeterImg);
  this._hpMeterData = [this._HPMeterImg.width, this._HPMeterImg.height, 0, 0];
  this._hpMeterData[2] = this._hpMeterData[0] * 1;
  this._hpMeterData[3] = 0; //Math.randomInt(this._hpMeterData[2])
  this._hpMeter.x = this._layout.x + Moghunter.scMenu_HPMeterX;
  this._hpMeter.y = this._layout.y + Moghunter.scMenu_HPMeterY;
  this.updateMeter(
    this._hpMeter,
    this._hpMeterData,
    this._actor.hp,
    this._actor.mhp
  );
  this.addChild(this._hpMeter);
};

//==============================
// * create MP Meter (mod)
//==============================
MCharStatus.prototype.createMPMeter = function () {
  this._mpMeter = new Sprite(this._MPMeterImg);
  this._mpMeterData = [this._MPMeterImg.width, this._MPMeterImg.height, 0, 0];
  this._mpMeterData[2] = this._mpMeterData[0] * 1;
  this._mpMeterData[3] = 0; //Math.randomInt(this._mpMeterData[2])
  this._mpMeter.x = this._layout.x + Moghunter.scMenu_MPMeterX;
  this._mpMeter.y = this._layout.y + Moghunter.scMenu_MPMeterY;
  this.updateMeter(
    this._mpMeter,
    this._mpMeterData,
    this._actor.mp,
    this._actor.mmp
  );
  this.addChild(this._mpMeter);
};

//==============================
// * update Meter
//==============================
MCharStatus.prototype.updateMeter = function (sprite, data, v1, v2) {
  var cw = (data[0] * v1) / v2;
  sprite.setFrame(data[3], 0, cw, data[1]);
  data[3] += 0;
  if (data[3] > data[2]) {
    data[3] = 0;
  }
};

//==============================
// * create HStatus(mod)
//==============================
var hstatusfontsize = 15;
var hstatusRfontsize = 20;
var hstatusmargin = 7;

MCharStatus.prototype.createHStatus = function () {
  this._hstatus1 = new Sprite(new Bitmap(300, 40));
  this._hstatus1.x = this._layout.x + 330;
  this._hstatus1.y = 392;
  this._hstatus1.bitmap.fontSize = hstatusfontsize;
  this._hstatus1.bitmap.textColor = "#FFFFFF";
  this._hstatus1.bitmap.outlineWidth = 5;
  this._hstatus1.bitmap.outlineColor = "#24184f";
  this._hstatus1.bitmap.drawText(
    "淫乱度",
    this._hstatus1.bitmap.outlineWidth,
    this._hstatus1.bitmap.outlineWidth,
    300,
    40,
    "left"
  );
  this.addChild(this._hstatus1);

  this._hstatus2 = new Sprite(new Bitmap(300, 40));
  this._hstatus2.x = this._hstatus1.x;
  this._hstatus2.y =
    this._hstatus1.y +
    this._hstatus1.bitmap.fontSize +
    this._hstatus1.bitmap.outlineWidth +
    hstatusmargin;
  this._hstatus2.bitmap.fontSize = hstatusfontsize;
  this._hstatus2.bitmap.textColor = "#FFFFFF";
  this._hstatus2.bitmap.outlineWidth = 5;
  this._hstatus2.bitmap.outlineColor = "#24184f";
  this._hstatus2.bitmap.drawText(
    "性的経験",
    this._hstatus1.bitmap.outlineWidth,
    this._hstatus1.bitmap.outlineWidth,
    300,
    40,
    "left"
  );
  this.addChild(this._hstatus2);

  this._hstatus3 = new Sprite(new Bitmap(300, 40));
  this._hstatus3.x = this._hstatus1.x;
  this._hstatus3.y =
    this._hstatus1.y +
    (this._hstatus1.bitmap.fontSize +
      this._hstatus1.bitmap.outlineWidth +
      hstatusmargin) *
      2;
  this._hstatus3.bitmap.fontSize = hstatusfontsize;
  this._hstatus3.bitmap.textColor = "#FFFFFF";
  this._hstatus3.bitmap.outlineWidth = 5;
  this._hstatus3.bitmap.outlineColor = "#24184f";
  this._hstatus3.bitmap.drawText(
    "最近の性行為",
    this._hstatus1.bitmap.outlineWidth,
    this._hstatus1.bitmap.outlineWidth,
    300,
    40,
    "left"
  );
  this.addChild(this._hstatus3);

  this._hstatus4 = new Sprite(new Bitmap(300, 40));
  this._hstatus4.x = this._hstatus1.x;
  this._hstatus4.y =
    this._hstatus1.y +
    (this._hstatus1.bitmap.fontSize +
      this._hstatus1.bitmap.outlineWidth +
      hstatusmargin) *
      3;
  this._hstatus4.bitmap.fontSize = hstatusfontsize;
  this._hstatus4.bitmap.textColor = "#FFFFFF";
  this._hstatus4.bitmap.outlineWidth = 5;
  this._hstatus4.bitmap.outlineColor = "#24184f";
  this._hstatus4.bitmap.drawText(
    "",
    this._hstatus1.bitmap.outlineWidth,
    this._hstatus1.bitmap.outlineWidth,
    300,
    40,
    "left"
  );
  this.addChild(this._hstatus4);

  this._hstatus5 = new Sprite(new Bitmap(300, 40));
  this._hstatus5.x = this._hstatus1.x;
  this._hstatus5.y =
    this._hstatus1.y +
    (this._hstatus1.bitmap.fontSize +
      this._hstatus1.bitmap.outlineWidth +
      hstatusmargin) *
      4;
  this._hstatus5.bitmap.fontSize = hstatusfontsize;
  this._hstatus5.bitmap.textColor = "#FFFFFF";
  this._hstatus5.bitmap.outlineWidth = 5;
  this._hstatus5.bitmap.outlineColor = "#24184f";
  this._hstatus5.bitmap.drawText(
    "相手",
    this._hstatus1.bitmap.outlineWidth,
    this._hstatus1.bitmap.outlineWidth,
    300,
    40,
    "left"
  );
  this.addChild(this._hstatus5);

  this._hstatus6 = new Sprite(new Bitmap(300, 40));
  this._hstatus6.x = this._hstatus1.x;
  this._hstatus6.y =
    this._hstatus1.y +
    (this._hstatus1.bitmap.fontSize +
      this._hstatus1.bitmap.outlineWidth +
      hstatusmargin) *
      5;
  this._hstatus6.bitmap.fontSize = hstatusfontsize;
  this._hstatus6.bitmap.textColor = "#FFFFFF";
  this._hstatus6.bitmap.outlineWidth = 5;
  this._hstatus6.bitmap.outlineColor = "#24184f";
  this._hstatus6.bitmap.drawText(
    "",
    this._hstatus1.bitmap.outlineWidth,
    this._hstatus1.bitmap.outlineWidth,
    300,
    40,
    "left"
  );
  this.addChild(this._hstatus6);

  this._hstatus7 = new Sprite(new Bitmap(300, 40));
  this._hstatus7.x = this._hstatus1.x;
  this._hstatus7.y =
    this._hstatus1.y +
    (this._hstatus1.bitmap.fontSize +
      this._hstatus1.bitmap.outlineWidth +
      hstatusmargin) *
      6;
  this._hstatus7.bitmap.fontSize = hstatusfontsize;
  this._hstatus7.bitmap.textColor = "#FFFFFF";
  this._hstatus7.bitmap.outlineWidth = 5;
  this._hstatus7.bitmap.outlineColor = "#24184f";
  this._hstatus7.bitmap.drawText(
    "",
    this._hstatus1.bitmap.outlineWidth,
    this._hstatus1.bitmap.outlineWidth,
    300,
    40,
    "left"
  );
  this.addChild(this._hstatus7);

  // ここから数値
  var hstatusR = 165;

  this._hstatusA = new Sprite(new Bitmap(hstatusR, 40));
  this._hstatusA.x = this._hstatus1.x;
  this._hstatusA.y =
    this._hstatus1.y +
    (this._hstatus1.bitmap.fontSize +
      this._hstatus1.bitmap.outlineWidth +
      hstatusmargin) *
      0;
  this._hstatusA.bitmap.fontSize = hstatusRfontsize;
  this._hstatusA.bitmap.textColor = "#FFFFFF";
  this._hstatusA.bitmap.outlineWidth = 5;
  this._hstatusA.bitmap.outlineColor = "#24184f";
  this._hstatusA.bitmap.drawText(
    $gameVariables.value(8),
    0 - this._hstatus1.bitmap.outlineWidth,
    this._hstatus1.bitmap.outlineWidth,
    hstatusR,
    40,
    "right"
  );
  this.addChild(this._hstatusA);

  this._hstatusB = new Sprite(new Bitmap(hstatusR, 40));
  this._hstatusB.x = this._hstatus1.x;
  this._hstatusB.y =
    this._hstatus1.y +
    (this._hstatus1.bitmap.fontSize +
      this._hstatus1.bitmap.outlineWidth +
      hstatusmargin) *
      1;
  this._hstatusB.bitmap.fontSize = hstatusRfontsize;
  this._hstatusB.bitmap.textColor = "#FFFFFF";
  this._hstatusB.bitmap.outlineWidth = 5;
  this._hstatusB.bitmap.outlineColor = "#24184f";
  this._hstatusB.bitmap.drawText(
    $gameVariables.value(37),
    0 - this._hstatus1.bitmap.outlineWidth,
    this._hstatus1.bitmap.outlineWidth,
    hstatusR,
    40,
    "right"
  );
  this.addChild(this._hstatusB);

  this._hstatusC = new Sprite(new Bitmap(hstatusR, 40));
  this._hstatusC.x = this._hstatus1.x;
  this._hstatusC.y =
    this._hstatus1.y +
    (this._hstatus1.bitmap.fontSize +
      this._hstatus1.bitmap.outlineWidth +
      hstatusmargin) *
      2;
  this._hstatusC.bitmap.fontSize = hstatusRfontsize;
  this._hstatusC.bitmap.textColor = "#FFFFFF";
  this._hstatusC.bitmap.outlineWidth = 5;
  this._hstatusC.bitmap.outlineColor = "#24184f";
  this._hstatusC.bitmap.drawText(
    "",
    0 - this._hstatus1.bitmap.outlineWidth,
    this._hstatus1.bitmap.outlineWidth,
    hstatusR,
    40,
    "right"
  );
  this.addChild(this._hstatusC);

  this._hstatusD = new Sprite(new Bitmap(hstatusR, 40));
  this._hstatusD.x = this._hstatus1.x;
  this._hstatusD.y =
    this._hstatus1.y +
    (this._hstatus1.bitmap.fontSize +
      this._hstatus1.bitmap.outlineWidth +
      hstatusmargin) *
      3;
  this._hstatusD.bitmap.fontSize = hstatusRfontsize;
  this._hstatusD.bitmap.textColor = "#FFFFFF";
  this._hstatusD.bitmap.outlineWidth = 5;
  this._hstatusD.bitmap.outlineColor = "#24184f";
  this._hstatusD.bitmap.drawText(
    $gameVariables.value(35),
    0 - this._hstatus1.bitmap.outlineWidth,
    this._hstatus1.bitmap.outlineWidth,
    hstatusR,
    40,
    "right"
  );
  this.addChild(this._hstatusD);

  this._hstatusE = new Sprite(new Bitmap(hstatusR, 40));
  this._hstatusE.x = this._hstatus1.x;
  this._hstatusE.y =
    this._hstatus1.y +
    (this._hstatus1.bitmap.fontSize +
      this._hstatus1.bitmap.outlineWidth +
      hstatusmargin) *
      4;
  this._hstatusE.bitmap.fontSize = hstatusRfontsize;
  this._hstatusE.bitmap.textColor = "#FFFFFF";
  this._hstatusE.bitmap.outlineWidth = 5;
  this._hstatusE.bitmap.outlineColor = "#24184f";
  this._hstatusE.bitmap.drawText(
    "",
    0 - this._hstatus1.bitmap.outlineWidth,
    this._hstatus1.bitmap.outlineWidth,
    hstatusR,
    40,
    "right"
  );
  this.addChild(this._hstatusE);

  this._hstatusF = new Sprite(new Bitmap(hstatusR, 40));
  this._hstatusF.x = this._hstatus1.x;
  this._hstatusF.y =
    this._hstatus1.y +
    (this._hstatus1.bitmap.fontSize +
      this._hstatus1.bitmap.outlineWidth +
      hstatusmargin) *
      5;
  this._hstatusF.bitmap.fontSize = hstatusRfontsize;
  this._hstatusF.bitmap.textColor = "#FFFFFF";
  this._hstatusF.bitmap.outlineWidth = 5;
  this._hstatusF.bitmap.outlineColor = "#24184f";
  this._hstatusF.bitmap.drawText(
    $gameVariables.value(32),
    0 - this._hstatus1.bitmap.outlineWidth,
    this._hstatus1.bitmap.outlineWidth,
    hstatusR,
    40,
    "right"
  );
  this.addChild(this._hstatusF);

  this._hstatusG = new Sprite(new Bitmap(hstatusR, 40));
  this._hstatusG.x = this._hstatus1.x;
  this._hstatusG.y =
    this._hstatus1.y +
    (this._hstatus1.bitmap.fontSize +
      this._hstatus1.bitmap.outlineWidth +
      hstatusmargin) *
      6;
  this._hstatusG.bitmap.fontSize = hstatusRfontsize;
  this._hstatusG.bitmap.textColor = "#FFFFFF";
  this._hstatusG.bitmap.outlineWidth = 5;
  this._hstatusG.bitmap.outlineColor = "#24184f";
  this._hstatusG.bitmap.drawText(
    "",
    0 - this._hstatus1.bitmap.outlineWidth,
    this._hstatus1.bitmap.outlineWidth,
    hstatusR,
    40,
    "right"
  );
  this.addChild(this._hstatusG);
};

//==============================
// * create Others(mod)
//==============================
MCharStatus.prototype.createOthers = function () {
  this._other1 = new Sprite(new Bitmap(150, 40));
  this._other1.x = this._layout.x + Moghunter.scMenu_HPNumberX;
  this._other1.y = this._layout.y + Moghunter.scMenu_HPNumberY;
  this._other1.bitmap.fontSize = 18;
  this._other1.bitmap.textColor = "#ffffff";
  this._other1.bitmap.outlineWidth = 5;
  this._other1.bitmap.outlineColor = "#24184f";
  this._other1.bitmap.drawText("HP", 5, 0, 150, 40, "left");
  this.addChild(this._other1);

  this._other2 = new Sprite(new Bitmap(150, 40));
  this._other2.x = this._layout.x + Moghunter.scMenu_MPNumberX;
  this._other2.y = this._layout.y + Moghunter.scMenu_MPNumberY;
  this._other2.bitmap.fontSize = 18;
  this._other2.bitmap.textColor = "#ffffff";
  this._other2.bitmap.outlineWidth = 5;
  this._other2.bitmap.outlineColor = "#24184f";
  this._other2.bitmap.drawText("MP", 5, 0, 150, 40, "left");
  this.addChild(this._other2);
};

//==============================
// * create Next EXP(mod)
//==============================
MCharStatus.prototype.createNextEXP = function () {
  this._hp_number = new Sprite(new Bitmap(200, 40));
  this._hp_number.x = this._layout.x + Moghunter.scMenu_HPNumberX;
  this._hp_number.y = this._layout.y + 36;
  this._hp_number.bitmap.fontSize = 15;
  this._hp_number.bitmap.textColor = "#ffffff";
  this._hp_number.bitmap.outlineWidth = 5;
  this._hp_number.bitmap.outlineColor = "#24184f";
  this._hp_number.bitmap.drawText(
    "次のレベルまで " + $gameActors._data[1].nextRequiredExp(),
    5,
    0,
    200,
    40,
    "left"
  );
  this.addChild(this._hp_number);
};

//==============================
// * create HP Number(mod)
//==============================
MCharStatus.prototype.createHPNumber = function () {
  this._hp_number = new Sprite(new Bitmap(200, 40));
  this._hp_number.x = this._layout.x + Moghunter.scMenu_HPNumberX;
  this._hp_number.y = this._layout.y + Moghunter.scMenu_HPNumberY;
  this._hp_number.bitmap.fontSize = 18;
  this._hp_number.bitmap.textColor = "#ffffff";
  this._hp_number.bitmap.outlineColor = "#24184f";
  this._hp_number.bitmap.outlineWidth = 5;
  this._hp_number.bitmap.drawText(
    this._actor.hp + " / " + this._actor.mhp,
    -5,
    0,
    200,
    40,
    "right"
  );
  this.addChild(this._hp_number);
};

//==============================
// * create MP Number(mod)
//==============================
MCharStatus.prototype.createMPNumber = function () {
  this._mp_number = new Sprite(new Bitmap(200, 40));
  this._mp_number.x = this._layout.x + Moghunter.scMenu_MPNumberX;
  this._mp_number.y = this._layout.y + Moghunter.scMenu_MPNumberY;
  this._mp_number.bitmap.fontSize = 18;
  this._mp_number.bitmap.textColor = "#ffffff";
  this._mp_number.bitmap.outlineWidth = 5;
  this._mp_number.bitmap.outlineColor = "#24184f";
  this._mp_number.bitmap.drawText(
    this._actor.mp + " / " + this._actor.mmp,
    -5,
    0,
    200,
    40,
    "right"
  );
  this.addChild(this._mp_number);
};

//==============================
// * create LV Number (mod)
//==============================
MCharStatus.prototype.createLVNumber = function () {
  this._name = new Sprite(new Bitmap(140, 32));
  this._name.x = this._layout.x + 15;
  this._name.y = this._layout.y + Moghunter.scMenu_NameY + 12;
  this._name.bitmap.fontSize = 14;
  this._name.bitmap.textColor = "#ffffff";
  this._name.bitmap.outlineWidth = 5;
  this._name.bitmap.outlineColor = "#24184f";
  this._name.bitmap.drawText(
    "LV. " + this._actor.level,
    -5,
    0,
    140,
    32,
    "right"
  );
  this.addChild(this._name);
};

//==============================
// * Refresh Number
//==============================
MCharStatus.prototype.refresh_number = function (sprites, value, img_data, x) {
  if (value > 99999) {
    value = 99999;
  }
  numbers = Math.abs(value).toString().split("");
  for (var i = 0; i < sprites.length; i++) {
    sprites[i].visible = false;
    if (i < numbers.length) {
      var n = Number(numbers[i]);
      sprites[i].setFrame(n * img_data[0], 0, img_data[0], img_data[1]);
      var nx = -(img_data[0] * i) + img_data[0] * numbers.length;
      sprites[i].x = x - nx;
      sprites[i].visible = true;
    } else {
      var n = 0;
      sprites[i].setFrame(n * img_data[0], 0, img_data[0], img_data[1]);
      var nx =
        -(img_data[0] * i) + img_data[0] * (sprites.length + numbers.length);
      sprites[i].x = x - nx;
    }
  }
};

//==============================
// * create Layout Status
//==============================
MCharStatus.prototype.createLayoutStatus = function () {
  this._layout = new Sprite(this._layoutImg);
  this._layout.x = this.posX() - 70 + Moghunter.scMenu_layoutStatusX;
  this._layout.y = Graphics.boxHeight - 280 + Moghunter.scMenu_layoutStatusY;
  this.addChild(this._layout);
};

//==============================
// * Update
//==============================
MCharStatus.prototype.update = function () {
  Sprite.prototype.update.call(this);
  if (!this._actor) {
    return;
  }
  if (!this._hp_number) {
    if (this._numberImg.isReady()) {
      this.createSprites();
    } else {
      return;
    }
  }
  if (this._hpMeter) {
    this.updateMeter(
      this._hpMeter,
      this._hpMeterData,
      this._actor.hp,
      this._actor.mhp
    );
  }
  if (this._mpMeter) {
    this.updateMeter(
      this._mpMeter,
      this._mpMeterData,
      this._actor.mp,
      this._actor.mmp
    );
  }
  if (this._state_icon) {
    this.update_states();
  }
  if (this._wait > 0) {
    this._wait--;
    return;
  }
  this.opacity += 10;
  if (this.x > 0) {
    this.x -= 2;
    if (this.x < 0) {
      this.x = 0;
    }
  }
};

//=============================================================================
// ** Window Menu Command
//=============================================================================

//==============================
// * Update
//==============================
var _mog_menu_wMenuCom_update = Window_MenuCommand.prototype.update;
Window_MenuCommand.prototype.update = function () {
  _mog_menu_wMenuCom_update.call(this);
  this.visible = false;
  this.x = -this.width;
  this.updateScrollRoll();
};

//==============================
// * process Cursor Move
//==============================
Window_MenuCommand.prototype.processCursorMove = function () {
  if (this.isCursorMovable()) {
    var lastIndex = this.index();
    if (Input.isRepeated("down") || Input.isRepeated("right")) {
      this.cursorDown(true);
    }
    if (Input.isRepeated("up") || Input.isRepeated("left")) {
      this.cursorUp(true);
    }
    if (this.index() !== lastIndex) {
      SoundManager.playCursor();
    }
  }
};

//==============================
// * update SCroll Roll
//==============================
Window_MenuCommand.prototype.updateScrollRoll = function () {
  if (this.isOpenAndActive() && this.maxItems() > 0) {
    var srow = this.maxTopRow() === 0 ? 1 : this.maxCols();
    var threshold = 20;
    var idx = this._index;
    if (TouchInput.wheelY >= threshold) {
      this._index += srow;
      if (this._index > this.maxItems() - 1) {
        this._index = this.maxItems() - 1;
      }
      this.select(this._index);
      if (idx != this._index) {
        SoundManager.playCursor();
      }
    }
    if (TouchInput.wheelY <= -threshold) {
      this._index -= srow;
      if (this._index < 0) {
        this._index = 0;
      }
      this.select(this._index);
      if (idx != this._index) {
        SoundManager.playCursor();
      }
    }
  }
};

//=============================================================================
// ** Window MenuStatus
//=============================================================================

//==============================
// * process Cursor Move
//==============================
Window_MenuStatus.prototype.processCursorMove = function () {
  if (this.isCursorMovable()) {
    var lastIndex = this.index();
    if (Input.isRepeated("down") || Input.isRepeated("right")) {
      this.cursorDown();
    }
    if (Input.isRepeated("up") || Input.isRepeated("left")) {
      this.cursorUp();
    }
    if (this.index() !== lastIndex) {
      SoundManager.playCursor();
    }
  }
};

//==============================
// * update SCroll Roll
//==============================
Window_MenuStatus.prototype.updateScrollRoll = function () {
  if (this.isOpenAndActive() && this.maxItems() > 0) {
    var srow = this.maxTopRow() === 0 ? 1 : this.maxCols();
    var threshold = 20;
    var idx = this._index;
    if (TouchInput.wheelY >= threshold) {
      this._index += srow;
      if (this._index > this.maxItems() - 1) {
        this._index = this.maxItems() - 1;
      }
      this.select(this._index);
      if (idx != this._index) {
        SoundManager.playCursor();
      }
    }
    if (TouchInput.wheelY <= -threshold) {
      this._index -= srow;
      if (this._index < 0) {
        this._index = 0;
      }
      this.select(this._index);
      if (idx != this._index) {
        SoundManager.playCursor();
      }
    }
  }
};

//=============================================================================
// ** Scene Menu
//=============================================================================

//==============================
// * Command Formation
//==============================
Scene_Menu.prototype.commandFormation = function () {
  SceneManager.push(Scene_Party);
};

//=============================================================================
// ** Scene Party
//=============================================================================

function Scene_Party() {
  this.initialize.apply(this, arguments);
}

Scene_Party.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Party.prototype.constructor = Scene_Party;

//==============================
// * Initialize
//==============================
Scene_Party.prototype.initialize = function () {
  Scene_MenuBase.prototype.initialize.call(this);
};

//==============================
// * Create
//==============================
Scene_Party.prototype.create = function () {
  Scene_MenuBase.prototype.create.call(this);
  this.createLayout();
  this.createStatusWindow();
};

//==============================
// * Create Layout
//==============================
Scene_Party.prototype.createLayout = function () {};

//==============================
// * Create Status Window
//==============================
Scene_Party.prototype.createStatusWindow = function () {
  this._statusWindow = new Window_MenuStatusM(0, 0);
  this._statusWindow.setFormationMode(true);
  this._statusWindow.selectLast();
  this._statusWindow.activate();
  this._statusWindow.setHandler("ok", this.onFormationOk.bind(this));
  this._statusWindow.setHandler("cancel", this.onFormationCancel.bind(this));
  this.addWindow(this._statusWindow);
};

//==============================
// * on Formation OK
//==============================
Scene_Party.prototype.onFormationOk = function () {
  var index = this._statusWindow.index();
  var actor = $gameParty.members()[index];
  var pendingIndex = this._statusWindow.pendingIndex();
  if (pendingIndex >= 0) {
    $gameParty.swapOrder(index, pendingIndex);
    this._statusWindow.setPendingIndex(-1);
    this._statusWindow.redrawItem(index);
  } else {
    this._statusWindow.setPendingIndex(index);
  }
  this._statusWindow.activate();
};

//==============================
// * on Formation Cancel
//==============================
Scene_Party.prototype.onFormationCancel = function () {
  if (this._statusWindow.pendingIndex() >= 0) {
    this._statusWindow.setPendingIndex(-1);
    this._statusWindow.activate();
  } else {
    SceneManager.pop();
  }
};

//==============================
// * update
//==============================
Scene_Party.prototype.update = function () {
  Scene_MenuBase.prototype.update.call(this);
  this._statusWindow.opacity = 0;
};
//=============================================================================
// ** Window MenuStatusM
//=============================================================================

function Window_MenuStatusM() {
  this.initialize.apply(this, arguments);
}

Window_MenuStatusM.prototype = Object.create(Window_Selectable.prototype);
Window_MenuStatusM.prototype.constructor = Window_MenuStatusM;

//==============================
// * Initialize
//==============================
Window_MenuStatusM.prototype.initialize = function (x, y) {
  var width = this.windowWidth();
  var height = this.windowHeight();
  Window_Selectable.prototype.initialize.call(this, x, y, width, height);
  this._formationMode = false;
  this._pendingIndex = -1;
  this.loadImages();
  this.refresh();
  this.select(0);
};

//==============================
// * windowWidth
//==============================
Window_MenuStatusM.prototype.windowWidth = function () {
  return Graphics.boxWidth;
};

//==============================
// * Window Height
//==============================
Window_MenuStatusM.prototype.windowHeight = function () {
  return Graphics.boxHeight;
};

//==============================
// * maxItems
//==============================
Window_MenuStatusM.prototype.maxItems = function () {
  return $gameParty.size();
};

//==============================
// * item Height
//==============================
Window_MenuStatusM.prototype.itemHeight = function () {
  var clientHeight = this.height - this.padding * 2;
  return Math.floor(clientHeight / this.numVisibleRows());
};

//==============================
// * num Visible Rows
//==============================
Window_MenuStatusM.prototype.numVisibleRows = function () {
  return 4;
};

//==============================
// * loadImages
//==============================
Window_MenuStatusM.prototype.loadImages = function () {
  $gameParty.members().forEach(function (actor) {
    ImageManager.loadFace(actor.faceName());
  }, this);
};

//==============================
// * drawItem
//==============================
Window_MenuStatusM.prototype.drawItem = function (index) {
  this.contents.fontSize = 20;
  this.drawItemBackground(index);
  this.drawItemImage(index);
  this.drawItemStatus(index);
};

//==============================
// * drawItemBackground
//==============================
Window_MenuStatusM.prototype.drawItemBackground = function (index) {
  if (index === this._pendingIndex) {
    var rect = this.itemRect(index);
    var color = this.pendingColor();
    this.changePaintOpacity(false);
    this.contents.fillRect(rect.x, rect.y, rect.width, rect.height, color);
    this.changePaintOpacity(true);
  }
};

//==============================
// * drawItemImage
//==============================
Window_MenuStatusM.prototype.drawItemImage = function (index) {
  var actor = $gameParty.members()[index];
  var rect = this.itemRect(index);
  this.changePaintOpacity(actor.isBattleMember());
  this.drawActorFace(actor, rect.x + 1, rect.y + 1, 144, rect.height - 2);
  this.changePaintOpacity(true);
};

//==============================
// * drawItemStatus
//==============================
Window_MenuStatusM.prototype.drawItemStatus = function (index) {
  var actor = $gameParty.members()[index];
  var rect = this.itemRect(index);
  var x = rect.x + 162;
  var y = rect.y + rect.height / 2 - this.lineHeight() * 1.5;
  var width = rect.width - x - this.textPadding();
  this.changeTextColor(this.systemColor());
  this.drawText("LV", x, y + 32 * 1, 64, "left");
  this.drawText("HP", x, y + 32 * 2, 64, "left");
  this.drawText("MP", x, y + 32 * 3, 80);
  this.drawText("Atk", x + 130, y + 32 * 1, 64, "left");
  this.drawText("Def", x + 130, y + 32 * 2, 64, "left");
  this.drawText("Mat", x + 130, y + 32 * 3, 80);
  this.drawText("Mdf", x + 260, y + 32 * 1, 64, "left");
  this.drawText("Agi", x + 260, y + 32 * 2, 64, "left");
  this.drawText("Luk", x + 260, y + 32 * 3, 80);
  this.changeTextColor(this.normalColor());
  this.drawText(actor.name(), x, y);
  this.drawText(actor.level, x, y + 32 * 1, 80, "right");
  this.drawText(actor.mhp, x, y + 32 * 2, 80, "right");
  this.drawText(actor.mmp, x, y + 32 * 3, 80, "right");
  this.drawText(actor.atk, x + 130, y + 32 * 1, 80, "right");
  this.drawText(actor.def, x + 130, y + 32 * 2, 80, "right");
  this.drawText(actor.mat, x + 130, y + 32 * 3, 80, "right");
  this.drawText(actor.mdf, x + 260, y + 32 * 1, 80, "right");
  this.drawText(actor.agi, x + 260, y + 32 * 2, 80, "right");
  this.drawText(actor.luk, x + 260, y + 32 * 3, 80, "right");
};

//==============================
// * processOK
//==============================
Window_MenuStatusM.prototype.processOk = function () {
  Window_Selectable.prototype.processOk.call(this);
  $gameParty.setMenuActor($gameParty.members()[this.index()]);
};

//==============================
// * Is Current Item Enabled
//==============================
Window_MenuStatusM.prototype.isCurrentItemEnabled = function () {
  if (this._formationMode) {
    var actor = $gameParty.members()[this.index()];
    return actor && actor.isFormationChangeOk();
  } else {
    return true;
  }
};

//==============================
// * selectLast
//==============================
Window_MenuStatusM.prototype.selectLast = function () {
  this.select(0);
};

//==============================
// * Formation Mode
//==============================
Window_MenuStatusM.prototype.formationMode = function () {
  return this._formationMode;
};

//==============================
// * set Formation Mode
//==============================
Window_MenuStatusM.prototype.setFormationMode = function (formationMode) {
  this._formationMode = formationMode;
};

//==============================
// * pending Index
//==============================
Window_MenuStatusM.prototype.pendingIndex = function () {
  return this._pendingIndex;
};

//==============================
// * set Pending Index
//==============================
Window_MenuStatusM.prototype.setPendingIndex = function (index) {
  var lastPendingIndex = this._pendingIndex;
  this._pendingIndex = index;
  this.redrawItem(this._pendingIndex);
  this.redrawItem(lastPendingIndex);
};

if (Imported.MOG_TimeSystem) {
  //==============================
  // * create Time Status
  //==============================
  Scene_Menu.prototype.createTimeStatus = function () {
    $gameSystem._refresh_window_time = false;
  };
}
