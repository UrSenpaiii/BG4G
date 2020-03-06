<template>
  <div>
    <li class="sitemap-list-item"><i :class="iconsColor + ' fa-folder lighter-icon'" @click="showSubBlock(this)"></i> <a :href="link">
      <slot name="sitemapItemText"></slot>
    </a></li>
    <ul class="sub-list" v-if="sub && showSub">
      <slot name="subItem"></slot>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      sub: Boolean,
      link: String,
    },
    data() {
      return {
        showSub: false,
        iconsColor: null
      }
    },
    mounted: function () {
      this.sub ? this.iconsColor = "fas" : this.iconsColor = "far"
    },
    methods: {
      showSubBlock(e) {
        this.showSub = !this.showSub;
        if (this.sub) event.target.classList.toggle("fa-folder-open");
      }
    }
  }
</script>

<style scoped>
  .sitemap-list-item {
    padding: .1em;
  }

  .sub-list {
    margin-left: 1.1em;
  }
</style>
