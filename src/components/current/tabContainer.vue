<template>
  <div class="tab-pane fade" id="basics">
    <!--Tabs-->
    <ul class="nav nav-tabs" id="myTab">
      <slot name="tab"></slot>
    </ul>
    <!--Content-->
    <div class="tab-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
