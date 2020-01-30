<template>
  <canvas class="section">Pleas update or change your browser</canvas>
</template>

<script>
  export default {
    mounted() {
      let canvas = this.$el, ctx = canvas.getContext("2d");
      console.log("hello canvas where are you?");
      canvas.width = window.innerWidth - 17;
      canvas.height = 635;
      setInterval(() => {
        let circleRadius = Math.floor(Math.random() * (175 - 75) + 75);
        let circlePosX = Math.floor(Math.random() * canvas.width + circleRadius),
          circlePosY = Math.floor(Math.random() * canvas.height + circleRadius);
        while (circlePosX + circleRadius > canvas.width) {
          circlePosX -= circleRadius;
        }
        while (circlePosY + circleRadius > canvas.height) {
          circlePosY -= circleRadius
        }

        ctx.beginPath();
        ctx.fillStyle = "rgb(" + (Math.random() * 255 << 0) + "," + (Math.random() * 255 << 0) + "," + (Math.random() * 255 << 0) + ")";
        ctx.arc(circlePosX, circlePosY, circleRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
      }, 100);
    }
  }
</script>

<style scoped>
  canvas {
    display: block;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
</style>
