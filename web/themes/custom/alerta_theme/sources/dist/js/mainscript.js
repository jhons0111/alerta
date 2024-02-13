const s = (() => {
  const t = () => {
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
        t();
      } catch (e) {
      }
    }
  };
})(), r = () => {
  s.setHandleEvent();
}, d = (() => {
  const t = (o) => {
    const n = path1.getTotalLength(), a = path2.getTotalLength();
    path1.style.strokeDasharray = n, path1.style.strokeDashoffset = n, path2.style.strokeDasharray = a, path2.style.strokeDashoffset = a;
  }, e = () => {
    document.querySelector(".loader #path1"), document.querySelector(".loader #path2"), t(), t();
  };
  return {
    setHandleEvent: function() {
      try {
        e();
      } catch (o) {
      }
    }
  };
})(), l = () => {
  d.setHandleEvent();
};
window.addEventListener("load", () => {
  r(), l();
});
//# sourceMappingURL=mainscript.js.map
