import OverlayScrollbars from "overlayscrollbars";

import "overlayscrollbars/css/OverlayScrollbars.min.css";

export default {
  install(Vue) {
    Vue.directive("scrollbar", {
      bind: (el, { value: options }) => {
        const cloned = !options ? {} : JSON.parse(JSON.stringify(options));
        el._os = OverlayScrollbars(el, cloned);
      },
      componentUpdated: el => {
        el._os.update();
      },
      unbind: el => {
        el._os.destroy();
      }
    });
  }
};
