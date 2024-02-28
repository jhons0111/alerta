const te = (() => {
  const k = () => {
    const v = document.querySelector(".loader");
    setTimeout(() => {
      v.classList.add("line-animate");
    }, 1500), setTimeout(() => {
      v.classList.add("hidden");
    }, 2250);
  };
  return {
    setHandleEvent: function() {
      try {
        k();
      } catch (v) {
      }
    }
  };
})(), oe = () => {
  te.setHandleEvent();
}, ne = (() => {
  const k = () => {
    let v = 0;
    window.addEventListener("scroll", function() {
      const u = window.pageYOffset || document.documentElement.scrollTop, n = document.querySelector(".header");
      u > v ? n.classList.add("scroll") : u < v && n.classList.remove("scroll"), v = u <= 0 ? 0 : u;
    });
  };
  return {
    setHandleEvent: function() {
      try {
        k();
      } catch (v) {
      }
    }
  };
})(), re = () => {
  ne.setHandleEvent();
}, ae = (() => {
  const k = () => {
    const v = document.querySelector("#open-form"), u = document.querySelector("#join-form-ctn .join-us__bg");
    console.log(u), u.addEventListener("click", (n) => {
      console.log("click"), n.target.closest(".join-us").classList.remove("active");
    }), v.addEventListener("click", (n) => {
      n.target.closest(".join-us").classList.toggle("active");
    });
  };
  return {
    setHandleEvent: function() {
      try {
        k();
      } catch (v) {
      }
    }
  };
})(), ie = () => {
  ae.setHandleEvent();
}, ce = (() => {
  const k = () => {
    const v = document.querySelector("#join-form-ctn"), u = document.querySelector(".header"), n = document.querySelector(".blob"), r = document.querySelector(".stars__container"), t = document.querySelector("#modal-content"), c = document.body;
    setTimeout(() => {
      c.appendChild(u), c.appendChild(v), c.appendChild(n), c.appendChild(r), c.appendChild(t);
    }, 2500);
  };
  return {
    setHandleEvent: function() {
      try {
        k();
      } catch (v) {
      }
    }
  };
})(), se = () => {
  ce.setHandleEvent();
}, ue = (() => {
  const k = () => {
    const v = document.querySelector(".blob");
    document.addEventListener("mousemove", function(u) {
      v.style.transform = `translate3d(calc(${u.clientX}px - 50%), calc(${u.clientY}px - 50%), 0)`;
    });
  };
  return {
    setHandleEvent: function() {
      try {
        k();
      } catch (v) {
      }
    }
  };
})(), de = () => {
  ue.setHandleEvent();
}, le = (() => {
  const k = (u) => {
    const n = path1.getTotalLength(), r = path2.getTotalLength();
    path1.style.strokeDasharray = n, path1.style.strokeDashoffset = n, path2.style.strokeDasharray = r, path2.style.strokeDashoffset = r;
  }, v = () => {
    document.querySelector(".loader #path1"), document.querySelector(".loader #path2"), k(), k();
  };
  return {
    setHandleEvent: function() {
      try {
        v();
      } catch (u) {
      }
    }
  };
})(), fe = () => {
  le.setHandleEvent();
};
var me = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, ee = { exports: {} };
(function(k, v) {
  (function(u, n) {
    k.exports = n();
  })(me, function() {
    return function(u) {
      function n(t) {
        if (r[t])
          return r[t].exports;
        var c = r[t] = { exports: {}, id: t, loaded: !1 };
        return u[t].call(c.exports, c, c.exports, n), c.loaded = !0, c.exports;
      }
      var r = {};
      return n.m = u, n.c = r, n.p = "dist/", n(0);
    }([function(u, n, r) {
      function t(a) {
        return a && a.__esModule ? a : { default: a };
      }
      var c = Object.assign || function(a) {
        for (var O = 1; O < arguments.length; O++) {
          var q = arguments[O];
          for (var P in q)
            Object.prototype.hasOwnProperty.call(q, P) && (a[P] = q[P]);
        }
        return a;
      }, y = r(1), x = (t(y), r(6)), i = t(x), p = r(7), s = t(p), l = r(8), d = t(l), b = r(9), E = t(b), _ = r(10), I = t(_), K = r(11), R = t(K), J = r(14), X = t(J), L = [], G = !1, g = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: !1, once: !1, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: !1 }, T = function() {
        var a = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
        if (a && (G = !0), G)
          return L = (0, R.default)(L, g), (0, I.default)(L, g.once), L;
      }, D = function() {
        L = (0, X.default)(), T();
      }, o = function() {
        L.forEach(function(a, O) {
          a.node.removeAttribute("data-aos"), a.node.removeAttribute("data-aos-easing"), a.node.removeAttribute("data-aos-duration"), a.node.removeAttribute("data-aos-delay");
        });
      }, e = function(a) {
        return a === !0 || a === "mobile" && E.default.mobile() || a === "phone" && E.default.phone() || a === "tablet" && E.default.tablet() || typeof a == "function" && a() === !0;
      }, f = function(a) {
        g = c(g, a), L = (0, X.default)();
        var O = document.all && !window.atob;
        return e(g.disable) || O ? o() : (g.disableMutationObserver || d.default.isSupported() || (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `), g.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", g.easing), document.querySelector("body").setAttribute("data-aos-duration", g.duration), document.querySelector("body").setAttribute("data-aos-delay", g.delay), g.startEvent === "DOMContentLoaded" && ["complete", "interactive"].indexOf(document.readyState) > -1 ? T(!0) : g.startEvent === "load" ? window.addEventListener(g.startEvent, function() {
          T(!0);
        }) : document.addEventListener(g.startEvent, function() {
          T(!0);
        }), window.addEventListener("resize", (0, s.default)(T, g.debounceDelay, !0)), window.addEventListener("orientationchange", (0, s.default)(T, g.debounceDelay, !0)), window.addEventListener("scroll", (0, i.default)(function() {
          (0, I.default)(L, g.once);
        }, g.throttleDelay)), g.disableMutationObserver || d.default.ready("[data-aos]", D), L);
      };
      u.exports = { init: f, refresh: T, refreshHard: D };
    }, function(u, n) {
    }, , , , , function(u, n) {
      (function(r) {
        function t(e, f, a) {
          function O(m) {
            var S = M, Y = A;
            return M = A = void 0, $ = m, j = e.apply(Y, S);
          }
          function q(m) {
            return $ = m, w = setTimeout(W, f), B ? O(m) : j;
          }
          function P(m) {
            var S = m - H, Y = m - $, Z = f - S;
            return C ? D(Z, N - Y) : Z;
          }
          function F(m) {
            var S = m - H, Y = m - $;
            return H === void 0 || S >= f || S < 0 || C && Y >= N;
          }
          function W() {
            var m = o();
            return F(m) ? U(m) : void (w = setTimeout(W, P(m)));
          }
          function U(m) {
            return w = void 0, h && M ? O(m) : (M = A = void 0, j);
          }
          function V() {
            w !== void 0 && clearTimeout(w), $ = 0, M = H = A = w = void 0;
          }
          function Q() {
            return w === void 0 ? j : U(o());
          }
          function z() {
            var m = o(), S = F(m);
            if (M = arguments, A = this, H = m, S) {
              if (w === void 0)
                return q(H);
              if (C)
                return w = setTimeout(W, f), O(H);
            }
            return w === void 0 && (w = setTimeout(W, f)), j;
          }
          var M, A, N, j, w, H, $ = 0, B = !1, C = !1, h = !0;
          if (typeof e != "function")
            throw new TypeError(l);
          return f = p(f) || 0, y(a) && (B = !!a.leading, C = "maxWait" in a, N = C ? T(p(a.maxWait) || 0, f) : N, h = "trailing" in a ? !!a.trailing : h), z.cancel = V, z.flush = Q, z;
        }
        function c(e, f, a) {
          var O = !0, q = !0;
          if (typeof e != "function")
            throw new TypeError(l);
          return y(a) && (O = "leading" in a ? !!a.leading : O, q = "trailing" in a ? !!a.trailing : q), t(e, f, { leading: O, maxWait: f, trailing: q });
        }
        function y(e) {
          var f = typeof e == "undefined" ? "undefined" : s(e);
          return !!e && (f == "object" || f == "function");
        }
        function x(e) {
          return !!e && (typeof e == "undefined" ? "undefined" : s(e)) == "object";
        }
        function i(e) {
          return (typeof e == "undefined" ? "undefined" : s(e)) == "symbol" || x(e) && g.call(e) == b;
        }
        function p(e) {
          if (typeof e == "number")
            return e;
          if (i(e))
            return d;
          if (y(e)) {
            var f = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = y(f) ? f + "" : f;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = e.replace(E, "");
          var a = I.test(e);
          return a || K.test(e) ? R(e.slice(2), a ? 2 : 8) : _.test(e) ? d : +e;
        }
        var s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e;
        } : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, l = "Expected a function", d = NaN, b = "[object Symbol]", E = /^\s+|\s+$/g, _ = /^[-+]0x[0-9a-f]+$/i, I = /^0b[01]+$/i, K = /^0o[0-7]+$/i, R = parseInt, J = (typeof r == "undefined" ? "undefined" : s(r)) == "object" && r && r.Object === Object && r, X = (typeof self == "undefined" ? "undefined" : s(self)) == "object" && self && self.Object === Object && self, L = J || X || Function("return this")(), G = Object.prototype, g = G.toString, T = Math.max, D = Math.min, o = function() {
          return L.Date.now();
        };
        u.exports = c;
      }).call(n, function() {
        return this;
      }());
    }, function(u, n) {
      (function(r) {
        function t(o, e, f) {
          function a(h) {
            var m = z, S = M;
            return z = M = void 0, H = h, N = o.apply(S, m);
          }
          function O(h) {
            return H = h, j = setTimeout(F, e), $ ? a(h) : N;
          }
          function q(h) {
            var m = h - w, S = h - H, Y = e - m;
            return B ? T(Y, A - S) : Y;
          }
          function P(h) {
            var m = h - w, S = h - H;
            return w === void 0 || m >= e || m < 0 || B && S >= A;
          }
          function F() {
            var h = D();
            return P(h) ? W(h) : void (j = setTimeout(F, q(h)));
          }
          function W(h) {
            return j = void 0, C && z ? a(h) : (z = M = void 0, N);
          }
          function U() {
            j !== void 0 && clearTimeout(j), H = 0, z = w = M = j = void 0;
          }
          function V() {
            return j === void 0 ? N : W(D());
          }
          function Q() {
            var h = D(), m = P(h);
            if (z = arguments, M = this, w = h, m) {
              if (j === void 0)
                return O(w);
              if (B)
                return j = setTimeout(F, e), a(w);
            }
            return j === void 0 && (j = setTimeout(F, e)), N;
          }
          var z, M, A, N, j, w, H = 0, $ = !1, B = !1, C = !0;
          if (typeof o != "function")
            throw new TypeError(s);
          return e = i(e) || 0, c(f) && ($ = !!f.leading, B = "maxWait" in f, A = B ? g(i(f.maxWait) || 0, e) : A, C = "trailing" in f ? !!f.trailing : C), Q.cancel = U, Q.flush = V, Q;
        }
        function c(o) {
          var e = typeof o == "undefined" ? "undefined" : p(o);
          return !!o && (e == "object" || e == "function");
        }
        function y(o) {
          return !!o && (typeof o == "undefined" ? "undefined" : p(o)) == "object";
        }
        function x(o) {
          return (typeof o == "undefined" ? "undefined" : p(o)) == "symbol" || y(o) && G.call(o) == d;
        }
        function i(o) {
          if (typeof o == "number")
            return o;
          if (x(o))
            return l;
          if (c(o)) {
            var e = typeof o.valueOf == "function" ? o.valueOf() : o;
            o = c(e) ? e + "" : e;
          }
          if (typeof o != "string")
            return o === 0 ? o : +o;
          o = o.replace(b, "");
          var f = _.test(o);
          return f || I.test(o) ? K(o.slice(2), f ? 2 : 8) : E.test(o) ? l : +o;
        }
        var p = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
          return typeof o;
        } : function(o) {
          return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, s = "Expected a function", l = NaN, d = "[object Symbol]", b = /^\s+|\s+$/g, E = /^[-+]0x[0-9a-f]+$/i, _ = /^0b[01]+$/i, I = /^0o[0-7]+$/i, K = parseInt, R = (typeof r == "undefined" ? "undefined" : p(r)) == "object" && r && r.Object === Object && r, J = (typeof self == "undefined" ? "undefined" : p(self)) == "object" && self && self.Object === Object && self, X = R || J || Function("return this")(), L = Object.prototype, G = L.toString, g = Math.max, T = Math.min, D = function() {
          return X.Date.now();
        };
        u.exports = t;
      }).call(n, function() {
        return this;
      }());
    }, function(u, n) {
      function r(p) {
        var s = void 0, l = void 0;
        for (s = 0; s < p.length; s += 1)
          if (l = p[s], l.dataset && l.dataset.aos || l.children && r(l.children))
            return !0;
        return !1;
      }
      function t() {
        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
      }
      function c() {
        return !!t();
      }
      function y(p, s) {
        var l = window.document, d = t(), b = new d(x);
        i = s, b.observe(l.documentElement, { childList: !0, subtree: !0, removedNodes: !0 });
      }
      function x(p) {
        p && p.forEach(function(s) {
          var l = Array.prototype.slice.call(s.addedNodes), d = Array.prototype.slice.call(s.removedNodes), b = l.concat(d);
          if (r(b))
            return i();
        });
      }
      Object.defineProperty(n, "__esModule", { value: !0 });
      var i = function() {
      };
      n.default = { isSupported: c, ready: y };
    }, function(u, n) {
      function r(l, d) {
        if (!(l instanceof d))
          throw new TypeError("Cannot call a class as a function");
      }
      function t() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
      }
      Object.defineProperty(n, "__esModule", { value: !0 });
      var c = function() {
        function l(d, b) {
          for (var E = 0; E < b.length; E++) {
            var _ = b[E];
            _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(d, _.key, _);
          }
        }
        return function(d, b, E) {
          return b && l(d.prototype, b), E && l(d, E), d;
        };
      }(), y = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, x = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, i = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, p = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s = function() {
        function l() {
          r(this, l);
        }
        return c(l, [{ key: "phone", value: function() {
          var d = t();
          return !(!y.test(d) && !x.test(d.substr(0, 4)));
        } }, { key: "mobile", value: function() {
          var d = t();
          return !(!i.test(d) && !p.test(d.substr(0, 4)));
        } }, { key: "tablet", value: function() {
          return this.mobile() && !this.phone();
        } }]), l;
      }();
      n.default = new s();
    }, function(u, n) {
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = function(c, y, x) {
        var i = c.node.getAttribute("data-aos-once");
        y > c.position ? c.node.classList.add("aos-animate") : typeof i != "undefined" && (i === "false" || !x && i !== "true") && c.node.classList.remove("aos-animate");
      }, t = function(c, y) {
        var x = window.pageYOffset, i = window.innerHeight;
        c.forEach(function(p, s) {
          r(p, i + x, y);
        });
      };
      n.default = t;
    }, function(u, n, r) {
      function t(i) {
        return i && i.__esModule ? i : { default: i };
      }
      Object.defineProperty(n, "__esModule", { value: !0 });
      var c = r(12), y = t(c), x = function(i, p) {
        return i.forEach(function(s, l) {
          s.node.classList.add("aos-init"), s.position = (0, y.default)(s.node, p.offset);
        }), i;
      };
      n.default = x;
    }, function(u, n, r) {
      function t(i) {
        return i && i.__esModule ? i : { default: i };
      }
      Object.defineProperty(n, "__esModule", { value: !0 });
      var c = r(13), y = t(c), x = function(i, p) {
        var s = 0, l = 0, d = window.innerHeight, b = { offset: i.getAttribute("data-aos-offset"), anchor: i.getAttribute("data-aos-anchor"), anchorPlacement: i.getAttribute("data-aos-anchor-placement") };
        switch (b.offset && !isNaN(b.offset) && (l = parseInt(b.offset)), b.anchor && document.querySelectorAll(b.anchor) && (i = document.querySelectorAll(b.anchor)[0]), s = (0, y.default)(i).top, b.anchorPlacement) {
          case "top-bottom":
            break;
          case "center-bottom":
            s += i.offsetHeight / 2;
            break;
          case "bottom-bottom":
            s += i.offsetHeight;
            break;
          case "top-center":
            s += d / 2;
            break;
          case "bottom-center":
            s += d / 2 + i.offsetHeight;
            break;
          case "center-center":
            s += d / 2 + i.offsetHeight / 2;
            break;
          case "top-top":
            s += d;
            break;
          case "bottom-top":
            s += i.offsetHeight + d;
            break;
          case "center-top":
            s += i.offsetHeight / 2 + d;
        }
        return b.anchorPlacement || b.offset || isNaN(p) || (l = p), s + l;
      };
      n.default = x;
    }, function(u, n) {
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = function(t) {
        for (var c = 0, y = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop); )
          c += t.offsetLeft - (t.tagName != "BODY" ? t.scrollLeft : 0), y += t.offsetTop - (t.tagName != "BODY" ? t.scrollTop : 0), t = t.offsetParent;
        return { top: y, left: c };
      };
      n.default = r;
    }, function(u, n) {
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = function(t) {
        return t = t || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(t, function(c) {
          return { node: c };
        });
      };
      n.default = r;
    }]);
  });
})(ee);
var pe = ee.exports;
const be = (() => {
  const k = () => {
    setTimeout(() => {
      pe.init({
        duration: 1e3,
        easing: "ease",
        once: !0
      });
    }, 0);
  };
  return {
    setHandleEvent: function() {
      try {
        k();
      } catch (v) {
      }
    }
  };
})(), ve = () => {
  be.setHandleEvent();
}, ye = () => {
  const k = window.pageYOffset || document.documentElement.scrollTop, v = window.pageXOffset || document.documentElement.scrollLeft;
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  }), window.onscroll = function() {
    window.scrollTo(v, k);
  };
};
ye();
window.addEventListener("load", () => {
  oe(), fe(), re(), ie(), se(), ve(), de(), window.onscroll = null;
});
//# sourceMappingURL=mainscript.js.map
