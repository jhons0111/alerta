const f = (() => {
  const n = () => {
    const t = document.querySelector(".loader");
    setTimeout(() => {
      t.classList.add("line-animate");
    }, 1500), setTimeout(() => {
      t.classList.add("hidden");
    }, 2250);
  };
  return {
    setHandleEvent: function() {
      try {
        n();
      } catch (t) {
      }
    }
  };
})(), y = () => {
  f.setHandleEvent();
}, g = (() => {
  const n = () => {
    let t = 0;
    window.addEventListener("scroll", function() {
      const o = window.pageYOffset || document.documentElement.scrollTop, e = document.querySelector(".header");
      o > t ? e.classList.add("scroll") : o < t && e.classList.remove("scroll"), t = o <= 0 ? 0 : o;
    });
  };
  return {
    setHandleEvent: function() {
      try {
        n();
      } catch (t) {
      }
    }
  };
})(), p = () => {
  g.setHandleEvent();
}, v = (() => {
  const n = () => {
    const t = () => {
      const o = document.body, e = document.querySelector(".dialog-off-canvas-main-canvas");
      let s = 0, c = 0, r = s, l = c;
      o.style.height = e.clientHeight + "px", e.style.position = "fixed", e.style.top = 0, e.style.left = 0, window.addEventListener("scroll", u), window.addEventListener("scroll", () => {
        o.style.height = e.clientHeight + "px";
      }), window.addEventListener("resize", () => {
        o.style.height = e.clientHeight + "px";
      });
      function u() {
        s = window.pageXOffset, c = window.pageYOffset;
      }
      window.requestAnimationFrame(a);
      function a() {
        r = d(r, s, 0.07), l = d(l, c, 0.07), r = Math.floor(r * 100) / 100, l = Math.floor(l * 100) / 100, e.style.transform = `translate3d(-${r}px, -${l}px, 0px)`, window.requestAnimationFrame(a);
      }
      function d(h, m, i) {
        return (1 - i) * h + i * m;
      }
    };
    setTimeout(() => {
      window.screen.width >= 992 && t();
    }, 2e3);
  };
  return {
    setHandleEvent: function() {
      try {
        n();
      } catch (t) {
      }
    }
  };
})(), H = () => {
  v.setHandleEvent();
}, w = (() => {
  const n = () => {
    const t = document.querySelector("#open-form"), o = document.querySelector("#join-form-ctn .join-us__bg");
    console.log(o), o.addEventListener("click", (e) => {
      console.log("click"), e.target.closest(".join-us").classList.remove("active");
    }), t.addEventListener("click", (e) => {
      e.target.closest(".join-us").classList.toggle("active");
    });
  };
  return {
    setHandleEvent: function() {
      try {
        n();
      } catch (t) {
      }
    }
  };
})(), L = () => {
  w.setHandleEvent();
}, E = (() => {
  const n = () => {
    const t = document.querySelector("#join-form-ctn"), o = document.querySelector(".header"), e = document.body;
    setTimeout(() => {
      e.appendChild(o), e.appendChild(t);
    }, 2500);
  };
  return {
    setHandleEvent: function() {
      try {
        n();
      } catch (t) {
      }
    }
  };
})(), S = () => {
  E.setHandleEvent();
}, q = (() => {
  const n = (o) => {
    const e = path1.getTotalLength(), s = path2.getTotalLength();
    path1.style.strokeDasharray = e, path1.style.strokeDashoffset = e, path2.style.strokeDasharray = s, path2.style.strokeDashoffset = s;
  }, t = () => {
    document.querySelector(".loader #path1"), document.querySelector(".loader #path2"), n(), n();
  };
  return {
    setHandleEvent: function() {
      try {
        t();
      } catch (o) {
      }
    }
  };
})(), x = () => {
  q.setHandleEvent();
};
window.addEventListener("load", () => {
  y(), x(), p(), H(), L(), S();
});
//# sourceMappingURL=mainscript.js.map
