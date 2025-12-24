// deno:https://cdn.jsdelivr.net/npm/fabric@7.0.0/+esm
function t(t3, e5, s3) {
  return (e5 = function(t4) {
    var e6 = function(t5, e7) {
      if ("object" != typeof t5 || !t5) return t5;
      var s4 = t5[Symbol.toPrimitive];
      if (void 0 !== s4) {
        var i3 = s4.call(t5, e7);
        if ("object" != typeof i3) return i3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === e7 ? String : Number)(t5);
    }(t4, "string");
    return "symbol" == typeof e6 ? e6 : e6 + "";
  }(e5)) in t3 ? Object.defineProperty(t3, e5, {
    value: s3,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t3[e5] = s3, t3;
}
var e = class {
  constructor() {
    t(this, "browserShadowBlurConstant", 1), t(this, "DPI", 96), t(this, "devicePixelRatio", "undefined" != typeof window ? window.devicePixelRatio : 1), t(this, "perfLimitSizeTotal", 2097152), t(this, "maxCacheSideLimit", 4096), t(this, "minCacheSideLimit", 256), t(this, "disableStyleCopyPaste", false), t(this, "enableGLFiltering", true), t(this, "textureSize", 4096), t(this, "forceGLPutImageData", false), t(this, "cachesBoundsOfCurve", false), t(this, "fontPaths", {}), t(this, "NUM_FRACTION_DIGITS", 4);
  }
};
var s = new class extends e {
  constructor(t3) {
    super(), this.configure(t3);
  }
  configure() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    Object.assign(this, t3);
  }
  addFonts() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    this.fontPaths = {
      ...this.fontPaths,
      ...t3
    };
  }
  removeFonts() {
    (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach((t3) => {
      delete this.fontPaths[t3];
    });
  }
  clearFonts() {
    this.fontPaths = {};
  }
  restoreDefaults(t3) {
    const s3 = new e(), i3 = (null == t3 ? void 0 : t3.reduce((t4, e5) => (t4[e5] = s3[e5], t4), {})) || s3;
    this.configure(i3);
  }
}();
var i = function(t3) {
  for (var e5 = arguments.length, s3 = new Array(e5 > 1 ? e5 - 1 : 0), i3 = 1; i3 < e5; i3++) s3[i3 - 1] = arguments[i3];
  return console[t3]("fabric", ...s3);
};
var r = class extends Error {
  constructor(t3, e5) {
    super(`fabric: ${t3}`, e5);
  }
};
var n = class extends r {
  constructor(t3) {
    super(`${t3} 'options.signal' is in 'aborted' state`);
  }
};
var o = class {
};
var a = class extends o {
  testPrecision(t3, e5) {
    const s3 = `precision ${e5} float;
void main(){}`, i3 = t3.createShader(t3.FRAGMENT_SHADER);
    return !!i3 && (t3.shaderSource(i3, s3), t3.compileShader(i3), !!t3.getShaderParameter(i3, t3.COMPILE_STATUS));
  }
  queryWebGL(t3) {
    const e5 = t3.getContext("webgl");
    e5 && (this.maxTextureSize = e5.getParameter(e5.MAX_TEXTURE_SIZE), this.GLPrecision = [
      "highp",
      "mediump",
      "lowp"
    ].find((t4) => this.testPrecision(e5, t4)), e5.getExtension("WEBGL_lose_context").loseContext(), i("log", `WebGL: max texture size ${this.maxTextureSize}`));
  }
  isSupported(t3) {
    return !!this.maxTextureSize && this.maxTextureSize >= t3;
  }
};
var h = {};
var l;
var u = () => l || (l = {
  document,
  window,
  isTouchSupported: "ontouchstart" in window || "ontouchstart" in document || window && window.navigator && window.navigator.maxTouchPoints > 0,
  WebGLProbe: new a(),
  dispose() {
  },
  copyPasteData: h
});
var d = () => u().document;
var g = () => u().window;
var f = () => {
  var t3;
  return Math.max(null !== (t3 = s.devicePixelRatio) && void 0 !== t3 ? t3 : g().devicePixelRatio, 1);
};
var p = new class {
  constructor() {
    t(this, "boundsOfCurveCache", {}), this.charWidthsCache = /* @__PURE__ */ new Map();
  }
  getFontCache(t3) {
    let { fontFamily: e5, fontStyle: s3, fontWeight: i3 } = t3;
    e5 = e5.toLowerCase();
    const r3 = this.charWidthsCache;
    r3.has(e5) || r3.set(e5, /* @__PURE__ */ new Map());
    const n3 = r3.get(e5), o3 = `${s3.toLowerCase()}_${(i3 + "").toLowerCase()}`;
    return n3.has(o3) || n3.set(o3, /* @__PURE__ */ new Map()), n3.get(o3);
  }
  clearFontCache(t3) {
    t3 ? this.charWidthsCache.delete((t3 || "").toLowerCase()) : this.charWidthsCache = /* @__PURE__ */ new Map();
  }
  limitDimsByArea(t3) {
    const { perfLimitSizeTotal: e5 } = s, i3 = Math.sqrt(e5 * t3);
    return [
      Math.floor(i3),
      Math.floor(e5 / i3)
    ];
  }
}();
var m = "7.0.0";
function v() {
}
var y = Math.PI / 2;
var _ = Math.PI / 4;
var x = 2 * Math.PI;
var C = Math.PI / 180;
var S = Object.freeze([
  1,
  0,
  0,
  1,
  0,
  0
]);
var b = 16;
var w = 0.4477152502;
var T = "center";
var O = "left";
var k = "top";
var D = "bottom";
var M = "right";
var P = "none";
var E = /\r?\n/;
var A = "moving";
var j = "scaling";
var F = "rotating";
var L = "rotate";
var I = "skewing";
var B = "resizing";
var R = "modifyPoly";
var $ = "modifyPath";
var X = "changed";
var Y = "scale";
var W = "scaleX";
var V = "scaleY";
var G = "skewX";
var z = "skewY";
var H = "fill";
var N = "stroke";
var U = "modified";
var q = "ltr";
var K = "rtl";
var J = "normal";
var Q = "json";
var Z = "svg";
var tt = new class {
  constructor() {
    this[Q] = /* @__PURE__ */ new Map(), this[Z] = /* @__PURE__ */ new Map();
  }
  has(t3) {
    return this[Q].has(t3);
  }
  getClass(t3) {
    const e5 = this[Q].get(t3);
    if (!e5) throw new r(`No class registered for ${t3}`);
    return e5;
  }
  setClass(t3, e5) {
    e5 ? this[Q].set(e5, t3) : (this[Q].set(t3.type, t3), this[Q].set(t3.type.toLowerCase(), t3));
  }
  getSVGClass(t3) {
    return this[Z].get(t3);
  }
  setSVGClass(t3, e5) {
    this[Z].set(null != e5 ? e5 : t3.type.toLowerCase(), t3);
  }
}();
var et = new class extends Array {
  remove(t3) {
    const e5 = this.indexOf(t3);
    e5 > -1 && this.splice(e5, 1);
  }
  cancelAll() {
    const t3 = this.splice(0);
    return t3.forEach((t4) => t4.abort()), t3;
  }
  cancelByCanvas(t3) {
    if (!t3) return [];
    const e5 = this.filter((e6) => {
      var s3;
      return e6.target === t3 || "object" == typeof e6.target && (null === (s3 = e6.target) || void 0 === s3 ? void 0 : s3.canvas) === t3;
    });
    return e5.forEach((t4) => t4.abort()), e5;
  }
  cancelByTarget(t3) {
    if (!t3) return [];
    const e5 = this.filter((e6) => e6.target === t3);
    return e5.forEach((t4) => t4.abort()), e5;
  }
}();
var st = class {
  constructor() {
    t(this, "__eventListeners", {});
  }
  on(t3, e5) {
    if (this.__eventListeners || (this.__eventListeners = {}), "object" == typeof t3) return Object.entries(t3).forEach((t4) => {
      let [e6, s3] = t4;
      this.on(e6, s3);
    }), () => this.off(t3);
    if (e5) {
      const s3 = t3;
      return this.__eventListeners[s3] || (this.__eventListeners[s3] = []), this.__eventListeners[s3].push(e5), () => this.off(s3, e5);
    }
    return () => false;
  }
  once(t3, e5) {
    if ("object" == typeof t3) {
      const e6 = [];
      return Object.entries(t3).forEach((t4) => {
        let [s3, i3] = t4;
        e6.push(this.once(s3, i3));
      }), () => e6.forEach((t4) => t4());
    }
    if (e5) {
      const s3 = this.on(t3, function() {
        for (var t4 = arguments.length, i3 = new Array(t4), r3 = 0; r3 < t4; r3++) i3[r3] = arguments[r3];
        e5.call(this, ...i3), s3();
      });
      return s3;
    }
    return () => false;
  }
  _removeEventListener(t3, e5) {
    if (this.__eventListeners[t3]) if (e5) {
      const s3 = this.__eventListeners[t3], i3 = s3.indexOf(e5);
      i3 > -1 && s3.splice(i3, 1);
    } else this.__eventListeners[t3] = [];
  }
  off(t3, e5) {
    if (this.__eventListeners) if (void 0 === t3) for (const t4 in this.__eventListeners) this._removeEventListener(t4);
    else "object" == typeof t3 ? Object.entries(t3).forEach((t4) => {
      let [e6, s3] = t4;
      this._removeEventListener(e6, s3);
    }) : this._removeEventListener(t3, e5);
  }
  fire(t3, e5) {
    var s3;
    if (!this.__eventListeners) return;
    const i3 = null === (s3 = this.__eventListeners[t3]) || void 0 === s3 ? void 0 : s3.concat();
    if (i3) for (let t4 = 0; t4 < i3.length; t4++) i3[t4].call(this, e5 || {});
  }
};
var it = (t3, e5) => {
  const s3 = t3.indexOf(e5);
  return -1 !== s3 && t3.splice(s3, 1), t3;
};
var rt = (t3) => {
  if (0 === t3) return 1;
  switch (Math.abs(t3) / y) {
    case 1:
    case 3:
      return 0;
    case 2:
      return -1;
  }
  return Math.cos(t3);
};
var nt = (t3) => {
  if (0 === t3) return 0;
  const e5 = t3 / y, s3 = Math.sign(t3);
  switch (e5) {
    case 1:
      return s3;
    case 2:
      return 0;
    case 3:
      return -s3;
  }
  return Math.sin(t3);
};
var ot = class _ot {
  constructor() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    "object" == typeof t3 ? (this.x = t3.x, this.y = t3.y) : (this.x = t3, this.y = e5);
  }
  add(t3) {
    return new _ot(this.x + t3.x, this.y + t3.y);
  }
  addEquals(t3) {
    return this.x += t3.x, this.y += t3.y, this;
  }
  scalarAdd(t3) {
    return new _ot(this.x + t3, this.y + t3);
  }
  scalarAddEquals(t3) {
    return this.x += t3, this.y += t3, this;
  }
  subtract(t3) {
    return new _ot(this.x - t3.x, this.y - t3.y);
  }
  subtractEquals(t3) {
    return this.x -= t3.x, this.y -= t3.y, this;
  }
  scalarSubtract(t3) {
    return new _ot(this.x - t3, this.y - t3);
  }
  scalarSubtractEquals(t3) {
    return this.x -= t3, this.y -= t3, this;
  }
  multiply(t3) {
    return new _ot(this.x * t3.x, this.y * t3.y);
  }
  scalarMultiply(t3) {
    return new _ot(this.x * t3, this.y * t3);
  }
  scalarMultiplyEquals(t3) {
    return this.x *= t3, this.y *= t3, this;
  }
  divide(t3) {
    return new _ot(this.x / t3.x, this.y / t3.y);
  }
  scalarDivide(t3) {
    return new _ot(this.x / t3, this.y / t3);
  }
  scalarDivideEquals(t3) {
    return this.x /= t3, this.y /= t3, this;
  }
  eq(t3) {
    return this.x === t3.x && this.y === t3.y;
  }
  lt(t3) {
    return this.x < t3.x && this.y < t3.y;
  }
  lte(t3) {
    return this.x <= t3.x && this.y <= t3.y;
  }
  gt(t3) {
    return this.x > t3.x && this.y > t3.y;
  }
  gte(t3) {
    return this.x >= t3.x && this.y >= t3.y;
  }
  lerp(t3) {
    let e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.5;
    return e5 = Math.max(Math.min(1, e5), 0), new _ot(this.x + (t3.x - this.x) * e5, this.y + (t3.y - this.y) * e5);
  }
  distanceFrom(t3) {
    const e5 = this.x - t3.x, s3 = this.y - t3.y;
    return Math.sqrt(e5 * e5 + s3 * s3);
  }
  midPointFrom(t3) {
    return this.lerp(t3);
  }
  min(t3) {
    return new _ot(Math.min(this.x, t3.x), Math.min(this.y, t3.y));
  }
  max(t3) {
    return new _ot(Math.max(this.x, t3.x), Math.max(this.y, t3.y));
  }
  toString() {
    return `${this.x},${this.y}`;
  }
  setXY(t3, e5) {
    return this.x = t3, this.y = e5, this;
  }
  setX(t3) {
    return this.x = t3, this;
  }
  setY(t3) {
    return this.y = t3, this;
  }
  setFromPoint(t3) {
    return this.x = t3.x, this.y = t3.y, this;
  }
  swap(t3) {
    const e5 = this.x, s3 = this.y;
    this.x = t3.x, this.y = t3.y, t3.x = e5, t3.y = s3;
  }
  clone() {
    return new _ot(this.x, this.y);
  }
  rotate(t3) {
    let e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : at;
    const s3 = nt(t3), i3 = rt(t3), r3 = this.subtract(e5);
    return new _ot(r3.x * i3 - r3.y * s3, r3.x * s3 + r3.y * i3).add(e5);
  }
  transform(t3) {
    let e5 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return new _ot(t3[0] * this.x + t3[2] * this.y + (e5 ? 0 : t3[4]), t3[1] * this.x + t3[3] * this.y + (e5 ? 0 : t3[5]));
  }
};
var at = new ot(0, 0);
var ht = (t3) => !!t3 && Array.isArray(t3._objects);
function lt(e5) {
  class s3 extends e5 {
    constructor() {
      super(...arguments), t(this, "_objects", []);
    }
    _onObjectAdded(t3) {
    }
    _onObjectRemoved(t3) {
    }
    _onStackOrderChanged(t3) {
    }
    add() {
      for (var t3 = arguments.length, e6 = new Array(t3), s4 = 0; s4 < t3; s4++) e6[s4] = arguments[s4];
      const i3 = this._objects.push(...e6);
      return e6.forEach((t4) => this._onObjectAdded(t4)), i3;
    }
    insertAt(t3) {
      for (var e6 = arguments.length, s4 = new Array(e6 > 1 ? e6 - 1 : 0), i3 = 1; i3 < e6; i3++) s4[i3 - 1] = arguments[i3];
      return this._objects.splice(t3, 0, ...s4), s4.forEach((t4) => this._onObjectAdded(t4)), this._objects.length;
    }
    remove() {
      const t3 = this._objects, e6 = [];
      for (var s4 = arguments.length, i3 = new Array(s4), r3 = 0; r3 < s4; r3++) i3[r3] = arguments[r3];
      return i3.forEach((s5) => {
        const i4 = t3.indexOf(s5);
        -1 !== i4 && (t3.splice(i4, 1), e6.push(s5), this._onObjectRemoved(s5));
      }), e6;
    }
    forEachObject(t3) {
      this.getObjects().forEach((e6, s4, i3) => t3(e6, s4, i3));
    }
    getObjects() {
      for (var t3 = arguments.length, e6 = new Array(t3), s4 = 0; s4 < t3; s4++) e6[s4] = arguments[s4];
      return 0 === e6.length ? [
        ...this._objects
      ] : this._objects.filter((t4) => t4.isType(...e6));
    }
    item(t3) {
      return this._objects[t3];
    }
    isEmpty() {
      return 0 === this._objects.length;
    }
    size() {
      return this._objects.length;
    }
    contains(t3, e6) {
      return !!this._objects.includes(t3) || !!e6 && this._objects.some((e7) => e7 instanceof s3 && e7.contains(t3, true));
    }
    complexity() {
      return this._objects.reduce((t3, e6) => t3 += e6.complexity ? e6.complexity() : 0, 0);
    }
    sendObjectToBack(t3) {
      return !(!t3 || t3 === this._objects[0]) && (it(this._objects, t3), this._objects.unshift(t3), this._onStackOrderChanged(t3), true);
    }
    bringObjectToFront(t3) {
      return !(!t3 || t3 === this._objects[this._objects.length - 1]) && (it(this._objects, t3), this._objects.push(t3), this._onStackOrderChanged(t3), true);
    }
    sendObjectBackwards(t3, e6) {
      if (!t3) return false;
      const s4 = this._objects.indexOf(t3);
      if (0 !== s4) {
        const i3 = this.findNewLowerIndex(t3, s4, e6);
        return it(this._objects, t3), this._objects.splice(i3, 0, t3), this._onStackOrderChanged(t3), true;
      }
      return false;
    }
    bringObjectForward(t3, e6) {
      if (!t3) return false;
      const s4 = this._objects.indexOf(t3);
      if (s4 !== this._objects.length - 1) {
        const i3 = this.findNewUpperIndex(t3, s4, e6);
        return it(this._objects, t3), this._objects.splice(i3, 0, t3), this._onStackOrderChanged(t3), true;
      }
      return false;
    }
    moveObjectTo(t3, e6) {
      return t3 !== this._objects[e6] && (it(this._objects, t3), this._objects.splice(e6, 0, t3), this._onStackOrderChanged(t3), true);
    }
    findNewLowerIndex(t3, e6, s4) {
      let i3;
      if (s4) {
        i3 = e6;
        for (let s5 = e6 - 1; s5 >= 0; --s5) if (t3.isOverlapping(this._objects[s5])) {
          i3 = s5;
          break;
        }
      } else i3 = e6 - 1;
      return i3;
    }
    findNewUpperIndex(t3, e6, s4) {
      let i3;
      if (s4) {
        i3 = e6;
        for (let s5 = e6 + 1; s5 < this._objects.length; ++s5) if (t3.isOverlapping(this._objects[s5])) {
          i3 = s5;
          break;
        }
      } else i3 = e6 + 1;
      return i3;
    }
    collectObjects(t3) {
      let { left: e6, top: s4, width: i3, height: r3 } = t3, { includeIntersecting: n3 = true } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const o3 = [], a3 = new ot(e6, s4), h3 = a3.add(new ot(i3, r3));
      for (let t4 = this._objects.length - 1; t4 >= 0; t4--) {
        const e7 = this._objects[t4];
        e7.selectable && e7.visible && (n3 && e7.intersectsWithRect(a3, h3) || e7.isContainedWithinRect(a3, h3) || n3 && e7.containsPoint(a3) || n3 && e7.containsPoint(h3)) && o3.push(e7);
      }
      return o3;
    }
  }
  return s3;
}
var ct = class extends st {
  _setOptions() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    for (const e5 in t3) this.set(e5, t3[e5]);
  }
  _setObject(t3) {
    for (const e5 in t3) this._set(e5, t3[e5]);
  }
  set(t3, e5) {
    return "object" == typeof t3 ? this._setObject(t3) : this._set(t3, e5), this;
  }
  _set(t3, e5) {
    this[t3] = e5;
  }
  toggle(t3) {
    const e5 = this.get(t3);
    return "boolean" == typeof e5 && this.set(t3, !e5), this;
  }
  get(t3) {
    return this[t3];
  }
};
function ut(t3) {
  return g().requestAnimationFrame(t3);
}
function dt(t3) {
  return g().cancelAnimationFrame(t3);
}
var gt = 0;
var ft = () => gt++;
var pt = () => {
  const t3 = d().createElement("canvas");
  if (!t3 || void 0 === t3.getContext) throw new r("Failed to create `canvas` element");
  return t3;
};
var mt = () => d().createElement("img");
var vt = (t3) => {
  const e5 = pt();
  return e5.width = t3.width, e5.height = t3.height, e5;
};
var yt = (t3, e5, s3) => t3.toDataURL(`image/${e5}`, s3);
var _t = (t3, e5, s3) => new Promise((i3, r3) => {
  t3.toBlob(i3, `image/${e5}`, s3);
});
var xt = (t3) => t3 * C;
var Ct = (t3) => t3 / C;
var St = (t3) => t3.every((t4, e5) => t4 === S[e5]);
var bt = (t3, e5, s3) => new ot(t3).transform(e5, s3);
var wt = (t3) => {
  const e5 = 1 / (t3[0] * t3[3] - t3[1] * t3[2]), s3 = [
    e5 * t3[3],
    -e5 * t3[1],
    -e5 * t3[2],
    e5 * t3[0],
    0,
    0
  ], { x: i3, y: r3 } = new ot(t3[4], t3[5]).transform(s3, true);
  return s3[4] = -i3, s3[5] = -r3, s3;
};
var Tt = (t3, e5, s3) => [
  t3[0] * e5[0] + t3[2] * e5[1],
  t3[1] * e5[0] + t3[3] * e5[1],
  t3[0] * e5[2] + t3[2] * e5[3],
  t3[1] * e5[2] + t3[3] * e5[3],
  s3 ? 0 : t3[0] * e5[4] + t3[2] * e5[5] + t3[4],
  s3 ? 0 : t3[1] * e5[4] + t3[3] * e5[5] + t3[5]
];
var Ot = (t3, e5) => t3.reduceRight((t4, s3) => s3 && t4 ? Tt(s3, t4, e5) : s3 || t4, void 0) || S.concat();
var kt = (t3) => {
  let [e5, s3] = t3;
  return Math.atan2(s3, e5);
};
var Dt = (t3) => {
  const e5 = kt(t3), s3 = Math.pow(t3[0], 2) + Math.pow(t3[1], 2), i3 = Math.sqrt(s3), r3 = (t3[0] * t3[3] - t3[2] * t3[1]) / i3, n3 = Math.atan2(t3[0] * t3[2] + t3[1] * t3[3], s3);
  return {
    angle: Ct(e5),
    scaleX: i3,
    scaleY: r3,
    skewX: Ct(n3),
    skewY: 0,
    translateX: t3[4] || 0,
    translateY: t3[5] || 0
  };
};
var Mt = function(t3) {
  return [
    1,
    0,
    0,
    1,
    t3,
    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
  ];
};
function Pt() {
  let { angle: t3 = 0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, { x: e5 = 0, y: s3 = 0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  const i3 = xt(t3), r3 = rt(i3), n3 = nt(i3);
  return [
    r3,
    n3,
    -n3,
    r3,
    e5 ? e5 - (r3 * e5 - n3 * s3) : 0,
    s3 ? s3 - (n3 * e5 + r3 * s3) : 0
  ];
}
var Et = function(t3) {
  return [
    t3,
    0,
    0,
    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t3,
    0,
    0
  ];
};
var At = (t3) => Math.tan(xt(t3));
var jt = (t3) => [
  1,
  0,
  At(t3),
  1,
  0,
  0
];
var Ft = (t3) => [
  1,
  At(t3),
  0,
  1,
  0,
  0
];
var Lt = (t3) => {
  let { scaleX: e5 = 1, scaleY: s3 = 1, flipX: i3 = false, flipY: r3 = false, skewX: n3 = 0, skewY: o3 = 0 } = t3, a3 = Et(i3 ? -e5 : e5, r3 ? -s3 : s3);
  return n3 && (a3 = Tt(a3, jt(n3), true)), o3 && (a3 = Tt(a3, Ft(o3), true)), a3;
};
var It = (t3) => {
  const { translateX: e5 = 0, translateY: s3 = 0, angle: i3 = 0 } = t3;
  let r3 = Mt(e5, s3);
  i3 && (r3 = Tt(r3, Pt({
    angle: i3
  })));
  const n3 = Lt(t3);
  return St(n3) || (r3 = Tt(r3, n3)), r3;
};
var Bt = function(t3) {
  let { signal: e5, crossOrigin: s3 = null } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return new Promise(function(i3, o3) {
    if (e5 && e5.aborted) return o3(new n("loadImage"));
    const a3 = mt();
    let h3;
    e5 && (h3 = function(t4) {
      a3.src = "", o3(t4);
    }, e5.addEventListener("abort", h3, {
      once: true
    }));
    const l3 = function() {
      a3.onload = a3.onerror = null, h3 && (null == e5 || e5.removeEventListener("abort", h3)), i3(a3);
    };
    t3 ? (a3.onload = l3, a3.onerror = function() {
      h3 && (null == e5 || e5.removeEventListener("abort", h3)), o3(new r(`Error loading ${a3.src}`));
    }, s3 && (a3.crossOrigin = s3), a3.src = t3) : l3();
  });
};
var Rt = function(t3) {
  let { signal: e5, reviver: s3 = v } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return new Promise((i3, r3) => {
    const n3 = [];
    e5 && e5.addEventListener("abort", r3, {
      once: true
    }), Promise.all(t3.map((t4) => tt.getClass(t4.type).fromObject(t4, {
      signal: e5
    }).then((e6) => (s3(t4, e6), n3.push(e6), e6)))).then(i3).catch((t4) => {
      n3.forEach((t5) => {
        t5.dispose && t5.dispose();
      }), r3(t4);
    }).finally(() => {
      e5 && e5.removeEventListener("abort", r3);
    });
  });
};
var $t = function(t3) {
  let { signal: e5 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return new Promise((s3, i3) => {
    const r3 = [];
    e5 && e5.addEventListener("abort", i3, {
      once: true
    });
    const n3 = Object.values(t3).map((t4) => t4 && t4.type && tt.has(t4.type) ? Rt([
      t4
    ], {
      signal: e5
    }).then((t5) => {
      let [e6] = t5;
      return r3.push(e6), e6;
    }) : t4), o3 = Object.keys(t3);
    Promise.all(n3).then((t4) => t4.reduce((t5, e6, s4) => (t5[o3[s4]] = e6, t5), {})).then(s3).catch((t4) => {
      r3.forEach((t5) => {
        t5.dispose && t5.dispose();
      }), i3(t4);
    }).finally(() => {
      e5 && e5.removeEventListener("abort", i3);
    });
  });
};
var Xt = function(t3) {
  return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).reduce((e5, s3) => (s3 in t3 && (e5[s3] = t3[s3]), e5), {});
};
var Yt = (t3, e5) => Object.keys(t3).reduce((s3, i3) => (e5(t3[i3], i3, t3) && (s3[i3] = t3[i3]), s3), {});
var Wt = (t3, e5) => parseFloat(Number(t3).toFixed(e5));
var Vt = (t3) => "matrix(" + t3.map((t4) => Wt(t4, s.NUM_FRACTION_DIGITS)).join(" ") + ")";
var Gt = (t3) => !!t3 && void 0 !== t3.toLive;
var zt = (t3) => !!t3 && "function" == typeof t3.toObject;
var Ht = (t3) => !!t3 && void 0 !== t3.offsetX && "source" in t3;
var Nt = (t3) => !!t3 && "multiSelectionStacking" in t3;
function Ut(t3) {
  const e5 = t3 && qt(t3);
  let s3 = 0, i3 = 0;
  if (!t3 || !e5) return {
    left: s3,
    top: i3
  };
  let r3 = t3;
  const n3 = e5.documentElement, o3 = e5.body || {
    scrollLeft: 0,
    scrollTop: 0
  };
  for (; r3 && (r3.parentNode || r3.host) && (r3 = r3.parentNode || r3.host, r3 === e5 ? (s3 = o3.scrollLeft || n3.scrollLeft || 0, i3 = o3.scrollTop || n3.scrollTop || 0) : (s3 += r3.scrollLeft || 0, i3 += r3.scrollTop || 0), 1 !== r3.nodeType || "fixed" !== r3.style.position); ) ;
  return {
    left: s3,
    top: i3
  };
}
var qt = (t3) => t3.ownerDocument || null;
var Kt = (t3) => {
  var e5;
  return (null === (e5 = t3.ownerDocument) || void 0 === e5 ? void 0 : e5.defaultView) || null;
};
var Jt = function(t3, e5, s3) {
  let { width: i3, height: r3 } = s3, n3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
  t3.width = i3, t3.height = r3, n3 > 1 && (t3.setAttribute("width", (i3 * n3).toString()), t3.setAttribute("height", (r3 * n3).toString()), e5.scale(n3, n3));
};
var Qt = (t3, e5) => {
  let { width: s3, height: i3 } = e5;
  s3 && (t3.style.width = "number" == typeof s3 ? `${s3}px` : s3), i3 && (t3.style.height = "number" == typeof i3 ? `${i3}px` : i3);
};
function Zt(t3) {
  return void 0 !== t3.onselectstart && (t3.onselectstart = () => false), t3.style.userSelect = P, t3;
}
var te = class {
  constructor(e5) {
    t(this, "_originalCanvasStyle", void 0), t(this, "lower", void 0);
    const s3 = this.createLowerCanvas(e5);
    this.lower = {
      el: s3,
      ctx: s3.getContext("2d")
    };
  }
  createLowerCanvas(t3) {
    const e5 = (s3 = t3) && void 0 !== s3.getContext ? t3 : t3 && d().getElementById(t3) || pt();
    var s3;
    if (e5.hasAttribute("data-fabric")) throw new r("Trying to initialize a canvas that has already been initialized. Did you forget to dispose the canvas?");
    return this._originalCanvasStyle = e5.style.cssText, e5.setAttribute("data-fabric", "main"), e5.classList.add("lower-canvas"), e5;
  }
  cleanupDOM(t3) {
    let { width: e5, height: s3 } = t3;
    const { el: i3 } = this.lower;
    i3.classList.remove("lower-canvas"), i3.removeAttribute("data-fabric"), i3.setAttribute("width", `${e5}`), i3.setAttribute("height", `${s3}`), i3.style.cssText = this._originalCanvasStyle || "", this._originalCanvasStyle = void 0;
  }
  setDimensions(t3, e5) {
    const { el: s3, ctx: i3 } = this.lower;
    Jt(s3, i3, t3, e5);
  }
  setCSSDimensions(t3) {
    Qt(this.lower.el, t3);
  }
  calcOffset() {
    return function(t3) {
      var e5;
      const s3 = t3 && qt(t3), i3 = {
        left: 0,
        top: 0
      };
      if (!s3) return i3;
      const r3 = (null === (e5 = Kt(t3)) || void 0 === e5 ? void 0 : e5.getComputedStyle(t3, null)) || {};
      i3.left += parseInt(r3.borderLeftWidth, 10) || 0, i3.top += parseInt(r3.borderTopWidth, 10) || 0, i3.left += parseInt(r3.paddingLeft, 10) || 0, i3.top += parseInt(r3.paddingTop, 10) || 0;
      let n3 = {
        left: 0,
        top: 0
      };
      const o3 = s3.documentElement;
      void 0 !== t3.getBoundingClientRect && (n3 = t3.getBoundingClientRect());
      const a3 = Ut(t3);
      return {
        left: n3.left + a3.left - (o3.clientLeft || 0) + i3.left,
        top: n3.top + a3.top - (o3.clientTop || 0) + i3.top
      };
    }(this.lower.el);
  }
  dispose() {
    u().dispose(this.lower.el), delete this.lower;
  }
};
var ee = {
  backgroundVpt: true,
  backgroundColor: "",
  overlayVpt: true,
  overlayColor: "",
  includeDefaultValues: true,
  svgViewportTransformation: true,
  renderOnAddRemove: true,
  skipOffscreen: true,
  enableRetinaScaling: true,
  imageSmoothingEnabled: true,
  controlsAboveOverlay: false,
  allowTouchScrolling: false,
  viewportTransform: [
    ...S
  ],
  patternQuality: "best"
};
var se = class _se extends lt(ct) {
  get lowerCanvasEl() {
    var t3;
    return null === (t3 = this.elements.lower) || void 0 === t3 ? void 0 : t3.el;
  }
  get contextContainer() {
    var t3;
    return null === (t3 = this.elements.lower) || void 0 === t3 ? void 0 : t3.ctx;
  }
  static getDefaults() {
    return _se.ownDefaults;
  }
  constructor(t3) {
    let e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(), Object.assign(this, this.constructor.getDefaults()), this.set(e5), this.initElements(t3), this._setDimensionsImpl({
      width: this.width || this.elements.lower.el.width || 0,
      height: this.height || this.elements.lower.el.height || 0
    }), this.skipControlsDrawing = false, this.viewportTransform = [
      ...this.viewportTransform
    ], this.calcViewportBoundaries();
  }
  initElements(t3) {
    this.elements = new te(t3);
  }
  add() {
    const t3 = super.add(...arguments);
    return arguments.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), t3;
  }
  insertAt(t3) {
    for (var e5 = arguments.length, s3 = new Array(e5 > 1 ? e5 - 1 : 0), i3 = 1; i3 < e5; i3++) s3[i3 - 1] = arguments[i3];
    const r3 = super.insertAt(t3, ...s3);
    return s3.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), r3;
  }
  remove() {
    const t3 = super.remove(...arguments);
    return t3.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), t3;
  }
  _onObjectAdded(t3) {
    t3.canvas && t3.canvas !== this && (i("warn", "Canvas is trying to add an object that belongs to a different canvas.\nResulting to default behavior: removing object from previous canvas and adding to new canvas"), t3.canvas.remove(t3)), t3._set("canvas", this), t3.setCoords(), this.fire("object:added", {
      target: t3
    }), t3.fire("added", {
      target: this
    });
  }
  _onObjectRemoved(t3) {
    t3._set("canvas", void 0), this.fire("object:removed", {
      target: t3
    }), t3.fire("removed", {
      target: this
    });
  }
  _onStackOrderChanged() {
    this.renderOnAddRemove && this.requestRenderAll();
  }
  getRetinaScaling() {
    return this.enableRetinaScaling ? f() : 1;
  }
  calcOffset() {
    return this._offset = this.elements.calcOffset();
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  _setDimensionsImpl(t3) {
    let { cssOnly: e5 = false, backstoreOnly: s3 = false } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!e5) {
      const e6 = {
        width: this.width,
        height: this.height,
        ...t3
      };
      this.elements.setDimensions(e6, this.getRetinaScaling()), this.hasLostContext = true, this.width = e6.width, this.height = e6.height;
    }
    s3 || this.elements.setCSSDimensions(t3), this.calcOffset();
  }
  setDimensions(t3, e5) {
    this._setDimensionsImpl(t3, e5), e5 && e5.cssOnly || this.requestRenderAll();
  }
  getZoom() {
    return this.viewportTransform[0];
  }
  setViewportTransform(t3) {
    this.viewportTransform = t3, this.calcViewportBoundaries(), this.renderOnAddRemove && this.requestRenderAll();
  }
  zoomToPoint(t3, e5) {
    const s3 = t3, i3 = [
      ...this.viewportTransform
    ], r3 = bt(t3, wt(i3));
    i3[0] = e5, i3[3] = e5;
    const n3 = bt(r3, i3);
    i3[4] += s3.x - n3.x, i3[5] += s3.y - n3.y, this.setViewportTransform(i3);
  }
  setZoom(t3) {
    this.zoomToPoint(new ot(0, 0), t3);
  }
  absolutePan(t3) {
    const e5 = [
      ...this.viewportTransform
    ];
    return e5[4] = -t3.x, e5[5] = -t3.y, this.setViewportTransform(e5);
  }
  relativePan(t3) {
    return this.absolutePan(new ot(-t3.x - this.viewportTransform[4], -t3.y - this.viewportTransform[5]));
  }
  getElement() {
    return this.elements.lower.el;
  }
  clearContext(t3) {
    t3.clearRect(0, 0, this.width, this.height);
  }
  getContext() {
    return this.elements.lower.ctx;
  }
  clear() {
    this.remove(...this.getObjects()), this.backgroundImage = void 0, this.overlayImage = void 0, this.backgroundColor = "", this.overlayColor = "", this.clearContext(this.getContext()), this.fire("canvas:cleared"), this.renderOnAddRemove && this.requestRenderAll();
  }
  renderAll() {
    this.cancelRequestedRender(), this.destroyed || this.renderCanvas(this.getContext(), this._objects);
  }
  renderAndReset() {
    this.nextRenderHandle = 0, this.renderAll();
  }
  requestRenderAll() {
    this.nextRenderHandle || this.disposed || this.destroyed || (this.nextRenderHandle = ut(() => this.renderAndReset()));
  }
  calcViewportBoundaries() {
    const t3 = this.width, e5 = this.height, s3 = wt(this.viewportTransform), i3 = bt({
      x: 0,
      y: 0
    }, s3), r3 = bt({
      x: t3,
      y: e5
    }, s3), n3 = i3.min(r3), o3 = i3.max(r3);
    return this.vptCoords = {
      tl: n3,
      tr: new ot(o3.x, n3.y),
      bl: new ot(n3.x, o3.y),
      br: o3
    };
  }
  cancelRequestedRender() {
    this.nextRenderHandle && (dt(this.nextRenderHandle), this.nextRenderHandle = 0);
  }
  drawControls(t3) {
  }
  renderCanvas(t3, e5) {
    if (this.destroyed) return;
    const s3 = this.viewportTransform, i3 = this.clipPath;
    this.calcViewportBoundaries(), this.clearContext(t3), t3.imageSmoothingEnabled = this.imageSmoothingEnabled, t3.patternQuality = this.patternQuality, this.fire("before:render", {
      ctx: t3
    }), this._renderBackground(t3), t3.save(), t3.transform(s3[0], s3[1], s3[2], s3[3], s3[4], s3[5]), this._renderObjects(t3, e5), t3.restore(), this.controlsAboveOverlay || this.skipControlsDrawing || this.drawControls(t3), i3 && (i3._set("canvas", this), i3.shouldCache(), i3._transformDone = true, i3.renderCache({
      forClipping: true
    }), this.drawClipPathOnCanvas(t3, i3)), this._renderOverlay(t3), this.controlsAboveOverlay && !this.skipControlsDrawing && this.drawControls(t3), this.fire("after:render", {
      ctx: t3
    }), this.__cleanupTask && (this.__cleanupTask(), this.__cleanupTask = void 0);
  }
  drawClipPathOnCanvas(t3, e5) {
    const s3 = this.viewportTransform;
    t3.save(), t3.transform(...s3), t3.globalCompositeOperation = "destination-in", e5.transform(t3), t3.scale(1 / e5.zoomX, 1 / e5.zoomY), t3.drawImage(e5._cacheCanvas, -e5.cacheTranslationX, -e5.cacheTranslationY), t3.restore();
  }
  _renderObjects(t3, e5) {
    for (let s3 = 0, i3 = e5.length; s3 < i3; ++s3) e5[s3] && e5[s3].render(t3);
  }
  _renderBackgroundOrOverlay(t3, e5) {
    const s3 = this[`${e5}Color`], i3 = this[`${e5}Image`], r3 = this.viewportTransform, n3 = this[`${e5}Vpt`];
    if (!s3 && !i3) return;
    const o3 = Gt(s3);
    if (s3) {
      if (t3.save(), t3.beginPath(), t3.moveTo(0, 0), t3.lineTo(this.width, 0), t3.lineTo(this.width, this.height), t3.lineTo(0, this.height), t3.closePath(), t3.fillStyle = o3 ? s3.toLive(t3) : s3, n3 && t3.transform(...r3), o3) {
        t3.transform(1, 0, 0, 1, s3.offsetX || 0, s3.offsetY || 0);
        const e6 = s3.gradientTransform || s3.patternTransform;
        e6 && t3.transform(...e6);
      }
      t3.fill(), t3.restore();
    }
    if (i3) {
      t3.save();
      const { skipOffscreen: e6 } = this;
      this.skipOffscreen = n3, n3 && t3.transform(...r3), i3.render(t3), this.skipOffscreen = e6, t3.restore();
    }
  }
  _renderBackground(t3) {
    this._renderBackgroundOrOverlay(t3, "background");
  }
  _renderOverlay(t3) {
    this._renderBackgroundOrOverlay(t3, "overlay");
  }
  getCenterPoint() {
    return new ot(this.width / 2, this.height / 2);
  }
  centerObjectH(t3) {
    return this._centerObject(t3, new ot(this.getCenterPoint().x, t3.getCenterPoint().y));
  }
  centerObjectV(t3) {
    return this._centerObject(t3, new ot(t3.getCenterPoint().x, this.getCenterPoint().y));
  }
  centerObject(t3) {
    return this._centerObject(t3, this.getCenterPoint());
  }
  viewportCenterObject(t3) {
    return this._centerObject(t3, this.getVpCenter());
  }
  viewportCenterObjectH(t3) {
    return this._centerObject(t3, new ot(this.getVpCenter().x, t3.getCenterPoint().y));
  }
  viewportCenterObjectV(t3) {
    return this._centerObject(t3, new ot(t3.getCenterPoint().x, this.getVpCenter().y));
  }
  getVpCenter() {
    return bt(this.getCenterPoint(), wt(this.viewportTransform));
  }
  _centerObject(t3, e5) {
    t3.setXY(e5, T, T), t3.setCoords(), this.renderOnAddRemove && this.requestRenderAll();
  }
  toDatalessJSON(t3) {
    return this.toDatalessObject(t3);
  }
  toObject(t3) {
    return this._toObjectMethod("toObject", t3);
  }
  toJSON() {
    return this.toObject();
  }
  toDatalessObject(t3) {
    return this._toObjectMethod("toDatalessObject", t3);
  }
  _toObjectMethod(t3, e5) {
    const s3 = this.clipPath, i3 = s3 && !s3.excludeFromExport ? this._toObject(s3, t3, e5) : null;
    return {
      version: m,
      ...Xt(this, e5),
      objects: this._objects.filter((t4) => !t4.excludeFromExport).map((s4) => this._toObject(s4, t3, e5)),
      ...this.__serializeBgOverlay(t3, e5),
      ...i3 ? {
        clipPath: i3
      } : null
    };
  }
  _toObject(t3, e5, s3) {
    let i3;
    this.includeDefaultValues || (i3 = t3.includeDefaultValues, t3.includeDefaultValues = false);
    const r3 = t3[e5](s3);
    return this.includeDefaultValues || (t3.includeDefaultValues = !!i3), r3;
  }
  __serializeBgOverlay(t3, e5) {
    const s3 = {}, i3 = this.backgroundImage, r3 = this.overlayImage, n3 = this.backgroundColor, o3 = this.overlayColor;
    return Gt(n3) ? n3.excludeFromExport || (s3.background = n3.toObject(e5)) : n3 && (s3.background = n3), Gt(o3) ? o3.excludeFromExport || (s3.overlay = o3.toObject(e5)) : o3 && (s3.overlay = o3), i3 && !i3.excludeFromExport && (s3.backgroundImage = this._toObject(i3, t3, e5)), r3 && !r3.excludeFromExport && (s3.overlayImage = this._toObject(r3, t3, e5)), s3;
  }
  toSVG() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e5 = arguments.length > 1 ? arguments[1] : void 0;
    t3.reviver = e5;
    const s3 = [];
    return this._setSVGPreamble(s3, t3), this._setSVGHeader(s3, t3), this.clipPath && s3.push(`<g clip-path="url(#${this.clipPath.clipPathId})" >
`), this._setSVGBgOverlayColor(s3, "background"), this._setSVGBgOverlayImage(s3, "backgroundImage", e5), this._setSVGObjects(s3, e5), this.clipPath && s3.push("</g>\n"), this._setSVGBgOverlayColor(s3, "overlay"), this._setSVGBgOverlayImage(s3, "overlayImage", e5), s3.push("</svg>"), s3.join("");
  }
  _setSVGPreamble(t3, e5) {
    e5.suppressPreamble || t3.push('<?xml version="1.0" encoding="', e5.encoding || "UTF-8", '" standalone="no" ?>\n', '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ', '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n');
  }
  _setSVGHeader(t3, e5) {
    const i3 = e5.width || `${this.width}`, r3 = e5.height || `${this.height}`, n3 = s.NUM_FRACTION_DIGITS, o3 = e5.viewBox;
    let a3;
    if (o3) a3 = `viewBox="${o3.x} ${o3.y} ${o3.width} ${o3.height}" `;
    else if (this.svgViewportTransformation) {
      const t4 = this.viewportTransform;
      a3 = `viewBox="${Wt(-t4[4] / t4[0], n3)} ${Wt(-t4[5] / t4[3], n3)} ${Wt(this.width / t4[0], n3)} ${Wt(this.height / t4[3], n3)}" `;
    } else a3 = `viewBox="0 0 ${this.width} ${this.height}" `;
    t3.push("<svg ", 'xmlns="http://www.w3.org/2000/svg" ', 'xmlns:xlink="http://www.w3.org/1999/xlink" ', 'version="1.1" ', 'width="', i3, '" ', 'height="', r3, '" ', a3, 'xml:space="preserve">\n', "<desc>Created with Fabric.js ", m, "</desc>\n", "<defs>\n", this.createSVGFontFacesMarkup(), this.createSVGRefElementsMarkup(), this.createSVGClipPathMarkup(e5), "</defs>\n");
  }
  createSVGClipPathMarkup(t3) {
    const e5 = this.clipPath;
    return e5 ? (e5.clipPathId = `CLIPPATH_${ft()}`, `<clipPath id="${e5.clipPathId}" >
${e5.toClipPathSVG(t3.reviver)}</clipPath>
`) : "";
  }
  createSVGRefElementsMarkup() {
    return [
      "background",
      "overlay"
    ].map((t3) => {
      const e5 = this[`${t3}Color`];
      if (Gt(e5)) {
        const s3 = this[`${t3}Vpt`], i3 = this.viewportTransform, r3 = {
          isType: () => false,
          width: this.width / (s3 ? i3[0] : 1),
          height: this.height / (s3 ? i3[3] : 1)
        };
        return e5.toSVG(r3, {
          additionalTransform: s3 ? Vt(i3) : ""
        });
      }
    }).join("");
  }
  createSVGFontFacesMarkup() {
    const t3 = [], e5 = {}, i3 = s.fontPaths;
    this._objects.forEach(function e6(s3) {
      t3.push(s3), ht(s3) && s3._objects.forEach(e6);
    }), t3.forEach((t4) => {
      if (!(s3 = t4) || "function" != typeof s3._renderText) return;
      var s3;
      const { styles: r4, fontFamily: n3 } = t4;
      !e5[n3] && i3[n3] && (e5[n3] = true, r4 && Object.values(r4).forEach((t5) => {
        Object.values(t5).forEach((t6) => {
          let { fontFamily: s4 = "" } = t6;
          !e5[s4] && i3[s4] && (e5[s4] = true);
        });
      }));
    });
    const r3 = Object.keys(e5).map((t4) => `		@font-face {
			font-family: '${t4}';
			src: url('${i3[t4]}');
		}
`).join("");
    return r3 ? `	<style type="text/css"><![CDATA[
${r3}]]></style>
` : "";
  }
  _setSVGObjects(t3, e5) {
    this.forEachObject((s3) => {
      s3.excludeFromExport || this._setSVGObject(t3, s3, e5);
    });
  }
  _setSVGObject(t3, e5, s3) {
    t3.push(e5.toSVG(s3));
  }
  _setSVGBgOverlayImage(t3, e5, s3) {
    const i3 = this[e5];
    i3 && !i3.excludeFromExport && i3.toSVG && t3.push(i3.toSVG(s3));
  }
  _setSVGBgOverlayColor(t3, e5) {
    const s3 = this[`${e5}Color`];
    if (s3) if (Gt(s3)) {
      const i3 = s3.repeat || "", r3 = this.width, n3 = this.height, o3 = this[`${e5}Vpt`] ? Vt(wt(this.viewportTransform)) : "";
      t3.push(`<rect transform="${o3} translate(${r3 / 2},${n3 / 2})" x="${s3.offsetX - r3 / 2}" y="${s3.offsetY - n3 / 2}" width="${"repeat-y" !== i3 && "no-repeat" !== i3 || !Ht(s3) ? r3 : s3.source.width}" height="${"repeat-x" !== i3 && "no-repeat" !== i3 || !Ht(s3) ? n3 : s3.source.height}" fill="url(#SVGID_${s3.id})"></rect>
`);
    } else t3.push('<rect x="0" y="0" width="100%" height="100%" ', 'fill="', s3, '"', "></rect>\n");
  }
  loadFromJSON(t3, e5) {
    let { signal: s3 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (!t3) return Promise.reject(new r("`json` is undefined"));
    const { objects: i3 = [], ...n3 } = "string" == typeof t3 ? JSON.parse(t3) : t3, { backgroundImage: o3, background: a3, overlayImage: h3, overlay: l3, clipPath: c2 } = n3, u3 = this.renderOnAddRemove;
    return this.renderOnAddRemove = false, Promise.all([
      Rt(i3, {
        reviver: e5,
        signal: s3
      }),
      $t({
        backgroundImage: o3,
        backgroundColor: a3,
        overlayImage: h3,
        overlayColor: l3,
        clipPath: c2
      }, {
        signal: s3
      })
    ]).then((t4) => {
      let [e6, s4] = t4;
      return this.clear(), this.add(...e6), this.set(n3), this.set(s4), this.renderOnAddRemove = u3, this;
    });
  }
  clone(t3) {
    const e5 = this.toObject(t3);
    return this.cloneWithoutData().loadFromJSON(e5);
  }
  cloneWithoutData() {
    const t3 = vt(this);
    return new this.constructor(t3);
  }
  toDataURL() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const { format: e5 = "png", quality: s3 = 1, multiplier: i3 = 1, enableRetinaScaling: r3 = false } = t3, n3 = i3 * (r3 ? this.getRetinaScaling() : 1);
    return yt(this.toCanvasElement(n3, t3), e5, s3);
  }
  toBlob() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const { format: e5 = "png", quality: s3 = 1, multiplier: i3 = 1, enableRetinaScaling: r3 = false } = t3, n3 = i3 * (r3 ? this.getRetinaScaling() : 1);
    return _t(this.toCanvasElement(n3, t3), e5, s3);
  }
  toCanvasElement() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, { width: e5, height: s3, left: i3, top: r3, filter: n3 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const o3 = (e5 || this.width) * t3, a3 = (s3 || this.height) * t3, h3 = this.getZoom(), l3 = this.width, c2 = this.height, u3 = this.skipControlsDrawing, d3 = h3 * t3, g3 = this.viewportTransform, f3 = [
      d3,
      0,
      0,
      d3,
      (g3[4] - (i3 || 0)) * t3,
      (g3[5] - (r3 || 0)) * t3
    ], p3 = this.enableRetinaScaling, m3 = vt({
      width: o3,
      height: a3
    }), v3 = n3 ? this._objects.filter((t4) => n3(t4)) : this._objects;
    return this.enableRetinaScaling = false, this.viewportTransform = f3, this.width = o3, this.height = a3, this.skipControlsDrawing = true, this.calcViewportBoundaries(), this.renderCanvas(m3.getContext("2d"), v3), this.viewportTransform = g3, this.width = l3, this.height = c2, this.calcViewportBoundaries(), this.enableRetinaScaling = p3, this.skipControlsDrawing = u3, m3;
  }
  dispose() {
    return !this.disposed && this.elements.cleanupDOM({
      width: this.width,
      height: this.height
    }), et.cancelByCanvas(this), this.disposed = true, new Promise((t3, e5) => {
      const s3 = () => {
        this.destroy(), t3(true);
      };
      s3.kill = e5, this.__cleanupTask && this.__cleanupTask.kill("aborted"), this.destroyed ? t3(false) : this.nextRenderHandle ? this.__cleanupTask = s3 : s3();
    });
  }
  destroy() {
    this.destroyed = true, this.cancelRequestedRender(), this.forEachObject((t3) => t3.dispose()), this._objects = [], this.backgroundImage && this.backgroundImage.dispose(), this.backgroundImage = void 0, this.overlayImage && this.overlayImage.dispose(), this.overlayImage = void 0, this.elements.dispose();
  }
  toString() {
    return `#<Canvas (${this.complexity()}): { objects: ${this._objects.length} }>`;
  }
};
t(se, "ownDefaults", ee);
var ie = [
  "touchstart",
  "touchmove",
  "touchend"
];
var re = (t3) => {
  const e5 = Ut(t3.target), s3 = function(t4) {
    const e6 = t4.changedTouches;
    return e6 && e6[0] ? e6[0] : t4;
  }(t3);
  return new ot(s3.clientX + e5.left, s3.clientY + e5.top);
};
var ne = (t3) => ie.includes(t3.type) || "touch" === t3.pointerType;
var oe = (t3) => {
  t3.preventDefault(), t3.stopPropagation();
};
var ae = (t3) => {
  let e5 = 0, s3 = 0, i3 = 0, r3 = 0;
  for (let n3 = 0, o3 = t3.length; n3 < o3; n3++) {
    const { x: o4, y: a3 } = t3[n3];
    (o4 > i3 || !n3) && (i3 = o4), (o4 < e5 || !n3) && (e5 = o4), (a3 > r3 || !n3) && (r3 = a3), (a3 < s3 || !n3) && (s3 = a3);
  }
  return {
    left: e5,
    top: s3,
    width: i3 - e5,
    height: r3 - s3
  };
};
var he = (t3, e5) => le(t3, Tt(e5, t3.calcOwnMatrix()));
var le = (t3, e5) => {
  const { translateX: s3, translateY: i3, scaleX: r3, scaleY: n3, ...o3 } = Dt(e5), a3 = new ot(s3, i3);
  t3.flipX = false, t3.flipY = false, Object.assign(t3, o3), t3.set({
    scaleX: r3,
    scaleY: n3
  }), t3.setPositionByOrigin(a3, T, T);
};
var ce = (t3) => {
  t3.scaleX = 1, t3.scaleY = 1, t3.skewX = 0, t3.skewY = 0, t3.flipX = false, t3.flipY = false, t3.rotate(0);
};
var ue = (t3) => ({
  scaleX: t3.scaleX,
  scaleY: t3.scaleY,
  skewX: t3.skewX,
  skewY: t3.skewY,
  angle: t3.angle,
  left: t3.left,
  flipX: t3.flipX,
  flipY: t3.flipY,
  top: t3.top
});
var de = (t3, e5, s3) => {
  const i3 = t3 / 2, r3 = e5 / 2, n3 = [
    new ot(-i3, -r3),
    new ot(i3, -r3),
    new ot(-i3, r3),
    new ot(i3, r3)
  ].map((t4) => t4.transform(s3)), o3 = ae(n3);
  return new ot(o3.width, o3.height);
};
var ge = function() {
  let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S;
  return Tt(wt(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S), t3);
};
var fe = function(t3) {
  let e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S, s3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : S;
  return t3.transform(ge(e5, s3));
};
var pe = function(t3) {
  let e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S, s3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : S;
  return t3.transform(ge(e5, s3), true);
};
var me = (t3, e5, s3) => {
  const i3 = ge(e5, s3);
  return le(t3, Tt(i3, t3.calcOwnMatrix())), i3;
};
var ve = (t3, e5) => {
  var s3;
  const { transform: { target: i3 } } = e5;
  null === (s3 = i3.canvas) || void 0 === s3 || s3.fire(`object:${t3}`, {
    ...e5,
    target: i3
  }), i3.fire(t3, e5);
};
var ye = {
  left: -0.5,
  top: -0.5,
  center: 0,
  bottom: 0.5,
  right: 0.5
};
var _e = (t3) => "string" == typeof t3 ? ye[t3] : t3 - 0.5;
var xe = new ot(1, 0);
var Ce = new ot();
var Se = (t3, e5) => t3.rotate(e5);
var be = (t3, e5) => new ot(e5).subtract(t3);
var we = (t3) => t3.distanceFrom(Ce);
var Te = (t3, e5) => Math.atan2(Me(t3, e5), Pe(t3, e5));
var Oe = (t3) => Te(xe, t3);
var ke = (t3) => t3.eq(Ce) ? t3 : t3.scalarDivide(we(t3));
var De = function(t3) {
  let e5 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  return ke(new ot(-t3.y, t3.x).scalarMultiply(e5 ? 1 : -1));
};
var Me = (t3, e5) => t3.x * e5.y - t3.y * e5.x;
var Pe = (t3, e5) => t3.x * e5.x + t3.y * e5.y;
var Ee = (t3, e5, s3) => {
  if (t3.eq(e5) || t3.eq(s3)) return true;
  const i3 = Me(e5, s3), r3 = Me(e5, t3), n3 = Me(s3, t3);
  return i3 >= 0 ? r3 >= 0 && n3 <= 0 : !(r3 <= 0 && n3 >= 0);
};
var Ae = "not-allowed";
function je(t3) {
  return _e(t3.originX) === _e(T) && _e(t3.originY) === _e(T);
}
function Fe(t3) {
  return 0.5 - _e(t3);
}
var Le = (t3, e5) => t3[e5];
var Ie = (t3, e5, s3, i3) => ({
  e: t3,
  transform: e5,
  pointer: new ot(s3, i3)
});
function Be(t3, e5, s3) {
  const i3 = s3, r3 = fe(t3.getCenterPoint(), t3.canvas.viewportTransform, void 0), n3 = Oe(be(r3, i3)) + x;
  return Math.round(n3 % x / _);
}
function Re(t3, e5, s3, i3, r3) {
  var n3;
  let { target: o3, corner: a3 } = t3;
  const h3 = o3.controls[a3], l3 = (null === (n3 = o3.canvas) || void 0 === n3 ? void 0 : n3.getZoom()) || 1, c2 = o3.padding / l3, u3 = function(t4, e6, s4, i4) {
    const r4 = t4.getRelativeCenterPoint(), n4 = void 0 !== s4 && void 0 !== i4 ? t4.translateToGivenOrigin(r4, T, T, s4, i4) : new ot(t4.left, t4.top);
    return (t4.angle ? e6.rotate(-xt(t4.angle), r4) : e6).subtract(n4);
  }(o3, new ot(i3, r3), e5, s3);
  return u3.x >= c2 && (u3.x -= c2), u3.x <= -c2 && (u3.x += c2), u3.y >= c2 && (u3.y -= c2), u3.y <= c2 && (u3.y += c2), u3.x -= h3.offsetX, u3.y -= h3.offsetY, u3;
}
var $e = (t3, e5, s3, i3) => {
  const { target: r3, offsetX: n3, offsetY: o3 } = e5, a3 = s3 - n3, h3 = i3 - o3, l3 = !Le(r3, "lockMovementX") && r3.left !== a3, c2 = !Le(r3, "lockMovementY") && r3.top !== h3;
  return l3 && r3.set(O, a3), c2 && r3.set(k, h3), (l3 || c2) && ve(A, Ie(t3, e5, s3, i3)), l3 || c2;
};
var Xe = (t3) => t3.replace(/\s+/g, " ");
var Ye = {
  aliceblue: "#F0F8FF",
  antiquewhite: "#FAEBD7",
  aqua: "#0FF",
  aquamarine: "#7FFFD4",
  azure: "#F0FFFF",
  beige: "#F5F5DC",
  bisque: "#FFE4C4",
  black: "#000",
  blanchedalmond: "#FFEBCD",
  blue: "#00F",
  blueviolet: "#8A2BE2",
  brown: "#A52A2A",
  burlywood: "#DEB887",
  cadetblue: "#5F9EA0",
  chartreuse: "#7FFF00",
  chocolate: "#D2691E",
  coral: "#FF7F50",
  cornflowerblue: "#6495ED",
  cornsilk: "#FFF8DC",
  crimson: "#DC143C",
  cyan: "#0FF",
  darkblue: "#00008B",
  darkcyan: "#008B8B",
  darkgoldenrod: "#B8860B",
  darkgray: "#A9A9A9",
  darkgrey: "#A9A9A9",
  darkgreen: "#006400",
  darkkhaki: "#BDB76B",
  darkmagenta: "#8B008B",
  darkolivegreen: "#556B2F",
  darkorange: "#FF8C00",
  darkorchid: "#9932CC",
  darkred: "#8B0000",
  darksalmon: "#E9967A",
  darkseagreen: "#8FBC8F",
  darkslateblue: "#483D8B",
  darkslategray: "#2F4F4F",
  darkslategrey: "#2F4F4F",
  darkturquoise: "#00CED1",
  darkviolet: "#9400D3",
  deeppink: "#FF1493",
  deepskyblue: "#00BFFF",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1E90FF",
  firebrick: "#B22222",
  floralwhite: "#FFFAF0",
  forestgreen: "#228B22",
  fuchsia: "#F0F",
  gainsboro: "#DCDCDC",
  ghostwhite: "#F8F8FF",
  gold: "#FFD700",
  goldenrod: "#DAA520",
  gray: "#808080",
  grey: "#808080",
  green: "#008000",
  greenyellow: "#ADFF2F",
  honeydew: "#F0FFF0",
  hotpink: "#FF69B4",
  indianred: "#CD5C5C",
  indigo: "#4B0082",
  ivory: "#FFFFF0",
  khaki: "#F0E68C",
  lavender: "#E6E6FA",
  lavenderblush: "#FFF0F5",
  lawngreen: "#7CFC00",
  lemonchiffon: "#FFFACD",
  lightblue: "#ADD8E6",
  lightcoral: "#F08080",
  lightcyan: "#E0FFFF",
  lightgoldenrodyellow: "#FAFAD2",
  lightgray: "#D3D3D3",
  lightgrey: "#D3D3D3",
  lightgreen: "#90EE90",
  lightpink: "#FFB6C1",
  lightsalmon: "#FFA07A",
  lightseagreen: "#20B2AA",
  lightskyblue: "#87CEFA",
  lightslategray: "#789",
  lightslategrey: "#789",
  lightsteelblue: "#B0C4DE",
  lightyellow: "#FFFFE0",
  lime: "#0F0",
  limegreen: "#32CD32",
  linen: "#FAF0E6",
  magenta: "#F0F",
  maroon: "#800000",
  mediumaquamarine: "#66CDAA",
  mediumblue: "#0000CD",
  mediumorchid: "#BA55D3",
  mediumpurple: "#9370DB",
  mediumseagreen: "#3CB371",
  mediumslateblue: "#7B68EE",
  mediumspringgreen: "#00FA9A",
  mediumturquoise: "#48D1CC",
  mediumvioletred: "#C71585",
  midnightblue: "#191970",
  mintcream: "#F5FFFA",
  mistyrose: "#FFE4E1",
  moccasin: "#FFE4B5",
  navajowhite: "#FFDEAD",
  navy: "#000080",
  oldlace: "#FDF5E6",
  olive: "#808000",
  olivedrab: "#6B8E23",
  orange: "#FFA500",
  orangered: "#FF4500",
  orchid: "#DA70D6",
  palegoldenrod: "#EEE8AA",
  palegreen: "#98FB98",
  paleturquoise: "#AFEEEE",
  palevioletred: "#DB7093",
  papayawhip: "#FFEFD5",
  peachpuff: "#FFDAB9",
  peru: "#CD853F",
  pink: "#FFC0CB",
  plum: "#DDA0DD",
  powderblue: "#B0E0E6",
  purple: "#800080",
  rebeccapurple: "#639",
  red: "#F00",
  rosybrown: "#BC8F8F",
  royalblue: "#4169E1",
  saddlebrown: "#8B4513",
  salmon: "#FA8072",
  sandybrown: "#F4A460",
  seagreen: "#2E8B57",
  seashell: "#FFF5EE",
  sienna: "#A0522D",
  silver: "#C0C0C0",
  skyblue: "#87CEEB",
  slateblue: "#6A5ACD",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#FFFAFA",
  springgreen: "#00FF7F",
  steelblue: "#4682B4",
  tan: "#D2B48C",
  teal: "#008080",
  thistle: "#D8BFD8",
  tomato: "#FF6347",
  turquoise: "#40E0D0",
  violet: "#EE82EE",
  wheat: "#F5DEB3",
  white: "#FFF",
  whitesmoke: "#F5F5F5",
  yellow: "#FF0",
  yellowgreen: "#9ACD32"
};
var We = (t3, e5, s3) => (s3 < 0 && (s3 += 1), s3 > 1 && (s3 -= 1), s3 < 1 / 6 ? t3 + 6 * (e5 - t3) * s3 : s3 < 0.5 ? e5 : s3 < 2 / 3 ? t3 + (e5 - t3) * (2 / 3 - s3) * 6 : t3);
var Ve = (t3, e5, s3, i3) => {
  t3 /= 255, e5 /= 255, s3 /= 255;
  const r3 = Math.max(t3, e5, s3), n3 = Math.min(t3, e5, s3);
  let o3, a3;
  const h3 = (r3 + n3) / 2;
  if (r3 === n3) o3 = a3 = 0;
  else {
    const i4 = r3 - n3;
    switch (a3 = h3 > 0.5 ? i4 / (2 - r3 - n3) : i4 / (r3 + n3), r3) {
      case t3:
        o3 = (e5 - s3) / i4 + (e5 < s3 ? 6 : 0);
        break;
      case e5:
        o3 = (s3 - t3) / i4 + 2;
        break;
      case s3:
        o3 = (t3 - e5) / i4 + 4;
    }
    o3 /= 6;
  }
  return [
    Math.round(360 * o3),
    Math.round(100 * a3),
    Math.round(100 * h3),
    i3
  ];
};
var Ge = function() {
  let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "1";
  return parseFloat(t3) / (t3.endsWith("%") ? 100 : 1);
};
var ze = (t3) => Math.min(Math.round(t3), 255).toString(16).toUpperCase().padStart(2, "0");
var He = (t3) => {
  let [e5, s3, i3, r3 = 1] = t3;
  const n3 = Math.round(0.3 * e5 + 0.59 * s3 + 0.11 * i3);
  return [
    n3,
    n3,
    n3,
    r3
  ];
};
var Ne = class _Ne {
  constructor(e5) {
    if (t(this, "isUnrecognised", false), e5) if (e5 instanceof _Ne) this.setSource([
      ...e5._source
    ]);
    else if (Array.isArray(e5)) {
      const [t3, s3, i3, r3 = 1] = e5;
      this.setSource([
        t3,
        s3,
        i3,
        r3
      ]);
    } else this.setSource(this._tryParsingColor(e5));
    else this.setSource([
      0,
      0,
      0,
      1
    ]);
  }
  _tryParsingColor(t3) {
    return (t3 = t3.toLowerCase()) in Ye && (t3 = Ye[t3]), "transparent" === t3 ? [
      255,
      255,
      255,
      0
    ] : _Ne.sourceFromHex(t3) || _Ne.sourceFromRgb(t3) || _Ne.sourceFromHsl(t3) || (this.isUnrecognised = true) && [
      0,
      0,
      0,
      1
    ];
  }
  getSource() {
    return this._source;
  }
  setSource(t3) {
    this._source = t3;
  }
  toRgb() {
    const [t3, e5, s3] = this.getSource();
    return `rgb(${t3},${e5},${s3})`;
  }
  toRgba() {
    return `rgba(${this.getSource().join(",")})`;
  }
  toHsl() {
    const [t3, e5, s3] = Ve(...this.getSource());
    return `hsl(${t3},${e5}%,${s3}%)`;
  }
  toHsla() {
    const [t3, e5, s3, i3] = Ve(...this.getSource());
    return `hsla(${t3},${e5}%,${s3}%,${i3})`;
  }
  toHex() {
    return this.toHexa().slice(0, 6);
  }
  toHexa() {
    const [t3, e5, s3, i3] = this.getSource();
    return `${ze(t3)}${ze(e5)}${ze(s3)}${ze(Math.round(255 * i3))}`;
  }
  getAlpha() {
    return this.getSource()[3];
  }
  setAlpha(t3) {
    return this._source[3] = t3, this;
  }
  toGrayscale() {
    return this.setSource(He(this.getSource())), this;
  }
  toBlackWhite(t3) {
    const [e5, , , s3] = He(this.getSource()), i3 = e5 < (t3 || 127) ? 0 : 255;
    return this.setSource([
      i3,
      i3,
      i3,
      s3
    ]), this;
  }
  overlayWith(t3) {
    t3 instanceof _Ne || (t3 = new _Ne(t3));
    const e5 = this.getSource(), s3 = t3.getSource(), [i3, r3, n3] = e5.map((t4, e6) => Math.round(0.5 * t4 + 0.5 * s3[e6]));
    return this.setSource([
      i3,
      r3,
      n3,
      e5[3]
    ]), this;
  }
  static fromRgb(t3) {
    return _Ne.fromRgba(t3);
  }
  static fromRgba(t3) {
    return new _Ne(_Ne.sourceFromRgb(t3));
  }
  static sourceFromRgb(t3) {
    const e5 = Xe(t3).match(/^rgba?\(\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?(?:\s?[,/]\s?(\d{0,3}(?:\.\d+)?%?)\s?)?\)$/i);
    if (e5) {
      const [t4, s3, i3] = e5.slice(1, 4).map((t5) => {
        const e6 = parseFloat(t5);
        return t5.endsWith("%") ? Math.round(2.55 * e6) : e6;
      });
      return [
        t4,
        s3,
        i3,
        Ge(e5[4])
      ];
    }
  }
  static fromHsl(t3) {
    return _Ne.fromHsla(t3);
  }
  static fromHsla(t3) {
    return new _Ne(_Ne.sourceFromHsl(t3));
  }
  static sourceFromHsl(t3) {
    const e5 = Xe(t3).match(/^hsla?\(\s?([+-]?\d{0,3}(?:\.\d+)?(?:deg|turn|rad)?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?(?:\s?[,/]\s?(\d*(?:\.\d+)?%?)\s?)?\)$/i);
    if (!e5) return;
    const s3 = (_Ne.parseAngletoDegrees(e5[1]) % 360 + 360) % 360 / 360, i3 = parseFloat(e5[2]) / 100, r3 = parseFloat(e5[3]) / 100;
    let n3, o3, a3;
    if (0 === i3) n3 = o3 = a3 = r3;
    else {
      const t4 = r3 <= 0.5 ? r3 * (i3 + 1) : r3 + i3 - r3 * i3, e6 = 2 * r3 - t4;
      n3 = We(e6, t4, s3 + 1 / 3), o3 = We(e6, t4, s3), a3 = We(e6, t4, s3 - 1 / 3);
    }
    return [
      Math.round(255 * n3),
      Math.round(255 * o3),
      Math.round(255 * a3),
      Ge(e5[4])
    ];
  }
  static fromHex(t3) {
    return new _Ne(_Ne.sourceFromHex(t3));
  }
  static sourceFromHex(t3) {
    if (t3.match(/^#?(([0-9a-f]){3,4}|([0-9a-f]{2}){3,4})$/i)) {
      const e5 = t3.slice(t3.indexOf("#") + 1);
      let s3;
      s3 = e5.length <= 4 ? e5.split("").map((t4) => t4 + t4) : e5.match(/.{2}/g);
      const [i3, r3, n3, o3 = 255] = s3.map((t4) => parseInt(t4, 16));
      return [
        i3,
        r3,
        n3,
        o3 / 255
      ];
    }
  }
  static parseAngletoDegrees(t3) {
    const e5 = t3.toLowerCase(), s3 = parseFloat(e5);
    return e5.includes("rad") ? Ct(s3) : e5.includes("turn") ? 360 * s3 : s3;
  }
};
var Ue = function(t3) {
  let e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
  const i3 = /\D{0,2}$/.exec(t3), r3 = parseFloat(t3), n3 = s.DPI;
  switch (null == i3 ? void 0 : i3[0]) {
    case "mm":
      return r3 * n3 / 25.4;
    case "cm":
      return r3 * n3 / 2.54;
    case "in":
      return r3 * n3;
    case "pt":
      return r3 * n3 / 72;
    case "pc":
      return r3 * n3 / 72 * 12;
    case "em":
      return r3 * e5;
    default:
      return r3;
  }
};
var qe = (t3) => {
  const [e5, s3] = t3.trim().split(" "), [i3, r3] = (n3 = e5) && n3 !== P ? [
    n3.slice(1, 4),
    n3.slice(5, 8)
  ] : n3 === P ? [
    n3,
    n3
  ] : [
    "Mid",
    "Mid"
  ];
  var n3;
  return {
    meetOrSlice: s3 || "meet",
    alignX: i3,
    alignY: r3
  };
};
var Ke = function(t3, e5) {
  let s3, i3, r3 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
  if (e5) if (e5.toLive) s3 = `url(#SVGID_${e5.id})`;
  else {
    const t4 = new Ne(e5), r4 = t4.getAlpha();
    s3 = t4.toRgb(), 1 !== r4 && (i3 = r4.toString());
  }
  else s3 = "none";
  return r3 ? `${t3}: ${s3}; ${i3 ? `${t3}-opacity: ${i3}; ` : ""}` : `${t3}="${s3}" ${i3 ? `${t3}-opacity="${i3}" ` : ""}`;
};
var Je = class {
  getSvgStyles(t3) {
    const e5 = this.fillRule ? this.fillRule : "nonzero", s3 = this.strokeWidth ? this.strokeWidth : "0", i3 = this.strokeDashArray ? this.strokeDashArray.join(" ") : P, r3 = this.strokeDashOffset ? this.strokeDashOffset : "0", n3 = this.strokeLineCap ? this.strokeLineCap : "butt", o3 = this.strokeLineJoin ? this.strokeLineJoin : "miter", a3 = this.strokeMiterLimit ? this.strokeMiterLimit : "4", h3 = void 0 !== this.opacity ? this.opacity : "1", l3 = this.visible ? "" : " visibility: hidden;", c2 = t3 ? "" : this.getSvgFilter(), u3 = Ke(H, this.fill);
    return [
      Ke(N, this.stroke),
      "stroke-width: ",
      s3,
      "; ",
      "stroke-dasharray: ",
      i3,
      "; ",
      "stroke-linecap: ",
      n3,
      "; ",
      "stroke-dashoffset: ",
      r3,
      "; ",
      "stroke-linejoin: ",
      o3,
      "; ",
      "stroke-miterlimit: ",
      a3,
      "; ",
      u3,
      "fill-rule: ",
      e5,
      "; ",
      "opacity: ",
      h3,
      ";",
      c2,
      l3
    ].join("");
  }
  getSvgFilter() {
    return this.shadow ? `filter: url(#SVGID_${this.shadow.id});` : "";
  }
  getSvgCommons() {
    return [
      this.id ? `id="${this.id}" ` : "",
      this.clipPath ? `clip-path="url(#${this.clipPath.clipPathId})" ` : ""
    ].join("");
  }
  getSvgTransform(t3) {
    let e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    const s3 = t3 ? this.calcTransformMatrix() : this.calcOwnMatrix();
    return `${`transform="${Vt(s3)}`}${e5}" `;
  }
  _toSVG(t3) {
    return [
      ""
    ];
  }
  toSVG(t3) {
    return this._createBaseSVGMarkup(this._toSVG(t3), {
      reviver: t3
    });
  }
  toClipPathSVG(t3) {
    return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(t3), {
      reviver: t3
    });
  }
  _createBaseClipPathSVGMarkup(t3) {
    let { reviver: e5, additionalTransform: s3 = "" } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const i3 = [
      this.getSvgTransform(true, s3),
      this.getSvgCommons()
    ].join(""), r3 = t3.indexOf("COMMON_PARTS");
    return t3[r3] = i3, e5 ? e5(t3.join("")) : t3.join("");
  }
  _createBaseSVGMarkup(t3) {
    let { noStyle: e5, reviver: s3, withShadow: i3, additionalTransform: r3 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const n3 = e5 ? "" : `style="${this.getSvgStyles()}" `, o3 = i3 ? `style="${this.getSvgFilter()}" ` : "", a3 = this.clipPath, h3 = this.strokeUniform ? 'vector-effect="non-scaling-stroke" ' : "", l3 = a3 && a3.absolutePositioned, c2 = this.stroke, u3 = this.fill, d3 = this.shadow, g3 = [], f3 = t3.indexOf("COMMON_PARTS");
    let p3;
    a3 && (a3.clipPathId = `CLIPPATH_${ft()}`, p3 = `<clipPath id="${a3.clipPathId}" >
${a3.toClipPathSVG(s3)}</clipPath>
`), l3 && g3.push("<g ", o3, this.getSvgCommons(), " >\n"), g3.push("<g ", this.getSvgTransform(false), l3 ? "" : o3 + this.getSvgCommons(), " >\n");
    const m3 = [
      n3,
      h3,
      e5 ? "" : this.addPaintOrder(),
      " ",
      r3 ? `transform="${r3}" ` : ""
    ].join("");
    return t3[f3] = m3, Gt(u3) && g3.push(u3.toSVG(this)), Gt(c2) && g3.push(c2.toSVG(this)), d3 && g3.push(d3.toSVG(this)), a3 && g3.push(p3), g3.push(t3.join("")), g3.push("</g>\n"), l3 && g3.push("</g>\n"), s3 ? s3(g3.join("")) : g3.join("");
  }
  addPaintOrder() {
    return this.paintFirst !== H ? ` paint-order="${this.paintFirst}" ` : "";
  }
};
function Qe(t3) {
  return new RegExp("^(" + t3.join("|") + ")\\b", "i");
}
var Ze = "textDecorationThickness";
var ts = [
  "fontSize",
  "fontWeight",
  "fontFamily",
  "fontStyle"
];
var es = [
  "underline",
  "overline",
  "linethrough"
];
var ss = [
  ...ts,
  "lineHeight",
  "text",
  "charSpacing",
  "textAlign",
  "styles",
  "path",
  "pathStartOffset",
  "pathSide",
  "pathAlign"
];
var is = [
  ...ss,
  ...es,
  "textBackgroundColor",
  "direction",
  Ze
];
var rs = [
  ...ts,
  ...es,
  N,
  "strokeWidth",
  H,
  "deltaY",
  "textBackgroundColor",
  Ze
];
var ns = {
  _reNewline: E,
  _reSpacesAndTabs: /[ \t\r]/g,
  _reSpaceAndTab: /[ \t\r]/,
  _reWords: /\S+/g,
  fontSize: 40,
  fontWeight: J,
  fontFamily: "Times New Roman",
  underline: false,
  overline: false,
  linethrough: false,
  textAlign: O,
  fontStyle: J,
  lineHeight: 1.16,
  textBackgroundColor: "",
  stroke: null,
  shadow: null,
  path: void 0,
  pathStartOffset: 0,
  pathSide: O,
  pathAlign: "baseline",
  charSpacing: 0,
  deltaY: 0,
  direction: q,
  CACHE_FONT_SIZE: 400,
  MIN_TEXT_WIDTH: 2,
  superscript: {
    size: 0.6,
    baseline: -0.35
  },
  subscript: {
    size: 0.6,
    baseline: 0.11
  },
  _fontSizeFraction: 0.222,
  offsets: {
    underline: 0.1,
    linethrough: -0.28167,
    overline: -0.81333
  },
  _fontSizeMult: 1.13,
  [Ze]: 66.667
};
var os = "justify";
var as = "justify-left";
var hs = "justify-right";
var ls = "justify-center";
var cs = String.raw`[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?`;
var us = String.raw`(?:\s*,?\s+|\s*,\s*)`;
var ds = "http://www.w3.org/2000/svg";
var gs = new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + cs + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + cs + "))?\\s+(.*)");
var fs = {
  cx: O,
  x: O,
  r: "radius",
  cy: k,
  y: k,
  display: "visible",
  visibility: "visible",
  transform: "transformMatrix",
  "fill-opacity": "fillOpacity",
  "fill-rule": "fillRule",
  "font-family": "fontFamily",
  "font-size": "fontSize",
  "font-style": "fontStyle",
  "font-weight": "fontWeight",
  "letter-spacing": "charSpacing",
  "paint-order": "paintFirst",
  "stroke-dasharray": "strokeDashArray",
  "stroke-dashoffset": "strokeDashOffset",
  "stroke-linecap": "strokeLineCap",
  "stroke-linejoin": "strokeLineJoin",
  "stroke-miterlimit": "strokeMiterLimit",
  "stroke-opacity": "strokeOpacity",
  "stroke-width": "strokeWidth",
  "text-decoration": "textDecoration",
  "text-anchor": "textAnchor",
  opacity: "opacity",
  "clip-path": "clipPath",
  "clip-rule": "clipRule",
  "vector-effect": "strokeUniform",
  "image-rendering": "imageSmoothing",
  "text-decoration-thickness": Ze
};
var ps = "font-size";
var ms = "clip-path";
var vs = Qe([
  "path",
  "circle",
  "polygon",
  "polyline",
  "ellipse",
  "rect",
  "line",
  "image",
  "text"
]);
var ys = Qe([
  "symbol",
  "image",
  "marker",
  "pattern",
  "view",
  "svg"
]);
var _s = Qe([
  "symbol",
  "g",
  "a",
  "svg",
  "clipPath",
  "defs"
]);
var xs = new RegExp(String.raw`^\s*(${cs})${us}(${cs})${us}(${cs})${us}(${cs})\s*$`);
var Cs = "(-?\\d+(?:\\.\\d*)?(?:px)?(?:\\s?|$))?";
var Ss = new RegExp("(?:\\s|^)" + Cs + Cs + "(" + cs + "?(?:px)?)?(?:\\s?|$)(?:$|\\s)");
var bs = class _bs {
  constructor() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const e5 = "string" == typeof t3 ? _bs.parseShadow(t3) : t3;
    Object.assign(this, _bs.ownDefaults, e5), this.id = ft();
  }
  static parseShadow(t3) {
    const e5 = t3.trim(), [, s3 = 0, i3 = 0, r3 = 0] = (Ss.exec(e5) || []).map((t4) => parseFloat(t4) || 0);
    return {
      color: (e5.replace(Ss, "") || "rgb(0,0,0)").trim(),
      offsetX: s3,
      offsetY: i3,
      blur: r3
    };
  }
  toString() {
    return [
      this.offsetX,
      this.offsetY,
      this.blur,
      this.color
    ].join("px ");
  }
  toSVG(t3) {
    const e5 = Se(new ot(this.offsetX, this.offsetY), xt(-t3.angle)), i3 = new Ne(this.color);
    let r3 = 40, n3 = 40;
    return t3.width && t3.height && (r3 = 100 * Wt((Math.abs(e5.x) + this.blur) / t3.width, s.NUM_FRACTION_DIGITS) + 20, n3 = 100 * Wt((Math.abs(e5.y) + this.blur) / t3.height, s.NUM_FRACTION_DIGITS) + 20), t3.flipX && (e5.x *= -1), t3.flipY && (e5.y *= -1), `<filter id="SVGID_${this.id}" y="-${n3}%" height="${100 + 2 * n3}%" x="-${r3}%" width="${100 + 2 * r3}%" >
	<feGaussianBlur in="SourceAlpha" stdDeviation="${Wt(this.blur ? this.blur / 2 : 0, s.NUM_FRACTION_DIGITS)}"></feGaussianBlur>
	<feOffset dx="${Wt(e5.x, s.NUM_FRACTION_DIGITS)}" dy="${Wt(e5.y, s.NUM_FRACTION_DIGITS)}" result="oBlur" ></feOffset>
	<feFlood flood-color="${i3.toRgb()}" flood-opacity="${i3.getAlpha()}"/>
	<feComposite in2="oBlur" operator="in" />
	<feMerge>
		<feMergeNode></feMergeNode>
		<feMergeNode in="SourceGraphic"></feMergeNode>
	</feMerge>
</filter>
`;
  }
  toObject() {
    const t3 = {
      color: this.color,
      blur: this.blur,
      offsetX: this.offsetX,
      offsetY: this.offsetY,
      affectStroke: this.affectStroke,
      nonScaling: this.nonScaling,
      type: this.constructor.type
    }, e5 = _bs.ownDefaults;
    return this.includeDefaultValues ? t3 : Yt(t3, (t4, s3) => t4 !== e5[s3]);
  }
  static async fromObject(t3) {
    return new this(t3);
  }
};
t(bs, "ownDefaults", {
  color: "rgb(0,0,0)",
  blur: 0,
  offsetX: 0,
  offsetY: 0,
  affectStroke: false,
  includeDefaultValues: true,
  nonScaling: false
}), t(bs, "type", "shadow"), tt.setClass(bs, "shadow");
var ws = (t3, e5, s3) => Math.max(t3, Math.min(e5, s3));
var Ts = [
  k,
  O,
  W,
  V,
  "flipX",
  "flipY",
  "originX",
  "originY",
  "angle",
  "opacity",
  "globalCompositeOperation",
  "shadow",
  "visible",
  G,
  z
];
var Os = [
  H,
  N,
  "strokeWidth",
  "strokeDashArray",
  "width",
  "height",
  "paintFirst",
  "strokeUniform",
  "strokeLineCap",
  "strokeDashOffset",
  "strokeLineJoin",
  "strokeMiterLimit",
  "backgroundColor",
  "clipPath"
];
var ks = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  angle: 0,
  flipX: false,
  flipY: false,
  scaleX: 1,
  scaleY: 1,
  minScaleLimit: 0,
  skewX: 0,
  skewY: 0,
  originX: T,
  originY: T,
  strokeWidth: 1,
  strokeUniform: false,
  padding: 0,
  opacity: 1,
  paintFirst: H,
  fill: "rgb(0,0,0)",
  fillRule: "nonzero",
  stroke: null,
  strokeDashArray: null,
  strokeDashOffset: 0,
  strokeLineCap: "butt",
  strokeLineJoin: "miter",
  strokeMiterLimit: 4,
  globalCompositeOperation: "source-over",
  backgroundColor: "",
  shadow: null,
  visible: true,
  includeDefaultValues: true,
  excludeFromExport: false,
  objectCaching: true,
  clipPath: void 0,
  inverted: false,
  absolutePositioned: false,
  centeredRotation: true,
  centeredScaling: false,
  dirty: true
};
var Ds = (t3, e5, s3, i3) => (t3 < Math.abs(e5) ? (t3 = e5, i3 = s3 / 4) : i3 = 0 === e5 && 0 === t3 ? s3 / x * Math.asin(1) : s3 / x * Math.asin(e5 / t3), {
  a: t3,
  c: e5,
  p: s3,
  s: i3
});
var Ms = (t3, e5, s3, i3, r3) => t3 * Math.pow(2, 10 * (i3 -= 1)) * Math.sin((i3 * r3 - e5) * x / s3);
var Ps = (t3, e5, s3, i3) => -s3 * Math.cos(t3 / i3 * y) + s3 + e5;
var Es = (t3, e5, s3, i3) => (t3 /= i3) < 1 / 2.75 ? s3 * (7.5625 * t3 * t3) + e5 : t3 < 2 / 2.75 ? s3 * (7.5625 * (t3 -= 1.5 / 2.75) * t3 + 0.75) + e5 : t3 < 2.5 / 2.75 ? s3 * (7.5625 * (t3 -= 2.25 / 2.75) * t3 + 0.9375) + e5 : s3 * (7.5625 * (t3 -= 2.625 / 2.75) * t3 + 0.984375) + e5;
var As = (t3, e5, s3, i3) => s3 - Es(i3 - t3, 0, s3, i3) + e5;
var js = Object.freeze({
  __proto__: null,
  defaultEasing: Ps,
  easeInBack: function(t3, e5, s3, i3) {
    let r3 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1.70158;
    return s3 * (t3 /= i3) * t3 * ((r3 + 1) * t3 - r3) + e5;
  },
  easeInBounce: As,
  easeInCirc: (t3, e5, s3, i3) => -s3 * (Math.sqrt(1 - (t3 /= i3) * t3) - 1) + e5,
  easeInCubic: (t3, e5, s3, i3) => s3 * (t3 / i3) ** 3 + e5,
  easeInElastic: (t3, e5, s3, i3) => {
    const r3 = s3;
    let n3 = 0;
    if (0 === t3) return e5;
    if (1 === (t3 /= i3)) return e5 + s3;
    n3 || (n3 = 0.3 * i3);
    const { a: o3, s: a3, p: h3 } = Ds(r3, s3, n3, 1.70158);
    return -Ms(o3, a3, h3, t3, i3) + e5;
  },
  easeInExpo: (t3, e5, s3, i3) => 0 === t3 ? e5 : s3 * 2 ** (10 * (t3 / i3 - 1)) + e5,
  easeInOutBack: function(t3, e5, s3, i3) {
    let r3 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1.70158;
    return (t3 /= i3 / 2) < 1 ? s3 / 2 * (t3 * t3 * ((1 + (r3 *= 1.525)) * t3 - r3)) + e5 : s3 / 2 * ((t3 -= 2) * t3 * ((1 + (r3 *= 1.525)) * t3 + r3) + 2) + e5;
  },
  easeInOutBounce: (t3, e5, s3, i3) => t3 < i3 / 2 ? 0.5 * As(2 * t3, 0, s3, i3) + e5 : 0.5 * Es(2 * t3 - i3, 0, s3, i3) + 0.5 * s3 + e5,
  easeInOutCirc: (t3, e5, s3, i3) => (t3 /= i3 / 2) < 1 ? -s3 / 2 * (Math.sqrt(1 - t3 ** 2) - 1) + e5 : s3 / 2 * (Math.sqrt(1 - (t3 -= 2) * t3) + 1) + e5,
  easeInOutCubic: (t3, e5, s3, i3) => (t3 /= i3 / 2) < 1 ? s3 / 2 * t3 ** 3 + e5 : s3 / 2 * ((t3 - 2) ** 3 + 2) + e5,
  easeInOutElastic: (t3, e5, s3, i3) => {
    const r3 = s3;
    let n3 = 0;
    if (0 === t3) return e5;
    if (2 === (t3 /= i3 / 2)) return e5 + s3;
    n3 || (n3 = i3 * (0.3 * 1.5));
    const { a: o3, s: a3, p: h3, c: l3 } = Ds(r3, s3, n3, 1.70158);
    return t3 < 1 ? -0.5 * Ms(o3, a3, h3, t3, i3) + e5 : o3 * Math.pow(2, -10 * (t3 -= 1)) * Math.sin((t3 * i3 - a3) * x / h3) * 0.5 + l3 + e5;
  },
  easeInOutExpo: (t3, e5, s3, i3) => 0 === t3 ? e5 : t3 === i3 ? e5 + s3 : (t3 /= i3 / 2) < 1 ? s3 / 2 * 2 ** (10 * (t3 - 1)) + e5 : s3 / 2 * -(2 ** (-10 * --t3) + 2) + e5,
  easeInOutQuad: (t3, e5, s3, i3) => (t3 /= i3 / 2) < 1 ? s3 / 2 * t3 ** 2 + e5 : -s3 / 2 * (--t3 * (t3 - 2) - 1) + e5,
  easeInOutQuart: (t3, e5, s3, i3) => (t3 /= i3 / 2) < 1 ? s3 / 2 * t3 ** 4 + e5 : -s3 / 2 * ((t3 -= 2) * t3 ** 3 - 2) + e5,
  easeInOutQuint: (t3, e5, s3, i3) => (t3 /= i3 / 2) < 1 ? s3 / 2 * t3 ** 5 + e5 : s3 / 2 * ((t3 - 2) ** 5 + 2) + e5,
  easeInOutSine: (t3, e5, s3, i3) => -s3 / 2 * (Math.cos(Math.PI * t3 / i3) - 1) + e5,
  easeInQuad: (t3, e5, s3, i3) => s3 * (t3 /= i3) * t3 + e5,
  easeInQuart: (t3, e5, s3, i3) => s3 * (t3 /= i3) * t3 ** 3 + e5,
  easeInQuint: (t3, e5, s3, i3) => s3 * (t3 / i3) ** 5 + e5,
  easeInSine: (t3, e5, s3, i3) => -s3 * Math.cos(t3 / i3 * y) + s3 + e5,
  easeOutBack: function(t3, e5, s3, i3) {
    let r3 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1.70158;
    return s3 * ((t3 = t3 / i3 - 1) * t3 * ((r3 + 1) * t3 + r3) + 1) + e5;
  },
  easeOutBounce: Es,
  easeOutCirc: (t3, e5, s3, i3) => s3 * Math.sqrt(1 - (t3 = t3 / i3 - 1) * t3) + e5,
  easeOutCubic: (t3, e5, s3, i3) => s3 * ((t3 / i3 - 1) ** 3 + 1) + e5,
  easeOutElastic: (t3, e5, s3, i3) => {
    const r3 = s3;
    let n3 = 0;
    if (0 === t3) return e5;
    if (1 === (t3 /= i3)) return e5 + s3;
    n3 || (n3 = 0.3 * i3);
    const { a: o3, s: a3, p: h3, c: l3 } = Ds(r3, s3, n3, 1.70158);
    return o3 * 2 ** (-10 * t3) * Math.sin((t3 * i3 - a3) * x / h3) + l3 + e5;
  },
  easeOutExpo: (t3, e5, s3, i3) => t3 === i3 ? e5 + s3 : s3 * -(2 ** (-10 * t3 / i3) + 1) + e5,
  easeOutQuad: (t3, e5, s3, i3) => -s3 * (t3 /= i3) * (t3 - 2) + e5,
  easeOutQuart: (t3, e5, s3, i3) => -s3 * ((t3 = t3 / i3 - 1) * t3 ** 3 - 1) + e5,
  easeOutQuint: (t3, e5, s3, i3) => s3 * ((t3 / i3 - 1) ** 5 + 1) + e5,
  easeOutSine: (t3, e5, s3, i3) => s3 * Math.sin(t3 / i3 * y) + e5
});
var Fs = () => false;
var Ls = class {
  constructor(e5) {
    let { startValue: s3, byValue: i3, duration: r3 = 500, delay: n3 = 0, easing: o3 = Ps, onStart: a3 = v, onChange: h3 = v, onComplete: l3 = v, abort: c2 = Fs, target: u3 } = e5;
    t(this, "_state", "pending"), t(this, "durationProgress", 0), t(this, "valueProgress", 0), this.tick = this.tick.bind(this), this.duration = r3, this.delay = n3, this.easing = o3, this._onStart = a3, this._onChange = h3, this._onComplete = l3, this._abort = c2, this.target = u3, this.startValue = s3, this.byValue = i3, this.value = this.startValue, this.endValue = Object.freeze(this.calculate(this.duration).value);
  }
  get state() {
    return this._state;
  }
  isDone() {
    return "aborted" === this._state || "completed" === this._state;
  }
  start() {
    const t3 = (t4) => {
      "pending" === this._state && (this.startTime = t4 || +/* @__PURE__ */ new Date(), this._state = "running", this._onStart(), this.tick(this.startTime));
    };
    this.register(), this.delay > 0 ? setTimeout(() => ut(t3), this.delay) : ut(t3);
  }
  tick(t3) {
    const e5 = (t3 || +/* @__PURE__ */ new Date()) - this.startTime, s3 = Math.min(e5, this.duration);
    this.durationProgress = s3 / this.duration;
    const { value: i3, valueProgress: r3 } = this.calculate(s3);
    this.value = Object.freeze(i3), this.valueProgress = r3, "aborted" !== this._state && (this._abort(this.value, this.valueProgress, this.durationProgress) ? (this._state = "aborted", this.unregister()) : e5 >= this.duration ? (this.durationProgress = this.valueProgress = 1, this._onChange(this.endValue, this.valueProgress, this.durationProgress), this._state = "completed", this._onComplete(this.endValue, this.valueProgress, this.durationProgress), this.unregister()) : (this._onChange(this.value, this.valueProgress, this.durationProgress), ut(this.tick)));
  }
  register() {
    et.push(this);
  }
  unregister() {
    et.remove(this);
  }
  abort() {
    this._state = "aborted", this.unregister();
  }
};
var Is = class extends Ls {
  constructor(t3) {
    let { startValue: e5 = 0, endValue: s3 = 100, ...i3 } = t3;
    super({
      ...i3,
      startValue: e5,
      byValue: s3 - e5
    });
  }
  calculate(t3) {
    const e5 = this.easing(t3, this.startValue, this.byValue, this.duration);
    return {
      value: e5,
      valueProgress: Math.abs((e5 - this.startValue) / this.byValue)
    };
  }
};
var Bs = class extends Ls {
  constructor(t3) {
    let { startValue: e5 = [
      0
    ], endValue: s3 = [
      100
    ], ...i3 } = t3;
    super({
      ...i3,
      startValue: e5,
      byValue: s3.map((t4, s4) => t4 - e5[s4])
    });
  }
  calculate(t3) {
    const e5 = this.startValue.map((e6, s3) => this.easing(t3, e6, this.byValue[s3], this.duration, s3));
    return {
      value: e5,
      valueProgress: Math.abs((e5[0] - this.startValue[0]) / this.byValue[0])
    };
  }
};
var Rs = (t3, e5, s3, i3) => e5 + s3 * (1 - Math.cos(t3 / i3 * y));
var $s = (t3) => t3 && ((e5, s3, i3) => t3(new Ne(e5).toRgba(), s3, i3));
var Xs = class extends Ls {
  constructor(t3) {
    let { startValue: e5, endValue: s3, easing: i3 = Rs, onChange: r3, onComplete: n3, abort: o3, ...a3 } = t3;
    const h3 = new Ne(e5).getSource(), l3 = new Ne(s3).getSource();
    super({
      ...a3,
      startValue: h3,
      byValue: l3.map((t4, e6) => t4 - h3[e6]),
      easing: i3,
      onChange: $s(r3),
      onComplete: $s(n3),
      abort: $s(o3)
    });
  }
  calculate(t3) {
    const [e5, s3, i3, r3] = this.startValue.map((e6, s4) => this.easing(t3, e6, this.byValue[s4], this.duration, s4)), n3 = [
      ...[
        e5,
        s3,
        i3
      ].map(Math.round),
      ws(0, r3, 1)
    ];
    return {
      value: n3,
      valueProgress: n3.map((t4, e6) => 0 !== this.byValue[e6] ? Math.abs((t4 - this.startValue[e6]) / this.byValue[e6]) : 0).find((t4) => 0 !== t4) || 0
    };
  }
};
function Ys(t3) {
  const e5 = ((t4) => Array.isArray(t4.startValue) || Array.isArray(t4.endValue))(t3) ? new Bs(t3) : new Is(t3);
  return e5.start(), e5;
}
function Ws(t3) {
  const e5 = new Xs(t3);
  return e5.start(), e5;
}
var Vs = class _Vs {
  constructor(t3) {
    this.status = t3, this.points = [];
  }
  includes(t3) {
    return this.points.some((e5) => e5.eq(t3));
  }
  append() {
    for (var t3 = arguments.length, e5 = new Array(t3), s3 = 0; s3 < t3; s3++) e5[s3] = arguments[s3];
    return this.points = this.points.concat(e5.filter((t4) => !this.includes(t4))), this;
  }
  static isPointContained(t3, e5, s3) {
    let i3 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (e5.eq(s3)) return t3.eq(e5);
    if (e5.x === s3.x) return t3.x === e5.x && (i3 || t3.y >= Math.min(e5.y, s3.y) && t3.y <= Math.max(e5.y, s3.y));
    if (e5.y === s3.y) return t3.y === e5.y && (i3 || t3.x >= Math.min(e5.x, s3.x) && t3.x <= Math.max(e5.x, s3.x));
    {
      const r3 = be(e5, s3), n3 = be(e5, t3).divide(r3);
      return i3 ? Math.abs(n3.x) === Math.abs(n3.y) : n3.x === n3.y && n3.x >= 0 && n3.x <= 1;
    }
  }
  static isPointInPolygon(t3, e5) {
    const s3 = new ot(t3).setX(Math.min(t3.x - 1, ...e5.map((t4) => t4.x)));
    let i3 = 0;
    for (let r3 = 0; r3 < e5.length; r3++) {
      const n3 = this.intersectSegmentSegment(e5[r3], e5[(r3 + 1) % e5.length], t3, s3);
      if (n3.includes(t3)) return true;
      i3 += Number("Intersection" === n3.status);
    }
    return i3 % 2 == 1;
  }
  static intersectLineLine(t3, e5, s3, i3) {
    let r3 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], n3 = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
    const o3 = e5.x - t3.x, a3 = e5.y - t3.y, h3 = i3.x - s3.x, l3 = i3.y - s3.y, c2 = t3.x - s3.x, u3 = t3.y - s3.y, d3 = h3 * u3 - l3 * c2, g3 = o3 * u3 - a3 * c2, f3 = l3 * o3 - h3 * a3;
    if (0 !== f3) {
      const e6 = d3 / f3, s4 = g3 / f3;
      return (r3 || 0 <= e6 && e6 <= 1) && (n3 || 0 <= s4 && s4 <= 1) ? new _Vs("Intersection").append(new ot(t3.x + e6 * o3, t3.y + e6 * a3)) : new _Vs();
    }
    if (0 === d3 || 0 === g3) {
      const o4 = r3 || n3 || _Vs.isPointContained(t3, s3, i3) || _Vs.isPointContained(e5, s3, i3) || _Vs.isPointContained(s3, t3, e5) || _Vs.isPointContained(i3, t3, e5);
      return new _Vs(o4 ? "Coincident" : void 0);
    }
    return new _Vs("Parallel");
  }
  static intersectSegmentLine(t3, e5, s3, i3) {
    return _Vs.intersectLineLine(t3, e5, s3, i3, false, true);
  }
  static intersectSegmentSegment(t3, e5, s3, i3) {
    return _Vs.intersectLineLine(t3, e5, s3, i3, false, false);
  }
  static intersectLinePolygon(t3, e5, s3) {
    let i3 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
    const r3 = new _Vs(), n3 = s3.length;
    for (let o3, a3, h3, l3 = 0; l3 < n3; l3++) {
      if (o3 = s3[l3], a3 = s3[(l3 + 1) % n3], h3 = _Vs.intersectLineLine(t3, e5, o3, a3, i3, false), "Coincident" === h3.status) return h3;
      r3.append(...h3.points);
    }
    return r3.points.length > 0 && (r3.status = "Intersection"), r3;
  }
  static intersectSegmentPolygon(t3, e5, s3) {
    return _Vs.intersectLinePolygon(t3, e5, s3, false);
  }
  static intersectPolygonPolygon(t3, e5) {
    const s3 = new _Vs(), i3 = t3.length, r3 = [];
    for (let n3 = 0; n3 < i3; n3++) {
      const o3 = t3[n3], a3 = t3[(n3 + 1) % i3], h3 = _Vs.intersectSegmentPolygon(o3, a3, e5);
      "Coincident" === h3.status ? (r3.push(h3), s3.append(o3, a3)) : s3.append(...h3.points);
    }
    return r3.length > 0 && r3.length === t3.length ? new _Vs("Coincident") : (s3.points.length > 0 && (s3.status = "Intersection"), s3);
  }
  static intersectPolygonRectangle(t3, e5, s3) {
    const i3 = e5.min(s3), r3 = e5.max(s3), n3 = new ot(r3.x, i3.y), o3 = new ot(i3.x, r3.y);
    return _Vs.intersectPolygonPolygon(t3, [
      i3,
      n3,
      r3,
      o3
    ]);
  }
};
var Gs = class extends ct {
  getX() {
    return this.getXY().x;
  }
  setX(t3) {
    this.setXY(this.getXY().setX(t3));
  }
  getY() {
    return this.getXY().y;
  }
  setY(t3) {
    this.setXY(this.getXY().setY(t3));
  }
  getRelativeX() {
    return this.left;
  }
  setRelativeX(t3) {
    this.left = t3;
  }
  getRelativeY() {
    return this.top;
  }
  setRelativeY(t3) {
    this.top = t3;
  }
  getXY() {
    const t3 = this.getRelativeXY();
    return this.group ? bt(t3, this.group.calcTransformMatrix()) : t3;
  }
  setXY(t3, e5, s3) {
    this.group && (t3 = bt(t3, wt(this.group.calcTransformMatrix()))), this.setRelativeXY(t3, e5, s3);
  }
  getRelativeXY() {
    return new ot(this.left, this.top);
  }
  setRelativeXY(t3) {
    let e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.originX, s3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.originY;
    this.setPositionByOrigin(t3, e5, s3);
  }
  isStrokeAccountedForInDimensions() {
    return false;
  }
  getCoords() {
    const { tl: t3, tr: e5, br: s3, bl: i3 } = this.aCoords || (this.aCoords = this.calcACoords()), r3 = [
      t3,
      e5,
      s3,
      i3
    ];
    if (this.group) {
      const t4 = this.group.calcTransformMatrix();
      return r3.map((e6) => bt(e6, t4));
    }
    return r3;
  }
  intersectsWithRect(t3, e5) {
    return "Intersection" === Vs.intersectPolygonRectangle(this.getCoords(), t3, e5).status;
  }
  intersectsWithObject(t3) {
    const e5 = Vs.intersectPolygonPolygon(this.getCoords(), t3.getCoords());
    return "Intersection" === e5.status || "Coincident" === e5.status || t3.isContainedWithinObject(this) || this.isContainedWithinObject(t3);
  }
  isContainedWithinObject(t3) {
    return this.getCoords().every((e5) => t3.containsPoint(e5));
  }
  isContainedWithinRect(t3, e5) {
    const { left: s3, top: i3, width: r3, height: n3 } = this.getBoundingRect();
    return s3 >= t3.x && s3 + r3 <= e5.x && i3 >= t3.y && i3 + n3 <= e5.y;
  }
  isOverlapping(t3) {
    return this.intersectsWithObject(t3) || this.isContainedWithinObject(t3) || t3.isContainedWithinObject(this);
  }
  containsPoint(t3) {
    return Vs.isPointInPolygon(t3, this.getCoords());
  }
  isOnScreen() {
    if (!this.canvas) return false;
    const { tl: t3, br: e5 } = this.canvas.vptCoords;
    return !!this.getCoords().some((s3) => s3.x <= e5.x && s3.x >= t3.x && s3.y <= e5.y && s3.y >= t3.y) || (!!this.intersectsWithRect(t3, e5) || this.containsPoint(t3.midPointFrom(e5)));
  }
  isPartiallyOnScreen() {
    if (!this.canvas) return false;
    const { tl: t3, br: e5 } = this.canvas.vptCoords;
    if (this.intersectsWithRect(t3, e5)) return true;
    return this.getCoords().every((s3) => (s3.x >= e5.x || s3.x <= t3.x) && (s3.y >= e5.y || s3.y <= t3.y)) && this.containsPoint(t3.midPointFrom(e5));
  }
  getBoundingRect() {
    return ae(this.getCoords());
  }
  getScaledWidth() {
    return this._getTransformedDimensions().x;
  }
  getScaledHeight() {
    return this._getTransformedDimensions().y;
  }
  scale(t3) {
    this._set(W, t3), this._set(V, t3), this.setCoords();
  }
  scaleToWidth(t3) {
    const e5 = this.getBoundingRect().width / this.getScaledWidth();
    return this.scale(t3 / this.width / e5);
  }
  scaleToHeight(t3) {
    const e5 = this.getBoundingRect().height / this.getScaledHeight();
    return this.scale(t3 / this.height / e5);
  }
  getCanvasRetinaScaling() {
    var t3;
    return (null === (t3 = this.canvas) || void 0 === t3 ? void 0 : t3.getRetinaScaling()) || 1;
  }
  getTotalAngle() {
    return this.group ? Ct(kt(this.calcTransformMatrix())) : this.angle;
  }
  getViewportTransform() {
    var t3;
    return (null === (t3 = this.canvas) || void 0 === t3 ? void 0 : t3.viewportTransform) || S.concat();
  }
  calcACoords() {
    const t3 = Pt({
      angle: this.angle
    }), { x: e5, y: s3 } = this.getRelativeCenterPoint(), i3 = Mt(e5, s3), r3 = Tt(i3, t3), n3 = this._getTransformedDimensions(), o3 = n3.x / 2, a3 = n3.y / 2;
    return {
      tl: bt({
        x: -o3,
        y: -a3
      }, r3),
      tr: bt({
        x: o3,
        y: -a3
      }, r3),
      bl: bt({
        x: -o3,
        y: a3
      }, r3),
      br: bt({
        x: o3,
        y: a3
      }, r3)
    };
  }
  setCoords() {
    this.aCoords = this.calcACoords();
  }
  transformMatrixKey() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e5 = [];
    return !t3 && this.group && (e5 = this.group.transformMatrixKey(t3)), e5.push(this.top, this.left, this.width, this.height, this.scaleX, this.scaleY, this.angle, this.strokeWidth, this.skewX, this.skewY, +this.flipX, +this.flipY, _e(this.originX), _e(this.originY)), e5;
  }
  calcTransformMatrix() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e5 = this.calcOwnMatrix();
    if (t3 || !this.group) return e5;
    const s3 = this.transformMatrixKey(t3), i3 = this.matrixCache;
    return i3 && i3.key.every((t4, e6) => t4 === s3[e6]) ? i3.value : (this.group && (e5 = Tt(this.group.calcTransformMatrix(false), e5)), this.matrixCache = {
      key: s3,
      value: e5
    }, e5);
  }
  calcOwnMatrix() {
    const t3 = this.transformMatrixKey(true), e5 = this.ownMatrixCache;
    if (e5 && e5.key === t3) return e5.value;
    const s3 = this.getRelativeCenterPoint(), i3 = {
      angle: this.angle,
      translateX: s3.x,
      translateY: s3.y,
      scaleX: this.scaleX,
      scaleY: this.scaleY,
      skewX: this.skewX,
      skewY: this.skewY,
      flipX: this.flipX,
      flipY: this.flipY
    }, r3 = It(i3);
    return this.ownMatrixCache = {
      key: t3,
      value: r3
    }, r3;
  }
  _getNonTransformedDimensions() {
    return new ot(this.width, this.height).scalarAdd(this.strokeWidth);
  }
  _calculateCurrentDimensions(t3) {
    return this._getTransformedDimensions(t3).transform(this.getViewportTransform(), true).scalarAdd(2 * this.padding);
  }
  _getTransformedDimensions() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const e5 = {
      scaleX: this.scaleX,
      scaleY: this.scaleY,
      skewX: this.skewX,
      skewY: this.skewY,
      width: this.width,
      height: this.height,
      strokeWidth: this.strokeWidth,
      ...t3
    }, s3 = e5.strokeWidth;
    let i3 = s3, r3 = 0;
    this.strokeUniform && (i3 = 0, r3 = s3);
    const n3 = e5.width + i3, o3 = e5.height + i3;
    let a3;
    return a3 = 0 === e5.skewX && 0 === e5.skewY ? new ot(n3 * e5.scaleX, o3 * e5.scaleY) : de(n3, o3, Lt(e5)), a3.scalarAdd(r3);
  }
  translateToGivenOrigin(t3, e5, s3, i3, r3) {
    let n3 = t3.x, o3 = t3.y;
    const a3 = _e(i3) - _e(e5), h3 = _e(r3) - _e(s3);
    if (a3 || h3) {
      const t4 = this._getTransformedDimensions();
      n3 += a3 * t4.x, o3 += h3 * t4.y;
    }
    return new ot(n3, o3);
  }
  translateToCenterPoint(t3, e5, s3) {
    if (e5 === T && s3 === T) return t3;
    const i3 = this.translateToGivenOrigin(t3, e5, s3, T, T);
    return this.angle ? i3.rotate(xt(this.angle), t3) : i3;
  }
  translateToOriginPoint(t3, e5, s3) {
    const i3 = this.translateToGivenOrigin(t3, T, T, e5, s3);
    return this.angle ? i3.rotate(xt(this.angle), t3) : i3;
  }
  getCenterPoint() {
    const t3 = this.getRelativeCenterPoint();
    return this.group ? bt(t3, this.group.calcTransformMatrix()) : t3;
  }
  getRelativeCenterPoint() {
    return this.translateToCenterPoint(new ot(this.left, this.top), this.originX, this.originY);
  }
  getPointByOrigin(t3, e5) {
    return this.getPositionByOrigin(t3, e5);
  }
  getPositionByOrigin(t3, e5) {
    return this.translateToOriginPoint(this.getRelativeCenterPoint(), t3, e5);
  }
  setPositionByOrigin(t3, e5, s3) {
    const i3 = this.translateToCenterPoint(t3, e5, s3), r3 = this.translateToOriginPoint(i3, this.originX, this.originY);
    this.set({
      left: r3.x,
      top: r3.y
    });
  }
  _getLeftTopCoords() {
    return this.getPositionByOrigin(O, k);
  }
  positionByLeftTop(t3) {
    return this.setPositionByOrigin(t3, O, k);
  }
};
var zs = class e2 extends Gs {
  static getDefaults() {
    return e2.ownDefaults;
  }
  get type() {
    const t3 = this.constructor.type;
    return "FabricObject" === t3 ? "object" : t3.toLowerCase();
  }
  set type(t3) {
    i("warn", "Setting type has no effect", t3);
  }
  constructor(s3) {
    super(), t(this, "_cacheContext", null), Object.assign(this, e2.ownDefaults), this.setOptions(s3);
  }
  _createCacheCanvas() {
    this._cacheCanvas = pt(), this._cacheContext = this._cacheCanvas.getContext("2d"), this._updateCacheCanvas(), this.dirty = true;
  }
  _limitCacheSize(t3) {
    const e5 = t3.width, i3 = t3.height, r3 = s.maxCacheSideLimit, n3 = s.minCacheSideLimit;
    if (e5 <= r3 && i3 <= r3 && e5 * i3 <= s.perfLimitSizeTotal) return e5 < n3 && (t3.width = n3), i3 < n3 && (t3.height = n3), t3;
    const o3 = e5 / i3, [a3, h3] = p.limitDimsByArea(o3), l3 = ws(n3, a3, r3), c2 = ws(n3, h3, r3);
    return e5 > l3 && (t3.zoomX /= e5 / l3, t3.width = l3, t3.capped = true), i3 > c2 && (t3.zoomY /= i3 / c2, t3.height = c2, t3.capped = true), t3;
  }
  _getCacheCanvasDimensions() {
    const t3 = this.getTotalObjectScaling(), e5 = this._getTransformedDimensions({
      skewX: 0,
      skewY: 0
    }), s3 = e5.x * t3.x / this.scaleX, i3 = e5.y * t3.y / this.scaleY;
    return {
      width: Math.ceil(s3 + 2),
      height: Math.ceil(i3 + 2),
      zoomX: t3.x,
      zoomY: t3.y,
      x: s3,
      y: i3
    };
  }
  _updateCacheCanvas() {
    const t3 = this._cacheCanvas, e5 = this._cacheContext, { width: s3, height: i3, zoomX: r3, zoomY: n3, x: o3, y: a3 } = this._limitCacheSize(this._getCacheCanvasDimensions()), h3 = s3 !== t3.width || i3 !== t3.height, l3 = this.zoomX !== r3 || this.zoomY !== n3;
    if (!t3 || !e5) return false;
    if (h3 || l3) {
      s3 !== t3.width || i3 !== t3.height ? (t3.width = s3, t3.height = i3) : (e5.setTransform(1, 0, 0, 1, 0, 0), e5.clearRect(0, 0, t3.width, t3.height));
      const h4 = o3 / 2, l4 = a3 / 2;
      return this.cacheTranslationX = Math.round(t3.width / 2 - h4) + h4, this.cacheTranslationY = Math.round(t3.height / 2 - l4) + l4, e5.translate(this.cacheTranslationX, this.cacheTranslationY), e5.scale(r3, n3), this.zoomX = r3, this.zoomY = n3, true;
    }
    return false;
  }
  setOptions() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    this._setOptions(t3);
  }
  transform(t3) {
    const e5 = this.group && !this.group._transformDone || this.group && this.canvas && t3 === this.canvas.contextTop, s3 = this.calcTransformMatrix(!e5);
    t3.transform(s3[0], s3[1], s3[2], s3[3], s3[4], s3[5]);
  }
  getObjectScaling() {
    if (!this.group) return new ot(Math.abs(this.scaleX), Math.abs(this.scaleY));
    const t3 = Dt(this.calcTransformMatrix());
    return new ot(Math.abs(t3.scaleX), Math.abs(t3.scaleY));
  }
  getTotalObjectScaling() {
    const t3 = this.getObjectScaling();
    if (this.canvas) {
      const e5 = this.canvas.getZoom(), s3 = this.getCanvasRetinaScaling();
      return t3.scalarMultiply(e5 * s3);
    }
    return t3;
  }
  getObjectOpacity() {
    let t3 = this.opacity;
    return this.group && (t3 *= this.group.getObjectOpacity()), t3;
  }
  _constrainScale(t3) {
    return Math.abs(t3) < this.minScaleLimit ? t3 < 0 ? -this.minScaleLimit : this.minScaleLimit : 0 === t3 ? 1e-4 : t3;
  }
  _set(t3, e5) {
    t3 !== W && t3 !== V || (e5 = this._constrainScale(e5)), t3 === W && e5 < 0 ? (this.flipX = !this.flipX, e5 *= -1) : "scaleY" === t3 && e5 < 0 ? (this.flipY = !this.flipY, e5 *= -1) : "shadow" !== t3 || !e5 || e5 instanceof bs || (e5 = new bs(e5));
    const s3 = this[t3] !== e5;
    return this[t3] = e5, s3 && this.constructor.cacheProperties.includes(t3) && (this.dirty = true), this.parent && (this.dirty || s3 && this.constructor.stateProperties.includes(t3)) && this.parent._set("dirty", true), this;
  }
  isNotVisible() {
    return 0 === this.opacity || !this.width && !this.height && 0 === this.strokeWidth || !this.visible;
  }
  render(t3) {
    this.isNotVisible() || this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (t3.save(), this._setupCompositeOperation(t3), this.drawSelectionBackground(t3), this.transform(t3), this._setOpacity(t3), this._setShadow(t3), this.shouldCache() ? (this.renderCache(), this.drawCacheOnCanvas(t3)) : (this._removeCacheCanvas(), this.drawObject(t3, false, {}), this.dirty = false), t3.restore());
  }
  drawSelectionBackground(t3) {
  }
  renderCache(t3) {
    if (t3 = t3 || {}, this._cacheCanvas && this._cacheContext || this._createCacheCanvas(), this.isCacheDirty() && this._cacheContext) {
      const { zoomX: e5, zoomY: s3, cacheTranslationX: i3, cacheTranslationY: r3 } = this, { width: n3, height: o3 } = this._cacheCanvas;
      this.drawObject(this._cacheContext, t3.forClipping, {
        zoomX: e5,
        zoomY: s3,
        cacheTranslationX: i3,
        cacheTranslationY: r3,
        width: n3,
        height: o3,
        parentClipPaths: []
      }), this.dirty = false;
    }
  }
  _removeCacheCanvas() {
    this._cacheCanvas = void 0, this._cacheContext = null;
  }
  hasStroke() {
    return !!this.stroke && "transparent" !== this.stroke && 0 !== this.strokeWidth;
  }
  hasFill() {
    return !!this.fill && "transparent" !== this.fill;
  }
  needsItsOwnCache() {
    return !!(this.paintFirst === N && this.hasFill() && this.hasStroke() && this.shadow) || !!this.clipPath;
  }
  shouldCache() {
    return this.ownCaching = this.objectCaching && (!this.parent || !this.parent.isOnACache()) || this.needsItsOwnCache(), this.ownCaching;
  }
  willDrawShadow() {
    return !!this.shadow && (0 !== this.shadow.offsetX || 0 !== this.shadow.offsetY);
  }
  drawClipPathOnCache(t3, e5, s3) {
    t3.save(), e5.inverted ? t3.globalCompositeOperation = "destination-out" : t3.globalCompositeOperation = "destination-in", t3.setTransform(1, 0, 0, 1, 0, 0), t3.drawImage(s3, 0, 0), t3.restore();
  }
  drawObject(t3, e5, s3) {
    const i3 = this.fill, r3 = this.stroke;
    e5 ? (this.fill = "black", this.stroke = "", this._setClippingProperties(t3)) : this._renderBackground(t3), this._render(t3), this._drawClipPath(t3, this.clipPath, s3), this.fill = i3, this.stroke = r3;
  }
  createClipPathLayer(t3, e5) {
    const s3 = vt(e5), i3 = s3.getContext("2d");
    if (i3.translate(e5.cacheTranslationX, e5.cacheTranslationY), i3.scale(e5.zoomX, e5.zoomY), t3._cacheCanvas = s3, e5.parentClipPaths.forEach((t4) => {
      t4.transform(i3);
    }), e5.parentClipPaths.push(t3), t3.absolutePositioned) {
      const t4 = wt(this.calcTransformMatrix());
      i3.transform(t4[0], t4[1], t4[2], t4[3], t4[4], t4[5]);
    }
    return t3.transform(i3), t3.drawObject(i3, true, e5), s3;
  }
  _drawClipPath(t3, e5, s3) {
    if (!e5) return;
    e5._transformDone = true;
    const i3 = this.createClipPathLayer(e5, s3);
    this.drawClipPathOnCache(t3, e5, i3);
  }
  drawCacheOnCanvas(t3) {
    t3.scale(1 / this.zoomX, 1 / this.zoomY), t3.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY);
  }
  isCacheDirty() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (this.isNotVisible()) return false;
    const e5 = this._cacheCanvas, s3 = this._cacheContext;
    return !(!e5 || !s3 || t3 || !this._updateCacheCanvas()) || !!(this.dirty || this.clipPath && this.clipPath.absolutePositioned) && (e5 && s3 && !t3 && (s3.save(), s3.setTransform(1, 0, 0, 1, 0, 0), s3.clearRect(0, 0, e5.width, e5.height), s3.restore()), true);
  }
  _renderBackground(t3) {
    if (!this.backgroundColor) return;
    const e5 = this._getNonTransformedDimensions();
    t3.fillStyle = this.backgroundColor, t3.fillRect(-e5.x / 2, -e5.y / 2, e5.x, e5.y), this._removeShadow(t3);
  }
  _setOpacity(t3) {
    this.group && !this.group._transformDone ? t3.globalAlpha = this.getObjectOpacity() : t3.globalAlpha *= this.opacity;
  }
  _setStrokeStyles(t3, e5) {
    const s3 = e5.stroke;
    s3 && (t3.lineWidth = e5.strokeWidth, t3.lineCap = e5.strokeLineCap, t3.lineDashOffset = e5.strokeDashOffset, t3.lineJoin = e5.strokeLineJoin, t3.miterLimit = e5.strokeMiterLimit, Gt(s3) ? "percentage" === s3.gradientUnits || s3.gradientTransform || s3.patternTransform ? this._applyPatternForTransformedGradient(t3, s3) : (t3.strokeStyle = s3.toLive(t3), this._applyPatternGradientTransform(t3, s3)) : t3.strokeStyle = e5.stroke);
  }
  _setFillStyles(t3, e5) {
    let { fill: s3 } = e5;
    s3 && (Gt(s3) ? (t3.fillStyle = s3.toLive(t3), this._applyPatternGradientTransform(t3, s3)) : t3.fillStyle = s3);
  }
  _setClippingProperties(t3) {
    t3.globalAlpha = 1, t3.strokeStyle = "transparent", t3.fillStyle = "#000000";
  }
  _setLineDash(t3, e5) {
    e5 && 0 !== e5.length && t3.setLineDash(e5);
  }
  _setShadow(t3) {
    if (!this.shadow) return;
    const e5 = this.shadow, i3 = this.canvas, r3 = this.getCanvasRetinaScaling(), [n3, , , o3] = (null == i3 ? void 0 : i3.viewportTransform) || S, a3 = n3 * r3, h3 = o3 * r3, l3 = e5.nonScaling ? new ot(1, 1) : this.getObjectScaling();
    t3.shadowColor = e5.color, t3.shadowBlur = e5.blur * s.browserShadowBlurConstant * (a3 + h3) * (l3.x + l3.y) / 4, t3.shadowOffsetX = e5.offsetX * a3 * l3.x, t3.shadowOffsetY = e5.offsetY * h3 * l3.y;
  }
  _removeShadow(t3) {
    this.shadow && (t3.shadowColor = "", t3.shadowBlur = t3.shadowOffsetX = t3.shadowOffsetY = 0);
  }
  _applyPatternGradientTransform(t3, e5) {
    if (!Gt(e5)) return {
      offsetX: 0,
      offsetY: 0
    };
    const s3 = e5.gradientTransform || e5.patternTransform, i3 = -this.width / 2 + e5.offsetX || 0, r3 = -this.height / 2 + e5.offsetY || 0;
    return "percentage" === e5.gradientUnits ? t3.transform(this.width, 0, 0, this.height, i3, r3) : t3.transform(1, 0, 0, 1, i3, r3), s3 && t3.transform(s3[0], s3[1], s3[2], s3[3], s3[4], s3[5]), {
      offsetX: i3,
      offsetY: r3
    };
  }
  _renderPaintInOrder(t3) {
    this.paintFirst === N ? (this._renderStroke(t3), this._renderFill(t3)) : (this._renderFill(t3), this._renderStroke(t3));
  }
  _render(t3) {
  }
  _renderFill(t3) {
    this.fill && (t3.save(), this._setFillStyles(t3, this), "evenodd" === this.fillRule ? t3.fill("evenodd") : t3.fill(), t3.restore());
  }
  _renderStroke(t3) {
    if (this.stroke && 0 !== this.strokeWidth) {
      if (this.shadow && !this.shadow.affectStroke && this._removeShadow(t3), t3.save(), this.strokeUniform) {
        const e5 = this.getObjectScaling();
        t3.scale(1 / e5.x, 1 / e5.y);
      }
      this._setLineDash(t3, this.strokeDashArray), this._setStrokeStyles(t3, this), t3.stroke(), t3.restore();
    }
  }
  _applyPatternForTransformedGradient(t3, e5) {
    var s3;
    const i3 = this._limitCacheSize(this._getCacheCanvasDimensions()), r3 = this.getCanvasRetinaScaling(), n3 = i3.x / this.scaleX / r3, o3 = i3.y / this.scaleY / r3, a3 = vt({
      width: Math.ceil(n3),
      height: Math.ceil(o3)
    }), h3 = a3.getContext("2d");
    h3 && (h3.beginPath(), h3.moveTo(0, 0), h3.lineTo(n3, 0), h3.lineTo(n3, o3), h3.lineTo(0, o3), h3.closePath(), h3.translate(n3 / 2, o3 / 2), h3.scale(i3.zoomX / this.scaleX / r3, i3.zoomY / this.scaleY / r3), this._applyPatternGradientTransform(h3, e5), h3.fillStyle = e5.toLive(t3), h3.fill(), t3.translate(-this.width / 2 - this.strokeWidth / 2, -this.height / 2 - this.strokeWidth / 2), t3.scale(r3 * this.scaleX / i3.zoomX, r3 * this.scaleY / i3.zoomY), t3.strokeStyle = null !== (s3 = h3.createPattern(a3, "no-repeat")) && void 0 !== s3 ? s3 : "");
  }
  _findCenterFromElement() {
    return new ot(this.left + this.width / 2, this.top + this.height / 2);
  }
  clone(t3) {
    const e5 = this.toObject(t3);
    return this.constructor.fromObject(e5);
  }
  cloneAsImage(t3) {
    const e5 = this.toCanvasElement(t3);
    return new (tt.getClass("image"))(e5);
  }
  toCanvasElement() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const e5 = ue(this), s3 = this.group, i3 = this.shadow, r3 = Math.abs, n3 = t3.enableRetinaScaling ? f() : 1, o3 = (t3.multiplier || 1) * n3, a3 = t3.canvasProvider || ((t4) => new se(t4, {
      enableRetinaScaling: false,
      renderOnAddRemove: false,
      skipOffscreen: false
    }));
    delete this.group, t3.withoutTransform && ce(this), t3.withoutShadow && (this.shadow = null), t3.viewportTransform && me(this, this.getViewportTransform()), this.setCoords();
    const h3 = pt(), l3 = this.getBoundingRect(), c2 = this.shadow, u3 = new ot();
    if (c2) {
      const t4 = c2.blur, e6 = c2.nonScaling ? new ot(1, 1) : this.getObjectScaling();
      u3.x = 2 * Math.round(r3(c2.offsetX) + t4) * r3(e6.x), u3.y = 2 * Math.round(r3(c2.offsetY) + t4) * r3(e6.y);
    }
    const d3 = l3.width + u3.x, g3 = l3.height + u3.y;
    h3.width = Math.ceil(d3), h3.height = Math.ceil(g3);
    const p3 = a3(h3);
    "jpeg" === t3.format && (p3.backgroundColor = "#fff"), this.setPositionByOrigin(new ot(p3.width / 2, p3.height / 2), T, T);
    const m3 = this.canvas;
    p3._objects = [
      this
    ], this.set("canvas", p3), this.setCoords();
    const v3 = p3.toCanvasElement(o3 || 1, t3);
    return this.set("canvas", m3), this.shadow = i3, s3 && (this.group = s3), this.set(e5), this.setCoords(), p3._objects = [], p3.destroy(), v3;
  }
  toDataURL() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return yt(this.toCanvasElement(t3), t3.format || "png", t3.quality || 1);
  }
  toBlob() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return _t(this.toCanvasElement(t3), t3.format || "png", t3.quality || 1);
  }
  isType() {
    for (var t3 = arguments.length, e5 = new Array(t3), s3 = 0; s3 < t3; s3++) e5[s3] = arguments[s3];
    return e5.includes(this.constructor.type) || e5.includes(this.type);
  }
  complexity() {
    return 1;
  }
  toJSON() {
    return this.toObject();
  }
  rotate(t3) {
    const { centeredRotation: e5, originX: s3, originY: i3 } = this;
    if (e5) {
      const { x: t4, y: e6 } = this.getRelativeCenterPoint();
      this.originX = T, this.originY = T, this.left = t4, this.top = e6;
    }
    if (this.set("angle", t3), e5) {
      const { x: t4, y: e6 } = this.getPositionByOrigin(s3, i3);
      this.left = t4, this.top = e6, this.originX = s3, this.originY = i3;
    }
  }
  setOnGroup() {
  }
  _setupCompositeOperation(t3) {
    this.globalCompositeOperation && (t3.globalCompositeOperation = this.globalCompositeOperation);
  }
  dispose() {
    et.cancelByTarget(this), this.off(), this._set("canvas", void 0), this._cacheCanvas && u().dispose(this._cacheCanvas), this._cacheCanvas = void 0, this._cacheContext = null;
  }
  animate(t3, e5) {
    return Object.entries(t3).reduce((t4, s3) => {
      let [i3, r3] = s3;
      return t4[i3] = this._animate(i3, r3, e5), t4;
    }, {});
  }
  _animate(t3, e5) {
    let s3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const i3 = t3.split("."), r3 = this.constructor.colorProperties.includes(i3[i3.length - 1]), { abort: n3, startValue: o3, onChange: a3, onComplete: h3 } = s3, l3 = {
      ...s3,
      target: this,
      startValue: null != o3 ? o3 : i3.reduce((t4, e6) => t4[e6], this),
      endValue: e5,
      abort: null == n3 ? void 0 : n3.bind(this),
      onChange: (t4, e6, s4) => {
        i3.reduce((e7, s5, r4) => (r4 === i3.length - 1 && (e7[s5] = t4), e7[s5]), this), a3 && a3(t4, e6, s4);
      },
      onComplete: (t4, e6, s4) => {
        this.setCoords(), h3 && h3(t4, e6, s4);
      }
    };
    return r3 ? Ws(l3) : Ys(l3);
  }
  isDescendantOf(t3) {
    const { parent: e5, group: s3 } = this;
    return e5 === t3 || s3 === t3 || !!e5 && e5.isDescendantOf(t3) || !!s3 && s3 !== e5 && s3.isDescendantOf(t3);
  }
  getAncestors() {
    const t3 = [];
    let e5 = this;
    do {
      e5 = e5.parent, e5 && t3.push(e5);
    } while (e5);
    return t3;
  }
  findCommonAncestors(t3) {
    if (this === t3) return {
      fork: [],
      otherFork: [],
      common: [
        this,
        ...this.getAncestors()
      ]
    };
    const e5 = this.getAncestors(), s3 = t3.getAncestors();
    if (0 === e5.length && s3.length > 0 && this === s3[s3.length - 1]) return {
      fork: [],
      otherFork: [
        t3,
        ...s3.slice(0, s3.length - 1)
      ],
      common: [
        this
      ]
    };
    for (let i3, r3 = 0; r3 < e5.length; r3++) {
      if (i3 = e5[r3], i3 === t3) return {
        fork: [
          this,
          ...e5.slice(0, r3)
        ],
        otherFork: [],
        common: e5.slice(r3)
      };
      for (let n3 = 0; n3 < s3.length; n3++) {
        if (this === s3[n3]) return {
          fork: [],
          otherFork: [
            t3,
            ...s3.slice(0, n3)
          ],
          common: [
            this,
            ...e5
          ]
        };
        if (i3 === s3[n3]) return {
          fork: [
            this,
            ...e5.slice(0, r3)
          ],
          otherFork: [
            t3,
            ...s3.slice(0, n3)
          ],
          common: e5.slice(r3)
        };
      }
    }
    return {
      fork: [
        this,
        ...e5
      ],
      otherFork: [
        t3,
        ...s3
      ],
      common: []
    };
  }
  hasCommonAncestors(t3) {
    const e5 = this.findCommonAncestors(t3);
    return e5 && !!e5.common.length;
  }
  isInFrontOf(t3) {
    if (this === t3) return;
    const e5 = this.findCommonAncestors(t3);
    if (e5.fork.includes(t3)) return true;
    if (e5.otherFork.includes(this)) return false;
    const s3 = e5.common[0] || this.canvas;
    if (!s3) return;
    const i3 = e5.fork.pop(), r3 = e5.otherFork.pop(), n3 = s3._objects.indexOf(i3), o3 = s3._objects.indexOf(r3);
    return n3 > -1 && n3 > o3;
  }
  toObject() {
    const t3 = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).concat(e2.customProperties, this.constructor.customProperties || []);
    let i3;
    const r3 = s.NUM_FRACTION_DIGITS, { clipPath: n3, fill: o3, stroke: a3, shadow: h3, strokeDashArray: l3, left: c2, top: u3, originX: d3, originY: g3, width: f3, height: p3, strokeWidth: v3, strokeLineCap: y3, strokeDashOffset: _3, strokeLineJoin: x3, strokeUniform: C3, strokeMiterLimit: S3, scaleX: b3, scaleY: w3, angle: T2, flipX: O2, flipY: k3, opacity: D2, visible: M3, backgroundColor: P2, fillRule: E2, paintFirst: A3, globalCompositeOperation: j2, skewX: F3, skewY: L2 } = this;
    n3 && !n3.excludeFromExport && (i3 = n3.toObject(t3.concat("inverted", "absolutePositioned")));
    const I2 = (t4) => Wt(t4, r3), B2 = {
      ...Xt(this, t3),
      type: this.constructor.type,
      version: m,
      originX: d3,
      originY: g3,
      left: I2(c2),
      top: I2(u3),
      width: I2(f3),
      height: I2(p3),
      fill: zt(o3) ? o3.toObject() : o3,
      stroke: zt(a3) ? a3.toObject() : a3,
      strokeWidth: I2(v3),
      strokeDashArray: l3 ? l3.concat() : l3,
      strokeLineCap: y3,
      strokeDashOffset: _3,
      strokeLineJoin: x3,
      strokeUniform: C3,
      strokeMiterLimit: I2(S3),
      scaleX: I2(b3),
      scaleY: I2(w3),
      angle: I2(T2),
      flipX: O2,
      flipY: k3,
      opacity: I2(D2),
      shadow: h3 ? h3.toObject() : h3,
      visible: M3,
      backgroundColor: P2,
      fillRule: E2,
      paintFirst: A3,
      globalCompositeOperation: j2,
      skewX: I2(F3),
      skewY: I2(L2),
      ...i3 ? {
        clipPath: i3
      } : null
    };
    return this.includeDefaultValues ? B2 : this._removeDefaultValues(B2);
  }
  toDatalessObject(t3) {
    return this.toObject(t3);
  }
  _removeDefaultValues(t3) {
    const e5 = this.constructor.getDefaults(), s3 = Object.keys(e5).length > 0 ? e5 : Object.getPrototypeOf(this);
    return Yt(t3, (t4, e6) => {
      if (e6 === O || e6 === k || "type" === e6) return true;
      const i3 = s3[e6];
      return t4 !== i3 && !(Array.isArray(t4) && Array.isArray(i3) && 0 === t4.length && 0 === i3.length);
    });
  }
  toString() {
    return `#<${this.constructor.type}>`;
  }
  static _fromObject(t3) {
    let { type: e5, ...s3 } = t3, { extraParam: i3, ...r3 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return $t(s3, r3).then((t4) => i3 ? (delete t4[i3], new this(s3[i3], t4)) : new this(t4));
  }
  static fromObject(t3, e5) {
    return this._fromObject(t3, e5);
  }
};
t(zs, "stateProperties", Ts), t(zs, "cacheProperties", Os), t(zs, "ownDefaults", ks), t(zs, "type", "FabricObject"), t(zs, "colorProperties", [
  H,
  N,
  "backgroundColor"
]), t(zs, "customProperties", []), tt.setClass(zs), tt.setClass(zs, "object");
var Hs = (t3, e5, s3) => (i3, r3, n3, o3) => {
  const a3 = e5(i3, r3, n3, o3);
  return a3 && ve(t3, {
    ...Ie(i3, r3, n3, o3),
    ...s3
  }), a3;
};
function Ns(t3) {
  return (e5, s3, i3, r3) => {
    const { target: n3, originX: o3, originY: a3 } = s3, h3 = n3.getPositionByOrigin(o3, a3), l3 = t3(e5, s3, i3, r3);
    return n3.setPositionByOrigin(h3, s3.originX, s3.originY), l3;
  };
}
var Us = Hs(B, Ns((t3, e5, s3, i3) => {
  const r3 = Re(e5, e5.originX, e5.originY, s3, i3);
  if (_e(e5.originX) === _e(T) || _e(e5.originX) === _e(M) && r3.x < 0 || _e(e5.originX) === _e(O) && r3.x > 0) {
    const { target: t4 } = e5, s4 = t4.strokeWidth / (t4.strokeUniform ? t4.scaleX : 1), i4 = je(e5) ? 2 : 1, n3 = t4.width, o3 = Math.abs(r3.x * i4 / t4.scaleX) - s4;
    return t4.set("width", Math.max(o3, 1)), n3 !== t4.width;
  }
  return false;
}));
function qs(t3, e5, s3, i3, r3) {
  i3 = i3 || {};
  const n3 = this.sizeX || i3.cornerSize || r3.cornerSize, o3 = this.sizeY || i3.cornerSize || r3.cornerSize, a3 = void 0 !== i3.transparentCorners ? i3.transparentCorners : r3.transparentCorners, h3 = a3 ? N : H, l3 = !a3 && (i3.cornerStrokeColor || r3.cornerStrokeColor);
  let c2, u3 = e5, d3 = s3;
  t3.save(), t3.fillStyle = i3.cornerColor || r3.cornerColor || "", t3.strokeStyle = i3.cornerStrokeColor || r3.cornerStrokeColor || "", n3 > o3 ? (c2 = n3, t3.scale(1, o3 / n3), d3 = s3 * n3 / o3) : o3 > n3 ? (c2 = o3, t3.scale(n3 / o3, 1), u3 = e5 * o3 / n3) : c2 = n3, t3.beginPath(), t3.arc(u3, d3, c2 / 2, 0, x, false), t3[h3](), l3 && t3.stroke(), t3.restore();
}
function Ks(t3, e5, s3, i3, r3) {
  i3 = i3 || {};
  const n3 = this.sizeX || i3.cornerSize || r3.cornerSize, o3 = this.sizeY || i3.cornerSize || r3.cornerSize, a3 = void 0 !== i3.transparentCorners ? i3.transparentCorners : r3.transparentCorners, h3 = a3 ? N : H, l3 = !a3 && (i3.cornerStrokeColor || r3.cornerStrokeColor), c2 = n3 / 2, u3 = o3 / 2;
  t3.save(), t3.fillStyle = i3.cornerColor || r3.cornerColor || "", t3.strokeStyle = i3.cornerStrokeColor || r3.cornerStrokeColor || "", t3.translate(e5, s3);
  const d3 = r3.getTotalAngle();
  t3.rotate(xt(d3)), t3[`${h3}Rect`](-c2, -u3, n3, o3), l3 && t3.strokeRect(-c2, -u3, n3, o3), t3.restore();
}
var Js = class {
  constructor(e5) {
    t(this, "visible", true), t(this, "actionName", Y), t(this, "angle", 0), t(this, "x", 0), t(this, "y", 0), t(this, "offsetX", 0), t(this, "offsetY", 0), t(this, "sizeX", 0), t(this, "sizeY", 0), t(this, "touchSizeX", 0), t(this, "touchSizeY", 0), t(this, "cursorStyle", "crosshair"), t(this, "withConnection", false), Object.assign(this, e5);
  }
  shouldActivate(t3, e5, s3, i3) {
    var r3;
    let { tl: n3, tr: o3, br: a3, bl: h3 } = i3;
    return (null === (r3 = e5.canvas) || void 0 === r3 ? void 0 : r3.getActiveObject()) === e5 && e5.isControlVisible(t3) && Vs.isPointInPolygon(s3, [
      n3,
      o3,
      a3,
      h3
    ]);
  }
  getActionHandler(t3, e5, s3) {
    return this.actionHandler;
  }
  getMouseDownHandler(t3, e5, s3) {
    return this.mouseDownHandler;
  }
  getMouseUpHandler(t3, e5, s3) {
    return this.mouseUpHandler;
  }
  cursorStyleHandler(t3, e5, s3, i3) {
    return e5.cursorStyle;
  }
  getActionName(t3, e5, s3) {
    return e5.actionName;
  }
  getVisibility(t3, e5) {
    var s3, i3;
    return null !== (s3 = null === (i3 = t3._controlsVisibility) || void 0 === i3 ? void 0 : i3[e5]) && void 0 !== s3 ? s3 : this.visible;
  }
  setVisibility(t3, e5, s3) {
    this.visible = t3;
  }
  positionHandler(t3, e5, s3, i3) {
    return new ot(this.x * t3.x + this.offsetX, this.y * t3.y + this.offsetY).transform(e5);
  }
  calcCornerCoords(t3, e5, s3, i3, r3, n3) {
    const o3 = Ot([
      Mt(s3, i3),
      Pt({
        angle: t3
      }),
      Et((r3 ? this.touchSizeX : this.sizeX) || e5, (r3 ? this.touchSizeY : this.sizeY) || e5)
    ]);
    return {
      tl: new ot(-0.5, -0.5).transform(o3),
      tr: new ot(0.5, -0.5).transform(o3),
      br: new ot(0.5, 0.5).transform(o3),
      bl: new ot(-0.5, 0.5).transform(o3)
    };
  }
  render(t3, e5, s3, i3, r3) {
    if ("circle" === ((i3 = i3 || {}).cornerStyle || r3.cornerStyle)) qs.call(this, t3, e5, s3, i3, r3);
    else Ks.call(this, t3, e5, s3, i3, r3);
  }
};
var Qs = (t3, e5, s3) => s3.lockRotation ? Ae : e5.cursorStyle;
var Zs = Hs(F, Ns((t3, e5, s3, i3) => {
  let { target: r3, ex: n3, ey: o3, theta: a3, originX: h3, originY: l3 } = e5;
  const c2 = r3.getPositionByOrigin(h3, l3);
  if (Le(r3, "lockRotation")) return false;
  const u3 = Math.atan2(o3 - c2.y, n3 - c2.x), d3 = Math.atan2(i3 - c2.y, s3 - c2.x);
  let g3 = Ct(d3 - u3 + a3);
  if (r3.snapAngle && r3.snapAngle > 0) {
    const t4 = r3.snapAngle, e6 = r3.snapThreshold || t4, s4 = Math.ceil(g3 / t4) * t4, i4 = Math.floor(g3 / t4) * t4;
    Math.abs(g3 - i4) < e6 ? g3 = i4 : Math.abs(g3 - s4) < e6 && (g3 = s4);
  }
  g3 < 0 && (g3 = 360 + g3), g3 %= 360;
  const f3 = r3.angle !== g3;
  return r3.angle = g3, f3;
}));
function ti(t3, e5) {
  const s3 = e5.canvas, i3 = t3[s3.uniScaleKey];
  return s3.uniformScaling && !i3 || !s3.uniformScaling && i3;
}
function ei(t3, e5, s3) {
  const i3 = Le(t3, "lockScalingX"), r3 = Le(t3, "lockScalingY");
  if (i3 && r3) return true;
  if (!e5 && (i3 || r3) && s3) return true;
  if (i3 && "x" === e5) return true;
  if (r3 && "y" === e5) return true;
  const { width: n3, height: o3, strokeWidth: a3 } = t3;
  return 0 === n3 && 0 === a3 && "y" !== e5 || 0 === o3 && 0 === a3 && "x" !== e5;
}
var si = [
  "e",
  "se",
  "s",
  "sw",
  "w",
  "nw",
  "n",
  "ne",
  "e"
];
var ii = (t3, e5, s3, i3) => {
  const r3 = ti(t3, s3);
  if (ei(s3, 0 !== e5.x && 0 === e5.y ? "x" : 0 === e5.x && 0 !== e5.y ? "y" : "", r3)) return Ae;
  const n3 = Be(s3, 0, i3);
  return `${si[n3]}-resize`;
};
function ri(t3, e5, s3, i3) {
  let r3 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
  const n3 = e5.target, o3 = r3.by, a3 = ti(t3, n3);
  let h3, l3, c2, u3, d3, g3;
  if (ei(n3, o3, a3)) return false;
  if (e5.gestureScale) l3 = e5.scaleX * e5.gestureScale, c2 = e5.scaleY * e5.gestureScale;
  else {
    if (h3 = Re(e5, e5.originX, e5.originY, s3, i3), d3 = "y" !== o3 ? Math.sign(h3.x || e5.signX || 1) : 1, g3 = "x" !== o3 ? Math.sign(h3.y || e5.signY || 1) : 1, e5.signX || (e5.signX = d3), e5.signY || (e5.signY = g3), Le(n3, "lockScalingFlip") && (e5.signX !== d3 || e5.signY !== g3)) return false;
    if (u3 = n3._getTransformedDimensions(), a3 && !o3) {
      const t4 = Math.abs(h3.x) + Math.abs(h3.y), { original: s4 } = e5, i4 = t4 / (Math.abs(u3.x * s4.scaleX / n3.scaleX) + Math.abs(u3.y * s4.scaleY / n3.scaleY));
      l3 = s4.scaleX * i4, c2 = s4.scaleY * i4;
    } else l3 = Math.abs(h3.x * n3.scaleX / u3.x), c2 = Math.abs(h3.y * n3.scaleY / u3.y);
    je(e5) && (l3 *= 2, c2 *= 2), e5.signX !== d3 && "y" !== o3 && (e5.originX = Fe(e5.originX), l3 *= -1, e5.signX = d3), e5.signY !== g3 && "x" !== o3 && (e5.originY = Fe(e5.originY), c2 *= -1, e5.signY = g3);
  }
  const f3 = n3.scaleX, p3 = n3.scaleY;
  return o3 ? ("x" === o3 && n3.set(W, l3), "y" === o3 && n3.set(V, c2)) : (!Le(n3, "lockScalingX") && n3.set(W, l3), !Le(n3, "lockScalingY") && n3.set(V, c2)), f3 !== n3.scaleX || p3 !== n3.scaleY;
}
var ni = Hs(j, Ns((t3, e5, s3, i3) => ri(t3, e5, s3, i3)));
var oi = Hs(j, Ns((t3, e5, s3, i3) => ri(t3, e5, s3, i3, {
  by: "x"
})));
var ai = Hs(j, Ns((t3, e5, s3, i3) => ri(t3, e5, s3, i3, {
  by: "y"
})));
var hi = {
  x: {
    counterAxis: "y",
    scale: W,
    skew: G,
    lockSkewing: "lockSkewingX",
    origin: "originX",
    flip: "flipX"
  },
  y: {
    counterAxis: "x",
    scale: V,
    skew: z,
    lockSkewing: "lockSkewingY",
    origin: "originY",
    flip: "flipY"
  }
};
var li = [
  "ns",
  "nesw",
  "ew",
  "nwse"
];
var ci = (t3, e5, s3, i3) => {
  if (0 !== e5.x && Le(s3, "lockSkewingY")) return Ae;
  if (0 !== e5.y && Le(s3, "lockSkewingX")) return Ae;
  const r3 = Be(s3, 0, i3) % 4;
  return `${li[r3]}-resize`;
};
function ui(t3, e5, s3, i3, r3) {
  const { target: n3 } = s3, { counterAxis: o3, origin: a3, lockSkewing: h3, skew: l3, flip: c2 } = hi[t3];
  if (Le(n3, h3)) return false;
  const { origin: u3, flip: d3 } = hi[o3], g3 = _e(s3[u3]) * (n3[d3] ? -1 : 1), f3 = -Math.sign(g3) * (n3[c2] ? -1 : 1), p3 = 0.5 * -((0 === n3[l3] && Re(s3, T, T, i3, r3)[t3] > 0 || n3[l3] > 0 ? 1 : -1) * f3) + 0.5, m3 = Hs(I, Ns((e6, s4, i4, r4) => function(t4, e7, s5) {
    let { target: i5, ex: r5, ey: n4, skewingSide: o4, ...a4 } = e7;
    const { skew: h4 } = hi[t4], l4 = s5.subtract(new ot(r5, n4)).divide(new ot(i5.scaleX, i5.scaleY))[t4], c3 = i5[h4], u4 = a4[h4], d4 = Math.tan(xt(u4)), g4 = "y" === t4 ? i5._getTransformedDimensions({
      scaleX: 1,
      scaleY: 1,
      skewX: 0
    }).x : i5._getTransformedDimensions({
      scaleX: 1,
      scaleY: 1
    }).y, f4 = 2 * l4 * o4 / Math.max(g4, 1) + d4, p4 = Ct(Math.atan(f4));
    i5.set(h4, p4);
    const m4 = c3 !== i5[h4];
    if (m4 && "y" === t4) {
      const { skewX: t5, scaleX: e8 } = i5, s6 = i5._getTransformedDimensions({
        skewY: c3
      }), r6 = i5._getTransformedDimensions(), n5 = 0 !== t5 ? s6.x / r6.x : 1;
      1 !== n5 && i5.set(W, n5 * e8);
    }
    return m4;
  }(t3, s4, new ot(i4, r4))));
  return m3(e5, {
    ...s3,
    [a3]: p3,
    skewingSide: f3
  }, i3, r3);
}
var di = (t3, e5, s3, i3) => ui("x", t3, e5, s3, i3);
var gi = (t3, e5, s3, i3) => ui("y", t3, e5, s3, i3);
function fi(t3, e5) {
  return t3[e5.canvas.altActionKey];
}
var pi = (t3, e5, s3) => {
  const i3 = fi(t3, s3);
  return 0 === e5.x ? i3 ? G : V : 0 === e5.y ? i3 ? z : W : "";
};
var mi = (t3, e5, s3, i3) => fi(t3, s3) ? ci(0, e5, s3, i3) : ii(t3, e5, s3, i3);
var vi = (t3, e5, s3, i3) => fi(t3, e5.target) ? gi(t3, e5, s3, i3) : oi(t3, e5, s3, i3);
var yi = (t3, e5, s3, i3) => fi(t3, e5.target) ? di(t3, e5, s3, i3) : ai(t3, e5, s3, i3);
var _i = () => ({
  ml: new Js({
    x: -0.5,
    y: 0,
    cursorStyleHandler: mi,
    actionHandler: vi,
    getActionName: pi
  }),
  mr: new Js({
    x: 0.5,
    y: 0,
    cursorStyleHandler: mi,
    actionHandler: vi,
    getActionName: pi
  }),
  mb: new Js({
    x: 0,
    y: 0.5,
    cursorStyleHandler: mi,
    actionHandler: yi,
    getActionName: pi
  }),
  mt: new Js({
    x: 0,
    y: -0.5,
    cursorStyleHandler: mi,
    actionHandler: yi,
    getActionName: pi
  }),
  tl: new Js({
    x: -0.5,
    y: -0.5,
    cursorStyleHandler: ii,
    actionHandler: ni
  }),
  tr: new Js({
    x: 0.5,
    y: -0.5,
    cursorStyleHandler: ii,
    actionHandler: ni
  }),
  bl: new Js({
    x: -0.5,
    y: 0.5,
    cursorStyleHandler: ii,
    actionHandler: ni
  }),
  br: new Js({
    x: 0.5,
    y: 0.5,
    cursorStyleHandler: ii,
    actionHandler: ni
  }),
  mtr: new Js({
    x: 0,
    y: -0.5,
    actionHandler: Zs,
    cursorStyleHandler: Qs,
    offsetY: -40,
    withConnection: true,
    actionName: L
  })
});
var xi = () => ({
  mr: new Js({
    x: 0.5,
    y: 0,
    actionHandler: Us,
    cursorStyleHandler: mi,
    actionName: B
  }),
  ml: new Js({
    x: -0.5,
    y: 0,
    actionHandler: Us,
    cursorStyleHandler: mi,
    actionName: B
  })
});
var Ci = () => ({
  ..._i(),
  ...xi()
});
var Si = class _Si extends zs {
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ..._Si.ownDefaults
    };
  }
  constructor(t3) {
    super(), Object.assign(this, this.constructor.createControls(), _Si.ownDefaults), this.setOptions(t3);
  }
  static createControls() {
    return {
      controls: _i()
    };
  }
  _updateCacheCanvas() {
    const t3 = this.canvas;
    if (this.noScaleCache && t3 && t3._currentTransform) {
      const e5 = t3._currentTransform, s3 = e5.target, i3 = e5.action;
      if (this === s3 && i3 && i3.startsWith(Y)) return false;
    }
    return super._updateCacheCanvas();
  }
  getActiveControl() {
    const t3 = this.__corner;
    return t3 ? {
      key: t3,
      control: this.controls[t3],
      coord: this.oCoords[t3]
    } : void 0;
  }
  findControl(t3) {
    let e5 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!this.hasControls || !this.canvas) return;
    this.__corner = void 0;
    const s3 = Object.entries(this.oCoords);
    for (let i3 = s3.length - 1; i3 >= 0; i3--) {
      const [r3, n3] = s3[i3], o3 = this.controls[r3];
      if (o3.shouldActivate(r3, this, t3, e5 ? n3.touchCorner : n3.corner)) return this.__corner = r3, {
        key: r3,
        control: o3,
        coord: this.oCoords[r3]
      };
    }
  }
  calcOCoords() {
    const t3 = this.getViewportTransform(), e5 = this.getCenterPoint(), s3 = Mt(e5.x, e5.y), i3 = Pt({
      angle: this.getTotalAngle() - (this.group && this.flipX ? 180 : 0)
    }), r3 = Tt(s3, i3), n3 = Tt(t3, r3), o3 = Tt(n3, [
      1 / t3[0],
      0,
      0,
      1 / t3[3],
      0,
      0
    ]), a3 = this.group ? Dt(this.calcTransformMatrix()) : void 0;
    a3 && (a3.scaleX = Math.abs(a3.scaleX), a3.scaleY = Math.abs(a3.scaleY));
    const h3 = this._calculateCurrentDimensions(a3), l3 = {};
    return this.forEachControl((t4, e6) => {
      const s4 = t4.positionHandler(h3, o3, this, t4);
      l3[e6] = Object.assign(s4, this._calcCornerCoords(t4, s4));
    }), l3;
  }
  _calcCornerCoords(t3, e5) {
    const s3 = this.getTotalAngle();
    return {
      corner: t3.calcCornerCoords(s3, this.cornerSize, e5.x, e5.y, false, this),
      touchCorner: t3.calcCornerCoords(s3, this.touchCornerSize, e5.x, e5.y, true, this)
    };
  }
  setCoords() {
    super.setCoords(), this.canvas && (this.oCoords = this.calcOCoords());
  }
  forEachControl(t3) {
    for (const e5 in this.controls) t3(this.controls[e5], e5, this);
  }
  drawSelectionBackground(t3) {
    if (!this.selectionBackgroundColor || this.canvas && this.canvas._activeObject !== this) return;
    t3.save();
    const e5 = this.getRelativeCenterPoint(), s3 = this._calculateCurrentDimensions(), i3 = this.getViewportTransform();
    t3.translate(e5.x, e5.y), t3.scale(1 / i3[0], 1 / i3[3]), t3.rotate(xt(this.angle)), t3.fillStyle = this.selectionBackgroundColor, t3.fillRect(-s3.x / 2, -s3.y / 2, s3.x, s3.y), t3.restore();
  }
  strokeBorders(t3, e5) {
    t3.strokeRect(-e5.x / 2, -e5.y / 2, e5.x, e5.y);
  }
  _drawBorders(t3, e5) {
    let s3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const i3 = {
      hasControls: this.hasControls,
      borderColor: this.borderColor,
      borderDashArray: this.borderDashArray,
      ...s3
    };
    t3.save(), t3.strokeStyle = i3.borderColor, this._setLineDash(t3, i3.borderDashArray), this.strokeBorders(t3, e5), i3.hasControls && this.drawControlsConnectingLines(t3, e5), t3.restore();
  }
  _renderControls(t3) {
    let e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const { hasBorders: s3, hasControls: i3 } = this, r3 = {
      hasBorders: s3,
      hasControls: i3,
      ...e5
    }, n3 = this.getViewportTransform(), o3 = r3.hasBorders, a3 = r3.hasControls, h3 = Tt(n3, this.calcTransformMatrix()), l3 = Dt(h3);
    t3.save(), t3.translate(l3.translateX, l3.translateY), t3.lineWidth = this.borderScaleFactor, this.group === this.parent && (t3.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1), this.flipX && (l3.angle -= 180), t3.rotate(xt(this.group ? l3.angle : this.angle)), o3 && this.drawBorders(t3, l3, e5), a3 && this.drawControls(t3, e5), t3.restore();
  }
  drawBorders(t3, e5, s3) {
    let i3;
    if (s3 && s3.forActiveSelection || this.group) {
      const t4 = de(this.width, this.height, Lt(e5)), s4 = this.isStrokeAccountedForInDimensions() ? at : (this.strokeUniform ? new ot().scalarAdd(this.canvas ? this.canvas.getZoom() : 1) : new ot(e5.scaleX, e5.scaleY)).scalarMultiply(this.strokeWidth);
      i3 = t4.add(s4).scalarAdd(this.borderScaleFactor).scalarAdd(2 * this.padding);
    } else i3 = this._calculateCurrentDimensions().scalarAdd(this.borderScaleFactor);
    this._drawBorders(t3, i3, s3);
  }
  drawControlsConnectingLines(t3, e5) {
    let s3 = false;
    t3.beginPath(), this.forEachControl((i3, r3) => {
      i3.withConnection && i3.getVisibility(this, r3) && (s3 = true, t3.moveTo(i3.x * e5.x, i3.y * e5.y), t3.lineTo(i3.x * e5.x + i3.offsetX, i3.y * e5.y + i3.offsetY));
    }), s3 && t3.stroke();
  }
  drawControls(t3) {
    let e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    t3.save();
    const s3 = this.getCanvasRetinaScaling(), { cornerStrokeColor: i3, cornerDashArray: r3, cornerColor: n3 } = this, o3 = {
      cornerStrokeColor: i3,
      cornerDashArray: r3,
      cornerColor: n3,
      ...e5
    };
    t3.setTransform(s3, 0, 0, s3, 0, 0), t3.strokeStyle = t3.fillStyle = o3.cornerColor, this.transparentCorners || (t3.strokeStyle = o3.cornerStrokeColor), this._setLineDash(t3, o3.cornerDashArray), this.forEachControl((e6, s4) => {
      if (e6.getVisibility(this, s4)) {
        const i4 = this.oCoords[s4];
        e6.render(t3, i4.x, i4.y, o3, this);
      }
    }), t3.restore();
  }
  isControlVisible(t3) {
    return this.controls[t3] && this.controls[t3].getVisibility(this, t3);
  }
  setControlVisible(t3, e5) {
    this._controlsVisibility || (this._controlsVisibility = {}), this._controlsVisibility[t3] = e5;
  }
  setControlsVisibility() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    Object.entries(t3).forEach((t4) => {
      let [e5, s3] = t4;
      return this.setControlVisible(e5, s3);
    });
  }
  clearContextTop(t3) {
    if (!this.canvas) return;
    const e5 = this.canvas.contextTop;
    if (!e5) return;
    const s3 = this.canvas.viewportTransform;
    e5.save(), e5.transform(s3[0], s3[1], s3[2], s3[3], s3[4], s3[5]), this.transform(e5);
    const i3 = this.width + 4, r3 = this.height + 4;
    return e5.clearRect(-i3 / 2, -r3 / 2, i3, r3), t3 || e5.restore(), e5;
  }
  onDeselect(t3) {
    return false;
  }
  onSelect(t3) {
    return false;
  }
  shouldStartDragging(t3) {
    return false;
  }
  onDragStart(t3) {
    return false;
  }
  canDrop(t3) {
    return false;
  }
  renderDragSourceEffect(t3) {
  }
  renderDropTargetEffect(t3) {
  }
};
function bi(t3, e5) {
  return e5.forEach((e6) => {
    Object.getOwnPropertyNames(e6.prototype).forEach((s3) => {
      "constructor" !== s3 && Object.defineProperty(t3.prototype, s3, Object.getOwnPropertyDescriptor(e6.prototype, s3) || /* @__PURE__ */ Object.create(null));
    });
  }), t3;
}
t(Si, "ownDefaults", {
  noScaleCache: true,
  lockMovementX: false,
  lockMovementY: false,
  lockRotation: false,
  lockScalingX: false,
  lockScalingY: false,
  lockSkewingX: false,
  lockSkewingY: false,
  lockScalingFlip: false,
  cornerSize: 13,
  touchCornerSize: 24,
  transparentCorners: true,
  cornerColor: "rgb(178,204,255)",
  cornerStrokeColor: "",
  cornerStyle: "rect",
  cornerDashArray: null,
  hasControls: true,
  borderColor: "rgb(178,204,255)",
  borderDashArray: null,
  borderOpacityWhenMoving: 0.4,
  borderScaleFactor: 1,
  hasBorders: true,
  selectionBackgroundColor: "",
  selectable: true,
  evented: true,
  perPixelTargetFind: false,
  activeOn: "down",
  hoverCursor: null,
  moveCursor: null
});
var wi = class extends Si {
};
bi(wi, [
  Je
]), tt.setClass(wi), tt.setClass(wi, "object");
var Ti = (t3, e5, s3, i3) => {
  const r3 = 2 * (i3 = Math.round(i3)) + 1, { data: n3 } = t3.getImageData(e5 - i3, s3 - i3, r3, r3);
  for (let t4 = 3; t4 < n3.length; t4 += 4) {
    if (n3[t4] > 0) return false;
  }
  return true;
};
var Oi = class {
  constructor(t3) {
    this.options = t3, this.strokeProjectionMagnitude = this.options.strokeWidth / 2, this.scale = new ot(this.options.scaleX, this.options.scaleY), this.strokeUniformScalar = this.options.strokeUniform ? new ot(1 / this.options.scaleX, 1 / this.options.scaleY) : new ot(1, 1);
  }
  createSideVector(t3, e5) {
    const s3 = be(t3, e5);
    return this.options.strokeUniform ? s3.multiply(this.scale) : s3;
  }
  projectOrthogonally(t3, e5, s3) {
    return this.applySkew(t3.add(this.calcOrthogonalProjection(t3, e5, s3)));
  }
  isSkewed() {
    return 0 !== this.options.skewX || 0 !== this.options.skewY;
  }
  applySkew(t3) {
    const e5 = new ot(t3);
    return e5.y += e5.x * Math.tan(xt(this.options.skewY)), e5.x += e5.y * Math.tan(xt(this.options.skewX)), e5;
  }
  scaleUnitVector(t3, e5) {
    return t3.multiply(this.strokeUniformScalar).scalarMultiply(e5);
  }
};
var ki = new ot();
var Di = class _Di extends Oi {
  static getOrthogonalRotationFactor(t3, e5) {
    const s3 = e5 ? Te(t3, e5) : Oe(t3);
    return Math.abs(s3) < y ? -1 : 1;
  }
  constructor(e5, s3, i3, r3) {
    super(r3), t(this, "AB", void 0), t(this, "AC", void 0), t(this, "alpha", void 0), t(this, "bisector", void 0), this.A = new ot(e5), this.B = new ot(s3), this.C = new ot(i3), this.AB = this.createSideVector(this.A, this.B), this.AC = this.createSideVector(this.A, this.C), this.alpha = Te(this.AB, this.AC), this.bisector = ke(Se(this.AB.eq(ki) ? this.AC : this.AB, this.alpha / 2));
  }
  calcOrthogonalProjection(t3, e5) {
    let s3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.strokeProjectionMagnitude;
    const i3 = this.createSideVector(t3, e5), r3 = De(i3), n3 = _Di.getOrthogonalRotationFactor(r3, this.bisector);
    return this.scaleUnitVector(r3, s3 * n3);
  }
  projectBevel() {
    const t3 = [];
    return (this.alpha % x === 0 ? [
      this.B
    ] : [
      this.B,
      this.C
    ]).forEach((e5) => {
      t3.push(this.projectOrthogonally(this.A, e5)), t3.push(this.projectOrthogonally(this.A, e5, -this.strokeProjectionMagnitude));
    }), t3;
  }
  projectMiter() {
    const t3 = [], e5 = Math.abs(this.alpha), s3 = 1 / Math.sin(e5 / 2), i3 = this.scaleUnitVector(this.bisector, -this.strokeProjectionMagnitude * s3), r3 = this.options.strokeUniform ? we(this.scaleUnitVector(this.bisector, this.options.strokeMiterLimit)) : this.options.strokeMiterLimit;
    return we(i3) / this.strokeProjectionMagnitude <= r3 && t3.push(this.applySkew(this.A.add(i3))), t3.push(...this.projectBevel()), t3;
  }
  projectRoundNoSkew(t3, e5) {
    const s3 = [], i3 = new ot(_Di.getOrthogonalRotationFactor(this.bisector), _Di.getOrthogonalRotationFactor(new ot(this.bisector.y, this.bisector.x)));
    return [
      new ot(1, 0).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(i3),
      new ot(0, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(i3)
    ].forEach((i4) => {
      Ee(i4, t3, e5) && s3.push(this.A.add(i4));
    }), s3;
  }
  projectRoundWithSkew(t3, e5) {
    const s3 = [], { skewX: i3, skewY: r3, scaleX: n3, scaleY: o3, strokeUniform: a3 } = this.options, h3 = new ot(Math.tan(xt(i3)), Math.tan(xt(r3))), l3 = this.strokeProjectionMagnitude, c2 = a3 ? l3 / o3 / Math.sqrt(1 / o3 ** 2 + 1 / n3 ** 2 * h3.y ** 2) : l3 / Math.sqrt(1 + h3.y ** 2), u3 = new ot(Math.sqrt(Math.max(l3 ** 2 - c2 ** 2, 0)), c2), d3 = a3 ? l3 / Math.sqrt(1 + h3.x ** 2 * (1 / o3) ** 2 / (1 / n3 + 1 / n3 * h3.x * h3.y) ** 2) : l3 / Math.sqrt(1 + h3.x ** 2 / (1 + h3.x * h3.y) ** 2), g3 = new ot(d3, Math.sqrt(Math.max(l3 ** 2 - d3 ** 2, 0)));
    return [
      g3,
      g3.scalarMultiply(-1),
      u3,
      u3.scalarMultiply(-1)
    ].map((t4) => this.applySkew(a3 ? t4.multiply(this.strokeUniformScalar) : t4)).forEach((i4) => {
      Ee(i4, t3, e5) && s3.push(this.applySkew(this.A).add(i4));
    }), s3;
  }
  projectRound() {
    const t3 = [];
    t3.push(...this.projectBevel());
    const e5 = this.alpha % x === 0, s3 = this.applySkew(this.A), i3 = t3[e5 ? 0 : 2].subtract(s3), r3 = t3[e5 ? 1 : 0].subtract(s3), n3 = e5 ? this.applySkew(this.AB.scalarMultiply(-1)) : this.applySkew(this.bisector.multiply(this.strokeUniformScalar).scalarMultiply(-1)), o3 = Me(i3, n3) > 0, a3 = o3 ? i3 : r3, h3 = o3 ? r3 : i3;
    return this.isSkewed() ? t3.push(...this.projectRoundWithSkew(a3, h3)) : t3.push(...this.projectRoundNoSkew(a3, h3)), t3;
  }
  projectPoints() {
    switch (this.options.strokeLineJoin) {
      case "miter":
        return this.projectMiter();
      case "round":
        return this.projectRound();
      default:
        return this.projectBevel();
    }
  }
  project() {
    return this.projectPoints().map((t3) => ({
      originPoint: this.A,
      projectedPoint: t3,
      angle: this.alpha,
      bisector: this.bisector
    }));
  }
};
var Mi = class extends Oi {
  constructor(t3, e5, s3) {
    super(s3), this.A = new ot(t3), this.T = new ot(e5);
  }
  calcOrthogonalProjection(t3, e5) {
    let s3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.strokeProjectionMagnitude;
    const i3 = this.createSideVector(t3, e5);
    return this.scaleUnitVector(De(i3), s3);
  }
  projectButt() {
    return [
      this.projectOrthogonally(this.A, this.T, this.strokeProjectionMagnitude),
      this.projectOrthogonally(this.A, this.T, -this.strokeProjectionMagnitude)
    ];
  }
  projectRound() {
    const t3 = [];
    if (!this.isSkewed() && this.A.eq(this.T)) {
      const e5 = new ot(1, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);
      t3.push(this.applySkew(this.A.add(e5)), this.applySkew(this.A.subtract(e5)));
    } else t3.push(...new Di(this.A, this.T, this.T, this.options).projectRound());
    return t3;
  }
  projectSquare() {
    const t3 = [];
    if (this.A.eq(this.T)) {
      const e5 = new ot(1, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);
      t3.push(this.A.add(e5), this.A.subtract(e5));
    } else {
      const e5 = this.calcOrthogonalProjection(this.A, this.T, this.strokeProjectionMagnitude), s3 = this.scaleUnitVector(ke(this.createSideVector(this.A, this.T)), -this.strokeProjectionMagnitude), i3 = this.A.add(s3);
      t3.push(i3.add(e5), i3.subtract(e5));
    }
    return t3.map((t4) => this.applySkew(t4));
  }
  projectPoints() {
    switch (this.options.strokeLineCap) {
      case "round":
        return this.projectRound();
      case "square":
        return this.projectSquare();
      default:
        return this.projectButt();
    }
  }
  project() {
    return this.projectPoints().map((t3) => ({
      originPoint: this.A,
      projectedPoint: t3
    }));
  }
};
var Pi = function(t3, e5) {
  let s3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  const i3 = [];
  if (0 === t3.length) return i3;
  const r3 = t3.reduce((t4, e6) => (t4[t4.length - 1].eq(e6) || t4.push(new ot(e6)), t4), [
    new ot(t3[0])
  ]);
  if (1 === r3.length) s3 = true;
  else if (!s3) {
    const t4 = r3[0], e6 = ((t5, e7) => {
      for (let s4 = t5.length - 1; s4 >= 0; s4--) if (e7(t5[s4], s4, t5)) return s4;
      return -1;
    })(r3, (e7) => !e7.eq(t4));
    r3.splice(e6 + 1);
  }
  return r3.forEach((t4, r4, n3) => {
    let o3, a3;
    0 === r4 ? (a3 = n3[1], o3 = s3 ? t4 : n3[n3.length - 1]) : r4 === n3.length - 1 ? (o3 = n3[r4 - 1], a3 = s3 ? t4 : n3[0]) : (o3 = n3[r4 - 1], a3 = n3[r4 + 1]), s3 && 1 === n3.length ? i3.push(...new Mi(t4, t4, e5).project()) : !s3 || 0 !== r4 && r4 !== n3.length - 1 ? i3.push(...new Di(t4, o3, a3, e5).project()) : i3.push(...new Mi(t4, 0 === r4 ? a3 : o3, e5).project());
  }), i3;
};
var Ei = (t3) => {
  const e5 = {};
  return Object.keys(t3).forEach((s3) => {
    e5[s3] = {}, Object.keys(t3[s3]).forEach((i3) => {
      e5[s3][i3] = {
        ...t3[s3][i3]
      };
    });
  }), e5;
};
var Ai = (t3) => t3.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var ji;
var Fi = (t3) => {
  if (ji || ji || (ji = "Intl" in g() && "Segmenter" in Intl && new Intl.Segmenter(void 0, {
    granularity: "grapheme"
  })), ji) {
    const e5 = ji.segment(t3);
    return Array.from(e5).map((t4) => {
      let { segment: e6 } = t4;
      return e6;
    });
  }
  return Li(t3);
};
var Li = (t3) => {
  const e5 = [];
  for (let s3, i3 = 0; i3 < t3.length; i3++) false !== (s3 = Ii(t3, i3)) && e5.push(s3);
  return e5;
};
var Ii = (t3, e5) => {
  const s3 = t3.charCodeAt(e5);
  if (isNaN(s3)) return "";
  if (s3 < 55296 || s3 > 57343) return t3.charAt(e5);
  if (55296 <= s3 && s3 <= 56319) {
    if (t3.length <= e5 + 1) throw "High surrogate without following low surrogate";
    const s4 = t3.charCodeAt(e5 + 1);
    if (56320 > s4 || s4 > 57343) throw "High surrogate without following low surrogate";
    return t3.charAt(e5) + t3.charAt(e5 + 1);
  }
  if (0 === e5) throw "Low surrogate without preceding high surrogate";
  const i3 = t3.charCodeAt(e5 - 1);
  if (55296 > i3 || i3 > 56319) throw "Low surrogate without preceding high surrogate";
  return false;
};
var Bi = Object.freeze({
  __proto__: null,
  capitalize: function(t3) {
    let e5 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return `${t3.charAt(0).toUpperCase()}${e5 ? t3.slice(1) : t3.slice(1).toLowerCase()}`;
  },
  escapeXml: Ai,
  graphemeSplit: Fi
});
var Ri = function(t3, e5) {
  let s3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return t3.fill !== e5.fill || t3.stroke !== e5.stroke || t3.strokeWidth !== e5.strokeWidth || t3.fontSize !== e5.fontSize || t3.fontFamily !== e5.fontFamily || t3.fontWeight !== e5.fontWeight || t3.fontStyle !== e5.fontStyle || t3.textDecorationThickness !== e5.textDecorationThickness || t3.textBackgroundColor !== e5.textBackgroundColor || t3.deltaY !== e5.deltaY || s3 && (t3.overline !== e5.overline || t3.underline !== e5.underline || t3.linethrough !== e5.linethrough);
};
var $i = (t3, e5) => {
  const s3 = e5.split("\n"), i3 = [];
  let r3 = -1, n3 = {};
  t3 = Ei(t3);
  for (let e6 = 0; e6 < s3.length; e6++) {
    const o3 = Fi(s3[e6]);
    if (t3[e6]) for (let s4 = 0; s4 < o3.length; s4++) {
      r3++;
      const o4 = t3[e6][s4];
      o4 && Object.keys(o4).length > 0 && (Ri(n3, o4, true) ? i3.push({
        start: r3,
        end: r3 + 1,
        style: o4
      }) : i3[i3.length - 1].end++), n3 = o4 || {};
    }
    else r3 += o3.length, n3 = {};
  }
  return i3;
};
var Xi = (t3, e5) => {
  if (!Array.isArray(t3)) return Ei(t3);
  const s3 = e5.split(E), i3 = {};
  let r3 = -1, n3 = 0;
  for (let e6 = 0; e6 < s3.length; e6++) {
    const o3 = Fi(s3[e6]);
    for (let s4 = 0; s4 < o3.length; s4++) r3++, t3[n3] && t3[n3].start <= r3 && r3 < t3[n3].end && (i3[e6] = i3[e6] || {}, i3[e6][s4] = {
      ...t3[n3].style
    }, r3 === t3[n3].end - 1 && n3++);
  }
  return i3;
};
var Yi = [
  "display",
  "transform",
  H,
  "fill-opacity",
  "fill-rule",
  "opacity",
  N,
  "stroke-dasharray",
  "stroke-linecap",
  "stroke-dashoffset",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "id",
  "paint-order",
  "vector-effect",
  "instantiated_by_use",
  "clip-path"
];
function Wi(t3, e5) {
  const s3 = t3.nodeName, i3 = t3.getAttribute("class"), r3 = t3.getAttribute("id"), n3 = "(?![a-zA-Z\\-]+)";
  let o3;
  if (o3 = new RegExp("^" + s3, "i"), e5 = e5.replace(o3, ""), r3 && e5.length && (o3 = new RegExp("#" + r3 + n3, "i"), e5 = e5.replace(o3, "")), i3 && e5.length) {
    const t4 = i3.split(" ");
    for (let s4 = t4.length; s4--; ) o3 = new RegExp("\\." + t4[s4] + n3, "i"), e5 = e5.replace(o3, "");
  }
  return 0 === e5.length;
}
function Vi(t3, e5) {
  let s3 = true;
  const i3 = Wi(t3, e5.pop());
  return i3 && e5.length && (s3 = function(t4, e6) {
    let s4, i4 = true;
    for (; t4.parentElement && 1 === t4.parentElement.nodeType && e6.length; ) i4 && (s4 = e6.pop()), i4 = Wi(t4 = t4.parentElement, s4);
    return 0 === e6.length;
  }(t3, e5)), i3 && s3 && 0 === e5.length;
}
function Gi(t3) {
  let e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s3 = {};
  for (const i3 in e5) Vi(t3, i3.split(" ")) && (s3 = {
    ...s3,
    ...e5[i3]
  });
  return s3;
}
var zi = (t3) => {
  var e5;
  return null !== (e5 = fs[t3]) && void 0 !== e5 ? e5 : t3;
};
var Hi = new RegExp(`(${cs})`, "gi");
var Ni = `(${cs})`;
var Ui = String.raw`(skewX)\(${Ni}\)`;
var qi = String.raw`(skewY)\(${Ni}\)`;
var Ki = String.raw`(rotate)\(${Ni}(?: ${Ni} ${Ni})?\)`;
var Ji = String.raw`(scale)\(${Ni}(?: ${Ni})?\)`;
var Qi = String.raw`(translate)\(${Ni}(?: ${Ni})?\)`;
var Zi = `(?:${String.raw`(matrix)\(${Ni} ${Ni} ${Ni} ${Ni} ${Ni} ${Ni}\)`}|${Qi}|${Ki}|${Ji}|${Ui}|${qi})`;
var tr = `(?:${Zi}*)`;
var er = String.raw`^\s*(?:${tr}?)\s*$`;
var sr = new RegExp(er);
var ir = new RegExp(Zi);
var rr = new RegExp(Zi, "g");
function nr(t3) {
  const e5 = [];
  if (!(t3 = ((t4) => Xe(t4.replace(Hi, " $1 ").replace(/,/gi, " ")))(t3).replace(/\s*([()])\s*/gi, "$1")) || t3 && !sr.test(t3)) return [
    ...S
  ];
  for (const s3 of t3.matchAll(rr)) {
    const t4 = ir.exec(s3[0]);
    if (!t4) continue;
    let i3 = S;
    const r3 = t4.filter((t5) => !!t5), [, n3, ...o3] = r3, [a3, h3, l3, c2, u3, d3] = o3.map((t5) => parseFloat(t5));
    switch (n3) {
      case "translate":
        i3 = Mt(a3, h3);
        break;
      case L:
        i3 = Pt({
          angle: a3
        }, {
          x: h3,
          y: l3
        });
        break;
      case Y:
        i3 = Et(a3, h3);
        break;
      case G:
        i3 = jt(a3);
        break;
      case z:
        i3 = Ft(a3);
        break;
      case "matrix":
        i3 = [
          a3,
          h3,
          l3,
          c2,
          u3,
          d3
        ];
    }
    e5.push(i3);
  }
  return Ot(e5);
}
function or(t3, e5, s3, i3) {
  const r3 = Array.isArray(e5);
  let n3, o3 = e5;
  if (t3 !== H && t3 !== N || e5 !== P) {
    if ("strokeUniform" === t3) return "non-scaling-stroke" === e5;
    if ("strokeDashArray" === t3) o3 = e5 === P ? null : e5.replace(/,/g, " ").split(/\s+/).map(parseFloat);
    else if ("transformMatrix" === t3) o3 = s3 && s3.transformMatrix ? Tt(s3.transformMatrix, nr(e5)) : nr(e5);
    else if ("visible" === t3) o3 = e5 !== P && "hidden" !== e5, s3 && false === s3.visible && (o3 = false);
    else if ("opacity" === t3) o3 = parseFloat(e5), s3 && void 0 !== s3.opacity && (o3 *= s3.opacity);
    else if ("textAnchor" === t3) o3 = "start" === e5 ? O : "end" === e5 ? M : T;
    else if ("charSpacing" === t3 || t3 === Ze) n3 = Ue(e5, i3) / i3 * 1e3;
    else if ("paintFirst" === t3) {
      const t4 = e5.indexOf(H), s4 = e5.indexOf(N);
      o3 = H, (t4 > -1 && s4 > -1 && s4 < t4 || -1 === t4 && s4 > -1) && (o3 = N);
    } else {
      if ("href" === t3 || "xlink:href" === t3 || "font" === t3 || "id" === t3) return e5;
      if ("imageSmoothing" === t3) return "optimizeQuality" === e5;
      n3 = r3 ? e5.map(Ue) : Ue(e5, i3);
    }
  } else o3 = "";
  return !r3 && isNaN(n3) ? o3 : n3;
}
function ar(t3, e5) {
  t3.replace(/;\s*$/, "").split(";").forEach((t4) => {
    if (!t4) return;
    const [s3, i3] = t4.split(":");
    e5[s3.trim().toLowerCase()] = i3.trim();
  });
}
function hr(t3) {
  const e5 = {}, s3 = t3.getAttribute("style");
  return s3 ? ("string" == typeof s3 ? ar(s3, e5) : function(t4, e6) {
    Object.entries(t4).forEach((t5) => {
      let [s4, i3] = t5;
      void 0 !== i3 && (e6[s4.toLowerCase()] = i3);
    });
  }(s3, e5), e5) : e5;
}
var lr = {
  stroke: "strokeOpacity",
  fill: "fillOpacity"
};
function cr(t3, e5, s3) {
  if (!t3) return {};
  let i3, r3 = {}, n3 = b;
  t3.parentNode && _s.test(t3.parentNode.nodeName) && (r3 = cr(t3.parentElement, e5, s3), r3.fontSize && (i3 = n3 = Ue(r3.fontSize)));
  const o3 = {
    ...e5.reduce((e6, s4) => {
      const i4 = t3.getAttribute(s4);
      return i4 && (e6[s4] = i4), e6;
    }, {}),
    ...Gi(t3, s3),
    ...hr(t3)
  };
  o3[ms] && t3.setAttribute(ms, o3[ms]), o3[ps] && (i3 = Ue(o3[ps], n3), o3[ps] = `${i3}`);
  const a3 = {};
  for (const t4 in o3) {
    const e6 = zi(t4), s4 = or(e6, o3[t4], r3, i3);
    a3[e6] = s4;
  }
  a3 && a3.font && function(t4, e6) {
    const s4 = t4.match(gs);
    if (!s4) return;
    const i4 = s4[1], r4 = s4[3], n4 = s4[4], o4 = s4[5], a4 = s4[6];
    i4 && (e6.fontStyle = i4), r4 && (e6.fontWeight = isNaN(parseFloat(r4)) ? r4 : parseFloat(r4)), n4 && (e6.fontSize = Ue(n4)), a4 && (e6.fontFamily = a4), o4 && (e6.lineHeight = o4 === J ? 1 : o4);
  }(a3.font, a3);
  const h3 = {
    ...r3,
    ...a3
  };
  return _s.test(t3.nodeName) ? h3 : function(t4) {
    const e6 = wi.getDefaults();
    return Object.entries(lr).forEach((s4) => {
      let [i4, r4] = s4;
      if (void 0 === t4[r4] || "" === t4[i4]) return;
      if (void 0 === t4[i4]) {
        if (!e6[i4]) return;
        t4[i4] = e6[i4];
      }
      if (0 === t4[i4].indexOf("url(")) return;
      const n4 = new Ne(t4[i4]);
      t4[i4] = n4.setAlpha(Wt(n4.getAlpha() * t4[r4], 2)).toRgba();
    }), t4;
  }(h3);
}
var ur = [
  "rx",
  "ry"
];
var dr = class _dr extends wi {
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ..._dr.ownDefaults
    };
  }
  constructor(t3) {
    super(), Object.assign(this, _dr.ownDefaults), this.setOptions(t3), this._initRxRy();
  }
  _initRxRy() {
    const { rx: t3, ry: e5 } = this;
    t3 && !e5 ? this.ry = t3 : e5 && !t3 && (this.rx = e5);
  }
  _render(t3) {
    const { width: e5, height: s3 } = this, i3 = -e5 / 2, r3 = -s3 / 2, n3 = this.rx ? Math.min(this.rx, e5 / 2) : 0, o3 = this.ry ? Math.min(this.ry, s3 / 2) : 0, a3 = 0 !== n3 || 0 !== o3;
    t3.beginPath(), t3.moveTo(i3 + n3, r3), t3.lineTo(i3 + e5 - n3, r3), a3 && t3.bezierCurveTo(i3 + e5 - w * n3, r3, i3 + e5, r3 + w * o3, i3 + e5, r3 + o3), t3.lineTo(i3 + e5, r3 + s3 - o3), a3 && t3.bezierCurveTo(i3 + e5, r3 + s3 - w * o3, i3 + e5 - w * n3, r3 + s3, i3 + e5 - n3, r3 + s3), t3.lineTo(i3 + n3, r3 + s3), a3 && t3.bezierCurveTo(i3 + w * n3, r3 + s3, i3, r3 + s3 - w * o3, i3, r3 + s3 - o3), t3.lineTo(i3, r3 + o3), a3 && t3.bezierCurveTo(i3, r3 + w * o3, i3 + w * n3, r3, i3 + n3, r3), t3.closePath(), this._renderPaintInOrder(t3);
  }
  toObject() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return super.toObject([
      ...ur,
      ...t3
    ]);
  }
  _toSVG() {
    const { width: t3, height: e5, rx: s3, ry: i3 } = this;
    return [
      "<rect ",
      "COMMON_PARTS",
      `x="${-t3 / 2}" y="${-e5 / 2}" rx="${s3}" ry="${i3}" width="${t3}" height="${e5}" />
`
    ];
  }
  static async fromElement(t3, e5, s3) {
    const { left: i3 = 0, top: r3 = 0, width: n3 = 0, height: o3 = 0, visible: a3 = true, ...h3 } = cr(t3, this.ATTRIBUTE_NAMES, s3);
    return new this({
      ...e5,
      ...h3,
      left: i3,
      top: r3,
      width: n3,
      height: o3,
      visible: Boolean(a3 && n3 && o3)
    });
  }
};
t(dr, "type", "Rect"), t(dr, "cacheProperties", [
  ...Os,
  ...ur
]), t(dr, "ownDefaults", {
  rx: 0,
  ry: 0
}), t(dr, "ATTRIBUTE_NAMES", [
  ...Yi,
  "x",
  "y",
  "rx",
  "ry",
  "width",
  "height"
]), tt.setClass(dr), tt.setSVGClass(dr);
var gr = "initialization";
var fr = "added";
var pr = "removed";
var mr = "imperative";
var vr = (t3, e5) => {
  const { strokeUniform: s3, strokeWidth: i3, width: r3, height: n3, group: o3 } = e5, a3 = o3 && o3 !== t3 ? ge(o3.calcTransformMatrix(), t3.calcTransformMatrix()) : null, h3 = a3 ? e5.getRelativeCenterPoint().transform(a3) : e5.getRelativeCenterPoint(), l3 = !e5.isStrokeAccountedForInDimensions(), c2 = s3 && l3 ? pe(new ot(i3, i3), void 0, t3.calcTransformMatrix()) : at, u3 = !s3 && l3 ? i3 : 0, d3 = de(r3 + u3, n3 + u3, Ot([
    a3,
    e5.calcOwnMatrix()
  ], true)).add(c2).scalarDivide(2);
  return [
    h3.subtract(d3),
    h3.add(d3)
  ];
};
var yr = class {
  calcLayoutResult(t3, e5) {
    if (this.shouldPerformLayout(t3)) return this.calcBoundingBox(e5, t3);
  }
  shouldPerformLayout(t3) {
    let { type: e5, prevStrategy: s3, strategy: i3 } = t3;
    return e5 === gr || e5 === mr || !!s3 && i3 !== s3;
  }
  shouldLayoutClipPath(t3) {
    let { type: e5, target: { clipPath: s3 } } = t3;
    return e5 !== gr && s3 && !s3.absolutePositioned;
  }
  getInitialSize(t3, e5) {
    return e5.size;
  }
  calcBoundingBox(t3, e5) {
    const { type: s3, target: i3 } = e5;
    if (s3 === mr && e5.overrides) return e5.overrides;
    if (0 === t3.length) return;
    const { left: r3, top: n3, width: o3, height: a3 } = ae(t3.map((t4) => vr(i3, t4)).reduce((t4, e6) => t4.concat(e6), [])), h3 = new ot(o3, a3), l3 = new ot(r3, n3).add(h3.scalarDivide(2));
    if (s3 === gr) {
      const t4 = this.getInitialSize(e5, {
        size: h3,
        center: l3
      });
      return {
        center: l3,
        relativeCorrection: new ot(0, 0),
        size: t4
      };
    }
    return {
      center: l3.transform(i3.calcOwnMatrix()),
      size: h3
    };
  }
};
t(yr, "type", "strategy");
var _r = class extends yr {
  shouldPerformLayout(t3) {
    return true;
  }
};
t(_r, "type", "fit-content"), tt.setClass(_r);
var xr = "layoutManager";
var Cr = class {
  constructor() {
    let e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new _r();
    t(this, "strategy", void 0), this.strategy = e5, this._subscriptions = /* @__PURE__ */ new Map();
  }
  performLayout(t3) {
    const e5 = {
      bubbles: true,
      strategy: this.strategy,
      ...t3,
      prevStrategy: this._prevLayoutStrategy,
      stopPropagation() {
        this.bubbles = false;
      }
    };
    this.onBeforeLayout(e5);
    const s3 = this.getLayoutResult(e5);
    s3 && this.commitLayout(e5, s3), this.onAfterLayout(e5, s3), this._prevLayoutStrategy = e5.strategy;
  }
  attachHandlers(t3, e5) {
    const { target: s3 } = e5;
    return [
      U,
      A,
      B,
      F,
      j,
      I,
      X,
      R,
      $
    ].map((e6) => t3.on(e6, (t4) => this.performLayout(e6 === U ? {
      type: "object_modified",
      trigger: e6,
      e: t4,
      target: s3
    } : {
      type: "object_modifying",
      trigger: e6,
      e: t4,
      target: s3
    })));
  }
  subscribe(t3, e5) {
    this.unsubscribe(t3, e5);
    const s3 = this.attachHandlers(t3, e5);
    this._subscriptions.set(t3, s3);
  }
  unsubscribe(t3, e5) {
    (this._subscriptions.get(t3) || []).forEach((t4) => t4()), this._subscriptions.delete(t3);
  }
  unsubscribeTargets(t3) {
    t3.targets.forEach((e5) => this.unsubscribe(e5, t3));
  }
  subscribeTargets(t3) {
    t3.targets.forEach((e5) => this.subscribe(e5, t3));
  }
  onBeforeLayout(t3) {
    const { target: e5, type: s3 } = t3, { canvas: i3 } = e5;
    if (s3 === gr || s3 === fr ? this.subscribeTargets(t3) : s3 === pr && this.unsubscribeTargets(t3), e5.fire("layout:before", {
      context: t3
    }), i3 && i3.fire("object:layout:before", {
      target: e5,
      context: t3
    }), s3 === mr && t3.deep) {
      const { strategy: s4, ...i4 } = t3;
      e5.forEachObject((t4) => t4.layoutManager && t4.layoutManager.performLayout({
        ...i4,
        bubbles: false,
        target: t4
      }));
    }
  }
  getLayoutResult(t3) {
    const { target: e5, strategy: s3, type: i3 } = t3, r3 = s3.calcLayoutResult(t3, e5.getObjects());
    if (!r3) return;
    const n3 = i3 === gr ? new ot() : e5.getRelativeCenterPoint(), { center: o3, correction: a3 = new ot(), relativeCorrection: h3 = new ot() } = r3, l3 = n3.subtract(o3).add(a3).transform(i3 === gr ? S : wt(e5.calcOwnMatrix()), true).add(h3);
    return {
      result: r3,
      prevCenter: n3,
      nextCenter: o3,
      offset: l3
    };
  }
  commitLayout(t3, e5) {
    const { target: s3 } = t3, { result: { size: i3 }, nextCenter: r3 } = e5;
    var n3, o3;
    (s3.set({
      width: i3.x,
      height: i3.y
    }), this.layoutObjects(t3, e5), t3.type === gr) ? s3.set({
      left: null !== (n3 = t3.x) && void 0 !== n3 ? n3 : r3.x + i3.x * _e(s3.originX),
      top: null !== (o3 = t3.y) && void 0 !== o3 ? o3 : r3.y + i3.y * _e(s3.originY)
    }) : (s3.setPositionByOrigin(r3, T, T), s3.setCoords(), s3.set("dirty", true));
  }
  layoutObjects(t3, e5) {
    const { target: s3 } = t3;
    s3.forEachObject((i3) => {
      i3.group === s3 && this.layoutObject(t3, e5, i3);
    }), t3.strategy.shouldLayoutClipPath(t3) && this.layoutObject(t3, e5, s3.clipPath);
  }
  layoutObject(t3, e5, s3) {
    let { offset: i3 } = e5;
    s3.set({
      left: s3.left + i3.x,
      top: s3.top + i3.y
    });
  }
  onAfterLayout(t3, e5) {
    const { target: s3, strategy: i3, bubbles: r3, prevStrategy: n3, ...o3 } = t3, { canvas: a3 } = s3;
    s3.fire("layout:after", {
      context: t3,
      result: e5
    }), a3 && a3.fire("object:layout:after", {
      context: t3,
      result: e5,
      target: s3
    });
    const h3 = s3.parent;
    r3 && null != h3 && h3.layoutManager && ((o3.path || (o3.path = [])).push(s3), h3.layoutManager.performLayout({
      ...o3,
      target: h3
    })), s3.set("dirty", true);
  }
  dispose() {
    const { _subscriptions: t3 } = this;
    t3.forEach((t4) => t4.forEach((t5) => t5())), t3.clear();
  }
  toObject() {
    return {
      type: xr,
      strategy: this.strategy.constructor.type
    };
  }
  toJSON() {
    return this.toObject();
  }
};
tt.setClass(Cr, xr);
var Sr = class extends Cr {
  performLayout() {
  }
};
var br = class _br extends lt(wi) {
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ..._br.ownDefaults
    };
  }
  constructor() {
    let e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], s3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(), t(this, "_activeObjects", []), t(this, "__objectSelectionTracker", void 0), t(this, "__objectSelectionDisposer", void 0), Object.assign(this, _br.ownDefaults), this.setOptions(s3), this.groupInit(e5, s3);
  }
  groupInit(t3, e5) {
    var s3;
    this._objects = [
      ...t3
    ], this.__objectSelectionTracker = this.__objectSelectionMonitor.bind(this, true), this.__objectSelectionDisposer = this.__objectSelectionMonitor.bind(this, false), this.forEachObject((t4) => {
      this.enterGroup(t4, false);
    }), this.layoutManager = null !== (s3 = e5.layoutManager) && void 0 !== s3 ? s3 : new Cr(), this.layoutManager.performLayout({
      type: gr,
      target: this,
      targets: [
        ...t3
      ],
      x: e5.left,
      y: e5.top
    });
  }
  canEnterGroup(t3) {
    return t3 === this || this.isDescendantOf(t3) ? (i("error", "Group: circular object trees are not supported, this call has no effect"), false) : -1 === this._objects.indexOf(t3) || (i("error", "Group: duplicate objects are not supported inside group, this call has no effect"), false);
  }
  _filterObjectsBeforeEnteringGroup(t3) {
    return t3.filter((t4, e5, s3) => this.canEnterGroup(t4) && s3.indexOf(t4) === e5);
  }
  add() {
    for (var t3 = arguments.length, e5 = new Array(t3), s3 = 0; s3 < t3; s3++) e5[s3] = arguments[s3];
    const i3 = this._filterObjectsBeforeEnteringGroup(e5), r3 = super.add(...i3);
    return this._onAfterObjectsChange(fr, i3), r3;
  }
  insertAt(t3) {
    for (var e5 = arguments.length, s3 = new Array(e5 > 1 ? e5 - 1 : 0), i3 = 1; i3 < e5; i3++) s3[i3 - 1] = arguments[i3];
    const r3 = this._filterObjectsBeforeEnteringGroup(s3), n3 = super.insertAt(t3, ...r3);
    return this._onAfterObjectsChange(fr, r3), n3;
  }
  remove() {
    const t3 = super.remove(...arguments);
    return this._onAfterObjectsChange(pr, t3), t3;
  }
  _onObjectAdded(t3) {
    this.enterGroup(t3, true), this.fire("object:added", {
      target: t3
    }), t3.fire("added", {
      target: this
    });
  }
  _onObjectRemoved(t3, e5) {
    this.exitGroup(t3, e5), this.fire("object:removed", {
      target: t3
    }), t3.fire("removed", {
      target: this
    });
  }
  _onAfterObjectsChange(t3, e5) {
    this.layoutManager.performLayout({
      type: t3,
      targets: e5,
      target: this
    });
  }
  _onStackOrderChanged() {
    this._set("dirty", true);
  }
  _set(t3, e5) {
    const s3 = this[t3];
    return super._set(t3, e5), "canvas" === t3 && s3 !== e5 && (this._objects || []).forEach((s4) => {
      s4._set(t3, e5);
    }), this;
  }
  _shouldSetNestedCoords() {
    return this.subTargetCheck;
  }
  removeAll() {
    return this._activeObjects = [], this.remove(...this._objects);
  }
  __objectSelectionMonitor(t3, e5) {
    let { target: s3 } = e5;
    const i3 = this._activeObjects;
    if (t3) i3.push(s3), this._set("dirty", true);
    else if (i3.length > 0) {
      const t4 = i3.indexOf(s3);
      t4 > -1 && (i3.splice(t4, 1), this._set("dirty", true));
    }
  }
  _watchObject(t3, e5) {
    t3 && this._watchObject(false, e5), t3 ? (e5.on("selected", this.__objectSelectionTracker), e5.on("deselected", this.__objectSelectionDisposer)) : (e5.off("selected", this.__objectSelectionTracker), e5.off("deselected", this.__objectSelectionDisposer));
  }
  enterGroup(t3, e5) {
    t3.group && t3.group.remove(t3), t3._set("parent", this), this._enterGroup(t3, e5);
  }
  _enterGroup(t3, e5) {
    e5 && le(t3, Tt(wt(this.calcTransformMatrix()), t3.calcTransformMatrix())), this._shouldSetNestedCoords() && t3.setCoords(), t3._set("group", this), t3._set("canvas", this.canvas), this._watchObject(true, t3);
    const s3 = this.canvas && this.canvas.getActiveObject && this.canvas.getActiveObject();
    s3 && (s3 === t3 || t3.isDescendantOf(s3)) && this._activeObjects.push(t3);
  }
  exitGroup(t3, e5) {
    this._exitGroup(t3, e5), t3._set("parent", void 0), t3._set("canvas", void 0);
  }
  _exitGroup(t3, e5) {
    t3._set("group", void 0), e5 || (le(t3, Tt(this.calcTransformMatrix(), t3.calcTransformMatrix())), t3.setCoords()), this._watchObject(false, t3);
    const s3 = this._activeObjects.length > 0 ? this._activeObjects.indexOf(t3) : -1;
    s3 > -1 && this._activeObjects.splice(s3, 1);
  }
  shouldCache() {
    const t3 = wi.prototype.shouldCache.call(this);
    if (t3) {
      for (let t4 = 0; t4 < this._objects.length; t4++) if (this._objects[t4].willDrawShadow()) return this.ownCaching = false, false;
    }
    return t3;
  }
  willDrawShadow() {
    if (super.willDrawShadow()) return true;
    for (let t3 = 0; t3 < this._objects.length; t3++) if (this._objects[t3].willDrawShadow()) return true;
    return false;
  }
  isOnACache() {
    return this.ownCaching || !!this.parent && this.parent.isOnACache();
  }
  drawObject(t3, e5, s3) {
    this._renderBackground(t3);
    for (let e6 = 0; e6 < this._objects.length; e6++) {
      var i3;
      const s4 = this._objects[e6];
      null !== (i3 = this.canvas) && void 0 !== i3 && i3.preserveObjectStacking && s4.group !== this ? (t3.save(), t3.transform(...wt(this.calcTransformMatrix())), s4.render(t3), t3.restore()) : s4.group === this && s4.render(t3);
    }
    this._drawClipPath(t3, this.clipPath, s3);
  }
  setCoords() {
    super.setCoords(), this._shouldSetNestedCoords() && this.forEachObject((t3) => t3.setCoords());
  }
  triggerLayout() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    this.layoutManager.performLayout({
      target: this,
      type: mr,
      ...t3
    });
  }
  render(t3) {
    this._transformDone = true, super.render(t3), this._transformDone = false;
  }
  __serializeObjects(t3, e5) {
    const s3 = this.includeDefaultValues;
    return this._objects.filter(function(t4) {
      return !t4.excludeFromExport;
    }).map(function(i3) {
      const r3 = i3.includeDefaultValues;
      i3.includeDefaultValues = s3;
      const n3 = i3[t3 || "toObject"](e5);
      return i3.includeDefaultValues = r3, n3;
    });
  }
  toObject() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    const e5 = this.layoutManager.toObject();
    return {
      ...super.toObject([
        "subTargetCheck",
        "interactive",
        ...t3
      ]),
      ..."fit-content" !== e5.strategy || this.includeDefaultValues ? {
        layoutManager: e5
      } : {},
      objects: this.__serializeObjects("toObject", t3)
    };
  }
  toString() {
    return `#<Group: (${this.complexity()})>`;
  }
  dispose() {
    this.layoutManager.unsubscribeTargets({
      targets: this.getObjects(),
      target: this
    }), this._activeObjects = [], this.forEachObject((t3) => {
      this._watchObject(false, t3), t3.dispose();
    }), super.dispose();
  }
  _createSVGBgRect(t3) {
    if (!this.backgroundColor) return "";
    const e5 = dr.prototype._toSVG.call(this), s3 = e5.indexOf("COMMON_PARTS");
    e5[s3] = 'for="group" ';
    const i3 = e5.join("");
    return t3 ? t3(i3) : i3;
  }
  _toSVG(t3) {
    const e5 = [
      "<g ",
      "COMMON_PARTS",
      " >\n"
    ], s3 = this._createSVGBgRect(t3);
    s3 && e5.push("		", s3);
    for (let s4 = 0; s4 < this._objects.length; s4++) e5.push("		", this._objects[s4].toSVG(t3));
    return e5.push("</g>\n"), e5;
  }
  getSvgStyles() {
    const t3 = void 0 !== this.opacity && 1 !== this.opacity ? `opacity: ${this.opacity};` : "", e5 = this.visible ? "" : " visibility: hidden;";
    return [
      t3,
      this.getSvgFilter(),
      e5
    ].join("");
  }
  toClipPathSVG(t3) {
    const e5 = [], s3 = this._createSVGBgRect(t3);
    s3 && e5.push("	", s3);
    for (let s4 = 0; s4 < this._objects.length; s4++) e5.push("	", this._objects[s4].toClipPathSVG(t3));
    return this._createBaseClipPathSVGMarkup(e5, {
      reviver: t3
    });
  }
  static fromObject(t3, e5) {
    let { type: s3, objects: i3 = [], layoutManager: r3, ...n3 } = t3;
    return Promise.all([
      Rt(i3, e5),
      $t(n3, e5)
    ]).then((t4) => {
      let [e6, s4] = t4;
      const i4 = new this(e6, {
        ...n3,
        ...s4,
        layoutManager: new Sr()
      });
      if (r3) {
        const t5 = tt.getClass(r3.type), e7 = tt.getClass(r3.strategy);
        i4.layoutManager = new t5(new e7());
      } else i4.layoutManager = new Cr();
      return i4.layoutManager.subscribeTargets({
        type: gr,
        target: i4,
        targets: i4.getObjects()
      }), i4.setCoords(), i4;
    });
  }
};
t(br, "type", "Group"), t(br, "ownDefaults", {
  strokeWidth: 0,
  subTargetCheck: false,
  interactive: false
}), tt.setClass(br);
var wr = (t3, e5) => Math.min(e5.width / t3.width, e5.height / t3.height);
var Tr = (t3, e5) => Math.max(e5.width / t3.width, e5.height / t3.height);
var Or = "\\s*,?\\s*";
var kr = `${Or}(${cs})`;
var Dr = `${kr}${kr}${kr}${Or}([01])${Or}([01])${kr}${kr}`;
var Mr = {
  m: "l",
  M: "L"
};
var Pr = (t3, e5, s3, i3, r3, n3, o3, a3, h3, l3, c2) => {
  const u3 = rt(t3), d3 = nt(t3), g3 = rt(e5), f3 = nt(e5), p3 = s3 * r3 * g3 - i3 * n3 * f3 + o3, m3 = i3 * r3 * g3 + s3 * n3 * f3 + a3;
  return [
    "C",
    l3 + h3 * (-s3 * r3 * d3 - i3 * n3 * u3),
    c2 + h3 * (-i3 * r3 * d3 + s3 * n3 * u3),
    p3 + h3 * (s3 * r3 * f3 + i3 * n3 * g3),
    m3 + h3 * (i3 * r3 * f3 - s3 * n3 * g3),
    p3,
    m3
  ];
};
var Er = (t3, e5, s3, i3) => {
  const r3 = Math.atan2(e5, t3), n3 = Math.atan2(i3, s3);
  return n3 >= r3 ? n3 - r3 : 2 * Math.PI - (r3 - n3);
};
function Ar(t3, e5, i3, r3, n3, o3, a3, h3) {
  let l3;
  if (s.cachesBoundsOfCurve && (l3 = [
    ...arguments
  ].join(), p.boundsOfCurveCache[l3])) return p.boundsOfCurveCache[l3];
  const c2 = Math.sqrt, u3 = Math.abs, d3 = [], g3 = [
    [
      0,
      0
    ],
    [
      0,
      0
    ]
  ];
  let f3 = 6 * t3 - 12 * i3 + 6 * n3, m3 = -3 * t3 + 9 * i3 - 9 * n3 + 3 * a3, v3 = 3 * i3 - 3 * t3;
  for (let t4 = 0; t4 < 2; ++t4) {
    if (t4 > 0 && (f3 = 6 * e5 - 12 * r3 + 6 * o3, m3 = -3 * e5 + 9 * r3 - 9 * o3 + 3 * h3, v3 = 3 * r3 - 3 * e5), u3(m3) < 1e-12) {
      if (u3(f3) < 1e-12) continue;
      const t5 = -v3 / f3;
      0 < t5 && t5 < 1 && d3.push(t5);
      continue;
    }
    const s3 = f3 * f3 - 4 * v3 * m3;
    if (s3 < 0) continue;
    const i4 = c2(s3), n4 = (-f3 + i4) / (2 * m3);
    0 < n4 && n4 < 1 && d3.push(n4);
    const a4 = (-f3 - i4) / (2 * m3);
    0 < a4 && a4 < 1 && d3.push(a4);
  }
  let y3 = d3.length;
  const _3 = y3, x3 = Ir(t3, e5, i3, r3, n3, o3, a3, h3);
  for (; y3--; ) {
    const { x: t4, y: e6 } = x3(d3[y3]);
    g3[0][y3] = t4, g3[1][y3] = e6;
  }
  g3[0][_3] = t3, g3[1][_3] = e5, g3[0][_3 + 1] = a3, g3[1][_3 + 1] = h3;
  const C3 = [
    new ot(Math.min(...g3[0]), Math.min(...g3[1])),
    new ot(Math.max(...g3[0]), Math.max(...g3[1]))
  ];
  return s.cachesBoundsOfCurve && (p.boundsOfCurveCache[l3] = C3), C3;
}
var jr = (t3, e5, s3) => {
  let [i3, r3, n3, o3, a3, h3, l3, c2] = s3;
  const u3 = ((t4, e6, s4, i4, r4, n4, o4) => {
    if (0 === s4 || 0 === i4) return [];
    let a4 = 0, h4 = 0, l4 = 0;
    const c3 = Math.PI, u4 = o4 * C, d3 = nt(u4), g3 = rt(u4), f3 = 0.5 * (-g3 * t4 - d3 * e6), p3 = 0.5 * (-g3 * e6 + d3 * t4), m3 = s4 ** 2, v3 = i4 ** 2, y3 = p3 ** 2, _3 = f3 ** 2, x3 = m3 * v3 - m3 * y3 - v3 * _3;
    let S3 = Math.abs(s4), b3 = Math.abs(i4);
    if (x3 < 0) {
      const t5 = Math.sqrt(1 - x3 / (m3 * v3));
      S3 *= t5, b3 *= t5;
    } else l4 = (r4 === n4 ? -1 : 1) * Math.sqrt(x3 / (m3 * y3 + v3 * _3));
    const w3 = l4 * S3 * p3 / b3, T2 = -l4 * b3 * f3 / S3, O2 = g3 * w3 - d3 * T2 + 0.5 * t4, k3 = d3 * w3 + g3 * T2 + 0.5 * e6;
    let D2 = Er(1, 0, (f3 - w3) / S3, (p3 - T2) / b3), M3 = Er((f3 - w3) / S3, (p3 - T2) / b3, (-f3 - w3) / S3, (-p3 - T2) / b3);
    0 === n4 && M3 > 0 ? M3 -= 2 * c3 : 1 === n4 && M3 < 0 && (M3 += 2 * c3);
    const P2 = Math.ceil(Math.abs(M3 / c3 * 2)), E2 = [], A3 = M3 / P2, j2 = 8 / 3 * Math.sin(A3 / 4) * Math.sin(A3 / 4) / Math.sin(A3 / 2);
    let F3 = D2 + A3;
    for (let t5 = 0; t5 < P2; t5++) E2[t5] = Pr(D2, F3, g3, d3, S3, b3, O2, k3, j2, a4, h4), a4 = E2[t5][5], h4 = E2[t5][6], D2 = F3, F3 += A3;
    return E2;
  })(l3 - t3, c2 - e5, r3, n3, a3, h3, o3);
  for (let s4 = 0, i4 = u3.length; s4 < i4; s4++) u3[s4][1] += t3, u3[s4][2] += e5, u3[s4][3] += t3, u3[s4][4] += e5, u3[s4][5] += t3, u3[s4][6] += e5;
  return u3;
};
var Fr = (t3) => {
  let e5 = 0, s3 = 0, i3 = 0, r3 = 0;
  const n3 = [];
  let o3, a3 = 0, h3 = 0;
  for (const l3 of t3) {
    const t4 = [
      ...l3
    ];
    let c2;
    switch (t4[0]) {
      case "l":
        t4[1] += e5, t4[2] += s3;
      case "L":
        e5 = t4[1], s3 = t4[2], c2 = [
          "L",
          e5,
          s3
        ];
        break;
      case "h":
        t4[1] += e5;
      case "H":
        e5 = t4[1], c2 = [
          "L",
          e5,
          s3
        ];
        break;
      case "v":
        t4[1] += s3;
      case "V":
        s3 = t4[1], c2 = [
          "L",
          e5,
          s3
        ];
        break;
      case "m":
        t4[1] += e5, t4[2] += s3;
      case "M":
        e5 = t4[1], s3 = t4[2], i3 = t4[1], r3 = t4[2], c2 = [
          "M",
          e5,
          s3
        ];
        break;
      case "c":
        t4[1] += e5, t4[2] += s3, t4[3] += e5, t4[4] += s3, t4[5] += e5, t4[6] += s3;
      case "C":
        a3 = t4[3], h3 = t4[4], e5 = t4[5], s3 = t4[6], c2 = [
          "C",
          t4[1],
          t4[2],
          a3,
          h3,
          e5,
          s3
        ];
        break;
      case "s":
        t4[1] += e5, t4[2] += s3, t4[3] += e5, t4[4] += s3;
      case "S":
        "C" === o3 ? (a3 = 2 * e5 - a3, h3 = 2 * s3 - h3) : (a3 = e5, h3 = s3), e5 = t4[3], s3 = t4[4], c2 = [
          "C",
          a3,
          h3,
          t4[1],
          t4[2],
          e5,
          s3
        ], a3 = c2[3], h3 = c2[4];
        break;
      case "q":
        t4[1] += e5, t4[2] += s3, t4[3] += e5, t4[4] += s3;
      case "Q":
        a3 = t4[1], h3 = t4[2], e5 = t4[3], s3 = t4[4], c2 = [
          "Q",
          a3,
          h3,
          e5,
          s3
        ];
        break;
      case "t":
        t4[1] += e5, t4[2] += s3;
      case "T":
        "Q" === o3 ? (a3 = 2 * e5 - a3, h3 = 2 * s3 - h3) : (a3 = e5, h3 = s3), e5 = t4[1], s3 = t4[2], c2 = [
          "Q",
          a3,
          h3,
          e5,
          s3
        ];
        break;
      case "a":
        t4[6] += e5, t4[7] += s3;
      case "A":
        jr(e5, s3, t4).forEach((t5) => n3.push(t5)), e5 = t4[6], s3 = t4[7];
        break;
      case "z":
      case "Z":
        e5 = i3, s3 = r3, c2 = [
          "Z"
        ];
    }
    c2 ? (n3.push(c2), o3 = c2[0]) : o3 = "";
  }
  return n3;
};
var Lr = (t3, e5, s3, i3) => Math.sqrt((s3 - t3) ** 2 + (i3 - e5) ** 2);
var Ir = (t3, e5, s3, i3, r3, n3, o3, a3) => (h3) => {
  const l3 = h3 ** 3, c2 = ((t4) => 3 * t4 ** 2 * (1 - t4))(h3), u3 = ((t4) => 3 * t4 * (1 - t4) ** 2)(h3), d3 = ((t4) => (1 - t4) ** 3)(h3);
  return new ot(o3 * l3 + r3 * c2 + s3 * u3 + t3 * d3, a3 * l3 + n3 * c2 + i3 * u3 + e5 * d3);
};
var Br = (t3) => t3 ** 2;
var Rr = (t3) => 2 * t3 * (1 - t3);
var $r = (t3) => (1 - t3) ** 2;
var Xr = (t3, e5, s3, i3, r3, n3, o3, a3) => (h3) => {
  const l3 = Br(h3), c2 = Rr(h3), u3 = $r(h3), d3 = 3 * (u3 * (s3 - t3) + c2 * (r3 - s3) + l3 * (o3 - r3)), g3 = 3 * (u3 * (i3 - e5) + c2 * (n3 - i3) + l3 * (a3 - n3));
  return Math.atan2(g3, d3);
};
var Yr = (t3, e5, s3, i3, r3, n3) => (o3) => {
  const a3 = Br(o3), h3 = Rr(o3), l3 = $r(o3);
  return new ot(r3 * a3 + s3 * h3 + t3 * l3, n3 * a3 + i3 * h3 + e5 * l3);
};
var Wr = (t3, e5, s3, i3, r3, n3) => (o3) => {
  const a3 = 1 - o3, h3 = 2 * (a3 * (s3 - t3) + o3 * (r3 - s3)), l3 = 2 * (a3 * (i3 - e5) + o3 * (n3 - i3));
  return Math.atan2(l3, h3);
};
var Vr = (t3, e5, s3) => {
  let i3 = new ot(e5, s3), r3 = 0;
  for (let e6 = 1; e6 <= 100; e6 += 1) {
    const s4 = t3(e6 / 100);
    r3 += Lr(i3.x, i3.y, s4.x, s4.y), i3 = s4;
  }
  return r3;
};
var Gr = (t3, e5) => {
  let s3, i3 = 0, r3 = 0, n3 = {
    x: t3.x,
    y: t3.y
  }, o3 = {
    ...n3
  }, a3 = 0.01, h3 = 0;
  const l3 = t3.iterator, c2 = t3.angleFinder;
  for (; r3 < e5 && a3 > 1e-4; ) o3 = l3(i3), h3 = i3, s3 = Lr(n3.x, n3.y, o3.x, o3.y), s3 + r3 > e5 ? (i3 -= a3, a3 /= 2) : (n3 = o3, i3 += a3, r3 += s3);
  return {
    ...o3,
    angle: c2(h3)
  };
};
var zr = (t3) => {
  let e5, s3, i3 = 0, r3 = 0, n3 = 0, o3 = 0, a3 = 0;
  const h3 = [];
  for (const l3 of t3) {
    const t4 = {
      x: r3,
      y: n3,
      command: l3[0],
      length: 0
    };
    switch (l3[0]) {
      case "M":
        s3 = t4, s3.x = o3 = r3 = l3[1], s3.y = a3 = n3 = l3[2];
        break;
      case "L":
        s3 = t4, s3.length = Lr(r3, n3, l3[1], l3[2]), r3 = l3[1], n3 = l3[2];
        break;
      case "C":
        e5 = Ir(r3, n3, l3[1], l3[2], l3[3], l3[4], l3[5], l3[6]), s3 = t4, s3.iterator = e5, s3.angleFinder = Xr(r3, n3, l3[1], l3[2], l3[3], l3[4], l3[5], l3[6]), s3.length = Vr(e5, r3, n3), r3 = l3[5], n3 = l3[6];
        break;
      case "Q":
        e5 = Yr(r3, n3, l3[1], l3[2], l3[3], l3[4]), s3 = t4, s3.iterator = e5, s3.angleFinder = Wr(r3, n3, l3[1], l3[2], l3[3], l3[4]), s3.length = Vr(e5, r3, n3), r3 = l3[3], n3 = l3[4];
        break;
      case "Z":
        s3 = t4, s3.destX = o3, s3.destY = a3, s3.length = Lr(r3, n3, o3, a3), r3 = o3, n3 = a3;
    }
    i3 += s3.length, h3.push(s3);
  }
  return h3.push({
    length: i3,
    x: r3,
    y: n3
  }), h3;
};
var Hr = function(t3, e5) {
  let s3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zr(t3), i3 = 0;
  for (; e5 - s3[i3].length > 0 && i3 < s3.length - 2; ) e5 -= s3[i3].length, i3++;
  const r3 = s3[i3], n3 = e5 / r3.length, o3 = t3[i3];
  switch (r3.command) {
    case "M":
      return {
        x: r3.x,
        y: r3.y,
        angle: 0
      };
    case "Z":
      return {
        ...new ot(r3.x, r3.y).lerp(new ot(r3.destX, r3.destY), n3),
        angle: Math.atan2(r3.destY - r3.y, r3.destX - r3.x)
      };
    case "L":
      return {
        ...new ot(r3.x, r3.y).lerp(new ot(o3[1], o3[2]), n3),
        angle: Math.atan2(o3[2] - r3.y, o3[1] - r3.x)
      };
    case "C":
    case "Q":
      return Gr(r3, e5);
  }
};
var Nr = new RegExp("[mzlhvcsqta][^mzlhvcsqta]*", "gi");
var Ur = new RegExp(Dr, "g");
var qr = new RegExp(cs, "gi");
var Kr = {
  m: 2,
  l: 2,
  h: 1,
  v: 1,
  c: 6,
  s: 4,
  q: 4,
  t: 2,
  a: 7
};
var Jr = (t3) => {
  var e5;
  const s3 = [], i3 = null !== (e5 = t3.match(Nr)) && void 0 !== e5 ? e5 : [];
  for (const t4 of i3) {
    const e6 = t4[0];
    if ("z" === e6 || "Z" === e6) {
      s3.push([
        e6
      ]);
      continue;
    }
    const i4 = Kr[e6.toLowerCase()];
    let r3 = [];
    if ("a" === e6 || "A" === e6) {
      Ur.lastIndex = 0;
      for (let e7 = null; e7 = Ur.exec(t4); ) r3.push(...e7.slice(1));
    } else r3 = t4.match(qr) || [];
    for (let t5 = 0; t5 < r3.length; t5 += i4) {
      const n3 = new Array(i4), o3 = Mr[e6];
      n3[0] = t5 > 0 && o3 ? o3 : e6;
      for (let e7 = 0; e7 < i4; e7++) n3[e7 + 1] = parseFloat(r3[t5 + e7]);
      s3.push(n3);
    }
  }
  return s3;
};
var Qr = function(t3) {
  let e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, s3 = new ot(t3[0]), i3 = new ot(t3[1]), r3 = 1, n3 = 0;
  const o3 = [], a3 = t3.length, h3 = a3 > 2;
  let l3;
  for (h3 && (r3 = t3[2].x < i3.x ? -1 : t3[2].x === i3.x ? 0 : 1, n3 = t3[2].y < i3.y ? -1 : t3[2].y === i3.y ? 0 : 1), o3.push([
    "M",
    s3.x - r3 * e5,
    s3.y - n3 * e5
  ]), l3 = 1; l3 < a3; l3++) {
    if (!s3.eq(i3)) {
      const t4 = s3.midPointFrom(i3);
      o3.push([
        "Q",
        s3.x,
        s3.y,
        t4.x,
        t4.y
      ]);
    }
    s3 = t3[l3], l3 + 1 < t3.length && (i3 = t3[l3 + 1]);
  }
  return h3 && (r3 = s3.x > t3[l3 - 2].x ? 1 : s3.x === t3[l3 - 2].x ? 0 : -1, n3 = s3.y > t3[l3 - 2].y ? 1 : s3.y === t3[l3 - 2].y ? 0 : -1), o3.push([
    "L",
    s3.x + r3 * e5,
    s3.y + n3 * e5
  ]), o3;
};
var Zr = (t3, e5) => t3.map((t4) => t4.map((t5, s3) => 0 === s3 || void 0 === e5 ? t5 : Wt(t5, e5)).join(" ")).join(" ");
var tn = (t3, e5) => Math.floor(Math.random() * (e5 - t3 + 1)) + t3;
var en = (t3, e5) => {
  let s3 = t3._findCenterFromElement();
  t3.transformMatrix && (((t4) => {
    if (t4.transformMatrix) {
      const { scaleX: e6, scaleY: s4, angle: i3, skewX: r3 } = Dt(t4.transformMatrix);
      t4.flipX = false, t4.flipY = false, t4.set(W, e6), t4.set(V, s4), t4.angle = i3, t4.skewX = r3, t4.skewY = 0;
    }
  })(t3), s3 = s3.transform(t3.transformMatrix)), delete t3.transformMatrix, e5 && (t3.scaleX *= e5.scaleX, t3.scaleY *= e5.scaleY, t3.cropX = e5.cropX, t3.cropY = e5.cropY, s3.x += e5.offsetLeft, s3.y += e5.offsetTop, t3.width = e5.width, t3.height = e5.height), t3.setPositionByOrigin(s3, T, T);
};
var sn = Object.freeze({
  __proto__: null,
  addTransformToObject: he,
  animate: Ys,
  animateColor: Ws,
  applyTransformToObject: le,
  calcAngleBetweenVectors: Te,
  calcDimensionsMatrix: Lt,
  calcPlaneChangeMatrix: ge,
  calcVectorRotation: Oe,
  cancelAnimFrame: dt,
  capValue: ws,
  composeMatrix: It,
  copyCanvasElement: (t3) => {
    var e5;
    const s3 = vt(t3);
    return null === (e5 = s3.getContext("2d")) || void 0 === e5 || e5.drawImage(t3, 0, 0), s3;
  },
  cos: rt,
  createCanvasElement: pt,
  createImage: mt,
  createRotateMatrix: Pt,
  createScaleMatrix: Et,
  createSkewXMatrix: jt,
  createSkewYMatrix: Ft,
  createTranslateMatrix: Mt,
  createVector: be,
  crossProduct: Me,
  degreesToRadians: xt,
  dotProduct: Pe,
  ease: js,
  enlivenObjectEnlivables: $t,
  enlivenObjects: Rt,
  findScaleToCover: Tr,
  findScaleToFit: wr,
  getBoundsOfCurve: Ar,
  getOrthonormalVector: De,
  getPathSegmentsInfo: zr,
  getPointOnPath: Hr,
  getPointer: re,
  getRandomInt: tn,
  getRegularPolygonPath: (t3, e5) => {
    const s3 = 2 * Math.PI / t3;
    let i3 = -y;
    t3 % 2 == 0 && (i3 += s3 / 2);
    const r3 = new Array(t3 + 1);
    for (let n3 = 0; n3 < t3; n3++) {
      const t4 = n3 * s3 + i3, { x: o3, y: a3 } = new ot(rt(t4), nt(t4)).scalarMultiply(e5);
      r3[n3] = [
        0 === n3 ? "M" : "L",
        o3,
        a3
      ];
    }
    return r3[t3] = [
      "Z"
    ], r3;
  },
  getSmoothPathFromPoints: Qr,
  getSvgAttributes: (t3) => {
    const e5 = [
      "instantiated_by_use",
      "style",
      "id",
      "class"
    ];
    switch (t3) {
      case "linearGradient":
        return e5.concat([
          "x1",
          "y1",
          "x2",
          "y2",
          "gradientUnits",
          "gradientTransform"
        ]);
      case "radialGradient":
        return e5.concat([
          "gradientUnits",
          "gradientTransform",
          "cx",
          "cy",
          "r",
          "fx",
          "fy",
          "fr"
        ]);
      case "stop":
        return e5.concat([
          "offset",
          "stop-color",
          "stop-opacity"
        ]);
    }
    return e5;
  },
  getUnitVector: ke,
  groupSVGElements: (t3, e5) => t3 && 1 === t3.length ? t3[0] : new br(t3, e5),
  hasStyleChanged: Ri,
  invertTransform: wt,
  isBetweenVectors: Ee,
  isIdentityMatrix: St,
  isTouchEvent: ne,
  isTransparent: Ti,
  joinPath: Zr,
  loadImage: Bt,
  magnitude: we,
  makeBoundingBoxFromPoints: ae,
  makePathSimpler: Fr,
  matrixToSVG: Vt,
  mergeClipPaths: (t3, e5) => {
    var s3;
    let i3 = t3, r3 = e5;
    i3.inverted && !r3.inverted && (i3 = e5, r3 = t3), me(r3, null === (s3 = r3.group) || void 0 === s3 ? void 0 : s3.calcTransformMatrix(), i3.calcTransformMatrix());
    const n3 = i3.inverted && r3.inverted;
    return n3 && (i3.inverted = r3.inverted = false), new br([
      i3
    ], {
      clipPath: r3,
      inverted: n3
    });
  },
  multiplyTransformMatrices: Tt,
  multiplyTransformMatrixArray: Ot,
  parsePath: Jr,
  parsePreserveAspectRatioAttribute: qe,
  parseUnit: Ue,
  pick: Xt,
  projectStrokeOnPoints: Pi,
  qrDecompose: Dt,
  radiansToDegrees: Ct,
  removeFromArray: it,
  removeTransformFromObject: (t3, e5) => {
    const s3 = wt(e5), i3 = Tt(s3, t3.calcOwnMatrix());
    le(t3, i3);
  },
  removeTransformMatrixForSvgParsing: en,
  requestAnimFrame: ut,
  resetObjectTransform: ce,
  rotateVector: Se,
  saveObjectTransform: ue,
  sendObjectToPlane: me,
  sendPointToPlane: fe,
  sendVectorToPlane: pe,
  sin: nt,
  sizeAfterTransform: de,
  string: Bi,
  stylesFromArray: Xi,
  stylesToArray: $i,
  toBlob: _t,
  toDataURL: yt,
  toFixed: Wt,
  transformPath: (t3, e5, s3) => (s3 && (e5 = Tt(e5, [
    1,
    0,
    0,
    1,
    -s3.x,
    -s3.y
  ])), t3.map((t4) => {
    const s4 = [
      ...t4
    ];
    for (let i3 = 1; i3 < t4.length - 1; i3 += 2) {
      const { x: r3, y: n3 } = bt({
        x: t4[i3],
        y: t4[i3 + 1]
      }, e5);
      s4[i3] = r3, s4[i3 + 1] = n3;
    }
    return s4;
  })),
  transformPoint: bt
});
function rn(t3, e5) {
  const s3 = t3.style;
  s3 && Object.entries(e5).forEach((t4) => {
    let [e6, i3] = t4;
    return s3.setProperty(e6, i3);
  });
}
var nn = class extends te {
  constructor(e5) {
    let { allowTouchScrolling: s3 = false, containerClass: i3 = "" } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(e5), t(this, "upper", void 0), t(this, "container", void 0);
    const { el: r3 } = this.lower, n3 = this.createUpperCanvas();
    this.upper = {
      el: n3,
      ctx: n3.getContext("2d")
    }, this.applyCanvasStyle(r3, {
      allowTouchScrolling: s3
    }), this.applyCanvasStyle(n3, {
      allowTouchScrolling: s3,
      styles: {
        position: "absolute",
        left: "0",
        top: "0"
      }
    });
    const o3 = this.createContainerElement();
    o3.classList.add(i3), r3.parentNode && r3.parentNode.replaceChild(o3, r3), o3.append(r3, n3), this.container = o3;
  }
  createUpperCanvas() {
    const { el: t3 } = this.lower, e5 = pt();
    return e5.className = t3.className, e5.classList.remove("lower-canvas"), e5.classList.add("upper-canvas"), e5.setAttribute("data-fabric", "top"), e5.style.cssText = t3.style.cssText, e5.setAttribute("draggable", "true"), e5;
  }
  createContainerElement() {
    const t3 = d().createElement("div");
    return t3.setAttribute("data-fabric", "wrapper"), rn(t3, {
      position: "relative"
    }), Zt(t3), t3;
  }
  applyCanvasStyle(t3, e5) {
    const { styles: s3, allowTouchScrolling: i3 } = e5;
    rn(t3, {
      ...s3,
      "touch-action": i3 ? "manipulation" : P
    }), Zt(t3);
  }
  setDimensions(t3, e5) {
    super.setDimensions(t3, e5);
    const { el: s3, ctx: i3 } = this.upper;
    Jt(s3, i3, t3, e5);
  }
  setCSSDimensions(t3) {
    super.setCSSDimensions(t3), Qt(this.upper.el, t3), Qt(this.container, t3);
  }
  cleanupDOM(t3) {
    const e5 = this.container, { el: s3 } = this.lower, { el: i3 } = this.upper;
    super.cleanupDOM(t3), e5.removeChild(i3), e5.removeChild(s3), e5.parentNode && e5.parentNode.replaceChild(s3, e5);
  }
  dispose() {
    super.dispose(), u().dispose(this.upper.el), delete this.upper, delete this.container;
  }
};
var on = class _on extends se {
  constructor() {
    super(...arguments), t(this, "_hoveredTargets", []), t(this, "_currentTransform", null), t(this, "_groupSelector", null), t(this, "contextTopDirty", false);
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ..._on.ownDefaults
    };
  }
  get upperCanvasEl() {
    var t3;
    return null === (t3 = this.elements.upper) || void 0 === t3 ? void 0 : t3.el;
  }
  get contextTop() {
    var t3;
    return null === (t3 = this.elements.upper) || void 0 === t3 ? void 0 : t3.ctx;
  }
  get wrapperEl() {
    return this.elements.container;
  }
  initElements(t3) {
    this.elements = new nn(t3, {
      allowTouchScrolling: this.allowTouchScrolling,
      containerClass: this.containerClass
    }), this._createCacheCanvas();
  }
  _onObjectAdded(t3) {
    this._objectsToRender = void 0, super._onObjectAdded(t3);
  }
  _onObjectRemoved(t3) {
    this._objectsToRender = void 0, t3 === this._activeObject && (this.fire("before:selection:cleared", {
      deselected: [
        t3
      ]
    }), this._discardActiveObject(), this.fire("selection:cleared", {
      deselected: [
        t3
      ]
    }), t3.fire("deselected", {
      target: t3
    })), t3 === this._hoveredTarget && (this._hoveredTarget = void 0, this._hoveredTargets = []), super._onObjectRemoved(t3);
  }
  _onStackOrderChanged() {
    this._objectsToRender = void 0, super._onStackOrderChanged();
  }
  _chooseObjectsToRender() {
    const t3 = this._activeObject;
    return !this.preserveObjectStacking && t3 ? this._objects.filter((e5) => !e5.group && e5 !== t3).concat(t3) : this._objects;
  }
  renderAll() {
    this.cancelRequestedRender(), this.destroyed || (!this.contextTopDirty || this._groupSelector || this.isDrawingMode || (this.clearContext(this.contextTop), this.contextTopDirty = false), this.hasLostContext && (this.renderTopLayer(this.contextTop), this.hasLostContext = false), !this._objectsToRender && (this._objectsToRender = this._chooseObjectsToRender()), this.renderCanvas(this.getContext(), this._objectsToRender));
  }
  renderTopLayer(t3) {
    t3.save(), this.isDrawingMode && this._isCurrentlyDrawing && (this.freeDrawingBrush && this.freeDrawingBrush._render(), this.contextTopDirty = true), this.selection && this._groupSelector && (this._drawSelection(t3), this.contextTopDirty = true), t3.restore();
  }
  renderTop() {
    const t3 = this.contextTop;
    this.clearContext(t3), this.renderTopLayer(t3), this.fire("after:render", {
      ctx: t3
    });
  }
  setTargetFindTolerance(t3) {
    t3 = Math.round(t3), this.targetFindTolerance = t3;
    const e5 = this.getRetinaScaling(), s3 = Math.ceil((2 * t3 + 1) * e5);
    this.pixelFindCanvasEl.width = this.pixelFindCanvasEl.height = s3, this.pixelFindContext.scale(e5, e5);
  }
  isTargetTransparent(t3, e5, s3) {
    const i3 = this.targetFindTolerance, r3 = this.pixelFindContext;
    this.clearContext(r3), r3.save(), r3.translate(-e5 + i3, -s3 + i3), r3.transform(...this.viewportTransform);
    const n3 = t3.selectionBackgroundColor;
    t3.selectionBackgroundColor = "", t3.render(r3), t3.selectionBackgroundColor = n3, r3.restore();
    const o3 = Math.round(i3 * this.getRetinaScaling());
    return Ti(r3, o3, o3, o3);
  }
  _isSelectionKeyPressed(t3) {
    const e5 = this.selectionKey;
    return !!e5 && (Array.isArray(e5) ? !!e5.find((e6) => !!e6 && true === t3[e6]) : t3[e5]);
  }
  _shouldClearSelection(t3, e5) {
    const s3 = this.getActiveObjects(), i3 = this._activeObject;
    return !!(!e5 || e5 && i3 && s3.length > 1 && -1 === s3.indexOf(e5) && i3 !== e5 && !this._isSelectionKeyPressed(t3) || e5 && !e5.evented || e5 && !e5.selectable && i3 && i3 !== e5);
  }
  _shouldCenterTransform(t3, e5, s3) {
    if (!t3) return;
    let i3;
    return e5 === Y || e5 === W || e5 === V || e5 === B ? i3 = this.centeredScaling || t3.centeredScaling : e5 === L && (i3 = this.centeredRotation || t3.centeredRotation), i3 ? !s3 : s3;
  }
  _getOriginFromCorner(t3, e5) {
    const s3 = {
      x: t3.originX,
      y: t3.originY
    };
    return e5 ? ([
      "ml",
      "tl",
      "bl"
    ].includes(e5) ? s3.x = M : [
      "mr",
      "tr",
      "br"
    ].includes(e5) && (s3.x = O), [
      "tl",
      "mt",
      "tr"
    ].includes(e5) ? s3.y = D : [
      "bl",
      "mb",
      "br"
    ].includes(e5) && (s3.y = k), s3) : s3;
  }
  _setupCurrentTransform(t3, e5, s3) {
    var i3;
    const r3 = e5.group ? fe(this.getScenePoint(t3), void 0, e5.group.calcTransformMatrix()) : this.getScenePoint(t3), { key: n3 = "", control: o3 } = e5.getActiveControl() || {}, a3 = s3 && o3 ? null === (i3 = o3.getActionHandler(t3, e5, o3)) || void 0 === i3 ? void 0 : i3.bind(o3) : $e, h3 = ((t4, e6, s4, i4) => {
      if (!e6 || !t4) return "drag";
      const r4 = i4.controls[e6];
      return r4.getActionName(s4, r4, i4);
    })(s3, n3, t3, e5), l3 = t3[this.centeredKey], c2 = this._shouldCenterTransform(e5, h3, l3) ? {
      x: T,
      y: T
    } : this._getOriginFromCorner(e5, n3), u3 = {
      target: e5,
      action: h3,
      actionHandler: a3,
      actionPerformed: false,
      corner: n3,
      scaleX: e5.scaleX,
      scaleY: e5.scaleY,
      skewX: e5.skewX,
      skewY: e5.skewY,
      offsetX: r3.x - e5.left,
      offsetY: r3.y - e5.top,
      originX: c2.x,
      originY: c2.y,
      ex: r3.x,
      ey: r3.y,
      lastX: r3.x,
      lastY: r3.y,
      theta: xt(e5.angle),
      width: e5.width,
      height: e5.height,
      shiftKey: t3.shiftKey,
      altKey: l3,
      original: {
        ...ue(e5),
        originX: c2.x,
        originY: c2.y
      }
    };
    this._currentTransform = u3, this.fire("before:transform", {
      e: t3,
      transform: u3
    });
  }
  setCursor(t3) {
    this.upperCanvasEl.style.cursor = t3;
  }
  _drawSelection(t3) {
    const { x: e5, y: s3, deltaX: i3, deltaY: r3 } = this._groupSelector, n3 = new ot(e5, s3).transform(this.viewportTransform), o3 = new ot(e5 + i3, s3 + r3).transform(this.viewportTransform), a3 = this.selectionLineWidth / 2;
    let h3 = Math.min(n3.x, o3.x), l3 = Math.min(n3.y, o3.y), c2 = Math.max(n3.x, o3.x), u3 = Math.max(n3.y, o3.y);
    this.selectionColor && (t3.fillStyle = this.selectionColor, t3.fillRect(h3, l3, c2 - h3, u3 - l3)), this.selectionLineWidth && this.selectionBorderColor && (t3.lineWidth = this.selectionLineWidth, t3.strokeStyle = this.selectionBorderColor, h3 += a3, l3 += a3, c2 -= a3, u3 -= a3, wi.prototype._setLineDash.call(this, t3, this.selectionDashArray), t3.strokeRect(h3, l3, c2 - h3, u3 - l3));
  }
  findTarget(t3) {
    if (this._targetInfo) return this._targetInfo;
    if (this.skipTargetFind) return {
      subTargets: [],
      currentSubTargets: []
    };
    const e5 = this.getScenePoint(t3), s3 = this._activeObject, i3 = this.getActiveObjects(), r3 = this.searchPossibleTargets(this._objects, e5), { subTargets: n3, container: o3, target: a3 } = r3, h3 = {
      ...r3,
      currentSubTargets: n3,
      currentContainer: o3,
      currentTarget: a3
    };
    if (!s3) return h3;
    const l3 = {
      ...this.searchPossibleTargets([
        s3
      ], e5),
      currentSubTargets: n3,
      currentContainer: o3,
      currentTarget: a3
    };
    if (s3.findControl(this.getViewportPoint(t3), ne(t3))) return {
      ...l3,
      target: s3
    };
    if (l3.target) {
      if (i3.length > 1) return l3;
      if (!this.preserveObjectStacking) return l3;
      if (this.preserveObjectStacking && t3[this.altSelectionKey]) return l3;
    }
    return h3;
  }
  _pointIsInObjectSelectionArea(t3, e5) {
    let s3 = t3.getCoords();
    const i3 = this.getZoom(), r3 = t3.padding / i3;
    if (r3) {
      const [t4, e6, i4, n3] = s3, o3 = Math.atan2(e6.y - t4.y, e6.x - t4.x), a3 = rt(o3) * r3, h3 = nt(o3) * r3, l3 = a3 + h3, c2 = a3 - h3;
      s3 = [
        new ot(t4.x - c2, t4.y - l3),
        new ot(e6.x + l3, e6.y - c2),
        new ot(i4.x + c2, i4.y + l3),
        new ot(n3.x - l3, n3.y + c2)
      ];
    }
    return Vs.isPointInPolygon(e5, s3);
  }
  _checkTarget(t3, e5) {
    if (t3 && t3.visible && t3.evented && this._pointIsInObjectSelectionArea(t3, e5)) {
      if (!this.perPixelTargetFind && !t3.perPixelTargetFind || t3.isEditing) return true;
      {
        const s3 = e5.transform(this.viewportTransform);
        if (!this.isTargetTransparent(t3, s3.x, s3.y)) return true;
      }
    }
    return false;
  }
  _searchPossibleTargets(t3, e5, s3) {
    let i3 = t3.length;
    for (; i3--; ) {
      const r3 = t3[i3];
      if (this._checkTarget(r3, e5)) {
        if (ht(r3) && r3.subTargetCheck) {
          const { target: t4 } = this._searchPossibleTargets(r3._objects, e5, s3);
          t4 && s3.push(t4);
        }
        return {
          target: r3,
          subTargets: s3
        };
      }
    }
    return {
      subTargets: []
    };
  }
  searchPossibleTargets(t3, e5) {
    const s3 = this._searchPossibleTargets(t3, e5, []);
    s3.container = s3.target;
    const { container: i3, subTargets: r3 } = s3;
    if (i3 && ht(i3) && i3.interactive && r3[0]) {
      for (let t4 = r3.length - 1; t4 > 0; t4--) {
        const e6 = r3[t4];
        if (!ht(e6) || !e6.interactive) return s3.target = e6, s3;
      }
      return s3.target = r3[0], s3;
    }
    return s3;
  }
  getViewportPoint(t3) {
    return this._viewportPoint ? this._viewportPoint : this._getPointerImpl(t3, true);
  }
  getScenePoint(t3) {
    return this._scenePoint ? this._scenePoint : this._getPointerImpl(t3);
  }
  _getPointerImpl(t3) {
    let e5 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    const s3 = this.upperCanvasEl, i3 = s3.getBoundingClientRect();
    let r3 = re(t3), n3 = i3.width || 0, o3 = i3.height || 0;
    n3 && o3 || (k in i3 && D in i3 && (o3 = Math.abs(i3.top - i3.bottom)), M in i3 && O in i3 && (n3 = Math.abs(i3.right - i3.left))), this.calcOffset(), r3.x = r3.x - this._offset.left, r3.y = r3.y - this._offset.top, e5 || (r3 = fe(r3, void 0, this.viewportTransform));
    const a3 = this.getRetinaScaling();
    1 !== a3 && (r3.x /= a3, r3.y /= a3);
    const h3 = 0 === n3 || 0 === o3 ? new ot(1, 1) : new ot(s3.width / n3, s3.height / o3);
    return r3.multiply(h3);
  }
  _setDimensionsImpl(t3, e5) {
    this._resetTransformEventData(), super._setDimensionsImpl(t3, e5), this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles(this.contextTop);
  }
  _createCacheCanvas() {
    this.pixelFindCanvasEl = pt(), this.pixelFindContext = this.pixelFindCanvasEl.getContext("2d", {
      willReadFrequently: true
    }), this.setTargetFindTolerance(this.targetFindTolerance);
  }
  getTopContext() {
    return this.elements.upper.ctx;
  }
  getSelectionContext() {
    return this.elements.upper.ctx;
  }
  getSelectionElement() {
    return this.elements.upper.el;
  }
  getActiveObject() {
    return this._activeObject;
  }
  getActiveObjects() {
    const t3 = this._activeObject;
    return Nt(t3) ? t3.getObjects() : t3 ? [
      t3
    ] : [];
  }
  _fireSelectionEvents(t3, e5) {
    let s3 = false, i3 = false;
    const r3 = this.getActiveObjects(), n3 = [], o3 = [];
    t3.forEach((t4) => {
      r3.includes(t4) || (s3 = true, t4.fire("deselected", {
        e: e5,
        target: t4
      }), o3.push(t4));
    }), r3.forEach((i4) => {
      t3.includes(i4) || (s3 = true, i4.fire("selected", {
        e: e5,
        target: i4
      }), n3.push(i4));
    }), t3.length > 0 && r3.length > 0 ? (i3 = true, s3 && this.fire("selection:updated", {
      e: e5,
      selected: n3,
      deselected: o3
    })) : r3.length > 0 ? (i3 = true, this.fire("selection:created", {
      e: e5,
      selected: n3
    })) : t3.length > 0 && (i3 = true, this.fire("selection:cleared", {
      e: e5,
      deselected: o3
    })), i3 && (this._objectsToRender = void 0);
  }
  setActiveObject(t3, e5) {
    const s3 = this.getActiveObjects(), i3 = this._setActiveObject(t3, e5);
    return this._fireSelectionEvents(s3, e5), i3;
  }
  _setActiveObject(t3, e5) {
    const s3 = this._activeObject;
    return s3 !== t3 && (!(!this._discardActiveObject(e5, t3) && this._activeObject) && (!t3.onSelect({
      e: e5
    }) && (this._activeObject = t3, Nt(t3) && s3 !== t3 && t3.set("canvas", this), t3.setCoords(), true)));
  }
  _discardActiveObject(t3, e5) {
    const s3 = this._activeObject;
    return !!s3 && (!s3.onDeselect({
      e: t3,
      object: e5
    }) && (this._currentTransform && this._currentTransform.target === s3 && this.endCurrentTransform(t3), Nt(s3) && s3 === this._hoveredTarget && (this._hoveredTarget = void 0), this._activeObject = void 0, true));
  }
  discardActiveObject(t3) {
    const e5 = this.getActiveObjects(), s3 = this.getActiveObject();
    e5.length && this.fire("before:selection:cleared", {
      e: t3,
      deselected: [
        s3
      ]
    });
    const i3 = this._discardActiveObject(t3);
    return this._fireSelectionEvents(e5, t3), i3;
  }
  endCurrentTransform(t3) {
    const e5 = this._currentTransform;
    this._finalizeCurrentTransform(t3), e5 && e5.target && (e5.target.isMoving = false), this._currentTransform = null;
  }
  _finalizeCurrentTransform(t3) {
    const e5 = this._currentTransform, s3 = e5.target, i3 = {
      e: t3,
      target: s3,
      transform: e5,
      action: e5.action
    };
    s3._scaling && (s3._scaling = false), s3.setCoords(), e5.actionPerformed && (this.fire("object:modified", i3), s3.fire(U, i3));
  }
  setViewportTransform(t3) {
    super.setViewportTransform(t3);
    const e5 = this._activeObject;
    e5 && e5.setCoords();
  }
  destroy() {
    const t3 = this._activeObject;
    Nt(t3) && (t3.removeAll(), t3.dispose()), delete this._activeObject, super.destroy(), this.pixelFindContext = null, this.pixelFindCanvasEl = void 0;
  }
  clear() {
    this.discardActiveObject(), this._activeObject = void 0, this.clearContext(this.contextTop), super.clear();
  }
  drawControls(t3) {
    const e5 = this._activeObject;
    e5 && e5._renderControls(t3);
  }
  _toObject(t3, e5, s3) {
    const i3 = this._realizeGroupTransformOnObject(t3), r3 = super._toObject(t3, e5, s3);
    return t3.set(i3), r3;
  }
  _realizeGroupTransformOnObject(t3) {
    const { group: e5 } = t3;
    if (e5 && Nt(e5) && this._activeObject === e5) {
      const s3 = Xt(t3, [
        "angle",
        "flipX",
        "flipY",
        O,
        W,
        V,
        G,
        z,
        k
      ]);
      return he(t3, e5.calcOwnMatrix()), s3;
    }
    return {};
  }
  _setSVGObject(t3, e5, s3) {
    const i3 = this._realizeGroupTransformOnObject(e5);
    super._setSVGObject(t3, e5, s3), e5.set(i3);
  }
};
t(on, "ownDefaults", {
  uniformScaling: true,
  uniScaleKey: "shiftKey",
  centeredScaling: false,
  centeredRotation: false,
  centeredKey: "altKey",
  altActionKey: "shiftKey",
  selection: true,
  selectionKey: "shiftKey",
  selectionColor: "rgba(100, 100, 255, 0.3)",
  selectionDashArray: [],
  selectionBorderColor: "rgba(255, 255, 255, 0.3)",
  selectionLineWidth: 1,
  selectionFullyContained: false,
  hoverCursor: "move",
  moveCursor: "move",
  defaultCursor: "default",
  freeDrawingCursor: "crosshair",
  notAllowedCursor: "not-allowed",
  perPixelTargetFind: false,
  targetFindTolerance: 0,
  skipTargetFind: false,
  stopContextMenu: true,
  fireRightClick: true,
  fireMiddleClick: true,
  enablePointerEvents: false,
  containerClass: "canvas-container",
  preserveObjectStacking: true
});
var an = class {
  constructor(e5) {
    t(this, "targets", []), t(this, "__disposer", void 0);
    const s3 = () => {
      const { hiddenTextarea: t3 } = e5.getActiveObject() || {};
      t3 && t3.focus();
    }, i3 = e5.upperCanvasEl;
    i3.addEventListener("click", s3), this.__disposer = () => i3.removeEventListener("click", s3);
  }
  exitTextEditing() {
    this.target = void 0, this.targets.forEach((t3) => {
      t3.isEditing && t3.exitEditing();
    });
  }
  add(t3) {
    this.targets.push(t3);
  }
  remove(t3) {
    this.unregister(t3), it(this.targets, t3);
  }
  register(t3) {
    this.target = t3;
  }
  unregister(t3) {
    t3 === this.target && (this.target = void 0);
  }
  onMouseMove(t3) {
    var e5;
    (null === (e5 = this.target) || void 0 === e5 ? void 0 : e5.isEditing) && this.target.updateSelectionOnMouseMove(t3);
  }
  clear() {
    this.targets = [], this.target = void 0;
  }
  dispose() {
    this.clear(), this.__disposer(), delete this.__disposer;
  }
};
var hn = {
  passive: false
};
var ln = (t3, e5) => ({
  viewportPoint: t3.getViewportPoint(e5),
  scenePoint: t3.getScenePoint(e5)
});
var cn = function(t3) {
  for (var e5 = arguments.length, s3 = new Array(e5 > 1 ? e5 - 1 : 0), i3 = 1; i3 < e5; i3++) s3[i3 - 1] = arguments[i3];
  return t3.addEventListener(...s3);
};
var un = function(t3) {
  for (var e5 = arguments.length, s3 = new Array(e5 > 1 ? e5 - 1 : 0), i3 = 1; i3 < e5; i3++) s3[i3 - 1] = arguments[i3];
  return t3.removeEventListener(...s3);
};
var dn = {
  mouse: {
    in: "over",
    out: "out",
    targetIn: "mouseover",
    targetOut: "mouseout",
    canvasIn: "mouse:over",
    canvasOut: "mouse:out"
  },
  drag: {
    in: "enter",
    out: "leave",
    targetIn: "dragenter",
    targetOut: "dragleave",
    canvasIn: "drag:enter",
    canvasOut: "drag:leave"
  }
};
var gn = class extends on {
  constructor(e5) {
    super(e5, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), t(this, "_isClick", void 0), t(this, "textEditingManager", new an(this)), [
      "_onMouseDown",
      "_onTouchStart",
      "_onMouseMove",
      "_onMouseUp",
      "_onTouchEnd",
      "_onResize",
      "_onMouseWheel",
      "_onMouseOut",
      "_onMouseEnter",
      "_onContextMenu",
      "_onClick",
      "_onDragStart",
      "_onDragEnd",
      "_onDragProgress",
      "_onDragOver",
      "_onDragEnter",
      "_onDragLeave",
      "_onDrop"
    ].forEach((t3) => {
      this[t3] = this[t3].bind(this);
    }), this.addOrRemove(cn);
  }
  _getEventPrefix() {
    return this.enablePointerEvents ? "pointer" : "mouse";
  }
  addOrRemove(t3) {
    let e5 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    const s3 = this.upperCanvasEl, i3 = this._getEventPrefix();
    t3(Kt(s3), "resize", this._onResize), t3(s3, i3 + "down", this._onMouseDown), t3(s3, `${i3}move`, this._onMouseMove, hn), t3(s3, `${i3}out`, this._onMouseOut), t3(s3, `${i3}enter`, this._onMouseEnter), t3(s3, "wheel", this._onMouseWheel, {
      passive: false
    }), t3(s3, "contextmenu", this._onContextMenu), e5 || (t3(s3, "click", this._onClick), t3(s3, "dblclick", this._onClick)), t3(s3, "dragstart", this._onDragStart), t3(s3, "dragend", this._onDragEnd), t3(s3, "dragover", this._onDragOver), t3(s3, "dragenter", this._onDragEnter), t3(s3, "dragleave", this._onDragLeave), t3(s3, "drop", this._onDrop), this.enablePointerEvents || t3(s3, "touchstart", this._onTouchStart, hn);
  }
  removeListeners() {
    this.addOrRemove(un);
    const t3 = this._getEventPrefix(), e5 = qt(this.upperCanvasEl);
    un(e5, `${t3}up`, this._onMouseUp), un(e5, "touchend", this._onTouchEnd, hn), un(e5, `${t3}move`, this._onMouseMove, hn), un(e5, "touchmove", this._onMouseMove, hn), clearTimeout(this._willAddMouseDown);
  }
  _onMouseWheel(t3) {
    this._cacheTransformEventData(t3), this._handleEvent(t3, "wheel"), this._resetTransformEventData();
  }
  _onMouseOut(t3) {
    const e5 = this._hoveredTarget, s3 = {
      e: t3,
      ...ln(this, t3)
    };
    this.fire("mouse:out", {
      ...s3,
      target: e5
    }), this._hoveredTarget = void 0, e5 && e5.fire("mouseout", {
      ...s3
    }), this._hoveredTargets.forEach((t4) => {
      this.fire("mouse:out", {
        ...s3,
        target: t4
      }), t4 && t4.fire("mouseout", {
        ...s3
      });
    }), this._hoveredTargets = [];
  }
  _onMouseEnter(t3) {
    const { target: e5 } = this.findTarget(t3);
    this._currentTransform || e5 || (this.fire("mouse:over", {
      e: t3,
      ...ln(this, t3)
    }), this._hoveredTarget = void 0, this._hoveredTargets = []);
  }
  _onDragStart(t3) {
    this._isClick = false;
    const e5 = this.getActiveObject();
    if (e5 && e5.onDragStart(t3)) {
      this._dragSource = e5;
      const s3 = {
        e: t3,
        target: e5
      };
      return this.fire("dragstart", s3), e5.fire("dragstart", s3), void cn(this.upperCanvasEl, "drag", this._onDragProgress);
    }
    oe(t3);
  }
  _renderDragEffects(t3, e5, s3) {
    let i3 = false;
    const r3 = this._dropTarget;
    r3 && r3 !== e5 && r3 !== s3 && (r3.clearContextTop(), i3 = true), null == e5 || e5.clearContextTop(), s3 !== e5 && (null == s3 || s3.clearContextTop());
    const n3 = this.contextTop;
    n3.save(), n3.transform(...this.viewportTransform), e5 && (n3.save(), e5.transform(n3), e5.renderDragSourceEffect(t3), n3.restore(), i3 = true), s3 && (n3.save(), s3.transform(n3), s3.renderDropTargetEffect(t3), n3.restore(), i3 = true), n3.restore(), i3 && (this.contextTopDirty = true);
  }
  _onDragEnd(t3) {
    const { currentSubTargets: e5 } = this.findTarget(t3), s3 = !!t3.dataTransfer && t3.dataTransfer.dropEffect !== P, i3 = s3 ? this._activeObject : void 0, r3 = {
      e: t3,
      target: this._dragSource,
      subTargets: e5,
      dragSource: this._dragSource,
      didDrop: s3,
      dropTarget: i3
    };
    un(this.upperCanvasEl, "drag", this._onDragProgress), this.fire("dragend", r3), this._dragSource && this._dragSource.fire("dragend", r3), delete this._dragSource, this._onMouseUp(t3);
  }
  _onDragProgress(t3) {
    const e5 = {
      e: t3,
      target: this._dragSource,
      dragSource: this._dragSource,
      dropTarget: this._draggedoverTarget
    };
    this.fire("drag", e5), this._dragSource && this._dragSource.fire("drag", e5);
  }
  _onDragOver(t3) {
    const e5 = "dragover", { currentContainer: s3, currentSubTargets: i3 } = this.findTarget(t3), r3 = this._dragSource, n3 = {
      e: t3,
      target: s3,
      subTargets: i3,
      dragSource: r3,
      canDrop: false,
      dropTarget: void 0
    };
    let o3;
    this.fire(e5, n3), this._fireEnterLeaveEvents(t3, s3, n3), s3 && (s3.canDrop(t3) && (o3 = s3), s3.fire(e5, n3));
    for (let s4 = 0; s4 < i3.length; s4++) {
      const r4 = i3[s4];
      r4.canDrop(t3) && (o3 = r4), r4.fire(e5, n3);
    }
    this._renderDragEffects(t3, r3, o3), this._dropTarget = o3;
  }
  _onDragEnter(t3) {
    const { currentContainer: e5, currentSubTargets: s3 } = this.findTarget(t3), i3 = {
      e: t3,
      target: e5,
      subTargets: s3,
      dragSource: this._dragSource
    };
    this.fire("dragenter", i3), this._fireEnterLeaveEvents(t3, e5, i3);
  }
  _onDragLeave(t3) {
    const { currentSubTargets: e5 } = this.findTarget(t3), s3 = {
      e: t3,
      target: this._draggedoverTarget,
      subTargets: e5,
      dragSource: this._dragSource
    };
    this.fire("dragleave", s3), this._fireEnterLeaveEvents(t3, void 0, s3), this._renderDragEffects(t3, this._dragSource), this._dropTarget = void 0, this._hoveredTargets = [];
  }
  _onDrop(t3) {
    const { currentContainer: e5, currentSubTargets: s3 } = this.findTarget(t3), i3 = this._basicEventHandler("drop:before", {
      e: t3,
      target: e5,
      subTargets: s3,
      dragSource: this._dragSource,
      ...ln(this, t3)
    });
    i3.didDrop = false, i3.dropTarget = void 0, this._basicEventHandler("drop", i3), this.fire("drop:after", i3);
  }
  _onContextMenu(t3) {
    const { target: e5, subTargets: s3 } = this.findTarget(t3), i3 = this._basicEventHandler("contextmenu:before", {
      e: t3,
      target: e5,
      subTargets: s3
    });
    return this.stopContextMenu && oe(t3), this._basicEventHandler("contextmenu", i3), false;
  }
  _onClick(t3) {
    const e5 = t3.detail;
    e5 > 3 || e5 < 2 || (this._cacheTransformEventData(t3), 2 == e5 && "dblclick" === t3.type && this._handleEvent(t3, "dblclick"), 3 == e5 && this._handleEvent(t3, "tripleclick"), this._resetTransformEventData());
  }
  fireEventFromPointerEvent(t3, e5, s3) {
    let i3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    this._cacheTransformEventData(t3);
    const { target: r3, subTargets: n3 } = this.findTarget(t3), o3 = {
      e: t3,
      target: r3,
      subTargets: n3,
      ...ln(this, t3),
      transform: this._currentTransform,
      ...i3
    };
    this.fire(e5, o3), r3 && r3.fire(s3, o3);
    for (let t4 = 0; t4 < n3.length; t4++) n3[t4] !== r3 && n3[t4].fire(s3, o3);
    this._resetTransformEventData();
  }
  getPointerId(t3) {
    const e5 = t3.changedTouches;
    return e5 ? e5[0] && e5[0].identifier : this.enablePointerEvents ? t3.pointerId : -1;
  }
  _isMainEvent(t3) {
    return true === t3.isPrimary || false !== t3.isPrimary && ("touchend" === t3.type && 0 === t3.touches.length || (!t3.changedTouches || t3.changedTouches[0].identifier === this.mainTouchId));
  }
  _onTouchStart(t3) {
    this._cacheTransformEventData(t3);
    let e5 = !this.allowTouchScrolling;
    const s3 = this._activeObject;
    void 0 === this.mainTouchId && (this.mainTouchId = this.getPointerId(t3)), this.__onMouseDown(t3);
    const { target: i3 } = this.findTarget(t3);
    (this.isDrawingMode || s3 && i3 === s3) && (e5 = true), e5 && t3.preventDefault();
    const r3 = this.upperCanvasEl, n3 = this._getEventPrefix(), o3 = qt(r3);
    cn(o3, "touchend", this._onTouchEnd, hn), e5 && cn(o3, "touchmove", this._onMouseMove, hn), un(r3, `${n3}down`, this._onMouseDown), this._resetTransformEventData();
  }
  _onMouseDown(t3) {
    this._cacheTransformEventData(t3), this.__onMouseDown(t3);
    const e5 = this.upperCanvasEl, s3 = this._getEventPrefix();
    un(e5, `${s3}move`, this._onMouseMove, hn);
    const i3 = qt(e5);
    cn(i3, `${s3}up`, this._onMouseUp), cn(i3, `${s3}move`, this._onMouseMove, hn), this._resetTransformEventData();
  }
  _onTouchEnd(t3) {
    if (t3.touches.length > 0) return;
    this._cacheTransformEventData(t3), this.__onMouseUp(t3), this._resetTransformEventData(), delete this.mainTouchId;
    const e5 = this._getEventPrefix(), s3 = qt(this.upperCanvasEl);
    un(s3, "touchend", this._onTouchEnd, hn), un(s3, "touchmove", this._onMouseMove, hn), this._willAddMouseDown && clearTimeout(this._willAddMouseDown), this._willAddMouseDown = setTimeout(() => {
      cn(this.upperCanvasEl, `${e5}down`, this._onMouseDown), this._willAddMouseDown = 0;
    }, 400);
  }
  _onMouseUp(t3) {
    this._cacheTransformEventData(t3), this.__onMouseUp(t3);
    const e5 = this.upperCanvasEl, s3 = this._getEventPrefix();
    if (this._isMainEvent(t3)) {
      const t4 = qt(this.upperCanvasEl);
      un(t4, `${s3}up`, this._onMouseUp), un(t4, `${s3}move`, this._onMouseMove, hn), cn(e5, `${s3}move`, this._onMouseMove, hn);
    }
    this._resetTransformEventData();
  }
  _onMouseMove(t3) {
    this._cacheTransformEventData(t3);
    const e5 = this.getActiveObject();
    !this.allowTouchScrolling && (!e5 || !e5.shouldStartDragging(t3)) && t3.preventDefault && t3.preventDefault(), this.__onMouseMove(t3), this._resetTransformEventData();
  }
  _onResize() {
    this.calcOffset(), this._resetTransformEventData();
  }
  _shouldRender(t3) {
    const e5 = this.getActiveObject();
    return !!e5 != !!t3 || e5 && t3 && e5 !== t3;
  }
  __onMouseUp(t3) {
    var e5;
    this._handleEvent(t3, "up:before");
    const s3 = this._currentTransform, i3 = this._isClick, { target: r3 } = this.findTarget(t3), { button: n3 } = t3;
    if (n3) return void ((this.fireMiddleClick && 1 === n3 || this.fireRightClick && 2 === n3) && this._handleEvent(t3, "up"));
    if (this.isDrawingMode && this._isCurrentlyDrawing) return void this._onMouseUpInDrawingMode(t3);
    if (!this._isMainEvent(t3)) return;
    let o3, a3, h3 = false;
    if (s3 && (this._finalizeCurrentTransform(t3), h3 = s3.actionPerformed), !i3) {
      const e6 = r3 === this._activeObject;
      this.handleSelection(t3), h3 || (h3 = this._shouldRender(r3) || !e6 && r3 === this._activeObject);
    }
    if (r3) {
      const e6 = r3.findControl(this.getViewportPoint(t3), ne(t3)), { key: i4, control: n4 } = e6 || {};
      if (a3 = i4, r3.selectable && r3 !== this._activeObject && "up" === r3.activeOn) this.setActiveObject(r3, t3), h3 = true;
      else if (n4) {
        const e7 = n4.getMouseUpHandler(t3, r3, n4);
        e7 && (o3 = this.getScenePoint(t3), e7.call(n4, t3, s3, o3.x, o3.y));
      }
      r3.isMoving = false;
    }
    if (s3 && (s3.target !== r3 || s3.corner !== a3)) {
      const e6 = s3.target && s3.target.controls[s3.corner], i4 = e6 && e6.getMouseUpHandler(t3, s3.target, e6);
      o3 = o3 || this.getScenePoint(t3), i4 && i4.call(e6, t3, s3, o3.x, o3.y);
    }
    this._setCursorFromEvent(t3, r3), this._handleEvent(t3, "up"), this._groupSelector = null, this._currentTransform = null, r3 && (r3.__corner = void 0), h3 ? this.requestRenderAll() : i3 || null !== (e5 = this._activeObject) && void 0 !== e5 && e5.isEditing || this.renderTop();
  }
  _basicEventHandler(t3, e5) {
    const { target: s3, subTargets: i3 = [] } = e5;
    this.fire(t3, e5), s3 && s3.fire(t3, e5);
    for (let r3 = 0; r3 < i3.length; r3++) i3[r3] !== s3 && i3[r3].fire(t3, e5);
    return e5;
  }
  _handleEvent(t3, e5, s3) {
    const { target: i3, subTargets: r3 } = this.findTarget(t3), n3 = {
      e: t3,
      target: i3,
      subTargets: r3,
      ...ln(this, t3),
      transform: this._currentTransform,
      ..."down:before" === e5 || "down" === e5 ? s3 : {}
    };
    "up:before" !== e5 && "up" !== e5 || (n3.isClick = this._isClick), this.fire(`mouse:${e5}`, n3), i3 && i3.fire(`mouse${e5}`, n3);
    for (let t4 = 0; t4 < r3.length; t4++) r3[t4] !== i3 && r3[t4].fire(`mouse${e5}`, n3);
  }
  _onMouseDownInDrawingMode(t3) {
    this._isCurrentlyDrawing = true, this.getActiveObject() && (this.discardActiveObject(t3), this.requestRenderAll());
    const e5 = this.getScenePoint(t3);
    this.freeDrawingBrush && this.freeDrawingBrush.onMouseDown(e5, {
      e: t3,
      pointer: e5
    }), this._handleEvent(t3, "down", {
      alreadySelected: false
    });
  }
  _onMouseMoveInDrawingMode(t3) {
    if (this._isCurrentlyDrawing) {
      const e5 = this.getScenePoint(t3);
      this.freeDrawingBrush && this.freeDrawingBrush.onMouseMove(e5, {
        e: t3,
        pointer: e5
      });
    }
    this.setCursor(this.freeDrawingCursor), this._handleEvent(t3, "move");
  }
  _onMouseUpInDrawingMode(t3) {
    const e5 = this.getScenePoint(t3);
    this.freeDrawingBrush ? this._isCurrentlyDrawing = !!this.freeDrawingBrush.onMouseUp({
      e: t3,
      pointer: e5
    }) : this._isCurrentlyDrawing = false, this._handleEvent(t3, "up");
  }
  __onMouseDown(t3) {
    this._isClick = true, this._handleEvent(t3, "down:before");
    let { target: e5 } = this.findTarget(t3), s3 = !!e5 && e5 === this._activeObject;
    const { button: i3 } = t3;
    if (i3) return void ((this.fireMiddleClick && 1 === i3 || this.fireRightClick && 2 === i3) && this._handleEvent(t3, "down", {
      alreadySelected: s3
    }));
    if (this.isDrawingMode) return void this._onMouseDownInDrawingMode(t3);
    if (!this._isMainEvent(t3)) return;
    if (this._currentTransform) return;
    let r3 = this._shouldRender(e5), n3 = false;
    if (this.handleMultiSelection(t3, e5) ? (e5 = this._activeObject, n3 = true, r3 = true) : this._shouldClearSelection(t3, e5) && this.discardActiveObject(t3), this.selection && (!e5 || !e5.selectable && !e5.isEditing && e5 !== this._activeObject)) {
      const e6 = this.getScenePoint(t3);
      this._groupSelector = {
        x: e6.x,
        y: e6.y,
        deltaY: 0,
        deltaX: 0
      };
    }
    if (s3 = !!e5 && e5 === this._activeObject, e5) {
      e5.selectable && "down" === e5.activeOn && this.setActiveObject(e5, t3);
      const i4 = e5.findControl(this.getViewportPoint(t3), ne(t3));
      if (e5 === this._activeObject && (i4 || !n3)) {
        this._setupCurrentTransform(t3, e5, s3);
        const r4 = i4 ? i4.control : void 0, n4 = this.getScenePoint(t3), o3 = r4 && r4.getMouseDownHandler(t3, e5, r4);
        o3 && o3.call(r4, t3, this._currentTransform, n4.x, n4.y);
      }
    }
    r3 && (this._objectsToRender = void 0), this._handleEvent(t3, "down", {
      alreadySelected: s3
    }), r3 && this.requestRenderAll();
  }
  _resetTransformEventData() {
    this._targetInfo = this._viewportPoint = this._scenePoint = void 0;
  }
  _cacheTransformEventData(t3) {
    this._resetTransformEventData(), this._viewportPoint = this.getViewportPoint(t3), this._scenePoint = fe(this._viewportPoint, void 0, this.viewportTransform), this._targetInfo = this.findTarget(t3), this._currentTransform && (this._targetInfo.target = this._currentTransform.target);
  }
  __onMouseMove(t3) {
    if (this._isClick = false, this._handleEvent(t3, "move:before"), this.isDrawingMode) return void this._onMouseMoveInDrawingMode(t3);
    if (!this._isMainEvent(t3)) return;
    const e5 = this._groupSelector;
    if (e5) {
      const s3 = this.getScenePoint(t3);
      e5.deltaX = s3.x - e5.x, e5.deltaY = s3.y - e5.y, this.renderTop();
    } else if (this._currentTransform) this._transformObject(t3);
    else {
      const { target: e6 } = this.findTarget(t3);
      this._setCursorFromEvent(t3, e6), this._fireOverOutEvents(t3, e6);
    }
    this.textEditingManager.onMouseMove(t3), this._handleEvent(t3, "move");
  }
  _fireOverOutEvents(t3, e5) {
    const { _hoveredTarget: s3, _hoveredTargets: i3 } = this, { subTargets: r3 } = this.findTarget(t3), n3 = Math.max(i3.length, r3.length);
    this.fireSyntheticInOutEvents("mouse", {
      e: t3,
      target: e5,
      oldTarget: s3,
      fireCanvas: true
    });
    for (let o3 = 0; o3 < n3; o3++) r3[o3] === e5 || i3[o3] && i3[o3] === s3 || this.fireSyntheticInOutEvents("mouse", {
      e: t3,
      target: r3[o3],
      oldTarget: i3[o3]
    });
    this._hoveredTarget = e5, this._hoveredTargets = r3;
  }
  _fireEnterLeaveEvents(t3, e5, s3) {
    const i3 = this._draggedoverTarget, r3 = this._hoveredTargets, { subTargets: n3 } = this.findTarget(t3), o3 = Math.max(r3.length, n3.length);
    this.fireSyntheticInOutEvents("drag", {
      ...s3,
      target: e5,
      oldTarget: i3,
      fireCanvas: true
    });
    for (let t4 = 0; t4 < o3; t4++) this.fireSyntheticInOutEvents("drag", {
      ...s3,
      target: n3[t4],
      oldTarget: r3[t4]
    });
    this._draggedoverTarget = e5;
  }
  fireSyntheticInOutEvents(t3, e5) {
    let { target: s3, oldTarget: i3, fireCanvas: r3, e: n3, ...o3 } = e5;
    const { targetIn: a3, targetOut: h3, canvasIn: l3, canvasOut: c2 } = dn[t3], u3 = i3 !== s3;
    if (i3 && u3) {
      const t4 = {
        ...o3,
        e: n3,
        target: i3,
        nextTarget: s3,
        ...ln(this, n3)
      };
      r3 && this.fire(c2, t4), i3.fire(h3, t4);
    }
    if (s3 && u3) {
      const t4 = {
        ...o3,
        e: n3,
        target: s3,
        previousTarget: i3,
        ...ln(this, n3)
      };
      r3 && this.fire(l3, t4), s3.fire(a3, t4);
    }
  }
  _transformObject(t3) {
    const e5 = this.getScenePoint(t3), s3 = this._currentTransform, i3 = s3.target, r3 = i3.group ? fe(e5, void 0, i3.group.calcTransformMatrix()) : e5;
    s3.shiftKey = t3.shiftKey, s3.altKey = !!this.centeredKey && t3[this.centeredKey], this._performTransformAction(t3, s3, r3), s3.actionPerformed && this.requestRenderAll();
  }
  _performTransformAction(t3, e5, s3) {
    const { action: i3, actionHandler: r3, target: n3 } = e5, o3 = !!r3 && r3(t3, e5, s3.x, s3.y);
    o3 && n3.setCoords(), "drag" === i3 && o3 && (e5.target.isMoving = true, this.setCursor(e5.target.moveCursor || this.moveCursor)), e5.actionPerformed = e5.actionPerformed || o3;
  }
  _setCursorFromEvent(t3, e5) {
    if (!e5) return void this.setCursor(this.defaultCursor);
    let s3 = e5.hoverCursor || this.hoverCursor;
    const i3 = Nt(this._activeObject) ? this._activeObject : null, r3 = (!i3 || e5.group !== i3) && e5.findControl(this.getViewportPoint(t3));
    if (r3) {
      const { control: s4, coord: i4 } = r3;
      this.setCursor(s4.cursorStyleHandler(t3, s4, e5, i4));
    } else {
      if (e5.subTargetCheck) {
        const { subTargets: e6 } = this.findTarget(t3);
        e6.concat().reverse().forEach((t4) => {
          s3 = t4.hoverCursor || s3;
        });
      }
      this.setCursor(s3);
    }
  }
  handleMultiSelection(t3, e5) {
    const s3 = this._activeObject, i3 = Nt(s3);
    if (s3 && this._isSelectionKeyPressed(t3) && this.selection && e5 && e5.selectable && (s3 !== e5 || i3) && (i3 || !e5.isDescendantOf(s3) && !s3.isDescendantOf(e5)) && !e5.onSelect({
      e: t3
    }) && !s3.getActiveControl()) {
      if (i3) {
        const i4 = s3.getObjects();
        let r3 = [];
        if (e5 === s3) {
          const s4 = this.getScenePoint(t3);
          let n3 = this.searchPossibleTargets(i4, s4);
          if (n3.target ? (e5 = n3.target, r3 = n3.subTargets) : (n3 = this.searchPossibleTargets(this._objects, s4), e5 = n3.target, r3 = n3.subTargets), !e5 || !e5.selectable) return false;
        }
        e5.group === s3 ? (s3.remove(e5), this._hoveredTarget = e5, this._hoveredTargets = r3, 1 === s3.size() && this._setActiveObject(s3.item(0), t3)) : (s3.multiSelectAdd(e5), this._hoveredTarget = s3, this._hoveredTargets = r3), this._fireSelectionEvents(i4, t3);
      } else {
        s3.isEditing && s3.exitEditing();
        const i4 = new (tt.getClass("ActiveSelection"))([], {
          canvas: this
        });
        i4.multiSelectAdd(s3, e5), this._hoveredTarget = i4, this._setActiveObject(i4, t3), this._fireSelectionEvents([
          s3
        ], t3);
      }
      return true;
    }
    return false;
  }
  handleSelection(t3) {
    if (!this.selection || !this._groupSelector) return false;
    const { x: e5, y: s3, deltaX: i3, deltaY: r3 } = this._groupSelector, n3 = new ot(e5, s3), o3 = n3.add(new ot(i3, r3)), a3 = n3.min(o3), h3 = n3.max(o3).subtract(a3), l3 = this.collectObjects({
      left: a3.x,
      top: a3.y,
      width: h3.x,
      height: h3.y
    }, {
      includeIntersecting: !this.selectionFullyContained
    }), c2 = n3.eq(o3) ? l3[0] ? [
      l3[0]
    ] : [] : l3.length > 1 ? l3.filter((e6) => !e6.onSelect({
      e: t3
    })).reverse() : l3;
    if (1 === c2.length) this.setActiveObject(c2[0], t3);
    else if (c2.length > 1) {
      const e6 = tt.getClass("ActiveSelection");
      this.setActiveObject(new e6(c2, {
        canvas: this
      }), t3);
    }
    return this._groupSelector = null, true;
  }
  toCanvasElement() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, e5 = arguments.length > 1 ? arguments[1] : void 0;
    const { upper: s3 } = this.elements;
    s3.ctx = void 0;
    const i3 = super.toCanvasElement(t3, e5);
    return s3.ctx = s3.el.getContext("2d"), i3;
  }
  clear() {
    this.textEditingManager.clear(), super.clear();
  }
  destroy() {
    this.removeListeners(), this.textEditingManager.dispose(), super.destroy();
  }
};
var fn = {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0
};
var pn = {
  ...fn,
  r1: 0,
  r2: 0
};
var mn = (t3, e5) => isNaN(t3) && "number" == typeof e5 ? e5 : t3;
function vn(t3) {
  return t3 && /%$/.test(t3) && Number.isFinite(parseFloat(t3));
}
function yn(t3, e5) {
  const s3 = "number" == typeof t3 ? t3 : "string" == typeof t3 ? parseFloat(t3) / (vn(t3) ? 100 : 1) : NaN;
  return ws(0, mn(s3, e5), 1);
}
var _n = /\s*;\s*/;
var xn = /\s*:\s*/;
function Cn(t3, e5) {
  let s3, i3;
  const r3 = t3.getAttribute("style");
  if (r3) {
    const t4 = r3.split(_n);
    "" === t4[t4.length - 1] && t4.pop();
    for (let e6 = t4.length; e6--; ) {
      const [r4, n4] = t4[e6].split(xn).map((t5) => t5.trim());
      "stop-color" === r4 ? s3 = n4 : "stop-opacity" === r4 && (i3 = n4);
    }
  }
  s3 = s3 || t3.getAttribute("stop-color") || "rgb(0,0,0)", i3 = mn(parseFloat(i3 || t3.getAttribute("stop-opacity") || ""), 1);
  const n3 = new Ne(s3);
  return n3.setAlpha(n3.getAlpha() * i3 * e5), {
    offset: yn(t3.getAttribute("offset"), 0),
    color: n3.toRgba()
  };
}
function Sn(t3, e5) {
  const s3 = [], i3 = t3.getElementsByTagName("stop"), r3 = yn(e5, 1);
  for (let t4 = i3.length; t4--; ) s3.push(Cn(i3[t4], r3));
  return s3;
}
function bn(t3) {
  return "linearGradient" === t3.nodeName || "LINEARGRADIENT" === t3.nodeName ? "linear" : "radial";
}
function wn(t3) {
  return "userSpaceOnUse" === t3.getAttribute("gradientUnits") ? "pixels" : "percentage";
}
function Tn(t3, e5) {
  return t3.getAttribute(e5);
}
function On(t3, e5) {
  return function(t4, e6) {
    let s3, { width: i3, height: r3, gradientUnits: n3 } = e6;
    return Object.entries(t4).reduce((t5, e7) => {
      let [o3, a3] = e7;
      if ("Infinity" === a3) s3 = 1;
      else if ("-Infinity" === a3) s3 = 0;
      else {
        const t6 = "string" == typeof a3;
        s3 = t6 ? parseFloat(a3) : a3, t6 && vn(a3) && (s3 *= 0.01, "pixels" === n3 && ("x1" !== o3 && "x2" !== o3 && "r2" !== o3 || (s3 *= i3), "y1" !== o3 && "y2" !== o3 || (s3 *= r3)));
      }
      return t5[o3] = s3, t5;
    }, {});
  }("linear" === bn(t3) ? function(t4) {
    return {
      x1: Tn(t4, "x1") || 0,
      y1: Tn(t4, "y1") || 0,
      x2: Tn(t4, "x2") || "100%",
      y2: Tn(t4, "y2") || 0
    };
  }(t3) : function(t4) {
    return {
      x1: Tn(t4, "fx") || Tn(t4, "cx") || "50%",
      y1: Tn(t4, "fy") || Tn(t4, "cy") || "50%",
      r1: 0,
      x2: Tn(t4, "cx") || "50%",
      y2: Tn(t4, "cy") || "50%",
      r2: Tn(t4, "r") || "50%"
    };
  }(t3), {
    ...e5,
    gradientUnits: wn(t3)
  });
}
var kn = class {
  constructor(t3) {
    const { type: e5 = "linear", gradientUnits: s3 = "pixels", coords: i3 = {}, colorStops: r3 = [], offsetX: n3 = 0, offsetY: o3 = 0, gradientTransform: a3, id: h3 } = t3 || {};
    Object.assign(this, {
      type: e5,
      gradientUnits: s3,
      coords: {
        ..."radial" === e5 ? pn : fn,
        ...i3
      },
      colorStops: r3,
      offsetX: n3,
      offsetY: o3,
      gradientTransform: a3,
      id: h3 ? `${h3}_${ft()}` : ft()
    });
  }
  addColorStop(t3) {
    for (const e5 in t3) this.colorStops.push({
      offset: parseFloat(e5),
      color: t3[e5]
    });
    return this;
  }
  toObject(t3) {
    return {
      ...Xt(this, t3),
      type: this.type,
      coords: {
        ...this.coords
      },
      colorStops: this.colorStops.map((t4) => ({
        ...t4
      })),
      offsetX: this.offsetX,
      offsetY: this.offsetY,
      gradientUnits: this.gradientUnits,
      gradientTransform: this.gradientTransform ? [
        ...this.gradientTransform
      ] : void 0
    };
  }
  toSVG(t3) {
    let { additionalTransform: e5 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const s3 = [], i3 = this.gradientTransform ? this.gradientTransform.concat() : S.concat(), r3 = "pixels" === this.gradientUnits ? "userSpaceOnUse" : "objectBoundingBox", n3 = this.colorStops.map((t4) => ({
      ...t4
    })).sort((t4, e6) => t4.offset - e6.offset);
    let o3 = -this.offsetX, a3 = -this.offsetY;
    var h3;
    "objectBoundingBox" === r3 ? (o3 /= t3.width, a3 /= t3.height) : (o3 += t3.width / 2, a3 += t3.height / 2), (h3 = t3) && "function" == typeof h3._renderPathCommands && "percentage" !== this.gradientUnits && (o3 -= t3.pathOffset.x, a3 -= t3.pathOffset.y), i3[4] -= o3, i3[5] -= a3;
    const l3 = [
      `id="SVGID_${this.id}"`,
      `gradientUnits="${r3}"`,
      `gradientTransform="${e5 ? e5 + " " : ""}${Vt(i3)}"`,
      ""
    ].join(" ");
    if ("linear" === this.type) {
      const { x1: t4, y1: e6, x2: i4, y2: r4 } = this.coords;
      s3.push("<linearGradient ", l3, ' x1="', t4, '" y1="', e6, '" x2="', i4, '" y2="', r4, '">\n');
    } else if ("radial" === this.type) {
      const { x1: t4, y1: e6, x2: i4, y2: r4, r1: o4, r2: a4 } = this.coords, h4 = o4 > a4;
      s3.push("<radialGradient ", l3, ' cx="', h4 ? t4 : i4, '" cy="', h4 ? e6 : r4, '" r="', h4 ? o4 : a4, '" fx="', h4 ? i4 : t4, '" fy="', h4 ? r4 : e6, '">\n'), h4 && (n3.reverse(), n3.forEach((t5) => {
        t5.offset = 1 - t5.offset;
      }));
      const c2 = Math.min(o4, a4);
      if (c2 > 0) {
        const t5 = c2 / Math.max(o4, a4);
        n3.forEach((e7) => {
          e7.offset += t5 * (1 - e7.offset);
        });
      }
    }
    return n3.forEach((t4) => {
      let { color: e6, offset: i4 } = t4;
      s3.push(`<stop offset="${100 * i4}%" style="stop-color:${e6};"/>
`);
    }), s3.push("linear" === this.type ? "</linearGradient>" : "</radialGradient>", "\n"), s3.join("");
  }
  toLive(t3) {
    const { x1: e5, y1: s3, x2: i3, y2: r3, r1: n3, r2: o3 } = this.coords, a3 = "linear" === this.type ? t3.createLinearGradient(e5, s3, i3, r3) : t3.createRadialGradient(e5, s3, n3, i3, r3, o3);
    return this.colorStops.forEach((t4) => {
      let { color: e6, offset: s4 } = t4;
      a3.addColorStop(s4, e6);
    }), a3;
  }
  static async fromObject(t3) {
    const { colorStops: e5, gradientTransform: s3 } = t3;
    return new this({
      ...t3,
      colorStops: e5 ? e5.map((t4) => ({
        ...t4
      })) : void 0,
      gradientTransform: s3 ? [
        ...s3
      ] : void 0
    });
  }
  static fromElement(t3, e5, s3) {
    const i3 = wn(t3), r3 = e5._findCenterFromElement();
    return new this({
      id: t3.getAttribute("id") || void 0,
      type: bn(t3),
      coords: On(t3, {
        width: s3.viewBoxWidth || s3.width,
        height: s3.viewBoxHeight || s3.height
      }),
      colorStops: Sn(t3, s3.opacity),
      gradientUnits: i3,
      gradientTransform: nr(t3.getAttribute("gradientTransform") || ""),
      ..."pixels" === i3 ? {
        offsetX: e5.width / 2 - r3.x,
        offsetY: e5.height / 2 - r3.y
      } : {
        offsetX: 0,
        offsetY: 0
      }
    });
  }
};
t(kn, "type", "Gradient"), tt.setClass(kn, "gradient"), tt.setClass(kn, "linear"), tt.setClass(kn, "radial");
var Dn = class {
  get type() {
    return "pattern";
  }
  set type(t3) {
    i("warn", "Setting type has no effect", t3);
  }
  constructor(e5) {
    t(this, "repeat", "repeat"), t(this, "offsetX", 0), t(this, "offsetY", 0), t(this, "crossOrigin", ""), this.id = ft(), Object.assign(this, e5);
  }
  isImageSource() {
    return !!this.source && "string" == typeof this.source.src;
  }
  isCanvasSource() {
    return !!this.source && !!this.source.toDataURL;
  }
  sourceToString() {
    return this.isImageSource() ? this.source.src : this.isCanvasSource() ? this.source.toDataURL() : "";
  }
  toLive(t3) {
    return this.source && (!this.isImageSource() || this.source.complete && 0 !== this.source.naturalWidth && 0 !== this.source.naturalHeight) ? t3.createPattern(this.source, this.repeat) : null;
  }
  toObject() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    const { repeat: e5, crossOrigin: i3 } = this;
    return {
      ...Xt(this, t3),
      type: "pattern",
      source: this.sourceToString(),
      repeat: e5,
      crossOrigin: i3,
      offsetX: Wt(this.offsetX, s.NUM_FRACTION_DIGITS),
      offsetY: Wt(this.offsetY, s.NUM_FRACTION_DIGITS),
      patternTransform: this.patternTransform ? [
        ...this.patternTransform
      ] : null
    };
  }
  toSVG(t3) {
    let { width: e5, height: s3 } = t3;
    const { source: i3, repeat: r3, id: n3 } = this, o3 = mn(this.offsetX / e5, 0), a3 = mn(this.offsetY / s3, 0);
    return [
      `<pattern id="SVGID_${n3}" x="${o3}" y="${a3}" width="${"repeat-y" === r3 || "no-repeat" === r3 ? 1 + Math.abs(o3 || 0) : mn(i3.width / e5, 0)}" height="${"repeat-x" === r3 || "no-repeat" === r3 ? 1 + Math.abs(a3 || 0) : mn(i3.height / s3, 0)}">`,
      `<image x="0" y="0" width="${i3.width}" height="${i3.height}" xlink:href="${this.sourceToString()}"></image>`,
      "</pattern>",
      ""
    ].join("\n");
  }
  static async fromObject(t3, e5) {
    let { type: s3, source: i3, patternTransform: r3, ...n3 } = t3;
    const o3 = await Bt(i3, {
      ...e5,
      crossOrigin: n3.crossOrigin
    });
    return new this({
      ...n3,
      patternTransform: r3 && r3.slice(0),
      source: o3
    });
  }
};
t(Dn, "type", "Pattern"), tt.setClass(Dn), tt.setClass(Dn, "pattern");
var Pn = class _Pn extends wi {
  constructor(t3) {
    let { path: e5, left: s3, top: i3, ...r3 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(), Object.assign(this, _Pn.ownDefaults), this.setOptions(r3), this._setPath(t3 || [], true), "number" == typeof s3 && this.set(O, s3), "number" == typeof i3 && this.set(k, i3);
  }
  _setPath(t3, e5) {
    this.path = Fr(Array.isArray(t3) ? t3 : Jr(t3)), this.setBoundingBox(e5);
  }
  _findCenterFromElement() {
    const t3 = this._calcBoundsFromPath();
    return new ot(t3.left + t3.width / 2, t3.top + t3.height / 2);
  }
  _renderPathCommands(t3) {
    const e5 = -this.pathOffset.x, s3 = -this.pathOffset.y;
    t3.beginPath();
    for (const i3 of this.path) switch (i3[0]) {
      case "L":
        t3.lineTo(i3[1] + e5, i3[2] + s3);
        break;
      case "M":
        t3.moveTo(i3[1] + e5, i3[2] + s3);
        break;
      case "C":
        t3.bezierCurveTo(i3[1] + e5, i3[2] + s3, i3[3] + e5, i3[4] + s3, i3[5] + e5, i3[6] + s3);
        break;
      case "Q":
        t3.quadraticCurveTo(i3[1] + e5, i3[2] + s3, i3[3] + e5, i3[4] + s3);
        break;
      case "Z":
        t3.closePath();
    }
  }
  _render(t3) {
    this._renderPathCommands(t3), this._renderPaintInOrder(t3);
  }
  toString() {
    return `#<Path (${this.complexity()}): { "top": ${this.top}, "left": ${this.left} }>`;
  }
  toObject() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return {
      ...super.toObject(t3),
      path: this.path.map((t4) => t4.slice())
    };
  }
  toDatalessObject() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    const e5 = this.toObject(t3);
    return this.sourcePath && (delete e5.path, e5.sourcePath = this.sourcePath), e5;
  }
  _toSVG() {
    return [
      "<path ",
      "COMMON_PARTS",
      `d="${Zr(this.path, s.NUM_FRACTION_DIGITS)}" stroke-linecap="round" />
`
    ];
  }
  _getOffsetTransform() {
    const t3 = s.NUM_FRACTION_DIGITS;
    return ` translate(${Wt(-this.pathOffset.x, t3)}, ${Wt(-this.pathOffset.y, t3)})`;
  }
  toClipPathSVG(t3) {
    const e5 = this._getOffsetTransform();
    return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(), {
      reviver: t3,
      additionalTransform: e5
    });
  }
  toSVG(t3) {
    const e5 = this._getOffsetTransform();
    return this._createBaseSVGMarkup(this._toSVG(), {
      reviver: t3,
      additionalTransform: e5
    });
  }
  complexity() {
    return this.path.length;
  }
  setDimensions() {
    this.setBoundingBox();
  }
  setBoundingBox(t3) {
    const { width: e5, height: s3, pathOffset: i3 } = this._calcDimensions();
    this.set({
      width: e5,
      height: s3,
      pathOffset: i3
    }), t3 && this.setPositionByOrigin(i3, T, T);
  }
  _calcBoundsFromPath() {
    const t3 = [];
    let e5 = 0, s3 = 0, i3 = 0, r3 = 0;
    for (const n3 of this.path) switch (n3[0]) {
      case "L":
        i3 = n3[1], r3 = n3[2], t3.push({
          x: e5,
          y: s3
        }, {
          x: i3,
          y: r3
        });
        break;
      case "M":
        i3 = n3[1], r3 = n3[2], e5 = i3, s3 = r3;
        break;
      case "C":
        t3.push(...Ar(i3, r3, n3[1], n3[2], n3[3], n3[4], n3[5], n3[6])), i3 = n3[5], r3 = n3[6];
        break;
      case "Q":
        t3.push(...Ar(i3, r3, n3[1], n3[2], n3[1], n3[2], n3[3], n3[4])), i3 = n3[3], r3 = n3[4];
        break;
      case "Z":
        i3 = e5, r3 = s3;
    }
    return ae(t3);
  }
  _calcDimensions() {
    const t3 = this._calcBoundsFromPath();
    return {
      ...t3,
      pathOffset: new ot(t3.left + t3.width / 2, t3.top + t3.height / 2)
    };
  }
  static fromObject(t3) {
    return this._fromObject(t3, {
      extraParam: "path"
    });
  }
  static async fromElement(t3, e5, s3) {
    const { d: i3, ...r3 } = cr(t3, this.ATTRIBUTE_NAMES, s3);
    return new this(i3, {
      ...r3,
      ...e5,
      left: void 0,
      top: void 0
    });
  }
};
t(Pn, "type", "Path"), t(Pn, "cacheProperties", [
  ...Os,
  "path",
  "fillRule"
]), t(Pn, "ATTRIBUTE_NAMES", [
  ...Yi,
  "d"
]), tt.setClass(Pn), tt.setSVGClass(Pn);
var An = [
  "radius",
  "startAngle",
  "endAngle",
  "counterClockwise"
];
var jn = class _jn extends wi {
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ..._jn.ownDefaults
    };
  }
  constructor(t3) {
    super(), Object.assign(this, _jn.ownDefaults), this.setOptions(t3);
  }
  _set(t3, e5) {
    return super._set(t3, e5), "radius" === t3 && this.setRadius(e5), this;
  }
  _render(t3) {
    t3.beginPath(), t3.arc(0, 0, this.radius, xt(this.startAngle), xt(this.endAngle), this.counterClockwise), this._renderPaintInOrder(t3);
  }
  getRadiusX() {
    return this.get("radius") * this.get(W);
  }
  getRadiusY() {
    return this.get("radius") * this.get(V);
  }
  setRadius(t3) {
    this.radius = t3, this.set({
      width: 2 * t3,
      height: 2 * t3
    });
  }
  toObject() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return super.toObject([
      ...An,
      ...t3
    ]);
  }
  _toSVG() {
    const t3 = (this.endAngle - this.startAngle) % 360;
    if (0 === t3) return [
      "<circle ",
      "COMMON_PARTS",
      'cx="0" cy="0" ',
      'r="',
      `${this.radius}`,
      '" />\n'
    ];
    {
      const { radius: e5 } = this, s3 = xt(this.startAngle), i3 = xt(this.endAngle), r3 = rt(s3) * e5, n3 = nt(s3) * e5, o3 = rt(i3) * e5, a3 = nt(i3) * e5;
      return [
        `<path d="M ${r3} ${n3} A ${e5} ${e5} 0 ${t3 > 180 ? 1 : 0} ${this.counterClockwise ? 0 : 1} ${o3} ${a3}" `,
        "COMMON_PARTS",
        " />\n"
      ];
    }
  }
  static async fromElement(t3, e5, s3) {
    const { left: i3 = 0, top: r3 = 0, radius: n3 = 0, ...o3 } = cr(t3, this.ATTRIBUTE_NAMES, s3);
    return new this({
      ...o3,
      radius: n3,
      left: i3 - n3,
      top: r3 - n3
    });
  }
  static fromObject(t3) {
    return super._fromObject(t3);
  }
};
t(jn, "type", "Circle"), t(jn, "cacheProperties", [
  ...Os,
  ...An
]), t(jn, "ownDefaults", {
  radius: 0,
  startAngle: 0,
  endAngle: 360,
  counterClockwise: false
}), t(jn, "ATTRIBUTE_NAMES", [
  "cx",
  "cy",
  "r",
  ...Yi
]), tt.setClass(jn), tt.setSVGClass(jn);
var Bn = [
  "x1",
  "x2",
  "y1",
  "y2"
];
var Rn = class _Rn extends wi {
  constructor() {
    let [t3, e5, s3, i3] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [
      0,
      0,
      0,
      0
    ], r3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(), Object.assign(this, _Rn.ownDefaults), this.setOptions(r3), this.x1 = t3, this.x2 = s3, this.y1 = e5, this.y2 = i3, this._setWidthHeight();
    const { left: n3, top: o3 } = r3;
    "number" == typeof n3 && this.set(O, n3), "number" == typeof o3 && this.set(k, o3);
  }
  _setWidthHeight() {
    const { x1: t3, y1: e5, x2: s3, y2: i3 } = this;
    this.width = Math.abs(s3 - t3), this.height = Math.abs(i3 - e5);
    const { left: r3, top: n3, width: o3, height: a3 } = ae([
      {
        x: t3,
        y: e5
      },
      {
        x: s3,
        y: i3
      }
    ]), h3 = new ot(r3 + o3 / 2, n3 + a3 / 2);
    this.setPositionByOrigin(h3, T, T);
  }
  _set(t3, e5) {
    return super._set(t3, e5), Bn.includes(t3) && this._setWidthHeight(), this;
  }
  _render(t3) {
    t3.beginPath();
    const e5 = this.calcLinePoints();
    t3.moveTo(e5.x1, e5.y1), t3.lineTo(e5.x2, e5.y2), t3.lineWidth = this.strokeWidth;
    const s3 = t3.strokeStyle;
    var i3;
    Gt(this.stroke) ? t3.strokeStyle = this.stroke.toLive(t3) : t3.strokeStyle = null !== (i3 = this.stroke) && void 0 !== i3 ? i3 : t3.fillStyle;
    this.stroke && this._renderStroke(t3), t3.strokeStyle = s3;
  }
  _findCenterFromElement() {
    return new ot((this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2);
  }
  toObject() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return {
      ...super.toObject(t3),
      ...this.calcLinePoints()
    };
  }
  _getNonTransformedDimensions() {
    const t3 = super._getNonTransformedDimensions();
    return "butt" === this.strokeLineCap && (0 === this.width && (t3.y -= this.strokeWidth), 0 === this.height && (t3.x -= this.strokeWidth)), t3;
  }
  calcLinePoints() {
    const { x1: t3, x2: e5, y1: s3, y2: i3, width: r3, height: n3 } = this, o3 = t3 <= e5 ? -1 : 1, a3 = s3 <= i3 ? -1 : 1;
    return {
      x1: o3 * r3 / 2,
      x2: o3 * -r3 / 2,
      y1: a3 * n3 / 2,
      y2: a3 * -n3 / 2
    };
  }
  _toSVG() {
    const { x1: t3, x2: e5, y1: s3, y2: i3 } = this.calcLinePoints();
    return [
      "<line ",
      "COMMON_PARTS",
      `x1="${t3}" y1="${s3}" x2="${e5}" y2="${i3}" />
`
    ];
  }
  static async fromElement(t3, e5, s3) {
    const { x1: i3 = 0, y1: r3 = 0, x2: n3 = 0, y2: o3 = 0, ...a3 } = cr(t3, this.ATTRIBUTE_NAMES, s3);
    return new this([
      i3,
      r3,
      n3,
      o3
    ], a3);
  }
  static fromObject(t3) {
    let { x1: e5, y1: s3, x2: i3, y2: r3, ...n3 } = t3;
    return this._fromObject({
      ...n3,
      points: [
        e5,
        s3,
        i3,
        r3
      ]
    }, {
      extraParam: "points"
    });
  }
};
t(Rn, "type", "Line"), t(Rn, "cacheProperties", [
  ...Os,
  ...Bn
]), t(Rn, "ATTRIBUTE_NAMES", Yi.concat(Bn)), tt.setClass(Rn), tt.setSVGClass(Rn);
var $n = class _$n extends wi {
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ..._$n.ownDefaults
    };
  }
  constructor(t3) {
    super(), Object.assign(this, _$n.ownDefaults), this.setOptions(t3);
  }
  _render(t3) {
    const e5 = this.width / 2, s3 = this.height / 2;
    t3.beginPath(), t3.moveTo(-e5, s3), t3.lineTo(0, -s3), t3.lineTo(e5, s3), t3.closePath(), this._renderPaintInOrder(t3);
  }
  _toSVG() {
    const t3 = this.width / 2, e5 = this.height / 2;
    return [
      "<polygon ",
      "COMMON_PARTS",
      'points="',
      `${-t3} ${e5},0 ${-e5},${t3} ${e5}`,
      '" />'
    ];
  }
};
t($n, "type", "Triangle"), t($n, "ownDefaults", {
  width: 100,
  height: 100
}), tt.setClass($n), tt.setSVGClass($n);
var Xn = [
  "rx",
  "ry"
];
var Yn = class _Yn extends wi {
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ..._Yn.ownDefaults
    };
  }
  constructor(t3) {
    super(), Object.assign(this, _Yn.ownDefaults), this.setOptions(t3);
  }
  _set(t3, e5) {
    switch (super._set(t3, e5), t3) {
      case "rx":
        this.rx = e5, this.set("width", 2 * e5);
        break;
      case "ry":
        this.ry = e5, this.set("height", 2 * e5);
    }
    return this;
  }
  getRx() {
    return this.get("rx") * this.get(W);
  }
  getRy() {
    return this.get("ry") * this.get(V);
  }
  toObject() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return super.toObject([
      ...Xn,
      ...t3
    ]);
  }
  _toSVG() {
    return [
      "<ellipse ",
      "COMMON_PARTS",
      `cx="0" cy="0" rx="${this.rx}" ry="${this.ry}" />
`
    ];
  }
  _render(t3) {
    t3.beginPath(), t3.save(), t3.transform(1, 0, 0, this.ry / this.rx, 0, 0), t3.arc(0, 0, this.rx, 0, x, false), t3.restore(), this._renderPaintInOrder(t3);
  }
  static async fromElement(t3, e5, s3) {
    const i3 = cr(t3, this.ATTRIBUTE_NAMES, s3);
    return i3.left = (i3.left || 0) - i3.rx, i3.top = (i3.top || 0) - i3.ry, new this(i3);
  }
};
t(Yn, "type", "Ellipse"), t(Yn, "cacheProperties", [
  ...Os,
  ...Xn
]), t(Yn, "ownDefaults", {
  rx: 0,
  ry: 0
}), t(Yn, "ATTRIBUTE_NAMES", [
  ...Yi,
  "cx",
  "cy",
  "rx",
  "ry"
]), tt.setClass(Yn), tt.setSVGClass(Yn);
var Wn = {
  exactBoundingBox: false
};
var Vn = class _Vn extends wi {
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ..._Vn.ownDefaults
    };
  }
  constructor() {
    let e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], s3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(), t(this, "strokeDiff", void 0), Object.assign(this, _Vn.ownDefaults), this.setOptions(s3), this.points = e5;
    const { left: i3, top: r3 } = s3;
    this.initialized = true, this.setBoundingBox(true), "number" == typeof i3 && this.set(O, i3), "number" == typeof r3 && this.set(k, r3);
  }
  isOpen() {
    return true;
  }
  _projectStrokeOnPoints(t3) {
    return Pi(this.points, t3, this.isOpen());
  }
  _calcDimensions(t3) {
    t3 = {
      scaleX: this.scaleX,
      scaleY: this.scaleY,
      skewX: this.skewX,
      skewY: this.skewY,
      strokeLineCap: this.strokeLineCap,
      strokeLineJoin: this.strokeLineJoin,
      strokeMiterLimit: this.strokeMiterLimit,
      strokeUniform: this.strokeUniform,
      strokeWidth: this.strokeWidth,
      ...t3 || {}
    };
    const e5 = this.exactBoundingBox ? this._projectStrokeOnPoints(t3).map((t4) => t4.projectedPoint) : this.points;
    if (0 === e5.length) return {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      pathOffset: new ot(),
      strokeOffset: new ot(),
      strokeDiff: new ot()
    };
    const s3 = ae(e5), i3 = Lt({
      ...t3,
      scaleX: 1,
      scaleY: 1
    }), r3 = ae(this.points.map((t4) => bt(t4, i3, true))), n3 = new ot(this.scaleX, this.scaleY);
    let o3 = s3.left + s3.width / 2, a3 = s3.top + s3.height / 2;
    return this.exactBoundingBox && (o3 -= a3 * Math.tan(xt(this.skewX)), a3 -= o3 * Math.tan(xt(this.skewY))), {
      ...s3,
      pathOffset: new ot(o3, a3),
      strokeOffset: new ot(r3.left, r3.top).subtract(new ot(s3.left, s3.top)).multiply(n3),
      strokeDiff: new ot(s3.width, s3.height).subtract(new ot(r3.width, r3.height)).multiply(n3)
    };
  }
  _findCenterFromElement() {
    const t3 = ae(this.points);
    return new ot(t3.left + t3.width / 2, t3.top + t3.height / 2);
  }
  setDimensions() {
    this.setBoundingBox();
  }
  setBoundingBox(t3) {
    const { left: e5, top: s3, width: i3, height: r3, pathOffset: n3, strokeOffset: o3, strokeDiff: a3 } = this._calcDimensions();
    this.set({
      width: i3,
      height: r3,
      pathOffset: n3,
      strokeOffset: o3,
      strokeDiff: a3
    }), t3 && this.setPositionByOrigin(new ot(e5 + i3 / 2, s3 + r3 / 2), T, T);
  }
  isStrokeAccountedForInDimensions() {
    return this.exactBoundingBox;
  }
  _getNonTransformedDimensions() {
    return this.exactBoundingBox ? new ot(this.width, this.height) : super._getNonTransformedDimensions();
  }
  _getTransformedDimensions() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (this.exactBoundingBox) {
      let n3;
      if (Object.keys(t3).some((t4) => this.strokeUniform || this.constructor.layoutProperties.includes(t4))) {
        var e5, s3;
        const { width: i4, height: r4 } = this._calcDimensions(t3);
        n3 = new ot(null !== (e5 = t3.width) && void 0 !== e5 ? e5 : i4, null !== (s3 = t3.height) && void 0 !== s3 ? s3 : r4);
      } else {
        var i3, r3;
        n3 = new ot(null !== (i3 = t3.width) && void 0 !== i3 ? i3 : this.width, null !== (r3 = t3.height) && void 0 !== r3 ? r3 : this.height);
      }
      return n3.multiply(new ot(t3.scaleX || this.scaleX, t3.scaleY || this.scaleY));
    }
    return super._getTransformedDimensions(t3);
  }
  _set(t3, e5) {
    const s3 = this.initialized && this[t3] !== e5, i3 = super._set(t3, e5);
    return this.exactBoundingBox && s3 && ((t3 === W || t3 === V) && this.strokeUniform && this.constructor.layoutProperties.includes("strokeUniform") || this.constructor.layoutProperties.includes(t3)) && this.setDimensions(), i3;
  }
  toObject() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return {
      ...super.toObject(t3),
      points: this.points.map((t4) => {
        let { x: e5, y: s3 } = t4;
        return {
          x: e5,
          y: s3
        };
      })
    };
  }
  _toSVG() {
    const t3 = [], e5 = this.pathOffset.x, i3 = this.pathOffset.y, r3 = s.NUM_FRACTION_DIGITS;
    for (let s3 = 0, n3 = this.points.length; s3 < n3; s3++) t3.push(Wt(this.points[s3].x - e5, r3), ",", Wt(this.points[s3].y - i3, r3), " ");
    return [
      `<${this.constructor.type.toLowerCase()} `,
      "COMMON_PARTS",
      `points="${t3.join("")}" />
`
    ];
  }
  _render(t3) {
    const e5 = this.points.length, s3 = this.pathOffset.x, i3 = this.pathOffset.y;
    if (e5 && !isNaN(this.points[e5 - 1].y)) {
      t3.beginPath(), t3.moveTo(this.points[0].x - s3, this.points[0].y - i3);
      for (let r3 = 0; r3 < e5; r3++) {
        const e6 = this.points[r3];
        t3.lineTo(e6.x - s3, e6.y - i3);
      }
      !this.isOpen() && t3.closePath(), this._renderPaintInOrder(t3);
    }
  }
  complexity() {
    return this.points.length;
  }
  static async fromElement(t3, e5, s3) {
    const i3 = function(t4) {
      if (!t4) return [];
      const e6 = t4.replace(/,/g, " ").trim().split(/\s+/), s4 = [];
      for (let t5 = 0; t5 < e6.length; t5 += 2) s4.push({
        x: parseFloat(e6[t5]),
        y: parseFloat(e6[t5 + 1])
      });
      return s4;
    }(t3.getAttribute("points")), { left: r3, top: n3, ...o3 } = cr(t3, this.ATTRIBUTE_NAMES, s3);
    return new this(i3, {
      ...o3,
      ...e5
    });
  }
  static fromObject(t3) {
    return this._fromObject(t3, {
      extraParam: "points"
    });
  }
};
t(Vn, "ownDefaults", Wn), t(Vn, "type", "Polyline"), t(Vn, "layoutProperties", [
  G,
  z,
  "strokeLineCap",
  "strokeLineJoin",
  "strokeMiterLimit",
  "strokeWidth",
  "strokeUniform",
  "points"
]), t(Vn, "cacheProperties", [
  ...Os,
  "points"
]), t(Vn, "ATTRIBUTE_NAMES", [
  ...Yi
]), tt.setClass(Vn), tt.setSVGClass(Vn);
var Gn = class extends Vn {
  isOpen() {
    return false;
  }
};
t(Gn, "ownDefaults", Wn), t(Gn, "type", "Polygon"), tt.setClass(Gn), tt.setSVGClass(Gn);
var zn = class extends wi {
  isEmptyStyles(t3) {
    if (!this.styles) return true;
    if (void 0 !== t3 && !this.styles[t3]) return true;
    const e5 = void 0 === t3 ? this.styles : {
      line: this.styles[t3]
    };
    for (const t4 in e5) for (const s3 in e5[t4]) for (const i3 in e5[t4][s3]) return false;
    return true;
  }
  styleHas(t3, e5) {
    if (!this.styles) return false;
    if (void 0 !== e5 && !this.styles[e5]) return false;
    const s3 = void 0 === e5 ? this.styles : {
      0: this.styles[e5]
    };
    for (const e6 in s3) for (const i3 in s3[e6]) if (void 0 !== s3[e6][i3][t3]) return true;
    return false;
  }
  cleanStyle(t3) {
    if (!this.styles) return false;
    const e5 = this.styles;
    let s3, i3, r3 = 0, n3 = true, o3 = 0;
    for (const o4 in e5) {
      s3 = 0;
      for (const a3 in e5[o4]) {
        const h3 = e5[o4][a3] || {};
        r3++, void 0 !== h3[t3] ? (i3 ? h3[t3] !== i3 && (n3 = false) : i3 = h3[t3], h3[t3] === this[t3] && delete h3[t3]) : n3 = false, 0 !== Object.keys(h3).length ? s3++ : delete e5[o4][a3];
      }
      0 === s3 && delete e5[o4];
    }
    for (let t4 = 0; t4 < this._textLines.length; t4++) o3 += this._textLines[t4].length;
    n3 && r3 === o3 && (this[t3] = i3, this.removeStyle(t3));
  }
  removeStyle(t3) {
    if (!this.styles) return;
    const e5 = this.styles;
    let s3, i3, r3;
    for (i3 in e5) {
      for (r3 in s3 = e5[i3], s3) delete s3[r3][t3], 0 === Object.keys(s3[r3]).length && delete s3[r3];
      0 === Object.keys(s3).length && delete e5[i3];
    }
  }
  _extendStyles(t3, e5) {
    const { lineIndex: s3, charIndex: i3 } = this.get2DCursorLocation(t3);
    this._getLineStyle(s3) || this._setLineStyle(s3);
    const r3 = Yt({
      ...this._getStyleDeclaration(s3, i3),
      ...e5
    }, (t4) => void 0 !== t4);
    this._setStyleDeclaration(s3, i3, r3);
  }
  getSelectionStyles(t3, e5, s3) {
    const i3 = [];
    for (let r3 = t3; r3 < (e5 || t3); r3++) i3.push(this.getStyleAtPosition(r3, s3));
    return i3;
  }
  getStyleAtPosition(t3, e5) {
    const { lineIndex: s3, charIndex: i3 } = this.get2DCursorLocation(t3);
    return e5 ? this.getCompleteStyleDeclaration(s3, i3) : this._getStyleDeclaration(s3, i3);
  }
  setSelectionStyles(t3, e5, s3) {
    for (let i3 = e5; i3 < (s3 || e5); i3++) this._extendStyles(i3, t3);
    this._forceClearCache = true;
  }
  _getStyleDeclaration(t3, e5) {
    var s3;
    const i3 = this.styles && this.styles[t3];
    return i3 && null !== (s3 = i3[e5]) && void 0 !== s3 ? s3 : {};
  }
  getCompleteStyleDeclaration(t3, e5) {
    return {
      ...Xt(this, this.constructor._styleProperties),
      ...this._getStyleDeclaration(t3, e5)
    };
  }
  _setStyleDeclaration(t3, e5, s3) {
    this.styles[t3][e5] = s3;
  }
  _deleteStyleDeclaration(t3, e5) {
    delete this.styles[t3][e5];
  }
  _getLineStyle(t3) {
    return !!this.styles[t3];
  }
  _setLineStyle(t3) {
    this.styles[t3] = {};
  }
  _deleteLineStyle(t3) {
    delete this.styles[t3];
  }
};
t(zn, "_styleProperties", rs);
var Hn = /  +/g;
var Nn = /"/g;
function Un(t3, e5, i3, r3, n3) {
  return `		${function(t4, e6) {
    let { left: i4, top: r4, width: n4, height: o3 } = e6, a3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.NUM_FRACTION_DIGITS;
    const h3 = Ke(H, t4, false), [l3, c2, u3, d3] = [
      i4,
      r4,
      n4,
      o3
    ].map((t5) => Wt(t5, a3));
    return `<rect ${h3} x="${l3}" y="${c2}" width="${u3}" height="${d3}"></rect>`;
  }(t3, {
    left: e5,
    top: i3,
    width: r3,
    height: n3
  })}
`;
}
var qn;
var Kn = class _Kn extends zn {
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ..._Kn.ownDefaults
    };
  }
  constructor(e5, s3) {
    super(), t(this, "__charBounds", []), Object.assign(this, _Kn.ownDefaults), this.setOptions(s3), this.styles || (this.styles = {}), this.text = e5, this.initialized = true, this.path && this.setPathInfo(), this.initDimensions(), this.setCoords();
  }
  setPathInfo() {
    const t3 = this.path;
    t3 && (t3.segmentsInfo = zr(t3.path));
  }
  _splitText() {
    const t3 = this._splitTextIntoLines(this.text);
    return this.textLines = t3.lines, this._textLines = t3.graphemeLines, this._unwrappedTextLines = t3._unwrappedLines, this._text = t3.graphemeText, t3;
  }
  initDimensions() {
    this._splitText(), this._clearCache(), this.dirty = true, this.path ? (this.width = this.path.width, this.height = this.path.height) : (this.width = this.calcTextWidth() || this.cursorWidth || this.MIN_TEXT_WIDTH, this.height = this.calcTextHeight()), this.textAlign.includes(os) && this.enlargeSpaces();
  }
  enlargeSpaces() {
    let t3, e5, s3, i3, r3, n3, o3;
    for (let a3 = 0, h3 = this._textLines.length; a3 < h3; a3++) if ((this.textAlign === os || a3 !== h3 - 1 && !this.isEndOfWrapping(a3)) && (i3 = 0, r3 = this._textLines[a3], e5 = this.getLineWidth(a3), e5 < this.width && (o3 = this.textLines[a3].match(this._reSpacesAndTabs)))) {
      s3 = o3.length, t3 = (this.width - e5) / s3;
      for (let e6 = 0; e6 <= r3.length; e6++) n3 = this.__charBounds[a3][e6], this._reSpaceAndTab.test(r3[e6]) ? (n3.width += t3, n3.kernedWidth += t3, n3.left += i3, i3 += t3) : n3.left += i3;
    }
  }
  isEndOfWrapping(t3) {
    return t3 === this._textLines.length - 1;
  }
  missingNewlineOffset(t3) {
    return 1;
  }
  get2DCursorLocation(t3, e5) {
    const s3 = e5 ? this._unwrappedTextLines : this._textLines;
    let i3;
    for (i3 = 0; i3 < s3.length; i3++) {
      if (t3 <= s3[i3].length) return {
        lineIndex: i3,
        charIndex: t3
      };
      t3 -= s3[i3].length + this.missingNewlineOffset(i3, e5);
    }
    return {
      lineIndex: i3 - 1,
      charIndex: s3[i3 - 1].length < t3 ? s3[i3 - 1].length : t3
    };
  }
  toString() {
    return `#<Text (${this.complexity()}): { "text": "${this.text}", "fontFamily": "${this.fontFamily}" }>`;
  }
  _getCacheCanvasDimensions() {
    const t3 = super._getCacheCanvasDimensions(), e5 = this.fontSize;
    return t3.width += e5 * t3.zoomX, t3.height += e5 * t3.zoomY, t3;
  }
  _render(t3) {
    const e5 = this.path;
    e5 && !e5.isNotVisible() && e5._render(t3), this._setTextStyles(t3), this._renderTextLinesBackground(t3), this._renderTextDecoration(t3, "underline"), this._renderText(t3), this._renderTextDecoration(t3, "overline"), this._renderTextDecoration(t3, "linethrough");
  }
  _renderText(t3) {
    this.paintFirst === N ? (this._renderTextStroke(t3), this._renderTextFill(t3)) : (this._renderTextFill(t3), this._renderTextStroke(t3));
  }
  _setTextStyles(t3, e5, s3) {
    if (t3.textBaseline = "alphabetic", this.path) switch (this.pathAlign) {
      case T:
        t3.textBaseline = "middle";
        break;
      case "ascender":
        t3.textBaseline = k;
        break;
      case "descender":
        t3.textBaseline = D;
    }
    t3.font = this._getFontDeclaration(e5, s3);
  }
  calcTextWidth() {
    let t3 = this.getLineWidth(0);
    for (let e5 = 1, s3 = this._textLines.length; e5 < s3; e5++) {
      const s4 = this.getLineWidth(e5);
      s4 > t3 && (t3 = s4);
    }
    return t3;
  }
  _renderTextLine(t3, e5, s3, i3, r3, n3) {
    this._renderChars(t3, e5, s3, i3, r3, n3);
  }
  _renderTextLinesBackground(t3) {
    if (!this.textBackgroundColor && !this.styleHas("textBackgroundColor")) return;
    const e5 = t3.fillStyle, s3 = this._getLeftOffset();
    let i3 = this._getTopOffset();
    for (let e6 = 0, r3 = this._textLines.length; e6 < r3; e6++) {
      const r4 = this.getHeightOfLine(e6);
      if (!this.textBackgroundColor && !this.styleHas("textBackgroundColor", e6)) {
        i3 += r4;
        continue;
      }
      const n3 = this._textLines[e6].length, o3 = this._getLineLeftOffset(e6);
      let a3, h3, l3 = 0, c2 = 0, u3 = this.getValueOfPropertyAt(e6, 0, "textBackgroundColor");
      const d3 = this.getHeightOfLineImpl(e6);
      for (let r5 = 0; r5 < n3; r5++) {
        const n4 = this.__charBounds[e6][r5];
        h3 = this.getValueOfPropertyAt(e6, r5, "textBackgroundColor"), this.path ? (t3.save(), t3.translate(n4.renderLeft, n4.renderTop), t3.rotate(n4.angle), t3.fillStyle = h3, h3 && t3.fillRect(-n4.width / 2, -d3 * (1 - this._fontSizeFraction), n4.width, d3), t3.restore()) : h3 !== u3 ? (a3 = s3 + o3 + c2, this.direction === K && (a3 = this.width - a3 - l3), t3.fillStyle = u3, u3 && t3.fillRect(a3, i3, l3, d3), c2 = n4.left, l3 = n4.width, u3 = h3) : l3 += n4.kernedWidth;
      }
      h3 && !this.path && (a3 = s3 + o3 + c2, this.direction === K && (a3 = this.width - a3 - l3), t3.fillStyle = h3, t3.fillRect(a3, i3, l3, d3)), i3 += r4;
    }
    t3.fillStyle = e5, this._removeShadow(t3);
  }
  _measureChar(t3, e5, s3, i3) {
    const r3 = p.getFontCache(e5), n3 = this._getFontDeclaration(e5), o3 = s3 ? s3 + t3 : t3, a3 = s3 && n3 === this._getFontDeclaration(i3), h3 = e5.fontSize / this.CACHE_FONT_SIZE;
    let l3, c2, u3, d3;
    if (s3 && r3.has(s3) && (u3 = r3.get(s3)), r3.has(t3) && (d3 = l3 = r3.get(t3)), a3 && r3.has(o3) && (c2 = r3.get(o3), d3 = c2 - u3), void 0 === l3 || void 0 === u3 || void 0 === c2) {
      const i4 = function() {
        if (!qn) {
          const t4 = vt({
            width: 0,
            height: 0
          });
          qn = t4.getContext("2d");
        }
        return qn;
      }();
      this._setTextStyles(i4, e5, true), void 0 === l3 && (d3 = l3 = i4.measureText(t3).width, r3.set(t3, l3)), void 0 === u3 && a3 && s3 && (u3 = i4.measureText(s3).width, r3.set(s3, u3)), a3 && void 0 === c2 && (c2 = i4.measureText(o3).width, r3.set(o3, c2), d3 = c2 - u3);
    }
    return {
      width: l3 * h3,
      kernedWidth: d3 * h3
    };
  }
  getHeightOfChar(t3, e5) {
    return this.getValueOfPropertyAt(t3, e5, "fontSize");
  }
  measureLine(t3) {
    const e5 = this._measureLine(t3);
    return 0 !== this.charSpacing && (e5.width -= this._getWidthOfCharSpacing()), e5.width < 0 && (e5.width = 0), e5;
  }
  _measureLine(t3) {
    let e5, s3, i3 = 0;
    const r3 = this.pathSide === M, n3 = this.path, o3 = this._textLines[t3], a3 = o3.length, h3 = new Array(a3);
    this.__charBounds[t3] = h3;
    for (let r4 = 0; r4 < a3; r4++) {
      const n4 = o3[r4];
      s3 = this._getGraphemeBox(n4, t3, r4, e5), h3[r4] = s3, i3 += s3.kernedWidth, e5 = n4;
    }
    if (h3[a3] = {
      left: s3 ? s3.left + s3.width : 0,
      width: 0,
      kernedWidth: 0,
      height: this.fontSize,
      deltaY: 0
    }, n3 && n3.segmentsInfo) {
      let t4 = 0;
      const e6 = n3.segmentsInfo[n3.segmentsInfo.length - 1].length;
      switch (this.textAlign) {
        case O:
          t4 = r3 ? e6 - i3 : 0;
          break;
        case T:
          t4 = (e6 - i3) / 2;
          break;
        case M:
          t4 = r3 ? 0 : e6 - i3;
      }
      t4 += this.pathStartOffset * (r3 ? -1 : 1);
      for (let i4 = r3 ? a3 - 1 : 0; r3 ? i4 >= 0 : i4 < a3; r3 ? i4-- : i4++) s3 = h3[i4], t4 > e6 ? t4 %= e6 : t4 < 0 && (t4 += e6), this._setGraphemeOnPath(t4, s3), t4 += s3.kernedWidth;
    }
    return {
      width: i3,
      numOfSpaces: 0
    };
  }
  _setGraphemeOnPath(t3, e5) {
    const s3 = t3 + e5.kernedWidth / 2, i3 = this.path, r3 = Hr(i3.path, s3, i3.segmentsInfo);
    e5.renderLeft = r3.x - i3.pathOffset.x, e5.renderTop = r3.y - i3.pathOffset.y, e5.angle = r3.angle + (this.pathSide === M ? Math.PI : 0);
  }
  _getGraphemeBox(t3, e5, s3, i3, r3) {
    const n3 = this.getCompleteStyleDeclaration(e5, s3), o3 = i3 ? this.getCompleteStyleDeclaration(e5, s3 - 1) : {}, a3 = this._measureChar(t3, n3, i3, o3);
    let h3, l3 = a3.kernedWidth, c2 = a3.width;
    0 !== this.charSpacing && (h3 = this._getWidthOfCharSpacing(), c2 += h3, l3 += h3);
    const u3 = {
      width: c2,
      left: 0,
      height: n3.fontSize,
      kernedWidth: l3,
      deltaY: n3.deltaY
    };
    if (s3 > 0 && !r3) {
      const t4 = this.__charBounds[e5][s3 - 1];
      u3.left = t4.left + t4.width + a3.kernedWidth - a3.width;
    }
    return u3;
  }
  getHeightOfLineImpl(t3) {
    const e5 = this.__lineHeights;
    if (e5[t3]) return e5[t3];
    let s3 = this.getHeightOfChar(t3, 0);
    for (let e6 = 1, i3 = this._textLines[t3].length; e6 < i3; e6++) s3 = Math.max(this.getHeightOfChar(t3, e6), s3);
    return e5[t3] = s3 * this._fontSizeMult;
  }
  getHeightOfLine(t3) {
    return this.getHeightOfLineImpl(t3) * this.lineHeight;
  }
  calcTextHeight() {
    let t3 = 0;
    for (let e5 = 0, s3 = this._textLines.length; e5 < s3; e5++) t3 += e5 === s3 - 1 ? this.getHeightOfLineImpl(e5) : this.getHeightOfLine(e5);
    return t3;
  }
  _getLeftOffset() {
    return this.direction === q ? -this.width / 2 : this.width / 2;
  }
  _getTopOffset() {
    return -this.height / 2;
  }
  _renderTextCommon(t3, e5) {
    t3.save();
    let s3 = 0;
    const i3 = this._getLeftOffset(), r3 = this._getTopOffset();
    for (let n3 = 0, o3 = this._textLines.length; n3 < o3; n3++) this._renderTextLine(e5, t3, this._textLines[n3], i3 + this._getLineLeftOffset(n3), r3 + s3 + this.getHeightOfLineImpl(n3), n3), s3 += this.getHeightOfLine(n3);
    t3.restore();
  }
  _renderTextFill(t3) {
    (this.fill || this.styleHas(H)) && this._renderTextCommon(t3, "fillText");
  }
  _renderTextStroke(t3) {
    (this.stroke && 0 !== this.strokeWidth || !this.isEmptyStyles()) && (this.shadow && !this.shadow.affectStroke && this._removeShadow(t3), t3.save(), this._setLineDash(t3, this.strokeDashArray), t3.beginPath(), this._renderTextCommon(t3, "strokeText"), t3.closePath(), t3.restore());
  }
  _renderChars(t3, e5, s3, i3, r3, n3) {
    const o3 = this.textAlign.includes(os), a3 = this.path, h3 = !o3 && 0 === this.charSpacing && this.isEmptyStyles(n3) && !a3, l3 = this.direction === q, c2 = this.direction === q ? 1 : -1, u3 = e5.direction;
    let d3, g3, f3, p3, m3, v3 = "", y3 = 0;
    if (e5.save(), u3 !== this.direction && (e5.canvas.setAttribute("dir", l3 ? q : K), e5.direction = l3 ? q : K, e5.textAlign = l3 ? O : M), r3 -= this.getHeightOfLineImpl(n3) * this._fontSizeFraction, h3) return this._renderChar(t3, e5, n3, 0, s3.join(""), i3, r3), void e5.restore();
    for (let h4 = 0, l4 = s3.length - 1; h4 <= l4; h4++) p3 = h4 === l4 || this.charSpacing || a3, v3 += s3[h4], f3 = this.__charBounds[n3][h4], 0 === y3 ? (i3 += c2 * (f3.kernedWidth - f3.width), y3 += f3.width) : y3 += f3.kernedWidth, o3 && !p3 && this._reSpaceAndTab.test(s3[h4]) && (p3 = true), p3 || (d3 = d3 || this.getCompleteStyleDeclaration(n3, h4), g3 = this.getCompleteStyleDeclaration(n3, h4 + 1), p3 = Ri(d3, g3, false)), p3 && (a3 ? (e5.save(), e5.translate(f3.renderLeft, f3.renderTop), e5.rotate(f3.angle), this._renderChar(t3, e5, n3, h4, v3, -y3 / 2, 0), e5.restore()) : (m3 = i3, this._renderChar(t3, e5, n3, h4, v3, m3, r3)), v3 = "", d3 = g3, i3 += c2 * y3, y3 = 0);
    e5.restore();
  }
  _applyPatternGradientTransformText(t3) {
    const e5 = this.width + this.strokeWidth, s3 = this.height + this.strokeWidth, i3 = vt({
      width: e5,
      height: s3
    }), r3 = i3.getContext("2d");
    return i3.width = e5, i3.height = s3, r3.beginPath(), r3.moveTo(0, 0), r3.lineTo(e5, 0), r3.lineTo(e5, s3), r3.lineTo(0, s3), r3.closePath(), r3.translate(e5 / 2, s3 / 2), r3.fillStyle = t3.toLive(r3), this._applyPatternGradientTransform(r3, t3), r3.fill(), r3.createPattern(i3, "no-repeat");
  }
  handleFiller(t3, e5, s3) {
    let i3, r3;
    return Gt(s3) ? "percentage" === s3.gradientUnits || s3.gradientTransform || s3.patternTransform ? (i3 = -this.width / 2, r3 = -this.height / 2, t3.translate(i3, r3), t3[e5] = this._applyPatternGradientTransformText(s3), {
      offsetX: i3,
      offsetY: r3
    }) : (t3[e5] = s3.toLive(t3), this._applyPatternGradientTransform(t3, s3)) : (t3[e5] = s3, {
      offsetX: 0,
      offsetY: 0
    });
  }
  _setStrokeStyles(t3, e5) {
    let { stroke: s3, strokeWidth: i3 } = e5;
    return t3.lineWidth = i3, t3.lineCap = this.strokeLineCap, t3.lineDashOffset = this.strokeDashOffset, t3.lineJoin = this.strokeLineJoin, t3.miterLimit = this.strokeMiterLimit, this.handleFiller(t3, "strokeStyle", s3);
  }
  _setFillStyles(t3, e5) {
    let { fill: s3 } = e5;
    return this.handleFiller(t3, "fillStyle", s3);
  }
  _renderChar(t3, e5, s3, i3, r3, n3, o3) {
    const a3 = this._getStyleDeclaration(s3, i3), h3 = this.getCompleteStyleDeclaration(s3, i3), l3 = "fillText" === t3 && h3.fill, c2 = "strokeText" === t3 && h3.stroke && h3.strokeWidth;
    if (c2 || l3) {
      if (e5.save(), e5.font = this._getFontDeclaration(h3), a3.textBackgroundColor && this._removeShadow(e5), a3.deltaY && (o3 += a3.deltaY), l3) {
        const t4 = this._setFillStyles(e5, h3);
        e5.fillText(r3, n3 - t4.offsetX, o3 - t4.offsetY);
      }
      if (c2) {
        const t4 = this._setStrokeStyles(e5, h3);
        e5.strokeText(r3, n3 - t4.offsetX, o3 - t4.offsetY);
      }
      e5.restore();
    }
  }
  setSuperscript(t3, e5) {
    this._setScript(t3, e5, this.superscript);
  }
  setSubscript(t3, e5) {
    this._setScript(t3, e5, this.subscript);
  }
  _setScript(t3, e5, s3) {
    const i3 = this.get2DCursorLocation(t3, true), r3 = this.getValueOfPropertyAt(i3.lineIndex, i3.charIndex, "fontSize"), n3 = this.getValueOfPropertyAt(i3.lineIndex, i3.charIndex, "deltaY"), o3 = {
      fontSize: r3 * s3.size,
      deltaY: n3 + r3 * s3.baseline
    };
    this.setSelectionStyles(o3, t3, e5);
  }
  _getLineLeftOffset(t3) {
    const e5 = this.getLineWidth(t3), s3 = this.width - e5, i3 = this.textAlign, r3 = this.direction, n3 = this.isEndOfWrapping(t3);
    let o3 = 0;
    return i3 === os || i3 === ls && !n3 || i3 === hs && !n3 || i3 === as && !n3 ? 0 : (i3 === T && (o3 = s3 / 2), i3 === M && (o3 = s3), i3 === ls && (o3 = s3 / 2), i3 === hs && (o3 = s3), r3 === K && (i3 === M || i3 === hs ? o3 = 0 : i3 === O || i3 === as ? o3 = -s3 : i3 !== T && i3 !== ls || (o3 = -s3 / 2)), o3);
  }
  _clearCache() {
    this._forceClearCache = false, this.__lineWidths = [], this.__lineHeights = [], this.__charBounds = [];
  }
  getLineWidth(t3) {
    if (void 0 !== this.__lineWidths[t3]) return this.__lineWidths[t3];
    const { width: e5 } = this.measureLine(t3);
    return this.__lineWidths[t3] = e5, e5;
  }
  _getWidthOfCharSpacing() {
    return 0 !== this.charSpacing ? this.fontSize * this.charSpacing / 1e3 : 0;
  }
  getValueOfPropertyAt(t3, e5, s3) {
    var i3;
    return null !== (i3 = this._getStyleDeclaration(t3, e5)[s3]) && void 0 !== i3 ? i3 : this[s3];
  }
  _renderTextDecoration(t3, e5) {
    if (!this[e5] && !this.styleHas(e5)) return;
    let s3 = this._getTopOffset();
    const i3 = this._getLeftOffset(), r3 = this.path, n3 = this._getWidthOfCharSpacing(), o3 = "linethrough" === e5 ? 0.5 : "overline" === e5 ? 1 : 0, a3 = this.offsets[e5];
    for (let h3 = 0, l3 = this._textLines.length; h3 < l3; h3++) {
      const l4 = this.getHeightOfLine(h3);
      if (!this[e5] && !this.styleHas(e5, h3)) {
        s3 += l4;
        continue;
      }
      const c2 = this._textLines[h3], u3 = l4 / this.lineHeight, d3 = this._getLineLeftOffset(h3);
      let g3 = 0, f3 = 0, p3 = this.getValueOfPropertyAt(h3, 0, e5), m3 = this.getValueOfPropertyAt(h3, 0, H), v3 = this.getValueOfPropertyAt(h3, 0, Ze), y3 = p3, _3 = m3, x3 = v3;
      const C3 = s3 + u3 * (1 - this._fontSizeFraction);
      let S3 = this.getHeightOfChar(h3, 0), b3 = this.getValueOfPropertyAt(h3, 0, "deltaY");
      for (let s4 = 0, n4 = c2.length; s4 < n4; s4++) {
        const n5 = this.__charBounds[h3][s4];
        y3 = this.getValueOfPropertyAt(h3, s4, e5), _3 = this.getValueOfPropertyAt(h3, s4, H), x3 = this.getValueOfPropertyAt(h3, s4, Ze);
        const l5 = this.getHeightOfChar(h3, s4), c3 = this.getValueOfPropertyAt(h3, s4, "deltaY");
        if (r3 && y3 && _3) {
          const e6 = this.fontSize * x3 / 1e3;
          t3.save(), t3.fillStyle = m3, t3.translate(n5.renderLeft, n5.renderTop), t3.rotate(n5.angle), t3.fillRect(-n5.kernedWidth / 2, a3 * l5 + c3 - o3 * e6, n5.kernedWidth, e6), t3.restore();
        } else if ((y3 !== p3 || _3 !== m3 || l5 !== S3 || x3 !== v3 || c3 !== b3) && f3 > 0) {
          const e6 = this.fontSize * v3 / 1e3;
          let s5 = i3 + d3 + g3;
          this.direction === K && (s5 = this.width - s5 - f3), p3 && m3 && v3 && (t3.fillStyle = m3, t3.fillRect(s5, C3 + a3 * S3 + b3 - o3 * e6, f3, e6)), g3 = n5.left, f3 = n5.width, p3 = y3, v3 = x3, m3 = _3, S3 = l5, b3 = c3;
        } else f3 += n5.kernedWidth;
      }
      let w3 = i3 + d3 + g3;
      this.direction === K && (w3 = this.width - w3 - f3), t3.fillStyle = _3;
      const T2 = this.fontSize * x3 / 1e3;
      y3 && _3 && x3 && t3.fillRect(w3, C3 + a3 * S3 + b3 - o3 * T2, f3 - n3, T2), s3 += l4;
    }
    this._removeShadow(t3);
  }
  _getFontDeclaration() {
    let { fontFamily: t3 = this.fontFamily, fontStyle: e5 = this.fontStyle, fontWeight: s3 = this.fontWeight, fontSize: i3 = this.fontSize } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r3 = arguments.length > 1 ? arguments[1] : void 0;
    const n3 = t3.includes("'") || t3.includes('"') || t3.includes(",") || _Kn.genericFonts.includes(t3.toLowerCase()) ? t3 : `"${t3}"`;
    return [
      e5,
      s3,
      `${r3 ? this.CACHE_FONT_SIZE : i3}px`,
      n3
    ].join(" ");
  }
  render(t3) {
    this.visible && (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (this._forceClearCache && this.initDimensions(), super.render(t3)));
  }
  graphemeSplit(t3) {
    return Fi(t3);
  }
  _splitTextIntoLines(t3) {
    const e5 = t3.split(this._reNewline), s3 = new Array(e5.length), i3 = [
      "\n"
    ];
    let r3 = [];
    for (let t4 = 0; t4 < e5.length; t4++) s3[t4] = this.graphemeSplit(e5[t4]), r3 = r3.concat(s3[t4], i3);
    return r3.pop(), {
      _unwrappedLines: s3,
      lines: e5,
      graphemeText: r3,
      graphemeLines: s3
    };
  }
  toObject() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return {
      ...super.toObject([
        ...is,
        ...t3
      ]),
      styles: $i(this.styles, this.text),
      ...this.path ? {
        path: this.path.toObject()
      } : {}
    };
  }
  set(t3, e5) {
    const { textLayoutProperties: s3 } = this.constructor;
    super.set(t3, e5);
    let i3 = false, r3 = false;
    if ("object" == typeof t3) for (const e6 in t3) "path" === e6 && this.setPathInfo(), i3 = i3 || s3.includes(e6), r3 = r3 || "path" === e6;
    else i3 = s3.includes(t3), r3 = "path" === t3;
    return r3 && this.setPathInfo(), i3 && this.initialized && (this.initDimensions(), this.setCoords()), this;
  }
  complexity() {
    return 1;
  }
  static async fromElement(t3, e5, s3) {
    const i3 = cr(t3, _Kn.ATTRIBUTE_NAMES, s3), { textAnchor: r3 = O, textDecoration: n3 = "", dx: o3 = 0, dy: a3 = 0, top: h3 = 0, left: l3 = 0, fontSize: c2 = b, strokeWidth: u3 = 1, ...d3 } = {
      ...e5,
      ...i3
    }, g3 = new this(Xe(t3.textContent || "").trim(), {
      left: l3 + o3,
      top: h3 + a3,
      underline: n3.includes("underline"),
      overline: n3.includes("overline"),
      linethrough: n3.includes("line-through"),
      strokeWidth: 0,
      fontSize: c2,
      ...d3
    }), f3 = g3.getScaledHeight() / g3.height, p3 = ((g3.height + g3.strokeWidth) * g3.lineHeight - g3.height) * f3, m3 = g3.getScaledHeight() + p3;
    let v3 = 0;
    return r3 === T && (v3 = g3.getScaledWidth() / 2), r3 === M && (v3 = g3.getScaledWidth()), g3.set({
      left: g3.left - v3,
      top: g3.top - (m3 - g3.fontSize * (0.07 + g3._fontSizeFraction)) / g3.lineHeight,
      strokeWidth: u3
    }), g3;
  }
  static fromObject(t3) {
    return this._fromObject({
      ...t3,
      styles: Xi(t3.styles || {}, t3.text)
    }, {
      extraParam: "text"
    });
  }
};
t(Kn, "textLayoutProperties", ss), t(Kn, "cacheProperties", [
  ...Os,
  ...is
]), t(Kn, "ownDefaults", ns), t(Kn, "type", "Text"), t(Kn, "genericFonts", [
  "serif",
  "sans-serif",
  "monospace",
  "cursive",
  "fantasy",
  "system-ui",
  "ui-serif",
  "ui-sans-serif",
  "ui-monospace",
  "ui-rounded",
  "math",
  "emoji",
  "fangsong"
]), t(Kn, "ATTRIBUTE_NAMES", Yi.concat("x", "y", "dx", "dy", "font-family", "font-style", "font-weight", "font-size", "letter-spacing", "text-decoration", "text-anchor")), bi(Kn, [
  class extends Je {
    _toSVG() {
      const t3 = this._getSVGLeftTopOffsets(), e5 = this._getSVGTextAndBg(t3.textTop, t3.textLeft);
      return this._wrapSVGTextAndBg(e5);
    }
    toSVG(t3) {
      const e5 = this._createBaseSVGMarkup(this._toSVG(), {
        reviver: t3,
        noStyle: true,
        withShadow: true
      }), s3 = this.path;
      return s3 ? e5 + s3._createBaseSVGMarkup(s3._toSVG(), {
        reviver: t3,
        withShadow: true,
        additionalTransform: Vt(this.calcOwnMatrix())
      }) : e5;
    }
    _getSVGLeftTopOffsets() {
      return {
        textLeft: -this.width / 2,
        textTop: -this.height / 2,
        lineTop: this.getHeightOfLine(0)
      };
    }
    _wrapSVGTextAndBg(t3) {
      let { textBgRects: e5, textSpans: s3 } = t3;
      const i3 = this.getSvgTextDecoration(this);
      return [
        e5.join(""),
        '		<text xml:space="preserve" ',
        `font-family="${this.fontFamily.replace(Nn, "'")}" `,
        `font-size="${this.fontSize}" `,
        this.fontStyle ? `font-style="${this.fontStyle}" ` : "",
        this.fontWeight ? `font-weight="${this.fontWeight}" ` : "",
        i3 ? `text-decoration="${i3}" ` : "",
        "rtl" === this.direction ? `direction="${this.direction}" ` : "",
        'style="',
        this.getSvgStyles(true),
        '"',
        this.addPaintOrder(),
        " >",
        s3.join(""),
        "</text>\n"
      ];
    }
    _getSVGTextAndBg(t3, e5) {
      const s3 = [], i3 = [];
      let r3, n3 = t3;
      this.backgroundColor && i3.push(...Un(this.backgroundColor, -this.width / 2, -this.height / 2, this.width, this.height));
      for (let t4 = 0, o3 = this._textLines.length; t4 < o3; t4++) r3 = this._getLineLeftOffset(t4), "rtl" === this.direction && (r3 += this.width), (this.textBackgroundColor || this.styleHas("textBackgroundColor", t4)) && this._setSVGTextLineBg(i3, t4, e5 + r3, n3), this._setSVGTextLineText(s3, t4, e5 + r3, n3), n3 += this.getHeightOfLine(t4);
      return {
        textSpans: s3,
        textBgRects: i3
      };
    }
    _createTextCharSpan(t3, e5, i3, r3, n3) {
      const o3 = s.NUM_FRACTION_DIGITS, a3 = this.getSvgSpanStyles(e5, t3 !== t3.trim() || !!t3.match(Hn)), h3 = a3 ? `style="${a3}"` : "", l3 = e5.deltaY, c2 = l3 ? ` dy="${Wt(l3, o3)}" ` : "", { angle: u3, renderLeft: d3, renderTop: g3, width: f3 } = n3;
      let p3 = "";
      if (void 0 !== d3) {
        const t4 = f3 / 2;
        u3 && (p3 = ` rotate="${Wt(Ct(u3), o3)}"`);
        const e6 = Pt({
          angle: Ct(u3)
        });
        e6[4] = d3, e6[5] = g3;
        const s3 = new ot(-t4, 0).transform(e6);
        i3 = s3.x, r3 = s3.y;
      }
      return `<tspan x="${Wt(i3, o3)}" y="${Wt(r3, o3)}" ${c2}${p3}${h3}>${Ai(t3)}</tspan>`;
    }
    _setSVGTextLineText(t3, e5, s3, i3) {
      const r3 = this.getHeightOfLine(e5), n3 = this.textAlign.includes(os), o3 = this._textLines[e5];
      let a3, h3, l3, c2, u3, d3 = "", g3 = 0;
      i3 += r3 * (1 - this._fontSizeFraction) / this.lineHeight;
      for (let r4 = 0, f3 = o3.length - 1; r4 <= f3; r4++) u3 = r4 === f3 || this.charSpacing || this.path, d3 += o3[r4], l3 = this.__charBounds[e5][r4], 0 === g3 ? (s3 += l3.kernedWidth - l3.width, g3 += l3.width) : g3 += l3.kernedWidth, n3 && !u3 && this._reSpaceAndTab.test(o3[r4]) && (u3 = true), u3 || (a3 = a3 || this.getCompleteStyleDeclaration(e5, r4), h3 = this.getCompleteStyleDeclaration(e5, r4 + 1), u3 = Ri(a3, h3, true)), u3 && (c2 = this._getStyleDeclaration(e5, r4), t3.push(this._createTextCharSpan(d3, c2, s3, i3, l3)), d3 = "", a3 = h3, "rtl" === this.direction ? s3 -= g3 : s3 += g3, g3 = 0);
    }
    _setSVGTextLineBg(t3, e5, s3, i3) {
      const r3 = this._textLines[e5], n3 = this.getHeightOfLine(e5) / this.lineHeight;
      let o3, a3 = 0, h3 = 0, l3 = this.getValueOfPropertyAt(e5, 0, "textBackgroundColor");
      for (let c2 = 0; c2 < r3.length; c2++) {
        const { left: r4, width: u3, kernedWidth: d3 } = this.__charBounds[e5][c2];
        o3 = this.getValueOfPropertyAt(e5, c2, "textBackgroundColor"), o3 !== l3 ? (l3 && t3.push(...Un(l3, s3 + h3, i3, a3, n3)), h3 = r4, a3 = u3, l3 = o3) : a3 += d3;
      }
      o3 && t3.push(...Un(l3, s3 + h3, i3, a3, n3));
    }
    getSvgStyles(t3) {
      return `${super.getSvgStyles(t3)} text-decoration-thickness: ${Wt(this.textDecorationThickness * this.getObjectScaling().y / 10, s.NUM_FRACTION_DIGITS)}%; white-space: pre;`;
    }
    getSvgSpanStyles(t3, e5) {
      const { fontFamily: i3, strokeWidth: r3, stroke: n3, fill: o3, fontSize: a3, fontStyle: h3, fontWeight: l3, deltaY: c2, textDecorationThickness: u3, linethrough: d3, overline: g3, underline: f3 } = t3, p3 = this.getSvgTextDecoration({
        underline: null != f3 ? f3 : this.underline,
        overline: null != g3 ? g3 : this.overline,
        linethrough: null != d3 ? d3 : this.linethrough
      }), m3 = u3 || this.textDecorationThickness;
      return [
        n3 ? Ke(N, n3) : "",
        r3 ? `stroke-width: ${r3}; ` : "",
        i3 ? `font-family: ${i3.includes("'") || i3.includes('"') ? i3 : `'${i3}'`}; ` : "",
        a3 ? `font-size: ${a3}px; ` : "",
        h3 ? `font-style: ${h3}; ` : "",
        l3 ? `font-weight: ${l3}; ` : "",
        p3 ? `text-decoration: ${p3}; text-decoration-thickness: ${Wt(m3 * this.getObjectScaling().y / 10, s.NUM_FRACTION_DIGITS)}%; ` : "",
        o3 ? Ke(H, o3) : "",
        c2 ? `baseline-shift: ${-c2}; ` : "",
        e5 ? "white-space: pre; " : ""
      ].join("");
    }
    getSvgTextDecoration(t3) {
      return [
        "overline",
        "underline",
        "line-through"
      ].filter((e5) => t3[e5.replace("-", "")]).join(" ");
    }
  }
]), tt.setClass(Kn), tt.setSVGClass(Kn);
var Jn = class {
  constructor(e5) {
    t(this, "target", void 0), t(this, "__mouseDownInPlace", false), t(this, "__dragStartFired", false), t(this, "__isDraggingOver", false), t(this, "__dragStartSelection", void 0), t(this, "__dragImageDisposer", void 0), t(this, "_dispose", void 0), this.target = e5;
    const s3 = [
      this.target.on("dragenter", this.dragEnterHandler.bind(this)),
      this.target.on("dragover", this.dragOverHandler.bind(this)),
      this.target.on("dragleave", this.dragLeaveHandler.bind(this)),
      this.target.on("dragend", this.dragEndHandler.bind(this)),
      this.target.on("drop", this.dropHandler.bind(this))
    ];
    this._dispose = () => {
      s3.forEach((t3) => t3()), this._dispose = void 0;
    };
  }
  isPointerOverSelection(t3) {
    const e5 = this.target, s3 = e5.getSelectionStartFromPointer(t3);
    return e5.isEditing && s3 >= e5.selectionStart && s3 <= e5.selectionEnd && e5.selectionStart < e5.selectionEnd;
  }
  start(t3) {
    return this.__mouseDownInPlace = this.isPointerOverSelection(t3);
  }
  isActive() {
    return this.__mouseDownInPlace;
  }
  end(t3) {
    const e5 = this.isActive();
    return e5 && !this.__dragStartFired && (this.target.setCursorByClick(t3), this.target.initDelayedCursor(true)), this.__mouseDownInPlace = false, this.__dragStartFired = false, this.__isDraggingOver = false, e5;
  }
  getDragStartSelection() {
    return this.__dragStartSelection;
  }
  setDragImage(t3, e5) {
    var s3;
    let { selectionStart: i3, selectionEnd: r3 } = e5;
    const n3 = this.target, o3 = n3.canvas, a3 = new ot(n3.flipX ? -1 : 1, n3.flipY ? -1 : 1), h3 = n3._getCursorBoundaries(i3), l3 = new ot(h3.left + h3.leftOffset, h3.top + h3.topOffset).multiply(a3).transform(n3.calcTransformMatrix()), c2 = o3.getScenePoint(t3).subtract(l3), u3 = n3.getCanvasRetinaScaling(), d3 = n3.getBoundingRect(), g3 = l3.subtract(new ot(d3.left, d3.top)), f3 = o3.viewportTransform, p3 = g3.add(c2).transform(f3, true), m3 = n3.backgroundColor, v3 = Ei(n3.styles);
    n3.backgroundColor = "";
    const y3 = {
      stroke: "transparent",
      fill: "transparent",
      textBackgroundColor: "transparent"
    };
    n3.setSelectionStyles(y3, 0, i3), n3.setSelectionStyles(y3, r3, n3.text.length), n3.dirty = true;
    const _3 = n3.toCanvasElement({
      enableRetinaScaling: o3.enableRetinaScaling,
      viewportTransform: true
    });
    n3.backgroundColor = m3, n3.styles = v3, n3.dirty = true, rn(_3, {
      position: "fixed",
      left: -_3.width + "px",
      border: P,
      width: _3.width / u3 + "px",
      height: _3.height / u3 + "px"
    }), this.__dragImageDisposer && this.__dragImageDisposer(), this.__dragImageDisposer = () => {
      _3.remove();
    }, qt(t3.target || this.target.hiddenTextarea).body.appendChild(_3), null === (s3 = t3.dataTransfer) || void 0 === s3 || s3.setDragImage(_3, p3.x, p3.y);
  }
  onDragStart(t3) {
    this.__dragStartFired = true;
    const e5 = this.target, s3 = this.isActive();
    if (s3 && t3.dataTransfer) {
      const s4 = this.__dragStartSelection = {
        selectionStart: e5.selectionStart,
        selectionEnd: e5.selectionEnd
      }, i3 = e5._text.slice(s4.selectionStart, s4.selectionEnd).join(""), r3 = {
        text: e5.text,
        value: i3,
        ...s4
      };
      t3.dataTransfer.setData("text/plain", i3), t3.dataTransfer.setData("application/fabric", JSON.stringify({
        value: i3,
        styles: e5.getSelectionStyles(s4.selectionStart, s4.selectionEnd, true)
      })), t3.dataTransfer.effectAllowed = "copyMove", this.setDragImage(t3, r3);
    }
    return e5.abortCursorAnimation(), s3;
  }
  canDrop(t3) {
    if (this.target.editable && !this.target.getActiveControl() && !t3.defaultPrevented) {
      if (this.isActive() && this.__dragStartSelection) {
        const e5 = this.target.getSelectionStartFromPointer(t3), s3 = this.__dragStartSelection;
        return e5 < s3.selectionStart || e5 > s3.selectionEnd;
      }
      return true;
    }
    return false;
  }
  targetCanDrop(t3) {
    return this.target.canDrop(t3);
  }
  dragEnterHandler(t3) {
    let { e: e5 } = t3;
    const s3 = this.targetCanDrop(e5);
    !this.__isDraggingOver && s3 && (this.__isDraggingOver = true);
  }
  dragOverHandler(t3) {
    const { e: e5 } = t3, s3 = this.targetCanDrop(e5);
    !this.__isDraggingOver && s3 ? this.__isDraggingOver = true : this.__isDraggingOver && !s3 && (this.__isDraggingOver = false), this.__isDraggingOver && (e5.preventDefault(), t3.canDrop = true, t3.dropTarget = this.target);
  }
  dragLeaveHandler() {
    (this.__isDraggingOver || this.isActive()) && (this.__isDraggingOver = false);
  }
  dropHandler(t3) {
    var e5;
    const { e: s3 } = t3, i3 = s3.defaultPrevented;
    this.__isDraggingOver = false, s3.preventDefault();
    let r3 = null === (e5 = s3.dataTransfer) || void 0 === e5 ? void 0 : e5.getData("text/plain");
    if (r3 && !i3) {
      const e6 = this.target, i4 = e6.canvas;
      let n3 = e6.getSelectionStartFromPointer(s3);
      const { styles: o3 } = s3.dataTransfer.types.includes("application/fabric") ? JSON.parse(s3.dataTransfer.getData("application/fabric")) : {}, a3 = r3[Math.max(0, r3.length - 1)], h3 = 0;
      if (this.__dragStartSelection) {
        const t4 = this.__dragStartSelection.selectionStart, s4 = this.__dragStartSelection.selectionEnd;
        n3 > t4 && n3 <= s4 ? n3 = t4 : n3 > s4 && (n3 -= s4 - t4), e6.removeChars(t4, s4), delete this.__dragStartSelection;
      }
      e6._reNewline.test(a3) && (e6._reNewline.test(e6._text[n3]) || n3 === e6._text.length) && (r3 = r3.trimEnd()), t3.didDrop = true, t3.dropTarget = e6, e6.insertChars(r3, o3, n3), i4.setActiveObject(e6), e6.enterEditing(s3), e6.selectionStart = Math.min(n3 + h3, e6._text.length), e6.selectionEnd = Math.min(e6.selectionStart + r3.length, e6._text.length), e6.hiddenTextarea.value = e6.text, e6._updateTextarea(), e6.hiddenTextarea.focus(), e6.fire(X, {
        index: n3 + h3,
        action: "drop"
      }), i4.fire("text:changed", {
        target: e6
      }), i4.contextTopDirty = true, i4.requestRenderAll();
    }
  }
  dragEndHandler(t3) {
    let { e: e5 } = t3;
    if (this.isActive() && this.__dragStartFired && this.__dragStartSelection) {
      var s3;
      const t4 = this.target, i3 = this.target.canvas, { selectionStart: r3, selectionEnd: n3 } = this.__dragStartSelection, o3 = (null === (s3 = e5.dataTransfer) || void 0 === s3 ? void 0 : s3.dropEffect) || P;
      o3 === P ? (t4.selectionStart = r3, t4.selectionEnd = n3, t4._updateTextarea(), t4.hiddenTextarea.focus()) : (t4.clearContextTop(), "move" === o3 && (t4.removeChars(r3, n3), t4.selectionStart = t4.selectionEnd = r3, t4.hiddenTextarea && (t4.hiddenTextarea.value = t4.text), t4._updateTextarea(), t4.fire(X, {
        index: r3,
        action: "dragend"
      }), i3.fire("text:changed", {
        target: t4
      }), i3.requestRenderAll()), t4.exitEditing());
    }
    this.__dragImageDisposer && this.__dragImageDisposer(), delete this.__dragImageDisposer, delete this.__dragStartSelection, this.__isDraggingOver = false;
  }
  dispose() {
    this._dispose && this._dispose();
  }
};
var Qn = /[ \n\.,;!\?\-]/;
var Zn = class extends Kn {
  constructor() {
    super(...arguments), t(this, "_currentCursorOpacity", 1);
  }
  initBehavior() {
    this._tick = this._tick.bind(this), this._onTickComplete = this._onTickComplete.bind(this), this.updateSelectionOnMouseMove = this.updateSelectionOnMouseMove.bind(this);
  }
  onDeselect(t3) {
    return this.isEditing && this.exitEditing(), this.selected = false, super.onDeselect(t3);
  }
  _animateCursor(t3) {
    let { toValue: e5, duration: s3, delay: i3, onComplete: r3 } = t3;
    return Ys({
      startValue: this._currentCursorOpacity,
      endValue: e5,
      duration: s3,
      delay: i3,
      onComplete: r3,
      abort: () => !this.canvas || this.selectionStart !== this.selectionEnd,
      onChange: (t4) => {
        this._currentCursorOpacity = t4, this.renderCursorOrSelection();
      }
    });
  }
  _tick(t3) {
    this._currentTickState = this._animateCursor({
      toValue: 0,
      duration: this.cursorDuration / 2,
      delay: Math.max(t3 || 0, 100),
      onComplete: this._onTickComplete
    });
  }
  _onTickComplete() {
    var t3;
    null === (t3 = this._currentTickCompleteState) || void 0 === t3 || t3.abort(), this._currentTickCompleteState = this._animateCursor({
      toValue: 1,
      duration: this.cursorDuration,
      onComplete: this._tick
    });
  }
  initDelayedCursor(t3) {
    this.abortCursorAnimation(), this._tick(t3 ? 0 : this.cursorDelay);
  }
  abortCursorAnimation() {
    let t3 = false;
    [
      this._currentTickState,
      this._currentTickCompleteState
    ].forEach((e5) => {
      e5 && !e5.isDone() && (t3 = true, e5.abort());
    }), this._currentCursorOpacity = 1, t3 && this.clearContextTop();
  }
  restartCursorIfNeeded() {
    [
      this._currentTickState,
      this._currentTickCompleteState
    ].some((t3) => !t3 || t3.isDone()) && this.initDelayedCursor();
  }
  selectAll() {
    return this.selectionStart = 0, this.selectionEnd = this._text.length, this._fireSelectionChanged(), this._updateTextarea(), this;
  }
  cmdAll() {
    this.selectAll(), this.renderCursorOrSelection();
  }
  getSelectedText() {
    return this._text.slice(this.selectionStart, this.selectionEnd).join("");
  }
  findWordBoundaryLeft(t3) {
    let e5 = 0, s3 = t3 - 1;
    if (this._reSpace.test(this._text[s3])) for (; this._reSpace.test(this._text[s3]); ) e5++, s3--;
    for (; /\S/.test(this._text[s3]) && s3 > -1; ) e5++, s3--;
    return t3 - e5;
  }
  findWordBoundaryRight(t3) {
    let e5 = 0, s3 = t3;
    if (this._reSpace.test(this._text[s3])) for (; this._reSpace.test(this._text[s3]); ) e5++, s3++;
    for (; /\S/.test(this._text[s3]) && s3 < this._text.length; ) e5++, s3++;
    return t3 + e5;
  }
  findLineBoundaryLeft(t3) {
    let e5 = 0, s3 = t3 - 1;
    for (; !/\n/.test(this._text[s3]) && s3 > -1; ) e5++, s3--;
    return t3 - e5;
  }
  findLineBoundaryRight(t3) {
    let e5 = 0, s3 = t3;
    for (; !/\n/.test(this._text[s3]) && s3 < this._text.length; ) e5++, s3++;
    return t3 + e5;
  }
  searchWordBoundary(t3, e5) {
    const s3 = this._text;
    let i3 = t3 > 0 && this._reSpace.test(s3[t3]) && (-1 === e5 || !E.test(s3[t3 - 1])) ? t3 - 1 : t3, r3 = s3[i3];
    for (; i3 > 0 && i3 < s3.length && !Qn.test(r3); ) i3 += e5, r3 = s3[i3];
    return -1 === e5 && Qn.test(r3) && i3++, i3;
  }
  selectWord(t3) {
    t3 = null != t3 ? t3 : this.selectionStart;
    const e5 = this.searchWordBoundary(t3, -1), s3 = Math.max(e5, this.searchWordBoundary(t3, 1));
    this.selectionStart = e5, this.selectionEnd = s3, this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection();
  }
  selectLine(t3) {
    t3 = null != t3 ? t3 : this.selectionStart;
    const e5 = this.findLineBoundaryLeft(t3), s3 = this.findLineBoundaryRight(t3);
    this.selectionStart = e5, this.selectionEnd = s3, this._fireSelectionChanged(), this._updateTextarea();
  }
  enterEditing(t3) {
    !this.isEditing && this.editable && (this.enterEditingImpl(), this.fire("editing:entered", t3 ? {
      e: t3
    } : void 0), this._fireSelectionChanged(), this.canvas && (this.canvas.fire("text:editing:entered", {
      target: this,
      e: t3
    }), this.canvas.requestRenderAll()));
  }
  enterEditingImpl() {
    this.canvas && (this.canvas.calcOffset(), this.canvas.textEditingManager.exitTextEditing()), this.isEditing = true, this.initHiddenTextarea(), this.hiddenTextarea.focus(), this.hiddenTextarea.value = this.text, this._updateTextarea(), this._saveEditingProps(), this._setEditingProps(), this._textBeforeEdit = this.text, this._tick();
  }
  updateSelectionOnMouseMove(t3) {
    if (this.getActiveControl()) return;
    const e5 = this.hiddenTextarea;
    qt(e5).activeElement !== e5 && e5.focus();
    const s3 = this.getSelectionStartFromPointer(t3), i3 = this.selectionStart, r3 = this.selectionEnd;
    (s3 === this.__selectionStartOnMouseDown && i3 !== r3 || i3 !== s3 && r3 !== s3) && (s3 > this.__selectionStartOnMouseDown ? (this.selectionStart = this.__selectionStartOnMouseDown, this.selectionEnd = s3) : (this.selectionStart = s3, this.selectionEnd = this.__selectionStartOnMouseDown), this.selectionStart === i3 && this.selectionEnd === r3 || (this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()));
  }
  _setEditingProps() {
    this.hoverCursor = "text", this.canvas && (this.canvas.defaultCursor = this.canvas.moveCursor = "text"), this.borderColor = this.editingBorderColor, this.hasControls = this.selectable = false, this.lockMovementX = this.lockMovementY = true;
  }
  fromStringToGraphemeSelection(t3, e5, s3) {
    const i3 = s3.slice(0, t3), r3 = this.graphemeSplit(i3).length;
    if (t3 === e5) return {
      selectionStart: r3,
      selectionEnd: r3
    };
    const n3 = s3.slice(t3, e5);
    return {
      selectionStart: r3,
      selectionEnd: r3 + this.graphemeSplit(n3).length
    };
  }
  fromGraphemeToStringSelection(t3, e5, s3) {
    const i3 = s3.slice(0, t3).join("").length;
    if (t3 === e5) return {
      selectionStart: i3,
      selectionEnd: i3
    };
    return {
      selectionStart: i3,
      selectionEnd: i3 + s3.slice(t3, e5).join("").length
    };
  }
  _updateTextarea() {
    if (this.cursorOffsetCache = {}, this.hiddenTextarea) {
      if (!this.inCompositionMode) {
        const t3 = this.fromGraphemeToStringSelection(this.selectionStart, this.selectionEnd, this._text);
        this.hiddenTextarea.selectionStart = t3.selectionStart, this.hiddenTextarea.selectionEnd = t3.selectionEnd;
      }
      this.updateTextareaPosition();
    }
  }
  updateFromTextArea() {
    const { hiddenTextarea: t3, direction: e5, textAlign: s3, inCompositionMode: i3 } = this;
    if (!t3) return;
    const r3 = s3 !== os ? s3.replace("justify-", "") : e5 === q ? O : M, n3 = this.getPositionByOrigin(r3, "top");
    this.cursorOffsetCache = {}, this.text = t3.value, this.set("dirty", true), this.initDimensions(), this.setPositionByOrigin(n3, r3, "top"), this.setCoords();
    const o3 = this.fromStringToGraphemeSelection(t3.selectionStart, t3.selectionEnd, t3.value);
    this.selectionEnd = this.selectionStart = o3.selectionEnd, i3 || (this.selectionStart = o3.selectionStart), this.updateTextareaPosition();
  }
  updateTextareaPosition() {
    if (this.selectionStart === this.selectionEnd) {
      const t3 = this._calcTextareaPosition();
      this.hiddenTextarea.style.left = t3.left, this.hiddenTextarea.style.top = t3.top;
    }
  }
  _calcTextareaPosition() {
    if (!this.canvas) return {
      left: "1px",
      top: "1px"
    };
    const t3 = this.inCompositionMode ? this.compositionStart : this.selectionStart, e5 = this._getCursorBoundaries(t3), s3 = this.get2DCursorLocation(t3), i3 = s3.lineIndex, r3 = s3.charIndex, n3 = this.getValueOfPropertyAt(i3, r3, "fontSize") * this.lineHeight, o3 = e5.leftOffset, a3 = this.getCanvasRetinaScaling(), h3 = this.canvas.upperCanvasEl, l3 = h3.width / a3, c2 = h3.height / a3, u3 = l3 - n3, d3 = c2 - n3, g3 = new ot(e5.left + o3, e5.top + e5.topOffset + n3).transform(this.calcTransformMatrix()).transform(this.canvas.viewportTransform).multiply(new ot(h3.clientWidth / l3, h3.clientHeight / c2));
    return g3.x < 0 && (g3.x = 0), g3.x > u3 && (g3.x = u3), g3.y < 0 && (g3.y = 0), g3.y > d3 && (g3.y = d3), g3.x += this.canvas._offset.left, g3.y += this.canvas._offset.top, {
      left: `${g3.x}px`,
      top: `${g3.y}px`,
      fontSize: `${n3}px`,
      charHeight: n3
    };
  }
  _saveEditingProps() {
    this._savedProps = {
      hasControls: this.hasControls,
      borderColor: this.borderColor,
      lockMovementX: this.lockMovementX,
      lockMovementY: this.lockMovementY,
      hoverCursor: this.hoverCursor,
      selectable: this.selectable,
      defaultCursor: this.canvas && this.canvas.defaultCursor,
      moveCursor: this.canvas && this.canvas.moveCursor
    };
  }
  _restoreEditingProps() {
    this._savedProps && (this.hoverCursor = this._savedProps.hoverCursor, this.hasControls = this._savedProps.hasControls, this.borderColor = this._savedProps.borderColor, this.selectable = this._savedProps.selectable, this.lockMovementX = this._savedProps.lockMovementX, this.lockMovementY = this._savedProps.lockMovementY, this.canvas && (this.canvas.defaultCursor = this._savedProps.defaultCursor || this.canvas.defaultCursor, this.canvas.moveCursor = this._savedProps.moveCursor || this.canvas.moveCursor), delete this._savedProps);
  }
  exitEditingImpl() {
    const t3 = this.hiddenTextarea;
    this.selected = false, this.isEditing = false, t3 && (t3.blur && t3.blur(), t3.parentNode && t3.parentNode.removeChild(t3)), this.hiddenTextarea = null, this.abortCursorAnimation(), this.selectionStart !== this.selectionEnd && this.clearContextTop(), this.selectionEnd = this.selectionStart, this._restoreEditingProps(), this._forceClearCache && (this.initDimensions(), this.setCoords());
  }
  exitEditing() {
    const t3 = this._textBeforeEdit !== this.text;
    return this.exitEditingImpl(), this.fire("editing:exited"), t3 && this.fire(U), this.canvas && (this.canvas.fire("text:editing:exited", {
      target: this
    }), t3 && this.canvas.fire("object:modified", {
      target: this
    })), this;
  }
  _removeExtraneousStyles() {
    for (const t3 in this.styles) this._textLines[t3] || delete this.styles[t3];
  }
  removeStyleFromTo(t3, e5) {
    const { lineIndex: s3, charIndex: i3 } = this.get2DCursorLocation(t3, true), { lineIndex: r3, charIndex: n3 } = this.get2DCursorLocation(e5, true);
    if (s3 !== r3) {
      if (this.styles[s3]) for (let t4 = i3; t4 < this._unwrappedTextLines[s3].length; t4++) delete this.styles[s3][t4];
      if (this.styles[r3]) for (let t4 = n3; t4 < this._unwrappedTextLines[r3].length; t4++) {
        const e6 = this.styles[r3][t4];
        e6 && (this.styles[s3] || (this.styles[s3] = {}), this.styles[s3][i3 + t4 - n3] = e6);
      }
      for (let t4 = s3 + 1; t4 <= r3; t4++) delete this.styles[t4];
      this.shiftLineStyles(r3, s3 - r3);
    } else if (this.styles[s3]) {
      const t4 = this.styles[s3], e6 = n3 - i3;
      for (let e7 = i3; e7 < n3; e7++) delete t4[e7];
      for (const i4 in this.styles[s3]) {
        const s4 = parseInt(i4, 10);
        s4 >= n3 && (t4[s4 - e6] = t4[i4], delete t4[i4]);
      }
    }
  }
  shiftLineStyles(t3, e5) {
    const s3 = Object.assign({}, this.styles);
    for (const i3 in this.styles) {
      const r3 = parseInt(i3, 10);
      r3 > t3 && (this.styles[r3 + e5] = s3[r3], s3[r3 - e5] || delete this.styles[r3]);
    }
  }
  insertNewlineStyleObject(t3, e5, s3, i3) {
    const r3 = {}, n3 = this._unwrappedTextLines[t3].length, o3 = n3 === e5;
    let a3 = false;
    s3 || (s3 = 1), this.shiftLineStyles(t3, s3);
    const h3 = this.styles[t3] ? this.styles[t3][0 === e5 ? e5 : e5 - 1] : void 0;
    for (const s4 in this.styles[t3]) {
      const i4 = parseInt(s4, 10);
      i4 >= e5 && (a3 = true, r3[i4 - e5] = this.styles[t3][s4], o3 && 0 === e5 || delete this.styles[t3][s4]);
    }
    let l3 = false;
    for (a3 && !o3 && (this.styles[t3 + s3] = r3, l3 = true), (l3 || n3 > e5) && s3--; s3 > 0; ) i3 && i3[s3 - 1] ? this.styles[t3 + s3] = {
      0: {
        ...i3[s3 - 1]
      }
    } : h3 ? this.styles[t3 + s3] = {
      0: {
        ...h3
      }
    } : delete this.styles[t3 + s3], s3--;
    this._forceClearCache = true;
  }
  insertCharStyleObject(t3, e5, s3, i3) {
    this.styles || (this.styles = {});
    const r3 = this.styles[t3], n3 = r3 ? {
      ...r3
    } : {};
    s3 || (s3 = 1);
    for (const t4 in n3) {
      const i4 = parseInt(t4, 10);
      i4 >= e5 && (r3[i4 + s3] = n3[i4], n3[i4 - s3] || delete r3[i4]);
    }
    if (this._forceClearCache = true, i3) {
      for (; s3--; ) Object.keys(i3[s3]).length && (this.styles[t3] || (this.styles[t3] = {}), this.styles[t3][e5 + s3] = {
        ...i3[s3]
      });
      return;
    }
    if (!r3) return;
    const o3 = r3[e5 ? e5 - 1 : 1];
    for (; o3 && s3--; ) this.styles[t3][e5 + s3] = {
      ...o3
    };
  }
  insertNewStyleBlock(t3, e5, s3) {
    const i3 = this.get2DCursorLocation(e5, true), r3 = [
      0
    ];
    let n3, o3 = 0;
    for (let e6 = 0; e6 < t3.length; e6++) "\n" === t3[e6] ? (o3++, r3[o3] = 0) : r3[o3]++;
    for (r3[0] > 0 && (this.insertCharStyleObject(i3.lineIndex, i3.charIndex, r3[0], s3), s3 = s3 && s3.slice(r3[0] + 1)), o3 && this.insertNewlineStyleObject(i3.lineIndex, i3.charIndex + r3[0], o3), n3 = 1; n3 < o3; n3++) r3[n3] > 0 ? this.insertCharStyleObject(i3.lineIndex + n3, 0, r3[n3], s3) : s3 && this.styles[i3.lineIndex + n3] && s3[0] && (this.styles[i3.lineIndex + n3][0] = s3[0]), s3 = s3 && s3.slice(r3[n3] + 1);
    r3[n3] > 0 && this.insertCharStyleObject(i3.lineIndex + n3, 0, r3[n3], s3);
  }
  removeChars(t3) {
    let e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t3 + 1;
    this.removeStyleFromTo(t3, e5), this._text.splice(t3, e5 - t3), this.text = this._text.join(""), this.set("dirty", true), this.initDimensions(), this.setCoords(), this._removeExtraneousStyles();
  }
  insertChars(t3, e5, s3) {
    let i3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s3;
    i3 > s3 && this.removeStyleFromTo(s3, i3);
    const r3 = this.graphemeSplit(t3);
    this.insertNewStyleBlock(r3, s3, e5), this._text = [
      ...this._text.slice(0, s3),
      ...r3,
      ...this._text.slice(i3)
    ], this.text = this._text.join(""), this.set("dirty", true), this.initDimensions(), this.setCoords(), this._removeExtraneousStyles();
  }
  setSelectionStartEndWithShift(t3, e5, s3) {
    s3 <= t3 ? (e5 === t3 ? this._selectionDirection = O : this._selectionDirection === M && (this._selectionDirection = O, this.selectionEnd = t3), this.selectionStart = s3) : s3 > t3 && s3 < e5 ? this._selectionDirection === M ? this.selectionEnd = s3 : this.selectionStart = s3 : (e5 === t3 ? this._selectionDirection = M : this._selectionDirection === O && (this._selectionDirection = M, this.selectionStart = e5), this.selectionEnd = s3);
  }
};
var to = class extends Zn {
  initHiddenTextarea() {
    const t3 = this.canvas && qt(this.canvas.getElement()) || d(), e5 = t3.createElement("textarea");
    Object.entries({
      autocapitalize: "off",
      autocorrect: "off",
      autocomplete: "off",
      spellcheck: "false",
      "data-fabric": "textarea",
      wrap: "off",
      name: "fabricTextarea"
    }).map((t4) => {
      let [s4, i4] = t4;
      return e5.setAttribute(s4, i4);
    });
    const { top: s3, left: i3, fontSize: r3 } = this._calcTextareaPosition();
    e5.style.cssText = `position: absolute; top: ${s3}; left: ${i3}; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: ${r3};`, (this.hiddenTextareaContainer || t3.body).appendChild(e5), Object.entries({
      blur: "blur",
      keydown: "onKeyDown",
      keyup: "onKeyUp",
      input: "onInput",
      copy: "copy",
      cut: "copy",
      paste: "paste",
      compositionstart: "onCompositionStart",
      compositionupdate: "onCompositionUpdate",
      compositionend: "onCompositionEnd"
    }).map((t4) => {
      let [s4, i4] = t4;
      return e5.addEventListener(s4, this[i4].bind(this));
    }), this.hiddenTextarea = e5;
  }
  blur() {
    this.abortCursorAnimation();
  }
  onKeyDown(t3) {
    if (!this.isEditing) return;
    const e5 = "rtl" === this.direction ? this.keysMapRtl : this.keysMap;
    if (t3.keyCode in e5) this[e5[t3.keyCode]](t3);
    else {
      if (!(t3.keyCode in this.ctrlKeysMapDown) || !t3.ctrlKey && !t3.metaKey) return;
      this[this.ctrlKeysMapDown[t3.keyCode]](t3);
    }
    t3.stopImmediatePropagation(), t3.preventDefault(), t3.keyCode >= 33 && t3.keyCode <= 40 ? (this.inCompositionMode = false, this.clearContextTop(), this.renderCursorOrSelection()) : this.canvas && this.canvas.requestRenderAll();
  }
  onKeyUp(t3) {
    !this.isEditing || this._copyDone || this.inCompositionMode ? this._copyDone = false : t3.keyCode in this.ctrlKeysMapUp && (t3.ctrlKey || t3.metaKey) && (this[this.ctrlKeysMapUp[t3.keyCode]](t3), t3.stopImmediatePropagation(), t3.preventDefault(), this.canvas && this.canvas.requestRenderAll());
  }
  onInput(t3) {
    const e5 = this.fromPaste, { value: i3, selectionStart: r3, selectionEnd: n3 } = this.hiddenTextarea;
    if (this.fromPaste = false, t3 && t3.stopPropagation(), !this.isEditing) return;
    const o3 = () => {
      this.updateFromTextArea(), this.fire(X), this.canvas && (this.canvas.fire("text:changed", {
        target: this
      }), this.canvas.requestRenderAll());
    };
    if ("" === this.hiddenTextarea.value) return this.styles = {}, void o3();
    const a3 = this._splitTextIntoLines(i3).graphemeText, h3 = this._text.length, l3 = a3.length, c2 = this.selectionStart, d3 = this.selectionEnd, g3 = c2 !== d3;
    let f3, p3, m3, v3, y3 = l3 - h3;
    const _3 = this.fromStringToGraphemeSelection(r3, n3, i3), x3 = c2 > _3.selectionStart;
    g3 ? (p3 = this._text.slice(c2, d3), y3 += d3 - c2) : l3 < h3 && (p3 = x3 ? this._text.slice(d3 + y3, d3) : this._text.slice(c2, c2 - y3));
    const C3 = a3.slice(_3.selectionEnd - y3, _3.selectionEnd);
    if (p3 && p3.length && (C3.length && (f3 = this.getSelectionStyles(c2, c2 + 1, false), f3 = C3.map(() => f3[0])), g3 ? (m3 = c2, v3 = d3) : x3 ? (m3 = d3 - p3.length, v3 = d3) : (m3 = d3, v3 = d3 + p3.length), this.removeStyleFromTo(m3, v3)), C3.length) {
      const { copyPasteData: t4 } = u();
      e5 && C3.join("") === t4.copiedText && !s.disableStyleCopyPaste && (f3 = t4.copiedTextStyle), this.insertNewStyleBlock(C3, c2, f3);
    }
    o3();
  }
  onCompositionStart() {
    this.inCompositionMode = true;
  }
  onCompositionEnd() {
    this.inCompositionMode = false;
  }
  onCompositionUpdate(t3) {
    let { target: e5 } = t3;
    const { selectionStart: s3, selectionEnd: i3 } = e5;
    this.compositionStart = s3, this.compositionEnd = i3, this.updateTextareaPosition();
  }
  copy() {
    if (this.selectionStart === this.selectionEnd) return;
    const { copyPasteData: t3 } = u();
    t3.copiedText = this.getSelectedText(), s.disableStyleCopyPaste ? t3.copiedTextStyle = void 0 : t3.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, true), this._copyDone = true;
  }
  paste() {
    this.fromPaste = true;
  }
  _getWidthBeforeCursor(t3, e5) {
    let s3, i3 = this._getLineLeftOffset(t3);
    return e5 > 0 && (s3 = this.__charBounds[t3][e5 - 1], i3 += s3.left + s3.width), i3;
  }
  getDownCursorOffset(t3, e5) {
    const s3 = this._getSelectionForOffset(t3, e5), i3 = this.get2DCursorLocation(s3), r3 = i3.lineIndex;
    if (r3 === this._textLines.length - 1 || t3.metaKey || 34 === t3.keyCode) return this._text.length - s3;
    const n3 = i3.charIndex, o3 = this._getWidthBeforeCursor(r3, n3), a3 = this._getIndexOnLine(r3 + 1, o3);
    return this._textLines[r3].slice(n3).length + a3 + 1 + this.missingNewlineOffset(r3);
  }
  _getSelectionForOffset(t3, e5) {
    return t3.shiftKey && this.selectionStart !== this.selectionEnd && e5 ? this.selectionEnd : this.selectionStart;
  }
  getUpCursorOffset(t3, e5) {
    const s3 = this._getSelectionForOffset(t3, e5), i3 = this.get2DCursorLocation(s3), r3 = i3.lineIndex;
    if (0 === r3 || t3.metaKey || 33 === t3.keyCode) return -s3;
    const n3 = i3.charIndex, o3 = this._getWidthBeforeCursor(r3, n3), a3 = this._getIndexOnLine(r3 - 1, o3), h3 = this._textLines[r3].slice(0, n3), l3 = this.missingNewlineOffset(r3 - 1);
    return -this._textLines[r3 - 1].length + a3 - h3.length + (1 - l3);
  }
  _getIndexOnLine(t3, e5) {
    const s3 = this._textLines[t3];
    let i3, r3, n3 = this._getLineLeftOffset(t3), o3 = 0;
    for (let a3 = 0, h3 = s3.length; a3 < h3; a3++) if (i3 = this.__charBounds[t3][a3].width, n3 += i3, n3 > e5) {
      r3 = true;
      const t4 = n3 - i3, s4 = n3, h4 = Math.abs(t4 - e5);
      o3 = Math.abs(s4 - e5) < h4 ? a3 : a3 - 1;
      break;
    }
    return r3 || (o3 = s3.length - 1), o3;
  }
  moveCursorDown(t3) {
    this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorUpOrDown("Down", t3);
  }
  moveCursorUp(t3) {
    0 === this.selectionStart && 0 === this.selectionEnd || this._moveCursorUpOrDown("Up", t3);
  }
  _moveCursorUpOrDown(t3, e5) {
    const s3 = this[`get${t3}CursorOffset`](e5, this._selectionDirection === M);
    if (e5.shiftKey ? this.moveCursorWithShift(s3) : this.moveCursorWithoutShift(s3), 0 !== s3) {
      const t4 = this.text.length;
      this.selectionStart = ws(0, this.selectionStart, t4), this.selectionEnd = ws(0, this.selectionEnd, t4), this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea();
    }
  }
  moveCursorWithShift(t3) {
    const e5 = this._selectionDirection === O ? this.selectionStart + t3 : this.selectionEnd + t3;
    return this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, e5), 0 !== t3;
  }
  moveCursorWithoutShift(t3) {
    return t3 < 0 ? (this.selectionStart += t3, this.selectionEnd = this.selectionStart) : (this.selectionEnd += t3, this.selectionStart = this.selectionEnd), 0 !== t3;
  }
  moveCursorLeft(t3) {
    0 === this.selectionStart && 0 === this.selectionEnd || this._moveCursorLeftOrRight("Left", t3);
  }
  _move(t3, e5, s3) {
    let i3;
    if (t3.altKey) i3 = this[`findWordBoundary${s3}`](this[e5]);
    else {
      if (!t3.metaKey && 35 !== t3.keyCode && 36 !== t3.keyCode) return this[e5] += "Left" === s3 ? -1 : 1, true;
      i3 = this[`findLineBoundary${s3}`](this[e5]);
    }
    return void 0 !== i3 && this[e5] !== i3 && (this[e5] = i3, true);
  }
  _moveLeft(t3, e5) {
    return this._move(t3, e5, "Left");
  }
  _moveRight(t3, e5) {
    return this._move(t3, e5, "Right");
  }
  moveCursorLeftWithoutShift(t3) {
    let e5 = true;
    return this._selectionDirection = O, this.selectionEnd === this.selectionStart && 0 !== this.selectionStart && (e5 = this._moveLeft(t3, "selectionStart")), this.selectionEnd = this.selectionStart, e5;
  }
  moveCursorLeftWithShift(t3) {
    return this._selectionDirection === M && this.selectionStart !== this.selectionEnd ? this._moveLeft(t3, "selectionEnd") : 0 !== this.selectionStart ? (this._selectionDirection = O, this._moveLeft(t3, "selectionStart")) : void 0;
  }
  moveCursorRight(t3) {
    this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorLeftOrRight("Right", t3);
  }
  _moveCursorLeftOrRight(t3, e5) {
    const s3 = `moveCursor${t3}${e5.shiftKey ? "WithShift" : "WithoutShift"}`;
    this._currentCursorOpacity = 1, this[s3](e5) && (this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
  }
  moveCursorRightWithShift(t3) {
    return this._selectionDirection === O && this.selectionStart !== this.selectionEnd ? this._moveRight(t3, "selectionStart") : this.selectionEnd !== this._text.length ? (this._selectionDirection = M, this._moveRight(t3, "selectionEnd")) : void 0;
  }
  moveCursorRightWithoutShift(t3) {
    let e5 = true;
    return this._selectionDirection = M, this.selectionStart === this.selectionEnd ? (e5 = this._moveRight(t3, "selectionStart"), this.selectionEnd = this.selectionStart) : this.selectionStart = this.selectionEnd, e5;
  }
};
var eo = (t3) => !!t3.button;
var so = class extends to {
  constructor() {
    super(...arguments), t(this, "draggableTextDelegate", void 0);
  }
  initBehavior() {
    this.on("mousedown", this._mouseDownHandler), this.on("mouseup", this.mouseUpHandler), this.on("mousedblclick", this.doubleClickHandler), this.on("mousetripleclick", this.tripleClickHandler), this.draggableTextDelegate = new Jn(this), super.initBehavior();
  }
  shouldStartDragging() {
    return this.draggableTextDelegate.isActive();
  }
  onDragStart(t3) {
    return this.draggableTextDelegate.onDragStart(t3);
  }
  canDrop(t3) {
    return this.draggableTextDelegate.canDrop(t3);
  }
  doubleClickHandler(t3) {
    this.isEditing && (this.selectWord(this.getSelectionStartFromPointer(t3.e)), this.renderCursorOrSelection());
  }
  tripleClickHandler(t3) {
    this.isEditing && (this.selectLine(this.getSelectionStartFromPointer(t3.e)), this.renderCursorOrSelection());
  }
  _mouseDownHandler(t3) {
    let { e: e5, alreadySelected: s3 } = t3;
    this.canvas && this.editable && !eo(e5) && !this.getActiveControl() && (this.draggableTextDelegate.start(e5) || (this.canvas.textEditingManager.register(this), s3 && (this.inCompositionMode = false, this.setCursorByClick(e5)), this.isEditing && (this.__selectionStartOnMouseDown = this.selectionStart, this.selectionStart === this.selectionEnd && this.abortCursorAnimation(), this.renderCursorOrSelection()), this.selected || (this.selected = s3 || this.isEditing)));
  }
  mouseUpHandler(t3) {
    let { e: e5, transform: s3 } = t3;
    const i3 = this.draggableTextDelegate.end(e5);
    if (this.canvas) {
      this.canvas.textEditingManager.unregister(this);
      const t4 = this.canvas._activeObject;
      if (t4 && t4 !== this) return;
    }
    !this.editable || this.group && !this.group.interactive || s3 && s3.actionPerformed || eo(e5) || i3 || this.selected && !this.getActiveControl() && (this.enterEditing(e5), this.selectionStart === this.selectionEnd ? this.initDelayedCursor(true) : this.renderCursorOrSelection());
  }
  setCursorByClick(t3) {
    const e5 = this.getSelectionStartFromPointer(t3), s3 = this.selectionStart, i3 = this.selectionEnd;
    t3.shiftKey ? this.setSelectionStartEndWithShift(s3, i3, e5) : (this.selectionStart = e5, this.selectionEnd = e5), this.isEditing && (this._fireSelectionChanged(), this._updateTextarea());
  }
  getSelectionStartFromPointer(t3) {
    const e5 = this.canvas.getScenePoint(t3).transform(wt(this.calcTransformMatrix())).add(new ot(-this._getLeftOffset(), -this._getTopOffset()));
    let s3 = 0, i3 = 0, r3 = 0;
    for (let t4 = 0; t4 < this._textLines.length && s3 <= e5.y; t4++) s3 += this.getHeightOfLine(t4), r3 = t4, t4 > 0 && (i3 += this._textLines[t4 - 1].length + this.missingNewlineOffset(t4 - 1));
    let n3 = Math.abs(this._getLineLeftOffset(r3));
    const o3 = this._textLines[r3].length, a3 = this.__charBounds[r3];
    for (let t4 = 0; t4 < o3; t4++) {
      const s4 = n3 + a3[t4].kernedWidth;
      if (e5.x <= s4) {
        Math.abs(e5.x - s4) <= Math.abs(e5.x - n3) && i3++;
        break;
      }
      n3 = s4, i3++;
    }
    return Math.min(this.flipX ? o3 - i3 : i3, this._text.length);
  }
};
var io = "moveCursorUp";
var ro = "moveCursorDown";
var no = "moveCursorLeft";
var oo = "moveCursorRight";
var ao = "exitEditing";
var ho = (t3, e5) => {
  const s3 = e5.getRetinaScaling();
  t3.setTransform(s3, 0, 0, s3, 0, 0);
  const i3 = e5.viewportTransform;
  t3.transform(i3[0], i3[1], i3[2], i3[3], i3[4], i3[5]);
};
var lo = {
  selectionStart: 0,
  selectionEnd: 0,
  selectionColor: "rgba(17,119,255,0.3)",
  isEditing: false,
  editable: true,
  editingBorderColor: "rgba(102,153,255,0.25)",
  cursorWidth: 2,
  cursorColor: "",
  cursorDelay: 1e3,
  cursorDuration: 600,
  caching: true,
  hiddenTextareaContainer: null,
  keysMap: {
    9: ao,
    27: ao,
    33: io,
    34: ro,
    35: oo,
    36: no,
    37: no,
    38: io,
    39: oo,
    40: ro
  },
  keysMapRtl: {
    9: ao,
    27: ao,
    33: io,
    34: ro,
    35: no,
    36: oo,
    37: oo,
    38: io,
    39: no,
    40: ro
  },
  ctrlKeysMapDown: {
    65: "cmdAll"
  },
  ctrlKeysMapUp: {
    67: "copy",
    88: "cut"
  },
  _selectionDirection: null,
  _reSpace: /\s|\r?\n/,
  inCompositionMode: false
};
var co = class _co extends so {
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ..._co.ownDefaults
    };
  }
  get type() {
    const t3 = super.type;
    return "itext" === t3 ? "i-text" : t3;
  }
  constructor(t3, e5) {
    super(t3, {
      ..._co.ownDefaults,
      ...e5
    }), this.initBehavior();
  }
  _set(t3, e5) {
    return this.isEditing && this._savedProps && t3 in this._savedProps ? (this._savedProps[t3] = e5, this) : ("canvas" === t3 && (this.canvas instanceof gn && this.canvas.textEditingManager.remove(this), e5 instanceof gn && e5.textEditingManager.add(this)), super._set(t3, e5));
  }
  setSelectionStart(t3) {
    t3 = Math.max(t3, 0), this._updateAndFire("selectionStart", t3);
  }
  setSelectionEnd(t3) {
    t3 = Math.min(t3, this.text.length), this._updateAndFire("selectionEnd", t3);
  }
  _updateAndFire(t3, e5) {
    this[t3] !== e5 && (this._fireSelectionChanged(), this[t3] = e5), this._updateTextarea();
  }
  _fireSelectionChanged() {
    this.fire("selection:changed"), this.canvas && this.canvas.fire("text:selection:changed", {
      target: this
    });
  }
  initDimensions() {
    this.isEditing && this.initDelayedCursor(), super.initDimensions();
  }
  getSelectionStyles() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart || 0, e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.selectionEnd, s3 = arguments.length > 2 ? arguments[2] : void 0;
    return super.getSelectionStyles(t3, e5, s3);
  }
  setSelectionStyles(t3) {
    let e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.selectionStart || 0, s3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.selectionEnd;
    return super.setSelectionStyles(t3, e5, s3);
  }
  get2DCursorLocation() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart, e5 = arguments.length > 1 ? arguments[1] : void 0;
    return super.get2DCursorLocation(t3, e5);
  }
  render(t3) {
    super.render(t3), this.cursorOffsetCache = {}, this.renderCursorOrSelection();
  }
  toCanvasElement(t3) {
    const e5 = this.isEditing;
    this.isEditing = false;
    const s3 = super.toCanvasElement(t3);
    return this.isEditing = e5, s3;
  }
  renderCursorOrSelection() {
    if (!this.isEditing || !this.canvas) return;
    const t3 = this.clearContextTop(true);
    if (!t3) return;
    const e5 = this._getCursorBoundaries(), s3 = this.findAncestorsWithClipPath(), i3 = s3.length > 0;
    let r3, n3 = t3;
    if (i3) {
      r3 = vt(t3.canvas), n3 = r3.getContext("2d"), ho(n3, this.canvas);
      const e6 = this.calcTransformMatrix();
      n3.transform(e6[0], e6[1], e6[2], e6[3], e6[4], e6[5]);
    }
    if (this.selectionStart !== this.selectionEnd || this.inCompositionMode ? this.renderSelection(n3, e5) : this.renderCursor(n3, e5), i3) for (const e6 of s3) {
      const s4 = e6.clipPath, i4 = vt(t3.canvas), r4 = i4.getContext("2d");
      if (ho(r4, this.canvas), !s4.absolutePositioned) {
        const t4 = e6.calcTransformMatrix();
        r4.transform(t4[0], t4[1], t4[2], t4[3], t4[4], t4[5]);
      }
      s4.transform(r4), s4.drawObject(r4, true, {}), this.drawClipPathOnCache(n3, s4, i4);
    }
    i3 && (t3.setTransform(1, 0, 0, 1, 0, 0), t3.drawImage(r3, 0, 0)), this.canvas.contextTopDirty = true, t3.restore();
  }
  findAncestorsWithClipPath() {
    const t3 = [];
    let e5 = this;
    for (; e5; ) e5.clipPath && t3.push(e5), e5 = e5.parent;
    return t3;
  }
  _getCursorBoundaries() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart, e5 = arguments.length > 1 ? arguments[1] : void 0;
    const s3 = this._getLeftOffset(), i3 = this._getTopOffset(), r3 = this._getCursorBoundariesOffsets(t3, e5);
    return {
      left: s3,
      top: i3,
      leftOffset: r3.left,
      topOffset: r3.top
    };
  }
  _getCursorBoundariesOffsets(t3, e5) {
    return e5 ? this.__getCursorBoundariesOffsets(t3) : this.cursorOffsetCache && "top" in this.cursorOffsetCache ? this.cursorOffsetCache : this.cursorOffsetCache = this.__getCursorBoundariesOffsets(t3);
  }
  __getCursorBoundariesOffsets(t3) {
    let e5 = 0, s3 = 0;
    const { charIndex: i3, lineIndex: r3 } = this.get2DCursorLocation(t3), { textAlign: n3, direction: o3 } = this;
    for (let t4 = 0; t4 < r3; t4++) e5 += this.getHeightOfLine(t4);
    const a3 = this._getLineLeftOffset(r3), h3 = this.__charBounds[r3][i3];
    h3 && (s3 = h3.left), 0 !== this.charSpacing && i3 === this._textLines[r3].length && (s3 -= this._getWidthOfCharSpacing());
    let l3 = a3 + (s3 > 0 ? s3 : 0);
    return o3 === K && (n3 === M || n3 === os || n3 === hs ? l3 *= -1 : n3 === O || n3 === as ? l3 = a3 - (s3 > 0 ? s3 : 0) : n3 !== T && n3 !== ls || (l3 = a3 - (s3 > 0 ? s3 : 0))), {
      top: e5,
      left: l3
    };
  }
  renderCursorAt(t3) {
    this._renderCursor(this.canvas.contextTop, this._getCursorBoundaries(t3, true), t3);
  }
  renderCursor(t3, e5) {
    this._renderCursor(t3, e5, this.selectionStart);
  }
  getCursorRenderingData() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart, e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._getCursorBoundaries(t3);
    const s3 = this.get2DCursorLocation(t3), i3 = s3.lineIndex, r3 = s3.charIndex > 0 ? s3.charIndex - 1 : 0, n3 = this.getValueOfPropertyAt(i3, r3, "fontSize"), o3 = this.getObjectScaling().x * this.canvas.getZoom(), a3 = this.cursorWidth / o3, h3 = this.getValueOfPropertyAt(i3, r3, "deltaY"), l3 = e5.topOffset + (1 - this._fontSizeFraction) * this.getHeightOfLine(i3) / this.lineHeight - n3 * (1 - this._fontSizeFraction);
    return {
      color: this.cursorColor || this.getValueOfPropertyAt(i3, r3, "fill"),
      opacity: this._currentCursorOpacity,
      left: e5.left + e5.leftOffset - a3 / 2,
      top: l3 + e5.top + h3,
      width: a3,
      height: n3
    };
  }
  _renderCursor(t3, e5, s3) {
    const { color: i3, opacity: r3, left: n3, top: o3, width: a3, height: h3 } = this.getCursorRenderingData(s3, e5);
    t3.fillStyle = i3, t3.globalAlpha = r3, t3.fillRect(n3, o3, a3, h3);
  }
  renderSelection(t3, e5) {
    const s3 = {
      selectionStart: this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart,
      selectionEnd: this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd
    };
    this._renderSelection(t3, s3, e5);
  }
  renderDragSourceEffect() {
    const t3 = this.draggableTextDelegate.getDragStartSelection();
    this._renderSelection(this.canvas.contextTop, t3, this._getCursorBoundaries(t3.selectionStart, true));
  }
  renderDropTargetEffect(t3) {
    const e5 = this.getSelectionStartFromPointer(t3);
    this.renderCursorAt(e5);
  }
  _renderSelection(t3, e5, s3) {
    const { textAlign: i3, direction: r3 } = this, n3 = e5.selectionStart, o3 = e5.selectionEnd, a3 = i3.includes(os), h3 = this.get2DCursorLocation(n3), l3 = this.get2DCursorLocation(o3), c2 = h3.lineIndex, u3 = l3.lineIndex, d3 = h3.charIndex < 0 ? 0 : h3.charIndex, g3 = l3.charIndex < 0 ? 0 : l3.charIndex;
    for (let e6 = c2; e6 <= u3; e6++) {
      const n4 = this._getLineLeftOffset(e6) || 0;
      let o4 = this.getHeightOfLine(e6), h4 = 0, l4 = 0, f3 = 0;
      if (e6 === c2 && (l4 = this.__charBounds[c2][d3].left), e6 >= c2 && e6 < u3) f3 = a3 && !this.isEndOfWrapping(e6) ? this.width : this.getLineWidth(e6) || 5;
      else if (e6 === u3) if (0 === g3) f3 = this.__charBounds[u3][g3].left;
      else {
        const t4 = this._getWidthOfCharSpacing();
        f3 = this.__charBounds[u3][g3 - 1].left + this.__charBounds[u3][g3 - 1].width - t4;
      }
      h4 = o4, (this.lineHeight < 1 || e6 === u3 && this.lineHeight > 1) && (o4 /= this.lineHeight);
      let p3 = s3.left + n4 + l4, m3 = o4, v3 = 0;
      const y3 = f3 - l4;
      this.inCompositionMode ? (t3.fillStyle = this.compositionColor || "black", m3 = 1, v3 = o4) : t3.fillStyle = this.selectionColor, r3 === K && (i3 === M || i3 === os || i3 === hs ? p3 = this.width - p3 - y3 : i3 === O || i3 === as ? p3 = s3.left + n4 - f3 : i3 !== T && i3 !== ls || (p3 = s3.left + n4 - f3)), t3.fillRect(p3, s3.top + s3.topOffset + v3, y3, m3), s3.topOffset += h4;
    }
  }
  getCurrentCharFontSize() {
    const t3 = this._getCurrentCharIndex();
    return this.getValueOfPropertyAt(t3.l, t3.c, "fontSize");
  }
  getCurrentCharColor() {
    const t3 = this._getCurrentCharIndex();
    return this.getValueOfPropertyAt(t3.l, t3.c, H);
  }
  _getCurrentCharIndex() {
    const t3 = this.get2DCursorLocation(this.selectionStart, true), e5 = t3.charIndex > 0 ? t3.charIndex - 1 : 0;
    return {
      l: t3.lineIndex,
      c: e5
    };
  }
  dispose() {
    this.exitEditingImpl(), this.draggableTextDelegate.dispose(), super.dispose();
  }
};
t(co, "ownDefaults", lo), t(co, "type", "IText"), tt.setClass(co), tt.setClass(co, "i-text");
var uo = class _uo extends co {
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ..._uo.ownDefaults
    };
  }
  constructor(t3, e5) {
    super(t3, {
      ..._uo.ownDefaults,
      ...e5
    });
  }
  static createControls() {
    return {
      controls: Ci()
    };
  }
  initDimensions() {
    this.initialized && (this.isEditing && this.initDelayedCursor(), this._clearCache(), this.dynamicMinWidth = 0, this._styleMap = this._generateStyleMap(this._splitText()), this.dynamicMinWidth > this.width && this._set("width", this.dynamicMinWidth), this.textAlign.includes(os) && this.enlargeSpaces(), this.height = this.calcTextHeight());
  }
  _generateStyleMap(t3) {
    let e5 = 0, s3 = 0, i3 = 0;
    const r3 = {};
    for (let n3 = 0; n3 < t3.graphemeLines.length; n3++) "\n" === t3.graphemeText[i3] && n3 > 0 ? (s3 = 0, i3++, e5++) : !this.splitByGrapheme && this._reSpaceAndTab.test(t3.graphemeText[i3]) && n3 > 0 && (s3++, i3++), r3[n3] = {
      line: e5,
      offset: s3
    }, i3 += t3.graphemeLines[n3].length, s3 += t3.graphemeLines[n3].length;
    return r3;
  }
  styleHas(t3, e5) {
    if (this._styleMap && !this.isWrapping) {
      const t4 = this._styleMap[e5];
      t4 && (e5 = t4.line);
    }
    return super.styleHas(t3, e5);
  }
  isEmptyStyles(t3) {
    if (!this.styles) return true;
    let e5, s3 = 0, i3 = t3 + 1, r3 = false;
    const n3 = this._styleMap[t3], o3 = this._styleMap[t3 + 1];
    n3 && (t3 = n3.line, s3 = n3.offset), o3 && (i3 = o3.line, r3 = i3 === t3, e5 = o3.offset);
    const a3 = void 0 === t3 ? this.styles : {
      line: this.styles[t3]
    };
    for (const t4 in a3) for (const i4 in a3[t4]) {
      const n4 = parseInt(i4, 10);
      if (n4 >= s3 && (!r3 || n4 < e5)) for (const e6 in a3[t4][i4]) return false;
    }
    return true;
  }
  _getStyleDeclaration(t3, e5) {
    if (this._styleMap && !this.isWrapping) {
      const s3 = this._styleMap[t3];
      if (!s3) return {};
      t3 = s3.line, e5 = s3.offset + e5;
    }
    return super._getStyleDeclaration(t3, e5);
  }
  _setStyleDeclaration(t3, e5, s3) {
    const i3 = this._styleMap[t3];
    super._setStyleDeclaration(i3.line, i3.offset + e5, s3);
  }
  _deleteStyleDeclaration(t3, e5) {
    const s3 = this._styleMap[t3];
    super._deleteStyleDeclaration(s3.line, s3.offset + e5);
  }
  _getLineStyle(t3) {
    const e5 = this._styleMap[t3];
    return !!this.styles[e5.line];
  }
  _setLineStyle(t3) {
    const e5 = this._styleMap[t3];
    super._setLineStyle(e5.line);
  }
  _wrapText(t3, e5) {
    this.isWrapping = true;
    const s3 = this.getGraphemeDataForRender(t3), i3 = [];
    for (let t4 = 0; t4 < s3.wordsData.length; t4++) i3.push(...this._wrapLine(t4, e5, s3));
    return this.isWrapping = false, i3;
  }
  getGraphemeDataForRender(t3) {
    const e5 = this.splitByGrapheme, s3 = e5 ? "" : " ";
    let i3 = 0;
    return {
      wordsData: t3.map((t4, r3) => {
        let n3 = 0;
        const o3 = e5 ? this.graphemeSplit(t4) : this.wordSplit(t4);
        return 0 === o3.length ? [
          {
            word: [],
            width: 0
          }
        ] : o3.map((t5) => {
          const o4 = e5 ? [
            t5
          ] : this.graphemeSplit(t5), a3 = this._measureWord(o4, r3, n3);
          return i3 = Math.max(a3, i3), n3 += o4.length + s3.length, {
            word: o4,
            width: a3
          };
        });
      }),
      largestWordWidth: i3
    };
  }
  _measureWord(t3, e5) {
    let s3, i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r3 = 0;
    for (let n3 = 0, o3 = t3.length; n3 < o3; n3++) {
      r3 += this._getGraphemeBox(t3[n3], e5, n3 + i3, s3, true).kernedWidth, s3 = t3[n3];
    }
    return r3;
  }
  wordSplit(t3) {
    return t3.split(this._wordJoiners);
  }
  _wrapLine(t3, e5, s3) {
    let { largestWordWidth: i3, wordsData: r3 } = s3, n3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    const o3 = this._getWidthOfCharSpacing(), a3 = this.splitByGrapheme, h3 = [], l3 = a3 ? "" : " ";
    let c2 = 0, u3 = [], d3 = 0, g3 = 0, f3 = true;
    e5 -= n3;
    const p3 = Math.max(e5, i3, this.dynamicMinWidth), m3 = r3[t3];
    let v3;
    for (d3 = 0, v3 = 0; v3 < m3.length; v3++) {
      const { word: e6, width: s4 } = m3[v3];
      d3 += e6.length, c2 += g3 + s4 - o3, c2 > p3 && !f3 ? (h3.push(u3), u3 = [], c2 = s4, f3 = true) : c2 += o3, f3 || a3 || u3.push(l3), u3 = u3.concat(e6), g3 = a3 ? 0 : this._measureWord([
        l3
      ], t3, d3), d3++, f3 = false;
    }
    return v3 && h3.push(u3), i3 + n3 > this.dynamicMinWidth && (this.dynamicMinWidth = i3 - o3 + n3), h3;
  }
  isEndOfWrapping(t3) {
    return !this._styleMap[t3 + 1] || this._styleMap[t3 + 1].line !== this._styleMap[t3].line;
  }
  missingNewlineOffset(t3, e5) {
    return this.splitByGrapheme && !e5 ? this.isEndOfWrapping(t3) ? 1 : 0 : 1;
  }
  _splitTextIntoLines(t3) {
    const e5 = super._splitTextIntoLines(t3), s3 = this._wrapText(e5.lines, this.width), i3 = new Array(s3.length);
    for (let t4 = 0; t4 < s3.length; t4++) i3[t4] = s3[t4].join("");
    return e5.lines = i3, e5.graphemeLines = s3, e5;
  }
  getMinWidth() {
    return Math.max(this.minWidth, this.dynamicMinWidth);
  }
  _removeExtraneousStyles() {
    const t3 = /* @__PURE__ */ new Map();
    for (const e5 in this._styleMap) {
      const s3 = parseInt(e5, 10);
      if (this._textLines[s3]) {
        const s4 = this._styleMap[e5].line;
        t3.set(`${s4}`, true);
      }
    }
    for (const e5 in this.styles) t3.has(e5) || delete this.styles[e5];
  }
  toObject() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return super.toObject([
      "minWidth",
      "splitByGrapheme",
      ...t3
    ]);
  }
};
t(uo, "type", "Textbox"), t(uo, "textLayoutProperties", [
  ...co.textLayoutProperties,
  "width"
]), t(uo, "ownDefaults", {
  minWidth: 20,
  dynamicMinWidth: 2,
  lockScalingFlip: true,
  noScaleCache: false,
  _wordJoiners: /[ \t\r]/,
  splitByGrapheme: false
}), tt.setClass(uo);
var go = class extends yr {
  shouldPerformLayout(t3) {
    return !!t3.target.clipPath && super.shouldPerformLayout(t3);
  }
  shouldLayoutClipPath() {
    return false;
  }
  calcLayoutResult(t3, e5) {
    const { target: s3 } = t3, { clipPath: i3, group: r3 } = s3;
    if (!i3 || !this.shouldPerformLayout(t3)) return;
    const { width: n3, height: o3 } = ae(vr(s3, i3)), a3 = new ot(n3, o3);
    if (i3.absolutePositioned) {
      return {
        center: fe(i3.getRelativeCenterPoint(), void 0, r3 ? r3.calcTransformMatrix() : void 0),
        size: a3
      };
    }
    {
      const r4 = i3.getRelativeCenterPoint().transform(s3.calcOwnMatrix(), true);
      if (this.shouldPerformLayout(t3)) {
        const { center: s4 = new ot(), correction: i4 = new ot() } = this.calcBoundingBox(e5, t3) || {};
        return {
          center: s4.add(r4),
          correction: i4.subtract(r4),
          size: a3
        };
      }
      return {
        center: s3.getRelativeCenterPoint().add(r4),
        size: a3
      };
    }
  }
};
t(go, "type", "clip-path"), tt.setClass(go);
var fo = class extends yr {
  getInitialSize(t3, e5) {
    let { target: s3 } = t3, { size: i3 } = e5;
    return new ot(s3.width || i3.x, s3.height || i3.y);
  }
};
t(fo, "type", "fixed"), tt.setClass(fo);
var po = class extends Cr {
  subscribeTargets(t3) {
    const e5 = t3.target;
    t3.targets.reduce((t4, e6) => (e6.parent && t4.add(e6.parent), t4), /* @__PURE__ */ new Set()).forEach((t4) => {
      t4.layoutManager.subscribeTargets({
        target: t4,
        targets: [
          e5
        ]
      });
    });
  }
  unsubscribeTargets(t3) {
    const e5 = t3.target, s3 = e5.getObjects();
    t3.targets.reduce((t4, e6) => (e6.parent && t4.add(e6.parent), t4), /* @__PURE__ */ new Set()).forEach((t4) => {
      !s3.some((e6) => e6.parent === t4) && t4.layoutManager.unsubscribeTargets({
        target: t4,
        targets: [
          e5
        ]
      });
    });
  }
};
var mo = class _mo extends br {
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ..._mo.ownDefaults
    };
  }
  constructor() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(), Object.assign(this, _mo.ownDefaults), this.setOptions(e5);
    const { left: s3, top: i3, layoutManager: r3 } = e5;
    this.groupInit(t3, {
      left: s3,
      top: i3,
      layoutManager: null != r3 ? r3 : new po()
    });
  }
  _shouldSetNestedCoords() {
    return true;
  }
  __objectSelectionMonitor() {
  }
  multiSelectAdd() {
    for (var t3 = arguments.length, e5 = new Array(t3), s3 = 0; s3 < t3; s3++) e5[s3] = arguments[s3];
    "selection-order" === this.multiSelectionStacking ? this.add(...e5) : e5.forEach((t4) => {
      const e6 = this._objects.findIndex((e7) => e7.isInFrontOf(t4)), s4 = -1 === e6 ? this.size() : e6;
      this.insertAt(s4, t4);
    });
  }
  canEnterGroup(t3) {
    return this.getObjects().some((e5) => e5.isDescendantOf(t3) || t3.isDescendantOf(e5)) ? (i("error", "ActiveSelection: circular object trees are not supported, this call has no effect"), false) : super.canEnterGroup(t3);
  }
  enterGroup(t3, e5) {
    t3.parent && t3.parent === t3.group ? t3.parent._exitGroup(t3) : t3.group && t3.parent !== t3.group && t3.group.remove(t3), this._enterGroup(t3, e5);
  }
  exitGroup(t3, e5) {
    this._exitGroup(t3, e5), t3.parent && t3.parent._enterGroup(t3, true);
  }
  _onAfterObjectsChange(t3, e5) {
    super._onAfterObjectsChange(t3, e5);
    const s3 = /* @__PURE__ */ new Set();
    e5.forEach((t4) => {
      const { parent: e6 } = t4;
      e6 && s3.add(e6);
    }), t3 === pr ? s3.forEach((t4) => {
      t4._onAfterObjectsChange(fr, e5);
    }) : s3.forEach((t4) => {
      t4._set("dirty", true);
    });
  }
  onDeselect() {
    return this.removeAll(), false;
  }
  toString() {
    return `#<ActiveSelection: (${this.complexity()})>`;
  }
  shouldCache() {
    return false;
  }
  isOnACache() {
    return false;
  }
  _renderControls(t3, e5, s3) {
    t3.save(), t3.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1;
    const i3 = {
      hasControls: false,
      ...s3,
      forActiveSelection: true
    };
    for (let e6 = 0; e6 < this._objects.length; e6++) this._objects[e6]._renderControls(t3, i3);
    super._renderControls(t3, e5), t3.restore();
  }
};
t(mo, "type", "ActiveSelection"), t(mo, "ownDefaults", {
  multiSelectionStacking: "canvas-stacking"
}), tt.setClass(mo), tt.setClass(mo, "activeSelection");
var vo = class {
  constructor() {
    t(this, "resources", {});
  }
  applyFilters(t3, e5, s3, i3, r3) {
    const n3 = r3.getContext("2d", {
      willReadFrequently: true,
      desynchronized: true
    });
    if (!n3) return;
    n3.drawImage(e5, 0, 0, s3, i3);
    const o3 = {
      sourceWidth: s3,
      sourceHeight: i3,
      imageData: n3.getImageData(0, 0, s3, i3),
      originalEl: e5,
      originalImageData: n3.getImageData(0, 0, s3, i3),
      canvasEl: r3,
      ctx: n3,
      filterBackend: this
    };
    t3.forEach((t4) => {
      t4.applyTo(o3);
    });
    const { imageData: a3 } = o3;
    return a3.width === s3 && a3.height === i3 || (r3.width = a3.width, r3.height = a3.height), n3.putImageData(a3, 0, 0), o3;
  }
};
var yo = class {
  constructor() {
    let { tileSize: e5 = s.textureSize } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    t(this, "aPosition", new Float32Array([
      0,
      0,
      0,
      1,
      1,
      0,
      1,
      1
    ])), t(this, "resources", {}), this.tileSize = e5, this.setupGLContext(e5, e5), this.captureGPUInfo();
  }
  setupGLContext(t3, e5) {
    this.dispose(), this.createWebGLCanvas(t3, e5);
  }
  createWebGLCanvas(t3, e5) {
    const s3 = vt({
      width: t3,
      height: e5
    }), i3 = s3.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: false,
      depth: false,
      stencil: false,
      antialias: false
    });
    i3 && (i3.clearColor(0, 0, 0, 0), this.canvas = s3, this.gl = i3);
  }
  applyFilters(t3, e5, s3, i3, r3, n3) {
    const o3 = this.gl, a3 = r3.getContext("2d");
    if (!o3 || !a3) return;
    let h3;
    n3 && (h3 = this.getCachedTexture(n3, e5));
    const l3 = {
      originalWidth: e5.width || e5.naturalWidth || 0,
      originalHeight: e5.height || e5.naturalHeight || 0,
      sourceWidth: s3,
      sourceHeight: i3,
      destinationWidth: s3,
      destinationHeight: i3,
      context: o3,
      sourceTexture: this.createTexture(o3, s3, i3, h3 ? void 0 : e5),
      targetTexture: this.createTexture(o3, s3, i3),
      originalTexture: h3 || this.createTexture(o3, s3, i3, h3 ? void 0 : e5),
      passes: t3.length,
      webgl: true,
      aPosition: this.aPosition,
      programCache: this.programCache,
      pass: 0,
      filterBackend: this,
      targetCanvas: r3
    }, c2 = o3.createFramebuffer();
    return o3.bindFramebuffer(o3.FRAMEBUFFER, c2), t3.forEach((t4) => {
      t4 && t4.applyTo(l3);
    }), function(t4) {
      const e6 = t4.targetCanvas, s4 = e6.width, i4 = e6.height, r4 = t4.destinationWidth, n4 = t4.destinationHeight;
      s4 === r4 && i4 === n4 || (e6.width = r4, e6.height = n4);
    }(l3), this.copyGLTo2D(o3, l3), o3.bindTexture(o3.TEXTURE_2D, null), o3.deleteTexture(l3.sourceTexture), o3.deleteTexture(l3.targetTexture), o3.deleteFramebuffer(c2), a3.setTransform(1, 0, 0, 1, 0, 0), l3;
  }
  dispose() {
    this.canvas && (this.canvas = null, this.gl = null), this.clearWebGLCaches();
  }
  clearWebGLCaches() {
    this.programCache = {}, this.textureCache = {};
  }
  createTexture(t3, e5, s3, i3, r3) {
    const { NEAREST: n3, TEXTURE_2D: o3, RGBA: a3, UNSIGNED_BYTE: h3, CLAMP_TO_EDGE: l3, TEXTURE_MAG_FILTER: c2, TEXTURE_MIN_FILTER: u3, TEXTURE_WRAP_S: d3, TEXTURE_WRAP_T: g3 } = t3, f3 = t3.createTexture();
    return t3.bindTexture(o3, f3), t3.texParameteri(o3, c2, r3 || n3), t3.texParameteri(o3, u3, r3 || n3), t3.texParameteri(o3, d3, l3), t3.texParameteri(o3, g3, l3), i3 ? t3.texImage2D(o3, 0, a3, a3, h3, i3) : t3.texImage2D(o3, 0, a3, e5, s3, 0, a3, h3, null), f3;
  }
  getCachedTexture(t3, e5, s3) {
    const { textureCache: i3 } = this;
    if (i3[t3]) return i3[t3];
    {
      const r3 = this.createTexture(this.gl, e5.width, e5.height, e5, s3);
      return r3 && (i3[t3] = r3), r3;
    }
  }
  evictCachesForKey(t3) {
    this.textureCache[t3] && (this.gl.deleteTexture(this.textureCache[t3]), delete this.textureCache[t3]);
  }
  copyGLTo2D(t3, e5) {
    const s3 = t3.canvas, i3 = e5.targetCanvas, r3 = i3.getContext("2d");
    if (!r3) return;
    r3.translate(0, i3.height), r3.scale(1, -1);
    const n3 = s3.height - i3.height;
    r3.drawImage(s3, 0, n3, i3.width, i3.height, 0, 0, i3.width, i3.height);
  }
  copyGLTo2DPutImageData(t3, e5) {
    const s3 = e5.targetCanvas.getContext("2d"), i3 = e5.destinationWidth, r3 = e5.destinationHeight, n3 = i3 * r3 * 4;
    if (!s3) return;
    const o3 = new Uint8Array(this.imageBuffer, 0, n3), a3 = new Uint8ClampedArray(this.imageBuffer, 0, n3);
    t3.readPixels(0, 0, i3, r3, t3.RGBA, t3.UNSIGNED_BYTE, o3);
    const h3 = new ImageData(a3, i3, r3);
    s3.putImageData(h3, 0, 0);
  }
  captureGPUInfo() {
    if (this.gpuInfo) return this.gpuInfo;
    const t3 = this.gl, e5 = {
      renderer: "",
      vendor: ""
    };
    if (!t3) return e5;
    const s3 = t3.getExtension("WEBGL_debug_renderer_info");
    if (s3) {
      const i3 = t3.getParameter(s3.UNMASKED_RENDERER_WEBGL), r3 = t3.getParameter(s3.UNMASKED_VENDOR_WEBGL);
      i3 && (e5.renderer = i3.toLowerCase()), r3 && (e5.vendor = r3.toLowerCase());
    }
    return this.gpuInfo = e5, e5;
  }
};
var _o;
function xo() {
  const { WebGLProbe: t3 } = u();
  return t3.queryWebGL(pt()), s.enableGLFiltering && t3.isSupported(s.textureSize) ? new yo({
    tileSize: s.textureSize
  }) : new vo();
}
function Co() {
  return !_o && (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && (_o = xo()), _o;
}
var bo = [
  "cropX",
  "cropY"
];
var wo = class _wo extends wi {
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ..._wo.ownDefaults
    };
  }
  constructor(e5, s3) {
    super(), t(this, "_lastScaleX", 1), t(this, "_lastScaleY", 1), t(this, "_filterScalingX", 1), t(this, "_filterScalingY", 1), this.filters = [], Object.assign(this, _wo.ownDefaults), this.setOptions(s3), this.cacheKey = `texture${ft()}`, this.setElement("string" == typeof e5 ? (this.canvas && qt(this.canvas.getElement()) || d()).getElementById(e5) : e5, s3);
  }
  getElement() {
    return this._element;
  }
  setElement(t3) {
    let e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    this.removeTexture(this.cacheKey), this.removeTexture(`${this.cacheKey}_filtered`), this._element = t3, this._originalElement = t3, this._setWidthHeight(e5), 0 !== this.filters.length && this.applyFilters(), this.resizeFilter && this.applyResizeFilters();
  }
  removeTexture(t3) {
    const e5 = Co(false);
    e5 instanceof yo && e5.evictCachesForKey(t3);
  }
  dispose() {
    super.dispose(), this.removeTexture(this.cacheKey), this.removeTexture(`${this.cacheKey}_filtered`), this._cacheContext = null, [
      "_originalElement",
      "_element",
      "_filteredEl",
      "_cacheCanvas"
    ].forEach((t3) => {
      const e5 = this[t3];
      e5 && u().dispose(e5), this[t3] = void 0;
    });
  }
  getCrossOrigin() {
    return this._originalElement && (this._originalElement.crossOrigin || null);
  }
  getOriginalSize() {
    const t3 = this.getElement();
    return t3 ? {
      width: t3.naturalWidth || t3.width,
      height: t3.naturalHeight || t3.height
    } : {
      width: 0,
      height: 0
    };
  }
  _stroke(t3) {
    if (!this.stroke || 0 === this.strokeWidth) return;
    const e5 = this.width / 2, s3 = this.height / 2;
    t3.beginPath(), t3.moveTo(-e5, -s3), t3.lineTo(e5, -s3), t3.lineTo(e5, s3), t3.lineTo(-e5, s3), t3.lineTo(-e5, -s3), t3.closePath();
  }
  toObject() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    const e5 = [];
    return this.filters.forEach((t4) => {
      t4 && e5.push(t4.toObject());
    }), {
      ...super.toObject([
        ...bo,
        ...t3
      ]),
      src: this.getSrc(),
      crossOrigin: this.getCrossOrigin(),
      filters: e5,
      ...this.resizeFilter ? {
        resizeFilter: this.resizeFilter.toObject()
      } : {}
    };
  }
  hasCrop() {
    return !!this.cropX || !!this.cropY || this.width < this._element.width || this.height < this._element.height;
  }
  _toSVG() {
    const t3 = [], e5 = this._element, s3 = -this.width / 2, i3 = -this.height / 2;
    let r3 = [], n3 = [], o3 = "", a3 = "";
    if (!e5) return [];
    if (this.hasCrop()) {
      const t4 = ft();
      r3.push('<clipPath id="imageCrop_' + t4 + '">\n', '	<rect x="' + s3 + '" y="' + i3 + '" width="' + this.width + '" height="' + this.height + '" />\n', "</clipPath>\n"), o3 = ' clip-path="url(#imageCrop_' + t4 + ')" ';
    }
    if (this.imageSmoothing || (a3 = ' image-rendering="optimizeSpeed"'), t3.push("	<image ", "COMMON_PARTS", `xlink:href="${this.getSvgSrc(true)}" x="${s3 - this.cropX}" y="${i3 - this.cropY}" width="${e5.width || e5.naturalWidth}" height="${e5.height || e5.naturalHeight}"${a3}${o3}></image>
`), this.stroke || this.strokeDashArray) {
      const t4 = this.fill;
      this.fill = null, n3 = [
        `	<rect x="${s3}" y="${i3}" width="${this.width}" height="${this.height}" style="${this.getSvgStyles()}" />
`
      ], this.fill = t4;
    }
    return r3 = this.paintFirst !== H ? r3.concat(n3, t3) : r3.concat(t3, n3), r3;
  }
  getSrc(t3) {
    const e5 = t3 ? this._element : this._originalElement;
    return e5 ? e5.toDataURL ? e5.toDataURL() : this.srcFromAttribute ? e5.getAttribute("src") || "" : e5.src : this.src || "";
  }
  getSvgSrc(t3) {
    return this.getSrc(t3);
  }
  setSrc(t3) {
    let { crossOrigin: e5, signal: s3 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return Bt(t3, {
      crossOrigin: e5,
      signal: s3
    }).then((t4) => {
      void 0 !== e5 && this.set({
        crossOrigin: e5
      }), this.setElement(t4);
    });
  }
  toString() {
    return `#<Image: { src: "${this.getSrc()}" }>`;
  }
  applyResizeFilters() {
    const t3 = this.resizeFilter, e5 = this.minimumScaleTrigger, s3 = this.getTotalObjectScaling(), i3 = s3.x, r3 = s3.y, n3 = this._filteredEl || this._originalElement;
    if (this.group && this.set("dirty", true), !t3 || i3 > e5 && r3 > e5) return this._element = n3, this._filterScalingX = 1, this._filterScalingY = 1, this._lastScaleX = i3, void (this._lastScaleY = r3);
    const o3 = vt(n3), { width: a3, height: h3 } = n3;
    this._element = o3, this._lastScaleX = t3.scaleX = i3, this._lastScaleY = t3.scaleY = r3, Co().applyFilters([
      t3
    ], n3, a3, h3, this._element), this._filterScalingX = o3.width / this._originalElement.width, this._filterScalingY = o3.height / this._originalElement.height;
  }
  applyFilters() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.filters || [];
    if (t3 = t3.filter((t4) => t4 && !t4.isNeutralState()), this.set("dirty", true), this.removeTexture(`${this.cacheKey}_filtered`), 0 === t3.length) return this._element = this._originalElement, this._filteredEl = void 0, this._filterScalingX = 1, void (this._filterScalingY = 1);
    const e5 = this._originalElement, s3 = e5.naturalWidth || e5.width, i3 = e5.naturalHeight || e5.height;
    if (this._element === this._originalElement) {
      const t4 = vt({
        width: s3,
        height: i3
      });
      this._element = t4, this._filteredEl = t4;
    } else this._filteredEl && (this._element = this._filteredEl, this._filteredEl.getContext("2d").clearRect(0, 0, s3, i3), this._lastScaleX = 1, this._lastScaleY = 1);
    Co().applyFilters(t3, this._originalElement, s3, i3, this._element, this.cacheKey), this._originalElement.width === this._element.width && this._originalElement.height === this._element.height || (this._filterScalingX = this._element.width / this._originalElement.width, this._filterScalingY = this._element.height / this._originalElement.height);
  }
  _render(t3) {
    t3.imageSmoothingEnabled = this.imageSmoothing, true !== this.isMoving && this.resizeFilter && this._needsResize() && this.applyResizeFilters(), this._stroke(t3), this._renderPaintInOrder(t3);
  }
  drawCacheOnCanvas(t3) {
    t3.imageSmoothingEnabled = this.imageSmoothing, super.drawCacheOnCanvas(t3);
  }
  shouldCache() {
    return this.needsItsOwnCache();
  }
  _renderFill(t3) {
    const e5 = this._element;
    if (!e5) return;
    const s3 = this._filterScalingX, i3 = this._filterScalingY, r3 = this.width, n3 = this.height, o3 = Math.max(this.cropX, 0), a3 = Math.max(this.cropY, 0), h3 = e5.naturalWidth || e5.width, l3 = e5.naturalHeight || e5.height, c2 = o3 * s3, u3 = a3 * i3, d3 = Math.min(r3 * s3, h3 - c2), g3 = Math.min(n3 * i3, l3 - u3), f3 = -r3 / 2, p3 = -n3 / 2, m3 = Math.min(r3, h3 / s3 - o3), v3 = Math.min(n3, l3 / i3 - a3);
    e5 && t3.drawImage(e5, c2, u3, d3, g3, f3, p3, m3, v3);
  }
  _needsResize() {
    const t3 = this.getTotalObjectScaling();
    return t3.x !== this._lastScaleX || t3.y !== this._lastScaleY;
  }
  _resetWidthHeight() {
    this.set(this.getOriginalSize());
  }
  _setWidthHeight() {
    let { width: t3, height: e5 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const s3 = this.getOriginalSize();
    this.width = t3 || s3.width, this.height = e5 || s3.height;
  }
  parsePreserveAspectRatioAttribute() {
    const t3 = qe(this.preserveAspectRatio || ""), e5 = this.width, s3 = this.height, i3 = {
      width: e5,
      height: s3
    };
    let r3, n3 = this._element.width, o3 = this._element.height, a3 = 1, h3 = 1, l3 = 0, c2 = 0, u3 = 0, d3 = 0;
    return !t3 || t3.alignX === P && t3.alignY === P ? (a3 = e5 / n3, h3 = s3 / o3) : ("meet" === t3.meetOrSlice && (a3 = h3 = wr(this._element, i3), r3 = (e5 - n3 * a3) / 2, "Min" === t3.alignX && (l3 = -r3), "Max" === t3.alignX && (l3 = r3), r3 = (s3 - o3 * h3) / 2, "Min" === t3.alignY && (c2 = -r3), "Max" === t3.alignY && (c2 = r3)), "slice" === t3.meetOrSlice && (a3 = h3 = Tr(this._element, i3), r3 = n3 - e5 / a3, "Mid" === t3.alignX && (u3 = r3 / 2), "Max" === t3.alignX && (u3 = r3), r3 = o3 - s3 / h3, "Mid" === t3.alignY && (d3 = r3 / 2), "Max" === t3.alignY && (d3 = r3), n3 = e5 / a3, o3 = s3 / h3)), {
      width: n3,
      height: o3,
      scaleX: a3,
      scaleY: h3,
      offsetLeft: l3,
      offsetTop: c2,
      cropX: u3,
      cropY: d3
    };
  }
  static fromObject(t3, e5) {
    let { filters: s3, resizeFilter: i3, src: r3, crossOrigin: n3, type: o3, ...a3 } = t3;
    return Promise.all([
      Bt(r3, {
        ...e5,
        crossOrigin: n3
      }),
      s3 && Rt(s3, e5),
      i3 ? Rt([
        i3
      ], e5) : [],
      $t(a3, e5)
    ]).then((t4) => {
      let [e6, s4 = [], [i4], n4 = {}] = t4;
      return new this(e6, {
        ...a3,
        src: r3,
        filters: s4,
        resizeFilter: i4,
        ...n4
      });
    });
  }
  static fromURL(t3) {
    let { crossOrigin: e5 = null, signal: s3 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i3 = arguments.length > 2 ? arguments[2] : void 0;
    return Bt(t3, {
      crossOrigin: e5,
      signal: s3
    }).then((t4) => new this(t4, i3));
  }
  static async fromElement(t3) {
    let e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s3 = arguments.length > 2 ? arguments[2] : void 0;
    const r3 = cr(t3, this.ATTRIBUTE_NAMES, s3);
    return this.fromURL(r3["xlink:href"] || r3.href, e5, r3).catch((t4) => (i("log", "Unable to parse Image", t4), null));
  }
};
function To(t3) {
  if (!ys.test(t3.nodeName)) return {};
  const e5 = t3.getAttribute("viewBox");
  let s3, i3, r3 = 1, n3 = 1, o3 = 0, a3 = 0;
  const h3 = t3.getAttribute("width"), l3 = t3.getAttribute("height"), c2 = t3.getAttribute("x") || 0, u3 = t3.getAttribute("y") || 0, d3 = !(e5 && xs.test(e5)), g3 = !h3 || !l3 || "100%" === h3 || "100%" === l3;
  let f3 = "", p3 = 0, m3 = 0;
  if (d3 && (c2 || u3) && t3.parentNode && "#document" !== t3.parentNode.nodeName && (f3 = " translate(" + Ue(c2 || "0") + " " + Ue(u3 || "0") + ") ", s3 = (t3.getAttribute("transform") || "") + f3, t3.setAttribute("transform", s3), t3.removeAttribute("x"), t3.removeAttribute("y")), d3 && g3) return {
    width: 0,
    height: 0
  };
  const v3 = {
    width: 0,
    height: 0
  };
  if (d3) return v3.width = Ue(h3), v3.height = Ue(l3), v3;
  const y3 = e5.match(xs);
  o3 = -parseFloat(y3[1]), a3 = -parseFloat(y3[2]);
  const _3 = parseFloat(y3[3]), x3 = parseFloat(y3[4]);
  v3.minX = o3, v3.minY = a3, v3.viewBoxWidth = _3, v3.viewBoxHeight = x3, g3 ? (v3.width = _3, v3.height = x3) : (v3.width = Ue(h3), v3.height = Ue(l3), r3 = v3.width / _3, n3 = v3.height / x3);
  const C3 = qe(t3.getAttribute("preserveAspectRatio") || "");
  if (C3.alignX !== P && ("meet" === C3.meetOrSlice && (n3 = r3 = r3 > n3 ? n3 : r3), "slice" === C3.meetOrSlice && (n3 = r3 = r3 > n3 ? r3 : n3), p3 = v3.width - _3 * r3, m3 = v3.height - x3 * r3, "Mid" === C3.alignX && (p3 /= 2), "Mid" === C3.alignY && (m3 /= 2), "Min" === C3.alignX && (p3 = 0), "Min" === C3.alignY && (m3 = 0)), 1 === r3 && 1 === n3 && 0 === o3 && 0 === a3 && 0 === c2 && 0 === u3) return v3;
  if ((c2 || u3) && "#document" !== t3.parentNode.nodeName && (f3 = " translate(" + Ue(c2 || "0") + " " + Ue(u3 || "0") + ") "), s3 = f3 + " matrix(" + r3 + " 0 0 " + n3 + " " + (o3 * r3 + p3) + " " + (a3 * n3 + m3) + ") ", "svg" === t3.nodeName) {
    for (i3 = t3.ownerDocument.createElementNS(ds, "g"); t3.firstChild; ) i3.appendChild(t3.firstChild);
    t3.appendChild(i3);
  } else i3 = t3, i3.removeAttribute("x"), i3.removeAttribute("y"), s3 = i3.getAttribute("transform") + s3;
  return i3.setAttribute("transform", s3), v3;
}
t(wo, "type", "Image"), t(wo, "cacheProperties", [
  ...Os,
  ...bo
]), t(wo, "ownDefaults", {
  strokeWidth: 0,
  srcFromAttribute: false,
  minimumScaleTrigger: 0.5,
  cropX: 0,
  cropY: 0,
  imageSmoothing: true
}), t(wo, "ATTRIBUTE_NAMES", [
  ...Yi,
  "x",
  "y",
  "width",
  "height",
  "preserveAspectRatio",
  "xlink:href",
  "href",
  "crossOrigin",
  "image-rendering"
]), tt.setClass(wo), tt.setSVGClass(wo);
var Oo = (t3) => t3.tagName.replace("svg:", "");
var ko = Qe([
  "pattern",
  "defs",
  "symbol",
  "metadata",
  "clipPath",
  "mask",
  "desc"
]);
function Do(t3, e5) {
  let s3, i3, r3, n3, o3 = [];
  for (r3 = 0, n3 = e5.length; r3 < n3; r3++) s3 = e5[r3], i3 = t3.getElementsByTagNameNS("http://www.w3.org/2000/svg", s3), o3 = o3.concat(Array.from(i3));
  return o3;
}
var Mo = [
  "gradientTransform",
  "x1",
  "x2",
  "y1",
  "y2",
  "gradientUnits",
  "cx",
  "cy",
  "r",
  "fx",
  "fy"
];
var Po = "xlink:href";
function Eo(t3, e5) {
  var s3;
  const i3 = (null === (s3 = e5.getAttribute(Po)) || void 0 === s3 ? void 0 : s3.slice(1)) || "", r3 = t3.getElementById(i3);
  if (r3 && r3.getAttribute(Po) && Eo(t3, r3), r3 && (Mo.forEach((t4) => {
    const s4 = r3.getAttribute(t4);
    !e5.hasAttribute(t4) && s4 && e5.setAttribute(t4, s4);
  }), !e5.children.length)) {
    const t4 = r3.cloneNode(true);
    for (; t4.firstChild; ) e5.appendChild(t4.firstChild);
  }
  e5.removeAttribute(Po);
}
var Ao = [
  "linearGradient",
  "radialGradient",
  "svg:linearGradient",
  "svg:radialGradient"
];
var jo = (t3) => tt.getSVGClass(Oo(t3).toLowerCase());
var Fo = class {
  constructor(t3, e5, s3, i3, r3) {
    this.elements = t3, this.options = e5, this.reviver = s3, this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g, this.doc = i3, this.clipPaths = r3, this.gradientDefs = function(t4) {
      const e6 = Do(t4, Ao), s4 = {};
      let i4 = e6.length;
      for (; i4--; ) {
        const r4 = e6[i4];
        r4.getAttribute("xlink:href") && Eo(t4, r4);
        const n3 = r4.getAttribute("id");
        n3 && (s4[n3] = r4);
      }
      return s4;
    }(i3), this.cssRules = function(t4) {
      const e6 = t4.getElementsByTagName("style"), s4 = {};
      for (let t5 = 0; t5 < e6.length; t5++) {
        const i4 = (e6[t5].textContent || "").replace(/\/\*[\s\S]*?\*\//g, "");
        "" !== i4.trim() && i4.split("}").filter((t6, e7, s5) => s5.length > 1 && t6.trim()).forEach((t6) => {
          if ((t6.match(/{/g) || []).length > 1 && t6.trim().startsWith("@")) return;
          const e7 = t6.split("{"), i5 = {}, r4 = e7[1].trim().split(";").filter(function(t7) {
            return t7.trim();
          });
          for (let t7 = 0; t7 < r4.length; t7++) {
            const e8 = r4[t7].split(":"), s5 = e8[0].trim(), n3 = e8[1].trim();
            i5[s5] = n3;
          }
          (t6 = e7[0].trim()).split(",").forEach((t7) => {
            "" !== (t7 = t7.replace(/^svg/i, "").trim()) && (s4[t7] = {
              ...s4[t7] || {},
              ...i5
            });
          });
        });
      }
      return s4;
    }(i3);
  }
  parse() {
    return Promise.all(this.elements.map((t3) => this.createObject(t3)));
  }
  async createObject(t3) {
    const e5 = jo(t3);
    if (e5) {
      const s3 = await e5.fromElement(t3, this.options, this.cssRules);
      return this.resolveGradient(s3, t3, H), this.resolveGradient(s3, t3, N), s3 instanceof wo && s3._originalElement ? en(s3, s3.parsePreserveAspectRatioAttribute()) : en(s3), await this.resolveClipPath(s3, t3), this.reviver && this.reviver(t3, s3), s3;
    }
    return null;
  }
  extractPropertyDefinition(t3, e5, s3) {
    const i3 = t3[e5], r3 = this.regexUrl;
    if (!r3.test(i3)) return;
    r3.lastIndex = 0;
    const n3 = r3.exec(i3)[1];
    return r3.lastIndex = 0, s3[n3];
  }
  resolveGradient(t3, e5, s3) {
    const i3 = this.extractPropertyDefinition(t3, s3, this.gradientDefs);
    if (i3) {
      const r3 = e5.getAttribute(s3 + "-opacity"), n3 = kn.fromElement(i3, t3, {
        ...this.options,
        opacity: r3
      });
      t3.set(s3, n3);
    }
  }
  async resolveClipPath(t3, e5, s3) {
    const i3 = this.extractPropertyDefinition(t3, "clipPath", this.clipPaths);
    if (i3) {
      const r3 = wt(t3.calcTransformMatrix()), n3 = i3[0].parentElement;
      let o3 = e5;
      for (; !s3 && o3.parentElement && o3.getAttribute("clip-path") !== t3.clipPath; ) o3 = o3.parentElement;
      o3.parentElement.appendChild(n3);
      const a3 = nr(`${o3.getAttribute("transform") || ""} ${n3.getAttribute("originalTransform") || ""}`);
      n3.setAttribute("transform", `matrix(${a3.join(",")})`);
      const h3 = await Promise.all(i3.map((t4) => jo(t4).fromElement(t4, this.options, this.cssRules).then((t5) => (en(t5), t5.fillRule = t5.clipRule, delete t5.clipRule, t5)))), l3 = 1 === h3.length ? h3[0] : new br(h3), c2 = Tt(r3, l3.calcTransformMatrix());
      l3.clipPath && await this.resolveClipPath(l3, o3, n3.getAttribute("clip-path") ? o3 : void 0);
      const { scaleX: u3, scaleY: d3, angle: g3, skewX: f3, translateX: p3, translateY: m3 } = Dt(c2);
      l3.set({
        flipX: false,
        flipY: false
      }), l3.set({
        scaleX: u3,
        scaleY: d3,
        angle: g3,
        skewX: f3,
        skewY: 0
      }), l3.setPositionByOrigin(new ot(p3, m3), T, T), t3.clipPath = l3;
    } else delete t3.clipPath;
  }
};
var Lo = (t3) => vs.test(Oo(t3));
async function Io(t3, e5) {
  let { crossOrigin: s3, signal: r3 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  if (r3 && r3.aborted) return i("log", new n("parseSVGDocument")), {
    objects: [],
    elements: [],
    options: {},
    allElements: []
  };
  const o3 = t3.documentElement;
  !function(t4) {
    const e6 = Do(t4, [
      "use",
      "svg:use"
    ]), s4 = [
      "x",
      "y",
      "xlink:href",
      "href",
      "transform"
    ];
    for (const i3 of e6) {
      const e7 = i3.attributes, r4 = {};
      for (const t5 of e7) t5.value && (r4[t5.name] = t5.value);
      const n3 = (r4["xlink:href"] || r4.href || "").slice(1);
      if ("" === n3) return;
      const o4 = t4.getElementById(n3);
      if (null === o4) return;
      let a4 = o4.cloneNode(true);
      const h4 = a4.attributes, l4 = {};
      for (const t5 of h4) t5.value && (l4[t5.name] = t5.value);
      const { x: c3 = 0, y: u4 = 0, transform: d3 = "" } = r4, g3 = `${d3} ${l4.transform || ""} translate(${c3}, ${u4})`;
      if (To(a4), /^svg$/i.test(a4.nodeName)) {
        const t5 = a4.ownerDocument.createElementNS(ds, "g");
        Object.entries(l4).forEach((e8) => {
          let [s5, i4] = e8;
          return t5.setAttributeNS(ds, s5, i4);
        }), t5.append(...a4.childNodes), a4 = t5;
      }
      for (const t5 of e7) {
        if (!t5) continue;
        const { name: e8, value: i4 } = t5;
        if (!s4.includes(e8)) if ("style" === e8) {
          const t6 = {};
          ar(i4, t6), Object.entries(l4).forEach((e9) => {
            let [s6, i5] = e9;
            t6[s6] = i5;
          }), ar(l4.style || "", t6);
          const s5 = Object.entries(t6).map((t7) => t7.join(":")).join(";");
          a4.setAttribute(e8, s5);
        } else !l4[e8] && a4.setAttribute(e8, i4);
      }
      a4.setAttribute("transform", g3), a4.setAttribute("instantiated_by_use", "1"), a4.removeAttribute("id"), i3.parentNode.replaceChild(a4, i3);
    }
  }(t3);
  const a3 = Array.from(o3.getElementsByTagName("*")), h3 = {
    ...To(o3),
    crossOrigin: s3,
    signal: r3
  }, l3 = a3.filter((t4) => (To(t4), Lo(t4) && !function(t5) {
    let e6 = t5;
    for (; e6 && (e6 = e6.parentElement); ) if (e6 && e6.nodeName && ko.test(Oo(e6)) && !e6.getAttribute("instantiated_by_use")) return true;
    return false;
  }(t4)));
  if (!l3 || l3 && !l3.length) return {
    objects: [],
    elements: [],
    options: {},
    allElements: [],
    options: h3,
    allElements: a3
  };
  const c2 = {};
  a3.filter((t4) => "clipPath" === Oo(t4)).forEach((t4) => {
    t4.setAttribute("originalTransform", t4.getAttribute("transform") || "");
    const e6 = t4.getAttribute("id");
    c2[e6] = Array.from(t4.getElementsByTagName("*")).filter((t5) => Lo(t5));
  });
  const u3 = new Fo(l3, h3, e5, t3, c2);
  return {
    objects: await u3.parse(),
    elements: l3,
    options: h3,
    allElements: a3
  };
}
function Bo(t3, e5, s3) {
  return Io(new (g()).DOMParser().parseFromString(t3.trim(), "text/xml"), e5, s3);
}
var $o = R;
var Xo = (t3) => function(e5, s3, i3) {
  const { points: r3, pathOffset: n3 } = i3;
  return new ot(r3[t3]).subtract(n3).transform(Tt(i3.getViewportTransform(), i3.calcTransformMatrix()));
};
var Yo = (t3, e5, s3, i3) => {
  const { target: r3, pointIndex: n3 } = e5, o3 = r3, a3 = fe(new ot(s3, i3), void 0, o3.calcOwnMatrix());
  return o3.points[n3] = a3.add(o3.pathOffset), o3.setDimensions(), o3.set("dirty", true), true;
};
var Wo = (t3, e5) => function(s3, i3, r3, n3) {
  const o3 = i3.target, a3 = new ot(o3.points[(t3 > 0 ? t3 : o3.points.length) - 1]), h3 = a3.subtract(o3.pathOffset).transform(o3.calcOwnMatrix()), l3 = e5(s3, {
    ...i3,
    pointIndex: t3
  }, r3, n3), c2 = a3.subtract(o3.pathOffset).transform(o3.calcOwnMatrix()).subtract(h3);
  return o3.left -= c2.x, o3.top -= c2.y, l3;
};
var Vo = (t3) => Hs($o, Wo(t3, Yo));
var Go = (t3, e5, s3) => {
  const { path: i3, pathOffset: r3 } = t3, n3 = i3[e5];
  return new ot(n3[s3] - r3.x, n3[s3 + 1] - r3.y).transform(Tt(t3.getViewportTransform(), t3.calcTransformMatrix()));
};
function zo(t3, e5, s3) {
  const { commandIndex: i3, pointIndex: r3 } = this;
  return Go(s3, i3, r3);
}
function Ho(t3, e5, s3, i3) {
  const { target: r3 } = e5, { commandIndex: n3, pointIndex: o3 } = this, a3 = ((t4, e6, s4, i4, r4) => {
    const { path: n4, pathOffset: o4 } = t4, a4 = n4[(i4 > 0 ? i4 : n4.length) - 1], h3 = new ot(a4[r4], a4[r4 + 1]), l3 = h3.subtract(o4).transform(t4.calcOwnMatrix()), c2 = fe(new ot(e6, s4), void 0, t4.calcOwnMatrix());
    n4[i4][r4] = c2.x + o4.x, n4[i4][r4 + 1] = c2.y + o4.y, t4.setDimensions();
    const u3 = h3.subtract(t4.pathOffset).transform(t4.calcOwnMatrix()).subtract(l3);
    return t4.left -= u3.x, t4.top -= u3.y, t4.set("dirty", true), true;
  })(r3, s3, i3, n3, o3);
  return ve(this.actionName, {
    ...Ie(t3, e5, s3, i3),
    commandIndex: n3,
    pointIndex: o3
  }), a3;
}
var No = class extends Js {
  constructor(t3) {
    super(t3);
  }
  render(t3, e5, s3, i3, r3) {
    const n3 = {
      ...i3,
      cornerColor: this.controlFill,
      cornerStrokeColor: this.controlStroke,
      transparentCorners: !this.controlFill
    };
    super.render(t3, e5, s3, n3, r3);
  }
};
var Uo = class extends No {
  constructor(t3) {
    super(t3);
  }
  render(t3, e5, s3, i3, r3) {
    const { path: n3 } = r3, { commandIndex: o3, pointIndex: a3, connectToCommandIndex: h3, connectToPointIndex: l3 } = this;
    t3.save(), t3.strokeStyle = this.controlStroke, this.connectionDashArray && t3.setLineDash(this.connectionDashArray);
    const [c2] = n3[o3], u3 = Go(r3, h3, l3);
    if ("Q" === c2) {
      const i4 = Go(r3, o3, a3 + 2);
      t3.moveTo(i4.x, i4.y), t3.lineTo(e5, s3);
    } else t3.moveTo(e5, s3);
    t3.lineTo(u3.x, u3.y), t3.stroke(), t3.restore(), super.render(t3, e5, s3, i3, r3);
  }
};
var qo = (t3, e5, s3, i3, r3, n3) => new (s3 ? Uo : No)({
  commandIndex: t3,
  pointIndex: e5,
  actionName: "modifyPath",
  positionHandler: zo,
  actionHandler: Ho,
  connectToCommandIndex: r3,
  connectToPointIndex: n3,
  ...i3,
  ...s3 ? i3.controlPointStyle : i3.pointStyle
});
var Ko = Object.freeze({
  __proto__: null,
  changeWidth: Us,
  createObjectDefaultControls: _i,
  createPathControls: function(t3) {
    let e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const s3 = {};
    let i3 = "M";
    return t3.path.forEach((t4, r3) => {
      const n3 = t4[0];
      switch ("Z" !== n3 && (s3[`c_${r3}_${n3}`] = qo(r3, t4.length - 2, false, e5)), n3) {
        case "C":
          s3[`c_${r3}_C_CP_1`] = qo(r3, 1, true, e5, r3 - 1, /* @__PURE__ */ ((t5) => "C" === t5 ? 5 : "Q" === t5 ? 3 : 1)(i3)), s3[`c_${r3}_C_CP_2`] = qo(r3, 3, true, e5, r3, 5);
          break;
        case "Q":
          s3[`c_${r3}_Q_CP_1`] = qo(r3, 1, true, e5, r3, 3);
      }
      i3 = n3;
    }), s3;
  },
  createPolyActionHandler: Vo,
  createPolyControls: function(t3) {
    let e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const s3 = {};
    for (let i3 = 0; i3 < ("number" == typeof t3 ? t3 : t3.points.length); i3++) s3[`p${i3}`] = new Js({
      actionName: $o,
      positionHandler: Xo(i3),
      actionHandler: Vo(i3),
      ...e5
    });
    return s3;
  },
  createPolyPositionHandler: Xo,
  createResizeControls: xi,
  createTextboxDefaultControls: Ci,
  dragHandler: $e,
  factoryPolyActionHandler: Wo,
  getLocalPoint: Re,
  polyActionHandler: Yo,
  renderCircleControl: qs,
  renderSquareControl: Ks,
  rotationStyleHandler: Qs,
  rotationWithSnapping: Zs,
  scaleCursorStyleHandler: ii,
  scaleOrSkewActionName: pi,
  scaleSkewCursorStyleHandler: mi,
  scalingEqually: ni,
  scalingX: oi,
  scalingXOrSkewingY: vi,
  scalingY: ai,
  scalingYOrSkewingX: yi,
  skewCursorStyleHandler: ci,
  skewHandlerX: di,
  skewHandlerY: gi,
  wrapWithFireEvent: Hs,
  wrapWithFixedAnchor: Ns
});
var Jo = (t3) => void 0 !== t3.webgl;
var Zo = "precision highp float";
var ta = `
    ${Zo};
    varying vec2 vTexCoord;
    uniform sampler2D uTexture;
    void main() {
      gl_FragColor = texture2D(uTexture, vTexCoord);
    }`;
var ea = new RegExp(Zo, "g");
var sa = class {
  get type() {
    return this.constructor.type;
  }
  constructor() {
    let { type: t3, ...e5 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    Object.assign(this, this.constructor.defaults, e5);
  }
  getFragmentSource() {
    return ta;
  }
  getVertexSource() {
    return "\n    attribute vec2 aPosition;\n    varying vec2 vTexCoord;\n    void main() {\n      vTexCoord = aPosition;\n      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n    }";
  }
  createProgram(t3) {
    let e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getFragmentSource(), s3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.getVertexSource();
    const { WebGLProbe: { GLPrecision: i3 = "highp" } } = u();
    "highp" !== i3 && (e5 = e5.replace(ea, Zo.replace("highp", i3)));
    const n3 = t3.createShader(t3.VERTEX_SHADER), o3 = t3.createShader(t3.FRAGMENT_SHADER), a3 = t3.createProgram();
    if (!n3 || !o3 || !a3) throw new r("Vertex, fragment shader or program creation error");
    if (t3.shaderSource(n3, s3), t3.compileShader(n3), !t3.getShaderParameter(n3, t3.COMPILE_STATUS)) throw new r(`Vertex shader compile error for ${this.type}: ${t3.getShaderInfoLog(n3)}`);
    if (t3.shaderSource(o3, e5), t3.compileShader(o3), !t3.getShaderParameter(o3, t3.COMPILE_STATUS)) throw new r(`Fragment shader compile error for ${this.type}: ${t3.getShaderInfoLog(o3)}`);
    if (t3.attachShader(a3, n3), t3.attachShader(a3, o3), t3.linkProgram(a3), !t3.getProgramParameter(a3, t3.LINK_STATUS)) throw new r(`Shader link error for "${this.type}" ${t3.getProgramInfoLog(a3)}`);
    const h3 = this.getUniformLocations(t3, a3) || {};
    return h3.uStepW = t3.getUniformLocation(a3, "uStepW"), h3.uStepH = t3.getUniformLocation(a3, "uStepH"), {
      program: a3,
      attributeLocations: this.getAttributeLocations(t3, a3),
      uniformLocations: h3
    };
  }
  getAttributeLocations(t3, e5) {
    return {
      aPosition: t3.getAttribLocation(e5, "aPosition")
    };
  }
  getUniformLocations(t3, e5) {
    const s3 = this.constructor.uniformLocations, i3 = {};
    for (let r3 = 0; r3 < s3.length; r3++) i3[s3[r3]] = t3.getUniformLocation(e5, s3[r3]);
    return i3;
  }
  sendAttributeData(t3, e5, s3) {
    const i3 = e5.aPosition, r3 = t3.createBuffer();
    t3.bindBuffer(t3.ARRAY_BUFFER, r3), t3.enableVertexAttribArray(i3), t3.vertexAttribPointer(i3, 2, t3.FLOAT, false, 0, 0), t3.bufferData(t3.ARRAY_BUFFER, s3, t3.STATIC_DRAW);
  }
  _setupFrameBuffer(t3) {
    const e5 = t3.context;
    if (t3.passes > 1) {
      const s3 = t3.destinationWidth, i3 = t3.destinationHeight;
      t3.sourceWidth === s3 && t3.sourceHeight === i3 || (e5.deleteTexture(t3.targetTexture), t3.targetTexture = t3.filterBackend.createTexture(e5, s3, i3)), e5.framebufferTexture2D(e5.FRAMEBUFFER, e5.COLOR_ATTACHMENT0, e5.TEXTURE_2D, t3.targetTexture, 0);
    } else e5.bindFramebuffer(e5.FRAMEBUFFER, null), e5.finish();
  }
  _swapTextures(t3) {
    t3.passes--, t3.pass++;
    const e5 = t3.targetTexture;
    t3.targetTexture = t3.sourceTexture, t3.sourceTexture = e5;
  }
  isNeutralState(t3) {
    return false;
  }
  applyTo(t3) {
    Jo(t3) ? (this._setupFrameBuffer(t3), this.applyToWebGL(t3), this._swapTextures(t3)) : this.applyTo2d(t3);
  }
  applyTo2d(t3) {
  }
  getCacheKey() {
    return this.type;
  }
  retrieveShader(t3) {
    const e5 = this.getCacheKey();
    return t3.programCache[e5] || (t3.programCache[e5] = this.createProgram(t3.context)), t3.programCache[e5];
  }
  applyToWebGL(t3) {
    const e5 = t3.context, s3 = this.retrieveShader(t3);
    0 === t3.pass && t3.originalTexture ? e5.bindTexture(e5.TEXTURE_2D, t3.originalTexture) : e5.bindTexture(e5.TEXTURE_2D, t3.sourceTexture), e5.useProgram(s3.program), this.sendAttributeData(e5, s3.attributeLocations, t3.aPosition), e5.uniform1f(s3.uniformLocations.uStepW, 1 / t3.sourceWidth), e5.uniform1f(s3.uniformLocations.uStepH, 1 / t3.sourceHeight), this.sendUniformData(e5, s3.uniformLocations), e5.viewport(0, 0, t3.destinationWidth, t3.destinationHeight), e5.drawArrays(e5.TRIANGLE_STRIP, 0, 4);
  }
  bindAdditionalTexture(t3, e5, s3) {
    t3.activeTexture(s3), t3.bindTexture(t3.TEXTURE_2D, e5), t3.activeTexture(t3.TEXTURE0);
  }
  unbindAdditionalTexture(t3, e5) {
    t3.activeTexture(e5), t3.bindTexture(t3.TEXTURE_2D, null), t3.activeTexture(t3.TEXTURE0);
  }
  sendUniformData(t3, e5) {
  }
  createHelpLayer(t3) {
    if (!t3.helpLayer) {
      const { sourceWidth: e5, sourceHeight: s3 } = t3, i3 = vt({
        width: e5,
        height: s3
      });
      t3.helpLayer = i3;
    }
  }
  toObject() {
    const t3 = Object.keys(this.constructor.defaults || {});
    return {
      type: this.type,
      ...t3.reduce((t4, e5) => (t4[e5] = this[e5], t4), {})
    };
  }
  toJSON() {
    return this.toObject();
  }
  static async fromObject(t3, e5) {
    let { type: s3, ...i3 } = t3;
    return new this(i3);
  }
};
t(sa, "type", "BaseFilter"), t(sa, "uniformLocations", []);
var ia = {
  multiply: "gl_FragColor.rgb *= uColor.rgb;\n",
  screen: "gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);\n",
  add: "gl_FragColor.rgb += uColor.rgb;\n",
  difference: "gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);\n",
  subtract: "gl_FragColor.rgb -= uColor.rgb;\n",
  lighten: "gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);\n",
  darken: "gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);\n",
  exclusion: "gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);\n",
  overlay: "\n    if (uColor.r < 0.5) {\n      gl_FragColor.r *= 2.0 * uColor.r;\n    } else {\n      gl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);\n    }\n    if (uColor.g < 0.5) {\n      gl_FragColor.g *= 2.0 * uColor.g;\n    } else {\n      gl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);\n    }\n    if (uColor.b < 0.5) {\n      gl_FragColor.b *= 2.0 * uColor.b;\n    } else {\n      gl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);\n    }\n    ",
  tint: "\n    gl_FragColor.rgb *= (1.0 - uColor.a);\n    gl_FragColor.rgb += uColor.rgb;\n    "
};
var ra = class extends sa {
  getCacheKey() {
    return `${this.type}_${this.mode}`;
  }
  getFragmentSource() {
    return `
      precision highp float;
      uniform sampler2D uTexture;
      uniform vec4 uColor;
      varying vec2 vTexCoord;
      void main() {
        vec4 color = texture2D(uTexture, vTexCoord);
        gl_FragColor = color;
        if (color.a > 0.0) {
          ${ia[this.mode]}
        }
      }
      `;
  }
  applyTo2d(t3) {
    let { imageData: { data: e5 } } = t3;
    const s3 = new Ne(this.color).getSource(), i3 = this.alpha, r3 = s3[0] * i3, n3 = s3[1] * i3, o3 = s3[2] * i3, a3 = 1 - i3;
    for (let t4 = 0; t4 < e5.length; t4 += 4) {
      const s4 = e5[t4], i4 = e5[t4 + 1], h3 = e5[t4 + 2];
      let l3, c2, u3;
      switch (this.mode) {
        case "multiply":
          l3 = s4 * r3 / 255, c2 = i4 * n3 / 255, u3 = h3 * o3 / 255;
          break;
        case "screen":
          l3 = 255 - (255 - s4) * (255 - r3) / 255, c2 = 255 - (255 - i4) * (255 - n3) / 255, u3 = 255 - (255 - h3) * (255 - o3) / 255;
          break;
        case "add":
          l3 = s4 + r3, c2 = i4 + n3, u3 = h3 + o3;
          break;
        case "difference":
          l3 = Math.abs(s4 - r3), c2 = Math.abs(i4 - n3), u3 = Math.abs(h3 - o3);
          break;
        case "subtract":
          l3 = s4 - r3, c2 = i4 - n3, u3 = h3 - o3;
          break;
        case "darken":
          l3 = Math.min(s4, r3), c2 = Math.min(i4, n3), u3 = Math.min(h3, o3);
          break;
        case "lighten":
          l3 = Math.max(s4, r3), c2 = Math.max(i4, n3), u3 = Math.max(h3, o3);
          break;
        case "overlay":
          l3 = r3 < 128 ? 2 * s4 * r3 / 255 : 255 - 2 * (255 - s4) * (255 - r3) / 255, c2 = n3 < 128 ? 2 * i4 * n3 / 255 : 255 - 2 * (255 - i4) * (255 - n3) / 255, u3 = o3 < 128 ? 2 * h3 * o3 / 255 : 255 - 2 * (255 - h3) * (255 - o3) / 255;
          break;
        case "exclusion":
          l3 = r3 + s4 - 2 * r3 * s4 / 255, c2 = n3 + i4 - 2 * n3 * i4 / 255, u3 = o3 + h3 - 2 * o3 * h3 / 255;
          break;
        case "tint":
          l3 = r3 + s4 * a3, c2 = n3 + i4 * a3, u3 = o3 + h3 * a3;
      }
      e5[t4] = l3, e5[t4 + 1] = c2, e5[t4 + 2] = u3;
    }
  }
  sendUniformData(t3, e5) {
    const s3 = new Ne(this.color).getSource();
    s3[0] = this.alpha * s3[0] / 255, s3[1] = this.alpha * s3[1] / 255, s3[2] = this.alpha * s3[2] / 255, s3[3] = this.alpha, t3.uniform4fv(e5.uColor, s3);
  }
};
t(ra, "defaults", {
  color: "#F95C63",
  mode: "multiply",
  alpha: 1
}), t(ra, "type", "BlendColor"), t(ra, "uniformLocations", [
  "uColor"
]), tt.setClass(ra);
var na = {
  multiply: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform sampler2D uImage;\n    uniform vec4 uColor;\n    varying vec2 vTexCoord;\n    varying vec2 vTexCoord2;\n    void main() {\n      vec4 color = texture2D(uTexture, vTexCoord);\n      vec4 color2 = texture2D(uImage, vTexCoord2);\n      color.rgba *= color2.rgba;\n      gl_FragColor = color;\n    }\n    ",
  mask: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform sampler2D uImage;\n    uniform vec4 uColor;\n    varying vec2 vTexCoord;\n    varying vec2 vTexCoord2;\n    void main() {\n      vec4 color = texture2D(uTexture, vTexCoord);\n      vec4 color2 = texture2D(uImage, vTexCoord2);\n      color.a = color2.a;\n      gl_FragColor = color;\n    }\n    "
};
var oa = class extends sa {
  getCacheKey() {
    return `${this.type}_${this.mode}`;
  }
  getFragmentSource() {
    return na[this.mode];
  }
  getVertexSource() {
    return "\n    attribute vec2 aPosition;\n    varying vec2 vTexCoord;\n    varying vec2 vTexCoord2;\n    uniform mat3 uTransformMatrix;\n    void main() {\n      vTexCoord = aPosition;\n      vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;\n      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n    }\n    ";
  }
  applyToWebGL(t3) {
    const e5 = t3.context, s3 = this.createTexture(t3.filterBackend, this.image);
    this.bindAdditionalTexture(e5, s3, e5.TEXTURE1), super.applyToWebGL(t3), this.unbindAdditionalTexture(e5, e5.TEXTURE1);
  }
  createTexture(t3, e5) {
    return t3.getCachedTexture(e5.cacheKey, e5.getElement());
  }
  calculateMatrix() {
    const t3 = this.image, { width: e5, height: s3 } = t3.getElement();
    return [
      1 / t3.scaleX,
      0,
      0,
      0,
      1 / t3.scaleY,
      0,
      -t3.left / e5,
      -t3.top / s3,
      1
    ];
  }
  applyTo2d(t3) {
    let { imageData: { data: e5, width: s3, height: i3 }, filterBackend: { resources: r3 } } = t3;
    const n3 = this.image;
    r3.blendImage || (r3.blendImage = pt());
    const o3 = r3.blendImage, a3 = o3.getContext("2d");
    o3.width !== s3 || o3.height !== i3 ? (o3.width = s3, o3.height = i3) : a3.clearRect(0, 0, s3, i3), a3.setTransform(n3.scaleX, 0, 0, n3.scaleY, n3.left, n3.top), a3.drawImage(n3.getElement(), 0, 0, s3, i3);
    const h3 = a3.getImageData(0, 0, s3, i3).data;
    for (let t4 = 0; t4 < e5.length; t4 += 4) {
      const s4 = e5[t4], i4 = e5[t4 + 1], r4 = e5[t4 + 2], n4 = e5[t4 + 3], o4 = h3[t4], a4 = h3[t4 + 1], l3 = h3[t4 + 2], c2 = h3[t4 + 3];
      switch (this.mode) {
        case "multiply":
          e5[t4] = s4 * o4 / 255, e5[t4 + 1] = i4 * a4 / 255, e5[t4 + 2] = r4 * l3 / 255, e5[t4 + 3] = n4 * c2 / 255;
          break;
        case "mask":
          e5[t4 + 3] = c2;
      }
    }
  }
  sendUniformData(t3, e5) {
    const s3 = this.calculateMatrix();
    t3.uniform1i(e5.uImage, 1), t3.uniformMatrix3fv(e5.uTransformMatrix, false, s3);
  }
  toObject() {
    return {
      ...super.toObject(),
      image: this.image && this.image.toObject()
    };
  }
  static async fromObject(t3, e5) {
    let { type: s3, image: i3, ...r3 } = t3;
    return wo.fromObject(i3, e5).then((t4) => new this({
      ...r3,
      image: t4
    }));
  }
};
t(oa, "type", "BlendImage"), t(oa, "defaults", {
  mode: "multiply",
  alpha: 1
}), t(oa, "uniformLocations", [
  "uTransformMatrix",
  "uImage"
]), tt.setClass(oa);
var aa = class extends sa {
  getFragmentSource() {
    return "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform vec2 uDelta;\n    varying vec2 vTexCoord;\n    const float nSamples = 15.0;\n    vec3 v3offset = vec3(12.9898, 78.233, 151.7182);\n    float random(vec3 scale) {\n      /* use the fragment position for a different seed per-pixel */\n      return fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);\n    }\n    void main() {\n      vec4 color = vec4(0.0);\n      float totalC = 0.0;\n      float totalA = 0.0;\n      float offset = random(v3offset);\n      for (float t = -nSamples; t <= nSamples; t++) {\n        float percent = (t + offset - 0.5) / nSamples;\n        vec4 sample = texture2D(uTexture, vTexCoord + uDelta * percent);\n        float weight = 1.0 - abs(percent);\n        float alpha = weight * sample.a;\n        color.rgb += sample.rgb * alpha;\n        color.a += alpha;\n        totalA += weight;\n        totalC += alpha;\n      }\n      gl_FragColor.rgb = color.rgb / totalC;\n      gl_FragColor.a = color.a / totalA;\n    }\n  ";
  }
  applyTo(t3) {
    Jo(t3) ? (this.aspectRatio = t3.sourceWidth / t3.sourceHeight, t3.passes++, this._setupFrameBuffer(t3), this.horizontal = true, this.applyToWebGL(t3), this._swapTextures(t3), this._setupFrameBuffer(t3), this.horizontal = false, this.applyToWebGL(t3), this._swapTextures(t3)) : this.applyTo2d(t3);
  }
  applyTo2d(t3) {
    let { imageData: { data: e5, width: s3, height: i3 } } = t3;
    this.aspectRatio = s3 / i3, this.horizontal = true;
    let r3 = this.getBlurValue() * s3;
    const n3 = new Uint8ClampedArray(e5), o3 = 15, a3 = 4 * s3;
    for (let t4 = 0; t4 < e5.length; t4 += 4) {
      let s4 = 0, i4 = 0, h3 = 0, l3 = 0, c2 = 0;
      const u3 = t4 - t4 % a3, d3 = u3 + a3;
      for (let n4 = -14; n4 < o3; n4++) {
        const a4 = n4 / o3, g3 = 4 * Math.floor(r3 * a4), f3 = 1 - Math.abs(a4);
        let p3 = t4 + g3;
        p3 < u3 ? p3 = u3 : p3 > d3 && (p3 = d3);
        const m3 = e5[p3 + 3] * f3;
        s4 += e5[p3] * m3, i4 += e5[p3 + 1] * m3, h3 += e5[p3 + 2] * m3, l3 += m3, c2 += f3;
      }
      n3[t4] = s4 / l3, n3[t4 + 1] = i4 / l3, n3[t4 + 2] = h3 / l3, n3[t4 + 3] = l3 / c2;
    }
    this.horizontal = false, r3 = this.getBlurValue() * i3;
    for (let t4 = 0; t4 < n3.length; t4 += 4) {
      let s4 = 0, i4 = 0, h3 = 0, l3 = 0, c2 = 0;
      const u3 = t4 % a3, d3 = n3.length - a3 + u3;
      for (let e6 = -14; e6 < o3; e6++) {
        const g3 = e6 / o3, f3 = Math.floor(r3 * g3) * a3, p3 = 1 - Math.abs(g3);
        let m3 = t4 + f3;
        m3 < u3 ? m3 = u3 : m3 > d3 && (m3 = d3);
        const v3 = n3[m3 + 3] * p3;
        s4 += n3[m3] * v3, i4 += n3[m3 + 1] * v3, h3 += n3[m3 + 2] * v3, l3 += v3, c2 += p3;
      }
      e5[t4] = s4 / l3, e5[t4 + 1] = i4 / l3, e5[t4 + 2] = h3 / l3, e5[t4 + 3] = l3 / c2;
    }
  }
  sendUniformData(t3, e5) {
    const s3 = this.chooseRightDelta();
    t3.uniform2fv(e5.uDelta, s3);
  }
  isNeutralState() {
    return 0 === this.blur;
  }
  getBlurValue() {
    let t3 = 1;
    const { horizontal: e5, aspectRatio: s3 } = this;
    return e5 ? s3 > 1 && (t3 = 1 / s3) : s3 < 1 && (t3 = s3), t3 * this.blur * 0.12;
  }
  chooseRightDelta() {
    const t3 = this.getBlurValue();
    return this.horizontal ? [
      t3,
      0
    ] : [
      0,
      t3
    ];
  }
};
t(aa, "type", "Blur"), t(aa, "defaults", {
  blur: 0
}), t(aa, "uniformLocations", [
  "uDelta"
]), tt.setClass(aa);
var ha = class extends sa {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uBrightness;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    color.rgb += uBrightness;\n    gl_FragColor = color;\n  }\n";
  }
  applyTo2d(t3) {
    let { imageData: { data: e5 } } = t3;
    const s3 = Math.round(255 * this.brightness);
    for (let t4 = 0; t4 < e5.length; t4 += 4) e5[t4] += s3, e5[t4 + 1] += s3, e5[t4 + 2] += s3;
  }
  isNeutralState() {
    return 0 === this.brightness;
  }
  sendUniformData(t3, e5) {
    t3.uniform1f(e5.uBrightness, this.brightness);
  }
};
t(ha, "type", "Brightness"), t(ha, "defaults", {
  brightness: 0
}), t(ha, "uniformLocations", [
  "uBrightness"
]), tt.setClass(ha);
var la = {
  matrix: [
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0
  ],
  colorsOnly: true
};
var ca = class extends sa {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  varying vec2 vTexCoord;\n  uniform mat4 uColorMatrix;\n  uniform vec4 uConstants;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    color *= uColorMatrix;\n    color += uConstants;\n    gl_FragColor = color;\n  }";
  }
  applyTo2d(t3) {
    const e5 = t3.imageData.data, s3 = this.matrix, i3 = this.colorsOnly;
    for (let t4 = 0; t4 < e5.length; t4 += 4) {
      const r3 = e5[t4], n3 = e5[t4 + 1], o3 = e5[t4 + 2];
      if (e5[t4] = r3 * s3[0] + n3 * s3[1] + o3 * s3[2] + 255 * s3[4], e5[t4 + 1] = r3 * s3[5] + n3 * s3[6] + o3 * s3[7] + 255 * s3[9], e5[t4 + 2] = r3 * s3[10] + n3 * s3[11] + o3 * s3[12] + 255 * s3[14], !i3) {
        const i4 = e5[t4 + 3];
        e5[t4] += i4 * s3[3], e5[t4 + 1] += i4 * s3[8], e5[t4 + 2] += i4 * s3[13], e5[t4 + 3] = r3 * s3[15] + n3 * s3[16] + o3 * s3[17] + i4 * s3[18] + 255 * s3[19];
      }
    }
  }
  sendUniformData(t3, e5) {
    const s3 = this.matrix, i3 = [
      s3[0],
      s3[1],
      s3[2],
      s3[3],
      s3[5],
      s3[6],
      s3[7],
      s3[8],
      s3[10],
      s3[11],
      s3[12],
      s3[13],
      s3[15],
      s3[16],
      s3[17],
      s3[18]
    ], r3 = [
      s3[4],
      s3[9],
      s3[14],
      s3[19]
    ];
    t3.uniformMatrix4fv(e5.uColorMatrix, false, i3), t3.uniform4fv(e5.uConstants, r3);
  }
  toObject() {
    return {
      ...super.toObject(),
      matrix: [
        ...this.matrix
      ]
    };
  }
};
function ua(e5, s3) {
  var i3;
  const r3 = (t(i3 = class extends ca {
    toObject() {
      return {
        type: this.type,
        colorsOnly: this.colorsOnly
      };
    }
  }, "type", e5), t(i3, "defaults", {
    colorsOnly: false,
    matrix: s3
  }), i3);
  return tt.setClass(r3, e5), r3;
}
t(ca, "type", "ColorMatrix"), t(ca, "defaults", la), t(ca, "uniformLocations", [
  "uColorMatrix",
  "uConstants"
]), tt.setClass(ca);
var da = ua("Brownie", [
  0.5997,
  0.34553,
  -0.27082,
  0,
  0.186,
  -0.0377,
  0.86095,
  0.15059,
  0,
  -0.1449,
  0.24113,
  -0.07441,
  0.44972,
  0,
  -0.02965,
  0,
  0,
  0,
  1,
  0
]);
var ga = ua("Vintage", [
  0.62793,
  0.32021,
  -0.03965,
  0,
  0.03784,
  0.02578,
  0.64411,
  0.03259,
  0,
  0.02926,
  0.0466,
  -0.08512,
  0.52416,
  0,
  0.02023,
  0,
  0,
  0,
  1,
  0
]);
var fa = ua("Kodachrome", [
  1.12855,
  -0.39673,
  -0.03992,
  0,
  0.24991,
  -0.16404,
  1.08352,
  -0.05498,
  0,
  0.09698,
  -0.16786,
  -0.56034,
  1.60148,
  0,
  0.13972,
  0,
  0,
  0,
  1,
  0
]);
var pa = ua("Technicolor", [
  1.91252,
  -0.85453,
  -0.09155,
  0,
  0.04624,
  -0.30878,
  1.76589,
  -0.10601,
  0,
  -0.27589,
  -0.2311,
  -0.75018,
  1.84759,
  0,
  0.12137,
  0,
  0,
  0,
  1,
  0
]);
var ma = ua("Polaroid", [
  1.438,
  -0.062,
  -0.062,
  0,
  0,
  -0.122,
  1.378,
  -0.122,
  0,
  0,
  -0.016,
  -0.016,
  1.483,
  0,
  0,
  0,
  0,
  0,
  1,
  0
]);
var va = ua("Sepia", [
  0.393,
  0.769,
  0.189,
  0,
  0,
  0.349,
  0.686,
  0.168,
  0,
  0,
  0.272,
  0.534,
  0.131,
  0,
  0,
  0,
  0,
  0,
  1,
  0
]);
var ya = ua("BlackWhite", [
  1.5,
  1.5,
  1.5,
  0,
  -1,
  1.5,
  1.5,
  1.5,
  0,
  -1,
  1.5,
  1.5,
  1.5,
  0,
  -1,
  0,
  0,
  0,
  1,
  0
]);
var _a = class extends sa {
  constructor() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    super(t3), this.subFilters = t3.subFilters || [];
  }
  applyTo(t3) {
    Jo(t3) && (t3.passes += this.subFilters.length - 1), this.subFilters.forEach((e5) => {
      e5.applyTo(t3);
    });
  }
  toObject() {
    return {
      type: this.type,
      subFilters: this.subFilters.map((t3) => t3.toObject())
    };
  }
  isNeutralState() {
    return !this.subFilters.some((t3) => !t3.isNeutralState());
  }
  static fromObject(t3, e5) {
    return Promise.all((t3.subFilters || []).map((t4) => tt.getClass(t4.type).fromObject(t4, e5))).then((t4) => new this({
      subFilters: t4
    }));
  }
};
t(_a, "type", "Composed"), tt.setClass(_a);
var xa = class extends sa {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uContrast;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));\n    color.rgb = contrastF * (color.rgb - 0.5) + 0.5;\n    gl_FragColor = color;\n  }";
  }
  isNeutralState() {
    return 0 === this.contrast;
  }
  applyTo2d(t3) {
    let { imageData: { data: e5 } } = t3;
    const s3 = Math.floor(255 * this.contrast), i3 = 259 * (s3 + 255) / (255 * (259 - s3));
    for (let t4 = 0; t4 < e5.length; t4 += 4) e5[t4] = i3 * (e5[t4] - 128) + 128, e5[t4 + 1] = i3 * (e5[t4 + 1] - 128) + 128, e5[t4 + 2] = i3 * (e5[t4 + 2] - 128) + 128;
  }
  sendUniformData(t3, e5) {
    t3.uniform1f(e5.uContrast, this.contrast);
  }
};
t(xa, "type", "Contrast"), t(xa, "defaults", {
  contrast: 0
}), t(xa, "uniformLocations", [
  "uContrast"
]), tt.setClass(xa);
var Ca = {
  Convolute_3_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[9];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 3.0; h+=1.0) {\n        for (float w = 0.0; w < 3.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ",
  Convolute_3_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[9];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 3.0; h+=1.0) {\n        for (float w = 0.0; w < 3.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    ",
  Convolute_5_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[25];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 5.0; h+=1.0) {\n        for (float w = 0.0; w < 5.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ",
  Convolute_5_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[25];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 5.0; h+=1.0) {\n        for (float w = 0.0; w < 5.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    ",
  Convolute_7_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[49];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 7.0; h+=1.0) {\n        for (float w = 0.0; w < 7.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ",
  Convolute_7_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[49];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 7.0; h+=1.0) {\n        for (float w = 0.0; w < 7.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    ",
  Convolute_9_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[81];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 9.0; h+=1.0) {\n        for (float w = 0.0; w < 9.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ",
  Convolute_9_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[81];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 9.0; h+=1.0) {\n        for (float w = 0.0; w < 9.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    "
};
var Sa = class extends sa {
  getCacheKey() {
    return `${this.type}_${Math.sqrt(this.matrix.length)}_${this.opaque ? 1 : 0}`;
  }
  getFragmentSource() {
    return Ca[this.getCacheKey()];
  }
  applyTo2d(t3) {
    const e5 = t3.imageData, s3 = e5.data, i3 = this.matrix, r3 = Math.round(Math.sqrt(i3.length)), n3 = Math.floor(r3 / 2), o3 = e5.width, a3 = e5.height, h3 = t3.ctx.createImageData(o3, a3), l3 = h3.data, c2 = this.opaque ? 1 : 0;
    let u3, d3, g3, f3, p3, m3, v3, y3, _3, x3, C3, S3, b3;
    for (C3 = 0; C3 < a3; C3++) for (x3 = 0; x3 < o3; x3++) {
      for (p3 = 4 * (C3 * o3 + x3), u3 = 0, d3 = 0, g3 = 0, f3 = 0, b3 = 0; b3 < r3; b3++) for (S3 = 0; S3 < r3; S3++) v3 = C3 + b3 - n3, m3 = x3 + S3 - n3, v3 < 0 || v3 >= a3 || m3 < 0 || m3 >= o3 || (y3 = 4 * (v3 * o3 + m3), _3 = i3[b3 * r3 + S3], u3 += s3[y3] * _3, d3 += s3[y3 + 1] * _3, g3 += s3[y3 + 2] * _3, c2 || (f3 += s3[y3 + 3] * _3));
      l3[p3] = u3, l3[p3 + 1] = d3, l3[p3 + 2] = g3, l3[p3 + 3] = c2 ? s3[p3 + 3] : f3;
    }
    t3.imageData = h3;
  }
  sendUniformData(t3, e5) {
    t3.uniform1fv(e5.uMatrix, this.matrix);
  }
  toObject() {
    return {
      ...super.toObject(),
      opaque: this.opaque,
      matrix: [
        ...this.matrix
      ]
    };
  }
};
t(Sa, "type", "Convolute"), t(Sa, "defaults", {
  opaque: false,
  matrix: [
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0
  ]
}), t(Sa, "uniformLocations", [
  "uMatrix",
  "uOpaque",
  "uHalfSize",
  "uSize"
]), tt.setClass(Sa);
var ba = "Gamma";
var wa = class extends sa {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform vec3 uGamma;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    vec3 correction = (1.0 / uGamma);\n    color.r = pow(color.r, correction.r);\n    color.g = pow(color.g, correction.g);\n    color.b = pow(color.b, correction.b);\n    gl_FragColor = color;\n    gl_FragColor.rgb *= color.a;\n  }\n";
  }
  constructor() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    super(t3), this.gamma = t3.gamma || this.constructor.defaults.gamma.concat();
  }
  applyTo2d(t3) {
    let { imageData: { data: e5 } } = t3;
    const s3 = this.gamma, i3 = 1 / s3[0], r3 = 1 / s3[1], n3 = 1 / s3[2];
    this.rgbValues || (this.rgbValues = {
      r: new Uint8Array(256),
      g: new Uint8Array(256),
      b: new Uint8Array(256)
    });
    const o3 = this.rgbValues;
    for (let t4 = 0; t4 < 256; t4++) o3.r[t4] = 255 * Math.pow(t4 / 255, i3), o3.g[t4] = 255 * Math.pow(t4 / 255, r3), o3.b[t4] = 255 * Math.pow(t4 / 255, n3);
    for (let t4 = 0; t4 < e5.length; t4 += 4) e5[t4] = o3.r[e5[t4]], e5[t4 + 1] = o3.g[e5[t4 + 1]], e5[t4 + 2] = o3.b[e5[t4 + 2]];
  }
  sendUniformData(t3, e5) {
    t3.uniform3fv(e5.uGamma, this.gamma);
  }
  isNeutralState() {
    const { gamma: t3 } = this;
    return 1 === t3[0] && 1 === t3[1] && 1 === t3[2];
  }
  toObject() {
    return {
      type: ba,
      gamma: this.gamma.concat()
    };
  }
};
t(wa, "type", ba), t(wa, "defaults", {
  gamma: [
    1,
    1,
    1
  ]
}), t(wa, "uniformLocations", [
  "uGamma"
]), tt.setClass(wa);
var Ta = {
  average: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = texture2D(uTexture, vTexCoord);\n      float average = (color.r + color.b + color.g) / 3.0;\n      gl_FragColor = vec4(average, average, average, color.a);\n    }\n    ",
  lightness: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform int uMode;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 col = texture2D(uTexture, vTexCoord);\n      float average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;\n      gl_FragColor = vec4(average, average, average, col.a);\n    }\n    ",
  luminosity: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform int uMode;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 col = texture2D(uTexture, vTexCoord);\n      float average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;\n      gl_FragColor = vec4(average, average, average, col.a);\n    }\n    "
};
var Oa = class extends sa {
  applyTo2d(t3) {
    let { imageData: { data: e5 } } = t3;
    for (let t4, s3 = 0; s3 < e5.length; s3 += 4) {
      const i3 = e5[s3], r3 = e5[s3 + 1], n3 = e5[s3 + 2];
      switch (this.mode) {
        case "average":
          t4 = (i3 + r3 + n3) / 3;
          break;
        case "lightness":
          t4 = (Math.min(i3, r3, n3) + Math.max(i3, r3, n3)) / 2;
          break;
        case "luminosity":
          t4 = 0.21 * i3 + 0.72 * r3 + 0.07 * n3;
      }
      e5[s3 + 2] = e5[s3 + 1] = e5[s3] = t4;
    }
  }
  getCacheKey() {
    return `${this.type}_${this.mode}`;
  }
  getFragmentSource() {
    return Ta[this.mode];
  }
  sendUniformData(t3, e5) {
    t3.uniform1i(e5.uMode, 1);
  }
  isNeutralState() {
    return false;
  }
};
t(Oa, "type", "Grayscale"), t(Oa, "defaults", {
  mode: "average"
}), t(Oa, "uniformLocations", [
  "uMode"
]), tt.setClass(Oa);
var ka = {
  ...la,
  rotation: 0
};
var Da = class extends ca {
  calculateMatrix() {
    const t3 = this.rotation * Math.PI, e5 = rt(t3), s3 = nt(t3), i3 = 1 / 3, r3 = Math.sqrt(i3) * s3, n3 = 1 - e5;
    this.matrix = [
      e5 + n3 / 3,
      i3 * n3 - r3,
      i3 * n3 + r3,
      0,
      0,
      i3 * n3 + r3,
      e5 + i3 * n3,
      i3 * n3 - r3,
      0,
      0,
      i3 * n3 - r3,
      i3 * n3 + r3,
      e5 + i3 * n3,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
  }
  isNeutralState() {
    return 0 === this.rotation;
  }
  applyTo(t3) {
    this.calculateMatrix(), super.applyTo(t3);
  }
  toObject() {
    return {
      type: this.type,
      rotation: this.rotation
    };
  }
};
t(Da, "type", "HueRotation"), t(Da, "defaults", ka), tt.setClass(Da);
var Ma = class extends sa {
  applyTo2d(t3) {
    let { imageData: { data: e5 } } = t3;
    for (let t4 = 0; t4 < e5.length; t4 += 4) e5[t4] = 255 - e5[t4], e5[t4 + 1] = 255 - e5[t4 + 1], e5[t4 + 2] = 255 - e5[t4 + 2], this.alpha && (e5[t4 + 3] = 255 - e5[t4 + 3]);
  }
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform int uInvert;\n  uniform int uAlpha;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    if (uInvert == 1) {\n      if (uAlpha == 1) {\n        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,1.0 -color.a);\n      } else {\n        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);\n      }\n    } else {\n      gl_FragColor = color;\n    }\n  }\n";
  }
  isNeutralState() {
    return !this.invert;
  }
  sendUniformData(t3, e5) {
    t3.uniform1i(e5.uInvert, Number(this.invert)), t3.uniform1i(e5.uAlpha, Number(this.alpha));
  }
};
t(Ma, "type", "Invert"), t(Ma, "defaults", {
  alpha: false,
  invert: true
}), t(Ma, "uniformLocations", [
  "uInvert",
  "uAlpha"
]), tt.setClass(Ma);
var Pa = class extends sa {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uStepH;\n  uniform float uNoise;\n  uniform float uSeed;\n  varying vec2 vTexCoord;\n  float rand(vec2 co, float seed, float vScale) {\n    return fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);\n  }\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    color.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;\n    gl_FragColor = color;\n  }\n";
  }
  applyTo2d(t3) {
    let { imageData: { data: e5 } } = t3;
    const s3 = this.noise;
    for (let t4 = 0; t4 < e5.length; t4 += 4) {
      const i3 = (0.5 - Math.random()) * s3;
      e5[t4] += i3, e5[t4 + 1] += i3, e5[t4 + 2] += i3;
    }
  }
  sendUniformData(t3, e5) {
    t3.uniform1f(e5.uNoise, this.noise / 255), t3.uniform1f(e5.uSeed, Math.random());
  }
  isNeutralState() {
    return 0 === this.noise;
  }
};
t(Pa, "type", "Noise"), t(Pa, "defaults", {
  noise: 0
}), t(Pa, "uniformLocations", [
  "uNoise",
  "uSeed"
]), tt.setClass(Pa);
var Ea = class extends sa {
  applyTo2d(t3) {
    let { imageData: { data: e5, width: s3, height: i3 } } = t3;
    for (let t4 = 0; t4 < i3; t4 += this.blocksize) for (let r3 = 0; r3 < s3; r3 += this.blocksize) {
      const n3 = 4 * t4 * s3 + 4 * r3, o3 = e5[n3], a3 = e5[n3 + 1], h3 = e5[n3 + 2], l3 = e5[n3 + 3];
      for (let n4 = t4; n4 < Math.min(t4 + this.blocksize, i3); n4++) for (let t5 = r3; t5 < Math.min(r3 + this.blocksize, s3); t5++) {
        const i4 = 4 * n4 * s3 + 4 * t5;
        e5[i4] = o3, e5[i4 + 1] = a3, e5[i4 + 2] = h3, e5[i4 + 3] = l3;
      }
    }
  }
  isNeutralState() {
    return 1 === this.blocksize;
  }
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uBlocksize;\n  uniform float uStepW;\n  uniform float uStepH;\n  varying vec2 vTexCoord;\n  void main() {\n    float blockW = uBlocksize * uStepW;\n    float blockH = uBlocksize * uStepH;\n    int posX = int(vTexCoord.x / blockW);\n    int posY = int(vTexCoord.y / blockH);\n    float fposX = float(posX);\n    float fposY = float(posY);\n    vec2 squareCoords = vec2(fposX * blockW, fposY * blockH);\n    vec4 color = texture2D(uTexture, squareCoords);\n    gl_FragColor = color;\n  }\n";
  }
  sendUniformData(t3, e5) {
    t3.uniform1f(e5.uBlocksize, this.blocksize);
  }
};
t(Ea, "type", "Pixelate"), t(Ea, "defaults", {
  blocksize: 4
}), t(Ea, "uniformLocations", [
  "uBlocksize"
]), tt.setClass(Ea);
var Aa = class extends sa {
  getFragmentSource() {
    return "\nprecision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uLow;\nuniform vec4 uHigh;\nvarying vec2 vTexCoord;\nvoid main() {\n  gl_FragColor = texture2D(uTexture, vTexCoord);\n  if(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {\n    gl_FragColor.a = 0.0;\n  }\n}\n";
  }
  applyTo2d(t3) {
    let { imageData: { data: e5 } } = t3;
    const s3 = 255 * this.distance, i3 = new Ne(this.color).getSource(), r3 = [
      i3[0] - s3,
      i3[1] - s3,
      i3[2] - s3
    ], n3 = [
      i3[0] + s3,
      i3[1] + s3,
      i3[2] + s3
    ];
    for (let t4 = 0; t4 < e5.length; t4 += 4) {
      const s4 = e5[t4], i4 = e5[t4 + 1], o3 = e5[t4 + 2];
      s4 > r3[0] && i4 > r3[1] && o3 > r3[2] && s4 < n3[0] && i4 < n3[1] && o3 < n3[2] && (e5[t4 + 3] = 0);
    }
  }
  sendUniformData(t3, e5) {
    const s3 = new Ne(this.color).getSource(), i3 = this.distance, r3 = [
      0 + s3[0] / 255 - i3,
      0 + s3[1] / 255 - i3,
      0 + s3[2] / 255 - i3,
      1
    ], n3 = [
      s3[0] / 255 + i3,
      s3[1] / 255 + i3,
      s3[2] / 255 + i3,
      1
    ];
    t3.uniform4fv(e5.uLow, r3), t3.uniform4fv(e5.uHigh, n3);
  }
};
t(Aa, "type", "RemoveColor"), t(Aa, "defaults", {
  color: "#FFFFFF",
  distance: 0.02,
  useAlpha: false
}), t(Aa, "uniformLocations", [
  "uLow",
  "uHigh"
]), tt.setClass(Aa);
var ja = class extends sa {
  sendUniformData(t3, e5) {
    t3.uniform2fv(e5.uDelta, this.horizontal ? [
      1 / this.width,
      0
    ] : [
      0,
      1 / this.height
    ]), t3.uniform1fv(e5.uTaps, this.taps);
  }
  getFilterWindow() {
    const t3 = this.tempScale;
    return Math.ceil(this.lanczosLobes / t3);
  }
  getCacheKey() {
    const t3 = this.getFilterWindow();
    return `${this.type}_${t3}`;
  }
  getFragmentSource() {
    const t3 = this.getFilterWindow();
    return this.generateShader(t3);
  }
  getTaps() {
    const t3 = this.lanczosCreate(this.lanczosLobes), e5 = this.tempScale, s3 = this.getFilterWindow(), i3 = new Array(s3);
    for (let r3 = 1; r3 <= s3; r3++) i3[r3 - 1] = t3(r3 * e5);
    return i3;
  }
  generateShader(t3) {
    const e5 = new Array(t3);
    for (let s3 = 1; s3 <= t3; s3++) e5[s3 - 1] = `${s3}.0 * uDelta`;
    return `
      precision highp float;
      uniform sampler2D uTexture;
      uniform vec2 uDelta;
      varying vec2 vTexCoord;
      uniform float uTaps[${t3}];
      void main() {
        vec4 color = texture2D(uTexture, vTexCoord);
        float sum = 1.0;
        ${e5.map((t4, e6) => `
              color += texture2D(uTexture, vTexCoord + ${t4}) * uTaps[${e6}] + texture2D(uTexture, vTexCoord - ${t4}) * uTaps[${e6}];
              sum += 2.0 * uTaps[${e6}];
            `).join("\n")}
        gl_FragColor = color / sum;
      }
    `;
  }
  applyToForWebgl(t3) {
    t3.passes++, this.width = t3.sourceWidth, this.horizontal = true, this.dW = Math.round(this.width * this.scaleX), this.dH = t3.sourceHeight, this.tempScale = this.dW / this.width, this.taps = this.getTaps(), t3.destinationWidth = this.dW, super.applyTo(t3), t3.sourceWidth = t3.destinationWidth, this.height = t3.sourceHeight, this.horizontal = false, this.dH = Math.round(this.height * this.scaleY), this.tempScale = this.dH / this.height, this.taps = this.getTaps(), t3.destinationHeight = this.dH, super.applyTo(t3), t3.sourceHeight = t3.destinationHeight;
  }
  applyTo(t3) {
    Jo(t3) ? this.applyToForWebgl(t3) : this.applyTo2d(t3);
  }
  isNeutralState() {
    return 1 === this.scaleX && 1 === this.scaleY;
  }
  lanczosCreate(t3) {
    return (e5) => {
      if (e5 >= t3 || e5 <= -t3) return 0;
      if (e5 < 11920929e-14 && e5 > -11920929e-14) return 1;
      const s3 = (e5 *= Math.PI) / t3;
      return Math.sin(e5) / e5 * Math.sin(s3) / s3;
    };
  }
  applyTo2d(t3) {
    const e5 = t3.imageData, s3 = this.scaleX, i3 = this.scaleY;
    this.rcpScaleX = 1 / s3, this.rcpScaleY = 1 / i3;
    const r3 = e5.width, n3 = e5.height, o3 = Math.round(r3 * s3), a3 = Math.round(n3 * i3);
    let h3;
    h3 = "sliceHack" === this.resizeType ? this.sliceByTwo(t3, r3, n3, o3, a3) : "hermite" === this.resizeType ? this.hermiteFastResize(t3, r3, n3, o3, a3) : "bilinear" === this.resizeType ? this.bilinearFiltering(t3, r3, n3, o3, a3) : "lanczos" === this.resizeType ? this.lanczosResize(t3, r3, n3, o3, a3) : new ImageData(o3, a3), t3.imageData = h3;
  }
  sliceByTwo(t3, e5, s3, i3, r3) {
    const n3 = t3.imageData, o3 = 0.5;
    let a3 = false, h3 = false, l3 = e5 * o3, c2 = s3 * o3;
    const u3 = t3.filterBackend.resources;
    let d3 = 0, g3 = 0;
    const f3 = e5;
    let p3 = 0;
    u3.sliceByTwo || (u3.sliceByTwo = pt());
    const m3 = u3.sliceByTwo;
    (m3.width < 1.5 * e5 || m3.height < s3) && (m3.width = 1.5 * e5, m3.height = s3);
    const v3 = m3.getContext("2d");
    for (v3.clearRect(0, 0, 1.5 * e5, s3), v3.putImageData(n3, 0, 0), i3 = Math.floor(i3), r3 = Math.floor(r3); !a3 || !h3; ) e5 = l3, s3 = c2, i3 < Math.floor(l3 * o3) ? l3 = Math.floor(l3 * o3) : (l3 = i3, a3 = true), r3 < Math.floor(c2 * o3) ? c2 = Math.floor(c2 * o3) : (c2 = r3, h3 = true), v3.drawImage(m3, d3, g3, e5, s3, f3, p3, l3, c2), d3 = f3, g3 = p3, p3 += c2;
    return v3.getImageData(d3, g3, i3, r3);
  }
  lanczosResize(t3, e5, s3, i3, r3) {
    const n3 = t3.imageData.data, o3 = t3.ctx.createImageData(i3, r3), a3 = o3.data, h3 = this.lanczosCreate(this.lanczosLobes), l3 = this.rcpScaleX, c2 = this.rcpScaleY, u3 = 2 / this.rcpScaleX, d3 = 2 / this.rcpScaleY, g3 = Math.ceil(l3 * this.lanczosLobes / 2), f3 = Math.ceil(c2 * this.lanczosLobes / 2), p3 = {}, m3 = {
      x: 0,
      y: 0
    }, v3 = {
      x: 0,
      y: 0
    };
    return function t4(y3) {
      let _3, x3, C3, S3, b3, w3, T2, O2, k3, D2, M3;
      for (m3.x = (y3 + 0.5) * l3, v3.x = Math.floor(m3.x), _3 = 0; _3 < r3; _3++) {
        for (m3.y = (_3 + 0.5) * c2, v3.y = Math.floor(m3.y), b3 = 0, w3 = 0, T2 = 0, O2 = 0, k3 = 0, x3 = v3.x - g3; x3 <= v3.x + g3; x3++) if (!(x3 < 0 || x3 >= e5)) {
          D2 = Math.floor(1e3 * Math.abs(x3 - m3.x)), p3[D2] || (p3[D2] = {});
          for (let t5 = v3.y - f3; t5 <= v3.y + f3; t5++) t5 < 0 || t5 >= s3 || (M3 = Math.floor(1e3 * Math.abs(t5 - m3.y)), p3[D2][M3] || (p3[D2][M3] = h3(Math.sqrt(Math.pow(D2 * u3, 2) + Math.pow(M3 * d3, 2)) / 1e3)), C3 = p3[D2][M3], C3 > 0 && (S3 = 4 * (t5 * e5 + x3), b3 += C3, w3 += C3 * n3[S3], T2 += C3 * n3[S3 + 1], O2 += C3 * n3[S3 + 2], k3 += C3 * n3[S3 + 3]));
        }
        S3 = 4 * (_3 * i3 + y3), a3[S3] = w3 / b3, a3[S3 + 1] = T2 / b3, a3[S3 + 2] = O2 / b3, a3[S3 + 3] = k3 / b3;
      }
      return ++y3 < i3 ? t4(y3) : o3;
    }(0);
  }
  bilinearFiltering(t3, e5, s3, i3, r3) {
    let n3, o3, a3, h3, l3, c2, u3, d3, g3, f3, p3, m3, v3, y3 = 0;
    const _3 = this.rcpScaleX, x3 = this.rcpScaleY, C3 = 4 * (e5 - 1), S3 = t3.imageData.data, b3 = t3.ctx.createImageData(i3, r3), w3 = b3.data;
    for (u3 = 0; u3 < r3; u3++) for (d3 = 0; d3 < i3; d3++) for (l3 = Math.floor(_3 * d3), c2 = Math.floor(x3 * u3), g3 = _3 * d3 - l3, f3 = x3 * u3 - c2, v3 = 4 * (c2 * e5 + l3), p3 = 0; p3 < 4; p3++) n3 = S3[v3 + p3], o3 = S3[v3 + 4 + p3], a3 = S3[v3 + C3 + p3], h3 = S3[v3 + C3 + 4 + p3], m3 = n3 * (1 - g3) * (1 - f3) + o3 * g3 * (1 - f3) + a3 * f3 * (1 - g3) + h3 * g3 * f3, w3[y3++] = m3;
    return b3;
  }
  hermiteFastResize(t3, e5, s3, i3, r3) {
    const n3 = this.rcpScaleX, o3 = this.rcpScaleY, a3 = Math.ceil(n3 / 2), h3 = Math.ceil(o3 / 2), l3 = t3.imageData.data, c2 = t3.ctx.createImageData(i3, r3), u3 = c2.data;
    for (let t4 = 0; t4 < r3; t4++) for (let s4 = 0; s4 < i3; s4++) {
      const r4 = 4 * (s4 + t4 * i3);
      let c3 = 0, d3 = 0, g3 = 0, f3 = 0, p3 = 0, m3 = 0, v3 = 0;
      const y3 = (t4 + 0.5) * o3;
      for (let i4 = Math.floor(t4 * o3); i4 < (t4 + 1) * o3; i4++) {
        const t5 = Math.abs(y3 - (i4 + 0.5)) / h3, r5 = (s4 + 0.5) * n3, o4 = t5 * t5;
        for (let t6 = Math.floor(s4 * n3); t6 < (s4 + 1) * n3; t6++) {
          let s5 = Math.abs(r5 - (t6 + 0.5)) / a3;
          const n4 = Math.sqrt(o4 + s5 * s5);
          n4 > 1 && n4 < -1 || (c3 = 2 * n4 * n4 * n4 - 3 * n4 * n4 + 1, c3 > 0 && (s5 = 4 * (t6 + i4 * e5), v3 += c3 * l3[s5 + 3], g3 += c3, l3[s5 + 3] < 255 && (c3 = c3 * l3[s5 + 3] / 250), f3 += c3 * l3[s5], p3 += c3 * l3[s5 + 1], m3 += c3 * l3[s5 + 2], d3 += c3));
        }
      }
      u3[r4] = f3 / d3, u3[r4 + 1] = p3 / d3, u3[r4 + 2] = m3 / d3, u3[r4 + 3] = v3 / g3;
    }
    return c2;
  }
};
t(ja, "type", "Resize"), t(ja, "defaults", {
  resizeType: "hermite",
  scaleX: 1,
  scaleY: 1,
  lanczosLobes: 3
}), t(ja, "uniformLocations", [
  "uDelta",
  "uTaps"
]), tt.setClass(ja);
var Fa = class extends sa {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uSaturation;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    float rgMax = max(color.r, color.g);\n    float rgbMax = max(rgMax, color.b);\n    color.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;\n    color.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;\n    color.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;\n    gl_FragColor = color;\n  }\n";
  }
  applyTo2d(t3) {
    let { imageData: { data: e5 } } = t3;
    const s3 = -this.saturation;
    for (let t4 = 0; t4 < e5.length; t4 += 4) {
      const i3 = e5[t4], r3 = e5[t4 + 1], n3 = e5[t4 + 2], o3 = Math.max(i3, r3, n3);
      e5[t4] += o3 !== i3 ? (o3 - i3) * s3 : 0, e5[t4 + 1] += o3 !== r3 ? (o3 - r3) * s3 : 0, e5[t4 + 2] += o3 !== n3 ? (o3 - n3) * s3 : 0;
    }
  }
  sendUniformData(t3, e5) {
    t3.uniform1f(e5.uSaturation, -this.saturation);
  }
  isNeutralState() {
    return 0 === this.saturation;
  }
};
t(Fa, "type", "Saturation"), t(Fa, "defaults", {
  saturation: 0
}), t(Fa, "uniformLocations", [
  "uSaturation"
]), tt.setClass(Fa);
var La = class extends sa {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uVibrance;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    float max = max(color.r, max(color.g, color.b));\n    float avg = (color.r + color.g + color.b) / 3.0;\n    float amt = (abs(max - avg) * 2.0) * uVibrance;\n    color.r += max != color.r ? (max - color.r) * amt : 0.00;\n    color.g += max != color.g ? (max - color.g) * amt : 0.00;\n    color.b += max != color.b ? (max - color.b) * amt : 0.00;\n    gl_FragColor = color;\n  }\n";
  }
  applyTo2d(t3) {
    let { imageData: { data: e5 } } = t3;
    const s3 = -this.vibrance;
    for (let t4 = 0; t4 < e5.length; t4 += 4) {
      const i3 = e5[t4], r3 = e5[t4 + 1], n3 = e5[t4 + 2], o3 = Math.max(i3, r3, n3), a3 = (i3 + r3 + n3) / 3, h3 = 2 * Math.abs(o3 - a3) / 255 * s3;
      e5[t4] += o3 !== i3 ? (o3 - i3) * h3 : 0, e5[t4 + 1] += o3 !== r3 ? (o3 - r3) * h3 : 0, e5[t4 + 2] += o3 !== n3 ? (o3 - n3) * h3 : 0;
    }
  }
  sendUniformData(t3, e5) {
    t3.uniform1f(e5.uVibrance, -this.vibrance);
  }
  isNeutralState() {
    return 0 === this.vibrance;
  }
};
t(La, "type", "Vibrance"), t(La, "defaults", {
  vibrance: 0
}), t(La, "uniformLocations", [
  "uVibrance"
]), tt.setClass(La);
var Ia = Object.freeze({
  __proto__: null,
  BaseFilter: sa,
  BlackWhite: ya,
  BlendColor: ra,
  BlendImage: oa,
  Blur: aa,
  Brightness: ha,
  Brownie: da,
  ColorMatrix: ca,
  Composed: _a,
  Contrast: xa,
  Convolute: Sa,
  Gamma: wa,
  Grayscale: Oa,
  HueRotation: Da,
  Invert: Ma,
  Kodachrome: fa,
  Noise: Pa,
  Pixelate: Ea,
  Polaroid: ma,
  RemoveColor: Aa,
  Resize: ja,
  Saturation: Fa,
  Sepia: va,
  Technicolor: pa,
  Vibrance: La,
  Vintage: ga
});

// deno:https://cdn.jsdelivr.net/npm/svgpath@2.6.0/+esm
var t2 = {
  a: 7,
  c: 6,
  h: 1,
  l: 2,
  m: 2,
  r: 4,
  q: 4,
  s: 4,
  t: 2,
  v: 1,
  z: 0
};
var e3 = [
  5760,
  6158,
  8192,
  8193,
  8194,
  8195,
  8196,
  8197,
  8198,
  8199,
  8200,
  8201,
  8202,
  8239,
  8287,
  12288,
  65279
];
function r2(t3) {
  return t3 >= 48 && t3 <= 57;
}
function a2(t3) {
  return t3 >= 48 && t3 <= 57 || 43 === t3 || 45 === t3 || 46 === t3;
}
function s2(t3) {
  this.index = 0, this.path = t3, this.max = t3.length, this.result = [], this.param = 0, this.err = "", this.segmentStart = 0, this.data = [];
}
function i2(t3) {
  for (; t3.index < t3.max && (10 === (r3 = t3.path.charCodeAt(t3.index)) || 13 === r3 || 8232 === r3 || 8233 === r3 || 32 === r3 || 9 === r3 || 11 === r3 || 12 === r3 || 160 === r3 || r3 >= 5760 && e3.indexOf(r3) >= 0); ) t3.index++;
  var r3;
}
function n2(t3) {
  var e5 = t3.path.charCodeAt(t3.index);
  return 48 === e5 ? (t3.param = 0, void t3.index++) : 49 === e5 ? (t3.param = 1, void t3.index++) : void (t3.err = "SvgPath: arc flag can be 0 or 1 only (at pos " + t3.index + ")");
}
function h2(t3) {
  var e5, a3 = t3.index, s3 = a3, i3 = t3.max, n3 = false, h3 = false, o3 = false, c2 = false;
  if (s3 >= i3) t3.err = "SvgPath: missed param (at pos " + s3 + ")";
  else if (43 !== (e5 = t3.path.charCodeAt(s3)) && 45 !== e5 || (e5 = ++s3 < i3 ? t3.path.charCodeAt(s3) : 0), r2(e5) || 46 === e5) {
    if (46 !== e5) {
      if (n3 = 48 === e5, e5 = ++s3 < i3 ? t3.path.charCodeAt(s3) : 0, n3 && s3 < i3 && e5 && r2(e5)) return void (t3.err = "SvgPath: numbers started with `0` such as `09` are illegal (at pos " + a3 + ")");
      for (; s3 < i3 && r2(t3.path.charCodeAt(s3)); ) s3++, h3 = true;
      e5 = s3 < i3 ? t3.path.charCodeAt(s3) : 0;
    }
    if (46 === e5) {
      for (c2 = true, s3++; r2(t3.path.charCodeAt(s3)); ) s3++, o3 = true;
      e5 = s3 < i3 ? t3.path.charCodeAt(s3) : 0;
    }
    if (101 === e5 || 69 === e5) {
      if (c2 && !h3 && !o3) return void (t3.err = "SvgPath: invalid float exponent (at pos " + s3 + ")");
      if (43 !== (e5 = ++s3 < i3 ? t3.path.charCodeAt(s3) : 0) && 45 !== e5 || s3++, !(s3 < i3 && r2(t3.path.charCodeAt(s3)))) return void (t3.err = "SvgPath: invalid float exponent (at pos " + s3 + ")");
      for (; s3 < i3 && r2(t3.path.charCodeAt(s3)); ) s3++;
    }
    t3.index = s3, t3.param = parseFloat(t3.path.slice(a3, s3)) + 0;
  } else t3.err = "SvgPath: param should start with 0..9 or `.` (at pos " + s3 + ")";
}
function o2(e5) {
  var r3, a3;
  a3 = (r3 = e5.path[e5.segmentStart]).toLowerCase();
  var s3 = e5.data;
  if ("m" === a3 && s3.length > 2 && (e5.result.push([
    r3,
    s3[0],
    s3[1]
  ]), s3 = s3.slice(2), a3 = "l", r3 = "m" === r3 ? "l" : "L"), "r" === a3) e5.result.push([
    r3
  ].concat(s3));
  else for (; s3.length >= t2[a3] && (e5.result.push([
    r3
  ].concat(s3.splice(0, t2[a3]))), t2[a3]); ) ;
}
function c(e5) {
  var r3, s3, c2, u3, f3, l3 = e5.max;
  if (e5.segmentStart = e5.index, r3 = e5.path.charCodeAt(e5.index), s3 = 97 == (32 | r3), function(t3) {
    switch (32 | t3) {
      case 109:
      case 122:
      case 108:
      case 104:
      case 118:
      case 99:
      case 115:
      case 113:
      case 116:
      case 97:
      case 114:
        return true;
    }
    return false;
  }(r3)) if (u3 = t2[e5.path[e5.index].toLowerCase()], e5.index++, i2(e5), e5.data = [], u3) {
    for (c2 = false; ; ) {
      for (f3 = u3; f3 > 0; f3--) {
        if (!s3 || 3 !== f3 && 4 !== f3 ? h2(e5) : n2(e5), e5.err.length) return void o2(e5);
        e5.data.push(e5.param), i2(e5), c2 = false, e5.index < l3 && 44 === e5.path.charCodeAt(e5.index) && (e5.index++, i2(e5), c2 = true);
      }
      if (!c2) {
        if (e5.index >= e5.max) break;
        if (!a2(e5.path.charCodeAt(e5.index))) break;
      }
    }
    o2(e5);
  } else o2(e5);
  else e5.err = "SvgPath: bad command " + e5.path[e5.index] + " (at pos " + e5.index + ")";
}
function u2() {
  if (!(this instanceof u2)) return new u2();
  this.queue = [], this.cache = null;
}
u2.prototype.matrix = function(t3) {
  return 1 === t3[0] && 0 === t3[1] && 0 === t3[2] && 1 === t3[3] && 0 === t3[4] && 0 === t3[5] || (this.cache = null, this.queue.push(t3)), this;
}, u2.prototype.translate = function(t3, e5) {
  return 0 === t3 && 0 === e5 || (this.cache = null, this.queue.push([
    1,
    0,
    0,
    1,
    t3,
    e5
  ])), this;
}, u2.prototype.scale = function(t3, e5) {
  return 1 === t3 && 1 === e5 || (this.cache = null, this.queue.push([
    t3,
    0,
    0,
    e5,
    0,
    0
  ])), this;
}, u2.prototype.rotate = function(t3, e5, r3) {
  var a3, s3, i3;
  return 0 !== t3 && (this.translate(e5, r3), a3 = t3 * Math.PI / 180, s3 = Math.cos(a3), i3 = Math.sin(a3), this.queue.push([
    s3,
    i3,
    -i3,
    s3,
    0,
    0
  ]), this.cache = null, this.translate(-e5, -r3)), this;
}, u2.prototype.skewX = function(t3) {
  return 0 !== t3 && (this.cache = null, this.queue.push([
    1,
    0,
    Math.tan(t3 * Math.PI / 180),
    1,
    0,
    0
  ])), this;
}, u2.prototype.skewY = function(t3) {
  return 0 !== t3 && (this.cache = null, this.queue.push([
    1,
    Math.tan(t3 * Math.PI / 180),
    0,
    1,
    0,
    0
  ])), this;
}, u2.prototype.toArray = function() {
  if (this.cache) return this.cache;
  if (!this.queue.length) return this.cache = [
    1,
    0,
    0,
    1,
    0,
    0
  ], this.cache;
  if (this.cache = this.queue[0], 1 === this.queue.length) return this.cache;
  for (var t3 = 1; t3 < this.queue.length; t3++) this.cache = (e5 = this.cache, r3 = this.queue[t3], [
    e5[0] * r3[0] + e5[2] * r3[1],
    e5[1] * r3[0] + e5[3] * r3[1],
    e5[0] * r3[2] + e5[2] * r3[3],
    e5[1] * r3[2] + e5[3] * r3[3],
    e5[0] * r3[4] + e5[2] * r3[5] + e5[4],
    e5[1] * r3[4] + e5[3] * r3[5] + e5[5]
  ]);
  var e5, r3;
  return this.cache;
}, u2.prototype.calc = function(t3, e5, r3) {
  var a3;
  return this.queue.length ? (this.cache || (this.cache = this.toArray()), [
    t3 * (a3 = this.cache)[0] + e5 * a3[2] + (r3 ? 0 : a3[4]),
    t3 * a3[1] + e5 * a3[3] + (r3 ? 0 : a3[5])
  ]) : [
    t3,
    e5
  ];
};
var f2 = u2;
var l2 = f2;
var p2 = {
  matrix: true,
  scale: true,
  rotate: true,
  translate: true,
  skewX: true,
  skewY: true
};
var d2 = /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/;
var v2 = /[\s,]+/;
var x2 = 2 * Math.PI;
function m2(t3, e5, r3, a3) {
  var s3 = t3 * r3 + e5 * a3;
  return s3 > 1 && (s3 = 1), s3 < -1 && (s3 = -1), (t3 * a3 - e5 * r3 < 0 ? -1 : 1) * Math.acos(s3);
}
function g2(t3, e5) {
  var r3 = 4 / 3 * Math.tan(e5 / 4), a3 = Math.cos(t3), s3 = Math.sin(t3), i3 = Math.cos(t3 + e5), n3 = Math.sin(t3 + e5);
  return [
    a3,
    s3,
    a3 - s3 * r3,
    s3 + a3 * r3,
    i3 + n3 * r3,
    n3 - i3 * r3,
    i3,
    n3
  ];
}
var _2 = 1e-10;
var M2 = Math.PI / 180;
function y2(t3, e5, r3) {
  if (!(this instanceof y2)) return new y2(t3, e5, r3);
  this.rx = t3, this.ry = e5, this.ax = r3;
}
y2.prototype.transform = function(t3) {
  var e5 = Math.cos(this.ax * M2), r3 = Math.sin(this.ax * M2), a3 = [
    this.rx * (t3[0] * e5 + t3[2] * r3),
    this.rx * (t3[1] * e5 + t3[3] * r3),
    this.ry * (-t3[0] * r3 + t3[2] * e5),
    this.ry * (-t3[1] * r3 + t3[3] * e5)
  ], s3 = a3[0] * a3[0] + a3[2] * a3[2], i3 = a3[1] * a3[1] + a3[3] * a3[3], n3 = ((a3[0] - a3[3]) * (a3[0] - a3[3]) + (a3[2] + a3[1]) * (a3[2] + a3[1])) * ((a3[0] + a3[3]) * (a3[0] + a3[3]) + (a3[2] - a3[1]) * (a3[2] - a3[1])), h3 = (s3 + i3) / 2;
  if (n3 < _2 * h3) return this.rx = this.ry = Math.sqrt(h3), this.ax = 0, this;
  var o3 = a3[0] * a3[1] + a3[2] * a3[3], c2 = h3 + (n3 = Math.sqrt(n3)) / 2, u3 = h3 - n3 / 2;
  return this.ax = Math.abs(o3) < _2 && Math.abs(c2 - i3) < _2 ? 90 : 180 * Math.atan(Math.abs(o3) > Math.abs(c2 - i3) ? (c2 - s3) / o3 : o3 / (c2 - i3)) / Math.PI, this.ax >= 0 ? (this.rx = Math.sqrt(c2), this.ry = Math.sqrt(u3)) : (this.ax += 90, this.rx = Math.sqrt(u3), this.ry = Math.sqrt(c2)), this;
}, y2.prototype.isDegenerate = function() {
  return this.rx < _2 * this.ry || this.ry < _2 * this.rx;
};
var k2 = function(t3) {
  var e5 = new s2(t3), r3 = e5.max;
  for (i2(e5); e5.index < r3 && !e5.err.length; ) c(e5);
  return e5.result.length && ("mM".indexOf(e5.result[0][0]) < 0 ? (e5.err = "SvgPath: string should start with `M` or `m`", e5.result = []) : e5.result[0][0] = "M"), {
    err: e5.err,
    segments: e5.result
  };
};
var w2 = function(t3) {
  var e5, r3, a3 = new l2();
  return t3.split(d2).forEach(function(t4) {
    if (t4.length) if (void 0 === p2[t4]) switch (r3 = t4.split(v2).map(function(t5) {
      return +t5 || 0;
    }), e5) {
      case "matrix":
        return void (6 === r3.length && a3.matrix(r3));
      case "scale":
        return void (1 === r3.length ? a3.scale(r3[0], r3[0]) : 2 === r3.length && a3.scale(r3[0], r3[1]));
      case "rotate":
        return void (1 === r3.length ? a3.rotate(r3[0], 0, 0) : 3 === r3.length && a3.rotate(r3[0], r3[1], r3[2]));
      case "translate":
        return void (1 === r3.length ? a3.translate(r3[0], 0) : 2 === r3.length && a3.translate(r3[0], r3[1]));
      case "skewX":
        return void (1 === r3.length && a3.skewX(r3[0]));
      case "skewY":
        return void (1 === r3.length && a3.skewY(r3[0]));
    }
    else e5 = t4;
  }), a3;
};
var A2 = f2;
var q2 = function(t3, e5, r3, a3, s3, i3, n3, h3, o3) {
  var c2 = Math.sin(o3 * x2 / 360), u3 = Math.cos(o3 * x2 / 360), f3 = u3 * (t3 - r3) / 2 + c2 * (e5 - a3) / 2, l3 = -c2 * (t3 - r3) / 2 + u3 * (e5 - a3) / 2;
  if (0 === f3 && 0 === l3) return [];
  if (0 === n3 || 0 === h3) return [];
  n3 = Math.abs(n3), h3 = Math.abs(h3);
  var p3 = f3 * f3 / (n3 * n3) + l3 * l3 / (h3 * h3);
  p3 > 1 && (n3 *= Math.sqrt(p3), h3 *= Math.sqrt(p3));
  var d3 = function(t4, e6, r4, a4, s4, i4, n4, h4, o4, c3) {
    var u4 = c3 * (t4 - r4) / 2 + o4 * (e6 - a4) / 2, f4 = -o4 * (t4 - r4) / 2 + c3 * (e6 - a4) / 2, l4 = n4 * n4, p4 = h4 * h4, d4 = u4 * u4, v4 = f4 * f4, g3 = l4 * p4 - l4 * v4 - p4 * d4;
    g3 < 0 && (g3 = 0), g3 /= l4 * v4 + p4 * d4;
    var _4 = (g3 = Math.sqrt(g3) * (s4 === i4 ? -1 : 1)) * n4 / h4 * f4, M4 = g3 * -h4 / n4 * u4, y4 = c3 * _4 - o4 * M4 + (t4 + r4) / 2, k4 = o4 * _4 + c3 * M4 + (e6 + a4) / 2, w3 = (u4 - _4) / n4, A3 = (f4 - M4) / h4, q3 = (-u4 - _4) / n4, C3 = (-f4 - M4) / h4, b3 = m2(1, 0, w3, A3), F3 = m2(w3, A3, q3, C3);
    return 0 === i4 && F3 > 0 && (F3 -= x2), 1 === i4 && F3 < 0 && (F3 += x2), [
      y4,
      k4,
      b3,
      F3
    ];
  }(t3, e5, r3, a3, s3, i3, n3, h3, c2, u3), v3 = [], _3 = d3[2], M3 = d3[3], y3 = Math.max(Math.ceil(Math.abs(M3) / (x2 / 4)), 1);
  M3 /= y3;
  for (var k3 = 0; k3 < y3; k3++) v3.push(g2(_3, M3)), _3 += M3;
  return v3.map(function(t4) {
    for (var e6 = 0; e6 < t4.length; e6 += 2) {
      var r4 = t4[e6 + 0], a4 = t4[e6 + 1], s4 = u3 * (r4 *= n3) - c2 * (a4 *= h3), i4 = c2 * r4 + u3 * a4;
      t4[e6 + 0] = s4 + d3[0], t4[e6 + 1] = i4 + d3[1];
    }
    return t4;
  });
};
var C2 = y2;
function b2(t3) {
  if (!(this instanceof b2)) return new b2(t3);
  var e5 = k2(t3);
  this.segments = e5.segments, this.err = e5.err, this.__stack = [];
}
b2.from = function(t3) {
  if ("string" == typeof t3) return new b2(t3);
  if (t3 instanceof b2) {
    var e5 = new b2("");
    return e5.err = t3.err, e5.segments = t3.segments.map(function(t4) {
      return t4.slice();
    }), e5.__stack = t3.__stack.map(function(t4) {
      return A2().matrix(t4.toArray());
    }), e5;
  }
  throw new Error("SvgPath.from: invalid param type " + t3);
}, b2.prototype.__matrix = function(t3) {
  var e5, r3 = this;
  t3.queue.length && this.iterate(function(a3, s3, i3, n3) {
    var h3, o3, c2, u3;
    switch (a3[0]) {
      case "v":
        o3 = 0 === (h3 = t3.calc(0, a3[1], true))[0] ? [
          "v",
          h3[1]
        ] : [
          "l",
          h3[0],
          h3[1]
        ];
        break;
      case "V":
        o3 = (h3 = t3.calc(i3, a3[1], false))[0] === t3.calc(i3, n3, false)[0] ? [
          "V",
          h3[1]
        ] : [
          "L",
          h3[0],
          h3[1]
        ];
        break;
      case "h":
        o3 = 0 === (h3 = t3.calc(a3[1], 0, true))[1] ? [
          "h",
          h3[0]
        ] : [
          "l",
          h3[0],
          h3[1]
        ];
        break;
      case "H":
        o3 = (h3 = t3.calc(a3[1], n3, false))[1] === t3.calc(i3, n3, false)[1] ? [
          "H",
          h3[0]
        ] : [
          "L",
          h3[0],
          h3[1]
        ];
        break;
      case "a":
      case "A":
        var f3 = t3.toArray(), l3 = C2(a3[1], a3[2], a3[3]).transform(f3);
        if (f3[0] * f3[3] - f3[1] * f3[2] < 0 && (a3[5] = a3[5] ? "0" : "1"), h3 = t3.calc(a3[6], a3[7], "a" === a3[0]), "A" === a3[0] && a3[6] === i3 && a3[7] === n3 || "a" === a3[0] && 0 === a3[6] && 0 === a3[7]) {
          o3 = [
            "a" === a3[0] ? "l" : "L",
            h3[0],
            h3[1]
          ];
          break;
        }
        o3 = l3.isDegenerate() ? [
          "a" === a3[0] ? "l" : "L",
          h3[0],
          h3[1]
        ] : [
          a3[0],
          l3.rx,
          l3.ry,
          l3.ax,
          a3[4],
          a3[5],
          h3[0],
          h3[1]
        ];
        break;
      case "m":
        u3 = s3 > 0, o3 = [
          "m",
          (h3 = t3.calc(a3[1], a3[2], u3))[0],
          h3[1]
        ];
        break;
      default:
        for (o3 = [
          c2 = a3[0]
        ], u3 = c2.toLowerCase() === c2, e5 = 1; e5 < a3.length; e5 += 2) h3 = t3.calc(a3[e5], a3[e5 + 1], u3), o3.push(h3[0], h3[1]);
    }
    r3.segments[s3] = o3;
  }, true);
}, b2.prototype.__evaluateStack = function() {
  var t3, e5;
  if (this.__stack.length) {
    if (1 === this.__stack.length) return this.__matrix(this.__stack[0]), void (this.__stack = []);
    for (t3 = A2(), e5 = this.__stack.length; --e5 >= 0; ) t3.matrix(this.__stack[e5].toArray());
    this.__matrix(t3), this.__stack = [];
  }
}, b2.prototype.toString = function() {
  var t3 = "", e5 = "", r3 = false;
  this.__evaluateStack();
  for (var a3 = 0, s3 = this.segments.length; a3 < s3; a3++) {
    var i3 = this.segments[a3], n3 = i3[0];
    n3 !== e5 || "m" === n3 || "M" === n3 ? ("m" === n3 && "z" === e5 && (t3 += " "), t3 += n3, r3 = false) : r3 = true;
    for (var h3 = 1; h3 < i3.length; h3++) {
      var o3 = i3[h3];
      1 === h3 ? r3 && o3 >= 0 && (t3 += " ") : o3 >= 0 && (t3 += " "), t3 += o3;
    }
    e5 = n3;
  }
  return t3;
}, b2.prototype.translate = function(t3, e5) {
  return this.__stack.push(A2().translate(t3, e5 || 0)), this;
}, b2.prototype.scale = function(t3, e5) {
  return this.__stack.push(A2().scale(t3, e5 || 0 === e5 ? e5 : t3)), this;
}, b2.prototype.rotate = function(t3, e5, r3) {
  return this.__stack.push(A2().rotate(t3, e5 || 0, r3 || 0)), this;
}, b2.prototype.skewX = function(t3) {
  return this.__stack.push(A2().skewX(t3)), this;
}, b2.prototype.skewY = function(t3) {
  return this.__stack.push(A2().skewY(t3)), this;
}, b2.prototype.matrix = function(t3) {
  return this.__stack.push(A2().matrix(t3)), this;
}, b2.prototype.transform = function(t3) {
  return t3.trim() ? (this.__stack.push(w2(t3)), this) : this;
}, b2.prototype.round = function(t3) {
  var e5, r3 = 0, a3 = 0, s3 = 0, i3 = 0;
  return t3 = t3 || 0, this.__evaluateStack(), this.segments.forEach(function(n3) {
    var h3 = n3[0].toLowerCase() === n3[0];
    switch (n3[0]) {
      case "H":
      case "h":
        return h3 && (n3[1] += s3), s3 = n3[1] - n3[1].toFixed(t3), void (n3[1] = +n3[1].toFixed(t3));
      case "V":
      case "v":
        return h3 && (n3[1] += i3), i3 = n3[1] - n3[1].toFixed(t3), void (n3[1] = +n3[1].toFixed(t3));
      case "Z":
      case "z":
        return s3 = r3, void (i3 = a3);
      case "M":
      case "m":
        return h3 && (n3[1] += s3, n3[2] += i3), s3 = n3[1] - n3[1].toFixed(t3), i3 = n3[2] - n3[2].toFixed(t3), r3 = s3, a3 = i3, n3[1] = +n3[1].toFixed(t3), void (n3[2] = +n3[2].toFixed(t3));
      case "A":
      case "a":
        return h3 && (n3[6] += s3, n3[7] += i3), s3 = n3[6] - n3[6].toFixed(t3), i3 = n3[7] - n3[7].toFixed(t3), n3[1] = +n3[1].toFixed(t3), n3[2] = +n3[2].toFixed(t3), n3[3] = +n3[3].toFixed(t3 + 2), n3[6] = +n3[6].toFixed(t3), void (n3[7] = +n3[7].toFixed(t3));
      default:
        return e5 = n3.length, h3 && (n3[e5 - 2] += s3, n3[e5 - 1] += i3), s3 = n3[e5 - 2] - n3[e5 - 2].toFixed(t3), i3 = n3[e5 - 1] - n3[e5 - 1].toFixed(t3), void n3.forEach(function(e6, r4) {
          r4 && (n3[r4] = +n3[r4].toFixed(t3));
        });
    }
  }), this;
}, b2.prototype.iterate = function(t3, e5) {
  var r3, a3, s3, i3 = this.segments, n3 = {}, h3 = false, o3 = 0, c2 = 0, u3 = 0, f3 = 0;
  if (e5 || this.__evaluateStack(), i3.forEach(function(e6, r4) {
    var a4 = t3(e6, r4, o3, c2);
    Array.isArray(a4) && (n3[r4] = a4, h3 = true);
    var s4 = e6[0] === e6[0].toLowerCase();
    switch (e6[0]) {
      case "m":
      case "M":
        return o3 = e6[1] + (s4 ? o3 : 0), c2 = e6[2] + (s4 ? c2 : 0), u3 = o3, void (f3 = c2);
      case "h":
      case "H":
        return void (o3 = e6[1] + (s4 ? o3 : 0));
      case "v":
      case "V":
        return void (c2 = e6[1] + (s4 ? c2 : 0));
      case "z":
      case "Z":
        return o3 = u3, void (c2 = f3);
      default:
        o3 = e6[e6.length - 2] + (s4 ? o3 : 0), c2 = e6[e6.length - 1] + (s4 ? c2 : 0);
    }
  }), !h3) return this;
  for (s3 = [], r3 = 0; r3 < i3.length; r3++) if (void 0 !== n3[r3]) for (a3 = 0; a3 < n3[r3].length; a3++) s3.push(n3[r3][a3]);
  else s3.push(i3[r3]);
  return this.segments = s3, this;
}, b2.prototype.abs = function() {
  return this.iterate(function(t3, e5, r3, a3) {
    var s3, i3 = t3[0], n3 = i3.toUpperCase();
    if (i3 !== n3) switch (t3[0] = n3, i3) {
      case "v":
        return void (t3[1] += a3);
      case "a":
        return t3[6] += r3, void (t3[7] += a3);
      default:
        for (s3 = 1; s3 < t3.length; s3++) t3[s3] += s3 % 2 ? r3 : a3;
    }
  }, true), this;
}, b2.prototype.rel = function() {
  return this.iterate(function(t3, e5, r3, a3) {
    var s3, i3 = t3[0], n3 = i3.toLowerCase();
    if (i3 !== n3 && (0 !== e5 || "M" !== i3)) switch (t3[0] = n3, i3) {
      case "V":
        return void (t3[1] -= a3);
      case "A":
        return t3[6] -= r3, void (t3[7] -= a3);
      default:
        for (s3 = 1; s3 < t3.length; s3++) t3[s3] -= s3 % 2 ? r3 : a3;
    }
  }, true), this;
}, b2.prototype.unarc = function() {
  return this.iterate(function(t3, e5, r3, a3) {
    var s3, i3, n3, h3 = [], o3 = t3[0];
    return "A" !== o3 && "a" !== o3 ? null : ("a" === o3 ? (i3 = r3 + t3[6], n3 = a3 + t3[7]) : (i3 = t3[6], n3 = t3[7]), 0 === (s3 = q2(r3, a3, i3, n3, t3[4], t3[5], t3[1], t3[2], t3[3])).length ? [
      [
        "a" === t3[0] ? "l" : "L",
        t3[6],
        t3[7]
      ]
    ] : (s3.forEach(function(t4) {
      h3.push([
        "C",
        t4[2],
        t4[3],
        t4[4],
        t4[5],
        t4[6],
        t4[7]
      ]);
    }), h3));
  }), this;
}, b2.prototype.unshort = function() {
  var t3, e5, r3, a3, s3, i3 = this.segments;
  return this.iterate(function(n3, h3, o3, c2) {
    var u3, f3 = n3[0], l3 = f3.toUpperCase();
    h3 && ("T" === l3 ? (u3 = "t" === f3, "Q" === (r3 = i3[h3 - 1])[0] ? (t3 = r3[1] - o3, e5 = r3[2] - c2) : "q" === r3[0] ? (t3 = r3[1] - r3[3], e5 = r3[2] - r3[4]) : (t3 = 0, e5 = 0), a3 = -t3, s3 = -e5, u3 || (a3 += o3, s3 += c2), i3[h3] = [
      u3 ? "q" : "Q",
      a3,
      s3,
      n3[1],
      n3[2]
    ]) : "S" === l3 && (u3 = "s" === f3, "C" === (r3 = i3[h3 - 1])[0] ? (t3 = r3[3] - o3, e5 = r3[4] - c2) : "c" === r3[0] ? (t3 = r3[3] - r3[5], e5 = r3[4] - r3[6]) : (t3 = 0, e5 = 0), a3 = -t3, s3 = -e5, u3 || (a3 += o3, s3 += c2), i3[h3] = [
      u3 ? "c" : "C",
      a3,
      s3,
      n3[1],
      n3[2],
      n3[3],
      n3[4]
    ]));
  }), this;
};
var F2 = b2;
var S2 = F2.from;

// deno:https://cdn.jsdelivr.net/npm/emoji-particle@0.0.4/+esm
function e4() {
  const e5 = new Blob([
    'var g=[],l=[],C=["\\u{1F37F}","\\u{1F33D}","\\u{1F964}","\\u{1F968}","\\u{1FAD0}","\\u{1F363}"],z=["\\u2728","\\u2B50\\uFE0F","\\u{1F4A5}","\\u{1F31F}","\\u{1F525}","\\u{1F4AB}"],T=["\\u{1F680}","\\u{1F9E8}","\\u{1F4A3}","\\u{1FA84}","\\u{1F6F8}"],p=new Map,c,r,u,d;self.onmessage=async e=>{e.data.type==="init"?(c=e.data.canvas,r=c.getContext("2d"),u=c.width,d=c.height,await I([...C,...z,...T]),requestAnimationFrame(S)):e.data.type==="spawn"?k(e.data.options):e.data.type==="resize"&&(u=e.data.width,d=e.data.height,c.width=u,c.height=d)};async function E(e,n=64){let t=new OffscreenCanvas(n,n),i=t.getContext("2d");return i.font=`${n}px serif`,i.textAlign="center",i.textBaseline="middle",i.fillText(e,n/2,n/2),await createImageBitmap(t)}async function I(e,n=64){for(let t of e)if(typeof t=="string"){if(!p.has(t)){let i=await E(t,n);p.set(t,i)}}else t instanceof ImageBitmap?p.has(t)||p.set(t,t):console.warn("Unsupported emoji item:",t)}function k(e){let{particleType:n="popcorn",originX:t=u/2,originY:i=d/2,count:h=20,size:f=30,minSpeed:m=5,maxSpeed:b=10,angle:y=-Math.PI/2,angleVariance:x=Math.PI/6,gravity:v=.2,lifeTime:M=100,fade:w=!0,explosionOptions:j={}}=e;if(n==="popcorn")for(let a=0;a<h;a++){let o=m+Math.random()*(b-m),s=y+(Math.random()-.5)*x,O=C[Math.floor(Math.random()*C.length)];l.push({type:"emoji",emoji:O,size:f,x:t,y:i,vx:Math.cos(s)*o,vy:Math.sin(s)*o,gravity:v,age:0,lifeTime:M,fade:w})}else if(n==="rocket")for(let a=0;a<h;a++){let o=m+Math.random()*(b-m),s=y+(Math.random()-.5)*x,O=T[Math.floor(Math.random()*T.length)];g.push({emoji:O,x:t,y:i,vx:Math.cos(s)*o,vy:Math.sin(s)*o,gravity:v,age:0,lifeTime:M,size:f,explosionOptions:j})}}function B(e,n,t={}){let{count:i=20,size:h=20,minSpeed:f=2,maxSpeed:m=7,angle:b=0,angleVariance:y=Math.PI*2,gravity:x=.1,lifeTime:v=80,fade:M=!0,emojiList:w=z}=t;for(let j=0;j<i;j++){let a=f+Math.random()*(m-f),o=b+(Math.random()-.5)*y,s=w[Math.floor(Math.random()*w.length)];l.push({type:"emoji",emoji:s,x:e,y:n,vx:Math.cos(o)*a,vy:Math.sin(o)*a,gravity:x,age:0,lifeTime:v,fade:M,size:h})}}function P(){for(let e=g.length-1;e>=0;e--){let n=g[e];n.vy+=n.gravity,n.x+=n.vx,n.y+=n.vy,n.age++,n.age>=n.lifeTime&&(B(n.x,n.y,n.explosionOptions),g.splice(e,1))}for(let e=l.length-1;e>=0;e--){let n=l[e];n.vy+=n.gravity,n.x+=n.vx,n.y+=n.vy,n.age++,n.age>=n.lifeTime&&l.splice(e,1)}}function A(){r.clearRect(0,0,u,d);for(let e of g){let n=p.get(e.emoji);n&&(r.globalAlpha=1,r.drawImage(n,e.x-e.size/2,e.y-e.size/2,e.size,e.size))}for(let e of l){let n=p.get(e.emoji);if(n){let t=e.fade?1-e.age/e.lifeTime:1;r.globalAlpha=t,r.drawImage(n,e.x-e.size/2,e.y-e.size/2,e.size,e.size),r.globalAlpha=1}}}function S(){P(),A(),requestAnimationFrame(S)}\n'
  ], {
    type: "text/javascript"
  }), t3 = URL.createObjectURL(e5), a3 = new Worker(t3);
  return URL.revokeObjectURL(t3), a3;
}

// src/index.js
var htmlLang = document.documentElement.lang;
var ttsLang = getTTSLang(htmlLang);
var emojiParticle = initEmojiParticle();
var correctCount = 0;
var audioContext;
var audioBufferCache = {};
var ttsVoices = [];
loadVoices();
loadConfig();
function loadConfig() {
  if (localStorage.getItem("darkMode") == 1) {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }
}
function toggleDarkMode() {
  if (localStorage.getItem("darkMode") == 1) {
    localStorage.setItem("darkMode", 0);
    document.documentElement.setAttribute("data-bs-theme", "light");
  } else {
    localStorage.setItem("darkMode", 1);
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }
}
function createAudioContext() {
  if (globalThis.AudioContext) {
    return new globalThis.AudioContext();
  } else {
    console.error("Web Audio API is not supported in this browser");
    return null;
  }
}
function unlockAudio() {
  const uttr = new SpeechSynthesisUtterance("");
  uttr.lang = ttsLang;
  speechSynthesis.speak(uttr);
  if (audioContext) {
    audioContext.resume();
  } else {
    audioContext = createAudioContext();
    loadAudio("modified", "/china-map-puzzle/mp3/decision50.mp3");
    loadAudio("correct", "/china-map-puzzle/mp3/correct3.mp3");
    loadAudio("correctAll", "/china-map-puzzle/mp3/correct1.mp3");
  }
  document.removeEventListener("click", unlockAudio);
  document.removeEventListener("keydown", unlockAudio);
}
async function loadAudio(name, url) {
  if (!audioContext) return;
  if (audioBufferCache[name]) return audioBufferCache[name];
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    audioBufferCache[name] = audioBuffer;
    return audioBuffer;
  } catch (error) {
    console.error(`Loading audio ${name} error:`, error);
    throw error;
  }
}
function playAudio(name, volume) {
  if (!audioContext) return;
  const audioBuffer = audioBufferCache[name];
  if (!audioBuffer) {
    console.error(`Audio ${name} is not found in cache`);
    return;
  }
  const sourceNode = audioContext.createBufferSource();
  sourceNode.buffer = audioBuffer;
  const gainNode = audioContext.createGain();
  if (volume) gainNode.gain.value = volume;
  gainNode.connect(audioContext.destination);
  sourceNode.connect(gainNode);
  sourceNode.start();
}
function loadVoices() {
  const allVoicesObtained = new Promise((resolve) => {
    let voices = speechSynthesis.getVoices();
    if (voices.length !== 0) {
      resolve(voices);
    } else {
      let supported = false;
      speechSynthesis.addEventListener("voiceschanged", () => {
        supported = true;
        voices = speechSynthesis.getVoices();
        resolve(voices);
      });
      setTimeout(() => {
        if (!supported) {
          document.getElementById("noTTS").classList.remove("d-none");
        }
      }, 1e3);
    }
  });
  allVoicesObtained.then((voices) => {
    ttsVoices = voices.filter((voice) => voice.lang == ttsLang);
  });
}
function speak(text) {
  speechSynthesis.cancel();
  const msg = new SpeechSynthesisUtterance(text);
  msg.voice = ttsVoices[Math.floor(Math.random() * ttsVoices.length)];
  msg.lang = ttsLang;
  speechSynthesis.speak(msg);
  return msg;
}
function initEmojiParticle() {
  const canvas2 = document.createElement("canvas");
  Object.assign(canvas2.style, {
    position: "fixed",
    pointerEvents: "none",
    top: "0px",
    left: "0px"
  });
  canvas2.width = document.documentElement.clientWidth;
  canvas2.height = document.documentElement.clientHeight;
  document.body.appendChild(canvas2);
  const offscreen = canvas2.transferControlToOffscreen();
  const worker = e4();
  worker.postMessage({ type: "init", canvas: offscreen }, [offscreen]);
  globalThis.addEventListener("resize", () => {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    worker.postMessage({ type: "resize", width, height });
  });
  return { canvas: canvas2, offscreen, worker };
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function getStateId(node) {
  const doc = map.contentDocument;
  const states = [...doc.querySelectorAll(".main")];
  return states.indexOf(node);
}
function movePathPoints(path, x3, y3) {
  path = path.cloneNode(true);
  const data = F2(path.getAttribute("d"));
  data.translate(-x3, -y3);
  path.setAttribute("d", data.toString());
  return path;
}
function movePolygonPoints(polygon, x3, y3) {
  polygon = polygon.cloneNode(true);
  const data = polygon.getAttribute("points").split(" ").map(Number);
  const points = data.map((p3, i3) => i3 % 2 == 0 ? p3 - y3 : p3 - x3);
  polygon.setAttribute("points", points.join(" "));
  return polygon;
}
function moveGroupPoints(g3, x3, y3) {
  g3 = g3.cloneNode(true);
  g3.querySelectorAll("path, polygon").forEach((node) => {
    switch (node.tagName) {
      case "path":
        node.replaceWith(movePathPoints(node, x3, y3));
        break;
      case "polygon":
        node.replaceWith(movePolygonPoints(node, x3, y3));
        break;
    }
  });
  return g3;
}
function movePoints(node, x3, y3) {
  switch (node.tagName) {
    case "path":
      return movePathPoints(node, x3, y3);
    case "polygon":
      return movePolygonPoints(node, x3, y3);
    case "g":
      return moveGroupPoints(node, x3, y3);
    default:
      throw new Error("not supported");
  }
}
function getPieceSvg(island, scale) {
  const svgNamespace = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNamespace, "svg");
  const rect = island.getBBox();
  const { x: x3, y: y3, width, height } = rect;
  svg.setAttribute("width", width * scale);
  svg.setAttribute("height", height * scale);
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("fill", "black");
  svg.setAttribute("opacity", "0.8");
  const piece = movePoints(island, x3, y3);
  svg.appendChild(piece);
  return svg;
}
function checkSpinnedPosition(island, wrapper, group) {
  let diff = Math.abs(group.angle + wrapper.angle);
  if (diff > 180) diff = 360 - diff;
  if (diff > angleThreshold) return false;
  const center = wrapper.getCenterPoint();
  const original = island.getBoundingClientRect();
  const centerX = original.left + original.width / 2;
  const centerY = original.top + original.height / 2;
  const originalScale = group.width / original.width;
  const scaleX = originalScale * group.scaleX * wrapper.scaleX;
  const scaleY = originalScale * group.scaleY * wrapper.scaleY;
  if (Math.abs(center.x - centerX) > positionThreshold) return false;
  if (Math.abs(center.y - centerY) > positionThreshold) return false;
  if (Math.abs(scaleX - 1) > scaleThreshold) return false;
  if (Math.abs(scaleY - 1) > scaleThreshold) return false;
  return true;
}
function checkPosition(island, rect) {
  const original = island.getBoundingClientRect();
  const width = rect.width * rect.scaleX;
  const height = rect.height * rect.scaleY;
  const left = rect.left - width / 2;
  const top = rect.top - height / 2;
  if (Math.abs(left - original.x) > positionThreshold) return false;
  if (Math.abs(top - original.y) > positionThreshold) return false;
  if (Math.abs(width - original.width) > positionThreshold) return false;
  if (Math.abs(height - original.height) > positionThreshold) return false;
  return true;
}
function addStateText(stateName) {
  clearTimeout(stateTimer);
  canvas.remove(stateText);
  const fontSize = canvas.width / stateTextLength;
  stateText = new Kn(stateName, {
    fontSize,
    fontFamily: "serif",
    left: canvas.width / 2,
    top: canvas.height / 2,
    originX: "center",
    originY: "center",
    selectable: false,
    fill: "blue"
  });
  canvas.add(stateText);
  canvas.sendObjectToBack(stateText);
  stateTimer = setTimeout(() => {
    canvas.remove(stateText);
  }, 2e3);
}
function setMovableOption(group, grade) {
  switch (grade) {
    case 0:
    case 1:
    case 2:
      group.setControlsVisibility({
        bl: false,
        br: false,
        ml: false,
        mt: false,
        mr: false,
        mb: false,
        tl: false,
        tr: false,
        mtr: false
      });
      group.hasBorders = false;
      break;
    case 3:
    case 4:
    case 5: {
      const centerX = group.left + group.width / 2;
      const centerY = group.top + group.height / 2;
      group.set({
        originX: "center",
        originY: "center",
        left: centerX,
        top: centerY,
        angle: Math.random() * 360,
        selectable: false
      });
      break;
    }
    case 6:
    case 7:
    case 8: {
      group.setControlsVisibility({
        mtr: false
      });
      const width = (0.5 + Math.random()) * canvas.width / 10;
      const height = (0.5 + Math.random()) * canvas.height / 10;
      group.set({
        scaleX: width / group.width,
        scaleY: height / group.height
      });
      break;
    }
    case 9:
    case 10:
    case 11: {
      const width = (0.5 + Math.random()) * canvas.width / 10;
      const height = (0.5 + Math.random()) * canvas.height / 10;
      group.set({
        scaleX: width / group.width,
        scaleY: height / group.height
      });
      const centerX = group.left + group.width / 2;
      const centerY = group.top + group.height / 2;
      group.set({
        originX: "center",
        originY: "center",
        left: centerX,
        top: centerY,
        angle: Math.random() * 360,
        selectable: false
      });
      break;
    }
  }
}
function addControlRect(group, grade) {
  group.setCoords();
  const rect = group.getBoundingRect();
  const rectLength = Math.max(rect.width, rect.height);
  const controlRect = new dr({
    originX: "center",
    originY: "center",
    left: group.left,
    top: group.top,
    width: rectLength,
    height: rectLength,
    opacity: 0,
    selectable: false
  });
  canvas.add(controlRect);
  const wrapper = new br([controlRect, group], {
    originX: "center",
    originY: "center",
    width: rectLength,
    height: rectLength,
    opacity: group.opacity,
    transparentCorners: false,
    borderColor: "blue",
    cornerColor: "blue",
    cornerStyle: "circle"
  });
  if (grade < 9) {
    wrapper.setControlsVisibility({
      bl: false,
      br: false,
      ml: false,
      mt: false,
      mr: false,
      mb: false,
      tl: false,
      tr: false
    });
  }
  canvas.add(wrapper);
  return wrapper;
}
function addScoreText() {
  const time = ((Date.now() - startTime) * 1e3 / 1e6).toFixed(3);
  const text = `${time} sec!`;
  const fontSize = canvas.width / 8;
  scoreText = new Kn(text, {
    fontSize,
    left: canvas.width / 2,
    top: canvas.height / 2,
    originX: "center",
    originY: "center",
    selectable: false,
    fill: "blue"
  });
  setTimeout(() => {
    canvas.add(scoreText);
    canvas.sendObjectToBack(scoreText);
  }, 2e3);
}
function setCorrectPiece(island) {
  island.setAttribute("fill", "violet");
  correctCount += 1;
  if (correctCount == stateNames.length) {
    playAudio("correctAll");
    for (let i3 = 0; i3 < 10; i3++) {
      emojiParticle.worker.postMessage({
        type: "spawn",
        options: {
          particleType: "popcorn",
          originX: Math.random() * emojiParticle.canvas.width,
          originY: Math.random() * emojiParticle.canvas.height
        }
      });
    }
    addScoreText();
  } else {
    playAudio("correct", 0.3);
    if (correctCount % 5 === 0) {
      for (let i3 = 0; i3 < Math.ceil(correctCount / 5); i3++) {
        emojiParticle.worker.postMessage({
          type: "spawn",
          options: {
            particleType: "popcorn",
            originX: Math.random() * emojiParticle.canvas.width,
            originY: Math.random() * emojiParticle.canvas.height
          }
        });
      }
    }
  }
  const id = getStateId(island);
  const stateName = stateNames[id];
  addStateText(stateName);
  speak(stateName);
}
function adjustElementPosition(element) {
  const width = element.width * element.scaleX;
  const height = element.height * element.scaleY;
  const w22 = width / 2;
  const h22 = height / 2;
  if (element.left < w22) {
    element.set({ left: w22 });
  } else if (canvas.width < element.left + w22) {
    const maxLeft = canvas.width - w22;
    element.set({ left: maxLeft });
  }
  if (element.top < h22) {
    element.set({ top: h22 });
  } else if (canvas.height < element.top + h22) {
    const maxTop = canvas.height - h22;
    element.set({ top: maxTop });
  }
  element.setCoords();
}
function setPieceGuideEvent(island, group) {
  let lastTouchTime = 0;
  group.on("mousedown", (event) => {
    const pieceGuide = document.getElementById("pieceGuide");
    if (pieceGuide) pieceGuide.remove();
    const now = Date.now();
    if (now - lastTouchTime < 200) {
      const e5 = event.e;
      const touch = e5 instanceof TouchEvent ? e5.touches[0] : e5;
      const tx = touch.pageX;
      const ty = touch.pageY - 30;
      const id = getStateId(island);
      const stateName = stateNames[id];
      const html = `
        <div id="pieceGuide" class="tooltip show" role="tooltip"
          style="position:absolute; inset:0px auto auto 0px; transform:translate(${tx}px,${ty}px);">
          <div class="tooltip-inner">${stateName}</div>
        </div>
      `;
      document.getElementById("guide").insertAdjacentHTML("beforeend", html);
    }
    lastTouchTime = now;
  });
}
async function setMovable(island, svg, grade) {
  const result = await Bo(svg.outerHTML);
  const group = sn.groupSVGElements(result.objects, result.options);
  group.set({
    left: getRandomInt(0, canvas.width / 2),
    top: getRandomInt(0, canvas.height / 2)
  });
  group.set({
    left: group.left + group.width / 2,
    top: group.top + group.height / 2,
    originX: "center",
    originY: "center",
    transparentCorners: false,
    borderColor: "blue",
    cornerColor: "blue",
    cornerStyle: "circle"
  });
  setMovableOption(group, grade);
  canvas.add(group);
  if (group.selectable) {
    setPieceGuideEvent(island, group);
    group.on("mouseup", () => {
      playAudio("modified");
      if (checkPosition(island, group)) {
        canvas.remove(group);
        setCorrectPiece(island);
      } else {
        adjustElementPosition(group);
      }
    });
  } else {
    const wrapper = addControlRect(group, grade);
    setPieceGuideEvent(island, wrapper);
    wrapper.on("mouseup", () => {
      playAudio("modified");
      if (checkSpinnedPosition(island, wrapper, group)) {
        wrapper.getObjects().forEach((obj) => {
          canvas.remove(obj);
        });
        canvas.remove(wrapper);
        setCorrectPiece(island);
      } else {
        adjustElementPosition(wrapper);
      }
    });
  }
}
function getSVGScale(map2, doc) {
  const svg = doc.querySelector("svg");
  const width = svg.getAttribute("viewBox").split(" ")[2];
  const rect = map2.getBoundingClientRect();
  return rect.width / Number(width);
}
async function shuffleSVG() {
  canvas.clear();
  const grade = document.getElementById("gradeOption").selectedIndex;
  const doc = map.contentDocument;
  const scale = getSVGScale(map, doc);
  const states = doc.querySelectorAll(".main");
  for (const state of states) {
    state.removeAttribute("fill");
    const svg = getPieceSvg(state, scale);
    await setMovable(state, svg, grade);
  }
  switch (grade % 3) {
    case 0:
      states.forEach((state) => {
        state.setAttribute("fill", "#fefee4");
        state.setAttribute("stroke-width", 1);
      });
      break;
    case 1:
      states.forEach((state) => {
        state.setAttribute("fill", "#fefee4");
        state.setAttribute("stroke-width", 0);
      });
      break;
    case 2:
      states.forEach((state) => {
        state.setAttribute("fill", "none");
        state.setAttribute("stroke-width", 0);
      });
      break;
  }
}
async function startGame() {
  if (!canvas) canvas = initCanvas();
  canvas.remove(scoreText);
  await shuffleSVG();
  correctCount = 0;
  startTime = Date.now();
}
function setMapGuideMouseEvent(canvas2) {
  let lastTouchTime = 0;
  canvas2.on("mouse:down", (event) => {
    const now = Date.now();
    if (now - lastTouchTime < 200) {
      if (!event.target) {
        const e5 = event.e;
        const islands = findPieceNodes(e5.offsetX, e5.offsetY);
        islands.forEach((island) => setMapGuideTooltip(e5, island));
      }
    }
    lastTouchTime = now;
  });
}
function setMapGuideTouchEvent(canvas2) {
  let lastTouchTime = 0;
  canvas2.wrapperEl.addEventListener("touchstart", (event) => {
    const now = Date.now();
    if (now - lastTouchTime < 200) {
      const touch = event.changedTouches[0];
      const target = canvas2.findTarget(touch);
      if (!target) {
        const rect = map.getBoundingClientRect();
        const offsetX = touch.pageX - rect.left;
        const offsetY = touch.pageY - rect.top;
        const islands = findPieceNodes(offsetX, offsetY);
        islands.forEach((island) => setMapGuideTooltip(touch, island));
      }
    }
    lastTouchTime = now;
  });
}
function findPieceNodes(offsetX, offsetY) {
  const candidates = map.contentDocument.elementsFromPoint(offsetX, offsetY);
  const islands = candidates.map((node) => {
    if (node.tagName == "svg") return false;
    if (node.classList.contains("main")) return node;
    const parentNode = node.parentNode;
    if (parentNode.classList.contains("main")) return parentNode;
    return false;
  }).filter((node) => node);
  return islands;
}
function setMapGuideTooltip(event, island) {
  const tx = event.pageX;
  const ty = event.pageY - 30;
  const id = getStateId(island);
  const stateName = stateNames[id];
  const html = `
    <div class="tooltip show" role="tooltip"
      style="position:absolute; inset:0px auto auto 0px; transform:translate(${tx}px,${ty}px);">
      <div class="tooltip-inner">${stateName}</div>
    </div>
  `;
  const guide = document.getElementById("guide");
  guide.insertAdjacentHTML("beforeend", html);
  const tooltip = guide.lastElementChild;
  tooltip.onclick = () => {
    tooltip.remove();
  };
}
function initCanvas() {
  const rect = map.getBoundingClientRect();
  const canvas2 = new gn("canvas", {
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height
  });
  if (navigator.maxTouchPoints > 0) {
    setMapGuideTouchEvent(canvas2);
  } else {
    setMapGuideMouseEvent(canvas2);
  }
  canvas2.selection = false;
  document.getElementById("canvas").parentNode.style.position = "absolute";
  return canvas2;
}
function resizePieces() {
  const rect = map.getBoundingClientRect();
  const scale = rect.width / canvas.getWidth();
  canvas.setDimensions({ width: rect.width, height: rect.height });
  canvas.getObjects().forEach((object) => {
    object.left *= scale;
    object.top *= scale;
    object.scaleX *= scale;
    object.scaleY *= scale;
    object.setCoords();
  });
}
function calcStateTextLength(lang, stateNames2) {
  const max = Math.max(...stateNames2.map((str) => str.length));
  switch (lang) {
    case "ja":
    case "zh":
      return max;
    case "en":
      return Math.ceil(max / 1.5);
  }
}
function changeLang() {
  const langObj = document.getElementById("lang");
  const lang = langObj.options[langObj.selectedIndex].value;
  location.href = `/china-map-puzzle/${lang}/`;
}
function getTTSLang(htmlLang2) {
  switch (htmlLang2) {
    case "en":
      return "en-US";
    case "ja":
      return "ja-JP";
    case "zh":
      return "zh-CN";
  }
}
async function initStatesInfo(htmlLang2) {
  const response = await fetch(`/china-map-puzzle/data/${htmlLang2}.lst`);
  const text = await response.text();
  stateNames = text.trimEnd().split("\n");
  stateTextLength = calcStateTextLength(htmlLang2, stateNames);
}
var map = document.getElementById("map");
var positionThreshold = 20;
var scaleThreshold = 0.3;
var angleThreshold = 20;
var canvas;
var stateNames;
var stateText;
var stateTextLength;
var stateTimer;
var startTime;
var scoreText;
initStatesInfo(htmlLang);
document.getElementById("startButton").onclick = startGame;
document.getElementById("toggleDarkMode").onclick = toggleDarkMode;
document.getElementById("lang").onchange = changeLang;
document.addEventListener("click", unlockAudio, { once: true });
document.addEventListener("keydown", unlockAudio, { once: true });
globalThis.addEventListener("resize", () => {
  if (!canvas) return;
  resizePieces();
  if (stateText) {
    stateText.set({
      left: canvas.width / 2,
      top: canvas.height / 2
    });
  }
  if (scoreText) {
    scoreText.set({
      left: canvas.width / 2,
      top: canvas.height / 2
    });
  }
});
