const te = (() => {
  const x = () => {
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
        x();
      } catch (y) {
      }
    }
  };
})(), ne = () => {
  te.setHandleEvent();
}, oe = (() => {
  const x = () => {
    let y = 0;
    window.addEventListener("scroll", function() {
      const d = window.pageYOffset || document.documentElement.scrollTop, n = document.querySelector(".header");
      d > y ? n.classList.add("scroll") : d < y && n.classList.remove("scroll"), y = d <= 0 ? 0 : d;
    });
  };
  return {
    setHandleEvent: function() {
      try {
        x();
      } catch (y) {
      }
    }
  };
})(), re = () => {
  oe.setHandleEvent();
}, ae = (() => {
  const x = () => {
    const y = () => {
      const d = document.body, n = document.querySelector(".dialog-off-canvas-main-canvas"), r = document.querySelector(".scroll-down");
      let t = 0, s = 0, f = t, g = s;
      d.style.height = n.clientHeight + "px", n.style.position = "fixed", n.style.top = 0, n.style.left = 0, window.addEventListener("scroll", a), window.addEventListener("scroll", () => {
        d.style.height = n.clientHeight + "px";
      }), window.addEventListener("resize", () => {
        d.style.height = n.clientHeight + "px";
      });
      function a() {
        t = window.pageXOffset, s = window.pageYOffset;
      }
      window.requestAnimationFrame(p);
      function p() {
        f = c(f, t, 0.07), g = c(g, s, 0.07), f = Math.floor(f * 100) / 100, g = Math.floor(g * 100) / 100, n.style.transform = `translate3d(-${f}px, -${g}px, 0px)`, r.style.transform = `translate3d(-${f}px, -${g}px, 0px)`, window.requestAnimationFrame(p);
      }
      function c(l, u, b) {
        return (1 - b) * l + b * u;
      }
    };
    setTimeout(() => {
      window.screen.width >= 992 && y();
    }, 2e3);
  };
  return {
    setHandleEvent: function() {
      try {
        x();
      } catch (y) {
      }
    }
  };
})(), ie = () => {
  ae.setHandleEvent();
}, ce = (() => {
  const x = () => {
    const y = document.querySelector("#open-form"), d = document.querySelector("#join-form-ctn .join-us__bg");
    console.log(d), d.addEventListener("click", (n) => {
      console.log("click"), n.target.closest(".join-us").classList.remove("active");
    }), y.addEventListener("click", (n) => {
      n.target.closest(".join-us").classList.toggle("active");
    });
  };
  return {
    setHandleEvent: function() {
      try {
        x();
      } catch (y) {
      }
    }
  };
})(), se = () => {
  ce.setHandleEvent();
}, de = (() => {
  const x = () => {
    const y = document.querySelector("#join-form-ctn"), d = document.querySelector(".header"), n = document.querySelector(".blob"), r = document.querySelector(".stars__container"), t = document.body;
    setTimeout(() => {
      t.appendChild(d), t.appendChild(y), t.appendChild(n), t.appendChild(r);
    }, 2500);
  };
  return {
    setHandleEvent: function() {
      try {
        x();
      } catch (y) {
      }
    }
  };
})(), ue = () => {
  de.setHandleEvent();
}, le = (() => {
  const x = () => {
    const y = document.querySelector(".blob");
    document.addEventListener("mousemove", function(d) {
      y.style.transform = `translate3d(calc(${d.clientX}px - 50%), calc(${d.clientY}px - 50%), 0)`;
    });
  };
  return {
    setHandleEvent: function() {
      try {
        x();
      } catch (y) {
      }
    }
  };
})(), fe = () => {
  le.setHandleEvent();
}, me = (() => {
  const x = (d) => {
    const n = path1.getTotalLength(), r = path2.getTotalLength();
    path1.style.strokeDasharray = n, path1.style.strokeDashoffset = n, path2.style.strokeDasharray = r, path2.style.strokeDashoffset = r;
  }, y = () => {
    document.querySelector(".loader #path1"), document.querySelector(".loader #path2"), x(), x();
  };
  return {
    setHandleEvent: function() {
      try {
        y();
      } catch (d) {
      }
    }
  };
})(), pe = () => {
  me.setHandleEvent();
};
var be = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, ee = { exports: {} };
(function(x, y) {
  (function(d, n) {
    x.exports = n();
  })(be, function() {
    return function(d) {
      function n(t) {
        if (r[t])
          return r[t].exports;
        var s = r[t] = { exports: {}, id: t, loaded: !1 };
        return d[t].call(s.exports, s, s.exports, n), s.loaded = !0, s.exports;
      }
      var r = {};
      return n.m = d, n.c = r, n.p = "dist/", n(0);
    }([function(d, n, r) {
      function t(i) {
        return i && i.__esModule ? i : { default: i };
      }
      var s = Object.assign || function(i) {
        for (var S = 1; S < arguments.length; S++) {
          var T = arguments[S];
          for (var C in T)
            Object.prototype.hasOwnProperty.call(T, C) && (i[C] = T[C]);
        }
        return i;
      }, f = r(1), g = (t(f), r(6)), a = t(g), p = r(7), c = t(p), l = r(8), u = t(l), b = r(9), E = t(b), H = r(10), I = t(H), G = r(11), K = t(G), J = r(14), R = t(J), _ = [], X = !1, h = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: !1, once: !1, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: !1 }, q = function() {
        var i = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
        if (i && (X = !0), X)
          return _ = (0, K.default)(_, h), (0, I.default)(_, h.once), _;
      }, $ = function() {
        _ = (0, R.default)(), q();
      }, o = function() {
        _.forEach(function(i, S) {
          i.node.removeAttribute("data-aos"), i.node.removeAttribute("data-aos-easing"), i.node.removeAttribute("data-aos-duration"), i.node.removeAttribute("data-aos-delay");
        });
      }, e = function(i) {
        return i === !0 || i === "mobile" && E.default.mobile() || i === "phone" && E.default.phone() || i === "tablet" && E.default.tablet() || typeof i == "function" && i() === !0;
      }, m = function(i) {
        h = s(h, i), _ = (0, R.default)();
        var S = document.all && !window.atob;
        return e(h.disable) || S ? o() : (h.disableMutationObserver || u.default.isSupported() || (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `), h.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", h.easing), document.querySelector("body").setAttribute("data-aos-duration", h.duration), document.querySelector("body").setAttribute("data-aos-delay", h.delay), h.startEvent === "DOMContentLoaded" && ["complete", "interactive"].indexOf(document.readyState) > -1 ? q(!0) : h.startEvent === "load" ? window.addEventListener(h.startEvent, function() {
          q(!0);
        }) : document.addEventListener(h.startEvent, function() {
          q(!0);
        }), window.addEventListener("resize", (0, c.default)(q, h.debounceDelay, !0)), window.addEventListener("orientationchange", (0, c.default)(q, h.debounceDelay, !0)), window.addEventListener("scroll", (0, a.default)(function() {
          (0, I.default)(_, h.once);
        }, h.throttleDelay)), h.disableMutationObserver || u.default.ready("[data-aos]", $), _);
      };
      d.exports = { init: m, refresh: q, refreshHard: $ };
    }, function(d, n) {
    }, , , , , function(d, n) {
      (function(r) {
        function t(e, m, i) {
          function S(v) {
            var O = M, B = A;
            return M = A = void 0, P = v, j = e.apply(B, O);
          }
          function T(v) {
            return P = v, k = setTimeout(W, m), F ? S(v) : j;
          }
          function C(v) {
            var O = v - L, B = v - P, Z = m - O;
            return D ? $(Z, N - B) : Z;
          }
          function Y(v) {
            var O = v - L, B = v - P;
            return L === void 0 || O >= m || O < 0 || D && B >= N;
          }
          function W() {
            var v = o();
            return Y(v) ? U(v) : void (k = setTimeout(W, C(v)));
          }
          function U(v) {
            return k = void 0, w && M ? S(v) : (M = A = void 0, j);
          }
          function V() {
            k !== void 0 && clearTimeout(k), P = 0, M = L = A = k = void 0;
          }
          function Q() {
            return k === void 0 ? j : U(o());
          }
          function z() {
            var v = o(), O = Y(v);
            if (M = arguments, A = this, L = v, O) {
              if (k === void 0)
                return T(L);
              if (D)
                return k = setTimeout(W, m), S(L);
            }
            return k === void 0 && (k = setTimeout(W, m)), j;
          }
          var M, A, N, j, k, L, P = 0, F = !1, D = !1, w = !0;
          if (typeof e != "function")
            throw new TypeError(l);
          return m = p(m) || 0, f(i) && (F = !!i.leading, D = "maxWait" in i, N = D ? q(p(i.maxWait) || 0, m) : N, w = "trailing" in i ? !!i.trailing : w), z.cancel = V, z.flush = Q, z;
        }
        function s(e, m, i) {
          var S = !0, T = !0;
          if (typeof e != "function")
            throw new TypeError(l);
          return f(i) && (S = "leading" in i ? !!i.leading : S, T = "trailing" in i ? !!i.trailing : T), t(e, m, { leading: S, maxWait: m, trailing: T });
        }
        function f(e) {
          var m = typeof e == "undefined" ? "undefined" : c(e);
          return !!e && (m == "object" || m == "function");
        }
        function g(e) {
          return !!e && (typeof e == "undefined" ? "undefined" : c(e)) == "object";
        }
        function a(e) {
          return (typeof e == "undefined" ? "undefined" : c(e)) == "symbol" || g(e) && h.call(e) == b;
        }
        function p(e) {
          if (typeof e == "number")
            return e;
          if (a(e))
            return u;
          if (f(e)) {
            var m = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = f(m) ? m + "" : m;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = e.replace(E, "");
          var i = I.test(e);
          return i || G.test(e) ? K(e.slice(2), i ? 2 : 8) : H.test(e) ? u : +e;
        }
        var c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e;
        } : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, l = "Expected a function", u = NaN, b = "[object Symbol]", E = /^\s+|\s+$/g, H = /^[-+]0x[0-9a-f]+$/i, I = /^0b[01]+$/i, G = /^0o[0-7]+$/i, K = parseInt, J = (typeof r == "undefined" ? "undefined" : c(r)) == "object" && r && r.Object === Object && r, R = (typeof self == "undefined" ? "undefined" : c(self)) == "object" && self && self.Object === Object && self, _ = J || R || Function("return this")(), X = Object.prototype, h = X.toString, q = Math.max, $ = Math.min, o = function() {
          return _.Date.now();
        };
        d.exports = s;
      }).call(n, function() {
        return this;
      }());
    }, function(d, n) {
      (function(r) {
        function t(o, e, m) {
          function i(w) {
            var v = z, O = M;
            return z = M = void 0, L = w, N = o.apply(O, v);
          }
          function S(w) {
            return L = w, j = setTimeout(Y, e), P ? i(w) : N;
          }
          function T(w) {
            var v = w - k, O = w - L, B = e - v;
            return F ? q(B, A - O) : B;
          }
          function C(w) {
            var v = w - k, O = w - L;
            return k === void 0 || v >= e || v < 0 || F && O >= A;
          }
          function Y() {
            var w = $();
            return C(w) ? W(w) : void (j = setTimeout(Y, T(w)));
          }
          function W(w) {
            return j = void 0, D && z ? i(w) : (z = M = void 0, N);
          }
          function U() {
            j !== void 0 && clearTimeout(j), L = 0, z = k = M = j = void 0;
          }
          function V() {
            return j === void 0 ? N : W($());
          }
          function Q() {
            var w = $(), v = C(w);
            if (z = arguments, M = this, k = w, v) {
              if (j === void 0)
                return S(k);
              if (F)
                return j = setTimeout(Y, e), i(k);
            }
            return j === void 0 && (j = setTimeout(Y, e)), N;
          }
          var z, M, A, N, j, k, L = 0, P = !1, F = !1, D = !0;
          if (typeof o != "function")
            throw new TypeError(c);
          return e = a(e) || 0, s(m) && (P = !!m.leading, F = "maxWait" in m, A = F ? h(a(m.maxWait) || 0, e) : A, D = "trailing" in m ? !!m.trailing : D), Q.cancel = U, Q.flush = V, Q;
        }
        function s(o) {
          var e = typeof o == "undefined" ? "undefined" : p(o);
          return !!o && (e == "object" || e == "function");
        }
        function f(o) {
          return !!o && (typeof o == "undefined" ? "undefined" : p(o)) == "object";
        }
        function g(o) {
          return (typeof o == "undefined" ? "undefined" : p(o)) == "symbol" || f(o) && X.call(o) == u;
        }
        function a(o) {
          if (typeof o == "number")
            return o;
          if (g(o))
            return l;
          if (s(o)) {
            var e = typeof o.valueOf == "function" ? o.valueOf() : o;
            o = s(e) ? e + "" : e;
          }
          if (typeof o != "string")
            return o === 0 ? o : +o;
          o = o.replace(b, "");
          var m = H.test(o);
          return m || I.test(o) ? G(o.slice(2), m ? 2 : 8) : E.test(o) ? l : +o;
        }
        var p = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
          return typeof o;
        } : function(o) {
          return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, c = "Expected a function", l = NaN, u = "[object Symbol]", b = /^\s+|\s+$/g, E = /^[-+]0x[0-9a-f]+$/i, H = /^0b[01]+$/i, I = /^0o[0-7]+$/i, G = parseInt, K = (typeof r == "undefined" ? "undefined" : p(r)) == "object" && r && r.Object === Object && r, J = (typeof self == "undefined" ? "undefined" : p(self)) == "object" && self && self.Object === Object && self, R = K || J || Function("return this")(), _ = Object.prototype, X = _.toString, h = Math.max, q = Math.min, $ = function() {
          return R.Date.now();
        };
        d.exports = t;
      }).call(n, function() {
        return this;
      }());
    }, function(d, n) {
      function r(p) {
        var c = void 0, l = void 0;
        for (c = 0; c < p.length; c += 1)
          if (l = p[c], l.dataset && l.dataset.aos || l.children && r(l.children))
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
        var l = window.document, u = t(), b = new u(g);
        a = c, b.observe(l.documentElement, { childList: !0, subtree: !0, removedNodes: !0 });
      }
      function g(p) {
        p && p.forEach(function(c) {
          var l = Array.prototype.slice.call(c.addedNodes), u = Array.prototype.slice.call(c.removedNodes), b = l.concat(u);
          if (r(b))
            return a();
        });
      }
      Object.defineProperty(n, "__esModule", { value: !0 });
      var a = function() {
      };
      n.default = { isSupported: s, ready: f };
    }, function(d, n) {
      function r(l, u) {
        if (!(l instanceof u))
          throw new TypeError("Cannot call a class as a function");
      }
      function t() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
      }
      Object.defineProperty(n, "__esModule", { value: !0 });
      var s = function() {
        function l(u, b) {
          for (var E = 0; E < b.length; E++) {
            var H = b[E];
            H.enumerable = H.enumerable || !1, H.configurable = !0, "value" in H && (H.writable = !0), Object.defineProperty(u, H.key, H);
          }
        }
        return function(u, b, E) {
          return b && l(u.prototype, b), E && l(u, E), u;
        };
      }(), f = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, g = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, a = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, p = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, c = function() {
        function l() {
          r(this, l);
        }
        return s(l, [{ key: "phone", value: function() {
          var u = t();
          return !(!f.test(u) && !g.test(u.substr(0, 4)));
        } }, { key: "mobile", value: function() {
          var u = t();
          return !(!a.test(u) && !p.test(u.substr(0, 4)));
        } }, { key: "tablet", value: function() {
          return this.mobile() && !this.phone();
        } }]), l;
      }();
      n.default = new c();
    }, function(d, n) {
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = function(s, f, g) {
        var a = s.node.getAttribute("data-aos-once");
        f > s.position ? s.node.classList.add("aos-animate") : typeof a != "undefined" && (a === "false" || !g && a !== "true") && s.node.classList.remove("aos-animate");
      }, t = function(s, f) {
        var g = window.pageYOffset, a = window.innerHeight;
        s.forEach(function(p, c) {
          r(p, a + g, f);
        });
      };
      n.default = t;
    }, function(d, n, r) {
      function t(a) {
        return a && a.__esModule ? a : { default: a };
      }
      Object.defineProperty(n, "__esModule", { value: !0 });
      var s = r(12), f = t(s), g = function(a, p) {
        return a.forEach(function(c, l) {
          c.node.classList.add("aos-init"), c.position = (0, f.default)(c.node, p.offset);
        }), a;
      };
      n.default = g;
    }, function(d, n, r) {
      function t(a) {
        return a && a.__esModule ? a : { default: a };
      }
      Object.defineProperty(n, "__esModule", { value: !0 });
      var s = r(13), f = t(s), g = function(a, p) {
        var c = 0, l = 0, u = window.innerHeight, b = { offset: a.getAttribute("data-aos-offset"), anchor: a.getAttribute("data-aos-anchor"), anchorPlacement: a.getAttribute("data-aos-anchor-placement") };
        switch (b.offset && !isNaN(b.offset) && (l = parseInt(b.offset)), b.anchor && document.querySelectorAll(b.anchor) && (a = document.querySelectorAll(b.anchor)[0]), c = (0, f.default)(a).top, b.anchorPlacement) {
          case "top-bottom":
            break;
          case "center-bottom":
            c += a.offsetHeight / 2;
            break;
          case "bottom-bottom":
            c += a.offsetHeight;
            break;
          case "top-center":
            c += u / 2;
            break;
          case "bottom-center":
            c += u / 2 + a.offsetHeight;
            break;
          case "center-center":
            c += u / 2 + a.offsetHeight / 2;
            break;
          case "top-top":
            c += u;
            break;
          case "bottom-top":
            c += a.offsetHeight + u;
            break;
          case "center-top":
            c += a.offsetHeight / 2 + u;
        }
        return b.anchorPlacement || b.offset || isNaN(p) || (l = p), c + l;
      };
      n.default = g;
    }, function(d, n) {
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = function(t) {
        for (var s = 0, f = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop); )
          s += t.offsetLeft - (t.tagName != "BODY" ? t.scrollLeft : 0), f += t.offsetTop - (t.tagName != "BODY" ? t.scrollTop : 0), t = t.offsetParent;
        return { top: f, left: s };
      };
      n.default = r;
    }, function(d, n) {
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = function(t) {
        return t = t || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(t, function(s) {
          return { node: s };
        });
      };
      n.default = r;
    }]);
  });
})(ee);
var ve = ee.exports;
const ye = (() => {
  const x = () => {
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
        x();
      } catch (y) {
      }
    }
  };
})(), ge = () => {
  ye.setHandleEvent();
};
window.addEventListener("load", () => {
  ne(), pe(), re(), ie(), se(), ue(), ge(), fe();
});
//# sourceMappingURL=mainscript.js.map
