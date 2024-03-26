var re = Math.pow;
var $e = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var we = (e, t, n) => new Promise((i, r) => {
  var s = (l) => {
    try {
      o(n.next(l));
    } catch (d) {
      r(d);
    }
  }, a = (l) => {
    try {
      o(n.throw(l));
    } catch (d) {
      r(d);
    }
  }, o = (l) => l.done ? i(l.value) : Promise.resolve(l.value).then(s, a);
  o((n = n.apply(e, t)).next());
});
var Di = $e((Ge) => {
  const je = (() => {
    const e = () => {
      const t = document.querySelector(".loader");
      setTimeout(() => {
        t && t.classList.add("line-animate");
      }, 1500), setTimeout(() => {
        t && t.classList.add("hidden");
      }, 2250);
    };
    return {
      setHandleEvent: function() {
        try {
          e();
        } catch (t) {
        }
      }
    };
  })(), Ne = () => {
    je.setHandleEvent();
  }, Ve = (() => {
    const e = () => {
      let t = 0;
      window.addEventListener("scroll", function() {
        const n = window.pageYOffset || document.documentElement.scrollTop, i = document.querySelector(".header");
        n > t ? i.classList.add("scroll") : n < t && i.classList.remove("scroll"), window.scrollY > 100 ? i.classList.add("hidden-cta") : i.classList.remove("hidden-cta"), t = n <= 0 ? 0 : n;
      });
    };
    return {
      setHandleEvent: function() {
        try {
          e();
        } catch (t) {
        }
      }
    };
  })(), Be = () => {
    Ve.setHandleEvent();
  }, qe = (() => {
    const e = () => {
      const t = () => {
        const n = document.body, i = document.querySelector(".dialog-off-canvas-main-canvas"), r = document.querySelector(".scroll-down"), s = document.querySelectorAll(".parallax");
        let a = 0, o = 0, l = a, d = o;
        n.style.height = i.clientHeight + "px", i.style.position = "fixed", i.style.top = 0, i.style.left = 0, window.addEventListener("scroll", m), window.addEventListener("scroll", () => {
          n.style.height = i.clientHeight + "px";
        }), window.addEventListener("resize", () => {
          n.style.height = i.clientHeight + "px";
        });
        function m() {
          a = window.pageXOffset, o = window.pageYOffset;
        }
        window.requestAnimationFrame(u);
        function u() {
          l = p(l, a, 0.1), d = p(d, o, 0.1), l = Math.floor(l * 100) / 100, d = Math.floor(d * 100) / 100, i.style.transform = `translate3d(-${l}px, -${d}px, 0px)`, s[0] && (s[0].style.transform = `translate3d(-${l}px, -${d}px, 0px)`), s[1] && (s[1].style.transform = `translate3d(-${l}px, -${d}px, 0px)`), r && (r.style.transform = `translate3d(-${l}px, -${d}px, 0px)`), window.requestAnimationFrame(u);
        }
        function p(c, f, h) {
          return (1 - h) * c + h * f;
        }
      };
      setTimeout(() => {
        window.screen.width >= 992 && t();
      }, 2e3);
    };
    return {
      setHandleEvent: function() {
        try {
          e();
        } catch (t) {
        }
      }
    };
  })(), Fe = () => {
    qe.setHandleEvent();
  }, We = (() => {
    const e = () => {
      const t = document.querySelector("#open-form"), n = document.querySelectorAll("nav .menu-item"), i = document.querySelector("#join-form-ctn .join-us__bg");
      n[1].addEventListener("click", (r) => {
        r.preventDefault(), document.querySelector(".join-us").classList.add("active");
      }), i.addEventListener("click", (r) => {
        console.log("click"), r.target.closest(".join-us").classList.remove("active");
      }), t.addEventListener("click", (r) => {
        r.target.closest(".join-us").classList.toggle("active");
      });
    };
    return {
      setHandleEvent: function() {
        try {
          e();
        } catch (t) {
        }
      }
    };
  })(), Re = () => {
    We.setHandleEvent();
  }, Ye = (() => {
    const e = () => {
      const t = document.querySelector("#join-form-ctn"), n = document.querySelector(".header"), i = document.querySelector(".blob"), r = document.querySelector(".stars__container"), s = document.querySelector("#modal-content"), a = document.body;
      setTimeout(() => {
        a.appendChild(n), a.appendChild(t), a.appendChild(i), a.appendChild(r), a.appendChild(s);
      }, 2500);
    };
    return {
      setHandleEvent: function() {
        try {
          e();
        } catch (t) {
        }
      }
    };
  })(), Xe = () => {
    Ye.setHandleEvent();
  }, Ke = (() => {
    const e = () => {
      const t = document.querySelector(".blob");
      document.addEventListener("mousemove", function(n) {
        t.style.transform = `translate3d(calc(${n.clientX}px - 50%), calc(${n.clientY}px - 50%), 0)`;
      });
    };
    return {
      setHandleEvent: function() {
        try {
          e();
        } catch (t) {
        }
      }
    };
  })(), Ue = () => {
    Ke.setHandleEvent();
  }, Je = (() => {
    const e = () => {
      const t = document.querySelectorAll("#grid-projects .item"), n = document.querySelector("#show-more");
      t.forEach((i, r) => {
        r > 7 && i.classList.add("disabled");
      }), n.addEventListener("click", (i) => {
        n.style.display = "none", t.forEach((r, s) => {
          r.classList.remove("disabled"), r.classList.add("enabled"), s == 8 && r.setAttribute("style", "--index: 0.10s");
        });
      });
    };
    return {
      setHandleEvent: function() {
        try {
          e();
        } catch (t) {
        }
      }
    };
  })(), Qe = () => {
    Je.setHandleEvent();
  }, Ze = () => {
    var e, t, n, i, r;
    const s = [], o = function() {
      e = $(".stars__container").innerWidth(), t = $(".stars__container").innerHeight(), n = $("#galaxy"), n.attr("width", e).attr("height", t);
    };
    o(), $(window).resize(function() {
      o();
    }), i = n[0].getContext("2d");
    for (var l = 0; l < 100; l++)
      s[l] = new u(), s[l].reset();
    requestAnimationFrame(m);
    let d = document.querySelector(".alerta-letter");
    if (d) {
      let f = function(h) {
        let y = h.target, b = y.getAttribute("data-title"), E = y.getAttribute("data-description");
        document.querySelectorAll(".alerta-letter").forEach(function(S) {
          S.style.color = "";
        }), y.style.color = "#9EFF00";
        let w = document.querySelector(".dinamic-text-title"), C = document.querySelector(".dinamic-text-description");
        w.textContent = b, C.textContent = E;
      };
      var p = f;
      f({ target: d }), document.querySelectorAll(".alerta-letter").forEach(function(h) {
        h.addEventListener("click", f);
      });
    }
    function m() {
      i.clearRect(0, 0, e, t), i.globalCompositeOperation = "lighter";
      for (var c = 0; c < s.length; c++)
        s[c].fade(), s[c].move(), s[c].draw();
      requestAnimationFrame(m);
    }
    function u() {
      this.s = {
        ttl: 15e3,
        xmax: 5,
        ymax: 2,
        rmax: 17,
        rt: 1,
        xdef: 960,
        ydef: 540,
        xdrift: 2,
        ydrift: 2,
        random: !0,
        blink: !0
      }, this.reset = function() {
        this.x = this.s.random ? e * Math.random() : this.s.xdef, this.y = this.s.random ? t * Math.random() : this.s.ydef, this.r = (this.s.rmax - 1) * Math.random() + 1, this.dx = Math.random() * this.s.xmax * (Math.random() < 0.5 ? -1 : 1), this.dy = Math.random() * this.s.ymax * (Math.random() < 0.5 ? -1 : 1), this.hl = this.s.ttl / 70 * (this.r / this.s.rmax), this.rt = Math.random() * this.hl, this.s.rt = Math.random() + 1, this.stop = Math.random() * 0.2 + 0.4, this.s.xdrift *= Math.random() * (Math.random() < 0.5 ? -1 : 1), this.s.ydrift *= Math.random() * (Math.random() < 0.5 ? -1 : 1);
      }, this.fade = function() {
        this.rt += this.s.rt;
      }, this.draw = function() {
        this.s.blink && (this.rt <= 0 || this.rt >= this.hl) ? this.s.rt = this.s.rt * -1 : this.rt >= this.hl && this.reset();
        var c = 1 - this.rt / this.hl;
        i.beginPath(), i.arc(this.x, this.y, this.r, 0, Math.PI * 2, !0), i.closePath();
        var f = this.r * c;
        r = i.createRadialGradient(this.x, this.y, 0, this.x, this.y, f <= 0 ? 1 : f), r.addColorStop(0, "rgba(255,255,255," + c + ")"), r.addColorStop(this.stop, "rgba(255,255,255," + c * 0.2 + ")"), r.addColorStop(1, "rgba(193,254,254,0)"), i.fillStyle = r, i.fill();
      }, this.move = function() {
        this.x += this.rt / this.hl * this.dx, this.y += this.rt / this.hl * this.dy, (this.x > e || this.x < 0) && (this.dx *= -1), (this.y > t || this.y < 0) && (this.dy *= -1);
      }, this.getX = function() {
        return this.x;
      }, this.getY = function() {
        return this.y;
      };
    }
  }, et = (() => {
    const e = (i) => {
      const r = i.getTotalLength();
      i.style.strokeDasharray = r, i.style.strokeDashoffset = r;
    }, t = () => {
      const i = document.querySelector(".loader #path1"), r = document.querySelector(".loader #path2");
      i && e(i), r && e(r);
    }, n = () => {
      function i(r, s, a) {
        return r + (s - r) * a;
      }
      document.body.addEventListener("mousemove", (r) => {
        const s = document.querySelector("#line-animate-home svg"), a = document.querySelectorAll("#line-animate-home path");
        s.getBoundingClientRect().width, s.getBoundingClientRect().height;
        const o = r.clientX, l = r.clientY, d = (o / window.innerWidth - 0.5) * 2, m = (l / window.innerHeight - 0.5) * 2, u = d * 20, p = m * 20, c = `M${i(-72.7156, 59.765 + u, 0)} ${i(179.428, 10.5541 + p, 0)} C${i(-65.717, 59.765 + u, 0.5)} ${i(106.475, 10.5541 + p, 0.5)} -29.4229 -29.4339 ${59.765 + u} ${10.5541 + p} C171.25 ${60.539 + p} 150.554 433.401 398.922 369.621 C647.291 305.842 699.782 44.8742 ${941.535 + u} ${207.174 + p} C1183.29 369.474 1344.98 732.223 1602.09 639.019 C1859.21 545.815 1828.09 292.223 1955.58 304.453`;
        a[0] && a[0].setAttribute("d", c), a[1] && a[1].setAttribute("d", c);
      });
    };
    return {
      setHandleEvent: function() {
        try {
          t();
        } catch (i) {
        }
        try {
          n();
        } catch (i) {
        }
      }
    };
  })(), tt = () => {
    et.setHandleEvent();
  };
  var it = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Oe = { exports: {} };
  (function(e, t) {
    (function(n, i) {
      e.exports = i();
    })(it, function() {
      return function(n) {
        function i(s) {
          if (r[s])
            return r[s].exports;
          var a = r[s] = { exports: {}, id: s, loaded: !1 };
          return n[s].call(a.exports, a, a.exports, i), a.loaded = !0, a.exports;
        }
        var r = {};
        return i.m = n, i.c = r, i.p = "dist/", i(0);
      }([function(n, i, r) {
        function s(M) {
          return M && M.__esModule ? M : { default: M };
        }
        var a = Object.assign || function(M) {
          for (var I = 1; I < arguments.length; I++) {
            var L = arguments[I];
            for (var D in L)
              Object.prototype.hasOwnProperty.call(L, D) && (M[D] = L[D]);
          }
          return M;
        }, o = r(1), l = (s(o), r(6)), d = s(l), m = r(7), u = s(m), p = r(8), c = s(p), f = r(9), h = s(f), y = r(10), b = s(y), E = r(11), T = s(E), w = r(14), C = s(w), S = [], A = !1, P = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: !1, once: !1, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: !1 }, k = function() {
          var M = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
          if (M && (A = !0), A)
            return S = (0, T.default)(S, P), (0, b.default)(S, P.once), S;
        }, V = function() {
          S = (0, C.default)(), k();
        }, v = function() {
          S.forEach(function(M, I) {
            M.node.removeAttribute("data-aos"), M.node.removeAttribute("data-aos-easing"), M.node.removeAttribute("data-aos-duration"), M.node.removeAttribute("data-aos-delay");
          });
        }, g = function(M) {
          return M === !0 || M === "mobile" && h.default.mobile() || M === "phone" && h.default.phone() || M === "tablet" && h.default.tablet() || typeof M == "function" && M() === !0;
        }, x = function(M) {
          P = a(P, M), S = (0, C.default)();
          var I = document.all && !window.atob;
          return g(P.disable) || I ? v() : (P.disableMutationObserver || c.default.isSupported() || (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `), P.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", P.easing), document.querySelector("body").setAttribute("data-aos-duration", P.duration), document.querySelector("body").setAttribute("data-aos-delay", P.delay), P.startEvent === "DOMContentLoaded" && ["complete", "interactive"].indexOf(document.readyState) > -1 ? k(!0) : P.startEvent === "load" ? window.addEventListener(P.startEvent, function() {
            k(!0);
          }) : document.addEventListener(P.startEvent, function() {
            k(!0);
          }), window.addEventListener("resize", (0, u.default)(k, P.debounceDelay, !0)), window.addEventListener("orientationchange", (0, u.default)(k, P.debounceDelay, !0)), window.addEventListener("scroll", (0, d.default)(function() {
            (0, b.default)(S, P.once);
          }, P.throttleDelay)), P.disableMutationObserver || c.default.ready("[data-aos]", V), S);
        };
        n.exports = { init: x, refresh: k, refreshHard: V };
      }, function(n, i) {
      }, , , , , function(n, i) {
        (function(r) {
          function s(g, x, M) {
            function I(O) {
              var N = R, ie = K;
              return R = K = void 0, ee = O, G = g.apply(ie, N);
            }
            function L(O) {
              return ee = O, H = setTimeout(j, x), te ? I(O) : G;
            }
            function D(O) {
              var N = O - B, ie = O - ee, be = x - N;
              return Z ? V(be, U - ie) : be;
            }
            function _(O) {
              var N = O - B, ie = O - ee;
              return B === void 0 || N >= x || N < 0 || Z && ie >= U;
            }
            function j() {
              var O = v();
              return _(O) ? X(O) : void (H = setTimeout(j, D(O)));
            }
            function X(O) {
              return H = void 0, z && R ? I(O) : (R = K = void 0, G);
            }
            function ae() {
              H !== void 0 && clearTimeout(H), ee = 0, R = B = K = H = void 0;
            }
            function se() {
              return H === void 0 ? G : X(v());
            }
            function W() {
              var O = v(), N = _(O);
              if (R = arguments, K = this, B = O, N) {
                if (H === void 0)
                  return L(B);
                if (Z)
                  return H = setTimeout(j, x), I(B);
              }
              return H === void 0 && (H = setTimeout(j, x)), G;
            }
            var R, K, U, G, H, B, ee = 0, te = !1, Z = !1, z = !0;
            if (typeof g != "function")
              throw new TypeError(p);
            return x = m(x) || 0, o(M) && (te = !!M.leading, Z = "maxWait" in M, U = Z ? k(m(M.maxWait) || 0, x) : U, z = "trailing" in M ? !!M.trailing : z), W.cancel = ae, W.flush = se, W;
          }
          function a(g, x, M) {
            var I = !0, L = !0;
            if (typeof g != "function")
              throw new TypeError(p);
            return o(M) && (I = "leading" in M ? !!M.leading : I, L = "trailing" in M ? !!M.trailing : L), s(g, x, { leading: I, maxWait: x, trailing: L });
          }
          function o(g) {
            var x = typeof g == "undefined" ? "undefined" : u(g);
            return !!g && (x == "object" || x == "function");
          }
          function l(g) {
            return !!g && (typeof g == "undefined" ? "undefined" : u(g)) == "object";
          }
          function d(g) {
            return (typeof g == "undefined" ? "undefined" : u(g)) == "symbol" || l(g) && P.call(g) == f;
          }
          function m(g) {
            if (typeof g == "number")
              return g;
            if (d(g))
              return c;
            if (o(g)) {
              var x = typeof g.valueOf == "function" ? g.valueOf() : g;
              g = o(x) ? x + "" : x;
            }
            if (typeof g != "string")
              return g === 0 ? g : +g;
            g = g.replace(h, "");
            var M = b.test(g);
            return M || E.test(g) ? T(g.slice(2), M ? 2 : 8) : y.test(g) ? c : +g;
          }
          var u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(g) {
            return typeof g;
          } : function(g) {
            return g && typeof Symbol == "function" && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g;
          }, p = "Expected a function", c = NaN, f = "[object Symbol]", h = /^\s+|\s+$/g, y = /^[-+]0x[0-9a-f]+$/i, b = /^0b[01]+$/i, E = /^0o[0-7]+$/i, T = parseInt, w = (typeof r == "undefined" ? "undefined" : u(r)) == "object" && r && r.Object === Object && r, C = (typeof self == "undefined" ? "undefined" : u(self)) == "object" && self && self.Object === Object && self, S = w || C || Function("return this")(), A = Object.prototype, P = A.toString, k = Math.max, V = Math.min, v = function() {
            return S.Date.now();
          };
          n.exports = a;
        }).call(i, function() {
          return this;
        }());
      }, function(n, i) {
        (function(r) {
          function s(v, g, x) {
            function M(z) {
              var O = W, N = R;
              return W = R = void 0, B = z, U = v.apply(N, O);
            }
            function I(z) {
              return B = z, G = setTimeout(_, g), ee ? M(z) : U;
            }
            function L(z) {
              var O = z - H, N = z - B, ie = g - O;
              return te ? k(ie, K - N) : ie;
            }
            function D(z) {
              var O = z - H, N = z - B;
              return H === void 0 || O >= g || O < 0 || te && N >= K;
            }
            function _() {
              var z = V();
              return D(z) ? j(z) : void (G = setTimeout(_, L(z)));
            }
            function j(z) {
              return G = void 0, Z && W ? M(z) : (W = R = void 0, U);
            }
            function X() {
              G !== void 0 && clearTimeout(G), B = 0, W = H = R = G = void 0;
            }
            function ae() {
              return G === void 0 ? U : j(V());
            }
            function se() {
              var z = V(), O = D(z);
              if (W = arguments, R = this, H = z, O) {
                if (G === void 0)
                  return I(H);
                if (te)
                  return G = setTimeout(_, g), M(H);
              }
              return G === void 0 && (G = setTimeout(_, g)), U;
            }
            var W, R, K, U, G, H, B = 0, ee = !1, te = !1, Z = !0;
            if (typeof v != "function")
              throw new TypeError(u);
            return g = d(g) || 0, a(x) && (ee = !!x.leading, te = "maxWait" in x, K = te ? P(d(x.maxWait) || 0, g) : K, Z = "trailing" in x ? !!x.trailing : Z), se.cancel = X, se.flush = ae, se;
          }
          function a(v) {
            var g = typeof v == "undefined" ? "undefined" : m(v);
            return !!v && (g == "object" || g == "function");
          }
          function o(v) {
            return !!v && (typeof v == "undefined" ? "undefined" : m(v)) == "object";
          }
          function l(v) {
            return (typeof v == "undefined" ? "undefined" : m(v)) == "symbol" || o(v) && A.call(v) == c;
          }
          function d(v) {
            if (typeof v == "number")
              return v;
            if (l(v))
              return p;
            if (a(v)) {
              var g = typeof v.valueOf == "function" ? v.valueOf() : v;
              v = a(g) ? g + "" : g;
            }
            if (typeof v != "string")
              return v === 0 ? v : +v;
            v = v.replace(f, "");
            var x = y.test(v);
            return x || b.test(v) ? E(v.slice(2), x ? 2 : 8) : h.test(v) ? p : +v;
          }
          var m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
            return typeof v;
          } : function(v) {
            return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v;
          }, u = "Expected a function", p = NaN, c = "[object Symbol]", f = /^\s+|\s+$/g, h = /^[-+]0x[0-9a-f]+$/i, y = /^0b[01]+$/i, b = /^0o[0-7]+$/i, E = parseInt, T = (typeof r == "undefined" ? "undefined" : m(r)) == "object" && r && r.Object === Object && r, w = (typeof self == "undefined" ? "undefined" : m(self)) == "object" && self && self.Object === Object && self, C = T || w || Function("return this")(), S = Object.prototype, A = S.toString, P = Math.max, k = Math.min, V = function() {
            return C.Date.now();
          };
          n.exports = s;
        }).call(i, function() {
          return this;
        }());
      }, function(n, i) {
        function r(m) {
          var u = void 0, p = void 0;
          for (u = 0; u < m.length; u += 1)
            if (p = m[u], p.dataset && p.dataset.aos || p.children && r(p.children))
              return !0;
          return !1;
        }
        function s() {
          return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        }
        function a() {
          return !!s();
        }
        function o(m, u) {
          var p = window.document, c = s(), f = new c(l);
          d = u, f.observe(p.documentElement, { childList: !0, subtree: !0, removedNodes: !0 });
        }
        function l(m) {
          m && m.forEach(function(u) {
            var p = Array.prototype.slice.call(u.addedNodes), c = Array.prototype.slice.call(u.removedNodes), f = p.concat(c);
            if (r(f))
              return d();
          });
        }
        Object.defineProperty(i, "__esModule", { value: !0 });
        var d = function() {
        };
        i.default = { isSupported: a, ready: o };
      }, function(n, i) {
        function r(p, c) {
          if (!(p instanceof c))
            throw new TypeError("Cannot call a class as a function");
        }
        function s() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        Object.defineProperty(i, "__esModule", { value: !0 });
        var a = function() {
          function p(c, f) {
            for (var h = 0; h < f.length; h++) {
              var y = f[h];
              y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(c, y.key, y);
            }
          }
          return function(c, f, h) {
            return f && p(c.prototype, f), h && p(c, h), c;
          };
        }(), o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, l = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, d = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, m = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u = function() {
          function p() {
            r(this, p);
          }
          return a(p, [{ key: "phone", value: function() {
            var c = s();
            return !(!o.test(c) && !l.test(c.substr(0, 4)));
          } }, { key: "mobile", value: function() {
            var c = s();
            return !(!d.test(c) && !m.test(c.substr(0, 4)));
          } }, { key: "tablet", value: function() {
            return this.mobile() && !this.phone();
          } }]), p;
        }();
        i.default = new u();
      }, function(n, i) {
        Object.defineProperty(i, "__esModule", { value: !0 });
        var r = function(a, o, l) {
          var d = a.node.getAttribute("data-aos-once");
          o > a.position ? a.node.classList.add("aos-animate") : typeof d != "undefined" && (d === "false" || !l && d !== "true") && a.node.classList.remove("aos-animate");
        }, s = function(a, o) {
          var l = window.pageYOffset, d = window.innerHeight;
          a.forEach(function(m, u) {
            r(m, d + l, o);
          });
        };
        i.default = s;
      }, function(n, i, r) {
        function s(d) {
          return d && d.__esModule ? d : { default: d };
        }
        Object.defineProperty(i, "__esModule", { value: !0 });
        var a = r(12), o = s(a), l = function(d, m) {
          return d.forEach(function(u, p) {
            u.node.classList.add("aos-init"), u.position = (0, o.default)(u.node, m.offset);
          }), d;
        };
        i.default = l;
      }, function(n, i, r) {
        function s(d) {
          return d && d.__esModule ? d : { default: d };
        }
        Object.defineProperty(i, "__esModule", { value: !0 });
        var a = r(13), o = s(a), l = function(d, m) {
          var u = 0, p = 0, c = window.innerHeight, f = { offset: d.getAttribute("data-aos-offset"), anchor: d.getAttribute("data-aos-anchor"), anchorPlacement: d.getAttribute("data-aos-anchor-placement") };
          switch (f.offset && !isNaN(f.offset) && (p = parseInt(f.offset)), f.anchor && document.querySelectorAll(f.anchor) && (d = document.querySelectorAll(f.anchor)[0]), u = (0, o.default)(d).top, f.anchorPlacement) {
            case "top-bottom":
              break;
            case "center-bottom":
              u += d.offsetHeight / 2;
              break;
            case "bottom-bottom":
              u += d.offsetHeight;
              break;
            case "top-center":
              u += c / 2;
              break;
            case "bottom-center":
              u += c / 2 + d.offsetHeight;
              break;
            case "center-center":
              u += c / 2 + d.offsetHeight / 2;
              break;
            case "top-top":
              u += c;
              break;
            case "bottom-top":
              u += d.offsetHeight + c;
              break;
            case "center-top":
              u += d.offsetHeight / 2 + c;
          }
          return f.anchorPlacement || f.offset || isNaN(m) || (p = m), u + p;
        };
        i.default = l;
      }, function(n, i) {
        Object.defineProperty(i, "__esModule", { value: !0 });
        var r = function(s) {
          for (var a = 0, o = 0; s && !isNaN(s.offsetLeft) && !isNaN(s.offsetTop); )
            a += s.offsetLeft - (s.tagName != "BODY" ? s.scrollLeft : 0), o += s.offsetTop - (s.tagName != "BODY" ? s.scrollTop : 0), s = s.offsetParent;
          return { top: o, left: a };
        };
        i.default = r;
      }, function(n, i) {
        Object.defineProperty(i, "__esModule", { value: !0 });
        var r = function(s) {
          return s = s || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(s, function(a) {
            return { node: a };
          });
        };
        i.default = r;
      }]);
    });
  })(Oe);
  var nt = Oe.exports;
  const st = (() => {
    const e = () => {
      setTimeout(() => {
        nt.init({
          duration: 1e3,
          easing: "ease",
          once: !0
        });
      }, 2250);
    };
    return {
      setHandleEvent: function() {
        try {
          e();
        } catch (t) {
        }
      }
    };
  })(), rt = () => {
    st.setHandleEvent();
  };
  function Se(e) {
    return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
  }
  function ye(e = {}, t = {}) {
    Object.keys(t).forEach((n) => {
      typeof e[n] == "undefined" ? e[n] = t[n] : Se(t[n]) && Se(e[n]) && Object.keys(t[n]).length > 0 && ye(e[n], t[n]);
    });
  }
  const Ae = {
    body: {},
    addEventListener() {
    },
    removeEventListener() {
    },
    activeElement: {
      blur() {
      },
      nodeName: ""
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return {
        initEvent() {
        }
      };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {
        },
        getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function Q() {
    const e = typeof document != "undefined" ? document : {};
    return ye(e, Ae), e;
  }
  const at = {
    document: Ae,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState() {
      },
      pushState() {
      },
      go() {
      },
      back() {
      }
    },
    CustomEvent: function() {
      return this;
    },
    addEventListener() {
    },
    removeEventListener() {
    },
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        }
      };
    },
    Image() {
    },
    Date() {
    },
    screen: {},
    setTimeout() {
    },
    clearTimeout() {
    },
    matchMedia() {
      return {};
    },
    requestAnimationFrame(e) {
      return typeof setTimeout == "undefined" ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame(e) {
      typeof setTimeout != "undefined" && clearTimeout(e);
    }
  };
  function F() {
    const e = typeof window != "undefined" ? window : {};
    return ye(e, at), e;
  }
  function ot(e) {
    const t = e;
    Object.keys(t).forEach((n) => {
      try {
        t[n] = null;
      } catch (i) {
      }
      try {
        delete t[n];
      } catch (i) {
      }
    });
  }
  function ge(e, t = 0) {
    return setTimeout(e, t);
  }
  function ce() {
    return Date.now();
  }
  function lt(e) {
    const t = F();
    let n;
    return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n;
  }
  function dt(e, t = "x") {
    const n = F();
    let i, r, s;
    const a = lt(e);
    return n.WebKitCSSMatrix ? (r = a.transform || a.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map((o) => o.replace(",", ".")).join(", ")), s = new n.WebKitCSSMatrix(r === "none" ? "" : r)) : (s = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = s.toString().split(",")), t === "x" && (n.WebKitCSSMatrix ? r = s.m41 : i.length === 16 ? r = parseFloat(i[12]) : r = parseFloat(i[4])), t === "y" && (n.WebKitCSSMatrix ? r = s.m42 : i.length === 16 ? r = parseFloat(i[13]) : r = parseFloat(i[5])), r || 0;
  }
  function oe(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object";
  }
  function ct(e) {
    return typeof window != "undefined" && typeof window.HTMLElement != "undefined" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11);
  }
  function q(...e) {
    const t = Object(e[0]), n = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < e.length; i += 1) {
      const r = e[i];
      if (r != null && !ct(r)) {
        const s = Object.keys(Object(r)).filter((a) => n.indexOf(a) < 0);
        for (let a = 0, o = s.length; a < o; a += 1) {
          const l = s[a], d = Object.getOwnPropertyDescriptor(r, l);
          d !== void 0 && d.enumerable && (oe(t[l]) && oe(r[l]) ? r[l].__swiper__ ? t[l] = r[l] : q(t[l], r[l]) : !oe(t[l]) && oe(r[l]) ? (t[l] = {}, r[l].__swiper__ ? t[l] = r[l] : q(t[l], r[l])) : t[l] = r[l]);
        }
      }
    }
    return t;
  }
  function le(e, t, n) {
    e.style.setProperty(t, n);
  }
  function ze({
    swiper: e,
    targetPosition: t,
    side: n
  }) {
    const i = F(), r = -e.translate;
    let s = null, a;
    const o = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(e.cssModeFrameID);
    const l = t > r ? "next" : "prev", d = (u, p) => l === "next" && u >= p || l === "prev" && u <= p, m = () => {
      a = (/* @__PURE__ */ new Date()).getTime(), s === null && (s = a);
      const u = Math.max(Math.min((a - s) / o, 1), 0), p = 0.5 - Math.cos(u * Math.PI) / 2;
      let c = r + p * (t - r);
      if (d(c, t) && (c = t), e.wrapperEl.scrollTo({
        [n]: c
      }), d(c, t)) {
        e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
          e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
            [n]: c
          });
        }), i.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = i.requestAnimationFrame(m);
    };
    m();
  }
  function J(e, t = "") {
    return [...e.children].filter((n) => n.matches(t));
  }
  function Ie(e, t = []) {
    const n = document.createElement(e);
    return n.classList.add(...Array.isArray(t) ? t : [t]), n;
  }
  function ut(e, t) {
    const n = [];
    for (; e.previousElementSibling; ) {
      const i = e.previousElementSibling;
      t ? i.matches(t) && n.push(i) : n.push(i), e = i;
    }
    return n;
  }
  function ft(e, t) {
    const n = [];
    for (; e.nextElementSibling; ) {
      const i = e.nextElementSibling;
      t ? i.matches(t) && n.push(i) : n.push(i), e = i;
    }
    return n;
  }
  function ne(e, t) {
    return F().getComputedStyle(e, null).getPropertyValue(t);
  }
  function Te(e) {
    let t = e, n;
    if (t) {
      for (n = 0; (t = t.previousSibling) !== null; )
        t.nodeType === 1 && (n += 1);
      return n;
    }
  }
  function pt(e, t) {
    const n = [];
    let i = e.parentElement;
    for (; i; )
      t ? i.matches(t) && n.push(i) : n.push(i), i = i.parentElement;
    return n;
  }
  function xe(e, t, n) {
    const i = F();
    return n ? e[t === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")) : e.offsetWidth;
  }
  let ue;
  function mt() {
    const e = F(), t = Q();
    return {
      smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
      touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
    };
  }
  function _e() {
    return ue || (ue = mt()), ue;
  }
  let fe;
  function ht({
    userAgent: e
  } = {}) {
    const t = _e(), n = F(), i = n.navigator.platform, r = e || n.navigator.userAgent, s = {
      ios: !1,
      android: !1
    }, a = n.screen.width, o = n.screen.height, l = r.match(/(Android);?[\s\/]+([\d.]+)?/);
    let d = r.match(/(iPad).*OS\s([\d_]+)/);
    const m = r.match(/(iPod)(.*OS\s([\d_]+))?/), u = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/), p = i === "Win32";
    let c = i === "MacIntel";
    const f = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !d && c && t.touch && f.indexOf(`${a}x${o}`) >= 0 && (d = r.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), c = !1), l && !p && (s.os = "android", s.android = !0), (d || u || m) && (s.os = "ios", s.ios = !0), s;
  }
  function gt(e = {}) {
    return fe || (fe = ht(e)), fe;
  }
  let pe;
  function vt() {
    const e = F();
    let t = !1;
    function n() {
      const i = e.navigator.userAgent.toLowerCase();
      return i.indexOf("safari") >= 0 && i.indexOf("chrome") < 0 && i.indexOf("android") < 0;
    }
    if (n()) {
      const i = String(e.navigator.userAgent);
      if (i.includes("Version/")) {
        const [r, s] = i.split("Version/")[1].split(" ")[0].split(".").map((a) => Number(a));
        t = r < 16 || r === 16 && s < 2;
      }
    }
    return {
      isSafari: t || n(),
      needPerspectiveFix: t,
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
    };
  }
  function yt() {
    return pe || (pe = vt()), pe;
  }
  function bt({
    swiper: e,
    on: t,
    emit: n
  }) {
    const i = F();
    let r = null, s = null;
    const a = () => {
      !e || e.destroyed || !e.initialized || (n("beforeResize"), n("resize"));
    }, o = () => {
      !e || e.destroyed || !e.initialized || (r = new ResizeObserver((m) => {
        s = i.requestAnimationFrame(() => {
          const {
            width: u,
            height: p
          } = e;
          let c = u, f = p;
          m.forEach(({
            contentBoxSize: h,
            contentRect: y,
            target: b
          }) => {
            b && b !== e.el || (c = y ? y.width : (h[0] || h).inlineSize, f = y ? y.height : (h[0] || h).blockSize);
          }), (c !== u || f !== p) && a();
        });
      }), r.observe(e.el));
    }, l = () => {
      s && i.cancelAnimationFrame(s), r && r.unobserve && e.el && (r.unobserve(e.el), r = null);
    }, d = () => {
      !e || e.destroyed || !e.initialized || n("orientationchange");
    };
    t("init", () => {
      if (e.params.resizeObserver && typeof i.ResizeObserver != "undefined") {
        o();
        return;
      }
      i.addEventListener("resize", a), i.addEventListener("orientationchange", d);
    }), t("destroy", () => {
      l(), i.removeEventListener("resize", a), i.removeEventListener("orientationchange", d);
    });
  }
  function wt({
    swiper: e,
    extendParams: t,
    on: n,
    emit: i
  }) {
    const r = [], s = F(), a = (d, m = {}) => {
      const u = s.MutationObserver || s.WebkitMutationObserver, p = new u((c) => {
        if (e.__preventObserver__)
          return;
        if (c.length === 1) {
          i("observerUpdate", c[0]);
          return;
        }
        const f = function() {
          i("observerUpdate", c[0]);
        };
        s.requestAnimationFrame ? s.requestAnimationFrame(f) : s.setTimeout(f, 0);
      });
      p.observe(d, {
        attributes: typeof m.attributes == "undefined" ? !0 : m.attributes,
        childList: typeof m.childList == "undefined" ? !0 : m.childList,
        characterData: typeof m.characterData == "undefined" ? !0 : m.characterData
      }), r.push(p);
    }, o = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const d = pt(e.el);
          for (let m = 0; m < d.length; m += 1)
            a(d[m]);
        }
        a(e.el, {
          childList: e.params.observeSlideChildren
        }), a(e.wrapperEl, {
          attributes: !1
        });
      }
    }, l = () => {
      r.forEach((d) => {
        d.disconnect();
      }), r.splice(0, r.length);
    };
    t({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), n("init", o), n("destroy", l);
  }
  const St = {
    on(e, t, n) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof t != "function")
        return i;
      const r = n ? "unshift" : "push";
      return e.split(" ").forEach((s) => {
        i.eventsListeners[s] || (i.eventsListeners[s] = []), i.eventsListeners[s][r](t);
      }), i;
    },
    once(e, t, n) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof t != "function")
        return i;
      function r(...s) {
        i.off(e, r), r.__emitterProxy && delete r.__emitterProxy, t.apply(i, s);
      }
      return r.__emitterProxy = t, i.on(e, r, n);
    },
    onAny(e, t) {
      const n = this;
      if (!n.eventsListeners || n.destroyed || typeof e != "function")
        return n;
      const i = t ? "unshift" : "push";
      return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n;
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners)
        return t;
      const n = t.eventsAnyListeners.indexOf(e);
      return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
    },
    off(e, t) {
      const n = this;
      return !n.eventsListeners || n.destroyed || !n.eventsListeners || e.split(" ").forEach((i) => {
        typeof t == "undefined" ? n.eventsListeners[i] = [] : n.eventsListeners[i] && n.eventsListeners[i].forEach((r, s) => {
          (r === t || r.__emitterProxy && r.__emitterProxy === t) && n.eventsListeners[i].splice(s, 1);
        });
      }), n;
    },
    emit(...e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || !t.eventsListeners)
        return t;
      let n, i, r;
      return typeof e[0] == "string" || Array.isArray(e[0]) ? (n = e[0], i = e.slice(1, e.length), r = t) : (n = e[0].events, i = e[0].data, r = e[0].context || t), i.unshift(r), (Array.isArray(n) ? n : n.split(" ")).forEach((a) => {
        t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((o) => {
          o.apply(r, [a, ...i]);
        }), t.eventsListeners && t.eventsListeners[a] && t.eventsListeners[a].forEach((o) => {
          o.apply(r, i);
        });
      }), t;
    }
  };
  function Tt() {
    const e = this;
    let t, n;
    const i = e.el;
    typeof e.params.width != "undefined" && e.params.width !== null ? t = e.params.width : t = i.clientWidth, typeof e.params.height != "undefined" && e.params.height !== null ? n = e.params.height : n = i.clientHeight, !(t === 0 && e.isHorizontal() || n === 0 && e.isVertical()) && (t = t - parseInt(ne(i, "padding-left") || 0, 10) - parseInt(ne(i, "padding-right") || 0, 10), n = n - parseInt(ne(i, "padding-top") || 0, 10) - parseInt(ne(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, {
      width: t,
      height: n,
      size: e.isHorizontal() ? t : n
    }));
  }
  function xt() {
    const e = this;
    function t(v) {
      return e.isHorizontal() ? v : {
        width: "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        marginRight: "marginBottom"
      }[v];
    }
    function n(v, g) {
      return parseFloat(v.getPropertyValue(t(g)) || 0);
    }
    const i = e.params, {
      wrapperEl: r,
      slidesEl: s,
      size: a,
      rtlTranslate: o,
      wrongRTL: l
    } = e, d = e.virtual && i.virtual.enabled, m = d ? e.virtual.slides.length : e.slides.length, u = J(s, `.${e.params.slideClass}, swiper-slide`), p = d ? e.virtual.slides.length : u.length;
    let c = [];
    const f = [], h = [];
    let y = i.slidesOffsetBefore;
    typeof y == "function" && (y = i.slidesOffsetBefore.call(e));
    let b = i.slidesOffsetAfter;
    typeof b == "function" && (b = i.slidesOffsetAfter.call(e));
    const E = e.snapGrid.length, T = e.slidesGrid.length;
    let w = i.spaceBetween, C = -y, S = 0, A = 0;
    if (typeof a == "undefined")
      return;
    typeof w == "string" && w.indexOf("%") >= 0 ? w = parseFloat(w.replace("%", "")) / 100 * a : typeof w == "string" && (w = parseFloat(w)), e.virtualSize = -w, u.forEach((v) => {
      o ? v.style.marginLeft = "" : v.style.marginRight = "", v.style.marginBottom = "", v.style.marginTop = "";
    }), i.centeredSlides && i.cssMode && (le(r, "--swiper-centered-offset-before", ""), le(r, "--swiper-centered-offset-after", ""));
    const P = i.grid && i.grid.rows > 1 && e.grid;
    P && e.grid.initSlides(p);
    let k;
    const V = i.slidesPerView === "auto" && i.breakpoints && Object.keys(i.breakpoints).filter((v) => typeof i.breakpoints[v].slidesPerView != "undefined").length > 0;
    for (let v = 0; v < p; v += 1) {
      k = 0;
      let g;
      if (u[v] && (g = u[v]), P && e.grid.updateSlide(v, g, p, t), !(u[v] && ne(g, "display") === "none")) {
        if (i.slidesPerView === "auto") {
          V && (u[v].style[t("width")] = "");
          const x = getComputedStyle(g), M = g.style.transform, I = g.style.webkitTransform;
          if (M && (g.style.transform = "none"), I && (g.style.webkitTransform = "none"), i.roundLengths)
            k = e.isHorizontal() ? xe(g, "width", !0) : xe(g, "height", !0);
          else {
            const L = n(x, "width"), D = n(x, "padding-left"), _ = n(x, "padding-right"), j = n(x, "margin-left"), X = n(x, "margin-right"), ae = x.getPropertyValue("box-sizing");
            if (ae && ae === "border-box")
              k = L + j + X;
            else {
              const {
                clientWidth: se,
                offsetWidth: W
              } = g;
              k = L + D + _ + j + X + (W - se);
            }
          }
          M && (g.style.transform = M), I && (g.style.webkitTransform = I), i.roundLengths && (k = Math.floor(k));
        } else
          k = (a - (i.slidesPerView - 1) * w) / i.slidesPerView, i.roundLengths && (k = Math.floor(k)), u[v] && (u[v].style[t("width")] = `${k}px`);
        u[v] && (u[v].swiperSlideSize = k), h.push(k), i.centeredSlides ? (C = C + k / 2 + S / 2 + w, S === 0 && v !== 0 && (C = C - a / 2 - w), v === 0 && (C = C - a / 2 - w), Math.abs(C) < 1 / 1e3 && (C = 0), i.roundLengths && (C = Math.floor(C)), A % i.slidesPerGroup === 0 && c.push(C), f.push(C)) : (i.roundLengths && (C = Math.floor(C)), (A - Math.min(e.params.slidesPerGroupSkip, A)) % e.params.slidesPerGroup === 0 && c.push(C), f.push(C), C = C + k + w), e.virtualSize += k + w, S = k, A += 1;
      }
    }
    if (e.virtualSize = Math.max(e.virtualSize, a) + b, o && l && (i.effect === "slide" || i.effect === "coverflow") && (r.style.width = `${e.virtualSize + w}px`), i.setWrapperSize && (r.style[t("width")] = `${e.virtualSize + w}px`), P && e.grid.updateWrapperSize(k, c, t), !i.centeredSlides) {
      const v = [];
      for (let g = 0; g < c.length; g += 1) {
        let x = c[g];
        i.roundLengths && (x = Math.floor(x)), c[g] <= e.virtualSize - a && v.push(x);
      }
      c = v, Math.floor(e.virtualSize - a) - Math.floor(c[c.length - 1]) > 1 && c.push(e.virtualSize - a);
    }
    if (d && i.loop) {
      const v = h[0] + w;
      if (i.slidesPerGroup > 1) {
        const g = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / i.slidesPerGroup), x = v * i.slidesPerGroup;
        for (let M = 0; M < g; M += 1)
          c.push(c[c.length - 1] + x);
      }
      for (let g = 0; g < e.virtual.slidesBefore + e.virtual.slidesAfter; g += 1)
        i.slidesPerGroup === 1 && c.push(c[c.length - 1] + v), f.push(f[f.length - 1] + v), e.virtualSize += v;
    }
    if (c.length === 0 && (c = [0]), w !== 0) {
      const v = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
      u.filter((g, x) => !i.cssMode || i.loop ? !0 : x !== u.length - 1).forEach((g) => {
        g.style[v] = `${w}px`;
      });
    }
    if (i.centeredSlides && i.centeredSlidesBounds) {
      let v = 0;
      h.forEach((x) => {
        v += x + (w || 0);
      }), v -= w;
      const g = v - a;
      c = c.map((x) => x < 0 ? -y : x > g ? g + b : x);
    }
    if (i.centerInsufficientSlides) {
      let v = 0;
      if (h.forEach((g) => {
        v += g + (w || 0);
      }), v -= w, v < a) {
        const g = (a - v) / 2;
        c.forEach((x, M) => {
          c[M] = x - g;
        }), f.forEach((x, M) => {
          f[M] = x + g;
        });
      }
    }
    if (Object.assign(e, {
      slides: u,
      snapGrid: c,
      slidesGrid: f,
      slidesSizesGrid: h
    }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
      le(r, "--swiper-centered-offset-before", `${-c[0]}px`), le(r, "--swiper-centered-offset-after", `${e.size / 2 - h[h.length - 1] / 2}px`);
      const v = -e.snapGrid[0], g = -e.slidesGrid[0];
      e.snapGrid = e.snapGrid.map((x) => x + v), e.slidesGrid = e.slidesGrid.map((x) => x + g);
    }
    if (p !== m && e.emit("slidesLengthChange"), c.length !== E && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== T && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), !d && !i.cssMode && (i.effect === "slide" || i.effect === "fade")) {
      const v = `${i.containerModifierClass}backface-hidden`, g = e.el.classList.contains(v);
      p <= i.maxBackfaceHiddenSlides ? g || e.el.classList.add(v) : g && e.el.classList.remove(v);
    }
  }
  function Et(e) {
    const t = this, n = [], i = t.virtual && t.params.virtual.enabled;
    let r = 0, s;
    typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
    const a = (o) => i ? t.slides[t.getSlideIndexByData(o)] : t.slides[o];
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
      if (t.params.centeredSlides)
        (t.visibleSlides || []).forEach((o) => {
          n.push(o);
        });
      else
        for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
          const o = t.activeIndex + s;
          if (o > t.slides.length && !i)
            break;
          n.push(a(o));
        }
    else
      n.push(a(t.activeIndex));
    for (s = 0; s < n.length; s += 1)
      if (typeof n[s] != "undefined") {
        const o = n[s].offsetHeight;
        r = o > r ? o : r;
      }
    (r || r === 0) && (t.wrapperEl.style.height = `${r}px`);
  }
  function Mt() {
    const e = this, t = e.slides, n = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
    for (let i = 0; i < t.length; i += 1)
      t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - n - e.cssOverflowAdjustment();
  }
  function Ct(e = this && this.translate || 0) {
    const t = this, n = t.params, {
      slides: i,
      rtlTranslate: r,
      snapGrid: s
    } = t;
    if (i.length === 0)
      return;
    typeof i[0].swiperSlideOffset == "undefined" && t.updateSlidesOffset();
    let a = -e;
    r && (a = e), i.forEach((l) => {
      l.classList.remove(n.slideVisibleClass);
    }), t.visibleSlidesIndexes = [], t.visibleSlides = [];
    let o = n.spaceBetween;
    typeof o == "string" && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : typeof o == "string" && (o = parseFloat(o));
    for (let l = 0; l < i.length; l += 1) {
      const d = i[l];
      let m = d.swiperSlideOffset;
      n.cssMode && n.centeredSlides && (m -= i[0].swiperSlideOffset);
      const u = (a + (n.centeredSlides ? t.minTranslate() : 0) - m) / (d.swiperSlideSize + o), p = (a - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - m) / (d.swiperSlideSize + o), c = -(a - m), f = c + t.slidesSizesGrid[l];
      (c >= 0 && c < t.size - 1 || f > 1 && f <= t.size || c <= 0 && f >= t.size) && (t.visibleSlides.push(d), t.visibleSlidesIndexes.push(l), i[l].classList.add(n.slideVisibleClass)), d.progress = r ? -u : u, d.originalProgress = r ? -p : p;
    }
  }
  function Lt(e) {
    const t = this;
    if (typeof e == "undefined") {
      const m = t.rtlTranslate ? -1 : 1;
      e = t && t.translate && t.translate * m || 0;
    }
    const n = t.params, i = t.maxTranslate() - t.minTranslate();
    let {
      progress: r,
      isBeginning: s,
      isEnd: a,
      progressLoop: o
    } = t;
    const l = s, d = a;
    if (i === 0)
      r = 0, s = !0, a = !0;
    else {
      r = (e - t.minTranslate()) / i;
      const m = Math.abs(e - t.minTranslate()) < 1, u = Math.abs(e - t.maxTranslate()) < 1;
      s = m || r <= 0, a = u || r >= 1, m && (r = 0), u && (r = 1);
    }
    if (n.loop) {
      const m = t.getSlideIndexByData(0), u = t.getSlideIndexByData(t.slides.length - 1), p = t.slidesGrid[m], c = t.slidesGrid[u], f = t.slidesGrid[t.slidesGrid.length - 1], h = Math.abs(e);
      h >= p ? o = (h - p) / f : o = (h + f - c) / f, o > 1 && (o -= 1);
    }
    Object.assign(t, {
      progress: r,
      progressLoop: o,
      isBeginning: s,
      isEnd: a
    }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), s && !l && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), (l && !s || d && !a) && t.emit("fromEdge"), t.emit("progress", r);
  }
  function Pt() {
    const e = this, {
      slides: t,
      params: n,
      slidesEl: i,
      activeIndex: r
    } = e, s = e.virtual && n.virtual.enabled, a = (l) => J(i, `.${n.slideClass}${l}, swiper-slide${l}`)[0];
    t.forEach((l) => {
      l.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass);
    });
    let o;
    if (s)
      if (n.loop) {
        let l = r - e.virtual.slidesBefore;
        l < 0 && (l = e.virtual.slides.length + l), l >= e.virtual.slides.length && (l -= e.virtual.slides.length), o = a(`[data-swiper-slide-index="${l}"]`);
      } else
        o = a(`[data-swiper-slide-index="${r}"]`);
    else
      o = t[r];
    if (o) {
      o.classList.add(n.slideActiveClass);
      let l = ft(o, `.${n.slideClass}, swiper-slide`)[0];
      n.loop && !l && (l = t[0]), l && l.classList.add(n.slideNextClass);
      let d = ut(o, `.${n.slideClass}, swiper-slide`)[0];
      n.loop && !d === 0 && (d = t[t.length - 1]), d && d.classList.add(n.slidePrevClass);
    }
    e.emitSlidesClasses();
  }
  const de = (e, t) => {
    if (!e || e.destroyed || !e.params)
      return;
    const n = () => e.isElement ? "swiper-slide" : `.${e.params.slideClass}`, i = t.closest(n());
    if (i) {
      const r = i.querySelector(`.${e.params.lazyPreloaderClass}`);
      r && r.remove();
    }
  }, Ee = (e, t) => {
    if (!e.slides[t])
      return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  }, ve = (e) => {
    if (!e || e.destroyed || !e.params)
      return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0)
      return;
    t = Math.min(t, n);
    const i = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView), r = e.activeIndex, s = r + i - 1;
    if (e.params.rewind)
      for (let a = r - t; a <= s + t; a += 1) {
        const o = (a % n + n) % n;
        o !== r && o > s && Ee(e, o);
      }
    else
      for (let a = Math.max(s - t, 0); a <= Math.min(s + t, n - 1); a += 1)
        a !== r && a > s && Ee(e, a);
  };
  function kt(e) {
    const {
      slidesGrid: t,
      params: n
    } = e, i = e.rtlTranslate ? e.translate : -e.translate;
    let r;
    for (let s = 0; s < t.length; s += 1)
      typeof t[s + 1] != "undefined" ? i >= t[s] && i < t[s + 1] - (t[s + 1] - t[s]) / 2 ? r = s : i >= t[s] && i < t[s + 1] && (r = s + 1) : i >= t[s] && (r = s);
    return n.normalizeSlideIndex && (r < 0 || typeof r == "undefined") && (r = 0), r;
  }
  function Ot(e) {
    const t = this, n = t.rtlTranslate ? t.translate : -t.translate, {
      snapGrid: i,
      params: r,
      activeIndex: s,
      realIndex: a,
      snapIndex: o
    } = t;
    let l = e, d;
    const m = (p) => {
      let c = p - t.virtual.slidesBefore;
      return c < 0 && (c = t.virtual.slides.length + c), c >= t.virtual.slides.length && (c -= t.virtual.slides.length), c;
    };
    if (typeof l == "undefined" && (l = kt(t)), i.indexOf(n) >= 0)
      d = i.indexOf(n);
    else {
      const p = Math.min(r.slidesPerGroupSkip, l);
      d = p + Math.floor((l - p) / r.slidesPerGroup);
    }
    if (d >= i.length && (d = i.length - 1), l === s) {
      d !== o && (t.snapIndex = d, t.emit("snapIndexChange")), t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = m(l));
      return;
    }
    let u;
    t.virtual && r.virtual.enabled && r.loop ? u = m(l) : t.slides[l] ? u = parseInt(t.slides[l].getAttribute("data-swiper-slide-index") || l, 10) : u = l, Object.assign(t, {
      previousSnapIndex: o,
      snapIndex: d,
      previousRealIndex: a,
      realIndex: u,
      previousIndex: s,
      activeIndex: l
    }), t.initialized && ve(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), a !== u && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
  }
  function At(e) {
    const t = this, n = t.params, i = e.closest(`.${n.slideClass}, swiper-slide`);
    let r = !1, s;
    if (i) {
      for (let a = 0; a < t.slides.length; a += 1)
        if (t.slides[a] === i) {
          r = !0, s = a;
          break;
        }
    }
    if (i && r)
      t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = s;
    else {
      t.clickedSlide = void 0, t.clickedIndex = void 0;
      return;
    }
    n.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
  }
  const zt = {
    updateSize: Tt,
    updateSlides: xt,
    updateAutoHeight: Et,
    updateSlidesOffset: Mt,
    updateSlidesProgress: Ct,
    updateProgress: Lt,
    updateSlidesClasses: Pt,
    updateActiveIndex: Ot,
    updateClickedSlide: At
  };
  function It(e = this.isHorizontal() ? "x" : "y") {
    const t = this, {
      params: n,
      rtlTranslate: i,
      translate: r,
      wrapperEl: s
    } = t;
    if (n.virtualTranslate)
      return i ? -r : r;
    if (n.cssMode)
      return r;
    let a = dt(s, e);
    return a += t.cssOverflowAdjustment(), i && (a = -a), a || 0;
  }
  function _t(e, t) {
    const n = this, {
      rtlTranslate: i,
      params: r,
      wrapperEl: s,
      progress: a
    } = n;
    let o = 0, l = 0;
    const d = 0;
    n.isHorizontal() ? o = i ? -e : e : l = e, r.roundLengths && (o = Math.floor(o), l = Math.floor(l)), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? o : l, r.cssMode ? s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -o : -l : r.virtualTranslate || (n.isHorizontal() ? o -= n.cssOverflowAdjustment() : l -= n.cssOverflowAdjustment(), s.style.transform = `translate3d(${o}px, ${l}px, ${d}px)`);
    let m;
    const u = n.maxTranslate() - n.minTranslate();
    u === 0 ? m = 0 : m = (e - n.minTranslate()) / u, m !== a && n.updateProgress(e), n.emit("setTranslate", n.translate, t);
  }
  function Dt() {
    return -this.snapGrid[0];
  }
  function Ht() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function Gt(e = 0, t = this.params.speed, n = !0, i = !0, r) {
    const s = this, {
      params: a,
      wrapperEl: o
    } = s;
    if (s.animating && a.preventInteractionOnTransition)
      return !1;
    const l = s.minTranslate(), d = s.maxTranslate();
    let m;
    if (i && e > l ? m = l : i && e < d ? m = d : m = e, s.updateProgress(m), a.cssMode) {
      const u = s.isHorizontal();
      if (t === 0)
        o[u ? "scrollLeft" : "scrollTop"] = -m;
      else {
        if (!s.support.smoothScroll)
          return ze({
            swiper: s,
            targetPosition: -m,
            side: u ? "left" : "top"
          }), !0;
        o.scrollTo({
          [u ? "left" : "top"]: -m,
          behavior: "smooth"
        });
      }
      return !0;
    }
    return t === 0 ? (s.setTransition(0), s.setTranslate(m), n && (s.emit("beforeTransitionStart", t, r), s.emit("transitionEnd"))) : (s.setTransition(t), s.setTranslate(m), n && (s.emit("beforeTransitionStart", t, r), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(p) {
      !s || s.destroyed || p.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, n && s.emit("transitionEnd"));
    }), s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd))), !0;
  }
  const $t = {
    getTranslate: It,
    setTranslate: _t,
    minTranslate: Dt,
    maxTranslate: Ht,
    translateTo: Gt
  };
  function jt(e, t) {
    const n = this;
    n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${e}ms`), n.emit("setTransition", e, t);
  }
  function De({
    swiper: e,
    runCallbacks: t,
    direction: n,
    step: i
  }) {
    const {
      activeIndex: r,
      previousIndex: s
    } = e;
    let a = n;
    if (a || (r > s ? a = "next" : r < s ? a = "prev" : a = "reset"), e.emit(`transition${i}`), t && r !== s) {
      if (a === "reset") {
        e.emit(`slideResetTransition${i}`);
        return;
      }
      e.emit(`slideChangeTransition${i}`), a === "next" ? e.emit(`slideNextTransition${i}`) : e.emit(`slidePrevTransition${i}`);
    }
  }
  function Nt(e = !0, t) {
    const n = this, {
      params: i
    } = n;
    i.cssMode || (i.autoHeight && n.updateAutoHeight(), De({
      swiper: n,
      runCallbacks: e,
      direction: t,
      step: "Start"
    }));
  }
  function Vt(e = !0, t) {
    const n = this, {
      params: i
    } = n;
    n.animating = !1, !i.cssMode && (n.setTransition(0), De({
      swiper: n,
      runCallbacks: e,
      direction: t,
      step: "End"
    }));
  }
  const Bt = {
    setTransition: jt,
    transitionStart: Nt,
    transitionEnd: Vt
  };
  function qt(e = 0, t = this.params.speed, n = !0, i, r) {
    typeof e == "string" && (e = parseInt(e, 10));
    const s = this;
    let a = e;
    a < 0 && (a = 0);
    const {
      params: o,
      snapGrid: l,
      slidesGrid: d,
      previousIndex: m,
      activeIndex: u,
      rtlTranslate: p,
      wrapperEl: c,
      enabled: f
    } = s;
    if (s.animating && o.preventInteractionOnTransition || !f && !i && !r)
      return !1;
    const h = Math.min(s.params.slidesPerGroupSkip, a);
    let y = h + Math.floor((a - h) / s.params.slidesPerGroup);
    y >= l.length && (y = l.length - 1);
    const b = -l[y];
    if (o.normalizeSlideIndex)
      for (let T = 0; T < d.length; T += 1) {
        const w = -Math.floor(b * 100), C = Math.floor(d[T] * 100), S = Math.floor(d[T + 1] * 100);
        typeof d[T + 1] != "undefined" ? w >= C && w < S - (S - C) / 2 ? a = T : w >= C && w < S && (a = T + 1) : w >= C && (a = T);
      }
    if (s.initialized && a !== u && (!s.allowSlideNext && b < s.translate && b < s.minTranslate() || !s.allowSlidePrev && b > s.translate && b > s.maxTranslate() && (u || 0) !== a))
      return !1;
    a !== (m || 0) && n && s.emit("beforeSlideChangeStart"), s.updateProgress(b);
    let E;
    if (a > u ? E = "next" : a < u ? E = "prev" : E = "reset", p && -b === s.translate || !p && b === s.translate)
      return s.updateActiveIndex(a), o.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), o.effect !== "slide" && s.setTranslate(b), E !== "reset" && (s.transitionStart(n, E), s.transitionEnd(n, E)), !1;
    if (o.cssMode) {
      const T = s.isHorizontal(), w = p ? b : -b;
      if (t === 0) {
        const C = s.virtual && s.params.virtual.enabled;
        C && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), C && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0 ? (s._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
          c[T ? "scrollLeft" : "scrollTop"] = w;
        })) : c[T ? "scrollLeft" : "scrollTop"] = w, C && requestAnimationFrame(() => {
          s.wrapperEl.style.scrollSnapType = "", s._immediateVirtual = !1;
        });
      } else {
        if (!s.support.smoothScroll)
          return ze({
            swiper: s,
            targetPosition: w,
            side: T ? "left" : "top"
          }), !0;
        c.scrollTo({
          [T ? "left" : "top"]: w,
          behavior: "smooth"
        });
      }
      return !0;
    }
    return s.setTransition(t), s.setTranslate(b), s.updateActiveIndex(a), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(n, E), t === 0 ? s.transitionEnd(n, E) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(w) {
      !s || s.destroyed || w.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(n, E));
    }), s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)), !0;
  }
  function Ft(e = 0, t = this.params.speed, n = !0, i) {
    typeof e == "string" && (e = parseInt(e, 10));
    const r = this;
    let s = e;
    return r.params.loop && (r.virtual && r.params.virtual.enabled ? s = s + r.virtual.slidesBefore : s = r.getSlideIndexByData(s)), r.slideTo(s, t, n, i);
  }
  function Wt(e = this.params.speed, t = !0, n) {
    const i = this, {
      enabled: r,
      params: s,
      animating: a
    } = i;
    if (!r)
      return i;
    let o = s.slidesPerGroup;
    s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const l = i.activeIndex < s.slidesPerGroupSkip ? 1 : o, d = i.virtual && s.virtual.enabled;
    if (s.loop) {
      if (a && !d && s.loopPreventsSliding)
        return !1;
      i.loopFix({
        direction: "next"
      }), i._clientLeft = i.wrapperEl.clientLeft;
    }
    return s.rewind && i.isEnd ? i.slideTo(0, e, t, n) : i.slideTo(i.activeIndex + l, e, t, n);
  }
  function Rt(e = this.params.speed, t = !0, n) {
    const i = this, {
      params: r,
      snapGrid: s,
      slidesGrid: a,
      rtlTranslate: o,
      enabled: l,
      animating: d
    } = i;
    if (!l)
      return i;
    const m = i.virtual && r.virtual.enabled;
    if (r.loop) {
      if (d && !m && r.loopPreventsSliding)
        return !1;
      i.loopFix({
        direction: "prev"
      }), i._clientLeft = i.wrapperEl.clientLeft;
    }
    const u = o ? i.translate : -i.translate;
    function p(b) {
      return b < 0 ? -Math.floor(Math.abs(b)) : Math.floor(b);
    }
    const c = p(u), f = s.map((b) => p(b));
    let h = s[f.indexOf(c) - 1];
    if (typeof h == "undefined" && r.cssMode) {
      let b;
      s.forEach((E, T) => {
        c >= E && (b = T);
      }), typeof b != "undefined" && (h = s[b > 0 ? b - 1 : b]);
    }
    let y = 0;
    if (typeof h != "undefined" && (y = a.indexOf(h), y < 0 && (y = i.activeIndex - 1), r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (y = y - i.slidesPerViewDynamic("previous", !0) + 1, y = Math.max(y, 0))), r.rewind && i.isBeginning) {
      const b = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
      return i.slideTo(b, e, t, n);
    }
    return i.slideTo(y, e, t, n);
  }
  function Yt(e = this.params.speed, t = !0, n) {
    const i = this;
    return i.slideTo(i.activeIndex, e, t, n);
  }
  function Xt(e = this.params.speed, t = !0, n, i = 0.5) {
    const r = this;
    let s = r.activeIndex;
    const a = Math.min(r.params.slidesPerGroupSkip, s), o = a + Math.floor((s - a) / r.params.slidesPerGroup), l = r.rtlTranslate ? r.translate : -r.translate;
    if (l >= r.snapGrid[o]) {
      const d = r.snapGrid[o], m = r.snapGrid[o + 1];
      l - d > (m - d) * i && (s += r.params.slidesPerGroup);
    } else {
      const d = r.snapGrid[o - 1], m = r.snapGrid[o];
      l - d <= (m - d) * i && (s -= r.params.slidesPerGroup);
    }
    return s = Math.max(s, 0), s = Math.min(s, r.slidesGrid.length - 1), r.slideTo(s, e, t, n);
  }
  function Kt() {
    const e = this, {
      params: t,
      slidesEl: n
    } = e, i = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
    let r = e.clickedIndex, s;
    const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
    if (t.loop) {
      if (e.animating)
        return;
      s = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - i / 2 || r > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), r = e.getSlideIndex(J(n, `${a}[data-swiper-slide-index="${s}"]`)[0]), ge(() => {
        e.slideTo(r);
      })) : e.slideTo(r) : r > e.slides.length - i ? (e.loopFix(), r = e.getSlideIndex(J(n, `${a}[data-swiper-slide-index="${s}"]`)[0]), ge(() => {
        e.slideTo(r);
      })) : e.slideTo(r);
    } else
      e.slideTo(r);
  }
  const Ut = {
    slideTo: qt,
    slideToLoop: Ft,
    slideNext: Wt,
    slidePrev: Rt,
    slideReset: Yt,
    slideToClosest: Xt,
    slideToClickedSlide: Kt
  };
  function Jt(e) {
    const t = this, {
      params: n,
      slidesEl: i
    } = t;
    if (!n.loop || t.virtual && t.params.virtual.enabled)
      return;
    J(i, `.${n.slideClass}, swiper-slide`).forEach((s, a) => {
      s.setAttribute("data-swiper-slide-index", a);
    }), t.loopFix({
      slideRealIndex: e,
      direction: n.centeredSlides ? void 0 : "next"
    });
  }
  function Qt({
    slideRealIndex: e,
    slideTo: t = !0,
    direction: n,
    setTranslate: i,
    activeSlideIndex: r,
    byController: s,
    byMousewheel: a
  } = {}) {
    const o = this;
    if (!o.params.loop)
      return;
    o.emit("beforeLoopFix");
    const {
      slides: l,
      allowSlidePrev: d,
      allowSlideNext: m,
      slidesEl: u,
      params: p
    } = o;
    if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && p.virtual.enabled) {
      t && (!p.centeredSlides && o.snapIndex === 0 ? o.slideTo(o.virtual.slides.length, 0, !1, !0) : p.centeredSlides && o.snapIndex < p.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0)), o.allowSlidePrev = d, o.allowSlideNext = m, o.emit("loopFix");
      return;
    }
    const c = p.slidesPerView === "auto" ? o.slidesPerViewDynamic() : Math.ceil(parseFloat(p.slidesPerView, 10));
    let f = p.loopedSlides || c;
    f % p.slidesPerGroup !== 0 && (f += p.slidesPerGroup - f % p.slidesPerGroup), o.loopedSlides = f;
    const h = [], y = [];
    let b = o.activeIndex;
    typeof r == "undefined" ? r = o.getSlideIndex(o.slides.filter((S) => S.classList.contains(p.slideActiveClass))[0]) : b = r;
    const E = n === "next" || !n, T = n === "prev" || !n;
    let w = 0, C = 0;
    if (r < f) {
      w = Math.max(f - r, p.slidesPerGroup);
      for (let S = 0; S < f - r; S += 1) {
        const A = S - Math.floor(S / l.length) * l.length;
        h.push(l.length - A - 1);
      }
    } else if (r > o.slides.length - f * 2) {
      C = Math.max(r - (o.slides.length - f * 2), p.slidesPerGroup);
      for (let S = 0; S < C; S += 1) {
        const A = S - Math.floor(S / l.length) * l.length;
        y.push(A);
      }
    }
    if (T && h.forEach((S) => {
      o.slides[S].swiperLoopMoveDOM = !0, u.prepend(o.slides[S]), o.slides[S].swiperLoopMoveDOM = !1;
    }), E && y.forEach((S) => {
      o.slides[S].swiperLoopMoveDOM = !0, u.append(o.slides[S]), o.slides[S].swiperLoopMoveDOM = !1;
    }), o.recalcSlides(), p.slidesPerView === "auto" && o.updateSlides(), p.watchSlidesProgress && o.updateSlidesOffset(), t) {
      if (h.length > 0 && T)
        if (typeof e == "undefined") {
          const S = o.slidesGrid[b], P = o.slidesGrid[b + w] - S;
          a ? o.setTranslate(o.translate - P) : (o.slideTo(b + w, 0, !1, !0), i && (o.touches[o.isHorizontal() ? "startX" : "startY"] += P));
        } else
          i && o.slideToLoop(e, 0, !1, !0);
      else if (y.length > 0 && E)
        if (typeof e == "undefined") {
          const S = o.slidesGrid[b], P = o.slidesGrid[b - C] - S;
          a ? o.setTranslate(o.translate - P) : (o.slideTo(b - C, 0, !1, !0), i && (o.touches[o.isHorizontal() ? "startX" : "startY"] += P));
        } else
          o.slideToLoop(e, 0, !1, !0);
    }
    if (o.allowSlidePrev = d, o.allowSlideNext = m, o.controller && o.controller.control && !s) {
      const S = {
        slideRealIndex: e,
        slideTo: !1,
        direction: n,
        setTranslate: i,
        activeSlideIndex: r,
        byController: !0
      };
      Array.isArray(o.controller.control) ? o.controller.control.forEach((A) => {
        !A.destroyed && A.params.loop && A.loopFix(S);
      }) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix(S);
    }
    o.emit("loopFix");
  }
  function Zt() {
    const e = this, {
      params: t,
      slidesEl: n
    } = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled)
      return;
    e.recalcSlides();
    const i = [];
    e.slides.forEach((r) => {
      const s = typeof r.swiperSlideIndex == "undefined" ? r.getAttribute("data-swiper-slide-index") * 1 : r.swiperSlideIndex;
      i[s] = r;
    }), e.slides.forEach((r) => {
      r.removeAttribute("data-swiper-slide-index");
    }), i.forEach((r) => {
      n.append(r);
    }), e.recalcSlides(), e.slideTo(e.realIndex, 0);
  }
  const ei = {
    loopCreate: Jt,
    loopFix: Qt,
    loopDestroy: Zt
  };
  function ti(e) {
    const t = this;
    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
      return;
    const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
    t.isElement && (t.__preventObserver__ = !0), n.style.cursor = "move", n.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
      t.__preventObserver__ = !1;
    });
  }
  function ii() {
    const e = this;
    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
      e.__preventObserver__ = !1;
    }));
  }
  const ni = {
    setGrabCursor: ti,
    unsetGrabCursor: ii
  };
  function si(e, t = this) {
    function n(i) {
      if (!i || i === Q() || i === F())
        return null;
      i.assignedSlot && (i = i.assignedSlot);
      const r = i.closest(e);
      return !r && !i.getRootNode ? null : r || n(i.getRootNode().host);
    }
    return n(t);
  }
  function ri(e) {
    const t = this, n = Q(), i = F(), r = t.touchEventsData;
    r.evCache.push(e);
    const {
      params: s,
      touches: a,
      enabled: o
    } = t;
    if (!o || !s.simulateTouch && e.pointerType === "mouse" || t.animating && s.preventInteractionOnTransition)
      return;
    !t.animating && s.cssMode && s.loop && t.loopFix();
    let l = e;
    l.originalEvent && (l = l.originalEvent);
    let d = l.target;
    if (s.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(d) || "which" in l && l.which === 3 || "button" in l && l.button > 0 || r.isTouched && r.isMoved)
      return;
    const m = !!s.noSwipingClass && s.noSwipingClass !== "", u = e.composedPath ? e.composedPath() : e.path;
    m && l.target && l.target.shadowRoot && u && (d = u[0]);
    const p = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`, c = !!(l.target && l.target.shadowRoot);
    if (s.noSwiping && (c ? si(p, d) : d.closest(p))) {
      t.allowClick = !0;
      return;
    }
    if (s.swipeHandler && !d.closest(s.swipeHandler))
      return;
    a.currentX = l.pageX, a.currentY = l.pageY;
    const f = a.currentX, h = a.currentY, y = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection, b = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
    if (y && (f <= b || f >= i.innerWidth - b))
      if (y === "prevent")
        e.preventDefault();
      else
        return;
    Object.assign(r, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), a.startX = f, a.startY = h, r.touchStartTime = ce(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, s.threshold > 0 && (r.allowThresholdMove = !1);
    let E = !0;
    d.matches(r.focusableElements) && (E = !1, d.nodeName === "SELECT" && (r.isTouched = !1)), n.activeElement && n.activeElement.matches(r.focusableElements) && n.activeElement !== d && n.activeElement.blur();
    const T = E && t.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || T) && !d.isContentEditable && l.preventDefault(), t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !s.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", l);
  }
  function ai(e) {
    const t = Q(), n = this, i = n.touchEventsData, {
      params: r,
      touches: s,
      rtlTranslate: a,
      enabled: o
    } = n;
    if (!o || !r.simulateTouch && e.pointerType === "mouse")
      return;
    let l = e;
    if (l.originalEvent && (l = l.originalEvent), !i.isTouched) {
      i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", l);
      return;
    }
    const d = i.evCache.findIndex((S) => S.pointerId === l.pointerId);
    d >= 0 && (i.evCache[d] = l);
    const m = i.evCache.length > 1 ? i.evCache[0] : l, u = m.pageX, p = m.pageY;
    if (l.preventedByNestedSwiper) {
      s.startX = u, s.startY = p;
      return;
    }
    if (!n.allowTouchMove) {
      l.target.matches(i.focusableElements) || (n.allowClick = !1), i.isTouched && (Object.assign(s, {
        startX: u,
        startY: p,
        prevX: n.touches.currentX,
        prevY: n.touches.currentY,
        currentX: u,
        currentY: p
      }), i.touchStartTime = ce());
      return;
    }
    if (r.touchReleaseOnEdges && !r.loop) {
      if (n.isVertical()) {
        if (p < s.startY && n.translate <= n.maxTranslate() || p > s.startY && n.translate >= n.minTranslate()) {
          i.isTouched = !1, i.isMoved = !1;
          return;
        }
      } else if (u < s.startX && n.translate <= n.maxTranslate() || u > s.startX && n.translate >= n.minTranslate())
        return;
    }
    if (t.activeElement && l.target === t.activeElement && l.target.matches(i.focusableElements)) {
      i.isMoved = !0, n.allowClick = !1;
      return;
    }
    if (i.allowTouchCallbacks && n.emit("touchMove", l), l.targetTouches && l.targetTouches.length > 1)
      return;
    s.currentX = u, s.currentY = p;
    const c = s.currentX - s.startX, f = s.currentY - s.startY;
    if (n.params.threshold && Math.sqrt(re(c, 2) + re(f, 2)) < n.params.threshold)
      return;
    if (typeof i.isScrolling == "undefined") {
      let S;
      n.isHorizontal() && s.currentY === s.startY || n.isVertical() && s.currentX === s.startX ? i.isScrolling = !1 : c * c + f * f >= 25 && (S = Math.atan2(Math.abs(f), Math.abs(c)) * 180 / Math.PI, i.isScrolling = n.isHorizontal() ? S > r.touchAngle : 90 - S > r.touchAngle);
    }
    if (i.isScrolling && n.emit("touchMoveOpposite", l), typeof i.startMoving == "undefined" && (s.currentX !== s.startX || s.currentY !== s.startY) && (i.startMoving = !0), i.isScrolling || n.zoom && n.params.zoom && n.params.zoom.enabled && i.evCache.length > 1) {
      i.isTouched = !1;
      return;
    }
    if (!i.startMoving)
      return;
    n.allowClick = !1, !r.cssMode && l.cancelable && l.preventDefault(), r.touchMoveStopPropagation && !r.nested && l.stopPropagation();
    let h = n.isHorizontal() ? c : f, y = n.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
    r.oneWayMovement && (h = Math.abs(h) * (a ? 1 : -1), y = Math.abs(y) * (a ? 1 : -1)), s.diff = h, h *= r.touchRatio, a && (h = -h, y = -y);
    const b = n.touchesDirection;
    n.swipeDirection = h > 0 ? "prev" : "next", n.touchesDirection = y > 0 ? "prev" : "next";
    const E = n.params.loop && !r.cssMode;
    if (!i.isMoved) {
      if (E && n.loopFix({
        direction: n.swipeDirection
      }), i.startTranslate = n.getTranslate(), n.setTransition(0), n.animating) {
        const S = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0
        });
        n.wrapperEl.dispatchEvent(S);
      }
      i.allowMomentumBounce = !1, r.grabCursor && (n.allowSlideNext === !0 || n.allowSlidePrev === !0) && n.setGrabCursor(!0), n.emit("sliderFirstMove", l);
    }
    let T;
    i.isMoved && b !== n.touchesDirection && E && Math.abs(h) >= 1 && (n.loopFix({
      direction: n.swipeDirection,
      setTranslate: !0
    }), T = !0), n.emit("sliderMove", l), i.isMoved = !0, i.currentTranslate = h + i.startTranslate;
    let w = !0, C = r.resistanceRatio;
    if (r.touchReleaseOnEdges && (C = 0), h > 0 ? (E && !T && i.currentTranslate > (r.centeredSlides ? n.minTranslate() - n.size / 2 : n.minTranslate()) && n.loopFix({
      direction: "prev",
      setTranslate: !0,
      activeSlideIndex: 0
    }), i.currentTranslate > n.minTranslate() && (w = !1, r.resistance && (i.currentTranslate = n.minTranslate() - 1 + re(-n.minTranslate() + i.startTranslate + h, C)))) : h < 0 && (E && !T && i.currentTranslate < (r.centeredSlides ? n.maxTranslate() + n.size / 2 : n.maxTranslate()) && n.loopFix({
      direction: "next",
      setTranslate: !0,
      activeSlideIndex: n.slides.length - (r.slidesPerView === "auto" ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
    }), i.currentTranslate < n.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = n.maxTranslate() + 1 - re(n.maxTranslate() - i.startTranslate - h, C)))), w && (l.preventedByNestedSwiper = !0), !n.allowSlideNext && n.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !n.allowSlidePrev && n.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), !n.allowSlidePrev && !n.allowSlideNext && (i.currentTranslate = i.startTranslate), r.threshold > 0)
      if (Math.abs(h) > r.threshold || i.allowThresholdMove) {
        if (!i.allowThresholdMove) {
          i.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, i.currentTranslate = i.startTranslate, s.diff = n.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY;
          return;
        }
      } else {
        i.currentTranslate = i.startTranslate;
        return;
      }
    !r.followFinger || r.cssMode || ((r.freeMode && r.freeMode.enabled && n.freeMode || r.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), n.params.freeMode && r.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(i.currentTranslate), n.setTranslate(i.currentTranslate));
  }
  function oi(e) {
    const t = this, n = t.touchEventsData, i = n.evCache.findIndex((T) => T.pointerId === e.pointerId);
    if (i >= 0 && n.evCache.splice(i, 1), ["pointercancel", "pointerout", "pointerleave"].includes(e.type) && !(e.type === "pointercancel" && (t.browser.isSafari || t.browser.isWebView)))
      return;
    const {
      params: r,
      touches: s,
      rtlTranslate: a,
      slidesGrid: o,
      enabled: l
    } = t;
    if (!l || !r.simulateTouch && e.pointerType === "mouse")
      return;
    let d = e;
    if (d.originalEvent && (d = d.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", d), n.allowTouchCallbacks = !1, !n.isTouched) {
      n.isMoved && r.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, n.startMoving = !1;
      return;
    }
    r.grabCursor && n.isMoved && n.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
    const m = ce(), u = m - n.touchStartTime;
    if (t.allowClick) {
      const T = d.path || d.composedPath && d.composedPath();
      t.updateClickedSlide(T && T[0] || d.target), t.emit("tap click", d), u < 300 && m - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", d);
    }
    if (n.lastClickTime = ce(), ge(() => {
      t.destroyed || (t.allowClick = !0);
    }), !n.isTouched || !n.isMoved || !t.swipeDirection || s.diff === 0 || n.currentTranslate === n.startTranslate) {
      n.isTouched = !1, n.isMoved = !1, n.startMoving = !1;
      return;
    }
    n.isTouched = !1, n.isMoved = !1, n.startMoving = !1;
    let p;
    if (r.followFinger ? p = a ? t.translate : -t.translate : p = -n.currentTranslate, r.cssMode)
      return;
    if (t.params.freeMode && r.freeMode.enabled) {
      t.freeMode.onTouchEnd({
        currentPos: p
      });
      return;
    }
    let c = 0, f = t.slidesSizesGrid[0];
    for (let T = 0; T < o.length; T += T < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
      const w = T < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      typeof o[T + w] != "undefined" ? p >= o[T] && p < o[T + w] && (c = T, f = o[T + w] - o[T]) : p >= o[T] && (c = T, f = o[o.length - 1] - o[o.length - 2]);
    }
    let h = null, y = null;
    r.rewind && (t.isBeginning ? y = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (h = 0));
    const b = (p - o[c]) / f, E = c < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    if (u > r.longSwipesMs) {
      if (!r.longSwipes) {
        t.slideTo(t.activeIndex);
        return;
      }
      t.swipeDirection === "next" && (b >= r.longSwipesRatio ? t.slideTo(r.rewind && t.isEnd ? h : c + E) : t.slideTo(c)), t.swipeDirection === "prev" && (b > 1 - r.longSwipesRatio ? t.slideTo(c + E) : y !== null && b < 0 && Math.abs(b) > r.longSwipesRatio ? t.slideTo(y) : t.slideTo(c));
    } else {
      if (!r.shortSwipes) {
        t.slideTo(t.activeIndex);
        return;
      }
      t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo(c + E) : t.slideTo(c) : (t.swipeDirection === "next" && t.slideTo(h !== null ? h : c + E), t.swipeDirection === "prev" && t.slideTo(y !== null ? y : c));
    }
  }
  function Me() {
    const e = this, {
      params: t,
      el: n
    } = e;
    if (n && n.offsetWidth === 0)
      return;
    t.breakpoints && e.setBreakpoint();
    const {
      allowSlideNext: i,
      allowSlidePrev: r,
      snapGrid: s
    } = e, a = e.virtual && e.params.virtual.enabled;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
    const o = a && t.loop;
    (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !o ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
    }, 500)), e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
  }
  function li(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function di() {
    const e = this, {
      wrapperEl: t,
      rtlTranslate: n,
      enabled: i
    } = e;
    if (!i)
      return;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, e.translate === 0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    let r;
    const s = e.maxTranslate() - e.minTranslate();
    s === 0 ? r = 0 : r = (e.translate - e.minTranslate()) / s, r !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
  }
  function ci(e) {
    const t = this;
    de(t, e.target), t.update();
  }
  let Ce = !1;
  function ui() {
  }
  const He = (e, t) => {
    const n = Q(), {
      params: i,
      el: r,
      wrapperEl: s,
      device: a
    } = e, o = !!i.nested, l = t === "on" ? "addEventListener" : "removeEventListener", d = t;
    r[l]("pointerdown", e.onTouchStart, {
      passive: !1
    }), n[l]("pointermove", e.onTouchMove, {
      passive: !1,
      capture: o
    }), n[l]("pointerup", e.onTouchEnd, {
      passive: !0
    }), n[l]("pointercancel", e.onTouchEnd, {
      passive: !0
    }), n[l]("pointerout", e.onTouchEnd, {
      passive: !0
    }), n[l]("pointerleave", e.onTouchEnd, {
      passive: !0
    }), (i.preventClicks || i.preventClicksPropagation) && r[l]("click", e.onClick, !0), i.cssMode && s[l]("scroll", e.onScroll), i.updateOnWindowResize ? e[d](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Me, !0) : e[d]("observerUpdate", Me, !0), r[l]("load", e.onLoad, {
      capture: !0
    });
  };
  function fi() {
    const e = this, t = Q(), {
      params: n
    } = e;
    e.onTouchStart = ri.bind(e), e.onTouchMove = ai.bind(e), e.onTouchEnd = oi.bind(e), n.cssMode && (e.onScroll = di.bind(e)), e.onClick = li.bind(e), e.onLoad = ci.bind(e), Ce || (t.addEventListener("touchstart", ui), Ce = !0), He(e, "on");
  }
  function pi() {
    He(this, "off");
  }
  const mi = {
    attachEvents: fi,
    detachEvents: pi
  }, Le = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  function hi() {
    const e = this, {
      realIndex: t,
      initialized: n,
      params: i,
      el: r
    } = e, s = i.breakpoints;
    if (!s || s && Object.keys(s).length === 0)
      return;
    const a = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
    if (!a || e.currentBreakpoint === a)
      return;
    const l = (a in s ? s[a] : void 0) || e.originalParams, d = Le(e, i), m = Le(e, l), u = i.enabled;
    d && !m ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && m && (r.classList.add(`${i.containerModifierClass}grid`), (l.grid.fill && l.grid.fill === "column" || !l.grid.fill && i.grid.fill === "column") && r.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((h) => {
      const y = i[h] && i[h].enabled, b = l[h] && l[h].enabled;
      y && !b && e[h].disable(), !y && b && e[h].enable();
    });
    const p = l.direction && l.direction !== i.direction, c = i.loop && (l.slidesPerView !== i.slidesPerView || p);
    p && n && e.changeDirection(), q(e.params, l);
    const f = e.params.enabled;
    Object.assign(e, {
      allowTouchMove: e.params.allowTouchMove,
      allowSlideNext: e.params.allowSlideNext,
      allowSlidePrev: e.params.allowSlidePrev
    }), u && !f ? e.disable() : !u && f && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", l), c && n && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()), e.emit("breakpoint", l);
  }
  function gi(e, t = "window", n) {
    if (!e || t === "container" && !n)
      return;
    let i = !1;
    const r = F(), s = t === "window" ? r.innerHeight : n.clientHeight, a = Object.keys(e).map((o) => {
      if (typeof o == "string" && o.indexOf("@") === 0) {
        const l = parseFloat(o.substr(1));
        return {
          value: s * l,
          point: o
        };
      }
      return {
        value: o,
        point: o
      };
    });
    a.sort((o, l) => parseInt(o.value, 10) - parseInt(l.value, 10));
    for (let o = 0; o < a.length; o += 1) {
      const {
        point: l,
        value: d
      } = a[o];
      t === "window" ? r.matchMedia(`(min-width: ${d}px)`).matches && (i = l) : d <= n.clientWidth && (i = l);
    }
    return i || "max";
  }
  const vi = {
    setBreakpoint: hi,
    getBreakpoint: gi
  };
  function yi(e, t) {
    const n = [];
    return e.forEach((i) => {
      typeof i == "object" ? Object.keys(i).forEach((r) => {
        i[r] && n.push(t + r);
      }) : typeof i == "string" && n.push(t + i);
    }), n;
  }
  function bi() {
    const e = this, {
      classNames: t,
      params: n,
      rtl: i,
      el: r,
      device: s
    } = e, a = yi(["initialized", n.direction, {
      "free-mode": e.params.freeMode && n.freeMode.enabled
    }, {
      autoheight: n.autoHeight
    }, {
      rtl: i
    }, {
      grid: n.grid && n.grid.rows > 1
    }, {
      "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column"
    }, {
      android: s.android
    }, {
      ios: s.ios
    }, {
      "css-mode": n.cssMode
    }, {
      centered: n.cssMode && n.centeredSlides
    }, {
      "watch-progress": n.watchSlidesProgress
    }], n.containerModifierClass);
    t.push(...a), r.classList.add(...t), e.emitContainerClasses();
  }
  function wi() {
    const e = this, {
      el: t,
      classNames: n
    } = e;
    t.classList.remove(...n), e.emitContainerClasses();
  }
  const Si = {
    addClasses: bi,
    removeClasses: wi
  };
  function Ti() {
    const e = this, {
      isLocked: t,
      params: n
    } = e, {
      slidesOffsetBefore: i
    } = n;
    if (i) {
      const r = e.slides.length - 1, s = e.slidesGrid[r] + e.slidesSizesGrid[r] + i * 2;
      e.isLocked = e.size > s;
    } else
      e.isLocked = e.snapGrid.length === 1;
    n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
  }
  const xi = {
    checkOverflow: Ti
  }, Pe = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: !1,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: !1,
    // Set wrapper width
    setWrapperSize: !1,
    // Virtual Translate
    virtualTranslate: !1,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: void 0,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: !0,
    // Round length
    roundLengths: !1,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    // Unique Navigation Elements
    uniqueNavElements: !0,
    // Resistance
    resistance: !0,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: !1,
    // Cursor
    grabCursor: !1,
    // Clicks
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    // loop
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    // rewind
    rewind: !1,
    // Swiping/no swiping
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: "swiper-",
    // NEW
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: !0,
    // Internals
    _emitClasses: !1
  };
  function Ei(e, t) {
    return function(i = {}) {
      const r = Object.keys(i)[0], s = i[r];
      if (typeof s != "object" || s === null) {
        q(t, i);
        return;
      }
      if (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 && e[r] === !0 && (e[r] = {
        auto: !0
      }), !(r in e && "enabled" in s)) {
        q(t, i);
        return;
      }
      e[r] === !0 && (e[r] = {
        enabled: !0
      }), typeof e[r] == "object" && !("enabled" in e[r]) && (e[r].enabled = !0), e[r] || (e[r] = {
        enabled: !1
      }), q(t, i);
    };
  }
  const me = {
    eventsEmitter: St,
    update: zt,
    translate: $t,
    transition: Bt,
    slide: Ut,
    loop: ei,
    grabCursor: ni,
    events: mi,
    breakpoints: vi,
    checkOverflow: xi,
    classes: Si
  }, he = {};
  class Y {
    constructor(...t) {
      let n, i;
      t.length === 1 && t[0].constructor && Object.prototype.toString.call(t[0]).slice(8, -1) === "Object" ? i = t[0] : [n, i] = t, i || (i = {}), i = q({}, i), n && !i.el && (i.el = n);
      const r = Q();
      if (i.el && typeof i.el == "string" && r.querySelectorAll(i.el).length > 1) {
        const l = [];
        return r.querySelectorAll(i.el).forEach((d) => {
          const m = q({}, i, {
            el: d
          });
          l.push(new Y(m));
        }), l;
      }
      const s = this;
      s.__swiper__ = !0, s.support = _e(), s.device = gt({
        userAgent: i.userAgent
      }), s.browser = yt(), s.eventsListeners = {}, s.eventsAnyListeners = [], s.modules = [...s.__modules__], i.modules && Array.isArray(i.modules) && s.modules.push(...i.modules);
      const a = {};
      s.modules.forEach((l) => {
        l({
          params: i,
          swiper: s,
          extendParams: Ei(i, a),
          on: s.on.bind(s),
          once: s.once.bind(s),
          off: s.off.bind(s),
          emit: s.emit.bind(s)
        });
      });
      const o = q({}, Pe, a);
      return s.params = q({}, o, he, i), s.originalParams = q({}, s.params), s.passedParams = q({}, i), s.params && s.params.on && Object.keys(s.params.on).forEach((l) => {
        s.on(l, s.params.on[l]);
      }), s.params && s.params.onAny && s.onAny(s.params.onAny), Object.assign(s, {
        enabled: s.params.enabled,
        el: n,
        // Classes
        classNames: [],
        // Slides
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal() {
          return s.params.direction === "horizontal";
        },
        isVertical() {
          return s.params.direction === "vertical";
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: !0,
        isEnd: !1,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / re(2, 23)) * re(2, 23);
        },
        // Locks
        allowSlideNext: s.params.allowSlideNext,
        allowSlidePrev: s.params.allowSlidePrev,
        // Touch Events
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          // Form elements to match
          focusableElements: s.params.focusableElements,
          // Last click time
          lastClickTime: 0,
          clickTimeout: void 0,
          // Velocities
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          evCache: []
        },
        // Clicks
        allowClick: !0,
        // Touches
        allowTouchMove: s.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0
      }), s.emit("_swiper"), s.params.init && s.init(), s;
    }
    getSlideIndex(t) {
      const {
        slidesEl: n,
        params: i
      } = this, r = J(n, `.${i.slideClass}, swiper-slide`), s = Te(r[0]);
      return Te(t) - s;
    }
    getSlideIndexByData(t) {
      return this.getSlideIndex(this.slides.filter((n) => n.getAttribute("data-swiper-slide-index") * 1 === t)[0]);
    }
    recalcSlides() {
      const t = this, {
        slidesEl: n,
        params: i
      } = t;
      t.slides = J(n, `.${i.slideClass}, swiper-slide`);
    }
    enable() {
      const t = this;
      t.enabled || (t.enabled = !0, t.params.grabCursor && t.setGrabCursor(), t.emit("enable"));
    }
    disable() {
      const t = this;
      t.enabled && (t.enabled = !1, t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"));
    }
    setProgress(t, n) {
      const i = this;
      t = Math.min(Math.max(t, 0), 1);
      const r = i.minTranslate(), a = (i.maxTranslate() - r) * t + r;
      i.translateTo(a, typeof n == "undefined" ? 0 : n), i.updateActiveIndex(), i.updateSlidesClasses();
    }
    emitContainerClasses() {
      const t = this;
      if (!t.params._emitClasses || !t.el)
        return;
      const n = t.el.className.split(" ").filter((i) => i.indexOf("swiper") === 0 || i.indexOf(t.params.containerModifierClass) === 0);
      t.emit("_containerClasses", n.join(" "));
    }
    getSlideClasses(t) {
      const n = this;
      return n.destroyed ? "" : t.className.split(" ").filter((i) => i.indexOf("swiper-slide") === 0 || i.indexOf(n.params.slideClass) === 0).join(" ");
    }
    emitSlidesClasses() {
      const t = this;
      if (!t.params._emitClasses || !t.el)
        return;
      const n = [];
      t.slides.forEach((i) => {
        const r = t.getSlideClasses(i);
        n.push({
          slideEl: i,
          classNames: r
        }), t.emit("_slideClass", i, r);
      }), t.emit("_slideClasses", n);
    }
    slidesPerViewDynamic(t = "current", n = !1) {
      const i = this, {
        params: r,
        slides: s,
        slidesGrid: a,
        slidesSizesGrid: o,
        size: l,
        activeIndex: d
      } = i;
      let m = 1;
      if (r.centeredSlides) {
        let u = s[d].swiperSlideSize, p;
        for (let c = d + 1; c < s.length; c += 1)
          s[c] && !p && (u += s[c].swiperSlideSize, m += 1, u > l && (p = !0));
        for (let c = d - 1; c >= 0; c -= 1)
          s[c] && !p && (u += s[c].swiperSlideSize, m += 1, u > l && (p = !0));
      } else if (t === "current")
        for (let u = d + 1; u < s.length; u += 1)
          (n ? a[u] + o[u] - a[d] < l : a[u] - a[d] < l) && (m += 1);
      else
        for (let u = d - 1; u >= 0; u -= 1)
          a[d] - a[u] < l && (m += 1);
      return m;
    }
    update() {
      const t = this;
      if (!t || t.destroyed)
        return;
      const {
        snapGrid: n,
        params: i
      } = t;
      i.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach((a) => {
        a.complete && de(t, a);
      }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
      function r() {
        const a = t.rtlTranslate ? t.translate * -1 : t.translate, o = Math.min(Math.max(a, t.maxTranslate()), t.minTranslate());
        t.setTranslate(o), t.updateActiveIndex(), t.updateSlidesClasses();
      }
      let s;
      if (t.params.freeMode && t.params.freeMode.enabled)
        r(), t.params.autoHeight && t.updateAutoHeight();
      else {
        if ((t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides) {
          const a = t.virtual && t.params.virtual.enabled ? t.virtual.slides : t.slides;
          s = t.slideTo(a.length - 1, 0, !1, !0);
        } else
          s = t.slideTo(t.activeIndex, 0, !1, !0);
        s || r();
      }
      i.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
    }
    changeDirection(t, n = !0) {
      const i = this, r = i.params.direction;
      return t || (t = r === "horizontal" ? "vertical" : "horizontal"), t === r || t !== "horizontal" && t !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${r}`), i.el.classList.add(`${i.params.containerModifierClass}${t}`), i.emitContainerClasses(), i.params.direction = t, i.slides.forEach((s) => {
        t === "vertical" ? s.style.width = "" : s.style.height = "";
      }), i.emit("changeDirection"), n && i.update()), i;
    }
    changeLanguageDirection(t) {
      const n = this;
      n.rtl && t === "rtl" || !n.rtl && t === "ltr" || (n.rtl = t === "rtl", n.rtlTranslate = n.params.direction === "horizontal" && n.rtl, n.rtl ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`), n.el.dir = "rtl") : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`), n.el.dir = "ltr"), n.update());
    }
    mount(t) {
      const n = this;
      if (n.mounted)
        return !0;
      let i = t || n.params.el;
      if (typeof i == "string" && (i = document.querySelector(i)), !i)
        return !1;
      i.swiper = n, i.shadowEl && (n.isElement = !0);
      const r = () => `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let a = (() => i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(r()) : J(i, r())[0])();
      return !a && n.params.createElements && (a = Ie("div", n.params.wrapperClass), i.append(a), J(i, `.${n.params.slideClass}`).forEach((o) => {
        a.append(o);
      })), Object.assign(n, {
        el: i,
        wrapperEl: a,
        slidesEl: n.isElement ? i : a,
        mounted: !0,
        // RTL
        rtl: i.dir.toLowerCase() === "rtl" || ne(i, "direction") === "rtl",
        rtlTranslate: n.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || ne(i, "direction") === "rtl"),
        wrongRTL: ne(a, "display") === "-webkit-box"
      }), !0;
    }
    init(t) {
      const n = this;
      return n.initialized || n.mount(t) === !1 || (n.emit("beforeInit"), n.params.breakpoints && n.setBreakpoint(), n.addClasses(), n.updateSize(), n.updateSlides(), n.params.watchOverflow && n.checkOverflow(), n.params.grabCursor && n.enabled && n.setGrabCursor(), n.params.loop && n.virtual && n.params.virtual.enabled ? n.slideTo(n.params.initialSlide + n.virtual.slidesBefore, 0, n.params.runCallbacksOnInit, !1, !0) : n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit, !1, !0), n.params.loop && n.loopCreate(), n.attachEvents(), [...n.el.querySelectorAll('[loading="lazy"]')].forEach((r) => {
        r.complete ? de(n, r) : r.addEventListener("load", (s) => {
          de(n, s.target);
        });
      }), ve(n), n.initialized = !0, ve(n), n.emit("init"), n.emit("afterInit")), n;
    }
    destroy(t = !0, n = !0) {
      const i = this, {
        params: r,
        el: s,
        wrapperEl: a,
        slides: o
      } = i;
      return typeof i.params == "undefined" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), r.loop && i.loopDestroy(), n && (i.removeClasses(), s.removeAttribute("style"), a.removeAttribute("style"), o && o.length && o.forEach((l) => {
        l.classList.remove(r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass), l.removeAttribute("style"), l.removeAttribute("data-swiper-slide-index");
      })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((l) => {
        i.off(l);
      }), t !== !1 && (i.el.swiper = null, ot(i)), i.destroyed = !0), null;
    }
    static extendDefaults(t) {
      q(he, t);
    }
    static get extendedDefaults() {
      return he;
    }
    static get defaults() {
      return Pe;
    }
    static installModule(t) {
      Y.prototype.__modules__ || (Y.prototype.__modules__ = []);
      const n = Y.prototype.__modules__;
      typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
    }
    static use(t) {
      return Array.isArray(t) ? (t.forEach((n) => Y.installModule(n)), Y) : (Y.installModule(t), Y);
    }
  }
  Object.keys(me).forEach((e) => {
    Object.keys(me[e]).forEach((t) => {
      Y.prototype[t] = me[e][t];
    });
  });
  Y.use([bt, wt]);
  function Mi(e, t, n, i) {
    return e.params.createElements && Object.keys(i).forEach((r) => {
      if (!n[r] && n.auto === !0) {
        let s = J(e.el, `.${i[r]}`)[0];
        s || (s = Ie("div", i[r]), s.className = i[r], e.el.append(s)), n[r] = s, t[r] = s;
      }
    }), n;
  }
  function Ci({
    swiper: e,
    extendParams: t,
    on: n,
    emit: i
  }) {
    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    }), e.navigation = {
      nextEl: null,
      prevEl: null
    };
    const r = (f) => (Array.isArray(f) || (f = [f].filter((h) => !!h)), f);
    function s(f) {
      let h;
      return f && typeof f == "string" && e.isElement && (h = e.el.shadowRoot.querySelector(f), h) ? h : (f && (typeof f == "string" && (h = [...document.querySelectorAll(f)]), e.params.uniqueNavElements && typeof f == "string" && h.length > 1 && e.el.querySelectorAll(f).length === 1 && (h = e.el.querySelector(f))), f && !h ? f : h);
    }
    function a(f, h) {
      const y = e.params.navigation;
      f = r(f), f.forEach((b) => {
        b && (b.classList[h ? "add" : "remove"](...y.disabledClass.split(" ")), b.tagName === "BUTTON" && (b.disabled = h), e.params.watchOverflow && e.enabled && b.classList[e.isLocked ? "add" : "remove"](y.lockClass));
      });
    }
    function o() {
      const {
        nextEl: f,
        prevEl: h
      } = e.navigation;
      if (e.params.loop) {
        a(h, !1), a(f, !1);
        return;
      }
      a(h, e.isBeginning && !e.params.rewind), a(f, e.isEnd && !e.params.rewind);
    }
    function l(f) {
      f.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), i("navigationPrev"));
    }
    function d(f) {
      f.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), i("navigationNext"));
    }
    function m() {
      const f = e.params.navigation;
      if (e.params.navigation = Mi(e, e.originalParams.navigation, e.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !(f.nextEl || f.prevEl))
        return;
      let h = s(f.nextEl), y = s(f.prevEl);
      Object.assign(e.navigation, {
        nextEl: h,
        prevEl: y
      }), h = r(h), y = r(y);
      const b = (E, T) => {
        E && E.addEventListener("click", T === "next" ? d : l), !e.enabled && E && E.classList.add(...f.lockClass.split(" "));
      };
      h.forEach((E) => b(E, "next")), y.forEach((E) => b(E, "prev"));
    }
    function u() {
      let {
        nextEl: f,
        prevEl: h
      } = e.navigation;
      f = r(f), h = r(h);
      const y = (b, E) => {
        b.removeEventListener("click", E === "next" ? d : l), b.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      f.forEach((b) => y(b, "next")), h.forEach((b) => y(b, "prev"));
    }
    n("init", () => {
      e.params.navigation.enabled === !1 ? c() : (m(), o());
    }), n("toEdge fromEdge lock unlock", () => {
      o();
    }), n("destroy", () => {
      u();
    }), n("enable disable", () => {
      let {
        nextEl: f,
        prevEl: h
      } = e.navigation;
      f = r(f), h = r(h), [...f, ...h].filter((y) => !!y).forEach((y) => y.classList[e.enabled ? "remove" : "add"](e.params.navigation.lockClass));
    }), n("click", (f, h) => {
      let {
        nextEl: y,
        prevEl: b
      } = e.navigation;
      y = r(y), b = r(b);
      const E = h.target;
      if (e.params.navigation.hideOnClick && !b.includes(E) && !y.includes(E)) {
        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === E || e.pagination.el.contains(E)))
          return;
        let T;
        y.length ? T = y[0].classList.contains(e.params.navigation.hiddenClass) : b.length && (T = b[0].classList.contains(e.params.navigation.hiddenClass)), i(T === !0 ? "navigationShow" : "navigationHide"), [...y, ...b].filter((w) => !!w).forEach((w) => w.classList.toggle(e.params.navigation.hiddenClass));
      }
    });
    const p = () => {
      e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), m(), o();
    }, c = () => {
      e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), u();
    };
    Object.assign(e.navigation, {
      enable: p,
      disable: c,
      update: o,
      init: m,
      destroy: u
    });
  }
  function Li({
    swiper: e,
    extendParams: t,
    on: n,
    emit: i,
    params: r
  }) {
    e.autoplay = {
      running: !1,
      paused: !1,
      timeLeft: 0
    }, t({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1
      }
    });
    let s, a, o = r && r.autoplay ? r.autoplay.delay : 3e3, l = r && r.autoplay ? r.autoplay.delay : 3e3, d, m = (/* @__PURE__ */ new Date()).getTime, u, p, c, f, h, y;
    function b(L) {
      !e || e.destroyed || !e.wrapperEl || L.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", b), P());
    }
    const E = () => {
      if (e.destroyed || !e.autoplay.running)
        return;
      e.autoplay.paused ? u = !0 : u && (l = d, u = !1);
      const L = e.autoplay.paused ? d : m + l - (/* @__PURE__ */ new Date()).getTime();
      e.autoplay.timeLeft = L, i("autoplayTimeLeft", L, L / o), a = requestAnimationFrame(() => {
        E();
      });
    }, T = () => {
      let L;
      return e.virtual && e.params.virtual.enabled ? L = e.slides.filter((_) => _.classList.contains("swiper-slide-active"))[0] : L = e.slides[e.activeIndex], L ? parseInt(L.getAttribute("data-swiper-autoplay"), 10) : void 0;
    }, w = (L) => {
      if (e.destroyed || !e.autoplay.running)
        return;
      cancelAnimationFrame(a), E();
      let D = typeof L == "undefined" ? e.params.autoplay.delay : L;
      o = e.params.autoplay.delay, l = e.params.autoplay.delay;
      const _ = T();
      !Number.isNaN(_) && _ > 0 && typeof L == "undefined" && (D = _, o = _, l = _), d = D;
      const j = e.params.speed, X = () => {
        !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(j, !0, !0), i("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, j, !0, !0), i("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(j, !0, !0), i("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, j, !0, !0), i("autoplay")), e.params.cssMode && (m = (/* @__PURE__ */ new Date()).getTime(), requestAnimationFrame(() => {
          w();
        })));
      };
      return D > 0 ? (clearTimeout(s), s = setTimeout(() => {
        X();
      }, D)) : requestAnimationFrame(() => {
        X();
      }), D;
    }, C = () => {
      e.autoplay.running = !0, w(), i("autoplayStart");
    }, S = () => {
      e.autoplay.running = !1, clearTimeout(s), cancelAnimationFrame(a), i("autoplayStop");
    }, A = (L, D) => {
      if (e.destroyed || !e.autoplay.running)
        return;
      clearTimeout(s), L || (y = !0);
      const _ = () => {
        i("autoplayPause"), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", b) : P();
      };
      if (e.autoplay.paused = !0, D) {
        h && (d = e.params.autoplay.delay), h = !1, _();
        return;
      }
      d = (d || e.params.autoplay.delay) - ((/* @__PURE__ */ new Date()).getTime() - m), !(e.isEnd && d < 0 && !e.params.loop) && (d < 0 && (d = 0), _());
    }, P = () => {
      e.isEnd && d < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (m = (/* @__PURE__ */ new Date()).getTime(), y ? (y = !1, w(d)) : w(), e.autoplay.paused = !1, i("autoplayResume"));
    }, k = () => {
      if (e.destroyed || !e.autoplay.running)
        return;
      const L = Q();
      L.visibilityState === "hidden" && (y = !0, A(!0)), L.visibilityState === "visible" && P();
    }, V = (L) => {
      L.pointerType === "mouse" && (y = !0, A(!0));
    }, v = (L) => {
      L.pointerType === "mouse" && e.autoplay.paused && P();
    }, g = () => {
      e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", V), e.el.addEventListener("pointerleave", v));
    }, x = () => {
      e.el.removeEventListener("pointerenter", V), e.el.removeEventListener("pointerleave", v);
    }, M = () => {
      Q().addEventListener("visibilitychange", k);
    }, I = () => {
      Q().removeEventListener("visibilitychange", k);
    };
    n("init", () => {
      e.params.autoplay.enabled && (g(), M(), m = (/* @__PURE__ */ new Date()).getTime(), C());
    }), n("destroy", () => {
      x(), I(), e.autoplay.running && S();
    }), n("beforeTransitionStart", (L, D, _) => {
      e.destroyed || !e.autoplay.running || (_ || !e.params.autoplay.disableOnInteraction ? A(!0, !0) : S());
    }), n("sliderFirstMove", () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          S();
          return;
        }
        p = !0, c = !1, y = !1, f = setTimeout(() => {
          y = !0, c = !0, A(!0);
        }, 200);
      }
    }), n("touchEnd", () => {
      if (!(e.destroyed || !e.autoplay.running || !p)) {
        if (clearTimeout(f), clearTimeout(s), e.params.autoplay.disableOnInteraction) {
          c = !1, p = !1;
          return;
        }
        c && e.params.cssMode && P(), c = !1, p = !1;
      }
    }), n("slideChange", () => {
      e.destroyed || !e.autoplay.running || (h = !0);
    }), Object.assign(e.autoplay, {
      start: C,
      stop: S,
      pause: A,
      resume: P
    });
  }
  const Pi = (() => {
    const e = () => {
      new Y(".swiper-home", {
        modules: [Li, Ci],
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
          576: {
            slidesPerView: 3.2,
            spaceBetween: 40
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 50
          },
          1500: {
            slidesPerView: 7,
            spaceBetween: 50
          }
        }
      });
    };
    return {
      setHandleEvent: function() {
        try {
          e();
        } catch (t) {
        }
      }
    };
  })(), ki = () => {
    Pi.setHandleEvent();
  }, Oi = () => {
    const e = window.pageYOffset || document.documentElement.scrollTop, t = window.pageXOffset || document.documentElement.scrollLeft;
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    }), window.onscroll = function() {
      window.scrollTo(t, e);
    };
  }, ke = (e) => we(Ge, null, function* () {
    const t = yield fetch(e, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }), n = t.status;
    return n == 404 ? n : yield t.json();
  }), Ai = (e, t, n) => `<picture data-colaborator="${t}" style="--left: ${e * 70}px; --index: 0.${e}s">
                <img src="${n}" alt="">
            </picture>`, zi = (e, t, n, i, r) => `
    <div class="item">
        <picture>
            <img src="${e}" alt="">
        </picture>
        <picture>
            <img src="/themes/custom/alerta_theme/sources/dist/assets/img/jpg/bg-modal.jpg" alt="">
        </picture>
        <div class="modal__name">
            <p>${t}</p>
        </div>
    </div>
    <div class="item">
        <div class="modal__close close-modal">
            <picture>
                <img src="/themes/custom/alerta_theme/sources/dist/assets/img/svg/star-modal.svg" alt="">
            </picture>
        </div>
        <div class="modal__dsc">
            <h4>${n}</h4>
            <p>${i}</p>
        </div>
        <div class="block">
            ${r.map(function(s) {
    return `<picture><img src="${s.icon}" alt="categories"></picture>`;
  })}
        </div>
    </div>
    `, Ii = (() => {
    const e = () => {
      const i = document.querySelector("#render-team");
      i && ke("/api/colaborators").then((r) => {
        r.forEach((s, a) => {
          const { colaborator_id: o, picture: l } = s, d = Ai(a, o, l);
          i.innerHTML += d, t();
        });
      });
    }, t = () => {
      const i = document.querySelectorAll("#render-team picture"), r = document.querySelector("#modal-content .modal");
      r && i.forEach((s) => {
        s.addEventListener("click", (a) => {
          ke(`/api/colaborator/${s.dataset.colaborator}`).then((o) => {
            const { picture: l, name: d, position: m, description: u, habilities: p } = o, c = zi(l, d, m, u, p);
            r.classList.add("active"), r.querySelector(".modal__content").innerHTML = c, n();
          });
        });
      });
    }, n = () => {
      document.querySelectorAll(".close-modal").forEach((r) => {
        r.addEventListener("click", (s) => {
          s.target.closest(".modal").classList.remove("active");
        });
      });
    };
    return {
      setHandleEvent: function() {
        try {
          e();
        } catch (i) {
        }
      }
    };
  })(), _i = () => {
    Ii.setHandleEvent();
  };
  Oi();
  window.addEventListener("load", () => {
    Fe(), Ne(), tt(), Be(), Re(), Xe(), rt(), Ue(), _i(), ki(), Qe(), Ze(), window.onscroll = null;
  });
});
export default Di();
//# sourceMappingURL=mainscript.js.map
