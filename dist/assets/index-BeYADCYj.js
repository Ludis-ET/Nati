function Rd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in e)) {
          const i = Object.getOwnPropertyDescriptor(r, s);
          i &&
            Object.defineProperty(
              e,
              s,
              i.get ? i : { enumerable: !0, get: () => r[s] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
function _d(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Zo = { exports: {} },
  Cl = {},
  Jo = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fr = Symbol.for("react.element"),
  Ld = Symbol.for("react.portal"),
  Ad = Symbol.for("react.fragment"),
  zd = Symbol.for("react.strict_mode"),
  Fd = Symbol.for("react.profiler"),
  Dd = Symbol.for("react.provider"),
  Od = Symbol.for("react.context"),
  Id = Symbol.for("react.forward_ref"),
  Ud = Symbol.for("react.suspense"),
  Hd = Symbol.for("react.memo"),
  Bd = Symbol.for("react.lazy"),
  wa = Symbol.iterator;
function $d(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wa && e[wa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var bo = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  eu = Object.assign,
  tu = {};
function xn(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = tu),
    (this.updater = n || bo));
}
xn.prototype.isReactComponent = {};
xn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
xn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function nu() {}
nu.prototype = xn.prototype;
function wi(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = tu),
    (this.updater = n || bo));
}
var Si = (wi.prototype = new nu());
Si.constructor = wi;
eu(Si, xn.prototype);
Si.isPureReactComponent = !0;
var Sa = Array.isArray,
  ru = Object.prototype.hasOwnProperty,
  Ci = { current: null },
  lu = { key: !0, ref: !0, __self: !0, __source: !0 };
function su(e, t, n) {
  var r,
    s = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      ru.call(t, r) && !lu.hasOwnProperty(r) && (s[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) s.children = n;
  else if (1 < u) {
    for (var o = Array(u), c = 0; c < u; c++) o[c] = arguments[c + 2];
    s.children = o;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) s[r] === void 0 && (s[r] = u[r]);
  return {
    $$typeof: fr,
    type: e,
    key: i,
    ref: a,
    props: s,
    _owner: Ci.current,
  };
}
function Vd(e, t) {
  return {
    $$typeof: fr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ei(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fr;
}
function Gd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ca = /\/+/g;
function Ql(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Gd("" + e.key)
    : t.toString(36);
}
function Br(e, t, n, r, s) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case fr:
          case Ld:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (s = s(a)),
      (e = r === "" ? "." + Ql(a, 0) : r),
      Sa(s)
        ? ((n = ""),
          e != null && (n = e.replace(Ca, "$&/") + "/"),
          Br(s, t, n, "", function (c) {
            return c;
          }))
        : s != null &&
          (Ei(s) &&
            (s = Vd(
              s,
              n +
                (!s.key || (a && a.key === s.key)
                  ? ""
                  : ("" + s.key).replace(Ca, "$&/") + "/") +
                e,
            )),
          t.push(s)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), Sa(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var o = r + Ql(i, u);
      a += Br(i, t, n, o, s);
    }
  else if (((o = $d(e)), typeof o == "function"))
    for (e = o.call(e), u = 0; !(i = e.next()).done; )
      ((i = i.value), (o = r + Ql(i, u++)), (a += Br(i, t, n, o, s)));
  else if (i === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return a;
}
function yr(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    Br(e, r, "", "", function (i) {
      return t.call(n, i, s++);
    }),
    r
  );
}
function Wd(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var he = { current: null },
  $r = { transition: null },
  Yd = {
    ReactCurrentDispatcher: he,
    ReactCurrentBatchConfig: $r,
    ReactCurrentOwner: Ci,
  };
function iu() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = {
  map: yr,
  forEach: function (e, t, n) {
    yr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      yr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      yr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ei(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
F.Component = xn;
F.Fragment = Ad;
F.Profiler = Fd;
F.PureComponent = wi;
F.StrictMode = zd;
F.Suspense = Ud;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yd;
F.act = iu;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = eu({}, e.props),
    s = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Ci.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (o in t)
      ru.call(t, o) &&
        !lu.hasOwnProperty(o) &&
        (r[o] = t[o] === void 0 && u !== void 0 ? u[o] : t[o]);
  }
  var o = arguments.length - 2;
  if (o === 1) r.children = n;
  else if (1 < o) {
    u = Array(o);
    for (var c = 0; c < o; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: fr, type: e.type, key: s, ref: i, props: r, _owner: a };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: Od,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Dd, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = su;
F.createFactory = function (e) {
  var t = su.bind(null, e);
  return ((t.type = e), t);
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: Id, render: e };
};
F.isValidElement = Ei;
F.lazy = function (e) {
  return { $$typeof: Bd, _payload: { _status: -1, _result: e }, _init: Wd };
};
F.memo = function (e, t) {
  return { $$typeof: Hd, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = $r.transition;
  $r.transition = {};
  try {
    e();
  } finally {
    $r.transition = t;
  }
};
F.unstable_act = iu;
F.useCallback = function (e, t) {
  return he.current.useCallback(e, t);
};
F.useContext = function (e) {
  return he.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return he.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return he.current.useEffect(e, t);
};
F.useId = function () {
  return he.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return he.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return he.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return he.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return he.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return he.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return he.current.useRef(e);
};
F.useState = function (e) {
  return he.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return he.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return he.current.useTransition();
};
F.version = "18.3.1";
Jo.exports = F;
var j = Jo.exports;
const au = _d(j),
  qd = Rd({ __proto__: null, default: au }, [j]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qd = j,
  Kd = Symbol.for("react.element"),
  Xd = Symbol.for("react.fragment"),
  Zd = Object.prototype.hasOwnProperty,
  Jd = Qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  bd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ou(e, t, n) {
  var r,
    s = {},
    i = null,
    a = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref));
  for (r in t) Zd.call(t, r) && !bd.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: Kd,
    type: e,
    key: i,
    ref: a,
    props: s,
    _owner: Jd.current,
  };
}
Cl.Fragment = Xd;
Cl.jsx = ou;
Cl.jsxs = ou;
Zo.exports = Cl;
var l = Zo.exports,
  Ns = {},
  uu = { exports: {} },
  Ce = {},
  cu = { exports: {} },
  du = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, _) {
    var z = E.length;
    E.push(_);
    e: for (; 0 < z; ) {
      var K = (z - 1) >>> 1,
        te = E[K];
      if (0 < s(te, _)) ((E[K] = _), (E[z] = te), (z = K));
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var _ = E[0],
      z = E.pop();
    if (z !== _) {
      E[0] = z;
      e: for (var K = 0, te = E.length, gr = te >>> 1; K < gr; ) {
        var Pt = 2 * (K + 1) - 1,
          ql = E[Pt],
          Tt = Pt + 1,
          xr = E[Tt];
        if (0 > s(ql, z))
          Tt < te && 0 > s(xr, ql)
            ? ((E[K] = xr), (E[Tt] = z), (K = Tt))
            : ((E[K] = ql), (E[Pt] = z), (K = Pt));
        else if (Tt < te && 0 > s(xr, z)) ((E[K] = xr), (E[Tt] = z), (K = Tt));
        else break e;
      }
    }
    return _;
  }
  function s(E, _) {
    var z = E.sortIndex - _.sortIndex;
    return z !== 0 ? z : E.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      u = a.now();
    e.unstable_now = function () {
      return a.now() - u;
    };
  }
  var o = [],
    c = [],
    v = 1,
    m = null,
    p = 3,
    g = !1,
    y = !1,
    N = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(E) {
    for (var _ = n(c); _ !== null; ) {
      if (_.callback === null) r(c);
      else if (_.startTime <= E)
        (r(c), (_.sortIndex = _.expirationTime), t(o, _));
      else break;
      _ = n(c);
    }
  }
  function x(E) {
    if (((N = !1), h(E), !y))
      if (n(o) !== null) ((y = !0), Wl(S));
      else {
        var _ = n(c);
        _ !== null && Yl(x, _.startTime - E);
      }
  }
  function S(E, _) {
    ((y = !1), N && ((N = !1), f(M), (M = -1)), (g = !0));
    var z = p;
    try {
      for (
        h(_), m = n(o);
        m !== null && (!(m.expirationTime > _) || (E && !je()));
      ) {
        var K = m.callback;
        if (typeof K == "function") {
          ((m.callback = null), (p = m.priorityLevel));
          var te = K(m.expirationTime <= _);
          ((_ = e.unstable_now()),
            typeof te == "function" ? (m.callback = te) : m === n(o) && r(o),
            h(_));
        } else r(o);
        m = n(o);
      }
      if (m !== null) var gr = !0;
      else {
        var Pt = n(c);
        (Pt !== null && Yl(x, Pt.startTime - _), (gr = !1));
      }
      return gr;
    } finally {
      ((m = null), (p = z), (g = !1));
    }
  }
  var P = !1,
    T = null,
    M = -1,
    V = 5,
    L = -1;
  function je() {
    return !(e.unstable_now() - L < V);
  }
  function wn() {
    if (T !== null) {
      var E = e.unstable_now();
      L = E;
      var _ = !0;
      try {
        _ = T(!0, E);
      } finally {
        _ ? Sn() : ((P = !1), (T = null));
      }
    } else P = !1;
  }
  var Sn;
  if (typeof d == "function")
    Sn = function () {
      d(wn);
    };
  else if (typeof MessageChannel < "u") {
    var ka = new MessageChannel(),
      Md = ka.port2;
    ((ka.port1.onmessage = wn),
      (Sn = function () {
        Md.postMessage(null);
      }));
  } else
    Sn = function () {
      w(wn, 0);
    };
  function Wl(E) {
    ((T = E), P || ((P = !0), Sn()));
  }
  function Yl(E, _) {
    M = w(function () {
      E(e.unstable_now());
    }, _);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), Wl(S));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (V = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(o);
    }),
    (e.unstable_next = function (E) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = p;
      }
      var z = p;
      p = _;
      try {
        return E();
      } finally {
        p = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, _) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var z = p;
      p = E;
      try {
        return _();
      } finally {
        p = z;
      }
    }),
    (e.unstable_scheduleCallback = function (E, _, z) {
      var K = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? K + z : K))
          : (z = K),
        E)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = z + te),
        (E = {
          id: v++,
          callback: _,
          priorityLevel: E,
          startTime: z,
          expirationTime: te,
          sortIndex: -1,
        }),
        z > K
          ? ((E.sortIndex = z),
            t(c, E),
            n(o) === null &&
              E === n(c) &&
              (N ? (f(M), (M = -1)) : (N = !0), Yl(x, z - K)))
          : ((E.sortIndex = te), t(o, E), y || g || ((y = !0), Wl(S))),
        E
      );
    }),
    (e.unstable_shouldYield = je),
    (e.unstable_wrapCallback = function (E) {
      var _ = p;
      return function () {
        var z = p;
        p = _;
        try {
          return E.apply(this, arguments);
        } finally {
          p = z;
        }
      };
    }));
})(du);
cu.exports = du;
var ef = cu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tf = j,
  Se = ef;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var fu = new Set(),
  qn = {};
function Bt(e, t) {
  (cn(e, t), cn(e + "Capture", t));
}
function cn(e, t) {
  for (qn[e] = t, e = 0; e < t.length; e++) fu.add(t[e]);
}
var Je = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ks = Object.prototype.hasOwnProperty,
  nf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ea = {},
  Pa = {};
function rf(e) {
  return ks.call(Pa, e)
    ? !0
    : ks.call(Ea, e)
      ? !1
      : nf.test(e)
        ? (Pa[e] = !0)
        : ((Ea[e] = !0), !1);
}
function lf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function sf(e, t, n, r) {
  if (t === null || typeof t > "u" || lf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pe(e, t, n, r, s, i, a) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a));
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ie[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ie[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ie[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ie[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ie[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ie[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ie[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Pi = /[\-:]([a-z])/g;
function Ti(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Pi, Ti);
    ie[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Pi, Ti);
    ie[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Pi, Ti);
  ie[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ie[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ie[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Mi(e, t, n, r) {
  var s = ie.hasOwnProperty(t) ? ie[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (sf(t, n, s, r) && (n = null),
    r || s === null
      ? rf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
        ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
        : ((t = s.attributeName),
          (r = s.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((s = s.type),
              (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var nt = tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  jr = Symbol.for("react.element"),
  Wt = Symbol.for("react.portal"),
  Yt = Symbol.for("react.fragment"),
  Ri = Symbol.for("react.strict_mode"),
  ws = Symbol.for("react.profiler"),
  hu = Symbol.for("react.provider"),
  pu = Symbol.for("react.context"),
  _i = Symbol.for("react.forward_ref"),
  Ss = Symbol.for("react.suspense"),
  Cs = Symbol.for("react.suspense_list"),
  Li = Symbol.for("react.memo"),
  it = Symbol.for("react.lazy"),
  mu = Symbol.for("react.offscreen"),
  Ta = Symbol.iterator;
function Cn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ta && e[Ta]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var q = Object.assign,
  Kl;
function zn(e) {
  if (Kl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Kl = (t && t[1]) || "";
    }
  return (
    `
` +
    Kl +
    e
  );
}
var Xl = !1;
function Zl(e, t) {
  if (!e || Xl) return "";
  Xl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var s = c.stack.split(`
`),
          i = r.stack.split(`
`),
          a = s.length - 1,
          u = i.length - 1;
        1 <= a && 0 <= u && s[a] !== i[u];
      )
        u--;
      for (; 1 <= a && 0 <= u; a--, u--)
        if (s[a] !== i[u]) {
          if (a !== 1 || u !== 1)
            do
              if ((a--, u--, 0 > u || s[a] !== i[u])) {
                var o =
                  `
` + s[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    o.includes("<anonymous>") &&
                    (o = o.replace("<anonymous>", e.displayName)),
                  o
                );
              }
            while (1 <= a && 0 <= u);
          break;
        }
    }
  } finally {
    ((Xl = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? zn(e) : "";
}
function af(e) {
  switch (e.tag) {
    case 5:
      return zn(e.type);
    case 16:
      return zn("Lazy");
    case 13:
      return zn("Suspense");
    case 19:
      return zn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Zl(e.type, !1)), e);
    case 11:
      return ((e = Zl(e.type.render, !1)), e);
    case 1:
      return ((e = Zl(e.type, !0)), e);
    default:
      return "";
  }
}
function Es(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Yt:
      return "Fragment";
    case Wt:
      return "Portal";
    case ws:
      return "Profiler";
    case Ri:
      return "StrictMode";
    case Ss:
      return "Suspense";
    case Cs:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case pu:
        return (e.displayName || "Context") + ".Consumer";
      case hu:
        return (e._context.displayName || "Context") + ".Provider";
      case _i:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Li:
        return (
          (t = e.displayName || null),
          t !== null ? t : Es(e.type) || "Memo"
        );
      case it:
        ((t = e._payload), (e = e._init));
        try {
          return Es(e(t));
        } catch {}
    }
  return null;
}
function of(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Es(t);
    case 8:
      return t === Ri ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function kt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function vu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function uf(e) {
  var t = vu(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (a) {
          ((r = "" + a), i.call(this, a));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Nr(e) {
  e._valueTracker || (e._valueTracker = uf(e));
}
function gu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = vu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function br(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ps(e, t) {
  var n = t.checked;
  return q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ma(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = kt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function xu(e, t) {
  ((t = t.checked), t != null && Mi(e, "checked", t, !1));
}
function Ts(e, t) {
  xu(e, t);
  var n = kt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Ms(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ms(e, t.type, kt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Ra(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function Ms(e, t, n) {
  (t !== "number" || br(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Fn = Array.isArray;
function rn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      ((s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + kt(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        ((e[s].selected = !0), r && (e[s].defaultSelected = !0));
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function Rs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function _a(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (Fn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: kt(n) };
}
function yu(e, t) {
  var n = kt(t.value),
    r = kt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function La(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ju(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function _s(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ju(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var kr,
  Nu = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        kr = kr || document.createElement("div"),
          kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = kr.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Qn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var In = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  cf = ["Webkit", "ms", "Moz", "O"];
Object.keys(In).forEach(function (e) {
  cf.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (In[t] = In[e]));
  });
});
function ku(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (In.hasOwnProperty(e) && In[e])
      ? ("" + t).trim()
      : t + "px";
}
function wu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = ku(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s));
    }
}
var df = q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Ls(e, t) {
  if (t) {
    if (df[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function As(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var zs = null;
function Ai(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Fs = null,
  ln = null,
  sn = null;
function Aa(e) {
  if ((e = mr(e))) {
    if (typeof Fs != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Rl(t)), Fs(e.stateNode, e.type, t));
  }
}
function Su(e) {
  ln ? (sn ? sn.push(e) : (sn = [e])) : (ln = e);
}
function Cu() {
  if (ln) {
    var e = ln,
      t = sn;
    if (((sn = ln = null), Aa(e), t)) for (e = 0; e < t.length; e++) Aa(t[e]);
  }
}
function Eu(e, t) {
  return e(t);
}
function Pu() {}
var Jl = !1;
function Tu(e, t, n) {
  if (Jl) return e(t, n);
  Jl = !0;
  try {
    return Eu(e, t, n);
  } finally {
    ((Jl = !1), (ln !== null || sn !== null) && (Pu(), Cu()));
  }
}
function Kn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Rl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var Ds = !1;
if (Je)
  try {
    var En = {};
    (Object.defineProperty(En, "passive", {
      get: function () {
        Ds = !0;
      },
    }),
      window.addEventListener("test", En, En),
      window.removeEventListener("test", En, En));
  } catch {
    Ds = !1;
  }
function ff(e, t, n, r, s, i, a, u, o) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (v) {
    this.onError(v);
  }
}
var Un = !1,
  el = null,
  tl = !1,
  Os = null,
  hf = {
    onError: function (e) {
      ((Un = !0), (el = e));
    },
  };
function pf(e, t, n, r, s, i, a, u, o) {
  ((Un = !1), (el = null), ff.apply(hf, arguments));
}
function mf(e, t, n, r, s, i, a, u, o) {
  if ((pf.apply(this, arguments), Un)) {
    if (Un) {
      var c = el;
      ((Un = !1), (el = null));
    } else throw Error(k(198));
    tl || ((tl = !0), (Os = c));
  }
}
function $t(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Mu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function za(e) {
  if ($t(e) !== e) throw Error(k(188));
}
function vf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = $t(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i; ) {
        if (i === n) return (za(s), e);
        if (i === r) return (za(s), t);
        i = i.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) ((n = s), (r = i));
    else {
      for (var a = !1, u = s.child; u; ) {
        if (u === n) {
          ((a = !0), (n = s), (r = i));
          break;
        }
        if (u === r) {
          ((a = !0), (r = s), (n = i));
          break;
        }
        u = u.sibling;
      }
      if (!a) {
        for (u = i.child; u; ) {
          if (u === n) {
            ((a = !0), (n = i), (r = s));
            break;
          }
          if (u === r) {
            ((a = !0), (r = i), (n = s));
            break;
          }
          u = u.sibling;
        }
        if (!a) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function Ru(e) {
  return ((e = vf(e)), e !== null ? _u(e) : null);
}
function _u(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = _u(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Lu = Se.unstable_scheduleCallback,
  Fa = Se.unstable_cancelCallback,
  gf = Se.unstable_shouldYield,
  xf = Se.unstable_requestPaint,
  Z = Se.unstable_now,
  yf = Se.unstable_getCurrentPriorityLevel,
  zi = Se.unstable_ImmediatePriority,
  Au = Se.unstable_UserBlockingPriority,
  nl = Se.unstable_NormalPriority,
  jf = Se.unstable_LowPriority,
  zu = Se.unstable_IdlePriority,
  El = null,
  Ve = null;
function Nf(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == "function")
    try {
      Ve.onCommitFiberRoot(El, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : Sf,
  kf = Math.log,
  wf = Math.LN2;
function Sf(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((kf(e) / wf) | 0)) | 0);
}
var wr = 64,
  Sr = 4194304;
function Dn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function rl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var u = a & ~s;
    u !== 0 ? (r = Dn(u)) : ((i &= a), i !== 0 && (r = Dn(i)));
  } else ((a = n & ~s), a !== 0 ? (r = Dn(a)) : i !== 0 && (r = Dn(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (i = t & -t), s >= i || (s === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Oe(t)), (s = 1 << n), (r |= e[n]), (t &= ~s));
  return r;
}
function Cf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ef(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var a = 31 - Oe(i),
      u = 1 << a,
      o = s[a];
    (o === -1
      ? (!(u & n) || u & r) && (s[a] = Cf(u, t))
      : o <= t && (e.expiredLanes |= u),
      (i &= ~u));
  }
}
function Is(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Fu() {
  var e = wr;
  return ((wr <<= 1), !(wr & 4194240) && (wr = 64), e);
}
function bl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function hr(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n));
}
function Pf(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - Oe(n),
      i = 1 << s;
    ((t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~i));
  }
}
function Fi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n),
      s = 1 << r;
    ((s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s));
  }
}
var I = 0;
function Du(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Ou,
  Di,
  Iu,
  Uu,
  Hu,
  Us = !1,
  Cr = [],
  ht = null,
  pt = null,
  mt = null,
  Xn = new Map(),
  Zn = new Map(),
  ot = [],
  Tf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Da(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ht = null;
      break;
    case "dragenter":
    case "dragleave":
      pt = null;
      break;
    case "mouseover":
    case "mouseout":
      mt = null;
      break;
    case "pointerover":
    case "pointerout":
      Xn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zn.delete(t.pointerId);
  }
}
function Pn(e, t, n, r, s, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s],
      }),
      t !== null && ((t = mr(t)), t !== null && Di(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function Mf(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return ((ht = Pn(ht, e, t, n, r, s)), !0);
    case "dragenter":
      return ((pt = Pn(pt, e, t, n, r, s)), !0);
    case "mouseover":
      return ((mt = Pn(mt, e, t, n, r, s)), !0);
    case "pointerover":
      var i = s.pointerId;
      return (Xn.set(i, Pn(Xn.get(i) || null, e, t, n, r, s)), !0);
    case "gotpointercapture":
      return (
        (i = s.pointerId),
        Zn.set(i, Pn(Zn.get(i) || null, e, t, n, r, s)),
        !0
      );
  }
  return !1;
}
function Bu(e) {
  var t = _t(e.target);
  if (t !== null) {
    var n = $t(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Mu(n)), t !== null)) {
          ((e.blockedOn = t),
            Hu(e.priority, function () {
              Iu(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Vr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Hs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((zs = r), n.target.dispatchEvent(r), (zs = null));
    } else return ((t = mr(n)), t !== null && Di(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Oa(e, t, n) {
  Vr(e) && n.delete(t);
}
function Rf() {
  ((Us = !1),
    ht !== null && Vr(ht) && (ht = null),
    pt !== null && Vr(pt) && (pt = null),
    mt !== null && Vr(mt) && (mt = null),
    Xn.forEach(Oa),
    Zn.forEach(Oa));
}
function Tn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Us ||
      ((Us = !0),
      Se.unstable_scheduleCallback(Se.unstable_NormalPriority, Rf)));
}
function Jn(e) {
  function t(s) {
    return Tn(s, e);
  }
  if (0 < Cr.length) {
    Tn(Cr[0], e);
    for (var n = 1; n < Cr.length; n++) {
      var r = Cr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ht !== null && Tn(ht, e),
      pt !== null && Tn(pt, e),
      mt !== null && Tn(mt, e),
      Xn.forEach(t),
      Zn.forEach(t),
      n = 0;
    n < ot.length;
    n++
  )
    ((r = ot[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < ot.length && ((n = ot[0]), n.blockedOn === null); )
    (Bu(n), n.blockedOn === null && ot.shift());
}
var an = nt.ReactCurrentBatchConfig,
  ll = !0;
function _f(e, t, n, r) {
  var s = I,
    i = an.transition;
  an.transition = null;
  try {
    ((I = 1), Oi(e, t, n, r));
  } finally {
    ((I = s), (an.transition = i));
  }
}
function Lf(e, t, n, r) {
  var s = I,
    i = an.transition;
  an.transition = null;
  try {
    ((I = 4), Oi(e, t, n, r));
  } finally {
    ((I = s), (an.transition = i));
  }
}
function Oi(e, t, n, r) {
  if (ll) {
    var s = Hs(e, t, n, r);
    if (s === null) (us(e, t, r, sl, n), Da(e, r));
    else if (Mf(s, e, t, n, r)) r.stopPropagation();
    else if ((Da(e, r), t & 4 && -1 < Tf.indexOf(e))) {
      for (; s !== null; ) {
        var i = mr(s);
        if (
          (i !== null && Ou(i),
          (i = Hs(e, t, n, r)),
          i === null && us(e, t, r, sl, n),
          i === s)
        )
          break;
        s = i;
      }
      s !== null && r.stopPropagation();
    } else us(e, t, r, null, n);
  }
}
var sl = null;
function Hs(e, t, n, r) {
  if (((sl = null), (e = Ai(r)), (e = _t(e)), e !== null))
    if (((t = $t(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Mu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((sl = e), null);
}
function $u(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (yf()) {
        case zi:
          return 1;
        case Au:
          return 4;
        case nl:
        case jf:
          return 16;
        case zu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ct = null,
  Ii = null,
  Gr = null;
function Vu() {
  if (Gr) return Gr;
  var e,
    t = Ii,
    n = t.length,
    r,
    s = "value" in ct ? ct.value : ct.textContent,
    i = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === s[i - r]; r++);
  return (Gr = s.slice(e, 1 < r ? 1 - r : void 0));
}
function Wr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Er() {
  return !0;
}
function Ia() {
  return !1;
}
function Ee(e) {
  function t(n, r, s, i, a) {
    ((this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null));
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Er
        : Ia),
      (this.isPropagationStopped = Ia),
      this
    );
  }
  return (
    q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Er));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Er));
      },
      persist: function () {},
      isPersistent: Er,
    }),
    t
  );
}
var yn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ui = Ee(yn),
  pr = q({}, yn, { view: 0, detail: 0 }),
  Af = Ee(pr),
  es,
  ts,
  Mn,
  Pl = q({}, pr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Hi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Mn &&
            (Mn && e.type === "mousemove"
              ? ((es = e.screenX - Mn.screenX), (ts = e.screenY - Mn.screenY))
              : (ts = es = 0),
            (Mn = e)),
          es);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ts;
    },
  }),
  Ua = Ee(Pl),
  zf = q({}, Pl, { dataTransfer: 0 }),
  Ff = Ee(zf),
  Df = q({}, pr, { relatedTarget: 0 }),
  ns = Ee(Df),
  Of = q({}, yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  If = Ee(Of),
  Uf = q({}, yn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Hf = Ee(Uf),
  Bf = q({}, yn, { data: 0 }),
  Ha = Ee(Bf),
  $f = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Vf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Gf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Wf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Gf[e]) ? !!t[e] : !1;
}
function Hi() {
  return Wf;
}
var Yf = q({}, pr, {
    key: function (e) {
      if (e.key) {
        var t = $f[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Wr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Vf[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Hi,
    charCode: function (e) {
      return e.type === "keypress" ? Wr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Wr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  qf = Ee(Yf),
  Qf = q({}, Pl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ba = Ee(Qf),
  Kf = q({}, pr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Hi,
  }),
  Xf = Ee(Kf),
  Zf = q({}, yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Jf = Ee(Zf),
  bf = q({}, Pl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  eh = Ee(bf),
  th = [9, 13, 27, 32],
  Bi = Je && "CompositionEvent" in window,
  Hn = null;
Je && "documentMode" in document && (Hn = document.documentMode);
var nh = Je && "TextEvent" in window && !Hn,
  Gu = Je && (!Bi || (Hn && 8 < Hn && 11 >= Hn)),
  $a = " ",
  Va = !1;
function Wu(e, t) {
  switch (e) {
    case "keyup":
      return th.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Yu(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var qt = !1;
function rh(e, t) {
  switch (e) {
    case "compositionend":
      return Yu(t);
    case "keypress":
      return t.which !== 32 ? null : ((Va = !0), $a);
    case "textInput":
      return ((e = t.data), e === $a && Va ? null : e);
    default:
      return null;
  }
}
function lh(e, t) {
  if (qt)
    return e === "compositionend" || (!Bi && Wu(e, t))
      ? ((e = Vu()), (Gr = Ii = ct = null), (qt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Gu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var sh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ga(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!sh[e.type] : t === "textarea";
}
function qu(e, t, n, r) {
  (Su(r),
    (t = il(t, "onChange")),
    0 < t.length &&
      ((n = new Ui("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Bn = null,
  bn = null;
function ih(e) {
  lc(e, 0);
}
function Tl(e) {
  var t = Xt(e);
  if (gu(t)) return e;
}
function ah(e, t) {
  if (e === "change") return t;
}
var Qu = !1;
if (Je) {
  var rs;
  if (Je) {
    var ls = "oninput" in document;
    if (!ls) {
      var Wa = document.createElement("div");
      (Wa.setAttribute("oninput", "return;"),
        (ls = typeof Wa.oninput == "function"));
    }
    rs = ls;
  } else rs = !1;
  Qu = rs && (!document.documentMode || 9 < document.documentMode);
}
function Ya() {
  Bn && (Bn.detachEvent("onpropertychange", Ku), (bn = Bn = null));
}
function Ku(e) {
  if (e.propertyName === "value" && Tl(bn)) {
    var t = [];
    (qu(t, bn, e, Ai(e)), Tu(ih, t));
  }
}
function oh(e, t, n) {
  e === "focusin"
    ? (Ya(), (Bn = t), (bn = n), Bn.attachEvent("onpropertychange", Ku))
    : e === "focusout" && Ya();
}
function uh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Tl(bn);
}
function ch(e, t) {
  if (e === "click") return Tl(t);
}
function dh(e, t) {
  if (e === "input" || e === "change") return Tl(t);
}
function fh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ue = typeof Object.is == "function" ? Object.is : fh;
function er(e, t) {
  if (Ue(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!ks.call(t, s) || !Ue(e[s], t[s])) return !1;
  }
  return !0;
}
function qa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Qa(e, t) {
  var n = qa(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = qa(n);
  }
}
function Xu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Xu(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Zu() {
  for (var e = window, t = br(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = br(e.document);
  }
  return t;
}
function $i(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function hh(e) {
  var t = Zu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Xu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && $i(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          i = Math.min(r.start, s);
        ((r = r.end === void 0 ? i : Math.min(r.end, s)),
          !e.extend && i > r && ((s = r), (r = i), (i = s)),
          (s = Qa(n, i)));
        var a = Qa(n, r);
        s &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var ph = Je && "documentMode" in document && 11 >= document.documentMode,
  Qt = null,
  Bs = null,
  $n = null,
  $s = !1;
function Ka(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  $s ||
    Qt == null ||
    Qt !== br(r) ||
    ((r = Qt),
    "selectionStart" in r && $i(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    ($n && er($n, r)) ||
      (($n = r),
      (r = il(Bs, "onSelect")),
      0 < r.length &&
        ((t = new Ui("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Qt))));
}
function Pr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Kt = {
    animationend: Pr("Animation", "AnimationEnd"),
    animationiteration: Pr("Animation", "AnimationIteration"),
    animationstart: Pr("Animation", "AnimationStart"),
    transitionend: Pr("Transition", "TransitionEnd"),
  },
  ss = {},
  Ju = {};
Je &&
  ((Ju = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Kt.animationend.animation,
    delete Kt.animationiteration.animation,
    delete Kt.animationstart.animation),
  "TransitionEvent" in window || delete Kt.transitionend.transition);
function Ml(e) {
  if (ss[e]) return ss[e];
  if (!Kt[e]) return e;
  var t = Kt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ju) return (ss[e] = t[n]);
  return e;
}
var bu = Ml("animationend"),
  ec = Ml("animationiteration"),
  tc = Ml("animationstart"),
  nc = Ml("transitionend"),
  rc = new Map(),
  Xa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function St(e, t) {
  (rc.set(e, t), Bt(t, [e]));
}
for (var is = 0; is < Xa.length; is++) {
  var as = Xa[is],
    mh = as.toLowerCase(),
    vh = as[0].toUpperCase() + as.slice(1);
  St(mh, "on" + vh);
}
St(bu, "onAnimationEnd");
St(ec, "onAnimationIteration");
St(tc, "onAnimationStart");
St("dblclick", "onDoubleClick");
St("focusin", "onFocus");
St("focusout", "onBlur");
St(nc, "onTransitionEnd");
cn("onMouseEnter", ["mouseout", "mouseover"]);
cn("onMouseLeave", ["mouseout", "mouseover"]);
cn("onPointerEnter", ["pointerout", "pointerover"]);
cn("onPointerLeave", ["pointerout", "pointerover"]);
Bt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Bt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Bt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Bt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Bt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var On =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  gh = new Set("cancel close invalid load scroll toggle".split(" ").concat(On));
function Za(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), mf(r, t, void 0, e), (e.currentTarget = null));
}
function lc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var u = r[a],
            o = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), o !== i && s.isPropagationStopped())) break e;
          (Za(s, u, c), (i = o));
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((u = r[a]),
            (o = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            o !== i && s.isPropagationStopped())
          )
            break e;
          (Za(s, u, c), (i = o));
        }
    }
  }
  if (tl) throw ((e = Os), (tl = !1), (Os = null), e);
}
function H(e, t) {
  var n = t[qs];
  n === void 0 && (n = t[qs] = new Set());
  var r = e + "__bubble";
  n.has(r) || (sc(t, e, 2, !1), n.add(r));
}
function os(e, t, n) {
  var r = 0;
  (t && (r |= 4), sc(n, e, r, t));
}
var Tr = "_reactListening" + Math.random().toString(36).slice(2);
function tr(e) {
  if (!e[Tr]) {
    ((e[Tr] = !0),
      fu.forEach(function (n) {
        n !== "selectionchange" && (gh.has(n) || os(n, !1, e), os(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Tr] || ((t[Tr] = !0), os("selectionchange", !1, t));
  }
}
function sc(e, t, n, r) {
  switch ($u(t)) {
    case 1:
      var s = _f;
      break;
    case 4:
      s = Lf;
      break;
    default:
      s = Oi;
  }
  ((n = s.bind(null, t, n, e)),
    (s = void 0),
    !Ds ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
        ? e.addEventListener(t, n, { passive: s })
        : e.addEventListener(t, n, !1));
}
function us(e, t, n, r, s) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var u = r.stateNode.containerInfo;
        if (u === s || (u.nodeType === 8 && u.parentNode === s)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var o = a.tag;
            if (
              (o === 3 || o === 4) &&
              ((o = a.stateNode.containerInfo),
              o === s || (o.nodeType === 8 && o.parentNode === s))
            )
              return;
            a = a.return;
          }
        for (; u !== null; ) {
          if (((a = _t(u)), a === null)) return;
          if (((o = a.tag), o === 5 || o === 6)) {
            r = i = a;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Tu(function () {
    var c = i,
      v = Ai(n),
      m = [];
    e: {
      var p = rc.get(e);
      if (p !== void 0) {
        var g = Ui,
          y = e;
        switch (e) {
          case "keypress":
            if (Wr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = qf;
            break;
          case "focusin":
            ((y = "focus"), (g = ns));
            break;
          case "focusout":
            ((y = "blur"), (g = ns));
            break;
          case "beforeblur":
          case "afterblur":
            g = ns;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Ua;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Ff;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Xf;
            break;
          case bu:
          case ec:
          case tc:
            g = If;
            break;
          case nc:
            g = Jf;
            break;
          case "scroll":
            g = Af;
            break;
          case "wheel":
            g = eh;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Hf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Ba;
        }
        var N = (t & 4) !== 0,
          w = !N && e === "scroll",
          f = N ? (p !== null ? p + "Capture" : null) : p;
        N = [];
        for (var d = c, h; d !== null; ) {
          h = d;
          var x = h.stateNode;
          if (
            (h.tag === 5 &&
              x !== null &&
              ((h = x),
              f !== null && ((x = Kn(d, f)), x != null && N.push(nr(d, x, h)))),
            w)
          )
            break;
          d = d.return;
        }
        0 < N.length &&
          ((p = new g(p, y, null, n, v)), m.push({ event: p, listeners: N }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p &&
            n !== zs &&
            (y = n.relatedTarget || n.fromElement) &&
            (_t(y) || y[be]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            v.window === v
              ? v
              : (p = v.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = c),
              (y = y ? _t(y) : null),
              y !== null &&
                ((w = $t(y)), y !== w || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = c)),
          g !== y)
        ) {
          if (
            ((N = Ua),
            (x = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((N = Ba),
              (x = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (w = g == null ? p : Xt(g)),
            (h = y == null ? p : Xt(y)),
            (p = new N(x, d + "leave", g, n, v)),
            (p.target = w),
            (p.relatedTarget = h),
            (x = null),
            _t(v) === c &&
              ((N = new N(f, d + "enter", y, n, v)),
              (N.target = h),
              (N.relatedTarget = w),
              (x = N)),
            (w = x),
            g && y)
          )
            t: {
              for (N = g, f = y, d = 0, h = N; h; h = Gt(h)) d++;
              for (h = 0, x = f; x; x = Gt(x)) h++;
              for (; 0 < d - h; ) ((N = Gt(N)), d--);
              for (; 0 < h - d; ) ((f = Gt(f)), h--);
              for (; d--; ) {
                if (N === f || (f !== null && N === f.alternate)) break t;
                ((N = Gt(N)), (f = Gt(f)));
              }
              N = null;
            }
          else N = null;
          (g !== null && Ja(m, p, g, N, !1),
            y !== null && w !== null && Ja(m, w, y, N, !0));
        }
      }
      e: {
        if (
          ((p = c ? Xt(c) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var S = ah;
        else if (Ga(p))
          if (Qu) S = dh;
          else {
            S = uh;
            var P = oh;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (S = ch);
        if (S && (S = S(e, c))) {
          qu(m, S, n, v);
          break e;
        }
        (P && P(e, p, c),
          e === "focusout" &&
            (P = p._wrapperState) &&
            P.controlled &&
            p.type === "number" &&
            Ms(p, "number", p.value));
      }
      switch (((P = c ? Xt(c) : window), e)) {
        case "focusin":
          (Ga(P) || P.contentEditable === "true") &&
            ((Qt = P), (Bs = c), ($n = null));
          break;
        case "focusout":
          $n = Bs = Qt = null;
          break;
        case "mousedown":
          $s = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (($s = !1), Ka(m, n, v));
          break;
        case "selectionchange":
          if (ph) break;
        case "keydown":
        case "keyup":
          Ka(m, n, v);
      }
      var T;
      if (Bi)
        e: {
          switch (e) {
            case "compositionstart":
              var M = "onCompositionStart";
              break e;
            case "compositionend":
              M = "onCompositionEnd";
              break e;
            case "compositionupdate":
              M = "onCompositionUpdate";
              break e;
          }
          M = void 0;
        }
      else
        qt
          ? Wu(e, n) && (M = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      (M &&
        (Gu &&
          n.locale !== "ko" &&
          (qt || M !== "onCompositionStart"
            ? M === "onCompositionEnd" && qt && (T = Vu())
            : ((ct = v),
              (Ii = "value" in ct ? ct.value : ct.textContent),
              (qt = !0))),
        (P = il(c, M)),
        0 < P.length &&
          ((M = new Ha(M, e, null, n, v)),
          m.push({ event: M, listeners: P }),
          T ? (M.data = T) : ((T = Yu(n)), T !== null && (M.data = T)))),
        (T = nh ? rh(e, n) : lh(e, n)) &&
          ((c = il(c, "onBeforeInput")),
          0 < c.length &&
            ((v = new Ha("onBeforeInput", "beforeinput", null, n, v)),
            m.push({ event: v, listeners: c }),
            (v.data = T))));
    }
    lc(m, t);
  });
}
function nr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function il(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      i = s.stateNode;
    (s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = Kn(e, n)),
      i != null && r.unshift(nr(e, i, s)),
      (i = Kn(e, t)),
      i != null && r.push(nr(e, i, s))),
      (e = e.return));
  }
  return r;
}
function Gt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ja(e, t, n, r, s) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var u = n,
      o = u.alternate,
      c = u.stateNode;
    if (o !== null && o === r) break;
    (u.tag === 5 &&
      c !== null &&
      ((u = c),
      s
        ? ((o = Kn(n, i)), o != null && a.unshift(nr(n, o, u)))
        : s || ((o = Kn(n, i)), o != null && a.push(nr(n, o, u)))),
      (n = n.return));
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var xh = /\r\n?/g,
  yh = /\u0000|\uFFFD/g;
function ba(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      xh,
      `
`,
    )
    .replace(yh, "");
}
function Mr(e, t, n) {
  if (((t = ba(t)), ba(e) !== t && n)) throw Error(k(425));
}
function al() {}
var Vs = null,
  Gs = null;
function Ws(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ys = typeof setTimeout == "function" ? setTimeout : void 0,
  jh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  eo = typeof Promise == "function" ? Promise : void 0,
  Nh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof eo < "u"
        ? function (e) {
            return eo.resolve(null).then(e).catch(kh);
          }
        : Ys;
function kh(e) {
  setTimeout(function () {
    throw e;
  });
}
function cs(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(s), Jn(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  Jn(t);
}
function vt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function to(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var jn = Math.random().toString(36).slice(2),
  $e = "__reactFiber$" + jn,
  rr = "__reactProps$" + jn,
  be = "__reactContainer$" + jn,
  qs = "__reactEvents$" + jn,
  wh = "__reactListeners$" + jn,
  Sh = "__reactHandles$" + jn;
function _t(e) {
  var t = e[$e];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[be] || n[$e])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = to(e); e !== null; ) {
          if ((n = e[$e])) return n;
          e = to(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function mr(e) {
  return (
    (e = e[$e] || e[be]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Xt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Rl(e) {
  return e[rr] || null;
}
var Qs = [],
  Zt = -1;
function Ct(e) {
  return { current: e };
}
function B(e) {
  0 > Zt || ((e.current = Qs[Zt]), (Qs[Zt] = null), Zt--);
}
function U(e, t) {
  (Zt++, (Qs[Zt] = e.current), (e.current = t));
}
var wt = {},
  ce = Ct(wt),
  ge = Ct(!1),
  Dt = wt;
function dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return wt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    i;
  for (i in n) s[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function xe(e) {
  return ((e = e.childContextTypes), e != null);
}
function ol() {
  (B(ge), B(ce));
}
function no(e, t, n) {
  if (ce.current !== wt) throw Error(k(168));
  (U(ce, t), U(ge, n));
}
function ic(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(k(108, of(e) || "Unknown", s));
  return q({}, n, r);
}
function ul(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wt),
    (Dt = ce.current),
    U(ce, e),
    U(ge, ge.current),
    !0
  );
}
function ro(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  (n
    ? ((e = ic(e, t, Dt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      B(ge),
      B(ce),
      U(ce, e))
    : B(ge),
    U(ge, n));
}
var qe = null,
  _l = !1,
  ds = !1;
function ac(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
function Ch(e) {
  ((_l = !0), ac(e));
}
function Et() {
  if (!ds && qe !== null) {
    ds = !0;
    var e = 0,
      t = I;
    try {
      var n = qe;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((qe = null), (_l = !1));
    } catch (s) {
      throw (qe !== null && (qe = qe.slice(e + 1)), Lu(zi, Et), s);
    } finally {
      ((I = t), (ds = !1));
    }
  }
  return null;
}
var Jt = [],
  bt = 0,
  cl = null,
  dl = 0,
  Pe = [],
  Te = 0,
  Ot = null,
  Ke = 1,
  Xe = "";
function Mt(e, t) {
  ((Jt[bt++] = dl), (Jt[bt++] = cl), (cl = e), (dl = t));
}
function oc(e, t, n) {
  ((Pe[Te++] = Ke), (Pe[Te++] = Xe), (Pe[Te++] = Ot), (Ot = e));
  var r = Ke;
  e = Xe;
  var s = 32 - Oe(r) - 1;
  ((r &= ~(1 << s)), (n += 1));
  var i = 32 - Oe(t) + s;
  if (30 < i) {
    var a = s - (s % 5);
    ((i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (s -= a),
      (Ke = (1 << (32 - Oe(t) + s)) | (n << s) | r),
      (Xe = i + e));
  } else ((Ke = (1 << i) | (n << s) | r), (Xe = e));
}
function Vi(e) {
  e.return !== null && (Mt(e, 1), oc(e, 1, 0));
}
function Gi(e) {
  for (; e === cl; )
    ((cl = Jt[--bt]), (Jt[bt] = null), (dl = Jt[--bt]), (Jt[bt] = null));
  for (; e === Ot; )
    ((Ot = Pe[--Te]),
      (Pe[Te] = null),
      (Xe = Pe[--Te]),
      (Pe[Te] = null),
      (Ke = Pe[--Te]),
      (Pe[Te] = null));
}
var we = null,
  ke = null,
  $ = !1,
  De = null;
function uc(e, t) {
  var n = Me(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function lo(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (we = e), (ke = vt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (we = e), (ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ot !== null ? { id: Ke, overflow: Xe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Me(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (we = e),
            (ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ks(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xs(e) {
  if ($) {
    var t = ke;
    if (t) {
      var n = t;
      if (!lo(e, t)) {
        if (Ks(e)) throw Error(k(418));
        t = vt(n.nextSibling);
        var r = we;
        t && lo(e, t)
          ? uc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (we = e));
      }
    } else {
      if (Ks(e)) throw Error(k(418));
      ((e.flags = (e.flags & -4097) | 2), ($ = !1), (we = e));
    }
  }
}
function so(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  we = e;
}
function Rr(e) {
  if (e !== we) return !1;
  if (!$) return (so(e), ($ = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ws(e.type, e.memoizedProps))),
    t && (t = ke))
  ) {
    if (Ks(e)) throw (cc(), Error(k(418)));
    for (; t; ) (uc(e, t), (t = vt(t.nextSibling)));
  }
  if ((so(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ke = vt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ke = null;
    }
  } else ke = we ? vt(e.stateNode.nextSibling) : null;
  return !0;
}
function cc() {
  for (var e = ke; e; ) e = vt(e.nextSibling);
}
function fn() {
  ((ke = we = null), ($ = !1));
}
function Wi(e) {
  De === null ? (De = [e]) : De.push(e);
}
var Eh = nt.ReactCurrentBatchConfig;
function Rn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var s = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var u = s.refs;
            a === null ? delete u[i] : (u[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function _r(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function io(e) {
  var t = e._init;
  return t(e._payload);
}
function dc(e) {
  function t(f, d) {
    if (e) {
      var h = f.deletions;
      h === null ? ((f.deletions = [d]), (f.flags |= 16)) : h.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) (t(f, d), (d = d.sibling));
    return null;
  }
  function r(f, d) {
    for (f = new Map(); d !== null; )
      (d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling));
    return f;
  }
  function s(f, d) {
    return ((f = jt(f, d)), (f.index = 0), (f.sibling = null), f);
  }
  function i(f, d, h) {
    return (
      (f.index = h),
      e
        ? ((h = f.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((f.flags |= 2), d) : h)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    );
  }
  function a(f) {
    return (e && f.alternate === null && (f.flags |= 2), f);
  }
  function u(f, d, h, x) {
    return d === null || d.tag !== 6
      ? ((d = xs(h, f.mode, x)), (d.return = f), d)
      : ((d = s(d, h)), (d.return = f), d);
  }
  function o(f, d, h, x) {
    var S = h.type;
    return S === Yt
      ? v(f, d, h.props.children, x, h.key)
      : d !== null &&
          (d.elementType === S ||
            (typeof S == "object" &&
              S !== null &&
              S.$$typeof === it &&
              io(S) === d.type))
        ? ((x = s(d, h.props)), (x.ref = Rn(f, d, h)), (x.return = f), x)
        : ((x = Jr(h.type, h.key, h.props, null, f.mode, x)),
          (x.ref = Rn(f, d, h)),
          (x.return = f),
          x);
  }
  function c(f, d, h, x) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = ys(h, f.mode, x)), (d.return = f), d)
      : ((d = s(d, h.children || [])), (d.return = f), d);
  }
  function v(f, d, h, x, S) {
    return d === null || d.tag !== 7
      ? ((d = Ft(h, f.mode, x, S)), (d.return = f), d)
      : ((d = s(d, h)), (d.return = f), d);
  }
  function m(f, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return ((d = xs("" + d, f.mode, h)), (d.return = f), d);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case jr:
          return (
            (h = Jr(d.type, d.key, d.props, null, f.mode, h)),
            (h.ref = Rn(f, null, d)),
            (h.return = f),
            h
          );
        case Wt:
          return ((d = ys(d, f.mode, h)), (d.return = f), d);
        case it:
          var x = d._init;
          return m(f, x(d._payload), h);
      }
      if (Fn(d) || Cn(d))
        return ((d = Ft(d, f.mode, h, null)), (d.return = f), d);
      _r(f, d);
    }
    return null;
  }
  function p(f, d, h, x) {
    var S = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return S !== null ? null : u(f, d, "" + h, x);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case jr:
          return h.key === S ? o(f, d, h, x) : null;
        case Wt:
          return h.key === S ? c(f, d, h, x) : null;
        case it:
          return ((S = h._init), p(f, d, S(h._payload), x));
      }
      if (Fn(h) || Cn(h)) return S !== null ? null : v(f, d, h, x, null);
      _r(f, h);
    }
    return null;
  }
  function g(f, d, h, x, S) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return ((f = f.get(h) || null), u(d, f, "" + x, S));
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case jr:
          return (
            (f = f.get(x.key === null ? h : x.key) || null),
            o(d, f, x, S)
          );
        case Wt:
          return (
            (f = f.get(x.key === null ? h : x.key) || null),
            c(d, f, x, S)
          );
        case it:
          var P = x._init;
          return g(f, d, h, P(x._payload), S);
      }
      if (Fn(x) || Cn(x)) return ((f = f.get(h) || null), v(d, f, x, S, null));
      _r(d, x);
    }
    return null;
  }
  function y(f, d, h, x) {
    for (
      var S = null, P = null, T = d, M = (d = 0), V = null;
      T !== null && M < h.length;
      M++
    ) {
      T.index > M ? ((V = T), (T = null)) : (V = T.sibling);
      var L = p(f, T, h[M], x);
      if (L === null) {
        T === null && (T = V);
        break;
      }
      (e && T && L.alternate === null && t(f, T),
        (d = i(L, d, M)),
        P === null ? (S = L) : (P.sibling = L),
        (P = L),
        (T = V));
    }
    if (M === h.length) return (n(f, T), $ && Mt(f, M), S);
    if (T === null) {
      for (; M < h.length; M++)
        ((T = m(f, h[M], x)),
          T !== null &&
            ((d = i(T, d, M)),
            P === null ? (S = T) : (P.sibling = T),
            (P = T)));
      return ($ && Mt(f, M), S);
    }
    for (T = r(f, T); M < h.length; M++)
      ((V = g(T, f, M, h[M], x)),
        V !== null &&
          (e && V.alternate !== null && T.delete(V.key === null ? M : V.key),
          (d = i(V, d, M)),
          P === null ? (S = V) : (P.sibling = V),
          (P = V)));
    return (
      e &&
        T.forEach(function (je) {
          return t(f, je);
        }),
      $ && Mt(f, M),
      S
    );
  }
  function N(f, d, h, x) {
    var S = Cn(h);
    if (typeof S != "function") throw Error(k(150));
    if (((h = S.call(h)), h == null)) throw Error(k(151));
    for (
      var P = (S = null), T = d, M = (d = 0), V = null, L = h.next();
      T !== null && !L.done;
      M++, L = h.next()
    ) {
      T.index > M ? ((V = T), (T = null)) : (V = T.sibling);
      var je = p(f, T, L.value, x);
      if (je === null) {
        T === null && (T = V);
        break;
      }
      (e && T && je.alternate === null && t(f, T),
        (d = i(je, d, M)),
        P === null ? (S = je) : (P.sibling = je),
        (P = je),
        (T = V));
    }
    if (L.done) return (n(f, T), $ && Mt(f, M), S);
    if (T === null) {
      for (; !L.done; M++, L = h.next())
        ((L = m(f, L.value, x)),
          L !== null &&
            ((d = i(L, d, M)),
            P === null ? (S = L) : (P.sibling = L),
            (P = L)));
      return ($ && Mt(f, M), S);
    }
    for (T = r(f, T); !L.done; M++, L = h.next())
      ((L = g(T, f, M, L.value, x)),
        L !== null &&
          (e && L.alternate !== null && T.delete(L.key === null ? M : L.key),
          (d = i(L, d, M)),
          P === null ? (S = L) : (P.sibling = L),
          (P = L)));
    return (
      e &&
        T.forEach(function (wn) {
          return t(f, wn);
        }),
      $ && Mt(f, M),
      S
    );
  }
  function w(f, d, h, x) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Yt &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case jr:
          e: {
            for (var S = h.key, P = d; P !== null; ) {
              if (P.key === S) {
                if (((S = h.type), S === Yt)) {
                  if (P.tag === 7) {
                    (n(f, P.sibling),
                      (d = s(P, h.props.children)),
                      (d.return = f),
                      (f = d));
                    break e;
                  }
                } else if (
                  P.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === it &&
                    io(S) === P.type)
                ) {
                  (n(f, P.sibling),
                    (d = s(P, h.props)),
                    (d.ref = Rn(f, P, h)),
                    (d.return = f),
                    (f = d));
                  break e;
                }
                n(f, P);
                break;
              } else t(f, P);
              P = P.sibling;
            }
            h.type === Yt
              ? ((d = Ft(h.props.children, f.mode, x, h.key)),
                (d.return = f),
                (f = d))
              : ((x = Jr(h.type, h.key, h.props, null, f.mode, x)),
                (x.ref = Rn(f, d, h)),
                (x.return = f),
                (f = x));
          }
          return a(f);
        case Wt:
          e: {
            for (P = h.key; d !== null; ) {
              if (d.key === P)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  (n(f, d.sibling),
                    (d = s(d, h.children || [])),
                    (d.return = f),
                    (f = d));
                  break e;
                } else {
                  n(f, d);
                  break;
                }
              else t(f, d);
              d = d.sibling;
            }
            ((d = ys(h, f.mode, x)), (d.return = f), (f = d));
          }
          return a(f);
        case it:
          return ((P = h._init), w(f, d, P(h._payload), x));
      }
      if (Fn(h)) return y(f, d, h, x);
      if (Cn(h)) return N(f, d, h, x);
      _r(f, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = s(d, h)), (d.return = f), (f = d))
          : (n(f, d), (d = xs(h, f.mode, x)), (d.return = f), (f = d)),
        a(f))
      : n(f, d);
  }
  return w;
}
var hn = dc(!0),
  fc = dc(!1),
  fl = Ct(null),
  hl = null,
  en = null,
  Yi = null;
function qi() {
  Yi = en = hl = null;
}
function Qi(e) {
  var t = fl.current;
  (B(fl), (e._currentValue = t));
}
function Zs(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function on(e, t) {
  ((hl = e),
    (Yi = en = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ve = !0), (e.firstContext = null)));
}
function _e(e) {
  var t = e._currentValue;
  if (Yi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), en === null)) {
      if (hl === null) throw Error(k(308));
      ((en = e), (hl.dependencies = { lanes: 0, firstContext: e }));
    } else en = en.next = e;
  return t;
}
var Lt = null;
function Ki(e) {
  Lt === null ? (Lt = [e]) : Lt.push(e);
}
function hc(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), Ki(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    et(e, r)
  );
}
function et(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var at = !1;
function Xi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function pc(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function Ze(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function gt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), D & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      et(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), Ki(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    et(e, n)
  );
}
function Yr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Fi(e, n));
  }
}
function ao(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (s = i = a) : (i = i.next = a), (n = n.next));
      } while (n !== null);
      i === null ? (s = i = t) : (i = i.next = t);
    } else s = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function pl(e, t, n, r) {
  var s = e.updateQueue;
  at = !1;
  var i = s.firstBaseUpdate,
    a = s.lastBaseUpdate,
    u = s.shared.pending;
  if (u !== null) {
    s.shared.pending = null;
    var o = u,
      c = o.next;
    ((o.next = null), a === null ? (i = c) : (a.next = c), (a = o));
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (u = v.lastBaseUpdate),
      u !== a &&
        (u === null ? (v.firstBaseUpdate = c) : (u.next = c),
        (v.lastBaseUpdate = o)));
  }
  if (i !== null) {
    var m = s.baseState;
    ((a = 0), (v = c = o = null), (u = i));
    do {
      var p = u.lane,
        g = u.eventTime;
      if ((r & p) === p) {
        v !== null &&
          (v = v.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var y = e,
            N = u;
          switch (((p = t), (g = n), N.tag)) {
            case 1:
              if (((y = N.payload), typeof y == "function")) {
                m = y.call(g, m, p);
                break e;
              }
              m = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = N.payload),
                (p = typeof y == "function" ? y.call(g, m, p) : y),
                p == null)
              )
                break e;
              m = q({}, m, p);
              break e;
            case 2:
              at = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = s.effects),
          p === null ? (s.effects = [u]) : p.push(u));
      } else
        ((g = {
          eventTime: g,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          v === null ? ((c = v = g), (o = m)) : (v = v.next = g),
          (a |= p));
      if (((u = u.next), u === null)) {
        if (((u = s.shared.pending), u === null)) break;
        ((p = u),
          (u = p.next),
          (p.next = null),
          (s.lastBaseUpdate = p),
          (s.shared.pending = null));
      }
    } while (!0);
    if (
      (v === null && (o = m),
      (s.baseState = o),
      (s.firstBaseUpdate = c),
      (s.lastBaseUpdate = v),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do ((a |= s.lane), (s = s.next));
      while (s !== t);
    } else i === null && (s.shared.lanes = 0);
    ((Ut |= a), (e.lanes = a), (e.memoizedState = m));
  }
}
function oo(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(k(191, s));
        s.call(r);
      }
    }
}
var vr = {},
  Ge = Ct(vr),
  lr = Ct(vr),
  sr = Ct(vr);
function At(e) {
  if (e === vr) throw Error(k(174));
  return e;
}
function Zi(e, t) {
  switch ((U(sr, t), U(lr, e), U(Ge, vr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : _s(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = _s(t, e)));
  }
  (B(Ge), U(Ge, t));
}
function pn() {
  (B(Ge), B(lr), B(sr));
}
function mc(e) {
  At(sr.current);
  var t = At(Ge.current),
    n = _s(t, e.type);
  t !== n && (U(lr, e), U(Ge, n));
}
function Ji(e) {
  lr.current === e && (B(Ge), B(lr));
}
var G = Ct(0);
function ml(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var fs = [];
function bi() {
  for (var e = 0; e < fs.length; e++)
    fs[e]._workInProgressVersionPrimary = null;
  fs.length = 0;
}
var qr = nt.ReactCurrentDispatcher,
  hs = nt.ReactCurrentBatchConfig,
  It = 0,
  W = null,
  b = null,
  ne = null,
  vl = !1,
  Vn = !1,
  ir = 0,
  Ph = 0;
function ae() {
  throw Error(k(321));
}
function ea(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ue(e[n], t[n])) return !1;
  return !0;
}
function ta(e, t, n, r, s, i) {
  if (
    ((It = i),
    (W = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (qr.current = e === null || e.memoizedState === null ? _h : Lh),
    (e = n(r, s)),
    Vn)
  ) {
    i = 0;
    do {
      if (((Vn = !1), (ir = 0), 25 <= i)) throw Error(k(301));
      ((i += 1),
        (ne = b = null),
        (t.updateQueue = null),
        (qr.current = Ah),
        (e = n(r, s)));
    } while (Vn);
  }
  if (
    ((qr.current = gl),
    (t = b !== null && b.next !== null),
    (It = 0),
    (ne = b = W = null),
    (vl = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function na() {
  var e = ir !== 0;
  return ((ir = 0), e);
}
function Be() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ne === null ? (W.memoizedState = ne = e) : (ne = ne.next = e), ne);
}
function Le() {
  if (b === null) {
    var e = W.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = b.next;
  var t = ne === null ? W.memoizedState : ne.next;
  if (t !== null) ((ne = t), (b = e));
  else {
    if (e === null) throw Error(k(310));
    ((b = e),
      (e = {
        memoizedState: b.memoizedState,
        baseState: b.baseState,
        baseQueue: b.baseQueue,
        queue: b.queue,
        next: null,
      }),
      ne === null ? (W.memoizedState = ne = e) : (ne = ne.next = e));
  }
  return ne;
}
function ar(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ps(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = b,
    s = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (s !== null) {
      var a = s.next;
      ((s.next = i.next), (i.next = a));
    }
    ((r.baseQueue = s = i), (n.pending = null));
  }
  if (s !== null) {
    ((i = s.next), (r = r.baseState));
    var u = (a = null),
      o = null,
      c = i;
    do {
      var v = c.lane;
      if ((It & v) === v)
        (o !== null &&
          (o = o.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
      else {
        var m = {
          lane: v,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (o === null ? ((u = o = m), (a = r)) : (o = o.next = m),
          (W.lanes |= v),
          (Ut |= v));
      }
      c = c.next;
    } while (c !== null && c !== i);
    (o === null ? (a = r) : (o.next = u),
      Ue(r, t.memoizedState) || (ve = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = o),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do ((i = s.lane), (W.lanes |= i), (Ut |= i), (s = s.next));
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ms(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    i = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var a = (s = s.next);
    do ((i = e(i, a.action)), (a = a.next));
    while (a !== s);
    (Ue(i, t.memoizedState) || (ve = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function vc() {}
function gc(e, t) {
  var n = W,
    r = Le(),
    s = t(),
    i = !Ue(r.memoizedState, s);
  if (
    (i && ((r.memoizedState = s), (ve = !0)),
    (r = r.queue),
    ra(jc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ne !== null && ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      or(9, yc.bind(null, n, r, s, t), void 0, null),
      re === null)
    )
      throw Error(k(349));
    It & 30 || xc(n, t, s);
  }
  return s;
}
function xc(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function yc(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Nc(t) && kc(e));
}
function jc(e, t, n) {
  return n(function () {
    Nc(t) && kc(e);
  });
}
function Nc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ue(e, n);
  } catch {
    return !0;
  }
}
function kc(e) {
  var t = et(e, 1);
  t !== null && Ie(t, e, 1, -1);
}
function uo(e) {
  var t = Be();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ar,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Rh.bind(null, W, e)),
    [t.memoizedState, e]
  );
}
function or(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function wc() {
  return Le().memoizedState;
}
function Qr(e, t, n, r) {
  var s = Be();
  ((W.flags |= e),
    (s.memoizedState = or(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Ll(e, t, n, r) {
  var s = Le();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (b !== null) {
    var a = b.memoizedState;
    if (((i = a.destroy), r !== null && ea(r, a.deps))) {
      s.memoizedState = or(t, n, i, r);
      return;
    }
  }
  ((W.flags |= e), (s.memoizedState = or(1 | t, n, i, r)));
}
function co(e, t) {
  return Qr(8390656, 8, e, t);
}
function ra(e, t) {
  return Ll(2048, 8, e, t);
}
function Sc(e, t) {
  return Ll(4, 2, e, t);
}
function Cc(e, t) {
  return Ll(4, 4, e, t);
}
function Ec(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Pc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Ll(4, 4, Ec.bind(null, t, e), n)
  );
}
function la() {}
function Tc(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ea(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Mc(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ea(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Rc(e, t, n) {
  return It & 21
    ? (Ue(n, t) || ((n = Fu()), (W.lanes |= n), (Ut |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ve = !0)), (e.memoizedState = n));
}
function Th(e, t) {
  var n = I;
  ((I = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = hs.transition;
  hs.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((I = n), (hs.transition = r));
  }
}
function _c() {
  return Le().memoizedState;
}
function Mh(e, t, n) {
  var r = yt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Lc(e))
  )
    Ac(t, n);
  else if (((n = hc(e, t, n, r)), n !== null)) {
    var s = fe();
    (Ie(n, e, r, s), zc(n, t, r));
  }
}
function Rh(e, t, n) {
  var r = yt(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Lc(e)) Ac(t, s);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          u = i(a, n);
        if (((s.hasEagerState = !0), (s.eagerState = u), Ue(u, a))) {
          var o = t.interleaved;
          (o === null
            ? ((s.next = s), Ki(t))
            : ((s.next = o.next), (o.next = s)),
            (t.interleaved = s));
          return;
        }
      } catch {
      } finally {
      }
    ((n = hc(e, t, s, r)),
      n !== null && ((s = fe()), Ie(n, e, r, s), zc(n, t, r)));
  }
}
function Lc(e) {
  var t = e.alternate;
  return e === W || (t !== null && t === W);
}
function Ac(e, t) {
  Vn = vl = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function zc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Fi(e, n));
  }
}
var gl = {
    readContext: _e,
    useCallback: ae,
    useContext: ae,
    useEffect: ae,
    useImperativeHandle: ae,
    useInsertionEffect: ae,
    useLayoutEffect: ae,
    useMemo: ae,
    useReducer: ae,
    useRef: ae,
    useState: ae,
    useDebugValue: ae,
    useDeferredValue: ae,
    useTransition: ae,
    useMutableSource: ae,
    useSyncExternalStore: ae,
    useId: ae,
    unstable_isNewReconciler: !1,
  },
  _h = {
    readContext: _e,
    useCallback: function (e, t) {
      return ((Be().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: _e,
    useEffect: co,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Qr(4194308, 4, Ec.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Qr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Qr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Be();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Be();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Mh.bind(null, W, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Be();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: uo,
    useDebugValue: la,
    useDeferredValue: function (e) {
      return (Be().memoizedState = e);
    },
    useTransition: function () {
      var e = uo(!1),
        t = e[0];
      return ((e = Th.bind(null, e[1])), (Be().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = W,
        s = Be();
      if ($) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), re === null)) throw Error(k(349));
        It & 30 || xc(r, t, n);
      }
      s.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (s.queue = i),
        co(jc.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        or(9, yc.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Be(),
        t = re.identifierPrefix;
      if ($) {
        var n = Xe,
          r = Ke;
        ((n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ir++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = Ph++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Lh = {
    readContext: _e,
    useCallback: Tc,
    useContext: _e,
    useEffect: ra,
    useImperativeHandle: Pc,
    useInsertionEffect: Sc,
    useLayoutEffect: Cc,
    useMemo: Mc,
    useReducer: ps,
    useRef: wc,
    useState: function () {
      return ps(ar);
    },
    useDebugValue: la,
    useDeferredValue: function (e) {
      var t = Le();
      return Rc(t, b.memoizedState, e);
    },
    useTransition: function () {
      var e = ps(ar)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: vc,
    useSyncExternalStore: gc,
    useId: _c,
    unstable_isNewReconciler: !1,
  },
  Ah = {
    readContext: _e,
    useCallback: Tc,
    useContext: _e,
    useEffect: ra,
    useImperativeHandle: Pc,
    useInsertionEffect: Sc,
    useLayoutEffect: Cc,
    useMemo: Mc,
    useReducer: ms,
    useRef: wc,
    useState: function () {
      return ms(ar);
    },
    useDebugValue: la,
    useDeferredValue: function (e) {
      var t = Le();
      return b === null ? (t.memoizedState = e) : Rc(t, b.memoizedState, e);
    },
    useTransition: function () {
      var e = ms(ar)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: vc,
    useSyncExternalStore: gc,
    useId: _c,
    unstable_isNewReconciler: !1,
  };
function ze(e, t) {
  if (e && e.defaultProps) {
    ((t = q({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Js(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Al = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? $t(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      s = yt(e),
      i = Ze(r, s);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = gt(e, i, s)),
      t !== null && (Ie(t, e, s, r), Yr(t, e, s)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      s = yt(e),
      i = Ze(r, s);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = gt(e, i, s)),
      t !== null && (Ie(t, e, s, r), Yr(t, e, s)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = fe(),
      r = yt(e),
      s = Ze(n, r);
    ((s.tag = 2),
      t != null && (s.callback = t),
      (t = gt(e, s, r)),
      t !== null && (Ie(t, e, r, n), Yr(t, e, r)));
  },
};
function fo(e, t, n, r, s, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
        ? !er(n, r) || !er(s, i)
        : !0
  );
}
function Fc(e, t, n) {
  var r = !1,
    s = wt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = _e(i))
      : ((s = xe(t) ? Dt : ce.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? dn(e, s) : wt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Al),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ho(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Al.enqueueReplaceState(t, t.state, null));
}
function bs(e, t, n, r) {
  var s = e.stateNode;
  ((s.props = n), (s.state = e.memoizedState), (s.refs = {}), Xi(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (s.context = _e(i))
    : ((i = xe(t) ? Dt : ce.current), (s.context = dn(e, i))),
    (s.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Js(e, t, i, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && Al.enqueueReplaceState(s, s.state, null),
      pl(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308));
}
function mn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += af(r)), (r = r.return));
    while (r);
    var s = n;
  } catch (i) {
    s =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function vs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ei(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var zh = typeof WeakMap == "function" ? WeakMap : Map;
function Dc(e, t, n) {
  ((n = Ze(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (yl || ((yl = !0), (ci = r)), ei(e, t));
    }),
    n
  );
}
function Oc(e, t, n) {
  ((n = Ze(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    ((n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        ei(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (ei(e, t),
          typeof r != "function" &&
            (xt === null ? (xt = new Set([this])) : xt.add(this)));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function po(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new zh();
    var s = new Set();
    r.set(t, s);
  } else ((s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s)));
  s.has(n) || (s.add(n), (e = Qh.bind(null, e, t, n)), t.then(e, e));
}
function mo(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function vo(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ze(-1, 1)), (t.tag = 2), gt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Fh = nt.ReactCurrentOwner,
  ve = !1;
function de(e, t, n, r) {
  t.child = e === null ? fc(t, null, n, r) : hn(t, e.child, n, r);
}
function go(e, t, n, r, s) {
  n = n.render;
  var i = t.ref;
  return (
    on(t, s),
    (r = ta(e, t, n, r, i, s)),
    (n = na()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        tt(e, t, s))
      : ($ && n && Vi(t), (t.flags |= 1), de(e, t, r, s), t.child)
  );
}
function xo(e, t, n, r, s) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !fa(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ic(e, t, i, r, s))
      : ((e = Jr(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & s))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : er), n(a, r) && e.ref === t.ref)
    )
      return tt(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = jt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ic(e, t, n, r, s) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (er(i, r) && e.ref === t.ref)
      if (((ve = !1), (t.pendingProps = r = i), (e.lanes & s) !== 0))
        e.flags & 131072 && (ve = !0);
      else return ((t.lanes = e.lanes), tt(e, t, s));
  }
  return ti(e, t, n, r, s);
}
function Uc(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(nn, Ne),
        (Ne |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          U(nn, Ne),
          (Ne |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        U(nn, Ne),
        (Ne |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(nn, Ne),
      (Ne |= r));
  return (de(e, t, s, n), t.child);
}
function Hc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ti(e, t, n, r, s) {
  var i = xe(n) ? Dt : ce.current;
  return (
    (i = dn(t, i)),
    on(t, s),
    (n = ta(e, t, n, r, i, s)),
    (r = na()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        tt(e, t, s))
      : ($ && r && Vi(t), (t.flags |= 1), de(e, t, n, s), t.child)
  );
}
function yo(e, t, n, r, s) {
  if (xe(n)) {
    var i = !0;
    ul(t);
  } else i = !1;
  if ((on(t, s), t.stateNode === null))
    (Kr(e, t), Fc(t, n, r), bs(t, n, r, s), (r = !0));
  else if (e === null) {
    var a = t.stateNode,
      u = t.memoizedProps;
    a.props = u;
    var o = a.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = _e(c))
      : ((c = xe(n) ? Dt : ce.current), (c = dn(t, c)));
    var v = n.getDerivedStateFromProps,
      m =
        typeof v == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    (m ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((u !== r || o !== c) && ho(t, a, r, c)),
      (at = !1));
    var p = t.memoizedState;
    ((a.state = p),
      pl(t, r, a, s),
      (o = t.memoizedState),
      u !== r || p !== o || ge.current || at
        ? (typeof v == "function" && (Js(t, n, v, r), (o = t.memoizedState)),
          (u = at || fo(t, n, u, r, p, o, c))
            ? (m ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = o)),
          (a.props = r),
          (a.state = o),
          (a.context = c),
          (r = u))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((a = t.stateNode),
      pc(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : ze(t.type, u)),
      (a.props = c),
      (m = t.pendingProps),
      (p = a.context),
      (o = n.contextType),
      typeof o == "object" && o !== null
        ? (o = _e(o))
        : ((o = xe(n) ? Dt : ce.current), (o = dn(t, o))));
    var g = n.getDerivedStateFromProps;
    ((v =
      typeof g == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((u !== m || p !== o) && ho(t, a, r, o)),
      (at = !1),
      (p = t.memoizedState),
      (a.state = p),
      pl(t, r, a, s));
    var y = t.memoizedState;
    u !== m || p !== y || ge.current || at
      ? (typeof g == "function" && (Js(t, n, g, r), (y = t.memoizedState)),
        (c = at || fo(t, n, c, r, p, y, o) || !1)
          ? (v ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, y, o),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, y, o)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (a.props = r),
        (a.state = y),
        (a.context = o),
        (r = c))
      : (typeof a.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ni(e, t, n, r, i, s);
}
function ni(e, t, n, r, s, i) {
  Hc(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return (s && ro(t, n, !1), tt(e, t, i));
  ((r = t.stateNode), (Fh.current = t));
  var u =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = hn(t, e.child, null, i)), (t.child = hn(t, null, u, i)))
      : de(e, t, u, i),
    (t.memoizedState = r.state),
    s && ro(t, n, !0),
    t.child
  );
}
function Bc(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? no(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && no(e, t.context, !1),
    Zi(e, t.containerInfo));
}
function jo(e, t, n, r, s) {
  return (fn(), Wi(s), (t.flags |= 256), de(e, t, n, r), t.child);
}
var ri = { dehydrated: null, treeContext: null, retryLane: 0 };
function li(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $c(e, t, n) {
  var r = t.pendingProps,
    s = G.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    u;
  if (
    ((u = a) ||
      (u = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    U(G, s & 1),
    e === null)
  )
    return (
      Xs(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = Dl(a, r, 0, null)),
              (e = Ft(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = li(n)),
              (t.memoizedState = ri),
              e)
            : sa(t, a))
    );
  if (((s = e.memoizedState), s !== null && ((u = s.dehydrated), u !== null)))
    return Dh(e, t, a, r, u, s, n);
  if (i) {
    ((i = r.fallback), (a = t.mode), (s = e.child), (u = s.sibling));
    var o = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = o),
          (t.deletions = null))
        : ((r = jt(s, o)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      u !== null ? (i = jt(u, i)) : ((i = Ft(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? li(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ri),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = jt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function sa(e, t) {
  return (
    (t = Dl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Lr(e, t, n, r) {
  return (
    r !== null && Wi(r),
    hn(t, e.child, null, n),
    (e = sa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Dh(e, t, n, r, s, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = vs(Error(k(422)))), Lr(e, t, a, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (s = t.mode),
          (r = Dl({ mode: "visible", children: r.children }, s, 0, null)),
          (i = Ft(i, s, a, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && hn(t, e.child, null, a),
          (t.child.memoizedState = li(a)),
          (t.memoizedState = ri),
          i);
  if (!(t.mode & 1)) return Lr(e, t, a, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var u = r.dgst;
    return (
      (r = u),
      (i = Error(k(419))),
      (r = vs(i, r, void 0)),
      Lr(e, t, a, r)
    );
  }
  if (((u = (a & e.childLanes) !== 0), ve || u)) {
    if (((r = re), r !== null)) {
      switch (a & -a) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      ((s = s & (r.suspendedLanes | a) ? 0 : s),
        s !== 0 &&
          s !== i.retryLane &&
          ((i.retryLane = s), et(e, s), Ie(r, e, s, -1)));
    }
    return (da(), (r = vs(Error(k(421)))), Lr(e, t, a, r));
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Kh.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ke = vt(s.nextSibling)),
      (we = t),
      ($ = !0),
      (De = null),
      e !== null &&
        ((Pe[Te++] = Ke),
        (Pe[Te++] = Xe),
        (Pe[Te++] = Ot),
        (Ke = e.id),
        (Xe = e.overflow),
        (Ot = t)),
      (t = sa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function No(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Zs(e.return, t, n));
}
function gs(e, t, n, r, s) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = s));
}
function Vc(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    i = r.tail;
  if ((de(e, t, r.children, n), (r = G.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && No(e, n, t);
        else if (e.tag === 19) No(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((U(G, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          ((e = n.alternate),
            e !== null && ml(e) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          gs(t, !1, s, n, i));
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && ml(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = n), (n = s), (s = e));
        }
        gs(t, !0, n, null, i);
        break;
      case "together":
        gs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Kr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function tt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ut |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = jt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = jt(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Oh(e, t, n) {
  switch (t.tag) {
    case 3:
      (Bc(t), fn());
      break;
    case 5:
      mc(t);
      break;
    case 1:
      xe(t.type) && ul(t);
      break;
    case 4:
      Zi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      (U(fl, r._currentValue), (r._currentValue = s));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(G, G.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? $c(e, t, n)
            : (U(G, G.current & 1),
              (e = tt(e, t, n)),
              e !== null ? e.sibling : null);
      U(G, G.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Vc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        U(G, G.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Uc(e, t, n));
  }
  return tt(e, t, n);
}
var Gc, si, Wc, Yc;
Gc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
si = function () {};
Wc = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    ((e = t.stateNode), At(Ge.current));
    var i = null;
    switch (n) {
      case "input":
        ((s = Ps(e, s)), (r = Ps(e, r)), (i = []));
        break;
      case "select":
        ((s = q({}, s, { value: void 0 })),
          (r = q({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((s = Rs(e, s)), (r = Rs(e, r)), (i = []));
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = al);
    }
    Ls(n, r);
    var a;
    n = null;
    for (c in s)
      if (!r.hasOwnProperty(c) && s.hasOwnProperty(c) && s[c] != null)
        if (c === "style") {
          var u = s[c];
          for (a in u) u.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (qn.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var o = r[c];
      if (
        ((u = s != null ? s[c] : void 0),
        r.hasOwnProperty(c) && o !== u && (o != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (a in u)
              !u.hasOwnProperty(a) ||
                (o && o.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in o)
              o.hasOwnProperty(a) &&
                u[a] !== o[a] &&
                (n || (n = {}), (n[a] = o[a]));
          } else (n || (i || (i = []), i.push(c, n)), (n = o));
        else
          c === "dangerouslySetInnerHTML"
            ? ((o = o ? o.__html : void 0),
              (u = u ? u.__html : void 0),
              o != null && u !== o && (i = i || []).push(c, o))
            : c === "children"
              ? (typeof o != "string" && typeof o != "number") ||
                (i = i || []).push(c, "" + o)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (qn.hasOwnProperty(c)
                  ? (o != null && c === "onScroll" && H("scroll", e),
                    i || u === o || (i = []))
                  : (i = i || []).push(c, o));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Yc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function _n(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling));
  else
    for (s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function Ih(e, t, n) {
  var r = t.pendingProps;
  switch ((Gi(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (oe(t), null);
    case 1:
      return (xe(t.type) && ol(), oe(t), null);
    case 3:
      return (
        (r = t.stateNode),
        pn(),
        B(ge),
        B(ce),
        bi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Rr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), De !== null && (hi(De), (De = null)))),
        si(e, t),
        oe(t),
        null
      );
    case 5:
      Ji(t);
      var s = At(sr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Wc(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return (oe(t), null);
        }
        if (((e = At(Ge.current)), Rr(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[$e] = t), (r[rr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (H("cancel", r), H("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < On.length; s++) H(On[s], r);
              break;
            case "source":
              H("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (H("error", r), H("load", r));
              break;
            case "details":
              H("toggle", r);
              break;
            case "input":
              (Ma(r, i), H("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                H("invalid", r));
              break;
            case "textarea":
              (_a(r, i), H("invalid", r));
          }
          (Ls(n, i), (s = null));
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var u = i[a];
              a === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Mr(r.textContent, u, e),
                    (s = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Mr(r.textContent, u, e),
                    (s = ["children", "" + u]))
                : qn.hasOwnProperty(a) &&
                  u != null &&
                  a === "onScroll" &&
                  H("scroll", r);
            }
          switch (n) {
            case "input":
              (Nr(r), Ra(r, i, !0));
              break;
            case "textarea":
              (Nr(r), La(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = al);
          }
          ((r = s), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((a = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ju(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = a.createElement(n, { is: r.is }))
                  : ((e = a.createElement(n)),
                    n === "select" &&
                      ((a = e),
                      r.multiple
                        ? (a.multiple = !0)
                        : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[$e] = t),
            (e[rr] = r),
            Gc(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((a = As(n, r)), n)) {
              case "dialog":
                (H("cancel", e), H("close", e), (s = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (H("load", e), (s = r));
                break;
              case "video":
              case "audio":
                for (s = 0; s < On.length; s++) H(On[s], e);
                s = r;
                break;
              case "source":
                (H("error", e), (s = r));
                break;
              case "img":
              case "image":
              case "link":
                (H("error", e), H("load", e), (s = r));
                break;
              case "details":
                (H("toggle", e), (s = r));
                break;
              case "input":
                (Ma(e, r), (s = Ps(e, r)), H("invalid", e));
                break;
              case "option":
                s = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = q({}, r, { value: void 0 })),
                  H("invalid", e));
                break;
              case "textarea":
                (_a(e, r), (s = Rs(e, r)), H("invalid", e));
                break;
              default:
                s = r;
            }
            (Ls(n, s), (u = s));
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var o = u[i];
                i === "style"
                  ? wu(e, o)
                  : i === "dangerouslySetInnerHTML"
                    ? ((o = o ? o.__html : void 0), o != null && Nu(e, o))
                    : i === "children"
                      ? typeof o == "string"
                        ? (n !== "textarea" || o !== "") && Qn(e, o)
                        : typeof o == "number" && Qn(e, "" + o)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (qn.hasOwnProperty(i)
                          ? o != null && i === "onScroll" && H("scroll", e)
                          : o != null && Mi(e, i, o, a));
              }
            switch (n) {
              case "input":
                (Nr(e), Ra(e, r, !1));
                break;
              case "textarea":
                (Nr(e), La(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? rn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      rn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = al);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (oe(t), null);
    case 6:
      if (e && t.stateNode != null) Yc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = At(sr.current)), At(Ge.current), Rr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[$e] = t),
            (i = r.nodeValue !== n) && ((e = we), e !== null))
          )
            switch (e.tag) {
              case 3:
                Mr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Mr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[$e] = t),
            (t.stateNode = r));
      }
      return (oe(t), null);
    case 13:
      if (
        (B(G),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && ke !== null && t.mode & 1 && !(t.flags & 128))
          (cc(), fn(), (t.flags |= 98560), (i = !1));
        else if (((i = Rr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(k(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(k(317));
            i[$e] = t;
          } else
            (fn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (oe(t), (i = !1));
        } else (De !== null && (hi(De), (De = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || G.current & 1 ? ee === 0 && (ee = 3) : da())),
          t.updateQueue !== null && (t.flags |= 4),
          oe(t),
          null);
    case 4:
      return (
        pn(),
        si(e, t),
        e === null && tr(t.stateNode.containerInfo),
        oe(t),
        null
      );
    case 10:
      return (Qi(t.type._context), oe(t), null);
    case 17:
      return (xe(t.type) && ol(), oe(t), null);
    case 19:
      if ((B(G), (i = t.memoizedState), i === null)) return (oe(t), null);
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) _n(i, !1);
        else {
          if (ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = ml(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    _n(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (U(G, (G.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Z() > vn &&
            ((t.flags |= 128), (r = !0), _n(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ml(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              _n(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !$)
            )
              return (oe(t), null);
          } else
            2 * Z() - i.renderingStartTime > vn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), _n(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Z()),
          (t.sibling = null),
          (n = G.current),
          U(G, r ? (n & 1) | 2 : n & 1),
          t)
        : (oe(t), null);
    case 22:
    case 23:
      return (
        ca(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ne & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Uh(e, t) {
  switch ((Gi(t), t.tag)) {
    case 1:
      return (
        xe(t.type) && ol(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        pn(),
        B(ge),
        B(ce),
        bi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Ji(t), null);
    case 13:
      if ((B(G), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        fn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (B(G), null);
    case 4:
      return (pn(), null);
    case 10:
      return (Qi(t.type._context), null);
    case 22:
    case 23:
      return (ca(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Ar = !1,
  ue = !1,
  Hh = typeof WeakSet == "function" ? WeakSet : Set,
  C = null;
function tn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Q(e, t, r);
      }
    else n.current = null;
}
function ii(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var ko = !1;
function Bh(e, t) {
  if (((Vs = ll), (e = Zu()), $i(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            u = -1,
            o = -1,
            c = 0,
            v = 0,
            m = e,
            p = null;
          t: for (;;) {
            for (
              var g;
              m !== n || (s !== 0 && m.nodeType !== 3) || (u = a + s),
                m !== i || (r !== 0 && m.nodeType !== 3) || (o = a + r),
                m.nodeType === 3 && (a += m.nodeValue.length),
                (g = m.firstChild) !== null;
            )
              ((p = m), (m = g));
            for (;;) {
              if (m === e) break t;
              if (
                (p === n && ++c === s && (u = a),
                p === i && ++v === r && (o = a),
                (g = m.nextSibling) !== null)
              )
                break;
              ((m = p), (p = m.parentNode));
            }
            m = g;
          }
          n = u === -1 || o === -1 ? null : { start: u, end: o };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Gs = { focusedElem: e, selectionRange: n }, ll = !1, C = t; C !== null; )
    if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (C = e));
    else
      for (; C !== null; ) {
        t = C;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var N = y.memoizedProps,
                    w = y.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? N : ze(t.type, N),
                      w,
                    );
                  f.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (x) {
          Q(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (C = e));
          break;
        }
        C = t.return;
      }
  return ((y = ko), (ko = !1), y);
}
function Gn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var i = s.destroy;
        ((s.destroy = void 0), i !== void 0 && ii(t, n, i));
      }
      s = s.next;
    } while (s !== r);
  }
}
function zl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ai(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function qc(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), qc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[$e], delete t[rr], delete t[qs], delete t[wh], delete t[Sh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Qc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function wo(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Qc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function oi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = al)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (oi(e, t, n), e = e.sibling; e !== null; )
      (oi(e, t, n), (e = e.sibling));
}
function ui(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ui(e, t, n), e = e.sibling; e !== null; )
      (ui(e, t, n), (e = e.sibling));
}
var le = null,
  Fe = !1;
function st(e, t, n) {
  for (n = n.child; n !== null; ) (Kc(e, t, n), (n = n.sibling));
}
function Kc(e, t, n) {
  if (Ve && typeof Ve.onCommitFiberUnmount == "function")
    try {
      Ve.onCommitFiberUnmount(El, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ue || tn(n, t);
    case 6:
      var r = le,
        s = Fe;
      ((le = null),
        st(e, t, n),
        (le = r),
        (Fe = s),
        le !== null &&
          (Fe
            ? ((e = le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : le.removeChild(n.stateNode)));
      break;
    case 18:
      le !== null &&
        (Fe
          ? ((e = le),
            (n = n.stateNode),
            e.nodeType === 8
              ? cs(e.parentNode, n)
              : e.nodeType === 1 && cs(e, n),
            Jn(e))
          : cs(le, n.stateNode));
      break;
    case 4:
      ((r = le),
        (s = Fe),
        (le = n.stateNode.containerInfo),
        (Fe = !0),
        st(e, t, n),
        (le = r),
        (Fe = s));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var i = s,
            a = i.destroy;
          ((i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && ii(n, t, a),
            (s = s.next));
        } while (s !== r);
      }
      st(e, t, n);
      break;
    case 1:
      if (
        !ue &&
        (tn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (u) {
          Q(n, t, u);
        }
      st(e, t, n);
      break;
    case 21:
      st(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ue = (r = ue) || n.memoizedState !== null), st(e, t, n), (ue = r))
        : st(e, t, n);
      break;
    default:
      st(e, t, n);
  }
}
function So(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Hh()),
      t.forEach(function (r) {
        var s = Xh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      }));
  }
}
function Ae(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var i = e,
          a = t,
          u = a;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              ((le = u.stateNode), (Fe = !1));
              break e;
            case 3:
              ((le = u.stateNode.containerInfo), (Fe = !0));
              break e;
            case 4:
              ((le = u.stateNode.containerInfo), (Fe = !0));
              break e;
          }
          u = u.return;
        }
        if (le === null) throw Error(k(160));
        (Kc(i, a, s), (le = null), (Fe = !1));
        var o = s.alternate;
        (o !== null && (o.return = null), (s.return = null));
      } catch (c) {
        Q(s, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Xc(t, e), (t = t.sibling));
}
function Xc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ae(t, e), He(e), r & 4)) {
        try {
          (Gn(3, e, e.return), zl(3, e));
        } catch (N) {
          Q(e, e.return, N);
        }
        try {
          Gn(5, e, e.return);
        } catch (N) {
          Q(e, e.return, N);
        }
      }
      break;
    case 1:
      (Ae(t, e), He(e), r & 512 && n !== null && tn(n, n.return));
      break;
    case 5:
      if (
        (Ae(t, e),
        He(e),
        r & 512 && n !== null && tn(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          Qn(s, "");
        } catch (N) {
          Q(e, e.return, N);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          u = e.type,
          o = e.updateQueue;
        if (((e.updateQueue = null), o !== null))
          try {
            (u === "input" && i.type === "radio" && i.name != null && xu(s, i),
              As(u, a));
            var c = As(u, i);
            for (a = 0; a < o.length; a += 2) {
              var v = o[a],
                m = o[a + 1];
              v === "style"
                ? wu(s, m)
                : v === "dangerouslySetInnerHTML"
                  ? Nu(s, m)
                  : v === "children"
                    ? Qn(s, m)
                    : Mi(s, v, m, c);
            }
            switch (u) {
              case "input":
                Ts(s, i);
                break;
              case "textarea":
                yu(s, i);
                break;
              case "select":
                var p = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? rn(s, !!i.multiple, g, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? rn(s, !!i.multiple, i.defaultValue, !0)
                      : rn(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[rr] = i;
          } catch (N) {
            Q(e, e.return, N);
          }
      }
      break;
    case 6:
      if ((Ae(t, e), He(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        ((s = e.stateNode), (i = e.memoizedProps));
        try {
          s.nodeValue = i;
        } catch (N) {
          Q(e, e.return, N);
        }
      }
      break;
    case 3:
      if (
        (Ae(t, e), He(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jn(t.containerInfo);
        } catch (N) {
          Q(e, e.return, N);
        }
      break;
    case 4:
      (Ae(t, e), He(e));
      break;
    case 13:
      (Ae(t, e),
        He(e),
        (s = e.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (oa = Z())),
        r & 4 && So(e));
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ue = (c = ue) || v), Ae(t, e), (ue = c)) : Ae(t, e),
        He(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !v && e.mode & 1)
        )
          for (C = e, v = e.child; v !== null; ) {
            for (m = C = v; C !== null; ) {
              switch (((p = C), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gn(4, p, p.return);
                  break;
                case 1:
                  tn(p, p.return);
                  var y = p.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    ((r = p), (n = p.return));
                    try {
                      ((t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount());
                    } catch (N) {
                      Q(r, n, N);
                    }
                  }
                  break;
                case 5:
                  tn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Eo(m);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (C = g)) : Eo(m);
            }
            v = v.sibling;
          }
        e: for (v = null, m = e; ; ) {
          if (m.tag === 5) {
            if (v === null) {
              v = m;
              try {
                ((s = m.stateNode),
                  c
                    ? ((i = s.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = m.stateNode),
                      (o = m.memoizedProps.style),
                      (a =
                        o != null && o.hasOwnProperty("display")
                          ? o.display
                          : null),
                      (u.style.display = ku("display", a))));
              } catch (N) {
                Q(e, e.return, N);
              }
            }
          } else if (m.tag === 6) {
            if (v === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (N) {
                Q(e, e.return, N);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            ((m.child.return = m), (m = m.child));
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            (v === m && (v = null), (m = m.return));
          }
          (v === m && (v = null),
            (m.sibling.return = m.return),
            (m = m.sibling));
        }
      }
      break;
    case 19:
      (Ae(t, e), He(e), r & 4 && So(e));
      break;
    case 21:
      break;
    default:
      (Ae(t, e), He(e));
  }
}
function He(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Qc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Qn(s, ""), (r.flags &= -33));
          var i = wo(e);
          ui(e, i, s);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            u = wo(e);
          oi(e, u, a);
          break;
        default:
          throw Error(k(161));
      }
    } catch (o) {
      Q(e, e.return, o);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function $h(e, t, n) {
  ((C = e), Zc(e));
}
function Zc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var s = C,
      i = s.child;
    if (s.tag === 22 && r) {
      var a = s.memoizedState !== null || Ar;
      if (!a) {
        var u = s.alternate,
          o = (u !== null && u.memoizedState !== null) || ue;
        u = Ar;
        var c = ue;
        if (((Ar = a), (ue = o) && !c))
          for (C = s; C !== null; )
            ((a = C),
              (o = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Po(s)
                : o !== null
                  ? ((o.return = a), (C = o))
                  : Po(s));
        for (; i !== null; ) ((C = i), Zc(i), (i = i.sibling));
        ((C = s), (Ar = u), (ue = c));
      }
      Co(e);
    } else
      s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (C = i)) : Co(e);
  }
}
function Co(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ue || zl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ue)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && oo(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                oo(t, a, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var o = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    o.autoFocus && n.focus();
                    break;
                  case "img":
                    o.src && (n.src = o.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var v = c.memoizedState;
                  if (v !== null) {
                    var m = v.dehydrated;
                    m !== null && Jn(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        ue || (t.flags & 512 && ai(t));
      } catch (p) {
        Q(t, t.return, p);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (C = n));
      break;
    }
    C = t.return;
  }
}
function Eo(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (C = n));
      break;
    }
    C = t.return;
  }
}
function Po(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            zl(4, t);
          } catch (o) {
            Q(t, n, o);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (o) {
              Q(t, s, o);
            }
          }
          var i = t.return;
          try {
            ai(t);
          } catch (o) {
            Q(t, i, o);
          }
          break;
        case 5:
          var a = t.return;
          try {
            ai(t);
          } catch (o) {
            Q(t, a, o);
          }
      }
    } catch (o) {
      Q(t, t.return, o);
    }
    if (t === e) {
      C = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      ((u.return = t.return), (C = u));
      break;
    }
    C = t.return;
  }
}
var Vh = Math.ceil,
  xl = nt.ReactCurrentDispatcher,
  ia = nt.ReactCurrentOwner,
  Re = nt.ReactCurrentBatchConfig,
  D = 0,
  re = null,
  J = null,
  se = 0,
  Ne = 0,
  nn = Ct(0),
  ee = 0,
  ur = null,
  Ut = 0,
  Fl = 0,
  aa = 0,
  Wn = null,
  me = null,
  oa = 0,
  vn = 1 / 0,
  Ye = null,
  yl = !1,
  ci = null,
  xt = null,
  zr = !1,
  dt = null,
  jl = 0,
  Yn = 0,
  di = null,
  Xr = -1,
  Zr = 0;
function fe() {
  return D & 6 ? Z() : Xr !== -1 ? Xr : (Xr = Z());
}
function yt(e) {
  return e.mode & 1
    ? D & 2 && se !== 0
      ? se & -se
      : Eh.transition !== null
        ? (Zr === 0 && (Zr = Fu()), Zr)
        : ((e = I),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : $u(e.type))),
          e)
    : 1;
}
function Ie(e, t, n, r) {
  if (50 < Yn) throw ((Yn = 0), (di = null), Error(k(185)));
  (hr(e, n, r),
    (!(D & 2) || e !== re) &&
      (e === re && (!(D & 2) && (Fl |= n), ee === 4 && ut(e, se)),
      ye(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((vn = Z() + 500), _l && Et())));
}
function ye(e, t) {
  var n = e.callbackNode;
  Ef(e, t);
  var r = rl(e, e === re ? se : 0);
  if (r === 0)
    (n !== null && Fa(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Fa(n), t === 1))
      (e.tag === 0 ? Ch(To.bind(null, e)) : ac(To.bind(null, e)),
        Nh(function () {
          !(D & 6) && Et();
        }),
        (n = null));
    else {
      switch (Du(r)) {
        case 1:
          n = zi;
          break;
        case 4:
          n = Au;
          break;
        case 16:
          n = nl;
          break;
        case 536870912:
          n = zu;
          break;
        default:
          n = nl;
      }
      n = sd(n, Jc.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Jc(e, t) {
  if (((Xr = -1), (Zr = 0), D & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (un() && e.callbackNode !== n) return null;
  var r = rl(e, e === re ? se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Nl(e, r);
  else {
    t = r;
    var s = D;
    D |= 2;
    var i = ed();
    (re !== e || se !== t) && ((Ye = null), (vn = Z() + 500), zt(e, t));
    do
      try {
        Yh();
        break;
      } catch (u) {
        bc(e, u);
      }
    while (!0);
    (qi(),
      (xl.current = i),
      (D = s),
      J !== null ? (t = 0) : ((re = null), (se = 0), (t = ee)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = Is(e)), s !== 0 && ((r = s), (t = fi(e, s)))), t === 1)
    )
      throw ((n = ur), zt(e, 0), ut(e, r), ye(e, Z()), n);
    if (t === 6) ut(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !Gh(s) &&
          ((t = Nl(e, r)),
          t === 2 && ((i = Is(e)), i !== 0 && ((r = i), (t = fi(e, i)))),
          t === 1))
      )
        throw ((n = ur), zt(e, 0), ut(e, r), ye(e, Z()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Rt(e, me, Ye);
          break;
        case 3:
          if (
            (ut(e, r), (r & 130023424) === r && ((t = oa + 500 - Z()), 10 < t))
          ) {
            if (rl(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              (fe(), (e.pingedLanes |= e.suspendedLanes & s));
              break;
            }
            e.timeoutHandle = Ys(Rt.bind(null, e, me, Ye), t);
            break;
          }
          Rt(e, me, Ye);
          break;
        case 4:
          if ((ut(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var a = 31 - Oe(r);
            ((i = 1 << a), (a = t[a]), a > s && (s = a), (r &= ~i));
          }
          if (
            ((r = s),
            (r = Z() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Vh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ys(Rt.bind(null, e, me, Ye), r);
            break;
          }
          Rt(e, me, Ye);
          break;
        case 5:
          Rt(e, me, Ye);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return (ye(e, Z()), e.callbackNode === n ? Jc.bind(null, e) : null);
}
function fi(e, t) {
  var n = Wn;
  return (
    e.current.memoizedState.isDehydrated && (zt(e, t).flags |= 256),
    (e = Nl(e, t)),
    e !== 2 && ((t = me), (me = n), t !== null && hi(t)),
    e
  );
}
function hi(e) {
  me === null ? (me = e) : me.push.apply(me, e);
}
function Gh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!Ue(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function ut(e, t) {
  for (
    t &= ~aa,
      t &= ~Fl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Oe(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function To(e) {
  if (D & 6) throw Error(k(327));
  un();
  var t = rl(e, 0);
  if (!(t & 1)) return (ye(e, Z()), null);
  var n = Nl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Is(e);
    r !== 0 && ((t = r), (n = fi(e, r)));
  }
  if (n === 1) throw ((n = ur), zt(e, 0), ut(e, t), ye(e, Z()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Rt(e, me, Ye),
    ye(e, Z()),
    null
  );
}
function ua(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    ((D = n), D === 0 && ((vn = Z() + 500), _l && Et()));
  }
}
function Ht(e) {
  dt !== null && dt.tag === 0 && !(D & 6) && un();
  var t = D;
  D |= 1;
  var n = Re.transition,
    r = I;
  try {
    if (((Re.transition = null), (I = 1), e)) return e();
  } finally {
    ((I = r), (Re.transition = n), (D = t), !(D & 6) && Et());
  }
}
function ca() {
  ((Ne = nn.current), B(nn));
}
function zt(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), jh(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n;
      switch ((Gi(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && ol());
          break;
        case 3:
          (pn(), B(ge), B(ce), bi());
          break;
        case 5:
          Ji(r);
          break;
        case 4:
          pn();
          break;
        case 13:
          B(G);
          break;
        case 19:
          B(G);
          break;
        case 10:
          Qi(r.type._context);
          break;
        case 22:
        case 23:
          ca();
      }
      n = n.return;
    }
  if (
    ((re = e),
    (J = e = jt(e.current, null)),
    (se = Ne = t),
    (ee = 0),
    (ur = null),
    (aa = Fl = Ut = 0),
    (me = Wn = null),
    Lt !== null)
  ) {
    for (t = 0; t < Lt.length; t++)
      if (((n = Lt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          ((i.next = s), (r.next = a));
        }
        n.pending = r;
      }
    Lt = null;
  }
  return e;
}
function bc(e, t) {
  do {
    var n = J;
    try {
      if ((qi(), (qr.current = gl), vl)) {
        for (var r = W.memoizedState; r !== null; ) {
          var s = r.queue;
          (s !== null && (s.pending = null), (r = r.next));
        }
        vl = !1;
      }
      if (
        ((It = 0),
        (ne = b = W = null),
        (Vn = !1),
        (ir = 0),
        (ia.current = null),
        n === null || n.return === null)
      ) {
        ((ee = 1), (ur = t), (J = null));
        break;
      }
      e: {
        var i = e,
          a = n.return,
          u = n,
          o = t;
        if (
          ((t = se),
          (u.flags |= 32768),
          o !== null && typeof o == "object" && typeof o.then == "function")
        ) {
          var c = o,
            v = u,
            m = v.tag;
          if (!(v.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = v.alternate;
            p
              ? ((v.updateQueue = p.updateQueue),
                (v.memoizedState = p.memoizedState),
                (v.lanes = p.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var g = mo(a);
          if (g !== null) {
            ((g.flags &= -257),
              vo(g, a, u, i, t),
              g.mode & 1 && po(i, c, t),
              (t = g),
              (o = c));
            var y = t.updateQueue;
            if (y === null) {
              var N = new Set();
              (N.add(o), (t.updateQueue = N));
            } else y.add(o);
            break e;
          } else {
            if (!(t & 1)) {
              (po(i, c, t), da());
              break e;
            }
            o = Error(k(426));
          }
        } else if ($ && u.mode & 1) {
          var w = mo(a);
          if (w !== null) {
            (!(w.flags & 65536) && (w.flags |= 256),
              vo(w, a, u, i, t),
              Wi(mn(o, u)));
            break e;
          }
        }
        ((i = o = mn(o, u)),
          ee !== 4 && (ee = 2),
          Wn === null ? (Wn = [i]) : Wn.push(i),
          (i = a));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var f = Dc(i, o, t);
              ao(i, f);
              break e;
            case 1:
              u = o;
              var d = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (xt === null || !xt.has(h))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var x = Oc(i, u, t);
                ao(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      nd(n);
    } catch (S) {
      ((t = S), J === n && n !== null && (J = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function ed() {
  var e = xl.current;
  return ((xl.current = gl), e === null ? gl : e);
}
function da() {
  ((ee === 0 || ee === 3 || ee === 2) && (ee = 4),
    re === null || (!(Ut & 268435455) && !(Fl & 268435455)) || ut(re, se));
}
function Nl(e, t) {
  var n = D;
  D |= 2;
  var r = ed();
  (re !== e || se !== t) && ((Ye = null), zt(e, t));
  do
    try {
      Wh();
      break;
    } catch (s) {
      bc(e, s);
    }
  while (!0);
  if ((qi(), (D = n), (xl.current = r), J !== null)) throw Error(k(261));
  return ((re = null), (se = 0), ee);
}
function Wh() {
  for (; J !== null; ) td(J);
}
function Yh() {
  for (; J !== null && !gf(); ) td(J);
}
function td(e) {
  var t = ld(e.alternate, e, Ne);
  ((e.memoizedProps = e.pendingProps),
    t === null ? nd(e) : (J = t),
    (ia.current = null));
}
function nd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Uh(n, t)), n !== null)) {
        ((n.flags &= 32767), (J = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ee = 6), (J = null));
        return;
      }
    } else if (((n = Ih(n, t, Ne)), n !== null)) {
      J = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  ee === 0 && (ee = 5);
}
function Rt(e, t, n) {
  var r = I,
    s = Re.transition;
  try {
    ((Re.transition = null), (I = 1), qh(e, t, n, r));
  } finally {
    ((Re.transition = s), (I = r));
  }
  return null;
}
function qh(e, t, n, r) {
  do un();
  while (dt !== null);
  if (D & 6) throw Error(k(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (Pf(e, i),
    e === re && ((J = re = null), (se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      zr ||
      ((zr = !0),
      sd(nl, function () {
        return (un(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = Re.transition), (Re.transition = null));
    var a = I;
    I = 1;
    var u = D;
    ((D |= 4),
      (ia.current = null),
      Bh(e, n),
      Xc(n, e),
      hh(Gs),
      (ll = !!Vs),
      (Gs = Vs = null),
      (e.current = n),
      $h(n),
      xf(),
      (D = u),
      (I = a),
      (Re.transition = i));
  } else e.current = n;
  if (
    (zr && ((zr = !1), (dt = e), (jl = s)),
    (i = e.pendingLanes),
    i === 0 && (xt = null),
    Nf(n.stateNode),
    ye(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest }));
  if (yl) throw ((yl = !1), (e = ci), (ci = null), e);
  return (
    jl & 1 && e.tag !== 0 && un(),
    (i = e.pendingLanes),
    i & 1 ? (e === di ? Yn++ : ((Yn = 0), (di = e))) : (Yn = 0),
    Et(),
    null
  );
}
function un() {
  if (dt !== null) {
    var e = Du(jl),
      t = Re.transition,
      n = I;
    try {
      if (((Re.transition = null), (I = 16 > e ? 16 : e), dt === null))
        var r = !1;
      else {
        if (((e = dt), (dt = null), (jl = 0), D & 6)) throw Error(k(331));
        var s = D;
        for (D |= 4, C = e.current; C !== null; ) {
          var i = C,
            a = i.child;
          if (C.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var o = 0; o < u.length; o++) {
                var c = u[o];
                for (C = c; C !== null; ) {
                  var v = C;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gn(8, v, i);
                  }
                  var m = v.child;
                  if (m !== null) ((m.return = v), (C = m));
                  else
                    for (; C !== null; ) {
                      v = C;
                      var p = v.sibling,
                        g = v.return;
                      if ((qc(v), v === c)) {
                        C = null;
                        break;
                      }
                      if (p !== null) {
                        ((p.return = g), (C = p));
                        break;
                      }
                      C = g;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var N = y.child;
                if (N !== null) {
                  y.child = null;
                  do {
                    var w = N.sibling;
                    ((N.sibling = null), (N = w));
                  } while (N !== null);
                }
              }
              C = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) ((a.return = i), (C = a));
          else
            e: for (; C !== null; ) {
              if (((i = C), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Gn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                ((f.return = i.return), (C = f));
                break e;
              }
              C = i.return;
            }
        }
        var d = e.current;
        for (C = d; C !== null; ) {
          a = C;
          var h = a.child;
          if (a.subtreeFlags & 2064 && h !== null) ((h.return = a), (C = h));
          else
            e: for (a = d; C !== null; ) {
              if (((u = C), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zl(9, u);
                  }
                } catch (S) {
                  Q(u, u.return, S);
                }
              if (u === a) {
                C = null;
                break e;
              }
              var x = u.sibling;
              if (x !== null) {
                ((x.return = u.return), (C = x));
                break e;
              }
              C = u.return;
            }
        }
        if (
          ((D = s), Et(), Ve && typeof Ve.onPostCommitFiberRoot == "function")
        )
          try {
            Ve.onPostCommitFiberRoot(El, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((I = n), (Re.transition = t));
    }
  }
  return !1;
}
function Mo(e, t, n) {
  ((t = mn(n, t)),
    (t = Dc(e, t, 1)),
    (e = gt(e, t, 1)),
    (t = fe()),
    e !== null && (hr(e, 1, t), ye(e, t)));
}
function Q(e, t, n) {
  if (e.tag === 3) Mo(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Mo(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (xt === null || !xt.has(r)))
        ) {
          ((e = mn(n, e)),
            (e = Oc(t, e, 1)),
            (t = gt(t, e, 1)),
            (e = fe()),
            t !== null && (hr(t, 1, e), ye(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Qh(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    re === e &&
      (se & n) === n &&
      (ee === 4 || (ee === 3 && (se & 130023424) === se && 500 > Z() - oa)
        ? zt(e, 0)
        : (aa |= n)),
    ye(e, t));
}
function rd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Sr), (Sr <<= 1), !(Sr & 130023424) && (Sr = 4194304))
      : (t = 1));
  var n = fe();
  ((e = et(e, t)), e !== null && (hr(e, t, n), ye(e, n)));
}
function Kh(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), rd(e, n));
}
function Xh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  (r !== null && r.delete(t), rd(e, n));
}
var ld;
ld = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ge.current) ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((ve = !1), Oh(e, t, n));
      ve = !!(e.flags & 131072);
    }
  else ((ve = !1), $ && t.flags & 1048576 && oc(t, dl, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Kr(e, t), (e = t.pendingProps));
      var s = dn(t, ce.current);
      (on(t, n), (s = ta(null, t, r, e, s, n)));
      var i = na();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            xe(r) ? ((i = !0), ul(t)) : (i = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            Xi(t),
            (s.updater = Al),
            (t.stateNode = s),
            (s._reactInternals = t),
            bs(t, r, e, n),
            (t = ni(null, t, r, !0, i, n)))
          : ((t.tag = 0), $ && i && Vi(t), de(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Kr(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = Jh(r)),
          (e = ze(r, e)),
          s)
        ) {
          case 0:
            t = ti(null, t, r, e, n);
            break e;
          case 1:
            t = yo(null, t, r, e, n);
            break e;
          case 11:
            t = go(null, t, r, e, n);
            break e;
          case 14:
            t = xo(null, t, r, ze(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : ze(r, s)),
        ti(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : ze(r, s)),
        yo(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((Bc(t), e === null)) throw Error(k(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (s = i.element),
          pc(e, t),
          pl(t, r, null, n));
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((s = mn(Error(k(423)), t)), (t = jo(e, t, r, n, s)));
            break e;
          } else if (r !== s) {
            ((s = mn(Error(k(424)), t)), (t = jo(e, t, r, n, s)));
            break e;
          } else
            for (
              ke = vt(t.stateNode.containerInfo.firstChild),
                we = t,
                $ = !0,
                De = null,
                n = fc(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((fn(), r === s)) {
            t = tt(e, t, n);
            break e;
          }
          de(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        mc(t),
        e === null && Xs(t),
        (r = t.type),
        (s = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = s.children),
        Ws(r, s) ? (a = null) : i !== null && Ws(r, i) && (t.flags |= 32),
        Hc(e, t),
        de(e, t, a, n),
        t.child
      );
    case 6:
      return (e === null && Xs(t), null);
    case 13:
      return $c(e, t, n);
    case 4:
      return (
        Zi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = hn(t, null, r, n)) : de(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : ze(r, s)),
        go(e, t, r, s, n)
      );
    case 7:
      return (de(e, t, t.pendingProps, n), t.child);
    case 8:
      return (de(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (de(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (i = t.memoizedProps),
          (a = s.value),
          U(fl, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (Ue(i.value, a)) {
            if (i.children === s.children && !ge.current) {
              t = tt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                a = i.child;
                for (var o = u.firstContext; o !== null; ) {
                  if (o.context === r) {
                    if (i.tag === 1) {
                      ((o = Ze(-1, n & -n)), (o.tag = 2));
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var v = c.pending;
                        (v === null
                          ? (o.next = o)
                          : ((o.next = v.next), (v.next = o)),
                          (c.pending = o));
                      }
                    }
                    ((i.lanes |= n),
                      (o = i.alternate),
                      o !== null && (o.lanes |= n),
                      Zs(i.return, n, t),
                      (u.lanes |= n));
                    break;
                  }
                  o = o.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(k(341));
                ((a.lanes |= n),
                  (u = a.alternate),
                  u !== null && (u.lanes |= n),
                  Zs(a, n, t),
                  (a = i.sibling));
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    ((i.return = a.return), (a = i));
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        (de(e, t, s.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        on(t, n),
        (s = _e(s)),
        (r = r(s)),
        (t.flags |= 1),
        de(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = ze(r, t.pendingProps)),
        (s = ze(r.type, s)),
        xo(e, t, r, s, n)
      );
    case 15:
      return Ic(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : ze(r, s)),
        Kr(e, t),
        (t.tag = 1),
        xe(r) ? ((e = !0), ul(t)) : (e = !1),
        on(t, n),
        Fc(t, r, s),
        bs(t, r, s, n),
        ni(null, t, r, !0, e, n)
      );
    case 19:
      return Vc(e, t, n);
    case 22:
      return Uc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function sd(e, t) {
  return Lu(e, t);
}
function Zh(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Me(e, t, n, r) {
  return new Zh(e, t, n, r);
}
function fa(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Jh(e) {
  if (typeof e == "function") return fa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === _i)) return 11;
    if (e === Li) return 14;
  }
  return 2;
}
function jt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Me(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Jr(e, t, n, r, s, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) fa(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Yt:
        return Ft(n.children, s, i, t);
      case Ri:
        ((a = 8), (s |= 8));
        break;
      case ws:
        return (
          (e = Me(12, n, t, s | 2)),
          (e.elementType = ws),
          (e.lanes = i),
          e
        );
      case Ss:
        return ((e = Me(13, n, t, s)), (e.elementType = Ss), (e.lanes = i), e);
      case Cs:
        return ((e = Me(19, n, t, s)), (e.elementType = Cs), (e.lanes = i), e);
      case mu:
        return Dl(n, s, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case hu:
              a = 10;
              break e;
            case pu:
              a = 9;
              break e;
            case _i:
              a = 11;
              break e;
            case Li:
              a = 14;
              break e;
            case it:
              ((a = 16), (r = null));
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Me(a, n, t, s)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  );
}
function Ft(e, t, n, r) {
  return ((e = Me(7, e, r, t)), (e.lanes = n), e);
}
function Dl(e, t, n, r) {
  return (
    (e = Me(22, e, r, t)),
    (e.elementType = mu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function xs(e, t, n) {
  return ((e = Me(6, e, null, t)), (e.lanes = n), e);
}
function ys(e, t, n) {
  return (
    (t = Me(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function bh(e, t, n, r, s) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = bl(0)),
    (this.expirationTimes = bl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = bl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null));
}
function ha(e, t, n, r, s, i, a, u, o) {
  return (
    (e = new bh(e, t, n, u, o)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Me(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Xi(i),
    e
  );
}
function ep(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Wt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function id(e) {
  if (!e) return wt;
  e = e._reactInternals;
  e: {
    if ($t(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (xe(n)) return ic(e, n, t);
  }
  return t;
}
function ad(e, t, n, r, s, i, a, u, o) {
  return (
    (e = ha(n, r, !0, e, s, i, a, u, o)),
    (e.context = id(null)),
    (n = e.current),
    (r = fe()),
    (s = yt(n)),
    (i = Ze(r, s)),
    (i.callback = t ?? null),
    gt(n, i, s),
    (e.current.lanes = s),
    hr(e, s, r),
    ye(e, r),
    e
  );
}
function Ol(e, t, n, r) {
  var s = t.current,
    i = fe(),
    a = yt(s);
  return (
    (n = id(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ze(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = gt(s, t, a)),
    e !== null && (Ie(e, s, a, i), Yr(e, s, a)),
    a
  );
}
function kl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ro(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function pa(e, t) {
  (Ro(e, t), (e = e.alternate) && Ro(e, t));
}
function tp() {
  return null;
}
var od =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ma(e) {
  this._internalRoot = e;
}
Il.prototype.render = ma.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Ol(e, t, null, null);
};
Il.prototype.unmount = ma.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Ht(function () {
      Ol(null, e, null, null);
    }),
      (t[be] = null));
  }
};
function Il(e) {
  this._internalRoot = e;
}
Il.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Uu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ot.length && t !== 0 && t < ot[n].priority; n++);
    (ot.splice(n, 0, e), n === 0 && Bu(e));
  }
};
function va(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ul(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function _o() {}
function np(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = kl(a);
        i.call(c);
      };
    }
    var a = ad(t, r, e, 0, null, !1, !1, "", _o);
    return (
      (e._reactRootContainer = a),
      (e[be] = a.current),
      tr(e.nodeType === 8 ? e.parentNode : e),
      Ht(),
      a
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = kl(o);
      u.call(c);
    };
  }
  var o = ha(e, 0, !1, null, null, !1, !1, "", _o);
  return (
    (e._reactRootContainer = o),
    (e[be] = o.current),
    tr(e.nodeType === 8 ? e.parentNode : e),
    Ht(function () {
      Ol(t, o, n, r);
    }),
    o
  );
}
function Hl(e, t, n, r, s) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof s == "function") {
      var u = s;
      s = function () {
        var o = kl(a);
        u.call(o);
      };
    }
    Ol(t, a, e, s);
  } else a = np(n, t, e, s, r);
  return kl(a);
}
Ou = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Dn(t.pendingLanes);
        n !== 0 &&
          (Fi(t, n | 1), ye(t, Z()), !(D & 6) && ((vn = Z() + 500), Et()));
      }
      break;
    case 13:
      (Ht(function () {
        var r = et(e, 1);
        if (r !== null) {
          var s = fe();
          Ie(r, e, 1, s);
        }
      }),
        pa(e, 1));
  }
};
Di = function (e) {
  if (e.tag === 13) {
    var t = et(e, 134217728);
    if (t !== null) {
      var n = fe();
      Ie(t, e, 134217728, n);
    }
    pa(e, 134217728);
  }
};
Iu = function (e) {
  if (e.tag === 13) {
    var t = yt(e),
      n = et(e, t);
    if (n !== null) {
      var r = fe();
      Ie(n, e, t, r);
    }
    pa(e, t);
  }
};
Uu = function () {
  return I;
};
Hu = function (e, t) {
  var n = I;
  try {
    return ((I = e), t());
  } finally {
    I = n;
  }
};
Fs = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ts(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = Rl(r);
            if (!s) throw Error(k(90));
            (gu(r), Ts(r, s));
          }
        }
      }
      break;
    case "textarea":
      yu(e, n);
      break;
    case "select":
      ((t = n.value), t != null && rn(e, !!n.multiple, t, !1));
  }
};
Eu = ua;
Pu = Ht;
var rp = { usingClientEntryPoint: !1, Events: [mr, Xt, Rl, Su, Cu, ua] },
  Ln = {
    findFiberByHostInstance: _t,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  lp = {
    bundleType: Ln.bundleType,
    version: Ln.version,
    rendererPackageName: Ln.rendererPackageName,
    rendererConfig: Ln.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: nt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Ru(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Ln.findFiberByHostInstance || tp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fr.isDisabled && Fr.supportsFiber)
    try {
      ((El = Fr.inject(lp)), (Ve = Fr));
    } catch {}
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rp;
Ce.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!va(t)) throw Error(k(200));
  return ep(e, t, null, n);
};
Ce.createRoot = function (e, t) {
  if (!va(e)) throw Error(k(299));
  var n = !1,
    r = "",
    s = od;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = ha(e, 1, !1, null, null, n, !1, r, s)),
    (e[be] = t.current),
    tr(e.nodeType === 8 ? e.parentNode : e),
    new ma(t)
  );
};
Ce.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return ((e = Ru(t)), (e = e === null ? null : e.stateNode), e);
};
Ce.flushSync = function (e) {
  return Ht(e);
};
Ce.hydrate = function (e, t, n) {
  if (!Ul(t)) throw Error(k(200));
  return Hl(null, e, t, !0, n);
};
Ce.hydrateRoot = function (e, t, n) {
  if (!va(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    i = "",
    a = od;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = ad(t, null, e, 1, n ?? null, s, !1, i, a)),
    (e[be] = t.current),
    tr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s));
  return new Il(t);
};
Ce.render = function (e, t, n) {
  if (!Ul(t)) throw Error(k(200));
  return Hl(null, e, t, !1, n);
};
Ce.unmountComponentAtNode = function (e) {
  if (!Ul(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (Ht(function () {
        Hl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[be] = null));
        });
      }),
      !0)
    : !1;
};
Ce.unstable_batchedUpdates = ua;
Ce.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ul(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Hl(e, t, n, !1, r);
};
Ce.version = "18.3.1-next-f1338f8080-20240426";
function ud() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ud);
    } catch (e) {
      console.error(e);
    }
}
(ud(), (uu.exports = Ce));
var sp = uu.exports,
  Lo = sp;
((Ns.createRoot = Lo.createRoot), (Ns.hydrateRoot = Lo.hydrateRoot));
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function cr() {
  return (
    (cr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    cr.apply(this, arguments)
  );
}
var ft;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(ft || (ft = {}));
const Ao = "popstate";
function ip(e) {
  e === void 0 && (e = {});
  function t(r, s) {
    let { pathname: i, search: a, hash: u } = r.location;
    return pi(
      "",
      { pathname: i, search: a, hash: u },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default",
    );
  }
  function n(r, s) {
    return typeof s == "string" ? s : wl(s);
  }
  return op(t, n, null, e);
}
function Y(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ga(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function ap() {
  return Math.random().toString(36).substr(2, 8);
}
function zo(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function pi(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    cr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Nn(t) : t,
      { state: n, key: (t && t.key) || r || ap() },
    )
  );
}
function wl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Nn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function op(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: s = document.defaultView, v5Compat: i = !1 } = r,
    a = s.history,
    u = ft.Pop,
    o = null,
    c = v();
  c == null && ((c = 0), a.replaceState(cr({}, a.state, { idx: c }), ""));
  function v() {
    return (a.state || { idx: null }).idx;
  }
  function m() {
    u = ft.Pop;
    let w = v(),
      f = w == null ? null : w - c;
    ((c = w), o && o({ action: u, location: N.location, delta: f }));
  }
  function p(w, f) {
    u = ft.Push;
    let d = pi(N.location, w, f);
    c = v() + 1;
    let h = zo(d, c),
      x = N.createHref(d);
    try {
      a.pushState(h, "", x);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      s.location.assign(x);
    }
    i && o && o({ action: u, location: N.location, delta: 1 });
  }
  function g(w, f) {
    u = ft.Replace;
    let d = pi(N.location, w, f);
    c = v();
    let h = zo(d, c),
      x = N.createHref(d);
    (a.replaceState(h, "", x),
      i && o && o({ action: u, location: N.location, delta: 0 }));
  }
  function y(w) {
    let f = s.location.origin !== "null" ? s.location.origin : s.location.href,
      d = typeof w == "string" ? w : wl(w);
    return (
      (d = d.replace(/ $/, "%20")),
      Y(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          d,
      ),
      new URL(d, f)
    );
  }
  let N = {
    get action() {
      return u;
    },
    get location() {
      return e(s, a);
    },
    listen(w) {
      if (o) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(Ao, m),
        (o = w),
        () => {
          (s.removeEventListener(Ao, m), (o = null));
        }
      );
    },
    createHref(w) {
      return t(s, w);
    },
    createURL: y,
    encodeLocation(w) {
      let f = y(w);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: p,
    replace: g,
    go(w) {
      return a.go(w);
    },
  };
  return N;
}
var Fo;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(Fo || (Fo = {}));
function up(e, t, n) {
  return (n === void 0 && (n = "/"), cp(e, t, n));
}
function cp(e, t, n, r) {
  let s = typeof t == "string" ? Nn(t) : t,
    i = gn(s.pathname || "/", n);
  if (i == null) return null;
  let a = cd(e);
  dp(a);
  let u = null;
  for (let o = 0; u == null && o < a.length; ++o) {
    let c = kp(i);
    u = jp(a[o], c);
  }
  return u;
}
function cd(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let s = (i, a, u) => {
    let o = {
      relativePath: u === void 0 ? i.path || "" : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    o.relativePath.startsWith("/") &&
      (Y(
        o.relativePath.startsWith(r),
        'Absolute route path "' +
          o.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (o.relativePath = o.relativePath.slice(r.length)));
    let c = Nt([r, o.relativePath]),
      v = n.concat(o);
    (i.children &&
      i.children.length > 0 &&
      (Y(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".'),
      ),
      cd(i.children, t, v, c)),
      !(i.path == null && !i.index) &&
        t.push({ path: c, score: xp(c, i.index), routesMeta: v }));
  };
  return (
    e.forEach((i, a) => {
      var u;
      if (i.path === "" || !((u = i.path) != null && u.includes("?"))) s(i, a);
      else for (let o of dd(i.path)) s(i, a, o);
    }),
    t
  );
}
function dd(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    s = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return s ? [i, ""] : [i];
  let a = dd(r.join("/")),
    u = [];
  return (
    u.push(...a.map((o) => (o === "" ? i : [i, o].join("/")))),
    s && u.push(...a),
    u.map((o) => (e.startsWith("/") && o === "" ? "/" : o))
  );
}
function dp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : yp(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const fp = /^:[\w-]+$/,
  hp = 3,
  pp = 2,
  mp = 1,
  vp = 10,
  gp = -2,
  Do = (e) => e === "*";
function xp(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Do) && (r += gp),
    t && (r += pp),
    n
      .filter((s) => !Do(s))
      .reduce((s, i) => s + (fp.test(i) ? hp : i === "" ? mp : vp), r)
  );
}
function yp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function jp(e, t, n) {
  let { routesMeta: r } = e,
    s = {},
    i = "/",
    a = [];
  for (let u = 0; u < r.length; ++u) {
    let o = r[u],
      c = u === r.length - 1,
      v = i === "/" ? t : t.slice(i.length) || "/",
      m = mi(
        { path: o.relativePath, caseSensitive: o.caseSensitive, end: c },
        v,
      ),
      p = o.route;
    if (!m) return null;
    (Object.assign(s, m.params),
      a.push({
        params: s,
        pathname: Nt([i, m.pathname]),
        pathnameBase: Pp(Nt([i, m.pathnameBase])),
        route: p,
      }),
      m.pathnameBase !== "/" && (i = Nt([i, m.pathnameBase])));
  }
  return a;
}
function mi(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Np(e.path, e.caseSensitive, e.end),
    s = t.match(n);
  if (!s) return null;
  let i = s[0],
    a = i.replace(/(.)\/+$/, "$1"),
    u = s.slice(1);
  return {
    params: r.reduce((c, v, m) => {
      let { paramName: p, isOptional: g } = v;
      if (p === "*") {
        let N = u[m] || "";
        a = i.slice(0, i.length - N.length).replace(/(.)\/+$/, "$1");
      }
      const y = u[m];
      return (
        g && !y ? (c[p] = void 0) : (c[p] = (y || "").replace(/%2F/g, "/")),
        c
      );
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function Np(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ga(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, u, o) => (
            r.push({ paramName: u, isOptional: o != null }),
            o ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (s += "\\/*$")
        : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), r]
  );
}
function kp(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ga(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function gn(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const wp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Sp = (e) => wp.test(e);
function Cp(e, t) {
  t === void 0 && (t = "/");
  let {
      pathname: n,
      search: r = "",
      hash: s = "",
    } = typeof e == "string" ? Nn(e) : e,
    i;
  if (n)
    if (Sp(n)) i = n;
    else {
      if (n.includes("//")) {
        let a = n;
        ((n = n.replace(/\/\/+/g, "/")),
          ga(
            !1,
            "Pathnames cannot have embedded double slashes - normalizing " +
              (a + " -> " + n),
          ));
      }
      n.startsWith("/") ? (i = Oo(n.substring(1), "/")) : (i = Oo(n, t));
    }
  else i = t;
  return { pathname: i, search: Tp(r), hash: Mp(s) };
}
function Oo(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function js(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Ep(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function xa(e, t) {
  let n = Ep(e);
  return t
    ? n.map((r, s) => (s === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function ya(e, t, n, r) {
  r === void 0 && (r = !1);
  let s;
  typeof e == "string"
    ? (s = Nn(e))
    : ((s = cr({}, e)),
      Y(
        !s.pathname || !s.pathname.includes("?"),
        js("?", "pathname", "search", s),
      ),
      Y(
        !s.pathname || !s.pathname.includes("#"),
        js("#", "pathname", "hash", s),
      ),
      Y(!s.search || !s.search.includes("#"), js("#", "search", "hash", s)));
  let i = e === "" || s.pathname === "",
    a = i ? "/" : s.pathname,
    u;
  if (a == null) u = n;
  else {
    let m = t.length - 1;
    if (!r && a.startsWith("..")) {
      let p = a.split("/");
      for (; p[0] === ".."; ) (p.shift(), (m -= 1));
      s.pathname = p.join("/");
    }
    u = m >= 0 ? t[m] : "/";
  }
  let o = Cp(s, u),
    c = a && a !== "/" && a.endsWith("/"),
    v = (i || a === ".") && n.endsWith("/");
  return (!o.pathname.endsWith("/") && (c || v) && (o.pathname += "/"), o);
}
const Nt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Pp = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Tp = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Mp = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Rp(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const fd = ["post", "put", "patch", "delete"];
new Set(fd);
const _p = ["get", ...fd];
new Set(_p);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function dr() {
  return (
    (dr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    dr.apply(this, arguments)
  );
}
const Bl = j.createContext(null),
  hd = j.createContext(null),
  rt = j.createContext(null),
  $l = j.createContext(null),
  lt = j.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  pd = j.createContext(null);
function Lp(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  kn() || Y(!1);
  let { basename: r, navigator: s } = j.useContext(rt),
    { hash: i, pathname: a, search: u } = Gl(e, { relative: n }),
    o = a;
  return (
    r !== "/" && (o = a === "/" ? r : Nt([r, a])),
    s.createHref({ pathname: o, search: u, hash: i })
  );
}
function kn() {
  return j.useContext($l) != null;
}
function Vt() {
  return (kn() || Y(!1), j.useContext($l).location);
}
function md(e) {
  j.useContext(rt).static || j.useLayoutEffect(e);
}
function Vl() {
  let { isDataRoute: e } = j.useContext(lt);
  return e ? qp() : Ap();
}
function Ap() {
  kn() || Y(!1);
  let e = j.useContext(Bl),
    { basename: t, future: n, navigator: r } = j.useContext(rt),
    { matches: s } = j.useContext(lt),
    { pathname: i } = Vt(),
    a = JSON.stringify(xa(s, n.v7_relativeSplatPath)),
    u = j.useRef(!1);
  return (
    md(() => {
      u.current = !0;
    }),
    j.useCallback(
      function (c, v) {
        if ((v === void 0 && (v = {}), !u.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let m = ya(c, JSON.parse(a), i, v.relative === "path");
        (e == null &&
          t !== "/" &&
          (m.pathname = m.pathname === "/" ? t : Nt([t, m.pathname])),
          (v.replace ? r.replace : r.push)(m, v.state, v));
      },
      [t, r, a, i, e],
    )
  );
}
const zp = j.createContext(null);
function Fp(e) {
  let t = j.useContext(lt).outlet;
  return t && j.createElement(zp.Provider, { value: e }, t);
}
function Gl(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = j.useContext(rt),
    { matches: s } = j.useContext(lt),
    { pathname: i } = Vt(),
    a = JSON.stringify(xa(s, r.v7_relativeSplatPath));
  return j.useMemo(() => ya(e, JSON.parse(a), i, n === "path"), [e, a, i, n]);
}
function Dp(e, t) {
  return Op(e, t);
}
function Op(e, t, n, r) {
  kn() || Y(!1);
  let { navigator: s } = j.useContext(rt),
    { matches: i } = j.useContext(lt),
    a = i[i.length - 1],
    u = a ? a.params : {};
  a && a.pathname;
  let o = a ? a.pathnameBase : "/";
  a && a.route;
  let c = Vt(),
    v;
  if (t) {
    var m;
    let w = typeof t == "string" ? Nn(t) : t;
    (o === "/" || ((m = w.pathname) != null && m.startsWith(o)) || Y(!1),
      (v = w));
  } else v = c;
  let p = v.pathname || "/",
    g = p;
  if (o !== "/") {
    let w = o.replace(/^\//, "").split("/");
    g = "/" + p.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let y = up(e, { pathname: g }),
    N = $p(
      y &&
        y.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, u, w.params),
            pathname: Nt([
              o,
              s.encodeLocation
                ? s.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? o
                : Nt([
                    o,
                    s.encodeLocation
                      ? s.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
      r,
    );
  return t && N
    ? j.createElement(
        $l.Provider,
        {
          value: {
            location: dr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              v,
            ),
            navigationType: ft.Pop,
          },
        },
        N,
      )
    : N;
}
function Ip() {
  let e = Yp(),
    t = Rp(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return j.createElement(
    j.Fragment,
    null,
    j.createElement("h2", null, "Unexpected Application Error!"),
    j.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? j.createElement("pre", { style: s }, n) : null,
    null,
  );
}
const Up = j.createElement(Ip, null);
class Hp extends j.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? j.createElement(
          lt.Provider,
          { value: this.props.routeContext },
          j.createElement(pd.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Bp(e) {
  let { routeContext: t, match: n, children: r } = e,
    s = j.useContext(Bl);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    j.createElement(lt.Provider, { value: t }, r)
  );
}
function $p(e, t, n, r) {
  var s;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let a = e,
    u = (s = n) == null ? void 0 : s.errors;
  if (u != null) {
    let v = a.findIndex(
      (m) => m.route.id && (u == null ? void 0 : u[m.route.id]) !== void 0,
    );
    (v >= 0 || Y(!1), (a = a.slice(0, Math.min(a.length, v + 1))));
  }
  let o = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let v = 0; v < a.length; v++) {
      let m = a[v];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (c = v),
        m.route.id)
      ) {
        let { loaderData: p, errors: g } = n,
          y =
            m.route.loader &&
            p[m.route.id] === void 0 &&
            (!g || g[m.route.id] === void 0);
        if (m.route.lazy || y) {
          ((o = !0), c >= 0 ? (a = a.slice(0, c + 1)) : (a = [a[0]]));
          break;
        }
      }
    }
  return a.reduceRight((v, m, p) => {
    let g,
      y = !1,
      N = null,
      w = null;
    n &&
      ((g = u && m.route.id ? u[m.route.id] : void 0),
      (N = m.route.errorElement || Up),
      o &&
        (c < 0 && p === 0
          ? (Qp("route-fallback"), (y = !0), (w = null))
          : c === p &&
            ((y = !0), (w = m.route.hydrateFallbackElement || null))));
    let f = t.concat(a.slice(0, p + 1)),
      d = () => {
        let h;
        return (
          g
            ? (h = N)
            : y
              ? (h = w)
              : m.route.Component
                ? (h = j.createElement(m.route.Component, null))
                : m.route.element
                  ? (h = m.route.element)
                  : (h = v),
          j.createElement(Bp, {
            match: m,
            routeContext: { outlet: v, matches: f, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (m.route.ErrorBoundary || m.route.errorElement || p === 0)
      ? j.createElement(Hp, {
          location: n.location,
          revalidation: n.revalidation,
          component: N,
          error: g,
          children: d(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var vd = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(vd || {}),
  gd = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(gd || {});
function Vp(e) {
  let t = j.useContext(Bl);
  return (t || Y(!1), t);
}
function Gp(e) {
  let t = j.useContext(hd);
  return (t || Y(!1), t);
}
function Wp(e) {
  let t = j.useContext(lt);
  return (t || Y(!1), t);
}
function xd(e) {
  let t = Wp(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || Y(!1), n.route.id);
}
function Yp() {
  var e;
  let t = j.useContext(pd),
    n = Gp(),
    r = xd();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function qp() {
  let { router: e } = Vp(vd.UseNavigateStable),
    t = xd(gd.UseNavigateStable),
    n = j.useRef(!1);
  return (
    md(() => {
      n.current = !0;
    }),
    j.useCallback(
      function (s, i) {
        (i === void 0 && (i = {}),
          n.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : e.navigate(s, dr({ fromRouteId: t }, i))));
      },
      [e, t],
    )
  );
}
const Io = {};
function Qp(e, t, n) {
  Io[e] || (Io[e] = !0);
}
function Kp(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function yd(e) {
  let { to: t, replace: n, state: r, relative: s } = e;
  kn() || Y(!1);
  let { future: i, static: a } = j.useContext(rt),
    { matches: u } = j.useContext(lt),
    { pathname: o } = Vt(),
    c = Vl(),
    v = ya(t, xa(u, i.v7_relativeSplatPath), o, s === "path"),
    m = JSON.stringify(v);
  return (
    j.useEffect(
      () => c(JSON.parse(m), { replace: n, state: r, relative: s }),
      [c, m, s, n, r],
    ),
    null
  );
}
function Xp(e) {
  return Fp(e.context);
}
function A(e) {
  Y(!1);
}
function Zp(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: s = ft.Pop,
    navigator: i,
    static: a = !1,
    future: u,
  } = e;
  kn() && Y(!1);
  let o = t.replace(/^\/*/, "/"),
    c = j.useMemo(
      () => ({
        basename: o,
        navigator: i,
        static: a,
        future: dr({ v7_relativeSplatPath: !1 }, u),
      }),
      [o, u, i, a],
    );
  typeof r == "string" && (r = Nn(r));
  let {
      pathname: v = "/",
      search: m = "",
      hash: p = "",
      state: g = null,
      key: y = "default",
    } = r,
    N = j.useMemo(() => {
      let w = gn(v, o);
      return w == null
        ? null
        : {
            location: { pathname: w, search: m, hash: p, state: g, key: y },
            navigationType: s,
          };
    }, [o, v, m, p, g, y, s]);
  return N == null
    ? null
    : j.createElement(
        rt.Provider,
        { value: c },
        j.createElement($l.Provider, { children: n, value: N }),
      );
}
function Jp(e) {
  let { children: t, location: n } = e;
  return Dp(vi(t), n);
}
new Promise(() => {});
function vi(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    j.Children.forEach(e, (r, s) => {
      if (!j.isValidElement(r)) return;
      let i = [...t, s];
      if (r.type === j.Fragment) {
        n.push.apply(n, vi(r.props.children, i));
        return;
      }
      (r.type !== A && Y(!1), !r.props.index || !r.props.children || Y(!1));
      let a = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (a.children = vi(r.props.children, i)), n.push(a));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Sl() {
  return (
    (Sl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Sl.apply(this, arguments)
  );
}
function jd(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    s,
    i;
  for (i = 0; i < r.length; i++)
    ((s = r[i]), !(t.indexOf(s) >= 0) && (n[s] = e[s]));
  return n;
}
function bp(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function em(e, t) {
  return e.button === 0 && (!t || t === "_self") && !bp(e);
}
const tm = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  nm = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "viewTransition",
    "children",
  ],
  rm = "6";
try {
  window.__reactRouterVersion = rm;
} catch {}
const lm = j.createContext({ isTransitioning: !1 }),
  sm = "startTransition",
  Uo = qd[sm];
function im(e) {
  let { basename: t, children: n, future: r, window: s } = e,
    i = j.useRef();
  i.current == null && (i.current = ip({ window: s, v5Compat: !0 }));
  let a = i.current,
    [u, o] = j.useState({ action: a.action, location: a.location }),
    { v7_startTransition: c } = r || {},
    v = j.useCallback(
      (m) => {
        c && Uo ? Uo(() => o(m)) : o(m);
      },
      [o, c],
    );
  return (
    j.useLayoutEffect(() => a.listen(v), [a, v]),
    j.useEffect(() => Kp(r), [r]),
    j.createElement(Zp, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: a,
      future: r,
    })
  );
}
const am =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  om = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  um = j.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: s,
        reloadDocument: i,
        replace: a,
        state: u,
        target: o,
        to: c,
        preventScrollReset: v,
        viewTransition: m,
      } = t,
      p = jd(t, tm),
      { basename: g } = j.useContext(rt),
      y,
      N = !1;
    if (typeof c == "string" && om.test(c) && ((y = c), am))
      try {
        let h = new URL(window.location.href),
          x = c.startsWith("//") ? new URL(h.protocol + c) : new URL(c),
          S = gn(x.pathname, g);
        x.origin === h.origin && S != null
          ? (c = S + x.search + x.hash)
          : (N = !0);
      } catch {}
    let w = Lp(c, { relative: s }),
      f = dm(c, {
        replace: a,
        state: u,
        target: o,
        preventScrollReset: v,
        relative: s,
        viewTransition: m,
      });
    function d(h) {
      (r && r(h), h.defaultPrevented || f(h));
    }
    return j.createElement(
      "a",
      Sl({}, p, { href: y || w, onClick: N || i ? r : d, ref: n, target: o }),
    );
  }),
  X = j.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: s = !1,
        className: i = "",
        end: a = !1,
        style: u,
        to: o,
        viewTransition: c,
        children: v,
      } = t,
      m = jd(t, nm),
      p = Gl(o, { relative: m.relative }),
      g = Vt(),
      y = j.useContext(hd),
      { navigator: N, basename: w } = j.useContext(rt),
      f = y != null && fm(p) && c === !0,
      d = N.encodeLocation ? N.encodeLocation(p).pathname : p.pathname,
      h = g.pathname,
      x =
        y && y.navigation && y.navigation.location
          ? y.navigation.location.pathname
          : null;
    (s ||
      ((h = h.toLowerCase()),
      (x = x ? x.toLowerCase() : null),
      (d = d.toLowerCase())),
      x && w && (x = gn(x, w) || x));
    const S = d !== "/" && d.endsWith("/") ? d.length - 1 : d.length;
    let P = h === d || (!a && h.startsWith(d) && h.charAt(S) === "/"),
      T =
        x != null &&
        (x === d || (!a && x.startsWith(d) && x.charAt(d.length) === "/")),
      M = { isActive: P, isPending: T, isTransitioning: f },
      V = P ? r : void 0,
      L;
    typeof i == "function"
      ? (L = i(M))
      : (L = [
          i,
          P ? "active" : null,
          T ? "pending" : null,
          f ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let je = typeof u == "function" ? u(M) : u;
    return j.createElement(
      um,
      Sl({}, m, {
        "aria-current": V,
        className: L,
        ref: n,
        style: je,
        to: o,
        viewTransition: c,
      }),
      typeof v == "function" ? v(M) : v,
    );
  });
var gi;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(gi || (gi = {}));
var Ho;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(Ho || (Ho = {}));
function cm(e) {
  let t = j.useContext(Bl);
  return (t || Y(!1), t);
}
function dm(e, t) {
  let {
      target: n,
      replace: r,
      state: s,
      preventScrollReset: i,
      relative: a,
      viewTransition: u,
    } = t === void 0 ? {} : t,
    o = Vl(),
    c = Vt(),
    v = Gl(e, { relative: a });
  return j.useCallback(
    (m) => {
      if (em(m, n)) {
        m.preventDefault();
        let p = r !== void 0 ? r : wl(c) === wl(v);
        o(e, {
          replace: p,
          state: s,
          preventScrollReset: i,
          relative: a,
          viewTransition: u,
        });
      }
    },
    [c, o, v, r, s, n, e, i, a, u],
  );
}
function fm(e, t) {
  t === void 0 && (t = {});
  let n = j.useContext(lm);
  n == null && Y(!1);
  let { basename: r } = cm(gi.useViewTransitionState),
    s = Gl(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = gn(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    a = gn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return mi(s.pathname, a) != null || mi(s.pathname, i) != null;
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var hm = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pm = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  O = (e, t) => {
    const n = j.forwardRef(
      (
        {
          color: r = "currentColor",
          size: s = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: a,
          className: u = "",
          children: o,
          ...c
        },
        v,
      ) =>
        j.createElement(
          "svg",
          {
            ref: v,
            ...hm,
            width: s,
            height: s,
            stroke: r,
            strokeWidth: a ? (Number(i) * 24) / Number(s) : i,
            className: ["lucide", `lucide-${pm(e)}`, u].join(" "),
            ...c,
          },
          [
            ...t.map(([m, p]) => j.createElement(m, p)),
            ...(Array.isArray(o) ? o : [o]),
          ],
        ),
    );
    return ((n.displayName = `${e}`), n);
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mm = O("ArrowRightLeft", [
  ["path", { d: "m16 3 4 4-4 4", key: "1x1c3m" }],
  ["path", { d: "M20 7H4", key: "zbl0bi" }],
  ["path", { d: "m8 21-4-4 4-4", key: "h9nckh" }],
  ["path", { d: "M4 17h16", key: "g4d7ey" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vm = O("Award", [
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ["path", { d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11", key: "em7aur" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gm = O("BookOpen", [
  ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
  ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nd = O("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xm = O("CheckSquare", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  [
    "path",
    {
      d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
      key: "1jnkn4",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xi = O("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ym = O("Contact", [
  ["path", { d: "M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2", key: "1mghuy" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["circle", { cx: "12", cy: "10", r: "2", key: "1yojzk" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "4", key: "1ff9gb" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "4", key: "1ufoma" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kd = O("CreditCard", [
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
  ],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jm = O("FileSearch", [
  [
    "path",
    { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3", key: "1vg67v" },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["circle", { cx: "5", cy: "14", r: "3", key: "ufru5t" }],
  ["path", { d: "m9 18-1.5-1.5", key: "1j6qii" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wd = O("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bo = O("Folder", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nm = O("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sd = O("GraduationCap", [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0",
    },
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const km = O("Key", [
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["path", { d: "m15.5 7.5 3 3L22 7l-3-3", key: "1rn1fs" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wm = O("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sm = O("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cm = O("Megaphone", [
  ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Em = O("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pm = O("MessageSquare", [
  [
    "path",
    {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
      key: "1lielz",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dr = O("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tm = O("MonitorPlay", [
  ["path", { d: "m10 7 5 3-5 3Z", key: "29ljg6" }],
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" },
  ],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mm = O("PieChart", [
  ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }],
  ["path", { d: "M22 12A10 10 0 0 0 12 2v10z", key: "1rfc4y" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rm = O("RefreshCw", [
  [
    "path",
    { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" },
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  [
    "path",
    { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" },
  ],
  ["path", { d: "M8 16H3v5", key: "1cv678" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _m = O("SearchCode", [
  ["path", { d: "m9 9-2 2 2 2", key: "17gsfh" }],
  ["path", { d: "m13 13 2-2-2-2", key: "186z8k" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lm = O("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cd = O("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Am = O("SquarePen", [
  [
    "path",
    {
      d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      key: "1m0v6g",
    },
  ],
  [
    "path",
    { d: "M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z", key: "1lpok0" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zm = O("UploadCloud", [
  [
    "path",
    {
      d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
      key: "1pljnt",
    },
  ],
  ["path", { d: "M12 12v9", key: "192myk" }],
  ["path", { d: "m16 16-4-4-4 4", key: "119tzi" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fm = O("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Or = O("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  R = {
    id: "UU93012R/15",
    firstNameEng: "Natnael",
    middleNameEng: "Tesfaye",
    lastNameEng: "Ahmed",
    firstNameAmh: "ናትናኤል",
    middleNameAmh: "ተስፋዬ",
    lastNameAmh: "አህመድ",
    sex: "Male",
    birthDate: "April 7, 2003",
    email: "Natiskat45@gmail.com",
    phoneMobile: "+251976763993",
    program: "Undergraduate (Degree)",
    programType: "Regular",
    campus: "Al-Amoudi-Gerji Campus",
    faculty: "Engineering, Technology and Computational Sciences",
    department: "Management",
    admissionYear: "2016",
    admissionDate: "Sep 1, 2016",
    lastLogin: "1 minute ago",
    lastPasswordChange: "1 month ago",
    folderNumber: "00108",
    username: "UU93012R/15",
    password: "Natiuu7676",
  },
  Dm = [
    {
      period: "00",
      sunday: "",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
    },
  ],
  Om = [
    {
      no: 1,
      fullName: "Natnael Tesfaye Ahmed",
      sex: "Male",
      studentNumber: "UU93012R/15",
      college: "FETCS",
      department: "Management",
      programType: "Regular",
      folderNumber: "00108",
      fileNumber: "00884/16",
    },
  ],
  Im = [
    { id: 1, name: "UG1 2016 AR 2 R (1st, 2016) Previous" },
    { id: 2, name: "UG1 2016 NS 5 R (1st, 2016) Previous" },
    { id: 3, name: "UG2 2016 AR 2 R (2nd, 2017) Previous" },
    { id: 4, name: "UG3 2016 AR 2 R (3rd, 2018) Current" },
  ],
  Ed = j.createContext(void 0),
  Um = ({ children: e }) => {
    const [t, n] = j.useState(localStorage.getItem("auth") === "true"),
      r = () => {
        (n(!0), localStorage.setItem("auth", "true"));
      },
      s = () => {
        (n(!1), localStorage.removeItem("auth"));
      };
    return l.jsx(Ed.Provider, {
      value: { isAuthenticated: t, login: r, logout: s },
      children: e,
    });
  },
  ja = () => {
    const e = j.useContext(Ed);
    if (e === void 0)
      throw new Error("useAuth must be used within an AuthProvider");
    return e;
  },
  Hm = () => {
    const [e, t] = j.useState("UU93012R/15"),
      [n, r] = j.useState("Natiuu7676"),
      [s, i] = j.useState(0),
      [a, u] = j.useState(!1),
      { login: o } = ja(),
      c = Vl(),
      v = [
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop",
      ],
      m = [
        { title: "Extras", items: ["ELearning Portal", "Website"] },
        { title: "Announcements", items: ["Latest News"] },
        { title: "Calendar", items: ["Academic Calendar"] },
        { title: "Admission", items: ["Apply Online", "Track Status"] },
        {
          title: "Transcript",
          items: ["Request Transcript", "Track Request Status"],
        },
        { title: "Alumni", items: ["Register"] },
      ];
    j.useEffect(() => {
      const g = window.setInterval(() => {
        i((y) => (y + 1) % v.length);
      }, 8e3);
      return () => window.clearInterval(g);
    }, [v.length]);
    const p = (g) => {
      (g.preventDefault(),
        e === R.username && n === R.password
          ? (u(!1), o(), c("/dashboard"))
          : u(!0));
    };
    return l.jsxs("div", {
      className: "login-page",
      children: [
        l.jsx("nav", {
          className: "login-top-nav",
          children: l.jsx("ul", {
            className: "login-nav-list",
            children: m.map((g) =>
              l.jsxs(
                "li",
                {
                  className: "login-nav-item",
                  children: [
                    l.jsxs("button", {
                      type: "button",
                      className: "login-nav-trigger",
                      children: [
                        l.jsx("span", { children: g.title }),
                        l.jsx(xi, { size: 14 }),
                      ],
                    }),
                    l.jsx("ul", {
                      className: "login-dropdown",
                      children: g.items.map((y) =>
                        l.jsx(
                          "li",
                          {
                            children: l.jsx("button", {
                              type: "button",
                              className: "login-dropdown-item",
                              children: y,
                            }),
                          },
                          y,
                        ),
                      ),
                    }),
                  ],
                },
                g.title,
              ),
            ),
          }),
        }),
        l.jsxs("main", {
          className: "login-hero",
          children: [
            l.jsx("div", {
              className: "login-carousel",
              children: v.map((g, y) =>
                l.jsx(
                  "figure",
                  {
                    className: `login-carousel-slide ${s === y ? "active" : ""}`,
                    children: l.jsx("img", {
                      src: g,
                      alt: "Campus background",
                    }),
                  },
                  g,
                ),
              ),
            }),
            l.jsxs("div", {
              className: "login-overlay-content",
              children: [
                l.jsxs("div", {
                  className: "login-overlay-left",
                  children: [
                    l.jsx("img", {
                      src: "https://sis.uu.edu.et/img/uulogo.png",
                      alt: "Unity University",
                      className: "login-overlay-logo",
                    }),
                    l.jsx("h1", {
                      children: "Unity University | Office of the Registrar",
                    }),
                    l.jsx("p", {
                      children:
                        "This is our registrar portal for students, academic staffs and alumni to access different registrar services offered by the office of the university registrar.",
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "login-overlay-right",
                  children: [
                    l.jsxs("div", {
                      className: "login-box-head",
                      children: [
                        l.jsx("h2", { children: "Login to SIS" }),
                        l.jsx("hr", {}),
                      ],
                    }),
                    l.jsxs("form", {
                      onSubmit: p,
                      className: "login-form-panel",
                      children: [
                        l.jsxs("div", {
                          className: "login-input-wrap",
                          children: [
                            l.jsx("span", {
                              className: "login-input-icon",
                              children: l.jsx(Fm, { size: 17 }),
                            }),
                            l.jsx("input", {
                              type: "text",
                              placeholder: "Username",
                              value: e,
                              onChange: (g) => {
                                (t(g.target.value), u(!1));
                              },
                            }),
                          ],
                        }),
                        a &&
                          l.jsx("p", {
                            className: "login-input-error",
                            children: "Username and password invalid.",
                          }),
                        l.jsxs("div", {
                          className: "login-input-wrap",
                          children: [
                            l.jsx("span", {
                              className: "login-input-icon",
                              children: l.jsx(km, { size: 17 }),
                            }),
                            l.jsx("input", {
                              type: "password",
                              placeholder: "Password",
                              value: n,
                              onChange: (g) => {
                                (r(g.target.value), u(!1));
                              },
                            }),
                          ],
                        }),
                        a &&
                          l.jsx("p", {
                            className: "login-input-error",
                            children: "Username and password invalid.",
                          }),
                        l.jsx("button", {
                          type: "submit",
                          className: "btn-login",
                          children: "Login",
                        }),
                        l.jsx("button", {
                          type: "button",
                          className: "btn-forgot",
                          children: "Forgot Password?",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        l.jsx("section", {
          className: "featured-grid-wrap",
          children: l.jsxs("div", {
            className: "featured-grid",
            children: [
              l.jsxs("article", {
                className: "featured-item",
                children: [
                  l.jsx(Nd, { size: 34 }),
                  l.jsxs("h6", {
                    children: ["Academic", l.jsx("br", {}), "Calendar"],
                  }),
                ],
              }),
              l.jsxs("article", {
                className: "featured-item",
                children: [
                  l.jsx(Cm, { size: 34 }),
                  l.jsxs("h6", {
                    children: ["Registrar", l.jsx("br", {}), "Announcements"],
                  }),
                ],
              }),
              l.jsxs("article", {
                className: "featured-item",
                children: [
                  l.jsx(wd, { size: 34 }),
                  l.jsxs("h6", {
                    children: [
                      "Request Official",
                      l.jsx("br", {}),
                      "Transcript",
                    ],
                  }),
                ],
              }),
              l.jsxs("article", {
                className: "featured-item",
                children: [
                  l.jsx(Lm, { size: 34 }),
                  l.jsxs("h6", {
                    children: [
                      "Check Official",
                      l.jsx("br", {}),
                      "Transcript Status",
                    ],
                  }),
                ],
              }),
              l.jsxs("article", {
                className: "featured-item",
                children: [
                  l.jsx(zm, { size: 34 }),
                  l.jsxs("h6", {
                    children: ["Online", l.jsx("br", {}), "Admission"],
                  }),
                ],
              }),
              l.jsxs("article", {
                className: "featured-item",
                children: [
                  l.jsx(_m, { size: 34 }),
                  l.jsxs("h6", {
                    children: ["Online Admission", l.jsx("br", {}), "Tracking"],
                  }),
                ],
              }),
              l.jsxs("article", {
                className: "featured-item",
                children: [
                  l.jsx(Sd, { size: 34 }),
                  l.jsxs("h6", {
                    children: ["Alumni", l.jsx("br", {}), "Registration"],
                  }),
                ],
              }),
              l.jsxs("article", {
                className: "featured-item",
                children: [
                  l.jsx(Cd, { size: 34 }),
                  l.jsxs("h6", {
                    children: ["Forgery", l.jsx("br", {}), "Check"],
                  }),
                ],
              }),
              l.jsxs("article", {
                className: "featured-item",
                children: [
                  l.jsx(Tm, { size: 34 }),
                  l.jsxs("h6", {
                    children: ["ELearning", l.jsx("br", {}), "Portal"],
                  }),
                ],
              }),
              l.jsxs("article", {
                className: "featured-item",
                children: [
                  l.jsx(gm, { size: 34 }),
                  l.jsxs("h6", {
                    children: ["Academic", l.jsx("br", {}), "Catalog"],
                  }),
                ],
              }),
              l.jsxs("article", {
                className: "featured-item",
                children: [
                  l.jsx(jm, { size: 34 }),
                  l.jsxs("h6", {
                    children: ["Admission", l.jsx("br", {}), "Guideline"],
                  }),
                ],
              }),
              l.jsxs("article", {
                className: "featured-item",
                children: [
                  l.jsx(Nm, { size: 34 }),
                  l.jsxs("h6", {
                    children: ["University", l.jsx("br", {}), "Website"],
                  }),
                ],
              }),
            ],
          }),
        }),
        l.jsx("footer", {
          className: "login-footer",
          children: l.jsx("p", { children: "Copyright © 2012 - 2026" }),
        }),
      ],
    });
  },
  Bm = ({ isOpen: e, isCollapsed: t, onToggleCollapse: n, onExpand: r }) => {
    const [s, i] = j.useState("dashboard"),
      a = Vt();
    j.useEffect(() => {
      const o = a.pathname;
      o.includes("/dashboard") || o.includes("/profile")
        ? i("dashboard")
        : o.includes("/admission")
          ? i("admission")
          : o.includes("/semester-registration")
            ? i("semester")
            : o.includes("/readmission")
              ? i("readmission")
              : o.includes("/payment")
                ? i("payment")
                : o.includes("/grades")
                  ? i("grades")
                  : o.includes("/clearances")
                    ? i("clearances")
                    : o.includes("/transfers")
                      ? i("transfers")
                      : o.includes("/evalution") && i("evalution");
    }, [a.pathname]);
    const u = (o) => {
      if (t) {
        r();
        return;
      }
      i(s === o ? "" : o);
    };
    return l.jsxs("aside", {
      className: `sidebar ${e ? "open" : ""} ${t ? "collapsed" : ""}`,
      children: [
        l.jsxs("div", {
          className: "sidebar-header",
          children: [
            l.jsx("div", {
              className: "logo-container",
              children: l.jsx("img", {
                src: "https://sis.uu.edu.et/img/uulogo.png",
                alt: "Unity University Logo",
                className: "logo",
              }),
            }),
            !t &&
              l.jsxs(l.Fragment, {
                children: [
                  l.jsx("span", { className: "sis-text", children: "SiS" }),
                  l.jsx("span", { className: "sis-badge", children: "2" }),
                ],
              }),
          ],
        }),
        l.jsx("nav", {
          className: "sidebar-nav",
          children: l.jsxs("ul", {
            children: [
              l.jsxs("li", {
                className: `nav-item ${s === "dashboard" ? "active" : ""}`,
                children: [
                  l.jsxs("div", {
                    className: `nav-link main-link ${s === "dashboard" ? "active" : ""}`,
                    onClick: () => u("dashboard"),
                    children: [
                      l.jsx(Mm, { size: 18 }),
                      l.jsx("span", { children: "DASHBOARD" }),
                    ],
                  }),
                  s === "dashboard" &&
                    l.jsxs("ul", {
                      className: "sub-menu",
                      children: [
                        l.jsx("li", {
                          children: l.jsx(X, {
                            to: "/profile/basic",
                            className: ({ isActive: o }) =>
                              o ? "sub-link active" : "sub-link",
                            children: "Basic Profile",
                          }),
                        }),
                        l.jsx("li", {
                          children: l.jsx(X, {
                            to: "/profile/academic",
                            className: ({ isActive: o }) =>
                              o ? "sub-link active" : "sub-link",
                            children: "Academic Profile",
                          }),
                        }),
                        l.jsx("li", {
                          children: l.jsx(X, {
                            to: "/help/view",
                            className: ({ isActive: o }) =>
                              o ? "sub-link active" : "sub-link",
                            children: "View Helps",
                          }),
                        }),
                      ],
                    }),
                ],
              }),
              l.jsxs("li", {
                className: `nav-item ${s === "admission" ? "active" : ""}`,
                children: [
                  l.jsxs("div", {
                    className: `nav-link main-link ${s === "admission" ? "active" : ""}`,
                    onClick: () => u("admission"),
                    children: [
                      l.jsx(ym, { size: 18 }),
                      l.jsx("span", { children: "ADMISSION" }),
                    ],
                  }),
                  s === "admission" &&
                    l.jsxs("ul", {
                      className: "sub-menu",
                      children: [
                        l.jsx("li", {
                          children: l.jsx(X, {
                            to: "/admission/search",
                            className: ({ isActive: o }) =>
                              o ? "sub-link active" : "sub-link",
                            children: "List Accepted Students",
                          }),
                        }),
                        l.jsx("li", {
                          children: l.jsx(X, {
                            to: "/admission/admitted",
                            className: ({ isActive: o }) =>
                              o ? "sub-link active" : "sub-link",
                            children: "View Admitted Students",
                          }),
                        }),
                        l.jsx("li", {
                          children: l.jsx(X, {
                            to: "/admission/placement",
                            className: ({ isActive: o }) =>
                              o ? "sub-link active" : "sub-link",
                            children: "List Preference",
                          }),
                        }),
                      ],
                    }),
                ],
              }),
              l.jsxs("li", {
                className: `nav-item ${s === "semester" ? "active" : ""}`,
                children: [
                  l.jsxs("div", {
                    className: `nav-link main-link ${s === "semester" ? "active" : ""}`,
                    onClick: () => u("semester"),
                    children: [
                      l.jsx(wd, { size: 18 }),
                      l.jsx("span", { children: "SEMESTER REGISTRATION" }),
                    ],
                  }),
                  s === "semester" &&
                    l.jsxs("ul", {
                      className: "sub-menu",
                      children: [
                        l.jsx("li", {
                          children: l.jsx(X, {
                            to: "/semester-registration",
                            className: ({ isActive: o }) =>
                              o ? "sub-link active" : "sub-link",
                            end: !0,
                            children: "View All Registration",
                          }),
                        }),
                        l.jsx("li", {
                          children: l.jsx(X, {
                            to: "/semester-registration/register",
                            className: ({ isActive: o }) =>
                              o ? "sub-link active" : "sub-link",
                            children: "Register",
                          }),
                        }),
                      ],
                    }),
                ],
              }),
              l.jsxs("li", {
                className: `nav-item ${s === "readmission" ? "active" : ""}`,
                children: [
                  l.jsxs("div", {
                    className: `nav-link main-link ${s === "readmission" ? "active" : ""}`,
                    onClick: () => u("readmission"),
                    children: [
                      l.jsx(Rm, { size: 18 }),
                      l.jsx("span", { children: "READMISSION" }),
                    ],
                  }),
                  s === "readmission" &&
                    l.jsxs("ul", {
                      className: "sub-menu",
                      children: [
                        l.jsx("li", {
                          children: l.jsx(X, {
                            to: "/readmission/course-adds",
                            className: ({ isActive: o }) =>
                              o ? "sub-link active" : "sub-link",
                            children: "Course Adds",
                          }),
                        }),
                        l.jsx("li", {
                          children: l.jsx(X, {
                            to: "/readmission/course-drops",
                            className: ({ isActive: o }) =>
                              o ? "sub-link active" : "sub-link",
                            children: "Course Drops",
                          }),
                        }),
                        l.jsx("li", {
                          children: l.jsx(X, {
                            to: "/readmission/course-exemptions",
                            className: ({ isActive: o }) =>
                              o ? "sub-link active" : "sub-link",
                            children: "Course Exemptions",
                          }),
                        }),
                        l.jsx("li", {
                          children: l.jsx(X, {
                            to: "/readmission/requests",
                            className: ({ isActive: o }) =>
                              o ? "sub-link active" : "sub-link",
                            children: "Readmissions",
                          }),
                        }),
                        l.jsx("li", {
                          children: l.jsx(X, {
                            to: "/readmission/substitutions",
                            className: ({ isActive: o }) =>
                              o ? "sub-link active" : "sub-link",
                            children: "Course Substitution Requests",
                          }),
                        }),
                      ],
                    }),
                ],
              }),
              l.jsxs("li", {
                className: `nav-item ${s === "payment" ? "active" : ""}`,
                children: [
                  l.jsxs("div", {
                    className: `nav-link main-link ${s === "payment" ? "active" : ""}`,
                    onClick: () => u("payment"),
                    children: [
                      l.jsx(kd, { size: 18 }),
                      l.jsx("span", { children: "PAYMENT" }),
                    ],
                  }),
                  s === "payment" &&
                    l.jsx("ul", {
                      className: "sub-menu",
                      children: l.jsx("li", {
                        children: l.jsx(X, {
                          to: "/payment/view",
                          className: ({ isActive: o }) =>
                            o ? "sub-link active" : "sub-link",
                          end: !0,
                          children: "View Payment",
                        }),
                      }),
                    }),
                ],
              }),
              l.jsxs("li", {
                className: `nav-item ${s === "grades" ? "active" : ""}`,
                children: [
                  l.jsxs("div", {
                    className: `nav-link main-link ${s === "grades" ? "active" : ""}`,
                    onClick: () => u("grades"),
                    children: [
                      l.jsx(vm, { size: 18 }),
                      l.jsx("span", { children: "GRADES" }),
                    ],
                  }),
                  s === "grades" &&
                    l.jsxs("ul", {
                      className: "sub-menu",
                      children: [
                        l.jsx("li", {
                          children: l.jsx(X, {
                            to: "/grades/report",
                            className: ({ isActive: o }) =>
                              o ? "sub-link active" : "sub-link",
                            children: "My Grade Report",
                          }),
                        }),
                        l.jsx("li", {
                          children: l.jsx(X, {
                            to: "/grades/makeup-request",
                            className: ({ isActive: o }) =>
                              o ? "sub-link active" : "sub-link",
                            children: "Request Makeup Exam",
                          }),
                        }),
                        l.jsx("li", {
                          children: l.jsx(X, {
                            to: "/grades/makeup-requests",
                            className: ({ isActive: o }) =>
                              o ? "sub-link active" : "sub-link",
                            children: "View Makeup exam requests",
                          }),
                        }),
                      ],
                    }),
                ],
              }),
              l.jsxs("li", {
                className: `nav-item ${s === "clearances" ? "active" : ""}`,
                children: [
                  l.jsxs("div", {
                    className: `nav-link main-link ${s === "clearances" ? "active" : ""}`,
                    onClick: () => u("clearances"),
                    children: [
                      l.jsx(Cd, { size: 18 }),
                      l.jsx("span", { children: "CLEARANCES" }),
                    ],
                  }),
                  s === "clearances" &&
                    l.jsx("ul", {
                      className: "sub-menu",
                      children: l.jsx("li", {
                        children: l.jsx(X, {
                          to: "/clearances",
                          className: ({ isActive: o }) =>
                            o ? "sub-link active" : "sub-link",
                          end: !0,
                          children: "Clear/Withdraw",
                        }),
                      }),
                    }),
                ],
              }),
              l.jsxs("li", {
                className: `nav-item ${s === "transfers" ? "active" : ""}`,
                children: [
                  l.jsxs("div", {
                    className: `nav-link main-link ${s === "transfers" ? "active" : ""}`,
                    onClick: () => u("transfers"),
                    children: [
                      l.jsx(mm, { size: 18 }),
                      l.jsx("span", { children: "TRANSFERS" }),
                    ],
                  }),
                  s === "transfers" &&
                    l.jsxs("ul", {
                      className: "sub-menu",
                      children: [
                        l.jsx("li", {
                          className: "sub-group-label",
                          children: "Department Transfers",
                        }),
                        l.jsx("li", {
                          children: l.jsx(X, {
                            to: "/transfers",
                            className: ({ isActive: o }) =>
                              o
                                ? "sub-link sub-nested active"
                                : "sub-link sub-nested",
                            end: !0,
                            children: "View department transfer",
                          }),
                        }),
                        l.jsx("li", {
                          children: l.jsx(X, {
                            to: "/transfers/request",
                            className: ({ isActive: o }) =>
                              o
                                ? "sub-link sub-nested active"
                                : "sub-link sub-nested",
                            children: "Request Transfer",
                          }),
                        }),
                      ],
                    }),
                ],
              }),
              l.jsxs("li", {
                className: `nav-item ${s === "evalution" ? "active" : ""}`,
                children: [
                  l.jsxs("div", {
                    className: `nav-link main-link ${s === "evalution" ? "active" : ""}`,
                    onClick: () => u("evalution"),
                    children: [
                      l.jsx(xm, { size: 18 }),
                      l.jsx("span", { children: "EVALUTION" }),
                    ],
                  }),
                  s === "evalution" &&
                    l.jsx("ul", {
                      className: "sub-menu",
                      children: l.jsx("li", {
                        children: l.jsx(X, {
                          to: "/evalution/teacher",
                          className: ({ isActive: o }) =>
                            o ? "sub-link active" : "sub-link",
                          children: "Fill Evaluation Form",
                        }),
                      }),
                    }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  $m = ({ onMenuClick: e }) => {
    const { logout: t } = ja(),
      n = Vl(),
      [r, s] = j.useState(!1),
      i = j.useRef(null);
    j.useEffect(() => {
      const u = (o) => {
        i.current && !i.current.contains(o.target) && s(!1);
      };
      return (
        document.addEventListener("mousedown", u),
        () => {
          document.removeEventListener("mousedown", u);
        }
      );
    }, []);
    const a = () => {
      (t(), n("/login"));
    };
    return l.jsxs("header", {
      className: "main-header",
      children: [
        l.jsx("div", {
          className: "header-left",
          children: l.jsx("button", {
            className: "menu-toggle",
            onClick: e,
            title: "Toggle menu",
            children: l.jsx(Em, { size: 20, color: "#fff" }),
          }),
        }),
        l.jsxs("div", {
          className: "header-right",
          children: [
            l.jsxs("div", {
              className: "notifications",
              children: [
                l.jsx(Sm, { size: 18, color: "#2fa15f" }),
                l.jsx("span", { className: "badge", children: "5" }),
                l.jsx(xi, { size: 14, color: "#6c757d", className: "caret" }),
              ],
            }),
            l.jsxs("div", {
              className: "user-profile-wrapper",
              ref: i,
              children: [
                l.jsxs("div", {
                  className: "user-profile",
                  onClick: () => s(!r),
                  children: [
                    l.jsx("span", {
                      className: "user-id",
                      children: "UU93012R/15",
                    }),
                    l.jsx(xi, {
                      size: 14,
                      color: "#6c757d",
                      className: "caret",
                    }),
                  ],
                }),
                r &&
                  l.jsxs("div", {
                    className: "profile-dropdown",
                    children: [
                      l.jsx("div", {
                        className: "dropdown-item",
                        onClick: () => s(!1),
                        children: l.jsx("span", {
                          children: "Change Password",
                        }),
                      }),
                      l.jsx("div", {
                        className: "dropdown-item",
                        onClick: () => n("/profile/basic"),
                        children: l.jsx("span", { children: "Profile" }),
                      }),
                      l.jsxs("div", {
                        className: "dropdown-item danger",
                        onClick: a,
                        children: [
                          l.jsx(wm, { size: 16 }),
                          l.jsx("span", { children: "Logout" }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Vm = () => {
    const [e, t] = j.useState(!1),
      [n, r] = j.useState(!1),
      s = () => {
        if (window.innerWidth <= 768) {
          t((u) => !u);
          return;
        }
        r((u) => !u);
      },
      i = () => r(!1);
    return l.jsxs("div", {
      className: `app-container ${n ? "sidebar-collapsed" : ""}`,
      children: [
        e &&
          l.jsx("div", { className: "sidebar-overlay", onClick: () => t(!1) }),
        l.jsx(Bm, {
          isOpen: e,
          isCollapsed: n,
          onToggleCollapse: () => r((a) => !a),
          onExpand: i,
        }),
        l.jsxs("div", {
          className: "main-content-wrapper",
          children: [
            l.jsx($m, { onMenuClick: s }),
            l.jsx("main", {
              className: "main-content",
              children: l.jsx(Xp, {}),
            }),
            l.jsx("footer", {
              className: "footer",
              children: l.jsx("p", { children: "Copyright © 2012 - 2026" }),
            }),
          ],
        }),
      ],
    });
  },
  Gm = () => {
    const [e, t] = j.useState(!1);
    return l.jsxs("div", {
      className: "dashboard-page",
      children: [
        l.jsxs("div", {
          className: "flash-cards-container",
          children: [
            l.jsxs("div", {
              className: "card flash-card",
              children: [
                l.jsxs("div", {
                  className: "flash-card-header",
                  children: [
                    l.jsxs("div", {
                      className: "flash-card-title",
                      children: [
                        l.jsx(Bo, { size: 16 }),
                        l.jsx("span", { children: "Message" }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "flash-card-actions",
                      children: [
                        l.jsx(Dr, { size: 14 }),
                        l.jsx(Or, { size: 14 }),
                      ],
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "flash-card-body",
                  children: [
                    l.jsxs("p", {
                      className: "message-date",
                      children: [
                        "Aug 26, 2025 8:38:55 AM ",
                        l.jsx("span", {
                          className: "text-danger",
                          children: "(close)",
                        }),
                      ],
                    }),
                    l.jsxs("p", {
                      className: "message-text",
                      children: [
                        "You get B for the course ",
                        l.jsx("span", {
                          className: "course-highlight",
                          children:
                            "Architectural Science II (Water) (Arch-3131).",
                        }),
                      ],
                    }),
                    l.jsx("div", {
                      className: "message-action",
                      children: l.jsx("button", {
                        className: "btn-show-more",
                        onClick: () => t(!e),
                        children: e ? "Show less" : "Show more",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            l.jsxs("div", {
              className: "card flash-card",
              children: [
                l.jsxs("div", {
                  className: "flash-card-header",
                  children: [
                    l.jsxs("div", {
                      className: "flash-card-title",
                      children: [
                        l.jsx(Bo, { size: 16 }),
                        l.jsx("span", { children: "Current Pending Invoice" }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "flash-card-actions",
                      children: [
                        l.jsx(Dr, { size: 14 }),
                        l.jsx(Or, { size: 14 }),
                      ],
                    }),
                  ],
                }),
                l.jsx("div", { className: "flash-card-body empty-body" }),
              ],
            }),
            l.jsxs("div", {
              className: "card flash-card",
              children: [
                l.jsxs("div", {
                  className: "flash-card-header",
                  children: [
                    l.jsxs("div", {
                      className: "flash-card-title",
                      children: [
                        l.jsx(Sd, { size: 16 }),
                        l.jsx("span", { children: "Rank" }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "flash-card-actions",
                      children: [
                        l.jsx(Dr, { size: 14 }),
                        l.jsx(Or, { size: 14 }),
                      ],
                    }),
                  ],
                }),
                l.jsx("div", {
                  className: "flash-card-body",
                  children: l.jsx("hr", { className: "rank-divider" }),
                }),
              ],
            }),
          ],
        }),
        l.jsxs("div", {
          className: "card schedule-card",
          children: [
            l.jsxs("div", {
              className: "flash-card-header",
              children: [
                l.jsxs("div", {
                  className: "flash-card-title",
                  children: [
                    l.jsx(Nd, { size: 16 }),
                    l.jsx("span", { children: "Schedule" }),
                  ],
                }),
                l.jsxs("div", {
                  className: "flash-card-actions",
                  children: [l.jsx(Dr, { size: 14 }), l.jsx(Or, { size: 14 })],
                }),
              ],
            }),
            l.jsxs("div", {
              className: "schedule-body",
              children: [
                l.jsx("div", {
                  className: "schedule-title-bar",
                  children: "UG3 2016 AR 2 R",
                }),
                l.jsx("div", {
                  className: "table-responsive",
                  children: l.jsxs("table", {
                    className: "styled-table schedule-table",
                    children: [
                      l.jsx("thead", {
                        children: l.jsxs("tr", {
                          children: [
                            l.jsx("th", {
                              className: "dark-header",
                              children: "Periods/Weekday",
                            }),
                            l.jsx("th", { children: "Sunday" }),
                            l.jsx("th", { children: "Monday" }),
                            l.jsx("th", { children: "Tuesday" }),
                            l.jsx("th", { children: "Wednesday" }),
                            l.jsx("th", { children: "Thursday" }),
                            l.jsx("th", { children: "Friday" }),
                            l.jsx("th", { children: "Saturday" }),
                          ],
                        }),
                      }),
                      l.jsx("tbody", {
                        children: Dm.map((n, r) =>
                          l.jsxs(
                            "tr",
                            {
                              children: [
                                l.jsx("td", { children: n.period }),
                                l.jsx("td", { children: n.sunday }),
                                l.jsx("td", { children: n.monday }),
                                l.jsx("td", { children: n.tuesday }),
                                l.jsx("td", { children: n.wednesday }),
                                l.jsx("td", { children: n.thursday }),
                                l.jsx("td", { children: n.friday }),
                                l.jsx("td", { children: n.saturday }),
                              ],
                            },
                            r,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Wm = () => {
    const [e, t] = j.useState("basic");
    return l.jsxs("div", {
      className: "profile-page",
      children: [
        l.jsxs("div", {
          className: "page-header",
          children: [
            l.jsx(Am, { size: 18, color: "#6c757d" }),
            l.jsxs("h2", {
              className: "page-title",
              children: [
                "Update Student Details: ",
                R.firstNameEng,
                " ",
                R.middleNameEng,
                " ",
                R.lastNameEng,
                " (",
                R.username,
                ")",
              ],
            }),
          ],
        }),
        l.jsxs("div", {
          className: "card profile-card",
          children: [
            l.jsxs("div", {
              className: "profile-tabs",
              children: [
                l.jsx("button", {
                  className: `tab-btn ${e === "basic" ? "active" : ""}`,
                  onClick: () => t("basic"),
                  children: "Basic Student Information",
                }),
                l.jsx("button", {
                  className: `tab-btn ${e === "address" ? "active" : ""}`,
                  onClick: () => t("address"),
                  children: "Address & Primary Contact",
                }),
                l.jsx("button", {
                  className: `tab-btn ${e === "edu" ? "active" : ""}`,
                  onClick: () => t("edu"),
                  children: "Educational Background",
                }),
              ],
            }),
            e === "basic" &&
              l.jsxs("div", {
                className: "tab-content two-col-layout",
                children: [
                  l.jsxs("div", {
                    className: "left-col",
                    children: [
                      l.jsx("div", {
                        className: "section-title",
                        children: "Demographic Information",
                      }),
                      l.jsxs("div", {
                        className: "form-group",
                        children: [
                          l.jsxs("label", {
                            children: [
                              "First Name (English): ",
                              l.jsx("span", {
                                className: "req",
                                children: "*",
                              }),
                            ],
                          }),
                          l.jsx("input", {
                            type: "text",
                            value: R.firstNameEng,
                            disabled: !0,
                            className: "readonly-input",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "form-group",
                        children: [
                          l.jsxs("label", {
                            children: [
                              "Middle Name (English): ",
                              l.jsx("span", {
                                className: "req",
                                children: "*",
                              }),
                            ],
                          }),
                          l.jsx("input", {
                            type: "text",
                            value: R.middleNameEng,
                            disabled: !0,
                            className: "readonly-input",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "form-group",
                        children: [
                          l.jsxs("label", {
                            children: [
                              "Last Name (English): ",
                              l.jsx("span", {
                                className: "req",
                                children: "*",
                              }),
                            ],
                          }),
                          l.jsx("input", {
                            type: "text",
                            value: R.lastNameEng,
                            disabled: !0,
                            className: "readonly-input",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "form-group",
                        children: [
                          l.jsxs("label", {
                            children: [
                              "First Name (Amharic): ",
                              l.jsx("span", {
                                className: "req",
                                children: "*",
                              }),
                            ],
                          }),
                          l.jsx("input", {
                            type: "text",
                            value: R.firstNameAmh,
                            className: "outlined-input",
                            readOnly: !0,
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "form-group",
                        children: [
                          l.jsxs("label", {
                            children: [
                              "Middle Name (Amharic): ",
                              l.jsx("span", {
                                className: "req",
                                children: "*",
                              }),
                            ],
                          }),
                          l.jsx("input", {
                            type: "text",
                            value: R.middleNameAmh,
                            className: "outlined-input",
                            readOnly: !0,
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "form-group",
                        children: [
                          l.jsxs("label", {
                            children: [
                              "Last Name (Amharic): ",
                              l.jsx("span", {
                                className: "req",
                                children: "*",
                              }),
                            ],
                          }),
                          l.jsx("input", {
                            type: "text",
                            value: R.lastNameAmh,
                            className: "outlined-input",
                            readOnly: !0,
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "form-group mt-3",
                        children: [
                          l.jsxs("label", {
                            children: [
                              "Fayda FAN Number (16 digit) :",
                              " ",
                              l.jsxs("span", {
                                className: "req fw-bold",
                                children: [
                                  " ",
                                  "*(Fill out this very carefully!)",
                                ],
                              }),
                            ],
                          }),
                          l.jsx("input", {
                            type: "text",
                            placeholder:
                              "Check the FRONT side of your Fayda ID for FAN.",
                            className: "outlined-input warning-border",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "form-group mt-3 line-after",
                        children: [
                          l.jsxs("label", {
                            children: [
                              "Fayda FIN Number (12 digit) :",
                              " ",
                              l.jsxs("span", {
                                className: "req fw-bold",
                                children: [
                                  " ",
                                  "*(Fill out this very carefully!)",
                                ],
                              }),
                            ],
                          }),
                          l.jsx("input", {
                            type: "text",
                            placeholder:
                              "Check the BACK side of your Fayda ID for FIN.",
                            className: "outlined-input warning-border",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "form-group inline-group mt-4",
                        children: [
                          l.jsx("label", {
                            children: "Estimated Graduation Date: (G.C)",
                          }),
                          l.jsxs("div", {
                            className: "select-group",
                            children: [
                              l.jsx("select", {
                                defaultValue: "August",
                                children: l.jsx("option", {
                                  children: "August",
                                }),
                              }),
                              l.jsx("select", {
                                defaultValue: "1",
                                children: l.jsx("option", { children: "1" }),
                              }),
                              l.jsx("select", {
                                defaultValue: "2027",
                                children: l.jsx("option", { children: "2027" }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "form-group",
                        children: [
                          l.jsx("label", { children: "Sex:" }),
                          l.jsxs("select", {
                            defaultValue: "Male",
                            className: "outlined-select",
                            children: [
                              l.jsx("option", { children: "Male" }),
                              l.jsx("option", { children: "Female" }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "form-group mt-3",
                        children: [
                          l.jsx("label", { children: "Primary Language:" }),
                          l.jsx("input", {
                            type: "text",
                            className: "outlined-input",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "form-group mt-3",
                        children: [
                          l.jsxs("label", {
                            children: [
                              "Email: ",
                              l.jsx("span", {
                                className: "req",
                                children: "*",
                              }),
                            ],
                          }),
                          l.jsx("input", {
                            type: "email",
                            value: R.email,
                            className: "outlined-input",
                            readOnly: !0,
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "form-group mt-3",
                        children: [
                          l.jsx("label", { children: "Alternative Email:" }),
                          l.jsx("input", {
                            type: "email",
                            className: "outlined-input",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "form-group mt-3",
                        children: [
                          l.jsx("label", { children: "Phone (Home):" }),
                          l.jsx("input", {
                            type: "text",
                            className: "outlined-input",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "form-group mt-3",
                        children: [
                          l.jsxs("label", {
                            children: [
                              "Phone (Mobile): ",
                              l.jsx("span", {
                                className: "req",
                                children: "*",
                              }),
                            ],
                          }),
                          l.jsx("input", {
                            type: "text",
                            value: R.phoneMobile,
                            className: "outlined-input",
                            readOnly: !0,
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "form-group inline-group mt-3",
                        children: [
                          l.jsxs("label", {
                            children: [
                              "Birth Date: (G.C)",
                              " ",
                              l.jsx("span", {
                                className: "req",
                                children: " *(set this carefully!)",
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "select-group",
                            children: [
                              l.jsx("select", {
                                defaultValue: "April",
                                children: l.jsx("option", {
                                  children: "April",
                                }),
                              }),
                              l.jsx("select", {
                                defaultValue: "7",
                                children: l.jsx("option", { children: "7" }),
                              }),
                              l.jsx("select", {
                                defaultValue: "2003",
                                children: l.jsx("option", { children: "2003" }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "right-col",
                    children: [
                      l.jsxs("div", {
                        className: "info-box",
                        children: [
                          l.jsx("div", {
                            className: "section-title",
                            children: "Profile Picture",
                          }),
                          l.jsxs("div", {
                            className: "picture-placeholder",
                            children: [
                              "Photograph",
                              l.jsx("br", {}),
                              "not available",
                            ],
                          }),
                          l.jsxs("div", {
                            className: "upload-section",
                            children: [
                              l.jsx("label", {
                                children: "Uplaod Profile Picture",
                              }),
                              l.jsxs("div", {
                                className: "file-input-wrapper",
                                children: [
                                  l.jsx("button", {
                                    className: "btn-choose-file",
                                    children: "Choose File",
                                  }),
                                  l.jsx("span", {
                                    className: "file-name",
                                    children: "No file chosen",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "info-box mt-4",
                        children: [
                          l.jsx("div", {
                            className: "section-title",
                            children: "Access Information",
                          }),
                          l.jsxs("ul", {
                            className: "info-list",
                            children: [
                              l.jsxs("li", {
                                children: ["Username: ", R.username],
                              }),
                              l.jsxs("li", {
                                children: ["Last Login: ", R.lastLogin],
                              }),
                              l.jsxs("li", {
                                children: [
                                  "Last Password Change: ",
                                  R.lastPasswordChange,
                                ],
                              }),
                              l.jsx("li", { children: "Failed Logins: ---" }),
                              l.jsx("li", { children: "Ecardnumber: ---" }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "info-box mt-4",
                        children: [
                          l.jsx("div", {
                            className: "section-title",
                            children: "Classification of Admission",
                          }),
                          l.jsxs("ul", {
                            className: "info-list bordered-list",
                            children: [
                              l.jsxs("li", {
                                children: ["Program: ", R.program],
                              }),
                              l.jsxs("li", {
                                children: ["Program Type: ", R.programType],
                              }),
                              l.jsxs("li", {
                                children: ["Faculty: ", R.faculty],
                              }),
                              l.jsxs("li", {
                                children: ["Department: ", R.department],
                              }),
                              l.jsxs("li", {
                                children: ["Admission Year: ", R.admissionYear],
                              }),
                              l.jsxs("li", {
                                children: ["Admission Date: ", R.admissionDate],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            l.jsxs("div", {
              className: "form-actions",
              children: [
                l.jsxs("div", {
                  className: "alert-warning",
                  children: [
                    "Inputs/fields marked ",
                    l.jsx("span", { className: "req", children: "*" }),
                    " are required and you have to select or provide the required information, not marked fields are optional. Please check all tabs before updating your profile.",
                  ],
                }),
                l.jsx("div", {
                  className: "alert-info mt-3",
                  children:
                    "By submitting this form, you certify that all the information provided in this form is accurate and truthful to the best of your knowledge or supporting documents. Any false, misleading, or inaccurate information may be subject to further actions as permitted by the university's legislation or applicable law.",
                }),
                l.jsx("button", {
                  className: "btn-primary mt-4",
                  children: "Update Student Detail",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Ym = "/assets/0111-De5z4Z5_.jpg",
  $o = [
    { key: "basic-information", label: "Basic Information" },
    { key: "exemptions", label: "Exemptions" },
    { key: "registration", label: "Registration" },
    { key: "add-courses", label: "Add Courses" },
    { key: "drop-courses", label: "Drop Courses" },
    { key: "exam-results", label: "Exam Results" },
    { key: "curriculum", label: "Curriculum" },
    { key: "billing", label: "Billing" },
  ],
  qm = () => {
    var n;
    const [e, t] = j.useState("basic-information");
    return l.jsxs("div", {
      className: "profile-page academic-profile",
      children: [
        l.jsxs("div", {
          className: "page-header",
          children: [
            l.jsx(kd, { size: 18, color: "#6c757d" }),
            l.jsxs("h2", {
              className: "page-title",
              children: [
                "Student Academic Profile - ",
                R.firstNameEng,
                " ",
                R.middleNameEng,
                " ",
                R.lastNameEng,
                " (",
                R.username,
                ")",
              ],
            }),
          ],
        }),
        l.jsxs("div", {
          className: "card profile-card",
          children: [
            l.jsx("div", {
              className: "profile-tabs multi-tabs",
              children: $o.map((r) =>
                l.jsx(
                  "button",
                  {
                    className: `tab-btn ${e === r.key ? "active" : ""}`,
                    onClick: () => t(r.key),
                    children: r.label,
                  },
                  r.key,
                ),
              ),
            }),
            e === "basic-information" &&
              l.jsxs("div", {
                className: "tab-content two-col-layout academic-layout",
                children: [
                  l.jsxs("div", {
                    className: "left-col",
                    children: [
                      l.jsx("div", {
                        className: "section-title",
                        children: "Demographic Information",
                      }),
                      l.jsxs("div", {
                        className: "info-table",
                        children: [
                          l.jsxs("div", {
                            className: "info-row",
                            children: [
                              l.jsx("div", {
                                className: "info-label",
                                children: "First Name:",
                              }),
                              l.jsx("div", {
                                className: "info-value fw-bold",
                                children: R.firstNameEng,
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "info-row alternate",
                            children: [
                              l.jsx("div", {
                                className: "info-label",
                                children: "ስም:",
                              }),
                              l.jsx("div", {
                                className: "info-value fw-bold",
                                children: R.firstNameAmh,
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "info-row",
                            children: [
                              l.jsx("div", {
                                className: "info-label",
                                children: "Middle Name:",
                              }),
                              l.jsx("div", {
                                className: "info-value fw-bold",
                                children: R.middleNameEng,
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "info-row alternate",
                            children: [
                              l.jsx("div", {
                                className: "info-label",
                                children: "የአባት ስም:",
                              }),
                              l.jsx("div", {
                                className: "info-value fw-bold",
                                children: R.middleNameAmh,
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "info-row",
                            children: [
                              l.jsx("div", {
                                className: "info-label",
                                children: "Last Name:",
                              }),
                              l.jsx("div", {
                                className: "info-value fw-bold",
                                children: R.lastNameEng,
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "info-row alternate",
                            children: [
                              l.jsx("div", {
                                className: "info-label",
                                children: "የአያት ስም:",
                              }),
                              l.jsx("div", {
                                className: "info-value fw-bold",
                                children: R.lastNameAmh,
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "info-row",
                            children: [
                              l.jsx("div", {
                                className: "info-label",
                                children: "Sex:",
                              }),
                              l.jsx("div", {
                                className: "info-value fw-bold",
                                children: R.sex,
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "info-row alternate special-flex",
                            children: [
                              l.jsxs("div", {
                                className: "special-left",
                                children: [
                                  l.jsx("span", {
                                    className: "info-label",
                                    children: "Student ID:",
                                  }),
                                  l.jsx("span", {
                                    className: "info-value fw-bold ml-2",
                                    children: R.id,
                                  }),
                                ],
                              }),
                              l.jsx("a", {
                                href: "#",
                                className: "change-link",
                                children: "Change ID",
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "info-row",
                            children: [
                              l.jsx("div", {
                                className: "info-label",
                                children: "Birth Date:",
                              }),
                              l.jsx("div", {
                                className: "info-value",
                                children: R.birthDate,
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "info-row alternate",
                            children: [
                              l.jsx("div", {
                                className: "info-label",
                                children: "National Student ID:",
                              }),
                              l.jsx("div", {
                                className: "info-value",
                                children: "---",
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "info-row",
                            children: [
                              l.jsx("div", {
                                className: "info-label",
                                children: "Fayda ID (FAN):",
                              }),
                              l.jsx("div", {
                                className: "info-value",
                                children: "N/A",
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "info-row alternate",
                            children: [
                              l.jsx("div", {
                                className: "info-label",
                                children: "Fayda ID (FIN):",
                              }),
                              l.jsx("div", {
                                className: "info-value",
                                children: "N/A",
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsx("div", {
                        className: "section-title mt-4",
                        children: "Attended Sections",
                      }),
                      l.jsx("table", {
                        className: "styled-table sections-table",
                        children: l.jsx("tbody", {
                          children: Im.map((r, s) =>
                            l.jsx(
                              "tr",
                              {
                                className: s % 2 === 0 ? "alternate" : "",
                                children: l.jsx("td", {
                                  children: r.name.includes("Current")
                                    ? l.jsxs(l.Fragment, {
                                        children: [
                                          r.name.replace("Current", ""),
                                          " ",
                                          l.jsx("span", {
                                            className: "fw-bold",
                                            children: "Current",
                                          }),
                                        ],
                                      })
                                    : r.name,
                                }),
                              },
                              r.id,
                            ),
                          ),
                        }),
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "right-col",
                    children: [
                      l.jsxs("div", {
                        className: "info-box clear-bg portrait-box",
                        children: [
                          l.jsx("div", {
                            className: "section-title",
                            children: "Profile",
                          }),
                          l.jsx("div", {
                            className: "photo-container",
                            children: l.jsx("img", {
                              src: Ym,
                              alt: "Student Profile",
                              className: "student-photo",
                            }),
                          }),
                          l.jsx("a", {
                            href: "#",
                            className: "document-link mt-2",
                            children: "View Education Document",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "info-table-contained mt-4",
                        children: [
                          l.jsx("div", {
                            className: "section-title bg-gray",
                            children: "Access Information",
                          }),
                          l.jsxs("div", {
                            className: "contained-rows",
                            children: [
                              l.jsxs("div", {
                                className: "info-row text-sm",
                                children: ["Username: ", R.username],
                              }),
                              l.jsxs("div", {
                                className: "info-row alternate text-sm",
                                children: ["Email: ", R.email],
                              }),
                              l.jsxs("div", {
                                className: "info-row text-sm",
                                children: ["Phone Number: ", R.phoneMobile],
                              }),
                              l.jsxs("div", {
                                className: "info-row alternate text-sm",
                                children: ["Last Login: ", R.lastLogin],
                              }),
                              l.jsxs("div", {
                                className: "info-row text-sm",
                                children: [
                                  "Last Password Change: ",
                                  R.lastPasswordChange,
                                ],
                              }),
                              l.jsx("div", {
                                className: "info-row alternate text-sm",
                                children: "Failed Logins: ---",
                              }),
                              l.jsxs("div", {
                                className: "info-row text-sm",
                                children: ["Folder Number: ", R.folderNumber],
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "info-table-contained mt-4",
                        children: [
                          l.jsx("div", {
                            className: "section-title bg-gray",
                            children: "Classification of Admission",
                          }),
                          l.jsxs("div", {
                            className: "contained-rows",
                            children: [
                              l.jsxs("div", {
                                className: "info-row text-sm",
                                children: ["Program: ", R.program],
                              }),
                              l.jsxs("div", {
                                className: "info-row alternate text-sm",
                                children: ["Program Type: ", R.programType],
                              }),
                              l.jsxs("div", {
                                className: "info-row text-sm",
                                children: ["Campus: ", R.campus],
                              }),
                              l.jsxs("div", {
                                className: "info-row alternate text-sm",
                                children: ["Faculty: ", R.faculty],
                              }),
                              l.jsxs("div", {
                                className: "info-row text-sm",
                                children: ["Department: ", R.department],
                              }),
                              l.jsxs("div", {
                                className: "info-row alternate text-sm",
                                children: ["Admission Year: ", R.admissionYear],
                              }),
                              l.jsxs("div", {
                                className: "info-row text-sm",
                                children: ["Date Admitted: ", R.admissionDate],
                              }),
                              l.jsx("div", {
                                className: "info-action-box alternate",
                                children: l.jsx("a", {
                                  href: "#",
                                  children: "View Preferences",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            e !== "basic-information" &&
              l.jsx("div", {
                className: "tab-content",
                children: l.jsxs("div", {
                  className: "info-box mt-3",
                  children: [
                    l.jsx("div", {
                      className: "section-title",
                      children:
                        (n = $o.find((r) => r.key === e)) == null
                          ? void 0
                          : n.label,
                    }),
                    l.jsx("p", {
                      className: "text-sm",
                      style: { margin: "10px 0 0 0" },
                      children:
                        "This section follows the SIS Academic Profile tab structure.",
                    }),
                  ],
                }),
              }),
          ],
        }),
      ],
    });
  },
  Qm = () =>
    l.jsxs("div", {
      className: "search-page",
      children: [
        l.jsx("div", {
          className: "card title-card",
          children: l.jsx("h2", { children: "Accepted Student Search" }),
        }),
        l.jsxs("div", {
          className: "card table-card",
          children: [
            l.jsx("div", {
              className: "table-wrapper",
              children: l.jsxs("table", {
                className: "admissions-table",
                children: [
                  l.jsx("thead", {
                    children: l.jsxs("tr", {
                      children: [
                        l.jsx("th", {
                          className: "text-center",
                          children: "No.",
                        }),
                        l.jsx("th", { children: "Full Name" }),
                        l.jsx("th", { children: "Sex" }),
                        l.jsx("th", { children: "Student Number" }),
                        l.jsx("th", { children: "College" }),
                        l.jsx("th", { children: "Department" }),
                        l.jsx("th", { children: "Program Type" }),
                        l.jsx("th", { children: "Folder Number" }),
                        l.jsx("th", { children: "File Number" }),
                      ],
                    }),
                  }),
                  l.jsx("tbody", {
                    children: Om.map((e, t) =>
                      l.jsxs(
                        "tr",
                        {
                          className: t % 2 === 0 ? "bg-light" : "",
                          children: [
                            l.jsx("td", {
                              className: "text-center",
                              children: e.no,
                            }),
                            l.jsx("td", { children: e.fullName }),
                            l.jsx("td", { children: e.sex }),
                            l.jsx("td", { children: e.studentNumber }),
                            l.jsx("td", {
                              className: "text-teal",
                              children: e.college,
                            }),
                            l.jsx("td", {
                              className: "text-teal",
                              children: e.department,
                            }),
                            l.jsx("td", {
                              className: "text-teal",
                              children: e.programType,
                            }),
                            l.jsx("td", { children: e.folderNumber }),
                            l.jsx("td", { children: e.fileNumber }),
                          ],
                        },
                        e.studentNumber,
                      ),
                    ),
                  }),
                ],
              }),
            }),
            l.jsx("div", { className: "empty-row-box" }),
            l.jsx("div", {
              className: "pagination-info",
              children:
                "Page 1 of 1, showing 1 records out of 1 total, starting on record 1, ending on 1",
            }),
            l.jsxs("div", {
              className: "pagination-controls",
              children: [
                l.jsx("span", { className: "page-link", children: "<<" }),
                l.jsx("span", { className: "page-link", children: ">>" }),
              ],
            }),
          ],
        }),
      ],
    }),
  Na = [
    {
      sNo: 1,
      year: 2015,
      term: 1,
      courseName: "Communicative English Language Skills - I",
      courseCode: "FLEN 1011",
      creditHour: 3,
      prerequisite: "None",
    },
    {
      sNo: 2,
      year: 2015,
      term: 1,
      courseName: "Critical Thinking",
      courseCode: "LOCT 1011",
      creditHour: 3,
      prerequisite: "None",
    },
    {
      sNo: 3,
      year: 2015,
      term: 1,
      courseName: "General Psychology",
      courseCode: "PSYC 1011",
      creditHour: 3,
      prerequisite: "None",
    },
    {
      sNo: 4,
      year: 2015,
      term: 1,
      courseName: "Mathematics for Social Sciences",
      courseCode: "MATHS 1011",
      creditHour: 3,
      prerequisite: "None",
    },
    {
      sNo: 5,
      year: 2015,
      term: 2,
      courseName: "Communicative English Language Skills - II",
      courseCode: "FLEN 1012",
      creditHour: 3,
      prerequisite: "FLEN 1011",
    },
    {
      sNo: 6,
      year: 2015,
      term: 2,
      courseName: "Geography of Ethiopia and the Horn",
      courseCode: "GEES 1012",
      creditHour: 3,
      prerequisite: "None",
    },
    {
      sNo: 7,
      year: 2015,
      term: 2,
      courseName: "Social Anthropology",
      courseCode: "ANTH 1012",
      creditHour: 2,
      prerequisite: "None",
    },
    {
      sNo: 8,
      year: 2015,
      term: 2,
      courseName: "Introduction to Economics",
      courseCode: "ECON 1011",
      creditHour: 3,
      prerequisite: "None",
    },
    {
      sNo: 9,
      year: 2015,
      term: 3,
      courseName: "Entrepreneurship",
      courseCode: "ENTR 1012",
      creditHour: 2,
      prerequisite: "None",
    },
    {
      sNo: 10,
      year: 2015,
      term: 3,
      courseName: "Global Trends",
      courseCode: "GLTR 1012",
      creditHour: 2,
      prerequisite: "None",
    },
    {
      sNo: 11,
      year: 2015,
      term: 3,
      courseName: "Introduction to Emerging Technology",
      courseCode: "EMTE 1012",
      creditHour: 2,
      prerequisite: "None",
    },
    {
      sNo: 12,
      year: 2015,
      term: 3,
      courseName: "Moral and Civic Education",
      courseCode: "MCIE 1012",
      creditHour: 2,
      prerequisite: "None",
    },
    {
      sNo: 13,
      year: 2015,
      term: 3,
      courseName: "Physical and Fitness Education",
      courseCode: "SPSC 1011",
      creditHour: 2,
      prerequisite: "None",
    },
    {
      sNo: 14,
      year: 2016,
      term: 1,
      courseName: "Basic Writing Skills (Sophomore English)",
      courseCode: "ENG 201",
      creditHour: 3,
      prerequisite: "FLEN 1012",
    },
    {
      sNo: 15,
      year: 2016,
      term: 1,
      courseName: "Fundamentals of Accounting - I",
      courseCode: "ACFN 201",
      creditHour: 3,
      prerequisite: "None",
    },
    {
      sNo: 16,
      year: 2016,
      term: 1,
      courseName: "Inclusiveness",
      courseCode: "SNIE 1012",
      creditHour: 2,
      prerequisite: "None",
    },
    {
      sNo: 17,
      year: 2016,
      term: 1,
      courseName: "Introduction to Management",
      courseCode: "MGMT 211",
      creditHour: 3,
      prerequisite: "None",
    },
    {
      sNo: 18,
      year: 2016,
      term: 2,
      courseName: "Fundamentals of Accounting - II",
      courseCode: "ACFN 202",
      creditHour: 3,
      prerequisite: "ACFN 201",
    },
    {
      sNo: 19,
      year: 2016,
      term: 2,
      courseName: "Introduction to Marketing",
      courseCode: "MRKT 202",
      creditHour: 3,
      prerequisite: "Econ 1011",
    },
    {
      sNo: 20,
      year: 2016,
      term: 2,
      courseName: "Introduction to Statistics",
      courseCode: "STAT 192",
      creditHour: 3,
      prerequisite: "None",
    },
    {
      sNo: 21,
      year: 2016,
      term: 2,
      courseName: "Microeconomics",
      courseCode: "ECON 221",
      creditHour: 3,
      prerequisite: "ECON 1011",
    },
    {
      sNo: 22,
      year: 2016,
      term: 3,
      courseName: "Administrative and Business Communication",
      courseCode: "MGMT 212",
      creditHour: 3,
      prerequisite: "None",
    },
    {
      sNo: 23,
      year: 2016,
      term: 3,
      courseName: "Introduction to Computer Application",
      courseCode: "COMP 105",
      creditHour: 3,
      prerequisite: "None",
    },
    {
      sNo: 24,
      year: 2016,
      term: 3,
      courseName: "Macroeconomics",
      courseCode: "ECON 305",
      creditHour: 3,
      prerequisite: "None",
    },
    {
      sNo: 25,
      year: 2016,
      term: 3,
      courseName: "Mathematics for Management",
      courseCode: "MATHS 221",
      creditHour: 3,
      prerequisite: "MATHS 1011",
    },
    {
      sNo: 26,
      year: 2017,
      term: 1,
      courseName: "Cost and Management Accounting",
      courseCode: "ACFN 211",
      creditHour: 3,
      prerequisite: "ACFN 202",
    },
    {
      sNo: 27,
      year: 2017,
      term: 1,
      courseName: "Management Information Systems",
      courseCode: "MGMT 311",
      creditHour: 3,
      prerequisite: "MGMT 211, COMP 105",
    },
    {
      sNo: 28,
      year: 2017,
      term: 1,
      courseName: "Managerial Statistics",
      courseCode: "MGMT 313",
      creditHour: 3,
      prerequisite: "STAT 192",
    },
    {
      sNo: 29,
      year: 2017,
      term: 1,
      courseName: "Materials Management",
      courseCode: "MGMT 323",
      creditHour: 3,
      prerequisite: "MGMT 211",
    },
    {
      sNo: 30,
      year: 2017,
      term: 2,
      courseName: "Intermediate Financial Accounting",
      courseCode: "ACFN 231",
      creditHour: 3,
      prerequisite: "ACFN 211",
    },
    {
      sNo: 31,
      year: 2017,
      term: 2,
      courseName: "Leadership and Change Management",
      courseCode: "MGMT 325",
      creditHour: 3,
      prerequisite: "MGMT 211, PSYC 1011",
    },
    {
      sNo: 32,
      year: 2017,
      term: 2,
      courseName: "Organizational Behavior",
      courseCode: "MGMT 226",
      creditHour: 3,
      prerequisite: "MGMT 211",
    },
    {
      sNo: 33,
      year: 2017,
      term: 3,
      courseName: "Basic Financial Management",
      courseCode: "MGMT 413",
      creditHour: 3,
      prerequisite: "ACFN 231",
    },
    {
      sNo: 34,
      year: 2017,
      term: 3,
      courseName: "Business Ethics and Social Responsibility",
      courseCode: "MGMT 412",
      creditHour: 3,
      prerequisite: "MGMT 221",
    },
    {
      sNo: 35,
      year: 2017,
      term: 3,
      courseName: "Development Economics",
      courseCode: "ECON 365",
      creditHour: 3,
      prerequisite: "None",
    },
    {
      sNo: 36,
      year: 2017,
      term: 3,
      courseName: "Global Marketing Management",
      courseCode: "MGMT 326",
      creditHour: 3,
      prerequisite: "MGMT 323",
    },
    {
      sNo: 37,
      year: 2017,
      term: 3,
      courseName: "Operations Management",
      courseCode: "MGMT 411",
      creditHour: 3,
      prerequisite: "MGMT 211, MGMT 313",
    },
    {
      sNo: 38,
      year: 2018,
      term: 1,
      courseName: "Business Research Methods",
      courseCode: "MGMT 414",
      creditHour: 3,
      prerequisite: "MGMT 211, MGMT 313",
    },
    {
      sNo: 39,
      year: 2018,
      term: 1,
      courseName: "Managerial Economics",
      courseCode: "MGMT 422",
      creditHour: 3,
      prerequisite: "MGMT 221",
    },
    {
      sNo: 40,
      year: 2018,
      term: 1,
      courseName: "Strategic Management",
      courseCode: "MGMT 421",
      creditHour: 3,
      prerequisite: "MGMT 322, MGMT 311",
    },
    {
      sNo: 41,
      year: 2018,
      term: 1,
      courseName: "System Analysis and Design",
      courseCode: "MGMT 420",
      creditHour: 3,
      prerequisite: "MGMT 311",
    },
    {
      sNo: 42,
      year: 2018,
      term: 2,
      courseName: "Financial Markets and Institutions",
      courseCode: "MGMT 423",
      creditHour: 3,
      prerequisite: "MGMT 323, MGMT 411",
    },
    {
      sNo: 43,
      year: 2018,
      term: 2,
      courseName: "Operations and Project Management",
      courseCode: "MGMT 425",
      creditHour: 3,
      prerequisite: "MGMT 323, MGMT 411",
    },
    {
      sNo: 44,
      year: 2018,
      term: 2,
      courseName: "Senior Essay in Management",
      courseCode: "MGMT 424",
      creditHour: 3,
      prerequisite: "ECON 451",
    },
    {
      sNo: 45,
      year: 2018,
      term: 3,
      courseName: "Advanced Business Law and Enterprise",
      courseCode: "LAW 201",
      creditHour: 3,
      prerequisite: "MGMT 211",
    },
    {
      sNo: 46,
      year: 2018,
      term: 3,
      courseName: "Human Resource Management",
      courseCode: "MGMT 321",
      creditHour: 3,
      prerequisite: "MGMT 211, MGMT 313",
    },
    {
      sNo: 47,
      year: 2018,
      term: 3,
      courseName: "Risk Management and Insurance",
      courseCode: "MGMT 428",
      creditHour: 3,
      prerequisite: "MGMT 221, MGMT 411",
    },
    {
      sNo: 48,
      year: 2018,
      term: 3,
      courseName: "Advanced Entrepreneurship and Enterprise Management",
      courseCode: "MGMT 424",
      creditHour: 3,
      prerequisite: "ECON 451",
    },
    {
      sNo: 49,
      year: 2018,
      term: 3,
      courseName: "Business Law",
      courseCode: "MGMT 322",
      creditHour: 3,
      prerequisite: "MGMT 221, PSYC 1011",
    },
    {
      sNo: 50,
      year: 2018,
      term: 3,
      courseName: "Senior Essay in Management II",
      courseCode: "MGMT 429",
      creditHour: 3,
      prerequisite: "MGMT 424",
    },
    {
      sNo: 51,
      year: 2018,
      term: 3,
      courseName: "Capstone Management Seminar",
      courseCode: "MGMT 430",
      creditHour: 3,
      prerequisite: "MGMT 425",
    },
  ],
  Qe = {
    fullName: "Natnael Tesfaye Ahmed",
    id: "UU93012R/15",
    department: "Management",
    program: "Undergraduate (Degree)",
    programType: "Regular",
    schoolCenter: "Faculty of Distance Education",
  },
  Km = { "A-": 3.75, "B+": 3.5, B: 3, "C+": 2.5 },
  Vo = ["B+", "B", "B+", "B", "A-", "B", "B+", "C+"],
  Xm = ["1st", "2nd", "3rd", "4th"],
  Zm = { 2015: "1st", 2016: "2nd", 2017: "3rd", 2018: "4th" },
  Pd = (e, t) => (e.year !== t.year ? e.year - t.year : e.term - t.term),
  Td = Na.slice()
    .sort(Pd)
    .reduce((e, t) => {
      const n = `${t.year}-${t.term}`;
      return (e[n] || (e[n] = []), e[n].push(t), e);
    }, {}),
  Jm = Object.keys(Td).sort((e, t) => {
    const [n, r] = e.split("-").map(Number),
      [s, i] = t.split("-").map(Number);
    return n !== s ? n - s : r - i;
  }),
  bm = Na.slice()
    .sort(Pd)
    .map((e, t) => ({
      sNo: t + 1,
      id: Qe.id,
      name: Qe.fullName,
      department: Qe.department,
      program: "Undergraduate (Degree)",
      programType: "Regular",
      year: Zm[e.year],
      academicYear: String(e.year),
      semester: String(e.term),
      course: `${e.courseCode}-${e.courseName}`,
      paymentSlip: "Payment Invoice",
    })),
  An = [
    {
      sNo: "+ 1",
      student: "Natnael Tesfaye Ahmed",
      academicYear: "2015/1",
      refPattern: "PAY-2015-1",
      receiptNumber: "000000600001",
      contactHr: "18",
      amount: "10,420.00",
      group: "Course Registration",
      term: "Full",
      date: "-",
      receipt: "Receipt",
      status: "paid",
    },
    {
      sNo: "+ 2",
      student: "Natnael Tesfaye Ahmed",
      academicYear: "2015/2",
      refPattern: "PAY-2015-2",
      receiptNumber: "000000600002",
      contactHr: "19",
      amount: "9,870.00",
      group: "Course Registration",
      term: "Full",
      date: "-",
      receipt: "Receipt",
      status: "paid",
    },
    {
      sNo: "+ 3",
      student: "Natnael Tesfaye Ahmed",
      academicYear: "2015/3",
      refPattern: "PAY-2015-3",
      receiptNumber: "000000600003",
      contactHr: "20",
      amount: "10,210.00",
      group: "Course Registration",
      term: "Full",
      date: "-",
      receipt: "Receipt",
      status: "paid",
    },
    {
      sNo: "+ 4",
      student: "Natnael Tesfaye Ahmed",
      academicYear: "2016/1",
      refPattern: "PAY-2016-1",
      receiptNumber: "000000600004",
      contactHr: "21",
      amount: "10,970.00",
      group: "Course Registration",
      term: "Full",
      date: "-",
      receipt: "Receipt",
      status: "paid",
    },
    {
      sNo: "+ 5",
      student: "Natnael Tesfaye Ahmed",
      academicYear: "2016/2",
      refPattern: "PAY-2016-2",
      receiptNumber: "000000600005",
      contactHr: "22",
      amount: "11,320.00",
      group: "Course Registration",
      term: "Full",
      date: "-",
      receipt: "Receipt",
      status: "paid",
    },
    {
      sNo: "+ 6",
      student: "Natnael Tesfaye Ahmed",
      academicYear: "2016/3",
      refPattern: "PAY-2016-3",
      receiptNumber: "000000600006",
      contactHr: "23",
      amount: "11,585.00",
      group: "Course Registration",
      term: "Full",
      date: "-",
      receipt: "Receipt",
      status: "paid",
    },
    {
      sNo: "+ 7",
      student: "Natnael Tesfaye Ahmed",
      academicYear: "2017/1",
      refPattern: "PAY-2017-1",
      receiptNumber: "000000600007",
      contactHr: "24",
      amount: "13,785.00",
      group: "Course Registration",
      term: "Full",
      date: "-",
      receipt: "Receipt",
      status: "paid",
    },
    {
      sNo: "+ 8",
      student: "Natnael Tesfaye Ahmed",
      academicYear: "2017/2",
      refPattern: "PAY-2017-2",
      receiptNumber: "000000600008",
      contactHr: "25",
      amount: "14,050.00",
      group: "Course Registration",
      term: "Full",
      date: "-",
      receipt: "Receipt",
      status: "paid",
    },
    {
      sNo: "+ 9",
      student: "Natnael Tesfaye Ahmed",
      academicYear: "2017/3",
      refPattern: "PAY-2017-3",
      receiptNumber: "000000600009",
      contactHr: "26",
      amount: "12,755.00",
      group: "Course Registration",
      term: "Full",
      date: "-",
      receipt: "Receipt",
      status: "paid",
    },
    {
      sNo: "+ 10",
      student: "Natnael Tesfaye Ahmed",
      academicYear: "2017/4",
      refPattern: "PAY-2017-4",
      receiptNumber: "000000600010",
      contactHr: "27",
      amount: "13,790.00",
      group: "Course Registration",
      term: "Full",
      date: "-",
      receipt: "Receipt",
      status: "paid",
    },
    {
      sNo: "+ 11",
      student: "Natnael Tesfaye Ahmed",
      academicYear: "2018/1",
      refPattern: "PAY-2018-1",
      receiptNumber: "000000600011",
      contactHr: "28",
      amount: "17,890.00",
      group: "Course Registration",
      term: "Full",
      date: "-",
      receipt: "Receipt",
      status: "paid",
    },
    {
      sNo: "+ 12",
      student: "Natnael Tesfaye Ahmed",
      academicYear: "2018/2",
      refPattern: "PAY-2018-2",
      receiptNumber: "000000600012",
      contactHr: "29",
      amount: "18,290.00",
      group: "Course Registration",
      term: "Full",
      date: "-",
      receipt: "Receipt",
      status: "paid",
    },
    {
      sNo: "+ 13",
      student: "Natnael Tesfaye Ahmed",
      academicYear: "2018/3",
      refPattern: "PAY-2018-SR",
      receiptNumber: "Pending",
      contactHr: "-",
      amount: "Pending",
      group: "Senior Research",
      term: "Pending",
      date: "-",
      receipt: "Pending",
      status: "unpaid",
    },
    {
      sNo: "+ 14",
      student: "Natnael Tesfaye Ahmed",
      academicYear: "2018/4",
      refPattern: "PAY-2018-4",
      receiptNumber: "Pending",
      contactHr: "-",
      amount: "Pending",
      group: "Course Registration",
      term: "4th Term Pending",
      date: "-",
      receipt: "Pending",
      status: "unpaid",
    },
  ],
  yi = Jm.map((e) => {
    const [t, n] = e.split("-"),
      r = t === "2018" && (n === "2" || n === "3"),
      s = Td[e].map((u, o) => {
        const c = r ? "-" : Vo[(u.sNo + o) % Vo.length],
          v = c === "-" ? 0 : Km[c] * u.creditHour;
        return {
          courseCode: u.courseCode,
          courseTitle: u.courseName,
          creditHour: u.creditHour,
          grade: c,
          gradePoint: Number(v.toFixed(2)),
        };
      }),
      i = s.reduce((u, o) => u + o.creditHour, 0),
      a = s.reduce((u, o) => u + o.gradePoint, 0);
    return {
      filters: { academicYear: t, semester: n },
      student: {
        fullName: Qe.fullName,
        id: Qe.id,
        program: Qe.program,
        programType: Qe.programType,
        schoolCenter: Qe.schoolCenter,
        department: Qe.department,
        section: `DE MGMT ${Math.max(1, Number(t) - 2014)}`,
        yearLevel: Xm[Math.max(0, Math.min(3, Number(t) - 2015))],
      },
      courses: s,
      totalCredit: i,
      totalPoint: a,
      pending: r,
    };
  })
    .reduce((e, t) => {
      const n = e[e.length - 1],
        r = n ? n.cumulativeCreditHour : 0,
        s = n ? n.cumulativeGradePoint : 0,
        i = r === 0 ? 0 : Number((s / r).toFixed(2)),
        a = t.pending ? r : r + t.totalCredit,
        u = t.pending ? s : Number((s + t.totalPoint).toFixed(2)),
        o = Number((u / Math.max(1, a)).toFixed(2));
      return (
        e.push({
          filters: t.filters,
          student: t.student,
          courses: t.courses,
          pending: t.pending,
          previousCreditHour: r,
          previousGradePoint: s,
          previousSgpa: i,
          cumulativeGpa: o,
          cumulativeCreditHour: a,
          cumulativeGradePoint: u,
          academicStatus:
            (t.pending && (n == null ? void 0 : n.academicStatus)) ||
            (o >= 2 ? "Good Standing" : "Probation"),
        }),
        e
      );
    }, [])
    .map((e) =>
      e.filters.academicYear === "2018" && e.filters.semester === "1"
        ? {
            ...e,
            cumulativeGpa: 3.2,
            cumulativeGradePoint: Number(
              (e.cumulativeCreditHour * 3.2).toFixed(2),
            ),
          }
        : e,
    )
    .sort((e, t) => {
      const n = Number(t.filters.academicYear) - Number(e.filters.academicYear);
      return n !== 0
        ? n
        : Number(t.filters.semester) - Number(e.filters.semester);
    }),
  ji =
    yi.find(
      (e) => e.filters.academicYear === "2018" && e.filters.semester === "3",
    ) ?? yi[0],
  Ni = ["2018", "2017", "2016", "2015"],
  ki = ["1", "2", "3"],
  Ir = [
    {
      id: "1900",
      transferToDepartment: "Management (Al-Amoudi-Gerji Campus)",
      fullName: "Natnael Tesfaye Ahmed",
      requestDate: "2024-09-28",
      senderDepartmentApproval: "Accepted",
      senderCollegeApproval: "Accepted",
      senderCollegeApprovalDate: "2024-09-28",
      receiverDepartmentApproval: "Accepted",
      receiverDepartmentDate: "2024-09-28",
      receiverCollegeApproval: "Accepted",
      receiverCollegeApprovalDate: "2024-09-28",
      canCancel: !0,
    },
  ],
  Ur = [
    {
      sNo: 1,
      fullName: "Natnael Tesfaye Ahmed",
      gender: "Male",
      studentNumber: "UU93012R/15",
      admissionYear: "Sep 01, 2016",
      program: "Undergraduate (Degree)",
      programType: "Regular",
      college: "Engineering, Technology and Computational Sciences",
      department: "Management",
    },
  ],
  Hr = [];
Na.map((e) => ({
  sNo: e.sNo,
  yearTerm: `Year ${e.year - 2014} - Semester ${e.term}`,
  courseName: e.courseName,
  courseCode: e.courseCode,
  creditHour: e.creditHour,
  prerequisite: e.prerequisite,
}));
const Go = () =>
    l.jsxs("div", {
      className: "admitted-page card",
      children: [
        l.jsx("h3", { className: "admitted-title", children: "View Students" }),
        l.jsxs("div", {
          className: "print-tools",
          children: [
            l.jsx("span", { children: "Print" }),
            l.jsx("span", { children: "ETA Print" }),
          ],
        }),
        l.jsxs("table", {
          className: "admitted-table",
          children: [
            l.jsx("thead", {
              children: l.jsxs("tr", {
                children: [
                  l.jsx("th", { children: "S.Nq" }),
                  l.jsx("th", { children: "Full Name" }),
                  l.jsx("th", { children: "Gender" }),
                  l.jsx("th", { children: "Studentnumber" }),
                  l.jsx("th", { children: "Admissionyear" }),
                  l.jsx("th", { children: "Program" }),
                  l.jsx("th", { children: "Program Type" }),
                  l.jsx("th", { children: "College" }),
                  l.jsx("th", { children: "Department" }),
                ],
              }),
            }),
            l.jsx("tbody", {
              children: Ur.map((e) =>
                l.jsxs(
                  "tr",
                  {
                    children: [
                      l.jsx("td", { children: e.sNo }),
                      l.jsx("td", { children: e.fullName }),
                      l.jsx("td", { children: e.gender }),
                      l.jsx("td", { children: e.studentNumber }),
                      l.jsx("td", { children: e.admissionYear }),
                      l.jsx("td", { children: e.program }),
                      l.jsx("td", { children: e.programType }),
                      l.jsx("td", { children: e.college }),
                      l.jsx("td", { children: e.department }),
                    ],
                  },
                  e.studentNumber,
                ),
              ),
            }),
          ],
        }),
        l.jsxs("div", {
          className: "admitted-page-info",
          children: [
            "Page 1 of 1, showing ",
            Ur.length,
            " records out of ",
            Ur.length,
            " total, starting on record 1, ending on ",
            Ur.length,
          ],
        }),
        l.jsx("div", { className: "admitted-page-nav", children: "<< >>" }),
      ],
    }),
  Wo = () => {
    const [e, t] = j.useState(!1),
      [n, r] = j.useState(Ni[0]),
      [s, i] = j.useState(ki[0]),
      a = () => {
        t(!0);
      },
      u = bm.filter((o) => o.academicYear === n && o.semester === s);
    return l.jsxs("div", {
      className: "registration-page",
      children: [
        l.jsxs("div", {
          className: "card search-card",
          children: [
            l.jsx("h2", {
              className: "search-title",
              children: "Course Registration search",
            }),
            l.jsxs("div", {
              className: "search-form-row",
              children: [
                l.jsxs("div", {
                  className: "form-group flex-1",
                  children: [
                    l.jsx("label", { children: "Academic Year" }),
                    l.jsx("select", {
                      className: "outlined-select",
                      value: n,
                      onChange: (o) => r(o.target.value),
                      title: "Academic Year",
                      children: Ni.map((o) =>
                        l.jsx("option", { value: o, children: o }, o),
                      ),
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "form-group flex-1",
                  children: [
                    l.jsx("label", { children: "Semester" }),
                    l.jsx("select", {
                      className: "outlined-select",
                      value: s,
                      onChange: (o) => i(o.target.value),
                      title: "Semester",
                      children: ki.map((o) =>
                        l.jsx("option", { value: o, children: o }, o),
                      ),
                    }),
                  ],
                }),
              ],
            }),
            l.jsx("button", {
              className: "btn-search",
              onClick: a,
              children: "Search",
            }),
          ],
        }),
        e &&
          l.jsx("div", {
            className: "card results-card mt-3",
            children: l.jsx("div", {
              className: "table-wrapper",
              children: l.jsxs("table", {
                className: "registration-table styled-table",
                children: [
                  l.jsx("thead", {
                    children: l.jsxs("tr", {
                      children: [
                        l.jsx("th", { children: "S.No" }),
                        l.jsx("th", { children: "ID" }),
                        l.jsx("th", { children: "Name" }),
                        l.jsx("th", { children: "Department" }),
                        l.jsx("th", { children: "Program" }),
                        l.jsxs("th", {
                          children: ["Program", l.jsx("br", {}), "Type"],
                        }),
                        l.jsx("th", { children: "Year" }),
                        l.jsxs("th", {
                          children: ["Academic", l.jsx("br", {}), "Year"],
                        }),
                        l.jsx("th", { children: "Semester" }),
                        l.jsx("th", { children: "Course" }),
                        l.jsxs("th", {
                          children: ["Payment", l.jsx("br", {}), "Slip"],
                        }),
                      ],
                    }),
                  }),
                  l.jsxs("tbody", {
                    children: [
                      u.map((o, c) =>
                        l.jsxs(
                          "tr",
                          {
                            className: c % 2 === 0 ? "bg-light" : "",
                            children: [
                              l.jsx("td", { children: o.sNo }),
                              l.jsx("td", { children: o.id }),
                              l.jsx("td", {
                                className: "text-teal text-wrap-name",
                                children: o.name.replace(
                                  " ",
                                  `
`,
                                ),
                              }),
                              l.jsx("td", { children: o.department }),
                              l.jsx("td", { children: o.program }),
                              l.jsx("td", { children: o.programType }),
                              l.jsx("td", { children: o.year }),
                              l.jsx("td", { children: o.academicYear }),
                              l.jsx("td", { children: o.semester }),
                              l.jsx("td", {
                                className: "text-teal",
                                children: o.course,
                              }),
                              l.jsxs("td", {
                                className: "text-teal",
                                children: [
                                  "Payment",
                                  l.jsx("br", {}),
                                  "Invoice",
                                ],
                              }),
                            ],
                          },
                          c,
                        ),
                      ),
                      u.length === 0 &&
                        l.jsx("tr", {
                          children: l.jsxs("td", {
                            colSpan: 11,
                            className: "registration-empty-state",
                            children: [
                              "No registration found for Academic Year ",
                              n,
                              " ",
                              "Semester ",
                              s,
                              ".",
                            ],
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            }),
          }),
      ],
    });
  },
  We = () =>
    l.jsxs("div", {
      className: "course-adds-page",
      children: [
        l.jsxs("div", {
          className: "alert-message",
          children: [
            l.jsx("div", {
              className: "alert-icon-wrapper",
              children: l.jsx(Pm, {
                size: 18,
                color: "white",
                fill: "#5bc0de",
              }),
            }),
            l.jsx("span", {
              children:
                "There is no add courses in the system in the given criteria.",
            }),
          ],
        }),
        l.jsx("div", { className: "empty-content-block" }),
      ],
    }),
  Yo = () => {
    const e = (r) => {
        const s = r.replace(/,/g, ""),
          i = Number(s);
        return Number.isFinite(i) ? i : 0;
      },
      t = (r) =>
        r.toLocaleString(void 0, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
      n = An.reduce(
        (r, s) => {
          const i = e(s.amount);
          return (
            s.status === "paid" && (r.paid += i),
            s.status === "unpaid" && (r.unpaid += i),
            s.status === "scholarship" && (r.scholarship += i),
            s.status === "refundable" && (r.refundable += i),
            s.status === "cancelled" && (r.cancelled += i),
            r
          );
        },
        { paid: 0, unpaid: 0, scholarship: 0, refundable: 0, cancelled: 0 },
      );
    return l.jsxs("div", {
      className: "payments-page",
      children: [
        l.jsx("div", {
          className: "card title-card",
          children: l.jsx("h2", { children: "Payments" }),
        }),
        l.jsxs("div", {
          className: "card table-card",
          children: [
            l.jsx("div", {
              className: "table-wrapper",
              children: l.jsxs("table", {
                className: "payments-table styled-table",
                children: [
                  l.jsx("thead", {
                    children: l.jsxs("tr", {
                      children: [
                        l.jsx("th", { children: "S.No" }),
                        l.jsx("th", { children: "Student" }),
                        l.jsxs("th", {
                          children: ["Academic", l.jsx("br", {}), "Year"],
                        }),
                        l.jsxs("th", {
                          children: ["Reference", l.jsx("br", {}), "Number"],
                        }),
                        l.jsxs("th", {
                          children: ["Receipt", l.jsx("br", {}), "Number"],
                        }),
                        l.jsxs("th", {
                          children: ["Total", l.jsx("br", {}), "Contact Hr"],
                        }),
                        l.jsxs("th", {
                          children: ["Total", l.jsx("br", {}), "Amount"],
                        }),
                        l.jsxs("th", {
                          children: ["Payment", l.jsx("br", {}), "Group"],
                        }),
                        l.jsxs("th", {
                          children: ["Payment", l.jsx("br", {}), "Term"],
                        }),
                        l.jsxs("th", {
                          children: ["Payment", l.jsx("br", {}), "Date"],
                        }),
                        l.jsx("th", { children: "Receipt" }),
                      ],
                    }),
                  }),
                  l.jsxs("tbody", {
                    children: [
                      An.map((r, s) =>
                        l.jsxs(
                          "tr",
                          {
                            className: `${s % 2 === 0 ? "bg-light" : ""} ${r.status === "unpaid" && r.amount === "Pending" ? "pending-payment-row" : ""}`,
                            children: [
                              l.jsx("td", {
                                className: "text-gray",
                                children: r.sNo,
                              }),
                              l.jsx("td", {
                                className: "text-teal text-wrap-name",
                                children: r.student.replace(
                                  " ",
                                  `
`,
                                ),
                              }),
                              l.jsx("td", {
                                className: "text-teal",
                                children: r.academicYear,
                              }),
                              l.jsx("td", {
                                className: "text-teal",
                                children: r.refPattern,
                              }),
                              l.jsx("td", {
                                className: "text-teal",
                                children: r.receiptNumber,
                              }),
                              l.jsx("td", {
                                className: "text-teal",
                                children: r.contactHr,
                              }),
                              l.jsx("td", {
                                className: "text-teal",
                                children: r.amount,
                              }),
                              l.jsx("td", {
                                className: "text-teal text-wrap-name",
                                children: r.group.replace(
                                  " ",
                                  `
`,
                                ),
                              }),
                              l.jsx("td", {
                                className: "text-teal",
                                children: r.term,
                              }),
                              l.jsx("td", {
                                className: "text-teal text-wrap-name",
                                children: r.date.replace(
                                  " ",
                                  `
`,
                                ),
                              }),
                              l.jsx("td", {
                                className: "text-teal",
                                children: r.receipt,
                              }),
                            ],
                          },
                          s,
                        ),
                      ),
                      l.jsxs("tr", {
                        className: "summary-row",
                        children: [
                          l.jsx("td", {
                            colSpan: 6,
                            className: "text-right text-success fw-bold",
                            children: "Total Amount Paid",
                          }),
                          l.jsx("td", {
                            colSpan: 5,
                            className: "text-success fw-bold",
                            children: t(n.paid),
                          }),
                        ],
                      }),
                      l.jsxs("tr", {
                        className: "summary-row",
                        children: [
                          l.jsx("td", {
                            colSpan: 6,
                            className: "text-right text-danger fw-bold",
                            children: "Total Amount UnPaid",
                          }),
                          l.jsx("td", {
                            colSpan: 5,
                            className: "text-danger fw-bold",
                            children: t(n.unpaid),
                          }),
                        ],
                      }),
                      l.jsxs("tr", {
                        className: "summary-row",
                        children: [
                          l.jsx("td", {
                            colSpan: 6,
                            className: "text-right text-primary fw-bold",
                            children: "Scholarship Amount",
                          }),
                          l.jsx("td", {
                            colSpan: 5,
                            className: "text-primary fw-bold",
                            children: t(n.scholarship),
                          }),
                        ],
                      }),
                      l.jsxs("tr", {
                        className: "summary-row",
                        children: [
                          l.jsx("td", {
                            colSpan: 6,
                            className: "text-right text-warning fw-bold",
                            children: "Total Amount Refundable",
                          }),
                          l.jsx("td", {
                            colSpan: 5,
                            className: "text-warning fw-bold",
                            children: t(n.refundable),
                          }),
                        ],
                      }),
                      l.jsxs("tr", {
                        className: "summary-row",
                        children: [
                          l.jsx("td", {
                            colSpan: 6,
                            className: "text-right text-gray fw-bold",
                            children: "Total Amount Cancelled",
                          }),
                          l.jsx("td", {
                            colSpan: 5,
                            className: "text-gray fw-bold",
                            children: t(n.cancelled),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            l.jsxs("div", {
              className: "payment-legend",
              children: [
                l.jsx("div", {
                  className: "legend-item",
                  children: l.jsx("span", {
                    className: "text-success",
                    children: "1. Green marked payment collected",
                  }),
                }),
                l.jsx("div", {
                  className: "legend-item",
                  children: l.jsx("span", {
                    className: "text-danger",
                    children: "2. Red marked not paid",
                  }),
                }),
                l.jsx("div", {
                  className: "legend-item",
                  children: l.jsx("span", {
                    className: "text-primary",
                    children: "3. Blue marked scholarship",
                  }),
                }),
                l.jsx("div", {
                  className: "legend-item",
                  children: l.jsx("span", {
                    className: "text-warning",
                    children: "4. Yellow marked refundable",
                  }),
                }),
                l.jsx("div", {
                  className: "legend-item",
                  children: l.jsx("span", {
                    className: "text-gray",
                    children: "5. Gray marked cancelled",
                  }),
                }),
              ],
            }),
            l.jsxs("div", {
              className: "pagination-info mt-4",
              children: [
                "Page 1 of 1, showing ",
                An.length,
                " records out of",
                " ",
                An.length,
                " total, starting on record 1, ending on",
                " ",
                An.length,
              ],
            }),
            l.jsxs("div", {
              className: "pagination-controls payment-pagination",
              children: [
                l.jsx("span", {
                  className: "page-link text-gray",
                  children: "<< previous",
                }),
                l.jsx("span", {
                  className: "page-link text-gray",
                  children: "||",
                }),
                l.jsx("span", {
                  className: "page-link text-gray",
                  children: "next >>",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  qo = () => {
    var c, v, m;
    const [e, t] = j.useState(!1),
      [n, r] = j.useState(ji.filters.academicYear),
      [s, i] = j.useState(ji.filters.semester),
      a = j.useMemo(
        () =>
          yi.find(
            (p) => p.filters.academicYear === n && p.filters.semester === s,
          ),
        [n, s],
      ),
      u = j.useMemo(() => {
        if (!a) return { totalCredit: 0, totalPoint: 0, sgpa: 0 };
        const p = a.courses.reduce((N, w) => N + w.creditHour, 0),
          g = a.courses.reduce((N, w) => N + w.gradePoint, 0),
          y = p === 0 ? 0 : g / p;
        return { totalCredit: p, totalPoint: g, sgpa: y };
      }, [a]),
      o = (a == null ? void 0 : a.pending) ?? !1;
    return l.jsxs("div", {
      className: "grades-page card",
      children: [
        l.jsx("h2", {
          className: "grades-title",
          children: "Student Examination Grade Report",
        }),
        l.jsx("p", {
          className: "grades-subtitle",
          children:
            "Please select academic year and semester for which you want to get grade report.",
        }),
        l.jsxs("div", {
          className: "grade-filter-bar",
          children: [
            l.jsx("div", {
              className: "grade-filter-label",
              children: "Academic Year:",
            }),
            l.jsx("select", {
              title: "Academic Year",
              value: n,
              onChange: (p) => r(p.target.value),
              children: Ni.map((p) =>
                l.jsx("option", { value: p, children: p }, p),
              ),
            }),
            l.jsx("div", {
              className: "grade-filter-label",
              children: "Semester:",
            }),
            l.jsx("select", {
              title: "Semester",
              value: s,
              onChange: (p) => i(p.target.value),
              children: ki.map((p) =>
                l.jsx("option", { value: p, children: p }, p),
              ),
            }),
          ],
        }),
        l.jsx("div", {
          className: "grade-btn-row",
          children: l.jsx("button", {
            className: "grade-report-btn",
            onClick: () => t(!0),
            children: "Grade Report",
          }),
        }),
        e &&
          l.jsx(l.Fragment, {
            children: a
              ? l.jsxs(l.Fragment, {
                  children: [
                    l.jsx("div", {
                      className: "grade-table-wrap",
                      children: l.jsx("table", {
                        className: "student-meta-table",
                        children: l.jsxs("tbody", {
                          children: [
                            l.jsxs("tr", {
                              children: [
                                l.jsx("td", {
                                  children: l.jsx("strong", {
                                    children: "Fullname:",
                                  }),
                                }),
                                l.jsx("td", { children: a.student.fullName }),
                                l.jsx("td", {
                                  children: l.jsx("strong", {
                                    children: "ID:",
                                  }),
                                }),
                                l.jsx("td", { children: a.student.id }),
                              ],
                            }),
                            l.jsxs("tr", {
                              children: [
                                l.jsx("td", {
                                  children: l.jsx("strong", {
                                    children: "Program:",
                                  }),
                                }),
                                l.jsx("td", { children: a.student.program }),
                                l.jsx("td", {
                                  children: l.jsx("strong", {
                                    children: "Program Type:",
                                  }),
                                }),
                                l.jsx("td", {
                                  children: a.student.programType,
                                }),
                              ],
                            }),
                            l.jsxs("tr", {
                              children: [
                                l.jsx("td", {
                                  children: l.jsx("strong", {
                                    children: "School/Center:",
                                  }),
                                }),
                                l.jsx("td", {
                                  children: a.student.schoolCenter,
                                }),
                                l.jsx("td", {
                                  children: l.jsx("strong", {
                                    children: "Department:",
                                  }),
                                }),
                                l.jsx("td", { children: a.student.department }),
                              ],
                            }),
                            l.jsxs("tr", {
                              children: [
                                l.jsx("td", {
                                  children: l.jsx("strong", {
                                    children: "Section:",
                                  }),
                                }),
                                l.jsx("td", { children: a.student.section }),
                                l.jsx("td", {
                                  children: l.jsx("strong", {
                                    children: "Year Level:",
                                  }),
                                }),
                                l.jsx("td", { children: a.student.yearLevel }),
                              ],
                            }),
                            l.jsxs("tr", {
                              children: [
                                l.jsx("td", {
                                  children: l.jsx("strong", {
                                    children: "Academic Year:",
                                  }),
                                }),
                                l.jsx("td", {
                                  children: a.filters.academicYear,
                                }),
                                l.jsx("td", {
                                  children: l.jsx("strong", {
                                    children: "Semester:",
                                  }),
                                }),
                                l.jsx("td", { children: a.filters.semester }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    l.jsx("div", {
                      className: "grade-table-wrap",
                      children: l.jsxs("table", {
                        className: "grade-result-table",
                        children: [
                          l.jsx("thead", {
                            children: l.jsxs("tr", {
                              children: [
                                l.jsx("th", { children: "No" }),
                                l.jsx("th", { children: "Course Code" }),
                                l.jsx("th", { children: "Course Title" }),
                                l.jsx("th", { children: "Credit Hour" }),
                                l.jsx("th", { children: "Grade" }),
                                l.jsx("th", { children: "Grade Point" }),
                              ],
                            }),
                          }),
                          l.jsxs("tbody", {
                            children: [
                              a.courses.map((p, g) =>
                                l.jsxs(
                                  "tr",
                                  {
                                    children: [
                                      l.jsx("td", { children: g + 1 }),
                                      l.jsx("td", { children: p.courseCode }),
                                      l.jsx("td", { children: p.courseTitle }),
                                      l.jsx("td", { children: p.creditHour }),
                                      l.jsx("td", { children: p.grade }),
                                      l.jsx("td", {
                                        children:
                                          p.grade === "-" ? "-" : p.gradePoint,
                                      }),
                                    ],
                                  },
                                  p.courseCode,
                                ),
                              ),
                              l.jsxs("tr", {
                                className: "result-total-row",
                                children: [
                                  l.jsx("td", {
                                    colSpan: 3,
                                    children: "TOTAL",
                                  }),
                                  l.jsx("td", { children: u.totalCredit }),
                                  l.jsx("td", {}),
                                  l.jsx("td", {
                                    children: o ? "-" : u.totalPoint,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    l.jsxs("div", {
                      className: "grade-summary-grid",
                      children: [
                        l.jsx("table", {
                          children: l.jsxs("tbody", {
                            children: [
                              l.jsxs("tr", {
                                children: [
                                  l.jsx("td", {
                                    children: l.jsx("strong", {
                                      children: "Previous",
                                    }),
                                  }),
                                  l.jsx("td", {}),
                                ],
                              }),
                              l.jsxs("tr", {
                                children: [
                                  l.jsx("td", {
                                    children: "Credit Hour Taken:",
                                  }),
                                  l.jsx("td", {
                                    children: a.previousCreditHour ?? "---",
                                  }),
                                ],
                              }),
                              l.jsxs("tr", {
                                children: [
                                  l.jsx("td", {
                                    children: "Grade Point Earned:",
                                  }),
                                  l.jsx("td", {
                                    children: a.previousGradePoint ?? "---",
                                  }),
                                ],
                              }),
                              l.jsxs("tr", {
                                children: [
                                  l.jsx("td", { children: "SGPA:" }),
                                  l.jsx("td", {
                                    children:
                                      ((c = a.previousSgpa) == null
                                        ? void 0
                                        : c.toFixed(2)) ?? "---",
                                  }),
                                ],
                              }),
                              l.jsxs("tr", {
                                children: [
                                  l.jsx("td", { children: "CGPA:" }),
                                  l.jsx("td", {
                                    children:
                                      ((v = a.cumulativeGpa) == null
                                        ? void 0
                                        : v.toFixed(2)) ?? "---",
                                  }),
                                ],
                              }),
                              l.jsxs("tr", {
                                children: [
                                  l.jsx("td", { children: "Status:" }),
                                  l.jsx("td", {
                                    children: a.academicStatus ?? "---",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        l.jsx("table", {
                          children: l.jsxs("tbody", {
                            children: [
                              l.jsxs("tr", {
                                children: [
                                  l.jsx("td", {
                                    children: l.jsx("strong", {
                                      children: "This Semester",
                                    }),
                                  }),
                                  l.jsx("td", {}),
                                ],
                              }),
                              l.jsxs("tr", {
                                children: [
                                  l.jsx("td", {
                                    children: "Credit Hour Taken:",
                                  }),
                                  l.jsx("td", { children: u.totalCredit }),
                                ],
                              }),
                              l.jsxs("tr", {
                                children: [
                                  l.jsx("td", {
                                    children: "Grade Point Earned:",
                                  }),
                                  l.jsx("td", {
                                    children: o ? "-" : u.totalPoint,
                                  }),
                                ],
                              }),
                              l.jsxs("tr", {
                                children: [
                                  l.jsx("td", { children: "SGPA:" }),
                                  l.jsx("td", {
                                    children: o ? "-" : u.sgpa.toFixed(2),
                                  }),
                                ],
                              }),
                              l.jsxs("tr", {
                                children: [
                                  l.jsx("td", { children: "CGPA:" }),
                                  l.jsx("td", {
                                    children:
                                      ((m = a.cumulativeGpa) == null
                                        ? void 0
                                        : m.toFixed(2)) ?? "---",
                                  }),
                                ],
                              }),
                              l.jsxs("tr", {
                                children: [
                                  l.jsx("td", { children: "Status:" }),
                                  l.jsx("td", {
                                    children: a.academicStatus ?? "---",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        l.jsx("table", {
                          children: l.jsxs("tbody", {
                            children: [
                              l.jsxs("tr", {
                                children: [
                                  l.jsx("td", {
                                    children: l.jsx("strong", {
                                      children: "Cumulative Academic Status",
                                    }),
                                  }),
                                  l.jsx("td", {}),
                                ],
                              }),
                              l.jsxs("tr", {
                                children: [
                                  l.jsx("td", {
                                    children: "Total Credit Hour Taken:",
                                  }),
                                  l.jsx("td", {
                                    children:
                                      a.cumulativeCreditHour ?? u.totalCredit,
                                  }),
                                ],
                              }),
                              l.jsxs("tr", {
                                children: [
                                  l.jsx("td", {
                                    children: "Total Grade Point Earned:",
                                  }),
                                  l.jsx("td", {
                                    children:
                                      a.cumulativeGradePoint ?? u.totalPoint,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                })
              : l.jsxs("div", {
                  className: "grade-empty-state",
                  children: [
                    "No grade report found for Academic Year ",
                    n,
                    " Semester",
                    " ",
                    s,
                    ".",
                  ],
                }),
          }),
      ],
    });
  },
  Qo = () => {
    const e = ji.student;
    return l.jsxs("div", {
      className: "clearance-page card",
      children: [
        l.jsx("h2", {
          className: "clearance-title",
          children: "Clearance/Withdraw",
        }),
        l.jsx("p", {
          className: "clearance-info",
          children:
            "Important Note:The system will check if you have taken any properties from universities and inform you to return the properties to concerned bodies before filling the clearance, if you have not taken any properties the system will forward your request to registrar for their approval. The clearance will be final if the registrar confirmed your clearance as cleared.",
        }),
        l.jsxs("ol", {
          className: "clearance-rules",
          children: [
            l.jsx("li", {
              children:
                "If the request is withdrawal the system will process the clearance too, please advice your department advisor befor filling withdrawl, inorder to be consider in readmission application registrar has to approved the clearnce and accepted your withdrawal.",
            }),
            l.jsx("li", {
              children:
                "If the request is clarance, your clearance application will be cleared if registrar has approved that your cleared else you have to contact registrar",
            }),
          ],
        }),
        l.jsxs("div", {
          className: "clearance-grid",
          children: [
            l.jsx("div", {
              className: "student-box",
              children: l.jsx("table", {
                children: l.jsxs("tbody", {
                  children: [
                    l.jsxs("tr", {
                      children: [
                        l.jsx("td", {
                          children: l.jsx("strong", { children: "College:" }),
                        }),
                        l.jsx("td", {
                          children:
                            "Engineering, Technology and Computational Sciences",
                        }),
                      ],
                    }),
                    l.jsxs("tr", {
                      children: [
                        l.jsx("td", {
                          children: l.jsx("strong", {
                            children: "Department:",
                          }),
                        }),
                        l.jsx("td", { children: e.department }),
                      ],
                    }),
                    l.jsxs("tr", {
                      children: [
                        l.jsx("td", {
                          children: l.jsx("strong", { children: "Program:" }),
                        }),
                        l.jsx("td", { children: e.program }),
                      ],
                    }),
                    l.jsxs("tr", {
                      children: [
                        l.jsx("td", {
                          children: l.jsx("strong", {
                            children: "Program Type:",
                          }),
                        }),
                        l.jsx("td", { children: e.programType }),
                      ],
                    }),
                    l.jsxs("tr", {
                      children: [
                        l.jsx("td", {
                          children: l.jsx("strong", { children: "Name:" }),
                        }),
                        l.jsx("td", { children: e.fullName }),
                      ],
                    }),
                    l.jsxs("tr", {
                      children: [
                        l.jsx("td", {
                          children: l.jsx("strong", {
                            children: "Student Number:",
                          }),
                        }),
                        l.jsx("td", { children: e.id }),
                      ],
                    }),
                    l.jsxs("tr", {
                      children: [
                        l.jsx("td", {
                          children: l.jsx("strong", {
                            children: "Year Level:",
                          }),
                        }),
                        l.jsx("td", { children: e.yearLevel }),
                      ],
                    }),
                    l.jsxs("tr", {
                      children: [
                        l.jsx("td", {
                          children: l.jsx("strong", { children: "Section:" }),
                        }),
                        l.jsx("td", { children: e.section }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            l.jsx("div", {
              className: "stats-box",
              children: l.jsx("table", {
                children: l.jsxs("tbody", {
                  children: [
                    l.jsxs("tr", {
                      children: [
                        l.jsx("td", {
                          children: l.jsx("strong", { children: "Semester:" }),
                        }),
                        l.jsx("td", { children: "2" }),
                      ],
                    }),
                    l.jsxs("tr", {
                      children: [
                        l.jsx("td", {
                          children: l.jsx("strong", {
                            children: "Academic Year:",
                          }),
                        }),
                        l.jsx("td", { children: "2016" }),
                      ],
                    }),
                    l.jsxs("tr", {
                      children: [
                        l.jsx("td", {
                          children: l.jsx("strong", { children: "SGPA:" }),
                        }),
                        l.jsx("td", { children: "2.56" }),
                      ],
                    }),
                    l.jsxs("tr", {
                      children: [
                        l.jsx("td", {
                          children: l.jsx("strong", { children: "CGPA:" }),
                        }),
                        l.jsx("td", { children: "2.61" }),
                      ],
                    }),
                    l.jsxs("tr", {
                      children: [
                        l.jsx("td", {
                          children: l.jsx("strong", {
                            children: "Academic Status:",
                          }),
                        }),
                        l.jsx("td", { children: "Good Standing" }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            l.jsxs("div", {
              className: "action-box",
              children: [
                l.jsxs("label", {
                  children: [
                    l.jsx("input", {
                      type: "radio",
                      name: "request",
                      defaultChecked: !0,
                    }),
                    "Clearance",
                  ],
                }),
                l.jsxs("label", {
                  children: [
                    l.jsx("input", { type: "radio", name: "request" }),
                    "Withdraw",
                  ],
                }),
                l.jsx("label", {
                  className: "field-label",
                  children: "Reason",
                }),
                l.jsx("input", {
                  className: "reason-input",
                  type: "text",
                  title: "Reason",
                }),
                l.jsx("p", {
                  className: "reason-help",
                  children:
                    "E.g. End of Academic Year, Graduation, Health Problem, Acadamic Dismissal, Social/Family/Personal Case",
                }),
                l.jsx("label", {
                  className: "field-label",
                  children: "Last Date Class Attended",
                }),
                l.jsxs("div", {
                  className: "date-selects",
                  children: [
                    l.jsx("select", {
                      title: "Month",
                      defaultValue: "March",
                      children: l.jsx("option", { children: "March" }),
                    }),
                    l.jsx("select", {
                      title: "Day",
                      defaultValue: "13",
                      children: l.jsx("option", { children: "13" }),
                    }),
                    l.jsx("select", {
                      title: "Year",
                      defaultValue: "2026",
                      children: l.jsx("option", { children: "2026" }),
                    }),
                  ],
                }),
                l.jsx("div", {
                  className: "note-box",
                  children:
                    "Note: incase of withdrawl please attach supporting document for your withdrawl.",
                }),
              ],
            }),
          ],
        }),
        l.jsx("button", { className: "clearance-submit", children: "Submit" }),
      ],
    });
  },
  Ko = () =>
    l.jsxs("div", {
      className: "help-page card",
      children: [
        l.jsx("div", {
          className: "help-head",
          children: "SMIS Users Manuals",
        }),
        l.jsxs("table", {
          className: "help-table",
          children: [
            l.jsx("thead", {
              children: l.jsxs("tr", {
                children: [
                  l.jsx("th", { children: "S.No" }),
                  l.jsx("th", { children: "Title of the Manual" }),
                  l.jsx("th", { children: "Manual Release Date" }),
                  l.jsx("th", { children: "version" }),
                  l.jsx("th", { children: "Manual" }),
                  l.jsx("th", {
                    className: "actions-col",
                    children: "Actions",
                  }),
                ],
              }),
            }),
            l.jsx("tbody", {
              children: Hr.map((e) =>
                l.jsxs(
                  "tr",
                  {
                    children: [
                      l.jsx("td", { children: e.sNo }),
                      l.jsx("td", { children: e.title }),
                      l.jsx("td", { children: e.releaseDate }),
                      l.jsx("td", { children: e.version }),
                      l.jsx("td", { children: e.manual }),
                      l.jsx("td", {}),
                    ],
                  },
                  e.sNo,
                ),
              ),
            }),
          ],
        }),
        l.jsxs("p", {
          className: "help-pagination-info",
          children: [
            "Page 1 of 1, showing ",
            Hr.length,
            " records out of",
            " ",
            Hr.length,
            " total, starting on record 0, ending on",
            " ",
            Hr.length,
          ],
        }),
        l.jsx("div", { className: "help-pagination", children: "<< >>" }),
      ],
    }),
  Xo = () =>
    l.jsx("div", {
      className: "department-transfers-page card",
      children: l.jsxs("div", {
        className: "department-transfers-body",
        children: [
          l.jsx("div", {
            className: "department-transfers-smallheading",
            children: "Department Transfers Request.",
          }),
          l.jsxs("table", {
            className: "department-transfers-table",
            children: [
              l.jsx("thead", {
                children: l.jsxs("tr", {
                  children: [
                    l.jsx("th", { children: "S.No" }),
                    l.jsx("th", { children: "Transfer To Department" }),
                    l.jsx("th", { children: "Full Name" }),
                    l.jsx("th", { children: "Request Date" }),
                    l.jsx("th", { children: "Sender Department Approval" }),
                    l.jsx("th", { children: "Sender College Approval" }),
                    l.jsx("th", { children: "Sender College Approval Date" }),
                    l.jsx("th", { children: "Receiver Department Approval" }),
                    l.jsx("th", { children: "Receiver Department Date" }),
                    l.jsx("th", { children: "Receiver College Approval" }),
                    l.jsx("th", { children: "Receiver College Approval Date" }),
                    l.jsx("th", { children: "Actions" }),
                  ],
                }),
              }),
              l.jsx("tbody", {
                children: Ir.map((e, t) =>
                  l.jsxs(
                    "tr",
                    {
                      children: [
                        l.jsx("td", { children: t + 1 }),
                        l.jsx("td", { children: e.transferToDepartment }),
                        l.jsx("td", { children: e.fullName }),
                        l.jsx("td", { children: e.requestDate }),
                        l.jsx("td", { children: e.senderDepartmentApproval }),
                        l.jsx("td", { children: e.senderCollegeApproval }),
                        l.jsx("td", { children: e.senderCollegeApprovalDate }),
                        l.jsx("td", { children: e.receiverDepartmentApproval }),
                        l.jsx("td", { children: e.receiverDepartmentDate }),
                        l.jsx("td", { children: e.receiverCollegeApproval }),
                        l.jsx("td", {
                          children: e.receiverCollegeApprovalDate,
                        }),
                        l.jsx("td", {
                          children: e.canCancel
                            ? l.jsx("button", {
                                type: "button",
                                className: "department-transfers-action",
                                children: "Cancel Request",
                              })
                            : "-",
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              }),
            ],
          }),
          l.jsxs("p", {
            className: "department-transfers-page-meta",
            children: [
              "Page 1 of 1, showing ",
              Ir.length,
              " records out of",
              " ",
              Ir.length,
              " total, starting on record 1, ending on ",
              Ir.length,
            ],
          }),
          l.jsxs("div", {
            className: "department-transfers-pagination",
            children: [
              l.jsx("span", { children: "<< previous" }),
              l.jsx("span", { children: "|" }),
              l.jsx("span", { children: "|" }),
              l.jsx("span", { children: "next >>" }),
            ],
          }),
        ],
      }),
    }),
  ev = ({ children: e }) => {
    const { isAuthenticated: t } = ja();
    return t
      ? l.jsx(l.Fragment, { children: e })
      : l.jsx(yd, { to: "/login", replace: !0 });
  };
function tv() {
  return l.jsx(Um, {
    children: l.jsx(im, {
      children: l.jsxs(Jp, {
        children: [
          l.jsx(A, { path: "/login", element: l.jsx(Hm, {}) }),
          l.jsxs(A, {
            path: "/",
            element: l.jsx(ev, { children: l.jsx(Vm, {}) }),
            children: [
              l.jsx(A, {
                index: !0,
                element: l.jsx(yd, { to: "/dashboard", replace: !0 }),
              }),
              l.jsx(A, { path: "dashboard", element: l.jsx(Gm, {}) }),
              l.jsx(A, { path: "profile/basic", element: l.jsx(Wm, {}) }),
              l.jsx(A, { path: "profile/academic", element: l.jsx(qm, {}) }),
              l.jsx(A, { path: "help", element: l.jsx(Ko, {}) }),
              l.jsx(A, { path: "help/view", element: l.jsx(Ko, {}) }),
              l.jsxs(A, {
                path: "admission",
                children: [
                  l.jsx(A, { path: "search", element: l.jsx(Qm, {}) }),
                  l.jsx(A, { path: "admitted", element: l.jsx(Go, {}) }),
                  l.jsx(A, { path: "placement", element: l.jsx(Go, {}) }),
                ],
              }),
              l.jsxs(A, {
                path: "semester-registration",
                children: [
                  l.jsx(A, { index: !0, element: l.jsx(Wo, {}) }),
                  l.jsx(A, { path: "register", element: l.jsx(Wo, {}) }),
                ],
              }),
              l.jsxs(A, {
                path: "readmission",
                children: [
                  l.jsx(A, { path: "course-adds", element: l.jsx(We, {}) }),
                  l.jsx(A, { path: "course-drops", element: l.jsx(We, {}) }),
                  l.jsx(A, {
                    path: "course-exemptions",
                    element: l.jsx(We, {}),
                  }),
                  l.jsx(A, { path: "requests", element: l.jsx(We, {}) }),
                  l.jsx(A, { path: "substitutions", element: l.jsx(We, {}) }),
                ],
              }),
              l.jsx(A, { path: "payment", element: l.jsx(Yo, {}) }),
              l.jsx(A, { path: "payment/view", element: l.jsx(Yo, {}) }),
              l.jsxs(A, {
                path: "grades",
                children: [
                  l.jsx(A, { index: !0, element: l.jsx(qo, {}) }),
                  l.jsx(A, { path: "report", element: l.jsx(qo, {}) }),
                  l.jsx(A, { path: "makeup-request", element: l.jsx(We, {}) }),
                  l.jsx(A, { path: "makeup-requests", element: l.jsx(We, {}) }),
                ],
              }),
              l.jsxs(A, {
                path: "clearances",
                children: [
                  l.jsx(A, { index: !0, element: l.jsx(Qo, {}) }),
                  l.jsx(A, { path: "withdraw", element: l.jsx(Qo, {}) }),
                ],
              }),
              l.jsxs(A, {
                path: "transfers",
                children: [
                  l.jsx(A, { index: !0, element: l.jsx(Xo, {}) }),
                  l.jsx(A, { path: "request", element: l.jsx(Xo, {}) }),
                ],
              }),
              l.jsxs(A, {
                path: "evalution",
                children: [
                  l.jsx(A, { index: !0, element: l.jsx(We, {}) }),
                  l.jsx(A, { path: "teacher", element: l.jsx(We, {}) }),
                ],
              }),
              l.jsx(A, {
                path: "*",
                element: l.jsx("div", {
                  className: "not-found-page",
                  children: "Page Not Found",
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
Ns.createRoot(document.getElementById("root")).render(
  l.jsx(au.StrictMode, { children: l.jsx(tv, {}) }),
);
