var V0 = Object.defineProperty;
var M0 = (r, t, n) =>
  t in r
    ? V0(r, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (r[t] = n);
var ze = (r, t, n) => M0(r, typeof t != "symbol" ? t + "" : t, n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
  new MutationObserver((s) => {
    for (const f of s)
      if (f.type === "childList")
        for (const e of f.addedNodes)
          e.tagName === "LINK" && e.rel === "modulepreload" && i(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const f = {};
    return (
      s.integrity && (f.integrity = s.integrity),
      s.referrerPolicy && (f.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (f.credentials = "omit")
        : (f.credentials = "same-origin"),
      f
    );
  }
  function i(s) {
    if (s.ep) return;
    s.ep = !0;
    const f = n(s);
    fetch(s.href, f);
  }
})();
var Xe =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function yc(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
function q0(r) {
  if (Object.prototype.hasOwnProperty.call(r, "__esModule")) return r;
  var t = r.default;
  if (typeof t == "function") {
    var n = function i() {
      return this instanceof i
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(r).forEach(function (i) {
      var s = Object.getOwnPropertyDescriptor(r, i);
      Object.defineProperty(
        n,
        i,
        s.get
          ? s
          : {
              enumerable: !0,
              get: function () {
                return r[i];
              },
            }
      );
    }),
    n
  );
}
var un, lf;
function G0() {
  if (lf) return un;
  lf = 1;
  var r = { DEBUG: !1, LIB_VERSION: "2.53.0" },
    t;
  if (typeof window > "u") {
    var n = { hostname: "" };
    t = {
      navigator: { userAgent: "" },
      document: { location: n, referrer: "" },
      screen: { width: 0, height: 0 },
      location: n,
    };
  } else t = window;
  var i = 24 * 60 * 60 * 1e3,
    s = Array.prototype,
    f = Function.prototype,
    e = Object.prototype,
    l = s.slice,
    p = e.toString,
    x = e.hasOwnProperty,
    R = t.console,
    S = t.navigator,
    v = t.document,
    d = t.opera,
    I = t.screen,
    j = S.userAgent,
    N = f.bind,
    k = s.forEach,
    M = s.indexOf,
    ee = s.map,
    D = Array.isArray,
    O = {},
    o = {
      trim: function (a) {
        return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      },
    },
    P = {
      log: function () {
        if (r.DEBUG && !o.isUndefined(R) && R)
          try {
            R.log.apply(R, arguments);
          } catch {
            o.each(arguments, function (u) {
              R.log(u);
            });
          }
      },
      warn: function () {
        if (r.DEBUG && !o.isUndefined(R) && R) {
          var a = ["Mixpanel warning:"].concat(o.toArray(arguments));
          try {
            R.warn.apply(R, a);
          } catch {
            o.each(a, function (c) {
              R.warn(c);
            });
          }
        }
      },
      error: function () {
        if (r.DEBUG && !o.isUndefined(R) && R) {
          var a = ["Mixpanel error:"].concat(o.toArray(arguments));
          try {
            R.error.apply(R, a);
          } catch {
            o.each(a, function (c) {
              R.error(c);
            });
          }
        }
      },
      critical: function () {
        if (!o.isUndefined(R) && R) {
          var a = ["Mixpanel error:"].concat(o.toArray(arguments));
          try {
            R.error.apply(R, a);
          } catch {
            o.each(a, function (c) {
              R.error(c);
            });
          }
        }
      },
    },
    E = function (a, u) {
      return function () {
        return (
          (arguments[0] = "[" + u + "] " + arguments[0]), a.apply(P, arguments)
        );
      };
    },
    A = function (a) {
      return {
        log: E(P.log, a),
        error: E(P.error, a),
        critical: E(P.critical, a),
      };
    };
  (o.bind = function (a, u) {
    var c, h;
    if (N && a.bind === N) return N.apply(a, l.call(arguments, 1));
    if (!o.isFunction(a)) throw new TypeError();
    return (
      (c = l.call(arguments, 2)),
      (h = function () {
        if (!(this instanceof h))
          return a.apply(u, c.concat(l.call(arguments)));
        var b = {};
        b.prototype = a.prototype;
        var L = new b();
        b.prototype = null;
        var q = a.apply(L, c.concat(l.call(arguments)));
        return Object(q) === q ? q : L;
      }),
      h
    );
  }),
    (o.each = function (a, u, c) {
      if (a != null) {
        if (k && a.forEach === k) a.forEach(u, c);
        else if (a.length === +a.length) {
          for (var h = 0, b = a.length; h < b; h++)
            if (h in a && u.call(c, a[h], h, a) === O) return;
        } else
          for (var L in a)
            if (x.call(a, L) && u.call(c, a[L], L, a) === O) return;
      }
    }),
    (o.extend = function (a) {
      return (
        o.each(l.call(arguments, 1), function (u) {
          for (var c in u) u[c] !== void 0 && (a[c] = u[c]);
        }),
        a
      );
    }),
    (o.isArray =
      D ||
      function (a) {
        return p.call(a) === "[object Array]";
      }),
    (o.isFunction = function (a) {
      try {
        return /^\s*\bfunction\b/.test(a);
      } catch {
        return !1;
      }
    }),
    (o.isArguments = function (a) {
      return !!(a && x.call(a, "callee"));
    }),
    (o.toArray = function (a) {
      return a
        ? a.toArray
          ? a.toArray()
          : o.isArray(a) || o.isArguments(a)
          ? l.call(a)
          : o.values(a)
        : [];
    }),
    (o.map = function (a, u, c) {
      if (ee && a.map === ee) return a.map(u, c);
      var h = [];
      return (
        o.each(a, function (b) {
          h.push(u.call(c, b));
        }),
        h
      );
    }),
    (o.keys = function (a) {
      var u = [];
      return (
        a === null ||
          o.each(a, function (c, h) {
            u[u.length] = h;
          }),
        u
      );
    }),
    (o.values = function (a) {
      var u = [];
      return (
        a === null ||
          o.each(a, function (c) {
            u[u.length] = c;
          }),
        u
      );
    }),
    (o.include = function (a, u) {
      var c = !1;
      return a === null
        ? c
        : M && a.indexOf === M
        ? a.indexOf(u) != -1
        : (o.each(a, function (h) {
            if (c || (c = h === u)) return O;
          }),
          c);
    }),
    (o.includes = function (a, u) {
      return a.indexOf(u) !== -1;
    }),
    (o.inherit = function (a, u) {
      return (
        (a.prototype = new u()),
        (a.prototype.constructor = a),
        (a.superclass = u.prototype),
        a
      );
    }),
    (o.isObject = function (a) {
      return a === Object(a) && !o.isArray(a);
    }),
    (o.isEmptyObject = function (a) {
      if (o.isObject(a)) {
        for (var u in a) if (x.call(a, u)) return !1;
        return !0;
      }
      return !1;
    }),
    (o.isUndefined = function (a) {
      return a === void 0;
    }),
    (o.isString = function (a) {
      return p.call(a) == "[object String]";
    }),
    (o.isDate = function (a) {
      return p.call(a) == "[object Date]";
    }),
    (o.isNumber = function (a) {
      return p.call(a) == "[object Number]";
    }),
    (o.isElement = function (a) {
      return !!(a && a.nodeType === 1);
    }),
    (o.encodeDates = function (a) {
      return (
        o.each(a, function (u, c) {
          o.isDate(u)
            ? (a[c] = o.formatDate(u))
            : o.isObject(u) && (a[c] = o.encodeDates(u));
        }),
        a
      );
    }),
    (o.timestamp = function () {
      return (
        (Date.now =
          Date.now ||
          function () {
            return +new Date();
          }),
        Date.now()
      );
    }),
    (o.formatDate = function (a) {
      function u(c) {
        return c < 10 ? "0" + c : c;
      }
      return (
        a.getUTCFullYear() +
        "-" +
        u(a.getUTCMonth() + 1) +
        "-" +
        u(a.getUTCDate()) +
        "T" +
        u(a.getUTCHours()) +
        ":" +
        u(a.getUTCMinutes()) +
        ":" +
        u(a.getUTCSeconds())
      );
    }),
    (o.strip_empty_properties = function (a) {
      var u = {};
      return (
        o.each(a, function (c, h) {
          o.isString(c) && c.length > 0 && (u[h] = c);
        }),
        u
      );
    }),
    (o.truncate = function (a, u) {
      var c;
      return (
        typeof a == "string"
          ? (c = a.slice(0, u))
          : o.isArray(a)
          ? ((c = []),
            o.each(a, function (h) {
              c.push(o.truncate(h, u));
            }))
          : o.isObject(a)
          ? ((c = {}),
            o.each(a, function (h, b) {
              c[b] = o.truncate(h, u);
            }))
          : (c = a),
        c
      );
    }),
    (o.JSONEncode = (function () {
      return function (a) {
        var u = a,
          c = function (b) {
            var L =
                /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
              q = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\",
              };
            return (
              (L.lastIndex = 0),
              L.test(b)
                ? '"' +
                  b.replace(L, function (Q) {
                    var H = q[Q];
                    return typeof H == "string"
                      ? H
                      : "\\u" +
                          ("0000" + Q.charCodeAt(0).toString(16)).slice(-4);
                  }) +
                  '"'
                : '"' + b + '"'
            );
          },
          h = function (b, L) {
            var q = "",
              Q = "    ",
              H = 0,
              Y = "",
              ae = "",
              pe = 0,
              J = q,
              le = [],
              ce = L[b];
            switch (
              (ce &&
                typeof ce == "object" &&
                typeof ce.toJSON == "function" &&
                (ce = ce.toJSON(b)),
              typeof ce)
            ) {
              case "string":
                return c(ce);
              case "number":
                return isFinite(ce) ? String(ce) : "null";
              case "boolean":
              case "null":
                return String(ce);
              case "object":
                if (!ce) return "null";
                if (((q += Q), (le = []), p.apply(ce) === "[object Array]")) {
                  for (pe = ce.length, H = 0; H < pe; H += 1)
                    le[H] = h(H, ce) || "null";
                  return (
                    (ae =
                      le.length === 0
                        ? "[]"
                        : q
                        ? `[
` +
                          q +
                          le.join(
                            `,
` + q
                          ) +
                          `
` +
                          J +
                          "]"
                        : "[" + le.join(",") + "]"),
                    (q = J),
                    ae
                  );
                }
                for (Y in ce)
                  x.call(ce, Y) &&
                    ((ae = h(Y, ce)),
                    ae && le.push(c(Y) + (q ? ": " : ":") + ae));
                return (
                  (ae =
                    le.length === 0
                      ? "{}"
                      : q
                      ? "{" + le.join(",") + J + "}"
                      : "{" + le.join(",") + "}"),
                  (q = J),
                  ae
                );
            }
          };
        return h("", { "": u });
      };
    })()),
    (o.JSONDecode = (function () {
      var a,
        u,
        c = {
          '"': '"',
          "\\": "\\",
          "/": "/",
          b: "\b",
          f: "\f",
          n: `
`,
          r: "\r",
          t: "	",
        },
        h,
        b = function (le) {
          var ce = new SyntaxError(le);
          throw ((ce.at = a), (ce.text = h), ce);
        },
        L = function (le) {
          return (
            le && le !== u && b("Expected '" + le + "' instead of '" + u + "'"),
            (u = h.charAt(a)),
            (a += 1),
            u
          );
        },
        q = function () {
          var le,
            ce = "";
          for (u === "-" && ((ce = "-"), L("-")); u >= "0" && u <= "9"; )
            (ce += u), L();
          if (u === ".") for (ce += "."; L() && u >= "0" && u <= "9"; ) ce += u;
          if (u === "e" || u === "E")
            for (
              ce += u, L(), (u === "-" || u === "+") && ((ce += u), L());
              u >= "0" && u <= "9";

            )
              (ce += u), L();
          if (((le = +ce), !isFinite(le))) b("Bad number");
          else return le;
        },
        Q = function () {
          var le,
            ce,
            de = "",
            ye;
          if (u === '"')
            for (; L(); ) {
              if (u === '"') return L(), de;
              if (u === "\\")
                if ((L(), u === "u")) {
                  for (
                    ye = 0, ce = 0;
                    ce < 4 && ((le = parseInt(L(), 16)), !!isFinite(le));
                    ce += 1
                  )
                    ye = ye * 16 + le;
                  de += String.fromCharCode(ye);
                } else if (typeof c[u] == "string") de += c[u];
                else break;
              else de += u;
            }
          b("Bad string");
        },
        H = function () {
          for (; u && u <= " "; ) L();
        },
        Y = function () {
          switch (u) {
            case "t":
              return L("t"), L("r"), L("u"), L("e"), !0;
            case "f":
              return L("f"), L("a"), L("l"), L("s"), L("e"), !1;
            case "n":
              return L("n"), L("u"), L("l"), L("l"), null;
          }
          b('Unexpected "' + u + '"');
        },
        ae,
        pe = function () {
          var le = [];
          if (u === "[") {
            if ((L("["), H(), u === "]")) return L("]"), le;
            for (; u; ) {
              if ((le.push(ae()), H(), u === "]")) return L("]"), le;
              L(","), H();
            }
          }
          b("Bad array");
        },
        J = function () {
          var le,
            ce = {};
          if (u === "{") {
            if ((L("{"), H(), u === "}")) return L("}"), ce;
            for (; u; ) {
              if (
                ((le = Q()),
                H(),
                L(":"),
                Object.hasOwnProperty.call(ce, le) &&
                  b('Duplicate key "' + le + '"'),
                (ce[le] = ae()),
                H(),
                u === "}")
              )
                return L("}"), ce;
              L(","), H();
            }
          }
          b("Bad object");
        };
      return (
        (ae = function () {
          switch ((H(), u)) {
            case "{":
              return J();
            case "[":
              return pe();
            case '"':
              return Q();
            case "-":
              return q();
            default:
              return u >= "0" && u <= "9" ? q() : Y();
          }
        }),
        function (le) {
          var ce;
          return (
            (h = le),
            (a = 0),
            (u = " "),
            (ce = ae()),
            H(),
            u && b("Syntax error"),
            ce
          );
        }
      );
    })()),
    (o.base64Encode = function (a) {
      var u =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        c,
        h,
        b,
        L,
        q,
        Q,
        H,
        Y,
        ae = 0,
        pe = 0,
        J = "",
        le = [];
      if (!a) return a;
      a = o.utf8Encode(a);
      do
        (c = a.charCodeAt(ae++)),
          (h = a.charCodeAt(ae++)),
          (b = a.charCodeAt(ae++)),
          (Y = (c << 16) | (h << 8) | b),
          (L = (Y >> 18) & 63),
          (q = (Y >> 12) & 63),
          (Q = (Y >> 6) & 63),
          (H = Y & 63),
          (le[pe++] = u.charAt(L) + u.charAt(q) + u.charAt(Q) + u.charAt(H));
      while (ae < a.length);
      switch (((J = le.join("")), a.length % 3)) {
        case 1:
          J = J.slice(0, -2) + "==";
          break;
        case 2:
          J = J.slice(0, -1) + "=";
          break;
      }
      return J;
    }),
    (o.utf8Encode = function (a) {
      a = (a + "")
        .replace(
          /\r\n/g,
          `
`
        )
        .replace(
          /\r/g,
          `
`
        );
      var u = "",
        c,
        h,
        b = 0,
        L;
      for (c = h = 0, b = a.length, L = 0; L < b; L++) {
        var q = a.charCodeAt(L),
          Q = null;
        q < 128
          ? h++
          : q > 127 && q < 2048
          ? (Q = String.fromCharCode((q >> 6) | 192, (q & 63) | 128))
          : (Q = String.fromCharCode(
              (q >> 12) | 224,
              ((q >> 6) & 63) | 128,
              (q & 63) | 128
            )),
          Q !== null &&
            (h > c && (u += a.substring(c, h)), (u += Q), (c = h = L + 1));
      }
      return h > c && (u += a.substring(c, a.length)), u;
    }),
    (o.UUID = (function () {
      var a = function () {
          var h = 1 * new Date(),
            b;
          if (t.performance && t.performance.now) b = t.performance.now();
          else for (b = 0; h == 1 * new Date(); ) b++;
          return h.toString(16) + Math.floor(b).toString(16);
        },
        u = function () {
          return Math.random().toString(16).replace(".", "");
        },
        c = function () {
          var h = j,
            b,
            L,
            q = [],
            Q = 0;
          function H(Y, ae) {
            var pe,
              J = 0;
            for (pe = 0; pe < ae.length; pe++) J |= q[pe] << (pe * 8);
            return Y ^ J;
          }
          for (b = 0; b < h.length; b++)
            (L = h.charCodeAt(b)),
              q.unshift(L & 255),
              q.length >= 4 && ((Q = H(Q, q)), (q = []));
          return q.length > 0 && (Q = H(Q, q)), Q.toString(16);
        };
      return function () {
        var h = (I.height * I.width).toString(16);
        return a() + "-" + u() + "-" + c() + "-" + h + "-" + a();
      };
    })());
  var B = [
    "ahrefsbot",
    "ahrefssiteaudit",
    "baiduspider",
    "bingbot",
    "bingpreview",
    "chrome-lighthouse",
    "facebookexternal",
    "petalbot",
    "pinterest",
    "screaming frog",
    "yahoo! slurp",
    "yandexbot",
    "adsbot-google",
    "apis-google",
    "duplexweb-google",
    "feedfetcher-google",
    "google favicon",
    "google web preview",
    "google-read-aloud",
    "googlebot",
    "googleweblight",
    "mediapartners-google",
    "storebot-google",
  ];
  (o.isBlockedUA = function (a) {
    var u;
    for (a = a.toLowerCase(), u = 0; u < B.length; u++)
      if (a.indexOf(B[u]) !== -1) return !0;
    return !1;
  }),
    (o.HTTPBuildQuery = function (a, u) {
      var c,
        h,
        b = [];
      return (
        o.isUndefined(u) && (u = "&"),
        o.each(a, function (L, q) {
          (c = encodeURIComponent(L.toString())),
            (h = encodeURIComponent(q)),
            (b[b.length] = h + "=" + c);
        }),
        b.join(u)
      );
    }),
    (o.getQueryParam = function (a, u) {
      u = u.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
      var c = "[\\?&]" + u + "=([^&#]*)",
        h = new RegExp(c),
        b = h.exec(a);
      if (b === null || (b && typeof b[1] != "string" && b[1].length))
        return "";
      var L = b[1];
      try {
        L = decodeURIComponent(L);
      } catch {
        P.error("Skipping decoding for malformed query param: " + L);
      }
      return L.replace(/\+/g, " ");
    }),
    (o.cookie = {
      get: function (a) {
        for (
          var u = a + "=", c = v.cookie.split(";"), h = 0;
          h < c.length;
          h++
        ) {
          for (var b = c[h]; b.charAt(0) == " "; ) b = b.substring(1, b.length);
          if (b.indexOf(u) === 0)
            return decodeURIComponent(b.substring(u.length, b.length));
        }
        return null;
      },
      parse: function (a) {
        var u;
        try {
          u = o.JSONDecode(o.cookie.get(a)) || {};
        } catch {}
        return u;
      },
      set_seconds: function (a, u, c, h, b, L, q) {
        var Q = "",
          H = "",
          Y = "";
        if (q) Q = "; domain=" + q;
        else if (h) {
          var ae = he(v.location.hostname);
          Q = ae ? "; domain=." + ae : "";
        }
        if (c) {
          var pe = new Date();
          pe.setTime(pe.getTime() + c * 1e3),
            (H = "; expires=" + pe.toGMTString());
        }
        L && ((b = !0), (Y = "; SameSite=None")),
          b && (Y += "; secure"),
          (v.cookie = a + "=" + encodeURIComponent(u) + H + "; path=/" + Q + Y);
      },
      set: function (a, u, c, h, b, L, q) {
        var Q = "",
          H = "",
          Y = "";
        if (q) Q = "; domain=" + q;
        else if (h) {
          var ae = he(v.location.hostname);
          Q = ae ? "; domain=." + ae : "";
        }
        if (c) {
          var pe = new Date();
          pe.setTime(pe.getTime() + c * 24 * 60 * 60 * 1e3),
            (H = "; expires=" + pe.toGMTString());
        }
        L && ((b = !0), (Y = "; SameSite=None")), b && (Y += "; secure");
        var J = a + "=" + encodeURIComponent(u) + H + "; path=/" + Q + Y;
        return (v.cookie = J), J;
      },
      remove: function (a, u, c) {
        o.cookie.set(a, "", -1, u, !1, !1, c);
      },
    });
  var $ = null,
    W = function (a, u) {
      if ($ !== null && !u) return $;
      var c = !0;
      try {
        a = a || window.localStorage;
        var h = "__mplss_" + F(8),
          b = "xyz";
        a.setItem(h, b), a.getItem(h) !== b && (c = !1), a.removeItem(h);
      } catch {
        c = !1;
      }
      return ($ = c), c;
    };
  (o.localStorage = {
    is_supported: function (a) {
      var u = W(null, a);
      return (
        u || P.error("localStorage unsupported; falling back to cookie store"),
        u
      );
    },
    error: function (a) {
      P.error("localStorage error: " + a);
    },
    get: function (a) {
      try {
        return window.localStorage.getItem(a);
      } catch (u) {
        o.localStorage.error(u);
      }
      return null;
    },
    parse: function (a) {
      try {
        return o.JSONDecode(o.localStorage.get(a)) || {};
      } catch {}
      return null;
    },
    set: function (a, u) {
      try {
        window.localStorage.setItem(a, u);
      } catch (c) {
        o.localStorage.error(c);
      }
    },
    remove: function (a) {
      try {
        window.localStorage.removeItem(a);
      } catch (u) {
        o.localStorage.error(u);
      }
    },
  }),
    (o.register_event = (function () {
      var a = function (h, b, L, q, Q) {
        if (!h) {
          P.error("No valid element provided to register_event");
          return;
        }
        if (h.addEventListener && !q) h.addEventListener(b, L, !!Q);
        else {
          var H = "on" + b,
            Y = h[H];
          h[H] = u(h, L, Y);
        }
      };
      function u(h, b, L) {
        var q = function (Q) {
          if (((Q = Q || c(window.event)), !!Q)) {
            var H = !0,
              Y,
              ae;
            return (
              o.isFunction(L) && (Y = L(Q)),
              (ae = b.call(h, Q)),
              (Y === !1 || ae === !1) && (H = !1),
              H
            );
          }
        };
        return q;
      }
      function c(h) {
        return (
          h &&
            ((h.preventDefault = c.preventDefault),
            (h.stopPropagation = c.stopPropagation)),
          h
        );
      }
      return (
        (c.preventDefault = function () {
          this.returnValue = !1;
        }),
        (c.stopPropagation = function () {
          this.cancelBubble = !0;
        }),
        a
      );
    })());
  var fe = new RegExp(
    '^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$'
  );
  o.dom_query = (function () {
    function a(b) {
      return b.all ? b.all : b.getElementsByTagName("*");
    }
    var u = /[\t\r\n]/g;
    function c(b, L) {
      var q = " " + L + " ";
      return (" " + b.className + " ").replace(u, " ").indexOf(q) >= 0;
    }
    function h(b) {
      if (!v.getElementsByTagName) return [];
      var L = b.split(" "),
        q,
        Q,
        H,
        Y,
        ae,
        pe,
        J,
        le,
        ce,
        de,
        ye = [v];
      for (pe = 0; pe < L.length; pe++) {
        if (
          ((q = L[pe].replace(/^\s+/, "").replace(/\s+$/, "")),
          q.indexOf("#") > -1)
        ) {
          (Q = q.split("#")), (H = Q[0]);
          var ke = Q[1],
            Ie = v.getElementById(ke);
          if (!Ie || (H && Ie.nodeName.toLowerCase() != H)) return [];
          ye = [Ie];
          continue;
        }
        if (q.indexOf(".") > -1) {
          (Q = q.split(".")), (H = Q[0]);
          var mt = Q[1];
          for (H || (H = "*"), Y = [], ae = 0, J = 0; J < ye.length; J++)
            for (
              H == "*" ? (ce = a(ye[J])) : (ce = ye[J].getElementsByTagName(H)),
                le = 0;
              le < ce.length;
              le++
            )
              Y[ae++] = ce[le];
          for (ye = [], de = 0, J = 0; J < Y.length; J++)
            Y[J].className &&
              o.isString(Y[J].className) &&
              c(Y[J], mt) &&
              (ye[de++] = Y[J]);
          continue;
        }
        var or = q.match(fe);
        if (or) {
          H = or[1];
          var Tt = or[2],
            k0 = or[3],
            Nt = or[4];
          for (H || (H = "*"), Y = [], ae = 0, J = 0; J < ye.length; J++)
            for (
              H == "*" ? (ce = a(ye[J])) : (ce = ye[J].getElementsByTagName(H)),
                le = 0;
              le < ce.length;
              le++
            )
              Y[ae++] = ce[le];
          (ye = []), (de = 0);
          var St;
          switch (k0) {
            case "=":
              St = function (Je) {
                return Je.getAttribute(Tt) == Nt;
              };
              break;
            case "~":
              St = function (Je) {
                return Je.getAttribute(Tt).match(
                  new RegExp("\\b" + Nt + "\\b")
                );
              };
              break;
            case "|":
              St = function (Je) {
                return Je.getAttribute(Tt).match(new RegExp("^" + Nt + "-?"));
              };
              break;
            case "^":
              St = function (Je) {
                return Je.getAttribute(Tt).indexOf(Nt) === 0;
              };
              break;
            case "$":
              St = function (Je) {
                return (
                  Je.getAttribute(Tt).lastIndexOf(Nt) ==
                  Je.getAttribute(Tt).length - Nt.length
                );
              };
              break;
            case "*":
              St = function (Je) {
                return Je.getAttribute(Tt).indexOf(Nt) > -1;
              };
              break;
            default:
              St = function (Je) {
                return Je.getAttribute(Tt);
              };
          }
          for (ye = [], de = 0, J = 0; J < Y.length; J++)
            St(Y[J]) && (ye[de++] = Y[J]);
          continue;
        }
        for (H = q, Y = [], ae = 0, J = 0; J < ye.length; J++)
          for (ce = ye[J].getElementsByTagName(H), le = 0; le < ce.length; le++)
            Y[ae++] = ce[le];
        ye = Y;
      }
      return ye;
    }
    return function (b) {
      return o.isElement(b)
        ? [b]
        : o.isObject(b) && !o.isUndefined(b.length)
        ? b
        : h.call(this, b);
    };
  })();
  var ue = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
    ],
    w = [
      "dclid",
      "fbclid",
      "gclid",
      "ko_click_id",
      "li_fat_id",
      "msclkid",
      "ttclid",
      "twclid",
      "wbraid",
    ];
  o.info = {
    campaignParams: function (a) {
      var u = "",
        c = {};
      return (
        o.each(ue, function (h) {
          (u = o.getQueryParam(v.URL, h)),
            u.length ? (c[h] = u) : a !== void 0 && (c[h] = a);
        }),
        c
      );
    },
    clickParams: function () {
      var a = "",
        u = {};
      return (
        o.each(w, function (c) {
          (a = o.getQueryParam(v.URL, c)), a.length && (u[c] = a);
        }),
        u
      );
    },
    marketingParams: function () {
      return o.extend(o.info.campaignParams(), o.info.clickParams());
    },
    searchEngine: function (a) {
      return a.search("https?://(.*)google.([^/?]*)") === 0
        ? "google"
        : a.search("https?://(.*)bing.com") === 0
        ? "bing"
        : a.search("https?://(.*)yahoo.com") === 0
        ? "yahoo"
        : a.search("https?://(.*)duckduckgo.com") === 0
        ? "duckduckgo"
        : null;
    },
    searchInfo: function (a) {
      var u = o.info.searchEngine(a),
        c = u != "yahoo" ? "q" : "p",
        h = {};
      if (u !== null) {
        h.$search_engine = u;
        var b = o.getQueryParam(a, c);
        b.length && (h.mp_keyword = b);
      }
      return h;
    },
    browser: function (a, u, c) {
      return (
        (u = u || ""),
        c || o.includes(a, " OPR/")
          ? o.includes(a, "Mini")
            ? "Opera Mini"
            : "Opera"
          : /(BlackBerry|PlayBook|BB10)/i.test(a)
          ? "BlackBerry"
          : o.includes(a, "IEMobile") || o.includes(a, "WPDesktop")
          ? "Internet Explorer Mobile"
          : o.includes(a, "SamsungBrowser/")
          ? "Samsung Internet"
          : o.includes(a, "Edge") || o.includes(a, "Edg/")
          ? "Microsoft Edge"
          : o.includes(a, "FBIOS")
          ? "Facebook Mobile"
          : o.includes(a, "Chrome")
          ? "Chrome"
          : o.includes(a, "CriOS")
          ? "Chrome iOS"
          : o.includes(a, "UCWEB") || o.includes(a, "UCBrowser")
          ? "UC Browser"
          : o.includes(a, "FxiOS")
          ? "Firefox iOS"
          : o.includes(u, "Apple")
          ? o.includes(a, "Mobile")
            ? "Mobile Safari"
            : "Safari"
          : o.includes(a, "Android")
          ? "Android Mobile"
          : o.includes(a, "Konqueror")
          ? "Konqueror"
          : o.includes(a, "Firefox")
          ? "Firefox"
          : o.includes(a, "MSIE") || o.includes(a, "Trident/")
          ? "Internet Explorer"
          : o.includes(a, "Gecko")
          ? "Mozilla"
          : ""
      );
    },
    browserVersion: function (a, u, c) {
      var h = o.info.browser(a, u, c),
        b = {
          "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
          "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
          Chrome: /Chrome\/(\d+(\.\d+)?)/,
          "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
          "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
          Safari: /Version\/(\d+(\.\d+)?)/,
          "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
          Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
          Firefox: /Firefox\/(\d+(\.\d+)?)/,
          "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
          Konqueror: /Konqueror:(\d+(\.\d+)?)/,
          BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
          "Android Mobile": /android\s(\d+(\.\d+)?)/,
          "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
          "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
          Mozilla: /rv:(\d+(\.\d+)?)/,
        },
        L = b[h];
      if (L === void 0) return null;
      var q = a.match(L);
      return q ? parseFloat(q[q.length - 2]) : null;
    },
    os: function () {
      var a = j;
      return /Windows/i.test(a)
        ? /Phone/.test(a) || /WPDesktop/.test(a)
          ? "Windows Phone"
          : "Windows"
        : /(iPhone|iPad|iPod)/.test(a)
        ? "iOS"
        : /Android/.test(a)
        ? "Android"
        : /(BlackBerry|PlayBook|BB10)/i.test(a)
        ? "BlackBerry"
        : /Mac/i.test(a)
        ? "Mac OS X"
        : /Linux/.test(a)
        ? "Linux"
        : /CrOS/.test(a)
        ? "Chrome OS"
        : "";
    },
    device: function (a) {
      return /Windows Phone/i.test(a) || /WPDesktop/.test(a)
        ? "Windows Phone"
        : /iPad/.test(a)
        ? "iPad"
        : /iPod/.test(a)
        ? "iPod Touch"
        : /iPhone/.test(a)
        ? "iPhone"
        : /(BlackBerry|PlayBook|BB10)/i.test(a)
        ? "BlackBerry"
        : /Android/.test(a)
        ? "Android"
        : "";
    },
    referringDomain: function (a) {
      var u = a.split("/");
      return u.length >= 3 ? u[2] : "";
    },
    currentUrl: function () {
      return t.location.href;
    },
    properties: function (a) {
      return (
        typeof a != "object" && (a = {}),
        o.extend(
          o.strip_empty_properties({
            $os: o.info.os(),
            $browser: o.info.browser(j, S.vendor, d),
            $referrer: v.referrer,
            $referring_domain: o.info.referringDomain(v.referrer),
            $device: o.info.device(j),
          }),
          {
            $current_url: o.info.currentUrl(),
            $browser_version: o.info.browserVersion(j, S.vendor, d),
            $screen_height: I.height,
            $screen_width: I.width,
            mp_lib: "web",
            $lib_version: r.LIB_VERSION,
            $insert_id: F(),
            time: o.timestamp() / 1e3,
          },
          o.strip_empty_properties(a)
        )
      );
    },
    people_properties: function () {
      return o.extend(
        o.strip_empty_properties({
          $os: o.info.os(),
          $browser: o.info.browser(j, S.vendor, d),
        }),
        { $browser_version: o.info.browserVersion(j, S.vendor, d) }
      );
    },
    mpPageViewProperties: function () {
      return o.strip_empty_properties({
        current_page_title: v.title,
        current_domain: t.location.hostname,
        current_url_path: t.location.pathname,
        current_url_protocol: t.location.protocol,
        current_url_search: t.location.search,
      });
    },
  };
  var F = function (a) {
      var u =
        Math.random().toString(36).substring(2, 10) +
        Math.random().toString(36).substring(2, 10);
      return a ? u.substring(0, a) : u;
    },
    se = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i,
    Z = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
    he = function (a) {
      var u = Z,
        c = a.split("."),
        h = c[c.length - 1];
      (h.length > 4 || h === "com" || h === "org") && (u = se);
      var b = a.match(u);
      return b ? b[0] : "";
    },
    oe = null,
    ie = null;
  typeof JSON < "u" && ((oe = JSON.stringify), (ie = JSON.parse)),
    (oe = oe || o.JSONEncode),
    (ie = ie || o.JSONDecode),
    (o.toArray = o.toArray),
    (o.isObject = o.isObject),
    (o.JSONEncode = o.JSONEncode),
    (o.JSONDecode = o.JSONDecode),
    (o.isBlockedUA = o.isBlockedUA),
    (o.isEmptyObject = o.isEmptyObject),
    (o.info = o.info),
    (o.info.device = o.info.device),
    (o.info.browser = o.info.browser),
    (o.info.browserVersion = o.info.browserVersion),
    (o.info.properties = o.info.properties);
  var T = function () {};
  (T.prototype.create_properties = function () {}),
    (T.prototype.event_handler = function () {}),
    (T.prototype.after_track_handler = function () {}),
    (T.prototype.init = function (a) {
      return (this.mp = a), this;
    }),
    (T.prototype.track = function (a, u, c, h) {
      var b = this,
        L = o.dom_query(a);
      if (L.length === 0) {
        P.error("The DOM query (" + a + ") returned 0 elements");
        return;
      }
      return (
        o.each(
          L,
          function (q) {
            o.register_event(q, this.override_event, function (Q) {
              var H = {},
                Y = b.create_properties(c, this),
                ae = b.mp.get_config("track_links_timeout");
              b.event_handler(Q, this, H),
                window.setTimeout(b.track_callback(h, Y, H, !0), ae),
                b.mp.track(u, Y, b.track_callback(h, Y, H));
            });
          },
          this
        ),
        !0
      );
    }),
    (T.prototype.track_callback = function (a, u, c, h) {
      h = h || !1;
      var b = this;
      return function () {
        c.callback_fired ||
          ((c.callback_fired = !0),
          !(a && a(h, u) === !1) && b.after_track_handler(u, c, h));
      };
    }),
    (T.prototype.create_properties = function (a, u) {
      var c;
      return typeof a == "function" ? (c = a(u)) : (c = o.extend({}, a)), c;
    });
  var V = function () {
    this.override_event = "click";
  };
  o.inherit(V, T),
    (V.prototype.create_properties = function (a, u) {
      var c = V.superclass.create_properties.apply(this, arguments);
      return u.href && (c.url = u.href), c;
    }),
    (V.prototype.event_handler = function (a, u, c) {
      (c.new_tab =
        a.which === 2 || a.metaKey || a.ctrlKey || u.target === "_blank"),
        (c.href = u.href),
        c.new_tab || a.preventDefault();
    }),
    (V.prototype.after_track_handler = function (a, u) {
      u.new_tab ||
        setTimeout(function () {
          window.location = u.href;
        }, 0);
    });
  var Ee = function () {
    this.override_event = "submit";
  };
  o.inherit(Ee, T),
    (Ee.prototype.event_handler = function (a, u, c) {
      (c.element = u), a.preventDefault();
    }),
    (Ee.prototype.after_track_handler = function (a, u) {
      setTimeout(function () {
        u.element.submit();
      }, 0);
    });
  var Ue = A("lock"),
    De = function (a, u) {
      (u = u || {}),
        (this.storageKey = a),
        (this.storage = u.storage || window.localStorage),
        (this.pollIntervalMS = u.pollIntervalMS || 100),
        (this.timeoutMS = u.timeoutMS || 2e3);
    };
  De.prototype.withLock = function (a, u, c) {
    !c && typeof u != "function" && ((c = u), (u = null));
    var h = c || new Date().getTime() + "|" + Math.random(),
      b = new Date().getTime(),
      L = this.storageKey,
      q = this.pollIntervalMS,
      Q = this.timeoutMS,
      H = this.storage,
      Y = L + ":X",
      ae = L + ":Y",
      pe = L + ":Z",
      J = function (Ie) {
        u && u(Ie);
      },
      le = function (Ie) {
        if (new Date().getTime() - b > Q) {
          Ue.error(
            "Timeout waiting for mutex on " + L + "; clearing lock. [" + h + "]"
          ),
            H.removeItem(pe),
            H.removeItem(ae),
            ye();
          return;
        }
        setTimeout(function () {
          try {
            Ie();
          } catch (mt) {
            J(mt);
          }
        }, q * (Math.random() + 0.1));
      },
      ce = function (Ie, mt) {
        Ie()
          ? mt()
          : le(function () {
              ce(Ie, mt);
            });
      },
      de = function () {
        var Ie = H.getItem(ae);
        if (Ie && Ie !== h) return !1;
        if ((H.setItem(ae, h), H.getItem(ae) === h)) return !0;
        if (!W(H, !0))
          throw new Error("localStorage support dropped while acquiring lock");
        return !1;
      },
      ye = function () {
        H.setItem(Y, h),
          ce(de, function () {
            if (H.getItem(Y) === h) {
              ke();
              return;
            }
            le(function () {
              if (H.getItem(ae) !== h) {
                ye();
                return;
              }
              ce(function () {
                return !H.getItem(pe);
              }, ke);
            });
          });
      },
      ke = function () {
        H.setItem(pe, "1");
        try {
          a();
        } finally {
          H.removeItem(pe),
            H.getItem(ae) === h && H.removeItem(ae),
            H.getItem(Y) === h && H.removeItem(Y);
        }
      };
    try {
      if (W(H, !0)) ye();
      else throw new Error("localStorage support check failed");
    } catch (Ie) {
      J(Ie);
    }
  };
  var He = A("batch"),
    Te = function (a, u) {
      (u = u || {}),
        (this.storageKey = a),
        (this.storage = u.storage || window.localStorage),
        (this.reportError = u.errorReporter || o.bind(He.error, He)),
        (this.lock = new De(a, { storage: this.storage })),
        (this.pid = u.pid || null),
        (this.memQueue = []);
    };
  (Te.prototype.enqueue = function (a, u, c) {
    var h = { id: F(), flushAfter: new Date().getTime() + u * 2, payload: a };
    this.lock.withLock(
      o.bind(function () {
        var L;
        try {
          var q = this.readFromStorage();
          q.push(h), (L = this.saveToStorage(q)), L && this.memQueue.push(h);
        } catch {
          this.reportError("Error enqueueing item", a), (L = !1);
        }
        c && c(L);
      }, this),
      o.bind(function (L) {
        this.reportError("Error acquiring storage lock", L), c && c(!1);
      }, this),
      this.pid
    );
  }),
    (Te.prototype.fillBatch = function (a) {
      var u = this.memQueue.slice(0, a);
      if (u.length < a) {
        var c = this.readFromStorage();
        if (c.length) {
          var h = {};
          o.each(u, function (q) {
            h[q.id] = !0;
          });
          for (var b = 0; b < c.length; b++) {
            var L = c[b];
            if (
              new Date().getTime() > L.flushAfter &&
              !h[L.id] &&
              ((L.orphaned = !0), u.push(L), u.length >= a)
            )
              break;
          }
        }
      }
      return u;
    });
  var Ce = function (a, u) {
    var c = [];
    return (
      o.each(a, function (h) {
        h.id && !u[h.id] && c.push(h);
      }),
      c
    );
  };
  Te.prototype.removeItemsByID = function (a, u) {
    var c = {};
    o.each(a, function (b) {
      c[b] = !0;
    }),
      (this.memQueue = Ce(this.memQueue, c));
    var h = o.bind(function () {
      var b;
      try {
        var L = this.readFromStorage();
        if (((L = Ce(L, c)), (b = this.saveToStorage(L)), b)) {
          L = this.readFromStorage();
          for (var q = 0; q < L.length; q++) {
            var Q = L[q];
            if (Q.id && c[Q.id])
              return this.reportError("Item not removed from storage"), !1;
          }
        }
      } catch {
        this.reportError("Error removing items", a), (b = !1);
      }
      return b;
    }, this);
    this.lock.withLock(
      function () {
        var L = h();
        u && u(L);
      },
      o.bind(function (L) {
        var q = !1;
        if (
          (this.reportError("Error acquiring storage lock", L),
          !W(this.storage, !0) && ((q = h()), !q))
        )
          try {
            this.storage.removeItem(this.storageKey);
          } catch (Q) {
            this.reportError("Error clearing queue", Q);
          }
        u && u(q);
      }, this),
      this.pid
    );
  };
  var xe = function (a, u) {
    var c = [];
    return (
      o.each(a, function (h) {
        var b = h.id;
        if (b in u) {
          var L = u[b];
          L !== null && ((h.payload = L), c.push(h));
        } else c.push(h);
      }),
      c
    );
  };
  (Te.prototype.updatePayloads = function (a, u) {
    (this.memQueue = xe(this.memQueue, a)),
      this.lock.withLock(
        o.bind(function () {
          var h;
          try {
            var b = this.readFromStorage();
            (b = xe(b, a)), (h = this.saveToStorage(b));
          } catch {
            this.reportError("Error updating items", a), (h = !1);
          }
          u && u(h);
        }, this),
        o.bind(function (h) {
          this.reportError("Error acquiring storage lock", h), u && u(!1);
        }, this),
        this.pid
      );
  }),
    (Te.prototype.readFromStorage = function () {
      var a;
      try {
        (a = this.storage.getItem(this.storageKey)),
          a &&
            ((a = ie(a)),
            o.isArray(a) ||
              (this.reportError("Invalid storage entry:", a), (a = null)));
      } catch (u) {
        this.reportError("Error retrieving queue", u), (a = null);
      }
      return a || [];
    }),
    (Te.prototype.saveToStorage = function (a) {
      try {
        return this.storage.setItem(this.storageKey, oe(a)), !0;
      } catch (u) {
        return this.reportError("Error saving queue", u), !1;
      }
    }),
    (Te.prototype.clear = function () {
      (this.memQueue = []), this.storage.removeItem(this.storageKey);
    });
  var Be = 10 * 60 * 1e3,
    Se = A("batch"),
    be = function (a, u) {
      (this.errorReporter = u.errorReporter),
        (this.queue = new Te(a, {
          errorReporter: o.bind(this.reportError, this),
          storage: u.storage,
        })),
        (this.libConfig = u.libConfig),
        (this.sendRequest = u.sendRequestFunc),
        (this.beforeSendHook = u.beforeSendHook),
        (this.stopAllBatching = u.stopAllBatchingFunc),
        (this.batchSize = this.libConfig.batch_size),
        (this.flushInterval = this.libConfig.batch_flush_interval_ms),
        (this.stopped = !this.libConfig.batch_autostart),
        (this.consecutiveRemovalFailures = 0),
        (this.itemIdsSentSuccessfully = {});
    };
  (be.prototype.enqueue = function (a, u) {
    this.queue.enqueue(a, this.flushInterval, u);
  }),
    (be.prototype.start = function () {
      (this.stopped = !1), (this.consecutiveRemovalFailures = 0), this.flush();
    }),
    (be.prototype.stop = function () {
      (this.stopped = !0),
        this.timeoutID &&
          (clearTimeout(this.timeoutID), (this.timeoutID = null));
    }),
    (be.prototype.clear = function () {
      this.queue.clear();
    }),
    (be.prototype.resetBatchSize = function () {
      this.batchSize = this.libConfig.batch_size;
    }),
    (be.prototype.resetFlush = function () {
      this.scheduleFlush(this.libConfig.batch_flush_interval_ms);
    }),
    (be.prototype.scheduleFlush = function (a) {
      (this.flushInterval = a),
        this.stopped ||
          (this.timeoutID = setTimeout(
            o.bind(this.flush, this),
            this.flushInterval
          ));
    }),
    (be.prototype.flush = function (a) {
      try {
        if (this.requestInProgress) {
          Se.log("Flush: Request already in progress");
          return;
        }
        a = a || {};
        var u = this.libConfig.batch_request_timeout_ms,
          c = new Date().getTime(),
          h = this.batchSize,
          b = this.queue.fillBatch(h),
          L = [],
          q = {};
        if (
          (o.each(
            b,
            function (Y) {
              var ae = Y.payload;
              if (
                (this.beforeSendHook &&
                  !Y.orphaned &&
                  (ae = this.beforeSendHook(ae)),
                ae)
              ) {
                ae.event &&
                  ae.properties &&
                  (ae.properties = o.extend({}, ae.properties, {
                    mp_sent_by_lib_version: r.LIB_VERSION,
                  }));
                var pe = !0,
                  J = Y.id;
                J
                  ? (this.itemIdsSentSuccessfully[J] || 0) > 5 &&
                    (this.reportError(
                      "[dupe] item ID sent too many times, not sending",
                      {
                        item: Y,
                        batchSize: b.length,
                        timesSent: this.itemIdsSentSuccessfully[J],
                      }
                    ),
                    (pe = !1))
                  : this.reportError("[dupe] found item with no ID", {
                      item: Y,
                    }),
                  pe && L.push(ae);
              }
              q[Y.id] = ae;
            },
            this
          ),
          L.length < 1)
        ) {
          this.resetFlush();
          return;
        }
        this.requestInProgress = !0;
        var Q = o.bind(function (Y) {
            this.requestInProgress = !1;
            try {
              var ae = !1;
              if (a.unloading) this.queue.updatePayloads(q);
              else if (
                o.isObject(Y) &&
                Y.error === "timeout" &&
                new Date().getTime() - c >= u
              )
                this.reportError("Network timeout; retrying"), this.flush();
              else if (
                o.isObject(Y) &&
                Y.xhr_req &&
                (Y.xhr_req.status >= 500 ||
                  Y.xhr_req.status === 429 ||
                  Y.error === "timeout")
              ) {
                var pe = this.flushInterval * 2,
                  J = Y.xhr_req.responseHeaders;
                if (J) {
                  var le = J["Retry-After"];
                  le && (pe = parseInt(le, 10) * 1e3 || pe);
                }
                (pe = Math.min(Be, pe)),
                  this.reportError("Error; retry in " + pe + " ms"),
                  this.scheduleFlush(pe);
              } else if (o.isObject(Y) && Y.xhr_req && Y.xhr_req.status === 413)
                if (b.length > 1) {
                  var ce = Math.max(1, Math.floor(h / 2));
                  (this.batchSize = Math.min(this.batchSize, ce, b.length - 1)),
                    this.reportError(
                      "413 response; reducing batch size to " + this.batchSize
                    ),
                    this.resetFlush();
                } else
                  this.reportError(
                    "Single-event request too large; dropping",
                    b
                  ),
                    this.resetBatchSize(),
                    (ae = !0);
              else ae = !0;
              ae &&
                (this.queue.removeItemsByID(
                  o.map(b, function (de) {
                    return de.id;
                  }),
                  o.bind(function (de) {
                    de
                      ? ((this.consecutiveRemovalFailures = 0), this.flush())
                      : (this.reportError("Failed to remove items from queue"),
                        ++this.consecutiveRemovalFailures > 5
                          ? (this.reportError(
                              "Too many queue failures; disabling batching system."
                            ),
                            this.stopAllBatching())
                          : this.resetFlush());
                  }, this)
                ),
                o.each(
                  b,
                  o.bind(function (de) {
                    var ye = de.id;
                    ye
                      ? ((this.itemIdsSentSuccessfully[ye] =
                          this.itemIdsSentSuccessfully[ye] || 0),
                        this.itemIdsSentSuccessfully[ye]++,
                        this.itemIdsSentSuccessfully[ye] > 5 &&
                          this.reportError(
                            "[dupe] item ID sent too many times",
                            {
                              item: de,
                              batchSize: b.length,
                              timesSent: this.itemIdsSentSuccessfully[ye],
                            }
                          ))
                      : this.reportError(
                          "[dupe] found item with no ID while removing",
                          { item: de }
                        );
                  }, this)
                ));
            } catch (de) {
              this.reportError("Error handling API response", de),
                this.resetFlush();
            }
          }, this),
          H = {
            method: "POST",
            verbose: !0,
            ignore_json_errors: !0,
            timeout_ms: u,
          };
        a.unloading && (H.transport = "sendBeacon"),
          Se.log("MIXPANEL REQUEST:", L),
          this.sendRequest(L, H, Q);
      } catch (Y) {
        this.reportError("Error flushing request queue", Y), this.resetFlush();
      }
    }),
    (be.prototype.reportError = function (a, u) {
      if ((Se.error.apply(Se.error, arguments), this.errorReporter))
        try {
          u instanceof Error || (u = new Error(a)), this.errorReporter(a, u);
        } catch (c) {
          Se.error(c);
        }
    });
  var we = "__mp_opt_in_out_";
  function Me(a, u) {
    At(!0, a, u);
  }
  function Oe(a, u) {
    At(!1, a, u);
  }
  function Ve(a, u) {
    return Rt(a, u) === "1";
  }
  function qe(a, u) {
    if (ar(u))
      return (
        P.warn(
          'This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'
        ),
        !0
      );
    var c = Rt(a, u) === "0";
    return (
      c &&
        P.warn(
          "You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."
        ),
      c
    );
  }
  function me(a) {
    return Ct(a, function (u) {
      return this.get_config(u);
    });
  }
  function Ke(a) {
    return Ct(a, function (u) {
      return this._get_config(u);
    });
  }
  function Ne(a) {
    return Ct(a, function (u) {
      return this._get_config(u);
    });
  }
  function ft(a, u) {
    (u = u || {}),
      Ye(u).remove(Qe(a, u), !!u.crossSubdomainCookie, u.cookieDomain);
  }
  function Ye(a) {
    return (
      (a = a || {}),
      a.persistenceType === "localStorage" ? o.localStorage : o.cookie
    );
  }
  function Qe(a, u) {
    return (u = u || {}), (u.persistencePrefix || we) + a;
  }
  function Rt(a, u) {
    return Ye(u).get(Qe(a, u));
  }
  function ar(a) {
    if (a && a.ignoreDnt) return !1;
    var u = (a && a.window) || t,
      c = u.navigator || {},
      h = !1;
    return (
      o.each([c.doNotTrack, c.msDoNotTrack, u.doNotTrack], function (b) {
        o.includes([!0, 1, "1", "yes"], b) && (h = !0);
      }),
      h
    );
  }
  function At(a, u, c) {
    if (!o.isString(u) || !u.length) {
      P.error(
        "gdpr." + (a ? "optIn" : "optOut") + " called with an invalid token"
      );
      return;
    }
    (c = c || {}),
      Ye(c).set(
        Qe(u, c),
        a ? 1 : 0,
        o.isNumber(c.cookieExpiration) ? c.cookieExpiration : null,
        !!c.crossSubdomainCookie,
        !!c.secureCookie,
        !!c.crossSiteCookie,
        c.cookieDomain
      ),
      c.track &&
        a &&
        c.track(c.trackEventName || "$opt_in", c.trackProperties, {
          send_immediately: !0,
        });
  }
  function Ct(a, u) {
    return function () {
      var c = !1;
      try {
        var h = u.call(this, "token"),
          b = u.call(this, "ignore_dnt"),
          L = u.call(this, "opt_out_tracking_persistence_type"),
          q = u.call(this, "opt_out_tracking_cookie_prefix"),
          Q = u.call(this, "window");
        h &&
          (c = qe(h, {
            ignoreDnt: b,
            persistenceType: L,
            persistencePrefix: q,
            window: Q,
          }));
      } catch (Y) {
        P.error("Unexpected error when checking tracking opt-out status: " + Y);
      }
      if (!c) return a.apply(this, arguments);
      var H = arguments[arguments.length - 1];
      typeof H == "function" && H(0);
    };
  }
  var g = "$set",
    y = "$set_once",
    K = "$unset",
    _ = "$add",
    C = "$append",
    G = "$union",
    z = "$remove",
    m = "$delete",
    U = {
      set_action: function (a, u) {
        var c = {},
          h = {};
        return (
          o.isObject(a)
            ? o.each(
                a,
                function (b, L) {
                  this._is_reserved_property(L) || (h[L] = b);
                },
                this
              )
            : (h[a] = u),
          (c[g] = h),
          c
        );
      },
      unset_action: function (a) {
        var u = {},
          c = [];
        return (
          o.isArray(a) || (a = [a]),
          o.each(
            a,
            function (h) {
              this._is_reserved_property(h) || c.push(h);
            },
            this
          ),
          (u[K] = c),
          u
        );
      },
      set_once_action: function (a, u) {
        var c = {},
          h = {};
        return (
          o.isObject(a)
            ? o.each(
                a,
                function (b, L) {
                  this._is_reserved_property(L) || (h[L] = b);
                },
                this
              )
            : (h[a] = u),
          (c[y] = h),
          c
        );
      },
      union_action: function (a, u) {
        var c = {},
          h = {};
        return (
          o.isObject(a)
            ? o.each(
                a,
                function (b, L) {
                  this._is_reserved_property(L) ||
                    (h[L] = o.isArray(b) ? b : [b]);
                },
                this
              )
            : (h[a] = o.isArray(u) ? u : [u]),
          (c[G] = h),
          c
        );
      },
      append_action: function (a, u) {
        var c = {},
          h = {};
        return (
          o.isObject(a)
            ? o.each(
                a,
                function (b, L) {
                  this._is_reserved_property(L) || (h[L] = b);
                },
                this
              )
            : (h[a] = u),
          (c[C] = h),
          c
        );
      },
      remove_action: function (a, u) {
        var c = {},
          h = {};
        return (
          o.isObject(a)
            ? o.each(
                a,
                function (b, L) {
                  this._is_reserved_property(L) || (h[L] = b);
                },
                this
              )
            : (h[a] = u),
          (c[z] = h),
          c
        );
      },
      delete_action: function () {
        var a = {};
        return (a[m] = ""), a;
      },
    },
    ne = function () {};
  o.extend(ne.prototype, U),
    (ne.prototype._init = function (a, u, c) {
      (this._mixpanel = a), (this._group_key = u), (this._group_id = c);
    }),
    (ne.prototype.set = Ne(function (a, u, c) {
      var h = this.set_action(a, u);
      return o.isObject(a) && (c = u), this._send_request(h, c);
    })),
    (ne.prototype.set_once = Ne(function (a, u, c) {
      var h = this.set_once_action(a, u);
      return o.isObject(a) && (c = u), this._send_request(h, c);
    })),
    (ne.prototype.unset = Ne(function (a, u) {
      var c = this.unset_action(a);
      return this._send_request(c, u);
    })),
    (ne.prototype.union = Ne(function (a, u, c) {
      o.isObject(a) && (c = u);
      var h = this.union_action(a, u);
      return this._send_request(h, c);
    })),
    (ne.prototype.delete = Ne(function (a) {
      var u = this.delete_action();
      return this._send_request(u, a);
    })),
    (ne.prototype.remove = Ne(function (a, u, c) {
      var h = this.remove_action(a, u);
      return this._send_request(h, c);
    })),
    (ne.prototype._send_request = function (a, u) {
      (a.$group_key = this._group_key),
        (a.$group_id = this._group_id),
        (a.$token = this._get_config("token"));
      var c = o.encodeDates(a);
      return this._mixpanel._track_or_batch(
        {
          type: "groups",
          data: c,
          endpoint:
            this._get_config("api_host") +
            "/" +
            this._get_config("api_routes").groups,
          batcher: this._mixpanel.request_batchers.groups,
        },
        u
      );
    }),
    (ne.prototype._is_reserved_property = function (a) {
      return a === "$group_key" || a === "$group_id";
    }),
    (ne.prototype._get_config = function (a) {
      return this._mixpanel.get_config(a);
    }),
    (ne.prototype.toString = function () {
      return (
        this._mixpanel.toString() +
        ".group." +
        this._group_key +
        "." +
        this._group_id
      );
    }),
    (ne.prototype.remove = ne.prototype.remove),
    (ne.prototype.set = ne.prototype.set),
    (ne.prototype.set_once = ne.prototype.set_once),
    (ne.prototype.union = ne.prototype.union),
    (ne.prototype.unset = ne.prototype.unset),
    (ne.prototype.toString = ne.prototype.toString);
  var te = function () {};
  o.extend(te.prototype, U),
    (te.prototype._init = function (a) {
      this._mixpanel = a;
    }),
    (te.prototype.set = Ke(function (a, u, c) {
      var h = this.set_action(a, u);
      return (
        o.isObject(a) && (c = u),
        this._get_config("save_referrer") &&
          this._mixpanel.persistence.update_referrer_info(document.referrer),
        (h[g] = o.extend({}, o.info.people_properties(), h[g])),
        this._send_request(h, c)
      );
    })),
    (te.prototype.set_once = Ke(function (a, u, c) {
      var h = this.set_once_action(a, u);
      return o.isObject(a) && (c = u), this._send_request(h, c);
    })),
    (te.prototype.unset = Ke(function (a, u) {
      var c = this.unset_action(a);
      return this._send_request(c, u);
    })),
    (te.prototype.increment = Ke(function (a, u, c) {
      var h = {},
        b = {};
      return (
        o.isObject(a)
          ? (o.each(
              a,
              function (L, q) {
                if (!this._is_reserved_property(q))
                  if (isNaN(parseFloat(L))) {
                    P.error(
                      "Invalid increment value passed to mixpanel.people.increment - must be a number"
                    );
                    return;
                  } else b[q] = L;
              },
              this
            ),
            (c = u))
          : (o.isUndefined(u) && (u = 1), (b[a] = u)),
        (h[_] = b),
        this._send_request(h, c)
      );
    })),
    (te.prototype.append = Ke(function (a, u, c) {
      o.isObject(a) && (c = u);
      var h = this.append_action(a, u);
      return this._send_request(h, c);
    })),
    (te.prototype.remove = Ke(function (a, u, c) {
      o.isObject(a) && (c = u);
      var h = this.remove_action(a, u);
      return this._send_request(h, c);
    })),
    (te.prototype.union = Ke(function (a, u, c) {
      o.isObject(a) && (c = u);
      var h = this.union_action(a, u);
      return this._send_request(h, c);
    })),
    (te.prototype.track_charge = Ke(function (a, u, c) {
      if (!o.isNumber(a) && ((a = parseFloat(a)), isNaN(a))) {
        P.error(
          "Invalid value passed to mixpanel.people.track_charge - must be a number"
        );
        return;
      }
      return this.append("$transactions", o.extend({ $amount: a }, u), c);
    })),
    (te.prototype.clear_charges = function (a) {
      return this.set("$transactions", [], a);
    }),
    (te.prototype.delete_user = function () {
      if (!this._identify_called()) {
        P.error(
          "mixpanel.people.delete_user() requires you to call identify() first"
        );
        return;
      }
      var a = { $delete: this._mixpanel.get_distinct_id() };
      return this._send_request(a);
    }),
    (te.prototype.toString = function () {
      return this._mixpanel.toString() + ".people";
    }),
    (te.prototype._send_request = function (a, u) {
      (a.$token = this._get_config("token")),
        (a.$distinct_id = this._mixpanel.get_distinct_id());
      var c = this._mixpanel.get_property("$device_id"),
        h = this._mixpanel.get_property("$user_id"),
        b = this._mixpanel.get_property("$had_persisted_distinct_id");
      c && (a.$device_id = c),
        h && (a.$user_id = h),
        b && (a.$had_persisted_distinct_id = b);
      var L = o.encodeDates(a);
      return this._identify_called()
        ? this._mixpanel._track_or_batch(
            {
              type: "people",
              data: L,
              endpoint:
                this._get_config("api_host") +
                "/" +
                this._get_config("api_routes").engage,
              batcher: this._mixpanel.request_batchers.people,
            },
            u
          )
        : (this._enqueue(a),
          o.isUndefined(u) ||
            (this._get_config("verbose")
              ? u({ status: -1, error: null })
              : u(-1)),
          o.truncate(L, 255));
    }),
    (te.prototype._get_config = function (a) {
      return this._mixpanel.get_config(a);
    }),
    (te.prototype._identify_called = function () {
      return this._mixpanel._flags.identify_called === !0;
    }),
    (te.prototype._enqueue = function (a) {
      g in a
        ? this._mixpanel.persistence._add_to_people_queue(g, a)
        : y in a
        ? this._mixpanel.persistence._add_to_people_queue(y, a)
        : K in a
        ? this._mixpanel.persistence._add_to_people_queue(K, a)
        : _ in a
        ? this._mixpanel.persistence._add_to_people_queue(_, a)
        : C in a
        ? this._mixpanel.persistence._add_to_people_queue(C, a)
        : z in a
        ? this._mixpanel.persistence._add_to_people_queue(z, a)
        : G in a
        ? this._mixpanel.persistence._add_to_people_queue(G, a)
        : P.error("Invalid call to _enqueue():", a);
    }),
    (te.prototype._flush_one_queue = function (a, u, c, h) {
      var b = this,
        L = o.extend({}, this._mixpanel.persistence.load_queue(a)),
        q = L;
      !o.isUndefined(L) &&
        o.isObject(L) &&
        !o.isEmptyObject(L) &&
        (b._mixpanel.persistence._pop_from_people_queue(a, L),
        b._mixpanel.persistence.save(),
        h && (q = h(L)),
        u.call(b, q, function (Q, H) {
          Q === 0 && b._mixpanel.persistence._add_to_people_queue(a, L),
            o.isUndefined(c) || c(Q, H);
        }));
    }),
    (te.prototype._flush = function (a, u, c, h, b, L, q) {
      var Q = this;
      this._flush_one_queue(g, this.set, a),
        this._flush_one_queue(y, this.set_once, h),
        this._flush_one_queue(K, this.unset, L, function (ye) {
          return o.keys(ye);
        }),
        this._flush_one_queue(_, this.increment, u),
        this._flush_one_queue(G, this.union, b);
      var H = this._mixpanel.persistence.load_queue(C);
      if (!o.isUndefined(H) && o.isArray(H) && H.length)
        for (
          var Y,
            ae = function (ye, ke) {
              ye === 0 && Q._mixpanel.persistence._add_to_people_queue(C, Y),
                o.isUndefined(c) || c(ye, ke);
            },
            pe = H.length - 1;
          pe >= 0;
          pe--
        )
          (H = this._mixpanel.persistence.load_queue(C)),
            (Y = H.pop()),
            Q._mixpanel.persistence.save(),
            o.isEmptyObject(Y) || Q.append(Y, ae);
      var J = this._mixpanel.persistence.load_queue(z);
      if (!o.isUndefined(J) && o.isArray(J) && J.length)
        for (
          var le,
            ce = function (ye, ke) {
              ye === 0 && Q._mixpanel.persistence._add_to_people_queue(z, le),
                o.isUndefined(q) || q(ye, ke);
            },
            de = J.length - 1;
          de >= 0;
          de--
        )
          (J = this._mixpanel.persistence.load_queue(z)),
            (le = J.pop()),
            Q._mixpanel.persistence.save(),
            o.isEmptyObject(le) || Q.remove(le, ce);
    }),
    (te.prototype._is_reserved_property = function (a) {
      return (
        a === "$distinct_id" ||
        a === "$token" ||
        a === "$device_id" ||
        a === "$user_id" ||
        a === "$had_persisted_distinct_id"
      );
    }),
    (te.prototype.set = te.prototype.set),
    (te.prototype.set_once = te.prototype.set_once),
    (te.prototype.unset = te.prototype.unset),
    (te.prototype.increment = te.prototype.increment),
    (te.prototype.append = te.prototype.append),
    (te.prototype.remove = te.prototype.remove),
    (te.prototype.union = te.prototype.union),
    (te.prototype.track_charge = te.prototype.track_charge),
    (te.prototype.clear_charges = te.prototype.clear_charges),
    (te.prototype.delete_user = te.prototype.delete_user),
    (te.prototype.toString = te.prototype.toString);
  var re = "__mps",
    _e = "__mpso",
    et = "__mpus",
    st = "__mpa",
    Ge = "__mpap",
    tt = "__mpr",
    Bt = "__mpu",
    ot = "$people_distinct_id",
    je = "__alias",
    yt = "__timers",
    Sr = [re, _e, et, st, Ge, tt, Bt, ot, je, yt],
    ge = function (a) {
      (this.props = {}),
        (this.campaign_params_saved = !1),
        a.persistence_name
          ? (this.name = "mp_" + a.persistence_name)
          : (this.name = "mp_" + a.token + "_mixpanel");
      var u = a.persistence;
      u !== "cookie" &&
        u !== "localStorage" &&
        (P.critical(
          "Unknown persistence type " + u + "; falling back to cookie"
        ),
        (u = a.persistence = "cookie")),
        u === "localStorage" && o.localStorage.is_supported()
          ? (this.storage = o.localStorage)
          : (this.storage = o.cookie),
        this.load(),
        this.update_config(a),
        this.upgrade(),
        this.save();
    };
  (ge.prototype.properties = function () {
    var a = {};
    return (
      this.load(),
      o.each(this.props, function (u, c) {
        o.include(Sr, c) || (a[c] = u);
      }),
      a
    );
  }),
    (ge.prototype.load = function () {
      if (!this.disabled) {
        var a = this.storage.parse(this.name);
        a && (this.props = o.extend({}, a));
      }
    }),
    (ge.prototype.upgrade = function () {
      var a, u;
      this.storage === o.localStorage
        ? ((a = o.cookie.parse(this.name)),
          o.cookie.remove(this.name),
          o.cookie.remove(this.name, !0),
          a && this.register_once(a))
        : this.storage === o.cookie &&
          ((u = o.localStorage.parse(this.name)),
          o.localStorage.remove(this.name),
          u && this.register_once(u));
    }),
    (ge.prototype.save = function () {
      this.disabled ||
        this.storage.set(
          this.name,
          o.JSONEncode(this.props),
          this.expire_days,
          this.cross_subdomain,
          this.secure,
          this.cross_site,
          this.cookie_domain
        );
    }),
    (ge.prototype.load_prop = function (a) {
      return this.load(), this.props[a];
    }),
    (ge.prototype.remove = function () {
      this.storage.remove(this.name, !1, this.cookie_domain),
        this.storage.remove(this.name, !0, this.cookie_domain);
    }),
    (ge.prototype.clear = function () {
      this.remove(), (this.props = {});
    }),
    (ge.prototype.register_once = function (a, u, c) {
      return o.isObject(a)
        ? (typeof u > "u" && (u = "None"),
          (this.expire_days = typeof c > "u" ? this.default_expiry : c),
          this.load(),
          o.each(
            a,
            function (h, b) {
              (!this.props.hasOwnProperty(b) || this.props[b] === u) &&
                (this.props[b] = h);
            },
            this
          ),
          this.save(),
          !0)
        : !1;
    }),
    (ge.prototype.register = function (a, u) {
      return o.isObject(a)
        ? ((this.expire_days = typeof u > "u" ? this.default_expiry : u),
          this.load(),
          o.extend(this.props, a),
          this.save(),
          !0)
        : !1;
    }),
    (ge.prototype.unregister = function (a) {
      this.load(), a in this.props && (delete this.props[a], this.save());
    }),
    (ge.prototype.update_search_keyword = function (a) {
      this.register(o.info.searchInfo(a));
    }),
    (ge.prototype.update_referrer_info = function (a) {
      this.register_once(
        {
          $initial_referrer: a || "$direct",
          $initial_referring_domain: o.info.referringDomain(a) || "$direct",
        },
        ""
      );
    }),
    (ge.prototype.get_referrer_info = function () {
      return o.strip_empty_properties({
        $initial_referrer: this.props.$initial_referrer,
        $initial_referring_domain: this.props.$initial_referring_domain,
      });
    }),
    (ge.prototype.update_config = function (a) {
      (this.default_expiry = this.expire_days = a.cookie_expiration),
        this.set_disabled(a.disable_persistence),
        this.set_cookie_domain(a.cookie_domain),
        this.set_cross_site(a.cross_site_cookie),
        this.set_cross_subdomain(a.cross_subdomain_cookie),
        this.set_secure(a.secure_cookie);
    }),
    (ge.prototype.set_disabled = function (a) {
      (this.disabled = a), this.disabled ? this.remove() : this.save();
    }),
    (ge.prototype.set_cookie_domain = function (a) {
      a !== this.cookie_domain &&
        (this.remove(), (this.cookie_domain = a), this.save());
    }),
    (ge.prototype.set_cross_site = function (a) {
      a !== this.cross_site &&
        ((this.cross_site = a), this.remove(), this.save());
    }),
    (ge.prototype.set_cross_subdomain = function (a) {
      a !== this.cross_subdomain &&
        ((this.cross_subdomain = a), this.remove(), this.save());
    }),
    (ge.prototype.get_cross_subdomain = function () {
      return this.cross_subdomain;
    }),
    (ge.prototype.set_secure = function (a) {
      a !== this.secure && ((this.secure = !!a), this.remove(), this.save());
    }),
    (ge.prototype._add_to_people_queue = function (a, u) {
      var c = this._get_queue_key(a),
        h = u[a],
        b = this._get_or_create_queue(g),
        L = this._get_or_create_queue(y),
        q = this._get_or_create_queue(K),
        Q = this._get_or_create_queue(_),
        H = this._get_or_create_queue(G),
        Y = this._get_or_create_queue(z, []),
        ae = this._get_or_create_queue(C, []);
      c === re
        ? (o.extend(b, h),
          this._pop_from_people_queue(_, h),
          this._pop_from_people_queue(G, h),
          this._pop_from_people_queue(K, h))
        : c === _e
        ? (o.each(h, function (pe, J) {
            J in L || (L[J] = pe);
          }),
          this._pop_from_people_queue(K, h))
        : c === et
        ? o.each(h, function (pe) {
            o.each([b, L, Q, H], function (J) {
              pe in J && delete J[pe];
            }),
              o.each(ae, function (J) {
                pe in J && delete J[pe];
              }),
              (q[pe] = !0);
          })
        : c === st
        ? (o.each(
            h,
            function (pe, J) {
              J in b ? (b[J] += pe) : (J in Q || (Q[J] = 0), (Q[J] += pe));
            },
            this
          ),
          this._pop_from_people_queue(K, h))
        : c === Bt
        ? (o.each(h, function (pe, J) {
            o.isArray(pe) && (J in H || (H[J] = []), (H[J] = H[J].concat(pe)));
          }),
          this._pop_from_people_queue(K, h))
        : c === tt
        ? (Y.push(h), this._pop_from_people_queue(C, h))
        : c === Ge && (ae.push(h), this._pop_from_people_queue(K, h)),
        P.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"),
        P.log(u),
        this.save();
    }),
    (ge.prototype._pop_from_people_queue = function (a, u) {
      var c = this.props[this._get_queue_key(a)];
      o.isUndefined(c) ||
        o.each(
          u,
          function (h, b) {
            a === C || a === z
              ? o.each(c, function (L) {
                  L[b] === h && delete L[b];
                })
              : delete c[b];
          },
          this
        );
    }),
    (ge.prototype.load_queue = function (a) {
      return this.load_prop(this._get_queue_key(a));
    }),
    (ge.prototype._get_queue_key = function (a) {
      if (a === g) return re;
      if (a === y) return _e;
      if (a === K) return et;
      if (a === _) return st;
      if (a === C) return Ge;
      if (a === z) return tt;
      if (a === G) return Bt;
      P.error("Invalid queue:", a);
    }),
    (ge.prototype._get_or_create_queue = function (a, u) {
      var c = this._get_queue_key(a);
      return (
        (u = o.isUndefined(u) ? {} : u), this.props[c] || (this.props[c] = u)
      );
    }),
    (ge.prototype.set_event_timer = function (a, u) {
      var c = this.load_prop(yt) || {};
      (c[a] = u), (this.props[yt] = c), this.save();
    }),
    (ge.prototype.remove_event_timer = function (a) {
      var u = this.load_prop(yt) || {},
        c = u[a];
      return o.isUndefined(c) || (delete this.props[yt][a], this.save()), c;
    });
  var lt,
    Pe,
    Ut = 0,
    fr = 1,
    ur = function (a) {
      return a;
    },
    gt = function () {},
    We = "mixpanel",
    jt = "base64",
    dr = "json",
    Kt = "$device:",
    ct = t.XMLHttpRequest && "withCredentials" in new XMLHttpRequest(),
    vr = !ct && j.indexOf("MSIE") === -1 && j.indexOf("Mozilla") === -1,
    bt = null;
  S.sendBeacon &&
    (bt = function () {
      return S.sendBeacon.apply(S, arguments);
    });
  var pt = {
      track: "track/",
      engage: "engage/",
      groups: "groups/",
      record: "record/",
    },
    wt = {
      api_host: "https://api-js.mixpanel.com",
      api_routes: pt,
      api_method: "POST",
      api_transport: "XHR",
      api_payload_format: jt,
      app_host: "https://mixpanel.com",
      cdn: "https://cdn.mxpnl.com",
      cross_site_cookie: !1,
      cross_subdomain_cookie: !0,
      error_reporter: gt,
      persistence: "cookie",
      persistence_name: "",
      cookie_domain: "",
      cookie_name: "",
      loaded: gt,
      mp_loader: null,
      track_marketing: !0,
      track_pageview: !1,
      skip_first_touch_marketing: !1,
      store_google: !0,
      stop_utm_persistence: !1,
      save_referrer: !0,
      test: !1,
      verbose: !1,
      img: !1,
      debug: !1,
      track_links_timeout: 300,
      cookie_expiration: 365,
      upgrade: !1,
      disable_persistence: !1,
      disable_cookie: !1,
      secure_cookie: !1,
      ip: !0,
      opt_out_tracking_by_default: !1,
      opt_out_persistence_by_default: !1,
      opt_out_tracking_persistence_type: "localStorage",
      opt_out_tracking_cookie_prefix: null,
      property_blacklist: [],
      xhr_headers: {},
      ignore_dnt: !1,
      batch_requests: !0,
      batch_size: 50,
      batch_flush_interval_ms: 5e3,
      batch_request_timeout_ms: 9e4,
      batch_autostart: !0,
      hooks: {},
      record_block_class: new RegExp(
        "^(mp-block|fs-exclude|amp-block|rr-block|ph-no-capture)$"
      ),
      record_block_selector: "img, video",
      record_idle_timeout_ms: 30 * 60 * 1e3,
      record_mask_text_class: new RegExp(
        "^(mp-mask|fs-mask|amp-mask|rr-mask|ph-mask)$"
      ),
      record_mask_text_selector: "*",
      record_max_ms: i,
      record_sessions_percent: 0,
      recorder_src: "https://cdn.mxpnl.com/libs/mixpanel-recorder.min.js",
    },
    Lr = !1,
    X = function () {},
    an = function (a, u, c) {
      var h,
        b = c === We ? Pe : Pe[c];
      if (b && lt === Ut) h = b;
      else {
        if (b && !o.isArray(b)) {
          P.error("You have already initialized " + c);
          return;
        }
        h = new X();
      }
      if (
        ((h._cached_groups = {}),
        h._init(a, u, c),
        (h.people = new te()),
        h.people._init(h),
        !h.get_config("skip_first_touch_marketing"))
      ) {
        var L = o.info.campaignParams(null),
          q = {},
          Q = !1;
        o.each(L, function (H, Y) {
          (q["initial_" + Y] = H), H && (Q = !0);
        }),
          Q && h.people.set_once(q);
      }
      return (
        (r.DEBUG = r.DEBUG || h.get_config("debug")),
        !o.isUndefined(b) &&
          o.isArray(b) &&
          (h._execute_array.call(h.people, b.people), h._execute_array(b)),
        h
      );
    };
  (X.prototype.init = function (a, u, c) {
    if (o.isUndefined(c)) {
      this.report_error(
        "You must name your new library: init(token, config, name)"
      );
      return;
    }
    if (c === We) {
      this.report_error(
        "You must initialize the main mixpanel object right after you include the Mixpanel js snippet"
      );
      return;
    }
    var h = an(a, u, c);
    return (Pe[c] = h), h._loaded(), h;
  }),
    (X.prototype._init = function (a, u, c) {
      (u = u || {}), (this.__loaded = !0), (this.config = {});
      var h = {};
      if (!("api_payload_format" in u)) {
        var b = u.api_host || wt.api_host;
        b.match(/\.mixpanel\.com/) && (h.api_payload_format = dr);
      }
      if (
        (this.set_config(
          o.extend({}, wt, h, u, {
            name: c,
            token: a,
            callback_fn: (c === We ? c : We + "." + c) + "._jsc",
          })
        ),
        (this._jsc = gt),
        (this.__dom_loaded_queue = []),
        (this.__request_queue = []),
        (this.__disabled_events = []),
        (this._flags = { disable_all_events: !1, identify_called: !1 }),
        (this.request_batchers = {}),
        (this._batch_requests = this.get_config("batch_requests")),
        this._batch_requests)
      ) {
        if (!o.localStorage.is_supported(!0) || !ct)
          (this._batch_requests = !1),
            P.log(
              "Turning off Mixpanel request-queueing; needs XHR and localStorage support"
            ),
            o.each(this.get_batcher_configs(), function (H) {
              P.log("Clearing batch queue " + H.queue_key),
                o.localStorage.remove(H.queue_key);
            });
        else if ((this.init_batchers(), bt && t.addEventListener)) {
          var L = o.bind(function () {
            this.request_batchers.events.stopped ||
              this.request_batchers.events.flush({ unloading: !0 });
          }, this);
          t.addEventListener("pagehide", function (H) {
            H.persisted && L();
          }),
            t.addEventListener("visibilitychange", function () {
              v.visibilityState === "hidden" && L();
            });
        }
      }
      (this.persistence = this.cookie = new ge(this.config)),
        (this.unpersisted_superprops = {}),
        this._gdpr_init();
      var q = o.UUID();
      this.get_distinct_id() ||
        this.register_once({ distinct_id: Kt + q, $device_id: q }, "");
      var Q = this.get_config("track_pageview");
      Q && this._init_url_change_tracking(Q),
        this.get_config("record_sessions_percent") > 0 &&
          Math.random() * 100 <= this.get_config("record_sessions_percent") &&
          this.start_session_recording();
    }),
    (X.prototype.start_session_recording = me(function () {
      if (!t.MutationObserver) {
        P.critical(
          "Browser does not support MutationObserver; skipping session recording"
        );
        return;
      }
      var a = o.bind(function () {
        (this._recorder = this._recorder || new t.__mp_recorder(this)),
          this._recorder.startRecording();
      }, this);
      if (o.isUndefined(t.__mp_recorder)) {
        var u = v.createElement("script");
        (u.type = "text/javascript"),
          (u.async = !0),
          (u.onload = a),
          (u.src = this.get_config("recorder_src")),
          v.head.appendChild(u);
      } else a();
    })),
    (X.prototype.stop_session_recording = function () {
      this._recorder
        ? this._recorder.stopRecording()
        : P.critical("Session recorder module not loaded");
    }),
    (X.prototype.get_session_recording_properties = function () {
      var a = {};
      if (this._recorder) {
        var u = this._recorder.replayId;
        u && (a.$mp_replay_id = u);
      }
      return a;
    }),
    (X.prototype._loaded = function () {
      if (
        (this.get_config("loaded")(this),
        this._set_default_superprops(),
        this.people.set_once(this.persistence.get_referrer_info()),
        this.get_config("store_google") &&
          this.get_config("stop_utm_persistence"))
      ) {
        var a = o.info.campaignParams(null);
        o.each(
          a,
          function (u, c) {
            this.unregister(c);
          }.bind(this)
        );
      }
    }),
    (X.prototype._set_default_superprops = function () {
      this.persistence.update_search_keyword(v.referrer),
        this.get_config("store_google") &&
          !this.get_config("stop_utm_persistence") &&
          this.register(o.info.campaignParams()),
        this.get_config("save_referrer") &&
          this.persistence.update_referrer_info(v.referrer);
    }),
    (X.prototype._dom_loaded = function () {
      o.each(
        this.__dom_loaded_queue,
        function (a) {
          this._track_dom.apply(this, a);
        },
        this
      ),
        this.has_opted_out_tracking() ||
          o.each(
            this.__request_queue,
            function (a) {
              this._send_request.apply(this, a);
            },
            this
          ),
        delete this.__dom_loaded_queue,
        delete this.__request_queue;
    }),
    (X.prototype._track_dom = function (a, u) {
      if (this.get_config("img"))
        return (
          this.report_error(
            "You can't use DOM tracking functions with img = true."
          ),
          !1
        );
      if (!Lr) return this.__dom_loaded_queue.push([a, u]), !1;
      var c = new a().init(this);
      return c.track.apply(c, u);
    }),
    (X.prototype._init_url_change_tracking = function (a) {
      var u = "",
        c = this.track_pageview();
      if (
        (c && (u = o.info.currentUrl()),
        o.include(
          ["full-url", "url-with-path-and-query-string", "url-with-path"],
          a
        ))
      ) {
        t.addEventListener("popstate", function () {
          t.dispatchEvent(new Event("mp_locationchange"));
        }),
          t.addEventListener("hashchange", function () {
            t.dispatchEvent(new Event("mp_locationchange"));
          });
        var h = t.history.pushState;
        typeof h == "function" &&
          (t.history.pushState = function (L, q, Q) {
            h.call(t.history, L, q, Q),
              t.dispatchEvent(new Event("mp_locationchange"));
          });
        var b = t.history.replaceState;
        typeof b == "function" &&
          (t.history.replaceState = function (L, q, Q) {
            b.call(t.history, L, q, Q),
              t.dispatchEvent(new Event("mp_locationchange"));
          }),
          t.addEventListener(
            "mp_locationchange",
            function () {
              var L = o.info.currentUrl(),
                q = !1;
              if (
                (a === "full-url"
                  ? (q = L !== u)
                  : a === "url-with-path-and-query-string"
                  ? (q = L.split("#")[0] !== u.split("#")[0])
                  : a === "url-with-path" &&
                    (q =
                      L.split("#")[0].split("?")[0] !==
                      u.split("#")[0].split("?")[0]),
                q)
              ) {
                var Q = this.track_pageview();
                Q && (u = L);
              }
            }.bind(this)
          );
      }
    }),
    (X.prototype._prepare_callback = function (a, u) {
      if (o.isUndefined(a)) return null;
      if (ct) {
        var c = function (q) {
          a(q, u);
        };
        return c;
      } else {
        var h = this._jsc,
          b = "" + Math.floor(Math.random() * 1e8),
          L = this.get_config("callback_fn") + "[" + b + "]";
        return (
          (h[b] = function (q) {
            delete h[b], a(q, u);
          }),
          L
        );
      }
    }),
    (X.prototype._send_request = function (a, u, c, h) {
      var b = !0;
      if (vr) return this.__request_queue.push(arguments), b;
      var L = {
          method: this.get_config("api_method"),
          transport: this.get_config("api_transport"),
          verbose: this.get_config("verbose"),
        },
        q = null;
      !h && (o.isFunction(c) || typeof c == "string") && ((h = c), (c = null)),
        (c = o.extend(L, c || {})),
        ct || (c.method = "GET");
      var Q = c.method === "POST",
        H = bt && Q && c.transport.toLowerCase() === "sendbeacon",
        Y = c.verbose;
      u.verbose && (Y = !0),
        this.get_config("test") && (u.test = 1),
        Y && (u.verbose = 1),
        this.get_config("img") && (u.img = 1),
        ct ||
          (h
            ? (u.callback = h)
            : (Y || this.get_config("test")) &&
              (u.callback = "(function(){})")),
        (u.ip = this.get_config("ip") ? 1 : 0),
        (u._ = new Date().getTime().toString()),
        Q && ((q = "data=" + encodeURIComponent(u.data)), delete u.data),
        (a += "?" + o.HTTPBuildQuery(u));
      var ae = this;
      if ("img" in u) {
        var pe = v.createElement("img");
        (pe.src = a), v.body.appendChild(pe);
      } else if (H) {
        try {
          b = bt(a, q);
        } catch (ke) {
          ae.report_error(ke), (b = !1);
        }
        try {
          h && h(b ? 1 : 0);
        } catch (ke) {
          ae.report_error(ke);
        }
      } else if (ct)
        try {
          var J = new XMLHttpRequest();
          J.open(c.method, a, !0);
          var le = this.get_config("xhr_headers");
          if (
            (Q && (le["Content-Type"] = "application/x-www-form-urlencoded"),
            o.each(le, function (ke, Ie) {
              J.setRequestHeader(Ie, ke);
            }),
            c.timeout_ms && typeof J.timeout < "u")
          ) {
            J.timeout = c.timeout_ms;
            var ce = new Date().getTime();
          }
          (J.withCredentials = !0),
            (J.onreadystatechange = function () {
              if (J.readyState === 4)
                if (J.status === 200) {
                  if (h)
                    if (Y) {
                      var ke;
                      try {
                        ke = o.JSONDecode(J.responseText);
                      } catch (mt) {
                        if ((ae.report_error(mt), c.ignore_json_errors))
                          ke = J.responseText;
                        else return;
                      }
                      h(ke);
                    } else h(Number(J.responseText));
                } else {
                  var Ie;
                  J.timeout &&
                  !J.status &&
                  new Date().getTime() - ce >= J.timeout
                    ? (Ie = "timeout")
                    : (Ie =
                        "Bad HTTP status: " + J.status + " " + J.statusText),
                    ae.report_error(Ie),
                    h && h(Y ? { status: 0, error: Ie, xhr_req: J } : 0);
                }
            }),
            J.send(q);
        } catch (ke) {
          ae.report_error(ke), (b = !1);
        }
      else {
        var de = v.createElement("script");
        (de.type = "text/javascript"),
          (de.async = !0),
          (de.defer = !0),
          (de.src = a);
        var ye = v.getElementsByTagName("script")[0];
        ye.parentNode.insertBefore(de, ye);
      }
      return b;
    }),
    (X.prototype._execute_array = function (a) {
      var u,
        c = [],
        h = [],
        b = [];
      o.each(
        a,
        function (q) {
          q &&
            ((u = q[0]),
            o.isArray(u)
              ? b.push(q)
              : typeof q == "function"
              ? q.call(this)
              : o.isArray(q) && u === "alias"
              ? c.push(q)
              : o.isArray(q) &&
                u.indexOf("track") !== -1 &&
                typeof this[u] == "function"
              ? b.push(q)
              : h.push(q));
        },
        this
      );
      var L = function (q, Q) {
        o.each(
          q,
          function (H) {
            if (o.isArray(H[0])) {
              var Y = Q;
              o.each(H, function (ae) {
                Y = Y[ae[0]].apply(Y, ae.slice(1));
              });
            } else this[H[0]].apply(this, H.slice(1));
          },
          Q
        );
      };
      L(c, this), L(h, this), L(b, this);
    }),
    (X.prototype.are_batchers_initialized = function () {
      return !!this.request_batchers.events;
    }),
    (X.prototype.get_batcher_configs = function () {
      var a = "__mpq_" + this.get_config("token"),
        u = this.get_config("api_routes");
      return (
        (this._batcher_configs = this._batcher_configs || {
          events: {
            type: "events",
            endpoint: "/" + u.track,
            queue_key: a + "_ev",
          },
          people: {
            type: "people",
            endpoint: "/" + u.engage,
            queue_key: a + "_pp",
          },
          groups: {
            type: "groups",
            endpoint: "/" + u.groups,
            queue_key: a + "_gr",
          },
        }),
        this._batcher_configs
      );
    }),
    (X.prototype.init_batchers = function () {
      if (!this.are_batchers_initialized()) {
        var a = o.bind(function (c) {
            return new be(c.queue_key, {
              libConfig: this.config,
              sendRequestFunc: o.bind(function (h, b, L) {
                this._send_request(
                  this.get_config("api_host") + c.endpoint,
                  this._encode_data_for_request(h),
                  b,
                  this._prepare_callback(L, h)
                );
              }, this),
              beforeSendHook: o.bind(function (h) {
                return this._run_hook("before_send_" + c.type, h);
              }, this),
              errorReporter: this.get_config("error_reporter"),
              stopAllBatchingFunc: o.bind(this.stop_batch_senders, this),
            });
          }, this),
          u = this.get_batcher_configs();
        this.request_batchers = {
          events: a(u.events),
          people: a(u.people),
          groups: a(u.groups),
        };
      }
      this.get_config("batch_autostart") && this.start_batch_senders();
    }),
    (X.prototype.start_batch_senders = function () {
      (this._batchers_were_started = !0),
        this.are_batchers_initialized() &&
          ((this._batch_requests = !0),
          o.each(this.request_batchers, function (a) {
            a.start();
          }));
    }),
    (X.prototype.stop_batch_senders = function () {
      (this._batch_requests = !1),
        o.each(this.request_batchers, function (a) {
          a.stop(), a.clear();
        });
    }),
    (X.prototype.push = function (a) {
      this._execute_array([a]);
    }),
    (X.prototype.disable = function (a) {
      typeof a > "u"
        ? (this._flags.disable_all_events = !0)
        : (this.__disabled_events = this.__disabled_events.concat(a));
    }),
    (X.prototype._encode_data_for_request = function (a) {
      var u = o.JSONEncode(a);
      return (
        this.get_config("api_payload_format") === jt && (u = o.base64Encode(u)),
        { data: u }
      );
    }),
    (X.prototype._track_or_batch = function (a, u) {
      var c = o.truncate(a.data, 255),
        h = a.endpoint,
        b = a.batcher,
        L = a.should_send_immediately,
        q = a.send_request_options || {};
      u = u || gt;
      var Q = !0,
        H = o.bind(function () {
          return (
            q.skip_hooks || (c = this._run_hook("before_send_" + a.type, c)),
            c
              ? (P.log("MIXPANEL REQUEST:"),
                P.log(c),
                this._send_request(
                  h,
                  this._encode_data_for_request(c),
                  q,
                  this._prepare_callback(u, c)
                ))
              : null
          );
        }, this);
      return (
        this._batch_requests && !L
          ? b.enqueue(c, function (Y) {
              Y ? u(1, c) : H();
            })
          : (Q = H()),
        Q && c
      );
    }),
    (X.prototype.track = me(function (a, u, c, h) {
      !h && typeof c == "function" && ((h = c), (c = null)), (c = c || {});
      var b = c.transport;
      b && (c.transport = b);
      var L = c.send_immediately;
      if ((typeof h != "function" && (h = gt), o.isUndefined(a))) {
        this.report_error("No event name provided to mixpanel.track");
        return;
      }
      if (this._event_is_disabled(a)) {
        h(0);
        return;
      }
      (u = o.extend({}, u)), (u.token = this.get_config("token"));
      var q = this.persistence.remove_event_timer(a);
      if (!o.isUndefined(q)) {
        var Q = new Date().getTime() - q;
        u.$duration = parseFloat((Q / 1e3).toFixed(3));
      }
      this._set_default_superprops();
      var H = this.get_config("track_marketing")
        ? o.info.marketingParams()
        : {};
      u = o.extend(
        {},
        o.info.properties({ mp_loader: this.get_config("mp_loader") }),
        H,
        this.persistence.properties(),
        this.unpersisted_superprops,
        this.get_session_recording_properties(),
        u
      );
      var Y = this.get_config("property_blacklist");
      o.isArray(Y)
        ? o.each(Y, function (J) {
            delete u[J];
          })
        : this.report_error(
            "Invalid value for property_blacklist config: " + Y
          );
      var ae = { event: a, properties: u },
        pe = this._track_or_batch(
          {
            type: "events",
            data: ae,
            endpoint:
              this.get_config("api_host") +
              "/" +
              this.get_config("api_routes").track,
            batcher: this.request_batchers.events,
            should_send_immediately: L,
            send_request_options: c,
          },
          h
        );
      return pe;
    })),
    (X.prototype.set_group = me(function (a, u, c) {
      o.isArray(u) || (u = [u]);
      var h = {};
      return (h[a] = u), this.register(h), this.people.set(a, u, c);
    })),
    (X.prototype.add_group = me(function (a, u, c) {
      var h = this.get_property(a),
        b = {};
      return (
        h === void 0
          ? ((b[a] = [u]), this.register(b))
          : h.indexOf(u) === -1 && (h.push(u), (b[a] = h), this.register(b)),
        this.people.union(a, u, c)
      );
    })),
    (X.prototype.remove_group = me(function (a, u, c) {
      var h = this.get_property(a);
      if (h !== void 0) {
        var b = h.indexOf(u);
        b > -1 && (h.splice(b, 1), this.register({ group_key: h })),
          h.length === 0 && this.unregister(a);
      }
      return this.people.remove(a, u, c);
    })),
    (X.prototype.track_with_groups = me(function (a, u, c, h) {
      var b = o.extend({}, u || {});
      return (
        o.each(c, function (L, q) {
          L != null && (b[q] = L);
        }),
        this.track(a, b, h)
      );
    })),
    (X.prototype._create_map_key = function (a, u) {
      return a + "_" + JSON.stringify(u);
    }),
    (X.prototype._remove_group_from_cache = function (a, u) {
      delete this._cached_groups[this._create_map_key(a, u)];
    }),
    (X.prototype.get_group = function (a, u) {
      var c = this._create_map_key(a, u),
        h = this._cached_groups[c];
      return (
        (h === void 0 || h._group_key !== a || h._group_id !== u) &&
          ((h = new ne()), h._init(this, a, u), (this._cached_groups[c] = h)),
        h
      );
    }),
    (X.prototype.track_pageview = me(function (a, u) {
      typeof a != "object" && (a = {}), (u = u || {});
      var c = u.event_name || "$mp_web_page_view",
        h = o.extend(
          o.info.mpPageViewProperties(),
          o.info.campaignParams(),
          o.info.clickParams()
        ),
        b = o.extend({}, h, a);
      return this.track(c, b);
    })),
    (X.prototype.track_links = function () {
      return this._track_dom.call(this, V, arguments);
    }),
    (X.prototype.track_forms = function () {
      return this._track_dom.call(this, Ee, arguments);
    }),
    (X.prototype.time_event = function (a) {
      if (o.isUndefined(a)) {
        this.report_error("No event name provided to mixpanel.time_event");
        return;
      }
      this._event_is_disabled(a) ||
        this.persistence.set_event_timer(a, new Date().getTime());
    });
  var w0 = { persistent: !0 },
    fn = function (a) {
      var u;
      return (
        o.isObject(a)
          ? (u = a)
          : o.isUndefined(a)
          ? (u = {})
          : (u = { days: a }),
        o.extend({}, w0, u)
      );
    };
  (X.prototype.register = function (a, u) {
    var c = fn(u);
    c.persistent
      ? this.persistence.register(a, c.days)
      : o.extend(this.unpersisted_superprops, a);
  }),
    (X.prototype.register_once = function (a, u, c) {
      var h = fn(c);
      h.persistent
        ? this.persistence.register_once(a, u, h.days)
        : (typeof u > "u" && (u = "None"),
          o.each(
            a,
            function (b, L) {
              (!this.unpersisted_superprops.hasOwnProperty(L) ||
                this.unpersisted_superprops[L] === u) &&
                (this.unpersisted_superprops[L] = b);
            },
            this
          ));
    }),
    (X.prototype.unregister = function (a, u) {
      (u = fn(u)),
        u.persistent
          ? this.persistence.unregister(a)
          : delete this.unpersisted_superprops[a];
    }),
    (X.prototype._register_single = function (a, u) {
      var c = {};
      (c[a] = u), this.register(c);
    }),
    (X.prototype.identify = function (a, u, c, h, b, L, q, Q) {
      var H = this.get_distinct_id();
      if (a && H !== a) {
        if (typeof a == "string" && a.indexOf(Kt) === 0)
          return (
            this.report_error("distinct_id cannot have $device: prefix"), -1
          );
        this.register({ $user_id: a });
      }
      if (!this.get_property("$device_id")) {
        var Y = H;
        this.register_once(
          { $had_persisted_distinct_id: !0, $device_id: Y },
          ""
        );
      }
      a !== H &&
        a !== this.get_property(je) &&
        (this.unregister(je), this.register({ distinct_id: a })),
        (this._flags.identify_called = !0),
        this.people._flush(u, c, h, b, L, q, Q),
        a !== H &&
          this.track(
            "$identify",
            { distinct_id: a, $anon_distinct_id: H },
            { skip_hooks: !0 }
          );
    }),
    (X.prototype.reset = function () {
      this.persistence.clear(), (this._flags.identify_called = !1);
      var a = o.UUID();
      this.register_once({ distinct_id: Kt + a, $device_id: a }, "");
    }),
    (X.prototype.get_distinct_id = function () {
      return this.get_property("distinct_id");
    }),
    (X.prototype.alias = function (a, u) {
      if (a === this.get_property(ot))
        return (
          this.report_error(
            "Attempting to create alias for existing People user - aborting."
          ),
          -2
        );
      var c = this;
      return (
        o.isUndefined(u) && (u = this.get_distinct_id()),
        a !== u
          ? (this._register_single(je, a),
            this.track(
              "$create_alias",
              { alias: a, distinct_id: u },
              { skip_hooks: !0 },
              function () {
                c.identify(a);
              }
            ))
          : (this.report_error(
              "alias matches current distinct_id - skipping api call."
            ),
            this.identify(a),
            -1)
      );
    }),
    (X.prototype.name_tag = function (a) {
      this._register_single("mp_name_tag", a);
    }),
    (X.prototype.set_config = function (a) {
      if (o.isObject(a)) {
        o.extend(this.config, a);
        var u = a.batch_size;
        u &&
          o.each(this.request_batchers, function (c) {
            c.resetBatchSize();
          }),
          this.get_config("persistence_name") ||
            (this.config.persistence_name = this.config.cookie_name),
          this.get_config("disable_persistence") ||
            (this.config.disable_persistence = this.config.disable_cookie),
          this.persistence && this.persistence.update_config(this.config),
          (r.DEBUG = r.DEBUG || this.get_config("debug"));
      }
    }),
    (X.prototype.get_config = function (a) {
      return this.config[a];
    }),
    (X.prototype._run_hook = function (a) {
      var u = (this.config.hooks[a] || ur).apply(this, l.call(arguments, 1));
      return (
        typeof u > "u" &&
          (this.report_error(a + " hook did not return a value"), (u = null)),
        u
      );
    }),
    (X.prototype.get_property = function (a) {
      return this.persistence.load_prop([a]);
    }),
    (X.prototype.toString = function () {
      var a = this.get_config("name");
      return a !== We && (a = We + "." + a), a;
    }),
    (X.prototype._event_is_disabled = function (a) {
      return (
        o.isBlockedUA(j) ||
        this._flags.disable_all_events ||
        o.include(this.__disabled_events, a)
      );
    }),
    (X.prototype._gdpr_init = function () {
      var a =
        this.get_config("opt_out_tracking_persistence_type") === "localStorage";
      a &&
        o.localStorage.is_supported() &&
        (!this.has_opted_in_tracking() &&
          this.has_opted_in_tracking({ persistence_type: "cookie" }) &&
          this.opt_in_tracking({ enable_persistence: !1 }),
        !this.has_opted_out_tracking() &&
          this.has_opted_out_tracking({ persistence_type: "cookie" }) &&
          this.opt_out_tracking({ clear_persistence: !1 }),
        this.clear_opt_in_out_tracking({
          persistence_type: "cookie",
          enable_persistence: !1,
        })),
        this.has_opted_out_tracking()
          ? this._gdpr_update_persistence({ clear_persistence: !0 })
          : !this.has_opted_in_tracking() &&
            (this.get_config("opt_out_tracking_by_default") ||
              o.cookie.get("mp_optout")) &&
            (o.cookie.remove("mp_optout"),
            this.opt_out_tracking({
              clear_persistence: this.get_config(
                "opt_out_persistence_by_default"
              ),
            }));
    }),
    (X.prototype._gdpr_update_persistence = function (a) {
      var u;
      if (a && a.clear_persistence) u = !0;
      else if (a && a.enable_persistence) u = !1;
      else return;
      !this.get_config("disable_persistence") &&
        this.persistence.disabled !== u &&
        this.persistence.set_disabled(u),
        u
          ? this.stop_batch_senders()
          : this._batchers_were_started && this.start_batch_senders();
    }),
    (X.prototype._gdpr_call_func = function (a, u) {
      return (
        (u = o.extend(
          {
            track: o.bind(this.track, this),
            persistence_type: this.get_config(
              "opt_out_tracking_persistence_type"
            ),
            cookie_prefix: this.get_config("opt_out_tracking_cookie_prefix"),
            cookie_expiration: this.get_config("cookie_expiration"),
            cross_site_cookie: this.get_config("cross_site_cookie"),
            cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"),
            cookie_domain: this.get_config("cookie_domain"),
            secure_cookie: this.get_config("secure_cookie"),
            ignore_dnt: this.get_config("ignore_dnt"),
          },
          u
        )),
        o.localStorage.is_supported() || (u.persistence_type = "cookie"),
        a(this.get_config("token"), {
          track: u.track,
          trackEventName: u.track_event_name,
          trackProperties: u.track_properties,
          persistenceType: u.persistence_type,
          persistencePrefix: u.cookie_prefix,
          cookieDomain: u.cookie_domain,
          cookieExpiration: u.cookie_expiration,
          crossSiteCookie: u.cross_site_cookie,
          crossSubdomainCookie: u.cross_subdomain_cookie,
          secureCookie: u.secure_cookie,
          ignoreDnt: u.ignore_dnt,
        })
      );
    }),
    (X.prototype.opt_in_tracking = function (a) {
      (a = o.extend({ enable_persistence: !0 }, a)),
        this._gdpr_call_func(Me, a),
        this._gdpr_update_persistence(a);
    }),
    (X.prototype.opt_out_tracking = function (a) {
      (a = o.extend({ clear_persistence: !0, delete_user: !0 }, a)),
        a.delete_user &&
          this.people &&
          this.people._identify_called() &&
          (this.people.delete_user(), this.people.clear_charges()),
        this._gdpr_call_func(Oe, a),
        this._gdpr_update_persistence(a);
    }),
    (X.prototype.has_opted_in_tracking = function (a) {
      return this._gdpr_call_func(Ve, a);
    }),
    (X.prototype.has_opted_out_tracking = function (a) {
      return this._gdpr_call_func(qe, a);
    }),
    (X.prototype.clear_opt_in_out_tracking = function (a) {
      (a = o.extend({ enable_persistence: !0 }, a)),
        this._gdpr_call_func(ft, a),
        this._gdpr_update_persistence(a);
    }),
    (X.prototype.report_error = function (a, u) {
      P.error.apply(P.error, arguments);
      try {
        !u && !(a instanceof Error) && (a = new Error(a)),
          this.get_config("error_reporter")(a, u);
      } catch (c) {
        P.error(c);
      }
    }),
    (X.prototype.init = X.prototype.init),
    (X.prototype.reset = X.prototype.reset),
    (X.prototype.disable = X.prototype.disable),
    (X.prototype.time_event = X.prototype.time_event),
    (X.prototype.track = X.prototype.track),
    (X.prototype.track_links = X.prototype.track_links),
    (X.prototype.track_forms = X.prototype.track_forms),
    (X.prototype.track_pageview = X.prototype.track_pageview),
    (X.prototype.register = X.prototype.register),
    (X.prototype.register_once = X.prototype.register_once),
    (X.prototype.unregister = X.prototype.unregister),
    (X.prototype.identify = X.prototype.identify),
    (X.prototype.alias = X.prototype.alias),
    (X.prototype.name_tag = X.prototype.name_tag),
    (X.prototype.set_config = X.prototype.set_config),
    (X.prototype.get_config = X.prototype.get_config),
    (X.prototype.get_property = X.prototype.get_property),
    (X.prototype.get_distinct_id = X.prototype.get_distinct_id),
    (X.prototype.toString = X.prototype.toString),
    (X.prototype.opt_out_tracking = X.prototype.opt_out_tracking),
    (X.prototype.opt_in_tracking = X.prototype.opt_in_tracking),
    (X.prototype.has_opted_out_tracking = X.prototype.has_opted_out_tracking),
    (X.prototype.has_opted_in_tracking = X.prototype.has_opted_in_tracking),
    (X.prototype.clear_opt_in_out_tracking =
      X.prototype.clear_opt_in_out_tracking),
    (X.prototype.get_group = X.prototype.get_group),
    (X.prototype.set_group = X.prototype.set_group),
    (X.prototype.add_group = X.prototype.add_group),
    (X.prototype.remove_group = X.prototype.remove_group),
    (X.prototype.track_with_groups = X.prototype.track_with_groups),
    (X.prototype.start_batch_senders = X.prototype.start_batch_senders),
    (X.prototype.stop_batch_senders = X.prototype.stop_batch_senders),
    (X.prototype.start_session_recording = X.prototype.start_session_recording),
    (X.prototype.stop_session_recording = X.prototype.stop_session_recording),
    (X.prototype.get_session_recording_properties =
      X.prototype.get_session_recording_properties),
    (X.prototype.DEFAULT_API_ROUTES = pt),
    (ge.prototype.properties = ge.prototype.properties),
    (ge.prototype.update_search_keyword = ge.prototype.update_search_keyword),
    (ge.prototype.update_referrer_info = ge.prototype.update_referrer_info),
    (ge.prototype.get_cross_subdomain = ge.prototype.get_cross_subdomain),
    (ge.prototype.clear = ge.prototype.clear);
  var $t = {},
    N0 = function () {
      o.each($t, function (a, u) {
        u !== We && (Pe[u] = a);
      }),
        (Pe._ = o);
    },
    I0 = function () {
      Pe.init = function (a, u, c) {
        if (c)
          return (
            Pe[c] || ((Pe[c] = $t[c] = an(a, u, c)), Pe[c]._loaded()), Pe[c]
          );
        var h = Pe;
        $t[We]
          ? (h = $t[We])
          : a && ((h = an(a, u, We)), h._loaded(), ($t[We] = h)),
          (Pe = h),
          lt === fr && (t[We] = Pe),
          N0();
      };
    },
    D0 = function () {
      function a() {
        a.done ||
          ((a.done = !0),
          (Lr = !0),
          (vr = !1),
          o.each($t, function (h) {
            h._dom_loaded();
          }));
      }
      function u() {
        try {
          v.documentElement.doScroll("left");
        } catch {
          setTimeout(u, 1);
          return;
        }
        a();
      }
      if (v.addEventListener)
        v.readyState === "complete"
          ? a()
          : v.addEventListener("DOMContentLoaded", a, !1);
      else if (v.attachEvent) {
        v.attachEvent("onreadystatechange", a);
        var c = !1;
        try {
          c = t.frameElement === null;
        } catch {}
        v.documentElement.doScroll && c && u();
      }
      o.register_event(t, "load", a, !0);
    };
  function O0() {
    return (lt = Ut), (Pe = new X()), I0(), Pe.init(), D0(), Pe;
  }
  var P0 = O0();
  return (un = P0), un;
}
var X0 = G0();
const cf = yc(X0);
function pf(...r) {
  (window.dataLayer = window.dataLayer || []), window.dataLayer.push(r);
}
class j0 {
  constructor() {
    ze(this, "isSetup", !1);
  }
  setup() {
    pf("config", "G-V1QJVQMYF1", { send_page_view: !1 }),
      cf.init("2e284873b7269f13b850ac994abfd848", { debug: "false" }),
      delete window.tv.analytics,
      (window.tv.analytics = this),
      (this.isSetup = !0);
  }
  ga(t, n) {
    this.isSetup || this.setup(), pf("event", t, n);
  }
  mp(t, n) {
    this.isSetup || this.setup(), cf.track(t, n);
  }
  pageView(t) {
    this.ga("page_view", {
      page_title: t,
      page_location: `https://jackbox.tv/${t}`,
    });
  }
  gameStarted(t, n) {
    const i = { tag: t };
    n.isUGC !== void 0 && (i.is_ugc = n.isUGC),
      n.isSequel !== void 0 && (i.is_sequel = n.isSequel),
      n.locale !== void 0 && (i.locale = n.locale),
      n.mode !== void 0 && (i.mode = n.mode),
      n.numberOfPlayer !== void 0 && (i.number_of_players = n.numberOfPlayer),
      this.ga("game_start", i);
  }
  gameJoined(t, n) {
    this.mp("Game Joined", { tag: t, ...n });
  }
  bannerClick(t, n) {
    this.ga("banner_click", { url: t, location: n });
  }
  externalLinkClick(t, n) {
    this.ga("external_link_click", { url: t, location: n });
  }
  moderatorConnected(t) {
    this.ga("moderator_connected", { tag: t }),
      this.mp("Moderator Connected", { tag: t });
  }
  itemModerated(t, n) {
    this.ga("item_moderated", { tag: t, was_rejected: n }),
      this.mp("Moderator Item", { tag: t, wasRejected: n });
  }
  playerKicked(t, n) {
    this.ga("player_kicked", { tag: t, is_lobby: n }),
      this.mp("Moderator Kick", { tag: t, isLobby: n });
  }
  galleryImpression(t, n) {
    this.ga("gallery_impression", { category_id: t, location: n });
  }
  galleryClick(t, n) {
    this.ga("gallery_click", { category_id: t, location: n }),
      this.mp("Gallery Click", { categoryId: t, location: n });
  }
  galleryAddToCart(t, n) {
    this.mp("Gallery Add To Cart", { categoryId: t, ...n });
  }
  galleryCheckout(t, n) {
    this.mp("Gallery Checkout", { categoryId: t, ...n });
  }
  galleryShare(t, n) {
    this.mp("Gallery Share", { categoryId: t, ...n });
  }
  galleryWatch(t, n) {
    this.mp("Gallery Watch", { categoryId: t, ...n });
  }
  galleryDownload(t, n) {
    this.mp("Gallery Download", { categoryId: t, ...n });
  }
}
const $0 = [
  {
    name: "Prototype",
    tag: "prototype",
    wrapper: "vue",
    isPublic: !0,
    directory: "internal/prototype",
  },
  {
    name: "EcastTestClient",
    tag: "ecast-test-client",
    wrapper: "marionette",
    isPublic: !0,
    directory: "internal/ecast-test-client",
  },
  {
    name: "Quiplash 3",
    tag: "quiplash3-tjsp",
    wrapper: "vue",
    isPublic: !0,
    directory: "tjsp/quiplash3",
    features: ["moderation"],
    categoryId: "quiplash3Game",
  },
  {
    name: "Tee K.O.",
    tag: "awshirt-tjsp",
    wrapper: "vue",
    isPublic: !0,
    directory: "tjsp/awshirt",
    features: ["moderation"],
    shopItems: ["shirts"],
    categoryId: "TeeKOGame",
    galleryId: "teeko",
  },
  {
    name: "Trivia Murder Party 2",
    tag: "triviadeath2-tjsp",
    wrapper: "vue",
    isPublic: !0,
    directory: "tjsp/triviadeath2",
    categoryId: "TriviaMurderParty2Game",
  },
  {
    name: "Quiplash 2 InterLASHional",
    tag: "quiplash2-international",
    wrapper: "marionette",
    isPublic: !0,
    directory: "standalone/quiplash2-international",
    categoryId: "quiplash2-internationalGame",
  },
  {
    name: "Guesspionage Crowdplay",
    tag: "guesspionage-crowdplay",
    wrapper: "marionette",
    isPublic: !0,
    directory: "standalone/guesspionage-crowdplay",
  },
  {
    name: "Drawful 2",
    tag: "drawful2",
    wrapper: "marionette",
    isPublic: !0,
    directory: "standalone/drawful2",
    categoryId: "DrawfulGame",
    shopItems: ["shirts"],
  },
  {
    name: "Drawful 2",
    tag: "drawful2international",
    wrapper: "marionette",
    isPublic: !0,
    directory: "standalone/drawful2-international",
    features: ["moderation"],
  },
  {
    name: "Acquisitions, Inc.",
    tag: "acquisitions-inc",
    wrapper: "marionette",
    isPublic: !0,
    directory: "standalone/acquisitions-inc",
  },
  {
    name: "The Jackbox Survey Scramble",
    tag: "bigsurvey",
    wrapper: "vue",
    isPublic: !0,
    directory: "standalone/bigsurvey",
    features: ["moderation", "kicking", "dropInDropOut"],
    categoryId: "BigSurveyGame",
    galleryId: "survey-scramble",
  },
  {
    name: "You Don't Know Jack 2015",
    tag: "ydkj2015",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp1/ydkj2015",
  },
  {
    name: "Drawful",
    tag: "drawful",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp1/drawful",
  },
  {
    name: "Word Spud",
    tag: "wordspud",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp1/wordspud",
  },
  {
    name: "Lie Swatter",
    tag: "lieswatter",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp1/lieswatter",
  },
  {
    name: "Fibbage",
    tag: "fibbage",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp1/fibbage",
  },
  {
    name: "Fibbage 2",
    tag: "fibbage2",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp2/fibbage2",
  },
  {
    name: "Earwax",
    tag: "earwax",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp2/earwax",
  },
  {
    name: "Bidiots",
    tag: "auction",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp2/auction",
  },
  {
    name: "Bomb Corp",
    tag: "bombintern",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp2/bombintern",
  },
  {
    name: "Quiplash",
    tag: "quiplash",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp2/quiplash",
  },
  {
    name: "Fakin' It",
    tag: "fakinit",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp3/fakinit",
  },
  {
    name: "Tee K.O.",
    tag: "awshirt",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp3/awshirt",
    shopItems: ["shirts"],
    galleryId: "teeko",
  },
  {
    name: "Quiplash 2",
    tag: "quiplash2",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp3/quiplash2",
    categoryId: "Quiplash2Game",
  },
  {
    name: "Trivia Murder Party",
    tag: "triviadeath",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp3/triviadeath",
    categoryId: "TriviaDeathResults",
  },
  {
    name: "Guesspionage",
    tag: "pollposition",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp3/pollposition",
  },
  {
    name: "Fibbage 3",
    tag: "fibbage3",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp4/fibbage3",
  },
  {
    name: "Survive the Internet",
    tag: "survivetheinternet",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp4/survivetheinternet",
    categoryId: "STIGame",
  },
  {
    name: "Monster Seeking Monster",
    tag: "monstermingle",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp4/monstermingle",
    categoryId: "MonsterMingleGame",
  },
  {
    name: "Bracketeering",
    tag: "bracketeering",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp4/bracketeering",
    categoryId: "BRKGame",
  },
  {
    name: "Civic Doodle",
    tag: "overdrawn",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp4/overdrawn",
    categoryId: "OverdrawnGame",
    shopItems: ["shirts"],
  },
  {
    name: "You Don't Know Jack: Full Stream",
    tag: "ydkj2018",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp5/ydkj2018",
    categoryId: "YDKJ2018Game",
  },
  {
    name: "Split the Room",
    tag: "splittheroom",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp5/splittheroom",
    categoryId: "SplitTheRoomGame",
  },
  {
    name: "Mad Verse City",
    tag: "rapbattle",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp5/rapbattle",
    categoryId: "RapBattleGame",
  },
  {
    name: "Zeeple Dome",
    tag: "slingshoot",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp5/slingshoot",
    categoryId: "SlingShootGame",
  },
  {
    name: "Patently Stupid",
    tag: "patentlystupid",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp5/patentlystupid",
    categoryId: "PatentlyStupidGame",
    shopItems: ["mugs"],
  },
  {
    name: "Trivia Murder Party 2",
    tag: "triviadeath2",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp6/triviadeath2",
    categoryId: "TriviaDeath2Game",
  },
  {
    name: "Role Models",
    tag: "rolemodels",
    wrapper: "marionette",
    isPublic: !0,
    features: ["camera"],
    directory: "pp6/rolemodels",
    categoryId: "RoleModelsGame",
    shopItems: ["shirts"],
  },
  {
    name: "Joke Boat",
    tag: "jokeboat",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp6/jokeboat",
    categoryId: "JokeboatGame",
  },
  {
    name: "Dictionarium",
    tag: "ridictionary",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp6/ridictionary",
    categoryId: "RidictionaryGame",
  },
  {
    name: "Push the Button",
    tag: "pushthebutton",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp6/pushthebutton",
    categoryId: "PushTheButtonGame",
  },
  {
    name: "Talking Points",
    tag: "jackbox-talks",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp7/jackboxtalks",
    features: ["camera", "moderation"],
    categoryId: "JackboxTalksGame",
  },
  {
    name: "Quiplash 3",
    tag: "quiplash3",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp7/quiplash3",
    features: ["moderation"],
    categoryId: "quiplash3Game",
  },
  {
    name: "The Devils and the Details",
    tag: "everyday",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp7/everyday",
    categoryId: "EverydayGame",
    shopItems: ["mugs"],
  },
  {
    name: "Champ'd Up",
    tag: "worldchamps",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp7/worldchamps",
    features: ["moderation"],
    categoryId: "WorldChampionsGame",
    shopItems: ["cards"],
  },
  {
    name: "Blather 'Round",
    tag: "blanky-blank",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp7/blanky-blank",
    categoryId: "BlankyBlankGame",
  },
  {
    name: "Job Job",
    tag: "apply-yourself",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp8/apply-yourself",
    categoryId: "JobGameGame",
    features: ["moderation", "previews"],
  },
  {
    name: "Drawful Animate",
    tag: "drawful-animate",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp8/drawful-animate",
    categoryId: "DrawfulAnimateGame",
    features: ["moderation"],
  },
  {
    name: "The Wheel of Enormous Proportions",
    tag: "the-wheel",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp8/the-wheel",
    categoryId: "TheWheelGame",
  },
  {
    name: "The Poll Mine",
    tag: "survey-bomb",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp8/survey-bomb",
    categoryId: "SurveyBombGame",
  },
  {
    name: "Weapons Drawn",
    tag: "murder-detectives",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp8/murder-detectives",
    categoryId: "MurderDetectivesGame",
    features: ["moderation"],
  },
  {
    name: "Fibbage 4",
    tag: "fourbage",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp9/fourbage",
    features: ["moderation", "kicking"],
    categoryId: "Fibbage4Game",
  },
  {
    name: "Roomerang",
    tag: "htmf",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp9/htmf",
    features: ["moderation", "kicking"],
    categoryId: "MakeFriendsGame",
  },
  {
    name: "Junktopia",
    tag: "antique-freak",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp9/antique-freak",
    features: ["moderation", "kicking"],
    categoryId: "AntiqueGameGame",
  },
  {
    name: "Nonsensory",
    tag: "range-game",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp9/range-game",
    features: ["moderation", "kicking"],
    categoryId: "RangeGameGame",
  },
  {
    name: "Quixort",
    tag: "lineup",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp9/lineup",
    features: ["kicking", "previews"],
    categoryId: "LineupGame",
  },
  {
    name: "Tee K.O. 2",
    tag: "awshirt2",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp10/awshirt2",
    features: ["moderation", "kicking"],
    shopItems: ["shirts"],
    categoryId: "TeeKO2Game",
    galleryId: "teeko2",
  },
  {
    name: "Dodo Re Mi",
    tag: "nopus-opus",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp10/nopus-opus",
    features: ["dropInDropOut", "kicking"],
    categoryId: "NopusOpusGame",
    galleryId: "dodo-re-mi",
  },
  {
    name: "FixyText",
    tag: "risky-text",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp10/risky-text",
    features: ["moderation", "kicking"],
    categoryId: "FixyTextGame",
    galleryId: "fixytext",
  },
  {
    name: "Timejinx",
    tag: "time-trivia",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp10/time-trivia",
    features: ["kicking"],
    categoryId: "TimeTriviaGame",
    galleryId: "timejinx",
  },
  {
    name: "Hypnotorious",
    tag: "us-them",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp10/us-them",
    features: ["moderation", "kicking"],
    categoryId: "StrangersGame",
    galleryId: "hypnotorious",
  },
  {
    name: "Fakin' It All Night Long",
    tag: "fakinit2",
    wrapper: "vue",
    isPublic: !0,
    directory: "ppad/fakinit2",
    features: ["moderation", "kicking"],
    categoryId: "FakinIt2Game",
    galleryId: "fakin-it-all-night-long",
  },
  {
    name: "Dirty Drawful",
    tag: "drawful3",
    wrapper: "vue",
    isPublic: !0,
    directory: "ppad/drawful3",
    features: ["moderation", "kicking"],
    categoryId: "Drawful3Game",
    galleryId: "dirty-drawful",
  },
  {
    name: "Let Me Finish",
    tag: "captcha",
    wrapper: "vue",
    isPublic: !0,
    directory: "ppad/captcha",
    features: ["moderation", "kicking"],
    categoryId: "CAPTCHAGame",
    galleryId: "let-me-finish",
  },
  {
    name: "DOOMINATE",
    tag: "you-ruined-it",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp11/you-ruined-it",
    features: ["moderation", "kicking"],
    categoryId: "YouRuinedItGame",
    galleryId: "doominate",
  },
  {
    name: "Legends of Trivia",
    tag: "trivia-rpg",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp11/trivia-rpg",
    features: ["kicking"],
    galleryId: "legends-of-trivia",
  },
  {
    name: "Hear Say",
    tag: "mic-game",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp11/sfx",
    features: ["moderation", "kicking", "microphone"],
    categoryId: "MicGameGame",
    galleryId: "hear-say",
  },
  {
    name: "Cookie Haus",
    tag: "cookies",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp11/cookies",
    features: ["moderation", "kicking", "gpu"],
    categoryId: "CookiesGameGame",
    galleryId: "cookie-haus",
  },
  {
    name: "Suspectives",
    tag: "dirty-detectives",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp11/dirty-detectives",
    features: ["moderation", "kicking"],
    categoryId: "DirtyDetectivesGame",
    galleryId: "suspectives",
  },
];
let F0 = [];
const gc = [...$0, ...F0],
  Ef = (r) => {
    var n;
    return (
      ((n = window == null ? void 0 : window.tv) == null ? void 0 : n.games) ||
      gc
    ).find((i) => i.tag === r || i.galleryId === r || i.categoryId === r);
  };
var on, hf;
function H0() {
  if (hf) return on;
  hf = 1;
  function r() {
    (this.__data__ = []), (this.size = 0);
  }
  return (on = r), on;
}
var ln, xf;
function $r() {
  if (xf) return ln;
  xf = 1;
  function r(t, n) {
    return t === n || (t !== t && n !== n);
  }
  return (ln = r), ln;
}
var cn, _f;
function Fr() {
  if (_f) return cn;
  _f = 1;
  var r = $r();
  function t(n, i) {
    for (var s = n.length; s--; ) if (r(n[s][0], i)) return s;
    return -1;
  }
  return (cn = t), cn;
}
var pn, Rf;
function W0() {
  if (Rf) return pn;
  Rf = 1;
  var r = Fr(),
    t = Array.prototype,
    n = t.splice;
  function i(s) {
    var f = this.__data__,
      e = r(f, s);
    if (e < 0) return !1;
    var l = f.length - 1;
    return e == l ? f.pop() : n.call(f, e, 1), --this.size, !0;
  }
  return (pn = i), pn;
}
var En, yf;
function z0() {
  if (yf) return En;
  yf = 1;
  var r = Fr();
  function t(n) {
    var i = this.__data__,
      s = r(i, n);
    return s < 0 ? void 0 : i[s][1];
  }
  return (En = t), En;
}
var hn, gf;
function J0() {
  if (gf) return hn;
  gf = 1;
  var r = Fr();
  function t(n) {
    return r(this.__data__, n) > -1;
  }
  return (hn = t), hn;
}
var xn, bf;
function Y0() {
  if (bf) return xn;
  bf = 1;
  var r = Fr();
  function t(n, i) {
    var s = this.__data__,
      f = r(s, n);
    return f < 0 ? (++this.size, s.push([n, i])) : (s[f][1] = i), this;
  }
  return (xn = t), xn;
}
var _n, mf;
function Hr() {
  if (mf) return _n;
  mf = 1;
  var r = H0(),
    t = W0(),
    n = z0(),
    i = J0(),
    s = Y0();
  function f(e) {
    var l = -1,
      p = e == null ? 0 : e.length;
    for (this.clear(); ++l < p; ) {
      var x = e[l];
      this.set(x[0], x[1]);
    }
  }
  return (
    (f.prototype.clear = r),
    (f.prototype.delete = t),
    (f.prototype.get = n),
    (f.prototype.has = i),
    (f.prototype.set = s),
    (_n = f),
    _n
  );
}
var Rn, Tf;
function Q0() {
  if (Tf) return Rn;
  Tf = 1;
  var r = Hr();
  function t() {
    (this.__data__ = new r()), (this.size = 0);
  }
  return (Rn = t), Rn;
}
var yn, Sf;
function Z0() {
  if (Sf) return yn;
  Sf = 1;
  function r(t) {
    var n = this.__data__,
      i = n.delete(t);
    return (this.size = n.size), i;
  }
  return (yn = r), yn;
}
var gn, df;
function ep() {
  if (df) return gn;
  df = 1;
  function r(t) {
    return this.__data__.get(t);
  }
  return (gn = r), gn;
}
var bn, vf;
function tp() {
  if (vf) return bn;
  vf = 1;
  function r(t) {
    return this.__data__.has(t);
  }
  return (bn = r), bn;
}
var mn, Lf;
function bc() {
  if (Lf) return mn;
  Lf = 1;
  var r = typeof Xe == "object" && Xe && Xe.Object === Object && Xe;
  return (mn = r), mn;
}
var Tn, Af;
function tr() {
  if (Af) return Tn;
  Af = 1;
  var r = bc(),
    t = typeof self == "object" && self && self.Object === Object && self,
    n = r || t || Function("return this")();
  return (Tn = n), Tn;
}
var Sn, Cf;
function mc() {
  if (Cf) return Sn;
  Cf = 1;
  var r = tr(),
    t = r.Symbol;
  return (Sn = t), Sn;
}
var dn, Bf;
function rp() {
  if (Bf) return dn;
  Bf = 1;
  var r = mc(),
    t = Object.prototype,
    n = t.hasOwnProperty,
    i = t.toString,
    s = r ? r.toStringTag : void 0;
  function f(e) {
    var l = n.call(e, s),
      p = e[s];
    try {
      e[s] = void 0;
      var x = !0;
    } catch {}
    var R = i.call(e);
    return x && (l ? (e[s] = p) : delete e[s]), R;
  }
  return (dn = f), dn;
}
var vn, Uf;
function np() {
  if (Uf) return vn;
  Uf = 1;
  var r = Object.prototype,
    t = r.toString;
  function n(i) {
    return t.call(i);
  }
  return (vn = n), vn;
}
var Ln, Kf;
function Wr() {
  if (Kf) return Ln;
  Kf = 1;
  var r = mc(),
    t = rp(),
    n = np(),
    i = "[object Null]",
    s = "[object Undefined]",
    f = r ? r.toStringTag : void 0;
  function e(l) {
    return l == null
      ? l === void 0
        ? s
        : i
      : f && f in Object(l)
      ? t(l)
      : n(l);
  }
  return (Ln = e), Ln;
}
var An, wf;
function qt() {
  if (wf) return An;
  wf = 1;
  function r(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return (An = r), An;
}
var Cn, Nf;
function Na() {
  if (Nf) return Cn;
  Nf = 1;
  var r = Wr(),
    t = qt(),
    n = "[object AsyncFunction]",
    i = "[object Function]",
    s = "[object GeneratorFunction]",
    f = "[object Proxy]";
  function e(l) {
    if (!t(l)) return !1;
    var p = r(l);
    return p == i || p == s || p == n || p == f;
  }
  return (Cn = e), Cn;
}
var Bn, If;
function ip() {
  if (If) return Bn;
  If = 1;
  var r = tr(),
    t = r["__core-js_shared__"];
  return (Bn = t), Bn;
}
var Un, Df;
function sp() {
  if (Df) return Un;
  Df = 1;
  var r = ip(),
    t = (function () {
      var i = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || "");
      return i ? "Symbol(src)_1." + i : "";
    })();
  function n(i) {
    return !!t && t in i;
  }
  return (Un = n), Un;
}
var Kn, Of;
function ap() {
  if (Of) return Kn;
  Of = 1;
  var r = Function.prototype,
    t = r.toString;
  function n(i) {
    if (i != null) {
      try {
        return t.call(i);
      } catch {}
      try {
        return i + "";
      } catch {}
    }
    return "";
  }
  return (Kn = n), Kn;
}
var wn, Pf;
function fp() {
  if (Pf) return wn;
  Pf = 1;
  var r = Na(),
    t = sp(),
    n = qt(),
    i = ap(),
    s = /[\\^$.*+?()[\]{}|]/g,
    f = /^\[object .+?Constructor\]$/,
    e = Function.prototype,
    l = Object.prototype,
    p = e.toString,
    x = l.hasOwnProperty,
    R = RegExp(
      "^" +
        p
          .call(x)
          .replace(s, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    );
  function S(v) {
    if (!n(v) || t(v)) return !1;
    var d = r(v) ? R : f;
    return d.test(i(v));
  }
  return (wn = S), wn;
}
var Nn, kf;
function up() {
  if (kf) return Nn;
  kf = 1;
  function r(t, n) {
    return t == null ? void 0 : t[n];
  }
  return (Nn = r), Nn;
}
var In, Vf;
function Ia() {
  if (Vf) return In;
  Vf = 1;
  var r = fp(),
    t = up();
  function n(i, s) {
    var f = t(i, s);
    return r(f) ? f : void 0;
  }
  return (In = n), In;
}
var Dn, Mf;
function Tc() {
  if (Mf) return Dn;
  Mf = 1;
  var r = Ia(),
    t = tr(),
    n = r(t, "Map");
  return (Dn = n), Dn;
}
var On, qf;
function zr() {
  if (qf) return On;
  qf = 1;
  var r = Ia(),
    t = r(Object, "create");
  return (On = t), On;
}
var Pn, Gf;
function op() {
  if (Gf) return Pn;
  Gf = 1;
  var r = zr();
  function t() {
    (this.__data__ = r ? r(null) : {}), (this.size = 0);
  }
  return (Pn = t), Pn;
}
var kn, Xf;
function lp() {
  if (Xf) return kn;
  Xf = 1;
  function r(t) {
    var n = this.has(t) && delete this.__data__[t];
    return (this.size -= n ? 1 : 0), n;
  }
  return (kn = r), kn;
}
var Vn, jf;
function cp() {
  if (jf) return Vn;
  jf = 1;
  var r = zr(),
    t = "__lodash_hash_undefined__",
    n = Object.prototype,
    i = n.hasOwnProperty;
  function s(f) {
    var e = this.__data__;
    if (r) {
      var l = e[f];
      return l === t ? void 0 : l;
    }
    return i.call(e, f) ? e[f] : void 0;
  }
  return (Vn = s), Vn;
}
var Mn, $f;
function pp() {
  if ($f) return Mn;
  $f = 1;
  var r = zr(),
    t = Object.prototype,
    n = t.hasOwnProperty;
  function i(s) {
    var f = this.__data__;
    return r ? f[s] !== void 0 : n.call(f, s);
  }
  return (Mn = i), Mn;
}
var qn, Ff;
function Ep() {
  if (Ff) return qn;
  Ff = 1;
  var r = zr(),
    t = "__lodash_hash_undefined__";
  function n(i, s) {
    var f = this.__data__;
    return (
      (this.size += this.has(i) ? 0 : 1),
      (f[i] = r && s === void 0 ? t : s),
      this
    );
  }
  return (qn = n), qn;
}
var Gn, Hf;
function hp() {
  if (Hf) return Gn;
  Hf = 1;
  var r = op(),
    t = lp(),
    n = cp(),
    i = pp(),
    s = Ep();
  function f(e) {
    var l = -1,
      p = e == null ? 0 : e.length;
    for (this.clear(); ++l < p; ) {
      var x = e[l];
      this.set(x[0], x[1]);
    }
  }
  return (
    (f.prototype.clear = r),
    (f.prototype.delete = t),
    (f.prototype.get = n),
    (f.prototype.has = i),
    (f.prototype.set = s),
    (Gn = f),
    Gn
  );
}
var Xn, Wf;
function xp() {
  if (Wf) return Xn;
  Wf = 1;
  var r = hp(),
    t = Hr(),
    n = Tc();
  function i() {
    (this.size = 0),
      (this.__data__ = { hash: new r(), map: new (n || t)(), string: new r() });
  }
  return (Xn = i), Xn;
}
var jn, zf;
function _p() {
  if (zf) return jn;
  zf = 1;
  function r(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean"
      ? t !== "__proto__"
      : t === null;
  }
  return (jn = r), jn;
}
var $n, Jf;
function Jr() {
  if (Jf) return $n;
  Jf = 1;
  var r = _p();
  function t(n, i) {
    var s = n.__data__;
    return r(i) ? s[typeof i == "string" ? "string" : "hash"] : s.map;
  }
  return ($n = t), $n;
}
var Fn, Yf;
function Rp() {
  if (Yf) return Fn;
  Yf = 1;
  var r = Jr();
  function t(n) {
    var i = r(this, n).delete(n);
    return (this.size -= i ? 1 : 0), i;
  }
  return (Fn = t), Fn;
}
var Hn, Qf;
function yp() {
  if (Qf) return Hn;
  Qf = 1;
  var r = Jr();
  function t(n) {
    return r(this, n).get(n);
  }
  return (Hn = t), Hn;
}
var Wn, Zf;
function gp() {
  if (Zf) return Wn;
  Zf = 1;
  var r = Jr();
  function t(n) {
    return r(this, n).has(n);
  }
  return (Wn = t), Wn;
}
var zn, eu;
function bp() {
  if (eu) return zn;
  eu = 1;
  var r = Jr();
  function t(n, i) {
    var s = r(this, n),
      f = s.size;
    return s.set(n, i), (this.size += s.size == f ? 0 : 1), this;
  }
  return (zn = t), zn;
}
var Jn, tu;
function mp() {
  if (tu) return Jn;
  tu = 1;
  var r = xp(),
    t = Rp(),
    n = yp(),
    i = gp(),
    s = bp();
  function f(e) {
    var l = -1,
      p = e == null ? 0 : e.length;
    for (this.clear(); ++l < p; ) {
      var x = e[l];
      this.set(x[0], x[1]);
    }
  }
  return (
    (f.prototype.clear = r),
    (f.prototype.delete = t),
    (f.prototype.get = n),
    (f.prototype.has = i),
    (f.prototype.set = s),
    (Jn = f),
    Jn
  );
}
var Yn, ru;
function Tp() {
  if (ru) return Yn;
  ru = 1;
  var r = Hr(),
    t = Tc(),
    n = mp(),
    i = 200;
  function s(f, e) {
    var l = this.__data__;
    if (l instanceof r) {
      var p = l.__data__;
      if (!t || p.length < i - 1)
        return p.push([f, e]), (this.size = ++l.size), this;
      l = this.__data__ = new n(p);
    }
    return l.set(f, e), (this.size = l.size), this;
  }
  return (Yn = s), Yn;
}
var Qn, nu;
function Sp() {
  if (nu) return Qn;
  nu = 1;
  var r = Hr(),
    t = Q0(),
    n = Z0(),
    i = ep(),
    s = tp(),
    f = Tp();
  function e(l) {
    var p = (this.__data__ = new r(l));
    this.size = p.size;
  }
  return (
    (e.prototype.clear = t),
    (e.prototype.delete = n),
    (e.prototype.get = i),
    (e.prototype.has = s),
    (e.prototype.set = f),
    (Qn = e),
    Qn
  );
}
var Zn, iu;
function Sc() {
  if (iu) return Zn;
  iu = 1;
  var r = Ia(),
    t = (function () {
      try {
        var n = r(Object, "defineProperty");
        return n({}, "", {}), n;
      } catch {}
    })();
  return (Zn = t), Zn;
}
var ei, su;
function Da() {
  if (su) return ei;
  su = 1;
  var r = Sc();
  function t(n, i, s) {
    i == "__proto__" && r
      ? r(n, i, { configurable: !0, enumerable: !0, value: s, writable: !0 })
      : (n[i] = s);
  }
  return (ei = t), ei;
}
var ti, au;
function dc() {
  if (au) return ti;
  au = 1;
  var r = Da(),
    t = $r();
  function n(i, s, f) {
    ((f !== void 0 && !t(i[s], f)) || (f === void 0 && !(s in i))) &&
      r(i, s, f);
  }
  return (ti = n), ti;
}
var ri, fu;
function dp() {
  if (fu) return ri;
  fu = 1;
  function r(t) {
    return function (n, i, s) {
      for (var f = -1, e = Object(n), l = s(n), p = l.length; p--; ) {
        var x = l[t ? p : ++f];
        if (i(e[x], x, e) === !1) break;
      }
      return n;
    };
  }
  return (ri = r), ri;
}
var ni, uu;
function vp() {
  if (uu) return ni;
  uu = 1;
  var r = dp(),
    t = r();
  return (ni = t), ni;
}
var pr = { exports: {} };
pr.exports;
var ou;
function Lp() {
  return (
    ou ||
      ((ou = 1),
      (function (r, t) {
        var n = tr(),
          i = t && !t.nodeType && t,
          s = i && !0 && r && !r.nodeType && r,
          f = s && s.exports === i,
          e = f ? n.Buffer : void 0,
          l = e ? e.allocUnsafe : void 0;
        function p(x, R) {
          if (R) return x.slice();
          var S = x.length,
            v = l ? l(S) : new x.constructor(S);
          return x.copy(v), v;
        }
        r.exports = p;
      })(pr, pr.exports)),
    pr.exports
  );
}
var ii, lu;
function Ap() {
  if (lu) return ii;
  lu = 1;
  var r = tr(),
    t = r.Uint8Array;
  return (ii = t), ii;
}
var si, cu;
function Cp() {
  if (cu) return si;
  cu = 1;
  var r = Ap();
  function t(n) {
    var i = new n.constructor(n.byteLength);
    return new r(i).set(new r(n)), i;
  }
  return (si = t), si;
}
var ai, pu;
function Bp() {
  if (pu) return ai;
  pu = 1;
  var r = Cp();
  function t(n, i) {
    var s = i ? r(n.buffer) : n.buffer;
    return new n.constructor(s, n.byteOffset, n.length);
  }
  return (ai = t), ai;
}
var fi, Eu;
function Up() {
  if (Eu) return fi;
  Eu = 1;
  function r(t, n) {
    var i = -1,
      s = t.length;
    for (n || (n = Array(s)); ++i < s; ) n[i] = t[i];
    return n;
  }
  return (fi = r), fi;
}
var ui, hu;
function Kp() {
  if (hu) return ui;
  hu = 1;
  var r = qt(),
    t = Object.create,
    n = (function () {
      function i() {}
      return function (s) {
        if (!r(s)) return {};
        if (t) return t(s);
        i.prototype = s;
        var f = new i();
        return (i.prototype = void 0), f;
      };
    })();
  return (ui = n), ui;
}
var oi, xu;
function wp() {
  if (xu) return oi;
  xu = 1;
  function r(t, n) {
    return function (i) {
      return t(n(i));
    };
  }
  return (oi = r), oi;
}
var li, _u;
function vc() {
  if (_u) return li;
  _u = 1;
  var r = wp(),
    t = r(Object.getPrototypeOf, Object);
  return (li = t), li;
}
var ci, Ru;
function Lc() {
  if (Ru) return ci;
  Ru = 1;
  var r = Object.prototype;
  function t(n) {
    var i = n && n.constructor,
      s = (typeof i == "function" && i.prototype) || r;
    return n === s;
  }
  return (ci = t), ci;
}
var pi, yu;
function Np() {
  if (yu) return pi;
  yu = 1;
  var r = Kp(),
    t = vc(),
    n = Lc();
  function i(s) {
    return typeof s.constructor == "function" && !n(s) ? r(t(s)) : {};
  }
  return (pi = i), pi;
}
var Ei, gu;
function yr() {
  if (gu) return Ei;
  gu = 1;
  function r(t) {
    return t != null && typeof t == "object";
  }
  return (Ei = r), Ei;
}
var hi, bu;
function Ip() {
  if (bu) return hi;
  bu = 1;
  var r = Wr(),
    t = yr(),
    n = "[object Arguments]";
  function i(s) {
    return t(s) && r(s) == n;
  }
  return (hi = i), hi;
}
var xi, mu;
function Ac() {
  if (mu) return xi;
  mu = 1;
  var r = Ip(),
    t = yr(),
    n = Object.prototype,
    i = n.hasOwnProperty,
    s = n.propertyIsEnumerable,
    f = r(
      (function () {
        return arguments;
      })()
    )
      ? r
      : function (e) {
          return t(e) && i.call(e, "callee") && !s.call(e, "callee");
        };
  return (xi = f), xi;
}
var _i, Tu;
function Cc() {
  if (Tu) return _i;
  Tu = 1;
  var r = Array.isArray;
  return (_i = r), _i;
}
var Ri, Su;
function Bc() {
  if (Su) return Ri;
  Su = 1;
  var r = 9007199254740991;
  function t(n) {
    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= r;
  }
  return (Ri = t), Ri;
}
var yi, du;
function Oa() {
  if (du) return yi;
  du = 1;
  var r = Na(),
    t = Bc();
  function n(i) {
    return i != null && t(i.length) && !r(i);
  }
  return (yi = n), yi;
}
var gi, vu;
function Dp() {
  if (vu) return gi;
  vu = 1;
  var r = Oa(),
    t = yr();
  function n(i) {
    return t(i) && r(i);
  }
  return (gi = n), gi;
}
var Er = { exports: {} },
  bi,
  Lu;
function Op() {
  if (Lu) return bi;
  Lu = 1;
  function r() {
    return !1;
  }
  return (bi = r), bi;
}
Er.exports;
var Au;
function Uc() {
  return (
    Au ||
      ((Au = 1),
      (function (r, t) {
        var n = tr(),
          i = Op(),
          s = t && !t.nodeType && t,
          f = s && !0 && r && !r.nodeType && r,
          e = f && f.exports === s,
          l = e ? n.Buffer : void 0,
          p = l ? l.isBuffer : void 0,
          x = p || i;
        r.exports = x;
      })(Er, Er.exports)),
    Er.exports
  );
}
var mi, Cu;
function Pp() {
  if (Cu) return mi;
  Cu = 1;
  var r = Wr(),
    t = vc(),
    n = yr(),
    i = "[object Object]",
    s = Function.prototype,
    f = Object.prototype,
    e = s.toString,
    l = f.hasOwnProperty,
    p = e.call(Object);
  function x(R) {
    if (!n(R) || r(R) != i) return !1;
    var S = t(R);
    if (S === null) return !0;
    var v = l.call(S, "constructor") && S.constructor;
    return typeof v == "function" && v instanceof v && e.call(v) == p;
  }
  return (mi = x), mi;
}
var Ti, Bu;
function kp() {
  if (Bu) return Ti;
  Bu = 1;
  var r = Wr(),
    t = Bc(),
    n = yr(),
    i = "[object Arguments]",
    s = "[object Array]",
    f = "[object Boolean]",
    e = "[object Date]",
    l = "[object Error]",
    p = "[object Function]",
    x = "[object Map]",
    R = "[object Number]",
    S = "[object Object]",
    v = "[object RegExp]",
    d = "[object Set]",
    I = "[object String]",
    j = "[object WeakMap]",
    N = "[object ArrayBuffer]",
    k = "[object DataView]",
    M = "[object Float32Array]",
    ee = "[object Float64Array]",
    D = "[object Int8Array]",
    O = "[object Int16Array]",
    o = "[object Int32Array]",
    P = "[object Uint8Array]",
    E = "[object Uint8ClampedArray]",
    A = "[object Uint16Array]",
    B = "[object Uint32Array]",
    $ = {};
  ($[M] = $[ee] = $[D] = $[O] = $[o] = $[P] = $[E] = $[A] = $[B] = !0),
    ($[i] =
      $[s] =
      $[N] =
      $[f] =
      $[k] =
      $[e] =
      $[l] =
      $[p] =
      $[x] =
      $[R] =
      $[S] =
      $[v] =
      $[d] =
      $[I] =
      $[j] =
        !1);
  function W(fe) {
    return n(fe) && t(fe.length) && !!$[r(fe)];
  }
  return (Ti = W), Ti;
}
var Si, Uu;
function Vp() {
  if (Uu) return Si;
  Uu = 1;
  function r(t) {
    return function (n) {
      return t(n);
    };
  }
  return (Si = r), Si;
}
var hr = { exports: {} };
hr.exports;
var Ku;
function Mp() {
  return (
    Ku ||
      ((Ku = 1),
      (function (r, t) {
        var n = bc(),
          i = t && !t.nodeType && t,
          s = i && !0 && r && !r.nodeType && r,
          f = s && s.exports === i,
          e = f && n.process,
          l = (function () {
            try {
              var p = s && s.require && s.require("util").types;
              return p || (e && e.binding && e.binding("util"));
            } catch {}
          })();
        r.exports = l;
      })(hr, hr.exports)),
    hr.exports
  );
}
var di, wu;
function Kc() {
  if (wu) return di;
  wu = 1;
  var r = kp(),
    t = Vp(),
    n = Mp(),
    i = n && n.isTypedArray,
    s = i ? t(i) : r;
  return (di = s), di;
}
var vi, Nu;
function wc() {
  if (Nu) return vi;
  Nu = 1;
  function r(t, n) {
    if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
      return t[n];
  }
  return (vi = r), vi;
}
var Li, Iu;
function qp() {
  if (Iu) return Li;
  Iu = 1;
  var r = Da(),
    t = $r(),
    n = Object.prototype,
    i = n.hasOwnProperty;
  function s(f, e, l) {
    var p = f[e];
    (!(i.call(f, e) && t(p, l)) || (l === void 0 && !(e in f))) && r(f, e, l);
  }
  return (Li = s), Li;
}
var Ai, Du;
function Gp() {
  if (Du) return Ai;
  Du = 1;
  var r = qp(),
    t = Da();
  function n(i, s, f, e) {
    var l = !f;
    f || (f = {});
    for (var p = -1, x = s.length; ++p < x; ) {
      var R = s[p],
        S = e ? e(f[R], i[R], R, f, i) : void 0;
      S === void 0 && (S = i[R]), l ? t(f, R, S) : r(f, R, S);
    }
    return f;
  }
  return (Ai = n), Ai;
}
var Ci, Ou;
function Xp() {
  if (Ou) return Ci;
  Ou = 1;
  function r(t, n) {
    for (var i = -1, s = Array(t); ++i < t; ) s[i] = n(i);
    return s;
  }
  return (Ci = r), Ci;
}
var Bi, Pu;
function Nc() {
  if (Pu) return Bi;
  Pu = 1;
  var r = 9007199254740991,
    t = /^(?:0|[1-9]\d*)$/;
  function n(i, s) {
    var f = typeof i;
    return (
      (s = s ?? r),
      !!s &&
        (f == "number" || (f != "symbol" && t.test(i))) &&
        i > -1 &&
        i % 1 == 0 &&
        i < s
    );
  }
  return (Bi = n), Bi;
}
var Ui, ku;
function jp() {
  if (ku) return Ui;
  ku = 1;
  var r = Xp(),
    t = Ac(),
    n = Cc(),
    i = Uc(),
    s = Nc(),
    f = Kc(),
    e = Object.prototype,
    l = e.hasOwnProperty;
  function p(x, R) {
    var S = n(x),
      v = !S && t(x),
      d = !S && !v && i(x),
      I = !S && !v && !d && f(x),
      j = S || v || d || I,
      N = j ? r(x.length, String) : [],
      k = N.length;
    for (var M in x)
      (R || l.call(x, M)) &&
        !(
          j &&
          (M == "length" ||
            (d && (M == "offset" || M == "parent")) ||
            (I && (M == "buffer" || M == "byteLength" || M == "byteOffset")) ||
            s(M, k))
        ) &&
        N.push(M);
    return N;
  }
  return (Ui = p), Ui;
}
var Ki, Vu;
function $p() {
  if (Vu) return Ki;
  Vu = 1;
  function r(t) {
    var n = [];
    if (t != null) for (var i in Object(t)) n.push(i);
    return n;
  }
  return (Ki = r), Ki;
}
var wi, Mu;
function Fp() {
  if (Mu) return wi;
  Mu = 1;
  var r = qt(),
    t = Lc(),
    n = $p(),
    i = Object.prototype,
    s = i.hasOwnProperty;
  function f(e) {
    if (!r(e)) return n(e);
    var l = t(e),
      p = [];
    for (var x in e) (x == "constructor" && (l || !s.call(e, x))) || p.push(x);
    return p;
  }
  return (wi = f), wi;
}
var Ni, qu;
function Ic() {
  if (qu) return Ni;
  qu = 1;
  var r = jp(),
    t = Fp(),
    n = Oa();
  function i(s) {
    return n(s) ? r(s, !0) : t(s);
  }
  return (Ni = i), Ni;
}
var Ii, Gu;
function Hp() {
  if (Gu) return Ii;
  Gu = 1;
  var r = Gp(),
    t = Ic();
  function n(i) {
    return r(i, t(i));
  }
  return (Ii = n), Ii;
}
var Di, Xu;
function Wp() {
  if (Xu) return Di;
  Xu = 1;
  var r = dc(),
    t = Lp(),
    n = Bp(),
    i = Up(),
    s = Np(),
    f = Ac(),
    e = Cc(),
    l = Dp(),
    p = Uc(),
    x = Na(),
    R = qt(),
    S = Pp(),
    v = Kc(),
    d = wc(),
    I = Hp();
  function j(N, k, M, ee, D, O, o) {
    var P = d(N, M),
      E = d(k, M),
      A = o.get(E);
    if (A) {
      r(N, M, A);
      return;
    }
    var B = O ? O(P, E, M + "", N, k, o) : void 0,
      $ = B === void 0;
    if ($) {
      var W = e(E),
        fe = !W && p(E),
        ue = !W && !fe && v(E);
      (B = E),
        W || fe || ue
          ? e(P)
            ? (B = P)
            : l(P)
            ? (B = i(P))
            : fe
            ? (($ = !1), (B = t(E, !0)))
            : ue
            ? (($ = !1), (B = n(E, !0)))
            : (B = [])
          : S(E) || f(E)
          ? ((B = P), f(P) ? (B = I(P)) : (!R(P) || x(P)) && (B = s(E)))
          : ($ = !1);
    }
    $ && (o.set(E, B), D(B, E, ee, O, o), o.delete(E)), r(N, M, B);
  }
  return (Di = j), Di;
}
var Oi, ju;
function zp() {
  if (ju) return Oi;
  ju = 1;
  var r = Sp(),
    t = dc(),
    n = vp(),
    i = Wp(),
    s = qt(),
    f = Ic(),
    e = wc();
  function l(p, x, R, S, v) {
    p !== x &&
      n(
        x,
        function (d, I) {
          if ((v || (v = new r()), s(d))) i(p, x, I, R, l, S, v);
          else {
            var j = S ? S(e(p, I), d, I + "", p, x, v) : void 0;
            j === void 0 && (j = d), t(p, I, j);
          }
        },
        f
      );
  }
  return (Oi = l), Oi;
}
var Pi, $u;
function Dc() {
  if ($u) return Pi;
  $u = 1;
  function r(t) {
    return t;
  }
  return (Pi = r), Pi;
}
var ki, Fu;
function Jp() {
  if (Fu) return ki;
  Fu = 1;
  function r(t, n, i) {
    switch (i.length) {
      case 0:
        return t.call(n);
      case 1:
        return t.call(n, i[0]);
      case 2:
        return t.call(n, i[0], i[1]);
      case 3:
        return t.call(n, i[0], i[1], i[2]);
    }
    return t.apply(n, i);
  }
  return (ki = r), ki;
}
var Vi, Hu;
function Yp() {
  if (Hu) return Vi;
  Hu = 1;
  var r = Jp(),
    t = Math.max;
  function n(i, s, f) {
    return (
      (s = t(s === void 0 ? i.length - 1 : s, 0)),
      function () {
        for (
          var e = arguments, l = -1, p = t(e.length - s, 0), x = Array(p);
          ++l < p;

        )
          x[l] = e[s + l];
        l = -1;
        for (var R = Array(s + 1); ++l < s; ) R[l] = e[l];
        return (R[s] = f(x)), r(i, this, R);
      }
    );
  }
  return (Vi = n), Vi;
}
var Mi, Wu;
function Qp() {
  if (Wu) return Mi;
  Wu = 1;
  function r(t) {
    return function () {
      return t;
    };
  }
  return (Mi = r), Mi;
}
var qi, zu;
function Zp() {
  if (zu) return qi;
  zu = 1;
  var r = Qp(),
    t = Sc(),
    n = Dc(),
    i = t
      ? function (s, f) {
          return t(s, "toString", {
            configurable: !0,
            enumerable: !1,
            value: r(f),
            writable: !0,
          });
        }
      : n;
  return (qi = i), qi;
}
var Gi, Ju;
function eE() {
  if (Ju) return Gi;
  Ju = 1;
  var r = 800,
    t = 16,
    n = Date.now;
  function i(s) {
    var f = 0,
      e = 0;
    return function () {
      var l = n(),
        p = t - (l - e);
      if (((e = l), p > 0)) {
        if (++f >= r) return arguments[0];
      } else f = 0;
      return s.apply(void 0, arguments);
    };
  }
  return (Gi = i), Gi;
}
var Xi, Yu;
function tE() {
  if (Yu) return Xi;
  Yu = 1;
  var r = Zp(),
    t = eE(),
    n = t(r);
  return (Xi = n), Xi;
}
var ji, Qu;
function rE() {
  if (Qu) return ji;
  Qu = 1;
  var r = Dc(),
    t = Yp(),
    n = tE();
  function i(s, f) {
    return n(t(s, f, r), s + "");
  }
  return (ji = i), ji;
}
var $i, Zu;
function nE() {
  if (Zu) return $i;
  Zu = 1;
  var r = $r(),
    t = Oa(),
    n = Nc(),
    i = qt();
  function s(f, e, l) {
    if (!i(l)) return !1;
    var p = typeof e;
    return (p == "number" ? t(l) && n(e, l.length) : p == "string" && e in l)
      ? r(l[e], f)
      : !1;
  }
  return ($i = s), $i;
}
var Fi, eo;
function iE() {
  if (eo) return Fi;
  eo = 1;
  var r = rE(),
    t = nE();
  function n(i) {
    return r(function (s, f) {
      var e = -1,
        l = f.length,
        p = l > 1 ? f[l - 1] : void 0,
        x = l > 2 ? f[2] : void 0;
      for (
        p = i.length > 3 && typeof p == "function" ? (l--, p) : void 0,
          x && t(f[0], f[1], x) && ((p = l < 3 ? void 0 : p), (l = 1)),
          s = Object(s);
        ++e < l;

      ) {
        var R = f[e];
        R && i(s, R, e, p);
      }
      return s;
    });
  }
  return (Fi = n), Fi;
}
var Hi, to;
function sE() {
  if (to) return Hi;
  to = 1;
  var r = zp(),
    t = iE(),
    n = t(function (i, s, f) {
      r(i, s, f);
    });
  return (Hi = n), Hi;
}
sE();
const zt = class zt {
  static get serverUrl() {
    const t = this.getQueryParam("server") ?? this.getQueryParam("s");
    return !t || t === "live"
      ? "ecast.jackboxgames.com"
      : t === "local"
      ? "https://localhost"
      : t.includes("localhost")
      ? t
      : `${t}.jackboxgames.com`;
  }
  static isDevelopment() {
    return (
      window.location.hostname === "dev.jackbox.tv" ||
      window.location.hostname === "localhost"
    );
  }
  static isProduction() {
    return window.location.hostname === "jackbox.tv";
  }
  static get isCanvasSupported() {
    const t = document.createElement("canvas");
    return !!(t.getContext && t.getContext("2d"));
  }
  static get isDragAndDropSupported() {
    const t = document.createElement("div");
    return !(
      !("draggable" in t) ||
      !("ondragstart" in t) ||
      !("ondrop" in t) ||
      (/Firefox/i.test(navigator.userAgent) &&
        /Android|Mobile/i.test(navigator.userAgent))
    );
  }
  static get isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  }
  static htmlUnescape(t) {
    return String(t)
      .replace(/&quot;/gi, '"')
      .replace(/&#39;/gi, "'")
      .replace(/&lt;/gi, "<")
      .replace(/&gt;/gi, ">")
      .replace(/&amp;/gi, "&");
  }
  static htmlEscape(t) {
    return String(t)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  static sanitize(t) {
    const n = this.sanitizeInput(t).replace(/'/g, "â€™");
    return this.htmlEscape(n).trim();
  }
  static sanitizeName(t) {
    return t
      .replace(
        /[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF\u2026!?*$+\-'_ .,]/gi,
        ""
      )
      .replace(/'/g, "â€™");
  }
  static sanitizeInput(t) {
    return (
      (t = t.replace("â€¦", "...")),
      t.replace(/[^\u00A1\u0020-\u007E\u00BF-\u00FFâ€™]/gi, "")
    );
  }
  static sanitizeEmoji(t) {
    return t.replace(
      /(\u00a9|\u00ae|[\u2000-\u2017]|[\u2020-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/,
      ""
    );
  }
  static safeText(t) {
    const n = document.createElement("div");
    return (n.textContent = t), n.innerHTML;
  }
  static htmlTagsToBBCode(t, n) {
    if (!n.length)
      throw new Error("[Utils.htmlTagsToBBCode] No tag pairs were passed in");
    return n.reduce(
      (i, s) => (
        i.replaceAll(`<${s[0]}>`, `[${s[1]}]`),
        i.replaceAll(`</${s[0]}>`, `</${s[1]}>`),
        i
      ),
      t
    );
  }
  static hexToRgb(t) {
    const n = new ArrayBuffer(4);
    new DataView(n).setUint32(0, parseInt(t.replace("#", ""), 16), !1);
    const s = new Uint8Array(n);
    return `${s[1]},${s[2]},${s[3]}`;
  }
  static adjustColor(t, n) {
    let i = !1,
      s = t;
    s[0] === "#" && ((s = s.slice(1)), (i = !0));
    const f = parseInt(s, 16),
      e = Math.min(Math.max(0, (f >> 16) * n), 255),
      l = Math.min(Math.max(0, ((f >> 8) & 255) * n), 255);
    let x = (
      Math.min(Math.max(0, (f & 255) * n), 255) |
      (l << 8) |
      (e << 16)
    ).toString(16);
    for (; x.length < s.length; ) x = `0${x}`;
    return (i ? "#" : "") + x;
  }
  static mostFrequent(t) {
    const n = new Map();
    let i = t[0],
      s = 0;
    for (let f = 0; f < t.length; f++) {
      const e = t[f],
        l = (n.get(e) || 0) + 1;
      n.set(e, l), l > s && ((i = e), (s = l));
    }
    return i;
  }
  static toPrecision(t, n) {
    const i = 10 ** n;
    return Math.round((t + Number.EPSILON) * i) / i;
  }
  static isInTolerance(t, n, i) {
    return !(Math.abs(t.x - n.x) < i || Math.abs(t.y - n.y) > i);
  }
  static getDistanceBetweenPoints(t, n) {
    const i = [t.x - n.x, t.y - n.y],
      s = Math.hypot(...i);
    return Math.round(s * 100) / 100;
  }
  static getMidpoint(t, n) {
    return { x: (t.x + n.x) / 2, y: (t.y + n.y) / 2 };
  }
  static getAngleBetweenPoints(t, n) {
    let s = Math.atan2(n.y - t.y, n.x - t.x) * (180 / Math.PI);
    return s < 0 && (s += 360), 360 - s;
  }
  static getAngularDistance(t, n) {
    let i = (n - t) % 360;
    const s = i < 0 ? 1 : -1;
    return (i = Math.abs(i)), i > 180 ? s * (360 - i) : s * i;
  }
  static getVelocity(t, n, i, s) {
    return this.getDistanceBetweenPoints(t, i) / (s - n);
  }
  static isInsideElement(t, n) {
    const i = n.getBoundingClientRect();
    return !(
      t.x < i.left ||
      t.x > i.left + i.width ||
      t.y < i.top ||
      t.y > i.top + i.height
    );
  }
  static rotatePointByRadians(t, n, i) {
    const s = n.x + (t.x - n.x) * Math.cos(i) - (t.y - n.y) * Math.sin(i),
      f = n.y + (t.x - n.x) * Math.sin(i) + (t.y - n.y) * Math.cos(i);
    return { x: s, y: f };
  }
  static rotatePointByDegrees(t, n, i) {
    const s = i * (Math.PI / 180);
    return this.rotatePointByRadians(t, n, s);
  }
  static rotatePoint(t, n, i) {
    return this.rotatePointByDegrees(t, n, i);
  }
  static cyrb128(t) {
    let n = 1779033703,
      i = 3144134277,
      s = 1013904242,
      f = 2773480762;
    for (let e = 0, l; e < t.length; e++)
      (l = t.charCodeAt(e)),
        (n = i ^ Math.imul(n ^ l, 597399067)),
        (i = s ^ Math.imul(i ^ l, 2869860233)),
        (s = f ^ Math.imul(s ^ l, 951274213)),
        (f = n ^ Math.imul(f ^ l, 2716044179));
    return (
      (n = Math.imul(s ^ (n >>> 18), 597399067)),
      (i = Math.imul(f ^ (i >>> 22), 2869860233)),
      (s = Math.imul(n ^ (s >>> 17), 951274213)),
      (f = Math.imul(i ^ (f >>> 19), 2716044179)),
      [(n ^ i ^ s ^ f) >>> 0, (i ^ n) >>> 0, (s ^ n) >>> 0, (f ^ n) >>> 0]
    );
  }
  static sfc32(t, n, i, s) {
    return function () {
      (t >>>= 0), (n >>>= 0), (i >>>= 0), (s >>>= 0);
      let e = (t + n) | 0;
      return (
        (t = n ^ (n >>> 9)),
        (n = (i + (i << 3)) | 0),
        (i = (i << 21) | (i >>> 11)),
        (s = (s + 1) | 0),
        (e = (e + s) | 0),
        (i = (i + e) | 0),
        (e >>> 0) / 4294967296
      );
    };
  }
};
ze(zt, "queryParams", new URLSearchParams(window.location.search)),
  ze(zt, "getQueryParam", (t) => zt.queryParams.get(t)),
  ze(
    zt,
    "sleep",
    (t) =>
      new Promise((n) => {
        window.setTimeout(n, t);
      })
  );
let Wt = zt;
class Vr {
  static get namespace() {
    var t;
    return (
      ((t = window.tv.storage) == null ? void 0 : t.namespace) ??
      this.defaultNamespace
    );
  }
  static get isDisabled() {
    var t;
    return ((t = window.tv.storage) == null ? void 0 : t.isDisabled) ?? !1;
  }
  static get tag() {
    var t;
    return (t = window.tv.storage) == null ? void 0 : t.tag;
  }
  static get code() {
    var t;
    return (t = window.tv.storage) == null ? void 0 : t.code;
  }
  static get isSupported() {
    if (this.isDisabled) return !1;
    try {
      return window.localStorage
        ? (window.localStorage.setItem("support-check", "1"),
          window.localStorage.removeItem("support-check"),
          !0)
        : !1;
    } catch {
      return !1;
    }
  }
  static setup(t, n) {
    delete window.tv.storage,
      (window.tv.storage = {
        namespace:
          Wt.getQueryParam("namespace") ??
          Wt.getQueryParam("ns") ??
          this.defaultNamespace,
        isDisabled: Wt.queryParams.has("incognito") || Wt.queryParams.has("nc"),
      }),
      t && (window.tv.storage.tag = t),
      n &&
        ((window.tv.storage.code = n.toLowerCase()),
        this.clearCodeScopedKeys(window.tv.storage.code));
  }
  static get(t, n) {
    return this.isSupported
      ? window.localStorage.getItem(this.getScopedKey(t, n))
      : null;
  }
  static set(t, n, i = "none") {
    if (this.isSupported)
      return window.localStorage.setItem(this.getScopedSetKey(t, i), n);
  }
  static remove(t, n) {
    if (this.isSupported)
      return window.localStorage.removeItem(this.getScopedKey(t, n));
  }
  static setTag(t) {
    const n = t.toLowerCase(),
      i = this.get("tags") ?? "[]",
      s = n.split("-")[0];
    let f = JSON.parse(i);
    (f = f.filter((e) => {
      const l = e.split("-")[0];
      return s !== l;
    })),
      f.push(n),
      this.set("tags", JSON.stringify(f));
  }
  static getScopedKey(t, n) {
    const i = `${this.namespace}:${t}`,
      s = this.tag ? `${this.namespace}:${t}:tag:${this.tag}` : null,
      f = this.code ? `${this.namespace}:${t}:code:${this.code}` : null;
    if (n === "none") return i;
    if (n === "tag") {
      if (!s)
        throw new Error(
          '[Storage] requested "tag" scope but tv.storage.tag is undefined'
        );
      return s;
    }
    if (n === "code") {
      if (!f)
        throw new Error(
          '[Storage] requested "code" scope but tv.storage.code is undefined'
        );
      return f;
    }
    return f && window.localStorage.getItem(f) !== null
      ? f
      : s && window.localStorage.getItem(s) !== null
      ? s
      : i;
  }
  static getScopedSetKey(t, n = "none") {
    if (n === "tag") {
      if (!this.tag)
        throw new Error(
          '[Storage] requested "room" scope but tv.storage.tag is undefined'
        );
      return `${this.namespace}:${t}:tag:${this.tag}`;
    }
    if (n === "code") {
      if (!this.code)
        throw new Error(
          '[Storage] requested "code" scope but tv.storage.code is undefined'
        );
      return `${this.namespace}:${t}:code:${this.code}`;
    }
    return `${this.namespace}:${t}`;
  }
  static clearCodeScopedKeys(t) {
    this.isSupported &&
      Object.keys(window.localStorage).forEach((n) => {
        const i = n.split(":code:");
        i.length <= 1 || (i[1] !== t && window.localStorage.removeItem(n));
      });
  }
}
ze(Vr, "defaultNamespace", "tv");
var Ar = { exports: {} },
  ro;
function aE() {
  return (
    ro ||
      ((ro = 1),
      (function (r, t) {
        var n =
            (typeof globalThis < "u" && globalThis) ||
            (typeof self < "u" && self) ||
            (typeof Xe < "u" && Xe),
          i = (function () {
            function f() {
              (this.fetch = !1), (this.DOMException = n.DOMException);
            }
            return (f.prototype = n), new f();
          })();
        (function (f) {
          (function (e) {
            var l =
                (typeof f < "u" && f) ||
                (typeof self < "u" && self) ||
                (typeof Xe < "u" && Xe) ||
                {},
              p = {
                searchParams: "URLSearchParams" in l,
                iterable: "Symbol" in l && "iterator" in Symbol,
                blob:
                  "FileReader" in l &&
                  "Blob" in l &&
                  (function () {
                    try {
                      return new Blob(), !0;
                    } catch {
                      return !1;
                    }
                  })(),
                formData: "FormData" in l,
                arrayBuffer: "ArrayBuffer" in l,
              };
            function x(w) {
              return w && DataView.prototype.isPrototypeOf(w);
            }
            if (p.arrayBuffer)
              var R = [
                  "[object Int8Array]",
                  "[object Uint8Array]",
                  "[object Uint8ClampedArray]",
                  "[object Int16Array]",
                  "[object Uint16Array]",
                  "[object Int32Array]",
                  "[object Uint32Array]",
                  "[object Float32Array]",
                  "[object Float64Array]",
                ],
                S =
                  ArrayBuffer.isView ||
                  function (w) {
                    return (
                      w && R.indexOf(Object.prototype.toString.call(w)) > -1
                    );
                  };
            function v(w) {
              if (
                (typeof w != "string" && (w = String(w)),
                /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(w) || w === "")
              )
                throw new TypeError(
                  'Invalid character in header field name: "' + w + '"'
                );
              return w.toLowerCase();
            }
            function d(w) {
              return typeof w != "string" && (w = String(w)), w;
            }
            function I(w) {
              var F = {
                next: function () {
                  var se = w.shift();
                  return { done: se === void 0, value: se };
                },
              };
              return (
                p.iterable &&
                  (F[Symbol.iterator] = function () {
                    return F;
                  }),
                F
              );
            }
            function j(w) {
              (this.map = {}),
                w instanceof j
                  ? w.forEach(function (F, se) {
                      this.append(se, F);
                    }, this)
                  : Array.isArray(w)
                  ? w.forEach(function (F) {
                      if (F.length != 2)
                        throw new TypeError(
                          "Headers constructor: expected name/value pair to be length 2, found" +
                            F.length
                        );
                      this.append(F[0], F[1]);
                    }, this)
                  : w &&
                    Object.getOwnPropertyNames(w).forEach(function (F) {
                      this.append(F, w[F]);
                    }, this);
            }
            (j.prototype.append = function (w, F) {
              (w = v(w)), (F = d(F));
              var se = this.map[w];
              this.map[w] = se ? se + ", " + F : F;
            }),
              (j.prototype.delete = function (w) {
                delete this.map[v(w)];
              }),
              (j.prototype.get = function (w) {
                return (w = v(w)), this.has(w) ? this.map[w] : null;
              }),
              (j.prototype.has = function (w) {
                return this.map.hasOwnProperty(v(w));
              }),
              (j.prototype.set = function (w, F) {
                this.map[v(w)] = d(F);
              }),
              (j.prototype.forEach = function (w, F) {
                for (var se in this.map)
                  this.map.hasOwnProperty(se) &&
                    w.call(F, this.map[se], se, this);
              }),
              (j.prototype.keys = function () {
                var w = [];
                return (
                  this.forEach(function (F, se) {
                    w.push(se);
                  }),
                  I(w)
                );
              }),
              (j.prototype.values = function () {
                var w = [];
                return (
                  this.forEach(function (F) {
                    w.push(F);
                  }),
                  I(w)
                );
              }),
              (j.prototype.entries = function () {
                var w = [];
                return (
                  this.forEach(function (F, se) {
                    w.push([se, F]);
                  }),
                  I(w)
                );
              }),
              p.iterable &&
                (j.prototype[Symbol.iterator] = j.prototype.entries);
            function N(w) {
              if (!w._noBody) {
                if (w.bodyUsed)
                  return Promise.reject(new TypeError("Already read"));
                w.bodyUsed = !0;
              }
            }
            function k(w) {
              return new Promise(function (F, se) {
                (w.onload = function () {
                  F(w.result);
                }),
                  (w.onerror = function () {
                    se(w.error);
                  });
              });
            }
            function M(w) {
              var F = new FileReader(),
                se = k(F);
              return F.readAsArrayBuffer(w), se;
            }
            function ee(w) {
              var F = new FileReader(),
                se = k(F),
                Z = /charset=([A-Za-z0-9_-]+)/.exec(w.type),
                he = Z ? Z[1] : "utf-8";
              return F.readAsText(w, he), se;
            }
            function D(w) {
              for (
                var F = new Uint8Array(w), se = new Array(F.length), Z = 0;
                Z < F.length;
                Z++
              )
                se[Z] = String.fromCharCode(F[Z]);
              return se.join("");
            }
            function O(w) {
              if (w.slice) return w.slice(0);
              var F = new Uint8Array(w.byteLength);
              return F.set(new Uint8Array(w)), F.buffer;
            }
            function o() {
              return (
                (this.bodyUsed = !1),
                (this._initBody = function (w) {
                  (this.bodyUsed = this.bodyUsed),
                    (this._bodyInit = w),
                    w
                      ? typeof w == "string"
                        ? (this._bodyText = w)
                        : p.blob && Blob.prototype.isPrototypeOf(w)
                        ? (this._bodyBlob = w)
                        : p.formData && FormData.prototype.isPrototypeOf(w)
                        ? (this._bodyFormData = w)
                        : p.searchParams &&
                          URLSearchParams.prototype.isPrototypeOf(w)
                        ? (this._bodyText = w.toString())
                        : p.arrayBuffer && p.blob && x(w)
                        ? ((this._bodyArrayBuffer = O(w.buffer)),
                          (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                        : p.arrayBuffer &&
                          (ArrayBuffer.prototype.isPrototypeOf(w) || S(w))
                        ? (this._bodyArrayBuffer = O(w))
                        : (this._bodyText = w =
                            Object.prototype.toString.call(w))
                      : ((this._noBody = !0), (this._bodyText = "")),
                    this.headers.get("content-type") ||
                      (typeof w == "string"
                        ? this.headers.set(
                            "content-type",
                            "text/plain;charset=UTF-8"
                          )
                        : this._bodyBlob && this._bodyBlob.type
                        ? this.headers.set("content-type", this._bodyBlob.type)
                        : p.searchParams &&
                          URLSearchParams.prototype.isPrototypeOf(w) &&
                          this.headers.set(
                            "content-type",
                            "application/x-www-form-urlencoded;charset=UTF-8"
                          ));
                }),
                p.blob &&
                  (this.blob = function () {
                    var w = N(this);
                    if (w) return w;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                      return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData)
                      throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]));
                  }),
                (this.arrayBuffer = function () {
                  if (this._bodyArrayBuffer) {
                    var w = N(this);
                    return (
                      w ||
                      (ArrayBuffer.isView(this._bodyArrayBuffer)
                        ? Promise.resolve(
                            this._bodyArrayBuffer.buffer.slice(
                              this._bodyArrayBuffer.byteOffset,
                              this._bodyArrayBuffer.byteOffset +
                                this._bodyArrayBuffer.byteLength
                            )
                          )
                        : Promise.resolve(this._bodyArrayBuffer))
                    );
                  } else {
                    if (p.blob) return this.blob().then(M);
                    throw new Error("could not read as ArrayBuffer");
                  }
                }),
                (this.text = function () {
                  var w = N(this);
                  if (w) return w;
                  if (this._bodyBlob) return ee(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(D(this._bodyArrayBuffer));
                  if (this._bodyFormData)
                    throw new Error("could not read FormData body as text");
                  return Promise.resolve(this._bodyText);
                }),
                p.formData &&
                  (this.formData = function () {
                    return this.text().then(B);
                  }),
                (this.json = function () {
                  return this.text().then(JSON.parse);
                }),
                this
              );
            }
            var P = [
              "CONNECT",
              "DELETE",
              "GET",
              "HEAD",
              "OPTIONS",
              "PATCH",
              "POST",
              "PUT",
              "TRACE",
            ];
            function E(w) {
              var F = w.toUpperCase();
              return P.indexOf(F) > -1 ? F : w;
            }
            function A(w, F) {
              if (!(this instanceof A))
                throw new TypeError(
                  'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
                );
              F = F || {};
              var se = F.body;
              if (w instanceof A) {
                if (w.bodyUsed) throw new TypeError("Already read");
                (this.url = w.url),
                  (this.credentials = w.credentials),
                  F.headers || (this.headers = new j(w.headers)),
                  (this.method = w.method),
                  (this.mode = w.mode),
                  (this.signal = w.signal),
                  !se &&
                    w._bodyInit != null &&
                    ((se = w._bodyInit), (w.bodyUsed = !0));
              } else this.url = String(w);
              if (
                ((this.credentials =
                  F.credentials || this.credentials || "same-origin"),
                (F.headers || !this.headers) &&
                  (this.headers = new j(F.headers)),
                (this.method = E(F.method || this.method || "GET")),
                (this.mode = F.mode || this.mode || null),
                (this.signal =
                  F.signal ||
                  this.signal ||
                  (function () {
                    if ("AbortController" in l) {
                      var oe = new AbortController();
                      return oe.signal;
                    }
                  })()),
                (this.referrer = null),
                (this.method === "GET" || this.method === "HEAD") && se)
              )
                throw new TypeError(
                  "Body not allowed for GET or HEAD requests"
                );
              if (
                (this._initBody(se),
                (this.method === "GET" || this.method === "HEAD") &&
                  (F.cache === "no-store" || F.cache === "no-cache"))
              ) {
                var Z = /([?&])_=[^&]*/;
                if (Z.test(this.url))
                  this.url = this.url.replace(Z, "$1_=" + new Date().getTime());
                else {
                  var he = /\?/;
                  this.url +=
                    (he.test(this.url) ? "&" : "?") +
                    "_=" +
                    new Date().getTime();
                }
              }
            }
            A.prototype.clone = function () {
              return new A(this, { body: this._bodyInit });
            };
            function B(w) {
              var F = new FormData();
              return (
                w
                  .trim()
                  .split("&")
                  .forEach(function (se) {
                    if (se) {
                      var Z = se.split("="),
                        he = Z.shift().replace(/\+/g, " "),
                        oe = Z.join("=").replace(/\+/g, " ");
                      F.append(decodeURIComponent(he), decodeURIComponent(oe));
                    }
                  }),
                F
              );
            }
            function $(w) {
              var F = new j(),
                se = w.replace(/\r?\n[\t ]+/g, " ");
              return (
                se
                  .split("\r")
                  .map(function (Z) {
                    return Z.indexOf(`
`) === 0
                      ? Z.substr(1, Z.length)
                      : Z;
                  })
                  .forEach(function (Z) {
                    var he = Z.split(":"),
                      oe = he.shift().trim();
                    if (oe) {
                      var ie = he.join(":").trim();
                      try {
                        F.append(oe, ie);
                      } catch (T) {
                        console.warn("Response " + T.message);
                      }
                    }
                  }),
                F
              );
            }
            o.call(A.prototype);
            function W(w, F) {
              if (!(this instanceof W))
                throw new TypeError(
                  'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
                );
              if (
                (F || (F = {}),
                (this.type = "default"),
                (this.status = F.status === void 0 ? 200 : F.status),
                this.status < 200 || this.status > 599)
              )
                throw new RangeError(
                  "Failed to construct 'Response': The status provided (0) is outside the range [200, 599]."
                );
              (this.ok = this.status >= 200 && this.status < 300),
                (this.statusText =
                  F.statusText === void 0 ? "" : "" + F.statusText),
                (this.headers = new j(F.headers)),
                (this.url = F.url || ""),
                this._initBody(w);
            }
            o.call(W.prototype),
              (W.prototype.clone = function () {
                return new W(this._bodyInit, {
                  status: this.status,
                  statusText: this.statusText,
                  headers: new j(this.headers),
                  url: this.url,
                });
              }),
              (W.error = function () {
                var w = new W(null, { status: 200, statusText: "" });
                return (w.ok = !1), (w.status = 0), (w.type = "error"), w;
              });
            var fe = [301, 302, 303, 307, 308];
            (W.redirect = function (w, F) {
              if (fe.indexOf(F) === -1)
                throw new RangeError("Invalid status code");
              return new W(null, { status: F, headers: { location: w } });
            }),
              (e.DOMException = l.DOMException);
            try {
              new e.DOMException();
            } catch {
              (e.DOMException = function (F, se) {
                (this.message = F), (this.name = se);
                var Z = Error(F);
                this.stack = Z.stack;
              }),
                (e.DOMException.prototype = Object.create(Error.prototype)),
                (e.DOMException.prototype.constructor = e.DOMException);
            }
            function ue(w, F) {
              return new Promise(function (se, Z) {
                var he = new A(w, F);
                if (he.signal && he.signal.aborted)
                  return Z(new e.DOMException("Aborted", "AbortError"));
                var oe = new XMLHttpRequest();
                function ie() {
                  oe.abort();
                }
                (oe.onload = function () {
                  var Ee = {
                    statusText: oe.statusText,
                    headers: $(oe.getAllResponseHeaders() || ""),
                  };
                  he.url.indexOf("file://") === 0 &&
                  (oe.status < 200 || oe.status > 599)
                    ? (Ee.status = 200)
                    : (Ee.status = oe.status),
                    (Ee.url =
                      "responseURL" in oe
                        ? oe.responseURL
                        : Ee.headers.get("X-Request-URL"));
                  var Ue = "response" in oe ? oe.response : oe.responseText;
                  setTimeout(function () {
                    se(new W(Ue, Ee));
                  }, 0);
                }),
                  (oe.onerror = function () {
                    setTimeout(function () {
                      Z(new TypeError("Network request failed"));
                    }, 0);
                  }),
                  (oe.ontimeout = function () {
                    setTimeout(function () {
                      Z(new TypeError("Network request timed out"));
                    }, 0);
                  }),
                  (oe.onabort = function () {
                    setTimeout(function () {
                      Z(new e.DOMException("Aborted", "AbortError"));
                    }, 0);
                  });
                function T(Ee) {
                  try {
                    return Ee === "" && l.location.href ? l.location.href : Ee;
                  } catch {
                    return Ee;
                  }
                }
                if (
                  (oe.open(he.method, T(he.url), !0),
                  he.credentials === "include"
                    ? (oe.withCredentials = !0)
                    : he.credentials === "omit" && (oe.withCredentials = !1),
                  "responseType" in oe &&
                    (p.blob
                      ? (oe.responseType = "blob")
                      : p.arrayBuffer && (oe.responseType = "arraybuffer")),
                  F &&
                    typeof F.headers == "object" &&
                    !(
                      F.headers instanceof j ||
                      (l.Headers && F.headers instanceof l.Headers)
                    ))
                ) {
                  var V = [];
                  Object.getOwnPropertyNames(F.headers).forEach(function (Ee) {
                    V.push(v(Ee)), oe.setRequestHeader(Ee, d(F.headers[Ee]));
                  }),
                    he.headers.forEach(function (Ee, Ue) {
                      V.indexOf(Ue) === -1 && oe.setRequestHeader(Ue, Ee);
                    });
                } else
                  he.headers.forEach(function (Ee, Ue) {
                    oe.setRequestHeader(Ue, Ee);
                  });
                he.signal &&
                  (he.signal.addEventListener("abort", ie),
                  (oe.onreadystatechange = function () {
                    oe.readyState === 4 &&
                      he.signal.removeEventListener("abort", ie);
                  })),
                  oe.send(typeof he._bodyInit > "u" ? null : he._bodyInit);
              });
            }
            return (
              (ue.polyfill = !0),
              l.fetch ||
                ((l.fetch = ue),
                (l.Headers = j),
                (l.Request = A),
                (l.Response = W)),
              (e.Headers = j),
              (e.Request = A),
              (e.Response = W),
              (e.fetch = ue),
              e
            );
          })({});
        })(i),
          (i.fetch.ponyfill = !0),
          delete i.fetch.polyfill;
        var s = n.fetch ? n : i;
        (t = s.fetch),
          (t.default = s.fetch),
          (t.fetch = s.fetch),
          (t.Headers = s.Headers),
          (t.Request = s.Request),
          (t.Response = s.Response),
          (r.exports = t);
      })(Ar, Ar.exports)),
    Ar.exports
  );
}
var Wi, no;
function rr() {
  return no || ((no = 1), (Wi = TypeError)), Wi;
}
const fE = {},
  uE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: fE },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  oE = q0(uE);
var zi, io;
function Yr() {
  if (io) return zi;
  io = 1;
  var r = typeof Map == "function" && Map.prototype,
    t =
      Object.getOwnPropertyDescriptor && r
        ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
        : null,
    n = r && t && typeof t.get == "function" ? t.get : null,
    i = r && Map.prototype.forEach,
    s = typeof Set == "function" && Set.prototype,
    f =
      Object.getOwnPropertyDescriptor && s
        ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
        : null,
    e = s && f && typeof f.get == "function" ? f.get : null,
    l = s && Set.prototype.forEach,
    p = typeof WeakMap == "function" && WeakMap.prototype,
    x = p ? WeakMap.prototype.has : null,
    R = typeof WeakSet == "function" && WeakSet.prototype,
    S = R ? WeakSet.prototype.has : null,
    v = typeof WeakRef == "function" && WeakRef.prototype,
    d = v ? WeakRef.prototype.deref : null,
    I = Boolean.prototype.valueOf,
    j = Object.prototype.toString,
    N = Function.prototype.toString,
    k = String.prototype.match,
    M = String.prototype.slice,
    ee = String.prototype.replace,
    D = String.prototype.toUpperCase,
    O = String.prototype.toLowerCase,
    o = RegExp.prototype.test,
    P = Array.prototype.concat,
    E = Array.prototype.join,
    A = Array.prototype.slice,
    B = Math.floor,
    $ = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    W = Object.getOwnPropertySymbols,
    fe =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? Symbol.prototype.toString
        : null,
    ue = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    w =
      typeof Symbol == "function" &&
      Symbol.toStringTag &&
      (typeof Symbol.toStringTag === ue || !0)
        ? Symbol.toStringTag
        : null,
    F = Object.prototype.propertyIsEnumerable,
    se =
      (typeof Reflect == "function"
        ? Reflect.getPrototypeOf
        : Object.getPrototypeOf) ||
      ([].__proto__ === Array.prototype
        ? function (m) {
            return m.__proto__;
          }
        : null);
  function Z(m, U) {
    if (
      m === 1 / 0 ||
      m === -1 / 0 ||
      m !== m ||
      (m && m > -1e3 && m < 1e3) ||
      o.call(/e/, U)
    )
      return U;
    var ne = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof m == "number") {
      var te = m < 0 ? -B(-m) : B(m);
      if (te !== m) {
        var re = String(te),
          _e = M.call(U, re.length + 1);
        return (
          ee.call(re, ne, "$&_") +
          "." +
          ee.call(ee.call(_e, /([0-9]{3})/g, "$&_"), /_$/, "")
        );
      }
    }
    return ee.call(U, ne, "$&_");
  }
  var he = oE,
    oe = he.custom,
    ie = we(oe) ? oe : null,
    T = { __proto__: null, double: '"', single: "'" },
    V = { __proto__: null, double: /(["\\])/g, single: /(['\\])/g };
  zi = function m(U, ne, te, re) {
    var _e = ne || {};
    if (Ve(_e, "quoteStyle") && !Ve(T, _e.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (
      Ve(_e, "maxStringLength") &&
      (typeof _e.maxStringLength == "number"
        ? _e.maxStringLength < 0 && _e.maxStringLength !== 1 / 0
        : _e.maxStringLength !== null)
    )
      throw new TypeError(
        'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
      );
    var et = Ve(_e, "customInspect") ? _e.customInspect : !0;
    if (typeof et != "boolean" && et !== "symbol")
      throw new TypeError(
        "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
      );
    if (
      Ve(_e, "indent") &&
      _e.indent !== null &&
      _e.indent !== "	" &&
      !(parseInt(_e.indent, 10) === _e.indent && _e.indent > 0)
    )
      throw new TypeError(
        'option "indent" must be "\\t", an integer > 0, or `null`'
      );
    if (Ve(_e, "numericSeparator") && typeof _e.numericSeparator != "boolean")
      throw new TypeError(
        'option "numericSeparator", if provided, must be `true` or `false`'
      );
    var st = _e.numericSeparator;
    if (typeof U > "u") return "undefined";
    if (U === null) return "null";
    if (typeof U == "boolean") return U ? "true" : "false";
    if (typeof U == "string") return At(U, _e);
    if (typeof U == "number") {
      if (U === 0) return 1 / 0 / U > 0 ? "0" : "-0";
      var Ge = String(U);
      return st ? Z(U, Ge) : Ge;
    }
    if (typeof U == "bigint") {
      var tt = String(U) + "n";
      return st ? Z(U, tt) : tt;
    }
    var Bt = typeof _e.depth > "u" ? 5 : _e.depth;
    if (
      (typeof te > "u" && (te = 0), te >= Bt && Bt > 0 && typeof U == "object")
    )
      return He(U) ? "[Array]" : "[Object]";
    var ot = C(_e, te);
    if (typeof re > "u") re = [];
    else if (Ke(re, U) >= 0) return "[Circular]";
    function je(pt, wt, Lr) {
      if ((wt && ((re = A.call(re)), re.push(wt)), Lr)) {
        var X = { depth: _e.depth };
        return (
          Ve(_e, "quoteStyle") && (X.quoteStyle = _e.quoteStyle),
          m(pt, X, te + 1, re)
        );
      }
      return m(pt, _e, te + 1, re);
    }
    if (typeof U == "function" && !Ce(U)) {
      var yt = me(U),
        Sr = z(U, je);
      return (
        "[Function" +
        (yt ? ": " + yt : " (anonymous)") +
        "]" +
        (Sr.length > 0 ? " { " + E.call(Sr, ", ") + " }" : "")
      );
    }
    if (we(U)) {
      var ge = ue
        ? ee.call(String(U), /^(Symbol\(.*\))_[^)]*$/, "$1")
        : fe.call(U);
      return typeof U == "object" && !ue ? g(ge) : ge;
    }
    if (ar(U)) {
      for (
        var lt = "<" + O.call(String(U.nodeName)),
          Pe = U.attributes || [],
          Ut = 0;
        Ut < Pe.length;
        Ut++
      )
        lt += " " + Pe[Ut].name + "=" + Ee(Ue(Pe[Ut].value), "double", _e);
      return (
        (lt += ">"),
        U.childNodes && U.childNodes.length && (lt += "..."),
        (lt += "</" + O.call(String(U.nodeName)) + ">"),
        lt
      );
    }
    if (He(U)) {
      if (U.length === 0) return "[]";
      var fr = z(U, je);
      return ot && !_(fr)
        ? "[" + G(fr, ot) + "]"
        : "[ " + E.call(fr, ", ") + " ]";
    }
    if (xe(U)) {
      var ur = z(U, je);
      return !("cause" in Error.prototype) &&
        "cause" in U &&
        !F.call(U, "cause")
        ? "{ [" +
            String(U) +
            "] " +
            E.call(P.call("[cause]: " + je(U.cause), ur), ", ") +
            " }"
        : ur.length === 0
        ? "[" + String(U) + "]"
        : "{ [" + String(U) + "] " + E.call(ur, ", ") + " }";
    }
    if (typeof U == "object" && et) {
      if (ie && typeof U[ie] == "function" && he)
        return he(U, { depth: Bt - te });
      if (et !== "symbol" && typeof U.inspect == "function") return U.inspect();
    }
    if (Ne(U)) {
      var gt = [];
      return (
        i &&
          i.call(U, function (pt, wt) {
            gt.push(je(wt, U, !0) + " => " + je(pt, U));
          }),
        K("Map", n.call(U), gt, ot)
      );
    }
    if (Qe(U)) {
      var We = [];
      return (
        l &&
          l.call(U, function (pt) {
            We.push(je(pt, U));
          }),
        K("Set", e.call(U), We, ot)
      );
    }
    if (ft(U)) return y("WeakMap");
    if (Rt(U)) return y("WeakSet");
    if (Ye(U)) return y("WeakRef");
    if (Se(U)) return g(je(Number(U)));
    if (Me(U)) return g(je($.call(U)));
    if (be(U)) return g(I.call(U));
    if (Be(U)) return g(je(String(U)));
    if (typeof window < "u" && U === window) return "{ [object Window] }";
    if (
      (typeof globalThis < "u" && U === globalThis) ||
      (typeof Xe < "u" && U === Xe)
    )
      return "{ [object globalThis] }";
    if (!Te(U) && !Ce(U)) {
      var jt = z(U, je),
        dr = se
          ? se(U) === Object.prototype
          : U instanceof Object || U.constructor === Object,
        Kt = U instanceof Object ? "" : "null prototype",
        ct =
          !dr && w && Object(U) === U && w in U
            ? M.call(qe(U), 8, -1)
            : Kt
            ? "Object"
            : "",
        vr =
          dr || typeof U.constructor != "function"
            ? ""
            : U.constructor.name
            ? U.constructor.name + " "
            : "",
        bt =
          vr +
          (ct || Kt
            ? "[" + E.call(P.call([], ct || [], Kt || []), ": ") + "] "
            : "");
      return jt.length === 0
        ? bt + "{}"
        : ot
        ? bt + "{" + G(jt, ot) + "}"
        : bt + "{ " + E.call(jt, ", ") + " }";
    }
    return String(U);
  };
  function Ee(m, U, ne) {
    var te = ne.quoteStyle || U,
      re = T[te];
    return re + m + re;
  }
  function Ue(m) {
    return ee.call(String(m), /"/g, "&quot;");
  }
  function De(m) {
    return !w || !(typeof m == "object" && (w in m || typeof m[w] < "u"));
  }
  function He(m) {
    return qe(m) === "[object Array]" && De(m);
  }
  function Te(m) {
    return qe(m) === "[object Date]" && De(m);
  }
  function Ce(m) {
    return qe(m) === "[object RegExp]" && De(m);
  }
  function xe(m) {
    return qe(m) === "[object Error]" && De(m);
  }
  function Be(m) {
    return qe(m) === "[object String]" && De(m);
  }
  function Se(m) {
    return qe(m) === "[object Number]" && De(m);
  }
  function be(m) {
    return qe(m) === "[object Boolean]" && De(m);
  }
  function we(m) {
    if (ue) return m && typeof m == "object" && m instanceof Symbol;
    if (typeof m == "symbol") return !0;
    if (!m || typeof m != "object" || !fe) return !1;
    try {
      return fe.call(m), !0;
    } catch {}
    return !1;
  }
  function Me(m) {
    if (!m || typeof m != "object" || !$) return !1;
    try {
      return $.call(m), !0;
    } catch {}
    return !1;
  }
  var Oe =
    Object.prototype.hasOwnProperty ||
    function (m) {
      return m in this;
    };
  function Ve(m, U) {
    return Oe.call(m, U);
  }
  function qe(m) {
    return j.call(m);
  }
  function me(m) {
    if (m.name) return m.name;
    var U = k.call(N.call(m), /^function\s*([\w$]+)/);
    return U ? U[1] : null;
  }
  function Ke(m, U) {
    if (m.indexOf) return m.indexOf(U);
    for (var ne = 0, te = m.length; ne < te; ne++) if (m[ne] === U) return ne;
    return -1;
  }
  function Ne(m) {
    if (!n || !m || typeof m != "object") return !1;
    try {
      n.call(m);
      try {
        e.call(m);
      } catch {
        return !0;
      }
      return m instanceof Map;
    } catch {}
    return !1;
  }
  function ft(m) {
    if (!x || !m || typeof m != "object") return !1;
    try {
      x.call(m, x);
      try {
        S.call(m, S);
      } catch {
        return !0;
      }
      return m instanceof WeakMap;
    } catch {}
    return !1;
  }
  function Ye(m) {
    if (!d || !m || typeof m != "object") return !1;
    try {
      return d.call(m), !0;
    } catch {}
    return !1;
  }
  function Qe(m) {
    if (!e || !m || typeof m != "object") return !1;
    try {
      e.call(m);
      try {
        n.call(m);
      } catch {
        return !0;
      }
      return m instanceof Set;
    } catch {}
    return !1;
  }
  function Rt(m) {
    if (!S || !m || typeof m != "object") return !1;
    try {
      S.call(m, S);
      try {
        x.call(m, x);
      } catch {
        return !0;
      }
      return m instanceof WeakSet;
    } catch {}
    return !1;
  }
  function ar(m) {
    return !m || typeof m != "object"
      ? !1
      : typeof HTMLElement < "u" && m instanceof HTMLElement
      ? !0
      : typeof m.nodeName == "string" && typeof m.getAttribute == "function";
  }
  function At(m, U) {
    if (m.length > U.maxStringLength) {
      var ne = m.length - U.maxStringLength,
        te = "... " + ne + " more character" + (ne > 1 ? "s" : "");
      return At(M.call(m, 0, U.maxStringLength), U) + te;
    }
    var re = V[U.quoteStyle || "single"];
    re.lastIndex = 0;
    var _e = ee.call(ee.call(m, re, "\\$1"), /[\x00-\x1f]/g, Ct);
    return Ee(_e, "single", U);
  }
  function Ct(m) {
    var U = m.charCodeAt(0),
      ne = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[U];
    return ne
      ? "\\" + ne
      : "\\x" + (U < 16 ? "0" : "") + D.call(U.toString(16));
  }
  function g(m) {
    return "Object(" + m + ")";
  }
  function y(m) {
    return m + " { ? }";
  }
  function K(m, U, ne, te) {
    var re = te ? G(ne, te) : E.call(ne, ", ");
    return m + " (" + U + ") {" + re + "}";
  }
  function _(m) {
    for (var U = 0; U < m.length; U++)
      if (
        Ke(
          m[U],
          `
`
        ) >= 0
      )
        return !1;
    return !0;
  }
  function C(m, U) {
    var ne;
    if (m.indent === "	") ne = "	";
    else if (typeof m.indent == "number" && m.indent > 0)
      ne = E.call(Array(m.indent + 1), " ");
    else return null;
    return { base: ne, prev: E.call(Array(U + 1), ne) };
  }
  function G(m, U) {
    if (m.length === 0) return "";
    var ne =
      `
` +
      U.prev +
      U.base;
    return (
      ne +
      E.call(m, "," + ne) +
      `
` +
      U.prev
    );
  }
  function z(m, U) {
    var ne = He(m),
      te = [];
    if (ne) {
      te.length = m.length;
      for (var re = 0; re < m.length; re++)
        te[re] = Ve(m, re) ? U(m[re], m) : "";
    }
    var _e = typeof W == "function" ? W(m) : [],
      et;
    if (ue) {
      et = {};
      for (var st = 0; st < _e.length; st++) et["$" + _e[st]] = _e[st];
    }
    for (var Ge in m)
      Ve(m, Ge) &&
        ((ne && String(Number(Ge)) === Ge && Ge < m.length) ||
          (ue && et["$" + Ge] instanceof Symbol) ||
          (o.call(/[^\w$]/, Ge)
            ? te.push(U(Ge, m) + ": " + U(m[Ge], m))
            : te.push(Ge + ": " + U(m[Ge], m))));
    if (typeof W == "function")
      for (var tt = 0; tt < _e.length; tt++)
        F.call(m, _e[tt]) && te.push("[" + U(_e[tt]) + "]: " + U(m[_e[tt]], m));
    return te;
  }
  return zi;
}
var Ji, so;
function lE() {
  if (so) return Ji;
  so = 1;
  var r = Yr(),
    t = rr(),
    n = function (l, p, x) {
      for (var R = l, S; (S = R.next) != null; R = S)
        if (S.key === p)
          return (R.next = S.next), x || ((S.next = l.next), (l.next = S)), S;
    },
    i = function (l, p) {
      if (l) {
        var x = n(l, p);
        return x && x.value;
      }
    },
    s = function (l, p, x) {
      var R = n(l, p);
      R ? (R.value = x) : (l.next = { key: p, next: l.next, value: x });
    },
    f = function (l, p) {
      return l ? !!n(l, p) : !1;
    },
    e = function (l, p) {
      if (l) return n(l, p, !0);
    };
  return (
    (Ji = function () {
      var p,
        x = {
          assert: function (R) {
            if (!x.has(R)) throw new t("Side channel does not contain " + r(R));
          },
          delete: function (R) {
            var S = p && p.next,
              v = e(p, R);
            return v && S && S === v && (p = void 0), !!v;
          },
          get: function (R) {
            return i(p, R);
          },
          has: function (R) {
            return f(p, R);
          },
          set: function (R, S) {
            p || (p = { next: void 0 }), s(p, R, S);
          },
        };
      return x;
    }),
    Ji
  );
}
var Yi, ao;
function Oc() {
  return ao || ((ao = 1), (Yi = Object)), Yi;
}
var Qi, fo;
function cE() {
  return fo || ((fo = 1), (Qi = Error)), Qi;
}
var Zi, uo;
function pE() {
  return uo || ((uo = 1), (Zi = EvalError)), Zi;
}
var es, oo;
function EE() {
  return oo || ((oo = 1), (es = RangeError)), es;
}
var ts, lo;
function hE() {
  return lo || ((lo = 1), (ts = ReferenceError)), ts;
}
var rs, co;
function xE() {
  return co || ((co = 1), (rs = SyntaxError)), rs;
}
var ns, po;
function _E() {
  return po || ((po = 1), (ns = URIError)), ns;
}
var is, Eo;
function RE() {
  return Eo || ((Eo = 1), (is = Math.abs)), is;
}
var ss, ho;
function yE() {
  return ho || ((ho = 1), (ss = Math.floor)), ss;
}
var as, xo;
function gE() {
  return xo || ((xo = 1), (as = Math.max)), as;
}
var fs, _o;
function bE() {
  return _o || ((_o = 1), (fs = Math.min)), fs;
}
var us, Ro;
function mE() {
  return Ro || ((Ro = 1), (us = Math.pow)), us;
}
var os, yo;
function TE() {
  return yo || ((yo = 1), (os = Math.round)), os;
}
var ls, go;
function SE() {
  return (
    go ||
      ((go = 1),
      (ls =
        Number.isNaN ||
        function (t) {
          return t !== t;
        })),
    ls
  );
}
var cs, bo;
function dE() {
  if (bo) return cs;
  bo = 1;
  var r = SE();
  return (
    (cs = function (n) {
      return r(n) || n === 0 ? n : n < 0 ? -1 : 1;
    }),
    cs
  );
}
var ps, mo;
function vE() {
  return mo || ((mo = 1), (ps = Object.getOwnPropertyDescriptor)), ps;
}
var Es, To;
function Pc() {
  if (To) return Es;
  To = 1;
  var r = vE();
  if (r)
    try {
      r([], "length");
    } catch {
      r = null;
    }
  return (Es = r), Es;
}
var hs, So;
function LE() {
  if (So) return hs;
  So = 1;
  var r = Object.defineProperty || !1;
  if (r)
    try {
      r({}, "a", { value: 1 });
    } catch {
      r = !1;
    }
  return (hs = r), hs;
}
var xs, vo;
function AE() {
  return (
    vo ||
      ((vo = 1),
      (xs = function () {
        if (
          typeof Symbol != "function" ||
          typeof Object.getOwnPropertySymbols != "function"
        )
          return !1;
        if (typeof Symbol.iterator == "symbol") return !0;
        var t = {},
          n = Symbol("test"),
          i = Object(n);
        if (
          typeof n == "string" ||
          Object.prototype.toString.call(n) !== "[object Symbol]" ||
          Object.prototype.toString.call(i) !== "[object Symbol]"
        )
          return !1;
        var s = 42;
        t[n] = s;
        for (var f in t) return !1;
        if (
          (typeof Object.keys == "function" && Object.keys(t).length !== 0) ||
          (typeof Object.getOwnPropertyNames == "function" &&
            Object.getOwnPropertyNames(t).length !== 0)
        )
          return !1;
        var e = Object.getOwnPropertySymbols(t);
        if (
          e.length !== 1 ||
          e[0] !== n ||
          !Object.prototype.propertyIsEnumerable.call(t, n)
        )
          return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
          var l = Object.getOwnPropertyDescriptor(t, n);
          if (l.value !== s || l.enumerable !== !0) return !1;
        }
        return !0;
      })),
    xs
  );
}
var _s, Lo;
function CE() {
  if (Lo) return _s;
  Lo = 1;
  var r = typeof Symbol < "u" && Symbol,
    t = AE();
  return (
    (_s = function () {
      return typeof r != "function" ||
        typeof Symbol != "function" ||
        typeof r("foo") != "symbol" ||
        typeof Symbol("bar") != "symbol"
        ? !1
        : t();
    }),
    _s
  );
}
var Rs, Ao;
function kc() {
  return (
    Ao ||
      ((Ao = 1),
      (Rs = (typeof Reflect < "u" && Reflect.getPrototypeOf) || null)),
    Rs
  );
}
var ys, Co;
function Vc() {
  if (Co) return ys;
  Co = 1;
  var r = Oc();
  return (ys = r.getPrototypeOf || null), ys;
}
var gs, Bo;
function BE() {
  if (Bo) return gs;
  Bo = 1;
  var r = "Function.prototype.bind called on incompatible ",
    t = Object.prototype.toString,
    n = Math.max,
    i = "[object Function]",
    s = function (p, x) {
      for (var R = [], S = 0; S < p.length; S += 1) R[S] = p[S];
      for (var v = 0; v < x.length; v += 1) R[v + p.length] = x[v];
      return R;
    },
    f = function (p, x) {
      for (var R = [], S = x, v = 0; S < p.length; S += 1, v += 1) R[v] = p[S];
      return R;
    },
    e = function (l, p) {
      for (var x = "", R = 0; R < l.length; R += 1)
        (x += l[R]), R + 1 < l.length && (x += p);
      return x;
    };
  return (
    (gs = function (p) {
      var x = this;
      if (typeof x != "function" || t.apply(x) !== i)
        throw new TypeError(r + x);
      for (
        var R = f(arguments, 1),
          S,
          v = function () {
            if (this instanceof S) {
              var k = x.apply(this, s(R, arguments));
              return Object(k) === k ? k : this;
            }
            return x.apply(p, s(R, arguments));
          },
          d = n(0, x.length - R.length),
          I = [],
          j = 0;
        j < d;
        j++
      )
        I[j] = "$" + j;
      if (
        ((S = Function(
          "binder",
          "return function (" +
            e(I, ",") +
            "){ return binder.apply(this,arguments); }"
        )(v)),
        x.prototype)
      ) {
        var N = function () {};
        (N.prototype = x.prototype),
          (S.prototype = new N()),
          (N.prototype = null);
      }
      return S;
    }),
    gs
  );
}
var bs, Uo;
function Qr() {
  if (Uo) return bs;
  Uo = 1;
  var r = BE();
  return (bs = Function.prototype.bind || r), bs;
}
var ms, Ko;
function Pa() {
  return Ko || ((Ko = 1), (ms = Function.prototype.call)), ms;
}
var Ts, wo;
function Mc() {
  return wo || ((wo = 1), (Ts = Function.prototype.apply)), Ts;
}
var Ss, No;
function UE() {
  return (
    No || ((No = 1), (Ss = typeof Reflect < "u" && Reflect && Reflect.apply)),
    Ss
  );
}
var ds, Io;
function KE() {
  if (Io) return ds;
  Io = 1;
  var r = Qr(),
    t = Mc(),
    n = Pa(),
    i = UE();
  return (ds = i || r.call(n, t)), ds;
}
var vs, Do;
function qc() {
  if (Do) return vs;
  Do = 1;
  var r = Qr(),
    t = rr(),
    n = Pa(),
    i = KE();
  return (
    (vs = function (f) {
      if (f.length < 1 || typeof f[0] != "function")
        throw new t("a function is required");
      return i(r, n, f);
    }),
    vs
  );
}
var Ls, Oo;
function wE() {
  if (Oo) return Ls;
  Oo = 1;
  var r = qc(),
    t = Pc(),
    n;
  try {
    n = [].__proto__ === Array.prototype;
  } catch (e) {
    if (
      !e ||
      typeof e != "object" ||
      !("code" in e) ||
      e.code !== "ERR_PROTO_ACCESS"
    )
      throw e;
  }
  var i = !!n && t && t(Object.prototype, "__proto__"),
    s = Object,
    f = s.getPrototypeOf;
  return (
    (Ls =
      i && typeof i.get == "function"
        ? r([i.get])
        : typeof f == "function"
        ? function (l) {
            return f(l == null ? l : s(l));
          }
        : !1),
    Ls
  );
}
var As, Po;
function NE() {
  if (Po) return As;
  Po = 1;
  var r = kc(),
    t = Vc(),
    n = wE();
  return (
    (As = r
      ? function (s) {
          return r(s);
        }
      : t
      ? function (s) {
          if (!s || (typeof s != "object" && typeof s != "function"))
            throw new TypeError("getProto: not an object");
          return t(s);
        }
      : n
      ? function (s) {
          return n(s);
        }
      : null),
    As
  );
}
var Cs, ko;
function IE() {
  if (ko) return Cs;
  ko = 1;
  var r = Function.prototype.call,
    t = Object.prototype.hasOwnProperty,
    n = Qr();
  return (Cs = n.call(r, t)), Cs;
}
var Bs, Vo;
function ka() {
  if (Vo) return Bs;
  Vo = 1;
  var r,
    t = Oc(),
    n = cE(),
    i = pE(),
    s = EE(),
    f = hE(),
    e = xE(),
    l = rr(),
    p = _E(),
    x = RE(),
    R = yE(),
    S = gE(),
    v = bE(),
    d = mE(),
    I = TE(),
    j = dE(),
    N = Function,
    k = function (Ce) {
      try {
        return N('"use strict"; return (' + Ce + ").constructor;")();
      } catch {}
    },
    M = Pc(),
    ee = LE(),
    D = function () {
      throw new l();
    },
    O = M
      ? (function () {
          try {
            return arguments.callee, D;
          } catch {
            try {
              return M(arguments, "callee").get;
            } catch {
              return D;
            }
          }
        })()
      : D,
    o = CE()(),
    P = NE(),
    E = Vc(),
    A = kc(),
    B = Mc(),
    $ = Pa(),
    W = {},
    fe = typeof Uint8Array > "u" || !P ? r : P(Uint8Array),
    ue = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError > "u" ? r : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
      "%ArrayIteratorPrototype%": o && P ? P([][Symbol.iterator]()) : r,
      "%AsyncFromSyncIteratorPrototype%": r,
      "%AsyncFunction%": W,
      "%AsyncGenerator%": W,
      "%AsyncGeneratorFunction%": W,
      "%AsyncIteratorPrototype%": W,
      "%Atomics%": typeof Atomics > "u" ? r : Atomics,
      "%BigInt%": typeof BigInt > "u" ? r : BigInt,
      "%BigInt64Array%": typeof BigInt64Array > "u" ? r : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array > "u" ? r : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView > "u" ? r : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": n,
      "%eval%": eval,
      "%EvalError%": i,
      "%Float16Array%": typeof Float16Array > "u" ? r : Float16Array,
      "%Float32Array%": typeof Float32Array > "u" ? r : Float32Array,
      "%Float64Array%": typeof Float64Array > "u" ? r : Float64Array,
      "%FinalizationRegistry%":
        typeof FinalizationRegistry > "u" ? r : FinalizationRegistry,
      "%Function%": N,
      "%GeneratorFunction%": W,
      "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
      "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
      "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": o && P ? P(P([][Symbol.iterator]())) : r,
      "%JSON%": typeof JSON == "object" ? JSON : r,
      "%Map%": typeof Map > "u" ? r : Map,
      "%MapIteratorPrototype%":
        typeof Map > "u" || !o || !P ? r : P(new Map()[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": t,
      "%Object.getOwnPropertyDescriptor%": M,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise > "u" ? r : Promise,
      "%Proxy%": typeof Proxy > "u" ? r : Proxy,
      "%RangeError%": s,
      "%ReferenceError%": f,
      "%Reflect%": typeof Reflect > "u" ? r : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set > "u" ? r : Set,
      "%SetIteratorPrototype%":
        typeof Set > "u" || !o || !P ? r : P(new Set()[Symbol.iterator]()),
      "%SharedArrayBuffer%":
        typeof SharedArrayBuffer > "u" ? r : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": o && P ? P(""[Symbol.iterator]()) : r,
      "%Symbol%": o ? Symbol : r,
      "%SyntaxError%": e,
      "%ThrowTypeError%": O,
      "%TypedArray%": fe,
      "%TypeError%": l,
      "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
      "%Uint8ClampedArray%":
        typeof Uint8ClampedArray > "u" ? r : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
      "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
      "%URIError%": p,
      "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
      "%WeakRef%": typeof WeakRef > "u" ? r : WeakRef,
      "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet,
      "%Function.prototype.call%": $,
      "%Function.prototype.apply%": B,
      "%Object.defineProperty%": ee,
      "%Object.getPrototypeOf%": E,
      "%Math.abs%": x,
      "%Math.floor%": R,
      "%Math.max%": S,
      "%Math.min%": v,
      "%Math.pow%": d,
      "%Math.round%": I,
      "%Math.sign%": j,
      "%Reflect.getPrototypeOf%": A,
    };
  if (P)
    try {
      null.error;
    } catch (Ce) {
      var w = P(P(Ce));
      ue["%Error.prototype%"] = w;
    }
  var F = function Ce(xe) {
      var Be;
      if (xe === "%AsyncFunction%") Be = k("async function () {}");
      else if (xe === "%GeneratorFunction%") Be = k("function* () {}");
      else if (xe === "%AsyncGeneratorFunction%")
        Be = k("async function* () {}");
      else if (xe === "%AsyncGenerator%") {
        var Se = Ce("%AsyncGeneratorFunction%");
        Se && (Be = Se.prototype);
      } else if (xe === "%AsyncIteratorPrototype%") {
        var be = Ce("%AsyncGenerator%");
        be && P && (Be = P(be.prototype));
      }
      return (ue[xe] = Be), Be;
    },
    se = {
      __proto__: null,
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": [
        "AsyncGeneratorFunction",
        "prototype",
        "prototype",
      ],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"],
    },
    Z = Qr(),
    he = IE(),
    oe = Z.call($, Array.prototype.concat),
    ie = Z.call(B, Array.prototype.splice),
    T = Z.call($, String.prototype.replace),
    V = Z.call($, String.prototype.slice),
    Ee = Z.call($, RegExp.prototype.exec),
    Ue =
      /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    De = /\\(\\)?/g,
    He = function (xe) {
      var Be = V(xe, 0, 1),
        Se = V(xe, -1);
      if (Be === "%" && Se !== "%")
        throw new e("invalid intrinsic syntax, expected closing `%`");
      if (Se === "%" && Be !== "%")
        throw new e("invalid intrinsic syntax, expected opening `%`");
      var be = [];
      return (
        T(xe, Ue, function (we, Me, Oe, Ve) {
          be[be.length] = Oe ? T(Ve, De, "$1") : Me || we;
        }),
        be
      );
    },
    Te = function (xe, Be) {
      var Se = xe,
        be;
      if (
        (he(se, Se) && ((be = se[Se]), (Se = "%" + be[0] + "%")), he(ue, Se))
      ) {
        var we = ue[Se];
        if ((we === W && (we = F(Se)), typeof we > "u" && !Be))
          throw new l(
            "intrinsic " +
              xe +
              " exists, but is not available. Please file an issue!"
          );
        return { alias: be, name: Se, value: we };
      }
      throw new e("intrinsic " + xe + " does not exist!");
    };
  return (
    (Bs = function (xe, Be) {
      if (typeof xe != "string" || xe.length === 0)
        throw new l("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof Be != "boolean")
        throw new l('"allowMissing" argument must be a boolean');
      if (Ee(/^%?[^%]*%?$/, xe) === null)
        throw new e(
          "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
        );
      var Se = He(xe),
        be = Se.length > 0 ? Se[0] : "",
        we = Te("%" + be + "%", Be),
        Me = we.name,
        Oe = we.value,
        Ve = !1,
        qe = we.alias;
      qe && ((be = qe[0]), ie(Se, oe([0, 1], qe)));
      for (var me = 1, Ke = !0; me < Se.length; me += 1) {
        var Ne = Se[me],
          ft = V(Ne, 0, 1),
          Ye = V(Ne, -1);
        if (
          (ft === '"' ||
            ft === "'" ||
            ft === "`" ||
            Ye === '"' ||
            Ye === "'" ||
            Ye === "`") &&
          ft !== Ye
        )
          throw new e("property names with quotes must have matching quotes");
        if (
          ((Ne === "constructor" || !Ke) && (Ve = !0),
          (be += "." + Ne),
          (Me = "%" + be + "%"),
          he(ue, Me))
        )
          Oe = ue[Me];
        else if (Oe != null) {
          if (!(Ne in Oe)) {
            if (!Be)
              throw new l(
                "base intrinsic for " +
                  xe +
                  " exists, but the property is not available."
              );
            return;
          }
          if (M && me + 1 >= Se.length) {
            var Qe = M(Oe, Ne);
            (Ke = !!Qe),
              Ke && "get" in Qe && !("originalValue" in Qe.get)
                ? (Oe = Qe.get)
                : (Oe = Oe[Ne]);
          } else (Ke = he(Oe, Ne)), (Oe = Oe[Ne]);
          Ke && !Ve && (ue[Me] = Oe);
        }
      }
      return Oe;
    }),
    Bs
  );
}
var Us, Mo;
function Gc() {
  if (Mo) return Us;
  Mo = 1;
  var r = ka(),
    t = qc(),
    n = t([r("%String.prototype.indexOf%")]);
  return (
    (Us = function (s, f) {
      var e = r(s, !!f);
      return typeof e == "function" && n(s, ".prototype.") > -1 ? t([e]) : e;
    }),
    Us
  );
}
var Ks, qo;
function Xc() {
  if (qo) return Ks;
  qo = 1;
  var r = ka(),
    t = Gc(),
    n = Yr(),
    i = rr(),
    s = r("%Map%", !0),
    f = t("Map.prototype.get", !0),
    e = t("Map.prototype.set", !0),
    l = t("Map.prototype.has", !0),
    p = t("Map.prototype.delete", !0),
    x = t("Map.prototype.size", !0);
  return (
    (Ks =
      !!s &&
      function () {
        var S,
          v = {
            assert: function (d) {
              if (!v.has(d))
                throw new i("Side channel does not contain " + n(d));
            },
            delete: function (d) {
              if (S) {
                var I = p(S, d);
                return x(S) === 0 && (S = void 0), I;
              }
              return !1;
            },
            get: function (d) {
              if (S) return f(S, d);
            },
            has: function (d) {
              return S ? l(S, d) : !1;
            },
            set: function (d, I) {
              S || (S = new s()), e(S, d, I);
            },
          };
        return v;
      }),
    Ks
  );
}
var ws, Go;
function DE() {
  if (Go) return ws;
  Go = 1;
  var r = ka(),
    t = Gc(),
    n = Yr(),
    i = Xc(),
    s = rr(),
    f = r("%WeakMap%", !0),
    e = t("WeakMap.prototype.get", !0),
    l = t("WeakMap.prototype.set", !0),
    p = t("WeakMap.prototype.has", !0),
    x = t("WeakMap.prototype.delete", !0);
  return (
    (ws = f
      ? function () {
          var S,
            v,
            d = {
              assert: function (I) {
                if (!d.has(I))
                  throw new s("Side channel does not contain " + n(I));
              },
              delete: function (I) {
                if (
                  f &&
                  I &&
                  (typeof I == "object" || typeof I == "function")
                ) {
                  if (S) return x(S, I);
                } else if (i && v) return v.delete(I);
                return !1;
              },
              get: function (I) {
                return f &&
                  I &&
                  (typeof I == "object" || typeof I == "function") &&
                  S
                  ? e(S, I)
                  : v && v.get(I);
              },
              has: function (I) {
                return f &&
                  I &&
                  (typeof I == "object" || typeof I == "function") &&
                  S
                  ? p(S, I)
                  : !!v && v.has(I);
              },
              set: function (I, j) {
                f && I && (typeof I == "object" || typeof I == "function")
                  ? (S || (S = new f()), l(S, I, j))
                  : i && (v || (v = i()), v.set(I, j));
              },
            };
          return d;
        }
      : i),
    ws
  );
}
var Ns, Xo;
function OE() {
  if (Xo) return Ns;
  Xo = 1;
  var r = rr(),
    t = Yr(),
    n = lE(),
    i = Xc(),
    s = DE(),
    f = s || i || n;
  return (
    (Ns = function () {
      var l,
        p = {
          assert: function (x) {
            if (!p.has(x)) throw new r("Side channel does not contain " + t(x));
          },
          delete: function (x) {
            return !!l && l.delete(x);
          },
          get: function (x) {
            return l && l.get(x);
          },
          has: function (x) {
            return !!l && l.has(x);
          },
          set: function (x, R) {
            l || (l = f()), l.set(x, R);
          },
        };
      return p;
    }),
    Ns
  );
}
var Is, jo;
function Va() {
  if (jo) return Is;
  jo = 1;
  var r = String.prototype.replace,
    t = /%20/g,
    n = { RFC1738: "RFC1738", RFC3986: "RFC3986" };
  return (
    (Is = {
      default: n.RFC3986,
      formatters: {
        RFC1738: function (i) {
          return r.call(i, t, "+");
        },
        RFC3986: function (i) {
          return String(i);
        },
      },
      RFC1738: n.RFC1738,
      RFC3986: n.RFC3986,
    }),
    Is
  );
}
var Ds, $o;
function jc() {
  if ($o) return Ds;
  $o = 1;
  var r = Va(),
    t = Object.prototype.hasOwnProperty,
    n = Array.isArray,
    i = (function () {
      for (var N = [], k = 0; k < 256; ++k)
        N.push("%" + ((k < 16 ? "0" : "") + k.toString(16)).toUpperCase());
      return N;
    })(),
    s = function (k) {
      for (; k.length > 1; ) {
        var M = k.pop(),
          ee = M.obj[M.prop];
        if (n(ee)) {
          for (var D = [], O = 0; O < ee.length; ++O)
            typeof ee[O] < "u" && D.push(ee[O]);
          M.obj[M.prop] = D;
        }
      }
    },
    f = function (k, M) {
      for (
        var ee = M && M.plainObjects ? { __proto__: null } : {}, D = 0;
        D < k.length;
        ++D
      )
        typeof k[D] < "u" && (ee[D] = k[D]);
      return ee;
    },
    e = function N(k, M, ee) {
      if (!M) return k;
      if (typeof M != "object" && typeof M != "function") {
        if (n(k)) k.push(M);
        else if (k && typeof k == "object")
          ((ee && (ee.plainObjects || ee.allowPrototypes)) ||
            !t.call(Object.prototype, M)) &&
            (k[M] = !0);
        else return [k, M];
        return k;
      }
      if (!k || typeof k != "object") return [k].concat(M);
      var D = k;
      return (
        n(k) && !n(M) && (D = f(k, ee)),
        n(k) && n(M)
          ? (M.forEach(function (O, o) {
              if (t.call(k, o)) {
                var P = k[o];
                P && typeof P == "object" && O && typeof O == "object"
                  ? (k[o] = N(P, O, ee))
                  : k.push(O);
              } else k[o] = O;
            }),
            k)
          : Object.keys(M).reduce(function (O, o) {
              var P = M[o];
              return t.call(O, o) ? (O[o] = N(O[o], P, ee)) : (O[o] = P), O;
            }, D)
      );
    },
    l = function (k, M) {
      return Object.keys(M).reduce(function (ee, D) {
        return (ee[D] = M[D]), ee;
      }, k);
    },
    p = function (N, k, M) {
      var ee = N.replace(/\+/g, " ");
      if (M === "iso-8859-1") return ee.replace(/%[0-9a-f]{2}/gi, unescape);
      try {
        return decodeURIComponent(ee);
      } catch {
        return ee;
      }
    },
    x = 1024,
    R = function (k, M, ee, D, O) {
      if (k.length === 0) return k;
      var o = k;
      if (
        (typeof k == "symbol"
          ? (o = Symbol.prototype.toString.call(k))
          : typeof k != "string" && (o = String(k)),
        ee === "iso-8859-1")
      )
        return escape(o).replace(/%u[0-9a-f]{4}/gi, function (fe) {
          return "%26%23" + parseInt(fe.slice(2), 16) + "%3B";
        });
      for (var P = "", E = 0; E < o.length; E += x) {
        for (
          var A = o.length >= x ? o.slice(E, E + x) : o, B = [], $ = 0;
          $ < A.length;
          ++$
        ) {
          var W = A.charCodeAt($);
          if (
            W === 45 ||
            W === 46 ||
            W === 95 ||
            W === 126 ||
            (W >= 48 && W <= 57) ||
            (W >= 65 && W <= 90) ||
            (W >= 97 && W <= 122) ||
            (O === r.RFC1738 && (W === 40 || W === 41))
          ) {
            B[B.length] = A.charAt($);
            continue;
          }
          if (W < 128) {
            B[B.length] = i[W];
            continue;
          }
          if (W < 2048) {
            B[B.length] = i[192 | (W >> 6)] + i[128 | (W & 63)];
            continue;
          }
          if (W < 55296 || W >= 57344) {
            B[B.length] =
              i[224 | (W >> 12)] + i[128 | ((W >> 6) & 63)] + i[128 | (W & 63)];
            continue;
          }
          ($ += 1),
            (W = 65536 + (((W & 1023) << 10) | (A.charCodeAt($) & 1023))),
            (B[B.length] =
              i[240 | (W >> 18)] +
              i[128 | ((W >> 12) & 63)] +
              i[128 | ((W >> 6) & 63)] +
              i[128 | (W & 63)]);
        }
        P += B.join("");
      }
      return P;
    },
    S = function (k) {
      for (
        var M = [{ obj: { o: k }, prop: "o" }], ee = [], D = 0;
        D < M.length;
        ++D
      )
        for (
          var O = M[D], o = O.obj[O.prop], P = Object.keys(o), E = 0;
          E < P.length;
          ++E
        ) {
          var A = P[E],
            B = o[A];
          typeof B == "object" &&
            B !== null &&
            ee.indexOf(B) === -1 &&
            (M.push({ obj: o, prop: A }), ee.push(B));
        }
      return s(M), k;
    },
    v = function (k) {
      return Object.prototype.toString.call(k) === "[object RegExp]";
    },
    d = function (k) {
      return !k || typeof k != "object"
        ? !1
        : !!(
            k.constructor &&
            k.constructor.isBuffer &&
            k.constructor.isBuffer(k)
          );
    },
    I = function (k, M) {
      return [].concat(k, M);
    },
    j = function (k, M) {
      if (n(k)) {
        for (var ee = [], D = 0; D < k.length; D += 1) ee.push(M(k[D]));
        return ee;
      }
      return M(k);
    };
  return (
    (Ds = {
      arrayToObject: f,
      assign: l,
      combine: I,
      compact: S,
      decode: p,
      encode: R,
      isBuffer: d,
      isRegExp: v,
      maybeMap: j,
      merge: e,
    }),
    Ds
  );
}
var Os, Fo;
function PE() {
  if (Fo) return Os;
  Fo = 1;
  var r = OE(),
    t = jc(),
    n = Va(),
    i = Object.prototype.hasOwnProperty,
    s = {
      brackets: function (N) {
        return N + "[]";
      },
      comma: "comma",
      indices: function (N, k) {
        return N + "[" + k + "]";
      },
      repeat: function (N) {
        return N;
      },
    },
    f = Array.isArray,
    e = Array.prototype.push,
    l = function (j, N) {
      e.apply(j, f(N) ? N : [N]);
    },
    p = Date.prototype.toISOString,
    x = n.default,
    R = {
      addQueryPrefix: !1,
      allowDots: !1,
      allowEmptyArrays: !1,
      arrayFormat: "indices",
      charset: "utf-8",
      charsetSentinel: !1,
      commaRoundTrip: !1,
      delimiter: "&",
      encode: !0,
      encodeDotInKeys: !1,
      encoder: t.encode,
      encodeValuesOnly: !1,
      filter: void 0,
      format: x,
      formatter: n.formatters[x],
      indices: !1,
      serializeDate: function (N) {
        return p.call(N);
      },
      skipNulls: !1,
      strictNullHandling: !1,
    },
    S = function (N) {
      return (
        typeof N == "string" ||
        typeof N == "number" ||
        typeof N == "boolean" ||
        typeof N == "symbol" ||
        typeof N == "bigint"
      );
    },
    v = {},
    d = function j(N, k, M, ee, D, O, o, P, E, A, B, $, W, fe, ue, w, F, se) {
      for (
        var Z = N, he = se, oe = 0, ie = !1;
        (he = he.get(v)) !== void 0 && !ie;

      ) {
        var T = he.get(N);
        if (((oe += 1), typeof T < "u")) {
          if (T === oe) throw new RangeError("Cyclic object value");
          ie = !0;
        }
        typeof he.get(v) > "u" && (oe = 0);
      }
      if (
        (typeof A == "function"
          ? (Z = A(k, Z))
          : Z instanceof Date
          ? (Z = W(Z))
          : M === "comma" &&
            f(Z) &&
            (Z = t.maybeMap(Z, function (Me) {
              return Me instanceof Date ? W(Me) : Me;
            })),
        Z === null)
      ) {
        if (O) return E && !w ? E(k, R.encoder, F, "key", fe) : k;
        Z = "";
      }
      if (S(Z) || t.isBuffer(Z)) {
        if (E) {
          var V = w ? k : E(k, R.encoder, F, "key", fe);
          return [ue(V) + "=" + ue(E(Z, R.encoder, F, "value", fe))];
        }
        return [ue(k) + "=" + ue(String(Z))];
      }
      var Ee = [];
      if (typeof Z > "u") return Ee;
      var Ue;
      if (M === "comma" && f(Z))
        w && E && (Z = t.maybeMap(Z, E)),
          (Ue = [{ value: Z.length > 0 ? Z.join(",") || null : void 0 }]);
      else if (f(A)) Ue = A;
      else {
        var De = Object.keys(Z);
        Ue = B ? De.sort(B) : De;
      }
      var He = P ? String(k).replace(/\./g, "%2E") : String(k),
        Te = ee && f(Z) && Z.length === 1 ? He + "[]" : He;
      if (D && f(Z) && Z.length === 0) return Te + "[]";
      for (var Ce = 0; Ce < Ue.length; ++Ce) {
        var xe = Ue[Ce],
          Be =
            typeof xe == "object" && xe && typeof xe.value < "u"
              ? xe.value
              : Z[xe];
        if (!(o && Be === null)) {
          var Se = $ && P ? String(xe).replace(/\./g, "%2E") : String(xe),
            be = f(Z)
              ? typeof M == "function"
                ? M(Te, Se)
                : Te
              : Te + ($ ? "." + Se : "[" + Se + "]");
          se.set(N, oe);
          var we = r();
          we.set(v, se),
            l(
              Ee,
              j(
                Be,
                be,
                M,
                ee,
                D,
                O,
                o,
                P,
                M === "comma" && w && f(Z) ? null : E,
                A,
                B,
                $,
                W,
                fe,
                ue,
                w,
                F,
                we
              )
            );
        }
      }
      return Ee;
    },
    I = function (N) {
      if (!N) return R;
      if (
        typeof N.allowEmptyArrays < "u" &&
        typeof N.allowEmptyArrays != "boolean"
      )
        throw new TypeError(
          "`allowEmptyArrays` option can only be `true` or `false`, when provided"
        );
      if (
        typeof N.encodeDotInKeys < "u" &&
        typeof N.encodeDotInKeys != "boolean"
      )
        throw new TypeError(
          "`encodeDotInKeys` option can only be `true` or `false`, when provided"
        );
      if (
        N.encoder !== null &&
        typeof N.encoder < "u" &&
        typeof N.encoder != "function"
      )
        throw new TypeError("Encoder has to be a function.");
      var k = N.charset || R.charset;
      if (
        typeof N.charset < "u" &&
        N.charset !== "utf-8" &&
        N.charset !== "iso-8859-1"
      )
        throw new TypeError(
          "The charset option must be either utf-8, iso-8859-1, or undefined"
        );
      var M = n.default;
      if (typeof N.format < "u") {
        if (!i.call(n.formatters, N.format))
          throw new TypeError("Unknown format option provided.");
        M = N.format;
      }
      var ee = n.formatters[M],
        D = R.filter;
      (typeof N.filter == "function" || f(N.filter)) && (D = N.filter);
      var O;
      if (
        (N.arrayFormat in s
          ? (O = N.arrayFormat)
          : "indices" in N
          ? (O = N.indices ? "indices" : "repeat")
          : (O = R.arrayFormat),
        "commaRoundTrip" in N && typeof N.commaRoundTrip != "boolean")
      )
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      var o =
        typeof N.allowDots > "u"
          ? N.encodeDotInKeys === !0
            ? !0
            : R.allowDots
          : !!N.allowDots;
      return {
        addQueryPrefix:
          typeof N.addQueryPrefix == "boolean"
            ? N.addQueryPrefix
            : R.addQueryPrefix,
        allowDots: o,
        allowEmptyArrays:
          typeof N.allowEmptyArrays == "boolean"
            ? !!N.allowEmptyArrays
            : R.allowEmptyArrays,
        arrayFormat: O,
        charset: k,
        charsetSentinel:
          typeof N.charsetSentinel == "boolean"
            ? N.charsetSentinel
            : R.charsetSentinel,
        commaRoundTrip: !!N.commaRoundTrip,
        delimiter: typeof N.delimiter > "u" ? R.delimiter : N.delimiter,
        encode: typeof N.encode == "boolean" ? N.encode : R.encode,
        encodeDotInKeys:
          typeof N.encodeDotInKeys == "boolean"
            ? N.encodeDotInKeys
            : R.encodeDotInKeys,
        encoder: typeof N.encoder == "function" ? N.encoder : R.encoder,
        encodeValuesOnly:
          typeof N.encodeValuesOnly == "boolean"
            ? N.encodeValuesOnly
            : R.encodeValuesOnly,
        filter: D,
        format: M,
        formatter: ee,
        serializeDate:
          typeof N.serializeDate == "function"
            ? N.serializeDate
            : R.serializeDate,
        skipNulls: typeof N.skipNulls == "boolean" ? N.skipNulls : R.skipNulls,
        sort: typeof N.sort == "function" ? N.sort : null,
        strictNullHandling:
          typeof N.strictNullHandling == "boolean"
            ? N.strictNullHandling
            : R.strictNullHandling,
      };
    };
  return (
    (Os = function (j, N) {
      var k = j,
        M = I(N),
        ee,
        D;
      typeof M.filter == "function"
        ? ((D = M.filter), (k = D("", k)))
        : f(M.filter) && ((D = M.filter), (ee = D));
      var O = [];
      if (typeof k != "object" || k === null) return "";
      var o = s[M.arrayFormat],
        P = o === "comma" && M.commaRoundTrip;
      ee || (ee = Object.keys(k)), M.sort && ee.sort(M.sort);
      for (var E = r(), A = 0; A < ee.length; ++A) {
        var B = ee[A],
          $ = k[B];
        (M.skipNulls && $ === null) ||
          l(
            O,
            d(
              $,
              B,
              o,
              P,
              M.allowEmptyArrays,
              M.strictNullHandling,
              M.skipNulls,
              M.encodeDotInKeys,
              M.encode ? M.encoder : null,
              M.filter,
              M.sort,
              M.allowDots,
              M.serializeDate,
              M.format,
              M.formatter,
              M.encodeValuesOnly,
              M.charset,
              E
            )
          );
      }
      var W = O.join(M.delimiter),
        fe = M.addQueryPrefix === !0 ? "?" : "";
      return (
        M.charsetSentinel &&
          (M.charset === "iso-8859-1"
            ? (fe += "utf8=%26%2310003%3B&")
            : (fe += "utf8=%E2%9C%93&")),
        W.length > 0 ? fe + W : ""
      );
    }),
    Os
  );
}
var Ps, Ho;
function kE() {
  if (Ho) return Ps;
  Ho = 1;
  var r = jc(),
    t = Object.prototype.hasOwnProperty,
    n = Array.isArray,
    i = {
      allowDots: !1,
      allowEmptyArrays: !1,
      allowPrototypes: !1,
      allowSparse: !1,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: !1,
      comma: !1,
      decodeDotInKeys: !1,
      decoder: r.decode,
      delimiter: "&",
      depth: 5,
      duplicates: "combine",
      ignoreQueryPrefix: !1,
      interpretNumericEntities: !1,
      parameterLimit: 1e3,
      parseArrays: !0,
      plainObjects: !1,
      strictDepth: !1,
      strictNullHandling: !1,
      throwOnLimitExceeded: !1,
    },
    s = function (v) {
      return v.replace(/&#(\d+);/g, function (d, I) {
        return String.fromCharCode(parseInt(I, 10));
      });
    },
    f = function (v, d, I) {
      if (v && typeof v == "string" && d.comma && v.indexOf(",") > -1)
        return v.split(",");
      if (d.throwOnLimitExceeded && I >= d.arrayLimit)
        throw new RangeError(
          "Array limit exceeded. Only " +
            d.arrayLimit +
            " element" +
            (d.arrayLimit === 1 ? "" : "s") +
            " allowed in an array."
        );
      return v;
    },
    e = "utf8=%26%2310003%3B",
    l = "utf8=%E2%9C%93",
    p = function (d, I) {
      var j = { __proto__: null },
        N = I.ignoreQueryPrefix ? d.replace(/^\?/, "") : d;
      N = N.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      var k = I.parameterLimit === 1 / 0 ? void 0 : I.parameterLimit,
        M = N.split(I.delimiter, I.throwOnLimitExceeded ? k + 1 : k);
      if (I.throwOnLimitExceeded && M.length > k)
        throw new RangeError(
          "Parameter limit exceeded. Only " +
            k +
            " parameter" +
            (k === 1 ? "" : "s") +
            " allowed."
        );
      var ee = -1,
        D,
        O = I.charset;
      if (I.charsetSentinel)
        for (D = 0; D < M.length; ++D)
          M[D].indexOf("utf8=") === 0 &&
            (M[D] === l ? (O = "utf-8") : M[D] === e && (O = "iso-8859-1"),
            (ee = D),
            (D = M.length));
      for (D = 0; D < M.length; ++D)
        if (D !== ee) {
          var o = M[D],
            P = o.indexOf("]="),
            E = P === -1 ? o.indexOf("=") : P + 1,
            A,
            B;
          E === -1
            ? ((A = I.decoder(o, i.decoder, O, "key")),
              (B = I.strictNullHandling ? null : ""))
            : ((A = I.decoder(o.slice(0, E), i.decoder, O, "key")),
              (B = r.maybeMap(
                f(o.slice(E + 1), I, n(j[A]) ? j[A].length : 0),
                function (W) {
                  return I.decoder(W, i.decoder, O, "value");
                }
              ))),
            B &&
              I.interpretNumericEntities &&
              O === "iso-8859-1" &&
              (B = s(String(B))),
            o.indexOf("[]=") > -1 && (B = n(B) ? [B] : B);
          var $ = t.call(j, A);
          $ && I.duplicates === "combine"
            ? (j[A] = r.combine(j[A], B))
            : (!$ || I.duplicates === "last") && (j[A] = B);
        }
      return j;
    },
    x = function (v, d, I, j) {
      var N = 0;
      if (v.length > 0 && v[v.length - 1] === "[]") {
        var k = v.slice(0, -1).join("");
        N = Array.isArray(d) && d[k] ? d[k].length : 0;
      }
      for (var M = j ? d : f(d, I, N), ee = v.length - 1; ee >= 0; --ee) {
        var D,
          O = v[ee];
        if (O === "[]" && I.parseArrays)
          D =
            I.allowEmptyArrays &&
            (M === "" || (I.strictNullHandling && M === null))
              ? []
              : r.combine([], M);
        else {
          D = I.plainObjects ? { __proto__: null } : {};
          var o =
              O.charAt(0) === "[" && O.charAt(O.length - 1) === "]"
                ? O.slice(1, -1)
                : O,
            P = I.decodeDotInKeys ? o.replace(/%2E/g, ".") : o,
            E = parseInt(P, 10);
          !I.parseArrays && P === ""
            ? (D = { 0: M })
            : !isNaN(E) &&
              O !== P &&
              String(E) === P &&
              E >= 0 &&
              I.parseArrays &&
              E <= I.arrayLimit
            ? ((D = []), (D[E] = M))
            : P !== "__proto__" && (D[P] = M);
        }
        M = D;
      }
      return M;
    },
    R = function (d, I, j, N) {
      if (d) {
        var k = j.allowDots ? d.replace(/\.([^.[]+)/g, "[$1]") : d,
          M = /(\[[^[\]]*])/,
          ee = /(\[[^[\]]*])/g,
          D = j.depth > 0 && M.exec(k),
          O = D ? k.slice(0, D.index) : k,
          o = [];
        if (O) {
          if (
            !j.plainObjects &&
            t.call(Object.prototype, O) &&
            !j.allowPrototypes
          )
            return;
          o.push(O);
        }
        for (
          var P = 0;
          j.depth > 0 && (D = ee.exec(k)) !== null && P < j.depth;

        ) {
          if (
            ((P += 1),
            !j.plainObjects &&
              t.call(Object.prototype, D[1].slice(1, -1)) &&
              !j.allowPrototypes)
          )
            return;
          o.push(D[1]);
        }
        if (D) {
          if (j.strictDepth === !0)
            throw new RangeError(
              "Input depth exceeded depth option of " +
                j.depth +
                " and strictDepth is true"
            );
          o.push("[" + k.slice(D.index) + "]");
        }
        return x(o, I, j, N);
      }
    },
    S = function (d) {
      if (!d) return i;
      if (
        typeof d.allowEmptyArrays < "u" &&
        typeof d.allowEmptyArrays != "boolean"
      )
        throw new TypeError(
          "`allowEmptyArrays` option can only be `true` or `false`, when provided"
        );
      if (
        typeof d.decodeDotInKeys < "u" &&
        typeof d.decodeDotInKeys != "boolean"
      )
        throw new TypeError(
          "`decodeDotInKeys` option can only be `true` or `false`, when provided"
        );
      if (
        d.decoder !== null &&
        typeof d.decoder < "u" &&
        typeof d.decoder != "function"
      )
        throw new TypeError("Decoder has to be a function.");
      if (
        typeof d.charset < "u" &&
        d.charset !== "utf-8" &&
        d.charset !== "iso-8859-1"
      )
        throw new TypeError(
          "The charset option must be either utf-8, iso-8859-1, or undefined"
        );
      if (
        typeof d.throwOnLimitExceeded < "u" &&
        typeof d.throwOnLimitExceeded != "boolean"
      )
        throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
      var I = typeof d.charset > "u" ? i.charset : d.charset,
        j = typeof d.duplicates > "u" ? i.duplicates : d.duplicates;
      if (j !== "combine" && j !== "first" && j !== "last")
        throw new TypeError(
          "The duplicates option must be either combine, first, or last"
        );
      var N =
        typeof d.allowDots > "u"
          ? d.decodeDotInKeys === !0
            ? !0
            : i.allowDots
          : !!d.allowDots;
      return {
        allowDots: N,
        allowEmptyArrays:
          typeof d.allowEmptyArrays == "boolean"
            ? !!d.allowEmptyArrays
            : i.allowEmptyArrays,
        allowPrototypes:
          typeof d.allowPrototypes == "boolean"
            ? d.allowPrototypes
            : i.allowPrototypes,
        allowSparse:
          typeof d.allowSparse == "boolean" ? d.allowSparse : i.allowSparse,
        arrayLimit:
          typeof d.arrayLimit == "number" ? d.arrayLimit : i.arrayLimit,
        charset: I,
        charsetSentinel:
          typeof d.charsetSentinel == "boolean"
            ? d.charsetSentinel
            : i.charsetSentinel,
        comma: typeof d.comma == "boolean" ? d.comma : i.comma,
        decodeDotInKeys:
          typeof d.decodeDotInKeys == "boolean"
            ? d.decodeDotInKeys
            : i.decodeDotInKeys,
        decoder: typeof d.decoder == "function" ? d.decoder : i.decoder,
        delimiter:
          typeof d.delimiter == "string" || r.isRegExp(d.delimiter)
            ? d.delimiter
            : i.delimiter,
        depth:
          typeof d.depth == "number" || d.depth === !1 ? +d.depth : i.depth,
        duplicates: j,
        ignoreQueryPrefix: d.ignoreQueryPrefix === !0,
        interpretNumericEntities:
          typeof d.interpretNumericEntities == "boolean"
            ? d.interpretNumericEntities
            : i.interpretNumericEntities,
        parameterLimit:
          typeof d.parameterLimit == "number"
            ? d.parameterLimit
            : i.parameterLimit,
        parseArrays: d.parseArrays !== !1,
        plainObjects:
          typeof d.plainObjects == "boolean" ? d.plainObjects : i.plainObjects,
        strictDepth:
          typeof d.strictDepth == "boolean" ? !!d.strictDepth : i.strictDepth,
        strictNullHandling:
          typeof d.strictNullHandling == "boolean"
            ? d.strictNullHandling
            : i.strictNullHandling,
        throwOnLimitExceeded:
          typeof d.throwOnLimitExceeded == "boolean"
            ? d.throwOnLimitExceeded
            : !1,
      };
    };
  return (
    (Ps = function (v, d) {
      var I = S(d);
      if (v === "" || v === null || typeof v > "u")
        return I.plainObjects ? { __proto__: null } : {};
      for (
        var j = typeof v == "string" ? p(v, I) : v,
          N = I.plainObjects ? { __proto__: null } : {},
          k = Object.keys(j),
          M = 0;
        M < k.length;
        ++M
      ) {
        var ee = k[M],
          D = R(ee, j[ee], I, typeof v == "string");
        N = r.merge(N, D, I);
      }
      return I.allowSparse === !0 ? N : r.compact(N);
    }),
    Ps
  );
}
var ks, Wo;
function $c() {
  if (Wo) return ks;
  Wo = 1;
  var r = PE(),
    t = kE(),
    n = Va();
  return (ks = { formats: n, parse: t, stringify: r }), ks;
}
var Vs, zo;
function Mr() {
  if (zo) return Vs;
  zo = 1;
  class r {
    constructor(l) {
      (this.code = l.code), (this.token = l.token), (this.host = l.host);
    }
  }
  class t {
    constructor(l) {
      (this.appId = l.appId),
        (this.appTag = l.appTag),
        (this.audienceEnabled = l.audienceEnabled),
        (this.code = l.code),
        (this.host = l.host),
        (this.audienceHost = l.audienceHost),
        (this.locked = l.locked),
        (this.full = l.full),
        (this.maxPlayers = l.maxPlayers),
        (this.minPlayers = l.minPlayers),
        (this.moderationEnabled = l.moderationEnabled),
        (this.passwordRequired = l.passwordRequired),
        (this.twitchLocked = l.twitchLocked),
        (this.locale = l.locale),
        (this.keepalive = l.keepalive),
        (this.controllerBranch = l.controllerBranch);
    }
  }
  class n {
    constructor(l) {
      this.connections = l.connections;
    }
  }
  class i {
    constructor(l) {
      this.cause = l.cause;
    }
    whenReceived(l) {
      l.disconnect();
    }
  }
  class s {}
  class f {
    constructor(l) {
      (this.host = l.host), (this.code = l.code), (this.password = l.password);
    }
  }
  return (
    (Vs = {
      CreateRoomReply: r,
      GetRoomReply: t,
      GetAudienceReply: n,
      RoomExit: i,
      RoomLock: s,
      RoomMigrate: f,
    }),
    Vs
  );
}
var Ms, Jo;
function VE() {
  if (Jo) return Ms;
  Jo = 1;
  const r = aE(),
    t = $c(),
    { CreateRoomReply: n, GetRoomReply: i } = Mr();
  class s {
    constructor(e) {
      if (!e.host)
        throw new Error("unable to create ecast APIClient: no host provided");
      if (((this.host = e.host), !e.scheme))
        throw new Error("unable to create ecast APIClient: no scheme provided");
      this.scheme = e.scheme;
    }
    url(e, l) {
      if (l) {
        let p = t.stringify(l);
        return `${this.scheme}://${this.host}/api/v2${e}?${p}`;
      }
      return `${this.scheme}://${this.host}/api/v2${e}`;
    }
    async createRoom(e) {
      let l = { appTag: "test", userId: "fart", ...e },
        p = this.url("/rooms", l),
        R = await r(p, { method: "POST" });
      const { body: S, error: v, ok: d } = await R.json();
      if (!d) throw new Error(`failed to create room: ${v}`);
      return new n({ code: S.code, token: S.token, host: S.host });
    }
    async getRoom(e) {
      let l = this.url(`/rooms/${e.code}`),
        x = await (await r(l)).json();
      if (!x.ok)
        throw new Error(
          `unable to get room with options ${JSON.stringify(e)}: ${x.error}`
        );
      let R = x.body;
      return new i({
        appId: R.appId,
        appTag: R.appTag,
        audienceEnabled: R.audienceEnabled,
        code: R.code,
        host: R.host,
        audienceHost: R.audienceHost,
        locked: R.locked,
        full: R.full,
        maxPlayers: R.maxPlayers,
        minPlayers: R.minPlayers,
        moderationEnabled: R.moderationEnabled,
        passwordRequired: R.passwordRequired,
        twitchLocked: R.twitchLocked,
        locale: R.locale,
        keepalive: R.keepalive,
        controllerBranch: R.controllerBranch,
      });
    }
  }
  return (Ms = { APIClient: s }), Ms;
}
var qs, Yo;
function ME() {
  if (Yo) return qs;
  Yo = 1;
  var r = null;
  return (
    typeof WebSocket < "u"
      ? (r = WebSocket)
      : typeof MozWebSocket < "u"
      ? (r = MozWebSocket)
      : typeof Xe < "u"
      ? (r = Xe.WebSocket || Xe.MozWebSocket)
      : typeof window < "u"
      ? (r = window.WebSocket || window.MozWebSocket)
      : typeof self < "u" && (r = self.WebSocket || self.MozWebSocket),
    (qs = r),
    qs
  );
}
var Cr = { exports: {} },
  Qo;
function qE() {
  if (Qo) return Cr.exports;
  Qo = 1;
  var r = typeof Reflect == "object" ? Reflect : null,
    t =
      r && typeof r.apply == "function"
        ? r.apply
        : function (O, o, P) {
            return Function.prototype.apply.call(O, o, P);
          },
    n;
  r && typeof r.ownKeys == "function"
    ? (n = r.ownKeys)
    : Object.getOwnPropertySymbols
    ? (n = function (O) {
        return Object.getOwnPropertyNames(O).concat(
          Object.getOwnPropertySymbols(O)
        );
      })
    : (n = function (O) {
        return Object.getOwnPropertyNames(O);
      });
  function i(D) {
    console && console.warn && console.warn(D);
  }
  var s =
    Number.isNaN ||
    function (O) {
      return O !== O;
    };
  function f() {
    f.init.call(this);
  }
  (Cr.exports = f),
    (Cr.exports.once = k),
    (f.EventEmitter = f),
    (f.prototype._events = void 0),
    (f.prototype._eventsCount = 0),
    (f.prototype._maxListeners = void 0);
  var e = 10;
  function l(D) {
    if (typeof D != "function")
      throw new TypeError(
        'The "listener" argument must be of type Function. Received type ' +
          typeof D
      );
  }
  Object.defineProperty(f, "defaultMaxListeners", {
    enumerable: !0,
    get: function () {
      return e;
    },
    set: function (D) {
      if (typeof D != "number" || D < 0 || s(D))
        throw new RangeError(
          'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
            D +
            "."
        );
      e = D;
    },
  }),
    (f.init = function () {
      (this._events === void 0 ||
        this._events === Object.getPrototypeOf(this)._events) &&
        ((this._events = Object.create(null)), (this._eventsCount = 0)),
        (this._maxListeners = this._maxListeners || void 0);
    }),
    (f.prototype.setMaxListeners = function (O) {
      if (typeof O != "number" || O < 0 || s(O))
        throw new RangeError(
          'The value of "n" is out of range. It must be a non-negative number. Received ' +
            O +
            "."
        );
      return (this._maxListeners = O), this;
    });
  function p(D) {
    return D._maxListeners === void 0 ? f.defaultMaxListeners : D._maxListeners;
  }
  (f.prototype.getMaxListeners = function () {
    return p(this);
  }),
    (f.prototype.emit = function (O) {
      for (var o = [], P = 1; P < arguments.length; P++) o.push(arguments[P]);
      var E = O === "error",
        A = this._events;
      if (A !== void 0) E = E && A.error === void 0;
      else if (!E) return !1;
      if (E) {
        var B;
        if ((o.length > 0 && (B = o[0]), B instanceof Error)) throw B;
        var $ = new Error(
          "Unhandled error." + (B ? " (" + B.message + ")" : "")
        );
        throw (($.context = B), $);
      }
      var W = A[O];
      if (W === void 0) return !1;
      if (typeof W == "function") t(W, this, o);
      else
        for (var fe = W.length, ue = I(W, fe), P = 0; P < fe; ++P)
          t(ue[P], this, o);
      return !0;
    });
  function x(D, O, o, P) {
    var E, A, B;
    if (
      (l(o),
      (A = D._events),
      A === void 0
        ? ((A = D._events = Object.create(null)), (D._eventsCount = 0))
        : (A.newListener !== void 0 &&
            (D.emit("newListener", O, o.listener ? o.listener : o),
            (A = D._events)),
          (B = A[O])),
      B === void 0)
    )
      (B = A[O] = o), ++D._eventsCount;
    else if (
      (typeof B == "function"
        ? (B = A[O] = P ? [o, B] : [B, o])
        : P
        ? B.unshift(o)
        : B.push(o),
      (E = p(D)),
      E > 0 && B.length > E && !B.warned)
    ) {
      B.warned = !0;
      var $ = new Error(
        "Possible EventEmitter memory leak detected. " +
          B.length +
          " " +
          String(O) +
          " listeners added. Use emitter.setMaxListeners() to increase limit"
      );
      ($.name = "MaxListenersExceededWarning"),
        ($.emitter = D),
        ($.type = O),
        ($.count = B.length),
        i($);
    }
    return D;
  }
  (f.prototype.addListener = function (O, o) {
    return x(this, O, o, !1);
  }),
    (f.prototype.on = f.prototype.addListener),
    (f.prototype.prependListener = function (O, o) {
      return x(this, O, o, !0);
    });
  function R() {
    if (!this.fired)
      return (
        this.target.removeListener(this.type, this.wrapFn),
        (this.fired = !0),
        arguments.length === 0
          ? this.listener.call(this.target)
          : this.listener.apply(this.target, arguments)
      );
  }
  function S(D, O, o) {
    var P = { fired: !1, wrapFn: void 0, target: D, type: O, listener: o },
      E = R.bind(P);
    return (E.listener = o), (P.wrapFn = E), E;
  }
  (f.prototype.once = function (O, o) {
    return l(o), this.on(O, S(this, O, o)), this;
  }),
    (f.prototype.prependOnceListener = function (O, o) {
      return l(o), this.prependListener(O, S(this, O, o)), this;
    }),
    (f.prototype.removeListener = function (O, o) {
      var P, E, A, B, $;
      if ((l(o), (E = this._events), E === void 0)) return this;
      if (((P = E[O]), P === void 0)) return this;
      if (P === o || P.listener === o)
        --this._eventsCount === 0
          ? (this._events = Object.create(null))
          : (delete E[O],
            E.removeListener &&
              this.emit("removeListener", O, P.listener || o));
      else if (typeof P != "function") {
        for (A = -1, B = P.length - 1; B >= 0; B--)
          if (P[B] === o || P[B].listener === o) {
            ($ = P[B].listener), (A = B);
            break;
          }
        if (A < 0) return this;
        A === 0 ? P.shift() : j(P, A),
          P.length === 1 && (E[O] = P[0]),
          E.removeListener !== void 0 && this.emit("removeListener", O, $ || o);
      }
      return this;
    }),
    (f.prototype.off = f.prototype.removeListener),
    (f.prototype.removeAllListeners = function (O) {
      var o, P, E;
      if (((P = this._events), P === void 0)) return this;
      if (P.removeListener === void 0)
        return (
          arguments.length === 0
            ? ((this._events = Object.create(null)), (this._eventsCount = 0))
            : P[O] !== void 0 &&
              (--this._eventsCount === 0
                ? (this._events = Object.create(null))
                : delete P[O]),
          this
        );
      if (arguments.length === 0) {
        var A = Object.keys(P),
          B;
        for (E = 0; E < A.length; ++E)
          (B = A[E]), B !== "removeListener" && this.removeAllListeners(B);
        return (
          this.removeAllListeners("removeListener"),
          (this._events = Object.create(null)),
          (this._eventsCount = 0),
          this
        );
      }
      if (((o = P[O]), typeof o == "function")) this.removeListener(O, o);
      else if (o !== void 0)
        for (E = o.length - 1; E >= 0; E--) this.removeListener(O, o[E]);
      return this;
    });
  function v(D, O, o) {
    var P = D._events;
    if (P === void 0) return [];
    var E = P[O];
    return E === void 0
      ? []
      : typeof E == "function"
      ? o
        ? [E.listener || E]
        : [E]
      : o
      ? N(E)
      : I(E, E.length);
  }
  (f.prototype.listeners = function (O) {
    return v(this, O, !0);
  }),
    (f.prototype.rawListeners = function (O) {
      return v(this, O, !1);
    }),
    (f.listenerCount = function (D, O) {
      return typeof D.listenerCount == "function"
        ? D.listenerCount(O)
        : d.call(D, O);
    }),
    (f.prototype.listenerCount = d);
  function d(D) {
    var O = this._events;
    if (O !== void 0) {
      var o = O[D];
      if (typeof o == "function") return 1;
      if (o !== void 0) return o.length;
    }
    return 0;
  }
  f.prototype.eventNames = function () {
    return this._eventsCount > 0 ? n(this._events) : [];
  };
  function I(D, O) {
    for (var o = new Array(O), P = 0; P < O; ++P) o[P] = D[P];
    return o;
  }
  function j(D, O) {
    for (; O + 1 < D.length; O++) D[O] = D[O + 1];
    D.pop();
  }
  function N(D) {
    for (var O = new Array(D.length), o = 0; o < O.length; ++o)
      O[o] = D[o].listener || D[o];
    return O;
  }
  function k(D, O) {
    return new Promise(function (o, P) {
      function E(B) {
        D.removeListener(O, A), P(B);
      }
      function A() {
        typeof D.removeListener == "function" && D.removeListener("error", E),
          o([].slice.call(arguments));
      }
      ee(D, O, A, { once: !0 }), O !== "error" && M(D, E, { once: !0 });
    });
  }
  function M(D, O, o) {
    typeof D.on == "function" && ee(D, "error", O, o);
  }
  function ee(D, O, o, P) {
    if (typeof D.on == "function") P.once ? D.once(O, o) : D.on(O, o);
    else if (typeof D.addEventListener == "function")
      D.addEventListener(O, function E(A) {
        P.once && D.removeEventListener(O, E), o(A);
      });
    else
      throw new TypeError(
        'The "emitter" argument must be of type EventEmitter. Received type ' +
          typeof D
      );
  }
  return Cr.exports;
}
var Gs, Zo;
function Fc() {
  if (Zo) return Gs;
  Zo = 1;
  class r {
    constructor(T) {
      T && ((this.error = T.error), (this.to = T.to), (this.opcode = T.opcode));
    }
    toString() {
      return `ObservedError{
	to:${this.to}
	error:${this.error}
	opcode:${this.opcode}
}`;
    }
  }
  class t extends Error {
    constructor(T) {
      super(T), T && ((this.code = T.code), (this.message = T.message));
    }
  }
  class n extends t {
    constructor(T) {
      super(T),
        (this.code = 1e3),
        (this.message = T && T.message ? T.message : "ecast server error");
    }
  }
  class i extends n {
    constructor(T) {
      super(T),
        (this.code = 1001),
        (this.message = T && T.message ? T.message : "create room failed");
    }
  }
  class s extends n {
    constructor(T) {
      super(T),
        (this.code = 1002),
        (this.message =
          T && T.message ? T.message : "unable to connect to room");
    }
  }
  class f extends n {
    constructor(T) {
      super(T),
        (this.code = 1003),
        (this.message = T && T.message ? T.message : "server is shutting down");
    }
  }
  class e extends t {
    constructor(T) {
      super(T),
        (this.code = 2e3),
        (this.message = T && T.message ? T.message : "ecast client error");
    }
  }
  class l extends e {
    constructor(T) {
      super(T),
        (this.code = 2001),
        (this.message =
          T && T.message ? T.message : "parse error in ecast protocol");
    }
  }
  class p extends e {
    constructor(T) {
      super(T),
        (this.code = 2002),
        (this.message = T && T.message ? T.message : "missing opcode");
    }
  }
  class x extends e {
    constructor(T) {
      super(T),
        (this.code = 2003),
        (this.message = T && T.message ? T.message : "invalid opcode");
    }
  }
  class R extends e {
    constructor(T) {
      super(T),
        (this.code = 2004),
        (this.message = T && T.message ? T.message : "invalid arguments");
    }
  }
  class S extends e {
    constructor(T) {
      super(T),
        (this.code = 2005),
        (this.message = T && T.message ? T.message : "entity not found");
    }
  }
  class v extends e {
    constructor(T) {
      super(T),
        (this.code = 2006),
        (this.message =
          T && T.message
            ? T.message
            : "an entity already exists with that key");
    }
  }
  class d extends e {
    constructor(T) {
      super(T),
        (this.code = 2007),
        (this.message =
          T && T.message
            ? T.message
            : "the entity is not of the expected type");
    }
  }
  class I extends e {
    constructor(T) {
      super(T),
        (this.code = 2008),
        (this.message = T && T.message ? T.message : "no such client");
    }
  }
  class j extends e {
    constructor(T) {
      super(T),
        (this.code = 2009),
        (this.message = T && T.message ? T.message : "room is locked");
    }
  }
  class N extends e {
    constructor(T) {
      super(T),
        (this.code = 2010),
        (this.message = T && T.message ? T.message : "room is full");
    }
  }
  class k extends e {
    constructor(T) {
      super(T),
        (this.code = 2011),
        (this.message = T && T.message ? T.message : "no such license");
    }
  }
  class M extends e {
    constructor(T) {
      super(T),
        (this.code = 2012),
        (this.message = T && T.message ? T.message : "invalid license");
    }
  }
  class ee extends e {
    constructor(T) {
      super(T),
        (this.code = 2013),
        (this.message = T && T.message ? T.message : "room not found");
    }
  }
  class D extends e {
    constructor(T) {
      super(T),
        (this.code = 2014),
        (this.message =
          T && T.message ? T.message : "requested role does not exist");
    }
  }
  class O extends e {
    constructor(T) {
      super(T),
        (this.code = 2015),
        (this.message = T && T.message ? T.message : "twitch login required");
    }
  }
  class o extends e {
    constructor(T) {
      super(T),
        (this.code = 2016),
        (this.message = T && T.message ? T.message : "no such option");
    }
  }
  class P extends e {
    constructor(T) {
      super(T),
        (this.code = 2017),
        (this.message = T && T.message ? T.message : "password required");
    }
  }
  class E extends e {
    constructor(T) {
      super(T),
        (this.code = 2018),
        (this.message = T && T.message ? T.message : "invalid room password");
    }
  }
  class A extends e {
    constructor(T) {
      super(T),
        (this.code = 2019),
        (this.message = T && T.message ? T.message : "missing name");
    }
  }
  class B extends e {
    constructor(T) {
      super(T),
        (this.code = 2021),
        (this.message =
          T && T.message ? T.message : "text did not pass text filters");
    }
  }
  class $ extends e {
    constructor(T) {
      super(T),
        (this.code = 2022),
        (this.message = T && T.message ? T.message : "no such filter");
    }
  }
  class W extends e {
    constructor(T) {
      super(T),
        (this.code = 2023),
        (this.message = T && T.message ? T.message : "permission denied");
    }
  }
  class fe extends e {
    constructor(T) {
      super(T),
        (this.code = 2024),
        (this.message = T && T.message ? T.message : "not connected to a room");
    }
  }
  class ue extends e {
    constructor(T) {
      super(T),
        (this.code = 2025),
        (this.message = T && T.message ? T.message : "illegal operation");
    }
  }
  class w extends e {
    constructor(T) {
      super(T),
        (this.code = 2026),
        (this.message = T && T.message ? T.message : "invalid ACL change");
    }
  }
  class F extends e {
    constructor(T) {
      super(T),
        (this.code = 2027),
        (this.message = T && T.message ? T.message : "room has already ended");
    }
  }
  class se extends e {
    constructor(T) {
      super(T),
        (this.code = 2028),
        (this.message = T && T.message ? T.message : "the entity is locked");
    }
  }
  class Z extends e {
    constructor(T) {
      super(T),
        (this.code = 2420),
        (this.message = T && T.message ? T.message : "rate limit exceeded");
    }
  }
  function he({ code: ie, message: T }) {
    const V = oe[ie];
    return V ? new V({ message: T }) : new t({ message: T });
  }
  Gs = {
    createError: he,
    CallError: t,
    EcastServerError: n,
    EcastCreateRoomFailed: i,
    EcastDialRoomFailed: s,
    EcastServerIsShuttingDown: f,
    EcastClientError: e,
    EcastParseError: l,
    EcastRequestIsMissingOpcode: p,
    EcastRequestHasInvalidOpcode: x,
    EcastRequestHasInvalidArguments: R,
    EcastEntityNotFound: S,
    EcastEntityAlreadyExists: v,
    EcastEntityTypeError: d,
    EcastNoSuchClient: I,
    EcastRoomIsLocked: j,
    EcastRoomIsFull: N,
    EcastLicenseNotFound: k,
    EcastLicenseCheckFailed: M,
    EcastRoomNotFound: ee,
    EcastInvalidRole: D,
    EcastTwitchLoginRequired: O,
    EcastInvalidOption: o,
    EcastPasswordRequired: P,
    EcastInvalidPassword: E,
    EcastNameRequired: A,
    EcastFilterError: B,
    EcastNoSuchFilter: $,
    EcastPermissionDenied: W,
    EcastNotConnected: fe,
    EcastIllegalOperation: ue,
    EcastACLChangeDenied: w,
    EcastRoomHasEnded: F,
    EcastEntityLocked: se,
    EcastRateLimitExceeded: Z,
    ObservedError: r,
  };
  const oe = {
    1e3: n,
    1001: i,
    1002: s,
    1003: f,
    2e3: e,
    2001: l,
    2002: p,
    2003: x,
    2004: R,
    2005: S,
    2006: v,
    2007: d,
    2008: I,
    2009: j,
    2010: N,
    2011: k,
    2012: M,
    2013: ee,
    2014: D,
    2015: O,
    2016: o,
    2017: P,
    2018: E,
    2019: A,
    2021: B,
    2022: $,
    2023: W,
    2024: fe,
    2025: ue,
    2026: w,
    2027: F,
    2028: se,
    2420: Z,
  };
  return Gs;
}
var Xs, el;
function Ma() {
  if (el) return Xs;
  el = 1;
  class r {
    constructor(e) {
      (this.id = e.id),
        (this.deviceId = e.deviceId),
        (this.name = e.name),
        (this.secret = e.secret),
        (this.reconnect = e.reconnect),
        (this.entities = e.entities),
        (this.here = e.here),
        (this.profile = e.profile),
        (this.replayEnd = e.replayEnd);
    }
  }
  class t {
    constructor(e) {
      (this.id = e.id),
        (this.userId = e.userId),
        (this.name = e.name),
        (this.role = e.role),
        (this.reconnect = e.reconnect);
    }
  }
  class n {
    constructor(e) {
      (this.id = e.id), (this.role = e.role);
    }
  }
  class i {
    constructor(e) {
      (this.to = e.to),
        (this.from = e.from),
        (this.body = e.body),
        (this.userId = e.userId);
    }
  }
  class s {
    constructor(e) {
      (this.id = e.id), (this.banned = e.banned), (this.reason = e.reason);
    }
  }
  return (
    (Xs = {
      ClientConnected: t,
      ClientDisconnected: n,
      ClientKicked: s,
      ClientSend: i,
      ClientWelcome: r,
    }),
    Xs
  );
}
var js, tl;
function qa() {
  if (tl) return js;
  tl = 1;
  class r {
    constructor(n) {
      (this.choices = n.choices),
        (this.key = n.key),
        (this.meta = n.meta || {});
    }
    whenReceived(n) {
      n.entities[this.key] = this;
    }
    toString() {
      return `CountGroup{
	choices: ${this.choices}
	meta:${JSON.stringify(this.meta)}
}`;
    }
  }
  return (js = { CountGroup: r }), js;
}
var $s, rl;
function Ga() {
  if (rl) return $s;
  rl = 1;
  class r {
    constructor(s) {
      (this.key = s.key),
        (this.from = s.from),
        (this.colors = s.colors),
        (this.lines = s.lines),
        (this.live = s.live),
        (this.maxLayer = s.maxLayer),
        (this.maxPoints = s.maxPoints),
        (this.size = s.size),
        (this.weights = s.weights),
        (this.meta = s.meta || {}),
        s.acl && (this.acl = s.acl);
    }
    whenReceived(s) {
      s.entities[this.key] = this;
    }
    toString() {
      return `Doodle{
	key:${this.key}
	colors:${this.colors}
	lines:${this.lines}
	live:${this.live}
	maxLayer:${this.maxLayer}
	maxPoints:${this.maxPoints}
	size:${this.size}
	weights:${this.weights}
	meta:${JSON.stringify(this.meta)}
}`;
    }
  }
  class t {
    constructor(s) {
      (this.key = s.key), (this.from = s.from), (this.line = s.line);
    }
    whenReceived(s) {
      s.entities[this.key].lines.push(this.line);
    }
    toString() {
      return `DoodleLine{
	val:${this.line}
}`;
    }
  }
  class n {
    constructor(s) {
      (this.key = s.key), (this.from = s.from), (this.index = s.index);
    }
    whenReceived(s) {
      s.entities[this.key].lines.splice(this.index, 1);
    }
    toString() {
      return `DoodleLineRemoved{
	index:${this.index}
}`;
    }
  }
  return ($s = { DoodleEntity: r, DoodleLine: t, DoodleLineRemoved: n }), $s;
}
var Fs, nl;
function GE() {
  if (nl) return Fs;
  nl = 1;
  class r {
    constructor(n) {
      (this.key = n.key),
        (this.from = n.from),
        (this.val = n.val),
        (this.meta = n.meta || {}),
        n.acl && (this.acl = n.acl);
    }
    whenReceived(n) {
      n.entities[this.key] = this;
    }
    toString() {
      return `ExternalRequestEntity{
	key:${this.key}
	service: ${this.val.service}
	status: ${this.val.status}
	meta: ${JSON.stringify(this.meta)}
}`;
    }
  }
  return (Fs = { ExternalRequestEntity: r }), Fs;
}
var Hs, il;
function Xa() {
  if (il) return Hs;
  il = 1;
  class r {
    constructor(n) {
      (this.key = n.key), (this.count = n.count), (this.meta = n.meta || {});
    }
    whenReceived(n) {
      n.entities[this.key] = this;
    }
    toString() {
      return `GCounter{
	count:${this.count}
	meta:${this.meta}
}`;
    }
  }
  return (Hs = { GCounter: r }), Hs;
}
var Ws, sl;
function Hc() {
  if (sl) return Ws;
  sl = 1;
  class r {
    constructor(n) {
      (this.pc = n.pc), (this.opcode = n.opcode), (this.result = n.result);
    }
  }
  return (Ws = { Notification: r }), Ws;
}
var zs, al;
function ja() {
  if (al) return zs;
  al = 1;
  class r {
    constructor(n) {
      (this.from = n.from),
        (this.key = n.key),
        (this.val = n.val),
        (this.restrictions = n.restrictions),
        (this.version = n.version),
        (this.meta = n.meta || {}),
        n.acl && (this.acl = n.acl);
    }
    whenReceived(n) {
      if (
        n.entities[this.key] &&
        n.entities[this.key] instanceof r &&
        !this.restrictions
      ) {
        (n.entities[this.key].val = this.val),
          (n.entities[this.key].meta = this.meta),
          (n.entities[this.key].version = this.version),
          (n.entities[this.key].from = this.from);
        return;
      }
      n.entities[this.key] = this;
    }
    toString() {
      return `NumberEntity{
	key:${this.key}
	val: ${this.val}
	restrictions: ${JSON.stringify(this.restrictions)}
	meta: ${JSON.stringify(this.meta)}
}`;
    }
  }
  return (zs = { NumberEntity: r }), zs;
}
var Js, fl;
function $a() {
  if (fl) return Js;
  fl = 1;
  class r {
    constructor(i) {
      (this.from = i.from),
        (this.key = i.key),
        (this.val = i.val),
        (this.version = i.version),
        (this.meta = i.meta || {}),
        i.acl && (this.acl = i.acl);
    }
    whenReceived(i) {
      i.entities[this.key] = this;
    }
    toString() {
      return `ObjectEntity{
	key:${this.key}
	value: ${JSON.stringify(this.val)}
	meta:${JSON.stringify(this.meta)}
}`;
    }
    toBlob() {
      return this.val;
    }
  }
  class t {
    constructor(i) {
      this.message = i.message;
    }
    toString() {
      return `ObjectEcho{message: ${this.message}}`;
    }
  }
  return (Js = { ObjectEntity: r, ObjectEcho: t }), Js;
}
var Ys, ul;
function Fa() {
  if (ul) return Ys;
  ul = 1;
  class r {
    constructor(n) {
      (this.key = n.key), (this.count = n.count), (this.meta = n.meta || {});
    }
    whenReceived(n) {
      n.entities[this.key] = this;
    }
    toString() {
      return `PNCounter{
	count:${this.count}
	meta:${JSON.stringify(this.meta)}
}`;
    }
  }
  return (Ys = { PNCounter: r }), Ys;
}
var Qs, ol;
function Wc() {
  if (ol) return Qs;
  ol = 1;
  class r {
    constructor(n) {
      (this.pc = n.pc),
        (this.re = n.re),
        (this.opcode = n.opcode),
        (this.result = n.result);
    }
  }
  return (Qs = { Reply: r }), Qs;
}
var Zs, ll;
function XE() {
  if (ll) return Zs;
  ll = 1;
  class r {
    constructor(n) {
      (this.seq = n.seq), (this.opcode = n.opcode), (this.params = n.params);
    }
  }
  return (Zs = { Request: r }), Zs;
}
var ea, cl;
function zc() {
  if (cl) return ea;
  cl = 1;
  class r {
    constructor(s) {
      (this.key = s.key),
        (this.size = s.size),
        (this.version = s.version),
        (this.from = s.from),
        (this.meta = s.meta || {}),
        s.acl && (this.acl = s.acl);
    }
    whenRecived(s) {
      s.entities[this.key] = this;
    }
    toString() {
      return `Stack{
	key:${this.key}
	size:${this.size}
	version:${this.version}
	from:${this.from}
	meta:${this.meta}
}`;
    }
  }
  class t {
    constructor(s) {
      (this.key = s.key), (this.val = s.val);
    }
    toString() {
      return `StackElement{
	key:${this.key}
	value: ${JSON.stringify(this.val)}
}`;
    }
  }
  class n {
    constructor(s) {
      (this.key = s.key), (this.vals = s.vals);
    }
    toString() {
      return `StackElements{
	key:${this.key}
	values: ${JSON.stringify(this.vals)}
}`;
    }
  }
  return (ea = { StackEntity: r, StackElement: t, StackElements: n }), ea;
}
var ta, pl;
function Ha() {
  if (pl) return ta;
  pl = 1;
  class r {
    constructor(i) {
      (this.from = i.from),
        (this.key = i.key),
        (this.text = i.text),
        (this.version = i.version),
        (this.meta = i.meta || {}),
        i.acl && (this.acl = i.acl);
    }
    whenReceived(i) {
      (i.entities[this.key] = this), i.emit("text " + this.key, this);
    }
    toString() {
      return `TextEntity{
	key: ${this.key}
	text: ${this.text}
	meta:${JSON.stringify(this.meta)}
}`;
    }
    toBlob() {
      return JSON.parse(this.text);
    }
  }
  class t {
    constructor(i) {
      this.message = i.message;
    }
    toString() {
      return `TextEcho{
	key: ${this.key}
	message: ${this.message}
}`;
    }
  }
  return (ta = { TextEntity: r, TextEcho: t }), ta;
}
var ra, El;
function Wa() {
  if (El) return ra;
  El = 1;
  class r {
    constructor(s) {
      (this.from = s.from),
        (this.key = s.key),
        (this.meta = s.meta || {}),
        (this.root = s.root),
        s.acl && (this.acl = s.acl);
    }
    whenReceived(s) {
      s.entities[this.key] = this;
    }
    toString() {
      return `TextMap{
	key:${this.key}
	meta:${JSON.stringify(this.meta)}
}`;
    }
  }
  class t {
    constructor(s) {
      (this.from = s.from), (this.key = s.key), (this.msg = s.msg);
    }
    toString() {
      const s = this.msg ? this.msg.join(", ") : this.msg;
      return `TextMapSynced{
	key:${this.key}
	from:${this.from}
	msg:${s}
}`;
    }
  }
  class n {
    constructor(s) {
      (this.from = s.from),
        (this.key = s.key),
        (this.text = s.text),
        (this.attributions = s.attributions);
    }
    toString() {
      return `TextMapState{
	key: ${this.key}
	from:${this.from}
	text:${this.text}
	attributions:${this.attributions}
}`;
    }
  }
  return (ra = { TextMapEntity: r, TextMapSynced: t, TextMapState: n }), ra;
}
var na, hl;
function za() {
  if (hl) return na;
  hl = 1;
  class r {
    constructor(n) {
      (this.key = n.key),
        (this.elements = n.elements),
        (this.limit = n.limit),
        (this.meta = n.meta || {});
    }
    whenReceived(n) {
      n.entities[this.key] = this;
    }
    toString() {
      return `TextRing{
	elements: ${this.elements}
	meta:${JSON.stringify(this.meta)}
}`;
    }
  }
  return (na = { TextRing: r }), na;
}
var ia, xl;
function Jc() {
  if (xl) return ia;
  xl = 1;
  class r {
    constructor(n) {
      (this.key = n.key),
        (this.artifactId = n.artifactId),
        (this.categoryId = n.categoryId),
        (this.rootId = n.rootId),
        (this.meta = n.meta || {});
    }
    whenReceived(n) {
      n.entities[this.key] = this;
    }
    toString() {
      return `ArtifactEntity${JSON.stringify(this)}
`;
    }
  }
  return (ia = { ArtifactEntity: r }), ia;
}
var sa, _l;
function Yc() {
  if (_l) return sa;
  _l = 1;
  class r {
    constructor(n) {
      this.key = n.key;
    }
    whenReceived(n) {
      delete n.entities[this.key];
    }
    toString() {
      return `DropEntity{
	key:${this.key}
}`;
    }
  }
  return (sa = { DropEntity: r }), sa;
}
var aa, Rl;
function jE() {
  if (Rl) return aa;
  Rl = 1;
  class r {
    constructor(n) {
      this.message = n.message;
    }
    toString() {
      return `Echo{message: ${this.message}
}`;
    }
  }
  return (aa = { Echo: r }), aa;
}
var fa, yl;
function $E() {
  if (yl) return fa;
  yl = 1;
  class r {
    constructor(n) {
      (this.key = n.key), (this.from = n.from);
    }
    whenReceived(n) {
      n.entities[this.key] && (n.entities[this.key].meta.locked = !0);
    }
    toString() {
      return `LockEntity{
	key:${this.key}
}`;
    }
  }
  return (fa = { LockEntity: r }), fa;
}
var ua, gl;
function Qc() {
  if (gl) return ua;
  gl = 1;
  class r {
    constructor() {}
    toString() {
      return "OK";
    }
  }
  return (ua = { OK: r }), ua;
}
var oa, bl;
function FE() {
  if (bl) return oa;
  bl = 1;
  const { ArtifactEntity: r } = Jc(),
    {
      ClientWelcome: t,
      ClientConnected: n,
      ClientDisconnected: i,
      ClientKicked: s,
      ClientSend: f,
    } = Ma(),
    { CountGroup: e } = qa(),
    { DoodleEntity: l, DoodleLine: p, DoodleLineRemoved: x } = Ga(),
    { StackEntity: R, StackElement: S, StackElements: v } = zc(),
    { DropEntity: d } = Yc(),
    { Echo: I } = jE(),
    { LockEntity: j } = $E(),
    { GCounter: N } = Xa(),
    { GetAudienceReply: k, RoomExit: M, RoomLock: ee, RoomMigrate: D } = Mr(),
    { Notification: O } = Hc(),
    { OK: o } = Qc(),
    { NumberEntity: P } = ja(),
    { ObjectEcho: E, ObjectEntity: A } = $a(),
    { PNCounter: B } = Fa(),
    { Reply: $ } = Wc(),
    { TextEcho: W, TextEntity: fe } = Ha(),
    { TextRing: ue } = za(),
    { createError: w, ObservedError: F } = Fc(),
    { TextMapEntity: se, TextMapSynced: Z, TextMapState: he } = Wa();
  function oe(T, V, Ee) {
    switch (T) {
      case "ok":
        return new o();
      case "echo":
        return new I({ message: V.message });
      case "lock":
        return new j({ key: V.key, from: V.from });
      case "error":
        return w({ code: V.code, message: V.msg });
      case "error/observed":
        return new F({
          to: V.to,
          opcode: V.opcode,
          error: w({ code: V.error.code, message: V.error.msg }),
        });
      case "string":
        return V;
      case "text":
        return new fe({
          from: V.from,
          key: V.key,
          text: V.val,
          version: V.version,
          meta: Ee,
          acl: V.acl,
        });
      case "text/echo":
        return new W({ message: V.message });
      case "object":
        return new A({
          from: V.from,
          key: V.key,
          val: V.val,
          meta: Ee,
          acl: V.acl,
        });
      case "object/echo":
        return new E({ message: V.message });
      case "drop":
        return new d({ key: V.key });
      case "artifact":
        return new r({
          key: V.key,
          artifactId: V.artifactId,
          categoryId: V.categoryId,
          rootId: V.rootId,
          meta: Ee,
        });
      case "client/connected":
        return new n({
          id: V.id,
          userId: V.userId,
          name: V.name,
          role: V.role,
          reconnect: V.reconnect,
        });
      case "client/disconnected":
        return new i({ id: V.id, role: V.role });
      case "client/kicked":
        return new s({ id: V.id, banned: V.banned, reason: V.reason });
      case "client/send":
        return new f({
          to: V.to,
          from: V.from,
          body: V.body,
          userId: V.userID,
        });
      case "client/welcome": {
        let Ue = new t({
          id: V.id,
          name: V.name,
          secret: V.secret,
          reconnect: V.reconnect,
          here: V.here,
          profile: V.profile,
          replayEnd: V.replayEnd,
        });
        if (V.entities) {
          let De = {};
          Object.entries(V.entities).forEach(([He, Te]) => {
            De[He] = oe(Te[0], Te[1], Te[2]);
          }),
            (Ue.entities = De);
        }
        return Ue;
      }
      case "doodle":
        return new l({
          key: V.key,
          from: V.from,
          colors: V.val.colors,
          lines: V.val.lines,
          live: V.val.live,
          maxLayer: V.val.maxLayer,
          maxPoints: V.val.maxPoints,
          size: V.val.size,
          weights: V.val.weights,
          meta: Ee,
          acl: V.acl,
        });
      case "doodle/line":
        return new p({ key: V.key, from: V.from, line: V.val });
      case "doodle/line/removed":
        return new x({ key: V.key, from: V.from, index: V.index });
      case "stack":
        return new R({
          key: V.key,
          size: V.size,
          from: V.from,
          version: V.version,
          meta: V.meta,
          acl: V.acl,
        });
      case "stack/element":
        return new S({ key: V.key, val: V.val });
      case "stack/elements":
        return new v({ key: V.key, vals: V.vals });
      case "number":
        return new P({
          key: V.key,
          val: V.val,
          restrictions: V.restrictions,
          from: V.from,
          version: V.version,
          meta: Ee,
          acl: V.acl,
        });
      case "text-map":
        return new se({
          key: V.key,
          from: V.from,
          root: V.root,
          meta: Ee,
          acl: V.acl,
        });
      case "text-map/state":
        return new he({
          key: V.key,
          from: V.from,
          attributions: V.attributions,
          text: V.text,
        });
      case "text-map/synced":
        return new Z({ key: V.key, from: V.from, msg: V.msg });
      case "room/exit":
        return new M({ cause: V.cause });
      case "room/lock":
        return new ee();
      case "room/migrate":
        return new D({
          host: V.host,
          code: V.code,
          password: V.password,
          token: V.token,
        });
      case "room/get-audience":
        return new k({ connections: V.connections });
      case "audience":
        return new B({ key: T, count: V[1] });
      case "audience/count-group":
        return new e({ key: V.key, choices: V.choices, meta: Ee });
      case "audience/text-ring":
        return new ue({ key: V.key, elements: V.elements, meta: Ee });
      case "audience/g-counter":
        return new N({ key: V.key, count: V.count, meta: Ee });
      case "audience/pn-counter":
        return new B({ key: V.key, count: V.count, meta: Ee });
      default:
        return (
          console.error(
            `failed to parse result of type ${T}: ${JSON.stringify(V, null, 2)}`
          ),
          V
        );
    }
  }
  function ie(T) {
    let V = JSON.parse(T.data),
      Ee = V.opcode || V.type;
    return V.re
      ? new $({ pc: V.pc, re: V.re, opcode: Ee, result: oe(Ee, V.result) })
      : new O({ pc: V.pc, opcode: Ee, result: oe(Ee, V.result) });
  }
  return (oa = { parseResponseMessage: ie }), oa;
}
var la, ml;
function HE() {
  if (ml) return la;
  ml = 1;
  const r = ME(),
    t = $c(),
    n = qE(),
    { CallError: i } = Fc(),
    { ClientWelcome: s } = Ma(),
    { CountGroup: f } = qa(),
    { DoodleEntity: e } = Ga(),
    { ExternalRequestEntity: l } = GE(),
    { GCounter: p } = Xa(),
    { Notification: x } = Hc(),
    { NumberEntity: R } = ja(),
    { ObjectEntity: S } = $a(),
    { PNCounter: v } = Fa(),
    { Reply: d } = Wc(),
    { Request: I } = XE(),
    { StackEntity: j } = zc(),
    { TextEntity: N } = Ha(),
    { TextMapEntity: k } = Wa(),
    { TextRing: M } = za(),
    { parseResponseMessage: ee } = FE(),
    D = 1e3 + Math.floor(Math.random() * 500),
    O = 13e3;
  class o extends n {
    constructor(E) {
      if ((super(), (this.debug = E.debug || !1), !E.host))
        throw new Error("unable to create ecast WSClient: no host provided");
      if (((this.host = E.host), !E.code))
        throw new Error(
          "unable to create ecast WSClient: no room code provided"
        );
      if (
        ((this.code = E.code),
        E.scheme ? (this.scheme = E.scheme) : (this.scheme = "wss"),
        E.secret && E.id)
      )
        (this.id = E.id), (this.secret = E.secret);
      else {
        switch (E.role) {
          case "player":
            if (!E.name)
              throw new Error(
                "unable to create ecast WSClient: no name provided"
              );
            break;
          case "host":
            if (!E.token)
              throw new Error(
                "unable to create ecast WSClient: tried to connect with host role but without host token"
              );
            this.token = E.token;
            break;
          case "moderator":
            if (!E.password)
              throw new Error(
                "unable to create ecast WSClient: tried to connect with moderator role but without password"
              );
            break;
        }
        E.password && (this.password = E.password),
          E.twitchToken && (this.twitchToken = E.twitchToken);
      }
      (this.name = E.name),
        (this.role = E.role),
        (this.deviceId = E.deviceId),
        (this.userId = E.userId),
        (this.conn = null),
        (this.seq = 0),
        (this.pending = {}),
        (this.entities = {}),
        E.role == "host" &&
          ((this.replaySince = E.replaySince || 0),
          (this.syncEntities = E.syncEntities || !1));
    }
    connect() {
      const E = {
        id: this.id,
        role: this.role,
        name: this.name,
        format: "json",
        "user-id": this.userId,
        password: this.password,
      };
      this.deviceId && (E["device-id"] = this.deviceId),
        this.twitchToken && (E["twitch-token"] = this.twitchToken),
        this.secret && (E.secret = this.secret),
        this.role === "host" &&
          ((E["host-token"] = this.token),
          this.replaySince > 0 && (E["replay-since"] = this.replaySince),
          this.syncEntities && (E["sync-entities"] = this.syncEntities));
      const A = t.stringify(E),
        B =
          this.role === "audience" || this.id > 1e7
            ? `${this.scheme}://${this.host}/api/v2/audience/${this.code}/play?${A}`
            : `${this.scheme}://${this.host}/api/v2/rooms/${this.code}/play?${A}`;
      return new Promise(($, W) => {
        let fe = !1,
          ue = !1,
          w = (se) => {
            $(se), (fe = !0);
          },
          F = (se) => {
            W(se), (fe = !0);
          };
        (this.conn = new r(B, "ecast-v0")),
          (this.conn.onmessage = (se) => {
            this.debugLog(
              `recv <- ${JSON.stringify(JSON.parse(se.data), null, 2)}`
            );
            const Z = ee(se);
            if (Z instanceof d) this.onReply(Z);
            else if (Z instanceof x) {
              if (Z.result instanceof s)
                (ue = !0),
                  (this.id = Z.result.id),
                  (this.deviceId = Z.result.deviceId),
                  (this.entities = Z.result.entities),
                  (this.secret = Z.result.secret),
                  Z.result.name && (this.name = Z.result.name),
                  w(Z.result);
              else if (!fe) {
                F(Z.result);
                return;
              }
              this.onNotification(Z);
            } else console.error(`failed to parse response messsage: ${Z}`);
          }),
          (this.conn.onerror = (se) => {
            fe ? this.emit("socketError", se) : F(se);
          }),
          (this.conn.onclose = (se) => {
            this.debugLog("onclose", se.code),
              ue && se.code === 1006
                ? this.reconnect()
                : this.emit("socketClose", se);
          }),
          (this.conn.onopen = (se) => {
            this.emit("socketOpen", se);
          });
      });
    }
    sleep(E) {
      return new Promise((A) => setTimeout(A, E));
    }
    debugLog(...E) {
      this.debug &&
        console.log(
          `%c[WSClient:${this.name}]`,
          "background-color:blue;color:white;",
          ...E
        );
    }
    async reconnect() {
      this.disconnect(), this.debugLog("Attempting to reconnect");
      let E = 1,
        A = D;
      for (;;)
        try {
          this.emit("connection", { status: "connecting", attempt: E }),
            await this.connect(),
            this.debugLog("reconnected"),
            this.emit("connection", { status: "connected" });
          return;
        } catch (B) {
          if (
            (this.debugLog("reconnect error", B),
            B.code === 1005 || B.code === 1e3)
          ) {
            this.debugLog("unable to reconnect!", B),
              this.emit("socketClose", B);
            return;
          }
          if (A >= O) {
            this.debugLog("reconnect failed!", B), this.emit("socketClose", B);
            return;
          }
          (E += 1),
            this.debugLog("waiting", A),
            this.emit("connection", { status: "waiting", attempt: E }),
            await this.sleep(A),
            (A = Math.min(O, A * 2));
        }
    }
    disconnect() {
      this.conn &&
        (this.conn.close(),
        (this.conn.onmessage = null),
        (this.conn.onerror = null),
        (this.conn.onopen = null),
        (this.conn.onclose = null),
        (this.conn = null));
    }
    onReply(E) {
      const A = E.re,
        B = this.pending[A];
      if (!B) {
        const $ = new x(E);
        ($.re = A), this.emit("notification", $);
        return;
      }
      delete this.pending[A],
        E.result instanceof i ? B.reject(E.result) : B.resolve(E.result);
    }
    onNotification(E) {
      typeof E.result.whenReceived == "function" && E.result.whenReceived(this),
        this.emit("notification", E),
        this.emit(E.opcode, E.result);
    }
    send(E, A = {}) {
      if (!this.conn) throw new Error("No connection available");
      if (this.conn.readyState !== r.OPEN)
        throw new Error(
          `Socket not ready to send, readyState is ${this.conn.readyState}`
        );
      const B = ++this.seq,
        $ = new I({ seq: B, opcode: E, params: A }),
        W = new Promise((ue, w) => {
          this.pending[B] = { resolve: ue, reject: w, request: $ };
        }),
        fe = JSON.stringify($);
      return this.debugLog(`send -> ${fe}`), this.conn.send(fe), W;
    }
    lockRoom() {
      return this.send("room/lock");
    }
    migrateRoom(E) {
      return this.send("room/migrate", E);
    }
    setRoomPassword(E) {
      return this.send("room/set-password", { password: E });
    }
    startAudience() {
      return this.send("room/start-audience");
    }
    getAudience() {
      return this.send("room/get-audience");
    }
    mail(E, A) {
      return this.send("client/send", { from: this.id, to: E, body: A });
    }
    kick(E, A = !1, B) {
      return this.send("client/kick", { id: E, ban: A, reason: B });
    }
    async drop(E) {
      const A = await this.send("drop", { key: E });
      return delete this.entities[E], A;
    }
    echo(E) {
      return this.send("echo", { message: E });
    }
    async lock(E) {
      const A = await this.send("lock", { key: E });
      return (this.entities[E].meta.locked = !0), A;
    }
    async createNumber(E, A = {}) {
      let B = { key: E };
      const { val: $ = 0, acl: W, min: fe, max: ue, increment: w, type: F } = A;
      (B.val = $),
        W && (B.acl = W),
        fe != null && (B.min = fe),
        ue != null && (B.max = ue),
        w && (B.increment = w),
        F && (B.type = F);
      const se = await this.send("number/create", B);
      return (
        (this.entities[E] = new R({
          key: E,
          val: $,
          restrictions: { min: fe, max: ue, increment: w, type: F },
          meta: { locked: !1 },
        })),
        se
      );
    }
    async decrementNumber(E) {
      const A = await this.send("number/decrement", { key: E });
      return (this.entities[E].val = A.val), A;
    }
    async getNumber(E) {
      const A = await this.send("number/get", { key: E });
      return (
        this.entities[E]
          ? ((this.entities[E].val = A.val),
            (this.entities[E].restrictions = A.restrictions))
          : (this.entities[E] = A),
        A
      );
    }
    async incrementNumber(E) {
      const A = await this.send("number/increment", { key: E });
      return (this.entities[E].val = A.val), A;
    }
    async updateNumber(E, A) {
      const B = await this.send("number/update", { key: E, val: A });
      return (this.entities[E].val = A), B;
    }
    async createObject(E, A, B) {
      const $ = { key: E, val: A };
      B && ($.acl = B);
      const W = await this.send("object/create", $);
      return (
        (this.entities[E] = new S({ key: E, val: A, meta: { locked: !1 } })), W
      );
    }
    echoObject(E) {
      return this.send("object/echo", { message: E });
    }
    async getObject(E) {
      const A = await this.send("object/get", { key: E });
      return (
        this.entities[E]
          ? ((this.entities[E].val = A.val),
            (this.entities[E].version = A.version),
            (this.entities[E].from = A.from))
          : (this.entities[E] = A),
        A
      );
    }
    async setObject(E, A, B) {
      const $ = { key: E, val: A };
      B && ($.acl = B);
      const W = await this.send("object/set", $);
      return (
        (this.entities[E] = new S({ key: E, val: A, meta: { locked: !1 } })), W
      );
    }
    async updateObject(E, A) {
      const B = await this.send("object/update", { key: E, val: A });
      return (
        (this.entities[E] = new S({ key: E, val: A, meta: { locked: !1 } })), B
      );
    }
    echoText(E) {
      return this.send("text/echo", { message: E });
    }
    getText(E) {
      return this.send("text/get", { key: E });
    }
    async createText(E, A, B) {
      const $ = { key: E, val: A },
        { acl: W, accept: fe, reject: ue } = B;
      W && ($.acl = W), fe && ($.accept = fe), ue && ($.reject = ue);
      const w = await this.send("text/create", $);
      return (
        (this.entities[E] = new N({ key: E, text: A, meta: { locked: !1 } })), w
      );
    }
    async setText(E, A, B) {
      const $ = { key: E, val: A };
      B && ($.acl = B);
      const W = await this.send("text/set", $);
      return (
        (this.entities[E] = new N({ key: E, text: A, meta: { locked: !1 } })), W
      );
    }
    async updateText(E, A) {
      const B = await this.send("text/update", { key: E, val: A });
      return (
        (this.entities[E] = new N({ key: E, text: A, meta: { locked: !1 } })), B
      );
    }
    async createTextMap(E, A = {}) {
      const { val: B, notifyHost: $, acl: W, accept: fe, reject: ue } = A;
      let w = { key: E };
      B && (w.val = A.val),
        $ && (w.notifyHost = A.notifyHost),
        W && (w.acl = W),
        fe && (w.accept = fe),
        ue && (w.reject = ue);
      const F = await this.send("text-map/create", w);
      return (
        (this.entities[E] = new k({ key: E, acl: W, meta: { locked: !1 } })), F
      );
    }
    async syncTextMap(E, A) {
      return await this.send("text-map/sync", { key: E, msg: A });
    }
    async getTextMap(E, A) {
      const { includeNodes: B } = A;
      return await this.send("text-map/get", { key: E, includeNodes: B });
    }
    async createDoodle(E, A) {
      let B = { key: E };
      const {
        acl: $,
        colors: W,
        live: fe,
        maxLayer: ue,
        maxPoints: w,
        size: F,
        weights: se,
      } = A;
      $ && (B.acl = $),
        W && (B.colors = W),
        (B.live = fe),
        ue != null && (B.maxLayer = ue),
        w != null && (B.maxPoints = w),
        F && (B.size = F),
        se && (B.weights = se);
      const Z = await this.send("doodle/create", B);
      return (
        (this.entities[E] = new e({
          key: E,
          colors: W,
          lines: [],
          live: fe,
          maxLayer: B.maxLayer || 0,
          maxPoints: B.maxPoints || 0,
          size: F,
          weights: se,
          meta: { locked: !1 },
        })),
        Z
      );
    }
    async getDoodle(E) {
      const A = await this.send("doodle/get", { key: E });
      return (
        this.entities[E]
          ? (this.entities[E].lines = A.lines)
          : (this.entities[E] = A),
        A
      );
    }
    async strokeDoodle(E, A) {
      const { color: B, weight: $, layer: W, points: fe, brush: ue } = A,
        w = { color: B, weight: $, layer: W, points: fe };
      ue && (w.brush = ue);
      const F = await this.send("doodle/stroke", { key: E, ...w });
      return this.entities[E].lines.push(w), F;
    }
    async undoDoodle(E) {
      const A = await this.send("doodle/undo", { key: E });
      return this.entities[E].lines.pop(), A;
    }
    async createStack(E, A) {
      const B = { key: E };
      A && (B.acl = A);
      const $ = await this.send("stack/create", B);
      return (
        (this.entities[E] = new j({ key: E, size: 0, meta: { locked: !1 } })), $
      );
    }
    pushStack(E, A) {
      return this.send("stack/push", { key: E, val: A });
    }
    bulkPushStack(E, A) {
      return this.send("stack/bulkpush", { key: E, vals: A });
    }
    peekStack(E, A) {
      return this.send("stack/peek", { key: E, size: A });
    }
    popStack(E) {
      return this.send("stack/pop", { key: E });
    }
    async createCountGroup(E, A) {
      const B = await this.send("audience/count-group/create", {
        name: E,
        options: A,
      });
      return (
        (this.entities[E] = new f({
          key: E,
          choices: A,
          meta: { locked: !1 },
        })),
        B
      );
    }
    incrementCountGroupCounter(E, A, B = 1) {
      return this.send("audience/count-group/increment", {
        name: E,
        vote: A,
        times: B,
      });
    }
    getCountGroup(E) {
      return this.send("audience/count-group/get", { name: E });
    }
    async createGCounter(E, A) {
      const B = await this.send("audience/g-counter/create", {
        key: E,
        count: A,
      });
      return (
        (this.entities[E] = new p({ key: E, count: A, meta: { locked: !1 } })),
        B
      );
    }
    incrementGCounter(E, A) {
      return this.send("audience/g-counter/increment", { key: E, times: A });
    }
    getGCounter(E) {
      return this.send("audience/g-counter/get", { key: E });
    }
    async createPNCounter(E, A) {
      const B = await this.send("audience/pn-counter/create", {
        key: E,
        count: A,
      });
      return (
        (this.entities[E] = new v({ key: E, count: A, meta: { locked: !1 } })),
        B
      );
    }
    incrementPNCounter(E, A) {
      return this.send("audience/pn-counter/increment", { key: E, times: A });
    }
    decrementPNCounter(E, A) {
      return this.send("audience/pn-counter/decrement", { key: E, times: A });
    }
    getPNCounter(E) {
      return this.send("audience/pn-counter/get", { key: E });
    }
    async createTextRing(E, A) {
      const B = { key: E },
        { limit: $, accept: W, reject: fe } = A;
      $ && (B.limit = $), W && (B.accept = W), fe && (B.reject = fe);
      const ue = await this.send("audience/text-ring/create", B);
      return (
        (this.entities[E] = new M({
          key: E,
          elements: [],
          limit: $,
          meta: { locked: !1 },
        })),
        ue
      );
    }
    getTextRing(E) {
      return this.send("audience/text-ring/get", { name: E });
    }
    pushTextRing(E, A) {
      return this.send("audience/text-ring/push", { name: E, text: A });
    }
    async createExternalRequest(E, A, B, $) {
      const W = { key: E, service: A, payload: B };
      $ && (W.acl = $);
      const fe = await this.send("external-request/create", W);
      return (
        (this.entities[E] = new l({
          key: E,
          val: { service: A, status: "pending" },
          meta: { locked: !1 },
        })),
        fe
      );
    }
  }
  return (la = { WSClient: o }), la;
}
var ca, Tl;
function WE() {
  if (Tl) return ca;
  Tl = 1;
  const { APIClient: r } = VE(),
    { WSClient: t } = HE(),
    { CreateRoomReply: n, GetRoomReply: i } = Mr(),
    { ClientWelcome: s, ClientDisconnected: f } = Ma(),
    { ArtifactEntity: e } = Jc(),
    { GCounter: l } = Xa(),
    { NumberEntity: p } = ja(),
    { TextEntity: x } = Ha(),
    { DoodleEntity: R } = Ga(),
    { ObjectEntity: S } = $a(),
    { CountGroup: v } = qa(),
    { DropEntity: d } = Yc(),
    { OK: I } = Qc(),
    { RoomExit: j } = Mr(),
    { TextRing: N } = za(),
    { TextMapEntity: k } = Wa(),
    { PNCounter: M } = Fa();
  return (
    (ca = {
      APIClient: r,
      WSClient: t,
      ClientWelcome: s,
      CreateRoomReply: n,
      DropEntity: d,
      GetRoomReply: i,
      ClientDisconnected: f,
      RoomExit: j,
      OK: I,
      ArtifactEntity: e,
      DoodleEntity: R,
      NumberEntity: p,
      CountGroup: v,
      GCounter: l,
      ObjectEntity: S,
      PNCounter: M,
      TextEntity: x,
      TextRing: N,
      TextMapEntity: k,
    }),
    ca
  );
}
WE();
function zE(...r) {
  console.log(...r);
}
function JE(r) {
  throw new Error(
    'Could not dynamically require "' +
      r +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var xr = { exports: {} },
  YE = xr.exports,
  Sl;
function QE() {
  return (
    Sl ||
      ((Sl = 1),
      (function (r, t) {
        (function (n, i) {
          i(t);
        })(YE, function (n) {
          var i =
              typeof window < "u"
                ? window
                : typeof Xe < "u"
                ? Xe
                : typeof self < "u"
                ? self
                : {},
            s = function (y, K) {
              if (((K = K.split(":")[0]), (y = +y), !y)) return !1;
              switch (K) {
                case "http":
                case "ws":
                  return y !== 80;
                case "https":
                case "wss":
                  return y !== 443;
                case "ftp":
                  return y !== 21;
                case "gopher":
                  return y !== 70;
                case "file":
                  return !1;
              }
              return y !== 0;
            },
            f = Object.prototype.hasOwnProperty,
            e;
          function l(g) {
            try {
              return decodeURIComponent(g.replace(/\+/g, " "));
            } catch {
              return null;
            }
          }
          function p(g) {
            try {
              return encodeURIComponent(g);
            } catch {
              return null;
            }
          }
          function x(g) {
            for (var y = /([^=?#&]+)=?([^&]*)/g, K = {}, _; (_ = y.exec(g)); ) {
              var C = l(_[1]),
                G = l(_[2]);
              C === null || G === null || C in K || (K[C] = G);
            }
            return K;
          }
          function R(g, y) {
            y = y || "";
            var K = [],
              _,
              C;
            typeof y != "string" && (y = "?");
            for (C in g)
              if (f.call(g, C)) {
                if (
                  ((_ = g[C]),
                  !_ && (_ === null || _ === e || isNaN(_)) && (_ = ""),
                  (C = p(C)),
                  (_ = p(_)),
                  C === null || _ === null)
                )
                  continue;
                K.push(C + "=" + _);
              }
            return K.length ? y + K.join("&") : "";
          }
          var S = R,
            v = x,
            d = { stringify: S, parse: v },
            I = /[\n\r\t]/g,
            j = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            N = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
            k = /^[a-zA-Z]:/,
            M =
              /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/;
          function ee(g) {
            return (g || "").toString().replace(M, "");
          }
          var D = [
              ["#", "hash"],
              ["?", "query"],
              function (y, K) {
                return P(K.protocol) ? y.replace(/\\/g, "/") : y;
              },
              ["/", "pathname"],
              ["@", "auth", 1],
              [NaN, "host", void 0, 1, 1],
              [/:(\d*)$/, "port", void 0, 1],
              [NaN, "hostname", void 0, 1, 1],
            ],
            O = { hash: 1, query: 1 };
          function o(g) {
            var y;
            typeof window < "u"
              ? (y = window)
              : typeof i < "u"
              ? (y = i)
              : typeof self < "u"
              ? (y = self)
              : (y = {});
            var K = y.location || {};
            g = g || K;
            var _ = {},
              C = typeof g,
              G;
            if (g.protocol === "blob:") _ = new B(unescape(g.pathname), {});
            else if (C === "string") {
              _ = new B(g, {});
              for (G in O) delete _[G];
            } else if (C === "object") {
              for (G in g) G in O || (_[G] = g[G]);
              _.slashes === void 0 && (_.slashes = j.test(g.href));
            }
            return _;
          }
          function P(g) {
            return (
              g === "file:" ||
              g === "ftp:" ||
              g === "http:" ||
              g === "https:" ||
              g === "ws:" ||
              g === "wss:"
            );
          }
          function E(g, y) {
            (g = ee(g)), (g = g.replace(I, "")), (y = y || {});
            var K = N.exec(g),
              _ = K[1] ? K[1].toLowerCase() : "",
              C = !!K[2],
              G = !!K[3],
              z = 0,
              m;
            return (
              C
                ? G
                  ? ((m = K[2] + K[3] + K[4]), (z = K[2].length + K[3].length))
                  : ((m = K[2] + K[4]), (z = K[2].length))
                : G
                ? ((m = K[3] + K[4]), (z = K[3].length))
                : (m = K[4]),
              _ === "file:"
                ? z >= 2 && (m = m.slice(2))
                : P(_)
                ? (m = K[4])
                : _
                ? C && (m = m.slice(2))
                : z >= 2 && P(y.protocol) && (m = K[4]),
              { protocol: _, slashes: C || P(_), slashesCount: z, rest: m }
            );
          }
          function A(g, y) {
            if (g === "") return y;
            for (
              var K = (y || "/").split("/").slice(0, -1).concat(g.split("/")),
                _ = K.length,
                C = K[_ - 1],
                G = !1,
                z = 0;
              _--;

            )
              K[_] === "."
                ? K.splice(_, 1)
                : K[_] === ".."
                ? (K.splice(_, 1), z++)
                : z && (_ === 0 && (G = !0), K.splice(_, 1), z--);
            return (
              G && K.unshift(""),
              (C === "." || C === "..") && K.push(""),
              K.join("/")
            );
          }
          function B(g, y, K) {
            if (((g = ee(g)), (g = g.replace(I, "")), !(this instanceof B)))
              return new B(g, y, K);
            var _,
              C,
              G,
              z,
              m,
              U,
              ne = D.slice(),
              te = typeof y,
              re = this,
              _e = 0;
            for (
              te !== "object" && te !== "string" && ((K = y), (y = null)),
                K && typeof K != "function" && (K = d.parse),
                y = o(y),
                C = E(g || "", y),
                _ = !C.protocol && !C.slashes,
                re.slashes = C.slashes || (_ && y.slashes),
                re.protocol = C.protocol || y.protocol || "",
                g = C.rest,
                ((C.protocol === "file:" &&
                  (C.slashesCount !== 2 || k.test(g))) ||
                  (!C.slashes &&
                    (C.protocol || C.slashesCount < 2 || !P(re.protocol)))) &&
                  (ne[3] = [/(.*)/, "pathname"]);
              _e < ne.length;
              _e++
            ) {
              if (((z = ne[_e]), typeof z == "function")) {
                g = z(g, re);
                continue;
              }
              (G = z[0]),
                (U = z[1]),
                G !== G
                  ? (re[U] = g)
                  : typeof G == "string"
                  ? ((m = G === "@" ? g.lastIndexOf(G) : g.indexOf(G)),
                    ~m &&
                      (typeof z[2] == "number"
                        ? ((re[U] = g.slice(0, m)), (g = g.slice(m + z[2])))
                        : ((re[U] = g.slice(m)), (g = g.slice(0, m)))))
                  : (m = G.exec(g)) &&
                    ((re[U] = m[1]), (g = g.slice(0, m.index))),
                (re[U] = re[U] || (_ && z[3] && y[U]) || ""),
                z[4] && (re[U] = re[U].toLowerCase());
            }
            K && (re.query = K(re.query)),
              _ &&
                y.slashes &&
                re.pathname.charAt(0) !== "/" &&
                (re.pathname !== "" || y.pathname !== "") &&
                (re.pathname = A(re.pathname, y.pathname)),
              re.pathname.charAt(0) !== "/" &&
                P(re.protocol) &&
                (re.pathname = "/" + re.pathname),
              s(re.port, re.protocol) ||
                ((re.host = re.hostname), (re.port = "")),
              (re.username = re.password = ""),
              re.auth &&
                ((m = re.auth.indexOf(":")),
                ~m
                  ? ((re.username = re.auth.slice(0, m)),
                    (re.username = encodeURIComponent(
                      decodeURIComponent(re.username)
                    )),
                    (re.password = re.auth.slice(m + 1)),
                    (re.password = encodeURIComponent(
                      decodeURIComponent(re.password)
                    )))
                  : (re.username = encodeURIComponent(
                      decodeURIComponent(re.auth)
                    )),
                (re.auth = re.password
                  ? re.username + ":" + re.password
                  : re.username)),
              (re.origin =
                re.protocol !== "file:" && P(re.protocol) && re.host
                  ? re.protocol + "//" + re.host
                  : "null"),
              (re.href = re.toString());
          }
          function $(g, y, K) {
            var _ = this;
            switch (g) {
              case "query":
                typeof y == "string" && y.length && (y = (K || d.parse)(y)),
                  (_[g] = y);
                break;
              case "port":
                (_[g] = y),
                  s(y, _.protocol)
                    ? y && (_.host = _.hostname + ":" + y)
                    : ((_.host = _.hostname), (_[g] = ""));
                break;
              case "hostname":
                (_[g] = y), _.port && (y += ":" + _.port), (_.host = y);
                break;
              case "host":
                (_[g] = y),
                  /:\d+$/.test(y)
                    ? ((y = y.split(":")),
                      (_.port = y.pop()),
                      (_.hostname = y.join(":")))
                    : ((_.hostname = y), (_.port = ""));
                break;
              case "protocol":
                (_.protocol = y.toLowerCase()), (_.slashes = !K);
                break;
              case "pathname":
              case "hash":
                if (y) {
                  var C = g === "pathname" ? "/" : "#";
                  _[g] = y.charAt(0) !== C ? C + y : y;
                } else _[g] = y;
                break;
              case "username":
              case "password":
                _[g] = encodeURIComponent(y);
                break;
              case "auth":
                var G = y.indexOf(":");
                ~G
                  ? ((_.username = y.slice(0, G)),
                    (_.username = encodeURIComponent(
                      decodeURIComponent(_.username)
                    )),
                    (_.password = y.slice(G + 1)),
                    (_.password = encodeURIComponent(
                      decodeURIComponent(_.password)
                    )))
                  : (_.username = encodeURIComponent(decodeURIComponent(y)));
            }
            for (var z = 0; z < D.length; z++) {
              var m = D[z];
              m[4] && (_[m[1]] = _[m[1]].toLowerCase());
            }
            return (
              (_.auth = _.password
                ? _.username + ":" + _.password
                : _.username),
              (_.origin =
                _.protocol !== "file:" && P(_.protocol) && _.host
                  ? _.protocol + "//" + _.host
                  : "null"),
              (_.href = _.toString()),
              _
            );
          }
          function W(g) {
            (!g || typeof g != "function") && (g = d.stringify);
            var y,
              K = this,
              _ = K.host,
              C = K.protocol;
            C && C.charAt(C.length - 1) !== ":" && (C += ":");
            var G =
              C + ((K.protocol && K.slashes) || P(K.protocol) ? "//" : "");
            return (
              K.username
                ? ((G += K.username),
                  K.password && (G += ":" + K.password),
                  (G += "@"))
                : K.password
                ? ((G += ":" + K.password), (G += "@"))
                : K.protocol !== "file:" &&
                  P(K.protocol) &&
                  !_ &&
                  K.pathname !== "/" &&
                  (G += "@"),
              _[_.length - 1] === ":" && (_ += ":"),
              (G += _ + K.pathname),
              (y = typeof K.query == "object" ? g(K.query) : K.query),
              y && (G += y.charAt(0) !== "?" ? "?" + y : y),
              K.hash && (G += K.hash),
              G
            );
          }
          (B.prototype = { set: $, toString: W }),
            (B.extractProtocol = E),
            (B.location = o),
            (B.trimLeft = ee),
            (B.qs = d);
          var fe = B;
          function ue(g, y) {
            setTimeout(
              function (K) {
                return g.call(K);
              },
              4,
              y
            );
          }
          function w(g, y) {
            typeof process < "u" && console[g].call(null, y);
          }
          function F(g, y) {
            g === void 0 && (g = []);
            var K = [];
            return (
              g.forEach(function (_) {
                y(_) || K.push(_);
              }),
              K
            );
          }
          function se(g, y) {
            g === void 0 && (g = []);
            var K = [];
            return (
              g.forEach(function (_) {
                y(_) && K.push(_);
              }),
              K
            );
          }
          var Z = function () {
            this.listeners = {};
          };
          (Z.prototype.addEventListener = function (y, K) {
            typeof K == "function" &&
              (Array.isArray(this.listeners[y]) || (this.listeners[y] = []),
              se(this.listeners[y], function (_) {
                return _ === K;
              }).length === 0 && this.listeners[y].push(K));
          }),
            (Z.prototype.removeEventListener = function (y, K) {
              var _ = this.listeners[y];
              this.listeners[y] = F(_, function (C) {
                return C === K;
              });
            }),
            (Z.prototype.dispatchEvent = function (y) {
              for (var K = this, _ = [], C = arguments.length - 1; C-- > 0; )
                _[C] = arguments[C + 1];
              var G = y.type,
                z = this.listeners[G];
              return Array.isArray(z)
                ? (z.forEach(function (m) {
                    _.length > 0 ? m.apply(K, _) : m.call(K, y);
                  }),
                  !0)
                : !1;
            });
          function he(g) {
            var y = g.indexOf("?");
            return y >= 0 ? g.slice(0, y) : g;
          }
          var oe = function () {
            this.urlMap = {};
          };
          (oe.prototype.attachWebSocket = function (y, K) {
            var _ = he(K),
              C = this.urlMap[_];
            if (C && C.server && C.websockets.indexOf(y) === -1)
              return C.websockets.push(y), C.server;
          }),
            (oe.prototype.addMembershipToRoom = function (y, K) {
              var _ = this.urlMap[he(y.url)];
              _ &&
                _.server &&
                _.websockets.indexOf(y) !== -1 &&
                (_.roomMemberships[K] || (_.roomMemberships[K] = []),
                _.roomMemberships[K].push(y));
            }),
            (oe.prototype.attachServer = function (y, K) {
              var _ = he(K),
                C = this.urlMap[_];
              if (!C)
                return (
                  (this.urlMap[_] = {
                    server: y,
                    websockets: [],
                    roomMemberships: {},
                  }),
                  y
                );
            }),
            (oe.prototype.serverLookup = function (y) {
              var K = he(y),
                _ = this.urlMap[K];
              if (_) return _.server;
            }),
            (oe.prototype.websocketsLookup = function (y, K, _) {
              var C = he(y),
                G,
                z = this.urlMap[C];
              if (((G = z ? z.websockets : []), K)) {
                var m = z.roomMemberships[K];
                G = m || [];
              }
              return _
                ? G.filter(function (U) {
                    return U !== _;
                  })
                : G;
            }),
            (oe.prototype.removeServer = function (y) {
              delete this.urlMap[he(y)];
            }),
            (oe.prototype.removeWebSocket = function (y, K) {
              var _ = he(K),
                C = this.urlMap[_];
              C &&
                (C.websockets = F(C.websockets, function (G) {
                  return G === y;
                }));
            }),
            (oe.prototype.removeMembershipFromRoom = function (y, K) {
              var _ = this.urlMap[he(y.url)],
                C = _.roomMemberships[K];
              _ &&
                C !== null &&
                (_.roomMemberships[K] = F(C, function (G) {
                  return G === y;
                }));
            });
          var ie = new oe(),
            T = {
              CLOSE_NORMAL: 1e3,
              CLOSE_NO_STATUS: 1005,
              CLOSE_ABNORMAL: 1006,
            },
            V = {
              CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
              CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
              EVENT: {
                MESSAGE: "Failed to construct 'MessageEvent':",
                CLOSE: "Failed to construct 'CloseEvent':",
              },
            },
            Ee = function () {};
          (Ee.prototype.stopPropagation = function () {}),
            (Ee.prototype.stopImmediatePropagation = function () {}),
            (Ee.prototype.initEvent = function (y, K, _) {
              y === void 0 && (y = "undefined"),
                K === void 0 && (K = !1),
                _ === void 0 && (_ = !1),
                (this.type = "" + y),
                (this.bubbles = !!K),
                (this.cancelable = !!_);
            });
          var Ue = (function (g) {
              function y(K, _) {
                if ((_ === void 0 && (_ = {}), g.call(this), !K))
                  throw new TypeError(
                    V.EVENT_ERROR + " 1 argument required, but only 0 present."
                  );
                if (typeof _ != "object")
                  throw new TypeError(
                    V.EVENT_ERROR +
                      " parameter 2 ('eventInitDict') is not an object."
                  );
                var C = _.bubbles,
                  G = _.cancelable;
                (this.type = "" + K),
                  (this.timeStamp = Date.now()),
                  (this.target = null),
                  (this.srcElement = null),
                  (this.returnValue = !0),
                  (this.isTrusted = !1),
                  (this.eventPhase = 0),
                  (this.defaultPrevented = !1),
                  (this.currentTarget = null),
                  (this.cancelable = G ? !!G : !1),
                  (this.cancelBubble = !1),
                  (this.bubbles = C ? !!C : !1);
              }
              return (
                g && (y.__proto__ = g),
                (y.prototype = Object.create(g && g.prototype)),
                (y.prototype.constructor = y),
                y
              );
            })(Ee),
            De = (function (g) {
              function y(K, _) {
                if ((_ === void 0 && (_ = {}), g.call(this), !K))
                  throw new TypeError(
                    V.EVENT.MESSAGE +
                      " 1 argument required, but only 0 present."
                  );
                if (typeof _ != "object")
                  throw new TypeError(
                    V.EVENT.MESSAGE +
                      " parameter 2 ('eventInitDict') is not an object"
                  );
                var C = _.bubbles,
                  G = _.cancelable,
                  z = _.data,
                  m = _.origin,
                  U = _.lastEventId,
                  ne = _.ports;
                (this.type = "" + K),
                  (this.timeStamp = Date.now()),
                  (this.target = null),
                  (this.srcElement = null),
                  (this.returnValue = !0),
                  (this.isTrusted = !1),
                  (this.eventPhase = 0),
                  (this.defaultPrevented = !1),
                  (this.currentTarget = null),
                  (this.cancelable = G ? !!G : !1),
                  (this.canncelBubble = !1),
                  (this.bubbles = C ? !!C : !1),
                  (this.origin = "" + m),
                  (this.ports = typeof ne > "u" ? null : ne),
                  (this.data = typeof z > "u" ? null : z),
                  (this.lastEventId = "" + (U || ""));
              }
              return (
                g && (y.__proto__ = g),
                (y.prototype = Object.create(g && g.prototype)),
                (y.prototype.constructor = y),
                y
              );
            })(Ee),
            He = (function (g) {
              function y(K, _) {
                if ((_ === void 0 && (_ = {}), g.call(this), !K))
                  throw new TypeError(
                    V.EVENT.CLOSE + " 1 argument required, but only 0 present."
                  );
                if (typeof _ != "object")
                  throw new TypeError(
                    V.EVENT.CLOSE +
                      " parameter 2 ('eventInitDict') is not an object"
                  );
                var C = _.bubbles,
                  G = _.cancelable,
                  z = _.code,
                  m = _.reason,
                  U = _.wasClean;
                (this.type = "" + K),
                  (this.timeStamp = Date.now()),
                  (this.target = null),
                  (this.srcElement = null),
                  (this.returnValue = !0),
                  (this.isTrusted = !1),
                  (this.eventPhase = 0),
                  (this.defaultPrevented = !1),
                  (this.currentTarget = null),
                  (this.cancelable = G ? !!G : !1),
                  (this.cancelBubble = !1),
                  (this.bubbles = C ? !!C : !1),
                  (this.code = typeof z == "number" ? parseInt(z, 10) : 0),
                  (this.reason = "" + (m || "")),
                  (this.wasClean = U ? !!U : !1);
              }
              return (
                g && (y.__proto__ = g),
                (y.prototype = Object.create(g && g.prototype)),
                (y.prototype.constructor = y),
                y
              );
            })(Ee);
          function Te(g) {
            var y = g.type,
              K = g.target,
              _ = new Ue(y);
            return (
              K && ((_.target = K), (_.srcElement = K), (_.currentTarget = K)),
              _
            );
          }
          function Ce(g) {
            var y = g.type,
              K = g.origin,
              _ = g.data,
              C = g.target,
              G = new De(y, { data: _, origin: K });
            return (
              C && ((G.target = C), (G.srcElement = C), (G.currentTarget = C)),
              G
            );
          }
          function xe(g) {
            var y = g.code,
              K = g.reason,
              _ = g.type,
              C = g.target,
              G = g.wasClean;
            G || (G = y === T.CLOSE_NORMAL || y === T.CLOSE_NO_STATUS);
            var z = new He(_, { code: y, reason: K, wasClean: G });
            return (
              C && ((z.target = C), (z.srcElement = C), (z.currentTarget = C)),
              z
            );
          }
          function Be(g, y, K) {
            g.readyState = me.CLOSING;
            var _ = ie.serverLookup(g.url),
              C = xe({ type: "close", target: g.target, code: y, reason: K });
            ue(function () {
              ie.removeWebSocket(g, g.url),
                (g.readyState = me.CLOSED),
                g.dispatchEvent(C),
                _ && _.dispatchEvent(C, _);
            }, g);
          }
          function Se(g, y, K) {
            g.readyState = me.CLOSING;
            var _ = ie.serverLookup(g.url),
              C = xe({
                type: "close",
                target: g.target,
                code: y,
                reason: K,
                wasClean: !1,
              }),
              G = Te({ type: "error", target: g.target });
            ue(function () {
              ie.removeWebSocket(g, g.url),
                (g.readyState = me.CLOSED),
                g.dispatchEvent(G),
                g.dispatchEvent(C),
                _ && _.dispatchEvent(C, _);
            }, g);
          }
          function be(g) {
            return (
              Object.prototype.toString.call(g) !== "[object Blob]" &&
                !(g instanceof ArrayBuffer) &&
                (g = String(g)),
              g
            );
          }
          var we = new WeakMap();
          function Me(g) {
            if (we.has(g)) return we.get(g);
            var y = new Proxy(g, {
              get: function (_, C) {
                if (C === "close")
                  return function (m) {
                    m === void 0 && (m = {});
                    var U = m.code || T.CLOSE_NORMAL,
                      ne = m.reason || "";
                    Be(y, U, ne);
                  };
                if (C === "send")
                  return function (m) {
                    (m = be(m)),
                      g.dispatchEvent(
                        Ce({
                          type: "message",
                          data: m,
                          origin: this.url,
                          target: g,
                        })
                      );
                  };
                var G = function (z) {
                  return z === "message" ? "server::" + z : z;
                };
                return C === "on"
                  ? function (m, U) {
                      g.addEventListener(G(m), U);
                    }
                  : C === "off"
                  ? function (m, U) {
                      g.removeEventListener(G(m), U);
                    }
                  : C === "target"
                  ? g
                  : _[C];
              },
            });
            return we.set(g, y), y;
          }
          function Oe(g) {
            var y = encodeURIComponent(g).match(/%[89ABab]/g);
            return g.length + (y ? y.length : 0);
          }
          function Ve(g) {
            var y = new fe(g),
              K = y.pathname,
              _ = y.protocol,
              C = y.hash;
            if (!g)
              throw new TypeError(
                V.CONSTRUCTOR_ERROR +
                  " 1 argument required, but only 0 present."
              );
            if ((K || (y.pathname = "/"), _ === ""))
              throw new SyntaxError(
                V.CONSTRUCTOR_ERROR +
                  " The URL '" +
                  y.toString() +
                  "' is invalid."
              );
            if (_ !== "ws:" && _ !== "wss:")
              throw new SyntaxError(
                V.CONSTRUCTOR_ERROR +
                  " The URL's scheme must be either 'ws' or 'wss'. '" +
                  _ +
                  "' is not allowed."
              );
            if (C !== "")
              throw new SyntaxError(
                V.CONSTRUCTOR_ERROR +
                  " The URL contains a fragment identifier ('" +
                  C +
                  "'). Fragment identifiers are not allowed in WebSocket URLs."
              );
            return y.toString();
          }
          function qe(g) {
            if (
              (g === void 0 && (g = []),
              !Array.isArray(g) && typeof g != "string")
            )
              throw new SyntaxError(
                V.CONSTRUCTOR_ERROR +
                  " The subprotocol '" +
                  g.toString() +
                  "' is invalid."
              );
            typeof g == "string" && (g = [g]);
            var y = g
                .map(function (_) {
                  return { count: 1, protocol: _ };
                })
                .reduce(function (_, C) {
                  return (_[C.protocol] = (_[C.protocol] || 0) + C.count), _;
                }, {}),
              K = Object.keys(y).filter(function (_) {
                return y[_] > 1;
              });
            if (K.length > 0)
              throw new SyntaxError(
                V.CONSTRUCTOR_ERROR +
                  " The subprotocol '" +
                  K[0] +
                  "' is duplicated."
              );
            return g;
          }
          var me = (function (g) {
            function y(_, C) {
              g.call(this),
                (this._onopen = null),
                (this._onmessage = null),
                (this._onerror = null),
                (this._onclose = null),
                (this.url = Ve(_)),
                (C = qe(C)),
                (this.protocol = C[0] || ""),
                (this.binaryType = "blob"),
                (this.readyState = y.CONNECTING);
              var G = Me(this),
                z = ie.attachWebSocket(G, this.url);
              ue(function () {
                if (this.readyState === y.CONNECTING)
                  if (z)
                    if (
                      z.options.verifyClient &&
                      typeof z.options.verifyClient == "function" &&
                      !z.options.verifyClient()
                    )
                      (this.readyState = y.CLOSED),
                        w(
                          "error",
                          "WebSocket connection to '" +
                            this.url +
                            "' failed: HTTP Authentication failed; no valid credentials available"
                        ),
                        ie.removeWebSocket(G, this.url),
                        this.dispatchEvent(Te({ type: "error", target: this })),
                        this.dispatchEvent(
                          xe({
                            type: "close",
                            target: this,
                            code: T.CLOSE_NORMAL,
                          })
                        );
                    else {
                      if (
                        z.options.selectProtocol &&
                        typeof z.options.selectProtocol == "function"
                      ) {
                        var U = z.options.selectProtocol(C),
                          ne = U !== "",
                          te = C.indexOf(U) !== -1;
                        if (ne && !te) {
                          (this.readyState = y.CLOSED),
                            w(
                              "error",
                              "WebSocket connection to '" +
                                this.url +
                                "' failed: Invalid Sub-Protocol"
                            ),
                            ie.removeWebSocket(G, this.url),
                            this.dispatchEvent(
                              Te({ type: "error", target: this })
                            ),
                            this.dispatchEvent(
                              xe({
                                type: "close",
                                target: this,
                                code: T.CLOSE_NORMAL,
                              })
                            );
                          return;
                        }
                        this.protocol = U;
                      }
                      (this.readyState = y.OPEN),
                        this.dispatchEvent(Te({ type: "open", target: this })),
                        z.dispatchEvent(Te({ type: "connection" }), G);
                    }
                  else
                    (this.readyState = y.CLOSED),
                      this.dispatchEvent(Te({ type: "error", target: this })),
                      this.dispatchEvent(
                        xe({
                          type: "close",
                          target: this,
                          code: T.CLOSE_NORMAL,
                        })
                      ),
                      w(
                        "error",
                        "WebSocket connection to '" + this.url + "' failed"
                      );
              }, this);
            }
            g && (y.__proto__ = g),
              (y.prototype = Object.create(g && g.prototype)),
              (y.prototype.constructor = y);
            var K = { onopen: {}, onmessage: {}, onclose: {}, onerror: {} };
            return (
              (K.onopen.get = function () {
                return this._onopen;
              }),
              (K.onmessage.get = function () {
                return this._onmessage;
              }),
              (K.onclose.get = function () {
                return this._onclose;
              }),
              (K.onerror.get = function () {
                return this._onerror;
              }),
              (K.onopen.set = function (_) {
                this.removeEventListener("open", this._onopen),
                  (this._onopen = _),
                  this.addEventListener("open", _);
              }),
              (K.onmessage.set = function (_) {
                this.removeEventListener("message", this._onmessage),
                  (this._onmessage = _),
                  this.addEventListener("message", _);
              }),
              (K.onclose.set = function (_) {
                this.removeEventListener("close", this._onclose),
                  (this._onclose = _),
                  this.addEventListener("close", _);
              }),
              (K.onerror.set = function (_) {
                this.removeEventListener("error", this._onerror),
                  (this._onerror = _),
                  this.addEventListener("error", _);
              }),
              (y.prototype.send = function (C) {
                var G = this;
                if (this.readyState === y.CONNECTING)
                  throw new Error(
                    "Failed to execute 'send' on 'WebSocket': Still in CONNECTING state"
                  );
                var z = Ce({
                    type: "server::message",
                    origin: this.url,
                    data: be(C),
                  }),
                  m = ie.serverLookup(this.url);
                m &&
                  ue(function () {
                    G.dispatchEvent(z, C);
                  }, m);
              }),
              (y.prototype.close = function (C, G) {
                if (
                  C !== void 0 &&
                  (typeof C != "number" || (C !== 1e3 && (C < 3e3 || C > 4999)))
                )
                  throw new TypeError(
                    V.CLOSE_ERROR +
                      " The code must be either 1000, or between 3000 and 4999. " +
                      C +
                      " is neither."
                  );
                if (G !== void 0) {
                  var z = Oe(G);
                  if (z > 123)
                    throw new SyntaxError(
                      V.CLOSE_ERROR +
                        " The message must not be greater than 123 bytes."
                    );
                }
                if (
                  !(
                    this.readyState === y.CLOSING ||
                    this.readyState === y.CLOSED
                  )
                ) {
                  var m = Me(this);
                  this.readyState === y.CONNECTING
                    ? Se(m, C || T.CLOSE_ABNORMAL, G)
                    : Be(m, C || T.CLOSE_NO_STATUS, G);
                }
              }),
              Object.defineProperties(y.prototype, K),
              y
            );
          })(Z);
          (me.CONNECTING = 0),
            (me.prototype.CONNECTING = me.CONNECTING),
            (me.OPEN = 1),
            (me.prototype.OPEN = me.OPEN),
            (me.CLOSING = 2),
            (me.prototype.CLOSING = me.CLOSING),
            (me.CLOSED = 3),
            (me.prototype.CLOSED = me.CLOSED);
          var Ke = (function (g) {
            function y(_, C) {
              var G = this;
              _ === void 0 && (_ = "socket.io"),
                C === void 0 && (C = ""),
                g.call(this),
                (this.binaryType = "blob");
              var z = new fe(_);
              z.pathname || (z.pathname = "/"),
                (this.url = z.toString()),
                (this.readyState = y.CONNECTING),
                (this.protocol = ""),
                (this.target = this),
                typeof C == "string" || (typeof C == "object" && C !== null)
                  ? (this.protocol = C)
                  : Array.isArray(C) && C.length > 0 && (this.protocol = C[0]);
              var m = ie.attachWebSocket(this, this.url);
              ue(function () {
                m
                  ? ((this.readyState = y.OPEN),
                    m.dispatchEvent(Te({ type: "connection" }), m, this),
                    m.dispatchEvent(Te({ type: "connect" }), m, this),
                    this.dispatchEvent(Te({ type: "connect", target: this })))
                  : ((this.readyState = y.CLOSED),
                    this.dispatchEvent(Te({ type: "error", target: this })),
                    this.dispatchEvent(
                      xe({ type: "close", target: this, code: T.CLOSE_NORMAL })
                    ),
                    w(
                      "error",
                      "Socket.io connection to '" + this.url + "' failed"
                    ));
              }, this),
                this.addEventListener("close", function (U) {
                  G.dispatchEvent(
                    xe({ type: "disconnect", target: U.target, code: U.code })
                  );
                });
            }
            g && (y.__proto__ = g),
              (y.prototype = Object.create(g && g.prototype)),
              (y.prototype.constructor = y);
            var K = { broadcast: {} };
            return (
              (y.prototype.close = function () {
                if (this.readyState === y.OPEN) {
                  var C = ie.serverLookup(this.url);
                  return (
                    ie.removeWebSocket(this, this.url),
                    (this.readyState = y.CLOSED),
                    this.dispatchEvent(
                      xe({ type: "close", target: this, code: T.CLOSE_NORMAL })
                    ),
                    C &&
                      C.dispatchEvent(
                        xe({
                          type: "disconnect",
                          target: this,
                          code: T.CLOSE_NORMAL,
                        }),
                        C
                      ),
                    this
                  );
                }
              }),
              (y.prototype.disconnect = function () {
                return this.close();
              }),
              (y.prototype.emit = function (C) {
                for (var G = [], z = arguments.length - 1; z-- > 0; )
                  G[z] = arguments[z + 1];
                if (this.readyState !== y.OPEN)
                  throw new Error(
                    "SocketIO is already in CLOSING or CLOSED state"
                  );
                var m = Ce({ type: C, origin: this.url, data: G }),
                  U = ie.serverLookup(this.url);
                return U && U.dispatchEvent.apply(U, [m].concat(G)), this;
              }),
              (y.prototype.send = function (C) {
                return this.emit("message", C), this;
              }),
              (K.broadcast.get = function () {
                if (this.readyState !== y.OPEN)
                  throw new Error(
                    "SocketIO is already in CLOSING or CLOSED state"
                  );
                var _ = this,
                  C = ie.serverLookup(this.url);
                if (!C)
                  throw new Error(
                    "SocketIO can not find a server at the specified URL (" +
                      this.url +
                      ")"
                  );
                return {
                  emit: function (z, m) {
                    return (
                      C.emit(z, m, {
                        websockets: ie.websocketsLookup(_.url, null, _),
                      }),
                      _
                    );
                  },
                  to: function (z) {
                    return C.to(z, _);
                  },
                  in: function (z) {
                    return C.in(z, _);
                  },
                };
              }),
              (y.prototype.on = function (C, G) {
                return this.addEventListener(C, G), this;
              }),
              (y.prototype.off = function (C, G) {
                this.removeEventListener(C, G);
              }),
              (y.prototype.hasListeners = function (C) {
                var G = this.listeners[C];
                return Array.isArray(G) ? !!G.length : !1;
              }),
              (y.prototype.join = function (C) {
                ie.addMembershipToRoom(this, C);
              }),
              (y.prototype.leave = function (C) {
                ie.removeMembershipFromRoom(this, C);
              }),
              (y.prototype.to = function (C) {
                return this.broadcast.to(C);
              }),
              (y.prototype.in = function () {
                return this.to.apply(null, arguments);
              }),
              (y.prototype.dispatchEvent = function (C) {
                for (var G = this, z = [], m = arguments.length - 1; m-- > 0; )
                  z[m] = arguments[m + 1];
                var U = C.type,
                  ne = this.listeners[U];
                if (!Array.isArray(ne)) return !1;
                ne.forEach(function (te) {
                  z.length > 0
                    ? te.apply(G, z)
                    : te.call(G, C.data ? C.data : C);
                });
              }),
              Object.defineProperties(y.prototype, K),
              y
            );
          })(Z);
          (Ke.CONNECTING = 0), (Ke.OPEN = 1), (Ke.CLOSING = 2), (Ke.CLOSED = 3);
          var Ne = function (y, K) {
            return new Ke(y, K);
          };
          Ne.connect = function (y, K) {
            return Ne(y, K);
          };
          var ft = function (g) {
            return g.reduce(function (y, K) {
              return y.indexOf(K) > -1 ? y : y.concat(K);
            }, []);
          };
          function Ye() {
            return typeof window < "u"
              ? window
              : typeof process == "object" &&
                typeof JE == "function" &&
                typeof Xe == "object"
              ? Xe
              : this;
          }
          var Qe = { mock: !0, verifyClient: null, selectProtocol: null },
            Rt = (function (g) {
              function y(K, _) {
                _ === void 0 && (_ = Qe), g.call(this);
                var C = new fe(K);
                C.pathname || (C.pathname = "/"),
                  (this.url = C.toString()),
                  (this.originalWebSocket = null);
                var G = ie.attachServer(this, this.url);
                if (!G)
                  throw (
                    (this.dispatchEvent(Te({ type: "error" })),
                    new Error("A mock server is already listening on this url"))
                  );
                (this.options = Object.assign({}, Qe, _)),
                  this.options.mock && this.mockWebsocket();
              }
              return (
                g && (y.__proto__ = g),
                (y.prototype = Object.create(g && g.prototype)),
                (y.prototype.constructor = y),
                (y.prototype.mockWebsocket = function () {
                  var _ = Ye();
                  (this.originalWebSocket = _.WebSocket), (_.WebSocket = me);
                }),
                (y.prototype.restoreWebsocket = function () {
                  var _ = Ye();
                  this.originalWebSocket !== null &&
                    (_.WebSocket = this.originalWebSocket),
                    (this.originalWebSocket = null);
                }),
                (y.prototype.stop = function (_) {
                  _ === void 0 && (_ = function () {}),
                    this.options.mock && this.restoreWebsocket(),
                    ie.removeServer(this.url),
                    typeof _ == "function" && _();
                }),
                (y.prototype.on = function (_, C) {
                  this.addEventListener(_, C);
                }),
                (y.prototype.off = function (_, C) {
                  this.removeEventListener(_, C);
                }),
                (y.prototype.close = function (_) {
                  _ === void 0 && (_ = {});
                  var C = _.code,
                    G = _.reason,
                    z = _.wasClean,
                    m = ie.websocketsLookup(this.url);
                  ie.removeServer(this.url),
                    m.forEach(function (U) {
                      (U.readyState = me.CLOSED),
                        U.dispatchEvent(
                          xe({
                            type: "close",
                            target: U.target,
                            code: C || T.CLOSE_NORMAL,
                            reason: G || "",
                            wasClean: z,
                          })
                        );
                    }),
                    this.dispatchEvent(xe({ type: "close" }), this);
                }),
                (y.prototype.emit = function (_, C, G) {
                  var z = this;
                  G === void 0 && (G = {});
                  var m = G.websockets;
                  m || (m = ie.websocketsLookup(this.url));
                  var U;
                  typeof G != "object" || arguments.length > 3
                    ? ((C = Array.prototype.slice.call(
                        arguments,
                        1,
                        arguments.length
                      )),
                      (U = C.map(function (ne) {
                        return be(ne);
                      })))
                    : (U = be(C)),
                    m.forEach(function (ne) {
                      var te = ne instanceof Ke ? C : U;
                      Array.isArray(te)
                        ? ne.dispatchEvent.apply(
                            ne,
                            [
                              Ce({
                                type: _,
                                data: te,
                                origin: z.url,
                                target: ne.target,
                              }),
                            ].concat(te)
                          )
                        : ne.dispatchEvent(
                            Ce({
                              type: _,
                              data: te,
                              origin: z.url,
                              target: ne.target,
                            })
                          );
                    });
                }),
                (y.prototype.clients = function () {
                  return ie.websocketsLookup(this.url);
                }),
                (y.prototype.to = function (_, C, G) {
                  var z = this;
                  G === void 0 && (G = []);
                  var m = this,
                    U = ft(G.concat(ie.websocketsLookup(this.url, _, C)));
                  return {
                    to: function (ne, te) {
                      return z.to.call(z, ne, te, U);
                    },
                    emit: function (te, re) {
                      m.emit(te, re, { websockets: U });
                    },
                  };
                }),
                (y.prototype.in = function () {
                  for (var _ = [], C = arguments.length; C--; )
                    _[C] = arguments[C];
                  return this.to.apply(null, _);
                }),
                (y.prototype.simulate = function (_) {
                  var C = ie.websocketsLookup(this.url);
                  _ === "error" &&
                    C.forEach(function (G) {
                      (G.readyState = me.CLOSED),
                        G.dispatchEvent(
                          Te({ type: "error", target: G.target })
                        );
                    });
                }),
                y
              );
            })(Z);
          Rt.of = function (y) {
            return new Rt(y);
          };
          var ar = Rt,
            At = me,
            Ct = Ne;
          (n.Server = ar),
            (n.WebSocket = At),
            (n.SocketIO = Ct),
            Object.defineProperty(n, "__esModule", { value: !0 });
        });
      })(xr, xr.exports)),
    xr.exports
  );
}
QE();
var pa = { exports: {} },
  dl;
function ZE() {
  return (
    dl ||
      ((dl = 1),
      (function (r) {
        (function () {
          function t(l, p) {
            var x = l.x - p.x,
              R = l.y - p.y;
            return x * x + R * R;
          }
          function n(l, p, x) {
            var R = p.x,
              S = p.y,
              v = x.x - R,
              d = x.y - S;
            if (v !== 0 || d !== 0) {
              var I = ((l.x - R) * v + (l.y - S) * d) / (v * v + d * d);
              I > 1
                ? ((R = x.x), (S = x.y))
                : I > 0 && ((R += v * I), (S += d * I));
            }
            return (v = l.x - R), (d = l.y - S), v * v + d * d;
          }
          function i(l, p) {
            for (var x = l[0], R = [x], S, v = 1, d = l.length; v < d; v++)
              (S = l[v]), t(S, x) > p && (R.push(S), (x = S));
            return x !== S && R.push(S), R;
          }
          function s(l, p, x, R, S) {
            for (var v = R, d, I = p + 1; I < x; I++) {
              var j = n(l[I], l[p], l[x]);
              j > v && ((d = I), (v = j));
            }
            v > R &&
              (d - p > 1 && s(l, p, d, R, S),
              S.push(l[d]),
              x - d > 1 && s(l, d, x, R, S));
          }
          function f(l, p) {
            var x = l.length - 1,
              R = [l[0]];
            return s(l, 0, x, p, R), R.push(l[x]), R;
          }
          function e(l, p, x) {
            if (l.length <= 2) return l;
            var R = p !== void 0 ? p * p : 1;
            return (l = x ? l : i(l, R)), (l = f(l, R)), l;
          }
          (r.exports = e), (r.exports.default = e);
        })();
      })(pa)),
    pa.exports
  );
}
ZE();
var Ft = {},
  Ht = {},
  Ea = {},
  vl;
function Zc() {
  return (
    vl ||
      ((vl = 1),
      (function (r) {
        Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.EXTENDED_PICTOGRAPHIC = r.CLUSTER_BREAK = void 0),
          (function (t) {
            (t[(t.CR = 0)] = "CR"),
              (t[(t.LF = 1)] = "LF"),
              (t[(t.CONTROL = 2)] = "CONTROL"),
              (t[(t.EXTEND = 3)] = "EXTEND"),
              (t[(t.REGIONAL_INDICATOR = 4)] = "REGIONAL_INDICATOR"),
              (t[(t.SPACINGMARK = 5)] = "SPACINGMARK"),
              (t[(t.L = 6)] = "L"),
              (t[(t.V = 7)] = "V"),
              (t[(t.T = 8)] = "T"),
              (t[(t.LV = 9)] = "LV"),
              (t[(t.LVT = 10)] = "LVT"),
              (t[(t.OTHER = 11)] = "OTHER"),
              (t[(t.PREPEND = 12)] = "PREPEND"),
              (t[(t.E_BASE = 13)] = "E_BASE"),
              (t[(t.E_MODIFIER = 14)] = "E_MODIFIER"),
              (t[(t.ZWJ = 15)] = "ZWJ"),
              (t[(t.GLUE_AFTER_ZWJ = 16)] = "GLUE_AFTER_ZWJ"),
              (t[(t.E_BASE_GAZ = 17)] = "E_BASE_GAZ");
          })(r.CLUSTER_BREAK || (r.CLUSTER_BREAK = {})),
          (r.EXTENDED_PICTOGRAPHIC = 101);
      })(Ea)),
    Ea
  );
}
var Br = {},
  Ll;
function eh() {
  if (Ll) return Br;
  (Ll = 1), Object.defineProperty(Br, "__esModule", { value: !0 });
  const r = Zc(),
    t = 0,
    n = 1,
    i = 2,
    s = 3,
    f = 4;
  let e = class {
    static isSurrogate(p, x) {
      return (
        55296 <= p.charCodeAt(x) &&
        p.charCodeAt(x) <= 56319 &&
        56320 <= p.charCodeAt(x + 1) &&
        p.charCodeAt(x + 1) <= 57343
      );
    }
    static codePointAt(p, x) {
      x === void 0 && (x = 0);
      const R = p.charCodeAt(x);
      if (55296 <= R && R <= 56319 && x < p.length - 1) {
        const S = R,
          v = p.charCodeAt(x + 1);
        return 56320 <= v && v <= 57343
          ? (S - 55296) * 1024 + (v - 56320) + 65536
          : S;
      }
      if (56320 <= R && R <= 57343 && x >= 1) {
        const S = p.charCodeAt(x - 1),
          v = R;
        return 55296 <= S && S <= 56319
          ? (S - 55296) * 1024 + (v - 56320) + 65536
          : v;
      }
      return R;
    }
    static shouldBreak(p, x, R, S, v, d) {
      const I = [p].concat(x).concat([R]),
        j = [S].concat(v).concat([d]),
        N = I[I.length - 2],
        k = R,
        M = d,
        ee = I.lastIndexOf(r.CLUSTER_BREAK.REGIONAL_INDICATOR);
      if (
        ee > 0 &&
        I.slice(1, ee).every(function (O) {
          return O === r.CLUSTER_BREAK.REGIONAL_INDICATOR;
        }) &&
        [r.CLUSTER_BREAK.PREPEND, r.CLUSTER_BREAK.REGIONAL_INDICATOR].indexOf(
          N
        ) === -1
      )
        return I.filter(function (O) {
          return O === r.CLUSTER_BREAK.REGIONAL_INDICATOR;
        }).length %
          2 ===
          1
          ? s
          : f;
      if (N === r.CLUSTER_BREAK.CR && k === r.CLUSTER_BREAK.LF) return t;
      if (
        N === r.CLUSTER_BREAK.CONTROL ||
        N === r.CLUSTER_BREAK.CR ||
        N === r.CLUSTER_BREAK.LF
      )
        return n;
      if (
        k === r.CLUSTER_BREAK.CONTROL ||
        k === r.CLUSTER_BREAK.CR ||
        k === r.CLUSTER_BREAK.LF
      )
        return n;
      if (
        N === r.CLUSTER_BREAK.L &&
        (k === r.CLUSTER_BREAK.L ||
          k === r.CLUSTER_BREAK.V ||
          k === r.CLUSTER_BREAK.LV ||
          k === r.CLUSTER_BREAK.LVT)
      )
        return t;
      if (
        (N === r.CLUSTER_BREAK.LV || N === r.CLUSTER_BREAK.V) &&
        (k === r.CLUSTER_BREAK.V || k === r.CLUSTER_BREAK.T)
      )
        return t;
      if (
        (N === r.CLUSTER_BREAK.LVT || N === r.CLUSTER_BREAK.T) &&
        k === r.CLUSTER_BREAK.T
      )
        return t;
      if (k === r.CLUSTER_BREAK.EXTEND || k === r.CLUSTER_BREAK.ZWJ) return t;
      if (k === r.CLUSTER_BREAK.SPACINGMARK) return t;
      if (N === r.CLUSTER_BREAK.PREPEND) return t;
      const D = j.slice(0, -1).lastIndexOf(r.EXTENDED_PICTOGRAPHIC);
      return D !== -1 &&
        j[D] === r.EXTENDED_PICTOGRAPHIC &&
        I.slice(D + 1, -2).every(function (O) {
          return O === r.CLUSTER_BREAK.EXTEND;
        }) &&
        N === r.CLUSTER_BREAK.ZWJ &&
        M === r.EXTENDED_PICTOGRAPHIC
        ? t
        : x.indexOf(r.CLUSTER_BREAK.REGIONAL_INDICATOR) !== -1
        ? i
        : N === r.CLUSTER_BREAK.REGIONAL_INDICATOR &&
          k === r.CLUSTER_BREAK.REGIONAL_INDICATOR
        ? t
        : n;
    }
  };
  return (Br.default = e), Br;
}
var Ur = {},
  Al;
function th() {
  if (Al) return Ur;
  (Al = 1), Object.defineProperty(Ur, "__esModule", { value: !0 });
  let r = class {
    constructor(n, i) {
      (this._index = 0), (this._str = n), (this._nextBreak = i);
    }
    [Symbol.iterator]() {
      return this;
    }
    next() {
      let n;
      if ((n = this._nextBreak(this._str, this._index)) < this._str.length) {
        const i = this._str.slice(this._index, n);
        return (this._index = n), { value: i, done: !1 };
      }
      if (this._index < this._str.length) {
        const i = this._str.slice(this._index);
        return (this._index = this._str.length), { value: i, done: !1 };
      }
      return { value: void 0, done: !0 };
    }
  };
  return (Ur.default = r), Ur;
}
var Cl;
function rh() {
  if (Cl) return Ht;
  Cl = 1;
  var r =
    (Ht && Ht.__importDefault) ||
    function (f) {
      return f && f.__esModule ? f : { default: f };
    };
  Object.defineProperty(Ht, "__esModule", { value: !0 });
  const t = Zc(),
    n = r(eh()),
    i = r(th());
  class s {
    static nextBreak(e, l) {
      if ((l === void 0 && (l = 0), l < 0)) return 0;
      if (l >= e.length - 1) return e.length;
      const p = n.default.codePointAt(e, l),
        x = s.getGraphemeBreakProperty(p),
        R = s.getEmojiProperty(p),
        S = [],
        v = [];
      for (let d = l + 1; d < e.length; d++) {
        if (n.default.isSurrogate(e, d - 1)) continue;
        const I = n.default.codePointAt(e, d),
          j = s.getGraphemeBreakProperty(I),
          N = s.getEmojiProperty(I);
        if (n.default.shouldBreak(x, S, j, R, v, N)) return d;
        S.push(j), v.push(N);
      }
      return e.length;
    }
    splitGraphemes(e) {
      const l = [];
      let p = 0,
        x;
      for (; (x = s.nextBreak(e, p)) < e.length; )
        l.push(e.slice(p, x)), (p = x);
      return p < e.length && l.push(e.slice(p)), l;
    }
    iterateGraphemes(e) {
      return new i.default(e, s.nextBreak);
    }
    countGraphemes(e) {
      let l = 0,
        p = 0,
        x;
      for (; (x = s.nextBreak(e, p)) < e.length; ) (p = x), l++;
      return p < e.length && l++, l;
    }
    static getGraphemeBreakProperty(e) {
      if (e < 48905) {
        if (e < 44116) {
          if (e < 4141) {
            if (e < 2818) {
              if (e < 2363)
                if (e < 1759) {
                  if (e < 1471) {
                    if (e < 127) {
                      if (e < 11) {
                        if (e < 10) {
                          if (0 <= e && e <= 9) return t.CLUSTER_BREAK.CONTROL;
                        } else if (e === 10) return t.CLUSTER_BREAK.LF;
                      } else if (e < 13) {
                        if (11 <= e && e <= 12) return t.CLUSTER_BREAK.CONTROL;
                      } else if (e < 14) {
                        if (e === 13) return t.CLUSTER_BREAK.CR;
                      } else if (14 <= e && e <= 31)
                        return t.CLUSTER_BREAK.CONTROL;
                    } else if (e < 768) {
                      if (e < 173) {
                        if (127 <= e && e <= 159)
                          return t.CLUSTER_BREAK.CONTROL;
                      } else if (e === 173) return t.CLUSTER_BREAK.CONTROL;
                    } else if (e < 1155) {
                      if (768 <= e && e <= 879) return t.CLUSTER_BREAK.EXTEND;
                    } else if (e < 1425) {
                      if (1155 <= e && e <= 1161) return t.CLUSTER_BREAK.EXTEND;
                    } else if (1425 <= e && e <= 1469)
                      return t.CLUSTER_BREAK.EXTEND;
                  } else if (e < 1552) {
                    if (e < 1476) {
                      if (e < 1473) {
                        if (e === 1471) return t.CLUSTER_BREAK.EXTEND;
                      } else if (1473 <= e && e <= 1474)
                        return t.CLUSTER_BREAK.EXTEND;
                    } else if (e < 1479) {
                      if (1476 <= e && e <= 1477) return t.CLUSTER_BREAK.EXTEND;
                    } else if (e < 1536) {
                      if (e === 1479) return t.CLUSTER_BREAK.EXTEND;
                    } else if (1536 <= e && e <= 1541)
                      return t.CLUSTER_BREAK.PREPEND;
                  } else if (e < 1648) {
                    if (e < 1564) {
                      if (1552 <= e && e <= 1562) return t.CLUSTER_BREAK.EXTEND;
                    } else if (e < 1611) {
                      if (e === 1564) return t.CLUSTER_BREAK.CONTROL;
                    } else if (1611 <= e && e <= 1631)
                      return t.CLUSTER_BREAK.EXTEND;
                  } else if (e < 1750) {
                    if (e === 1648) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e < 1757) {
                    if (1750 <= e && e <= 1756) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e === 1757) return t.CLUSTER_BREAK.PREPEND;
                } else if (e < 2075) {
                  if (e < 1840)
                    if (e < 1770) {
                      if (e < 1767) {
                        if (1759 <= e && e <= 1764)
                          return t.CLUSTER_BREAK.EXTEND;
                      } else if (1767 <= e && e <= 1768)
                        return t.CLUSTER_BREAK.EXTEND;
                    } else if (e < 1807) {
                      if (1770 <= e && e <= 1773) return t.CLUSTER_BREAK.EXTEND;
                    } else {
                      if (e === 1807) return t.CLUSTER_BREAK.PREPEND;
                      if (e === 1809) return t.CLUSTER_BREAK.EXTEND;
                    }
                  else if (e < 2027) {
                    if (e < 1958) {
                      if (1840 <= e && e <= 1866) return t.CLUSTER_BREAK.EXTEND;
                    } else if (1958 <= e && e <= 1968)
                      return t.CLUSTER_BREAK.EXTEND;
                  } else if (e < 2045) {
                    if (2027 <= e && e <= 2035) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e < 2070) {
                    if (e === 2045) return t.CLUSTER_BREAK.EXTEND;
                  } else if (2070 <= e && e <= 2073)
                    return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 2200) {
                  if (e < 2089) {
                    if (e < 2085) {
                      if (2075 <= e && e <= 2083) return t.CLUSTER_BREAK.EXTEND;
                    } else if (2085 <= e && e <= 2087)
                      return t.CLUSTER_BREAK.EXTEND;
                  } else if (e < 2137) {
                    if (2089 <= e && e <= 2093) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e < 2192) {
                    if (2137 <= e && e <= 2139) return t.CLUSTER_BREAK.EXTEND;
                  } else if (2192 <= e && e <= 2193)
                    return t.CLUSTER_BREAK.PREPEND;
                } else if (e < 2275) {
                  if (e < 2250) {
                    if (2200 <= e && e <= 2207) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e < 2274) {
                    if (2250 <= e && e <= 2273) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e === 2274) return t.CLUSTER_BREAK.PREPEND;
                } else if (e < 2307) {
                  if (2275 <= e && e <= 2306) return t.CLUSTER_BREAK.EXTEND;
                } else {
                  if (e === 2307) return t.CLUSTER_BREAK.SPACINGMARK;
                  if (e === 2362) return t.CLUSTER_BREAK.EXTEND;
                }
              else if (e < 2561) {
                if (e < 2434) {
                  if (e < 2381) {
                    if (e < 2366) {
                      if (e === 2363) return t.CLUSTER_BREAK.SPACINGMARK;
                      if (e === 2364) return t.CLUSTER_BREAK.EXTEND;
                    } else if (e < 2369) {
                      if (2366 <= e && e <= 2368)
                        return t.CLUSTER_BREAK.SPACINGMARK;
                    } else if (e < 2377) {
                      if (2369 <= e && e <= 2376) return t.CLUSTER_BREAK.EXTEND;
                    } else if (2377 <= e && e <= 2380)
                      return t.CLUSTER_BREAK.SPACINGMARK;
                  } else if (e < 2385) {
                    if (e < 2382) {
                      if (e === 2381) return t.CLUSTER_BREAK.EXTEND;
                    } else if (2382 <= e && e <= 2383)
                      return t.CLUSTER_BREAK.SPACINGMARK;
                  } else if (e < 2402) {
                    if (2385 <= e && e <= 2391) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e < 2433) {
                    if (2402 <= e && e <= 2403) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e === 2433) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 2503) {
                  if (e < 2494) {
                    if (e < 2492) {
                      if (2434 <= e && e <= 2435)
                        return t.CLUSTER_BREAK.SPACINGMARK;
                    } else if (e === 2492) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e < 2495) {
                    if (e === 2494) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e < 2497) {
                    if (2495 <= e && e <= 2496)
                      return t.CLUSTER_BREAK.SPACINGMARK;
                  } else if (2497 <= e && e <= 2500)
                    return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 2519) {
                  if (e < 2507) {
                    if (2503 <= e && e <= 2504)
                      return t.CLUSTER_BREAK.SPACINGMARK;
                  } else if (e < 2509) {
                    if (2507 <= e && e <= 2508)
                      return t.CLUSTER_BREAK.SPACINGMARK;
                  } else if (e === 2509) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 2530) {
                  if (e === 2519) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 2558) {
                  if (2530 <= e && e <= 2531) return t.CLUSTER_BREAK.EXTEND;
                } else if (e === 2558) return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 2691) {
                if (e < 2631) {
                  if (e < 2620) {
                    if (e < 2563) {
                      if (2561 <= e && e <= 2562) return t.CLUSTER_BREAK.EXTEND;
                    } else if (e === 2563) return t.CLUSTER_BREAK.SPACINGMARK;
                  } else if (e < 2622) {
                    if (e === 2620) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e < 2625) {
                    if (2622 <= e && e <= 2624)
                      return t.CLUSTER_BREAK.SPACINGMARK;
                  } else if (2625 <= e && e <= 2626)
                    return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 2672) {
                  if (e < 2635) {
                    if (2631 <= e && e <= 2632) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e < 2641) {
                    if (2635 <= e && e <= 2637) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e === 2641) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 2677) {
                  if (2672 <= e && e <= 2673) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 2689) {
                  if (e === 2677) return t.CLUSTER_BREAK.EXTEND;
                } else if (2689 <= e && e <= 2690)
                  return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 2761) {
                if (e < 2750) {
                  if (e === 2691) return t.CLUSTER_BREAK.SPACINGMARK;
                  if (e === 2748) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 2753) {
                  if (2750 <= e && e <= 2752)
                    return t.CLUSTER_BREAK.SPACINGMARK;
                } else if (e < 2759) {
                  if (2753 <= e && e <= 2757) return t.CLUSTER_BREAK.EXTEND;
                } else if (2759 <= e && e <= 2760)
                  return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 2786) {
                if (e < 2763) {
                  if (e === 2761) return t.CLUSTER_BREAK.SPACINGMARK;
                } else if (e < 2765) {
                  if (2763 <= e && e <= 2764)
                    return t.CLUSTER_BREAK.SPACINGMARK;
                } else if (e === 2765) return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 2810) {
                if (2786 <= e && e <= 2787) return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 2817) {
                if (2810 <= e && e <= 2815) return t.CLUSTER_BREAK.EXTEND;
              } else if (e === 2817) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 3315) {
              if (e < 3076) {
                if (e < 2946) {
                  if (e < 2887) {
                    if (e < 2878) {
                      if (e < 2876) {
                        if (2818 <= e && e <= 2819)
                          return t.CLUSTER_BREAK.SPACINGMARK;
                      } else if (e === 2876) return t.CLUSTER_BREAK.EXTEND;
                    } else if (e < 2880) {
                      if (2878 <= e && e <= 2879) return t.CLUSTER_BREAK.EXTEND;
                    } else if (e < 2881) {
                      if (e === 2880) return t.CLUSTER_BREAK.SPACINGMARK;
                    } else if (2881 <= e && e <= 2884)
                      return t.CLUSTER_BREAK.EXTEND;
                  } else if (e < 2893) {
                    if (e < 2891) {
                      if (2887 <= e && e <= 2888)
                        return t.CLUSTER_BREAK.SPACINGMARK;
                    } else if (2891 <= e && e <= 2892)
                      return t.CLUSTER_BREAK.SPACINGMARK;
                  } else if (e < 2901) {
                    if (e === 2893) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e < 2914) {
                    if (2901 <= e && e <= 2903) return t.CLUSTER_BREAK.EXTEND;
                  } else if (2914 <= e && e <= 2915)
                    return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 3014) {
                  if (e < 3007) {
                    if (e === 2946 || e === 3006) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e < 3008) {
                    if (e === 3007) return t.CLUSTER_BREAK.SPACINGMARK;
                  } else if (e < 3009) {
                    if (e === 3008) return t.CLUSTER_BREAK.EXTEND;
                  } else if (3009 <= e && e <= 3010)
                    return t.CLUSTER_BREAK.SPACINGMARK;
                } else if (e < 3031) {
                  if (e < 3018) {
                    if (3014 <= e && e <= 3016)
                      return t.CLUSTER_BREAK.SPACINGMARK;
                  } else if (e < 3021) {
                    if (3018 <= e && e <= 3020)
                      return t.CLUSTER_BREAK.SPACINGMARK;
                  } else if (e === 3021) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 3072) {
                  if (e === 3031) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 3073) {
                  if (e === 3072) return t.CLUSTER_BREAK.EXTEND;
                } else if (3073 <= e && e <= 3075)
                  return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e < 3262) {
                if (e < 3146) {
                  if (e < 3134) {
                    if (e === 3076 || e === 3132) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e < 3137) {
                    if (3134 <= e && e <= 3136) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e < 3142) {
                    if (3137 <= e && e <= 3140)
                      return t.CLUSTER_BREAK.SPACINGMARK;
                  } else if (3142 <= e && e <= 3144)
                    return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 3201) {
                  if (e < 3157) {
                    if (3146 <= e && e <= 3149) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e < 3170) {
                    if (3157 <= e && e <= 3158) return t.CLUSTER_BREAK.EXTEND;
                  } else if (3170 <= e && e <= 3171)
                    return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 3202) {
                  if (e === 3201) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 3260) {
                  if (3202 <= e && e <= 3203)
                    return t.CLUSTER_BREAK.SPACINGMARK;
                } else if (e === 3260) return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 3270) {
                if (e < 3264) {
                  if (e === 3262) return t.CLUSTER_BREAK.SPACINGMARK;
                  if (e === 3263) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 3266) {
                  if (3264 <= e && e <= 3265)
                    return t.CLUSTER_BREAK.SPACINGMARK;
                } else if (e < 3267) {
                  if (e === 3266) return t.CLUSTER_BREAK.EXTEND;
                } else if (3267 <= e && e <= 3268)
                  return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e < 3276) {
                if (e < 3271) {
                  if (e === 3270) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 3274) {
                  if (3271 <= e && e <= 3272)
                    return t.CLUSTER_BREAK.SPACINGMARK;
                } else if (3274 <= e && e <= 3275)
                  return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e < 3285) {
                if (3276 <= e && e <= 3277) return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 3298) {
                if (3285 <= e && e <= 3286) return t.CLUSTER_BREAK.EXTEND;
              } else if (3298 <= e && e <= 3299) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 3551) {
              if (e < 3406) {
                if (e < 3391) {
                  if (e < 3330) {
                    if (e < 3328) {
                      if (e === 3315) return t.CLUSTER_BREAK.SPACINGMARK;
                    } else if (3328 <= e && e <= 3329)
                      return t.CLUSTER_BREAK.EXTEND;
                  } else if (e < 3387) {
                    if (3330 <= e && e <= 3331)
                      return t.CLUSTER_BREAK.SPACINGMARK;
                  } else if (e < 3390) {
                    if (3387 <= e && e <= 3388) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e === 3390) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 3398) {
                  if (e < 3393) {
                    if (3391 <= e && e <= 3392)
                      return t.CLUSTER_BREAK.SPACINGMARK;
                  } else if (3393 <= e && e <= 3396)
                    return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 3402) {
                  if (3398 <= e && e <= 3400)
                    return t.CLUSTER_BREAK.SPACINGMARK;
                } else if (e < 3405) {
                  if (3402 <= e && e <= 3404)
                    return t.CLUSTER_BREAK.SPACINGMARK;
                } else if (e === 3405) return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 3530) {
                if (e < 3426) {
                  if (e === 3406) return t.CLUSTER_BREAK.PREPEND;
                  if (e === 3415) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 3457) {
                  if (3426 <= e && e <= 3427) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 3458) {
                  if (e === 3457) return t.CLUSTER_BREAK.EXTEND;
                } else if (3458 <= e && e <= 3459)
                  return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e < 3538) {
                if (e < 3535) {
                  if (e === 3530) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 3536) {
                  if (e === 3535) return t.CLUSTER_BREAK.EXTEND;
                } else if (3536 <= e && e <= 3537)
                  return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e < 3542) {
                if (3538 <= e && e <= 3540) return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 3544) {
                if (e === 3542) return t.CLUSTER_BREAK.EXTEND;
              } else if (3544 <= e && e <= 3550)
                return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (e < 3893) {
              if (e < 3655) {
                if (e < 3633) {
                  if (e < 3570) {
                    if (e === 3551) return t.CLUSTER_BREAK.EXTEND;
                  } else if (3570 <= e && e <= 3571)
                    return t.CLUSTER_BREAK.SPACINGMARK;
                } else if (e < 3635) {
                  if (e === 3633) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 3636) {
                  if (e === 3635) return t.CLUSTER_BREAK.SPACINGMARK;
                } else if (3636 <= e && e <= 3642)
                  return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 3764)
                if (e < 3761) {
                  if (3655 <= e && e <= 3662) return t.CLUSTER_BREAK.EXTEND;
                } else {
                  if (e === 3761) return t.CLUSTER_BREAK.EXTEND;
                  if (e === 3763) return t.CLUSTER_BREAK.SPACINGMARK;
                }
              else if (e < 3784) {
                if (3764 <= e && e <= 3772) return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 3864) {
                if (3784 <= e && e <= 3790) return t.CLUSTER_BREAK.EXTEND;
              } else if (3864 <= e && e <= 3865) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 3967) {
              if (e < 3897) {
                if (e === 3893 || e === 3895) return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 3902) {
                if (e === 3897) return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 3953) {
                if (3902 <= e && e <= 3903) return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (3953 <= e && e <= 3966) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 3981) {
              if (e < 3968) {
                if (e === 3967) return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e < 3974) {
                if (3968 <= e && e <= 3972) return t.CLUSTER_BREAK.EXTEND;
              } else if (3974 <= e && e <= 3975) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 3993) {
              if (3981 <= e && e <= 3991) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 4038) {
              if (3993 <= e && e <= 4028) return t.CLUSTER_BREAK.EXTEND;
            } else if (e === 4038) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 7204) {
            if (e < 6448) {
              if (e < 5938) {
                if (e < 4226) {
                  if (e < 4157) {
                    if (e < 4146) {
                      if (e < 4145) {
                        if (4141 <= e && e <= 4144)
                          return t.CLUSTER_BREAK.EXTEND;
                      } else if (e === 4145) return t.CLUSTER_BREAK.SPACINGMARK;
                    } else if (e < 4153) {
                      if (4146 <= e && e <= 4151) return t.CLUSTER_BREAK.EXTEND;
                    } else if (e < 4155) {
                      if (4153 <= e && e <= 4154) return t.CLUSTER_BREAK.EXTEND;
                    } else if (4155 <= e && e <= 4156)
                      return t.CLUSTER_BREAK.SPACINGMARK;
                  } else if (e < 4184) {
                    if (e < 4182) {
                      if (4157 <= e && e <= 4158) return t.CLUSTER_BREAK.EXTEND;
                    } else if (4182 <= e && e <= 4183)
                      return t.CLUSTER_BREAK.SPACINGMARK;
                  } else if (e < 4190) {
                    if (4184 <= e && e <= 4185) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e < 4209) {
                    if (4190 <= e && e <= 4192) return t.CLUSTER_BREAK.EXTEND;
                  } else if (4209 <= e && e <= 4212)
                    return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 4352) {
                  if (e < 4229) {
                    if (e === 4226) return t.CLUSTER_BREAK.EXTEND;
                    if (e === 4228) return t.CLUSTER_BREAK.SPACINGMARK;
                  } else if (e < 4237) {
                    if (4229 <= e && e <= 4230) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e === 4237 || e === 4253)
                    return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 4957) {
                  if (e < 4448) {
                    if (4352 <= e && e <= 4447) return t.CLUSTER_BREAK.L;
                  } else if (e < 4520) {
                    if (4448 <= e && e <= 4519) return t.CLUSTER_BREAK.V;
                  } else if (4520 <= e && e <= 4607) return t.CLUSTER_BREAK.T;
                } else if (e < 5906) {
                  if (4957 <= e && e <= 4959) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 5909) {
                  if (5906 <= e && e <= 5908) return t.CLUSTER_BREAK.EXTEND;
                } else if (e === 5909) return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e < 6089) {
                if (e < 6070) {
                  if (e < 5970) {
                    if (e < 5940) {
                      if (5938 <= e && e <= 5939) return t.CLUSTER_BREAK.EXTEND;
                    } else if (e === 5940) return t.CLUSTER_BREAK.SPACINGMARK;
                  } else if (e < 6002) {
                    if (5970 <= e && e <= 5971) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e < 6068) {
                    if (6002 <= e && e <= 6003) return t.CLUSTER_BREAK.EXTEND;
                  } else if (6068 <= e && e <= 6069)
                    return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 6078) {
                  if (e < 6071) {
                    if (e === 6070) return t.CLUSTER_BREAK.SPACINGMARK;
                  } else if (6071 <= e && e <= 6077)
                    return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 6086) {
                  if (6078 <= e && e <= 6085)
                    return t.CLUSTER_BREAK.SPACINGMARK;
                } else if (e < 6087) {
                  if (e === 6086) return t.CLUSTER_BREAK.EXTEND;
                } else if (6087 <= e && e <= 6088)
                  return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e < 6277)
                if (e < 6155) {
                  if (e < 6109) {
                    if (6089 <= e && e <= 6099) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e === 6109) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 6158) {
                  if (6155 <= e && e <= 6157) return t.CLUSTER_BREAK.EXTEND;
                } else {
                  if (e === 6158) return t.CLUSTER_BREAK.CONTROL;
                  if (e === 6159) return t.CLUSTER_BREAK.EXTEND;
                }
              else if (e < 6435) {
                if (e < 6313) {
                  if (6277 <= e && e <= 6278) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 6432) {
                  if (e === 6313) return t.CLUSTER_BREAK.EXTEND;
                } else if (6432 <= e && e <= 6434)
                  return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 6439) {
                if (6435 <= e && e <= 6438) return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e < 6441) {
                if (6439 <= e && e <= 6440) return t.CLUSTER_BREAK.EXTEND;
              } else if (6441 <= e && e <= 6443)
                return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (e < 6971) {
              if (e < 6744)
                if (e < 6681) {
                  if (e < 6451) {
                    if (e < 6450) {
                      if (6448 <= e && e <= 6449)
                        return t.CLUSTER_BREAK.SPACINGMARK;
                    } else if (e === 6450) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e < 6457) {
                    if (6451 <= e && e <= 6456)
                      return t.CLUSTER_BREAK.SPACINGMARK;
                  } else if (e < 6679) {
                    if (6457 <= e && e <= 6459) return t.CLUSTER_BREAK.EXTEND;
                  } else if (6679 <= e && e <= 6680)
                    return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 6741) {
                  if (e < 6683) {
                    if (6681 <= e && e <= 6682)
                      return t.CLUSTER_BREAK.SPACINGMARK;
                  } else if (e === 6683) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 6742) {
                  if (e === 6741) return t.CLUSTER_BREAK.SPACINGMARK;
                } else {
                  if (e === 6742) return t.CLUSTER_BREAK.EXTEND;
                  if (e === 6743) return t.CLUSTER_BREAK.SPACINGMARK;
                }
              else if (e < 6771) {
                if (e < 6754) {
                  if (e < 6752) {
                    if (6744 <= e && e <= 6750) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e === 6752) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 6757) {
                  if (e === 6754) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 6765) {
                  if (6757 <= e && e <= 6764) return t.CLUSTER_BREAK.EXTEND;
                } else if (6765 <= e && e <= 6770)
                  return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e < 6912) {
                if (e < 6783) {
                  if (6771 <= e && e <= 6780) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 6832) {
                  if (e === 6783) return t.CLUSTER_BREAK.EXTEND;
                } else if (6832 <= e && e <= 6862)
                  return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 6916) {
                if (6912 <= e && e <= 6915) return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 6964) {
                if (e === 6916) return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (6964 <= e && e <= 6970) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 7080) {
              if (e < 7019) {
                if (e < 6973) {
                  if (e === 6971) return t.CLUSTER_BREAK.SPACINGMARK;
                  if (e === 6972) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 6978) {
                  if (6973 <= e && e <= 6977)
                    return t.CLUSTER_BREAK.SPACINGMARK;
                } else if (e < 6979) {
                  if (e === 6978) return t.CLUSTER_BREAK.EXTEND;
                } else if (6979 <= e && e <= 6980)
                  return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e < 7073) {
                if (e < 7040) {
                  if (7019 <= e && e <= 7027) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 7042) {
                  if (7040 <= e && e <= 7041) return t.CLUSTER_BREAK.EXTEND;
                } else if (e === 7042) return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e < 7074) {
                if (e === 7073) return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e < 7078) {
                if (7074 <= e && e <= 7077) return t.CLUSTER_BREAK.EXTEND;
              } else if (7078 <= e && e <= 7079)
                return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (e < 7144)
              if (e < 7083) {
                if (e < 7082) {
                  if (7080 <= e && e <= 7081) return t.CLUSTER_BREAK.EXTEND;
                } else if (e === 7082) return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e < 7142) {
                if (7083 <= e && e <= 7085) return t.CLUSTER_BREAK.EXTEND;
              } else {
                if (e === 7142) return t.CLUSTER_BREAK.EXTEND;
                if (e === 7143) return t.CLUSTER_BREAK.SPACINGMARK;
              }
            else if (e < 7150) {
              if (e < 7146) {
                if (7144 <= e && e <= 7145) return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 7149) {
                if (7146 <= e && e <= 7148) return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e === 7149) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 7151) {
              if (e === 7150) return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (e < 7154) {
              if (7151 <= e && e <= 7153) return t.CLUSTER_BREAK.EXTEND;
            } else if (7154 <= e && e <= 7155)
              return t.CLUSTER_BREAK.SPACINGMARK;
          } else if (e < 43346) {
            if (e < 11647) {
              if (e < 7415) {
                if (e < 7380) {
                  if (e < 7220) {
                    if (e < 7212) {
                      if (7204 <= e && e <= 7211)
                        return t.CLUSTER_BREAK.SPACINGMARK;
                    } else if (7212 <= e && e <= 7219)
                      return t.CLUSTER_BREAK.EXTEND;
                  } else if (e < 7222) {
                    if (7220 <= e && e <= 7221)
                      return t.CLUSTER_BREAK.SPACINGMARK;
                  } else if (e < 7376) {
                    if (7222 <= e && e <= 7223) return t.CLUSTER_BREAK.EXTEND;
                  } else if (7376 <= e && e <= 7378)
                    return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 7394) {
                  if (e < 7393) {
                    if (7380 <= e && e <= 7392) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e === 7393) return t.CLUSTER_BREAK.SPACINGMARK;
                } else if (e < 7405) {
                  if (7394 <= e && e <= 7400) return t.CLUSTER_BREAK.EXTEND;
                } else if (e === 7405 || e === 7412)
                  return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 8205)
                if (e < 7616) {
                  if (e < 7416) {
                    if (e === 7415) return t.CLUSTER_BREAK.SPACINGMARK;
                  } else if (7416 <= e && e <= 7417)
                    return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 8203) {
                  if (7616 <= e && e <= 7679) return t.CLUSTER_BREAK.EXTEND;
                } else {
                  if (e === 8203) return t.CLUSTER_BREAK.CONTROL;
                  if (e === 8204) return t.CLUSTER_BREAK.EXTEND;
                }
              else if (e < 8288) {
                if (e < 8206) {
                  if (e === 8205) return t.CLUSTER_BREAK.ZWJ;
                } else if (e < 8232) {
                  if (8206 <= e && e <= 8207) return t.CLUSTER_BREAK.CONTROL;
                } else if (8232 <= e && e <= 8238)
                  return t.CLUSTER_BREAK.CONTROL;
              } else if (e < 8400) {
                if (8288 <= e && e <= 8303) return t.CLUSTER_BREAK.CONTROL;
              } else if (e < 11503) {
                if (8400 <= e && e <= 8432) return t.CLUSTER_BREAK.EXTEND;
              } else if (11503 <= e && e <= 11505)
                return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 43043) {
              if (e < 42612) {
                if (e < 12330) {
                  if (e < 11744) {
                    if (e === 11647) return t.CLUSTER_BREAK.EXTEND;
                  } else if (11744 <= e && e <= 11775)
                    return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 12441) {
                  if (12330 <= e && e <= 12335) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 42607) {
                  if (12441 <= e && e <= 12442) return t.CLUSTER_BREAK.EXTEND;
                } else if (42607 <= e && e <= 42610)
                  return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 43010) {
                if (e < 42654) {
                  if (42612 <= e && e <= 42621) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 42736) {
                  if (42654 <= e && e <= 42655) return t.CLUSTER_BREAK.EXTEND;
                } else if (42736 <= e && e <= 42737)
                  return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 43014) {
                if (e === 43010) return t.CLUSTER_BREAK.EXTEND;
              } else if (e === 43014 || e === 43019)
                return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 43188) {
              if (e < 43047) {
                if (e < 43045) {
                  if (43043 <= e && e <= 43044)
                    return t.CLUSTER_BREAK.SPACINGMARK;
                } else if (43045 <= e && e <= 43046)
                  return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 43052) {
                if (e === 43047) return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e < 43136) {
                if (e === 43052) return t.CLUSTER_BREAK.EXTEND;
              } else if (43136 <= e && e <= 43137)
                return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (e < 43263) {
              if (e < 43204) {
                if (43188 <= e && e <= 43203)
                  return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e < 43232) {
                if (43204 <= e && e <= 43205) return t.CLUSTER_BREAK.EXTEND;
              } else if (43232 <= e && e <= 43249)
                return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 43302) {
              if (e === 43263) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 43335) {
              if (43302 <= e && e <= 43309) return t.CLUSTER_BREAK.EXTEND;
            } else if (43335 <= e && e <= 43345) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 43698) {
            if (e < 43493) {
              if (e < 43444)
                if (e < 43392) {
                  if (e < 43360) {
                    if (43346 <= e && e <= 43347)
                      return t.CLUSTER_BREAK.SPACINGMARK;
                  } else if (43360 <= e && e <= 43388) return t.CLUSTER_BREAK.L;
                } else if (e < 43395) {
                  if (43392 <= e && e <= 43394) return t.CLUSTER_BREAK.EXTEND;
                } else {
                  if (e === 43395) return t.CLUSTER_BREAK.SPACINGMARK;
                  if (e === 43443) return t.CLUSTER_BREAK.EXTEND;
                }
              else if (e < 43450) {
                if (e < 43446) {
                  if (43444 <= e && e <= 43445)
                    return t.CLUSTER_BREAK.SPACINGMARK;
                } else if (43446 <= e && e <= 43449)
                  return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 43452) {
                if (43450 <= e && e <= 43451)
                  return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e < 43454) {
                if (43452 <= e && e <= 43453) return t.CLUSTER_BREAK.EXTEND;
              } else if (43454 <= e && e <= 43456)
                return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (e < 43573) {
              if (e < 43567) {
                if (e < 43561) {
                  if (e === 43493) return t.CLUSTER_BREAK.EXTEND;
                } else if (43561 <= e && e <= 43566)
                  return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 43569) {
                if (43567 <= e && e <= 43568)
                  return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e < 43571) {
                if (43569 <= e && e <= 43570) return t.CLUSTER_BREAK.EXTEND;
              } else if (43571 <= e && e <= 43572)
                return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (e < 43597) {
              if (e < 43587) {
                if (43573 <= e && e <= 43574) return t.CLUSTER_BREAK.EXTEND;
              } else if (e === 43587 || e === 43596)
                return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 43644) {
              if (e === 43597) return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (e === 43644 || e === 43696)
              return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 44006) {
            if (e < 43756)
              if (e < 43710) {
                if (e < 43703) {
                  if (43698 <= e && e <= 43700) return t.CLUSTER_BREAK.EXTEND;
                } else if (43703 <= e && e <= 43704)
                  return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 43713) {
                if (43710 <= e && e <= 43711) return t.CLUSTER_BREAK.EXTEND;
              } else {
                if (e === 43713) return t.CLUSTER_BREAK.EXTEND;
                if (e === 43755) return t.CLUSTER_BREAK.SPACINGMARK;
              }
            else if (e < 43766) {
              if (e < 43758) {
                if (43756 <= e && e <= 43757) return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 43765) {
                if (43758 <= e && e <= 43759)
                  return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e === 43765) return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (e < 44003) {
              if (e === 43766) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 44005) {
              if (44003 <= e && e <= 44004) return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (e === 44005) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 44032)
            if (e < 44009) {
              if (e < 44008) {
                if (44006 <= e && e <= 44007)
                  return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e === 44008) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 44012) {
              if (44009 <= e && e <= 44010) return t.CLUSTER_BREAK.SPACINGMARK;
            } else {
              if (e === 44012) return t.CLUSTER_BREAK.SPACINGMARK;
              if (e === 44013) return t.CLUSTER_BREAK.EXTEND;
            }
          else if (e < 44061) {
            if (e < 44033) {
              if (e === 44032) return t.CLUSTER_BREAK.LV;
            } else if (e < 44060) {
              if (44033 <= e && e <= 44059) return t.CLUSTER_BREAK.LVT;
            } else if (e === 44060) return t.CLUSTER_BREAK.LV;
          } else if (e < 44088) {
            if (44061 <= e && e <= 44087) return t.CLUSTER_BREAK.LVT;
          } else if (e < 44089) {
            if (e === 44088) return t.CLUSTER_BREAK.LV;
          } else if (44089 <= e && e <= 44115) return t.CLUSTER_BREAK.LVT;
        } else if (e < 46497) {
          if (e < 45293) {
            if (e < 44704) {
              if (e < 44397) {
                if (e < 44256) {
                  if (e < 44173) {
                    if (e < 44144) {
                      if (e < 44117) {
                        if (e === 44116) return t.CLUSTER_BREAK.LV;
                      } else if (44117 <= e && e <= 44143)
                        return t.CLUSTER_BREAK.LVT;
                    } else if (e < 44145) {
                      if (e === 44144) return t.CLUSTER_BREAK.LV;
                    } else if (e < 44172) {
                      if (44145 <= e && e <= 44171) return t.CLUSTER_BREAK.LVT;
                    } else if (e === 44172) return t.CLUSTER_BREAK.LV;
                  } else if (e < 44201) {
                    if (e < 44200) {
                      if (44173 <= e && e <= 44199) return t.CLUSTER_BREAK.LVT;
                    } else if (e === 44200) return t.CLUSTER_BREAK.LV;
                  } else if (e < 44228) {
                    if (44201 <= e && e <= 44227) return t.CLUSTER_BREAK.LVT;
                  } else if (e < 44229) {
                    if (e === 44228) return t.CLUSTER_BREAK.LV;
                  } else if (44229 <= e && e <= 44255)
                    return t.CLUSTER_BREAK.LVT;
                } else if (e < 44313) {
                  if (e < 44284) {
                    if (e < 44257) {
                      if (e === 44256) return t.CLUSTER_BREAK.LV;
                    } else if (44257 <= e && e <= 44283)
                      return t.CLUSTER_BREAK.LVT;
                  } else if (e < 44285) {
                    if (e === 44284) return t.CLUSTER_BREAK.LV;
                  } else if (e < 44312) {
                    if (44285 <= e && e <= 44311) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 44312) return t.CLUSTER_BREAK.LV;
                } else if (e < 44368) {
                  if (e < 44340) {
                    if (44313 <= e && e <= 44339) return t.CLUSTER_BREAK.LVT;
                  } else if (e < 44341) {
                    if (e === 44340) return t.CLUSTER_BREAK.LV;
                  } else if (44341 <= e && e <= 44367)
                    return t.CLUSTER_BREAK.LVT;
                } else if (e < 44369) {
                  if (e === 44368) return t.CLUSTER_BREAK.LV;
                } else if (e < 44396) {
                  if (44369 <= e && e <= 44395) return t.CLUSTER_BREAK.LVT;
                } else if (e === 44396) return t.CLUSTER_BREAK.LV;
              } else if (e < 44537) {
                if (e < 44480) {
                  if (e < 44425) {
                    if (e < 44424) {
                      if (44397 <= e && e <= 44423) return t.CLUSTER_BREAK.LVT;
                    } else if (e === 44424) return t.CLUSTER_BREAK.LV;
                  } else if (e < 44452) {
                    if (44425 <= e && e <= 44451) return t.CLUSTER_BREAK.LVT;
                  } else if (e < 44453) {
                    if (e === 44452) return t.CLUSTER_BREAK.LV;
                  } else if (44453 <= e && e <= 44479)
                    return t.CLUSTER_BREAK.LVT;
                } else if (e < 44508) {
                  if (e < 44481) {
                    if (e === 44480) return t.CLUSTER_BREAK.LV;
                  } else if (44481 <= e && e <= 44507)
                    return t.CLUSTER_BREAK.LVT;
                } else if (e < 44509) {
                  if (e === 44508) return t.CLUSTER_BREAK.LV;
                } else if (e < 44536) {
                  if (44509 <= e && e <= 44535) return t.CLUSTER_BREAK.LVT;
                } else if (e === 44536) return t.CLUSTER_BREAK.LV;
              } else if (e < 44620) {
                if (e < 44565) {
                  if (e < 44564) {
                    if (44537 <= e && e <= 44563) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 44564) return t.CLUSTER_BREAK.LV;
                } else if (e < 44592) {
                  if (44565 <= e && e <= 44591) return t.CLUSTER_BREAK.LVT;
                } else if (e < 44593) {
                  if (e === 44592) return t.CLUSTER_BREAK.LV;
                } else if (44593 <= e && e <= 44619) return t.CLUSTER_BREAK.LVT;
              } else if (e < 44649) {
                if (e < 44621) {
                  if (e === 44620) return t.CLUSTER_BREAK.LV;
                } else if (e < 44648) {
                  if (44621 <= e && e <= 44647) return t.CLUSTER_BREAK.LVT;
                } else if (e === 44648) return t.CLUSTER_BREAK.LV;
              } else if (e < 44676) {
                if (44649 <= e && e <= 44675) return t.CLUSTER_BREAK.LVT;
              } else if (e < 44677) {
                if (e === 44676) return t.CLUSTER_BREAK.LV;
              } else if (44677 <= e && e <= 44703) return t.CLUSTER_BREAK.LVT;
            } else if (e < 44985) {
              if (e < 44844) {
                if (e < 44761) {
                  if (e < 44732) {
                    if (e < 44705) {
                      if (e === 44704) return t.CLUSTER_BREAK.LV;
                    } else if (44705 <= e && e <= 44731)
                      return t.CLUSTER_BREAK.LVT;
                  } else if (e < 44733) {
                    if (e === 44732) return t.CLUSTER_BREAK.LV;
                  } else if (e < 44760) {
                    if (44733 <= e && e <= 44759) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 44760) return t.CLUSTER_BREAK.LV;
                } else if (e < 44789) {
                  if (e < 44788) {
                    if (44761 <= e && e <= 44787) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 44788) return t.CLUSTER_BREAK.LV;
                } else if (e < 44816) {
                  if (44789 <= e && e <= 44815) return t.CLUSTER_BREAK.LVT;
                } else if (e < 44817) {
                  if (e === 44816) return t.CLUSTER_BREAK.LV;
                } else if (44817 <= e && e <= 44843) return t.CLUSTER_BREAK.LVT;
              } else if (e < 44901) {
                if (e < 44872) {
                  if (e < 44845) {
                    if (e === 44844) return t.CLUSTER_BREAK.LV;
                  } else if (44845 <= e && e <= 44871)
                    return t.CLUSTER_BREAK.LVT;
                } else if (e < 44873) {
                  if (e === 44872) return t.CLUSTER_BREAK.LV;
                } else if (e < 44900) {
                  if (44873 <= e && e <= 44899) return t.CLUSTER_BREAK.LVT;
                } else if (e === 44900) return t.CLUSTER_BREAK.LV;
              } else if (e < 44956) {
                if (e < 44928) {
                  if (44901 <= e && e <= 44927) return t.CLUSTER_BREAK.LVT;
                } else if (e < 44929) {
                  if (e === 44928) return t.CLUSTER_BREAK.LV;
                } else if (44929 <= e && e <= 44955) return t.CLUSTER_BREAK.LVT;
              } else if (e < 44957) {
                if (e === 44956) return t.CLUSTER_BREAK.LV;
              } else if (e < 44984) {
                if (44957 <= e && e <= 44983) return t.CLUSTER_BREAK.LVT;
              } else if (e === 44984) return t.CLUSTER_BREAK.LV;
            } else if (e < 45152) {
              if (e < 45068) {
                if (e < 45013) {
                  if (e < 45012) {
                    if (44985 <= e && e <= 45011) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 45012) return t.CLUSTER_BREAK.LV;
                } else if (e < 45040) {
                  if (45013 <= e && e <= 45039) return t.CLUSTER_BREAK.LVT;
                } else if (e < 45041) {
                  if (e === 45040) return t.CLUSTER_BREAK.LV;
                } else if (45041 <= e && e <= 45067) return t.CLUSTER_BREAK.LVT;
              } else if (e < 45097) {
                if (e < 45069) {
                  if (e === 45068) return t.CLUSTER_BREAK.LV;
                } else if (e < 45096) {
                  if (45069 <= e && e <= 45095) return t.CLUSTER_BREAK.LVT;
                } else if (e === 45096) return t.CLUSTER_BREAK.LV;
              } else if (e < 45124) {
                if (45097 <= e && e <= 45123) return t.CLUSTER_BREAK.LVT;
              } else if (e < 45125) {
                if (e === 45124) return t.CLUSTER_BREAK.LV;
              } else if (45125 <= e && e <= 45151) return t.CLUSTER_BREAK.LVT;
            } else if (e < 45209) {
              if (e < 45180) {
                if (e < 45153) {
                  if (e === 45152) return t.CLUSTER_BREAK.LV;
                } else if (45153 <= e && e <= 45179) return t.CLUSTER_BREAK.LVT;
              } else if (e < 45181) {
                if (e === 45180) return t.CLUSTER_BREAK.LV;
              } else if (e < 45208) {
                if (45181 <= e && e <= 45207) return t.CLUSTER_BREAK.LVT;
              } else if (e === 45208) return t.CLUSTER_BREAK.LV;
            } else if (e < 45264) {
              if (e < 45236) {
                if (45209 <= e && e <= 45235) return t.CLUSTER_BREAK.LVT;
              } else if (e < 45237) {
                if (e === 45236) return t.CLUSTER_BREAK.LV;
              } else if (45237 <= e && e <= 45263) return t.CLUSTER_BREAK.LVT;
            } else if (e < 45265) {
              if (e === 45264) return t.CLUSTER_BREAK.LV;
            } else if (e < 45292) {
              if (45265 <= e && e <= 45291) return t.CLUSTER_BREAK.LVT;
            } else if (e === 45292) return t.CLUSTER_BREAK.LV;
          } else if (e < 45908) {
            if (e < 45600) {
              if (e < 45433) {
                if (e < 45376) {
                  if (e < 45321) {
                    if (e < 45320) {
                      if (45293 <= e && e <= 45319) return t.CLUSTER_BREAK.LVT;
                    } else if (e === 45320) return t.CLUSTER_BREAK.LV;
                  } else if (e < 45348) {
                    if (45321 <= e && e <= 45347) return t.CLUSTER_BREAK.LVT;
                  } else if (e < 45349) {
                    if (e === 45348) return t.CLUSTER_BREAK.LV;
                  } else if (45349 <= e && e <= 45375)
                    return t.CLUSTER_BREAK.LVT;
                } else if (e < 45404) {
                  if (e < 45377) {
                    if (e === 45376) return t.CLUSTER_BREAK.LV;
                  } else if (45377 <= e && e <= 45403)
                    return t.CLUSTER_BREAK.LVT;
                } else if (e < 45405) {
                  if (e === 45404) return t.CLUSTER_BREAK.LV;
                } else if (e < 45432) {
                  if (45405 <= e && e <= 45431) return t.CLUSTER_BREAK.LVT;
                } else if (e === 45432) return t.CLUSTER_BREAK.LV;
              } else if (e < 45516) {
                if (e < 45461) {
                  if (e < 45460) {
                    if (45433 <= e && e <= 45459) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 45460) return t.CLUSTER_BREAK.LV;
                } else if (e < 45488) {
                  if (45461 <= e && e <= 45487) return t.CLUSTER_BREAK.LVT;
                } else if (e < 45489) {
                  if (e === 45488) return t.CLUSTER_BREAK.LV;
                } else if (45489 <= e && e <= 45515) return t.CLUSTER_BREAK.LVT;
              } else if (e < 45545) {
                if (e < 45517) {
                  if (e === 45516) return t.CLUSTER_BREAK.LV;
                } else if (e < 45544) {
                  if (45517 <= e && e <= 45543) return t.CLUSTER_BREAK.LVT;
                } else if (e === 45544) return t.CLUSTER_BREAK.LV;
              } else if (e < 45572) {
                if (45545 <= e && e <= 45571) return t.CLUSTER_BREAK.LVT;
              } else if (e < 45573) {
                if (e === 45572) return t.CLUSTER_BREAK.LV;
              } else if (45573 <= e && e <= 45599) return t.CLUSTER_BREAK.LVT;
            } else if (e < 45741) {
              if (e < 45657) {
                if (e < 45628) {
                  if (e < 45601) {
                    if (e === 45600) return t.CLUSTER_BREAK.LV;
                  } else if (45601 <= e && e <= 45627)
                    return t.CLUSTER_BREAK.LVT;
                } else if (e < 45629) {
                  if (e === 45628) return t.CLUSTER_BREAK.LV;
                } else if (e < 45656) {
                  if (45629 <= e && e <= 45655) return t.CLUSTER_BREAK.LVT;
                } else if (e === 45656) return t.CLUSTER_BREAK.LV;
              } else if (e < 45712) {
                if (e < 45684) {
                  if (45657 <= e && e <= 45683) return t.CLUSTER_BREAK.LVT;
                } else if (e < 45685) {
                  if (e === 45684) return t.CLUSTER_BREAK.LV;
                } else if (45685 <= e && e <= 45711) return t.CLUSTER_BREAK.LVT;
              } else if (e < 45713) {
                if (e === 45712) return t.CLUSTER_BREAK.LV;
              } else if (e < 45740) {
                if (45713 <= e && e <= 45739) return t.CLUSTER_BREAK.LVT;
              } else if (e === 45740) return t.CLUSTER_BREAK.LV;
            } else if (e < 45824) {
              if (e < 45769) {
                if (e < 45768) {
                  if (45741 <= e && e <= 45767) return t.CLUSTER_BREAK.LVT;
                } else if (e === 45768) return t.CLUSTER_BREAK.LV;
              } else if (e < 45796) {
                if (45769 <= e && e <= 45795) return t.CLUSTER_BREAK.LVT;
              } else if (e < 45797) {
                if (e === 45796) return t.CLUSTER_BREAK.LV;
              } else if (45797 <= e && e <= 45823) return t.CLUSTER_BREAK.LVT;
            } else if (e < 45853) {
              if (e < 45825) {
                if (e === 45824) return t.CLUSTER_BREAK.LV;
              } else if (e < 45852) {
                if (45825 <= e && e <= 45851) return t.CLUSTER_BREAK.LVT;
              } else if (e === 45852) return t.CLUSTER_BREAK.LV;
            } else if (e < 45880) {
              if (45853 <= e && e <= 45879) return t.CLUSTER_BREAK.LVT;
            } else if (e < 45881) {
              if (e === 45880) return t.CLUSTER_BREAK.LV;
            } else if (45881 <= e && e <= 45907) return t.CLUSTER_BREAK.LVT;
          } else if (e < 46189) {
            if (e < 46048) {
              if (e < 45965) {
                if (e < 45936) {
                  if (e < 45909) {
                    if (e === 45908) return t.CLUSTER_BREAK.LV;
                  } else if (45909 <= e && e <= 45935)
                    return t.CLUSTER_BREAK.LVT;
                } else if (e < 45937) {
                  if (e === 45936) return t.CLUSTER_BREAK.LV;
                } else if (e < 45964) {
                  if (45937 <= e && e <= 45963) return t.CLUSTER_BREAK.LVT;
                } else if (e === 45964) return t.CLUSTER_BREAK.LV;
              } else if (e < 45993) {
                if (e < 45992) {
                  if (45965 <= e && e <= 45991) return t.CLUSTER_BREAK.LVT;
                } else if (e === 45992) return t.CLUSTER_BREAK.LV;
              } else if (e < 46020) {
                if (45993 <= e && e <= 46019) return t.CLUSTER_BREAK.LVT;
              } else if (e < 46021) {
                if (e === 46020) return t.CLUSTER_BREAK.LV;
              } else if (46021 <= e && e <= 46047) return t.CLUSTER_BREAK.LVT;
            } else if (e < 46105) {
              if (e < 46076) {
                if (e < 46049) {
                  if (e === 46048) return t.CLUSTER_BREAK.LV;
                } else if (46049 <= e && e <= 46075) return t.CLUSTER_BREAK.LVT;
              } else if (e < 46077) {
                if (e === 46076) return t.CLUSTER_BREAK.LV;
              } else if (e < 46104) {
                if (46077 <= e && e <= 46103) return t.CLUSTER_BREAK.LVT;
              } else if (e === 46104) return t.CLUSTER_BREAK.LV;
            } else if (e < 46160) {
              if (e < 46132) {
                if (46105 <= e && e <= 46131) return t.CLUSTER_BREAK.LVT;
              } else if (e < 46133) {
                if (e === 46132) return t.CLUSTER_BREAK.LV;
              } else if (46133 <= e && e <= 46159) return t.CLUSTER_BREAK.LVT;
            } else if (e < 46161) {
              if (e === 46160) return t.CLUSTER_BREAK.LV;
            } else if (e < 46188) {
              if (46161 <= e && e <= 46187) return t.CLUSTER_BREAK.LVT;
            } else if (e === 46188) return t.CLUSTER_BREAK.LV;
          } else if (e < 46356) {
            if (e < 46272) {
              if (e < 46217) {
                if (e < 46216) {
                  if (46189 <= e && e <= 46215) return t.CLUSTER_BREAK.LVT;
                } else if (e === 46216) return t.CLUSTER_BREAK.LV;
              } else if (e < 46244) {
                if (46217 <= e && e <= 46243) return t.CLUSTER_BREAK.LVT;
              } else if (e < 46245) {
                if (e === 46244) return t.CLUSTER_BREAK.LV;
              } else if (46245 <= e && e <= 46271) return t.CLUSTER_BREAK.LVT;
            } else if (e < 46301) {
              if (e < 46273) {
                if (e === 46272) return t.CLUSTER_BREAK.LV;
              } else if (e < 46300) {
                if (46273 <= e && e <= 46299) return t.CLUSTER_BREAK.LVT;
              } else if (e === 46300) return t.CLUSTER_BREAK.LV;
            } else if (e < 46328) {
              if (46301 <= e && e <= 46327) return t.CLUSTER_BREAK.LVT;
            } else if (e < 46329) {
              if (e === 46328) return t.CLUSTER_BREAK.LV;
            } else if (46329 <= e && e <= 46355) return t.CLUSTER_BREAK.LVT;
          } else if (e < 46413) {
            if (e < 46384) {
              if (e < 46357) {
                if (e === 46356) return t.CLUSTER_BREAK.LV;
              } else if (46357 <= e && e <= 46383) return t.CLUSTER_BREAK.LVT;
            } else if (e < 46385) {
              if (e === 46384) return t.CLUSTER_BREAK.LV;
            } else if (e < 46412) {
              if (46385 <= e && e <= 46411) return t.CLUSTER_BREAK.LVT;
            } else if (e === 46412) return t.CLUSTER_BREAK.LV;
          } else if (e < 46468) {
            if (e < 46440) {
              if (46413 <= e && e <= 46439) return t.CLUSTER_BREAK.LVT;
            } else if (e < 46441) {
              if (e === 46440) return t.CLUSTER_BREAK.LV;
            } else if (46441 <= e && e <= 46467) return t.CLUSTER_BREAK.LVT;
          } else if (e < 46469) {
            if (e === 46468) return t.CLUSTER_BREAK.LV;
          } else if (e < 46496) {
            if (46469 <= e && e <= 46495) return t.CLUSTER_BREAK.LVT;
          } else if (e === 46496) return t.CLUSTER_BREAK.LV;
        } else if (e < 47701) {
          if (e < 47112) {
            if (e < 46804) {
              if (e < 46637) {
                if (e < 46580) {
                  if (e < 46525) {
                    if (e < 46524) {
                      if (46497 <= e && e <= 46523) return t.CLUSTER_BREAK.LVT;
                    } else if (e === 46524) return t.CLUSTER_BREAK.LV;
                  } else if (e < 46552) {
                    if (46525 <= e && e <= 46551) return t.CLUSTER_BREAK.LVT;
                  } else if (e < 46553) {
                    if (e === 46552) return t.CLUSTER_BREAK.LV;
                  } else if (46553 <= e && e <= 46579)
                    return t.CLUSTER_BREAK.LVT;
                } else if (e < 46608) {
                  if (e < 46581) {
                    if (e === 46580) return t.CLUSTER_BREAK.LV;
                  } else if (46581 <= e && e <= 46607)
                    return t.CLUSTER_BREAK.LVT;
                } else if (e < 46609) {
                  if (e === 46608) return t.CLUSTER_BREAK.LV;
                } else if (e < 46636) {
                  if (46609 <= e && e <= 46635) return t.CLUSTER_BREAK.LVT;
                } else if (e === 46636) return t.CLUSTER_BREAK.LV;
              } else if (e < 46720) {
                if (e < 46665) {
                  if (e < 46664) {
                    if (46637 <= e && e <= 46663) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 46664) return t.CLUSTER_BREAK.LV;
                } else if (e < 46692) {
                  if (46665 <= e && e <= 46691) return t.CLUSTER_BREAK.LVT;
                } else if (e < 46693) {
                  if (e === 46692) return t.CLUSTER_BREAK.LV;
                } else if (46693 <= e && e <= 46719) return t.CLUSTER_BREAK.LVT;
              } else if (e < 46749) {
                if (e < 46721) {
                  if (e === 46720) return t.CLUSTER_BREAK.LV;
                } else if (e < 46748) {
                  if (46721 <= e && e <= 46747) return t.CLUSTER_BREAK.LVT;
                } else if (e === 46748) return t.CLUSTER_BREAK.LV;
              } else if (e < 46776) {
                if (46749 <= e && e <= 46775) return t.CLUSTER_BREAK.LVT;
              } else if (e < 46777) {
                if (e === 46776) return t.CLUSTER_BREAK.LV;
              } else if (46777 <= e && e <= 46803) return t.CLUSTER_BREAK.LVT;
            } else if (e < 46945) {
              if (e < 46861) {
                if (e < 46832) {
                  if (e < 46805) {
                    if (e === 46804) return t.CLUSTER_BREAK.LV;
                  } else if (46805 <= e && e <= 46831)
                    return t.CLUSTER_BREAK.LVT;
                } else if (e < 46833) {
                  if (e === 46832) return t.CLUSTER_BREAK.LV;
                } else if (e < 46860) {
                  if (46833 <= e && e <= 46859) return t.CLUSTER_BREAK.LVT;
                } else if (e === 46860) return t.CLUSTER_BREAK.LV;
              } else if (e < 46916) {
                if (e < 46888) {
                  if (46861 <= e && e <= 46887) return t.CLUSTER_BREAK.LVT;
                } else if (e < 46889) {
                  if (e === 46888) return t.CLUSTER_BREAK.LV;
                } else if (46889 <= e && e <= 46915) return t.CLUSTER_BREAK.LVT;
              } else if (e < 46917) {
                if (e === 46916) return t.CLUSTER_BREAK.LV;
              } else if (e < 46944) {
                if (46917 <= e && e <= 46943) return t.CLUSTER_BREAK.LVT;
              } else if (e === 46944) return t.CLUSTER_BREAK.LV;
            } else if (e < 47028) {
              if (e < 46973) {
                if (e < 46972) {
                  if (46945 <= e && e <= 46971) return t.CLUSTER_BREAK.LVT;
                } else if (e === 46972) return t.CLUSTER_BREAK.LV;
              } else if (e < 47e3) {
                if (46973 <= e && e <= 46999) return t.CLUSTER_BREAK.LVT;
              } else if (e < 47001) {
                if (e === 47e3) return t.CLUSTER_BREAK.LV;
              } else if (47001 <= e && e <= 47027) return t.CLUSTER_BREAK.LVT;
            } else if (e < 47057) {
              if (e < 47029) {
                if (e === 47028) return t.CLUSTER_BREAK.LV;
              } else if (e < 47056) {
                if (47029 <= e && e <= 47055) return t.CLUSTER_BREAK.LVT;
              } else if (e === 47056) return t.CLUSTER_BREAK.LV;
            } else if (e < 47084) {
              if (47057 <= e && e <= 47083) return t.CLUSTER_BREAK.LVT;
            } else if (e < 47085) {
              if (e === 47084) return t.CLUSTER_BREAK.LV;
            } else if (47085 <= e && e <= 47111) return t.CLUSTER_BREAK.LVT;
          } else if (e < 47393) {
            if (e < 47252) {
              if (e < 47169) {
                if (e < 47140) {
                  if (e < 47113) {
                    if (e === 47112) return t.CLUSTER_BREAK.LV;
                  } else if (47113 <= e && e <= 47139)
                    return t.CLUSTER_BREAK.LVT;
                } else if (e < 47141) {
                  if (e === 47140) return t.CLUSTER_BREAK.LV;
                } else if (e < 47168) {
                  if (47141 <= e && e <= 47167) return t.CLUSTER_BREAK.LVT;
                } else if (e === 47168) return t.CLUSTER_BREAK.LV;
              } else if (e < 47197) {
                if (e < 47196) {
                  if (47169 <= e && e <= 47195) return t.CLUSTER_BREAK.LVT;
                } else if (e === 47196) return t.CLUSTER_BREAK.LV;
              } else if (e < 47224) {
                if (47197 <= e && e <= 47223) return t.CLUSTER_BREAK.LVT;
              } else if (e < 47225) {
                if (e === 47224) return t.CLUSTER_BREAK.LV;
              } else if (47225 <= e && e <= 47251) return t.CLUSTER_BREAK.LVT;
            } else if (e < 47309) {
              if (e < 47280) {
                if (e < 47253) {
                  if (e === 47252) return t.CLUSTER_BREAK.LV;
                } else if (47253 <= e && e <= 47279) return t.CLUSTER_BREAK.LVT;
              } else if (e < 47281) {
                if (e === 47280) return t.CLUSTER_BREAK.LV;
              } else if (e < 47308) {
                if (47281 <= e && e <= 47307) return t.CLUSTER_BREAK.LVT;
              } else if (e === 47308) return t.CLUSTER_BREAK.LV;
            } else if (e < 47364) {
              if (e < 47336) {
                if (47309 <= e && e <= 47335) return t.CLUSTER_BREAK.LVT;
              } else if (e < 47337) {
                if (e === 47336) return t.CLUSTER_BREAK.LV;
              } else if (47337 <= e && e <= 47363) return t.CLUSTER_BREAK.LVT;
            } else if (e < 47365) {
              if (e === 47364) return t.CLUSTER_BREAK.LV;
            } else if (e < 47392) {
              if (47365 <= e && e <= 47391) return t.CLUSTER_BREAK.LVT;
            } else if (e === 47392) return t.CLUSTER_BREAK.LV;
          } else if (e < 47560) {
            if (e < 47476) {
              if (e < 47421) {
                if (e < 47420) {
                  if (47393 <= e && e <= 47419) return t.CLUSTER_BREAK.LVT;
                } else if (e === 47420) return t.CLUSTER_BREAK.LV;
              } else if (e < 47448) {
                if (47421 <= e && e <= 47447) return t.CLUSTER_BREAK.LVT;
              } else if (e < 47449) {
                if (e === 47448) return t.CLUSTER_BREAK.LV;
              } else if (47449 <= e && e <= 47475) return t.CLUSTER_BREAK.LVT;
            } else if (e < 47505) {
              if (e < 47477) {
                if (e === 47476) return t.CLUSTER_BREAK.LV;
              } else if (e < 47504) {
                if (47477 <= e && e <= 47503) return t.CLUSTER_BREAK.LVT;
              } else if (e === 47504) return t.CLUSTER_BREAK.LV;
            } else if (e < 47532) {
              if (47505 <= e && e <= 47531) return t.CLUSTER_BREAK.LVT;
            } else if (e < 47533) {
              if (e === 47532) return t.CLUSTER_BREAK.LV;
            } else if (47533 <= e && e <= 47559) return t.CLUSTER_BREAK.LVT;
          } else if (e < 47617) {
            if (e < 47588) {
              if (e < 47561) {
                if (e === 47560) return t.CLUSTER_BREAK.LV;
              } else if (47561 <= e && e <= 47587) return t.CLUSTER_BREAK.LVT;
            } else if (e < 47589) {
              if (e === 47588) return t.CLUSTER_BREAK.LV;
            } else if (e < 47616) {
              if (47589 <= e && e <= 47615) return t.CLUSTER_BREAK.LVT;
            } else if (e === 47616) return t.CLUSTER_BREAK.LV;
          } else if (e < 47672) {
            if (e < 47644) {
              if (47617 <= e && e <= 47643) return t.CLUSTER_BREAK.LVT;
            } else if (e < 47645) {
              if (e === 47644) return t.CLUSTER_BREAK.LV;
            } else if (47645 <= e && e <= 47671) return t.CLUSTER_BREAK.LVT;
          } else if (e < 47673) {
            if (e === 47672) return t.CLUSTER_BREAK.LV;
          } else if (e < 47700) {
            if (47673 <= e && e <= 47699) return t.CLUSTER_BREAK.LVT;
          } else if (e === 47700) return t.CLUSTER_BREAK.LV;
        } else if (e < 48316) {
          if (e < 48008) {
            if (e < 47841) {
              if (e < 47784) {
                if (e < 47729) {
                  if (e < 47728) {
                    if (47701 <= e && e <= 47727) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 47728) return t.CLUSTER_BREAK.LV;
                } else if (e < 47756) {
                  if (47729 <= e && e <= 47755) return t.CLUSTER_BREAK.LVT;
                } else if (e < 47757) {
                  if (e === 47756) return t.CLUSTER_BREAK.LV;
                } else if (47757 <= e && e <= 47783) return t.CLUSTER_BREAK.LVT;
              } else if (e < 47812) {
                if (e < 47785) {
                  if (e === 47784) return t.CLUSTER_BREAK.LV;
                } else if (47785 <= e && e <= 47811) return t.CLUSTER_BREAK.LVT;
              } else if (e < 47813) {
                if (e === 47812) return t.CLUSTER_BREAK.LV;
              } else if (e < 47840) {
                if (47813 <= e && e <= 47839) return t.CLUSTER_BREAK.LVT;
              } else if (e === 47840) return t.CLUSTER_BREAK.LV;
            } else if (e < 47924) {
              if (e < 47869) {
                if (e < 47868) {
                  if (47841 <= e && e <= 47867) return t.CLUSTER_BREAK.LVT;
                } else if (e === 47868) return t.CLUSTER_BREAK.LV;
              } else if (e < 47896) {
                if (47869 <= e && e <= 47895) return t.CLUSTER_BREAK.LVT;
              } else if (e < 47897) {
                if (e === 47896) return t.CLUSTER_BREAK.LV;
              } else if (47897 <= e && e <= 47923) return t.CLUSTER_BREAK.LVT;
            } else if (e < 47953) {
              if (e < 47925) {
                if (e === 47924) return t.CLUSTER_BREAK.LV;
              } else if (e < 47952) {
                if (47925 <= e && e <= 47951) return t.CLUSTER_BREAK.LVT;
              } else if (e === 47952) return t.CLUSTER_BREAK.LV;
            } else if (e < 47980) {
              if (47953 <= e && e <= 47979) return t.CLUSTER_BREAK.LVT;
            } else if (e < 47981) {
              if (e === 47980) return t.CLUSTER_BREAK.LV;
            } else if (47981 <= e && e <= 48007) return t.CLUSTER_BREAK.LVT;
          } else if (e < 48149) {
            if (e < 48065) {
              if (e < 48036) {
                if (e < 48009) {
                  if (e === 48008) return t.CLUSTER_BREAK.LV;
                } else if (48009 <= e && e <= 48035) return t.CLUSTER_BREAK.LVT;
              } else if (e < 48037) {
                if (e === 48036) return t.CLUSTER_BREAK.LV;
              } else if (e < 48064) {
                if (48037 <= e && e <= 48063) return t.CLUSTER_BREAK.LVT;
              } else if (e === 48064) return t.CLUSTER_BREAK.LV;
            } else if (e < 48120) {
              if (e < 48092) {
                if (48065 <= e && e <= 48091) return t.CLUSTER_BREAK.LVT;
              } else if (e < 48093) {
                if (e === 48092) return t.CLUSTER_BREAK.LV;
              } else if (48093 <= e && e <= 48119) return t.CLUSTER_BREAK.LVT;
            } else if (e < 48121) {
              if (e === 48120) return t.CLUSTER_BREAK.LV;
            } else if (e < 48148) {
              if (48121 <= e && e <= 48147) return t.CLUSTER_BREAK.LVT;
            } else if (e === 48148) return t.CLUSTER_BREAK.LV;
          } else if (e < 48232) {
            if (e < 48177) {
              if (e < 48176) {
                if (48149 <= e && e <= 48175) return t.CLUSTER_BREAK.LVT;
              } else if (e === 48176) return t.CLUSTER_BREAK.LV;
            } else if (e < 48204) {
              if (48177 <= e && e <= 48203) return t.CLUSTER_BREAK.LVT;
            } else if (e < 48205) {
              if (e === 48204) return t.CLUSTER_BREAK.LV;
            } else if (48205 <= e && e <= 48231) return t.CLUSTER_BREAK.LVT;
          } else if (e < 48261) {
            if (e < 48233) {
              if (e === 48232) return t.CLUSTER_BREAK.LV;
            } else if (e < 48260) {
              if (48233 <= e && e <= 48259) return t.CLUSTER_BREAK.LVT;
            } else if (e === 48260) return t.CLUSTER_BREAK.LV;
          } else if (e < 48288) {
            if (48261 <= e && e <= 48287) return t.CLUSTER_BREAK.LVT;
          } else if (e < 48289) {
            if (e === 48288) return t.CLUSTER_BREAK.LV;
          } else if (48289 <= e && e <= 48315) return t.CLUSTER_BREAK.LVT;
        } else if (e < 48597) {
          if (e < 48456) {
            if (e < 48373) {
              if (e < 48344) {
                if (e < 48317) {
                  if (e === 48316) return t.CLUSTER_BREAK.LV;
                } else if (48317 <= e && e <= 48343) return t.CLUSTER_BREAK.LVT;
              } else if (e < 48345) {
                if (e === 48344) return t.CLUSTER_BREAK.LV;
              } else if (e < 48372) {
                if (48345 <= e && e <= 48371) return t.CLUSTER_BREAK.LVT;
              } else if (e === 48372) return t.CLUSTER_BREAK.LV;
            } else if (e < 48401) {
              if (e < 48400) {
                if (48373 <= e && e <= 48399) return t.CLUSTER_BREAK.LVT;
              } else if (e === 48400) return t.CLUSTER_BREAK.LV;
            } else if (e < 48428) {
              if (48401 <= e && e <= 48427) return t.CLUSTER_BREAK.LVT;
            } else if (e < 48429) {
              if (e === 48428) return t.CLUSTER_BREAK.LV;
            } else if (48429 <= e && e <= 48455) return t.CLUSTER_BREAK.LVT;
          } else if (e < 48513) {
            if (e < 48484) {
              if (e < 48457) {
                if (e === 48456) return t.CLUSTER_BREAK.LV;
              } else if (48457 <= e && e <= 48483) return t.CLUSTER_BREAK.LVT;
            } else if (e < 48485) {
              if (e === 48484) return t.CLUSTER_BREAK.LV;
            } else if (e < 48512) {
              if (48485 <= e && e <= 48511) return t.CLUSTER_BREAK.LVT;
            } else if (e === 48512) return t.CLUSTER_BREAK.LV;
          } else if (e < 48568) {
            if (e < 48540) {
              if (48513 <= e && e <= 48539) return t.CLUSTER_BREAK.LVT;
            } else if (e < 48541) {
              if (e === 48540) return t.CLUSTER_BREAK.LV;
            } else if (48541 <= e && e <= 48567) return t.CLUSTER_BREAK.LVT;
          } else if (e < 48569) {
            if (e === 48568) return t.CLUSTER_BREAK.LV;
          } else if (e < 48596) {
            if (48569 <= e && e <= 48595) return t.CLUSTER_BREAK.LVT;
          } else if (e === 48596) return t.CLUSTER_BREAK.LV;
        } else if (e < 48764) {
          if (e < 48680) {
            if (e < 48625) {
              if (e < 48624) {
                if (48597 <= e && e <= 48623) return t.CLUSTER_BREAK.LVT;
              } else if (e === 48624) return t.CLUSTER_BREAK.LV;
            } else if (e < 48652) {
              if (48625 <= e && e <= 48651) return t.CLUSTER_BREAK.LVT;
            } else if (e < 48653) {
              if (e === 48652) return t.CLUSTER_BREAK.LV;
            } else if (48653 <= e && e <= 48679) return t.CLUSTER_BREAK.LVT;
          } else if (e < 48709) {
            if (e < 48681) {
              if (e === 48680) return t.CLUSTER_BREAK.LV;
            } else if (e < 48708) {
              if (48681 <= e && e <= 48707) return t.CLUSTER_BREAK.LVT;
            } else if (e === 48708) return t.CLUSTER_BREAK.LV;
          } else if (e < 48736) {
            if (48709 <= e && e <= 48735) return t.CLUSTER_BREAK.LVT;
          } else if (e < 48737) {
            if (e === 48736) return t.CLUSTER_BREAK.LV;
          } else if (48737 <= e && e <= 48763) return t.CLUSTER_BREAK.LVT;
        } else if (e < 48821) {
          if (e < 48792) {
            if (e < 48765) {
              if (e === 48764) return t.CLUSTER_BREAK.LV;
            } else if (48765 <= e && e <= 48791) return t.CLUSTER_BREAK.LVT;
          } else if (e < 48793) {
            if (e === 48792) return t.CLUSTER_BREAK.LV;
          } else if (e < 48820) {
            if (48793 <= e && e <= 48819) return t.CLUSTER_BREAK.LVT;
          } else if (e === 48820) return t.CLUSTER_BREAK.LV;
        } else if (e < 48876) {
          if (e < 48848) {
            if (48821 <= e && e <= 48847) return t.CLUSTER_BREAK.LVT;
          } else if (e < 48849) {
            if (e === 48848) return t.CLUSTER_BREAK.LV;
          } else if (48849 <= e && e <= 48875) return t.CLUSTER_BREAK.LVT;
        } else if (e < 48877) {
          if (e === 48876) return t.CLUSTER_BREAK.LV;
        } else if (e < 48904) {
          if (48877 <= e && e <= 48903) return t.CLUSTER_BREAK.LVT;
        } else if (e === 48904) return t.CLUSTER_BREAK.LV;
      } else if (e < 53720) {
        if (e < 51312) {
          if (e < 50108) {
            if (e < 49493) {
              if (e < 49212) {
                if (e < 49045) {
                  if (e < 48988) {
                    if (e < 48933) {
                      if (e < 48932) {
                        if (48905 <= e && e <= 48931)
                          return t.CLUSTER_BREAK.LVT;
                      } else if (e === 48932) return t.CLUSTER_BREAK.LV;
                    } else if (e < 48960) {
                      if (48933 <= e && e <= 48959) return t.CLUSTER_BREAK.LVT;
                    } else if (e < 48961) {
                      if (e === 48960) return t.CLUSTER_BREAK.LV;
                    } else if (48961 <= e && e <= 48987)
                      return t.CLUSTER_BREAK.LVT;
                  } else if (e < 49016) {
                    if (e < 48989) {
                      if (e === 48988) return t.CLUSTER_BREAK.LV;
                    } else if (48989 <= e && e <= 49015)
                      return t.CLUSTER_BREAK.LVT;
                  } else if (e < 49017) {
                    if (e === 49016) return t.CLUSTER_BREAK.LV;
                  } else if (e < 49044) {
                    if (49017 <= e && e <= 49043) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 49044) return t.CLUSTER_BREAK.LV;
                } else if (e < 49128) {
                  if (e < 49073) {
                    if (e < 49072) {
                      if (49045 <= e && e <= 49071) return t.CLUSTER_BREAK.LVT;
                    } else if (e === 49072) return t.CLUSTER_BREAK.LV;
                  } else if (e < 49100) {
                    if (49073 <= e && e <= 49099) return t.CLUSTER_BREAK.LVT;
                  } else if (e < 49101) {
                    if (e === 49100) return t.CLUSTER_BREAK.LV;
                  } else if (49101 <= e && e <= 49127)
                    return t.CLUSTER_BREAK.LVT;
                } else if (e < 49157) {
                  if (e < 49129) {
                    if (e === 49128) return t.CLUSTER_BREAK.LV;
                  } else if (e < 49156) {
                    if (49129 <= e && e <= 49155) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 49156) return t.CLUSTER_BREAK.LV;
                } else if (e < 49184) {
                  if (49157 <= e && e <= 49183) return t.CLUSTER_BREAK.LVT;
                } else if (e < 49185) {
                  if (e === 49184) return t.CLUSTER_BREAK.LV;
                } else if (49185 <= e && e <= 49211) return t.CLUSTER_BREAK.LVT;
              } else if (e < 49352) {
                if (e < 49269) {
                  if (e < 49240) {
                    if (e < 49213) {
                      if (e === 49212) return t.CLUSTER_BREAK.LV;
                    } else if (49213 <= e && e <= 49239)
                      return t.CLUSTER_BREAK.LVT;
                  } else if (e < 49241) {
                    if (e === 49240) return t.CLUSTER_BREAK.LV;
                  } else if (e < 49268) {
                    if (49241 <= e && e <= 49267) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 49268) return t.CLUSTER_BREAK.LV;
                } else if (e < 49297) {
                  if (e < 49296) {
                    if (49269 <= e && e <= 49295) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 49296) return t.CLUSTER_BREAK.LV;
                } else if (e < 49324) {
                  if (49297 <= e && e <= 49323) return t.CLUSTER_BREAK.LVT;
                } else if (e < 49325) {
                  if (e === 49324) return t.CLUSTER_BREAK.LV;
                } else if (49325 <= e && e <= 49351) return t.CLUSTER_BREAK.LVT;
              } else if (e < 49409) {
                if (e < 49380) {
                  if (e < 49353) {
                    if (e === 49352) return t.CLUSTER_BREAK.LV;
                  } else if (49353 <= e && e <= 49379)
                    return t.CLUSTER_BREAK.LVT;
                } else if (e < 49381) {
                  if (e === 49380) return t.CLUSTER_BREAK.LV;
                } else if (e < 49408) {
                  if (49381 <= e && e <= 49407) return t.CLUSTER_BREAK.LVT;
                } else if (e === 49408) return t.CLUSTER_BREAK.LV;
              } else if (e < 49464) {
                if (e < 49436) {
                  if (49409 <= e && e <= 49435) return t.CLUSTER_BREAK.LVT;
                } else if (e < 49437) {
                  if (e === 49436) return t.CLUSTER_BREAK.LV;
                } else if (49437 <= e && e <= 49463) return t.CLUSTER_BREAK.LVT;
              } else if (e < 49465) {
                if (e === 49464) return t.CLUSTER_BREAK.LV;
              } else if (e < 49492) {
                if (49465 <= e && e <= 49491) return t.CLUSTER_BREAK.LVT;
              } else if (e === 49492) return t.CLUSTER_BREAK.LV;
            } else if (e < 49800) {
              if (e < 49633) {
                if (e < 49576) {
                  if (e < 49521) {
                    if (e < 49520) {
                      if (49493 <= e && e <= 49519) return t.CLUSTER_BREAK.LVT;
                    } else if (e === 49520) return t.CLUSTER_BREAK.LV;
                  } else if (e < 49548) {
                    if (49521 <= e && e <= 49547) return t.CLUSTER_BREAK.LVT;
                  } else if (e < 49549) {
                    if (e === 49548) return t.CLUSTER_BREAK.LV;
                  } else if (49549 <= e && e <= 49575)
                    return t.CLUSTER_BREAK.LVT;
                } else if (e < 49604) {
                  if (e < 49577) {
                    if (e === 49576) return t.CLUSTER_BREAK.LV;
                  } else if (49577 <= e && e <= 49603)
                    return t.CLUSTER_BREAK.LVT;
                } else if (e < 49605) {
                  if (e === 49604) return t.CLUSTER_BREAK.LV;
                } else if (e < 49632) {
                  if (49605 <= e && e <= 49631) return t.CLUSTER_BREAK.LVT;
                } else if (e === 49632) return t.CLUSTER_BREAK.LV;
              } else if (e < 49716) {
                if (e < 49661) {
                  if (e < 49660) {
                    if (49633 <= e && e <= 49659) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 49660) return t.CLUSTER_BREAK.LV;
                } else if (e < 49688) {
                  if (49661 <= e && e <= 49687) return t.CLUSTER_BREAK.LVT;
                } else if (e < 49689) {
                  if (e === 49688) return t.CLUSTER_BREAK.LV;
                } else if (49689 <= e && e <= 49715) return t.CLUSTER_BREAK.LVT;
              } else if (e < 49745) {
                if (e < 49717) {
                  if (e === 49716) return t.CLUSTER_BREAK.LV;
                } else if (e < 49744) {
                  if (49717 <= e && e <= 49743) return t.CLUSTER_BREAK.LVT;
                } else if (e === 49744) return t.CLUSTER_BREAK.LV;
              } else if (e < 49772) {
                if (49745 <= e && e <= 49771) return t.CLUSTER_BREAK.LVT;
              } else if (e < 49773) {
                if (e === 49772) return t.CLUSTER_BREAK.LV;
              } else if (49773 <= e && e <= 49799) return t.CLUSTER_BREAK.LVT;
            } else if (e < 49941) {
              if (e < 49857) {
                if (e < 49828) {
                  if (e < 49801) {
                    if (e === 49800) return t.CLUSTER_BREAK.LV;
                  } else if (49801 <= e && e <= 49827)
                    return t.CLUSTER_BREAK.LVT;
                } else if (e < 49829) {
                  if (e === 49828) return t.CLUSTER_BREAK.LV;
                } else if (e < 49856) {
                  if (49829 <= e && e <= 49855) return t.CLUSTER_BREAK.LVT;
                } else if (e === 49856) return t.CLUSTER_BREAK.LV;
              } else if (e < 49912) {
                if (e < 49884) {
                  if (49857 <= e && e <= 49883) return t.CLUSTER_BREAK.LVT;
                } else if (e < 49885) {
                  if (e === 49884) return t.CLUSTER_BREAK.LV;
                } else if (49885 <= e && e <= 49911) return t.CLUSTER_BREAK.LVT;
              } else if (e < 49913) {
                if (e === 49912) return t.CLUSTER_BREAK.LV;
              } else if (e < 49940) {
                if (49913 <= e && e <= 49939) return t.CLUSTER_BREAK.LVT;
              } else if (e === 49940) return t.CLUSTER_BREAK.LV;
            } else if (e < 50024) {
              if (e < 49969) {
                if (e < 49968) {
                  if (49941 <= e && e <= 49967) return t.CLUSTER_BREAK.LVT;
                } else if (e === 49968) return t.CLUSTER_BREAK.LV;
              } else if (e < 49996) {
                if (49969 <= e && e <= 49995) return t.CLUSTER_BREAK.LVT;
              } else if (e < 49997) {
                if (e === 49996) return t.CLUSTER_BREAK.LV;
              } else if (49997 <= e && e <= 50023) return t.CLUSTER_BREAK.LVT;
            } else if (e < 50053) {
              if (e < 50025) {
                if (e === 50024) return t.CLUSTER_BREAK.LV;
              } else if (e < 50052) {
                if (50025 <= e && e <= 50051) return t.CLUSTER_BREAK.LVT;
              } else if (e === 50052) return t.CLUSTER_BREAK.LV;
            } else if (e < 50080) {
              if (50053 <= e && e <= 50079) return t.CLUSTER_BREAK.LVT;
            } else if (e < 50081) {
              if (e === 50080) return t.CLUSTER_BREAK.LV;
            } else if (50081 <= e && e <= 50107) return t.CLUSTER_BREAK.LVT;
          } else if (e < 50697) {
            if (e < 50389) {
              if (e < 50248) {
                if (e < 50165) {
                  if (e < 50136) {
                    if (e < 50109) {
                      if (e === 50108) return t.CLUSTER_BREAK.LV;
                    } else if (50109 <= e && e <= 50135)
                      return t.CLUSTER_BREAK.LVT;
                  } else if (e < 50137) {
                    if (e === 50136) return t.CLUSTER_BREAK.LV;
                  } else if (e < 50164) {
                    if (50137 <= e && e <= 50163) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 50164) return t.CLUSTER_BREAK.LV;
                } else if (e < 50193) {
                  if (e < 50192) {
                    if (50165 <= e && e <= 50191) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 50192) return t.CLUSTER_BREAK.LV;
                } else if (e < 50220) {
                  if (50193 <= e && e <= 50219) return t.CLUSTER_BREAK.LVT;
                } else if (e < 50221) {
                  if (e === 50220) return t.CLUSTER_BREAK.LV;
                } else if (50221 <= e && e <= 50247) return t.CLUSTER_BREAK.LVT;
              } else if (e < 50305) {
                if (e < 50276) {
                  if (e < 50249) {
                    if (e === 50248) return t.CLUSTER_BREAK.LV;
                  } else if (50249 <= e && e <= 50275)
                    return t.CLUSTER_BREAK.LVT;
                } else if (e < 50277) {
                  if (e === 50276) return t.CLUSTER_BREAK.LV;
                } else if (e < 50304) {
                  if (50277 <= e && e <= 50303) return t.CLUSTER_BREAK.LVT;
                } else if (e === 50304) return t.CLUSTER_BREAK.LV;
              } else if (e < 50360) {
                if (e < 50332) {
                  if (50305 <= e && e <= 50331) return t.CLUSTER_BREAK.LVT;
                } else if (e < 50333) {
                  if (e === 50332) return t.CLUSTER_BREAK.LV;
                } else if (50333 <= e && e <= 50359) return t.CLUSTER_BREAK.LVT;
              } else if (e < 50361) {
                if (e === 50360) return t.CLUSTER_BREAK.LV;
              } else if (e < 50388) {
                if (50361 <= e && e <= 50387) return t.CLUSTER_BREAK.LVT;
              } else if (e === 50388) return t.CLUSTER_BREAK.LV;
            } else if (e < 50556) {
              if (e < 50472) {
                if (e < 50417) {
                  if (e < 50416) {
                    if (50389 <= e && e <= 50415) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 50416) return t.CLUSTER_BREAK.LV;
                } else if (e < 50444) {
                  if (50417 <= e && e <= 50443) return t.CLUSTER_BREAK.LVT;
                } else if (e < 50445) {
                  if (e === 50444) return t.CLUSTER_BREAK.LV;
                } else if (50445 <= e && e <= 50471) return t.CLUSTER_BREAK.LVT;
              } else if (e < 50501) {
                if (e < 50473) {
                  if (e === 50472) return t.CLUSTER_BREAK.LV;
                } else if (e < 50500) {
                  if (50473 <= e && e <= 50499) return t.CLUSTER_BREAK.LVT;
                } else if (e === 50500) return t.CLUSTER_BREAK.LV;
              } else if (e < 50528) {
                if (50501 <= e && e <= 50527) return t.CLUSTER_BREAK.LVT;
              } else if (e < 50529) {
                if (e === 50528) return t.CLUSTER_BREAK.LV;
              } else if (50529 <= e && e <= 50555) return t.CLUSTER_BREAK.LVT;
            } else if (e < 50613) {
              if (e < 50584) {
                if (e < 50557) {
                  if (e === 50556) return t.CLUSTER_BREAK.LV;
                } else if (50557 <= e && e <= 50583) return t.CLUSTER_BREAK.LVT;
              } else if (e < 50585) {
                if (e === 50584) return t.CLUSTER_BREAK.LV;
              } else if (e < 50612) {
                if (50585 <= e && e <= 50611) return t.CLUSTER_BREAK.LVT;
              } else if (e === 50612) return t.CLUSTER_BREAK.LV;
            } else if (e < 50668) {
              if (e < 50640) {
                if (50613 <= e && e <= 50639) return t.CLUSTER_BREAK.LVT;
              } else if (e < 50641) {
                if (e === 50640) return t.CLUSTER_BREAK.LV;
              } else if (50641 <= e && e <= 50667) return t.CLUSTER_BREAK.LVT;
            } else if (e < 50669) {
              if (e === 50668) return t.CLUSTER_BREAK.LV;
            } else if (e < 50696) {
              if (50669 <= e && e <= 50695) return t.CLUSTER_BREAK.LVT;
            } else if (e === 50696) return t.CLUSTER_BREAK.LV;
          } else if (e < 51004) {
            if (e < 50837) {
              if (e < 50780) {
                if (e < 50725) {
                  if (e < 50724) {
                    if (50697 <= e && e <= 50723) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 50724) return t.CLUSTER_BREAK.LV;
                } else if (e < 50752) {
                  if (50725 <= e && e <= 50751) return t.CLUSTER_BREAK.LVT;
                } else if (e < 50753) {
                  if (e === 50752) return t.CLUSTER_BREAK.LV;
                } else if (50753 <= e && e <= 50779) return t.CLUSTER_BREAK.LVT;
              } else if (e < 50808) {
                if (e < 50781) {
                  if (e === 50780) return t.CLUSTER_BREAK.LV;
                } else if (50781 <= e && e <= 50807) return t.CLUSTER_BREAK.LVT;
              } else if (e < 50809) {
                if (e === 50808) return t.CLUSTER_BREAK.LV;
              } else if (e < 50836) {
                if (50809 <= e && e <= 50835) return t.CLUSTER_BREAK.LVT;
              } else if (e === 50836) return t.CLUSTER_BREAK.LV;
            } else if (e < 50920) {
              if (e < 50865) {
                if (e < 50864) {
                  if (50837 <= e && e <= 50863) return t.CLUSTER_BREAK.LVT;
                } else if (e === 50864) return t.CLUSTER_BREAK.LV;
              } else if (e < 50892) {
                if (50865 <= e && e <= 50891) return t.CLUSTER_BREAK.LVT;
              } else if (e < 50893) {
                if (e === 50892) return t.CLUSTER_BREAK.LV;
              } else if (50893 <= e && e <= 50919) return t.CLUSTER_BREAK.LVT;
            } else if (e < 50949) {
              if (e < 50921) {
                if (e === 50920) return t.CLUSTER_BREAK.LV;
              } else if (e < 50948) {
                if (50921 <= e && e <= 50947) return t.CLUSTER_BREAK.LVT;
              } else if (e === 50948) return t.CLUSTER_BREAK.LV;
            } else if (e < 50976) {
              if (50949 <= e && e <= 50975) return t.CLUSTER_BREAK.LVT;
            } else if (e < 50977) {
              if (e === 50976) return t.CLUSTER_BREAK.LV;
            } else if (50977 <= e && e <= 51003) return t.CLUSTER_BREAK.LVT;
          } else if (e < 51145) {
            if (e < 51061) {
              if (e < 51032) {
                if (e < 51005) {
                  if (e === 51004) return t.CLUSTER_BREAK.LV;
                } else if (51005 <= e && e <= 51031) return t.CLUSTER_BREAK.LVT;
              } else if (e < 51033) {
                if (e === 51032) return t.CLUSTER_BREAK.LV;
              } else if (e < 51060) {
                if (51033 <= e && e <= 51059) return t.CLUSTER_BREAK.LVT;
              } else if (e === 51060) return t.CLUSTER_BREAK.LV;
            } else if (e < 51116) {
              if (e < 51088) {
                if (51061 <= e && e <= 51087) return t.CLUSTER_BREAK.LVT;
              } else if (e < 51089) {
                if (e === 51088) return t.CLUSTER_BREAK.LV;
              } else if (51089 <= e && e <= 51115) return t.CLUSTER_BREAK.LVT;
            } else if (e < 51117) {
              if (e === 51116) return t.CLUSTER_BREAK.LV;
            } else if (e < 51144) {
              if (51117 <= e && e <= 51143) return t.CLUSTER_BREAK.LVT;
            } else if (e === 51144) return t.CLUSTER_BREAK.LV;
          } else if (e < 51228) {
            if (e < 51173) {
              if (e < 51172) {
                if (51145 <= e && e <= 51171) return t.CLUSTER_BREAK.LVT;
              } else if (e === 51172) return t.CLUSTER_BREAK.LV;
            } else if (e < 51200) {
              if (51173 <= e && e <= 51199) return t.CLUSTER_BREAK.LVT;
            } else if (e < 51201) {
              if (e === 51200) return t.CLUSTER_BREAK.LV;
            } else if (51201 <= e && e <= 51227) return t.CLUSTER_BREAK.LVT;
          } else if (e < 51257) {
            if (e < 51229) {
              if (e === 51228) return t.CLUSTER_BREAK.LV;
            } else if (e < 51256) {
              if (51229 <= e && e <= 51255) return t.CLUSTER_BREAK.LVT;
            } else if (e === 51256) return t.CLUSTER_BREAK.LV;
          } else if (e < 51284) {
            if (51257 <= e && e <= 51283) return t.CLUSTER_BREAK.LVT;
          } else if (e < 51285) {
            if (e === 51284) return t.CLUSTER_BREAK.LV;
          } else if (51285 <= e && e <= 51311) return t.CLUSTER_BREAK.LVT;
        } else if (e < 52516) {
          if (e < 51901) {
            if (e < 51593) {
              if (e < 51452) {
                if (e < 51369) {
                  if (e < 51340) {
                    if (e < 51313) {
                      if (e === 51312) return t.CLUSTER_BREAK.LV;
                    } else if (51313 <= e && e <= 51339)
                      return t.CLUSTER_BREAK.LVT;
                  } else if (e < 51341) {
                    if (e === 51340) return t.CLUSTER_BREAK.LV;
                  } else if (e < 51368) {
                    if (51341 <= e && e <= 51367) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 51368) return t.CLUSTER_BREAK.LV;
                } else if (e < 51397) {
                  if (e < 51396) {
                    if (51369 <= e && e <= 51395) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 51396) return t.CLUSTER_BREAK.LV;
                } else if (e < 51424) {
                  if (51397 <= e && e <= 51423) return t.CLUSTER_BREAK.LVT;
                } else if (e < 51425) {
                  if (e === 51424) return t.CLUSTER_BREAK.LV;
                } else if (51425 <= e && e <= 51451) return t.CLUSTER_BREAK.LVT;
              } else if (e < 51509) {
                if (e < 51480) {
                  if (e < 51453) {
                    if (e === 51452) return t.CLUSTER_BREAK.LV;
                  } else if (51453 <= e && e <= 51479)
                    return t.CLUSTER_BREAK.LVT;
                } else if (e < 51481) {
                  if (e === 51480) return t.CLUSTER_BREAK.LV;
                } else if (e < 51508) {
                  if (51481 <= e && e <= 51507) return t.CLUSTER_BREAK.LVT;
                } else if (e === 51508) return t.CLUSTER_BREAK.LV;
              } else if (e < 51564) {
                if (e < 51536) {
                  if (51509 <= e && e <= 51535) return t.CLUSTER_BREAK.LVT;
                } else if (e < 51537) {
                  if (e === 51536) return t.CLUSTER_BREAK.LV;
                } else if (51537 <= e && e <= 51563) return t.CLUSTER_BREAK.LVT;
              } else if (e < 51565) {
                if (e === 51564) return t.CLUSTER_BREAK.LV;
              } else if (e < 51592) {
                if (51565 <= e && e <= 51591) return t.CLUSTER_BREAK.LVT;
              } else if (e === 51592) return t.CLUSTER_BREAK.LV;
            } else if (e < 51760) {
              if (e < 51676) {
                if (e < 51621) {
                  if (e < 51620) {
                    if (51593 <= e && e <= 51619) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 51620) return t.CLUSTER_BREAK.LV;
                } else if (e < 51648) {
                  if (51621 <= e && e <= 51647) return t.CLUSTER_BREAK.LVT;
                } else if (e < 51649) {
                  if (e === 51648) return t.CLUSTER_BREAK.LV;
                } else if (51649 <= e && e <= 51675) return t.CLUSTER_BREAK.LVT;
              } else if (e < 51705) {
                if (e < 51677) {
                  if (e === 51676) return t.CLUSTER_BREAK.LV;
                } else if (e < 51704) {
                  if (51677 <= e && e <= 51703) return t.CLUSTER_BREAK.LVT;
                } else if (e === 51704) return t.CLUSTER_BREAK.LV;
              } else if (e < 51732) {
                if (51705 <= e && e <= 51731) return t.CLUSTER_BREAK.LVT;
              } else if (e < 51733) {
                if (e === 51732) return t.CLUSTER_BREAK.LV;
              } else if (51733 <= e && e <= 51759) return t.CLUSTER_BREAK.LVT;
            } else if (e < 51817) {
              if (e < 51788) {
                if (e < 51761) {
                  if (e === 51760) return t.CLUSTER_BREAK.LV;
                } else if (51761 <= e && e <= 51787) return t.CLUSTER_BREAK.LVT;
              } else if (e < 51789) {
                if (e === 51788) return t.CLUSTER_BREAK.LV;
              } else if (e < 51816) {
                if (51789 <= e && e <= 51815) return t.CLUSTER_BREAK.LVT;
              } else if (e === 51816) return t.CLUSTER_BREAK.LV;
            } else if (e < 51872) {
              if (e < 51844) {
                if (51817 <= e && e <= 51843) return t.CLUSTER_BREAK.LVT;
              } else if (e < 51845) {
                if (e === 51844) return t.CLUSTER_BREAK.LV;
              } else if (51845 <= e && e <= 51871) return t.CLUSTER_BREAK.LVT;
            } else if (e < 51873) {
              if (e === 51872) return t.CLUSTER_BREAK.LV;
            } else if (e < 51900) {
              if (51873 <= e && e <= 51899) return t.CLUSTER_BREAK.LVT;
            } else if (e === 51900) return t.CLUSTER_BREAK.LV;
          } else if (e < 52208) {
            if (e < 52041) {
              if (e < 51984) {
                if (e < 51929) {
                  if (e < 51928) {
                    if (51901 <= e && e <= 51927) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 51928) return t.CLUSTER_BREAK.LV;
                } else if (e < 51956) {
                  if (51929 <= e && e <= 51955) return t.CLUSTER_BREAK.LVT;
                } else if (e < 51957) {
                  if (e === 51956) return t.CLUSTER_BREAK.LV;
                } else if (51957 <= e && e <= 51983) return t.CLUSTER_BREAK.LVT;
              } else if (e < 52012) {
                if (e < 51985) {
                  if (e === 51984) return t.CLUSTER_BREAK.LV;
                } else if (51985 <= e && e <= 52011) return t.CLUSTER_BREAK.LVT;
              } else if (e < 52013) {
                if (e === 52012) return t.CLUSTER_BREAK.LV;
              } else if (e < 52040) {
                if (52013 <= e && e <= 52039) return t.CLUSTER_BREAK.LVT;
              } else if (e === 52040) return t.CLUSTER_BREAK.LV;
            } else if (e < 52124) {
              if (e < 52069) {
                if (e < 52068) {
                  if (52041 <= e && e <= 52067) return t.CLUSTER_BREAK.LVT;
                } else if (e === 52068) return t.CLUSTER_BREAK.LV;
              } else if (e < 52096) {
                if (52069 <= e && e <= 52095) return t.CLUSTER_BREAK.LVT;
              } else if (e < 52097) {
                if (e === 52096) return t.CLUSTER_BREAK.LV;
              } else if (52097 <= e && e <= 52123) return t.CLUSTER_BREAK.LVT;
            } else if (e < 52153) {
              if (e < 52125) {
                if (e === 52124) return t.CLUSTER_BREAK.LV;
              } else if (e < 52152) {
                if (52125 <= e && e <= 52151) return t.CLUSTER_BREAK.LVT;
              } else if (e === 52152) return t.CLUSTER_BREAK.LV;
            } else if (e < 52180) {
              if (52153 <= e && e <= 52179) return t.CLUSTER_BREAK.LVT;
            } else if (e < 52181) {
              if (e === 52180) return t.CLUSTER_BREAK.LV;
            } else if (52181 <= e && e <= 52207) return t.CLUSTER_BREAK.LVT;
          } else if (e < 52349) {
            if (e < 52265) {
              if (e < 52236) {
                if (e < 52209) {
                  if (e === 52208) return t.CLUSTER_BREAK.LV;
                } else if (52209 <= e && e <= 52235) return t.CLUSTER_BREAK.LVT;
              } else if (e < 52237) {
                if (e === 52236) return t.CLUSTER_BREAK.LV;
              } else if (e < 52264) {
                if (52237 <= e && e <= 52263) return t.CLUSTER_BREAK.LVT;
              } else if (e === 52264) return t.CLUSTER_BREAK.LV;
            } else if (e < 52320) {
              if (e < 52292) {
                if (52265 <= e && e <= 52291) return t.CLUSTER_BREAK.LVT;
              } else if (e < 52293) {
                if (e === 52292) return t.CLUSTER_BREAK.LV;
              } else if (52293 <= e && e <= 52319) return t.CLUSTER_BREAK.LVT;
            } else if (e < 52321) {
              if (e === 52320) return t.CLUSTER_BREAK.LV;
            } else if (e < 52348) {
              if (52321 <= e && e <= 52347) return t.CLUSTER_BREAK.LVT;
            } else if (e === 52348) return t.CLUSTER_BREAK.LV;
          } else if (e < 52432) {
            if (e < 52377) {
              if (e < 52376) {
                if (52349 <= e && e <= 52375) return t.CLUSTER_BREAK.LVT;
              } else if (e === 52376) return t.CLUSTER_BREAK.LV;
            } else if (e < 52404) {
              if (52377 <= e && e <= 52403) return t.CLUSTER_BREAK.LVT;
            } else if (e < 52405) {
              if (e === 52404) return t.CLUSTER_BREAK.LV;
            } else if (52405 <= e && e <= 52431) return t.CLUSTER_BREAK.LVT;
          } else if (e < 52461) {
            if (e < 52433) {
              if (e === 52432) return t.CLUSTER_BREAK.LV;
            } else if (e < 52460) {
              if (52433 <= e && e <= 52459) return t.CLUSTER_BREAK.LVT;
            } else if (e === 52460) return t.CLUSTER_BREAK.LV;
          } else if (e < 52488) {
            if (52461 <= e && e <= 52487) return t.CLUSTER_BREAK.LVT;
          } else if (e < 52489) {
            if (e === 52488) return t.CLUSTER_BREAK.LV;
          } else if (52489 <= e && e <= 52515) return t.CLUSTER_BREAK.LVT;
        } else if (e < 53105) {
          if (e < 52797) {
            if (e < 52656) {
              if (e < 52573) {
                if (e < 52544) {
                  if (e < 52517) {
                    if (e === 52516) return t.CLUSTER_BREAK.LV;
                  } else if (52517 <= e && e <= 52543)
                    return t.CLUSTER_BREAK.LVT;
                } else if (e < 52545) {
                  if (e === 52544) return t.CLUSTER_BREAK.LV;
                } else if (e < 52572) {
                  if (52545 <= e && e <= 52571) return t.CLUSTER_BREAK.LVT;
                } else if (e === 52572) return t.CLUSTER_BREAK.LV;
              } else if (e < 52601) {
                if (e < 52600) {
                  if (52573 <= e && e <= 52599) return t.CLUSTER_BREAK.LVT;
                } else if (e === 52600) return t.CLUSTER_BREAK.LV;
              } else if (e < 52628) {
                if (52601 <= e && e <= 52627) return t.CLUSTER_BREAK.LVT;
              } else if (e < 52629) {
                if (e === 52628) return t.CLUSTER_BREAK.LV;
              } else if (52629 <= e && e <= 52655) return t.CLUSTER_BREAK.LVT;
            } else if (e < 52713) {
              if (e < 52684) {
                if (e < 52657) {
                  if (e === 52656) return t.CLUSTER_BREAK.LV;
                } else if (52657 <= e && e <= 52683) return t.CLUSTER_BREAK.LVT;
              } else if (e < 52685) {
                if (e === 52684) return t.CLUSTER_BREAK.LV;
              } else if (e < 52712) {
                if (52685 <= e && e <= 52711) return t.CLUSTER_BREAK.LVT;
              } else if (e === 52712) return t.CLUSTER_BREAK.LV;
            } else if (e < 52768) {
              if (e < 52740) {
                if (52713 <= e && e <= 52739) return t.CLUSTER_BREAK.LVT;
              } else if (e < 52741) {
                if (e === 52740) return t.CLUSTER_BREAK.LV;
              } else if (52741 <= e && e <= 52767) return t.CLUSTER_BREAK.LVT;
            } else if (e < 52769) {
              if (e === 52768) return t.CLUSTER_BREAK.LV;
            } else if (e < 52796) {
              if (52769 <= e && e <= 52795) return t.CLUSTER_BREAK.LVT;
            } else if (e === 52796) return t.CLUSTER_BREAK.LV;
          } else if (e < 52964) {
            if (e < 52880) {
              if (e < 52825) {
                if (e < 52824) {
                  if (52797 <= e && e <= 52823) return t.CLUSTER_BREAK.LVT;
                } else if (e === 52824) return t.CLUSTER_BREAK.LV;
              } else if (e < 52852) {
                if (52825 <= e && e <= 52851) return t.CLUSTER_BREAK.LVT;
              } else if (e < 52853) {
                if (e === 52852) return t.CLUSTER_BREAK.LV;
              } else if (52853 <= e && e <= 52879) return t.CLUSTER_BREAK.LVT;
            } else if (e < 52909) {
              if (e < 52881) {
                if (e === 52880) return t.CLUSTER_BREAK.LV;
              } else if (e < 52908) {
                if (52881 <= e && e <= 52907) return t.CLUSTER_BREAK.LVT;
              } else if (e === 52908) return t.CLUSTER_BREAK.LV;
            } else if (e < 52936) {
              if (52909 <= e && e <= 52935) return t.CLUSTER_BREAK.LVT;
            } else if (e < 52937) {
              if (e === 52936) return t.CLUSTER_BREAK.LV;
            } else if (52937 <= e && e <= 52963) return t.CLUSTER_BREAK.LVT;
          } else if (e < 53021) {
            if (e < 52992) {
              if (e < 52965) {
                if (e === 52964) return t.CLUSTER_BREAK.LV;
              } else if (52965 <= e && e <= 52991) return t.CLUSTER_BREAK.LVT;
            } else if (e < 52993) {
              if (e === 52992) return t.CLUSTER_BREAK.LV;
            } else if (e < 53020) {
              if (52993 <= e && e <= 53019) return t.CLUSTER_BREAK.LVT;
            } else if (e === 53020) return t.CLUSTER_BREAK.LV;
          } else if (e < 53076) {
            if (e < 53048) {
              if (53021 <= e && e <= 53047) return t.CLUSTER_BREAK.LVT;
            } else if (e < 53049) {
              if (e === 53048) return t.CLUSTER_BREAK.LV;
            } else if (53049 <= e && e <= 53075) return t.CLUSTER_BREAK.LVT;
          } else if (e < 53077) {
            if (e === 53076) return t.CLUSTER_BREAK.LV;
          } else if (e < 53104) {
            if (53077 <= e && e <= 53103) return t.CLUSTER_BREAK.LVT;
          } else if (e === 53104) return t.CLUSTER_BREAK.LV;
        } else if (e < 53412) {
          if (e < 53245) {
            if (e < 53188) {
              if (e < 53133) {
                if (e < 53132) {
                  if (53105 <= e && e <= 53131) return t.CLUSTER_BREAK.LVT;
                } else if (e === 53132) return t.CLUSTER_BREAK.LV;
              } else if (e < 53160) {
                if (53133 <= e && e <= 53159) return t.CLUSTER_BREAK.LVT;
              } else if (e < 53161) {
                if (e === 53160) return t.CLUSTER_BREAK.LV;
              } else if (53161 <= e && e <= 53187) return t.CLUSTER_BREAK.LVT;
            } else if (e < 53216) {
              if (e < 53189) {
                if (e === 53188) return t.CLUSTER_BREAK.LV;
              } else if (53189 <= e && e <= 53215) return t.CLUSTER_BREAK.LVT;
            } else if (e < 53217) {
              if (e === 53216) return t.CLUSTER_BREAK.LV;
            } else if (e < 53244) {
              if (53217 <= e && e <= 53243) return t.CLUSTER_BREAK.LVT;
            } else if (e === 53244) return t.CLUSTER_BREAK.LV;
          } else if (e < 53328) {
            if (e < 53273) {
              if (e < 53272) {
                if (53245 <= e && e <= 53271) return t.CLUSTER_BREAK.LVT;
              } else if (e === 53272) return t.CLUSTER_BREAK.LV;
            } else if (e < 53300) {
              if (53273 <= e && e <= 53299) return t.CLUSTER_BREAK.LVT;
            } else if (e < 53301) {
              if (e === 53300) return t.CLUSTER_BREAK.LV;
            } else if (53301 <= e && e <= 53327) return t.CLUSTER_BREAK.LVT;
          } else if (e < 53357) {
            if (e < 53329) {
              if (e === 53328) return t.CLUSTER_BREAK.LV;
            } else if (e < 53356) {
              if (53329 <= e && e <= 53355) return t.CLUSTER_BREAK.LVT;
            } else if (e === 53356) return t.CLUSTER_BREAK.LV;
          } else if (e < 53384) {
            if (53357 <= e && e <= 53383) return t.CLUSTER_BREAK.LVT;
          } else if (e < 53385) {
            if (e === 53384) return t.CLUSTER_BREAK.LV;
          } else if (53385 <= e && e <= 53411) return t.CLUSTER_BREAK.LVT;
        } else if (e < 53553) {
          if (e < 53469) {
            if (e < 53440) {
              if (e < 53413) {
                if (e === 53412) return t.CLUSTER_BREAK.LV;
              } else if (53413 <= e && e <= 53439) return t.CLUSTER_BREAK.LVT;
            } else if (e < 53441) {
              if (e === 53440) return t.CLUSTER_BREAK.LV;
            } else if (e < 53468) {
              if (53441 <= e && e <= 53467) return t.CLUSTER_BREAK.LVT;
            } else if (e === 53468) return t.CLUSTER_BREAK.LV;
          } else if (e < 53524) {
            if (e < 53496) {
              if (53469 <= e && e <= 53495) return t.CLUSTER_BREAK.LVT;
            } else if (e < 53497) {
              if (e === 53496) return t.CLUSTER_BREAK.LV;
            } else if (53497 <= e && e <= 53523) return t.CLUSTER_BREAK.LVT;
          } else if (e < 53525) {
            if (e === 53524) return t.CLUSTER_BREAK.LV;
          } else if (e < 53552) {
            if (53525 <= e && e <= 53551) return t.CLUSTER_BREAK.LVT;
          } else if (e === 53552) return t.CLUSTER_BREAK.LV;
        } else if (e < 53636) {
          if (e < 53581) {
            if (e < 53580) {
              if (53553 <= e && e <= 53579) return t.CLUSTER_BREAK.LVT;
            } else if (e === 53580) return t.CLUSTER_BREAK.LV;
          } else if (e < 53608) {
            if (53581 <= e && e <= 53607) return t.CLUSTER_BREAK.LVT;
          } else if (e < 53609) {
            if (e === 53608) return t.CLUSTER_BREAK.LV;
          } else if (53609 <= e && e <= 53635) return t.CLUSTER_BREAK.LVT;
        } else if (e < 53665) {
          if (e < 53637) {
            if (e === 53636) return t.CLUSTER_BREAK.LV;
          } else if (e < 53664) {
            if (53637 <= e && e <= 53663) return t.CLUSTER_BREAK.LVT;
          } else if (e === 53664) return t.CLUSTER_BREAK.LV;
        } else if (e < 53692) {
          if (53665 <= e && e <= 53691) return t.CLUSTER_BREAK.LVT;
        } else if (e < 53693) {
          if (e === 53692) return t.CLUSTER_BREAK.LV;
        } else if (53693 <= e && e <= 53719) return t.CLUSTER_BREAK.LVT;
      } else if (e < 70459) {
        if (e < 54897) {
          if (e < 54308) {
            if (e < 54001) {
              if (e < 53860) {
                if (e < 53777) {
                  if (e < 53748) {
                    if (e < 53721) {
                      if (e === 53720) return t.CLUSTER_BREAK.LV;
                    } else if (53721 <= e && e <= 53747)
                      return t.CLUSTER_BREAK.LVT;
                  } else if (e < 53749) {
                    if (e === 53748) return t.CLUSTER_BREAK.LV;
                  } else if (e < 53776) {
                    if (53749 <= e && e <= 53775) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 53776) return t.CLUSTER_BREAK.LV;
                } else if (e < 53805) {
                  if (e < 53804) {
                    if (53777 <= e && e <= 53803) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 53804) return t.CLUSTER_BREAK.LV;
                } else if (e < 53832) {
                  if (53805 <= e && e <= 53831) return t.CLUSTER_BREAK.LVT;
                } else if (e < 53833) {
                  if (e === 53832) return t.CLUSTER_BREAK.LV;
                } else if (53833 <= e && e <= 53859) return t.CLUSTER_BREAK.LVT;
              } else if (e < 53917) {
                if (e < 53888) {
                  if (e < 53861) {
                    if (e === 53860) return t.CLUSTER_BREAK.LV;
                  } else if (53861 <= e && e <= 53887)
                    return t.CLUSTER_BREAK.LVT;
                } else if (e < 53889) {
                  if (e === 53888) return t.CLUSTER_BREAK.LV;
                } else if (e < 53916) {
                  if (53889 <= e && e <= 53915) return t.CLUSTER_BREAK.LVT;
                } else if (e === 53916) return t.CLUSTER_BREAK.LV;
              } else if (e < 53972) {
                if (e < 53944) {
                  if (53917 <= e && e <= 53943) return t.CLUSTER_BREAK.LVT;
                } else if (e < 53945) {
                  if (e === 53944) return t.CLUSTER_BREAK.LV;
                } else if (53945 <= e && e <= 53971) return t.CLUSTER_BREAK.LVT;
              } else if (e < 53973) {
                if (e === 53972) return t.CLUSTER_BREAK.LV;
              } else if (e < 54e3) {
                if (53973 <= e && e <= 53999) return t.CLUSTER_BREAK.LVT;
              } else if (e === 54e3) return t.CLUSTER_BREAK.LV;
            } else if (e < 54141) {
              if (e < 54084) {
                if (e < 54029) {
                  if (e < 54028) {
                    if (54001 <= e && e <= 54027) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 54028) return t.CLUSTER_BREAK.LV;
                } else if (e < 54056) {
                  if (54029 <= e && e <= 54055) return t.CLUSTER_BREAK.LVT;
                } else if (e < 54057) {
                  if (e === 54056) return t.CLUSTER_BREAK.LV;
                } else if (54057 <= e && e <= 54083) return t.CLUSTER_BREAK.LVT;
              } else if (e < 54112) {
                if (e < 54085) {
                  if (e === 54084) return t.CLUSTER_BREAK.LV;
                } else if (54085 <= e && e <= 54111) return t.CLUSTER_BREAK.LVT;
              } else if (e < 54113) {
                if (e === 54112) return t.CLUSTER_BREAK.LV;
              } else if (e < 54140) {
                if (54113 <= e && e <= 54139) return t.CLUSTER_BREAK.LVT;
              } else if (e === 54140) return t.CLUSTER_BREAK.LV;
            } else if (e < 54224) {
              if (e < 54169) {
                if (e < 54168) {
                  if (54141 <= e && e <= 54167) return t.CLUSTER_BREAK.LVT;
                } else if (e === 54168) return t.CLUSTER_BREAK.LV;
              } else if (e < 54196) {
                if (54169 <= e && e <= 54195) return t.CLUSTER_BREAK.LVT;
              } else if (e < 54197) {
                if (e === 54196) return t.CLUSTER_BREAK.LV;
              } else if (54197 <= e && e <= 54223) return t.CLUSTER_BREAK.LVT;
            } else if (e < 54253) {
              if (e < 54225) {
                if (e === 54224) return t.CLUSTER_BREAK.LV;
              } else if (e < 54252) {
                if (54225 <= e && e <= 54251) return t.CLUSTER_BREAK.LVT;
              } else if (e === 54252) return t.CLUSTER_BREAK.LV;
            } else if (e < 54280) {
              if (54253 <= e && e <= 54279) return t.CLUSTER_BREAK.LVT;
            } else if (e < 54281) {
              if (e === 54280) return t.CLUSTER_BREAK.LV;
            } else if (54281 <= e && e <= 54307) return t.CLUSTER_BREAK.LVT;
          } else if (e < 54589) {
            if (e < 54448) {
              if (e < 54365) {
                if (e < 54336) {
                  if (e < 54309) {
                    if (e === 54308) return t.CLUSTER_BREAK.LV;
                  } else if (54309 <= e && e <= 54335)
                    return t.CLUSTER_BREAK.LVT;
                } else if (e < 54337) {
                  if (e === 54336) return t.CLUSTER_BREAK.LV;
                } else if (e < 54364) {
                  if (54337 <= e && e <= 54363) return t.CLUSTER_BREAK.LVT;
                } else if (e === 54364) return t.CLUSTER_BREAK.LV;
              } else if (e < 54393) {
                if (e < 54392) {
                  if (54365 <= e && e <= 54391) return t.CLUSTER_BREAK.LVT;
                } else if (e === 54392) return t.CLUSTER_BREAK.LV;
              } else if (e < 54420) {
                if (54393 <= e && e <= 54419) return t.CLUSTER_BREAK.LVT;
              } else if (e < 54421) {
                if (e === 54420) return t.CLUSTER_BREAK.LV;
              } else if (54421 <= e && e <= 54447) return t.CLUSTER_BREAK.LVT;
            } else if (e < 54505) {
              if (e < 54476) {
                if (e < 54449) {
                  if (e === 54448) return t.CLUSTER_BREAK.LV;
                } else if (54449 <= e && e <= 54475) return t.CLUSTER_BREAK.LVT;
              } else if (e < 54477) {
                if (e === 54476) return t.CLUSTER_BREAK.LV;
              } else if (e < 54504) {
                if (54477 <= e && e <= 54503) return t.CLUSTER_BREAK.LVT;
              } else if (e === 54504) return t.CLUSTER_BREAK.LV;
            } else if (e < 54560) {
              if (e < 54532) {
                if (54505 <= e && e <= 54531) return t.CLUSTER_BREAK.LVT;
              } else if (e < 54533) {
                if (e === 54532) return t.CLUSTER_BREAK.LV;
              } else if (54533 <= e && e <= 54559) return t.CLUSTER_BREAK.LVT;
            } else if (e < 54561) {
              if (e === 54560) return t.CLUSTER_BREAK.LV;
            } else if (e < 54588) {
              if (54561 <= e && e <= 54587) return t.CLUSTER_BREAK.LVT;
            } else if (e === 54588) return t.CLUSTER_BREAK.LV;
          } else if (e < 54756) {
            if (e < 54672) {
              if (e < 54617) {
                if (e < 54616) {
                  if (54589 <= e && e <= 54615) return t.CLUSTER_BREAK.LVT;
                } else if (e === 54616) return t.CLUSTER_BREAK.LV;
              } else if (e < 54644) {
                if (54617 <= e && e <= 54643) return t.CLUSTER_BREAK.LVT;
              } else if (e < 54645) {
                if (e === 54644) return t.CLUSTER_BREAK.LV;
              } else if (54645 <= e && e <= 54671) return t.CLUSTER_BREAK.LVT;
            } else if (e < 54701) {
              if (e < 54673) {
                if (e === 54672) return t.CLUSTER_BREAK.LV;
              } else if (e < 54700) {
                if (54673 <= e && e <= 54699) return t.CLUSTER_BREAK.LVT;
              } else if (e === 54700) return t.CLUSTER_BREAK.LV;
            } else if (e < 54728) {
              if (54701 <= e && e <= 54727) return t.CLUSTER_BREAK.LVT;
            } else if (e < 54729) {
              if (e === 54728) return t.CLUSTER_BREAK.LV;
            } else if (54729 <= e && e <= 54755) return t.CLUSTER_BREAK.LVT;
          } else if (e < 54813) {
            if (e < 54784) {
              if (e < 54757) {
                if (e === 54756) return t.CLUSTER_BREAK.LV;
              } else if (54757 <= e && e <= 54783) return t.CLUSTER_BREAK.LVT;
            } else if (e < 54785) {
              if (e === 54784) return t.CLUSTER_BREAK.LV;
            } else if (e < 54812) {
              if (54785 <= e && e <= 54811) return t.CLUSTER_BREAK.LVT;
            } else if (e === 54812) return t.CLUSTER_BREAK.LV;
          } else if (e < 54868) {
            if (e < 54840) {
              if (54813 <= e && e <= 54839) return t.CLUSTER_BREAK.LVT;
            } else if (e < 54841) {
              if (e === 54840) return t.CLUSTER_BREAK.LV;
            } else if (54841 <= e && e <= 54867) return t.CLUSTER_BREAK.LVT;
          } else if (e < 54869) {
            if (e === 54868) return t.CLUSTER_BREAK.LV;
          } else if (e < 54896) {
            if (54869 <= e && e <= 54895) return t.CLUSTER_BREAK.LVT;
          } else if (e === 54896) return t.CLUSTER_BREAK.LV;
        } else if (e < 69632) {
          if (e < 55216) {
            if (e < 55037) {
              if (e < 54980) {
                if (e < 54925) {
                  if (e < 54924) {
                    if (54897 <= e && e <= 54923) return t.CLUSTER_BREAK.LVT;
                  } else if (e === 54924) return t.CLUSTER_BREAK.LV;
                } else if (e < 54952) {
                  if (54925 <= e && e <= 54951) return t.CLUSTER_BREAK.LVT;
                } else if (e < 54953) {
                  if (e === 54952) return t.CLUSTER_BREAK.LV;
                } else if (54953 <= e && e <= 54979) return t.CLUSTER_BREAK.LVT;
              } else if (e < 55008) {
                if (e < 54981) {
                  if (e === 54980) return t.CLUSTER_BREAK.LV;
                } else if (54981 <= e && e <= 55007) return t.CLUSTER_BREAK.LVT;
              } else if (e < 55009) {
                if (e === 55008) return t.CLUSTER_BREAK.LV;
              } else if (e < 55036) {
                if (55009 <= e && e <= 55035) return t.CLUSTER_BREAK.LVT;
              } else if (e === 55036) return t.CLUSTER_BREAK.LV;
            } else if (e < 55120) {
              if (e < 55065) {
                if (e < 55064) {
                  if (55037 <= e && e <= 55063) return t.CLUSTER_BREAK.LVT;
                } else if (e === 55064) return t.CLUSTER_BREAK.LV;
              } else if (e < 55092) {
                if (55065 <= e && e <= 55091) return t.CLUSTER_BREAK.LVT;
              } else if (e < 55093) {
                if (e === 55092) return t.CLUSTER_BREAK.LV;
              } else if (55093 <= e && e <= 55119) return t.CLUSTER_BREAK.LVT;
            } else if (e < 55149) {
              if (e < 55121) {
                if (e === 55120) return t.CLUSTER_BREAK.LV;
              } else if (e < 55148) {
                if (55121 <= e && e <= 55147) return t.CLUSTER_BREAK.LVT;
              } else if (e === 55148) return t.CLUSTER_BREAK.LV;
            } else if (e < 55176) {
              if (55149 <= e && e <= 55175) return t.CLUSTER_BREAK.LVT;
            } else if (e < 55177) {
              if (e === 55176) return t.CLUSTER_BREAK.LV;
            } else if (55177 <= e && e <= 55203) return t.CLUSTER_BREAK.LVT;
          } else if (e < 68097) {
            if (e < 65279) {
              if (e < 64286) {
                if (e < 55243) {
                  if (55216 <= e && e <= 55238) return t.CLUSTER_BREAK.V;
                } else if (55243 <= e && e <= 55291) return t.CLUSTER_BREAK.T;
              } else if (e < 65024) {
                if (e === 64286) return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 65056) {
                if (65024 <= e && e <= 65039) return t.CLUSTER_BREAK.EXTEND;
              } else if (65056 <= e && e <= 65071)
                return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 66045) {
              if (e < 65438) {
                if (e === 65279) return t.CLUSTER_BREAK.CONTROL;
              } else if (e < 65520) {
                if (65438 <= e && e <= 65439) return t.CLUSTER_BREAK.EXTEND;
              } else if (65520 <= e && e <= 65531)
                return t.CLUSTER_BREAK.CONTROL;
            } else if (e < 66272) {
              if (e === 66045) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 66422) {
              if (e === 66272) return t.CLUSTER_BREAK.EXTEND;
            } else if (66422 <= e && e <= 66426) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 68325) {
            if (e < 68108) {
              if (e < 68101) {
                if (68097 <= e && e <= 68099) return t.CLUSTER_BREAK.EXTEND;
              } else if (68101 <= e && e <= 68102)
                return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 68152) {
              if (68108 <= e && e <= 68111) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 68159) {
              if (68152 <= e && e <= 68154) return t.CLUSTER_BREAK.EXTEND;
            } else if (e === 68159) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 69373) {
            if (e < 68900) {
              if (68325 <= e && e <= 68326) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 69291) {
              if (68900 <= e && e <= 68903) return t.CLUSTER_BREAK.EXTEND;
            } else if (69291 <= e && e <= 69292) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 69446) {
            if (69373 <= e && e <= 69375) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 69506) {
            if (69446 <= e && e <= 69456) return t.CLUSTER_BREAK.EXTEND;
          } else if (69506 <= e && e <= 69509) return t.CLUSTER_BREAK.EXTEND;
        } else if (e < 70016) {
          if (e < 69815) {
            if (e < 69747) {
              if (e < 69634) {
                if (e === 69632) return t.CLUSTER_BREAK.SPACINGMARK;
                if (e === 69633) return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 69688) {
                if (e === 69634) return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e < 69744) {
                if (69688 <= e && e <= 69702) return t.CLUSTER_BREAK.EXTEND;
              } else if (e === 69744) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 69762) {
              if (e < 69759) {
                if (69747 <= e && e <= 69748) return t.CLUSTER_BREAK.EXTEND;
              } else if (69759 <= e && e <= 69761)
                return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 69808) {
              if (e === 69762) return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (e < 69811) {
              if (69808 <= e && e <= 69810) return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (69811 <= e && e <= 69814) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 69888)
            if (e < 69821) {
              if (e < 69817) {
                if (69815 <= e && e <= 69816)
                  return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (69817 <= e && e <= 69818)
                return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 69826) {
              if (e === 69821) return t.CLUSTER_BREAK.PREPEND;
            } else {
              if (e === 69826) return t.CLUSTER_BREAK.EXTEND;
              if (e === 69837) return t.CLUSTER_BREAK.PREPEND;
            }
          else if (e < 69933) {
            if (e < 69927) {
              if (69888 <= e && e <= 69890) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 69932) {
              if (69927 <= e && e <= 69931) return t.CLUSTER_BREAK.EXTEND;
            } else if (e === 69932) return t.CLUSTER_BREAK.SPACINGMARK;
          } else if (e < 69957) {
            if (69933 <= e && e <= 69940) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 70003) {
            if (69957 <= e && e <= 69958) return t.CLUSTER_BREAK.SPACINGMARK;
          } else if (e === 70003) return t.CLUSTER_BREAK.EXTEND;
        } else if (e < 70194) {
          if (e < 70082) {
            if (e < 70067) {
              if (e < 70018) {
                if (70016 <= e && e <= 70017) return t.CLUSTER_BREAK.EXTEND;
              } else if (e === 70018) return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (e < 70070) {
              if (70067 <= e && e <= 70069) return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (e < 70079) {
              if (70070 <= e && e <= 70078) return t.CLUSTER_BREAK.EXTEND;
            } else if (70079 <= e && e <= 70080)
              return t.CLUSTER_BREAK.SPACINGMARK;
          } else if (e < 70095) {
            if (e < 70089) {
              if (70082 <= e && e <= 70083) return t.CLUSTER_BREAK.PREPEND;
            } else if (e < 70094) {
              if (70089 <= e && e <= 70092) return t.CLUSTER_BREAK.EXTEND;
            } else if (e === 70094) return t.CLUSTER_BREAK.SPACINGMARK;
          } else if (e < 70188) {
            if (e === 70095) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 70191) {
            if (70188 <= e && e <= 70190) return t.CLUSTER_BREAK.SPACINGMARK;
          } else if (70191 <= e && e <= 70193) return t.CLUSTER_BREAK.EXTEND;
        } else if (e < 70209) {
          if (e < 70197) {
            if (e < 70196) {
              if (70194 <= e && e <= 70195) return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (e === 70196) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 70198) {
            if (e === 70197) return t.CLUSTER_BREAK.SPACINGMARK;
          } else if (e < 70206) {
            if (70198 <= e && e <= 70199) return t.CLUSTER_BREAK.EXTEND;
          } else if (e === 70206) return t.CLUSTER_BREAK.EXTEND;
        } else if (e < 70371) {
          if (e < 70367) {
            if (e === 70209) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 70368) {
            if (e === 70367) return t.CLUSTER_BREAK.EXTEND;
          } else if (70368 <= e && e <= 70370)
            return t.CLUSTER_BREAK.SPACINGMARK;
        } else if (e < 70400) {
          if (70371 <= e && e <= 70378) return t.CLUSTER_BREAK.EXTEND;
        } else if (e < 70402) {
          if (70400 <= e && e <= 70401) return t.CLUSTER_BREAK.EXTEND;
        } else if (70402 <= e && e <= 70403) return t.CLUSTER_BREAK.SPACINGMARK;
      } else if (e < 72343) {
        if (e < 71339) {
          if (e < 70841) {
            if (e < 70512) {
              if (e < 70471) {
                if (e < 70463) {
                  if (e < 70462) {
                    if (70459 <= e && e <= 70460) return t.CLUSTER_BREAK.EXTEND;
                  } else if (e === 70462) return t.CLUSTER_BREAK.EXTEND;
                } else if (e < 70464) {
                  if (e === 70463) return t.CLUSTER_BREAK.SPACINGMARK;
                } else if (e < 70465) {
                  if (e === 70464) return t.CLUSTER_BREAK.EXTEND;
                } else if (70465 <= e && e <= 70468)
                  return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e < 70487) {
                if (e < 70475) {
                  if (70471 <= e && e <= 70472)
                    return t.CLUSTER_BREAK.SPACINGMARK;
                } else if (70475 <= e && e <= 70477)
                  return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e < 70498) {
                if (e === 70487) return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 70502) {
                if (70498 <= e && e <= 70499)
                  return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (70502 <= e && e <= 70508)
                return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 70725) {
              if (e < 70712) {
                if (e < 70709) {
                  if (70512 <= e && e <= 70516) return t.CLUSTER_BREAK.EXTEND;
                } else if (70709 <= e && e <= 70711)
                  return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e < 70720) {
                if (70712 <= e && e <= 70719) return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 70722) {
                if (70720 <= e && e <= 70721)
                  return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (70722 <= e && e <= 70724)
                return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 70832) {
              if (e < 70726) {
                if (e === 70725) return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e === 70726 || e === 70750)
                return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 70833) {
              if (e === 70832) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 70835) {
              if (70833 <= e && e <= 70834) return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (70835 <= e && e <= 70840) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 71096) {
            if (e < 70847)
              if (e < 70843) {
                if (e === 70841) return t.CLUSTER_BREAK.SPACINGMARK;
                if (e === 70842) return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 70845) {
                if (70843 <= e && e <= 70844)
                  return t.CLUSTER_BREAK.SPACINGMARK;
              } else {
                if (e === 70845) return t.CLUSTER_BREAK.EXTEND;
                if (e === 70846) return t.CLUSTER_BREAK.SPACINGMARK;
              }
            else if (e < 71087) {
              if (e < 70849) {
                if (70847 <= e && e <= 70848) return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 70850) {
                if (e === 70849) return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (70850 <= e && e <= 70851)
                return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 71088) {
              if (e === 71087) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 71090) {
              if (71088 <= e && e <= 71089) return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (71090 <= e && e <= 71093) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 71216) {
            if (e < 71102) {
              if (e < 71100) {
                if (71096 <= e && e <= 71099)
                  return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (71100 <= e && e <= 71101)
                return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 71103) {
              if (e === 71102) return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (e < 71132) {
              if (71103 <= e && e <= 71104) return t.CLUSTER_BREAK.EXTEND;
            } else if (71132 <= e && e <= 71133) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 71229) {
            if (e < 71219) {
              if (71216 <= e && e <= 71218) return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (e < 71227) {
              if (71219 <= e && e <= 71226) return t.CLUSTER_BREAK.EXTEND;
            } else if (71227 <= e && e <= 71228)
              return t.CLUSTER_BREAK.SPACINGMARK;
          } else if (e < 71230) {
            if (e === 71229) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 71231) {
            if (e === 71230) return t.CLUSTER_BREAK.SPACINGMARK;
          } else if (71231 <= e && e <= 71232) return t.CLUSTER_BREAK.EXTEND;
        } else if (e < 71999)
          if (e < 71463) {
            if (e < 71350) {
              if (e < 71341) {
                if (e === 71339) return t.CLUSTER_BREAK.EXTEND;
                if (e === 71340) return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e < 71342) {
                if (e === 71341) return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 71344) {
                if (71342 <= e && e <= 71343)
                  return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (71344 <= e && e <= 71349)
                return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 71453) {
              if (e === 71350) return t.CLUSTER_BREAK.SPACINGMARK;
              if (e === 71351) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 71458) {
              if (71453 <= e && e <= 71455) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 71462) {
              if (71458 <= e && e <= 71461) return t.CLUSTER_BREAK.EXTEND;
            } else if (e === 71462) return t.CLUSTER_BREAK.SPACINGMARK;
          } else if (e < 71984) {
            if (e < 71727) {
              if (e < 71724) {
                if (71463 <= e && e <= 71467) return t.CLUSTER_BREAK.EXTEND;
              } else if (71724 <= e && e <= 71726)
                return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (e < 71736) {
              if (71727 <= e && e <= 71735) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 71737) {
              if (e === 71736) return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (71737 <= e && e <= 71738) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 71995) {
            if (e < 71985) {
              if (e === 71984) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 71991) {
              if (71985 <= e && e <= 71989) return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (71991 <= e && e <= 71992)
              return t.CLUSTER_BREAK.SPACINGMARK;
          } else if (e < 71997) {
            if (71995 <= e && e <= 71996) return t.CLUSTER_BREAK.EXTEND;
          } else {
            if (e === 71997) return t.CLUSTER_BREAK.SPACINGMARK;
            if (e === 71998) return t.CLUSTER_BREAK.EXTEND;
          }
        else if (e < 72193)
          if (e < 72145)
            if (e < 72001) {
              if (e === 71999) return t.CLUSTER_BREAK.PREPEND;
              if (e === 72e3) return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (e < 72002) {
              if (e === 72001) return t.CLUSTER_BREAK.PREPEND;
            } else {
              if (e === 72002) return t.CLUSTER_BREAK.SPACINGMARK;
              if (e === 72003) return t.CLUSTER_BREAK.EXTEND;
            }
          else if (e < 72156) {
            if (e < 72148) {
              if (72145 <= e && e <= 72147) return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (e < 72154) {
              if (72148 <= e && e <= 72151) return t.CLUSTER_BREAK.EXTEND;
            } else if (72154 <= e && e <= 72155) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 72160) {
            if (72156 <= e && e <= 72159) return t.CLUSTER_BREAK.SPACINGMARK;
          } else {
            if (e === 72160) return t.CLUSTER_BREAK.EXTEND;
            if (e === 72164) return t.CLUSTER_BREAK.SPACINGMARK;
          }
        else if (e < 72263) {
          if (e < 72249) {
            if (e < 72243) {
              if (72193 <= e && e <= 72202) return t.CLUSTER_BREAK.EXTEND;
            } else if (72243 <= e && e <= 72248) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 72250) {
            if (e === 72249) return t.CLUSTER_BREAK.SPACINGMARK;
          } else if (e < 72251) {
            if (e === 72250) return t.CLUSTER_BREAK.PREPEND;
          } else if (72251 <= e && e <= 72254) return t.CLUSTER_BREAK.EXTEND;
        } else if (e < 72281) {
          if (e < 72273) {
            if (e === 72263) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 72279) {
            if (72273 <= e && e <= 72278) return t.CLUSTER_BREAK.EXTEND;
          } else if (72279 <= e && e <= 72280)
            return t.CLUSTER_BREAK.SPACINGMARK;
        } else if (e < 72324) {
          if (72281 <= e && e <= 72283) return t.CLUSTER_BREAK.EXTEND;
        } else if (e < 72330) {
          if (72324 <= e && e <= 72329) return t.CLUSTER_BREAK.PREPEND;
        } else if (72330 <= e && e <= 72342) return t.CLUSTER_BREAK.EXTEND;
      } else if (e < 94033) {
        if (e < 73104) {
          if (e < 72881) {
            if (e < 72766) {
              if (e < 72751) {
                if (e < 72344) {
                  if (e === 72343) return t.CLUSTER_BREAK.SPACINGMARK;
                } else if (72344 <= e && e <= 72345)
                  return t.CLUSTER_BREAK.EXTEND;
              } else if (e < 72752) {
                if (e === 72751) return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (e < 72760) {
                if (72752 <= e && e <= 72758) return t.CLUSTER_BREAK.EXTEND;
              } else if (72760 <= e && e <= 72765)
                return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 72850) {
              if (e === 72766) return t.CLUSTER_BREAK.SPACINGMARK;
              if (e === 72767) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 72873) {
              if (72850 <= e && e <= 72871) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 72874) {
              if (e === 72873) return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (72874 <= e && e <= 72880) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 73018) {
            if (e < 72884) {
              if (e < 72882) {
                if (e === 72881) return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (72882 <= e && e <= 72883)
                return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 72885) {
              if (e === 72884) return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (e < 73009) {
              if (72885 <= e && e <= 72886) return t.CLUSTER_BREAK.EXTEND;
            } else if (73009 <= e && e <= 73014) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 73030) {
            if (e < 73020) {
              if (e === 73018) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 73023) {
              if (73020 <= e && e <= 73021) return t.CLUSTER_BREAK.EXTEND;
            } else if (73023 <= e && e <= 73029) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 73031) {
            if (e === 73030) return t.CLUSTER_BREAK.PREPEND;
          } else if (e < 73098) {
            if (e === 73031) return t.CLUSTER_BREAK.EXTEND;
          } else if (73098 <= e && e <= 73102)
            return t.CLUSTER_BREAK.SPACINGMARK;
        } else if (e < 73526) {
          if (e < 73459)
            if (e < 73109) {
              if (e < 73107) {
                if (73104 <= e && e <= 73105) return t.CLUSTER_BREAK.EXTEND;
              } else if (73107 <= e && e <= 73108)
                return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (e < 73110) {
              if (e === 73109) return t.CLUSTER_BREAK.EXTEND;
            } else {
              if (e === 73110) return t.CLUSTER_BREAK.SPACINGMARK;
              if (e === 73111) return t.CLUSTER_BREAK.EXTEND;
            }
          else if (e < 73474) {
            if (e < 73461) {
              if (73459 <= e && e <= 73460) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 73472) {
              if (73461 <= e && e <= 73462) return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (73472 <= e && e <= 73473) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 73475) {
            if (e === 73474) return t.CLUSTER_BREAK.PREPEND;
          } else if (e < 73524) {
            if (e === 73475) return t.CLUSTER_BREAK.SPACINGMARK;
          } else if (73524 <= e && e <= 73525)
            return t.CLUSTER_BREAK.SPACINGMARK;
        } else if (e < 78896)
          if (e < 73536) {
            if (e < 73534) {
              if (73526 <= e && e <= 73530) return t.CLUSTER_BREAK.EXTEND;
            } else if (73534 <= e && e <= 73535)
              return t.CLUSTER_BREAK.SPACINGMARK;
          } else if (e < 73537) {
            if (e === 73536) return t.CLUSTER_BREAK.EXTEND;
          } else {
            if (e === 73537) return t.CLUSTER_BREAK.SPACINGMARK;
            if (e === 73538) return t.CLUSTER_BREAK.EXTEND;
          }
        else if (e < 92912) {
          if (e < 78912) {
            if (78896 <= e && e <= 78911) return t.CLUSTER_BREAK.CONTROL;
          } else if (e < 78919) {
            if (e === 78912) return t.CLUSTER_BREAK.EXTEND;
          } else if (78919 <= e && e <= 78933) return t.CLUSTER_BREAK.EXTEND;
        } else if (e < 92976) {
          if (92912 <= e && e <= 92916) return t.CLUSTER_BREAK.EXTEND;
        } else if (e < 94031) {
          if (92976 <= e && e <= 92982) return t.CLUSTER_BREAK.EXTEND;
        } else if (e === 94031) return t.CLUSTER_BREAK.EXTEND;
      } else if (e < 121476) {
        if (e < 119143)
          if (e < 113824) {
            if (e < 94180) {
              if (e < 94095) {
                if (94033 <= e && e <= 94087)
                  return t.CLUSTER_BREAK.SPACINGMARK;
              } else if (94095 <= e && e <= 94098)
                return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 94192) {
              if (e === 94180) return t.CLUSTER_BREAK.EXTEND;
            } else if (e < 113821) {
              if (94192 <= e && e <= 94193) return t.CLUSTER_BREAK.SPACINGMARK;
            } else if (113821 <= e && e <= 113822)
              return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 118576) {
            if (e < 118528) {
              if (113824 <= e && e <= 113827) return t.CLUSTER_BREAK.CONTROL;
            } else if (118528 <= e && e <= 118573)
              return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 119141) {
            if (118576 <= e && e <= 118598) return t.CLUSTER_BREAK.EXTEND;
          } else {
            if (e === 119141) return t.CLUSTER_BREAK.EXTEND;
            if (e === 119142) return t.CLUSTER_BREAK.SPACINGMARK;
          }
        else if (e < 119173) {
          if (e < 119150) {
            if (e < 119149) {
              if (119143 <= e && e <= 119145) return t.CLUSTER_BREAK.EXTEND;
            } else if (e === 119149) return t.CLUSTER_BREAK.SPACINGMARK;
          } else if (e < 119155) {
            if (119150 <= e && e <= 119154) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 119163) {
            if (119155 <= e && e <= 119162) return t.CLUSTER_BREAK.CONTROL;
          } else if (119163 <= e && e <= 119170) return t.CLUSTER_BREAK.EXTEND;
        } else if (e < 121344) {
          if (e < 119210) {
            if (119173 <= e && e <= 119179) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 119362) {
            if (119210 <= e && e <= 119213) return t.CLUSTER_BREAK.EXTEND;
          } else if (119362 <= e && e <= 119364) return t.CLUSTER_BREAK.EXTEND;
        } else if (e < 121403) {
          if (121344 <= e && e <= 121398) return t.CLUSTER_BREAK.EXTEND;
        } else if (e < 121461) {
          if (121403 <= e && e <= 121452) return t.CLUSTER_BREAK.EXTEND;
        } else if (e === 121461) return t.CLUSTER_BREAK.EXTEND;
      } else if (e < 123628) {
        if (e < 122907) {
          if (e < 121505) {
            if (e < 121499) {
              if (e === 121476) return t.CLUSTER_BREAK.EXTEND;
            } else if (121499 <= e && e <= 121503)
              return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 122880) {
            if (121505 <= e && e <= 121519) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 122888) {
            if (122880 <= e && e <= 122886) return t.CLUSTER_BREAK.EXTEND;
          } else if (122888 <= e && e <= 122904) return t.CLUSTER_BREAK.EXTEND;
        } else if (e < 123023) {
          if (e < 122915) {
            if (122907 <= e && e <= 122913) return t.CLUSTER_BREAK.EXTEND;
          } else if (e < 122918) {
            if (122915 <= e && e <= 122916) return t.CLUSTER_BREAK.EXTEND;
          } else if (122918 <= e && e <= 122922) return t.CLUSTER_BREAK.EXTEND;
        } else if (e < 123184) {
          if (e === 123023) return t.CLUSTER_BREAK.EXTEND;
        } else if (e < 123566) {
          if (123184 <= e && e <= 123190) return t.CLUSTER_BREAK.EXTEND;
        } else if (e === 123566) return t.CLUSTER_BREAK.EXTEND;
      } else if (e < 127995) {
        if (e < 125136) {
          if (e < 124140) {
            if (123628 <= e && e <= 123631) return t.CLUSTER_BREAK.EXTEND;
          } else if (124140 <= e && e <= 124143) return t.CLUSTER_BREAK.EXTEND;
        } else if (e < 125252) {
          if (125136 <= e && e <= 125142) return t.CLUSTER_BREAK.EXTEND;
        } else if (e < 127462) {
          if (125252 <= e && e <= 125258) return t.CLUSTER_BREAK.EXTEND;
        } else if (127462 <= e && e <= 127487)
          return t.CLUSTER_BREAK.REGIONAL_INDICATOR;
      } else if (e < 917632) {
        if (e < 917504) {
          if (127995 <= e && e <= 127999) return t.CLUSTER_BREAK.EXTEND;
        } else if (e < 917536) {
          if (917504 <= e && e <= 917535) return t.CLUSTER_BREAK.CONTROL;
        } else if (917536 <= e && e <= 917631) return t.CLUSTER_BREAK.EXTEND;
      } else if (e < 917760) {
        if (917632 <= e && e <= 917759) return t.CLUSTER_BREAK.CONTROL;
      } else if (e < 918e3) {
        if (917760 <= e && e <= 917999) return t.CLUSTER_BREAK.EXTEND;
      } else if (918e3 <= e && e <= 921599) return t.CLUSTER_BREAK.CONTROL;
      return t.CLUSTER_BREAK.OTHER;
    }
    static getEmojiProperty(e) {
      if (e < 10160) {
        if (e < 9728) {
          if (e < 9e3) {
            if (e < 8482) {
              if (e < 8252) {
                if (e === 169 || e === 174) return t.EXTENDED_PICTOGRAPHIC;
              } else if (e === 8252 || e === 8265)
                return t.EXTENDED_PICTOGRAPHIC;
            } else if (e < 8596) {
              if (e === 8482 || e === 8505) return t.EXTENDED_PICTOGRAPHIC;
            } else if (e < 8617) {
              if (8596 <= e && e <= 8601) return t.EXTENDED_PICTOGRAPHIC;
            } else if (e < 8986) {
              if (8617 <= e && e <= 8618) return t.EXTENDED_PICTOGRAPHIC;
            } else if (8986 <= e && e <= 8987) return t.EXTENDED_PICTOGRAPHIC;
          } else if (e < 9410) {
            if (e < 9167) {
              if (e === 9e3 || e === 9096) return t.EXTENDED_PICTOGRAPHIC;
            } else if (e < 9193) {
              if (e === 9167) return t.EXTENDED_PICTOGRAPHIC;
            } else if (e < 9208) {
              if (9193 <= e && e <= 9203) return t.EXTENDED_PICTOGRAPHIC;
            } else if (9208 <= e && e <= 9210) return t.EXTENDED_PICTOGRAPHIC;
          } else if (e < 9654) {
            if (e < 9642) {
              if (e === 9410) return t.EXTENDED_PICTOGRAPHIC;
            } else if (9642 <= e && e <= 9643) return t.EXTENDED_PICTOGRAPHIC;
          } else if (e < 9664) {
            if (e === 9654) return t.EXTENDED_PICTOGRAPHIC;
          } else if (e < 9723) {
            if (e === 9664) return t.EXTENDED_PICTOGRAPHIC;
          } else if (9723 <= e && e <= 9726) return t.EXTENDED_PICTOGRAPHIC;
        } else if (e < 10035) {
          if (e < 10004) {
            if (e < 9748) {
              if (e < 9735) {
                if (9728 <= e && e <= 9733) return t.EXTENDED_PICTOGRAPHIC;
              } else if (9735 <= e && e <= 9746) return t.EXTENDED_PICTOGRAPHIC;
            } else if (e < 9872) {
              if (9748 <= e && e <= 9861) return t.EXTENDED_PICTOGRAPHIC;
            } else if (e < 9992) {
              if (9872 <= e && e <= 9989) return t.EXTENDED_PICTOGRAPHIC;
            } else if (9992 <= e && e <= 10002) return t.EXTENDED_PICTOGRAPHIC;
          } else if (e < 10013) {
            if (e === 10004 || e === 10006) return t.EXTENDED_PICTOGRAPHIC;
          } else if (e < 10017) {
            if (e === 10013) return t.EXTENDED_PICTOGRAPHIC;
          } else if (e === 10017 || e === 10024) return t.EXTENDED_PICTOGRAPHIC;
        } else if (e < 10067) {
          if (e < 10055) {
            if (e < 10052) {
              if (10035 <= e && e <= 10036) return t.EXTENDED_PICTOGRAPHIC;
            } else if (e === 10052) return t.EXTENDED_PICTOGRAPHIC;
          } else if (e < 10060) {
            if (e === 10055) return t.EXTENDED_PICTOGRAPHIC;
          } else if (e === 10060 || e === 10062) return t.EXTENDED_PICTOGRAPHIC;
        } else if (e < 10083) {
          if (e < 10071) {
            if (10067 <= e && e <= 10069) return t.EXTENDED_PICTOGRAPHIC;
          } else if (e === 10071) return t.EXTENDED_PICTOGRAPHIC;
        } else if (e < 10133) {
          if (10083 <= e && e <= 10087) return t.EXTENDED_PICTOGRAPHIC;
        } else if (e < 10145) {
          if (10133 <= e && e <= 10135) return t.EXTENDED_PICTOGRAPHIC;
        } else if (e === 10145) return t.EXTENDED_PICTOGRAPHIC;
      } else if (e < 127489) {
        if (e < 12951) {
          if (e < 11035) {
            if (e < 10548) {
              if (e === 10160 || e === 10175) return t.EXTENDED_PICTOGRAPHIC;
            } else if (e < 11013) {
              if (10548 <= e && e <= 10549) return t.EXTENDED_PICTOGRAPHIC;
            } else if (11013 <= e && e <= 11015) return t.EXTENDED_PICTOGRAPHIC;
          } else if (e < 11093) {
            if (e < 11088) {
              if (11035 <= e && e <= 11036) return t.EXTENDED_PICTOGRAPHIC;
            } else if (e === 11088) return t.EXTENDED_PICTOGRAPHIC;
          } else if (e < 12336) {
            if (e === 11093) return t.EXTENDED_PICTOGRAPHIC;
          } else if (e === 12336 || e === 12349) return t.EXTENDED_PICTOGRAPHIC;
        } else if (e < 127340) {
          if (e < 126976) {
            if (e === 12951 || e === 12953) return t.EXTENDED_PICTOGRAPHIC;
          } else if (e < 127245) {
            if (126976 <= e && e <= 127231) return t.EXTENDED_PICTOGRAPHIC;
          } else if (e < 127279) {
            if (127245 <= e && e <= 127247) return t.EXTENDED_PICTOGRAPHIC;
          } else if (e === 127279) return t.EXTENDED_PICTOGRAPHIC;
        } else if (e < 127374) {
          if (e < 127358) {
            if (127340 <= e && e <= 127345) return t.EXTENDED_PICTOGRAPHIC;
          } else if (127358 <= e && e <= 127359) return t.EXTENDED_PICTOGRAPHIC;
        } else if (e < 127377) {
          if (e === 127374) return t.EXTENDED_PICTOGRAPHIC;
        } else if (e < 127405) {
          if (127377 <= e && e <= 127386) return t.EXTENDED_PICTOGRAPHIC;
        } else if (127405 <= e && e <= 127461) return t.EXTENDED_PICTOGRAPHIC;
      } else if (e < 128981) {
        if (e < 127561) {
          if (e < 127535) {
            if (e < 127514) {
              if (127489 <= e && e <= 127503) return t.EXTENDED_PICTOGRAPHIC;
            } else if (e === 127514) return t.EXTENDED_PICTOGRAPHIC;
          } else if (e < 127538) {
            if (e === 127535) return t.EXTENDED_PICTOGRAPHIC;
          } else if (e < 127548) {
            if (127538 <= e && e <= 127546) return t.EXTENDED_PICTOGRAPHIC;
          } else if (127548 <= e && e <= 127551) return t.EXTENDED_PICTOGRAPHIC;
        } else if (e < 128326) {
          if (e < 128e3) {
            if (127561 <= e && e <= 127994) return t.EXTENDED_PICTOGRAPHIC;
          } else if (128e3 <= e && e <= 128317) return t.EXTENDED_PICTOGRAPHIC;
        } else if (e < 128640) {
          if (128326 <= e && e <= 128591) return t.EXTENDED_PICTOGRAPHIC;
        } else if (e < 128884) {
          if (128640 <= e && e <= 128767) return t.EXTENDED_PICTOGRAPHIC;
        } else if (128884 <= e && e <= 128895) return t.EXTENDED_PICTOGRAPHIC;
      } else if (e < 129198) {
        if (e < 129096) {
          if (e < 129036) {
            if (128981 <= e && e <= 129023) return t.EXTENDED_PICTOGRAPHIC;
          } else if (129036 <= e && e <= 129039) return t.EXTENDED_PICTOGRAPHIC;
        } else if (e < 129114) {
          if (129096 <= e && e <= 129103) return t.EXTENDED_PICTOGRAPHIC;
        } else if (e < 129160) {
          if (129114 <= e && e <= 129119) return t.EXTENDED_PICTOGRAPHIC;
        } else if (129160 <= e && e <= 129167) return t.EXTENDED_PICTOGRAPHIC;
      } else if (e < 129340) {
        if (e < 129292) {
          if (129198 <= e && e <= 129279) return t.EXTENDED_PICTOGRAPHIC;
        } else if (129292 <= e && e <= 129338) return t.EXTENDED_PICTOGRAPHIC;
      } else if (e < 129351) {
        if (129340 <= e && e <= 129349) return t.EXTENDED_PICTOGRAPHIC;
      } else if (e < 130048) {
        if (129351 <= e && e <= 129791) return t.EXTENDED_PICTOGRAPHIC;
      } else if (130048 <= e && e <= 131069) return t.EXTENDED_PICTOGRAPHIC;
      return t.CLUSTER_BREAK.OTHER;
    }
  }
  return (Ht.default = s), Ht;
}
var Bl;
function nh() {
  if (Bl) return Ft;
  Bl = 1;
  var r =
    (Ft && Ft.__importDefault) ||
    function (n) {
      return n && n.__esModule ? n : { default: n };
    };
  Object.defineProperty(Ft, "__esModule", { value: !0 });
  const t = r(rh());
  return (Ft.default = t.default), Ft;
}
var ih = nh();
const sh = yc(ih);
new sh();
const ah = [
  { name: "Loader", tag: "@loader", directory: "loader", isPublic: !0 },
  { name: "Connect", tag: "@connect", directory: "connect", isPublic: !0 },
  {
    name: "Moderator",
    tag: "@moderator",
    directory: "moderator",
    isPublic: !0,
  },
  {
    name: "Tee K.O. Web",
    tag: "@teeko-web",
    directory: "teeko-web",
    isPublic: !0,
  },
];
let fh = [];
const uh = [...ah, ...fh],
  e0 = Object.prototype.toString;
function Ja(r) {
  switch (e0.call(r)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return !0;
    default:
      return Dt(r, Error);
  }
}
function nr(r, t) {
  return e0.call(r) === `[object ${t}]`;
}
function t0(r) {
  return nr(r, "ErrorEvent");
}
function Ul(r) {
  return nr(r, "DOMError");
}
function oh(r) {
  return nr(r, "DOMException");
}
function ht(r) {
  return nr(r, "String");
}
function Ya(r) {
  return (
    typeof r == "object" &&
    r !== null &&
    "__sentry_template_string__" in r &&
    "__sentry_template_values__" in r
  );
}
function Qa(r) {
  return (
    r === null || Ya(r) || (typeof r != "object" && typeof r != "function")
  );
}
function Yt(r) {
  return nr(r, "Object");
}
function Zr(r) {
  return typeof Event < "u" && Dt(r, Event);
}
function lh(r) {
  return typeof Element < "u" && Dt(r, Element);
}
function ch(r) {
  return nr(r, "RegExp");
}
function en(r) {
  return !!(r && r.then && typeof r.then == "function");
}
function ph(r) {
  return (
    Yt(r) &&
    "nativeEvent" in r &&
    "preventDefault" in r &&
    "stopPropagation" in r
  );
}
function Dt(r, t) {
  try {
    return r instanceof t;
  } catch {
    return !1;
  }
}
function r0(r) {
  return !!(typeof r == "object" && r !== null && (r.__isVue || r._isVue));
}
function Jt(r, t = 0) {
  return typeof r != "string" || t === 0 || r.length <= t
    ? r
    : `${r.slice(0, t)}...`;
}
function Kl(r, t) {
  if (!Array.isArray(r)) return "";
  const n = [];
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    try {
      r0(s) ? n.push("[VueViewModel]") : n.push(String(s));
    } catch {
      n.push("[value cannot be serialized]");
    }
  }
  return n.join(t);
}
function Eh(r, t, n = !1) {
  return ht(r)
    ? ch(t)
      ? t.test(r)
      : ht(t)
      ? n
        ? r === t
        : r.includes(t)
      : !1
    : !1;
}
function tn(r, t = [], n = !1) {
  return t.some((i) => Eh(r, i, n));
}
function hh(r, t, n = 250, i, s, f, e) {
  if (
    !f.exception ||
    !f.exception.values ||
    !e ||
    !Dt(e.originalException, Error)
  )
    return;
  const l =
    f.exception.values.length > 0
      ? f.exception.values[f.exception.values.length - 1]
      : void 0;
  l &&
    (f.exception.values = xh(
      Ra(r, t, s, e.originalException, i, f.exception.values, l, 0),
      n
    ));
}
function Ra(r, t, n, i, s, f, e, l) {
  if (f.length >= n + 1) return f;
  let p = [...f];
  if (Dt(i[s], Error)) {
    wl(e, l);
    const x = r(t, i[s]),
      R = p.length;
    Nl(x, s, R, l), (p = Ra(r, t, n, i[s], s, [x, ...p], x, R));
  }
  return (
    Array.isArray(i.errors) &&
      i.errors.forEach((x, R) => {
        if (Dt(x, Error)) {
          wl(e, l);
          const S = r(t, x),
            v = p.length;
          Nl(S, `errors[${R}]`, v, l), (p = Ra(r, t, n, x, s, [S, ...p], S, v));
        }
      }),
    p
  );
}
function wl(r, t) {
  (r.mechanism = r.mechanism || { type: "generic", handled: !0 }),
    (r.mechanism = {
      ...r.mechanism,
      ...(r.type === "AggregateError" && { is_exception_group: !0 }),
      exception_id: t,
    });
}
function Nl(r, t, n, i) {
  (r.mechanism = r.mechanism || { type: "generic", handled: !0 }),
    (r.mechanism = {
      ...r.mechanism,
      type: "chained",
      source: t,
      exception_id: n,
      parent_id: i,
    });
}
function xh(r, t) {
  return r.map((n) => (n.value && (n.value = Jt(n.value, t)), n));
}
function n0(r) {
  if (r !== void 0)
    return r >= 400 && r < 500 ? "warning" : r >= 500 ? "error" : void 0;
}
const It = "8.38.0",
  ve = globalThis;
function rn(r, t, n) {
  const i = n || ve,
    s = (i.__SENTRY__ = i.__SENTRY__ || {}),
    f = (s[It] = s[It] || {});
  return f[r] || (f[r] = t());
}
const Za = ve,
  _h = 80;
function i0(r, t = {}) {
  if (!r) return "<unknown>";
  try {
    let n = r;
    const i = 5,
      s = [];
    let f = 0,
      e = 0;
    const l = " > ",
      p = l.length;
    let x;
    const R = Array.isArray(t) ? t : t.keyAttrs,
      S = (!Array.isArray(t) && t.maxStringLength) || _h;
    for (
      ;
      n &&
      f++ < i &&
      ((x = Rh(n, R)),
      !(x === "html" || (f > 1 && e + s.length * p + x.length >= S)));

    )
      s.push(x), (e += x.length), (n = n.parentNode);
    return s.reverse().join(l);
  } catch {
    return "<unknown>";
  }
}
function Rh(r, t) {
  const n = r,
    i = [];
  if (!n || !n.tagName) return "";
  if (Za.HTMLElement && n instanceof HTMLElement && n.dataset) {
    if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
    if (n.dataset.sentryElement) return n.dataset.sentryElement;
  }
  i.push(n.tagName.toLowerCase());
  const s =
    t && t.length
      ? t.filter((e) => n.getAttribute(e)).map((e) => [e, n.getAttribute(e)])
      : null;
  if (s && s.length)
    s.forEach((e) => {
      i.push(`[${e[0]}="${e[1]}"]`);
    });
  else {
    n.id && i.push(`#${n.id}`);
    const e = n.className;
    if (e && ht(e)) {
      const l = e.split(/\s+/);
      for (const p of l) i.push(`.${p}`);
    }
  }
  const f = ["aria-label", "type", "name", "title", "alt"];
  for (const e of f) {
    const l = n.getAttribute(e);
    l && i.push(`[${e}="${l}"]`);
  }
  return i.join("");
}
function yh() {
  try {
    return Za.document.location.href;
  } catch {
    return "";
  }
}
function gh(r) {
  if (!Za.HTMLElement) return null;
  let t = r;
  const n = 5;
  for (let i = 0; i < n; i++) {
    if (!t) return null;
    if (t instanceof HTMLElement) {
      if (t.dataset.sentryComponent) return t.dataset.sentryComponent;
      if (t.dataset.sentryElement) return t.dataset.sentryElement;
    }
    t = t.parentNode;
  }
  return null;
}
const ir = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  bh = "Sentry Logger ",
  ya = ["debug", "info", "warn", "error", "log", "assert", "trace"],
  qr = {};
function gr(r) {
  if (!("console" in ve)) return r();
  const t = ve.console,
    n = {},
    i = Object.keys(qr);
  i.forEach((s) => {
    const f = qr[s];
    (n[s] = t[s]), (t[s] = f);
  });
  try {
    return r();
  } finally {
    i.forEach((s) => {
      t[s] = n[s];
    });
  }
}
function mh() {
  let r = !1;
  const t = {
    enable: () => {
      r = !0;
    },
    disable: () => {
      r = !1;
    },
    isEnabled: () => r,
  };
  return (
    ir
      ? ya.forEach((n) => {
          t[n] = (...i) => {
            r &&
              gr(() => {
                ve.console[n](`${bh}[${n}]:`, ...i);
              });
          };
        })
      : ya.forEach((n) => {
          t[n] = () => {};
        }),
    t
  );
}
const Re = rn("logger", mh),
  Th = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function Sh(r) {
  return r === "http" || r === "https";
}
function nn(r, t = !1) {
  const {
    host: n,
    path: i,
    pass: s,
    port: f,
    projectId: e,
    protocol: l,
    publicKey: p,
  } = r;
  return `${l}://${p}${t && s ? `:${s}` : ""}@${n}${f ? `:${f}` : ""}/${
    i && `${i}/`
  }${e}`;
}
function dh(r) {
  const t = Th.exec(r);
  if (!t) {
    gr(() => {
      console.error(`Invalid Sentry Dsn: ${r}`);
    });
    return;
  }
  const [n, i, s = "", f = "", e = "", l = ""] = t.slice(1);
  let p = "",
    x = l;
  const R = x.split("/");
  if ((R.length > 1 && ((p = R.slice(0, -1).join("/")), (x = R.pop())), x)) {
    const S = x.match(/^\d+/);
    S && (x = S[0]);
  }
  return s0({
    host: f,
    pass: s,
    path: p,
    projectId: x,
    port: e,
    protocol: n,
    publicKey: i,
  });
}
function s0(r) {
  return {
    protocol: r.protocol,
    publicKey: r.publicKey || "",
    pass: r.pass || "",
    host: r.host,
    port: r.port || "",
    path: r.path || "",
    projectId: r.projectId,
  };
}
function vh(r) {
  if (!ir) return !0;
  const { port: t, projectId: n, protocol: i } = r;
  return ["protocol", "publicKey", "host", "projectId"].find((e) =>
    r[e] ? !1 : (Re.error(`Invalid Sentry Dsn: ${e} missing`), !0)
  )
    ? !1
    : n.match(/^\d+$/)
    ? Sh(i)
      ? t && isNaN(parseInt(t, 10))
        ? (Re.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1)
        : !0
      : (Re.error(`Invalid Sentry Dsn: Invalid protocol ${i}`), !1)
    : (Re.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
}
function Lh(r) {
  const t = typeof r == "string" ? dh(r) : s0(r);
  if (!(!t || !vh(t))) return t;
}
class ut extends Error {
  constructor(t, n = "warn") {
    super(t),
      (this.message = t),
      (this.name = new.target.prototype.constructor.name),
      Object.setPrototypeOf(this, new.target.prototype),
      (this.logLevel = n);
  }
}
function Ze(r, t, n) {
  if (!(t in r)) return;
  const i = r[t],
    s = n(i);
  typeof s == "function" && a0(s, i), (r[t] = s);
}
function Ot(r, t, n) {
  try {
    Object.defineProperty(r, t, { value: n, writable: !0, configurable: !0 });
  } catch {
    ir && Re.log(`Failed to add non-enumerable property "${t}" to object`, r);
  }
}
function a0(r, t) {
  try {
    const n = t.prototype || {};
    (r.prototype = t.prototype = n), Ot(r, "__sentry_original__", t);
  } catch {}
}
function ef(r) {
  return r.__sentry_original__;
}
function Ah(r) {
  return Object.keys(r)
    .map((t) => `${encodeURIComponent(t)}=${encodeURIComponent(r[t])}`)
    .join("&");
}
function f0(r) {
  if (Ja(r))
    return { message: r.message, name: r.name, stack: r.stack, ...Dl(r) };
  if (Zr(r)) {
    const t = {
      type: r.type,
      target: Il(r.target),
      currentTarget: Il(r.currentTarget),
      ...Dl(r),
    };
    return (
      typeof CustomEvent < "u" && Dt(r, CustomEvent) && (t.detail = r.detail), t
    );
  } else return r;
}
function Il(r) {
  try {
    return lh(r) ? i0(r) : Object.prototype.toString.call(r);
  } catch {
    return "<unknown>";
  }
}
function Dl(r) {
  if (typeof r == "object" && r !== null) {
    const t = {};
    for (const n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    return t;
  } else return {};
}
function Ch(r, t = 40) {
  const n = Object.keys(f0(r));
  n.sort();
  const i = n[0];
  if (!i) return "[object has no keys]";
  if (i.length >= t) return Jt(i, t);
  for (let s = n.length; s > 0; s--) {
    const f = n.slice(0, s).join(", ");
    if (!(f.length > t)) return s === n.length ? f : Jt(f, t);
  }
  return "";
}
function nt(r) {
  return ga(r, new Map());
}
function ga(r, t) {
  if (Bh(r)) {
    const n = t.get(r);
    if (n !== void 0) return n;
    const i = {};
    t.set(r, i);
    for (const s of Object.getOwnPropertyNames(r))
      typeof r[s] < "u" && (i[s] = ga(r[s], t));
    return i;
  }
  if (Array.isArray(r)) {
    const n = t.get(r);
    if (n !== void 0) return n;
    const i = [];
    return (
      t.set(r, i),
      r.forEach((s) => {
        i.push(ga(s, t));
      }),
      i
    );
  }
  return r;
}
function Bh(r) {
  if (!Yt(r)) return !1;
  try {
    const t = Object.getPrototypeOf(r).constructor.name;
    return !t || t === "Object";
  } catch {
    return !0;
  }
}
const u0 = 50,
  Pt = "?",
  Ol = /\(error: (.*)\)/,
  Pl = /captureMessage|captureException/;
function o0(...r) {
  const t = r.sort((n, i) => n[0] - i[0]).map((n) => n[1]);
  return (n, i = 0, s = 0) => {
    const f = [],
      e = n.split(`
`);
    for (let l = i; l < e.length; l++) {
      const p = e[l];
      if (p.length > 1024) continue;
      const x = Ol.test(p) ? p.replace(Ol, "$1") : p;
      if (!x.match(/\S*Error: /)) {
        for (const R of t) {
          const S = R(x);
          if (S) {
            f.push(S);
            break;
          }
        }
        if (f.length >= u0 + s) break;
      }
    }
    return Kh(f.slice(s));
  };
}
function Uh(r) {
  return Array.isArray(r) ? o0(...r) : r;
}
function Kh(r) {
  if (!r.length) return [];
  const t = Array.from(r);
  return (
    /sentryWrapped/.test(Kr(t).function || "") && t.pop(),
    t.reverse(),
    Pl.test(Kr(t).function || "") &&
      (t.pop(), Pl.test(Kr(t).function || "") && t.pop()),
    t
      .slice(0, u0)
      .map((n) => ({
        ...n,
        filename: n.filename || Kr(t).filename,
        function: n.function || Pt,
      }))
  );
}
function Kr(r) {
  return r[r.length - 1] || {};
}
const ha = "<anonymous>";
function Lt(r) {
  try {
    return !r || typeof r != "function" ? ha : r.name || ha;
  } catch {
    return ha;
  }
}
function kl(r) {
  const t = r.exception;
  if (t) {
    const n = [];
    try {
      return (
        t.values.forEach((i) => {
          i.stacktrace.frames && n.push(...i.stacktrace.frames);
        }),
        n
      );
    } catch {
      return;
    }
  }
}
const Pr = {},
  Vl = {};
function Gt(r, t) {
  (Pr[r] = Pr[r] || []), Pr[r].push(t);
}
function Xt(r, t) {
  if (!Vl[r]) {
    Vl[r] = !0;
    try {
      t();
    } catch (n) {
      ir && Re.error(`Error while instrumenting ${r}`, n);
    }
  }
}
function at(r, t) {
  const n = r && Pr[r];
  if (n)
    for (const i of n)
      try {
        i(t);
      } catch (s) {
        ir &&
          Re.error(
            `Error while triggering instrumentation handler.
Type: ${r}
Name: ${Lt(i)}
Error:`,
            s
          );
      }
}
function wh(r) {
  const t = "console";
  Gt(t, r), Xt(t, Nh);
}
function Nh() {
  "console" in ve &&
    ya.forEach(function (r) {
      r in ve.console &&
        Ze(ve.console, r, function (t) {
          return (
            (qr[r] = t),
            function (...n) {
              at("console", { args: n, level: r });
              const s = qr[r];
              s && s.apply(ve.console, n);
            }
          );
        });
    });
}
const ba = ve;
function l0() {
  if (!("fetch" in ba)) return !1;
  try {
    return (
      new Headers(), new Request("http://www.example.com"), new Response(), !0
    );
  } catch {
    return !1;
  }
}
function ma(r) {
  return (
    r && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(r.toString())
  );
}
function Ih() {
  if (typeof EdgeRuntime == "string") return !0;
  if (!l0()) return !1;
  if (ma(ba.fetch)) return !0;
  let r = !1;
  const t = ba.document;
  if (t && typeof t.createElement == "function")
    try {
      const n = t.createElement("iframe");
      (n.hidden = !0),
        t.head.appendChild(n),
        n.contentWindow &&
          n.contentWindow.fetch &&
          (r = ma(n.contentWindow.fetch)),
        t.head.removeChild(n);
    } catch (n) {
      ir &&
        Re.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          n
        );
    }
  return r;
}
const c0 = 1e3;
function br() {
  return Date.now() / c0;
}
function Dh() {
  const { performance: r } = ve;
  if (!r || !r.now) return br;
  const t = Date.now() - r.now(),
    n = r.timeOrigin == null ? t : r.timeOrigin;
  return () => (n + r.now()) / c0;
}
const xt = Dh();
(() => {
  const { performance: r } = ve;
  if (!r || !r.now) return;
  const t = 3600 * 1e3,
    n = r.now(),
    i = Date.now(),
    s = r.timeOrigin ? Math.abs(r.timeOrigin + n - i) : t,
    f = s < t,
    e = r.timing && r.timing.navigationStart,
    p = typeof e == "number" ? Math.abs(e + n - i) : t,
    x = p < t;
  return f || x ? (s <= p ? r.timeOrigin : e) : i;
})();
function Oh(r, t) {
  const n = "fetch";
  Gt(n, r), Xt(n, () => Ph(void 0, t));
}
function Ph(r, t = !1) {
  (t && !Ih()) ||
    Ze(ve, "fetch", function (n) {
      return function (...i) {
        const { method: s, url: f } = kh(i),
          e = {
            args: i,
            fetchData: { method: s, url: f },
            startTimestamp: xt() * 1e3,
          };
        at("fetch", { ...e });
        const l = new Error().stack;
        return n.apply(ve, i).then(
          async (p) => (
            at("fetch", { ...e, endTimestamp: xt() * 1e3, response: p }), p
          ),
          (p) => {
            throw (
              (at("fetch", { ...e, endTimestamp: xt() * 1e3, error: p }),
              Ja(p) &&
                p.stack === void 0 &&
                ((p.stack = l), Ot(p, "framesToPop", 1)),
              p)
            );
          }
        );
      };
    });
}
function Ta(r, t) {
  return !!r && typeof r == "object" && !!r[t];
}
function Ml(r) {
  return typeof r == "string"
    ? r
    : r
    ? Ta(r, "url")
      ? r.url
      : r.toString
      ? r.toString()
      : ""
    : "";
}
function kh(r) {
  if (r.length === 0) return { method: "GET", url: "" };
  if (r.length === 2) {
    const [n, i] = r;
    return {
      url: Ml(n),
      method: Ta(i, "method") ? String(i.method).toUpperCase() : "GET",
    };
  }
  const t = r[0];
  return {
    url: Ml(t),
    method: Ta(t, "method") ? String(t.method).toUpperCase() : "GET",
  };
}
let wr = null;
function Vh(r) {
  const t = "error";
  Gt(t, r), Xt(t, Mh);
}
function Mh() {
  (wr = ve.onerror),
    (ve.onerror = function (r, t, n, i, s) {
      return (
        at("error", { column: i, error: s, line: n, msg: r, url: t }),
        wr && !wr.__SENTRY_LOADER__ ? wr.apply(this, arguments) : !1
      );
    }),
    (ve.onerror.__SENTRY_INSTRUMENTED__ = !0);
}
let Nr = null;
function qh(r) {
  const t = "unhandledrejection";
  Gt(t, r), Xt(t, Gh);
}
function Gh() {
  (Nr = ve.onunhandledrejection),
    (ve.onunhandledrejection = function (r) {
      return (
        at("unhandledrejection", r),
        Nr && !Nr.__SENTRY_LOADER__ ? Nr.apply(this, arguments) : !0
      );
    }),
    (ve.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
}
function Xh() {
  return "npm";
}
function jh() {
  const r = typeof WeakSet == "function",
    t = r ? new WeakSet() : [];
  function n(s) {
    if (r) return t.has(s) ? !0 : (t.add(s), !1);
    for (let f = 0; f < t.length; f++) if (t[f] === s) return !0;
    return t.push(s), !1;
  }
  function i(s) {
    if (r) t.delete(s);
    else
      for (let f = 0; f < t.length; f++)
        if (t[f] === s) {
          t.splice(f, 1);
          break;
        }
  }
  return [n, i];
}
function it() {
  const r = ve,
    t = r.crypto || r.msCrypto;
  let n = () => Math.random() * 16;
  try {
    if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
    t &&
      t.getRandomValues &&
      (n = () => {
        const i = new Uint8Array(1);
        return t.getRandomValues(i), i[0];
      });
  } catch {}
  return ("10000000100040008000" + 1e11).replace(/[018]/g, (i) =>
    (i ^ ((n() & 15) >> (i / 4))).toString(16)
  );
}
function p0(r) {
  return r.exception && r.exception.values ? r.exception.values[0] : void 0;
}
function dt(r) {
  const { message: t, event_id: n } = r;
  if (t) return t;
  const i = p0(r);
  return i
    ? i.type && i.value
      ? `${i.type}: ${i.value}`
      : i.type || i.value || n || "<unknown>"
    : n || "<unknown>";
}
function Sa(r, t, n) {
  const i = (r.exception = r.exception || {}),
    s = (i.values = i.values || []),
    f = (s[0] = s[0] || {});
  f.value || (f.value = t || ""), f.type || (f.type = "Error");
}
function Rr(r, t) {
  const n = p0(r);
  if (!n) return;
  const i = { type: "generic", handled: !0 },
    s = n.mechanism;
  if (((n.mechanism = { ...i, ...s, ...t }), t && "data" in t)) {
    const f = { ...(s && s.data), ...t.data };
    n.mechanism.data = f;
  }
}
function ql(r) {
  if (r && r.__sentry_captured__) return !0;
  try {
    Ot(r, "__sentry_captured__", !0);
  } catch {}
  return !1;
}
function E0(r) {
  return Array.isArray(r) ? r : [r];
}
function vt(r, t = 100, n = 1 / 0) {
  try {
    return da("", r, t, n);
  } catch (i) {
    return { ERROR: `**non-serializable** (${i})` };
  }
}
function h0(r, t = 3, n = 100 * 1024) {
  const i = vt(r, t);
  return Wh(i) > n ? h0(r, t - 1, n) : i;
}
function da(r, t, n = 1 / 0, i = 1 / 0, s = jh()) {
  const [f, e] = s;
  if (
    t == null ||
    ["boolean", "string"].includes(typeof t) ||
    (typeof t == "number" && Number.isFinite(t))
  )
    return t;
  const l = $h(r, t);
  if (!l.startsWith("[object ")) return l;
  if (t.__sentry_skip_normalization__) return t;
  const p =
    typeof t.__sentry_override_normalization_depth__ == "number"
      ? t.__sentry_override_normalization_depth__
      : n;
  if (p === 0) return l.replace("object ", "");
  if (f(t)) return "[Circular ~]";
  const x = t;
  if (x && typeof x.toJSON == "function")
    try {
      const d = x.toJSON();
      return da("", d, p - 1, i, s);
    } catch {}
  const R = Array.isArray(t) ? [] : {};
  let S = 0;
  const v = f0(t);
  for (const d in v) {
    if (!Object.prototype.hasOwnProperty.call(v, d)) continue;
    if (S >= i) {
      R[d] = "[MaxProperties ~]";
      break;
    }
    const I = v[d];
    (R[d] = da(d, I, p - 1, i, s)), S++;
  }
  return e(t), R;
}
function $h(r, t) {
  try {
    if (r === "domain" && t && typeof t == "object" && t._events)
      return "[Domain]";
    if (r === "domainEmitter") return "[DomainEmitter]";
    if (typeof global < "u" && t === global) return "[Global]";
    if (typeof window < "u" && t === window) return "[Window]";
    if (typeof document < "u" && t === document) return "[Document]";
    if (r0(t)) return "[VueViewModel]";
    if (ph(t)) return "[SyntheticEvent]";
    if (typeof t == "number" && !Number.isFinite(t)) return `[${t}]`;
    if (typeof t == "function") return `[Function: ${Lt(t)}]`;
    if (typeof t == "symbol") return `[${String(t)}]`;
    if (typeof t == "bigint") return `[BigInt: ${String(t)}]`;
    const n = Fh(t);
    return /^HTML(\w*)Element$/.test(n)
      ? `[HTMLElement: ${n}]`
      : `[object ${n}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function Fh(r) {
  const t = Object.getPrototypeOf(r);
  return t ? t.constructor.name : "null prototype";
}
function Hh(r) {
  return ~-encodeURI(r).split(/%..|./).length;
}
function Wh(r) {
  return Hh(JSON.stringify(r));
}
var Et;
(function (r) {
  r[(r.PENDING = 0)] = "PENDING";
  const n = 1;
  r[(r.RESOLVED = n)] = "RESOLVED";
  const i = 2;
  r[(r.REJECTED = i)] = "REJECTED";
})(Et || (Et = {}));
function kt(r) {
  return new rt((t) => {
    t(r);
  });
}
function Gr(r) {
  return new rt((t, n) => {
    n(r);
  });
}
class rt {
  constructor(t) {
    rt.prototype.__init.call(this),
      rt.prototype.__init2.call(this),
      rt.prototype.__init3.call(this),
      rt.prototype.__init4.call(this),
      (this._state = Et.PENDING),
      (this._handlers = []);
    try {
      t(this._resolve, this._reject);
    } catch (n) {
      this._reject(n);
    }
  }
  then(t, n) {
    return new rt((i, s) => {
      this._handlers.push([
        !1,
        (f) => {
          if (!t) i(f);
          else
            try {
              i(t(f));
            } catch (e) {
              s(e);
            }
        },
        (f) => {
          if (!n) s(f);
          else
            try {
              i(n(f));
            } catch (e) {
              s(e);
            }
        },
      ]),
        this._executeHandlers();
    });
  }
  catch(t) {
    return this.then((n) => n, t);
  }
  finally(t) {
    return new rt((n, i) => {
      let s, f;
      return this.then(
        (e) => {
          (f = !1), (s = e), t && t();
        },
        (e) => {
          (f = !0), (s = e), t && t();
        }
      ).then(() => {
        if (f) {
          i(s);
          return;
        }
        n(s);
      });
    });
  }
  __init() {
    this._resolve = (t) => {
      this._setResult(Et.RESOLVED, t);
    };
  }
  __init2() {
    this._reject = (t) => {
      this._setResult(Et.REJECTED, t);
    };
  }
  __init3() {
    this._setResult = (t, n) => {
      if (this._state === Et.PENDING) {
        if (en(n)) {
          n.then(this._resolve, this._reject);
          return;
        }
        (this._state = t), (this._value = n), this._executeHandlers();
      }
    };
  }
  __init4() {
    this._executeHandlers = () => {
      if (this._state === Et.PENDING) return;
      const t = this._handlers.slice();
      (this._handlers = []),
        t.forEach((n) => {
          n[0] ||
            (this._state === Et.RESOLVED && n[1](this._value),
            this._state === Et.REJECTED && n[2](this._value),
            (n[0] = !0));
        });
    };
  }
}
function zh(r) {
  const t = [];
  function n() {
    return r === void 0 || t.length < r;
  }
  function i(e) {
    return t.splice(t.indexOf(e), 1)[0] || Promise.resolve(void 0);
  }
  function s(e) {
    if (!n())
      return Gr(new ut("Not adding Promise because buffer limit was reached."));
    const l = e();
    return (
      t.indexOf(l) === -1 && t.push(l),
      l.then(() => i(l)).then(null, () => i(l).then(null, () => {})),
      l
    );
  }
  function f(e) {
    return new rt((l, p) => {
      let x = t.length;
      if (!x) return l(!0);
      const R = setTimeout(() => {
        e && e > 0 && l(!1);
      }, e);
      t.forEach((S) => {
        kt(S).then(() => {
          --x || (clearTimeout(R), l(!0));
        }, p);
      });
    });
  }
  return { $: t, add: s, drain: f };
}
function xa(r) {
  if (!r) return {};
  const t = r.match(
    /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
  );
  if (!t) return {};
  const n = t[6] || "",
    i = t[8] || "";
  return {
    host: t[4],
    path: t[5],
    protocol: t[2],
    search: n,
    hash: i,
    relative: t[5] + n + i,
  };
}
const Jh = ["fatal", "error", "warning", "log", "info", "debug"];
function Yh(r) {
  return r === "warn" ? "warning" : Jh.includes(r) ? r : "log";
}
const Qh = "sentry-",
  Zh = /^sentry-/;
function ex(r) {
  const t = tx(r);
  if (!t) return;
  const n = Object.entries(t).reduce((i, [s, f]) => {
    if (s.match(Zh)) {
      const e = s.slice(Qh.length);
      i[e] = f;
    }
    return i;
  }, {});
  if (Object.keys(n).length > 0) return n;
}
function tx(r) {
  if (!(!r || (!ht(r) && !Array.isArray(r))))
    return Array.isArray(r)
      ? r.reduce((t, n) => {
          const i = Gl(n);
          return (
            Object.entries(i).forEach(([s, f]) => {
              t[s] = f;
            }),
            t
          );
        }, {})
      : Gl(r);
}
function Gl(r) {
  return r
    .split(",")
    .map((t) => t.split("=").map((n) => decodeURIComponent(n.trim())))
    .reduce((t, [n, i]) => (n && i && (t[n] = i), t), {});
}
function mr(r, t = []) {
  return [r, t];
}
function rx(r, t) {
  const [n, i] = r;
  return [n, [...i, t]];
}
function Xl(r, t) {
  const n = r[1];
  for (const i of n) {
    const s = i[0].type;
    if (t(i, s)) return !0;
  }
  return !1;
}
function va(r) {
  return ve.__SENTRY__ && ve.__SENTRY__.encodePolyfill
    ? ve.__SENTRY__.encodePolyfill(r)
    : new TextEncoder().encode(r);
}
function nx(r) {
  const [t, n] = r;
  let i = JSON.stringify(t);
  function s(f) {
    typeof i == "string"
      ? (i = typeof f == "string" ? i + f : [va(i), f])
      : i.push(typeof f == "string" ? va(f) : f);
  }
  for (const f of n) {
    const [e, l] = f;
    if (
      (s(`
${JSON.stringify(e)}
`),
      typeof l == "string" || l instanceof Uint8Array)
    )
      s(l);
    else {
      let p;
      try {
        p = JSON.stringify(l);
      } catch {
        p = JSON.stringify(vt(l));
      }
      s(p);
    }
  }
  return typeof i == "string" ? i : ix(i);
}
function ix(r) {
  const t = r.reduce((s, f) => s + f.length, 0),
    n = new Uint8Array(t);
  let i = 0;
  for (const s of r) n.set(s, i), (i += s.length);
  return n;
}
function sx(r) {
  const t = typeof r.data == "string" ? va(r.data) : r.data;
  return [
    nt({
      type: "attachment",
      length: t.length,
      filename: r.filename,
      content_type: r.contentType,
      attachment_type: r.attachmentType,
    }),
    t,
  ];
}
const ax = {
  session: "session",
  sessions: "session",
  attachment: "attachment",
  transaction: "transaction",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile: "profile",
  profile_chunk: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor",
  feedback: "feedback",
  span: "span",
  statsd: "metric_bucket",
};
function jl(r) {
  return ax[r];
}
function x0(r) {
  if (!r || !r.sdk) return;
  const { name: t, version: n } = r.sdk;
  return { name: t, version: n };
}
function fx(r, t, n, i) {
  const s =
    r.sdkProcessingMetadata && r.sdkProcessingMetadata.dynamicSamplingContext;
  return {
    event_id: r.event_id,
    sent_at: new Date().toISOString(),
    ...(t && { sdk: t }),
    ...(!!n && i && { dsn: nn(i) }),
    ...(s && { trace: nt({ ...s }) }),
  };
}
function ux(r, t, n) {
  const i = [
    { type: "client_report" },
    { timestamp: br(), discarded_events: r },
  ];
  return mr(t ? { dsn: t } : {}, [i]);
}
const ox = 60 * 1e3;
function lx(r, t = Date.now()) {
  const n = parseInt(`${r}`, 10);
  if (!isNaN(n)) return n * 1e3;
  const i = Date.parse(`${r}`);
  return isNaN(i) ? ox : i - t;
}
function cx(r, t) {
  return r[t] || r.all || 0;
}
function px(r, t, n = Date.now()) {
  return cx(r, t) > n;
}
function Ex(r, { statusCode: t, headers: n }, i = Date.now()) {
  const s = { ...r },
    f = n && n["x-sentry-rate-limits"],
    e = n && n["retry-after"];
  if (f)
    for (const l of f.trim().split(",")) {
      const [p, x, , , R] = l.split(":", 5),
        S = parseInt(p, 10),
        v = (isNaN(S) ? 60 : S) * 1e3;
      if (!x) s.all = i + v;
      else
        for (const d of x.split(";"))
          d === "metric_bucket"
            ? (!R || R.split(";").includes("custom")) && (s[d] = i + v)
            : (s[d] = i + v);
    }
  else e ? (s.all = i + lx(e, i)) : t === 429 && (s.all = i + 60 * 1e3);
  return s;
}
function $l() {
  return { traceId: it(), spanId: it().substring(16) };
}
const Fl = new WeakMap();
function hx(r) {
  const t = ve._sentryDebugIds;
  if (!t) return {};
  let n;
  const i = Fl.get(r);
  return (
    i ? (n = i) : ((n = new Map()), Fl.set(r, n)),
    Object.keys(t).reduce((s, f) => {
      let e;
      const l = n.get(f);
      l ? (e = l) : ((e = r(f)), n.set(f, e));
      for (let p = e.length - 1; p >= 0; p--) {
        const x = e[p],
          R = x && x.filename;
        if (x && R) {
          s[R] = t[f];
          break;
        }
      }
      return s;
    }, {})
  );
}
const Ir = ve;
function xx() {
  const r = Ir.chrome,
    t = r && r.app && r.app.runtime,
    n = "history" in Ir && !!Ir.history.pushState && !!Ir.history.replaceState;
  return !t && n;
}
const Le = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function sn() {
  return tf(ve), ve;
}
function tf(r) {
  const t = (r.__SENTRY__ = r.__SENTRY__ || {});
  return (t.version = t.version || It), (t[It] = t[It] || {});
}
function _x(r) {
  const t = xt(),
    n = {
      sid: it(),
      init: !0,
      timestamp: t,
      started: t,
      duration: 0,
      status: "ok",
      errors: 0,
      ignoreDuration: !1,
      toJSON: () => yx(n),
    };
  return r && Qt(n, r), n;
}
function Qt(r, t = {}) {
  if (
    (t.user &&
      (!r.ipAddress && t.user.ip_address && (r.ipAddress = t.user.ip_address),
      !r.did &&
        !t.did &&
        (r.did = t.user.id || t.user.email || t.user.username)),
    (r.timestamp = t.timestamp || xt()),
    t.abnormal_mechanism && (r.abnormal_mechanism = t.abnormal_mechanism),
    t.ignoreDuration && (r.ignoreDuration = t.ignoreDuration),
    t.sid && (r.sid = t.sid.length === 32 ? t.sid : it()),
    t.init !== void 0 && (r.init = t.init),
    !r.did && t.did && (r.did = `${t.did}`),
    typeof t.started == "number" && (r.started = t.started),
    r.ignoreDuration)
  )
    r.duration = void 0;
  else if (typeof t.duration == "number") r.duration = t.duration;
  else {
    const n = r.timestamp - r.started;
    r.duration = n >= 0 ? n : 0;
  }
  t.release && (r.release = t.release),
    t.environment && (r.environment = t.environment),
    !r.ipAddress && t.ipAddress && (r.ipAddress = t.ipAddress),
    !r.userAgent && t.userAgent && (r.userAgent = t.userAgent),
    typeof t.errors == "number" && (r.errors = t.errors),
    t.status && (r.status = t.status);
}
function Rx(r, t) {
  let n = {};
  r.status === "ok" && (n = { status: "exited" }), Qt(r, n);
}
function yx(r) {
  return nt({
    sid: `${r.sid}`,
    init: r.init,
    started: new Date(r.started * 1e3).toISOString(),
    timestamp: new Date(r.timestamp * 1e3).toISOString(),
    status: r.status,
    errors: r.errors,
    did:
      typeof r.did == "number" || typeof r.did == "string"
        ? `${r.did}`
        : void 0,
    duration: r.duration,
    abnormal_mechanism: r.abnormal_mechanism,
    attrs: {
      release: r.release,
      environment: r.environment,
      ip_address: r.ipAddress,
      user_agent: r.userAgent,
    },
  });
}
const La = "_sentrySpan";
function Hl(r, t) {
  t ? Ot(r, La, t) : delete r[La];
}
function Wl(r) {
  return r[La];
}
const gx = 100;
class rf {
  constructor() {
    (this._notifyingListeners = !1),
      (this._scopeListeners = []),
      (this._eventProcessors = []),
      (this._breadcrumbs = []),
      (this._attachments = []),
      (this._user = {}),
      (this._tags = {}),
      (this._extra = {}),
      (this._contexts = {}),
      (this._sdkProcessingMetadata = {}),
      (this._propagationContext = $l());
  }
  clone() {
    const t = new rf();
    return (
      (t._breadcrumbs = [...this._breadcrumbs]),
      (t._tags = { ...this._tags }),
      (t._extra = { ...this._extra }),
      (t._contexts = { ...this._contexts }),
      (t._user = this._user),
      (t._level = this._level),
      (t._session = this._session),
      (t._transactionName = this._transactionName),
      (t._fingerprint = this._fingerprint),
      (t._eventProcessors = [...this._eventProcessors]),
      (t._requestSession = this._requestSession),
      (t._attachments = [...this._attachments]),
      (t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
      (t._propagationContext = { ...this._propagationContext }),
      (t._client = this._client),
      (t._lastEventId = this._lastEventId),
      Hl(t, Wl(this)),
      t
    );
  }
  setClient(t) {
    this._client = t;
  }
  setLastEventId(t) {
    this._lastEventId = t;
  }
  getClient() {
    return this._client;
  }
  lastEventId() {
    return this._lastEventId;
  }
  addScopeListener(t) {
    this._scopeListeners.push(t);
  }
  addEventProcessor(t) {
    return this._eventProcessors.push(t), this;
  }
  setUser(t) {
    return (
      (this._user = t || {
        email: void 0,
        id: void 0,
        ip_address: void 0,
        username: void 0,
      }),
      this._session && Qt(this._session, { user: t }),
      this._notifyScopeListeners(),
      this
    );
  }
  getUser() {
    return this._user;
  }
  getRequestSession() {
    return this._requestSession;
  }
  setRequestSession(t) {
    return (this._requestSession = t), this;
  }
  setTags(t) {
    return (
      (this._tags = { ...this._tags, ...t }), this._notifyScopeListeners(), this
    );
  }
  setTag(t, n) {
    return (
      (this._tags = { ...this._tags, [t]: n }),
      this._notifyScopeListeners(),
      this
    );
  }
  setExtras(t) {
    return (
      (this._extra = { ...this._extra, ...t }),
      this._notifyScopeListeners(),
      this
    );
  }
  setExtra(t, n) {
    return (
      (this._extra = { ...this._extra, [t]: n }),
      this._notifyScopeListeners(),
      this
    );
  }
  setFingerprint(t) {
    return (this._fingerprint = t), this._notifyScopeListeners(), this;
  }
  setLevel(t) {
    return (this._level = t), this._notifyScopeListeners(), this;
  }
  setTransactionName(t) {
    return (this._transactionName = t), this._notifyScopeListeners(), this;
  }
  setContext(t, n) {
    return (
      n === null ? delete this._contexts[t] : (this._contexts[t] = n),
      this._notifyScopeListeners(),
      this
    );
  }
  setSession(t) {
    return (
      t ? (this._session = t) : delete this._session,
      this._notifyScopeListeners(),
      this
    );
  }
  getSession() {
    return this._session;
  }
  update(t) {
    if (!t) return this;
    const n = typeof t == "function" ? t(this) : t,
      [i, s] =
        n instanceof Vt
          ? [n.getScopeData(), n.getRequestSession()]
          : Yt(n)
          ? [t, t.requestSession]
          : [],
      {
        tags: f,
        extra: e,
        user: l,
        contexts: p,
        level: x,
        fingerprint: R = [],
        propagationContext: S,
      } = i || {};
    return (
      (this._tags = { ...this._tags, ...f }),
      (this._extra = { ...this._extra, ...e }),
      (this._contexts = { ...this._contexts, ...p }),
      l && Object.keys(l).length && (this._user = l),
      x && (this._level = x),
      R.length && (this._fingerprint = R),
      S && (this._propagationContext = S),
      s && (this._requestSession = s),
      this
    );
  }
  clear() {
    return (
      (this._breadcrumbs = []),
      (this._tags = {}),
      (this._extra = {}),
      (this._user = {}),
      (this._contexts = {}),
      (this._level = void 0),
      (this._transactionName = void 0),
      (this._fingerprint = void 0),
      (this._requestSession = void 0),
      (this._session = void 0),
      Hl(this, void 0),
      (this._attachments = []),
      (this._propagationContext = $l()),
      this._notifyScopeListeners(),
      this
    );
  }
  addBreadcrumb(t, n) {
    const i = typeof n == "number" ? n : gx;
    if (i <= 0) return this;
    const s = { timestamp: br(), ...t },
      f = this._breadcrumbs;
    return (
      f.push(s),
      (this._breadcrumbs = f.length > i ? f.slice(-i) : f),
      this._notifyScopeListeners(),
      this
    );
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
  }
  addAttachment(t) {
    return this._attachments.push(t), this;
  }
  clearAttachments() {
    return (this._attachments = []), this;
  }
  getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: Wl(this),
    };
  }
  setSDKProcessingMetadata(t) {
    return (
      (this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...t }),
      this
    );
  }
  setPropagationContext(t) {
    return (this._propagationContext = t), this;
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(t, n) {
    const i = n && n.event_id ? n.event_id : it();
    if (!this._client)
      return (
        Re.warn("No client configured on scope - will not capture exception!"),
        i
      );
    const s = new Error("Sentry syntheticException");
    return (
      this._client.captureException(
        t,
        { originalException: t, syntheticException: s, ...n, event_id: i },
        this
      ),
      i
    );
  }
  captureMessage(t, n, i) {
    const s = i && i.event_id ? i.event_id : it();
    if (!this._client)
      return (
        Re.warn("No client configured on scope - will not capture message!"), s
      );
    const f = new Error(t);
    return (
      this._client.captureMessage(
        t,
        n,
        { originalException: t, syntheticException: f, ...i, event_id: s },
        this
      ),
      s
    );
  }
  captureEvent(t, n) {
    const i = n && n.event_id ? n.event_id : it();
    return this._client
      ? (this._client.captureEvent(t, { ...n, event_id: i }, this), i)
      : (Re.warn("No client configured on scope - will not capture event!"), i);
  }
  _notifyScopeListeners() {
    this._notifyingListeners ||
      ((this._notifyingListeners = !0),
      this._scopeListeners.forEach((t) => {
        t(this);
      }),
      (this._notifyingListeners = !1));
  }
}
const Vt = rf;
function bx() {
  return rn("defaultCurrentScope", () => new Vt());
}
function mx() {
  return rn("defaultIsolationScope", () => new Vt());
}
class Tx {
  constructor(t, n) {
    let i;
    t ? (i = t) : (i = new Vt());
    let s;
    n ? (s = n) : (s = new Vt()),
      (this._stack = [{ scope: i }]),
      (this._isolationScope = s);
  }
  withScope(t) {
    const n = this._pushScope();
    let i;
    try {
      i = t(n);
    } catch (s) {
      throw (this._popScope(), s);
    }
    return en(i)
      ? i.then(
          (s) => (this._popScope(), s),
          (s) => {
            throw (this._popScope(), s);
          }
        )
      : (this._popScope(), i);
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getIsolationScope() {
    return this._isolationScope;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  _pushScope() {
    const t = this.getScope().clone();
    return this._stack.push({ client: this.getClient(), scope: t }), t;
  }
  _popScope() {
    return this._stack.length <= 1 ? !1 : !!this._stack.pop();
  }
}
function Zt() {
  const r = sn(),
    t = tf(r);
  return (t.stack = t.stack || new Tx(bx(), mx()));
}
function Sx(r) {
  return Zt().withScope(r);
}
function dx(r, t) {
  const n = Zt();
  return n.withScope(() => ((n.getStackTop().scope = r), t(r)));
}
function zl(r) {
  return Zt().withScope(() => r(Zt().getIsolationScope()));
}
function vx() {
  return {
    withIsolationScope: zl,
    withScope: Sx,
    withSetScope: dx,
    withSetIsolationScope: (r, t) => zl(t),
    getCurrentScope: () => Zt().getScope(),
    getIsolationScope: () => Zt().getIsolationScope(),
  };
}
function nf(r) {
  const t = tf(r);
  return t.acs ? t.acs : vx();
}
function _t() {
  const r = sn();
  return nf(r).getCurrentScope();
}
function sr() {
  const r = sn();
  return nf(r).getIsolationScope();
}
function Lx() {
  return rn("globalScope", () => new Vt());
}
function Ax(...r) {
  const t = sn(),
    n = nf(t);
  if (r.length === 2) {
    const [i, s] = r;
    return i ? n.withSetScope(i, s) : n.withScope(s);
  }
  return n.withScope(r[0]);
}
function Fe() {
  return _t().getClient();
}
const Cx = "_sentryMetrics";
function Bx(r) {
  const t = r[Cx];
  if (!t) return;
  const n = {};
  for (const [, [i, s]] of t) (n[i] || (n[i] = [])).push(nt(s));
  return n;
}
const Ux = "sentry.source",
  Kx = "sentry.sample_rate",
  wx = "sentry.op",
  Nx = "sentry.origin",
  Ix = 0,
  Dx = 1,
  Ox = 1;
function Px(r) {
  const { spanId: t, traceId: n } = r.spanContext(),
    { parent_span_id: i } = Xr(r);
  return nt({ parent_span_id: i, span_id: t, trace_id: n });
}
function Jl(r) {
  return typeof r == "number"
    ? Yl(r)
    : Array.isArray(r)
    ? r[0] + r[1] / 1e9
    : r instanceof Date
    ? Yl(r.getTime())
    : xt();
}
function Yl(r) {
  return r > 9999999999 ? r / 1e3 : r;
}
function Xr(r) {
  if (Vx(r)) return r.getSpanJSON();
  try {
    const { spanId: t, traceId: n } = r.spanContext();
    if (kx(r)) {
      const {
        attributes: i,
        startTime: s,
        name: f,
        endTime: e,
        parentSpanId: l,
        status: p,
      } = r;
      return nt({
        span_id: t,
        trace_id: n,
        data: i,
        description: f,
        parent_span_id: l,
        start_timestamp: Jl(s),
        timestamp: Jl(e) || void 0,
        status: qx(p),
        op: i[wx],
        origin: i[Nx],
        _metrics_summary: Bx(r),
      });
    }
    return { span_id: t, trace_id: n };
  } catch {
    return {};
  }
}
function kx(r) {
  const t = r;
  return (
    !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
  );
}
function Vx(r) {
  return typeof r.getSpanJSON == "function";
}
function Mx(r) {
  const { traceFlags: t } = r.spanContext();
  return t === Ox;
}
function qx(r) {
  if (!(!r || r.code === Ix))
    return r.code === Dx ? "ok" : r.message || "unknown_error";
}
const Gx = "_sentryRootSpan";
function _0(r) {
  return r[Gx] || r;
}
function Xx(r) {
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
  const t = Fe(),
    n = t && t.getOptions();
  return (
    !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
  );
}
const sf = "production",
  jx = "_frozenDsc";
function R0(r, t) {
  const n = t.getOptions(),
    { publicKey: i } = t.getDsn() || {},
    s = nt({
      environment: n.environment || sf,
      release: n.release,
      public_key: i,
      trace_id: r,
    });
  return t.emit("createDsc", s), s;
}
function $x(r) {
  const t = Fe();
  if (!t) return {};
  const n = R0(Xr(r).trace_id || "", t),
    i = _0(r),
    s = i[jx];
  if (s) return s;
  const f = i.spanContext().traceState,
    e = f && f.get("sentry.dsc"),
    l = e && ex(e);
  if (l) return l;
  const p = Xr(i),
    x = p.data || {},
    R = x[Kx];
  R != null && (n.sample_rate = `${R}`);
  const S = x[Ux],
    v = p.description;
  return (
    S !== "url" && v && (n.transaction = v),
    Xx() && (n.sampled = String(Mx(i))),
    t.emit("createDsc", n, i),
    n
  );
}
function Fx(r) {
  if (typeof r == "boolean") return Number(r);
  const t = typeof r == "string" ? parseFloat(r) : r;
  if (typeof t != "number" || isNaN(t) || t < 0 || t > 1) {
    Le &&
      Re.warn(
        `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
          r
        )} of type ${JSON.stringify(typeof r)}.`
      );
    return;
  }
  return t;
}
function Hx(r, t) {
  return (
    t &&
      ((r.sdk = r.sdk || {}),
      (r.sdk.name = r.sdk.name || t.name),
      (r.sdk.version = r.sdk.version || t.version),
      (r.sdk.integrations = [
        ...(r.sdk.integrations || []),
        ...(t.integrations || []),
      ]),
      (r.sdk.packages = [...(r.sdk.packages || []), ...(t.packages || [])])),
    r
  );
}
function Wx(r, t, n, i) {
  const s = x0(n),
    f = {
      sent_at: new Date().toISOString(),
      ...(s && { sdk: s }),
      ...(!!i && t && { dsn: nn(t) }),
    },
    e =
      "aggregates" in r
        ? [{ type: "sessions" }, r]
        : [{ type: "session" }, r.toJSON()];
  return mr(f, [e]);
}
function zx(r, t, n, i) {
  const s = x0(n),
    f = r.type && r.type !== "replay_event" ? r.type : "event";
  Hx(r, n && n.sdk);
  const e = fx(r, s, i, t);
  return delete r.sdkProcessingMetadata, mr(e, [[{ type: f }, r]]);
}
function Aa(r, t, n, i = 0) {
  return new rt((s, f) => {
    const e = r[i];
    if (t === null || typeof e != "function") s(t);
    else {
      const l = e({ ...t }, n);
      Le &&
        e.id &&
        l === null &&
        Re.log(`Event processor "${e.id}" dropped event`),
        en(l)
          ? l.then((p) => Aa(r, p, n, i + 1).then(s)).then(null, f)
          : Aa(r, l, n, i + 1)
              .then(s)
              .then(null, f);
    }
  });
}
function Jx(r, t) {
  const {
    fingerprint: n,
    span: i,
    breadcrumbs: s,
    sdkProcessingMetadata: f,
  } = t;
  Yx(r, t), i && e_(r, i), t_(r, n), Qx(r, s), Zx(r, f);
}
function Ql(r, t) {
  const {
    extra: n,
    tags: i,
    user: s,
    contexts: f,
    level: e,
    sdkProcessingMetadata: l,
    breadcrumbs: p,
    fingerprint: x,
    eventProcessors: R,
    attachments: S,
    propagationContext: v,
    transactionName: d,
    span: I,
  } = t;
  lr(r, "extra", n),
    lr(r, "tags", i),
    lr(r, "user", s),
    lr(r, "contexts", f),
    lr(r, "sdkProcessingMetadata", l),
    e && (r.level = e),
    d && (r.transactionName = d),
    I && (r.span = I),
    p.length && (r.breadcrumbs = [...r.breadcrumbs, ...p]),
    x.length && (r.fingerprint = [...r.fingerprint, ...x]),
    R.length && (r.eventProcessors = [...r.eventProcessors, ...R]),
    S.length && (r.attachments = [...r.attachments, ...S]),
    (r.propagationContext = { ...r.propagationContext, ...v });
}
function lr(r, t, n) {
  if (n && Object.keys(n).length) {
    r[t] = { ...r[t] };
    for (const i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[t][i] = n[i]);
  }
}
function Yx(r, t) {
  const {
      extra: n,
      tags: i,
      user: s,
      contexts: f,
      level: e,
      transactionName: l,
    } = t,
    p = nt(n);
  p && Object.keys(p).length && (r.extra = { ...p, ...r.extra });
  const x = nt(i);
  x && Object.keys(x).length && (r.tags = { ...x, ...r.tags });
  const R = nt(s);
  R && Object.keys(R).length && (r.user = { ...R, ...r.user });
  const S = nt(f);
  S && Object.keys(S).length && (r.contexts = { ...S, ...r.contexts }),
    e && (r.level = e),
    l && r.type !== "transaction" && (r.transaction = l);
}
function Qx(r, t) {
  const n = [...(r.breadcrumbs || []), ...t];
  r.breadcrumbs = n.length ? n : void 0;
}
function Zx(r, t) {
  r.sdkProcessingMetadata = { ...r.sdkProcessingMetadata, ...t };
}
function e_(r, t) {
  (r.contexts = { trace: Px(t), ...r.contexts }),
    (r.sdkProcessingMetadata = {
      dynamicSamplingContext: $x(t),
      ...r.sdkProcessingMetadata,
    });
  const n = _0(t),
    i = Xr(n).description;
  i && !r.transaction && r.type === "transaction" && (r.transaction = i);
}
function t_(r, t) {
  (r.fingerprint = r.fingerprint ? E0(r.fingerprint) : []),
    t && (r.fingerprint = r.fingerprint.concat(t)),
    r.fingerprint && !r.fingerprint.length && delete r.fingerprint;
}
function r_(r, t, n, i, s, f) {
  const { normalizeDepth: e = 3, normalizeMaxBreadth: l = 1e3 } = r,
    p = {
      ...t,
      event_id: t.event_id || n.event_id || it(),
      timestamp: t.timestamp || br(),
    },
    x = n.integrations || r.integrations.map((N) => N.name);
  n_(p, r),
    a_(p, x),
    s && s.emit("applyFrameMetadata", t),
    t.type === void 0 && i_(p, r.stackParser);
  const R = u_(i, n.captureContext);
  n.mechanism && Rr(p, n.mechanism);
  const S = s ? s.getEventProcessors() : [],
    v = Lx().getScopeData();
  if (f) {
    const N = f.getScopeData();
    Ql(v, N);
  }
  if (R) {
    const N = R.getScopeData();
    Ql(v, N);
  }
  const d = [...(n.attachments || []), ...v.attachments];
  d.length && (n.attachments = d), Jx(p, v);
  const I = [...S, ...v.eventProcessors];
  return Aa(I, p, n).then(
    (N) => (N && s_(N), typeof e == "number" && e > 0 ? f_(N, e, l) : N)
  );
}
function n_(r, t) {
  const { environment: n, release: i, dist: s, maxValueLength: f = 250 } = t;
  "environment" in r || (r.environment = "environment" in t ? n : sf),
    r.release === void 0 && i !== void 0 && (r.release = i),
    r.dist === void 0 && s !== void 0 && (r.dist = s),
    r.message && (r.message = Jt(r.message, f));
  const e = r.exception && r.exception.values && r.exception.values[0];
  e && e.value && (e.value = Jt(e.value, f));
  const l = r.request;
  l && l.url && (l.url = Jt(l.url, f));
}
function i_(r, t) {
  const n = hx(t);
  try {
    r.exception.values.forEach((i) => {
      i.stacktrace.frames.forEach((s) => {
        s.filename && (s.debug_id = n[s.filename]);
      });
    });
  } catch {}
}
function s_(r) {
  const t = {};
  try {
    r.exception.values.forEach((i) => {
      i.stacktrace.frames.forEach((s) => {
        s.debug_id &&
          (s.abs_path
            ? (t[s.abs_path] = s.debug_id)
            : s.filename && (t[s.filename] = s.debug_id),
          delete s.debug_id);
      });
    });
  } catch {}
  if (Object.keys(t).length === 0) return;
  (r.debug_meta = r.debug_meta || {}),
    (r.debug_meta.images = r.debug_meta.images || []);
  const n = r.debug_meta.images;
  Object.entries(t).forEach(([i, s]) => {
    n.push({ type: "sourcemap", code_file: i, debug_id: s });
  });
}
function a_(r, t) {
  t.length > 0 &&
    ((r.sdk = r.sdk || {}),
    (r.sdk.integrations = [...(r.sdk.integrations || []), ...t]));
}
function f_(r, t, n) {
  if (!r) return null;
  const i = {
    ...r,
    ...(r.breadcrumbs && {
      breadcrumbs: r.breadcrumbs.map((s) => ({
        ...s,
        ...(s.data && { data: vt(s.data, t, n) }),
      })),
    }),
    ...(r.user && { user: vt(r.user, t, n) }),
    ...(r.contexts && { contexts: vt(r.contexts, t, n) }),
    ...(r.extra && { extra: vt(r.extra, t, n) }),
  };
  return (
    r.contexts &&
      r.contexts.trace &&
      i.contexts &&
      ((i.contexts.trace = r.contexts.trace),
      r.contexts.trace.data &&
        (i.contexts.trace.data = vt(r.contexts.trace.data, t, n))),
    r.spans &&
      (i.spans = r.spans.map((s) => ({
        ...s,
        ...(s.data && { data: vt(s.data, t, n) }),
      }))),
    i
  );
}
function u_(r, t) {
  if (!t) return r;
  const n = r ? r.clone() : new Vt();
  return n.update(t), n;
}
function o_(r, t) {
  return _t().captureException(r, void 0);
}
function l_(r, t) {
  const n = typeof t == "string" ? t : void 0,
    i = typeof t != "string" ? { captureContext: t } : void 0;
  return _t().captureMessage(r, n, i);
}
function y0(r, t) {
  return _t().captureEvent(r, t);
}
function g0(r) {
  sr().setTags(r);
}
function Zl(r) {
  const t = Fe(),
    n = sr(),
    i = _t(),
    { release: s, environment: f = sf } = (t && t.getOptions()) || {},
    { userAgent: e } = ve.navigator || {},
    l = _x({
      release: s,
      environment: f,
      user: i.getUser() || n.getUser(),
      ...(e && { userAgent: e }),
      ...r,
    }),
    p = n.getSession();
  return (
    p && p.status === "ok" && Qt(p, { status: "exited" }),
    b0(),
    n.setSession(l),
    i.setSession(l),
    l
  );
}
function b0() {
  const r = sr(),
    t = _t(),
    n = t.getSession() || r.getSession();
  n && Rx(n), m0(), r.setSession(), t.setSession();
}
function m0() {
  const r = sr(),
    t = _t(),
    n = Fe(),
    i = t.getSession() || r.getSession();
  i && n && n.captureSession(i);
}
function ec(r = !1) {
  if (r) {
    b0();
    return;
  }
  m0();
}
const c_ = "7";
function p_(r) {
  const t = r.protocol ? `${r.protocol}:` : "",
    n = r.port ? `:${r.port}` : "";
  return `${t}//${r.host}${n}${r.path ? `/${r.path}` : ""}/api/`;
}
function E_(r) {
  return `${p_(r)}${r.projectId}/envelope/`;
}
function h_(r, t) {
  return Ah({
    sentry_key: r.publicKey,
    sentry_version: c_,
    ...(t && { sentry_client: `${t.name}/${t.version}` }),
  });
}
function x_(r, t, n) {
  return t || `${E_(r)}?${h_(r, n)}`;
}
const tc = [];
function __(r) {
  const t = {};
  return (
    r.forEach((n) => {
      const { name: i } = n,
        s = t[i];
      (s && !s.isDefaultInstance && n.isDefaultInstance) || (t[i] = n);
    }),
    Object.values(t)
  );
}
function R_(r) {
  const t = r.defaultIntegrations || [],
    n = r.integrations;
  t.forEach((e) => {
    e.isDefaultInstance = !0;
  });
  let i;
  Array.isArray(n)
    ? (i = [...t, ...n])
    : typeof n == "function"
    ? (i = E0(n(t)))
    : (i = t);
  const s = __(i),
    f = s.findIndex((e) => e.name === "Debug");
  if (f > -1) {
    const [e] = s.splice(f, 1);
    s.push(e);
  }
  return s;
}
function y_(r, t) {
  const n = {};
  return (
    t.forEach((i) => {
      i && T0(r, i, n);
    }),
    n
  );
}
function rc(r, t) {
  for (const n of t) n && n.afterAllSetup && n.afterAllSetup(r);
}
function T0(r, t, n) {
  if (n[t.name]) {
    Le &&
      Re.log(`Integration skipped because it was already installed: ${t.name}`);
    return;
  }
  if (
    ((n[t.name] = t),
    tc.indexOf(t.name) === -1 &&
      typeof t.setupOnce == "function" &&
      (t.setupOnce(), tc.push(t.name)),
    t.setup && typeof t.setup == "function" && t.setup(r),
    typeof t.preprocessEvent == "function")
  ) {
    const i = t.preprocessEvent.bind(t);
    r.on("preprocessEvent", (s, f) => i(s, f, r));
  }
  if (typeof t.processEvent == "function") {
    const i = t.processEvent.bind(t),
      s = Object.assign((f, e) => i(f, e, r), { id: t.name });
    r.addEventProcessor(s);
  }
  Le && Re.log(`Integration installed: ${t.name}`);
}
const nc = "Not capturing exception because it's already been captured.";
class g_ {
  constructor(t) {
    if (
      ((this._options = t),
      (this._integrations = {}),
      (this._numProcessing = 0),
      (this._outcomes = {}),
      (this._hooks = {}),
      (this._eventProcessors = []),
      t.dsn
        ? (this._dsn = Lh(t.dsn))
        : Le && Re.warn("No DSN provided, client will not send events."),
      this._dsn)
    ) {
      const n = x_(this._dsn, t.tunnel, t._metadata ? t._metadata.sdk : void 0);
      this._transport = t.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...t.transportOptions,
        url: n,
      });
    }
  }
  captureException(t, n, i) {
    const s = it();
    if (ql(t)) return Le && Re.log(nc), s;
    const f = { event_id: s, ...n };
    return (
      this._process(
        this.eventFromException(t, f).then((e) => this._captureEvent(e, f, i))
      ),
      f.event_id
    );
  }
  captureMessage(t, n, i, s) {
    const f = { event_id: it(), ...i },
      e = Ya(t) ? t : String(t),
      l = Qa(t)
        ? this.eventFromMessage(e, n, f)
        : this.eventFromException(t, f);
    return (
      this._process(l.then((p) => this._captureEvent(p, f, s))), f.event_id
    );
  }
  captureEvent(t, n, i) {
    const s = it();
    if (n && n.originalException && ql(n.originalException))
      return Le && Re.log(nc), s;
    const f = { event_id: s, ...n },
      l = (t.sdkProcessingMetadata || {}).capturedSpanScope;
    return this._process(this._captureEvent(t, f, l || i)), f.event_id;
  }
  captureSession(t) {
    typeof t.release != "string"
      ? Le &&
        Re.warn("Discarded session because of missing or non-string release")
      : (this.sendSession(t), Qt(t, { init: !1 }));
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  flush(t) {
    const n = this._transport;
    return n
      ? (this.emit("flush"),
        this._isClientDoneProcessing(t).then((i) =>
          n.flush(t).then((s) => i && s)
        ))
      : kt(!0);
  }
  close(t) {
    return this.flush(t).then(
      (n) => ((this.getOptions().enabled = !1), this.emit("close"), n)
    );
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(t) {
    this._eventProcessors.push(t);
  }
  init() {
    (this._isEnabled() ||
      this._options.integrations.some(({ name: t }) =>
        t.startsWith("Spotlight")
      )) &&
      this._setupIntegrations();
  }
  getIntegrationByName(t) {
    return this._integrations[t];
  }
  addIntegration(t) {
    const n = this._integrations[t.name];
    T0(this, t, this._integrations), n || rc(this, [t]);
  }
  sendEvent(t, n = {}) {
    this.emit("beforeSendEvent", t, n);
    let i = zx(t, this._dsn, this._options._metadata, this._options.tunnel);
    for (const f of n.attachments || []) i = rx(i, sx(f));
    const s = this.sendEnvelope(i);
    s && s.then((f) => this.emit("afterSendEvent", t, f), null);
  }
  sendSession(t) {
    const n = Wx(t, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(n);
  }
  recordDroppedEvent(t, n, i) {
    if (this._options.sendClientReports) {
      const s = typeof i == "number" ? i : 1,
        f = `${t}:${n}`;
      Le && Re.log(`Recording outcome: "${f}"${s > 1 ? ` (${s} times)` : ""}`),
        (this._outcomes[f] = (this._outcomes[f] || 0) + s);
    }
  }
  on(t, n) {
    const i = (this._hooks[t] = this._hooks[t] || []);
    return (
      i.push(n),
      () => {
        const s = i.indexOf(n);
        s > -1 && i.splice(s, 1);
      }
    );
  }
  emit(t, ...n) {
    const i = this._hooks[t];
    i && i.forEach((s) => s(...n));
  }
  sendEnvelope(t) {
    return (
      this.emit("beforeEnvelope", t),
      this._isEnabled() && this._transport
        ? this._transport
            .send(t)
            .then(
              null,
              (n) => (Le && Re.error("Error while sending envelope:", n), n)
            )
        : (Le && Re.error("Transport disabled"), kt({}))
    );
  }
  _setupIntegrations() {
    const { integrations: t } = this._options;
    (this._integrations = y_(this, t)), rc(this, t);
  }
  _updateSessionFromEvent(t, n) {
    let i = !1,
      s = !1;
    const f = n.exception && n.exception.values;
    if (f) {
      s = !0;
      for (const p of f) {
        const x = p.mechanism;
        if (x && x.handled === !1) {
          i = !0;
          break;
        }
      }
    }
    const e = t.status === "ok";
    ((e && t.errors === 0) || (e && i)) &&
      (Qt(t, {
        ...(i && { status: "crashed" }),
        errors: t.errors || Number(s || i),
      }),
      this.captureSession(t));
  }
  _isClientDoneProcessing(t) {
    return new rt((n) => {
      let i = 0;
      const s = 1,
        f = setInterval(() => {
          this._numProcessing == 0
            ? (clearInterval(f), n(!0))
            : ((i += s), t && i >= t && (clearInterval(f), n(!1)));
        }, s);
    });
  }
  _isEnabled() {
    return this.getOptions().enabled !== !1 && this._transport !== void 0;
  }
  _prepareEvent(t, n, i, s = sr()) {
    const f = this.getOptions(),
      e = Object.keys(this._integrations);
    return (
      !n.integrations && e.length > 0 && (n.integrations = e),
      this.emit("preprocessEvent", t, n),
      t.type || s.setLastEventId(t.event_id || n.event_id),
      r_(f, t, n, i, this, s).then((l) => {
        if (l === null) return l;
        const p = {
          ...s.getPropagationContext(),
          ...(i ? i.getPropagationContext() : void 0),
        };
        if (!(l.contexts && l.contexts.trace) && p) {
          const { traceId: R, spanId: S, parentSpanId: v, dsc: d } = p;
          l.contexts = {
            trace: nt({ trace_id: R, span_id: S, parent_span_id: v }),
            ...l.contexts,
          };
          const I = d || R0(R, this);
          l.sdkProcessingMetadata = {
            dynamicSamplingContext: I,
            ...l.sdkProcessingMetadata,
          };
        }
        return l;
      })
    );
  }
  _captureEvent(t, n = {}, i) {
    return this._processEvent(t, n, i).then(
      (s) => s.event_id,
      (s) => {
        if (Le) {
          const f = s;
          f.logLevel === "log" ? Re.log(f.message) : Re.warn(f);
        }
      }
    );
  }
  _processEvent(t, n, i) {
    const s = this.getOptions(),
      { sampleRate: f } = s,
      e = d0(t),
      l = S0(t),
      p = t.type || "error",
      x = `before send for type \`${p}\``,
      R = typeof f > "u" ? void 0 : Fx(f);
    if (l && typeof R == "number" && Math.random() > R)
      return (
        this.recordDroppedEvent("sample_rate", "error", t),
        Gr(
          new ut(
            `Discarding event because it's not included in the random sample (sampling rate = ${f})`,
            "log"
          )
        )
      );
    const S = p === "replay_event" ? "replay" : p,
      d = (t.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
    return this._prepareEvent(t, n, i, d)
      .then((I) => {
        if (I === null)
          throw (
            (this.recordDroppedEvent("event_processor", S, t),
            new ut(
              "An event processor returned `null`, will not send event.",
              "log"
            ))
          );
        if (n.data && n.data.__sentry__ === !0) return I;
        const N = m_(this, s, I, n);
        return b_(N, x);
      })
      .then((I) => {
        if (I === null) {
          if ((this.recordDroppedEvent("before_send", S, t), e)) {
            const M = 1 + (t.spans || []).length;
            this.recordDroppedEvent("before_send", "span", M);
          }
          throw new ut(`${x} returned \`null\`, will not send event.`, "log");
        }
        const j = i && i.getSession();
        if ((!e && j && this._updateSessionFromEvent(j, I), e)) {
          const k =
              (I.sdkProcessingMetadata &&
                I.sdkProcessingMetadata.spanCountBeforeProcessing) ||
              0,
            M = I.spans ? I.spans.length : 0,
            ee = k - M;
          ee > 0 && this.recordDroppedEvent("before_send", "span", ee);
        }
        const N = I.transaction_info;
        if (e && N && I.transaction !== t.transaction) {
          const k = "custom";
          I.transaction_info = { ...N, source: k };
        }
        return this.sendEvent(I, n), I;
      })
      .then(null, (I) => {
        throw I instanceof ut
          ? I
          : (this.captureException(I, {
              data: { __sentry__: !0 },
              originalException: I,
            }),
            new ut(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${I}`));
      });
  }
  _process(t) {
    this._numProcessing++,
      t.then(
        (n) => (this._numProcessing--, n),
        (n) => (this._numProcessing--, n)
      );
  }
  _clearOutcomes() {
    const t = this._outcomes;
    return (
      (this._outcomes = {}),
      Object.entries(t).map(([n, i]) => {
        const [s, f] = n.split(":");
        return { reason: s, category: f, quantity: i };
      })
    );
  }
  _flushOutcomes() {
    Le && Re.log("Flushing outcomes...");
    const t = this._clearOutcomes();
    if (t.length === 0) {
      Le && Re.log("No outcomes to send");
      return;
    }
    if (!this._dsn) {
      Le && Re.log("No dsn provided, will not send outcomes");
      return;
    }
    Le && Re.log("Sending outcomes:", t);
    const n = ux(t, this._options.tunnel && nn(this._dsn));
    this.sendEnvelope(n);
  }
}
function b_(r, t) {
  const n = `${t} must return \`null\` or a valid event.`;
  if (en(r))
    return r.then(
      (i) => {
        if (!Yt(i) && i !== null) throw new ut(n);
        return i;
      },
      (i) => {
        throw new ut(`${t} rejected with ${i}`);
      }
    );
  if (!Yt(r) && r !== null) throw new ut(n);
  return r;
}
function m_(r, t, n, i) {
  const { beforeSend: s, beforeSendTransaction: f, beforeSendSpan: e } = t;
  if (S0(n) && s) return s(n, i);
  if (d0(n)) {
    if (n.spans && e) {
      const l = [];
      for (const p of n.spans) {
        const x = e(p);
        x ? l.push(x) : r.recordDroppedEvent("before_send", "span");
      }
      n.spans = l;
    }
    if (f) {
      if (n.spans) {
        const l = n.spans.length;
        n.sdkProcessingMetadata = {
          ...n.sdkProcessingMetadata,
          spanCountBeforeProcessing: l,
        };
      }
      return f(n, i);
    }
  }
  return n;
}
function S0(r) {
  return r.type === void 0;
}
function d0(r) {
  return r.type === "transaction";
}
function T_(r, t) {
  t.debug === !0 &&
    (Le
      ? Re.enable()
      : gr(() => {
          console.warn(
            "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
          );
        })),
    _t().update(t.initialScope);
  const i = new r(t);
  return S_(i), i.init(), i;
}
function S_(r) {
  _t().setClient(r);
}
const d_ = 64;
function v_(r, t, n = zh(r.bufferSize || d_)) {
  let i = {};
  const s = (e) => n.drain(e);
  function f(e) {
    const l = [];
    if (
      (Xl(e, (S, v) => {
        const d = jl(v);
        if (px(i, d)) {
          const I = ic(S, v);
          r.recordDroppedEvent("ratelimit_backoff", d, I);
        } else l.push(S);
      }),
      l.length === 0)
    )
      return kt({});
    const p = mr(e[0], l),
      x = (S) => {
        Xl(p, (v, d) => {
          const I = ic(v, d);
          r.recordDroppedEvent(S, jl(d), I);
        });
      },
      R = () =>
        t({ body: nx(p) }).then(
          (S) => (
            S.statusCode !== void 0 &&
              (S.statusCode < 200 || S.statusCode >= 300) &&
              Le &&
              Re.warn(
                `Sentry responded with status code ${S.statusCode} to sent event.`
              ),
            (i = Ex(i, S)),
            S
          ),
          (S) => {
            throw (x("network_error"), S);
          }
        );
    return n.add(R).then(
      (S) => S,
      (S) => {
        if (S instanceof ut)
          return (
            Le && Re.error("Skipped sending event because buffer is full."),
            x("queue_overflow"),
            kt({})
          );
        throw S;
      }
    );
  }
  return { send: f, flush: s };
}
function ic(r, t) {
  if (!(t !== "event" && t !== "transaction"))
    return Array.isArray(r) ? r[1] : void 0;
}
function L_(r, t, n = [t], i = "npm") {
  const s = r._metadata || {};
  s.sdk ||
    (s.sdk = {
      name: `sentry.javascript.${t}`,
      packages: n.map((f) => ({ name: `${i}:@sentry/${f}`, version: It })),
      version: It,
    }),
    (r._metadata = s);
}
const A_ = 100;
function Mt(r, t) {
  const n = Fe(),
    i = sr();
  if (!n) return;
  const { beforeBreadcrumb: s = null, maxBreadcrumbs: f = A_ } = n.getOptions();
  if (f <= 0) return;
  const l = { timestamp: br(), ...r },
    p = s ? gr(() => s(l, t)) : l;
  p !== null &&
    (n.emit && n.emit("beforeAddBreadcrumb", p, t), i.addBreadcrumb(p, f));
}
let sc;
const C_ = "FunctionToString",
  ac = new WeakMap(),
  B_ = () => ({
    name: C_,
    setupOnce() {
      sc = Function.prototype.toString;
      try {
        Function.prototype.toString = function (...r) {
          const t = ef(this),
            n = ac.has(Fe()) && t !== void 0 ? t : this;
          return sc.apply(n, r);
        };
      } catch {}
    },
    setup(r) {
      ac.set(r, !0);
    },
  }),
  U_ = B_,
  K_ = [
    /^Script error\.?$/,
    /^Javascript error: Script error\.? on line 0$/,
    /^ResizeObserver loop completed with undelivered notifications.$/,
    /^Cannot redefine property: googletag$/,
    "undefined is not an object (evaluating 'a.L')",
    `can't redefine non-configurable property "solana"`,
    "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
    "Can't find variable: _AutofillCallbackHandler",
  ],
  w_ = "InboundFilters",
  N_ = (r = {}) => ({
    name: w_,
    processEvent(t, n, i) {
      const s = i.getOptions(),
        f = D_(r, s);
      return O_(t, f) ? null : t;
    },
  }),
  I_ = N_;
function D_(r = {}, t = {}) {
  return {
    allowUrls: [...(r.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(r.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(r.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(r.disableErrorDefaults ? [] : K_),
    ],
    ignoreTransactions: [
      ...(r.ignoreTransactions || []),
      ...(t.ignoreTransactions || []),
    ],
    ignoreInternal: r.ignoreInternal !== void 0 ? r.ignoreInternal : !0,
  };
}
function O_(r, t) {
  return t.ignoreInternal && G_(r)
    ? (Le &&
        Re.warn(`Event dropped due to being internal Sentry Error.
Event: ${dt(r)}`),
      !0)
    : P_(r, t.ignoreErrors)
    ? (Le &&
        Re.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${dt(r)}`),
      !0)
    : j_(r)
    ? (Le &&
        Re.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${dt(r)}`),
      !0)
    : k_(r, t.ignoreTransactions)
    ? (Le &&
        Re.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${dt(r)}`),
      !0)
    : V_(r, t.denyUrls)
    ? (Le &&
        Re.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${dt(r)}.
Url: ${jr(r)}`),
      !0)
    : M_(r, t.allowUrls)
    ? !1
    : (Le &&
        Re.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${dt(r)}.
Url: ${jr(r)}`),
      !0);
}
function P_(r, t) {
  return r.type || !t || !t.length ? !1 : q_(r).some((n) => tn(n, t));
}
function k_(r, t) {
  if (r.type !== "transaction" || !t || !t.length) return !1;
  const n = r.transaction;
  return n ? tn(n, t) : !1;
}
function V_(r, t) {
  if (!t || !t.length) return !1;
  const n = jr(r);
  return n ? tn(n, t) : !1;
}
function M_(r, t) {
  if (!t || !t.length) return !0;
  const n = jr(r);
  return n ? tn(n, t) : !0;
}
function q_(r) {
  const t = [];
  r.message && t.push(r.message);
  let n;
  try {
    n = r.exception.values[r.exception.values.length - 1];
  } catch {}
  return (
    n &&
      n.value &&
      (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`)),
    t
  );
}
function G_(r) {
  try {
    return r.exception.values[0].type === "SentryError";
  } catch {}
  return !1;
}
function X_(r = []) {
  for (let t = r.length - 1; t >= 0; t--) {
    const n = r[t];
    if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]")
      return n.filename || null;
  }
  return null;
}
function jr(r) {
  try {
    let t;
    try {
      t = r.exception.values[0].stacktrace.frames;
    } catch {}
    return t ? X_(t) : null;
  } catch {
    return Le && Re.error(`Cannot extract url for event ${dt(r)}`), null;
  }
}
function j_(r) {
  return r.type ||
    !r.exception ||
    !r.exception.values ||
    r.exception.values.length === 0
    ? !1
    : !r.message &&
        !r.exception.values.some(
          (t) => t.stacktrace || (t.type && t.type !== "Error") || t.value
        );
}
const $_ = "Dedupe",
  F_ = () => {
    let r;
    return {
      name: $_,
      processEvent(t) {
        if (t.type) return t;
        try {
          if (W_(t, r))
            return (
              Le &&
                Re.warn(
                  "Event dropped due to being a duplicate of previously captured event."
                ),
              null
            );
        } catch {}
        return (r = t);
      },
    };
  },
  H_ = F_;
function W_(r, t) {
  return t ? !!(z_(r, t) || J_(r, t)) : !1;
}
function z_(r, t) {
  const n = r.message,
    i = t.message;
  return !(
    (!n && !i) ||
    (n && !i) ||
    (!n && i) ||
    n !== i ||
    !L0(r, t) ||
    !v0(r, t)
  );
}
function J_(r, t) {
  const n = fc(t),
    i = fc(r);
  return !(
    !n ||
    !i ||
    n.type !== i.type ||
    n.value !== i.value ||
    !L0(r, t) ||
    !v0(r, t)
  );
}
function v0(r, t) {
  let n = kl(r),
    i = kl(t);
  if (!n && !i) return !0;
  if ((n && !i) || (!n && i) || ((n = n), (i = i), i.length !== n.length))
    return !1;
  for (let s = 0; s < i.length; s++) {
    const f = i[s],
      e = n[s];
    if (
      f.filename !== e.filename ||
      f.lineno !== e.lineno ||
      f.colno !== e.colno ||
      f.function !== e.function
    )
      return !1;
  }
  return !0;
}
function L0(r, t) {
  let n = r.fingerprint,
    i = t.fingerprint;
  if (!n && !i) return !0;
  if ((n && !i) || (!n && i)) return !1;
  (n = n), (i = i);
  try {
    return n.join("") === i.join("");
  } catch {
    return !1;
  }
}
function fc(r) {
  return r.exception && r.exception.values && r.exception.values[0];
}
const Ae = ve;
let Ca = 0;
function A0() {
  return Ca > 0;
}
function Y_() {
  Ca++,
    setTimeout(() => {
      Ca--;
    });
}
function er(r, t = {}, n) {
  if (typeof r != "function") return r;
  try {
    const s = r.__sentry_wrapped__;
    if (s) return typeof s == "function" ? s : r;
    if (ef(r)) return r;
  } catch {
    return r;
  }
  const i = function () {
    const s = Array.prototype.slice.call(arguments);
    try {
      const f = s.map((e) => er(e, t));
      return r.apply(this, f);
    } catch (f) {
      throw (
        (Y_(),
        Ax((e) => {
          e.addEventProcessor(
            (l) => (
              t.mechanism && (Sa(l, void 0), Rr(l, t.mechanism)),
              (l.extra = { ...l.extra, arguments: s }),
              l
            )
          ),
            o_(f);
        }),
        f)
      );
    }
  };
  try {
    for (const s in r)
      Object.prototype.hasOwnProperty.call(r, s) && (i[s] = r[s]);
  } catch {}
  a0(i, r), Ot(r, "__sentry_wrapped__", i);
  try {
    Object.getOwnPropertyDescriptor(i, "name").configurable &&
      Object.defineProperty(i, "name", {
        get() {
          return r.name;
        },
      });
  } catch {}
  return i;
}
const Tr = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function af(r, t) {
  const n = ff(r, t),
    i = { type: rR(t), value: nR(t) };
  return (
    n.length && (i.stacktrace = { frames: n }),
    i.type === void 0 &&
      i.value === "" &&
      (i.value = "Unrecoverable error caught"),
    i
  );
}
function Q_(r, t, n, i) {
  const s = Fe(),
    f = s && s.getOptions().normalizeDepth,
    e = uR(t),
    l = { __serialized__: h0(t, f) };
  if (e) return { exception: { values: [af(r, e)] }, extra: l };
  const p = {
    exception: {
      values: [
        {
          type: Zr(t) ? t.constructor.name : i ? "UnhandledRejection" : "Error",
          value: aR(t, { isUnhandledRejection: i }),
        },
      ],
    },
    extra: l,
  };
  if (n) {
    const x = ff(r, n);
    x.length && (p.exception.values[0].stacktrace = { frames: x });
  }
  return p;
}
function _a(r, t) {
  return { exception: { values: [af(r, t)] } };
}
function ff(r, t) {
  const n = t.stacktrace || t.stack || "",
    i = eR(t),
    s = tR(t);
  try {
    return r(n, i, s);
  } catch {}
  return [];
}
const Z_ = /Minified React error #\d+;/i;
function eR(r) {
  return r && Z_.test(r.message) ? 1 : 0;
}
function tR(r) {
  return typeof r.framesToPop == "number" ? r.framesToPop : 0;
}
function C0(r) {
  return typeof WebAssembly < "u" && typeof WebAssembly.Exception < "u"
    ? r instanceof WebAssembly.Exception
    : !1;
}
function rR(r) {
  const t = r && r.name;
  return !t && C0(r)
    ? r.message && Array.isArray(r.message) && r.message.length == 2
      ? r.message[0]
      : "WebAssembly.Exception"
    : t;
}
function nR(r) {
  const t = r && r.message;
  return t
    ? t.error && typeof t.error.message == "string"
      ? t.error.message
      : C0(r) && Array.isArray(r.message) && r.message.length == 2
      ? r.message[1]
      : t
    : "No error message";
}
function iR(r, t, n, i) {
  const s = (n && n.syntheticException) || void 0,
    f = uf(r, t, s, i);
  return (
    Rr(f),
    (f.level = "error"),
    n && n.event_id && (f.event_id = n.event_id),
    kt(f)
  );
}
function sR(r, t, n = "info", i, s) {
  const f = (i && i.syntheticException) || void 0,
    e = Ba(r, t, f, s);
  return (e.level = n), i && i.event_id && (e.event_id = i.event_id), kt(e);
}
function uf(r, t, n, i, s) {
  let f;
  if (t0(t) && t.error) return _a(r, t.error);
  if (Ul(t) || oh(t)) {
    const e = t;
    if ("stack" in t) f = _a(r, t);
    else {
      const l = e.name || (Ul(e) ? "DOMError" : "DOMException"),
        p = e.message ? `${l}: ${e.message}` : l;
      (f = Ba(r, p, n, i)), Sa(f, p);
    }
    return (
      "code" in e && (f.tags = { ...f.tags, "DOMException.code": `${e.code}` }),
      f
    );
  }
  return Ja(t)
    ? _a(r, t)
    : Yt(t) || Zr(t)
    ? ((f = Q_(r, t, n, s)), Rr(f, { synthetic: !0 }), f)
    : ((f = Ba(r, t, n, i)), Sa(f, `${t}`), Rr(f, { synthetic: !0 }), f);
}
function Ba(r, t, n, i) {
  const s = {};
  if (i && n) {
    const f = ff(r, n);
    f.length &&
      (s.exception = { values: [{ value: t, stacktrace: { frames: f } }] });
  }
  if (Ya(t)) {
    const { __sentry_template_string__: f, __sentry_template_values__: e } = t;
    return (s.logentry = { message: f, params: e }), s;
  }
  return (s.message = t), s;
}
function aR(r, { isUnhandledRejection: t }) {
  const n = Ch(r),
    i = t ? "promise rejection" : "exception";
  return t0(r)
    ? `Event \`ErrorEvent\` captured as ${i} with message \`${r.message}\``
    : Zr(r)
    ? `Event \`${fR(r)}\` (type=${r.type}) captured as ${i}`
    : `Object captured as ${i} with keys: ${n}`;
}
function fR(r) {
  try {
    const t = Object.getPrototypeOf(r);
    return t ? t.constructor.name : void 0;
  } catch {}
}
function uR(r) {
  for (const t in r)
    if (Object.prototype.hasOwnProperty.call(r, t)) {
      const n = r[t];
      if (n instanceof Error) return n;
    }
}
function oR(r, { metadata: t, tunnel: n, dsn: i }) {
  const s = {
      event_id: r.event_id,
      sent_at: new Date().toISOString(),
      ...(t && t.sdk && { sdk: { name: t.sdk.name, version: t.sdk.version } }),
      ...(!!n && !!i && { dsn: nn(i) }),
    },
    f = lR(r);
  return mr(s, [f]);
}
function lR(r) {
  return [{ type: "user_report" }, r];
}
class cR extends g_ {
  constructor(t) {
    const n = { parentSpanIsAlwaysRootSpan: !0, ...t },
      i = Ae.SENTRY_SDK_SOURCE || Xh();
    L_(n, "browser", ["browser"], i),
      super(n),
      n.sendClientReports &&
        Ae.document &&
        Ae.document.addEventListener("visibilitychange", () => {
          Ae.document.visibilityState === "hidden" && this._flushOutcomes();
        });
  }
  eventFromException(t, n) {
    return iR(this._options.stackParser, t, n, this._options.attachStacktrace);
  }
  eventFromMessage(t, n = "info", i) {
    return sR(
      this._options.stackParser,
      t,
      n,
      i,
      this._options.attachStacktrace
    );
  }
  captureUserFeedback(t) {
    if (!this._isEnabled()) {
      Tr && Re.warn("SDK not enabled, will not capture user feedback.");
      return;
    }
    const n = oR(t, {
      metadata: this.getSdkMetadata(),
      dsn: this.getDsn(),
      tunnel: this.getOptions().tunnel,
    });
    this.sendEnvelope(n);
  }
  _prepareEvent(t, n, i) {
    return (
      (t.platform = t.platform || "javascript"), super._prepareEvent(t, n, i)
    );
  }
}
const pR = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  $e = ve,
  ER = 1e3;
let uc, Ua, Ka;
function hR(r) {
  const t = "dom";
  Gt(t, r), Xt(t, xR);
}
function xR() {
  if (!$e.document) return;
  const r = at.bind(null, "dom"),
    t = oc(r, !0);
  $e.document.addEventListener("click", t, !1),
    $e.document.addEventListener("keypress", t, !1),
    ["EventTarget", "Node"].forEach((n) => {
      const i = $e[n] && $e[n].prototype;
      !i ||
        !i.hasOwnProperty ||
        !i.hasOwnProperty("addEventListener") ||
        (Ze(i, "addEventListener", function (s) {
          return function (f, e, l) {
            if (f === "click" || f == "keypress")
              try {
                const p = this,
                  x = (p.__sentry_instrumentation_handlers__ =
                    p.__sentry_instrumentation_handlers__ || {}),
                  R = (x[f] = x[f] || { refCount: 0 });
                if (!R.handler) {
                  const S = oc(r);
                  (R.handler = S), s.call(this, f, S, l);
                }
                R.refCount++;
              } catch {}
            return s.call(this, f, e, l);
          };
        }),
        Ze(i, "removeEventListener", function (s) {
          return function (f, e, l) {
            if (f === "click" || f == "keypress")
              try {
                const p = this,
                  x = p.__sentry_instrumentation_handlers__ || {},
                  R = x[f];
                R &&
                  (R.refCount--,
                  R.refCount <= 0 &&
                    (s.call(this, f, R.handler, l),
                    (R.handler = void 0),
                    delete x[f]),
                  Object.keys(x).length === 0 &&
                    delete p.__sentry_instrumentation_handlers__);
              } catch {}
            return s.call(this, f, e, l);
          };
        }));
    });
}
function _R(r) {
  if (r.type !== Ua) return !1;
  try {
    if (!r.target || r.target._sentryId !== Ka) return !1;
  } catch {}
  return !0;
}
function RR(r, t) {
  return r !== "keypress"
    ? !1
    : !t || !t.tagName
    ? !0
    : !(
        t.tagName === "INPUT" ||
        t.tagName === "TEXTAREA" ||
        t.isContentEditable
      );
}
function oc(r, t = !1) {
  return (n) => {
    if (!n || n._sentryCaptured) return;
    const i = yR(n);
    if (RR(n.type, i)) return;
    Ot(n, "_sentryCaptured", !0), i && !i._sentryId && Ot(i, "_sentryId", it());
    const s = n.type === "keypress" ? "input" : n.type;
    _R(n) ||
      (r({ event: n, name: s, global: t }),
      (Ua = n.type),
      (Ka = i ? i._sentryId : void 0)),
      clearTimeout(uc),
      (uc = $e.setTimeout(() => {
        (Ka = void 0), (Ua = void 0);
      }, ER));
  };
}
function yR(r) {
  try {
    return r.target;
  } catch {
    return null;
  }
}
let Dr;
function B0(r) {
  const t = "history";
  Gt(t, r), Xt(t, gR);
}
function gR() {
  if (!xx()) return;
  const r = $e.onpopstate;
  $e.onpopstate = function (...n) {
    const i = $e.location.href,
      s = Dr;
    if (((Dr = i), at("history", { from: s, to: i }), r))
      try {
        return r.apply(this, n);
      } catch {}
  };
  function t(n) {
    return function (...i) {
      const s = i.length > 2 ? i[2] : void 0;
      if (s) {
        const f = Dr,
          e = String(s);
        (Dr = e), at("history", { from: f, to: e });
      }
      return n.apply(this, i);
    };
  }
  Ze($e.history, "pushState", t), Ze($e.history, "replaceState", t);
}
const kr = {};
function bR(r) {
  const t = kr[r];
  if (t) return t;
  let n = $e[r];
  if (ma(n)) return (kr[r] = n.bind($e));
  const i = $e.document;
  if (i && typeof i.createElement == "function")
    try {
      const s = i.createElement("iframe");
      (s.hidden = !0), i.head.appendChild(s);
      const f = s.contentWindow;
      f && f[r] && (n = f[r]), i.head.removeChild(s);
    } catch (s) {
      pR &&
        Re.warn(
          `Could not create sandbox iframe for ${r} check, bailing to window.${r}: `,
          s
        );
    }
  return n && (kr[r] = n.bind($e));
}
function lc(r) {
  kr[r] = void 0;
}
const _r = "__sentry_xhr_v3__";
function mR(r) {
  const t = "xhr";
  Gt(t, r), Xt(t, TR);
}
function TR() {
  if (!$e.XMLHttpRequest) return;
  const r = XMLHttpRequest.prototype;
  (r.open = new Proxy(r.open, {
    apply(t, n, i) {
      const s = xt() * 1e3,
        f = ht(i[0]) ? i[0].toUpperCase() : void 0,
        e = SR(i[1]);
      if (!f || !e) return t.apply(n, i);
      (n[_r] = { method: f, url: e, request_headers: {} }),
        f === "POST" &&
          e.match(/sentry_key/) &&
          (n.__sentry_own_request__ = !0);
      const l = () => {
        const p = n[_r];
        if (p && n.readyState === 4) {
          try {
            p.status_code = n.status;
          } catch {}
          const x = { endTimestamp: xt() * 1e3, startTimestamp: s, xhr: n };
          at("xhr", x);
        }
      };
      return (
        "onreadystatechange" in n && typeof n.onreadystatechange == "function"
          ? (n.onreadystatechange = new Proxy(n.onreadystatechange, {
              apply(p, x, R) {
                return l(), p.apply(x, R);
              },
            }))
          : n.addEventListener("readystatechange", l),
        (n.setRequestHeader = new Proxy(n.setRequestHeader, {
          apply(p, x, R) {
            const [S, v] = R,
              d = x[_r];
            return (
              d && ht(S) && ht(v) && (d.request_headers[S.toLowerCase()] = v),
              p.apply(x, R)
            );
          },
        })),
        t.apply(n, i)
      );
    },
  })),
    (r.send = new Proxy(r.send, {
      apply(t, n, i) {
        const s = n[_r];
        if (!s) return t.apply(n, i);
        i[0] !== void 0 && (s.body = i[0]);
        const f = { startTimestamp: xt() * 1e3, xhr: n };
        return at("xhr", f), t.apply(n, i);
      },
    }));
}
function SR(r) {
  if (ht(r)) return r;
  try {
    return r.toString();
  } catch {}
}
function dR(r, t = bR("fetch")) {
  let n = 0,
    i = 0;
  function s(f) {
    const e = f.body.length;
    (n += e), i++;
    const l = {
      body: f.body,
      method: "POST",
      referrerPolicy: "origin",
      headers: r.headers,
      keepalive: n <= 6e4 && i < 15,
      ...r.fetchOptions,
    };
    if (!t) return lc("fetch"), Gr("No fetch implementation available");
    try {
      return t(r.url, l).then(
        (p) => (
          (n -= e),
          i--,
          {
            statusCode: p.status,
            headers: {
              "x-sentry-rate-limits": p.headers.get("X-Sentry-Rate-Limits"),
              "retry-after": p.headers.get("Retry-After"),
            },
          }
        )
      );
    } catch (p) {
      return lc("fetch"), (n -= e), i--, Gr(p);
    }
  }
  return v_(r, s);
}
const vR = 30,
  LR = 50;
function wa(r, t, n, i) {
  const s = { filename: r, function: t === "<anonymous>" ? Pt : t, in_app: !0 };
  return n !== void 0 && (s.lineno = n), i !== void 0 && (s.colno = i), s;
}
const AR = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
  CR =
    /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  BR = /\((\S*)(?::(\d+))(?::(\d+))\)/,
  UR = (r) => {
    const t = AR.exec(r);
    if (t) {
      const [, i, s, f] = t;
      return wa(i, Pt, +s, +f);
    }
    const n = CR.exec(r);
    if (n) {
      if (n[2] && n[2].indexOf("eval") === 0) {
        const e = BR.exec(n[2]);
        e && ((n[2] = e[1]), (n[3] = e[2]), (n[4] = e[3]));
      }
      const [s, f] = U0(n[1] || Pt, n[2]);
      return wa(f, s, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0);
    }
  },
  KR = [vR, UR],
  wR =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
  NR = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
  IR = (r) => {
    const t = wR.exec(r);
    if (t) {
      if (t[3] && t[3].indexOf(" > eval") > -1) {
        const f = NR.exec(t[3]);
        f &&
          ((t[1] = t[1] || "eval"), (t[3] = f[1]), (t[4] = f[2]), (t[5] = ""));
      }
      let i = t[3],
        s = t[1] || Pt;
      return (
        ([s, i] = U0(s, i)),
        wa(i, s, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
      );
    }
  },
  DR = [LR, IR],
  OR = [KR, DR],
  PR = o0(...OR),
  U0 = (r, t) => {
    const n = r.indexOf("safari-extension") !== -1,
      i = r.indexOf("safari-web-extension") !== -1;
    return n || i
      ? [
          r.indexOf("@") !== -1 ? r.split("@")[0] : Pt,
          n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
        ]
      : [r, t];
  },
  Or = 1024,
  kR = "Breadcrumbs",
  VR = (r = {}) => {
    const t = {
      console: !0,
      dom: !0,
      fetch: !0,
      history: !0,
      sentry: !0,
      xhr: !0,
      ...r,
    };
    return {
      name: kR,
      setup(n) {
        t.console && wh(XR(n)),
          t.dom && hR(GR(n, t.dom)),
          t.xhr && mR(jR(n)),
          t.fetch && Oh($R(n)),
          t.history && B0(FR(n)),
          t.sentry && n.on("beforeSendEvent", qR(n));
      },
    };
  },
  MR = VR;
function qR(r) {
  return function (n) {
    Fe() === r &&
      Mt(
        {
          category: `sentry.${
            n.type === "transaction" ? "transaction" : "event"
          }`,
          event_id: n.event_id,
          level: n.level,
          message: dt(n),
        },
        { event: n }
      );
  };
}
function GR(r, t) {
  return function (i) {
    if (Fe() !== r) return;
    let s,
      f,
      e = typeof t == "object" ? t.serializeAttribute : void 0,
      l =
        typeof t == "object" && typeof t.maxStringLength == "number"
          ? t.maxStringLength
          : void 0;
    l &&
      l > Or &&
      (Tr &&
        Re.warn(
          `\`dom.maxStringLength\` cannot exceed ${Or}, but a value of ${l} was configured. Sentry will use ${Or} instead.`
        ),
      (l = Or)),
      typeof e == "string" && (e = [e]);
    try {
      const x = i.event,
        R = HR(x) ? x.target : x;
      (s = i0(R, { keyAttrs: e, maxStringLength: l })), (f = gh(R));
    } catch {
      s = "<unknown>";
    }
    if (s.length === 0) return;
    const p = { category: `ui.${i.name}`, message: s };
    f && (p.data = { "ui.component_name": f }),
      Mt(p, { event: i.event, name: i.name, global: i.global });
  };
}
function XR(r) {
  return function (n) {
    if (Fe() !== r) return;
    const i = {
      category: "console",
      data: { arguments: n.args, logger: "console" },
      level: Yh(n.level),
      message: Kl(n.args, " "),
    };
    if (n.level === "assert")
      if (n.args[0] === !1)
        (i.message = `Assertion failed: ${
          Kl(n.args.slice(1), " ") || "console.assert"
        }`),
          (i.data.arguments = n.args.slice(1));
      else return;
    Mt(i, { input: n.args, level: n.level });
  };
}
function jR(r) {
  return function (n) {
    if (Fe() !== r) return;
    const { startTimestamp: i, endTimestamp: s } = n,
      f = n.xhr[_r];
    if (!i || !s || !f) return;
    const { method: e, url: l, status_code: p, body: x } = f,
      R = { method: e, url: l, status_code: p },
      S = { xhr: n.xhr, input: x, startTimestamp: i, endTimestamp: s },
      v = n0(p);
    Mt({ category: "xhr", data: R, type: "http", level: v }, S);
  };
}
function $R(r) {
  return function (n) {
    if (Fe() !== r) return;
    const { startTimestamp: i, endTimestamp: s } = n;
    if (
      s &&
      !(n.fetchData.url.match(/sentry_key/) && n.fetchData.method === "POST")
    )
      if (n.error) {
        const f = n.fetchData,
          e = {
            data: n.error,
            input: n.args,
            startTimestamp: i,
            endTimestamp: s,
          };
        Mt({ category: "fetch", data: f, level: "error", type: "http" }, e);
      } else {
        const f = n.response,
          e = { ...n.fetchData, status_code: f && f.status },
          l = {
            input: n.args,
            response: f,
            startTimestamp: i,
            endTimestamp: s,
          },
          p = n0(e.status_code);
        Mt({ category: "fetch", data: e, type: "http", level: p }, l);
      }
  };
}
function FR(r) {
  return function (n) {
    if (Fe() !== r) return;
    let i = n.from,
      s = n.to;
    const f = xa(Ae.location.href);
    let e = i ? xa(i) : void 0;
    const l = xa(s);
    (!e || !e.path) && (e = f),
      f.protocol === l.protocol && f.host === l.host && (s = l.relative),
      f.protocol === e.protocol && f.host === e.host && (i = e.relative),
      Mt({ category: "navigation", data: { from: i, to: s } });
  };
}
function HR(r) {
  return !!r && !!r.target;
}
const WR = [
    "EventTarget",
    "Window",
    "Node",
    "ApplicationCache",
    "AudioTrackList",
    "BroadcastChannel",
    "ChannelMergerNode",
    "CryptoOperation",
    "EventSource",
    "FileReader",
    "HTMLUnknownElement",
    "IDBDatabase",
    "IDBRequest",
    "IDBTransaction",
    "KeyOperation",
    "MediaController",
    "MessagePort",
    "ModalWindow",
    "Notification",
    "SVGElementInstance",
    "Screen",
    "SharedWorker",
    "TextTrack",
    "TextTrackCue",
    "TextTrackList",
    "WebSocket",
    "WebSocketWorker",
    "Worker",
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequestUpload",
  ],
  zR = "BrowserApiErrors",
  JR = (r = {}) => {
    const t = {
      XMLHttpRequest: !0,
      eventTarget: !0,
      requestAnimationFrame: !0,
      setInterval: !0,
      setTimeout: !0,
      ...r,
    };
    return {
      name: zR,
      setupOnce() {
        t.setTimeout && Ze(Ae, "setTimeout", cc),
          t.setInterval && Ze(Ae, "setInterval", cc),
          t.requestAnimationFrame && Ze(Ae, "requestAnimationFrame", QR),
          t.XMLHttpRequest &&
            "XMLHttpRequest" in Ae &&
            Ze(XMLHttpRequest.prototype, "send", ZR);
        const n = t.eventTarget;
        n && (Array.isArray(n) ? n : WR).forEach(ey);
      },
    };
  },
  YR = JR;
function cc(r) {
  return function (...t) {
    const n = t[0];
    return (
      (t[0] = er(n, {
        mechanism: {
          data: { function: Lt(r) },
          handled: !1,
          type: "instrument",
        },
      })),
      r.apply(this, t)
    );
  };
}
function QR(r) {
  return function (t) {
    return r.apply(this, [
      er(t, {
        mechanism: {
          data: { function: "requestAnimationFrame", handler: Lt(r) },
          handled: !1,
          type: "instrument",
        },
      }),
    ]);
  };
}
function ZR(r) {
  return function (...t) {
    const n = this;
    return (
      ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((s) => {
        s in n &&
          typeof n[s] == "function" &&
          Ze(n, s, function (f) {
            const e = {
                mechanism: {
                  data: { function: s, handler: Lt(f) },
                  handled: !1,
                  type: "instrument",
                },
              },
              l = ef(f);
            return l && (e.mechanism.data.handler = Lt(l)), er(f, e);
          });
      }),
      r.apply(this, t)
    );
  };
}
function ey(r) {
  const t = Ae,
    n = t[r] && t[r].prototype;
  !n ||
    !n.hasOwnProperty ||
    !n.hasOwnProperty("addEventListener") ||
    (Ze(n, "addEventListener", function (i) {
      return function (s, f, e) {
        try {
          typeof f.handleEvent == "function" &&
            (f.handleEvent = er(f.handleEvent, {
              mechanism: {
                data: { function: "handleEvent", handler: Lt(f), target: r },
                handled: !1,
                type: "instrument",
              },
            }));
        } catch {}
        return i.apply(this, [
          s,
          er(f, {
            mechanism: {
              data: { function: "addEventListener", handler: Lt(f), target: r },
              handled: !1,
              type: "instrument",
            },
          }),
          e,
        ]);
      };
    }),
    Ze(n, "removeEventListener", function (i) {
      return function (s, f, e) {
        const l = f;
        try {
          const p = l && l.__sentry_wrapped__;
          p && i.call(this, s, p, e);
        } catch {}
        return i.call(this, s, l, e);
      };
    }));
}
const ty = "GlobalHandlers",
  ry = (r = {}) => {
    const t = { onerror: !0, onunhandledrejection: !0, ...r };
    return {
      name: ty,
      setupOnce() {
        Error.stackTraceLimit = 50;
      },
      setup(n) {
        t.onerror && (iy(n), pc("onerror")),
          t.onunhandledrejection && (sy(n), pc("onunhandledrejection"));
      },
    };
  },
  ny = ry;
function iy(r) {
  Vh((t) => {
    const { stackParser: n, attachStacktrace: i } = K0();
    if (Fe() !== r || A0()) return;
    const { msg: s, url: f, line: e, column: l, error: p } = t,
      x = uy(uf(n, p || s, void 0, i, !1), f, e, l);
    (x.level = "error"),
      y0(x, {
        originalException: p,
        mechanism: { handled: !1, type: "onerror" },
      });
  });
}
function sy(r) {
  qh((t) => {
    const { stackParser: n, attachStacktrace: i } = K0();
    if (Fe() !== r || A0()) return;
    const s = ay(t),
      f = Qa(s) ? fy(s) : uf(n, s, void 0, i, !0);
    (f.level = "error"),
      y0(f, {
        originalException: s,
        mechanism: { handled: !1, type: "onunhandledrejection" },
      });
  });
}
function ay(r) {
  if (Qa(r)) return r;
  try {
    if ("reason" in r) return r.reason;
    if ("detail" in r && "reason" in r.detail) return r.detail.reason;
  } catch {}
  return r;
}
function fy(r) {
  return {
    exception: {
      values: [
        {
          type: "UnhandledRejection",
          value: `Non-Error promise rejection captured with value: ${String(
            r
          )}`,
        },
      ],
    },
  };
}
function uy(r, t, n, i) {
  const s = (r.exception = r.exception || {}),
    f = (s.values = s.values || []),
    e = (f[0] = f[0] || {}),
    l = (e.stacktrace = e.stacktrace || {}),
    p = (l.frames = l.frames || []),
    x = isNaN(parseInt(i, 10)) ? void 0 : i,
    R = isNaN(parseInt(n, 10)) ? void 0 : n,
    S = ht(t) && t.length > 0 ? t : yh();
  return (
    p.length === 0 &&
      p.push({ colno: x, filename: S, function: Pt, in_app: !0, lineno: R }),
    r
  );
}
function pc(r) {
  Tr && Re.log(`Global Handler attached: ${r}`);
}
function K0() {
  const r = Fe();
  return (
    (r && r.getOptions()) || { stackParser: () => [], attachStacktrace: !1 }
  );
}
const oy = () => ({
    name: "HttpContext",
    preprocessEvent(r) {
      if (!Ae.navigator && !Ae.location && !Ae.document) return;
      const t =
          (r.request && r.request.url) || (Ae.location && Ae.location.href),
        { referrer: n } = Ae.document || {},
        { userAgent: i } = Ae.navigator || {},
        s = {
          ...(r.request && r.request.headers),
          ...(n && { Referer: n }),
          ...(i && { "User-Agent": i }),
        },
        f = { ...r.request, ...(t && { url: t }), headers: s };
      r.request = f;
    },
  }),
  ly = "cause",
  cy = 5,
  py = "LinkedErrors",
  Ey = (r = {}) => {
    const t = r.limit || cy,
      n = r.key || ly;
    return {
      name: py,
      preprocessEvent(i, s, f) {
        const e = f.getOptions();
        hh(af, e.stackParser, e.maxValueLength, n, t, i, s);
      },
    };
  },
  hy = Ey;
function xy(r) {
  return [I_(), U_(), YR(), MR(), ny(), hy(), H_(), oy()];
}
function _y(r = {}) {
  const t = {
    defaultIntegrations: xy(),
    release:
      typeof __SENTRY_RELEASE__ == "string"
        ? __SENTRY_RELEASE__
        : Ae.SENTRY_RELEASE && Ae.SENTRY_RELEASE.id
        ? Ae.SENTRY_RELEASE.id
        : void 0,
    autoSessionTracking: !0,
    sendClientReports: !0,
  };
  return (
    r.defaultIntegrations == null && delete r.defaultIntegrations,
    { ...t, ...r }
  );
}
function Ry() {
  const r = typeof Ae.window < "u" && Ae;
  if (!r) return !1;
  const t = r.chrome ? "chrome" : "browser",
    n = r[t],
    i = n && n.runtime && n.runtime.id,
    s = (Ae.location && Ae.location.href) || "",
    f = [
      "chrome-extension:",
      "moz-extension:",
      "ms-browser-extension:",
      "safari-web-extension:",
    ],
    e = !!i && Ae === Ae.top && f.some((p) => s.startsWith(`${p}//`)),
    l = typeof r.nw < "u";
  return !!i && !e && !l;
}
function yy(r = {}) {
  const t = _y(r);
  if (!t.skipBrowserExtensionCheck && Ry()) {
    gr(() => {
      console.error(
        "[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/"
      );
    });
    return;
  }
  Tr &&
    (l0() ||
      Re.warn(
        "No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill."
      ));
  const n = {
      ...t,
      stackParser: Uh(t.stackParser || PR),
      integrations: R_(t),
      transport: t.transport || dR,
    },
    i = T_(cR, n);
  return t.autoSessionTracking && gy(), i;
}
function gy() {
  if (typeof Ae.document > "u") {
    Tr &&
      Re.warn(
        "Session tracking in non-browser environment with @sentry/browser is not supported."
      );
    return;
  }
  Zl({ ignoreDuration: !0 }),
    ec(),
    B0(({ from: r, to: t }) => {
      r !== void 0 && r !== t && (Zl({ ignoreDuration: !0 }), ec());
    });
}
const by = "UNABLE TO LOAD. TAP TO TRY AGAIN.",
  my = { RETRY: by },
  Ty = "CHARGEMENT IMPOSSIBLE. APPUYEZ POUR RÃ‰ESSAYER.",
  Sy = { RETRY: Ty },
  dy = "IMPOSSIBILE CARICARE. CLICCA PER RIPROVARE.",
  vy = { RETRY: dy },
  Ly = "LADEN FEHLGESCHLAGEN. DRÃœCKEN ZUM ERNEUT VERSUCHEN.",
  Ay = { RETRY: Ly },
  Cy = "CARGA FALLIDA. TOCA PARA VOLVER A INTENTARLO.",
  By = { RETRY: Cy },
  Uy = "NO SE PUEDE CARGAR. TOCA PARA VOLVER A INTENTARLO.",
  Ky = { RETRY: Uy },
  wy = "NÃƒO FOI POSSÃVEL CARREGAR. TOQUE PARA TENTAR DE NOVO.",
  Ny = { RETRY: wy },
  Ec = { en: my, fr: Sy, it: vy, de: Ay, es: By, "es-XL": Ky, "pt-BR": Ny };
let Iy = class {
  constructor(t) {
    ze(this, "manifest");
    ze(this, "registered", {});
    ze(this, "register", (t) => {
      (this.registered.connect = t.connect),
        (this.registered.mount = t.mount),
        (this.registered.info = t.info);
    });
    ze(this, "load", async (t) => {
      document
        .querySelectorAll("[data-tv-prefetch]")
        .forEach((l) => l.remove());
      const i = this.getBranchName(t),
        s = window.tv.manifest.branches[i];
      if (!s)
        throw new Error(
          `[loader] Unknown branch "${i}" can not be found in manifest`
        );
      const f = s.bundles[t.app];
      if (!f)
        throw new Error(
          `[loader] Unknown app "${t.app}" can not be loaded from branch "${i}"`
        );
      try {
        i === "** hmr **"
          ? await this.loadHMRBundle(f)
          : i === "** dist **"
          ? await this.loadDistBundle(f)
          : await this.loadS3Bundle(f);
      } catch (l) {
        console.error(
          `[loader] Unable to load "${t.app}" from branch "${i}":`,
          l
        ),
          this.showLoaderError();
        return;
      }
      if (
        (zE("[loader] load success", {
          app: t.app,
          appVersion: f.version ?? s.version,
          loaderVersion: window.tv.manifest.loader.version,
          branch: i,
        }),
        !t.autoMount)
      )
        return;
      const e = t;
      (e.version = f.version ?? s.version), this.mount(e);
    });
    ze(this, "connect", (t, n) => {
      if (!this.registered.connect)
        throw new Error("[loader] There is not a registered connect function");
      return this.registered.connect(t, n);
    });
    ze(this, "mount", (t) => {
      var e, l, p;
      if (!this.registered.mount) {
        console.error("[loader] There is not a registered app to mount"),
          this.showLoaderError();
        return;
      }
      const n = document.getElementsByClassName("loader-status")[0];
      if (
        (n && n.remove(),
        this.registered.unmount && this.registered.unmount(),
        this.registered.info)
      ) {
        const x = this.registered.info(t);
        g0({
          branch: x.branch,
          "app.tag": x.tag,
          "app.type": x.type,
          "app.version": x.version,
          "app.wrapper": x.wrapper,
        }),
          (e = window.tv.analytics) == null || e.pageView(x.tag);
      }
      Vr.setup(
        t.app,
        ((l = t.room) == null ? void 0 : l.code) ??
          ((p = t.client) == null ? void 0 : p.code)
      );
      const i = document.querySelectorAll("[data-tv-style]"),
        f = Array.from(document.querySelectorAll("[data-tv-prefetch]")).map(
          (x) => {
            const R = document.createElement("link");
            return (
              (R.rel = "stylesheet"),
              (R.href = x.href),
              R.setAttribute("data-tv-style", ""),
              R
            );
          }
        );
      document.head.append(...f),
        i.forEach((x) => x.remove()),
        (this.registered.unmount = this.registered.mount(t) ?? void 0),
        delete this.registered.connect,
        delete this.registered.mount,
        delete this.registered.info;
    });
    ze(this, "debugLoad", async (t, n) => {
      throw new Error(
        "[Loader] Debug controllers are not available in production builds"
      );
    });
    this.manifest = t;
  }
  getBranchName(t) {
    var f, e, l, p, x;
    const n =
        (e = (f = t.match) == null ? void 0 : f.params) == null
          ? void 0
          : e.branch,
      i = Vr.get("preference:branch"),
      s = this.manifest.branches;
    if (n) return n === "hmr" ? "** hmr **" : n === "dist" ? "** dist **" : n;
    if (t.branch) return t.branch;
    if ((l = s["** hmr **"]) != null && l.bundles[t.app]) return "** hmr **";
    if (i && (p = s[i]) != null && p.bundles[t.app]) return i;
    if ((x = s["** dist **"]) != null && x.bundles[t.app]) return "** dist **";
    if (s.main) return "main";
    throw new Error(
      "[loader] Could not resolve a branch name and main is not available"
    );
  }
  getS3Url(t, n) {
    return `/${n}/${t}`;
  }
  async loadHMRBundle(t) {
    const n = t.file;
    await n();
  }
  loadScript(t) {
    return new Promise((n, i) => {
      const s = document.createElement("script");
      (s.src = t),
        (s.async = !0),
        (s.type = "module"),
        (s.crossOrigin = ""),
        (s.onerror = i),
        (s.onload = n),
        s.setAttribute("data-tv-script", ""),
        document.head.append(s);
    });
  }
  async fetchBundle(t, n, i) {
    n.forEach((f) => {
      const e = i ? this.getS3Url(f, i) : f,
        l = document.createElement("link");
      i ? (l.rel = "prefetch") : ((l.rel = "preload"), (l.as = "style")),
        (l.href = e),
        l.setAttribute("data-tv-prefetch", ""),
        document.head.append(l);
    });
    const s = i ? this.getS3Url(t, i) : t;
    await this.loadScript(s);
  }
  async loadDistBundle(t) {
    return this.fetchBundle(`/@fs/${t.file}`, t.css);
  }
  async loadS3Bundle(t) {
    return this.fetchBundle(t.file, t.css, t.base);
  }
  showLoaderError() {
    const t = document.getElementsByClassName("loader-status")[0];
    if (!t) return;
    const n = document.createElement("p"),
      i = navigator.languages[0],
      s = Ec[i] ?? Ec.en;
    t.classList.add("error"),
      (n.textContent = s.RETRY),
      t.append(n),
      t.addEventListener("click", () => window.location.reload());
  }
};
const hc = { EcastEntityNotFound: 2005, EcastFilterError: 2021 },
  Dy = [
    "ceCurrentVideo.currentTime",
    "chrome-extension",
    "ResizeObserver",
    "webkitExitFullScreen",
    "window.webkit.messageHandlers.selectedTextHandler.postMessage",
    "promiseResolveThenableJob",
    "Cannot read property 'then' of undefined",
    "null is not an object (evaluating 't.scrollHeight')",
    "Cannot read properties of null (reading 'removeEventListener')",
  ],
  Oy = (r) => {
    yy({
      dsn: "https://bb026273d98c4b99ab11c1de369f521f@o420318.ingest.sentry.io/6387933",
      debug: "false",
      environment: r.environment,
      release: `tv-mono@${r.loader.version}`,
      ignoreErrors: Dy,
      beforeSend: async (t, n) => {
        if (n.originalException) {
          const i = n.originalException;
          if (i.code === hc.EcastEntityNotFound)
            return (
              l_("no entity found having key", {
                extra: { exception: n.originalException },
              }),
              null
            );
          if (i.code === hc.EcastFilterError) return null;
        }
        if (window.tv.onError)
          try {
            const i = await window.tv.onError(t, n);
            i && ((t.contexts = t.contexts || {}), (t.contexts.debug = i));
          } catch (i) {
            console.error("failed to send states to ecast", i);
          }
        return t;
      },
    }),
      g0({
        "app.tag": "@loader",
        "app.version": r.loader.version,
        "app.type": r.loader.type,
        branch: r.loader.branch,
      });
  };
let xc;
async function _c() {
  if (!xc)
    try {
      xc = await navigator.wakeLock.request("screen");
    } catch (r) {
      console.warn(r);
    }
}
const Py = async () => {
  navigator.wakeLock &&
    (await _c(),
    document.addEventListener("visibilitychange", () => {
      document.visibilityState === "visible" && _c();
    }));
};
function ky(r) {
  let t = "<div>";
  return (
    r
      ? ((t += `   <h1>Debug JSON Index : ${r}</h1>`),
        Object.keys(window.tv.debugMap[r]).forEach((n) => {
          t += `    <a href="/${window.tv.debugMap[r][n]}" target="_blank">${n}</a>`;
        }))
      : ((t += "   <h1>Debug JSON Index</h1>"),
        Object.keys(window.tv.debugMap)
          .sort()
          .forEach((n) => {
            (t += "    <details>"),
              (t += `        <summary>${n}</summary>`),
              Object.keys(window.tv.debugMap[n]).forEach((i) => {
                t += `        <a href="/${window.tv.debugMap[n][i]}" target="_blank">${i}</a>`;
              }),
              (t += "    </details>");
          })),
    (t += "</div>"),
    t
  );
}
function Vy() {
  return `
    html {
        padding: 30px;
        background: #4254f4;
        color: #fff;
    }

    body {
        background: #4254f4;
    }

    body .loader-status {
        display: none;
    }

    h1 {
        font-size: 24px;
        padding-bottom: 15px;
    }

    details {
        width: 200px;
    }
    
    a {
        display: block;
        padding-left: 20px;
        color: #d4d8ff;
    }
    `;
}
function Rc(r) {
  if (!window.tv.debugMap) return;
  const t = document.createElement("style");
  (t.innerHTML = Vy()), document.getElementsByTagName("html")[0].append(t);
  const i = document.getElementById("app");
  i.innerHTML = ky(r);
}
function My() {
  const r = window.tv.manifest;
  let t = "<div>";
  t += `   <h1>Current Manifest : ${r.environment}</h1>`;
  const n = new Date(r.loader.lastUpdated);
  return (
    (t += "   <h2>Loader</h2>"),
    (t += `   <p>last deployed: <strong>${n.toLocaleDateString()} ${n.toLocaleTimeString()}</strong></p>`),
    (t += `   <p>branch: <strong>${r.loader.branch}</strong></p>`),
    (t += `   <p>version: <strong>${r.loader.version}</strong></p>`),
    (t += `   <p>type: <strong>${r.loader.type}</strong></p>`),
    (t += "   <h2>Branches</h2>"),
    Object.keys(r.branches)
      .sort()
      .forEach((i) => {
        const s = r.branches[i],
          f = new Date(s.lastUpdated);
        (t += "    <details>"),
          (t += "        <summary>"),
          (t += `            <span class="name">${i}</span>`),
          (t += `            <span class="version">${s.version}</span>`),
          (t += `            <span class="date">${f.toLocaleDateString()} ${f.toLocaleTimeString()}</span>`),
          (t += `            <span class="type">${s.type}</span>`),
          (t += `            <span class="type">${
            Object.keys(s.bundles).length
          } Apps</span>`),
          (t += "        </summary>"),
          Object.keys(s.bundles).forEach((e) => {
            const l = s.bundles[e];
            l.version
              ? (t += `        <p><span class="name">${e}</span> <span class="version">${l.version}</span></p>`)
              : (t += `        <p><span class="name">${e}</span> <span class="version">${s.version}</span></p>`);
          }),
          (t += "    </details>");
      }),
    (t += "</div>"),
    t
  );
}
function qy() {
  return `
    html {
        padding: 30px;
        background: #4254f4;
        color: #fff;
    }

    body {
        background: #4254f4;
    }

    body .loader-status {
        display: none;
    }

    h1 {
        font-size: 24px;
    }

    h2 {
        padding-top: 30px;
    }

    details {
        padding: 3px 0;
        border-bottom: 1px solid #a4adfa;
    }

    details span {
        font-size: 14px;
        display: inline-block;
    }

    span.name {
        width: 175px;
    }

    span.version {
        width: 225px;
    }

    span.date {
        width: 225px;
        font-style: italic;
    }

    span.type {
        color: #4254F4;
        font-size: 11px;
        padding: 2px 10px 0px;
        background: #fff;
        border-radius: 10px;
    }
    
    details p {
        padding: 3px 0;
        padding-left: 30px;
        font-size: 14px;
    }

    details p:nth-child(odd) {
        background: rgba(255, 255, 255, 0.1);
    }
    `;
}
function Gy() {
  if (!window.tv.manifest) return;
  const r = document.createElement("style");
  (r.innerHTML = qy()), document.getElementsByTagName("html")[0].append(r);
  const n = document.getElementById("app");
  n.innerHTML = My();
}
const Xy = {
    routes: [
      { path: "/", load: "@connect" },
      { path: ["/past-games", "/past-games/:galleryId"], load: "@connect" },
      { path: "/gallery", redirect: "/past-games" },
      {
        path: "/gallery/:galleryId",
        handler: (r) => ({ redirect: `/past-games/${r.data.galleryId}` }),
      },
      {
        path: [
          "/gallery/:galleryId/:artifactId",
          "/gallery/:galleryId/:artifactId/:itemId",
        ],
        handler: (r) => {
          const t = Ef(r.data.galleryId);
          return !t || !t.categoryId
            ? { redirect: "/" }
            : ((r.data.categoryId = t.categoryId), { load: t.tag });
        },
      },
      {
        path: [
          "/render/incoming/:gameId/:renderer",
          "/render/payload/:gameId/:renderer",
          "/render/artifact/:gameId/:artifactId/:renderer",
          "/render/:gameId/:artifactId/:renderer",
        ],
        handler: (r) => {
          const t = Ef(r.data.gameId);
          return t ? { load: t.tag } : { redirect: "/" };
        },
      },
      { path: "/moderator", load: "@moderator" },
      {
        path: [
          "/moderate",
          "/moderation",
          "/moderador",
          "/moderateur",
          "/moderatore",
        ],
        redirect: "/moderator",
      },
      {
        path: "/manifest",
        handler: () => {
          Gy();
        },
      },
      {
        path: "/debug",
        handler: () => {
          Rc();
        },
      },
      {
        path: ["/debug/:app", "/debug/local/:app"],
        handler: (r) => {
          Rc(r.data.app);
        },
      },
      {
        path: ["/debug/local/:app/:file", "/debug/local/:app/:file/:marker"],
        debugLoad: "local",
      },
      {
        path: ["/debug/cloud/:app/:file", "/debug/cloud/:app/:file/:marker"],
        debugLoad: "cloud",
      },
    ],
  },
  jy = {
    hmrApps: ["teeko-web"],
    hostnames: ["teeko.jackboxgames.com"],
    routes: [{ path: ["/", "/event"], load: "@teeko-web" }],
  };
class $y {
  constructor(t) {
    ze(this, "hmrApp", "loader");
    ze(this, "sites");
    this.sites = t;
    const n = this.getMatch(window.location.pathname);
    this.executeMatch(n);
  }
  executeMatch(t) {
    var i, s;
    const n =
      ((s = t == null ? void 0 : (i = t.route).handler) == null
        ? void 0
        : s.call(i, t)) ?? (t == null ? void 0 : t.route);
    if (!t || !n) {
      this.redirect("/", t);
      return;
    }
    if (n.debugLoad) {
      window.tv.debugLoad(n.debugLoad, t);
      return;
    }
    if (n.load) {
      window.tv.load({
        app: n.load,
        match: t,
        autoMount: t.route.autoMount ?? !0,
      });
      return;
    }
    if (t.route.redirect) {
      this.redirect(t.route.redirect, t);
      return;
    }
    if (!t.route.handler)
      throw (console.error(t), new Error("[Router] Unable to execute match"));
  }
  redirect(t, n) {
    const i = this.getMatch(t);
    if (!i)
      throw new Error(
        "[Router] Redirecting to an unexpected path causes an infinite redirect loop"
      );
    n &&
      (i.hashString || (i.hashString = n.hashString),
      i.params || (i.params = n.params),
      i.queryString || (i.queryString = n.queryString)),
      window.history.replaceState(null, "", t),
      this.executeMatch(i);
  }
  getSite() {
    const t = document.location.hostname;
    return (
      (t === "localhost" || t === "127.0.0.1"
        ? this.sites.find((i) => {
            var s;
            return (s = i.hmrApps) == null ? void 0 : s.includes(this.hmrApp);
          })
        : this.sites.find((i) => {
            var s;
            return (s = i.hostnames) == null ? void 0 : s.includes(t);
          })) ?? this.sites[0]
    );
  }
  splitPath(t) {
    return t.replace(/^\s*\/*\s*|\s*\/*\s*$/g, "").split("/");
  }
  matchRouteToPath(t, n) {
    if (t.length !== n.length) return !1;
    for (let i = 0; i < t.length; i++)
      if (t[i][0] !== ":" && t[i] !== n[i]) return !1;
    return !0;
  }
  getRoute(t, n) {
    const i = this.splitPath(t);
    for (let s = 0; s < n.length; s++) {
      const f = Array.isArray(n[s].path) ? n[s].path : [n[s].path];
      for (let e = 0; e < f.length; e++) {
        const l = this.splitPath(f[e]);
        if (this.matchRouteToPath(l, i)) return { route: n[s], parts: l };
      }
    }
    return null;
  }
  parseData(t, n) {
    const i = {},
      s = this.splitPath(t);
    for (let f = 0; f < n.parts.length; f++)
      n.parts[f][0] === ":" && (i[n.parts[f].substring(1)] = s[f]);
    return i;
  }
  parseParams() {
    if (!document.location.search) return {};
    const t = new URLSearchParams(document.location.search);
    return Object.fromEntries(t);
  }
  getMatch(t) {
    const n = this.getSite(),
      i = this.getRoute(t, n.routes);
    if (!i) return null;
    const s = {
      url: document.location.href,
      route: i.route,
      path: i.parts.join("/"),
      parts: i.parts,
      data: this.parseData(t, i),
      params: this.parseParams(),
    };
    if (document.location.hash) {
      let f = document.location.hash;
      document.location.hash[0] === "#" && (f = f.substring(1)),
        (s.hashString = f);
    }
    return (
      document.location.search && (s.queryString = document.location.search), s
    );
  }
}
const Fy = "production",
  Hy = 1,
  Wy = {
    branch: "main",
    sha: "4a5f52fde847c8151198b05407ed17e28ac65d72",
    lastUpdated: 1766091520021,
    version: "5.1272.664",
    type: "production",
  },
  zy = {
    main: {
      sha: "4a5f52fde847c8151198b05407ed17e28ac65d72",
      lastUpdated: 1766091520021,
      version: "5.1272.664",
      type: "production",
      bundles: {
        "@connect": {
          file: "DdkeVxkz.js",
          css: ["assets/CiCkuOlr.css"],
          base: "main/@connect",
          version: "5.1269.662",
        },
        "the-wheel": {
          file: "101d135e.js",
          css: ["assets/46b94a6f.css"],
          base: "main/pp8-the-wheel",
          version: "5.94.0",
        },
        "drawful-animate": {
          file: "86c6e843.js",
          css: ["assets/ce7372e9.css"],
          base: "main/pp8-drawful-animate",
          version: "5.229.113",
        },
        "@moderator": {
          file: "C9ujNxqs.js",
          css: ["assets/BBXUGzt1.css"],
          base: "main/@moderator",
          version: "5.1212.653",
        },
        "awshirt-tjsp": {
          file: "CF6l_NRd.js",
          css: ["assets/BiQtUZvw.css"],
          base: "main/tjsp-awshirt",
          version: "5.1244.654",
        },
        "ecast-test-client": {
          file: "c12562a3.js",
          css: ["assets/f88dcee1.css"],
          base: "main/internal-ecast-test-client",
          version: "5.0.0",
        },
        drawful: {
          file: "BvVaeIf6.js",
          css: ["assets/CoDaBc6C.css"],
          base: "main/pp1-drawful",
          version: "5.744.354",
        },
        fibbage: {
          file: "DaKo9mbS.js",
          css: ["assets/DjUjQAOa.css"],
          base: "main/pp1-fibbage",
          version: "5.744.354",
        },
        lieswatter: {
          file: "09a27e0e.js",
          css: ["assets/a7ece1cd.css"],
          base: "main/pp1-lieswatter",
          version: "5.0.0",
        },
        wordspud: {
          file: "BAxZI-bl.js",
          css: ["assets/COT_8Pss.css"],
          base: "main/pp1-wordspud",
          version: "5.744.354",
        },
        ydkj2015: {
          file: "db1903af.js",
          css: ["assets/d93bd31e.css"],
          base: "main/pp1-ydkj2015",
          version: "5.0.0",
        },
        auction: {
          file: "CSSnIcAJ.js",
          css: ["assets/BKkzFLAJ.css"],
          base: "main/pp2-auction",
          version: "5.744.354",
        },
        bombintern: {
          file: "D2g4tnp0.js",
          css: ["assets/CfrVSZQS.css"],
          base: "main/pp2-bombintern",
          version: "5.744.354",
        },
        earwax: {
          file: "C3W_9PV4.js",
          css: ["assets/C6TlasFk.css"],
          base: "main/pp2-earwax",
          version: "5.744.354",
        },
        fibbage2: {
          file: "BaSlv3jI.js",
          css: ["assets/9vUJlQoS.css"],
          base: "main/pp2-fibbage2",
          version: "5.744.354",
        },
        quiplash: {
          file: "CILlAqD6.js",
          css: ["assets/Jzqwl2n0.css"],
          base: "main/pp2-quiplash",
          version: "5.744.354",
        },
        awshirt: {
          file: "D4K62J9U.js",
          css: ["assets/7hxROMjc.css"],
          base: "main/pp3-awshirt",
          version: "5.817.418",
        },
        fakinit: {
          file: "Dybl7NpV.js",
          css: ["assets/C8F2oEzc.css"],
          base: "main/pp3-fakinit",
          version: "5.744.354",
        },
        pollposition: {
          file: "BaqgJ3Tz.js",
          css: ["assets/B0DH_T-P.css"],
          base: "main/pp3-pollposition",
          version: "5.744.354",
        },
        quiplash2: {
          file: "COjDIXz3.js",
          css: ["assets/6TJF95HM.css"],
          base: "main/pp3-quiplash2",
          version: "5.744.354",
        },
        triviadeath: {
          file: "B-yuzEFx.js",
          css: ["assets/DzU9jCH0.css"],
          base: "main/pp3-triviadeath",
          version: "5.744.354",
        },
        bracketeering: {
          file: "BfRp36-0.js",
          css: ["assets/B-KSbHYS.css"],
          base: "main/pp4-bracketeering",
          version: "5.824.421",
        },
        fibbage3: {
          file: "CDGDaXHT.js",
          css: ["assets/B_bJ0hJK.css"],
          base: "main/pp4-fibbage3",
          version: "5.824.421",
        },
        monstermingle: {
          file: "DTzQG6GE.js",
          css: ["assets/Bu0AkBam.css"],
          base: "main/pp4-monstermingle",
          version: "5.824.421",
        },
        overdrawn: {
          file: "CbqCOYUO.js",
          css: ["assets/D1g5Ajk5.css"],
          base: "main/pp4-overdrawn",
          version: "5.824.421",
        },
        survivetheinternet: {
          file: "CH4lMJdr.js",
          css: ["assets/Dy_GujbZ.css"],
          base: "main/pp4-survivetheinternet",
          version: "5.824.421",
        },
        patentlystupid: {
          file: "B7iIx9gd.js",
          css: ["assets/BgQjZMKz.css"],
          base: "main/pp5-patentlystupid",
          version: "5.824.421",
        },
        rapbattle: {
          file: "Cj5OwgH2.js",
          css: ["assets/C3g5yvt1.css"],
          base: "main/pp5-rapbattle",
          version: "5.824.421",
        },
        slingshoot: {
          file: "BBWOfJzJ.js",
          css: ["assets/COVIsQji.css"],
          base: "main/pp5-slingshoot",
          version: "5.824.421",
        },
        splittheroom: {
          file: "Ch-CwubX.js",
          css: ["assets/CK_BNyWk.css"],
          base: "main/pp5-splittheroom",
          version: "5.824.421",
        },
        ydkj2018: {
          file: "yXFuoy11.js",
          css: ["assets/l6q_L91Z.css"],
          base: "main/pp5-ydkj2018",
          version: "5.824.421",
        },
        jokeboat: {
          file: "VS1TFN6j.js",
          css: ["assets/D1eXz9Ki.css"],
          base: "main/pp6-jokeboat",
          version: "5.824.421",
        },
        pushthebutton: {
          file: "CqhzaitR.js",
          css: ["assets/3m1XkhUC.css"],
          base: "main/pp6-pushthebutton",
          version: "5.824.421",
        },
        ridictionary: {
          file: "Dx1wbUYk.js",
          css: ["assets/DCvDrgjJ.css"],
          base: "main/pp6-ridictionary",
          version: "5.824.421",
        },
        rolemodels: {
          file: "Brsq0z3j.js",
          css: ["assets/_o3l24R2.css"],
          base: "main/pp6-rolemodels",
          version: "5.824.421",
        },
        triviadeath2: {
          file: "BaU_7e-3.js",
          css: ["assets/CYiT2Bs2.css"],
          base: "main/pp6-triviadeath2",
          version: "5.824.421",
        },
        "blanky-blank": {
          file: "BO7Fy9Y5.js",
          css: ["assets/CeJXS-Fx.css"],
          base: "main/pp7-blanky-blank",
          version: "5.824.421",
        },
        everyday: {
          file: "CrrR0txn.js",
          css: ["assets/Dn6W3WAk.css"],
          base: "main/pp7-everyday",
          version: "5.824.421",
        },
        "jackbox-talks": {
          file: "BLhquKo6.js",
          css: ["assets/ZAyUVPBU.css"],
          base: "main/pp7-jackboxtalks",
          version: "5.824.421",
        },
        quiplash3: {
          file: "db0w6vxc.js",
          css: ["assets/DopdNwj4.css"],
          base: "main/pp7-quiplash3",
          version: "5.824.421",
        },
        worldchamps: {
          file: "C28IgALt.js",
          css: ["assets/DOy1XQff.css"],
          base: "main/pp7-worldchamps",
          version: "5.824.421",
        },
        "acquisitions-inc": {
          file: "CIimsojn.js",
          css: ["assets/BNH4TBfE.css"],
          base: "main/standalone-acquisitions-inc",
          version: "5.824.421",
        },
        drawful2international: {
          file: "D8H4eqof.js",
          css: ["assets/Bs6DNN7Y.css"],
          base: "main/standalone-drawful2-international",
          version: "5.744.354",
        },
        drawful2: {
          file: "BcMNflQx.js",
          css: ["assets/yIIYtp0b.css"],
          base: "main/standalone-drawful2",
          version: "5.824.421",
        },
        "guesspionage-crowdplay": {
          file: "d8e22d89.js",
          css: ["assets/1abe6b0a.css"],
          base: "main/standalone-guesspionage-crowdplay",
          version: "5.0.0",
        },
        "quiplash2-international": {
          file: "cb27e125.js",
          css: ["assets/1b07f574.css"],
          base: "main/standalone-quiplash2-international",
          version: "5.3.0",
        },
        "survey-bomb": {
          file: "68d527a5.js",
          css: ["assets/bc77cc37.css"],
          base: "main/pp8-survey-bomb",
          version: "5.94.0",
        },
        "triviadeath2-tjsp": {
          file: "WyivvM8_.js",
          css: ["assets/CTuLcpW8.css"],
          base: "main/tjsp-triviadeath2",
          version: "5.436.189",
        },
        "murder-detectives": {
          file: "CnZCw0i0.js",
          css: ["assets/DELnY406.css"],
          base: "main/pp8-murder-detectives",
          version: "5.431.187",
        },
        "quiplash3-tjsp": {
          file: "D5H0zC4K.js",
          css: ["assets/BBHmxbcD.css"],
          base: "main/tjsp-quiplash3",
          version: "5.436.189",
        },
        "apply-yourself": {
          file: "36ab8997.js",
          css: ["assets/ec87b7c0.css"],
          base: "main/pp8-apply-yourself",
          version: "5.0.0",
        },
        "antique-freak": {
          file: "eaedd0a5.js",
          css: ["assets/012be2f0.css"],
          base: "main/pp9-antique-freak",
          version: "5.94.0",
        },
        fourbage: {
          file: "Mj7gYh8v.js",
          css: ["assets/DbKD4hzC.css"],
          base: "main/pp9-fourbage",
          version: "5.528.271",
        },
        htmf: {
          file: "CDhiE11q.js",
          css: ["assets/CF6laOjP.css"],
          base: "main/pp9-htmf",
          version: "5.528.271",
        },
        lineup: {
          file: "c904806e.js",
          css: ["assets/3c3165f6.css"],
          base: "main/pp9-lineup",
          version: "5.297.119",
        },
        "range-game": {
          file: "Bbkar6ip.js",
          css: ["assets/DVFOz932.css"],
          base: "main/pp9-range-game",
          version: "5.528.271",
        },
        prototype: {
          file: "DPhnneCH.js",
          css: ["assets/CBUJeG4k.css"],
          base: "main/internal-prototype",
          version: "5.1272.664",
        },
        "@teeko-web": {
          file: "9DWT5D6y.js",
          css: ["assets/BoQ_-yZE.css"],
          base: "main/@teeko-web",
          version: "5.1212.653",
        },
        awshirt2: {
          file: "Dx_wpJcf.js",
          css: ["assets/COfuY7MX.css"],
          base: "main/pp10-awshirt2",
          version: "5.1265.660",
        },
        "nopus-opus": {
          file: "sdYc5FYJ.js",
          css: ["assets/C4hIcMtC.css"],
          base: "main/pp10-nopus-opus",
          version: "5.814.418",
        },
        "risky-text": {
          file: "DXeCJwvj.js",
          css: ["assets/BWxVWDBC.css"],
          base: "main/pp10-risky-text",
          version: "5.1266.660",
        },
        "time-trivia": {
          file: "rS8FVYuD.js",
          css: ["assets/yMKkTa44.css"],
          base: "main/pp10-time-trivia",
          version: "5.1266.660",
        },
        "us-them": {
          file: "CrCAwOKc.js",
          css: ["assets/Cw63fkNP.css"],
          base: "main/pp10-us-them",
          version: "5.1266.660",
        },
        captcha: {
          file: "ea9z4ih3.js",
          css: ["assets/Ca9x9WJF.css"],
          base: "main/ppad-captcha",
          version: "5.668.302",
        },
        drawful3: {
          file: "DpdbwhXP.js",
          css: ["assets/Cdn0yWwl.css"],
          base: "main/ppad-drawful3",
          version: "5.675.302",
        },
        fakinit2: {
          file: "CfMq9O92.js",
          css: ["assets/BT6yZ-Xa.css"],
          base: "main/ppad-fakinit2",
          version: "5.596.291",
        },
        bigsurvey: {
          file: "6ydCp5wM.js",
          css: ["assets/CiDDhWV9.css"],
          base: "main/standalone-bigsurvey",
          version: "5.814.418",
        },
        "mic-game": {
          file: "DFxei7rs.js",
          css: ["assets/1ut_Yig1.css"],
          base: "main/pp11-sfx",
          version: "5.1266.660",
        },
        "you-ruined-it": {
          file: "COC4s1D2.js",
          css: ["assets/CJJ7gZQ5.css"],
          base: "main/pp11-you-ruined-it",
          version: "5.1266.660",
        },
        cookies: {
          file: "BQObmdF6.js",
          css: ["assets/DJ8fVm2k.css"],
          base: "main/pp11-cookies",
          version: "5.1266.660",
        },
        "dirty-detectives": {
          file: "BRQtXdNt.js",
          css: ["assets/2K-tQDUO.css"],
          base: "main/pp11-dirty-detectives",
          version: "5.1266.660",
        },
        "trivia-rpg": {
          file: "D9PMV5tR.js",
          css: ["assets/DIbnWUVO.css"],
          base: "main/pp11-trivia-rpg",
          version: "5.1246.654",
        },
      },
    },
  },
  Jy = { environment: Fy, version: Hy, loader: Wy, branches: zy },
  of = Jy;
let Yy = Iy;
const cr = new Yy(of);
window.tv = {
  apps: uh,
  debugLoad: cr.debugLoad,
  debugActions: {},
  load: cr.load,
  games: gc,
  register: cr.register,
  mount: cr.mount,
  connect: cr.connect,
  manifest: of,
};
Oy(of);
new j0().setup();
Vr.setup();
Py();
new $y([Xy, jy]);
//# sourceMappingURL=ZHyDXCaL.js.map
