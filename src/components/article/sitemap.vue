<template>
    <li class="sitemap-list-item">
      <!--Ico-->
      <i :class="iconsColor + ' fa-folder mr-1'" @click="showSubBlock(this)"></i>
      <!--Link-->
      <a :href="link">
        <slot name="sitemapItemText"></slot>
      </a>
      <!--Sub-->
      <ul class="sub-list" v-if="sub && showSub">
        <slot name="subItem"></slot>
      </ul>
    </li>
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
      this.sub ? this.iconsColor = "fas ico-lighter" : this.iconsColor = "far"
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
