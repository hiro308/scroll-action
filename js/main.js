'use strict';
document.addEventListener('DOMContentLoaded', function () {
  scroll();
});

function scroll() {
  new scrollAction('.ob');
}

class scrollAction {
  constructor(els) {
    this.els = document.querySelectorAll(els);
    this.options = {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0,
    };
    this._observe();
  }

  _cb(entries, observer) {
    entries.forEach((entry, i) => {
      const target = entry.target;
      if (entry.isIntersecting) {
        const delay = i * 200;
        setTimeout(function () {
          target.classList.add('inview');
        }, delay);
        observer.unobserve(target);
      }
    });
  }

  _observe() {
    this.io = new IntersectionObserver(this._cb, this.options);
    this.els.forEach((el) => {
      this.io.observe(el);
    });
  }
}
