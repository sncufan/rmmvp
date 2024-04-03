declare namespace RPG {
  export interface MetaData {
    /**
     * 备注的文本。
     */
    note: string;

    /**
     * 元数据。
     */
    meta: { [key: string]: any };
  }

  /**
   * 地图的数据类。
   */
  export interface Map extends MetaData {
    /**
     * 地图的显示名称。
     */
    displayName: string;

    /**
     * 地图的图块集。
     */
    tilesetId: number;

    /**
     * 地图的宽度。
     */
    width: number;

    /**
     * 地图的高度。
     */
    height: number;

    /**
     * 滚动类型（0：不循环，1：垂直循环，2：水平循环，3：双向循环）。
     */
    scrollType: number;

    /**
     * 指示是否启用战斗背景规格的真值。
     */
    specifyBattleback: boolean;

    /**
     * 如果启用了战斗背景规格，则这是地板图形的文件名。
     */
    battleback1Name: string;

    /**
     * 如果启用了战斗背景规格，则这是墙壁图形的文件名。
     */
    battleback2_name: string;

    /**
     * 指示是否启用 BGM 自动切换的真值。
     */
    autoplayBgm: boolean;

    /**
     * 如果启用了 BGM 自动切换，则这是 BGM 的名称（RPG.AudioFile）。
     */
    bgm: AudioFile;

    /**
     * 指示是否启用 BGS 自动切换的真值。
     */
    autoplayBgs: boolean;

    /**
     * 如果启用了 BGS 自动切换，则这是 BGS 的名称（RPG.AudioFile）。
     */
    bgs: AudioFile;

    /**
     * [禁止冲刺] 选项的真值。
     */
    disableDashing: boolean;

    /**
     * 遭遇列表。RPG.Map.Encounter ID 数组。
     */
    encounterList: Array<Map.Encounter>;

    /**
     * 两次遭遇之间的平均步数。
     */
    encounterStep: number;

    /**
     * 视差背景图形的文件名。
     */
    parallaxName: string;

    /**
     * 视差背景的 [水平循环] 选项的真值。
     */
    parallaxLoopX: boolean;

    /**
     * 视差背景的 [垂直循环] 选项的真值。
     */
    parallaxLoopY: boolean;

    /**
     * 视差背景的自动 x 轴滚动速度。
     */
    parallaxSx: number;

    /**
     * 视差背景的自动 y 轴滚动速度。
     */
    parallaxSy: number;

    /**
     * 视差背景的 [在编辑器中显示] 选项的真值。
     */
    parallaxShow: boolean;

    /**
     * 地图数据。一个三维图块 ID 数组（表格）。
     */
    data: Array<number>;

    /**
     * RPG.Event 数据数组。
     */
    events: Array<Event>;
  }

  namespace Map {
    /**
     * 遭遇设置的数据类。
     */
    export interface Encounter {
      /**
       * 敌群 ID。
       */
      troopId: number;

      /**
       * 权重。
       */
      weight: number;

      /**
       * 包含区域 ID 的数组。
       */
      regionSet: Array<number>;
    }
  }

  /**
   * 地图信息的数据类。
   */
  export interface MapInfo {
    /**
     * 地图名称。
     */
    name: string;

    /**
     * 父地图 ID。
     */
    parentId: number;

    /**
     * 地图树的显示顺序，内部使用。
     */
    order: number;
  }

  /**
   * 地图事件的数据类。
   */
  export interface Event extends MetaData {
    /**
     * 事件 ID。
     */
    id: number;

    /**
     * 事件名称。
     */
    name: string;

    /**
     * 事件在地图上的 x 坐标。
     */
    x: number;

    /**
     * 事件在地图上的 y 坐标。
     */
    y: number;

    /**
     * 事件页。RPG.EventPage 数组。
     */
    pages: Array<EventPage>;
  }

  /**
   * 事件页的数据类。
   */
  export interface EventPage {
    /**
     * 事件条件（RPG.EventPage.Condition）。
     */
    conditions: EventPage.Conditions;

    /**
     * 事件图形（RPG.EventPage.Image）。
     */
    image: EventPage.Image;

    /**
     * 移动类型（0：固定，1：随机，2：接近，3：自定义）。
     */
    moveType: number;

    /**
     * 移动速度（1：慢 8 倍，2：慢 4 倍，3：慢 2 倍，4：正常，5：快 2 倍，6：快 4 倍）。
     */
    moveSpeed: number;

    /**
     * 移动频率（1：最低，2：较低，3：正常，4：较高，5：最高）。
     */
    moveFrequency: number;

    /**
     * 移动路线（RPG.MoveRoute）。仅当移动类型设置为自定义时引用。
     */
    moveRoute: Array<MoveRoute>;

    /**
     * [行走动画] 选项的真值。
     */
    walkAnime: boolean;

    /**
     * [踏步动画] 选项的真值。
     */
    stepAnime: boolean;

    /**
     * [固定方向] 选项的真值。
     */
    directionFix: boolean;

    /**
     * [穿透] 选项的真值。
     */
    through: boolean;

    /**
     * 优先级类型（0：低于角色，1：与角色相同，2：高于角色）。
     */
    priorityType: number;

    /**
     * 事件触发器（0：动作按钮，1：玩家接触，2：事件接触，3：自动执行，4：并行处理）。
     */
    trigger: number;

    /**
     * 事件命令列表。RPG.EventCommand 数组。
     */
    list: Array<EventCommand>;
  }

  namespace EventPage {
    /**
     * 事件页条件的数据类。
     */
    export interface Conditions {
      /**
       * 指示第一个 [开关] 条件是否有效的真值。
       */
      switch1Valid: boolean;

      /**
       * 指示第二个 [开关] 条件是否有效的真值。
       */
      switch2Valid: boolean;

      /**
       * 指示 [变量] 条件是否有效的真值。
       */
      variableValid: boolean;

      /**
       * 指示 [独立开关] 条件是否有效的真值。
       */
      selfSwitchValid: boolean;

      /**
       * 指示 [物品] 条件是否有效的真值。
       */
      itemValid: boolean;

      /**
       * 指示 [角色] 条件是否有效的真值。
       */
      actorValid: boolean;

      /**
       * 如果第一个 [开关] 条件有效，则为该开关的 ID。
       */
      switch1Id: number;

      /**
       * 如果第二个 [开关] 条件有效，则为该开关的 ID。
       */
      switch2Id: number;

      /**
       * 如果 [变量] 条件有效，则为该变量的 ID。
       */
      variableId: number;

      /**
       * 如果 [变量] 条件有效，则为该变量的标准值（x 及以上）。
       */
      variableValue: number;

      /**
       * 如果 [独立开关] 条件有效，则为该独立开关的字母（"A".."D"）。
       */
      selfSwitchCh: string;

      /**
       * 如果 [物品] 条件有效，则为该物品的 ID。
       */
      itemId: number;

      /**
       * 如果 [角色] 条件有效，则为该角色的 ID。
       */
      actorId: number;
    }

    /**
     * 事件页 [图形] 的数据类。
     */
    export interface Image {
      /**
       * 图块 ID。如果指定的图形不是图块，则此值为 0。
       */
      tileId: number;

      /**
       * 角色图形的文件名。
       */
      characterName: string;

      /**
       * 角色图形文件的索引（0..7）。
       */
      characterIndex: number;

      /**
       * 角色面对的方向（2：下，4：左，6：右，8：上）。
       */
      direction: number;

      /**
       * 角色的图案（0..2）。
       */
      pattern: number;
    }
  }

  /**
   * 战斗事件页的数据类。
   */
  export interface BattleEventPage {
    /**
     * 事件条件（RPG.EventPage.Condition）。
     */
    conditions: BattleEventPage.Conditions;

    /**
     * 事件命令列表。RPG.EventCommand 数组。
     */
    list: Array<EventCommand>;

    /**
     * 作用范围。
     */
    span: number;
  }

  namespace BattleEventPage {
    /**
     * 事件页条件的数据类。
     */
    export interface Conditions {
      /**
       * 角色 HP 百分比。
       */
      actorHp: number;

      /**
       * 如果 [角色] 条件有效，则为该角色的 ID。
       */
      actorId: number;

      /**
       * 指示 [角色] 条件是否有效的真值。
       */
      actorValid: boolean;

      /**
       * 敌人 HP 百分比。
       */
      enemyHp: number;

      /**
       * 敌人索引。
       */
      enemyIndex: number;

      /**
       * 指示 [敌人] 条件是否有效的真值。
       */
      enemyValid: boolean;

      /**
       * 如果 [开关] 条件有效，则为该开关的 ID。
       */
      switchId: number;

      /**
       * 指示 [开关] 条件是否有效的真值。
       */
      switchValid: boolean;

      /**
       * 回合条件值 A。
       */
      turnA: number;

      /**
       * 回合条件值 B。
       */
      turnB: number;

      /**
       * 指示 "回合结束" 是否有效的布尔值。
       */
      turnEnding: boolean;

      /**
       * 指示 "回合" 是否有效的布尔值。
       */
      turnValid: boolean;
    }
  }

  /**
   * 事件命令的数据类。
   */
  export interface EventCommand {
    /**
     * 事件代码。
     */
    code: number;

    /**
     * 缩进深度。通常为 0。[条件分支] 等命令每深入一级增加 1。
     */
    indent: number;

    /**
     * 包含事件命令参数的数组。内容因命令而异。
     */
    parameters: Array<any>;
  }

  /**
   * 移动路线的数据类。
   */
  export interface MoveRoute {
    /**
     * [重复动作] 选项的真值。
     */
    repeat: boolean;

    /**
     * [无法移动时跳过] 选项的真值。
     */
    skippable: boolean;

    /**
     * [等待完成] 选项的真值。
     */
    wait: boolean;

    /**
     * 程序内容。RPG.MoveCommand 数组。
     */
    list: Array<MoveCommand>;
  }

  /**
   * 移动命令的数据类。
   */
  export interface MoveCommand {
    /**
     * 移动命令代码。
     */
    code: number;

    /**
     * 包含移动命令参数的数组。内容因命令而异。
     */
    parameters: Array<any>;
  }

  /**
   * 角色的数据类。
   */
  export interface Actor extends MetaData {
    /**
     * ID。
     */
    id: number;

    /**
     * 名称。
     */
    name: string;

    /**
     * 角色的昵称。
     */
    nickname: string;

    /**
     * 角色的职业 ID。
     */
    classId: number;

    /**
     * 角色的初始等级。
     */
    initialLevel: number;

    /**
     * 角色的最大等级。
     */
    maxLevel: number;

    /**
     * 角色行走图形的文件名。
     */
    characterName: string;

    /**
     * 角色行走图形的索引（0..7）。
     */
    characterIndex: number;

    /**
     * 角色面部图形的文件名。
     */
    faceName: string;

    /**
     * 角色面部图形的索引（0..7）。
     */
    faceIndex: number;

    /**
     * 角色战斗图形的文件名。
     */
    battlerName: string;

    /**
     * 角色的初始装备。以下标为索引的武器 ID 或防具 ID 数组：
     */
    equips: Array<number>;

    /**
     * 简介。
     */
    profile: string;

    /**
     * 特性数据数组。
     */
    traits: Array<Trait>;
  }

  /**
   * 职业的数据类。
   */
  export interface Class extends MetaData {
    /**
     * ID。
     */
    id: number;

    /**
     * 名称。
     */
    name: string;

    /**
     * 决定经验曲线的一组值。下标如下：
     *
     * 0：基础值
     * 1：额外值
     * 2：加速度 A
     * 3：加速度 B
     */
    expParams: Array<number>;

    /**
     * 参数成长曲线。包含按等级的常规参数的二维数组（表格）。
     *
     * 格式为 params[参数ID, 等级]，参数ID分配如下：
     *
     * 0：最大生命值
     * 1：最大魔法值
     * 2：攻击力
     * 3：防御力
     * 4：魔法攻击力
     * 5：魔法防御力
     * 6：敏捷
     * 7：幸运
     */
    params: Array<Array<number>>;

    /**
     * 要学习的技能。RPG.Class.Learning 数组。
     */
    learnings: Array<Class.Learning>;

    /**
     * 特性数据数组。
     */
    traits: Array<Trait>;
  }

  namespace Class {
    /**
     * 职业 [学习技能] 的数据类。
     */
    export interface Learning extends MetaData {
      /**
       * 职业 [学习技能] 的数据类。
       */
      level: number;

      /**
       * 要学习的技能 ID。
       */
      skillId: number;
    }
  }

  /**
   * 角色、职业、技能、物品、武器、防具、敌人和状态的父类。
   *
   * 根据数据类型，某些项目是不必要的，但为了方便起见包含在内。
   */
  export interface BaseItem extends MetaData {
    /**
     * 物品 ID。
     */
    id: number;

    /**
     * 物品名称。
     */
    name: string;

    /**
     * 图标编号。
     */
    iconIndex: number;

    /**
     * 描述文本。
     */
    description: string;
  }
  /**
   * 技能和物品的父类。
   */
  export interface UsableItem extends BaseItem {
    /**
     * 作用范围。
     *
     * 0：无
     * 1：一个敌人
     * 2：所有敌人
     * 3：一个随机敌人
     * 4：两个随机敌人
     * 5：三个随机敌人
     * 6：四个随机敌人
     * 7：一个盟友
     * 8：所有盟友
     * 9：一个盟友（死亡）
     * 10：所有盟友（死亡）
     * 11：使用者自身
     */
    scope: number;

    /**
     * 物品/技能可使用的时间。
     *
     * 0：总是
     * 1：仅战斗
     * 2：仅菜单
     * 3：从不
     */
    occasion: number;

    /**
     * 速度修正。
     */
    speed: number;

    /**
     * 成功率。
     */
    successRate: number;

    /**
     * 重复次数。
     */
    repeats: number;

    /**
     * 获得的 TP 值。
     */
    tpGain: number;

    /**
     * 攻击命中类型。
     *
     * 0：必定命中
     * 1：物理攻击
     * 2：魔法攻击
     */
    hitType: number;

    /**
     * 动画 ID。
     */
    animationId: number;

    /**
     * 伤害（RPG.Damage）。
     */
    damage: Damage;

    /**
     * 使用效果列表。RPG.Effect 数组。
     */
    effects: Array<Effect>;
  }
  /**
   * 技能的数据类。
   */
  export interface Skill extends UsableItem {
    /**
     * 技能类型 ID。
     */
    stypeId: number;

    /**
     * 消耗的 MP 值。
     */
    mpCost: number;

    /**
     * 消耗的 TP 值。
     */
    tpCost: number;

    /**
     * 使用消息 1。
     */
    message1: string;

    /**
     * 使用消息 2。
     */
    message2: string;

    /**
     * 需要的武器类型 1。
     */
    requiredWtypeId1: number;

    /**
     * 需要的武器类型 2。
     */
    requiredWtypeId2: number;
  }
  /**
   * 物品的数据类。
   */
  export interface Item extends UsableItem {
    /**
     * 物品类型 ID。
     *
     * 1：普通物品
     * 2：关键物品
     */
    itypeId: number;

    /**
     * 物品价格。
     */
    price: number;

    /**
     * 指示使用后是否消失的真值。
     */
    consumable: boolean;
  }

  /**
   * 武器和防具的父类。
   */
  export interface EquipItem extends BaseItem {
    /**
     * 武器或防具的价格。
     */
    price: number;

    /**
     * 武器或防具的类型。
     *
     * 0：武器
     * 1：盾牌
     * 2：头部
     * 3：身体
     * 4：饰品
     */
    etypeId: number;

    /**
     * 参数变化量。使用以下 ID 作为下标的整数数组：
     *
     * 0：最大生命值
     * 1：最大魔法值
     * 2：攻击力
     * 3：防御力
     * 4：魔法攻击力
     * 5：魔法防御力
     * 6：敏捷
     * 7：幸运
     */
    params: Array<number>;

    /**
     * 特性数据数组。
     */
    traits: Array<Trait>;
  }

  /**
   * 武器的数据类。
   */
  export interface Weapon extends EquipItem {
    /**
     * 武器类型 ID。
     */
    wtypeId: number;

    /**
     * 使用武器时的动画 ID。
     */
    animationId: number;
  }

  /**
   * 防具的数据类。
   */
  export interface Armor extends EquipItem {
    /**
     * 防具类型 ID。
     */
    atypeId: number;
  }

  /**
   * 敌人的数据类。
   */
  export interface Enemy extends MetaData {
    /**
     * 敌人战斗图形的文件名。
     */
    battlerName: string;

    /**
     * 战斗图形色调的调整值（0..360）。
     */
    battlerHue: number;

    /**
     * 参数。使用以下 ID 作为下标的整数数组：
     *
     * 0：最大生命值
     * 1：最大魔法值
     * 2：攻击力
     * 3：防御力
     * 4：魔法攻击力
     * 5：魔法防御力
     * 6：敏捷
     * 7：幸运
     */
    params: Array<number>;

    /**
     * 敌人的经验值。
     */
    exp: number;

    /**
     * 敌人的金钱。
     */
    gold: number;

    /**
     * 敌人掉落的物品。RPG.Enemy.DropItem 数组。
     */
    dropItems: Array<Enemy.DropItem>;

    /**
     * 敌人的行动模式。RPG.Enemy.Action 数组。
     */
    actions: Array<Enemy.Action>;
  }

  namespace Enemy {
    /**
     * 敌人 [掉落物品] 的数据类。
     */
    export interface DropItem {
      /**
       * 掉落物品类型。
       *
       * 0：无
       * 1：物品
       * 2：武器
       * 3：防具
       */
      kind: number;

      /**
       * 根据掉落物品类型（物品、武器或防具）确定的数据 ID。
       */
      dataId: number;

      /**
       * 物品掉落概率，1/N。
       */
      denominator: number;
    }

    /**
     * 敌人 [行动] 的数据类。
     */
    export interface Action {
      /**
       * 要作为行动使用的技能 ID。
       */
      skillId: number;

      /**
       * 条件类型。
       *
       * 0：总是
       * 1：回合数
       * 2：HP
       * 3：MP
       * 4：状态
       * 5：队伍等级
       * 6：开关
       */
      conditionType: number;

      /**
       * 条件的第一个参数。
       */
      conditionParam1: number;

      /**
       * 条件的第二个参数。
       */
      conditionParam2: number;

      /**
       * 行动的优先级评级（1..10）。
       */
      rating: number;
    }
  }

  /**
   * 状态的数据类。
   */
  export interface State extends MetaData {
    /**
     * ID。
     */
    id: number;

    /**
     * 名称。
     */
    name: string;

    /**
     * 行动限制。
     *
     * 0：无
     * 1：攻击敌人
     * 2：攻击敌人或盟友
     * 3：攻击盟友
     * 4：无法行动
     */
    restriction: number;

    /**
     * 状态优先级（0..100）。
     */
    priority: number;

    /**
     * 战斗结束时移除状态（true/false）。
     */
    removeAtBattleEnd: boolean;

    /**
     * 通过行动限制移除状态（true/false）。
     */
    removeByRestriction: boolean;

    /**
     * 自动移除状态的时机。
     *
     * 0：不自动移除
     * 1：行动结束时
     * 2：回合结束时
     */
    autoRemovalTiming: number;

    /**
     * 持续时间的最大回合数。
     */
    minTurns: number;

    /**
     * 持续时间的最小回合数。
     */
    maxTurns: number;

    /**
     * 通过伤害移除状态（true/false）。
     */
    removeByDamage: boolean;

    /**
     * 状态被伤害移除的概率（%）。
     */
    chanceByDamage: number;

    /**
     * 通过行走移除状态（true/false）。
     */
    removeByWalking: boolean;

    /**
     * 状态被移除所需的步数。
     */
    stepToRemove: number;

    /**
     * 图标编号。
     */
    iconIndex: number;

    /**
     * 当角色陷入此状态时的消息。
     */
    message1: string;

    /**
     * 当敌人陷入此状态时的消息。
     */
    message2: string;

    /**
     * 当状态持续时的消息。
     */
    message3: string;

    /**
     * 当状态被移除时的消息。
     */
    message4: string;

    /**
     * 侧视动作。
     */
    motion: number;

    /**
     * 侧视覆盖。
     */
    overlay: number;

    /**
     * 特性数据数组。
     */
    traits: Array<Trait>;
    releaseByDamage?: boolean;
    description?: string;
  }

  export interface Trait {
    /**
     * 特性代码。
     */
    code: number;

    /**
     * 根据特性类型确定的数据（如元素或状态）的 ID。
     */
    dataId: number;

    /**
     * 根据特性类型设置的值。
     */
    value: number;

    /**
     * 地图树展开标志，内部使用。
     */
    expanded: boolean;

    /**
     * x 轴滚动位置，内部使用。
     */
    scrollX: number;

    /**
     * y 轴滚动位置，内部使用。
     */
    scrollY: number;
  }

  /**
   * 伤害的数据类。
   */
  export interface Damage {
    /**
     * 伤害类型。
     *
     * 0：无
     * 1：HP 伤害
     * 2：MP 伤害
     * 3：HP 恢复
     * 4：MP 恢复
     * 5：HP 吸收
     * 6：MP 吸收
     */
    type: number;

    /**
     * 元素 ID。
     */
    elementId: number;

    /**
     * 公式。
     */
    formula: string;

    /**
     * 变化程度。
     */
    variance: number;

    /**
     * 暴击（true/false）。
     */
    critical: boolean;
  }

  /**
   * 使用效果的数据类。
   */
  export interface Effect {
    /**
     * 使用效果代码。
     */
    code: number;

    /**
     * 根据使用效果类型确定的数据（状态、参数等）的 ID。
     */
    dataId: number;

    /**
     * 根据使用效果类型设置的值 1。
     */
    value1: number;

    /**
     * 根据使用效果类型设置的值 2。
     */
    value2: number;
  }

  /**
   * 敌群的数据类。
   */
  export interface Troop {
    /**
     * 敌群 ID。
     */
    id: number;

    /**
     * 敌群名称。
     */
    name: string;

    /**
     * 敌群成员。RPG.Troop.Member 数组。
     */
    members: Array<RPG.Troop.Member>;

    /**
     * 战斗事件。RPG.Troop.Page 数组。
     */
    pages: Array<RPG.Troop.Page>;
  }

  namespace Troop {
    /**
     * 敌群成员的数据类。
     */
    export interface Member {
      /**
       * 敌人 ID。
       */
      enemyId: number;

      /**
       * 敌群成员的 x 坐标。
       */
      x: number;

      /**
       * 敌群成员的 y 坐标。
       */
      y: number;

      /**
       * [中途出现] 选项的真值。
       */
      hidden: boolean;
    }

    /**
     * 战斗事件（页）的数据类。
     */
    export interface Page {
      /**
       * 条件（RPG.Troop.Page.Condition）。
       */
      condition: Page.Condition;

      /**
       * 作用范围（0：战斗，1：回合，2：瞬间）。
       */
      span: number;

      /**
       * 程序内容。RPG.EventCommand 数组。
       */
      list: Array<EventCommand>;
    }

    namespace Page {
      /**
       * 战斗事件 [条件] 的数据类。
       */
      export interface Condition {
        /**
         * 指示 [回合结束时] 条件是否有效的真值。
         */
        turnEnding: boolean;

        /**
         * 指示 [回合数] 条件是否有效的真值。
         */
        turnValid: boolean;

        /**
         * 指示 [敌人] 条件是否有效的真值。
         */
        enemyValid: boolean;

        /**
         * 指示 [角色] 条件是否有效的真值。
         */
        actorValid: boolean;

        /**
         * 指示 [开关] 条件是否有效的真值。
         */
        switchValid: boolean;

        /**
         * 在 [回合数] 条件中指定的 a 和 b 值。以 A + B * X 的形式输入。
         */
        turnA: number;

        /**
         * 在 [回合数] 条件中指定的 a 和 b 值。以 A + B * X 的形式输入。
         */
        turnB: number;

        /**
         * 在 [敌人] 条件中指定的敌群成员索引（0..7）。
         */
        enemyIndex: number;

        /**
         * 在 [敌人] 条件中指定的 HP 百分比。
         */
        enemyHp: number;

        /**
         * 在 [角色] 条件中指定的角色 ID。
         */
        actorId: number;

        /**
         * 在 [角色] 条件中指定的 HP 百分比。
         */
        actorHp: number;

        /**
         * 在 [开关] 条件中指定的开关 ID。
         */
        switchId: number;
      }
    }
  }

  /**
   * 动画的数据类。
   */
  export interface Animation {
    /**
     * 动画 ID。
     */
    id: number;

    /**
     * 动画名称。
     */
    name: string;

    /**
     * 第一个动画图形的文件名。
     */
    animation1Name: string;

    /**
     * 第一个动画图形的色调调整值（0..360）。
     */
    animation1Hue: number;

    /**
     * 第二个动画图形的文件名。
     */
    animation2Name: string;

    /**
     * 第二个动画图形的色调调整值（0..360）。
     */
    animation2Hue: number;

    /**
     * 基础位置（0：头部，1：中心，2：脚部，3：屏幕）。
     */
    position: number;

    /**
     * 帧数。
     */
    frameMax: number;

    /**
     * 包含帧内容的三维数组。
     */
    frames: Array<Array<Array<number>>>;

    /**
     * 音效和闪光效果的时机。RPG.Animation.Timing 数组。
     */
    timings: Array<Animation.Timing>;
  }

  namespace Animation {
    /**
     * 动画音效和闪光效果时机的数据类。
     */
    export interface Timing {
      /**
       * 帧号。比 RPG Maker 中显示的数字小 1。
       */
      frame: number;

      /**
       * 音效或 SE（RPG.AudioFile）。
       */
      se: AudioFile;

      /**
       * 闪光区域（0：无，1：目标，2：屏幕，3：隐藏目标）。
       */
      flashScope: number;

      /**
       * 闪光颜色（颜色）。
       */
      flashColor: Array<number>;

      /**
       * 闪光持续时间。
       */
      flashDuration: number;
    }
  }

  /**
   * 图块集的数据类。
   */
  export interface Tileset extends MetaData {
    /**
     * 图块集 ID。
     */
    id: number;

    /**
     * 图块集名称。
     */
    name: string;

    /**
     * 图块集的模式（0：野外类型，1：区域类型，2：VX 兼容类型）。
     */
    mode: number;

    /**
     * 用作数字索引（0-8）图块集的图形文件名。
     *
     * 数字与集合之间的对应关系如下表所示：
     *
     * 0 TileA1
     * 1 TileA2
     * 2 TileA3
     * 3 TileA4
     * 4 TileA5
     * 5 TileB
     * 6 TileC
     * 7 TileD
     * 8 TileE
     */
    tilesetNames: Array<string>;

    /**
     * 标志表。包含各种标志的一维数组（表格）。
     *
     * 使用图块 ID 作为下标。每个位的对应关系如下所示：
     *
     * 0x0001：向下不可通行
     * 0x0002：向左不可通行
     * 0x0004：向右不可通行
     * 0x0008：向上不可通行
     * 0x0010：在普通角色上显示
     * 0x0020：梯子
     * 0x0040：灌木丛
     * 0x0080：柜台
     * 0x0100：伤害地板
     * 0x0200：船只不可通行
     * 0x0400：大船不可通行
     * 0x0800：飞艇无法着陆
     * 0xF000：地形标签
     * 本手册不讨论位运算，但它们类似于 C 语言中的位运算。
     * 如有需要，建议使用"十六进制位运算"等关键词在互联网上搜索。
     */
    flags: Array<number>;
  }

  /**
   * 公共事件的数据类。
   */
  export interface CommonEvent {
    /**
     * 事件 ID。
     */
    id: number;

    /**
     * 事件名称。
     */
    name: string;

    /**
     * 事件触发器（0：无，1：自动执行，2：并行处理）。
     */
    trigger: number;

    /**
     * 条件开关 ID。
     */
    switchId: number;

    /**
     * 事件命令列表。RPG.EventCommand 数组。
     */
    list: Array<EventCommand>;
  }

  export interface System {
    /**
     * 游戏标题。
     */
    gameTitle: string;

    /**
     * 用于更新检查的随机数。每次在 RPG Maker 中保存数据时，此数字都会更改。
     */
    versionId: number;

    /**
     * 区域设置字符串，如 "ja_JP" 和 "en_US"。
     */
    locale: string;

    /**
     * 初始队伍。角色 ID 数组。
     */
    partyMembers: Array<number>;

    /**
     * 货币单位。
     */
    currencyUnit: string;

    /**
     * 窗口色调。
     */
    windowTone: Array<number>;

    /**
     * System.AttackMotion 数据数组。
     */
    attackMotions: Array<System.AttackMotion>;

    /**
     * 元素列表。使用元素 ID 作为下标的字符串数组，0 位置为 nil。
     */
    elements: Array<string>;

    /**
     * 装备类型。包含以下下标的字符串数组：
     * 1：武器
     * 2：盾牌
     * 3：头部
     * 4：身体
     * 5：饰品
     */
    equipTypes: Array<string>;

    /**
     * 技能类型列表。使用技能类型 ID 作为下标的字符串数组，0 位置为 nil。
     */
    skillTypes: Array<string>;

    /**
     * 武器类型列表。使用武器类型 ID 作为下标的字符串数组，0 位置为 nil。
     */
    weaponTypes: Array<string>;

    /**
     * 防具类型列表。使用防具类型 ID 作为下标的字符串数组，0 位置为 nil。
     */
    armorTypes: Array<string>;

    /**
     * 开关名称列表。使用开关 ID 作为下标的字符串数组，0 位置为 nil。
     */
    switches: Array<string>;

    /**
     * 变量名称列表。使用变量 ID 作为下标的字符串数组，0 位置为 nil。
     */
    variables: Array<string>;

    /**
     * 小船设置（RPG.System.Vehicle）。
     */
    boat: System.Vehicle;

    /**
     * 大船设置（RPG.System.Vehicle）。
     */
    ship: System.Vehicle;

    /**
     * 飞艇设置（RPG.System.Vehicle）。
     */
    airship: System.Vehicle;

    /**
     * 标题（背景）图形的文件名。
     */
    title1Name: string;

    /**
     * 标题（边框）图形的文件名。
     */
    title2Name: string;

    /**
     * [绘制游戏标题] 选项的真值。
     */
    optDrawTitle: boolean;

    /**
     * [开始透明] 选项的真值。
     */
    optTransparent: boolean;

    /**
     * [显示玩家追随者] 选项的真值。
     */
    optFollowers: boolean;

    /**
     * [滑倒伤害导致战斗不能] 选项的真值。
     */
    optSlipDeath: boolean;

    /**
     * [地板伤害导致战斗不能] 选项的真值。
     */
    optFloorDeath: boolean;

    /**
     * [在战斗中显示 TP] 选项的真值。
     */
    optDisplayTp: boolean;

    /**
     * [保留队员的 EXP] 选项的真值。
     */
    optExtraExp: boolean;

    /**
     * [使用侧视战斗] 选项的真值。
     */
    optSideView: boolean;

    /**
     * 标题 BGM（RPG.AudioFile）。
     */
    titleBgm: AudioFile;

    /**
     * 战斗 BGM（RPG.AudioFile）。
     */
    battleBgm: AudioFile;

    /**
     * 战斗结束 ME（RPG.AudioFile）。
     */
    battleEndMe: AudioFile;

    /**
     * 游戏结束 ME（RPG.AudioFile）。
     */
    gameoverMe: AudioFile;

    /**
     * 音效。RPG.SE 数组。
     */
    sounds: Array<AudioFile>;

    /**
     * 玩家初始位置的地图 ID。
     */
    startMapId: number;

    /**
     * 玩家初始位置的地图 x 坐标。
     */
    startX: number;

    /**
     * 玩家初始位置的地图 y 坐标。
     */
    startY: number;

    /**
     * 术语（RPG.System.Terms）。
     */
    terms: System.Terms;

    /**
     * 战斗测试的队伍设置。RPG.System.TestBattler 数组。
     */
    testBattlers: Array<System.TestBattler>;

    /**
     * 战斗测试的敌群 ID。
     */
    testTroopId: number;

    /**
     * 用于编辑敌群和战斗测试的战斗背景（地板）图形文件名。
     */
    battleback1Name: string;

    /**
     * 用于编辑敌群和战斗测试的战斗背景（墙壁）图形文件名。
     */
    battleback2Name: string;

    /**
     * 用于编辑动画的战斗图形文件名。
     */
    battlerName: string;

    /**
     * 用于编辑动画的战斗图形色调的调整值（0..360）。
     */
    battlerHue: number;

    /**
     * 当前正在编辑的地图的 ID。内部使用。
     */
    editMapId: number;
  }

  namespace System {
    /**
     * 载具的数据类。
     */
    export interface Vehicle {
      /**
       * 载具行走图形的文件名。
       */
      characterName: string;
      /**

                 * 载具行走图形的索引（0..7）。
                 */
      characterIndex: number;

      /**
       * 载具的 BGM（RPG.AudioFile）。
       */
      bgm: AudioFile;

      /**
       * 载具初始位置的地图 ID。
       */
      startMapId: number;

      /**
       * 载具初始位置的地图 x 坐标。
       */
      startX: number;

      /**
       * 载具初始位置的地图 y 坐标。
       */
      startY: number;
    }

    /**
     * 术语的数据类。
     */
    export interface Terms {
      /**
       * 基本状态。包含以下下标的字符串数组：
       *
       * 0：等级
       * 1：等级（缩写）
       * 2：HP
       * 3：HP（缩写）
       * 4：MP
       * 5：MP（缩写）
       * 6：TP
       * 7：TP（缩写）
       * 8：EXP
       * 9：EXP（缩写）
       */
      basic: Array<string>;

      /**
       * 参数。包含以下下标的字符串数组：
       *
       * 0：最大生命值
       * 1：最大魔法值
       * 2：攻击力
       * 3：防御力
       * 4：魔法攻击力
       * 5：魔法防御力
       * 6：敏捷
       * 7：幸运
       * 8：命中
       * 9：回避
       */
      params: Array<string>;

      /**
       * 0：战斗
       * 1：逃跑
       * 2：攻击
       * 3：防御
       * 4：物品
       * 5：技能
       * 6：装备
       * 7：状态
       * 8：排序
       * 9：保存
       * 10：退出游戏
       * 11：选项
       * 12：武器
       * 13：防具
       * 14：关键物品
       * 15：更改装备
       * 16：最强装备
       * 17：全部卸下
       * 18：新游戏
       * 19：继续
       * 20：（未使用）
       * 21：返回标题
       * 22：取消
       * 23：（未使用）
       * 24：购买
       * 25：出售
       */
      commands: Array<string>;

      /**
       * 消息。
       */
      messages: { [key: string]: string };
    }

    /**
     * 战斗测试中使用的角色的数据类。
     */
    export interface TestBattler {
      /**
       * 角色 ID。
       */
      actorId: number;

      /**
       * 角色等级。
       */
      level: number;

      /**
       * 角色装备。以下标为索引的武器 ID 或防具 ID 数组：
       *
       * 0：武器
       * 1：盾牌
       * 2：头部
       * 3：身体
       * 4：饰品
       */
      equips: Array<number>;
    }

    export interface AttackMotion {
      /**
       * 动作类型。
       */
      type: number;

      /**
       * 武器图像 ID。
       */
      weaponImageId: number;
    }
  }

  /**
   * 音频文件的数据类。
   */
  export interface AudioFile {
    /**
     * 声音文件名。
     */
    name: string;

    /**
     * 声相。
     */
    pan: number;

    /**
     * 声音的音高（50..150）。默认值为 100。
     */
    pitch: number;

    /**
     * 声音的音量（0..100）。BGM 和 ME 的默认值为 100，BGS 和 SE 的默认值为 80。
     */
    volume: number;
  }
}
