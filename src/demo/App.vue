<template>
<body>
  <div class="demo">
    <div class="simple" v-scrollbar="options">{{ lorem }}</div>
    <label>
      <input type="checkbox" v-model="active" /> Active
    </label>
    <label>
      <input type="text" placeholder="Theme string" v-model="theme" />
    </label>
  </div>
</body>
</template>

<script>
export default {
  data() {
    return {
      active: true,
      theme: "os-theme-dark",
      lorem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum, felis eu ultricies fringilla, sapien justo pulvinar tortor, sit amet tristique erat dui ut libero. Nam non blandit metus. Etiam malesuada, ligula sed malesuada ornare, enim ipsum luctus urna, ac dignissim sapien est sit amet est. Aliquam euismod tellus diam, vulputate viverra tortor semper in. Etiam ornare ex a rutrum blandit. Curabitur euismod, tellus sed tincidunt maximus, velit lectus vestibulum justo, quis tempor neque augue eu quam. In pretium efficitur urna, nec tincidunt eros rhoncus vitae. Fusce luctus mi sed bibendum finibus.
      Nam aliquam justo magna, nec aliquet sapien ultricies et. Etiam sagittis convallis odio, sit amet fringilla sem viverra et. Aliquam tortor dolor, tempor quis malesuada vitae, posuere a diam. In congue, felis quis luctus finibus, nisl neque placerat ligula, laoreet vestibulum purus risus maximus nisi. Vivamus non elementum orci. Integer pharetra sit amet est non cursus. Curabitur purus nisi, molestie ac libero vel, cursus lacinia nibh. Pellentesque eget quam porttitor, congue nisi tincidunt, vulputate magna. Quisque mi erat, malesuada malesuada libero vel, mattis mattis quam. Duis ut eros dictum, porttitor nunc vitae, venenatis sapien.`
    };
  },
  computed: {
    options() {
      return {
        active: this.active,
        className: this.theme
      };
    }
  }
};
</script>

<style lang="scss">
body,
html {
  height: 100%;
}

.demo {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  .simple {
    background: #ecf0f1;
    border: 2px solid #aaa;
    border-radius: 2px;
    width: 320px;
    min-height: 100px;
    max-height: 150px;
  }
}
</style>