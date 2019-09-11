# vue-overlayscrollbars

Vue directive to override the native scrollbar, with OverlayScrollbars.

### To do

- [x] Vue directive
- [x] Options support (with reactive support).
- [ ] Fancy demo.

## How to use

1. Download the plugin and OverlayScrollbars (just for the css):

   ```bash
   // With npm
   npm install vue-overlayscrollbars --save-dev

   // Or yarn
   yarn add vue-overlayscrollbars
   ```

2. Add it to Vue:

   ```js
   import Vue from "vue";
   import VueOverlayScrollbars from "vue-overlayscrollbars";

   Vue.use(VueOverlayScrollbars);
   ```

3. Require the CSS:

   ```js
   // Using the OverlayScrollbars default (included in plugin).
   import "vue-overlayscrollbars/dist/vue-overlayscrollbars.css";

   // Or using any download template from https://kingsora.github.io/OverlayScrollbars/#!themes
   import "your/downloaded/theme.css";
   ```

4. Add the directive `v-scrollbar` to any container in your templates:

   ```html
   <div v-scrollbar></div>

   <ul v-scrollbar></ul>

   <textarea v-scrollbar></textarea>
   ```

5. And voila, you have OverlayScrollbars in Vue, the most easy way.

## OverlayScrollbars options

Just pass it with the directive:

```html
<template>
  <div :v-scrollbar="options"></div>
</template>

<script>
  export default {
    data() {
      return {
        options: {
          className: "os-theme-dark",
          resize: "none",
          sizeAutoCapable: true,
          clipAlways: true,
          normalizeRTL: true,
          paddingAbsolute: false,
          autoUpdate: null
          // Same options used in Vanilla JavaScript version
          // https://kingsora.github.io/OverlayScrollbars/#!documentation/options.
        }
      };
    }
  };
</script>
```

## Get the instance

The OverlayScrollbar instance will be stored in the same element where you use the directive:

```html
<template>
  <div :v-scrollbar="options" ref="element"></div>
</template>

<script>
  export default {
    data() {
      return {
        options: {
          ...
        }
      };
    },
    mounted() {
      console.info(this.$refs.element._os); // _os attribute in the element it's the OverlayScrollbar instance.
    }
  };
</script>
```
