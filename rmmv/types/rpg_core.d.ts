import * as PIXI from 'pixi.js';
//#region 位图
declare class Bitmap {
  /**
   * 加载图像文件并返回一个新的位图对象。
   *
   * @static
   * @method load
   * @param {String} url 纹理的图片URL
   * @return Bitmap
   */
  static load(url: string): Bitmap;

  /**
   * 对游戏画面进行截图并返回一个新的位图对象。
   *
   * @static
   * @method snap
   * @param {Stage} stage 舞台对象
   * @return Bitmap
   */
  static snap(stage: Stage): Bitmap;

  /**
   * 字体的字体名称。
   *
   * @property fontFace
   * @type String
   */
  fontFace: string;

  /**
   * 字体大小（以像素为单位）。
   *
   * @property fontSize
   * @type number
   */
  fontSize: number;

  /**
   * 字体是否为斜体。
   *
   * @property fontItalic
   * @type Boolean
   */
  fontItalic: number;

  /**
   * 文本颜色（CSS格式）。
   *
   * @property textColor
   * @type String
   */
  textColor: string;

  /**
   * 文本轮廓颜色（CSS格式）。
   *
   * @property outlineColor
   * @type String
   */
  outlineColor: string;

  /**
   * 文本轮廓的宽度。
   *
   * @property outlineWidth
   * @type number
   */
  outlineWidth: number;

  /**
   * [只读] 图像文件的URL。
   *
   * @property url
   * @type String
   */
  url: string;

  /**
   * [只读] 持有图像的基础纹理。
   *
   * @property baseTexture
   * @type PIXI.BaseTexture
   */
  baseTexture: PIXI.BaseTexture;

  /**
   * [只读] 位图画布。
   *
   * @property canvas
   * @type HTMLCanvasElement
   */
  canvas: HTMLCanvasElement;

  /**
   * [只读] 位图画布的2D上下文。
   *
   * @property context
   * @type CanvasRenderingContext2D
   */
  context: CanvasRenderingContext2D;

  /**
   * [只读] 位图的宽度。
   *
   * @property width
   * @type number
   */
  width: number;

  /**
   * [只读] 位图的高度。
   *
   * @property height
   * @type number
   */
  height: number;

  /**
   * [只读] 位图的矩形区域。
   *
   * @property rect
   * @type Rectangle
   */
  rect: Rectangle;

  /**
   * 是否应用平滑缩放。
   *
   * @property smooth
   * @type Boolean
   */
  smooth: boolean;

  /**
   * 绘制对象的不透明度，范围在(0, 255)之间。
   *
   * @property paintOpacity
   * @type number
   */
  paintOpacity: number;

  /**
   * 图像的缓存条目。在所有情况下，_url 与 cacheEntry.key 相同。
   * @type CacheEntry
   */
  cacheEntry: CacheEntry;

  /**
   * 表示图像的基本对象。
   *
   * @class Bitmap
   * @constructor
   * @param {Number} width 位图的宽度
   * @param {Number} height 位图的高度
   */
  constructor();
  constructor(width: number, height: number);

  /**
   * 检查位图是否已准备好渲染。
   *
   * @method isReady
   * @return {Boolean} 如果位图已准备好渲染，则为true
   */
  isReady(): boolean;

  /**
   * 检查是否发生了加载错误。
   *
   * @method isError
   * @return {Boolean} 如果发生了加载错误，则为true
   */
  isError(): boolean;

  /**
   * 调整位图的尺寸。
   *
   * @method resize
   * @param {Number} width 位图的新宽度
   * @param {Number} height 位图的新高度
   */
  resize(width: number, height: number): void;

  /**
   * 执行块传输。
   *
   * @method blt
   * @param {Bitmap} source 要绘制的位图
   * @param {Number} sx 源位图中的x坐标
   * @param {Number} sy 源位图中的y坐标
   * @param {Number} sw 源图像的宽度
   * @param {Number} sh 源图像的高度
   * @param {Number} dx 目标位图中的x坐标
   * @param {Number} dy 目标位图中的y坐标
   * @param {Number} [dw=sw] 在目标中绘制图像的宽度
   * @param {Number} [dh=sh] 在目标中绘制图像的高度
   */
  blt(
    source: Bitmap,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    dx: number,
    dy: number,
    dw?: number,
    dh?: number
  ): void;

  /**
   * 返回指定点的像素颜色。
   *
   * @method getPixel
   * @param {Number} x 位图中像素的x坐标
   * @param {Number} y 位图中像素的y坐标
   * @return {String} 像素颜色（十六进制格式）
   */
  getPixel(x: number, y: number): string;

  /**
   * 返回指定点的Alpha像素值。
   *
   * @method getAlphaPixel
   * @param {Number} x 位图中像素的x坐标
   * @param {Number} y 位图中像素的y坐标
   * @return {String} Alpha值
   */
  getAlphaPixel(x: number, y: number): string;

  /**
   * 清除指定的矩形区域。
   *
   * @method clearRect
   * @param {Number} x 左上角的x坐标
   * @param {Number} y 左上角的y坐标
   * @param {Number} width 要清除的矩形的宽度
   * @param {Number} height 要清除的矩形的高度
   */
  clearRect(x: number, y: number, width: number, height: number): void;

  /**
   * 清除整个位图。
   *
   * @method clear
   */
  clear(): void;

  /**
   * 填充指定的矩形区域。
   *
   * @method fillRect
   * @param {Number} x 左上角的x坐标
   * @param {Number} y 左上角的y坐标
   * @param {Number} width 要填充的矩形的宽度
   * @param {Number} height 要填充的矩形的高度
   * @param {String} color 矩形的颜色（CSS格式）
   */
  fillRect(x: number, y: number, width: number, height: number, color: string): void;

  /**
   * 填充整个位图。
   *
   * @method fillAll
   * @param {String} color 矩形的颜色（CSS格式）
   */
  fillAll(color: string): void;

  /**
   * 用渐变颜色绘制矩形。
   *
   * @method gradientFillRect
   * @param {Number} x 左上角的x坐标
   * @param {Number} y 左上角的y坐标
   * @param {Number} width 要填充的矩形的宽度
   * @param {Number} height 要填充的矩形的高度
   * @param {String} color1 渐变的起始颜色
   * @param {String} color2 渐变的结束颜色
   * @param {Boolean} vertical 是否为垂直渐变
   */
  gradientFillRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color1: string,
    color2: string,
    vertical?: boolean
  ): void;

  /**
   * 绘制实心圆。
   *
   * @method drawCircle
   * @param {Number} x 圆心的x坐标
   * @param {Number} y 圆心的y坐标
   * @param {Number} radius 圆的半径
   * @param {String} color 圆的颜色（CSS格式）
   */
  drawCircle(x: number, y: number, radius: number, color: string): void;

  /**
   * 在位图上绘制描边文本。
   *
   * @method drawText
   * @param {String} text 要绘制的文本
   * @param {Number} x 文本左侧的x坐标
   * @param {Number} y 文本顶部的y坐标
   * @param {Number} maxWidth 文本的最大允许宽度
   * @param {Number} lineHeight 文本行高
   * @param {String} align 文本的对齐方式
   */
  drawText(
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number,
    align: string
  ): void;

  /**
   * 返回指定文本的宽度。
   *
   * @method measureTextWidth
   * @param {String} text 要测量的文本
   * @return {Number} 文本的宽度（以像素为单位）
   */
  measureTextWidth(text: string): number;

  /**
   * 调整整个位图的色调。
   *
   * @method adjustTone
   * @param {Number} r 红色强度，范围(-255, 255)
   * @param {Number} g 绿色强度，范围(-255, 255)
   * @param {Number} b 蓝色强度，范围(-255, 255)
   */
  adjustTone(r: number, g: number, b: number): void;

  /**
   * 旋转整个位图的色相。
   *
   * @method rotateHue
   * @param {Number} offset 色相偏移量（以360度为单位）
   */
  rotateHue(offset: number): void;

  /**
   * 对位图应用模糊效果。
   *
   * @method blur
   */
  blur(): void;

  /**
   * 添加一个回调函数，当位图加载完成时将被调用。
   *
   * @method addLoadListener
   * @param {Function} listner 回调函数
   */
  addLoadListener(listner: () => void): void;

  /**
   * 接触资源（标记为使用，防止被释放）。
   * @method touch
   */
  touch(): void;

  /**
   * 执行块传输，假设原始图像未被修改（无色相变化）。
   *
   * @method blt
   * @param {Bitmap} source 要绘制的位图
   * @param {Number} sx 源位图中的x坐标
   * @param {Number} sy 源位图中的y坐标
   * @param {Number} sw 源图像的宽度
   * @param {Number} sh 源图像的高度
   * @param {Number} dx 目标位图中的x坐标
   * @param {Number} dy 目标位图中的y坐标
   * @param {Number} [dw=sw] 在目标中绘制图像的宽度
   * @param {Number} [dh=sh] 在目标中绘制图像的高度
   */
  bltImage(
    source: Bitmap,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    dx: number,
    dy: number,
    dw: number,
    dh: number
  ): void;

  protected _canvas: HTMLCanvasElement;
  protected _context: CanvasRenderingContext2D;
  protected _baseTexture: PIXI.BaseTexture;
  protected _image: HTMLImageElement;
  protected _url: string;
  protected _paintOpacity: number;
  protected _smooth: boolean;
  protected _loadListeners: () => void;
  protected _isLoading: boolean;
  protected _hasError: boolean;

  /**
   * @method _makeFontNameText
   * @return {String} 字体名称文本
   * @private
   */
  protected _makeFontNameText(): string;

  /**
   * @method _drawTextOutline
   * @param {String} text
   * @param {Number} tx
   * @param {Number} ty
   * @param {Number} maxWidth
   * @private
   */
  protected _drawTextOutline(text: number, tx: number, ty: number, maxWidth: number): void;

  /**
   * @method _drawTextBody
   * @param {String} text
   * @param {Number} tx
   * @param {Number} ty
   * @param {Number} maxWidth
   * @private
   */
  protected _drawTextBody(text: string, tx: number, ty: number, maxWidth: number): void;

  /**
   * @method _onLoad
   * @private
   */
  protected _onLoad(): void;

  /**
   * @method _callLoadListeners
   * @private
   */
  protected _callLoadListeners(): void;

  /**
   * @method _onError
   * @private
   */
  protected _onError(): void;

  /**
   * @method _setDirty
   * @private
   */
  protected _setDirty(): void;
}
//#endregion
//#region 执行图形处理的静态类
/**
 * @class Graphics
 */
interface GraphicsStatic {
  /**
   * 游戏画面的总帧数。
   *
   * @static
   * @property frameCount
   * @type number
   */
  frameCount: number;

  /**
   * PIXI.blendModes.NORMAL 的别名。
   *
   * @static
   * @property BLEND_NORMAL
   * @type number
   * @final
   */
  BLEND_NORMAL: number;

  /**
   * PIXI.blendModes.ADD 的别名。
   *
   * @static
   * @property BLEND_ADD
   * @type number
   * @final
   */
  BLEND_ADD: number;

  /**
   * PIXI.blendModes.MULTIPLY 的别名。
   *
   * @static
   * @property BLEND_MULTIPLY
   * @type number
   * @final
   */
  BLEND_MULTIPLY: number;

  /**
   * PIXI.blendModes.SCREEN 的别名。
   *
   * @static
   * @property BLEND_SCREEN
   * @type number
   * @final
   */
  BLEND_SCREEN: number;

  /**
   * 游戏屏幕的宽度。
   *
   * @static
   * @property width
   * @type number
   */
  width: number;

  /**
   * 游戏屏幕的高度。
   *
   * @static
   * @property height
   * @type number
   */
  height: number;

  /**
   * 窗口显示区域的宽度。
   *
   * @static
   * @property boxWidth
   * @type number
   */
  boxWidth: number;

  /**
   * 窗口显示区域的高度。
   *
   * @static
   * @property boxHeight
   * @type number
   */
  boxHeight: number;

  /**
   * 游戏屏幕的缩放比例。
   *
   * @static
   * @property scale
   * @type number
   */
  scale: number;

  /**
   * 初始化图形系统。
   *
   * @static
   * @method initialize
   * @param {Number} width 游戏屏幕的宽度
   * @param {Number} height 游戏屏幕的高度
   * @param {String} type 渲染器类型。
   *                 'canvas', 'webgl', 或 'auto'.
   */
  initialize(): void;
  initialize(width: number, height: number, type: string): void;

  /**
   * 为 FPSMeter 标记每帧的开始。
   *
   * @static
   * @method tickStart
   */
  tickStart(): void;

  /**
   * 为 FPSMeter 标记每帧的结束。
   *
   * @static
   * @method tickEnd
   */
  tickEnd(): void;

  /**
   * 将舞台渲染到游戏屏幕。
   *
   * @static
   * @method render
   * @param {Stage} stage 要渲染的舞台对象
   */
  render(stage?: Stage): void;

  /**
   * 检查渲染器类型是否为 WebGL。
   *
   * @static
   * @method isWebGL
   * @return {Boolean} 如果渲染器类型是 WebGL 则返回 true
   */
  isWebGL(): boolean;

  /**
   * 检查当前浏览器是否支持 WebGL。
   *
   * @static
   * @method hasWebGL
   * @return {Boolean} 如果当前浏览器支持 WebGL 则返回 true。
   */
  hasWebGL(): boolean;

  /**
   * 检查是否支持画布混合模式 'difference'。
   *
   * @static
   * @method canUseDifferenceBlend
   * @return {Boolean} 如果支持画布混合模式 'difference' 则返回 true
   */
  canUseDifferenceBlend(): boolean;

  /**
   * 检查是否支持画布混合模式 'saturation'。
   *
   * @static
   * @method canUseSaturationBlend
   * @return {Boolean} 如果支持画布混合模式 'saturation' 则返回 true
   */
  canUseSaturationBlend(): boolean;

  /**
   * 设置"正在加载"图片的源。
   *
   * @static
   * @method setLoadingImage
   * @param {String} src 图片路径
   */
  setLoadingImage(src: string): void;

  /**
   * 初始化显示"正在加载"图片的计数器。
   *
   * @static
   * @method startLoading
   */
  startLoading(): void;

  /**
   * 增加加载计数器，并在必要时显示"正在加载"图片。
   *
   * @static
   * @method updateLoading
   */
  updateLoading(): void;

  /**
   * 清除"正在加载"图片。
   *
   * @static
   * @method endLoading
   */
  endLoading(): void;

  /**
   * 在屏幕上显示错误文本。
   *
   * @static
   * @method printError
   * @param {String} name 错误名称
   * @param {String} message 错误消息
   */
  printError(name: string, message: string): void;

  /**
   * 显示 FPSMeter 元素。
   *
   * @static
   * @method showFps
   */
  showFps(): void;

  /**
   * 隐藏 FPSMeter 元素。
   *
   * @static
   * @method hideFps
   */
  hideFps(): void;

  /**
   * 加载字体文件。
   *
   * @static
   * @method loadFont
   * @param {String} name 字体的名称
   * @param {String} url 字体文件的 URL
   */
  loadFont(name: string, url: string): void;

  /**
   * 检查字体文件是否已加载。
   *
   * @static
   * @method isFontLoaded
   * @param {String} name 字体的名称
   * @return {Boolean} 如果字体文件已加载则返回 true
   */
  isFontLoaded(name: string): boolean;

  /**
   * 开始播放视频。
   *
   * @static
   * @method playVideo
   * @param {String} src
   */
  playVideo(src: string): void;

  /**
   * 检查视频是否正在播放。
   *
   * @static
   * @method isVideoPlaying
   * @return {Boolean} 如果视频正在播放则返回 true
   */
  isVideoPlaying(): boolean;

  /**
   * 检查浏览器是否可以播放指定的视频类型。
   *
   * @static
   * @method canPlayVideoType
   * @param {String} type 要测试支持性的视频类型
   * @return {Boolean} 如果浏览器可以播放指定的视频类型则返回 true
   */
  canPlayVideoType(type: string): boolean;

  /**
   * 将页面上的 x 坐标转换为画布区域上对应的 x 坐标。
   *
   * @static
   * @method pageToCanvasX
   * @param {Number} x 要转换的页面上的 x 坐标
   * @return {Number} 画布区域上的 x 坐标
   */
  pageToCanvasX(x: number): number;

  /**
   * 将页面上的 y 坐标转换为画布区域上对应的 y 坐标。
   *
   * @static
   * @method pageToCanvasY
   * @param {Number} y 要转换的页面上的 y 坐标
   * @return {Number} 画布区域上的 y 坐标
   */
  pageToCanvasY(y: number): number;

  /**
   * 检查指定点是否在游戏画布区域内。
   *
   * @static
   * @method isInsideCanvas
   * @param {Number} x 画布区域上的 x 坐标
   * @param {Number} y 画布区域上的 y 坐标
   * @return {Boolean} 如果指定点在游戏画布区域内则返回 true
   */
  isInsideCanvas(x: number, y: number): boolean;

  /**
   * 调用 pixi.js 垃圾回收器
   */
  callGC(): void;

  _width: number;
  _height: number;
  _rendererType: string;
  _boxWidth: number;
  _boxHeight: number;
  _scale: number;
  _realScale: number;
  _errorPrinter: boolean;
  _canvas: HTMLCanvasElement;
  _video: HTMLVideoElement;
  _upperCanvas: HTMLCanvasElement;
  _renderer: PIXI.SystemRenderer;
  _fpsMeter: FPSMeter;
  _modeBox: HTMLDivElement;
  _skipCount: number;
  _maxSkip: number;
  _rendered: boolean;
  _loadingImage: HTMLImageElement;
  _loadingCount: number;
  _fpsMeterToggled: boolean;
  _stretchEnabled: boolean;
  _canUseDifferenceBlend: boolean;
  _canUseSaturationBlend: boolean;
  _hiddenCanvas: HTMLCanvasElement;

  /**
   * @static
   * @method _createAllElements
   * @private
   */
  _createAllElements(): void;

  /**
   * @static
   * @method _updateAllElements
   * @private
   */
  _updateAllElements(): void;

  /**
   * @static
   * @method _updateRealScale
   * @private
   */
  _updateRealScale(): void;

  /**
   * @static
   * @method _makeErrorHtml
   * @param {String} name
   * @param {String} message
   * @return {String}
   * @private
   */
  _makeErrorHtml(name: string, message: string): string;

  /**
   * @static
   * @method _defaultStretchMode
   * @private
   */
  _defaultStretchMode(): boolean;

  /**
   * @static
   * @method _testCanvasBlendModes
   * @private
   */
  _testCanvasBlendModes(): void;

  /**
   * @static
   * @method _modifyExistingElements
   * @private
   */
  _modifyExistingElements(): void;

  /**
   * @static
   * @method _createErrorPrinter
   * @private
   */
  _createErrorPrinter(): void;

  /**
   * @static
   * @method _updateErrorPrinter
   * @private
   */
  _updateErrorPrinter(): void;

  /**
   * @static
   * @method _createCanvas
   * @private
   */
  _createCanvas(): void;

  /**
   * @static
   * @method _updateCanvas
   * @private
   */
  _updateCanvas(): void;

  /**
   * @static
   * @method _createVideo
   * @private
   */
  _createVideo(): void;

  /**
   * @static
   * @method _updateVideo
   * @private
   */
  _updateVideo(): void;

  /**
   * @static
   * @method _createUpperCanvas
   * @private
   */
  _createUpperCanvas(): void;

  /**
   * @static
   * @method _updateUpperCanvas
   * @private
   */
  _updateUpperCanvas(): void;

  /**
   * @static
   * @method _clearUpperCanvas
   * @private
   */
  _clearUpperCanvas(): void;

  /**
   * @static
   * @method _paintUpperCanvas
   * @private
   */
  _paintUpperCanvas(): void;

  /**
   * @static
   * @method _createRenderer
   * @private
   */
  _createRenderer(): void;

  /**
   * @static
   * @method _updateRenderer
   * @private
   */
  _updateRenderer(): void;

  /**
   * @static
   * @method _createFPSMeter
   * @private
   */
  _createFPSMeter(): void;

  /**
   * @static
   * @method _createModeBox
   * @private
   */
  _createModeBox(): void;

  /**
   * @static
   * @method _createGameFontLoader
   * @private
   */
  _createGameFontLoader(): void;

  /**
   * @static
   * @method _createFontLoader
   * @param {String} name
   * @private
   */
  _createFontLoader(name: string): void;

  /**
   * @static
   * @method _centerElement
   * @param {HTMLCanvasElement} element
   * @private
   */
  _centerElement(element: HTMLCanvasElement): void;

  /**
   * @static
   * @method _disableTextSelection
   * @private
   */
  _disableTextSelection(): void;

  /**
   * @static
   * @method _disableContextMenu
   * @private
   */
  _disableContextMenu(): void;

  /**
   * @static
   * @method _applyCanvasFilter
   * @private
   */
  _applyCanvasFilter(): void;

  /**
   * @static
   * @method _onVideoLoad
   * @private
   */
  _onVideoLoad(): void;

  /**
   * @static
   * @method _onVideoError
   * @private
   */
  _onVideoError(): void;

  /**
   * @static
   * @method _onVideoEnd
   * @private
   */
  _onVideoEnd(): void;

  /**
   * @static
   * @method _updateVisibility
   * @param {Boolean} videoVisible
   * @private
   */
  _updateVisibility(videoVisible: boolean): void;

  /**
   * @static
   * @method _isVideoVisible
   * @return {Boolean}
   * @private
   */
  _isVideoVisible(): boolean;

  /**
   * @static
   * @method _setupEventHandlers
   * @private
   */
  _setupEventHandlers(): void;

  /**
   * @static
   * @method _onWindowResize
   * @private
   */
  _onWindowResize(): void;

  /**
   * @static
   * @method _onKeyDown
   * @param {KeyboardEvent} event
   * @private
   */
  _onKeyDown(event: KeyboardEvent): void;

  /**
   * @static
   * @method _switchFPSMeter
   * @private
   */
  _switchFPSMeter(): void;

  /**
   * @static
   * @method _switchStretchMode
   * @return {Boolean}
   * @private
   */
  _switchStretchMode(): boolean;

  /**
   * @static
   * @method _switchFullScreen
   * @private
   */
  _switchFullScreen(): void;

  /**
   * @static
   * @method _isFullScreen
   * @return {Boolean}
   * @private
   */
  _isFullScreen(): boolean;

  /**
   * @static
   * @method _requestFullScreen
   * @private
   */
  _requestFullScreen(): void;

  /**
   * @static
   * @method _cancelFullScreen
   * @private
   */
  _cancelFullScreen(): void;
}
declare const Graphics: GraphicsStatic;
//#endregion
//#region 处理HTML5中的音频静态类
/**
 * @class Html5Audio
 * @constructor
 */
interface Html5AudioStatic {
  _initialized: boolean;
  _unlocked: boolean;
  _audioElement: HTMLAudioElement;
  _gainTweenInterval: number;
  _tweenGain: number;
  _tweenTargetGain: number;
  _tweenGainStep: number;
  _staticSePath: boolean;
  _volume: number;
  _loadListeners: Array<() => void>;
  _hasError: boolean;
  _autoPlay: boolean;
  _isLoading: boolean;
  _buffered: boolean;

  /**
   * [只读] 音频文件的 URL。
   *
   * @property url
   * @type String
   */
  url: string;

  /**
   * 音频的音量。
   *
   * @property volume
   * @type number
   */
  volume: number;

  /**
   * 设置 Html5 Audio。
   *
   * @static
   * @method setup
   * @param {String} url 音频文件的 URL
   */
  setup(url: string): void;

  /**
   * 初始化音频系统。
   *
   * @static
   * @method initialize
   * @return {Boolean} 如果音频系统可用则返回 true
   */
  initialize(): boolean;

  /**
   * 清除音频数据。
   *
   * @static
   * @method clear
   */
  clear(): void;

  /**
   * 设置静态音效的 URL。
   *
   * @static
   * @param {String} url
   */
  setStaticSe(url: string): void;

  /**
   * 检查音频数据是否准备就绪可以播放。
   *
   * @static
   * @method isReady
   * @return {Boolean} 如果音频数据准备就绪可以播放则返回 true
   */
  isReady(): boolean;

  /**
   * 检查是否发生了加载错误。
   *
   * @static
   * @method isError
   * @return {Boolean} 如果发生了加载错误则返回 true
   */
  isError(): boolean;

  /**
   * 检查音频是否正在播放。
   *
   * @static
   * @method isPlaying
   * @return {Boolean} 如果音频正在播放则返回 true
   */
  isPlaying(): boolean;

  /**
   * 播放音频。
   *
   * @static
   * @method play
   * @param {Boolean} loop 音频数据是否循环播放
   * @param {Number} offset 开始播放的位置（秒）
   */
  play(loop: boolean, offset: number): void;

  /**
   * 停止音频。
   *
   * @static
   * @method stop
   */
  stop(): void;

  /**
   * 执行音频淡入效果。
   *
   * @static
   * @method fadeIn
   * @param {Number} duration 淡入时间（秒）
   */
  fadeIn(duration: number): void;

  /**
   * 执行音频淡出效果。
   *
   * @static
   * @method fadeOut
   * @param {Number} duration 淡出时间（秒）
   */
  fadeOut(duration: number): void;

  /**
   * 获取音频的播放位置。
   *
   * @static
   * @method seek
   */
  seek(): number;

  /**
   * 添加一个回调函数，当音频数据加载完成时将被调用。
   *
   * @static
   * @method addLoadListener
   * @param {Function} listener 回调函数
   */
  addLoadListener(listener: () => void): void;

  /**
   * @static
   * @method _setupEventHandlers
   * @private
   */
  _setupEventHandlers(): void;

  /**
   * @static
   * @method _onTouchStart
   * @private
   */
  _onTouchStart(): void;

  /**
   * @static
   * @method _onVisibilityChange
   * @private
   */
  _onVisibilityChange(): void;

  /**
   * @static
   * @method _onLoadedData
   * @private
   */
  _onLoadedData(): void;

  /**
   * @static
   * @method _onError
   * @private
   */
  _onError(): void;

  /**
   * @static
   * @method _onEnded
   * @private
   */
  _onEnded(): void;

  /**
   * @static
   * @method _onHide
   * @private
   */
  _onHide(): void;

  /**
   * @static
   * @method _onShow
   * @private
   */
  _onShow(): void;

  /**
   * @static
   * @method _load
   * @param {String} url
   * @private
   */
  _load(url: string): void;

  /**
   * @static
   * @method _startPlaying
   * @param {Boolean} loop
   * @param {Number} offset
   * @private
   */
  _startPlaying(loop: boolean, offset: number): void;

  /**
   * @static
   * @method _onLoad
   * @private
   */
  _onLoad(): void;

  /**
   * @static
   * @method _startGainTween
   * @param {Number} duration
   * @private
   */
  _startGainTween(duration: number): void;

  /**
   * @static
   * @method _applyTweenValue
   * @param {Number} volume
   * @private
   */
  _applyTweenValue(volume: number): void;
}
declare const Html5Audio: Html5AudioStatic;
//#endregion
//#region 处理键盘和游戏手柄输入数据的静态类
/**
 * @class Input
 */
interface InputStatic {
  _currentState: { [key: string]: boolean };
  _previousState: { [key: string]: boolean };
  _gamepadStates: Array<Array<boolean>>;
  _latestButton: string;
  _pressedTime: number;
  _dir4: number;
  _dir8: number;
  _preferredAxis: string;
  _date: number;

  /**
   * 按键重复的等待时间（以帧为单位）。
   *
   * @static
   * @property keyRepeatWait
   * @type number
   */
  keyRepeatWait: number;

  /**
   * 按键重复的间隔时间（以帧为单位）。
   *
   * @static
   * @property keyRepeatInterval
   * @type number
   */
  keyRepeatInterval: number;

  /**
   * 从虚拟键码映射到键名的哈希表。
   *
   * @static
   * @property keyMapper
   * @type Object
   */
  keyMapper: { [key: number]: string };

  /**
   * 从游戏手柄按钮映射到键名的哈希表。
   *
   * @static
   * @property gamepadMapper
   * @type Object
   */
  gamepadMapper: { [key: number]: string };

  /**
   * [只读] 四方向值，以小键盘数字表示，0 表示无方向。
   *
   * @static
   * @property dir4
   * @type number
   */
  dir4: number;

  /**
   * [只读] 八方向值，以小键盘数字表示，0 表示无方向。
   *
   * @static
   * @property dir8
   * @type number
   */
  dir8: number;

  /**
   * [只读] 最近一次输入的时间（毫秒）。
   *
   * @static
   * @property date
   * @type number
   */
  date: number;

  /**
   * 初始化输入系统。
   *
   * @static
   * @method initialize
   */
  initialize(): void;

  /**
   * 清除所有输入数据。
   *
   * @static
   * @method clear
   */
  clear(): void;

  /**
   * 更新输入数据。
   *
   * @static
   * @method update
   */
  update(): void;

  /**
   * 检查按键当前是否被按下。
   *
   * @static
   * @method isPressed
   * @param {String} keyName 按键的映射名称
   * @return {Boolean} 如果按键被按下则返回 true
   */
  isPressed(keyName: string): boolean;

  /**
   * 检查按键是否刚刚被按下。
   *
   * @static
   * @method isTriggered
   * @param {String} keyName 按键的映射名称
   * @return {Boolean} 如果按键被触发则返回 true
   */
  isTriggered(keyName: string): boolean;

  /**
   * 检查按键是否刚刚被按下或发生了按键重复。
   *
   * @static
   * @method isRepeated
   * @param {String} keyName 按键的映射名称
   * @return {Boolean} 如果按键重复则返回 true
   */
  isRepeated(keyName: string): boolean;

  /**
   * 检查按键是否被长按。
   *
   * @static
   * @method isLongPressed
   * @param {String} keyName 按键的映射名称
   * @return {Boolean} 如果按键被长按则返回 true
   */
  isLongPressed(keyName: string): boolean;

  /**
   * @static
   * @method _wrapNwjsAlert
   * @private
   */
  _wrapNwjsAlert(): void;

  /**
   * @static
   * @method _setupEventHandlers
   * @private
   */
  _setupEventHandlers(): void;

  /**
   * @static
   * @method _onKeyDown
   * @param {KeyboardEvent} event
   * @private
   */
  _onKeyDown(event: KeyboardEvent): void;

  /**
   * @static
   * @method _shouldPreventDefault
   * @param {Number} keyCode
   * @return {Boolean}
   * @private
   */
  _shouldPreventDefault(keyCode: number): boolean;

  /**
   * @static
   * @method _onKeyUp
   * @param {KeyboardEvent} event
   * @private
   */
  _onKeyUp(event: KeyboardEvent): void;

  /**
   * @static
   * @method _onLostFocus
   * @private
   */
  _onLostFocus(): void;

  /**
   * @static
   * @method _pollGamepads
   * @private
   */
  _pollGamepads(): void;

  /**
   * @static
   * @method _updateGamepadState
   * @param {Gamepad} gamepad
   * @private
   */
  _updateGamepadState(gamepad: Gamepad): void;

  /**
   * @static
   * @method _updateDirection
   * @private
   */
  _updateDirection(): void;

  /**
   * @static
   * @method _signX
   * @return {number}
   * @private
   */
  _signX(): number;

  /**
   * @static
   * @method _signY
   * @return {number}
   * @private
   */
  _signY(): number;

  /**
   * @static
   * @method _makeNumpadDirection
   * @param {Number} x
   * @param {Number} y
   * @return {number}
   * @private
   */
  _makeNumpadDirection(x: number, y: number): number;

  /**
   * @static
   * @method _isEscapeCompatible
   * @param {String} keyName
   * @return {Boolean}
   * @private
   */
  _isEscapeCompatible(keyName: string): boolean;
}
declare const Input: InputStatic;
//#endregion
//#region 标准js扩展接口
/**
 * 这不是一个类，但包含一些将被添加到标准 JavaScript 对象中的方法。
 *
 * @class JsExtensions
 */
declare class JsExtensions {}
//#endregion
//#region 数组类
interface Array<T> {
  /**
   * 创建数组的浅拷贝。
   *
   * @method Array.prototype.clone
   * @return {Array} 数组的浅拷贝
   */
  clone(): Array<T>;

  /**
   * 检查数组是否包含指定元素。
   *
   * @method Array.prototype.contains
   * @param {Any} element 要查找的元素
   * @return {Boolean} 如果数组包含指定元素则返回 true
   */
  contains(element: T): boolean;

  /**
   * 检查两个数组是否相同。
   *
   * @method Array.prototype.equals
   * @param {Array} array 要比较的数组
   * @return {Boolean} 如果两个数组相同则返回 true
   */
  equals(array: Array<any>): boolean;
}
//#endregion
//#region 数学类
interface Math {
  /**
   * 生成范围在 (0, max-1) 内的随机整数。
   *
   * @static
   * @method Math.randomInt
   * @param {Number} max 上限边界（不包含）
   * @return {Number} 随机整数
   */
  randomInt(max: number): number;
}
//#endregion
//#region 数值类
interface number {
  /**
   * 返回一个数值，其值被限制在给定范围内。
   *
   * @method number.prototype.clamp
   * @param {Number} min 下限边界
   * @param {Number} max 上限边界
   * @return {Number} 在范围 (min, max) 内的数值
   */
  clamp(min: number, max: number): number;

  /**
   * 返回始终为正数的模值。
   *
   * @method number.prototype.mod
   * @param {Number} n 除数
   * @return {Number} 模值
   */
  mod(n: number): number;

  /**
   * 生成带前导零的数字字符串。
   *
   * @method number.prototype.padZero
   * @param {Number} length 输出字符串的长度
   * @return {String} 带前导零的字符串
   */
  padZero(length: number): string;
}
//#endregion
//#region 字符串类
interface String {
  /**
   * 检查字符串是否包含指定字符串。
   *
   * @method String.prototype.contains
   * @param {String} str 要查找的字符串
   * @return {Boolean} 如果字符串包含指定字符串则返回 true
   */
  contains(str: string): boolean;

  /**
   * 将字符串中的 %1, %2 等占位符替换为参数。
   *
   * @method String.prototype.format
   * @param {Any} ...args 要格式化的对象
   * @return {String} 格式化后的字符串
   */
  format(...args: Array<any>): string;

  /**
   * 生成带前导零的数字字符串。
   *
   * @method String.prototype.padZero
   * @param {Number} length 输出字符串的长度
   * @return {String} 带前导零的字符串
   */
  padZero(length: number): string;
}
//#endregion
//#region 点类
declare class Point extends PIXI.Point {
  /**
   * 点类。
   *
   * @class Point
   * @constructor
   * @param {Number} x x坐标
   * @param {Number} y y坐标
   */
  constructor(x?: number, y?: number);

  /**
   * x坐标。
   *
   * @property x
   * @type number
   */
  x: number;

  /**
   * y坐标。
   *
   * @property y
   * @type number
   */
  y: number;
}
//#endregion
//#region 矩形类
declare class Rectangle extends PIXI.Rectangle {
  /**
   * @static
   * @property emptyRectangle
   * @type Rectangle
   */
  static emptyRectangle: Rectangle;

  /**
   * 矩形类。
   *
   * @class Rectangle
   * @constructor
   * @param {Number} x 左上角的x坐标
   * @param {Number} y 左上角的y坐标
   * @param {Number} width 矩形的宽度
   * @param {Number} height 矩形的高度
   */
  constructor(x?: number, y?: number, width?: number, height?: number);

  /**
   * 左上角的x坐标。
   *
   * @property x
   * @type number
   */
  x: number;

  /**
   * 左上角的y坐标。
   *
   * @property y
   * @type number
   */
  y: number;

  /**
   * 矩形的宽度。
   *
   * @property width
   * @type number
   */
  width: number;

  /**
   * 矩形的高度。
   *
   * @property height
   * @type number
   */
  height: number;
}
//#endregion
//#region 处理带有对象信息的 JSON 的静态类
/**
 * 处理带有对象信息的 JSON 的静态类。
 *
 * @class JsonEx
 */
interface JsonExStatic {
  /**
   * 对象的最大深度。
   *
   * @static
   * @property maxDepth
   * @type number
   * @default 100
   */
  maxDepth: number;

  /**
   * 创建指定对象的深度副本。
   *
   * @static
   * @method makeDeepCopy
   * @param {Object} object 要被复制的对象
   * @return {Object} 复制后的对象
   */
  makeDeepCopy(object: any): any;

  /**
   * 将对象转换为包含对象信息的 JSON 字符串。
   *
   * @static
   * @method stringify
   * @param {Object} object 要被转换的对象
   * @return {String} JSON 字符串
   */
  stringify(object: any): string;

  /**
   * 解析 JSON 字符串并重建对应的对象。
   *
   * @static
   * @method parse
   * @param {String} json JSON 字符串
   * @return {Object} 重建后的对象
   */
  parse(json: string): any;

  /**
   * @static
   * @method _encode
   * @param {Object} value
   * @param {Number} depth
   * @return {Object}
   * @private
   */
  _encode(value: any, depth: number): any;

  /**
   * @static
   * @method _decode
   * @param {Object} value
   * @return {Object}
   * @private
   */
  _decode(value: any): any;

  /**
   * @static
   * @method _getConstructorName
   * @param {Object} value
   * @return {String}
   * @private
   */
  _getConstructorName(value: any): string;

  /**
   * @static
   * @method _resetPrototype
   * @param {Object} value
   * @param {Object} prototype
   * @return {Object}
   * @private
   */
  _resetPrototype(value: any, prototype: any): any;
}

/**
 * 处理带有对象信息的 JSON 的静态类。
 *
 * @class JsonEx
 */
declare const JsonEx: JsonExStatic;
//#endregion
//#region ScreenSprite
declare class ScreenSprite extends PIXI.Sprite {
  /**
   * 精灵的不透明度（0 到 255）。
   *
   * @property opacity
   * @type number
   */
  opacity: number;

  /**
   * 覆盖整个游戏屏幕的精灵。
   *
   * @class ScreenSprite
   * @constructor
   */
  constructor();

  /**
   * 将屏幕精灵的颜色设置为黑色。
   *
   * @method setBlack
   */
  setBlack(): void;

  /**
   * 将屏幕精灵的颜色设置为白色。
   *
   * @method setWhite
   */
  setWhite(): void;

  /**
   * 通过数值设置屏幕精灵的颜色。
   *
   * @method setColor
   * @param {Number} r 红色值，范围 (0, 255)
   * @param {Number} g 绿色值，范围 (0, 255)
   * @param {Number} b 蓝色值，范围 (0, 255)
   */
  setColor(r?: number, g?: number, b?: number): void;

  protected _graphics: PIXI.Graphics;
  protected _red: number;
  protected _green: number;
  protected _blue: number;
  protected _colorText: string;
}
//#endregion
//#region Sprite
declare class Sprite extends PIXI.Sprite {
  /**
   * 已创建对象的数量。
   *
   * @static
   * @property _counter
   * @type number
   */
  static _counter: number;

  /**
   * 精灵使用的图像。
   *
   * @property bitmap
   * @type Bitmap
   */
  bitmap: Bitmap;

  /**
   * 不考虑缩放比例的精灵宽度。
   *
   * @property width
   * @type number
   */
  width: number;

  /**
   * 不考虑缩放比例的精灵高度。
   *
   * @property height
   * @type number
   */
  height: number;

  /**
   * 精灵的不透明度（0 到 255）。
   *
   * @property opacity
   * @type number
   */
  opacity: number;

  /**
   * 精灵的可见性。
   *
   * @property visible
   * @type Boolean
   */
  visible: boolean;

  /**
   * 精灵的 x 坐标。
   *
   * @property x
   * @type number
   */
  x: number;

  /**
   * 精灵的 y 坐标。
   *
   * @property y
   * @type number
   */
  y: number;

  /**
   * 精灵的锚点（原点）。(0,0) 到 (1,1)。
   *
   * @property anchor
   * @type Point
   */
  point: Point;

  /**
   * 精灵的缩放因子。
   *
   * @property scale
   * @type Point
   */
  scale: Point;

  /**
   * 精灵的旋转角度（弧度）。
   *
   * @property rotation
   * @type number
   */
  rotation: number;

  /**
   * 应用到精灵的混合模式。
   *
   * @property blendMode
   * @type number
   */
  blendMode: number;

  /**
   * 为精灵设置滤镜。
   *
   * @property filters
   * @type Array<PIXI.Filter>
   */
  filters: Array<PIXI.Filter>;

  /**
   * [只读] 精灵的子对象数组。
   *
   * @property children
   * @type Array<PIXI.DisplayObject>
   */
  children: Array<PIXI.DisplayObject>;

  /**
   * [只读] 包含此精灵的对象。
   *
   * @property parent
   * @type PIXI.DisplayObjectContainer
   */
  parent: PIXI.Container;

  spriteId: number;
  opaque: boolean;
  voidFilter: PIXI.Filter;

  /**
   * 被渲染到游戏屏幕的基本对象。
   *
   * @class Sprite
   * @constructor
   * @param {Bitmap} bitmap 精灵使用的图像
   */
  constructor(bitmap?: Bitmap);

  /**
   * 每帧更新精灵。
   *
   * @method update
   */
  update(): void;

  /**
   * @method updateTransform
   * @private
   */
  updateTransform(): void;

  /**
   * 同时设置 x 和 y 坐标。
   *
   * @method move
   * @param {Number} x 精灵的 x 坐标
   * @param {Number} y 精灵的 y 坐标
   */
  move(x: number, y: number): void;

  /**
   * 设置精灵显示的位图矩形区域。
   *
   * @method setFrame
   * @param {Number} x 矩形区域的 x 坐标
   * @param {Number} y 矩形区域的 y 坐标
   * @param {Number} width 矩形区域的宽度
   * @param {Number} height 矩形区域的高度
   */
  setFrame(x: number, y: number, width: number, height: number): void;

  /**
   * 获取精灵的混合颜色。
   *
   * @method getBlendColor
   * @return {Array} 混合颜色 [r, g, b, a]
   */
  getBlendColor(): Array<number>;

  /**
   * 设置精灵的混合颜色。
   *
   * @method setBlendColor
   * @param {Array} color 混合颜色 [r, g, b, a]
   */
  setBlendColor(color: Array<number>): void;

  /**
   * 获取精灵的色调。
   *
   * @method getColorTone
   * @return {Array} 色调 [r, g, b, gray]
   */
  getColorTone(): Array<number>;

  /**
   * 设置精灵的色调。
   *
   * @method setColorTone
   * @param {Array} tone 色调 [r, g, b, gray]
   */
  setColorTone(tone: Array<number>): void;

  /**
   * 向容器添加子对象。
   *
   * @method addChild
   * @param {PIXI.DisplayObject} child 要添加的子对象
   * @return {PIXI.DisplayObject} 被添加的子对象
   */
  addChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

  /**
   * 在指定索引处向容器添加子对象。
   *
   * @method addChildAt
   * @param {PIXI.DisplayObject} child 要添加的子对象
   * @param {Number} index 放置子对象的索引位置
   * @return {PIXI.DisplayObject} 被添加的子对象
   */
  addChildAt(child: PIXI.DisplayObject, index: number): PIXI.DisplayObject;

  /**
   * 从容器中移除子对象。
   *
   * @method removeChild
   * @param {PIXI.DisplayObject} child 要移除的子对象
   * @return {PIXI.DisplayObject} 被移除的子对象
   */
  removeChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

  /**
   * 从指定索引位置移除子对象。
   *
   * @method removeChildAt
   * @param {Number} index 获取子对象的索引位置
   * @return {PIXI.DisplayObject} 被移除的子对象
   */
  removeChildAt(index: number): PIXI.DisplayObject;

  protected _bitmap: Bitmap;
  protected _frame: Rectangle;
  protected _realFrame: Rectangle;
  protected _offset: Point;
  protected _blendColor: Array<number>;
  protected _colorTone: Array<number>;
  protected _canvas: HTMLCanvasElement;
  protected _context: CanvasRenderingContext2D;
  protected _tintTexture: PIXI.BaseTexture;

  /**
   * 使用重型渲染器，减少边框伪影并应用高级混合模式
   * @type {boolean}
   * @private
   */
  protected _isPicture: boolean;

  /**
   * @method _onBitmapLoad
   * @private
   */
  protected _onBitmapLoad(): void;

  /**
   * @method _refresh
   * @private
   */
  protected _refresh(): void;

  /**
   * @method _isInBitmapRect
   * @param {Number} x
   * @param {Number} y
   * @param {Number} w
   * @param {Number} h
   * @return {Boolean}
   * @private
   */
  protected _isInBitmapRect(x: number, y: number, w: number, h: number): boolean;

  /**
   * @method _needsTint
   * @return {Boolean}
   * @private
   */
  protected _needsTint(): boolean;

  /**
   * @method _createTinter
   * @param {Number} w
   * @param {Number} h
   * @private
   */
  protected _createTinter(w: number, h: number): void;

  /**
   * @method _executeTint
   * @param {Number} x
   * @param {Number} y
   * @param {Number} w
   * @param {Number} h
   * @private
   */
  protected _executeTint(x: number, y: number, w: number, h: number): void;

  /**
   * @method _renderCanvas
   * @param {PIXI.CanvasRenderer} renderer
   * @private
   */
  protected _renderCanvas_PIXI(renderer: PIXI.CanvasRenderer): void;

  /**
   * @method _renderWebGL
   * @param {PIXI.WebGLRenderer} renderer
   * @private
   */
  protected _renderWebGL_PIXI(renderer: PIXI.WebGLRenderer): void;

  /**
   * @method _renderCanvas
   * @param {PIXI.CanvasRenderer} renderer
   * @private
   */
  protected _renderCanvas(renderer: PIXI.CanvasRenderer): void;

  /**
   * @method _renderWebGL
   * @param {PIXI.WebGLRenderer} renderer
   * @private
   */
  protected _renderWebGL(renderer: PIXI.WebGLRenderer): void;

  /**
   * 检查是否需要加速自定义混合模式
   * @param renderer
   * @private
   */
  protected _speedUpCustomBlendModes(renderer: PIXI.WebGLRenderer): void;
}
//#endregion
//#region Stage
declare class Stage extends PIXI.Container {
  // 交互标志会导致内存泄漏。
  interactive: boolean;

  /**
   * 显示树的根对象。
   *
   * @class Stage
   * @constructor
   */
  constructor();

  /**
   * 向容器添加子对象。
   *
   * @method addChild
   * @param {PIXI.DisplayObject} child 要添加的子对象
   * @return {PIXI.DisplayObject} 被添加的子对象
   */
  addChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

  /**
   * 在指定索引处向容器添加子对象。
   *
   * @method addChildAt
   * @param {PIXI.DisplayObject} child 要添加的子对象
   * @param {Number} index 放置子对象的索引位置
   * @return {PIXI.DisplayObject} 被添加的子对象
   */
  addChildAt(child: PIXI.DisplayObject, index: number): PIXI.DisplayObject;

  /**
   * 从容器中移除子对象。
   *
   * @method removeChild
   * @param {PIXI.DisplayObject} child 要移除的子对象
   * @return {PIXI.DisplayObject} 被移除的子对象
   */
  removeChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

  /**
   * 从指定索引位置移除子对象。
   *
   * @method removeChildAt
   * @param {Number} index 获取子对象的索引位置
   * @return {PIXI.DisplayObject} 被移除的子对象
   */
  removeChildAt(index: number): PIXI.DisplayObject;
}
//#endregion
//#region Tilemap
declare class Tilemap extends PIXI.Container {
  // 瓦片类型检查器

  static TILE_ID_A1: number;
  static TILE_ID_A2: number;
  static TILE_ID_A3: number;
  static TILE_ID_A4: number;
  static TILE_ID_A5: number;
  static TILE_ID_B: number;
  static TILE_ID_C: number;
  static TILE_ID_D: number;
  static TILE_ID_E: number;
  static TILE_ID_MAX: number;

  static FLOOR_AUTOTILE_TABLE: Array<Array<Array<number>>>;
  static WALL_AUTOTILE_TABLE: Array<Array<Array<number>>>;
  static WATERFALL_AUTOTILE_TABLE: Array<Array<Array<number>>>;

  static isVisibleTile(tileId: number): boolean;
  static isAutotile(tileId: number): boolean;
  static getAutotileKind(tileId: number): number;
  static getAutotileShape(tileId: number): number;
  static makeAutotileId(kind: number, shape: number): number;
  static isSameKindTile(tileID1: number, tileID2: number): boolean;
  static isTileA1(tileId: number): boolean;
  static isTileA2(tileId: number): boolean;
  static isTileA3(tileId: number): boolean;
  static isTileA4(tileId: number): boolean;
  static isTileA5(tileId: number): boolean;
  static isWaterTile(tileId: number): boolean;
  static isWaterfallTile(tileId: number): boolean;
  static isGroundTile(tileId: number): boolean;
  static isShadowingTile(tileId: number): boolean;
  static isRoofTile(tileId: number): boolean;
  static isWallTopTile(tileId: number): boolean;
  static isWallSideTile(tileId: number): boolean;
  static isWallTile(tileId: number): boolean;
  static isFloorTypeAutotile(tileId: number): boolean;
  static isWallTypeAutotile(tileId: number): boolean;
  static isWaterfallTypeAutotile(tileId: number): boolean;

  /**
   * 用作图块集的位图数组。
   *
   * @property bitmaps
   * @type Array
   */
  bitmaps: Array<Bitmap>;

  /**
   * 用于滚动的瓦片地图原点。
   *
   * @property origin
   * @type Point
   */
  origin: Point;

  /**
   * 图块集标志。
   *
   * @property flags
   * @type Array
   */
  flags: Array<number>;

  /**
   * 自动图块的动画计数器。
   *
   * @property animationCount
   * @type number
   */
  animationCount: number;

  /**
   * 瓦片地图是否水平循环。
   *
   * @property horizontalWrap
   * @type Boolean
   */
  horizontalWrap: boolean;

  /**
   * 瓦片地图是否垂直循环。
   *
   * @property verticalWrap
   * @type Boolean
   */
  verticalWrap: boolean;

  /**
   * 屏幕的宽度（以像素为单位）。
   *
   * @property width
   * @type number
   */
  width: number;

  /**
   * 屏幕的高度（以像素为单位）。
   *
   * @property height
   * @type number
   */
  height: number;

  /**
   * 单个瓦片的宽度（以像素为单位）。
   *
   * @property tileWidth
   * @type number
   */
  tileWidth: number;

  /**
   * 单个瓦片的高度（以像素为单位）。
   *
   * @property tileHeight
   * @type number
   */
  tileHeight: number;

  /**
   * [只读] 精灵的子对象数组。
   *
   * @property children
   * @type Array<PIXI.DisplayObject>
   */
  children: Array<PIXI.DisplayObject>;

  /**
   * [只读] 包含此精灵的对象。
   *
   * @property parent
   * @type PIXI.DisplayObjectContainer
   */
  parent: PIXI.Container;

  /**
   * 显示基于2D瓦片的游戏地图的瓦片地图。
   *
   * @class Tilemap
   * @constructor
   */
  constructor();

  /**
   * 设置瓦片地图数据。
   *
   * @method setData
   * @param {Number} width 地图的宽度（瓦片数量）
   * @param {Number} height 地图的高度（瓦片数量）
   * @param {Array} data 地图数据的一维数组
   */
  setData(width: number, height: number, data: Array<number>): void;

  /**
   * 检查图块集是否准备就绪可以渲染。
   *
   * @method isReady
   * @type Boolean
   * @return {Boolean} 如果瓦片地图准备就绪则返回 true
   */
  isReady(): boolean;

  /**
   * 每帧更新瓦片地图。
   *
   * @method update
   */
  update(): void;

  /**
   * @method updateTransform
   * @private
   */
  updateTransform(): void;

  /**
   * 强制重绘整个静态层。
   *
   * @method refresh
   */
  refresh(): void;

  /**
   * 向容器添加子对象。
   *
   * @method addChild
   * @param {PIXI.DisplayObject} child 要添加的子对象
   * @return {PIXI.DisplayObject} 被添加的子对象
   */
  addChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

  /**
   * 在指定索引处向容器添加子对象。
   *
   * @method addChildAt
   * @param {PIXI.DisplayObject} child 要添加的子对象
   * @param {Number} index 放置子对象的索引位置
   * @return {PIXI.DisplayObject} 被添加的子对象
   */
  addChildAt(child: PIXI.DisplayObject, index: number): PIXI.DisplayObject;

  /**
   * 从容器中移除子对象。
   *
   * @method removeChild
   * @param {PIXI.DisplayObject} child 要移除的子对象
   * @return {PIXI.DisplayObject} 被移除的子对象
   */
  removeChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

  /**
   * 从指定索引位置移除子对象。
   *
   * @method removeChildAt
   * @param {Number} index 获取子对象的索引位置
   * @return {PIXI.DisplayObject} 被移除的子对象
   */
  removeChildAt(index: number): PIXI.DisplayObject;

  /**
   * 强制刷新图块集。
   *
   * @method refresh
   */
  refreshTileset(): void;

  protected _margin: number;
  protected _width: number;
  protected _height: number;
  protected _tileWidth: number;
  protected _tileHeight: number;
  protected _mapWidth: number;
  protected _mapHeight: number;
  protected _mapData: Array<number>;
  protected _layerWidth: number;
  protected _layerHeight: number;
  protected _lastTiles: Array<Array<Array<Array<number>>>>;
  protected _lowerLayer: Sprite;
  protected _upperLayer: Sprite;

  /**
   * @method _createLayers
   * @private
   */
  protected _createLayers(): void;

  /**
   * @method _updateLayerPositions
   * @param {Number} startX
   * @param {Number} startY
   * @private
   */
  protected _updateLayerPositions(startX: number, startY: number): void;

  /**
   * @method _paintAllTiles
   * @param {Number} startX
   * @param {Number} startY
   * @private
   */
  protected _paintAllTiles(startX: number, startY: number): void;

  /**
   * @method _paintTiles
   * @param {Number} startX
   * @param {Number} startY
   * @param {Number} x
   * @param {Number} y
   * @private
   */
  protected _paintTiles(startX: number, startY: number, x: number, y: number): void;

  /**
   * @method _readLastTiles
   * @param {Number} i
   * @param {Number} x
   * @param {Number} y
   * @private
   */
  protected _readLastTiles(i: number, x: number, y: number): Array<number>;

  /**
   * @method _writeLastTiles
   * @param {Number} i
   * @param {Number} x
   * @param {Number} y
   * @param {Array} tiles
   * @private
   */
  protected _writeLastTiles(i: number, x: number, y: number, tiles: Array<number>): void;

  /**
   * @method _drawTile
   * @param {Bitmap} bitmap
   * @param {Number} tileId
   * @param {Number} dx
   * @param {Number} dy
   * @private
   */
  protected _drawTile(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;

  /**
   * @method _drawNormalTile
   * @param {Bitmap} bitmap
   * @param {Number} tileId
   * @param {Number} dx
   * @param {Number} dy
   * @private
   */
  protected _drawNormalTile(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;

  /**
   * @method _drawAutotile
   * @param {Bitmap} bitmap
   * @param {Number} tileId
   * @param {Number} dx
   * @param {Number} dy
   * @private
   */
  protected _drawAutotile(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;

  /**
   * @method _drawTableEdge
   * @param {Bitmap} bitmap
   * @param {Number} tileId
   * @param {Number} dx
   * @param {Number} dy
   * @private
   */
  protected _drawTableEdge(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;

  /**
   * @method _drawShadow
   * @param {Bitmap} bitmap
   * @param {Number} shadowBits
   * @param {Number} dx
   * @param {Number} dy
   * @private
   */
  protected _drawShadow(bitmap: Bitmap, shadowBits: number, dx: number, dy: number): void;

  /**
   * @method _readMapData
   * @param {Number} x
   * @param {Number} y
   * @param {Number} z
   * @return {number}
   * @private
   */
  protected _readMapData(x: number, y: number, z: number): number;

  /**
   * @method _isHigherTile
   * @param {Number} tileId
   * @return {Boolean}
   * @private
   */
  protected _isHigherTile(tileId: number): boolean;

  /**
   * @method _isTableTile
   * @param {Number} tileId
   * @return {Boolean}
   * @private
   */
  protected _isTableTile(tileId: number): boolean;

  /**
   * @method _isOverpassPosition
   * @param {Number} mx
   * @param {Number} my
   * @return {Boolean}
   * @private
   */
  protected _isOverpassPosition(mx: number, my: number): boolean;

  /**
   * @method _sortChildren
   * @private
   */
  protected _sortChildren(): void;

  /**
   * @method _compareChildOrder
   * @param {Sprite} a
   * @param {Sprite} b
   * @private
   */
  protected _compareChildOrder(a: Sprite, b: Sprite): number;
}
//#endregion
//#region ShaderTilemap
declare class ShaderTilemap extends Tilemap {
  /**
   * 在渲染器中上传动画状态
   *
   * @method _hackRenderer
   * @param {PIXI.SystemRenderer} pixi 渲染器
   * @private
   */
  _hackRenderer(renderer: PIXI.SystemRenderer): PIXI.SystemRenderer;

  /**
   * PIXI 渲染方法
   *
   * @method renderWebGL
   * @param {PIXI.WebGLRenderer} pixi 渲染器
   */
  renderWebGL(renderer: PIXI.WebGLRenderer): void;

  /**
   * PIXI 渲染方法
   *
   * @method renderCanvas
   * @param {PIXI.CanvasRenderer} pixi 渲染器
   */
  renderCanvas(renderer: PIXI.CanvasRenderer): void;

  /**
   * 强制重绘整个瓦片地图，并在需要时更新位图列表
   *
   * @method refresh
   */
  refresh(): void;

  /**
   * 更新图块集后调用
   *
   * @method refreshTileset
   */
  refreshTileset(): void;
}
//#endregion
//#region TilingSprite
declare class TilingSprite extends PIXI.extras.TilingSprite {
  /**
   * 平铺精灵用于滚动的原点。
   *
   * @property origin
   * @type Point
   */
  origin: Point;

  /**
   * 平铺精灵使用的图像。
   *
   * @property bitmap
   * @type Bitmap
   */
  bitmap: Bitmap;

  /**
   * 平铺精灵的不透明度（0 到 255）。
   *
   * @property opacity
   * @type number
   */
  opacity: number;

  /**
   * 平铺精灵的可见性。
   *
   * @property visible
   * @type Boolean
   */
  visibility: boolean;

  /**
   * 平铺精灵的 x 坐标。
   *
   * @property x
   * @type number
   */
  x: number;

  /**
   * 平铺精灵的 y 坐标。
   *
   * @property y
   * @type number
   */
  y: number;

  spriteId: number;

  /**
   * 用于平铺图像的精灵对象。
   *
   * @class TilingSprite
   * @constructor
   * @param {Bitmap} bitmap 平铺精灵使用的图像
   */
  constructor(bitmap: Bitmap);

  /**
   * 每帧更新平铺精灵。
   *
   * @method update
   */
  update(): void;

  /**
   * @method updateTransform
   * @private
   */
  updateTransform(): void;

  /**
   * 同时设置 x、y、宽度和高度。
   *
   * @method move
   * @param {Number} x 平铺精灵的 x 坐标
   * @param {Number} y 平铺精灵的 y 坐标
   * @param {Number} width 平铺精灵的宽度
   * @param {Number} height 平铺精灵的高度
   */
  move(x?: number, y?: number, width?: number, height?: number): void;

  /**
   * 指定平铺精灵将使用的图像区域。
   *
   * @method setFrame
   * @param {Number} x 矩形区域的 x 坐标
   * @param {Number} y 矩形区域的 y 坐标
   * @param {Number} width 矩形区域的宽度
   * @param {Number} height 矩形区域的高度
   */
  setFrame(x: number, y: number, width: number, height: number): void;

  updateTransformTS(): void;

  protected _bitmap: Bitmap;
  protected _width: number;
  protected _height: number;
  protected _frame: Rectangle;

  /**
   * @method _onBitmapLoad
   * @private
   */
  protected _onBitmapLoad(): void;

  /**
   * @method _refresh
   * @private
   */
  protected _refresh(): void;

  /**
   * @method _renderCanvas
   * @param {PIXI.CanvasRenderer} renderer
   * @private
   */
  protected _renderCanvas(renderer: PIXI.CanvasRenderer): void;

  /**
   * @method _renderWebGL
   * @param {PIXI.WebGLRenderer} renderer
   * @private
   */
  protected _renderWebGL(renderer: PIXI.WebGLRenderer): void;

  /**
   * @method generateTilingTexture
   * @param {Boolean} arg
   */
  // generateTilingTexture(arg: boolean): void;
}
//#endregion
//#region ToneFilter
declare class ToneFilter extends PIXI.filters.ColorMatrixFilter {
  /**
   * 用于 WebGL 的色彩矩阵滤镜。
   *
   * @class ToneFilter
   * @extends PIXI.Filter
   * @constructor
   */
  constructor();

  /**
   * 调整色相。
   *
   * @method adjustHue
   * @param {Number} value 色相值，范围 (-360, 360)
   */
  adjustHue(value?: number): void;

  /**
   * 调整饱和度。
   *
   * @method adjustSaturation
   * @param {Number} value 饱和度值，范围 (-255, 255)
   */
  adjustSaturation(value?: number): void;

  /**
   * 调整色调。
   *
   * @method adjustTone
   * @param {Number} r 红色强度，范围 (-255, 255)
   * @param {Number} g 绿色强度，范围 (-255, 255)
   * @param {Number} b 蓝色强度，范围 (-255, 255)
   */
  adjustTone(r?: number, g?: number, b?: number): void;
}
//#endregion
//#region ToneSprite
declare class ToneSprite extends PIXI.Container {
  /**
   * 在 2D 画布模式下改变屏幕颜色的精灵。
   *
   * @class ToneSprite
   * @constructor
   */
  constructor();

  /**
   * 清除色调。
   *
   * @method reset
   */
  clear(): void;

  /**
   * 设置色调。
   *
   * @method setTone
   * @param {Number} r 红色强度，范围 (-255, 255)
   * @param {Number} g 绿色强度，范围 (-255, 255)
   * @param {Number} b 蓝色强度，范围 (-255, 255)
   * @param {Number} gray 灰度级别，范围 (0, 255)
   */
  setTone(r: number, g: number, b: number, gray: number): void;

  protected _red: number;
  protected _green: number;
  protected _blue: number;
  protected _gray: number;

  /**
   * @method _renderCanvas
   * @param {PIXI.CanvasRenderer} renderer
   * @private
   */
  protected _renderCanvas(renderer: PIXI.CanvasRenderer): void;

  /**
   * @method _renderWebGL
   * @param {PIXI.WebGLRenderer} renderer
   * @private
   */
  protected _renderWebGL(renderer: PIXI.WebGLRenderer): void;
}
//#endregion
//#region TouchInputStatic
interface TouchInputStatic {
  _mousePressed: boolean;
  _screenPressed: boolean;
  _pressedTime: number;
  _events: MV.TouchInputEvents;
  _triggered: boolean;
  _cancelled: boolean;
  _moved: boolean;
  _released: boolean;
  _wheelX: number;
  _wheelY: number;
  _x: number;
  _y: number;
  _date: number;

  /**
   * 伪按键重复的等待时间（以帧为单位）。
   *
   * @static
   * @property keyRepeatWait
   * @type number
   */
  keyRepeatWait: number;

  /**
   * 伪按键重复的间隔时间（以帧为单位）。
   *
   * @static
   * @property keyRepeatInterval
   * @type number
   */
  keyRepeatInterval: number;

  /**
   * [只读] 水平滚动量。
   *
   * @static
   * @property wheelX
   * @type number
   */
  wheelX: number;

  /**
   * [只读] 垂直滚动量。
   *
   * @static
   * @property wheelY
   * @type number
   */
  wheelY: number;

  /**
   * [只读] 最近一次触摸事件在画布区域上的 x 坐标。
   *
   * @static
   * @property x
   * @type number
   */
  x: number;

  /**
   * [只读] 最近一次触摸事件在画布区域上的 y 坐标。
   *
   * @static
   * @property y
   * @type number
   */
  y: number;

  /**
   * [只读] 最近一次输入的时间（毫秒）。
   *
   * @static
   * @property date
   * @type number
   */
  date: number;

  /**
   * 初始化触摸系统。
   *
   * @static
   * @method initialize
   */
  initialize(): void;

  /**
   * 清除所有触摸数据。
   *
   * @static
   * @method clear
   */
  clear(): void;

  /**
   * 更新触摸数据。
   *
   * @static
   * @method update
   */
  update(): void;

  /**
   * 检查鼠标按钮或触摸屏当前是否被按下。
   *
   * @static
   * @method isPressed
   * @return {Boolean} 如果鼠标按钮或触摸屏被按下则返回 true
   */
  isPressed(): boolean;

  /**
   * 检查鼠标左键或触摸屏是否刚刚被按下。
   *
   * @static
   * @method isTriggered
   * @return {Boolean} 如果鼠标按钮或触摸屏被触发则返回 true
   */
  isTriggered(): boolean;

  /**
   * 检查鼠标左键或触摸屏是否刚刚被按下或发生了伪按键重复。
   *
   * @static
   * @method isRepeated
   * @return {Boolean} 如果鼠标按钮或触摸屏重复则返回 true
   */
  isRepeated(): boolean;

  /**
   * 检查鼠标左键或触摸屏是否被长按。
   *
   * @static
   * @method isLongPressed
   * @return {Boolean} 如果鼠标左键或触摸屏被长按则返回 true
   */
  isLongPressed(): boolean;

  /**
   * 检查鼠标右键是否刚刚被按下。
   *
   * @static
   * @method isCancelled
   * @return {Boolean} 如果鼠标右键刚刚被按下则返回 true
   */
  isCancelled(): boolean;

  /**
   * 检查鼠标或触摸屏上的手指是否移动了。
   *
   * @static
   * @method isMoved
   * @return {Boolean} 如果鼠标或触摸屏上的手指移动了则返回 true
   */
  isMoved(): boolean;

  /**
   * 检查鼠标左键或触摸屏是否被释放。
   *
   * @static
   * @method isReleased
   * @return {Boolean} 如果鼠标按钮或触摸屏被释放则返回 true
   */
  isReleased(): boolean;

  /**
   * @static
   * @method _setupEventHandlers
   * @private
   */
  _setupEventHandlers(): void;

  /**
   * @static
   * @method _onMouseDown
   * @param {MouseEvent} event
   * @private
   */
  _onMouseDown(event: MouseEvent): void;

  /**
   * @static
   * @method _onLeftButtonDown
   * @param {MouseEvent} event
   * @private
   */
  _onLeftButtonDown(event: MouseEvent): void;

  /**
   * @static
   * @method _onMiddleButtonDown
   * @param {MouseEvent} event
   * @private
   */
  _onMiddleButtonDown(event: MouseEvent): void;

  /**
   * @static
   * @method _onRightButtonDown
   * @param {MouseEvent} event
   * @private
   */
  _onRightButtonDown(event: MouseEvent): void;

  /**
   * @static
   * @method _onMouseMove
   * @param {MouseEvent} event
   * @private
   */
  _onMouseMove(event: MouseEvent): void;

  /**
   * @static
   * @method _onMouseUp
   * @param {MouseEvent} event
   * @private
   */
  _onMouseUp(event: MouseEvent): void;

  /**
   * @static
   * @method _onWheel
   * @param {WheelEvent} event
   * @private
   */
  _onWheel(event: WheelEvent): void;

  /**
   * @static
   * @method _onTouchStart
   * @param {TouchEvent} event
   * @private
   */
  _onTouchStart(event: TouchEvent): void;

  /**
   * @static
   * @method _onTouchMove
   * @param {TouchEvent} event
   * @private
   */
  _onTouchMove(event: TouchEvent): void;

  /**
   * @static
   * @method _onTouchEnd
   * @param {TouchEvent} event
   * @private
   */
  _onTouchEnd(event: TouchEvent): void;

  /**
   * @static
   * @method _onTouchCancel
   * @param {TouchEvent} event
   * @private
   */
  _onTouchCancel(event: TouchEvent): void;

  /**
   * @static
   * @method _onPointerDown
   * @param {PointerEvent} event
   * @private
   */
  _onPointerDown(event: PointerEvent): void;

  /**
   * @static
   * @method _onTrigger
   * @param {Number} x
   * @param {Number} y
   * @private
   */
  _onTrigger(x: number, y: number): void;

  /**
   * @static
   * @method _onCancel
   * @param {Number} x
   * @param {Number} y
   * @private
   */
  _onCancel(x: number, y: number): void;

  /**
   * @static
   * @method _onMove
   * @param {Number} x
   * @param {Number} y
   * @private
   */
  _onMove(x: number, y: number): void;

  /**
   * @static
   * @method _onRelease
   * @param {Number} x
   * @param {Number} y
   * @private
   */
  _onRelease(x: number, y: number): void;
}
declare const TouchInput: TouchInputStatic;
//#endregion
//#region 定义实用方法的静态类
/**
 * @class Utils
 */
interface UtilsStatic {
  /**
   * RPG 制作工具的名称。当前版本为 'MV'。
   *
   * @static
   * @property RPGMAKER_NAME
   * @type String
   * @final
   */
  RPGMAKER_NAME: string;

  /**
   * RPG 制作工具的版本。
   *
   * @static
   * @property RPGMAKER_VERSION
   * @type String
   * @final
   */
  RPGMAKER_VERSION: string;

  /**
   * 检查查询字符串中是否包含指定选项。
   *
   * @static
   * @method isOptionValid
   * @param {String} name 选项名称
   * @return {Boolean} 如果查询字符串中包含该选项则返回 true
   */
  isOptionValid(name: string): boolean;

  /**
   * 检查平台是否为 NW.js。
   *
   * @static
   * @method isNwjs
   * @return {Boolean} 如果平台是 NW.js 则返回 true
   */
  isNwjs(): boolean;

  /**
   * 检查平台是否为移动设备。
   *
   * @static
   * @method isMobileDevice
   * @return {Boolean} 如果平台是移动设备则返回 true
   */
  isMobileDevice(): boolean;

  /**
   * 检查浏览器是否为移动版 Safari。
   *
   * @static
   * @method isMobileSafari
   * @return {Boolean} 如果浏览器是移动版 Safari 则返回 true
   */
  isMobileSafari(): boolean;

  /**
   * 检查浏览器是否为 Android Chrome。
   *
   * @static
   * @method isAndroidChrome
   * @return {Boolean} 如果浏览器是 Android Chrome 则返回 true
   */
  isAndroidChrome(): boolean;

  /**
   * 检查浏览器是否可以读取游戏文件夹中的文件。
   *
   * @static
   * @method canReadGameFiles
   * @return {Boolean} 如果浏览器可以读取游戏文件夹中的文件则返回 true
   */
  canReadGameFiles(): boolean;

  /**
   * 从 RGB 值创建 CSS 颜色字符串。
   *
   * @static
   * @method rgbToCssColor
   * @param {Number} r 红色值，范围 (0, 255)
   * @param {Number} g 绿色值，范围 (0, 255)
   * @param {Number} b 蓝色值，范围 (0, 255)
   * @return {String} CSS 颜色字符串
   */
  rgbToCssColor(r: number, g: number, b: number): string;
}
declare const Utils: UtilsStatic;
//#endregion
//#region WebAudio
declare class WebAudio {
  static _context: AudioContext;
  static _masterGainNode: GainNode;
  static _initialized: boolean;
  static _unlocked: boolean;

  /**
   * 初始化音频系统。
   *
   * @static
   * @method initialize
   * @param {Boolean} noAudio 无音频模式的标志
   * @return {Boolean} 如果音频系统可用则返回 true
   */
  static initialize(noAudio?: boolean): boolean;

  /**
   * 检查浏览器是否可以播放 ogg 文件。
   *
   * @static
   * @method canPlayOgg
   * @return {Boolean} 如果浏览器可以播放 ogg 文件则返回 true
   */
  static canPlayOgg(): boolean;

  /**
   * 检查浏览器是否可以播放 m4a 文件。
   *
   * @static
   * @method canPlayM4a
   * @return {Boolean} 如果浏览器可以播放 m4a 文件则返回 true
   */
  static canPlayM4a(): boolean;

  /**
   * @static
   * @method _createContext
   * @private
   */
  static _createContext(): void;

  /**
   * @static
   * @method _detectCodecs
   * @private
   */
  static _detectCodecs(): void;

  /**
   * @static
   * @method _createMasterGainNode
   * @private
   */
  static _createMasterGainNode(): void;

  /**
   * @static
   * @method _setupEventHandlers
   * @private
   */
  static _setupEventHandlers(): void;

  /**
   * @static
   * @method _onTouchStart
   * @private
   */
  static _onTouchStart(): void;

  /**
   * @static
   * @method _onVisibilityChange
   * @private
   */
  static _onVisibilityChange(): void;

  /**
   * @static
   * @method _onHide
   * @private
   */
  static _onHide(): void;

  /**
   * @static
   * @method _onShow
   * @private
   */
  static _onShow(): void;

  /**
   * @static
   * @method _shouldMuteOnHide
   * @private
   */
  static _shouldMuteOnHide(): void;

  /**
   * @static
   * @method _fadeIn
   * @param {Number} duration
   * @private
   */
  static _fadeIn(duration: number): void;

  /**
   * @static
   * @method _fadeOut
   * @param {Number} duration
   * @private
   */
  static _fadeOut(duration: number): void;

  /**
   * [只读] 音频文件的 URL。
   *
   * @property url
   * @type String
   */
  url: string;

  /**
   * 音频的音量。
   *
   * @property volume
   * @type Number
   */
  volume: number;

  /**
   * 音频的音高。
   *
   * @property pitch
   * @type Number
   */
  pitch: number;

  /**
   * 音频的声相。
   *
   * @property pan
   * @type Number
   */
  pan: number;

  /**
   * Web Audio API 的音频对象。
   *
   * @class WebAudio
   * @constructor
   * @param {String} url 音频文件的 URL
   */
  constructor(url: string);

  /**
   * 清除音频数据。
   *
   * @method clear
   */
  clear(): void;

  /**
   * 检查音频数据是否准备就绪可以播放。
   *
   * @method isReady
   * @return {Boolean} 如果音频数据准备就绪可以播放则返回 true
   */
  isReady(): boolean;

  /**
   * 检查是否发生了加载错误。
   *
   * @method isError
   * @return {Boolean} 如果发生了加载错误则返回 true
   */
  isError(): boolean;

  /**
   * 检查音频是否正在播放。
   *
   * @method isPlaying
   * @return {Boolean} 如果音频正在播放则返回 true
   */
  isPlaying(): boolean;

  /**
   * 播放音频。
   *
   * @method play
   * @param {Boolean} loop 音频数据是否循环播放
   * @param {Number} offset 开始播放的位置（秒）
   */
  play(loop: boolean, offset: number): void;

  /**
   * 停止音频。
   *
   * @method stop
   */
  stop(): void;

  /**
   * 执行音频淡入效果。
   *
   * @method fadeIn
   * @param {Number} duration 淡入时间（秒）
   */
  fadeIn(duration: number): void;

  /**
   * 执行音频淡出效果。
   *
   * @method fadeOut
   * @param {Number} duration 淡出时间（秒）
   */
  fadeOut(duration: number): void;

  /**
   * 获取音频的播放位置。
   *
   * @method seek
   */
  seek(): number;

  /**
   * 添加一个回调函数，当音频数据加载完成时将被调用。
   *
   * @method addLoadListener
   * @param {Function} listener 回调函数
   */
  addLoadListener(listener: () => void): void;

  /**
   * 添加一个回调函数，当播放停止时将被调用。
   *
   * @method addStopListener
   * @param {Function} listener 回调函数
   */
  addStopListener(listener: () => void): void;

  protected _buffer: AudioNode;
  protected _sourceNode: AudioBufferSourceNode;
  protected _gainNode: GainNode;
  protected _pannerNode: PannerNode;
  protected _totalTime: number;
  protected _sampleRate: number;
  protected _loopStart: number;
  protected _loopLength: number;
  protected _startTime: number;
  protected _volume: number;
  protected _pitch: number;
  protected _pan: number;
  protected _endTimer: number;
  protected _loadListeners: Array<() => void>;
  protected _stopListeners: Array<() => void>;
  protected _hasError: boolean;
  protected _autoPlay: boolean;

  /**
   * @method _load
   * @param {String} url
   * @private
   */
  protected _load(url: string): void;

  /**
   * @method _onXhrLoad
   * @param {XMLHttpRequest} xhr
   * @private
   */
  protected _onXhrLoad(xhr: XMLHttpRequest): void;

  /**
   * @method _startPlaying
   * @param {Boolean} loop
   * @param {Number} offset
   * @private
   */
  protected _startPlaying(loop: boolean, offset: number): void;

  /**
   * @method _createNodes
   * @private
   */
  protected _createNodes(): void;

  /**
   * @method _connectNodes
   * @private
   */
  protected _connectNodes(): void;

  /**
   * @method _removeNodes
   * @private
   */
  protected _removeNodes(): void;

  /**
   * @method _createEndTimer
   * @private
   */
  protected _createEndTimer(): void;

  /**
   * @method _removeEndTimer
   * @private
   */
  protected _removeEndTimer(): void;

  /**
   * @method _updatePanner
   * @private
   */
  protected _updatePanner(): void;

  /**
   * @method _onLoad
   * @private
   */
  protected _onLoad(): void;

  /**
   * @method _readLoopComments
   * @param {Uint8Array} array
   * @private
   */
  protected _readLoopComments(array: Uint8Array): void;

  /**
   * @method _readOgg
   * @param {Uint8Array} array
   * @private
   */
  protected _readOgg(array: Uint8Array): void;

  /**
   * @method _readMp4
   * @param {Uint8Array} array
   * @private
   */
  protected _readMp4(array: Uint8Array): void;

  /**
   * @method _readMetaData
   * @param {Uint8Array} array
   * @param {Number} index
   * @param {Number} size
   * @private
   */
  protected _readMetaData(array: Uint8Array, index: number, size: number): void;

  /**
   * @method _readLittleEndian
   * @param {Uint8Array} array
   * @param {Number} index
   * @private
   */
  protected _readLittleEndian(array: Uint8Array, index: number): void;

  /**
   * @method _readBigEndian
   * @param {Uint8Array} array
   * @param {Number} index
   * @private
   */
  protected _readBigEndian(array: Uint8Array, index: number): void;

  /**
   * @method _readFourCharacters
   * @param {Uint8Array} array
   * @param {Number} index
   * @private
   */
  protected _readFourCharacters(array: Uint8Array, index: number): void;
}
//#endregion
//#region Weather
declare class Weather extends PIXI.Container {
  /**
   * 天气类型，可选值为 ['none', 'rain', 'storm', 'snow']。
   *
   * @property type
   * @type String
   */
  type: string;

  /**
   * 天气强度，范围在 (0, 9)。
   *
   * @property power
   * @type Number
   */
  power: number;

  /**
   * 用于滚动的天气效果原点。
   *
   * @property origin
   * @type Point
   */
  origin: Point;

  /**
   * 显示雨、风暴或雪的天气效果。
   *
   * @class Weather
   * @constructor
   */
  constructor();

  /**
   * 每帧更新天气效果。
   *
   * @method update
   */
  update(): void;

  protected _width: number;
  protected _height: number;
  protected _sprites: Array<Sprite>;
  protected _rainBitmap: Bitmap;
  protected _stormBitmap: Bitmap;
  protected _snowBitmap: Bitmap;
  protected _dimmerSprite: ScreenSprite;

  /**
   * @method _createBitmaps
   * @private
   */
  protected _createBitmaps(): void;

  /**
   * @method _createDimmer
   * @private
   */
  protected _createDimmer(): void;

  /**
   * @method _updateDimmer
   * @private
   */
  protected _updateDimmer(): void;

  /**
   * @method _updateAllSprites
   * @private
   */
  protected _updateAllSprites(): void;

  /**
   * @method _addSprite
   * @private
   */
  protected _addSprite(): void;

  /**
   * @method _removeSprite
   * @private
   */
  protected _removeSprite(): void;

  /**
   * @method _updateSprite
   * @param {Sprite} sprite
   * @private
   */
  protected _updateSprite(sprite: Sprite): void;

  /**
   * @method _updateRainSprite
   * @param {Sprite} sprite
   * @private
   */
  protected _updateRainSprite(sprite: Sprite): void;

  /**
   * @method _updateStormSprite
   * @param {Sprite} sprite
   * @private
   */
  protected _updateStormSprite(sprite: Sprite): void;

  /**
   * @method _updateSnowSprite
   * @param {Sprite} sprite
   * @private
   */
  protected _updateSnowSprite(sprite: Sprite): void;

  /**
   * @method _rebornSprite
   * @param {Sprite} sprite
   * @private
   */
  protected _rebornSprite(sprite: Sprite): void;
}
//#endregion
//#region _Window
declare abstract class _Window extends PIXI.Container {
  /**
   * 窗口用于滚动的原点。
   *
   * @property origin
   * @type Point
   */
  origin: Point;

  /**
   * 窗口的活动状态。
   *
   * @property active
   * @type Boolean
   */
  active: boolean;

  /**
   * 向下滚动箭头的可见性。
   *
   * @property downArrowVisible
   * @type Boolean
   */
  downArrowVisible: boolean;

  /**
   * 向上滚动箭头的可见性。
   *
   * @property upArrowVisible
   * @type Boolean
   */
  upArrowVisible: boolean;

  /**
   * 暂停标志的可见性。
   *
   * @property pause
   * @type Boolean
   */
  pause: boolean;

  /**
   * 用作窗口皮肤的图像。
   *
   * @property windowskin
   * @type Bitmap
   */
  windowskin: Bitmap;

  /**
   * 用于窗口内容的位图。
   *
   * @property contents
   * @type Bitmap
   */
  contents: Bitmap;

  /**
   * 窗口的宽度（以像素为单位）。
   *
   * @property width
   * @type Number
   */
  width: number;

  /**
   * 窗口的高度（以像素为单位）。
   *
   * @property height
   * @type Number
   */
  height: number;

  /**
   * 边框和内容之间的内边距大小。
   *
   * @property padding
   * @type Number
   */
  padding: number;

  /**
   * 窗口背景的边距大小。
   *
   * @property margin
   * @type Number
   */
  margin: number;

  /**
   * 不包含内容的窗口不透明度（0 到 255）。
   *
   * @property opacity
   * @type Number
   */
  opacity: number;

  /**
   * 窗口背景的不透明度（0 到 255）。
   *
   * @property backOpacity
   * @type Number
   */
  backOpacity: number;

  /**
   * 窗口内容的不透明度（0 到 255）。
   *
   * @property contentsOpacity
   * @type Number
   */
  contentsOpacity: number;

  /**
   * 窗口的打开程度（0 到 255）。
   *
   * @property openness
   * @type Number
   */
  openness: number;

  /**
   * 精灵的可见性。
   *
   * @property visible
   * @type Boolean
   */
  visible: boolean;

  /**
   * 精灵的 x 坐标。
   *
   * @property x
   * @type Number
   */
  x: number;

  /**
   * 精灵的 y 坐标。
   *
   * @property y
   * @type Number
   */
  y: number;

  /**
   * [只读] 精灵的子对象数组。
   *
   * @property children
   * @type Array<PIXI.DisplayObject>
   */
  children: Array<PIXI.DisplayObject>;

  /**
   * [只读] 包含此精灵的对象。
   *
   * @property parent
   * @type PIXI.DisplayObjectContainer
   */
  parent: PIXI.Container;

  /**
   * 游戏中的窗口。
   *
   * @class Window
   * @constructor
   */
  constructor();

  /**
   * 每帧更新窗口。
   *
   * @method update
   */
  update(): void;

  /**
   * 同时设置 x、y、宽度和高度。
   *
   * @method move
   * @param {Number} x 窗口的 x 坐标
   * @param {Number} y 窗口的 y 坐标
   * @param {Number} width 窗口的宽度
   * @param {Number} height 窗口的高度
   */
  move(x?: number, y?: number, width?: number, height?: number): void;

  /**
   * 如果窗口完全打开（openness == 255）则返回 true。
   *
   * @method isOpen
   * @return {Boolean}
   */
  isOpen(): boolean;

  /**
   * 如果窗口完全关闭（openness == 0）则返回 true。
   *
   * @method isClosed
   * @return {Boolean}
   */
  isClosed(): boolean;

  /**
   * 设置命令光标的位置。
   *
   * @method setCursorRect
   * @param {Number} x 光标的 x 坐标
   * @param {Number} y 光标的 y 坐标
   * @param {Number} width 光标的宽度
   * @param {Number} height 光标的高度
   */
  setCursorRect(x?: number, y?: number, width?: number, height?: number): void;

  /**
   * 更改背景颜色。
   *
   * @method setTone
   * @param {Number} r 红色值，范围 (-255, 255)
   * @param {Number} g 绿色值，范围 (-255, 255)
   * @param {Number} b 蓝色值，范围 (-255, 255)
   */
  setTone(r: number, g: number, b: number): void;

  /**
   * 在背景和内容之间添加子对象。
   *
   * @method addChildToBack
   * @param {PIXI.DisplayObject} child 要添加的子对象
   * @return {PIXI.DisplayObject} 被添加的子对象
   */
  addChildToBack(child: PIXI.DisplayObject): PIXI.DisplayObject;

  /**
   * 向容器添加子对象。
   *
   * @method addChild
   * @param {PIXI.DisplayObject} child 要添加的子对象
   * @return {PIXI.DisplayObject} 被添加的子对象
   */
  addChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

  /**
   * 在指定索引处向容器添加子对象。
   *
   * @method addChildAt
   * @param {PIXI.DisplayObject} child 要添加的子对象
   * @param {Number} index 放置子对象的索引位置
   * @return {PIXI.DisplayObject} 被添加的子对象
   */
  addChildAt(child: PIXI.DisplayObject, index: number): PIXI.DisplayObject;

  /**
   * 从容器中移除子对象。
   *
   * @method removeChild
   * @param {PIXI.DisplayObject} child 要移除的子对象
   * @return {PIXI.DisplayObject} 被移除的子对象
   */
  removeChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

  /**
   * 从指定索引位置移除子对象。
   *
   * @method removeChildAt
   * @param {Number} index 获取子对象的索引位置
   * @return {PIXI.DisplayObject} 被移除的子对象
   */
  removeChildAt(index: number): PIXI.DisplayObject;

  /**
   * @method updateTransform
   * @private
   */
  updateTransform(): void;

  protected _isWindow: boolean;
  protected _windowskin: Bitmap;
  protected _width: number;
  protected _height: number;
  protected _cursorRect: Rectangle;
  protected _openness: number;
  protected _animationCount: number;
  protected _padding: number;
  protected _margin: number;
  protected _colorTone: Array<number>;
  protected _windowSpriteContainer: PIXI.Container;
  protected _windowBackSprite: Sprite;
  protected _windowCursorSprite: Sprite;
  protected _windowFrameSprite: Sprite;
  protected _windowContentsSprite: Sprite;
  protected _windowArrowSprites: Array<any>;
  protected _windowPauseSignSprite: Sprite;
  protected _downArrowSprite: Sprite;
  protected _upArrowSprite: Sprite;

  /**
   * @method _createAllParts
   * @private
   */
  protected _createAllParts(): void;

  /**
   * @method _onWindowskinLoad
   * @private
   */
  protected _onWindowskinLoad(): void;

  /**
   * @method _refreshAllParts
   * @private
   */
  protected _refreshAllParts(): void;

  /**
   * @method _refreshBack
   * @private
   */
  protected _refreshBack(): void;

  /**
   * @method _refreshFrame
   * @private
   */
  protected _refreshFrame(): void;

  /**
   * @method _refreshCursor
   * @private
   */
  protected _refreshCursor(): void;

  /**
   * @method _refreshContents
   * @private
   */
  protected _refreshContents(): void;

  /**
   * @method _refreshArrows
   * @private
   */
  protected _refreshArrows(): void;

  /**
   * @method _refreshPauseSign
   * @private
   */
  protected _refreshPauseSign(): void;

  /**
   * @method _updateCursor
   * @private
   */
  protected _updateCursor(): void;

  /**
   * @method _updateContents
   * @private
   */
  protected _updateContents(): void;

  /**
   * @method _updateArrows
   * @private
   */
  protected _updateArrows(): void;

  /**
   * @method _updatePauseSign
   * @private
   */
  protected _updatePauseSign(): void;
}
//#endregion
//#region WindowLayer
declare class WindowLayer extends PIXI.Container {
  /**
   * 窗口层的宽度（以像素为单位）。
   *
   * @property width
   * @type Number
   */
  width: number;

  /**
   * 窗口层的高度（以像素为单位）。
   *
   * @property height
   * @type Number
   */
  height: number;

  /**
   * 精灵的 x 坐标。
   *
   * @property x
   * @type Number
   */
  x: number;

  /**
   * 精灵的 y 坐标。
   *
   * @property y
   * @type Number
   */
  y: number;

  /**
   * [只读] 精灵的子对象数组。
   *
   * @property children
   * @type Array<PIXI.DisplayObject>
   */
  children: Array<PIXI.DisplayObject>;

  /**
   * [只读] 包含此精灵的对象。
   *
   * @property parent
   * @type PIXI.DisplayObjectContainer
   */
  parent: PIXI.Container;

  voidFilter: PIXI.Filter;

  /**
   * 包含游戏窗口的图层。
   *
   * @class WindowLayer
   * @constructor
   */
  constructor();

  /**
   * 同时设置 x、y、宽度和高度。
   *
   * @method move
   * @param {Number} x 窗口层的 x 坐标
   * @param {Number} y 窗口层的 y 坐标
   * @param {Number} width 窗口层的宽度
   * @param {Number} height 窗口层的高度
   */
  move(x: number, y: number, width: number, height: number): void;

  /**
   * 每帧更新窗口层。
   *
   * @method update
   */
  update(): void;

  /**
   * 向容器添加子对象。
   *
   * @method addChild
   * @param {PIXI.DisplayObject} child 要添加的子对象
   * @return {PIXI.DisplayObject} 被添加的子对象
   */
  addChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

  /**
   * 在指定索引处向容器添加子对象。
   *
   * @method addChildAt
   * @param {PIXI.DisplayObject} child 要添加的子对象
   * @param {Number} index 放置子对象的索引位置
   * @return {PIXI.DisplayObject} 被添加的子对象
   */
  addChildAt(child: PIXI.DisplayObject, index: number): PIXI.DisplayObject;

  /**
   * 从容器中移除子对象。
   *
   * @method removeChild
   * @param {PIXI.DisplayObject} child 要移除的子对象
   * @return {PIXI.DisplayObject} 被移除的子对象
   */
  removeChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

  /**
   * 从指定索引位置移除子对象。
   *
   * @method removeChildAt
   * @param {Number} index 获取子对象的索引位置
   * @return {PIXI.DisplayObject} 被移除的子对象
   */
  removeChildAt(index: number): PIXI.DisplayObject;

  /**
   * @method _renderCanvas
   * @param {PIXI.CanvasRenderer} renderer
   * @private
   */
  renderCanvas(renderer: PIXI.CanvasRenderer): void;

  /**
   * @method _renderWebGL
   * @param {PIXI.WebGLRenderer} renderer
   * @private
   */
  renderWebGL(renderer: PIXI.WebGLRenderer): void;

  protected _width: number;
  protected _height: number;
  protected _tempCanvas: HTMLCanvasElement;
  protected _translationMatrix: Array<number>;
  protected _windowMask: PIXI.Graphics;
  protected _renderSprite: PIXI.Container;

  /**
   * @method _canvasClearWindowRect
   * @param {PIXI.CanvasRenderer} renderSession
   * @param {Window} window
   * @private
   */
  protected _canvasClearWindowRect(renderSession: PIXI.CanvasRenderer, window: _Window): void;

  /**
   * @method _maskWindow
   * @param {Window} window
   * @private
   */
  protected _maskWindow(window: _Window): void;
}
//#endregion
//#region 资源类。如果在一段时间或一定帧数内未使用，允许被垃圾回收
declare class CacheEntry {
  /**
   * @class CacheEntry
   * @constructor
   * @param {ResourceManager} resource manager 资源管理器
   * @param {string} key 资源的 URL
   * @param {string} item 要存储在缓存中的项目 - Bitmap、HTML5Audio、WebAudio 等
   */
  constructor(cache: CacheMap, key: string, item: string);

  /**
   * 释放资源。
   */
  free(byTTL?: boolean): void;

  /**
   * 分配资源。
   * @returns {CacheEntry}
   */
  allocate(): CacheEntry;

  /**
   * 设置生存时间。
   * @param {number} ticks 生存时间（以帧为单位），0 表示不设置
   * @param {number} time 生存时间（以秒为单位），0 表示不设置
   * @returns {CacheEntry}
   */
  setTimeToLive(ticks?: number, seconds?: number): CacheEntry;

  isStillAlive(): boolean;

  /**
   * 确保资源不会被生存时间机制释放。
   * 如果资源已被生存时间机制释放，则重新将其放入缓存。
   */
  touch(): void;
}
//#endregion
//#region CacheMap
declare class CacheMap {
  /**
   * 用于图像、音频或其他任何类型资源的缓存。
   * @param manager
   * @constructor
   */
  constructor(manager: ImageManagerStatic);

  /**
   * 检查所有元素的生存时间并移除已过期的元素。
   */
  checkTTL(): void;

  /**
   * 获取缓存项。
   * @param key 缓存元素的 URL
   * @returns {*|null}
   */
  getItem(key: string): any;

  clear(): void;
  setItem(key, item): CacheEntry;
  update(ticks: number, delta: number): void;
}
//#endregion
//#region DecrypterStatic
interface DecrypterStatic {
  hasEncryptedImages: boolean;
  hasEncryptedAudio: boolean;

  _requestImgFile: Array<string>;
  _headerlength: number;
  _xhrOk: number;
  _encryptionKey: string;
  _ignoreList: Array<string>;

  SIGNATURE: string;
  VER: string;
  REMAIN: string;

  checkImgIgnore(url: string): boolean;
  decryptImg(url: string, bitmap: Bitmap): void;
  decryptHTML5Audio(url: string, bgm: MV.AudioParameters, pos?: number): void;
  cutArrayHeader(arrayBuffer: ArrayBuffer, length: number): ArrayBuffer;
  decryptArrayBuffer(arrayBuffer: ArrayBuffer): void;
  createBlobUrl(arrayBuffer: ArrayBuffer): string;
  extToEncryptExt(url: string): string;
  readEncryptionkey(): void;
}
declare const Decrypter: DecrypterStatic;
//#endregion
