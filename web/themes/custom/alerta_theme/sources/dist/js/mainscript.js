const m = (() => {
  const o = () => {
    const e = document.querySelector(".loader");
    setTimeout(() => {
      e.classList.add("line-animate");
    }, 1500), setTimeout(() => {
      e.classList.add("hidden");
    }, 2250);
  };
  return {
    setHandleEvent: function() {
      try {
        o();
      } catch (e) {
      }
    }
  };
})(), y = () => {
  m.setHandleEvent();
}, g = (() => {
  const o = () => {
    let e = 0;
    window.addEventListener("scroll", function() {
      const n = window.pageYOffset || document.documentElement.scrollTop, t = document.querySelector(".header");
      n > e ? t.classList.add("scroll") : n < e && t.classList.remove("scroll"), e = n <= 0 ? 0 : n;
    });
  };
  return {
    setHandleEvent: function() {
      try {
        o();
      } catch (e) {
      }
    }
  };
})(), p = () => {
  g.setHandleEvent();
}, w = (() => {
  const o = () => {
    const e = () => {
      const n = document.body, t = document.querySelector(".dialog-off-canvas-main-canvas");
      let s = 0, a = 0, r = s, l = a;
      n.style.height = t.clientHeight + "px", t.style.position = "fixed", t.style.top = 0, t.style.left = 0, window.addEventListener("scroll", h), window.addEventListener("scroll", () => {
        n.style.height = t.clientHeight + "px";
      }), window.addEventListener("resize", () => {
        n.style.height = t.clientHeight + "px";
      });
      function h() {
        s = window.pageXOffset, a = window.pageYOffset;
      }
      window.requestAnimationFrame(c);
      function c() {
        r = d(r, s, 0.07), l = d(l, a, 0.07), r = Math.floor(r * 100) / 100, l = Math.floor(l * 100) / 100, t.style.transform = `translate3d(-${r}px, -${l}px, 0px)`, window.requestAnimationFrame(c);
      }
      function d(u, f, i) {
        return (1 - i) * u + i * f;
      }
    };
    setTimeout(() => {
      window.screen.width >= 992 && e();
    }, 2e3);
  };
  return {
    setHandleEvent: function() {
      try {
        o();
      } catch (e) {
      }
    }
  };
})(), H = () => {
  w.setHandleEvent();
}, v = (() => {
  const o = () => {
    document.querySelector("#open-form").addEventListener("click", (n) => {
      n.target.closest(".join-us").classList.toggle("active");
    });
  };
  return {
    setHandleEvent: function() {
      try {
        o();
      } catch (e) {
      }
    }
  };
})(), L = () => {
  v.setHandleEvent();
}, E = (() => {
  const o = (n) => {
    const t = path1.getTotalLength(), s = path2.getTotalLength();
    path1.style.strokeDasharray = t, path1.style.strokeDashoffset = t, path2.style.strokeDasharray = s, path2.style.strokeDashoffset = s;
  }, e = () => {
    document.querySelector(".loader #path1"), document.querySelector(".loader #path2"), o(), o();
  };
  return {
    setHandleEvent: function() {
      try {
        e();
      } catch (n) {
      }
    }
  };
})(), S = () => {
  E.setHandleEvent();
};
window.addEventListener("load", () => {
  y(), S(), p(), H(), L();
});
//# sourceMappingURL=mainscript.js.map
