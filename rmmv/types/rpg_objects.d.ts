/**
 * -----------------------------------------------------------------------------
 * Game_Temp
 *
 * 不包含在保存数据中的临时数据的游戏对象类。
 */
declare class Game_Temp {
  protected _isPlaytest: boolean;
  protected _commonEventId: number;
  protected _destinationX: number;
  protected _destinationY: number;

  isPlaytest(): boolean;
  reserveCommonEvent(commonEventId: number): void;
  clearCommonEvent(): void;
  isCommonEventReserved(): boolean;
  reservedCommonEvent(): number;
  setDestination(x: number, y: number): void;
  clearDestination(): void;
  isDestinationValid(): boolean;
  destinationX(): number;
  destinationY(): number;
}

/**
 * -----------------------------------------------------------------------------
 * Game_System
 *
 * 系统数据的游戏对象类。
 */
declare class Game_System {
  protected _saveEnabled: boolean;
  protected _menuEnabled: boolean;
  protected _encounterEnabled: boolean;
  protected _formationEnabled: boolean;
  protected _battleCount: number;
  protected _winCount: number;
  protected _escapeCount: number;
  protected _saveCount: number;
  protected _versionId: number;
  protected _framesOnSave: number;
  protected _bgmOnSave: RPG.AudioFile;
  protected _bgsOnSave: RPG.AudioFile;
  protected _windowTone: Array<number>;
  protected _battleBgm: RPG.AudioFile;
  protected _victoryMe: RPG.AudioFile;
  protected _defeatMe: RPG.AudioFile;
  protected _savedBgm: RPG.AudioFile;
  protected _walkingBgm: RPG.AudioFile;

  isJapanese(): boolean;
  isChinese(): boolean;
  isKorean(): boolean;
  isCJK(): boolean;
  isRussian(): boolean;
  isSideView(): boolean;
  isSaveEnabled(): boolean;
  disableSave(): void;
  enableSave(): void;
  isMenuEnabled(): boolean;
  disableMenu(): void;
  enableMenu(): void;
  isEncounterEnabled(): boolean;
  disableEncounter(): void;
  enableEncounter(): void;
  isFormationEnabled(): boolean;
  disableFormation(): void;
  enableFormation(): void;
  battleCount(): number;
  winCount(): number;
  escapeCount(): number;
  saveCount(): number;
  versionId(): number;
  windowTone(): Array<number>;
  setWindowTone(value: Array<number>): void;
  battleBgm(): RPG.AudioFile;
  setBattleBgm(value: RPG.AudioFile): void;
  victoryMe(): RPG.AudioFile;
  setVictoryMe(value: RPG.AudioFile): void;
  defeatMe(): RPG.AudioFile;
  setDefeatMe(value: RPG.AudioFile): void;
  onBattleStart(): void;
  onBattleWin(): void;
  onBattleEscape(): void;
  onBeforeSave(): void;
  onAfterLoad(): void;
  playtime(): number;
  playtimeText(): string;
  saveBgm(): void;
  replayBgm(): void;
  saveWalkingBgm(): void;
  replayWalkingBgm(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Timer
 *
 * 计时器的游戏对象类。
 */
declare class Game_Timer {
  protected _frames: number;
  protected _working: boolean;

  update(sceneActive: boolean): void;
  start(count: number): void;
  stop(): void;
  isWorking(): boolean;
  seconds(): number;
  onExpire(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Message
 *
 * 显示文本或选择等的消息窗口状态游戏对象类。
 */
declare class Game_Message {
  protected _texts: Array<string>;
  protected _choices: Array<string>;
  protected _faceName: string;
  protected _faceIndex: number;
  protected _background: number;
  protected _positionType: number;
  protected _choiceDefaultType: number;
  protected _choiceCancelType: number;
  protected _choiceBackground: number;
  protected _choicePositionType: number;
  protected _numInputVariableId: number;
  protected _numInputMaxDigits: number;
  protected _itemChoiceVariableId: number;
  protected _itemChoiceItypeId: number;
  protected _scrollMode: boolean;
  protected _scrollSpeed: number;
  protected _scrollNoFast: boolean;
  protected _choiceCallback: (n: number) => void;

  clear(): void;
  choices(): Array<string>;
  faceName(): string;
  faceIndex(): number;
  background(): number;
  positionType(): number;
  choiceDefaultType(): number;
  choiceCancelType(): number;
  choiceBackground(): number;
  choicePositionType(): number;
  numInputVariableId(): number;
  numInputMaxDigits(): number;
  itemChoiceVariableId(): number;
  itemChoiceItypeId(): number;
  scrollMode(): boolean;
  scrollSpeed(): number;
  scrollNoFast(): boolean;
  add(text: string): void;
  setFaceImage(faceName: string, faceIndex: number): void;
  setBackground(background: number): void;
  setPositionType(positionType: number): void;
  setChoices(choices: Array<string>, defaultType: number, cancelType: number): void;
  setChoiceBackground(background: number): void;
  setChoicePositionType(positionType: number): void;
  setNumberInput(variableId: number, maxDigits: number): void;
  setItemChoice(variableId: number, itemType: number): void;
  setScroll(speed: number, noFast: boolean): void;
  setChoiceCallback(callback: (n: number) => void): void;
  onChoice(n: number): void;
  hasText(): boolean;
  isChoice(): boolean;
  isNumberInput(): boolean;
  isItemChoice(): boolean;
  isBusy(): boolean;
  newPage(): void;
  allText(): string;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Switches
 *
 * 开关的游戏对象类。
 */
declare class Game_Switches {
  protected _data: Array<boolean>;

  clear(): void;
  value(switchId: number): boolean;
  setValue(switchId: number, value: boolean): void;
  onChange(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Variables
 *
 * 变量的游戏对象类。
 */
declare class Game_Variables {
  protected _data: Array<number>;

  clear(): void;
  value(variableId: number): number;
  setValue(variableId: number, value: number): void;
  onChange(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_SelfSwitches
 *
 * 独立开关的游戏对象类。
 */
declare class Game_SelfSwitches {
  protected _data: { [key: string]: boolean };

  clear(): void;
  value(key: Array<any>): boolean;
  setValue(key: Array<any>, value: boolean): void;
  onChange(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Screen
 *
 * 屏幕效果数据（如色调变化和闪烁）的游戏对象类。
 */
declare class Game_Screen {
  protected _shake: number;
  protected _shakePower: number;
  protected _shakeSpeed: number;
  protected _shakeDuration: number;
  protected _shakeDirection: number;

  protected _zoomX: number;
  protected _zoomY: number;
  protected _zoomScale: number;
  protected _zoomScaleTarget: number;
  protected _zoomDuration: number;

  protected _weatherType: string;
  protected _weatherPower: number;
  protected _weatherPowerTarget: number;
  protected _weatherDuration: number;

  protected _brightness: number;
  protected _fadeOutDuration: number;
  protected _fadeInDuration: number;

  protected _tone: Array<number>;
  protected _toneTarget: Array<number>;
  protected _toneDuration: number;

  protected _flashColor: Array<number>;
  protected _flashDuration: number;

  protected _pictures: Array<Game_Picture>;

  clear(): void;
  onBattleStart(): void;
  brightness(): number;
  tone(): Array<number>;
  flashColor(): Array<number>;
  shake(): number;
  zoomX(): number;
  zoomY(): number;
  zoomScale(): number;
  weatherType(): string;
  weatherPower(): number;
  picture(pictureId: number): Game_Picture;
  realPictureId(pictureId: number): number;
  clearFade(): void;
  clearTone(): void;
  clearFlash(): void;
  clearShake(): void;
  clearZoom(): void;
  clearWeather(): void;
  clearPictures(): void;
  eraseBattlePictures(): void;
  maxPictures(): number;
  startFadeOut(duration: number): void;
  startFadeIn(duration: number): void;
  startTint(tone: Array<number>, duration: number): void;
  startFlash(color: Array<number>, duration: number): void;
  startShake(power: number, speed: number, duration: number): void;
  startZoom(x: number, y: number, scale: number, duration: number): void;
  setZoom(x: number, y: number, scale: number): void;
  changeWeather(type: string, power: number, duration: number): void;
  update(): void;
  updateFadeOut(): void;
  updateFadeIn(): void;
  updateTone(): void;
  updateFlash(): void;
  updateShake(): void;
  updateZoom(): void;
  updateWeather(): void;
  updatePictures(): void;
  startFlashForDamage(): void;
  showPicture(
    pictureId: number,
    name: string,
    origin: number,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: number
  ): void;
  movePicture(
    pictureId: number,
    origin: number,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: number,
    duration: number
  ): void;
  rotatePicture(pictureId: number, speed: number): void;
  tintPicture(pictureId: number, tone: Array<number>, duration: number): void;
  erasePicture(pictureId: number): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Picture
 *
 * 图片的游戏对象类。
 */
declare class Game_Picture {
  protected _name: string;
  protected _origin: number;
  protected _x: number;
  protected _y: number;
  protected _scaleX: number;
  protected _scaleY: number;
  protected _opacity: number;
  protected _blendMode: number;

  protected _targetX: number;
  protected _targetY: number;
  protected _targetScaleX: number;
  protected _targetScaleY: number;
  protected _targetOpacity: number;
  protected _duration: number;

  protected _tone: Array<number>;
  protected _toneTarget: Array<number>;
  protected _toneDuration: number;

  protected _angle: number;
  protected _rotationSpeed: number;

  name(): string;
  origin(): number;
  x(): number;
  y(): number;
  scaleX(): number;
  scaleY(): number;
  opacity(): number;
  blendMode(): number;
  tone(): Array<number>;
  angle(): number;
  initBasic(): void;
  initTarget(): void;
  initTone(): void;
  initRotation(): void;
  show(
    name: string,
    origin: number,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: number
  ): void;
  move(
    origin: number,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: number,
    duration: number
  ): void;
  rotate(speed: number): void;
  tint(tone: Array<number>, duration: number): void;
  erase(): void;
  update(): void;
  updateMove(): void;
  updateTone(): void;
  updateRotation(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Item
 *
 * 处理技能、物品、武器和防具的游戏对象类。这是必需的，因为保存数据不应包含数据库对象本身。
 */
declare class Game_Item {
  protected _dataClass: string;
  protected _itemId: number;

  constructor(item?: RPG.BaseItem);
  isSkill(): boolean;
  isItem(): boolean;
  isUsableItem(): boolean;
  isWeapon(): boolean;
  isArmor(): boolean;
  isEquipItem(): boolean;
  isNull(): boolean;
  itemId(): number;
  object(): RPG.BaseItem;
  setObject(item: RPG.BaseItem): void;
  setEquip(isWeapon: boolean, itemId: number): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Action
 *
 * 战斗行动的游戏对象类。
 */
declare class Game_Action {
  static EFFECT_RECOVER_HP: number;
  static EFFECT_RECOVER_MP: number;
  static EFFECT_GAIN_TP: number;
  static EFFECT_ADD_STATE: number;
  static EFFECT_REMOVE_STATE: number;
  static EFFECT_ADD_BUFF: number;
  static EFFECT_ADD_DEBUFF: number;
  static EFFECT_REMOVE_BUFF: number;
  static EFFECT_REMOVE_DEBUFF: number;
  static EFFECT_SPECIAL: number;
  static EFFECT_GROW: number;
  static EFFECT_LEARN_SKILL: number;
  static EFFECT_COMMON_EVENT: number;
  static SPECIAL_EFFECT_ESCAPE: number;
  static HITTYPE_CERTAIN: number;
  static HITTYPE_PHYSICAL: number;
  static HITTYPE_MAGICAL: number;

  protected _subjectActorId: number;
  protected _subjectEnemyIndex: number;
  protected _targetIndex: number;
  protected _forcing: boolean;
  protected _item: Game_Item;

  constructor(subject: Game_Battler, forcing: boolean);

  clear(): void;
  setSubject(subject: Game_Battler): void;
  subject(): Game_Battler;
  friendsUnit(): Game_Unit;
  opponentsUnit(): Game_Unit;
  setEnemyAction(action: RPG.Enemy.Action): void;
  setAttack(): void;
  setGuard(): void;
  setSkill(skillId: number): void;
  setItem(itemId: number): void;
  setItemObject(object: RPG.UsableItem): void;
  setTarget(targetIndex: number): void;
  item(): RPG.UsableItem;
  isSkill(): boolean;
  isItem(): boolean;
  numRepeats(): number;
  checkItemScope(list: Array<number>): boolean;
  isForOpponent(): boolean;
  isForFriend(): boolean;
  isForDeadFriend(): boolean;
  isForUser(): boolean;
  isForOne(): boolean;
  isForRandom(): boolean;
  isForAll(): boolean;
  needsSelection(): boolean;
  numTargets(): number;
  checkDamageType(list: Array<number>): boolean;
  isHpEffect(): boolean;
  isMpEffect(): boolean;
  isDamage(): boolean;
  isRecover(): boolean;
  isDrain(): boolean;
  isHpRecover(): boolean;
  isMpRecover(): boolean;
  isCertainHit(): boolean;
  isPhysical(): boolean;
  isMagical(): boolean;
  isAttack(): boolean;
  isGuard(): boolean;
  isMagicSkill(): boolean;
  decideRandomTarget(): void;
  setConfusion(): void;
  prepare(): void;
  isValid(): boolean;
  speed(): number;
  makeTargets(): Array<Game_Battler>;
  repeatTargets(targets: Array<Game_Battler>): Array<Game_Battler>;
  confusionTarget(): Game_Battler;
  targetsForOpponents(): Array<Game_Battler>;
  targetsForFriends(): Array<Game_Battler>;
  evaluate(): number;
  itemTargetCandidates(): Array<Game_Battler>;
  evaluateWithTarget(target: Game_Battler): number;
  testApply(target: Game_Battler): boolean;
  hasItemAnyValidEffects(target: Game_Battler): boolean;
  testItemEffect(target: Game_Battler, effect: RPG.Effect): boolean;
  itemCnt(target: Game_Battler): number;
  itemMrf(target: Game_Battler): number;
  itemHit(target: Game_Battler): number;
  itemEva(target: Game_Battler): number;
  itemCri(target: Game_Battler): number;
  apply(target: Game_Battler): void;
  makeDamageValue(target: Game_Battler, critical: boolean): number;
  evalDamageFormula(target: Game_Battler): number;
  calcElementRate(target: Game_Battler): number;
  elementsMaxRate(target: Game_Battler, elements: Array<number>): number;
  applyCritical(damage: number): number;
  applyVariance(damage: number, variance: number): number;
  applyGuard(damage: number, target: Game_Battler): number;
  executeDamage(target: Game_Battler, value: number): void;
  executeHpDamage(target: Game_Battler, value: number): void;
  executeMpDamage(target: Game_Battler, value: number): void;
  gainDrainedHp(value: number): void;
  gainDrainedMp(value: number): void;
  applyItemEffect(target: Game_Battler, effect: RPG.Effect): void;
  itemEffectRecoverHp(target: Game_Battler, effect: RPG.Effect): void;
  itemEffectRecoverMp(target: Game_Battler, effect: RPG.Effect): void;
  itemEffectGainTp(target: Game_Battler, effect: RPG.Effect): void;
  itemEffectAddState(target: Game_Battler, effect: RPG.Effect): void;
  itemEffectAddAttackState(target: Game_Battler, effect: RPG.Effect): void;
  itemEffectAddNormalState(target: Game_Battler, effect: RPG.Effect): void;
  itemEffectRemoveState(target: Game_Battler, effect: RPG.Effect): void;
  itemEffectAddBuff(target: Game_Battler, effect: RPG.Effect): void;
  itemEffectAddDebuff(target: Game_Battler, effect: RPG.Effect): void;
  itemEffectRemoveBuff(target: Game_Battler, effect: RPG.Effect): void;
  itemEffectRemoveDebuff(target: Game_Battler, effect: RPG.Effect): void;
  itemEffectSpecial(target: Game_Battler, effect: RPG.Effect): void;
  itemEffectGrow(target: Game_Battler, effect: RPG.Effect): void;
  itemEffectLearnSkill(target: Game_Battler, effect: RPG.Effect): void;
  itemEffectCommonEvent(target: Game_Battler, effect: RPG.Effect): void;
  makeSuccess(target: Game_Battler): void;
  applyItemUserEffect(target: Game_Battler): void;
  lukEffectRate(target: Game_Battler): number;
  applyGlobal(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_ActionResult
 *
 * 战斗行动结果的游戏对象类。为了方便起见，此类中的所有成员变量都是公共的。
 */
declare class Game_ActionResult {
  used: boolean;
  missed: boolean;
  evaded: boolean;
  physical: boolean;
  drain: boolean;
  critical: boolean;
  success: boolean;
  hpAffected: boolean;
  hpDamage: number;
  mpDamage: number;
  tpDamage: number;
  addedStates: Array<number>;
  removedStates: Array<number>;
  addedBuffs: Array<number>;
  addedDebuffs: Array<number>;
  removedBuffs: Array<number>;

  clear(): void;
  addedStateObjects(): Array<RPG.State>;
  removedStateObjects(): Array<RPG.State>;
  isStatusAffected(): boolean;
  isHit(): boolean;
  isStateAdded(stateId: number): boolean;
  pushAddedState(stateId: number): void;
  isStateRemoved(stateId: number): boolean;
  pushRemovedState(stateId: number): void;
  isBuffAdded(paramId: number): boolean;
  pushAddedBuff(paramId: number): void;
  isDebuffAdded(paramId: number): boolean;
  pushAddedDebuff(paramId: number): void;
  isBuffRemoved(paramId: number): boolean;
  pushRemovedBuff(paramId: number): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_BattlerBase
 *
 * Game_Battler 的父类。它主要包含参数计算。
 */
declare class Game_BattlerBase {
  static TRAIT_ELEMENT_RATE: number;
  static TRAIT_DEBUFF_RATE: number;
  static TRAIT_STATE_RATE: number;
  static TRAIT_STATE_RESIST: number;
  static TRAIT_PARAM: number;
  static TRAIT_XPARAM: number;
  static TRAIT_SPARAM: number;
  static TRAIT_ATTACK_ELEMENT: number;
  static TRAIT_ATTACK_STATE: number;
  static TRAIT_ATTACK_SPEED: number;
  static TRAIT_ATTACK_TIMES: number;
  static TRAIT_STYPE_ADD: number;
  static TRAIT_STYPE_SEAL: number;
  static TRAIT_SKILL_ADD: number;
  static TRAIT_SKILL_SEAL: number;
  static TRAIT_EQUIP_WTYPE: number;
  static TRAIT_EQUIP_ATYPE: number;
  static TRAIT_EQUIP_LOCK: number;
  static TRAIT_EQUIP_SEAL: number;
  static TRAIT_SLOT_TYPE: number;
  static TRAIT_ACTION_PLUS: number;
  static TRAIT_SPECIAL_FLAG: number;
  static TRAIT_COLLAPSE_TYPE: number;
  static TRAIT_PARTY_ABILITY: number;
  static FLAG_ID_AUTO_BATTLE: number;
  static FLAG_ID_GUARD: number;
  static FLAG_ID_SUBSTITUTE: number;
  static FLAG_ID_PRESERVE_TP: number;
  static ICON_BUFF_START: number;
  static ICON_DEBUFF_START: number;

  protected _hp: number;
  protected _mp: number;
  protected _tp: number;
  protected _hidden: boolean;

  protected _paramPlus: Array<number>;
  protected _states: Array<number>;
  protected _stateTurns: { [stateId: number]: number };
  protected _buffs: Array<number>;
  protected _buffTurns: Array<number>;

  /** [只读] 生命值 */
  hp: number;
  /** [只读] 魔法值 */
  mp: number;
  /** [只读] 战术点 */
  tp: number;
  /** [只读] 最大生命值 */
  mhp: number;
  /** [只读] 最大魔法值 */
  mmp: number;
  /** [只读] 攻击力 */
  atk: number;
  /** [只读] 防御力 */
  def: number;
  /** [只读] 魔法攻击力 */
  mat: number;
  /** [只读] 魔法防御力 */
  mdf: number;
  /** [只读] 敏捷 */
  agi: number;
  /** [只读] 幸运 */
  luk: number;
  /** [只读] 命中率 */
  hit: number;
  /** [只读] 回避率 */
  eva: number;
  /** [只读] 暴击率 */
  cri: number;
  /** [只读] 暴击回避率 */
  cev: number;
  /** [只读] 魔法回避率 */
  mev: number;
  /** [只读] 魔法反射率 */
  mrf: number;
  /** [只读] 反击率 */
  cnt: number;
  /** [只读] 生命值再生率 */
  hrg: number;
  /** [只读] 魔法值再生率 */
  mrg: number;
  /** [只读] 战术点再生率 */
  trg: number;
  /** [只读] 目标率 */
  tgr: number;
  /** [只读] 防御效果率 */
  grd: number;
  /** [只读] 恢复效果率 */
  rec: number;
  /** [只读] 药物学 */
  pha: number;
  /** [只读] 魔法值消耗率 */
  mcr: number;
  /** [只读] 战术点充能率 */
  tcr: number;
  /** [只读] 物理伤害率 */
  pdr: number;
  /** [只读] 魔法伤害率 */
  mdr: number;
  /** [只读] 地板伤害率 */
  fdr: number;
  /** [只读] 经验值率 */
  exr: number;

  initMembers(): void;
  clearParamPlus(): void;
  clearStates(): void;
  eraseState(stateId: number): void;
  isStateAffected(stateId: number): boolean;
  isDeathStateAffected(): boolean;
  deathStateId(): number;
  resetStateCounts(stateId: number): void;
  isStateExpired(stateId: number): boolean;
  updateStateTurns(): void;
  clearBuffs(): void;
  eraseBuff(paramId: number): void;
  buffLength(): number;
  buff(paramId: number): number;
  isBuffAffected(paramId: number): boolean;
  isDebuffAffected(paramId: number): boolean;
  isBuffOrDebuffAffected(paramId: number): boolean;
  isMaxBuffAffected(paramId: number): boolean;
  isMaxDebuffAffected(paramId: number): boolean;
  increaseBuff(paramId: number): void;
  decreaseBuff(paramId: number): void;
  overwriteBuffTurns(paramId: number, turns: number): void;
  isBuffExpired(paramId: number): boolean;
  updateBuffTurns(): void;
  die(): void;
  revive(): void;
  states(): Array<RPG.State>;
  stateIcons(): Array<number>;
  buffIcons(): Array<number>;
  buffIconIndex(buffLevel: number, paramId: number): number;
  allIcons(): Array<number>;
  traitObjects(): Array<any>;
  allTraits(): Array<RPG.Trait>;
  traits(code: number): Array<RPG.Trait>;
  traitsWithId(code: number, id: number): Array<RPG.Trait>;
  traitsPi(code: number, id: number): number;
  traitsSum(code: number, id: number): number;
  traitsSumAll(code: number): number;
  traitsSet(code: number): Array<number>;
  paramBase(paramId: number): number;
  paramPlus(paramId: number): number;
  paramMin(paramId: number): number;
  paramMax(paramId: number): number;
  paramRate(paramId: number): number;
  paramBuffRate(paramId: number): number;
  param(paramId: number): number;
  xparam(xparamId: number): number;
  sparam(sparamId: number): number;
  elementRate(elementId: number): number;
  debuffRate(paramId: number): number;
  stateRate(stateId: number): number;
  stateResistSet(): Array<number>;
  isStateResist(stateId: number): boolean;
  attackElements(): Array<number>;
  attackStates(): Array<number>;
  attackStatesRate(stateId: number): number;
  attackSpeed(): number;
  attackTimesAdd(): number;
  addedSkillTypes(): Array<number>;
  isSkillTypeSealed(stypeId: number): boolean;
  addedSkills(): Array<number>;
  isSkillSealed(skillId: number): boolean;
  isEquipWtypeOk(wtypeId: number): boolean;
  isEquipAtypeOk(atypeId: number): boolean;
  isEquipTypeLocked(etypeId: number): boolean;
  isEquipTypeSealed(etypeId: number): boolean;
  slotType(): number;
  isDualWield(): boolean;
  actionPlusSet(): Array<number>;
  specialFlag(flagId: number): boolean;
  collapseType(): number;
  partyAbility(abilityId: number): boolean;
  isAutoBattle(): boolean;
  isGuard(): boolean;
  isSubstitute(): boolean;
  isPreserveTp(): boolean;
  addParam(paramId: number, value: number): void;
  setHp(hp: number): void;
  setMp(mp: number): void;
  setTp(tp: number): void;
  maxTp(): number;
  refresh(): void;
  recoverAll(): void;
  hpRate(): number;
  mpRate(): number;
  tpRate(): number;
  hide(): void;
  appear(): void;
  isHidden(): boolean;
  isAppeared(): boolean;
  isDead(): boolean;
  isAlive(): boolean;
  isDying(): boolean;
  isRestricted(): boolean;
  canInput(): boolean;
  canMove(): boolean;
  isConfused(): boolean;
  confusionLevel(): number;
  isActor(): boolean;
  isEnemy(): boolean;
  sortStates(): void;
  restriction(): number;
  addNewState(stateId: number): void;
  onRestrict(): void;
  mostImportantStateText(): string;
  stateMotionIndex(): number;
  stateOverlayIndex(): number;
  isSkillWtypeOk(skill: RPG.Skill): boolean;
  skillMpCost(skill: RPG.Skill): number;
  skillTpCost(skill: RPG.Skill): number;
  canPaySkillCost(skill: RPG.Skill): boolean;
  paySkillCost(skill: RPG.Skill): void;
  isOccasionOk(item: RPG.UsableItem): boolean;
  meetsUsableItemConditions(item: RPG.UsableItem): boolean;
  meetsSkillConditions(skill: RPG.Skill): boolean;
  meetsItemConditions(item: RPG.Item): boolean;
  canUse(item: RPG.UsableItem): boolean;
  canEquip(item: RPG.EquipItem): boolean;
  canEquipWeapon(item: RPG.EquipItem): boolean;
  canEquipArmor(item: RPG.EquipItem): boolean;
  attackSkillId(): number;
  guardSkillId(): number;
  canAttack(): boolean;
  canGuard(): boolean;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Battler
 *
 * Game_Actor 和 Game_Enemy 的父类。它包含精灵和行动的方法。
 */
declare class Game_Battler extends Game_BattlerBase {
  protected _actions: Array<Game_Action>;
  protected _speed: number;
  protected _result: Game_ActionResult;
  protected _actionState: string;
  protected _lastTargetIndex: number;
  protected _animations: Array<MV.BattlerAnimation>;
  protected _damagePopup: boolean;
  protected _effectType: string;
  protected _motionType: string;
  protected _weaponImageId: number;
  protected _motionRefresh: boolean;
  protected _selected: boolean;

  name(): string;
  battlerName(): string;
  index(): number;
  friendsUnit(): Game_Unit;
  opponentsUnit(): Game_Unit;
  clearAnimations(): void;
  clearDamagePopup(): void;
  clearWeaponAnimation(): void;
  clearEffect(): void;
  clearMotion(): void;
  requestEffect(effectType: string): void;
  requestMotion(motionType: string): void;
  requestMotionRefresh(): void;
  select(): void;
  deselect(): void;
  isAnimationRequested(): boolean;
  isDamagePopupRequested(): boolean;
  isEffectRequested(): boolean;
  isMotionRequested(): boolean;
  isWeaponAnimationRequested(): boolean;
  isMotionRefreshRequested(): boolean;
  isSelected(): boolean;
  effectType(): string;
  motionType(): string;
  weaponImageId(): number;
  shiftAnimation(): MV.BattlerAnimation;
  startAnimation(animationId: number, mirror: boolean, delay: number): void;
  startDamagePopup(): void;
  startWeaponAnimation(weaponImageId: number): void;
  action(index: number): Game_Action;
  setAction(index: number, action: Game_Action): void;
  numActions(): number;
  clearActions(): void;
  result(): Game_ActionResult;
  clearResult(): void;
  refresh(): void;
  addState(stateId: number): void;
  isStateAddable(stateId: number): boolean;
  isStateRestrict(stateId: number): boolean;
  onRestrict(): void;
  removeState(stateId: number): void;
  escape(): void;
  addBuff(paramId: number, turns: number): void;
  addDebuff(paramId: number, turns: number): void;
  removeBuff(paramId: number): void;
  removeBattleStates(): void;
  removeAllBuffs(): void;
  removeStatesAuto(timing: number): void;
  removeBuffsAuto(): void;
  removeStatesByDamage(): void;
  makeActionTimes(): number;
  makeActions(): void;
  speed(): number;
  makeSpeed(): void;
  currentAction(): Game_Action;
  removeCurrentAction(): void;
  setLastTarget(target: Game_Battler): void;
  forceAction(skillId: number, targetIndex: number): void;
  useItem(item: RPG.UsableItem): void;
  consumeItem(item: RPG.UsableItem): void;
  gainHp(value: number): void;
  gainMp(value: number): void;
  gainTp(value: number): void;
  gainSilentTp(value: number): void;
  initTp(): void;
  clearTp(): void;
  chargeTpByDamage(damageRate: number): void;
  regenerateHp(): void;
  maxSlipDamage(): number;
  regenerateMp(): void;
  regenerateTp(): void;
  regenerateAll(): void;
  onBattleStart(): void;
  onAllActionsEnd(): void;
  onTurnEnd(): void;
  onBattleEnd(): void;
  onDamage(value: number): void;
  setActionState(actionState: string): void;
  isUndecided(): boolean;
  isInputting(): boolean;
  isWaiting(): boolean;
  isActing(): boolean;
  isChanting(): boolean;
  isGuardWaiting(): boolean;
  performActionStart(action: Game_Action): void;
  performAction(action: Game_Action): void;
  performActionEnd(): void;
  performDamage(): void;
  performMiss(): void;
  performRecovery(): void;
  performEvasion(): void;
  performMagicEvasion(): void;
  performCounter(): void;
  performReflection(): void;
  performSubstitute(target: Game_Battler): void;
  performCollapse(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Actor
 *
 * 角色的游戏对象类。
 */
declare class Game_Actor extends Game_Battler {
  protected _actorId: number;
  protected _name: string;
  protected _nickname: string;
  protected _profile: string;
  protected _classId: number;
  protected _level: number;
  protected _characterName: string;
  protected _characterIndex: number;
  protected _faceName: string;
  protected _faceIndex: number;
  protected _battlerName: string;
  protected _exp: { [classId: number]: number };
  protected _skills: Array<number>;
  protected _equips: Array<Game_Item>;
  protected _actionInputIndex: number;
  protected _lastMenuSkill: Game_Item;
  protected _lastBattleSkill: Game_Item;
  protected _lastCommandSymbol: string;
  protected _stateSteps: { [stateId: number]: number };

  /** [只读] */
  level: number;

  constructor(actorId: number);

  setup(actorId: number): void;
  actorId(): number;
  actor(): RPG.Actor;
  setName(name: string): void;
  nickname(): string;
  setNickname(nickname: string): void;
  profile(): string;
  setProfile(profile: string): void;
  faceName(): string;
  faceIndex(): number;
  clearStates(): void;
  eraseState(stateId: number): void;
  resetStateCounts(stateId: number): void;
  initImages(): void;
  expForLevel(level: number): number;
  initExp(): void;
  currentExp(): number;
  currentLevelExp(): number;
  nextLevelExp(): number;
  nextRequiredExp(): number;
  maxLevel(): number;
  isMaxLevel(): boolean;
  initSkills(): void;
  initEquips(equips: Array<number>): void;
  equipSlots(): Array<number>;
  equips(): Array<RPG.EquipItem>;
  weapons(): Array<RPG.Weapon>;
  armors(): Array<RPG.Armor>;
  hasWeapon(weapon: RPG.Weapon): boolean;
  hasArmor(armor: RPG.Armor): boolean;
  isEquipChangeOk(slotId: number): boolean;
  changeEquip(slotId: number, item: RPG.EquipItem): void;
  forceChangeEquip(slotId: number, item: RPG.EquipItem): void;
  tradeItemWithParty(newItem: RPG.EquipItem, oldItem: RPG.EquipItem): boolean;
  changeEquipById(etypeId: number, itemId: number): void;
  isEquipped(item: RPG.EquipItem): boolean;
  discardEquip(item: RPG.EquipItem): void;
  releaseUnequippableItems(forcing: boolean): void;
  clearEquipments(): void;
  optimizeEquipments(): void;
  bestEquipItem(slotId: number): RPG.EquipItem;
  calcEquipItemPerformance(item: RPG.EquipItem): number;
  isSkillWtypeOk(skill: RPG.Skill): boolean;
  isWtypeEquipped(wtypeId: number): boolean;
  refresh(): void;
  friendsUnit(): Game_Party;
  opponentsUnit(): Game_Troop;
  isBattleMember(): boolean;
  isFormationChangeOk(): boolean;
  currentClass(): RPG.Class;
  isClass(gameClass: RPG.Class): boolean;
  skills(): Array<RPG.Skill>;
  usableSkills(): Array<RPG.Skill>;
  attackElements(): Array<number>;
  hasNoWeapons(): boolean;
  bareHandsElementId(): number;
  attackAnimationId1(): number;
  attackAnimationId2(): number;
  bareHandsAnimationId(): number;
  changeExp(exp: number, show: boolean): void;
  levelUp(): void;
  levelDown(): void;
  findNewSkills(lastSkills: Array<RPG.Skill>): Array<RPG.Skill>;
  displayLevelUp(newSkills: Array<RPG.Skill>): void;
  gainExp(exp: number): void;
  finalExpRate(): number;
  benchMembersExpRate(): number;
  shouldDisplayLevelUp(): boolean;
  changeLevel(level: number, show: boolean): void;
  learnSkill(skillId: number): void;
  forgetSkill(skillId: number): void;
  isLearnedSkill(skillId: number): boolean;
  changeClass(classId: number, keepExp: boolean): void;
  setCharacterImage(characterName: string, characterIndex: number): void;
  setFaceImage(faceName: string, faceIndex: number): void;
  setBattlerImage(battlerName: string): void;
  isSpriteVisible(): boolean;
  startAnimation(animationId: number, mirror: boolean, delay: number): void;
  performAttack(): void;
  performVictory(): void;
  performEscape(): void;
  makeActionList(): Array<Game_Action>;
  makeAutoBattleActions(): void;
  makeConfusionActions(): void;
  onPlayerWalk(): void;
  updateStateSteps(state: RPG.State): void;
  showAddedStates(): void;
  showRemovedStates(): void;
  stepsForTurn(): number;
  turnEndOnMap(): void;
  checkFloorEffect(): void;
  executeFloorDamage(): void;
  basicFloorDamage(): number;
  maxFloorDamage(): number;
  performMapDamage(): void;
  clearActions(): void;
  inputtingAction(): Game_Action;
  selectNextCommand(): boolean;
  selectPreviousCommand(): boolean;
  lastMenuSkill(): RPG.Skill;
  setLastMenuSkill(skill: RPG.Skill): void;
  lastBattleSkill(): RPG.Skill;
  setLastBattleSkill(skill: RPG.Skill): void;
  lastCommandSymbol(): string;
  setLastCommandSymbol(symbol: string): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Enemy
 *
 * 敌人的游戏对象类。
 */
declare class Game_Enemy extends Game_Battler {
  protected _enemyId: number;
  protected _letter: string;
  protected _plural: boolean;
  protected _screenX: number;
  protected _screenY: number;

  constructor(enemyId: number, x: number, y: number);

  initMembers(): void;
  setup(enemyId: number, x: number, y: number): void;
  friendsUnit(): Game_Troop;
  opponentsUnit(): Game_Party;
  isBattleMember(): boolean;
  enemyId(): number;
  enemy(): RPG.Enemy;
  exp(): number;
  gold(): number;
  makeDropItems(): Array<RPG.BaseItem>;
  dropItemRate(): number;
  itemObject(kind: number, dataId: number): RPG.BaseItem;
  isSpriteVisible(): boolean;
  screenX(): number;
  screenY(): number;
  battlerHue(): number;
  originalName(): string;
  isLetterEmpty(): boolean;
  setLetter(letter: string): void;
  setPlural(plural: boolean): void;
  transform(enemyId: number): void;
  meetsCondition(action: RPG.Enemy.Action): boolean;
  meetsTurnCondition(param1: number, param2: number): boolean;
  meetsHpCondition(param1: number, param2: number): boolean;
  meetsMpCondition(param1: number, param2: number): boolean;
  meetsStateCondition(param: number): boolean;
  meetsPartyLevelCondition(param: number): boolean;
  meetsSwitchCondition(param: number): boolean;
  isActionValid(action: RPG.Enemy.Action): boolean;
  selectAction(actionList: Array<RPG.Enemy.Action>, ratingZero: number): RPG.Enemy.Action;
  selectAllActions(actionList: Array<RPG.Enemy.Action>): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Actors
 *
 * 角色数组的包装类。
 */
declare class Game_Actors {
  protected _data: Array<Game_Actor>;

  actor(actorId: number): Game_Actor;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Unit
 *
 * Game_Party 和 Game_Troop 的父类。
 */
declare class Game_Unit {
  protected _inBattle: boolean;

  inBattle(): boolean;
  members(): Array<Game_Battler>;
  aliveMembers(): Array<Game_Battler>;
  deadMembers(): Array<Game_Battler>;
  movableMembers(): Array<Game_Battler>;
  clearActions(): void;
  agility(): number;
  tgrSum(): number;
  randomTarget(): Game_Battler;
  randomDeadTarget(): Game_Battler;
  smoothTarget(index: number): Game_Battler;
  smoothDeadTarget(index: number): Game_Battler;
  clearResults(): void;
  onBattleStart(): void;
  onBattleEnd(): void;
  makeActions(): void;
  select(activeMember: Game_Battler): void;
  isAllDead(): boolean;
  substituteBattler(): Game_Battler;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Party
 *
 * 队伍的游戏对象类。包含金钱和物品等信息。
 */
declare class Game_Party extends Game_Unit {
  static ABILITY_ENCOUNTER_HALF: number;
  static ABILITY_ENCOUNTER_NONE: number;
  static ABILITY_CANCEL_SURPRISE: number;
  static ABILITY_RAISE_PREEMPTIVE: number;
  static ABILITY_GOLD_DOUBLE: number;
  static ABILITY_DROP_ITEM_DOUBLE: number;

  protected _gold: number;
  protected _steps: number;
  protected _lastItem: Game_Item;
  protected _menuActorId: number;
  protected _targetActorId: number;
  protected _actors: Array<Game_Actor>;

  protected _items: { [itemId: number]: number };
  protected _weapons: { [itemId: number]: number };
  protected _armors: { [itemId: number]: number };

  members(): Array<Game_Actor>;
  aliveMembers(): Array<Game_Actor>;
  deadMembers(): Array<Game_Actor>;
  movableMembers(): Array<Game_Actor>;
  battleMembers(): Array<Game_Actor>;
  initAllItems(): void;
  exists(): boolean;
  size(): number;
  isEmpty(): boolean;
  maxBattleMembers(): number;
  leader(): Game_Actor;
  reviveBattleMembers(): void;
  items(): Array<RPG.Item>;
  weapons(): Array<RPG.Weapon>;
  armors(): Array<RPG.Armor>;
  equipItems(): Array<RPG.EquipItem>;
  allItems(): Array<RPG.BaseItem>;
  itemContainer(item: RPG.BaseItem): { [itemId: number]: number };
  setupStartingMembers(): void;
  name(): string;
  setupBattleTest(): void;
  setupBattleTestMembers(): void;
  setupBattleTestItems(): void;
  highestLevel(): number;
  addActor(actorId: number): void;
  removeActor(actorId: number): void;
  gold(): number;
  gainGold(amount: number): void;
  loseGold(amount: number): void;
  maxGold(): number;
  steps(): number;
  increaseSteps(): void;
  numItems(item: RPG.BaseItem): number;
  maxItems(item: RPG.BaseItem): number;
  hasMaxItems(item: RPG.BaseItem): boolean;
  hasItem(item: RPG.BaseItem, includeEquip: boolean): boolean;
  isAnyMemberEquipped(item: RPG.EquipItem): boolean;
  gainItem(item: RPG.BaseItem, amount: number, includeEquip: boolean): void;
  discardMembersEquip(item: RPG.EquipItem, amount: number): void;
  loseItem(item: RPG.BaseItem, amount: number, includeEquip: boolean): void;
  consumeItem(item: RPG.BaseItem): void;
  canUse(item: RPG.BaseItem): boolean;
  canInput(): boolean;
  onPlayerWalk(): void;
  menuActor(): Game_Actor;
  setMenuActor(actor: Game_Actor): void;
  makeMenuActorNext(): void;
  makeMenuActorPrevious(): void;
  targetActor(): Game_Actor;
  setTargetActor(actor: Game_Actor): void;
  lastItem(): RPG.BaseItem;
  setLastItem(item: RPG.BaseItem): void;
  swapOrder(index1: number, index2: number): void;
  charactersForSavefile(): Array<Array<any>>;
  facesForSavefile(): Array<Array<any>>;
  partyAbility(abilityId: number): boolean;
  hasEncounterHalf(): boolean;
  hasEncounterNone(): boolean;
  hasCancelSurprise(): boolean;
  hasRaisePreemptive(): boolean;
  hasGoldDouble(): boolean;
  hasDropItemDouble(): boolean;
  ratePreemptive(troopAgi: number): number;
  rateSurprise(troopAgi: number): number;
  performVictory(): void;
  performEscape(): void;
  removeBattleStates(): void;
  requestMotionRefresh(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Troop
 *
 * 敌群和战斗相关数据的游戏对象类。
 */
declare class Game_Troop extends Game_Unit {
  static LETTER_TABLE_HALF: Array<string>;
  static LETTER_TABLE_FULL: Array<string>;

  protected _interpreter: Game_Interpreter;
  protected _troopId: number;
  protected _eventFlags: { [page: number]: boolean };
  protected _enemies: Array<Game_Enemy>;
  protected _turnCount: number;
  protected _namesCount: { [name: string]: number };

  members(): Array<Game_Enemy>;
  aliveMembers(): Array<Game_Enemy>;
  deadMembers(): Array<Game_Enemy>;
  movableMembers(): Array<Game_Enemy>;
  isEventRunning(): boolean;
  updateInterpreter(): void;
  turnCount(): number;
  clear(): void;
  troop(): RPG.Troop;
  setup(troopId: number): void;
  makeUniqueNames(): void;
  letterTable(): Array<string>;
  enemyNames(): Array<string>;
  meetsConditions(page: RPG.BattleEventPage): boolean;
  setupBattleEvent(): void;
  increaseTurn(): void;
  expTotal(): number;
  goldTotal(): number;
  goldRate(): number;
  makeDropItems(): Array<RPG.BaseItem>;
}
/**
 * -----------------------------------------------------------------------------
 * Game_Map
 *
 * 地图的游戏对象类。它包含滚动和通行判定功能。
 */
declare class Game_Map {
  protected _interpreter: Game_Interpreter;
  protected _mapId: number;
  protected _tilesetId: number;
  protected _events: Array<Game_Event>;
  protected _commonEvents: Array<Game_CommonEvent>;
  protected _vehicles: Array<Game_Vehicle>;
  protected _displayX: number;
  protected _displayY: number;
  protected _nameDisplay: boolean;
  protected _scrollDirection: number;
  protected _scrollRest: number;
  protected _scrollSpeed: number;
  protected _parallaxName: string;
  protected _parallaxZero: boolean;
  protected _parallaxLoopX: boolean;
  protected _parallaxLoopY: boolean;
  protected _parallaxSx: number;
  protected _parallaxSy: number;
  protected _parallaxX: number;
  protected _parallaxY: number;
  protected _battleback1Name: string;
  protected _battleback2Name: string;
  protected _needsRefresh: boolean;

  setup(mapId: number): void;
  isEventRunning(): boolean;
  tileWidth(): number;
  tileHeight(): number;
  mapId(): number;
  tilesetId(): number;
  displayX(): number;
  displayY(): number;
  parallaxName(): string;
  battleback1Name(): string;
  battleback2Name(): string;
  requestRefresh(mapId: number): void;
  isNameDisplayEnabled(): boolean;
  disableNameDisplay(): void;
  enableNameDisplay(): void;
  createVehicles(): void;
  refereshVehicles(): void;
  vehicles(): Array<Game_Vehicle>;
  vehicle(type: string): Game_Vehicle;
  boat(): Game_Vehicle;
  ship(): Game_Vehicle;
  airship(): Game_Vehicle;
  setupEvents(): void;
  events(): Array<Game_Event>;
  event(eventId: number): Game_Event;
  eraseEvent(eventId: number): void;
  parallelCommonEvents(): Array<RPG.CommonEvent>;
  setupScroll(): void;
  setupParallax(): void;
  setupBattleback(): void;
  setDisplayPos(x: number, y: number): void;
  parallaxOx(): number;
  parallaxOy(): number;
  tileset(): RPG.Tileset;
  tilesetFlags(): Array<number>;
  displayName(): string;
  width(): number;
  height(): number;
  data(): Array<number>;
  isLoopHorizontal(): boolean;
  isLoopVertical(): boolean;
  isDashDisabled(): boolean;
  encounterList(): Array<RPG.Map.Encounter>;
  encounterStep(): number;
  isOverworld(): boolean;
  screenTileX(): number;
  screenTileY(): number;
  adjustX(x: number): number;
  adjustY(y: number): number;
  roundX(x: number): number;
  roundY(y: number): number;
  xWithDirection(x: number, d: number): number;
  yWithDirection(y: number, d: number): number;
  roundXWithDirection(x: number, d: number): number;
  roundYWithDirection(y: number, d: number): number;
  deltaX(x1: number, x2: number): number;
  deltaY(y1: number, y2: number): number;
  distance(x1: number, y1: number, x2: number, y2: number): number;
  canvasToMapX(x: number): number;
  canvasToMapY(y: number): number;
  autoplay(): void;
  refreshIfNeeded(): void;
  refresh(): void;
  refreshTileEvents(): void;
  eventsXy(x: number, y: number): Array<Game_Event>;
  eventsXyNt(x: number, y: number): Array<Game_Event>;
  tileEventsXy(x: number, y: number): Array<Game_Event>;
  eventIdXy(x: number, y: number): number;
  scrollDown(distance: number): void;
  scrollLeft(distance: number): void;
  scrollRight(distance: number): void;
  scrollUp(distance: number): void;
  isValid(x: number, y: number): boolean;
  checkPassage(x: number, y: number, bit: number): boolean;
  tileId(x: number, y: number, z: number): number;
  layeredTiles(x: number, y: number): Array<number>;
  allTiles(x: number, y: number): Array<number>;
  autotileType(x: number, y: number, z: number): number;
  isPassable(x: number, y: number, d: number): boolean;
  isBoatPassable(x: number, y: number): boolean;
  isShipPassable(x: number, y: number): boolean;
  isAirshipLandOk(x: number, y: number): boolean;
  checkLayeredTilesFlags(x: number, y: number, bit: number): boolean;
  isLadder(x: number, y: number): boolean;
  isBush(x: number, y: number): boolean;
  isCounter(x: number, y: number): boolean;
  isDamageFloor(x: number, y: number): boolean;
  terrainTag(x: number, y: number): number;
  regionId(x: number, y: number): number;
  startScroll(direction: number, distance: number, speed: number): void;
  isScrolling(): boolean;
  update(sceneActive: boolean): void;
  updateScroll(): void;
  scrollDistance(): number;
  doScroll(direction: number, distance: number): void;
  updateEvents(): void;
  updateVehicles(): void;
  updateParallax(): void;
  changeTileset(tilesetId: number): void;
  changeBattleback(battleback1Name: string, battleback2Name: string): void;
  changeParallax(name: string, loopX: boolean, loopY: boolean, sx: number, sy: number): void;
  updateInterpreter(): void;
  unlockEvent(eventId: number): void;
  setupStartingEvent(): boolean;
  setupTestEvent(): boolean;
  setupStartingMapEvent(): boolean;
  setupAutorunCommonEvent(): boolean;
  isAnyEventStarting(): boolean;
}

/**
 * -----------------------------------------------------------------------------
 * Game_CommonEvent
 *
 * 公共事件的游戏对象类。它包含运行并行处理事件的功能。
 */
declare class Game_CommonEvent {
  protected _commonEventId: number;
  protected _interpreter: Game_Interpreter;

  constructor(commonEventId: number);

  event(): RPG.CommonEvent;
  list(): Array<RPG.EventCommand>;
  refresh(): void;
  isActive(): boolean;
  update(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_CharacterBase
 *
 * Game_Character 的父类。它处理所有角色共享的基本信息，如坐标和图像。
 */
declare class Game_CharacterBase {
  protected _x: number;
  protected _y: number;
  protected _realX: number;
  protected _realY: number;
  protected _moveSpeed: number;
  protected _moveFrequency: number;
  protected _opacity: number;
  protected _blendMode: number;
  protected _direction: number;
  protected _pattern: number;
  protected _priorityType: number;
  protected _tileId: number;
  protected _characterName: string;
  protected _characterIndex: number;
  protected _isObjectCharacter: boolean;
  protected _walkAnime: boolean;
  protected _stepAnime: boolean;
  protected _directionFix: boolean;
  protected _through: boolean;
  protected _transparent: boolean;
  protected _bushDepth: number;
  protected _animationId: number;
  protected _balloonId: number;
  protected _animationPlaying: boolean;
  protected _balloonPlaying: boolean;
  protected _animationCount: number;
  protected _stopCount: number;
  protected _jumpCount: number;
  protected _jumpPeak: number;
  protected _movementSuccess: boolean;

  /** [只读] */
  x: number;
  /** [只读] */
  y: number;

  initMembers(): void;
  pos(x: number, y: number): boolean;
  posNt(x: number, y: number): boolean;
  moveSpeed(): number;
  setMoveSpeed(moveSpeed: number): void;
  moveFrequency(): number;
  setMoveFrequency(moveFrequency: number): void;
  opacity(): number;
  setOpacity(opacity: number): void;
  blendMode(): number;
  setBlendMode(blendMode: number): void;
  isNormalPriority(): boolean;
  setPriorityType(priorityType: number): void;
  isMoving(): boolean;
  isJumping(): boolean;
  jumpHeight(): number;
  isStopping(): boolean;
  checkStop(threshold: number): boolean;
  resetStopCount(): void;
  realMoveSpeed(): number;
  distancePerFrame(): number;
  isDashing(): boolean;
  isDebugThrough(): boolean;
  straighten(): void;
  reverseDir(d: number): number;
  canPass(x: number, y: number, d: number): boolean;
  canPassDiagonally(x: number, y: number, horz: number, vert: number): boolean;
  isMapPassable(x: number, y: number, d: number): boolean;
  isCollidedWithCharacters(x: number, y: number): boolean;
  isCollidedWithEvents(x: number, y: number): boolean;
  isCollidedWithVehicles(x: number, y: number): boolean;
  setPosition(x: number, y: number): void;
  copyPosition(character: Game_Player): void;
  locate(x: number, y: number): void;
  direction(): number;
  setDirection(d: number): void;
  isTile(): boolean;
  isObjectCharacter(): boolean;
  shiftY(): number;
  scrolledX(): number;
  scrolledY(): number;
  screenX(): number;
  screenY(): number;
  screenZ(): number;
  isNearTheScreen(): boolean;
  update(): void;
  updateStop(): void;
  updateJump(): void;
  updateMove(): void;
  updateAnimation(): void;
  animationWait(): number;
  updateAnimationCount(): void;
  updatePattern(): void;
  maxPattern(): number;
  pattern(): number;
  setPattern(pattern: number): void;
  isOriginalPattern(): boolean;
  resetPattern(): void;
  refreshBushDepth(): void;
  isOnLadder(): boolean;
  isOnBush(): boolean;
  terrainTag(): number;
  regionId(): number;
  increaseSteps(): void;
  tileId(): number;
  characterName(): string;
  characterIndex(): number;
  setImage(characterName: string, characterIndex: number): void;
  setTileImage(tileId: number): void;
  checkEventTriggerTouchFront(d: number): void;
  checkEventTriggerTouch(x: number, y: number): boolean;
  isMovementSucceeded(x: number, y: number): boolean;
  setMovementSuccess(success: boolean): void;
  moveStraight(d: number): void;
  moveDiagonally(horz: number, vert: number): void;
  jump(xPlus: number, yPlus: number): void;
  hasWalkAnime(): boolean;
  setWalkAnime(walkAnime: boolean): void;
  hasStepAnime(): boolean;
  setStepAnime(stepAnime: boolean): void;
  isDirectionFixed(): boolean;
  setDirectionFix(directionFix: boolean): void;
  isThrough(): boolean;
  setThrough(through: boolean): void;
  isTransparent(): boolean;
  bushDepth(): number;
  setTransparent(transparent: boolean): void;
  requestAnimation(animationId: number): void;
  requestBalloon(balloonId: number): void;
  animationId(): number;
  balloonId(): number;
  startAnimation(): void;
  startBalloon(): void;
  isAnimationPlaying(): boolean;
  isBalloonPlaying(): boolean;
  endAnimation(): void;
  endBalloon(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Character
 *
 * Game_Player、Game_Follower、GameVehicle 和 Game_Event 的父类。
 */
declare class Game_Character extends Game_CharacterBase {
  static ROUTE_END: number;
  static ROUTE_MOVE_DOWN: number;
  static ROUTE_MOVE_LEFT: number;
  static ROUTE_MOVE_RIGHT: number;
  static ROUTE_MOVE_UP: number;
  static ROUTE_MOVE_LOWER_L: number;
  static ROUTE_MOVE_LOWER_R: number;
  static ROUTE_MOVE_UPPER_L: number;
  static ROUTE_MOVE_UPPER_R: number;
  static ROUTE_MOVE_RANDOM: number;
  static ROUTE_MOVE_TOWARD: number;
  static ROUTE_MOVE_AWAY: number;
  static ROUTE_MOVE_FORWARD: number;
  static ROUTE_MOVE_BACKWARD: number;
  static ROUTE_JUMP: number;
  static ROUTE_WAIT: number;
  static ROUTE_TURN_DOWN: number;
  static ROUTE_TURN_LEFT: number;
  static ROUTE_TURN_RIGHT: number;
  static ROUTE_TURN_UP: number;
  static ROUTE_TURN_90D_R: number;
  static ROUTE_TURN_90D_L: number;
  static ROUTE_TURN_180D: number;
  static ROUTE_TURN_90D_R_L: number;
  static ROUTE_TURN_RANDOM: number;
  static ROUTE_TURN_TOWARD: number;
  static ROUTE_TURN_AWAY: number;
  static ROUTE_SWITCH_ON: number;
  static ROUTE_SWITCH_OFF: number;
  static ROUTE_CHANGE_SPEED: number;
  static ROUTE_CHANGE_FREQ: number;
  static ROUTE_WALK_ANIME_ON: number;
  static ROUTE_WALK_ANIME_OFF: number;
  static ROUTE_STEP_ANIME_ON: number;
  static ROUTE_STEP_ANIME_OFF: number;
  static ROUTE_DIR_FIX_ON: number;
  static ROUTE_DIR_FIX_OFF: number;
  static ROUTE_THROUGH_ON: number;
  static ROUTE_THROUGH_OFF: number;
  static ROUTE_TRANSPARENT_ON: number;
  static ROUTE_TRANSPARENT_OFF: number;
  static ROUTE_CHANGE_IMAGE: number;
  static ROUTE_CHANGE_OPACITY: number;
  static ROUTE_CHANGE_BLEND_MODE: number;
  static ROUTE_PLAY_SE: number;
  static ROUTE_SCRIPT: number;

  protected _moveRouteForcing: boolean;
  protected _moveRoute: RPG.MoveRoute;
  protected _moveRouteIndex: number;
  protected _originalMoveRoute: RPG.MoveRoute;
  protected _originalMoveRouteIndex: number;
  protected _waitCount: number;

  initMembers(): void;
  memorizeMoveRoute(): void;
  restoreMoveRoute(): void;
  isMoveRouteForcing(): boolean;
  setMoveRoute(moveRoute: RPG.MoveRoute): void;
  forceMoveRoute(moveRoute: RPG.MoveRoute): void;
  updateStop(): void;
  updateRoutineMove(): void;
  processMoveCommand(command: RPG.MoveCommand): void;
  deltaXFrom(x: number): number;
  deltaYFrom(y: number): number;
  moveRandom(): void;
  moveTowardCharacter(character: Game_Character): void;
  moveAwayFromCharacter(character: Game_Character): void;
  turnTowardCharacter(character: Game_Character): void;
  turnAwayFromCharacter(character: Game_Character): void;
  turnTowardPlayer(): void;
  turnAwayFromPlayer(): void;
  moveTowardPlayer(): void;
  moveAwayFromPlayer(): void;
  moveForward(): void;
  moveBackward(): void;
  processRouteEnd(): void;
  advanceMoveRouteIndex(): void;
  turnRight90(): void;
  turnLeft90(): void;
  turn180(): void;
  turnRightOrLeft90(): void;
  turnRandom(): void;
  swap(character: Game_Character): void;
  findDirectionTo(goalX: number, goalY: number): number;
  searchLimit(): number;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Player
 *
 * 玩家的游戏对象类。它包含事件启动判断和地图滚动功能。
 */
declare class Game_Player extends Game_Character {
  protected _vehicleType: string;
  protected _vehicleGettingOn: boolean;
  protected _vehicleGettingOff: boolean;
  protected _dashing: boolean;
  protected _needsMapReload: boolean;
  protected _transferring: boolean;
  protected _newMapId: number;
  protected _newX: number;
  protected _newY: number;
  protected _newDirection: number;
  protected _fadeType: number;
  protected _followers: Game_Followers;
  protected _encounterCount: number;

  clearTransferInfo(): void;
  followers(): Game_Followers;
  refresh(): void;
  isStopping(): boolean;
  reserveTransfer(mapId: number, x: number, y: number, d?: number, fadeType?: number): void;
  requestMapReload(): void;
  isTransferring(): boolean;
  newMapId(): number;
  fadeType(): number;
  performTransfer(): void;
  isMapPassable(x: number, y: number, d: number): boolean;
  vehicle(): Game_Vehicle;
  isInBoat(): boolean;
  isInShip(): boolean;
  isInAirship(): boolean;
  isInVehicle(): boolean;
  isNormal(): boolean;
  isDashing(): boolean;
  isDebugThrough(): boolean;
  isCollided(x: number, y: number): boolean;
  centerX(): number;
  centerY(): number;
  center(x: number, y: number): void;
  locate(x: number, y: number): void;
  increaseSteps(): void;
  makeEncounterCount(): void;
  makeEncounterTroopId(): number;
  meetsEncounterConditions(encounter: RPG.Map.Encounter): boolean;
  executeEncounter(): boolean;
  startMapEvent(x: number, y: number, triggers: Array<number>, normal: boolean): void;
  moveByInput(): void;
  canMove(): boolean;
  getInputDirection(): number;
  executeMove(direction: number): void;
  update(sceneActive?: boolean): void;
  updateDashing(): void;
  isDashButtonPressed(): boolean;
  updateScroll(lastScrolledX: number, lastScrolledY: number): void;
  updateVehicle(): void;
  updateVehicleGetOn(): void;
  updateVehicleGetOff(): void;
  updateNonmoving(wasMoving: boolean): void;
  triggerAction(): boolean;
  triggerButtonAction(): boolean;
  triggerTouchAction(): boolean;
  triggerTouchActionD1(x1: number, y1: number): boolean;
  triggerTouchActionD2(x2: number, y2: number): boolean;
  triggerTouchActionD3(x2: number, y2: number): boolean;
  updateEncounterCount(): void;
  canEncounter(): boolean;
  encounterProgressValue(): number;
  checkEventTriggerHere(triggers: Array<number>): void;
  checkEventTriggerThere(triggers: Array<number>): void;
  canStartLocalEvents(): boolean;
  getOnOffVehicle(): boolean;
  getOnVehicle(): boolean;
  getOffVehicle(): boolean;
  forceMoveForward(): void;
  isOnDamageFloor(): boolean;
  moveStraight(d: number): void;
  moveDiagonally(horz: number, vert: number): void;
  jump(xPlus: number, yPlus: number): void;
  showFollowers(): void;
  hideFollowers(): void;
  gatherFollowers(): void;
  areFollowersGathering(): boolean;
  areFollowersGathered(): boolean;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Follower
 *
 * 追随者的游戏对象类。追随者是队伍中除前角色外的盟友角色。
 */
declare class Game_Follower extends Game_Character {
  protected _memberIndex: number;

  constructor(memberIndex: number);

  refresh(): void;
  actor(): Game_Actor;
  isVisible(): boolean;
  update(): void;
  chaseCharacter(character: Game_Character): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Followers
 *
 * 追随者数组的包装类。
 */
declare class Game_Followers {
  protected _visible: boolean;
  protected _gathering: boolean;
  protected _data: Array<Game_Follower>;

  isVisible(): boolean;
  show(): void;
  hide(): void;
  follower(index: number): Game_Follower;
  forEach(callback: () => void, thisObject: any): void;
  reverseEach(callback: () => void, thisObject: any): void;
  refresh(): void;
  update(): void;
  updateMove(): void;
  jumpAll(): void;
  synchronize(x: number, y: number, d: number): void;
  gather(): void;
  areGathering(): boolean;
  visibleFollowers(): Array<Game_Follower>;
  areMoving(): boolean;
  areGathered(): boolean;
  isSomeoneCollided(x: number, y: number): boolean;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Vehicle
 *
 * 载具的游戏对象类。
 */
declare class Game_Vehicle extends Game_Character {
  protected _type: string;
  protected _mapId: number;
  protected _altitude: number;
  protected _driving: boolean;
  protected _bgm: RPG.AudioFile;

  constructor(type: string);
  initMembers(): void;
  isBoat(): boolean;
  isShip(): boolean;
  isAirship(): boolean;
  resetDirection(): void;
  initMoveSpeed(): void;
  vehicle(): RPG.System.Vehicle;
  loadSystemSettings(): void;
  refresh(): void;
  setLocation(mapId: number, x: number, y: number): void;
  pos(x: number, y: number): boolean;
  isMapPassable(x: number, y: number, d: number): boolean;
  getOn(): void;
  getOff(): void;
  setBgm(bgm: RPG.AudioFile): void;
  playBgm(): void;
  syncWithPlayer(): void;
  screenY(): number;
  shadowX(): number;
  shadowY(): number;
  shadowOpacity(): number;
  canMove(): boolean;
  update(): void;
  updateAirship(): void;
  updateAirshipAltitude(): void;
  maxAltitude(): number;
  isLowest(): boolean;
  isHighest(): boolean;
  isTakeoffOk(): boolean;
  isLandOk(x: number, y: number, d: number): boolean;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Event
 *
 * 事件的游戏对象类。它包含事件页切换和运行并行处理事件的功能。
 */
declare class Game_Event extends Game_Character {
  protected _mapId: number;
  protected _eventId: number;
  protected _moveType: number;
  protected _trigger: number;
  protected _starting: boolean;
  protected _erased: boolean;
  protected _pageIndex: number;
  protected _originalPattern: number;
  protected _originalDirection: number;
  protected _prelockDirection: number;
  protected _locked: boolean;

  constructor(mapId: number, eventId: number);

  initMembers(): void;
  eventId(): number;
  event(): RPG.Event;
  page(): RPG.EventPage;
  list(): Array<RPG.EventCommand>;
  isCollidedWithCharacters(x: number, y: number): boolean;
  isCollidedWithEvents(x: number, y: number): boolean;
  isCollidedWithPlayerCharacters(x: number, y: number): boolean;
  lock(): void;
  unlock(): void;
  updateStop(): void;
  updateSelfMovement(): void;
  stopCountThreshold(): number;
  moveTypeRandom(): void;
  moveTypeTowardPlayer(): void;
  isNearThePlayer(): boolean;
  moveTypeCustom(): void;
  isStarting(): boolean;
  clearStartingFlag(): void;
  isTriggerIn(triggers: Array<number>): boolean;
  start(): void;
  erase(): void;
  refresh(): void;
  findProperPageIndex(): number;
  meetsConditions(page: RPG.EventPage): boolean;
  setupPage(): void;
  clearPageSettings(): void;
  setupPageSettings(): void;
  isOriginalPattern(): boolean;
  resetPattern(): void;
  checkEventTriggerAuto(): void;
  update(): void;
  updateParallel(): void;
  locate(x: number, y: number): void;
  forceMoveRoute(moveRoute: RPG.MoveRoute): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Interpreter
 *
 * 运行事件命令的解释器。
 */
declare class Game_Interpreter {
  protected _depth: number;
  protected _branch: { [indent: number]: number | boolean };
  protected _params: Array<any>;
  protected _indent: number;
  protected _frameCount: number;
  protected _freezeChecker: number;
  protected _mapId: number;
  protected _eventId: number;
  protected _list: Array<RPG.EventCommand>;
  protected _index: number;
  protected _waitCount: number;
  protected _waitMode: string;
  protected _comments: string;
  protected _character: Game_Event;
  protected _childInterpreter: Game_Interpreter;

  constructor(depth: number);
  checkOverflow(): void;
  clear(): void;
  setup(list: Array<RPG.EventCommand>, eventId: number): void;
  eventId(): number;
  isOnCurrentMap(): boolean;
  setupReservedCommonEvent(): boolean;
  isRunning(): boolean;
  update(): void;
  updateChild(): boolean;
  updateWait(): boolean;
  updateWaitCount(): boolean;
  updateWaitMode(): boolean;
  setWaitMode(waitMode: string): void;
  wait(duration: number): void;
  fadeSpeed(): number;
  executeCommand(): boolean;
  checkFreeze(): boolean;
  terminate(): void;
  skipBranch(): void;
  currentCommand(): RPG.EventCommand;
  nextEventCode(): number;
  iterateActorId(param: number, callback: (actor: Game_Actor) => void): void;
  iterateActorEx(param1: number, param2: number, callback: (actor: Game_Actor) => void): void;
  iterateActorIndex(param: number, callback: (actor: Game_Actor) => void): void;
  iterateEnemyIndex(param: number, callback: (enemy: Game_Enemy) => void): void;
  iterateBattler(param1: number, param2: number, callback: (battler: Game_Battler) => void): void;
  character(param: number): Game_Character;
  operateValue(operation: number, operandType: number, operand: number): number;
  changeHp(target: number, value: number, allowDeath: boolean): void;

  /**
   * 显示文本
   */
  command101(): boolean;

  /**
   * 显示选择项
   */
  command102(): boolean;
  setupChoices(params: Array<any>): void;

  /**
   * 当 [**]
   */
  command402(): boolean;

  /**
   * 当取消
   */
  command403(): boolean;

  /**
   * 输入数值
   */
  command103(): boolean;
  setupNumInput(params: Array<number>): void;

  /**
   * 选择物品
   */
  command104(): boolean;
  setupItemChoice(params: Array<number>): void;

  /**
   * 显示滚动文字
   */
  command105(): boolean;

  /**
   * 注释
   */
  command108(): boolean;

  /**
   * 条件分支
   */
  command111(): boolean;

  /**
   * 否则
   */
  command411(): boolean;

  /**
   * 循环
   */
  command112(): boolean;

  /**
   * 重复以上
   */
  command413(): boolean;

  /**
   * 中断循环
   */
  command113(): boolean;

  /**
   * 退出事件处理
   */
  command115(): boolean;

  /**
   * 公共事件
   */
  command117(): boolean;
  setupChild(list: Array<RPG.EventCommand>, eventId: number): void;

  /**
   * 标签
   */
  command118(): boolean;

  /**
   * 跳转标签
   */
  command119(): boolean;
  jumpTo(index: number): void;

  /**
   * 开关操作
   */
  command121(): boolean;

  /**
   * 变量操作
   */
  command122(): boolean;
  gameDataOperand(type: number, param1: number, param2: number): number;
  operateVariable(variableId: number, operationType: number, value: number): void;

  /**
   * 独立开关操作
   */
  command123(): boolean;

  /**
   * 计时器操作
   */
  command124(): boolean;

  /**
   * 增减金钱
   */
  command125(): boolean;

  /**
   * 增减物品
   */
  command126(): boolean;

  /**
   * 增减武器
   */
  command127(): boolean;

  /**
   * 增减防具
   */
  command128(): boolean;

  /**
   * 更改队员
   */
  command129(): boolean;

  /**
   * 更改战斗 BGM
   */
  command132(): boolean;

  /**
   * 更改胜利 ME
   */
  command133(): boolean;

  /**
   * 更改保存禁止
   */
  command134(): boolean;

  /**
   * 更改菜单禁止
   */
  command135(): boolean;

  /**
   * 更改遇敌禁止
   */
  command136(): boolean;

  /**
   * 更改整队禁止
   */
  command137(): boolean;

  /**
   * 更改窗口色调
   */
  command138(): boolean;

  /**
   * 更改失败 ME
   */
  command139(): boolean;

  /**
   * 更改载具 BGM
   */
  command140(): boolean;

  /**
   * 场所移动
   */
  command201(): boolean;

  /**
   * 设置载具位置
   */
  command202(): boolean;

  /**
   * 设置事件位置
   */
  command203(): boolean;

  /**
   * 地图滚动
   */
  command204(): boolean;

  /**
   * 设置移动路线
   */
  command205(): boolean;

  /**
   * 载具的乘降
   */
  command206(): boolean;

  /**
   * 更改透明状态
   */
  command211(): boolean;

  /**
   * 显示动画
   */
  command212(): boolean;

  /**
   * 显示心情图标
   */
  command213(): boolean;

  /**
   * 暂时消除事件
   */
  command214(): boolean;

  /**
   * 更改主角的追随者
   */
  command216(): boolean;

  /**
   * 集合追随者
   */
  command217(): boolean;

  /**
   * 淡出画面
   */
  command221(): boolean;

  /**
   * 淡入画面
   */
  command222(): boolean;

  /**
   * 更改画面色调
   */
  command223(): boolean;

  /**
   * 画面闪烁
   */
  command224(): boolean;

  /**
   * 画面震动
   */
  command225(): boolean;

  /**
   * 等待
   */
  command230(): boolean;

  /**
   * 显示图片
   */
  command231(): boolean;

  /**
   * 移动图片
   */
  command232(): boolean;

  /**
   * 旋转图片
   */
  command233(): boolean;

  /**
   * 更改图片色调
   */
  command234(): boolean;

  /**
   * 消除图片
   */
  command235(): boolean;

  /**
   * 天气设置
   */
  command236(): boolean;

  /**
   * 演奏 BGM
   */
  command241(): boolean;

  /**
   * 淡出 BGM
   */
  command242(): boolean;

  /**
   * 保存 BGM
   */
  command243(): boolean;

  /**
   * 重新演奏 BGM
   */
  command244(): boolean;

  /**
   * 演奏 BGS
   */
  command245(): boolean;

  /**
   * 淡出 BGS
   */
  command246(): boolean;

  /**
   * 演奏 ME
   */
  command249(): boolean;

  /**
   * 演奏 SE
   */
  command250(): boolean;

  /**
   * 停止 SE
   */
  command251(): boolean;

  /**
   * 播放影片
   */
  command261(): boolean;
  videoFileExt(): string;

  /**
   * 更改地图名称显示
   */
  command281(): boolean;

  /**
   * 更改图块组
   */
  command282(): boolean;

  /**
   * 更改战斗背景
   */
  command283(): boolean;

  /**
   * 更改远景图
   */
  command284(): boolean;

  /**
   * 获取位置信息
   */
  command285(): boolean;

  /**
   * 战斗处理
   */
  command301(): boolean;

  /**
   * 胜利的情况
   */
  command601(): boolean;

  /**
   * 撤退的情况
   */
  command602(): boolean;

  /**
   * 失败的情况
   */
  command603(): boolean;

  /**
   * 商店处理
   */
  command302(): boolean;

  /**
   * 名称输入处理
   */
  command303(): boolean;

  /**
   * 增减 HP
   */
  command311(): boolean;

  /**
   * 增减 MP
   */
  command312(): boolean;

  /**
   * 增减 TP
   */
  command326(): boolean;

  /**
   * 更改状态
   */
  command313(): boolean;

  /**
   * 完全恢复
   */
  command314(): boolean;

  /**
   * 增减 EXP
   */
  command315(): boolean;

  /**
   * 增减等级
   */
  command316(): boolean;

  /**
   * 增减能力值
   */
  command317(): boolean;

  /**
   * 增减技能
   */
  command318(): boolean;

  /**
   * 更改装备
   */
  command319(): boolean;

  /**
   * 更改名称
   */
  command320(): boolean;

  /**
   * 更改职业
   */
  command321(): boolean;

  /**
   * 更改角色图像
   */
  command322(): boolean;

  /**
   * 更改载具图像
   */
  command323(): boolean;

  /**
   * 更改昵称
   */
  command324(): boolean;

  /**
   * 更改简介
   */
  command325(): boolean;

  /**
   * 增减敌人 HP
   */
  command331(): boolean;

  /**
   * 增减敌人 MP
   */
  command332(): boolean;

  /**
   * 增减敌人 TP
   */
  command342(): boolean;

  /**
   * 更改敌人状态
   */
  command333(): boolean;

  /**
   * 敌人完全恢复
   */
  command334(): boolean;

  /**
   * 敌人出现
   */
  command335(): boolean;

  /**
   * 敌人变身
   */
  command336(): boolean;

  /**
   * 显示战斗动画
   */
  command337(): boolean;

  /**
   * 强制战斗行动
   */
  command339(): boolean;

  /**
   * 中止战斗
   */
  command340(): boolean;

  /**
   * 打开菜单画面
   */
  command351(): boolean;

  /**
   * 打开存档画面
   */
  command352(): boolean;

  /**
   * 游戏结束
   */
  command353(): boolean;

  /**
   * 返回标题画面
   */
  command354(): boolean;

  /**
   * 脚本
   */
  command355(): boolean;

  /**
   * 插件命令
   */
  command356(): boolean;
  pluginCommand(command: string, args: Array<string>): void;
}
