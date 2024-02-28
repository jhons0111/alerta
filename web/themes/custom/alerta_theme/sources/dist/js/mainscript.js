var re = (v, d) => () => (d || v((d = { exports: {} }).exports, d), d.exports);
var ee = (v, d, a) => new Promise((e, n) => {
  var o = (f) => {
    try {
      u(a.next(f));
    } catch (r) {
      n(r);
    }
  }, i = (f) => {
    try {
      u(a.throw(f));
    } catch (r) {
      n(r);
    }
  }, u = (f) => f.done ? e(f.value) : Promise.resolve(f.value).then(o, i);
  u((a = a.apply(v, d)).next());
});
var He = re((ne) => {
  const ae = (() => {
    const v = () => {
      const d = document.querySelector(".loader");
      setTimeout(() => {
        d.classList.add("line-animate");
      }, 1500), setTimeout(() => {
        d.classList.add("hidden");
      }, 2250);
    };
    return {
      setHandleEvent: function() {
        try {
          v();
        } catch (d) {
        }
      }
    };
  })(), ie = () => {
    ae.setHandleEvent();
  }, ce = (() => {
    const v = () => {
      let d = 0;
      window.addEventListener("scroll", function() {
        const a = window.pageYOffset || document.documentElement.scrollTop, e = document.querySelector(".header");
        a > d ? e.classList.add("scroll") : a < d && e.classList.remove("scroll"), d = a <= 0 ? 0 : a;
      });
    };
    return {
      setHandleEvent: function() {
        try {
          v();
        } catch (d) {
        }
      }
    };
  })(), se = () => {
    ce.setHandleEvent();
  }, le = (() => {
    const v = () => {
      const d = () => {
        const a = document.body, e = document.querySelector(".dialog-off-canvas-main-canvas"), n = document.querySelector(".scroll-down");
        let o = 0, i = 0, u = o, f = i;
        a.style.height = e.clientHeight + "px", e.style.position = "fixed", e.style.top = 0, e.style.left = 0, window.addEventListener("scroll", r), window.addEventListener("scroll", () => {
          a.style.height = e.clientHeight + "px";
        }), window.addEventListener("resize", () => {
          a.style.height = e.clientHeight + "px";
        });
        function r() {
          o = window.pageXOffset, i = window.pageYOffset;
        }
        window.requestAnimationFrame(b);
        function b() {
          u = s(u, o, 0.07), f = s(f, i, 0.07), u = Math.floor(u * 100) / 100, f = Math.floor(f * 100) / 100, e.style.transform = `translate3d(-${u}px, -${f}px, 0px)`, n.style.transform = `translate3d(-${u}px, -${f}px, 0px)`, window.requestAnimationFrame(b);
        }
        function s(p, m, g) {
          return (1 - g) * p + g * m;
        }
      };
      setTimeout(() => {
        window.screen.width >= 992 && d();
      }, 2e3);
    };
    return {
      setHandleEvent: function() {
        try {
          v();
        } catch (d) {
        }
      }
    };
  })(), de = () => {
    le.setHandleEvent();
  }, ue = (() => {
    const v = () => {
      const d = document.querySelector("#open-form"), a = document.querySelector("#join-form-ctn .join-us__bg");
      console.log(a), a.addEventListener("click", (e) => {
        console.log("click"), e.target.closest(".join-us").classList.remove("active");
      }), d.addEventListener("click", (e) => {
        e.target.closest(".join-us").classList.toggle("active");
      });
    };
    return {
      setHandleEvent: function() {
        try {
          v();
        } catch (d) {
        }
      }
    };
  })(), fe = () => {
    ue.setHandleEvent();
  }, me = (() => {
    const v = () => {
      const d = document.querySelector("#join-form-ctn"), a = document.querySelector(".header"), e = document.querySelector(".blob"), n = document.querySelector(".stars__container"), o = document.querySelector("#modal-content"), i = document.body;
      setTimeout(() => {
        i.appendChild(a), i.appendChild(d), i.appendChild(e), i.appendChild(n), i.appendChild(o);
      }, 2500);
    };
    return {
      setHandleEvent: function() {
        try {
          v();
        } catch (d) {
        }
      }
    };
  })(), pe = () => {
    me.setHandleEvent();
  }, ve = (() => {
    const v = () => {
      const d = document.querySelector(".blob");
      document.addEventListener("mousemove", function(a) {
        d.style.transform = `translate3d(calc(${a.clientX}px - 50%), calc(${a.clientY}px - 50%), 0)`;
      });
    };
    return {
      setHandleEvent: function() {
        try {
          v();
        } catch (d) {
        }
      }
    };
  })(), be = () => {
    ve.setHandleEvent();
  }, ye = (() => {
    const v = (a) => {
      const e = path1.getTotalLength(), n = path2.getTotalLength();
      path1.style.strokeDasharray = e, path1.style.strokeDashoffset = e, path2.style.strokeDasharray = n, path2.style.strokeDashoffset = n;
    }, d = () => {
      document.querySelector(".loader #path1"), document.querySelector(".loader #path2"), v(), v();
    };
    return {
      setHandleEvent: function() {
        try {
          d();
        } catch (a) {
        }
      }
    };
  })(), ge = () => {
    ye.setHandleEvent();
  };
  var he = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, oe = { exports: {} };
  (function(v, d) {
    (function(a, e) {
      v.exports = e();
    })(he, function() {
      return function(a) {
        function e(o) {
          if (n[o])
            return n[o].exports;
          var i = n[o] = { exports: {}, id: o, loaded: !1 };
          return a[o].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
        }
        var n = {};
        return e.m = a, e.c = n, e.p = "dist/", e(0);
      }([function(a, e, n) {
        function o(l) {
          return l && l.__esModule ? l : { default: l };
        }
        var i = Object.assign || function(l) {
          for (var S = 1; S < arguments.length; S++) {
            var q = arguments[S];
            for (var N in q)
              Object.prototype.hasOwnProperty.call(q, N) && (l[N] = q[N]);
          }
          return l;
        }, u = n(1), f = (o(u), n(6)), r = o(f), b = n(7), s = o(b), p = n(8), m = o(p), g = n(9), j = o(g), O = n(10), G = o(O), X = n(11), K = o(X), J = n(14), I = o(J), H = [], R = !1, w = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: !1, once: !1, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: !1 }, M = function() {
          var l = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
          if (l && (R = !0), R)
            return H = (0, K.default)(H, w), (0, G.default)(H, w.once), H;
        }, D = function() {
          H = (0, I.default)(), M();
        }, c = function() {
          H.forEach(function(l, S) {
            l.node.removeAttribute("data-aos"), l.node.removeAttribute("data-aos-easing"), l.node.removeAttribute("data-aos-duration"), l.node.removeAttribute("data-aos-delay");
          });
        }, t = function(l) {
          return l === !0 || l === "mobile" && j.default.mobile() || l === "phone" && j.default.phone() || l === "tablet" && j.default.tablet() || typeof l == "function" && l() === !0;
        }, y = function(l) {
          w = i(w, l), H = (0, I.default)();
          var S = document.all && !window.atob;
          return t(w.disable) || S ? c() : (w.disableMutationObserver || m.default.isSupported() || (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `), w.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", w.easing), document.querySelector("body").setAttribute("data-aos-duration", w.duration), document.querySelector("body").setAttribute("data-aos-delay", w.delay), w.startEvent === "DOMContentLoaded" && ["complete", "interactive"].indexOf(document.readyState) > -1 ? M(!0) : w.startEvent === "load" ? window.addEventListener(w.startEvent, function() {
            M(!0);
          }) : document.addEventListener(w.startEvent, function() {
            M(!0);
          }), window.addEventListener("resize", (0, s.default)(M, w.debounceDelay, !0)), window.addEventListener("orientationchange", (0, s.default)(M, w.debounceDelay, !0)), window.addEventListener("scroll", (0, r.default)(function() {
            (0, G.default)(H, w.once);
          }, w.throttleDelay)), w.disableMutationObserver || m.default.ready("[data-aos]", D), H);
        };
        a.exports = { init: y, refresh: M, refreshHard: D };
      }, function(a, e) {
      }, , , , , function(a, e) {
        (function(n) {
          function o(t, y, l) {
            function S(h) {
              var _ = L, Y = A;
              return L = A = void 0, P = h, E = t.apply(Y, _);
            }
            function q(h) {
              return P = h, x = setTimeout(W, y), F ? S(h) : E;
            }
            function N(h) {
              var _ = h - T, Y = h - P, Z = y - _;
              return C ? D(Z, z - Y) : Z;
            }
            function B(h) {
              var _ = h - T, Y = h - P;
              return T === void 0 || _ >= y || _ < 0 || C && Y >= z;
            }
            function W() {
              var h = c();
              return B(h) ? U(h) : void (x = setTimeout(W, N(h)));
            }
            function U(h) {
              return x = void 0, k && L ? S(h) : (L = A = void 0, E);
            }
            function V() {
              x !== void 0 && clearTimeout(x), P = 0, L = T = A = x = void 0;
            }
            function Q() {
              return x === void 0 ? E : U(c());
            }
            function $() {
              var h = c(), _ = B(h);
              if (L = arguments, A = this, T = h, _) {
                if (x === void 0)
                  return q(T);
                if (C)
                  return x = setTimeout(W, y), S(T);
              }
              return x === void 0 && (x = setTimeout(W, y)), E;
            }
            var L, A, z, E, x, T, P = 0, F = !1, C = !1, k = !0;
            if (typeof t != "function")
              throw new TypeError(p);
            return y = b(y) || 0, u(l) && (F = !!l.leading, C = "maxWait" in l, z = C ? M(b(l.maxWait) || 0, y) : z, k = "trailing" in l ? !!l.trailing : k), $.cancel = V, $.flush = Q, $;
          }
          function i(t, y, l) {
            var S = !0, q = !0;
            if (typeof t != "function")
              throw new TypeError(p);
            return u(l) && (S = "leading" in l ? !!l.leading : S, q = "trailing" in l ? !!l.trailing : q), o(t, y, { leading: S, maxWait: y, trailing: q });
          }
          function u(t) {
            var y = typeof t == "undefined" ? "undefined" : s(t);
            return !!t && (y == "object" || y == "function");
          }
          function f(t) {
            return !!t && (typeof t == "undefined" ? "undefined" : s(t)) == "object";
          }
          function r(t) {
            return (typeof t == "undefined" ? "undefined" : s(t)) == "symbol" || f(t) && w.call(t) == g;
          }
          function b(t) {
            if (typeof t == "number")
              return t;
            if (r(t))
              return m;
            if (u(t)) {
              var y = typeof t.valueOf == "function" ? t.valueOf() : t;
              t = u(y) ? y + "" : y;
            }
            if (typeof t != "string")
              return t === 0 ? t : +t;
            t = t.replace(j, "");
            var l = G.test(t);
            return l || X.test(t) ? K(t.slice(2), l ? 2 : 8) : O.test(t) ? m : +t;
          }
          var s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
            return typeof t;
          } : function(t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          }, p = "Expected a function", m = NaN, g = "[object Symbol]", j = /^\s+|\s+$/g, O = /^[-+]0x[0-9a-f]+$/i, G = /^0b[01]+$/i, X = /^0o[0-7]+$/i, K = parseInt, J = (typeof n == "undefined" ? "undefined" : s(n)) == "object" && n && n.Object === Object && n, I = (typeof self == "undefined" ? "undefined" : s(self)) == "object" && self && self.Object === Object && self, H = J || I || Function("return this")(), R = Object.prototype, w = R.toString, M = Math.max, D = Math.min, c = function() {
            return H.Date.now();
          };
          a.exports = i;
        }).call(e, function() {
          return this;
        }());
      }, function(a, e) {
        (function(n) {
          function o(c, t, y) {
            function l(k) {
              var h = $, _ = L;
              return $ = L = void 0, T = k, z = c.apply(_, h);
            }
            function S(k) {
              return T = k, E = setTimeout(B, t), P ? l(k) : z;
            }
            function q(k) {
              var h = k - x, _ = k - T, Y = t - h;
              return F ? M(Y, A - _) : Y;
            }
            function N(k) {
              var h = k - x, _ = k - T;
              return x === void 0 || h >= t || h < 0 || F && _ >= A;
            }
            function B() {
              var k = D();
              return N(k) ? W(k) : void (E = setTimeout(B, q(k)));
            }
            function W(k) {
              return E = void 0, C && $ ? l(k) : ($ = L = void 0, z);
            }
            function U() {
              E !== void 0 && clearTimeout(E), T = 0, $ = x = L = E = void 0;
            }
            function V() {
              return E === void 0 ? z : W(D());
            }
            function Q() {
              var k = D(), h = N(k);
              if ($ = arguments, L = this, x = k, h) {
                if (E === void 0)
                  return S(x);
                if (F)
                  return E = setTimeout(B, t), l(x);
              }
              return E === void 0 && (E = setTimeout(B, t)), z;
            }
            var $, L, A, z, E, x, T = 0, P = !1, F = !1, C = !0;
            if (typeof c != "function")
              throw new TypeError(s);
            return t = r(t) || 0, i(y) && (P = !!y.leading, F = "maxWait" in y, A = F ? w(r(y.maxWait) || 0, t) : A, C = "trailing" in y ? !!y.trailing : C), Q.cancel = U, Q.flush = V, Q;
          }
          function i(c) {
            var t = typeof c == "undefined" ? "undefined" : b(c);
            return !!c && (t == "object" || t == "function");
          }
          function u(c) {
            return !!c && (typeof c == "undefined" ? "undefined" : b(c)) == "object";
          }
          function f(c) {
            return (typeof c == "undefined" ? "undefined" : b(c)) == "symbol" || u(c) && R.call(c) == m;
          }
          function r(c) {
            if (typeof c == "number")
              return c;
            if (f(c))
              return p;
            if (i(c)) {
              var t = typeof c.valueOf == "function" ? c.valueOf() : c;
              c = i(t) ? t + "" : t;
            }
            if (typeof c != "string")
              return c === 0 ? c : +c;
            c = c.replace(g, "");
            var y = O.test(c);
            return y || G.test(c) ? X(c.slice(2), y ? 2 : 8) : j.test(c) ? p : +c;
          }
          var b = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(c) {
            return typeof c;
          } : function(c) {
            return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
          }, s = "Expected a function", p = NaN, m = "[object Symbol]", g = /^\s+|\s+$/g, j = /^[-+]0x[0-9a-f]+$/i, O = /^0b[01]+$/i, G = /^0o[0-7]+$/i, X = parseInt, K = (typeof n == "undefined" ? "undefined" : b(n)) == "object" && n && n.Object === Object && n, J = (typeof self == "undefined" ? "undefined" : b(self)) == "object" && self && self.Object === Object && self, I = K || J || Function("return this")(), H = Object.prototype, R = H.toString, w = Math.max, M = Math.min, D = function() {
            return I.Date.now();
          };
          a.exports = o;
        }).call(e, function() {
          return this;
        }());
      }, function(a, e) {
        function n(b) {
          var s = void 0, p = void 0;
          for (s = 0; s < b.length; s += 1)
            if (p = b[s], p.dataset && p.dataset.aos || p.children && n(p.children))
              return !0;
          return !1;
        }
        function o() {
          return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        }
        function i() {
          return !!o();
        }
        function u(b, s) {
          var p = window.document, m = o(), g = new m(f);
          r = s, g.observe(p.documentElement, { childList: !0, subtree: !0, removedNodes: !0 });
        }
        function f(b) {
          b && b.forEach(function(s) {
            var p = Array.prototype.slice.call(s.addedNodes), m = Array.prototype.slice.call(s.removedNodes), g = p.concat(m);
            if (n(g))
              return r();
          });
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function() {
        };
        e.default = { isSupported: i, ready: u };
      }, function(a, e) {
        function n(p, m) {
          if (!(p instanceof m))
            throw new TypeError("Cannot call a class as a function");
        }
        function o() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = function() {
          function p(m, g) {
            for (var j = 0; j < g.length; j++) {
              var O = g[j];
              O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(m, O.key, O);
            }
          }
          return function(m, g, j) {
            return g && p(m.prototype, g), j && p(m, j), m;
          };
        }(), u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, f = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, b = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s = function() {
          function p() {
            n(this, p);
          }
          return i(p, [{ key: "phone", value: function() {
            var m = o();
            return !(!u.test(m) && !f.test(m.substr(0, 4)));
          } }, { key: "mobile", value: function() {
            var m = o();
            return !(!r.test(m) && !b.test(m.substr(0, 4)));
          } }, { key: "tablet", value: function() {
            return this.mobile() && !this.phone();
          } }]), p;
        }();
        e.default = new s();
      }, function(a, e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = function(i, u, f) {
          var r = i.node.getAttribute("data-aos-once");
          u > i.position ? i.node.classList.add("aos-animate") : typeof r != "undefined" && (r === "false" || !f && r !== "true") && i.node.classList.remove("aos-animate");
        }, o = function(i, u) {
          var f = window.pageYOffset, r = window.innerHeight;
          i.forEach(function(b, s) {
            n(b, r + f, u);
          });
        };
        e.default = o;
      }, function(a, e, n) {
        function o(r) {
          return r && r.__esModule ? r : { default: r };
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(12), u = o(i), f = function(r, b) {
          return r.forEach(function(s, p) {
            s.node.classList.add("aos-init"), s.position = (0, u.default)(s.node, b.offset);
          }), r;
        };
        e.default = f;
      }, function(a, e, n) {
        function o(r) {
          return r && r.__esModule ? r : { default: r };
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(13), u = o(i), f = function(r, b) {
          var s = 0, p = 0, m = window.innerHeight, g = { offset: r.getAttribute("data-aos-offset"), anchor: r.getAttribute("data-aos-anchor"), anchorPlacement: r.getAttribute("data-aos-anchor-placement") };
          switch (g.offset && !isNaN(g.offset) && (p = parseInt(g.offset)), g.anchor && document.querySelectorAll(g.anchor) && (r = document.querySelectorAll(g.anchor)[0]), s = (0, u.default)(r).top, g.anchorPlacement) {
            case "top-bottom":
              break;
            case "center-bottom":
              s += r.offsetHeight / 2;
              break;
            case "bottom-bottom":
              s += r.offsetHeight;
              break;
            case "top-center":
              s += m / 2;
              break;
            case "bottom-center":
              s += m / 2 + r.offsetHeight;
              break;
            case "center-center":
              s += m / 2 + r.offsetHeight / 2;
              break;
            case "top-top":
              s += m;
              break;
            case "bottom-top":
              s += r.offsetHeight + m;
              break;
            case "center-top":
              s += r.offsetHeight / 2 + m;
          }
          return g.anchorPlacement || g.offset || isNaN(b) || (p = b), s + p;
        };
        e.default = f;
      }, function(a, e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = function(o) {
          for (var i = 0, u = 0; o && !isNaN(o.offsetLeft) && !isNaN(o.offsetTop); )
            i += o.offsetLeft - (o.tagName != "BODY" ? o.scrollLeft : 0), u += o.offsetTop - (o.tagName != "BODY" ? o.scrollTop : 0), o = o.offsetParent;
          return { top: u, left: i };
        };
        e.default = n;
      }, function(a, e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = function(o) {
          return o = o || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(o, function(i) {
            return { node: i };
          });
        };
        e.default = n;
      }]);
    });
  })(oe);
  var we = oe.exports;
  const ke = (() => {
    const v = () => {
      setTimeout(() => {
        we.init({
          duration: 1e3,
          easing: "ease",
          once: !0
        });
      }, 2250);
    };
    return {
      setHandleEvent: function() {
        try {
          v();
        } catch (d) {
        }
      }
    };
  })(), xe = () => {
    ke.setHandleEvent();
  }, Ee = () => {
    const v = window.pageYOffset || document.documentElement.scrollTop, d = window.pageXOffset || document.documentElement.scrollLeft;
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    }), window.onscroll = function() {
      window.scrollTo(d, v);
    };
  }, te = (v) => ee(ne, null, function* () {
    const d = yield fetch(v, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }), a = d.status;
    return a == 404 ? a : yield d.json();
  }), Se = (v, d, a) => `<picture data-colaborator="${d}" style="--left: ${v * 70}px; --index: 0.${v}s">
                <img src="${a}" alt="">
            </picture>`, je = (v, d, a, e, n) => `
    <div class="item">
        <picture>
            <img src="${v}" alt="">
        </picture>
        <picture>
            <img src="/themes/custom/alerta_theme/sources/dist/assets/img/jpg/bg-modal.jpg" alt="">
        </picture>
        <div class="modal__name">
            <p>${d}</p>
        </div>
    </div>
    <div class="item">
        <div class="modal__close close-modal">
            <picture>
                <img src="/themes/custom/alerta_theme/sources/dist/assets/img/svg/star-modal.svg" alt="">
            </picture>
        </div>
        <div class="modal__dsc">
            <h4>${a}</h4>
            <p>${e}</p>
        </div>
        <div class="block">
            ${n.map(function(o) {
    return `<picture><img src="${o}" alt="categories"></picture>`;
  })}
        </div>
    </div>
    `, _e = (() => {
    const v = () => {
      const e = document.querySelector("#render-team");
      te("/api/colaborators").then((n) => {
        n.forEach((o, i) => {
          const { colaborator_id: u, picture: f } = o, r = Se(i, u, f);
          e.innerHTML += r, d();
        });
      });
    }, d = () => {
      const e = document.querySelectorAll("#render-team picture"), n = document.querySelector("#modal-content .modal");
      e.forEach((o) => {
        o.addEventListener("click", (i) => {
          te(`/api/colaborator/${i.target.dataset.colaborator}`).then((u) => {
            const { picture: f, name: r, position: b, description: s, habilities: p } = u;
            console.log(u);
            const m = je(f, r, b, s, p);
            n.classList.add("active"), n.querySelector(".modal__content").innerHTML = m, a();
          });
        });
      });
    }, a = () => {
      document.querySelectorAll(".close-modal").forEach((n) => {
        n.addEventListener("click", (o) => {
          o.target.closest(".modal").classList.remove("active");
        });
      });
    };
    return {
      setHandleEvent: function() {
        try {
          v();
        } catch (e) {
        }
      }
    };
  })(), Oe = () => {
    _e.setHandleEvent();
  };
  Ee();
  window.addEventListener("load", () => {
    de(), ie(), ge(), se(), fe(), pe(), xe(), be(), Oe(), window.onscroll = null;
  });
});
export default He();
//# sourceMappingURL=mainscript.js.map
