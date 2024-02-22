const te = (() => {
  const k = () => {
    const y = document.querySelector(".loader");
    setTimeout(() => {
      y.classList.add("line-animate");
    }, 1500), setTimeout(() => {
      y.classList.add("hidden");
    }, 2250);
  };
  return {
    setHandleEvent: function() {
      try {
        k();
      } catch (y) {
      }
    }
  };
})(), oe = () => {
  te.setHandleEvent();
}, ne = (() => {
  const k = () => {
    let y = 0;
    window.addEventListener("scroll", function() {
      const l = window.pageYOffset || document.documentElement.scrollTop, o = document.querySelector(".header");
      l > y ? o.classList.add("scroll") : l < y && o.classList.remove("scroll"), y = l <= 0 ? 0 : l;
    });
  };
  return {
    setHandleEvent: function() {
      try {
        k();
      } catch (y) {
      }
    }
  };
})(), re = () => {
  ne.setHandleEvent();
}, ie = (() => {
  const k = () => {
    const y = () => {
      const l = document.body, o = document.querySelector(".dialog-off-canvas-main-canvas"), r = document.querySelector(".scroll-down");
      let t = 0, s = 0, f = t, g = s;
      l.style.height = o.clientHeight + "px", o.style.position = "fixed", o.style.top = 0, o.style.left = 0, window.addEventListener("scroll", i), window.addEventListener("scroll", () => {
        l.style.height = o.clientHeight + "px";
      }), window.addEventListener("resize", () => {
        l.style.height = o.clientHeight + "px";
      });
      function i() {
        t = window.pageXOffset, s = window.pageYOffset;
      }
      window.requestAnimationFrame(p);
      function p() {
        f = c(f, t, 0.07), g = c(g, s, 0.07), f = Math.floor(f * 100) / 100, g = Math.floor(g * 100) / 100, o.style.transform = `translate3d(-${f}px, -${g}px, 0px)`, r.style.transform = `translate3d(-${f}px, -${g}px, 0px)`, window.requestAnimationFrame(p);
      }
      function c(u, d, b) {
        return (1 - b) * u + b * d;
      }
    };
    setTimeout(() => {
      window.screen.width >= 992 && y();
    }, 2e3);
  };
  return {
    setHandleEvent: function() {
      try {
        k();
      } catch (y) {
      }
    }
  };
})(), ae = () => {
  ie.setHandleEvent();
}, ce = (() => {
  const k = () => {
    const y = document.querySelector("#open-form"), l = document.querySelector("#join-form-ctn .join-us__bg");
    console.log(l), l.addEventListener("click", (o) => {
      console.log("click"), o.target.closest(".join-us").classList.remove("active");
    }), y.addEventListener("click", (o) => {
      o.target.closest(".join-us").classList.toggle("active");
    });
  };
  return {
    setHandleEvent: function() {
      try {
        k();
      } catch (y) {
      }
    }
  };
})(), se = () => {
  ce.setHandleEvent();
}, le = (() => {
  const k = () => {
    const y = document.querySelector("#join-form-ctn"), l = document.querySelector(".header"), o = document.querySelector(".blob"), r = document.querySelector(".stars__container"), t = document.body;
    setTimeout(() => {
      t.appendChild(l), t.appendChild(y), t.appendChild(o), t.appendChild(r);
    }, 2500);
  };
  return {
    setHandleEvent: function() {
      try {
        k();
      } catch (y) {
      }
    }
  };
})(), de = () => {
  le.setHandleEvent();
}, ue = (() => {
  const k = () => {
    const y = document.querySelector(".blob");
    document.addEventListener("mousemove", function(l) {
      y.style.transform = `translate3d(calc(${l.clientX}px - 50%), calc(${l.clientY}px - 50%), 0)`;
    });
  };
  return {
    setHandleEvent: function() {
      try {
        k();
      } catch (y) {
      }
    }
  };
})(), fe = () => {
  ue.setHandleEvent();
}, me = (() => {
  const k = (l) => {
    const o = path1.getTotalLength(), r = path2.getTotalLength();
    path1.style.strokeDasharray = o, path1.style.strokeDashoffset = o, path2.style.strokeDasharray = r, path2.style.strokeDashoffset = r;
  }, y = () => {
    document.querySelector(".loader #path1"), document.querySelector(".loader #path2"), k(), k();
  };
  return {
    setHandleEvent: function() {
      try {
        y();
      } catch (l) {
      }
    }
  };
})(), pe = () => {
  me.setHandleEvent();
};
var be = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, ee = { exports: {} };
(function(k, y) {
  (function(l, o) {
    k.exports = o();
  })(be, function() {
    return function(l) {
      function o(t) {
        if (r[t])
          return r[t].exports;
        var s = r[t] = { exports: {}, id: t, loaded: !1 };
        return l[t].call(s.exports, s, s.exports, o), s.loaded = !0, s.exports;
      }
      var r = {};
      return o.m = l, o.c = r, o.p = "dist/", o(0);
    }([function(l, o, r) {
      function t(a) {
        return a && a.__esModule ? a : { default: a };
      }
      var s = Object.assign || function(a) {
        for (var j = 1; j < arguments.length; j++) {
          var q = arguments[j];
          for (var C in q)
            Object.prototype.hasOwnProperty.call(q, C) && (a[C] = q[C]);
        }
        return a;
      }, f = r(1), g = (t(f), r(6)), i = t(g), p = r(7), c = t(p), u = r(8), d = t(u), b = r(9), E = t(b), H = r(10), I = t(H), G = r(11), K = t(G), J = r(14), X = t(J), L = [], R = !1, h = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: !1, once: !1, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: !1 }, T = function() {
        var a = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
        if (a && (R = !0), R)
          return L = (0, K.default)(L, h), (0, I.default)(L, h.once), L;
      }, $ = function() {
        L = (0, X.default)(), T();
      }, n = function() {
        L.forEach(function(a, j) {
          a.node.removeAttribute("data-aos"), a.node.removeAttribute("data-aos-easing"), a.node.removeAttribute("data-aos-duration"), a.node.removeAttribute("data-aos-delay");
        });
      }, e = function(a) {
        return a === !0 || a === "mobile" && E.default.mobile() || a === "phone" && E.default.phone() || a === "tablet" && E.default.tablet() || typeof a == "function" && a() === !0;
      }, m = function(a) {
        h = s(h, a), L = (0, X.default)();
        var j = document.all && !window.atob;
        return e(h.disable) || j ? n() : (h.disableMutationObserver || d.default.isSupported() || (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `), h.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", h.easing), document.querySelector("body").setAttribute("data-aos-duration", h.duration), document.querySelector("body").setAttribute("data-aos-delay", h.delay), h.startEvent === "DOMContentLoaded" && ["complete", "interactive"].indexOf(document.readyState) > -1 ? T(!0) : h.startEvent === "load" ? window.addEventListener(h.startEvent, function() {
          T(!0);
        }) : document.addEventListener(h.startEvent, function() {
          T(!0);
        }), window.addEventListener("resize", (0, c.default)(T, h.debounceDelay, !0)), window.addEventListener("orientationchange", (0, c.default)(T, h.debounceDelay, !0)), window.addEventListener("scroll", (0, i.default)(function() {
          (0, I.default)(L, h.once);
        }, h.throttleDelay)), h.disableMutationObserver || d.default.ready("[data-aos]", $), L);
      };
      l.exports = { init: m, refresh: T, refreshHard: $ };
    }, function(l, o) {
    }, , , , , function(l, o) {
      (function(r) {
        function t(e, m, a) {
          function j(v) {
            var O = M, Y = A;
            return M = A = void 0, P = v, S = e.apply(Y, O);
          }
          function q(v) {
            return P = v, x = setTimeout(W, m), F ? j(v) : S;
          }
          function C(v) {
            var O = v - _, Y = v - P, Z = m - O;
            return D ? $(Z, N - Y) : Z;
          }
          function B(v) {
            var O = v - _, Y = v - P;
            return _ === void 0 || O >= m || O < 0 || D && Y >= N;
          }
          function W() {
            var v = n();
            return B(v) ? U(v) : void (x = setTimeout(W, C(v)));
          }
          function U(v) {
            return x = void 0, w && M ? j(v) : (M = A = void 0, S);
          }
          function V() {
            x !== void 0 && clearTimeout(x), P = 0, M = _ = A = x = void 0;
          }
          function Q() {
            return x === void 0 ? S : U(n());
          }
          function z() {
            var v = n(), O = B(v);
            if (M = arguments, A = this, _ = v, O) {
              if (x === void 0)
                return q(_);
              if (D)
                return x = setTimeout(W, m), j(_);
            }
            return x === void 0 && (x = setTimeout(W, m)), S;
          }
          var M, A, N, S, x, _, P = 0, F = !1, D = !1, w = !0;
          if (typeof e != "function")
            throw new TypeError(u);
          return m = p(m) || 0, f(a) && (F = !!a.leading, D = "maxWait" in a, N = D ? T(p(a.maxWait) || 0, m) : N, w = "trailing" in a ? !!a.trailing : w), z.cancel = V, z.flush = Q, z;
        }
        function s(e, m, a) {
          var j = !0, q = !0;
          if (typeof e != "function")
            throw new TypeError(u);
          return f(a) && (j = "leading" in a ? !!a.leading : j, q = "trailing" in a ? !!a.trailing : q), t(e, m, { leading: j, maxWait: m, trailing: q });
        }
        function f(e) {
          var m = typeof e == "undefined" ? "undefined" : c(e);
          return !!e && (m == "object" || m == "function");
        }
        function g(e) {
          return !!e && (typeof e == "undefined" ? "undefined" : c(e)) == "object";
        }
        function i(e) {
          return (typeof e == "undefined" ? "undefined" : c(e)) == "symbol" || g(e) && h.call(e) == b;
        }
        function p(e) {
          if (typeof e == "number")
            return e;
          if (i(e))
            return d;
          if (f(e)) {
            var m = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = f(m) ? m + "" : m;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = e.replace(E, "");
          var a = I.test(e);
          return a || G.test(e) ? K(e.slice(2), a ? 2 : 8) : H.test(e) ? d : +e;
        }
        var c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e;
        } : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, u = "Expected a function", d = NaN, b = "[object Symbol]", E = /^\s+|\s+$/g, H = /^[-+]0x[0-9a-f]+$/i, I = /^0b[01]+$/i, G = /^0o[0-7]+$/i, K = parseInt, J = (typeof r == "undefined" ? "undefined" : c(r)) == "object" && r && r.Object === Object && r, X = (typeof self == "undefined" ? "undefined" : c(self)) == "object" && self && self.Object === Object && self, L = J || X || Function("return this")(), R = Object.prototype, h = R.toString, T = Math.max, $ = Math.min, n = function() {
          return L.Date.now();
        };
        l.exports = s;
      }).call(o, function() {
        return this;
      }());
    }, function(l, o) {
      (function(r) {
        function t(n, e, m) {
          function a(w) {
            var v = z, O = M;
            return z = M = void 0, _ = w, N = n.apply(O, v);
          }
          function j(w) {
            return _ = w, S = setTimeout(B, e), P ? a(w) : N;
          }
          function q(w) {
            var v = w - x, O = w - _, Y = e - v;
            return F ? T(Y, A - O) : Y;
          }
          function C(w) {
            var v = w - x, O = w - _;
            return x === void 0 || v >= e || v < 0 || F && O >= A;
          }
          function B() {
            var w = $();
            return C(w) ? W(w) : void (S = setTimeout(B, q(w)));
          }
          function W(w) {
            return S = void 0, D && z ? a(w) : (z = M = void 0, N);
          }
          function U() {
            S !== void 0 && clearTimeout(S), _ = 0, z = x = M = S = void 0;
          }
          function V() {
            return S === void 0 ? N : W($());
          }
          function Q() {
            var w = $(), v = C(w);
            if (z = arguments, M = this, x = w, v) {
              if (S === void 0)
                return j(x);
              if (F)
                return S = setTimeout(B, e), a(x);
            }
            return S === void 0 && (S = setTimeout(B, e)), N;
          }
          var z, M, A, N, S, x, _ = 0, P = !1, F = !1, D = !0;
          if (typeof n != "function")
            throw new TypeError(c);
          return e = i(e) || 0, s(m) && (P = !!m.leading, F = "maxWait" in m, A = F ? h(i(m.maxWait) || 0, e) : A, D = "trailing" in m ? !!m.trailing : D), Q.cancel = U, Q.flush = V, Q;
        }
        function s(n) {
          var e = typeof n == "undefined" ? "undefined" : p(n);
          return !!n && (e == "object" || e == "function");
        }
        function f(n) {
          return !!n && (typeof n == "undefined" ? "undefined" : p(n)) == "object";
        }
        function g(n) {
          return (typeof n == "undefined" ? "undefined" : p(n)) == "symbol" || f(n) && R.call(n) == d;
        }
        function i(n) {
          if (typeof n == "number")
            return n;
          if (g(n))
            return u;
          if (s(n)) {
            var e = typeof n.valueOf == "function" ? n.valueOf() : n;
            n = s(e) ? e + "" : e;
          }
          if (typeof n != "string")
            return n === 0 ? n : +n;
          n = n.replace(b, "");
          var m = H.test(n);
          return m || I.test(n) ? G(n.slice(2), m ? 2 : 8) : E.test(n) ? u : +n;
        }
        var p = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
          return typeof n;
        } : function(n) {
          return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
        }, c = "Expected a function", u = NaN, d = "[object Symbol]", b = /^\s+|\s+$/g, E = /^[-+]0x[0-9a-f]+$/i, H = /^0b[01]+$/i, I = /^0o[0-7]+$/i, G = parseInt, K = (typeof r == "undefined" ? "undefined" : p(r)) == "object" && r && r.Object === Object && r, J = (typeof self == "undefined" ? "undefined" : p(self)) == "object" && self && self.Object === Object && self, X = K || J || Function("return this")(), L = Object.prototype, R = L.toString, h = Math.max, T = Math.min, $ = function() {
          return X.Date.now();
        };
        l.exports = t;
      }).call(o, function() {
        return this;
      }());
    }, function(l, o) {
      function r(p) {
        var c = void 0, u = void 0;
        for (c = 0; c < p.length; c += 1)
          if (u = p[c], u.dataset && u.dataset.aos || u.children && r(u.children))
            return !0;
        return !1;
      }
      function t() {
        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
      }
      function s() {
        return !!t();
      }
      function f(p, c) {
        var u = window.document, d = t(), b = new d(g);
        i = c, b.observe(u.documentElement, { childList: !0, subtree: !0, removedNodes: !0 });
      }
      function g(p) {
        p && p.forEach(function(c) {
          var u = Array.prototype.slice.call(c.addedNodes), d = Array.prototype.slice.call(c.removedNodes), b = u.concat(d);
          if (r(b))
            return i();
        });
      }
      Object.defineProperty(o, "__esModule", { value: !0 });
      var i = function() {
      };
      o.default = { isSupported: s, ready: f };
    }, function(l, o) {
      function r(u, d) {
        if (!(u instanceof d))
          throw new TypeError("Cannot call a class as a function");
      }
      function t() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
      }
      Object.defineProperty(o, "__esModule", { value: !0 });
      var s = function() {
        function u(d, b) {
          for (var E = 0; E < b.length; E++) {
            var H = b[E];
            H.enumerable = H.enumerable || !1, H.configurable = !0, "value" in H && (H.writable = !0), Object.defineProperty(d, H.key, H);
          }
        }
        return function(d, b, E) {
          return b && u(d.prototype, b), E && u(d, E), d;
        };
      }(), f = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, g = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, i = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, p = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, c = function() {
        function u() {
          r(this, u);
        }
        return s(u, [{ key: "phone", value: function() {
          var d = t();
          return !(!f.test(d) && !g.test(d.substr(0, 4)));
        } }, { key: "mobile", value: function() {
          var d = t();
          return !(!i.test(d) && !p.test(d.substr(0, 4)));
        } }, { key: "tablet", value: function() {
          return this.mobile() && !this.phone();
        } }]), u;
      }();
      o.default = new c();
    }, function(l, o) {
      Object.defineProperty(o, "__esModule", { value: !0 });
      var r = function(s, f, g) {
        var i = s.node.getAttribute("data-aos-once");
        f > s.position ? s.node.classList.add("aos-animate") : typeof i != "undefined" && (i === "false" || !g && i !== "true") && s.node.classList.remove("aos-animate");
      }, t = function(s, f) {
        var g = window.pageYOffset, i = window.innerHeight;
        s.forEach(function(p, c) {
          r(p, i + g, f);
        });
      };
      o.default = t;
    }, function(l, o, r) {
      function t(i) {
        return i && i.__esModule ? i : { default: i };
      }
      Object.defineProperty(o, "__esModule", { value: !0 });
      var s = r(12), f = t(s), g = function(i, p) {
        return i.forEach(function(c, u) {
          c.node.classList.add("aos-init"), c.position = (0, f.default)(c.node, p.offset);
        }), i;
      };
      o.default = g;
    }, function(l, o, r) {
      function t(i) {
        return i && i.__esModule ? i : { default: i };
      }
      Object.defineProperty(o, "__esModule", { value: !0 });
      var s = r(13), f = t(s), g = function(i, p) {
        var c = 0, u = 0, d = window.innerHeight, b = { offset: i.getAttribute("data-aos-offset"), anchor: i.getAttribute("data-aos-anchor"), anchorPlacement: i.getAttribute("data-aos-anchor-placement") };
        switch (b.offset && !isNaN(b.offset) && (u = parseInt(b.offset)), b.anchor && document.querySelectorAll(b.anchor) && (i = document.querySelectorAll(b.anchor)[0]), c = (0, f.default)(i).top, b.anchorPlacement) {
          case "top-bottom":
            break;
          case "center-bottom":
            c += i.offsetHeight / 2;
            break;
          case "bottom-bottom":
            c += i.offsetHeight;
            break;
          case "top-center":
            c += d / 2;
            break;
          case "bottom-center":
            c += d / 2 + i.offsetHeight;
            break;
          case "center-center":
            c += d / 2 + i.offsetHeight / 2;
            break;
          case "top-top":
            c += d;
            break;
          case "bottom-top":
            c += i.offsetHeight + d;
            break;
          case "center-top":
            c += i.offsetHeight / 2 + d;
        }
        return b.anchorPlacement || b.offset || isNaN(p) || (u = p), c + u;
      };
      o.default = g;
    }, function(l, o) {
      Object.defineProperty(o, "__esModule", { value: !0 });
      var r = function(t) {
        for (var s = 0, f = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop); )
          s += t.offsetLeft - (t.tagName != "BODY" ? t.scrollLeft : 0), f += t.offsetTop - (t.tagName != "BODY" ? t.scrollTop : 0), t = t.offsetParent;
        return { top: f, left: s };
      };
      o.default = r;
    }, function(l, o) {
      Object.defineProperty(o, "__esModule", { value: !0 });
      var r = function(t) {
        return t = t || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(t, function(s) {
          return { node: s };
        });
      };
      o.default = r;
    }]);
  });
})(ee);
var ve = ee.exports;
const ye = (() => {
  const k = () => {
    setTimeout(() => {
      ve.init({
        duration: 1e3,
        easing: "ease",
        once: !0
      });
    }, 2250);
  };
  return {
    setHandleEvent: function() {
      try {
        k();
      } catch (y) {
      }
    }
  };
})(), ge = () => {
  ye.setHandleEvent();
}, he = () => {
  const k = window.pageYOffset || document.documentElement.scrollTop, y = window.pageXOffset || document.documentElement.scrollLeft;
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  }), window.onscroll = function() {
    window.scrollTo(y, k);
  };
};
he();
window.addEventListener("load", () => {
  ae(), oe(), pe(), re(), se(), de(), ge(), fe(), window.onscroll = null;
});
//# sourceMappingURL=mainscript.js.map
