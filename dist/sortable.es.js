const lt = "0.1.0";
function B(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
const z = B(
  /(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i
), ve = B(/Edge/i), He = B(/firefox/i), ge = B(/safari/i) && !B(/chrome/i) && !B(/android/i), ke = B(/iP(ad|od|hone)/i), qe = B(/chrome/i) && B(/android/i), Ze = {
  capture: !1,
  passive: !1
};
function b(e, n, t) {
  e.addEventListener(n, t, !z && Ze);
}
function m(e, n, t) {
  e.removeEventListener(n, t, !z && Ze);
}
function ye(e, n) {
  if (n) {
    if (n[0] === ">" && (n = n.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(n);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(n);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(n);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Ke(e) {
  return e.host && e !== document && e.host.nodeType && e.host !== e ? e.host : e.parentNode;
}
function Y(e, n, t, i) {
  if (e) {
    t = t || document;
    do {
      if (n != null && (n[0] === ">" ? e.parentNode === t && ye(e, n) : ye(e, n)) || i && e === t)
        return e;
      if (e === t) break;
    } while (e = Ke(e));
  }
  return null;
}
const We = /\s+/g;
function I(e, n, t) {
  if (e && n)
    if (e.classList)
      e.classList[t ? "add" : "remove"](n);
    else {
      let i = (" " + e.className + " ").replace(We, " ").replace(" " + n + " ", " ");
      e.className = (i + (t ? " " + n : "")).replace(We, " ");
    }
}
function u(e, n, t) {
  let i = e && e.style;
  if (i) {
    if (t === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? t = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (t = e.currentStyle), n === void 0 ? t : t[n];
    !(n in i) && n.indexOf("webkit") === -1 && (n = "-webkit-" + n), i[n] = t + (typeof t == "string" ? "" : "px");
  }
}
function ee(e, n) {
  let t = "";
  if (typeof e == "string")
    t = e;
  else
    do {
      let o = u(e, "transform");
      o && o !== "none" && (t = o + " " + t);
    } while (!n && (e = e.parentNode));
  const i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(t);
}
function Qe(e, n, t) {
  if (e) {
    let i = e.getElementsByTagName(n), o = 0, r = i.length;
    if (t)
      for (; o < r; o++)
        t(i[o], o);
    return i;
  }
  return [];
}
function W() {
  let e = document.scrollingElement;
  return e || document.documentElement;
}
function C(e, n, t, i, o) {
  if (!e.getBoundingClientRect && e !== window) return;
  let r, a, s, f, d, p, g;
  if (e !== window && e.parentNode && e !== W() ? (r = e.getBoundingClientRect(), a = r.top, s = r.left, f = r.bottom, d = r.right, p = r.height, g = r.width) : (a = 0, s = 0, f = window.innerHeight, d = window.innerWidth, p = window.innerHeight, g = window.innerWidth), (n || t) && e !== window && (o = o || e.parentNode, !z))
    do
      if (o && o.getBoundingClientRect && (u(o, "transform") !== "none" || t && u(o, "position") !== "static")) {
        let w = o.getBoundingClientRect();
        a -= w.top + parseInt(u(o, "border-top-width")), s -= w.left + parseInt(u(o, "border-left-width")), f = a + r.height, d = s + r.width;
        break;
      }
    while (o = o.parentNode);
  if (i && e !== window) {
    let w = ee(o || e), y = w && w.a, D = w && w.d;
    w && (a /= D, s /= y, g /= y, p /= D, f = a + p, d = s + g);
  }
  return {
    top: a,
    left: s,
    bottom: f,
    right: d,
    width: g,
    height: p
  };
}
function ze(e, n, t) {
  let i = Ve(e, !0), o = C(e)[n];
  for (; i; ) {
    let r = C(i)[t], a;
    if (a = o >= r, !a) return i;
    if (i === W()) break;
    i = Ve(i, !1);
  }
  return !1;
}
function se(e, n, t, i) {
  let o = 0, r = 0, a = e.children;
  for (; r < a.length; ) {
    if (a[r].style.display !== "none" && a[r] !== h.ghost && (i || a[r] !== h.dragged) && Y(a[r], t.draggable, e, !1)) {
      if (o === n)
        return a[r];
      o++;
    }
    r++;
  }
  return null;
}
function Xe(e, n) {
  let t = e.lastElementChild;
  for (; t && (t === h.ghost || u(t, "display") === "none" || n && !ye(t, n)); )
    t = t.previousElementSibling;
  return t || null;
}
function k(e, n) {
  let t = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== h.clone && (!n || ye(e, n)) && t++;
  return t;
}
function Ge(e) {
  let n = 0, t = 0, i = W();
  if (e)
    do {
      let o = ee(e), r = o.a, a = o.d;
      n += e.scrollLeft * r, t += e.scrollTop * a;
    } while (e !== i && (e = e.parentNode));
  return [n, t];
}
function st(e, n) {
  for (let t in e)
    if (e.hasOwnProperty(t)) {
      for (let i in n)
        if (n.hasOwnProperty(i) && n[i] === e[t][i]) return Number(t);
    }
  return -1;
}
function Ve(e, n) {
  if (!e || !e.getBoundingClientRect) return W();
  let t = e, i = !1;
  do
    if (t.clientWidth < t.scrollWidth || t.clientHeight < t.scrollHeight) {
      let o = u(t);
      if (t.clientWidth < t.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || t.clientHeight < t.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!t.getBoundingClientRect || t === document.body) return W();
        if (i || n) return t;
        i = !0;
      }
    }
  while (t = t.parentNode);
  return W();
}
function ft(e, n) {
  if (e && n)
    for (let t in n)
      n.hasOwnProperty(t) && (e[t] = n[t]);
  return e;
}
function Te(e, n) {
  return Math.round(e.top) === Math.round(n.top) && Math.round(e.left) === Math.round(n.left) && Math.round(e.height) === Math.round(n.height) && Math.round(e.width) === Math.round(n.width);
}
let Me;
function dt(e, n) {
  return function() {
    if (!Me) {
      let t = arguments, i = this;
      t.length === 1 ? e.call(i, t[0]) : e.apply(i, t), Me = setTimeout(function() {
        Me = void 0;
      }, n);
    }
  };
}
function ut(e, n, t) {
  e.scrollLeft += n, e.scrollTop += t;
}
function Je(e) {
  let n = window.Polymer, t = window.jQuery || window.Zepto;
  return n && n.dom ? n.dom(e).cloneNode(!0) : t ? t(e).clone(!0)[0] : e.cloneNode(!0);
}
function et(e, n, t) {
  const i = {};
  return Array.from(e.children).forEach((o) => {
    if (!Y(o, n.draggable, e, !1) || o.animated || o === t) return;
    const r = C(o);
    i.left = Math.min(i.left ?? 1 / 0, r.left), i.top = Math.min(i.top ?? 1 / 0, r.top), i.right = Math.max(i.right ?? -1 / 0, r.right), i.bottom = Math.max(i.bottom ?? -1 / 0, r.bottom);
  }), i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
const A = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function ct() {
  let e = [], n;
  return {
    captureAnimationState() {
      if (e = [], !this.options.animation) return;
      [].slice.call(this.el.children).forEach((i) => {
        if (u(i, "display") === "none" || i === h.ghost)
          return;
        e.push({
          target: i,
          rect: C(i)
        });
        let o = { ...e[e.length - 1].rect };
        if (i.thisAnimationDuration) {
          let r = ee(i, !0);
          r && (o.top -= r.f, o.left -= r.e);
        }
        i.fromRect = o;
      });
    },
    addAnimationState(t) {
      e.push(t);
    },
    removeAnimationState(t) {
      e.splice(st(e, { target: t }), 1);
    },
    animateAll(t) {
      if (!this.options.animation) {
        clearTimeout(n), typeof t == "function" && t();
        return;
      }
      let i = !1, o = 0;
      e.forEach((r) => {
        let a = 0, s = r.target, f = s.fromRect, d = C(s), p = s.prevFromRect, g = s.prevToRect, w = r.rect, y = ee(s, !0);
        y && (d.top -= y.f, d.left -= y.e), s.toRect = d, s.thisAnimationDuration && Te(p, d) && !Te(f, d) && // Make sure animatingRect is on line between toRect & fromRect
        (w.top - d.top) / (w.left - d.left) === (f.top - d.top) / (f.left - d.left) && (a = pt(
          w,
          p,
          g,
          this.options
        )), Te(d, f) || (s.prevFromRect = f, s.prevToRect = d, a || (a = this.options.animation), this.animate(s, w, d, a)), a && (i = !0, o = Math.max(o, a), clearTimeout(s.animationResetTimer), s.animationResetTimer = setTimeout(function() {
          s.animationTime = 0, s.prevFromRect = null, s.fromRect = null, s.prevToRect = null, s.thisAnimationDuration = null;
        }, a), s.thisAnimationDuration = a);
      }), clearTimeout(n), i ? n = setTimeout(function() {
        typeof t == "function" && t();
      }, o) : typeof t == "function" && t(), e = [];
    },
    animate(t, i, o, r) {
      if (r) {
        u(t, "transition", ""), u(t, "transform", "");
        let a = ee(this.el), s = a && a.a, f = a && a.d, d = (i.left - o.left) / (s || 1), p = (i.top - o.top) / (f || 1);
        t.animatingX = !!d, t.animatingY = !!p, u(
          t,
          "transform",
          "translate3d(" + d + "px," + p + "px,0)"
        ), this.forRepaintDummy = ht(t), u(
          t,
          "transition",
          "transform " + r + "ms" + (this.options.easing ? " " + this.options.easing : "")
        ), u(t, "transform", "translate3d(0,0,0)"), typeof t.animated == "number" && clearTimeout(t.animated), t.animated = setTimeout(function() {
          u(t, "transition", ""), u(t, "transform", ""), t.animated = !1, t.animatingX = !1, t.animatingY = !1;
        }, r);
      }
    }
  };
}
function ht(e) {
  return e.offsetWidth;
}
function pt(e, n, t, i) {
  return Math.sqrt(
    Math.pow(n.top - e.top, 2) + Math.pow(n.left - e.left, 2)
  ) / Math.sqrt(
    Math.pow(n.top - t.top, 2) + Math.pow(n.left - t.left, 2)
  ) * i.animation;
}
let Z = [];
const xe = {
  initializeByDefault: !0
}, fe = {
  mount(e) {
    for (let n in xe)
      xe.hasOwnProperty(n) && !(n in e) && (e[n] = xe[n]);
    Z.forEach((n) => {
      if (n.pluginName === e.pluginName)
        throw `Sortable: Cannot mount plugin ${e.pluginName} more than once`;
    }), Z.push(e);
  },
  pluginEvent(e, n, t) {
    this.eventCanceled = !1, t.cancel = () => {
      this.eventCanceled = !0;
    };
    const i = e + "Global";
    Z.forEach((o) => {
      n[o.pluginName] && (n[o.pluginName][i] && n[o.pluginName][i]({ sortable: n, ...t }), n.options[o.pluginName] && n[o.pluginName][e] && n[o.pluginName][e]({ sortable: n, ...t }));
    });
  },
  initializePlugins(e, n, t, i) {
    Z.forEach((o) => {
      const r = o.pluginName;
      if (!e.options[r] && !o.initializeByDefault) return;
      let a = new o(e, n, e.options);
      a.sortable = e, a.options = e.options, e[r] = a, Object.assign(t, a.defaults);
    });
    for (let o in e.options) {
      if (!e.options.hasOwnProperty(o)) continue;
      let r = this.modifyOption(
        e,
        o,
        e.options[o]
      );
      typeof r < "u" && (e.options[o] = r);
    }
  },
  getEventProperties(e, n) {
    let t = {};
    return Z.forEach((i) => {
      typeof i.eventProperties == "function" && Object.assign(
        t,
        i.eventProperties.call(n[i.pluginName], e)
      );
    }), t;
  },
  modifyOption(e, n, t) {
    let i;
    return Z.forEach((o) => {
      e[o.pluginName] && o.optionListeners && typeof o.optionListeners[n] == "function" && (i = o.optionListeners[n].call(
        e[o.pluginName],
        t
      ));
    }), i;
  }
};
function gt({
  sortable: e,
  rootEl: n,
  name: t,
  targetEl: i,
  cloneEl: o,
  toEl: r,
  fromEl: a,
  oldIndex: s,
  newIndex: f,
  oldDraggableIndex: d,
  newDraggableIndex: p,
  originalEvent: g,
  putSortable: w,
  extraEventProperties: y
}) {
  if (e = e || n && n[A], !e) return;
  let D, F = e.options, G = "on" + t.charAt(0).toUpperCase() + t.substr(1);
  window.CustomEvent && !z && !ve ? D = new CustomEvent(t, {
    bubbles: !0,
    cancelable: !0
  }) : (D = document.createEvent("Event"), D.initEvent(t, !0, !0)), D.to = r || n, D.from = a || n, D.item = i || n, D.clone = o, D.oldIndex = s, D.newIndex = f, D.oldDraggableIndex = d, D.newDraggableIndex = p, D.originalEvent = g, D.pullMode = w ? w.lastPutMode : void 0;
  let N = {
    ...y,
    ...fe.getEventProperties(t, e)
  };
  for (let V in N)
    D[V] = N[V];
  n && n.dispatchEvent(D), F[G] && F[G].call(e, D);
}
let O = function(e, n, { evt: t, ...i } = {}) {
  fe.pluginEvent.bind(h)(e, n, {
    dragEl: l,
    parentEl: v,
    ghostEl: c,
    rootEl: _,
    nextEl: U,
    lastDownEl: me,
    cloneEl: E,
    cloneHidden: H,
    dragStarted: oe,
    putSortable: S,
    activeSortable: h.active,
    originalEvent: t,
    oldIndex: J,
    oldDraggableIndex: re,
    newIndex: P,
    newDraggableIndex: L,
    hideGhostForTarget: ot,
    unhideGhostForTarget: rt,
    cloneNowHidden() {
      H = !0;
    },
    cloneNowShown() {
      H = !1;
    },
    dispatchSortableEvent(o) {
      x({ sortable: n, name: o, originalEvent: t });
    },
    ...i
  });
};
function x(e) {
  gt({
    putSortable: S,
    cloneEl: E,
    targetEl: l,
    rootEl: _,
    oldIndex: J,
    oldDraggableIndex: re,
    newIndex: P,
    newDraggableIndex: L,
    ...e
  });
}
let l, v, c, _, U, me, E, H, J, P, re, L, ue, S, Q = !1, _e = !1, De = [], $, X, Oe, Ne, $e, je, oe, K, ae, le = !1, ce = !1, be, T, Ie = [], Ae = !1, Ee = [];
const Ce = typeof document < "u", he = ke, Ue = ve || z ? "cssFloat" : "float", mt = Ce && !qe && !ke && "draggable" in document.createElement("div"), tt = (function() {
  if (!Ce) return;
  if (z)
    return !1;
  let e = document.createElement("x");
  return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
})(), nt = function(e, n) {
  let t = u(e), i = parseInt(t.width) - parseInt(t.paddingLeft) - parseInt(t.paddingRight) - parseInt(t.borderLeftWidth) - parseInt(t.borderRightWidth), o = se(e, 0, n), r = se(e, 1, n), a = o && u(o), s = r && u(r), f = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + C(o).width, d = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + C(r).width;
  if (t.display === "flex")
    return t.flexDirection === "column" || t.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (t.display === "grid")
    return t.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (o && a.float && a.float !== "none") {
    let p = a.float === "left" ? "left" : "right";
    return r && (s.clear === "both" || s.clear === p) ? "vertical" : "horizontal";
  }
  return o && (a.display === "block" || a.display === "flex" || a.display === "table" || a.display === "grid" || f >= i && t[Ue] === "none" || r && t[Ue] === "none" && f + d > i) ? "vertical" : "horizontal";
}, bt = function(e, n, t) {
  let i = t ? e.left : e.top, o = t ? e.right : e.bottom, r = t ? e.width : e.height, a = t ? n.left : n.top, s = t ? n.right : n.bottom, f = t ? n.width : n.height;
  return i === a || o === s || i + r / 2 === a + f / 2;
}, wt = function(e, n) {
  let t;
  return De.some((i) => {
    const o = i[A].options.emptyInsertThreshold;
    if (!o || Xe(i)) return;
    const r = C(i), a = e >= r.left - o && e <= r.right + o, s = n >= r.top - o && n <= r.bottom + o;
    if (a && s)
      return t = i;
  }), t;
}, it = function(e) {
  function n(o, r) {
    return function(a, s, f, d) {
      let p = a.options.group.name && s.options.group.name && a.options.group.name === s.options.group.name;
      if (o == null && (r || p))
        return !0;
      if (o == null || o === !1)
        return !1;
      if (r && o === "clone")
        return o;
      if (typeof o == "function")
        return n(o(a, s, f, d), r)(
          a,
          s,
          f,
          d
        );
      {
        let g = (r ? a : s).options.group.name;
        return o === !0 || typeof o == "string" && o === g || o.join && o.indexOf(g) > -1;
      }
    };
  }
  let t = {}, i = e.group;
  (!i || typeof i != "object") && (i = { name: i }), t.name = i.name, t.checkPull = n(i.pull, !0), t.checkPut = n(i.put), t.revertClone = i.revertClone, e.group = t;
}, ot = function() {
  !tt && c && u(c, "display", "none");
}, rt = function() {
  !tt && c && u(c, "display", "");
};
Ce && !qe && document.addEventListener(
  "click",
  function(e) {
    if (_e)
      return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), _e = !1, !1;
  },
  !0
);
let j = function(e) {
  if (l) {
    e = e.touches ? e.touches[0] : e;
    let n = wt(e.clientX, e.clientY);
    if (n) {
      let t = {};
      for (let i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
      t.target = t.rootEl = n, t.preventDefault = void 0, t.stopPropagation = void 0, n[A]._onDragOver(t);
    }
  }
}, yt = function(e) {
  l && l.parentNode[A]._isOutsideThisEl(e.target);
};
function h(e, n) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw `Sortable: \`el\` must be an HTMLElement, not ${{}.toString.call(
      e
    )}`;
  this.el = e, this.options = n = Object.assign({}, n), e[A] = this;
  let t = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return nt(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(i, o) {
      i.setData("Text", o.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(
      window.devicePixelRatio,
      10
    ) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: { x: 0, y: 0 },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: h.supportPointer !== !1 && "PointerEvent" in window && (!ge || ke),
    emptyInsertThreshold: 5
  };
  fe.initializePlugins(this, e, t);
  for (let i in t)
    !(i in n) && (n[i] = t[i]);
  it(n);
  for (let i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = n.forceFallback ? !1 : mt, this.nativeDraggable && (this.options.touchStartThreshold = 1), n.supportPointer ? b(e, "pointerdown", this._onTapStart) : (b(e, "mousedown", this._onTapStart), b(e, "touchstart", this._onTapStart)), this.nativeDraggable && (b(e, "dragover", this), b(e, "dragenter", this)), De.push(this.el), n.store && n.store.get && this.sort(n.store.get(this) || []), Object.assign(this, ct());
}
h.prototype = /** @lends Sortable.prototype */
{
  constructor: h,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (K = null);
  },
  _getDirection: function(e, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, l) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (!e.cancelable) return;
    let n = this, t = this.el, i = this.options, o = i.preventOnFilter, r = e.type, a = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, s = (a || e).target, f = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || s, d = i.filter;
    if (Mt(t), !l && !(/mousedown|pointerdown/.test(r) && e.button !== 0 || i.disabled) && !f.isContentEditable && !(!this.nativeDraggable && ge && s && s.tagName.toUpperCase() === "SELECT") && (s = Y(s, i.draggable, t, !1), !(s && s.animated) && me !== s)) {
      if (J = k(s), re = k(s, i.draggable), typeof d == "function") {
        if (d.call(this, e, s, this)) {
          x({
            sortable: n,
            rootEl: f,
            name: "filter",
            targetEl: s,
            toEl: t,
            fromEl: t
          }), O("filter", n, { evt: e }), o && e.preventDefault();
          return;
        }
      } else if (d && (d = d.split(",").some(function(p) {
        if (p = Y(f, p.trim(), t, !1), p)
          return x({
            sortable: n,
            rootEl: p,
            name: "filter",
            targetEl: s,
            fromEl: t,
            toEl: t
          }), O("filter", n, { evt: e }), !0;
      }), d)) {
        o && e.preventDefault();
        return;
      }
      i.handle && !Y(f, i.handle, t, !1) || this._prepareDragStart(e, a, s);
    }
  },
  _prepareDragStart: function(e, n, t) {
    let i = this, o = i.el, r = i.options, a = o.ownerDocument, s;
    if (t && !l && t.parentNode === o) {
      let f = C(t);
      if (_ = o, l = t, v = l.parentNode, U = l.nextSibling, me = t, ue = r.group, h.dragged = l, $ = {
        target: l,
        clientX: (n || e).clientX,
        clientY: (n || e).clientY
      }, $e = $.clientX - f.left, je = $.clientY - f.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, l.style["will-change"] = "all", s = function() {
        if (O("delayEnded", i, { evt: e }), h.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !He && i.nativeDraggable && (l.draggable = !0), i._triggerDragStart(e, n), x({
          sortable: i,
          name: "choose",
          originalEvent: e
        }), I(l, r.chosenClass, !0);
      }, r.ignore.split(",").forEach(function(d) {
        Qe(l, d.trim(), Pe);
      }), b(a, "dragover", j), b(a, "mousemove", j), b(a, "touchmove", j), r.supportPointer ? (b(a, "pointerup", i._onDrop), !this.nativeDraggable && b(a, "pointercancel", i._onDrop)) : (b(a, "mouseup", i._onDrop), b(a, "touchend", i._onDrop), b(a, "touchcancel", i._onDrop)), He && this.nativeDraggable && (this.options.touchStartThreshold = 4, l.draggable = !0), O("delayStart", this, { evt: e }), r.delay && (!r.delayOnTouchOnly || n) && (!this.nativeDraggable || !(ve || z))) {
        if (h.eventCanceled) {
          this._onDrop();
          return;
        }
        r.supportPointer ? (b(a, "pointerup", i._disableDelayedDrag), b(a, "pointercancel", i._disableDelayedDrag)) : (b(a, "mouseup", i._disableDelayedDrag), b(a, "touchend", i._disableDelayedDrag), b(a, "touchcancel", i._disableDelayedDrag)), b(a, "mousemove", i._delayedDragTouchMoveHandler), b(a, "touchmove", i._delayedDragTouchMoveHandler), r.supportPointer && b(a, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(s, r.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    let n = e.touches ? e.touches[0] : e;
    Math.max(
      Math.abs(n.clientX - this._lastX),
      Math.abs(n.clientY - this._lastY)
    ) >= Math.floor(
      this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)
    ) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    l && Pe(l), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    let e = this.el.ownerDocument;
    m(e, "mouseup", this._disableDelayedDrag), m(e, "touchend", this._disableDelayedDrag), m(e, "touchcancel", this._disableDelayedDrag), m(e, "pointerup", this._disableDelayedDrag), m(e, "pointercancel", this._disableDelayedDrag), m(e, "mousemove", this._delayedDragTouchMoveHandler), m(e, "touchmove", this._delayedDragTouchMoveHandler), m(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, n) {
    n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? b(document, "pointermove", this._onTouchMove) : n ? b(document, "touchmove", this._onTouchMove) : b(document, "mousemove", this._onTouchMove) : (b(l, "dragend", this), b(_, "dragstart", this._onDragStart));
    try {
      document.selection ? we(() => {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, n) {
    if (Q = !1, _ && l) {
      O("dragStarted", this, { evt: n }), this.nativeDraggable && b(document, "dragover", yt);
      let t = this.options;
      !e && I(l, t.dragClass, !1), I(l, t.ghostClass, !0), h.active = this, e && this._appendGhost(), x({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (X) {
      this._lastX = X.clientX, this._lastY = X.clientY, ot();
      let e = document.elementFromPoint(
        X.clientX,
        X.clientY
      ), n = e;
      for (; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(
        X.clientX,
        X.clientY
      ), e !== n); )
        n = e;
      if (l.parentNode[A]._isOutsideThisEl(e), n)
        do {
          if (n[A]) {
            let t;
            if (t = n[A]._onDragOver({
              clientX: X.clientX,
              clientY: X.clientY,
              target: e,
              rootEl: n
            }), t && !this.options.dragoverBubble)
              break;
          }
          e = n;
        } while (
          /* jshint boss:true */
          n = Ke(n)
        );
      rt();
    }
  },
  _onTouchMove: function(e) {
    if ($) {
      let n = this.options, t = n.fallbackTolerance, i = n.fallbackOffset, o = e.touches ? e.touches[0] : e, r = c && ee(c, !0), a = c && r && r.a, s = c && r && r.d, f = he && T && Ge(T), d = (o.clientX - $.clientX + i.x) / (a || 1) + (f ? f[0] - Ie[0] : 0) / (a || 1), p = (o.clientY - $.clientY + i.y) / (s || 1) + (f ? f[1] - Ie[1] : 0) / (s || 1);
      if (!h.active && !Q) {
        if (t && Math.max(
          Math.abs(o.clientX - this._lastX),
          Math.abs(o.clientY - this._lastY)
        ) < t)
          return;
        this._onDragStart(e, !0);
      }
      if (c) {
        r ? (r.e += d - (Oe || 0), r.f += p - (Ne || 0)) : r = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: d,
          f: p
        };
        let g = `matrix(${r.a},${r.b},${r.c},${r.d},${r.e},${r.f})`;
        u(c, "webkitTransform", g), u(c, "mozTransform", g), u(c, "msTransform", g), u(c, "transform", g), Oe = d, Ne = p, X = o;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!c) {
      let e = this.options.fallbackOnBody ? document.body : _, n = C(l, !0, he, !0, e), t = this.options;
      if (he) {
        for (T = e; u(T, "position") === "static" && u(T, "transform") === "none" && T !== document; )
          T = T.parentNode;
        T !== document.body && T !== document.documentElement ? (T === document && (T = W()), n.top += T.scrollTop, n.left += T.scrollLeft) : T = W(), Ie = Ge(T);
      }
      c = l.cloneNode(!0), I(c, t.ghostClass, !1), I(c, t.fallbackClass, !0), I(c, t.dragClass, !0), u(c, "transition", ""), u(c, "transform", ""), u(c, "box-sizing", "border-box"), u(c, "margin", 0), u(c, "top", n.top), u(c, "left", n.left), u(c, "width", n.width), u(c, "height", n.height), u(c, "opacity", "0.8"), u(c, "position", he ? "absolute" : "fixed"), u(c, "zIndex", "100000"), u(c, "pointerEvents", "none"), h.ghost = c, e.appendChild(c), u(
        c,
        "transform-origin",
        $e / parseInt(c.style.width) * 100 + "% " + je / parseInt(c.style.height) * 100 + "%"
      );
    }
  },
  _onDragStart: function(e, n) {
    let t = this, i = e.dataTransfer, o = t.options;
    if (O("dragStart", this, { evt: e }), h.eventCanceled) {
      this._onDrop();
      return;
    }
    O("setupClone", this), h.eventCanceled || (E = Je(l), E.removeAttribute("id"), E.draggable = !1, E.style["will-change"] = "", this._hideClone(), I(E, this.options.chosenClass, !1), h.clone = E), t.cloneId = we(function() {
      O("clone", t), !h.eventCanceled && (t.options.removeCloneOnHide || _.insertBefore(E, l), t._hideClone(), x({
        sortable: t,
        name: "clone"
      }));
    }), !n && I(l, o.dragClass, !0), n ? (_e = !0, t._loopId = setInterval(t._emulateDragOver, 50)) : (m(document, "mouseup", t._onDrop), m(document, "touchend", t._onDrop), m(document, "touchcancel", t._onDrop), i && (i.effectAllowed = "move", o.setData && o.setData.call(t, i, l)), b(document, "drop", t), u(l, "transform", "translateZ(0)")), Q = !0, t._dragStartId = we(
      t._dragStarted.bind(t, n, e)
    ), b(document, "selectstart", t), oe = !0, window.getSelection().removeAllRanges(), ge && u(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    let n = this.el, t = e.target, i, o, r, a = this.options, s = a.group, f = h.active, d = ue === s, p = a.sort, g = S || f, w, y = this, D = !1;
    if (Ae) return;
    function F(M, R) {
      O(M, y, {
        evt: e,
        isOwner: d,
        axis: w ? "vertical" : "horizontal",
        revert: r,
        dragRect: i,
        targetRect: o,
        canSort: p,
        fromSortable: g,
        target: t,
        completed: N,
        onMove(q, Se) {
          return pe(
            _,
            n,
            l,
            i,
            q,
            C(q),
            e,
            Se
          );
        },
        changed: V,
        ...R
      });
    }
    function G() {
      F("dragOverAnimationCapture"), y.captureAnimationState(), y !== g && g.captureAnimationState();
    }
    function N(M) {
      return F("dragOverCompleted", { insertion: M }), M && (d ? f._hideClone() : f._showClone(y), y !== g && (I(
        l,
        S ? S.options.ghostClass : f.options.ghostClass,
        !1
      ), I(l, a.ghostClass, !0)), S !== y && y !== h.active ? S = y : y === h.active && S && (S = null), g === y && (y._ignoreWhileAnimating = t), y.animateAll(function() {
        F("dragOverAnimationComplete"), y._ignoreWhileAnimating = null;
      }), y !== g && (g.animateAll(), g._ignoreWhileAnimating = null)), (t === l && !l.animated || t === n && !t.animated) && (K = null), !a.dragoverBubble && !e.rootEl && t !== document && (l.parentNode[A]._isOutsideThisEl(e.target), !M && j(e)), !a.dragoverBubble && e.stopPropagation && e.stopPropagation(), D = !0;
    }
    function V() {
      P = k(l), L = k(l, a.draggable), x({
        sortable: y,
        name: "change",
        toEl: n,
        newIndex: P,
        newDraggableIndex: L,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), t = Y(t, a.draggable, n, !0), F("dragOver"), h.eventCanceled) return D;
    if (l.contains(e.target) || t.animated && t.animatingX && t.animatingY || y._ignoreWhileAnimating === t)
      return N(!1);
    if (_e = !1, f && !a.disabled && (d ? p || (r = v !== _) : S === this || (this.lastPutMode = ue.checkPull(
      this,
      f,
      l,
      e
    )) && s.checkPut(this, f, l, e))) {
      if (w = this._getDirection(e, t) === "vertical", i = C(l), F("dragOverValid"), h.eventCanceled) return D;
      if (r)
        return v = _, G(), this._hideClone(), F("revert"), h.eventCanceled || (U ? _.insertBefore(l, U) : _.appendChild(l)), N(!0);
      let M = Xe(n, a.draggable);
      if (!M || vt(e, w, this) && !M.animated) {
        if (M === l)
          return N(!1);
        if (M && n === e.target && (t = M), t && (o = C(t)), pe(
          _,
          n,
          l,
          i,
          t,
          o,
          e,
          !!t
        ) !== !1)
          return G(), M && M.nextSibling ? n.insertBefore(l, M.nextSibling) : n.appendChild(l), v = n, V(), N(!0);
      } else if (M && Et(e, w, this)) {
        let R = se(n, 0, a, !0);
        if (R === l)
          return N(!1);
        if (t = R, o = C(t), pe(
          _,
          n,
          l,
          i,
          t,
          o,
          e,
          !1
        ) !== !1)
          return G(), n.insertBefore(l, R), v = n, V(), N(!0);
      } else if (t.parentNode === n) {
        o = C(t);
        let R = 0, q, Se = l.parentNode !== n, Ye = !bt(
          l.animated && l.toRect || i,
          t.animated && t.toRect || o,
          w
        ), Fe = w ? "top" : "left", te = ze(t, "top", "top") || ze(l, "top", "top"), at = te ? te.scrollTop : void 0;
        K !== t && (q = o[Fe], le = !1, ce = !Ye && a.invertSwap || Se), R = Ct(
          e,
          t,
          o,
          w,
          Ye ? 1 : a.swapThreshold,
          a.invertedSwapThreshold == null ? a.swapThreshold : a.invertedSwapThreshold,
          ce,
          K === t
        );
        let ne;
        if (R !== 0) {
          let Le = k(l);
          do
            Le -= R, ne = v.children[Le];
          while (ne && (u(ne, "display") === "none" || ne === c));
        }
        if (R === 0 || ne === t)
          return N(!1);
        K = t, ae = R;
        let Be = t.nextElementSibling, ie = !1;
        ie = R === 1;
        let de = pe(
          _,
          n,
          l,
          i,
          t,
          o,
          e,
          ie
        );
        if (de !== !1)
          return (de === 1 || de === -1) && (ie = de === 1), Ae = !0, setTimeout(Dt, 30), G(), ie && !Be ? n.appendChild(l) : t.parentNode.insertBefore(
            l,
            ie ? Be : t
          ), te && ut(
            te,
            0,
            at - te.scrollTop
          ), v = l.parentNode, q !== void 0 && !ce && (be = Math.abs(
            q - C(t)[Fe]
          )), V(), N(!0);
      }
      if (n.contains(l))
        return N(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    m(document, "mousemove", this._onTouchMove), m(document, "touchmove", this._onTouchMove), m(document, "pointermove", this._onTouchMove), m(document, "dragover", j), m(document, "mousemove", j), m(document, "touchmove", j);
  },
  _offUpEvents: function() {
    let e = this.el.ownerDocument;
    m(e, "mouseup", this._onDrop), m(e, "touchend", this._onDrop), m(e, "pointerup", this._onDrop), m(e, "pointercancel", this._onDrop), m(e, "touchcancel", this._onDrop), m(document, "selectstart", this);
  },
  _onDrop: function(e) {
    let n = this.el, t = this.options;
    if (P = k(l), L = k(l, t.draggable), O("drop", this, {
      evt: e
    }), v = l && l.parentNode, P = k(l), L = k(l, t.draggable), h.eventCanceled) {
      this._nulling();
      return;
    }
    Q = !1, ce = !1, le = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Re(this.cloneId), Re(this._dragStartId), this.nativeDraggable && (m(document, "drop", this), m(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ge && u(document.body, "user-select", ""), u(l, "transform", ""), e && (oe && (e.cancelable && e.preventDefault(), !t.dropBubble && e.stopPropagation()), c && c.parentNode && c.parentNode.removeChild(c), (_ === v || S && S.lastPutMode !== "clone") && E && E.parentNode && E.parentNode.removeChild(E), l && (this.nativeDraggable && m(l, "dragend", this), Pe(l), l.style["will-change"] = "", oe && !Q && I(
      l,
      S ? S.options.ghostClass : this.options.ghostClass,
      !1
    ), I(l, this.options.chosenClass, !1), x({
      sortable: this,
      name: "unchoose",
      toEl: v,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), _ !== v ? (P >= 0 && (x({
      rootEl: v,
      name: "add",
      toEl: v,
      fromEl: _,
      originalEvent: e
    }), x({
      sortable: this,
      name: "remove",
      toEl: v,
      originalEvent: e
    }), x({
      rootEl: v,
      name: "sort",
      toEl: v,
      fromEl: _,
      originalEvent: e
    }), x({
      sortable: this,
      name: "sort",
      toEl: v,
      originalEvent: e
    })), S && S.save()) : P !== J && P >= 0 && (x({
      sortable: this,
      name: "update",
      toEl: v,
      originalEvent: e
    }), x({
      sortable: this,
      name: "sort",
      toEl: v,
      originalEvent: e
    })), h.active && ((P == null || P === -1) && (P = J, L = re), x({
      sortable: this,
      name: "end",
      toEl: v,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    O("nulling", this), _ = l = v = c = U = E = me = H = $ = X = oe = P = L = J = re = K = ae = S = ue = h.dragged = h.ghost = h.clone = h.active = null;
    let e = this.el;
    Ee.forEach(function(n) {
      e.contains(n) && (n.checked = !0);
    }), Ee.length = Oe = Ne = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        l && (this._onDragOver(e), _t(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    let e = [], n, t = this.el.children, i = 0, o = t.length, r = this.options;
    for (; i < o; i++)
      n = t[i], Y(n, r.draggable, this.el, !1) && e.push(n.getAttribute(r.dataIdAttr) || Tt(n));
    return e;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(e, n) {
    let t = {}, i = this.el;
    this.toArray().forEach(function(o, r) {
      let a = i.children[r];
      Y(a, this.options.draggable, i, !1) && (t[o] = a);
    }, this), n && this.captureAnimationState(), e.forEach(function(o) {
      t[o] && (i.removeChild(t[o]), i.appendChild(t[o]));
    }), n && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    let e = this.options.store;
    e && e.set && e.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(e, n) {
    return Y(e, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(e, n) {
    let t = this.options;
    if (n === void 0)
      return t[e];
    {
      let i = fe.modifyOption(this, e, n);
      typeof i < "u" ? t[e] = i : t[e] = n, e === "group" && it(t);
    }
  },
  /**
   * Destroy
   */
  destroy: function() {
    O("destroy", this);
    let e = this.el;
    e[A] = null, m(e, "mousedown", this._onTapStart), m(e, "touchstart", this._onTapStart), m(e, "pointerdown", this._onTapStart), this.nativeDraggable && (m(e, "dragover", this), m(e, "dragenter", this)), Array.prototype.forEach.call(
      e.querySelectorAll("[draggable]"),
      function(n) {
        n.removeAttribute("draggable");
      }
    ), this._onDrop(), this._disableDelayedDragEvents(), De.splice(De.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!H) {
      if (O("hideClone", this), h.eventCanceled) return;
      u(E, "display", "none"), this.options.removeCloneOnHide && E.parentNode && E.parentNode.removeChild(E), H = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (H) {
      if (O("showClone", this), h.eventCanceled) return;
      l.parentNode == _ && !this.options.group.revertClone ? _.insertBefore(E, l) : U ? _.insertBefore(E, U) : _.appendChild(E), this.options.group.revertClone && this.animate(l, E), u(E, "display", ""), H = !1;
    }
  }
};
function _t(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function pe(e, n, t, i, o, r, a, s) {
  let f, d = e[A], p = d.options.onMove, g;
  return window.CustomEvent && !z && !ve ? f = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (f = document.createEvent("Event"), f.initEvent("move", !0, !0)), f.to = n, f.from = e, f.dragged = t, f.draggedRect = i, f.related = o || n, f.relatedRect = r || C(n), f.willInsertAfter = s, f.originalEvent = a, e.dispatchEvent(f), p && (g = p.call(d, f, a)), g;
}
function Pe(e) {
  e.draggable = !1;
}
function Dt() {
  Ae = !1;
}
function Et(e, n, t) {
  let i = C(se(t.el, 0, t.options, !0));
  const o = et(
    t.el,
    t.options,
    c
  ), r = 10;
  return n ? e.clientX < o.left - r || e.clientY < i.top && e.clientX < i.right : e.clientY < o.top - r || e.clientY < i.bottom && e.clientX < i.left;
}
function vt(e, n, t) {
  const i = C(
    Xe(t.el, t.options.draggable)
  ), o = et(
    t.el,
    t.options,
    c
  ), r = 10;
  return n ? e.clientX > o.right + r || e.clientY > i.bottom && e.clientX > i.left : e.clientY > o.bottom + r || e.clientX > i.right && e.clientY > i.top;
}
function Ct(e, n, t, i, o, r, a, s) {
  let f = i ? e.clientY : e.clientX, d = i ? t.height : t.width, p = i ? t.top : t.left, g = i ? t.bottom : t.right, w = !1;
  if (!a) {
    if (s && be < d * o) {
      if (!le && (ae === 1 ? f > p + d * r / 2 : f < g - d * r / 2) && (le = !0), le)
        w = !0;
      else if (ae === 1 ? f < p + be : f > g - be)
        return -ae;
    } else if (f > p + d * (1 - o) / 2 && f < g - d * (1 - o) / 2)
      return St(n);
  }
  return w = w || a, w && (f < p + d * r / 2 || f > g - d * r / 2) ? f > p + d / 2 ? 1 : -1 : 0;
}
function St(e) {
  return k(l) < k(e) ? 1 : -1;
}
function Tt(e) {
  let n = e.tagName + e.className + e.src + e.href + e.textContent, t = n.length, i = 0;
  for (; t--; )
    i += n.charCodeAt(t);
  return i.toString(36);
}
function Mt(e) {
  Ee.length = 0;
  let n = e.getElementsByTagName("input"), t = n.length;
  for (; t--; ) {
    let i = n[t];
    i.checked && Ee.push(i);
  }
}
function we(e) {
  return setTimeout(e, 0);
}
function Re(e) {
  return clearTimeout(e);
}
Ce && b(document, "touchmove", function(e) {
  (h.active || Q) && e.cancelable && e.preventDefault();
});
h.utils = {
  on: b,
  off: m,
  css: u,
  find: Qe,
  is: function(e, n) {
    return !!Y(e, n, e, !1);
  },
  extend: ft,
  throttle: dt,
  closest: Y,
  toggleClass: I,
  clone: Je,
  index: k,
  nextTick: we,
  cancelNextTick: Re,
  detectDirection: nt,
  getChild: se,
  expando: A
};
h.get = function(e) {
  return e[A];
};
h.mount = function(...e) {
  e[0].constructor === Array && (e = e[0]), e.forEach((n) => {
    if (!n.prototype || !n.prototype.constructor)
      throw `Sortable: Mounted plugin must be a constructor function, not ${{}.toString.call(
        n
      )}`;
    n.utils && (h.utils = { ...h.utils, ...n.utils }), fe.mount(n);
  });
};
h.create = function(e, n) {
  return new h(e, n);
};
h.version = lt;
export {
  h as default
};
