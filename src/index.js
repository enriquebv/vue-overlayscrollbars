import OverlayScrollbars from "overlayscrollbars";

import "overlayscrollbars/css/OverlayScrollbars.min.css";

const cloneOptions = options =>
  options === undefined ? {} : JSON.parse(JSON.stringify(options));

const create = (el, { value: options }) => {
  el._os = OverlayScrollbars(el, options);
};

const update = (el, { value: options }) => {
  const instance = el._os;

  if (options.active === false && instance !== undefined) {
    el._os.destroy();
    delete el._os;
    return;
  }

  if (options.active === false && instance === undefined) {
    return;
  }

  if (
    (options.active === true || options.active === undefined) &&
    instance === undefined
  ) {
    delete options.active;
    create(el, { value: options });
    return;
  }

  delete options.active;

  el._os.options(options);
};

const destroy = el => {
  el._os.destroy();
};

export default {
  install(Vue) {
    Vue.directive("scrollbar", {
      bind: create,
      update: update,
      componentUpdated: update,
      unbind: destroy
    });
  }
};
