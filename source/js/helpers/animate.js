// animation using raf (render function parameter is progress from 0 to 1)
const animateProgress = (render, duration) => new Promise((resolve) => {
  const start = Date.now();
  (function loop() {
    const p = (Date.now() - start) / duration;
    if (p > 1) {
      render(1);
      // set that animation end
      resolve();
    } else {
      requestAnimationFrame(loop);
      render(p);
    }
  }());
});

export {animateProgress};
