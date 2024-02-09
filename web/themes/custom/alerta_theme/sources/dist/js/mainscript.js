const e = (() => {
  const n = () => {
    console.log("example runing");
  };
  return {
    setHandleEvent: function() {
      try {
        n();
      } catch (o) {
      }
    }
  };
})(), t = () => {
  e.setHandleEvent();
};
window.addEventListener("load", () => {
  t();
});
//# sourceMappingURL=mainscript.js.map
