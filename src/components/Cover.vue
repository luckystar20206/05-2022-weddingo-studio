<template>
  <div class="cover">
    <div class="cover-holder js-cover">
      <div class="cover-image">
        <div class="text-wrapper">
          <h1>Revivez a l’infini les emotions de votre mariage.</h1>
          <div class="cta">
            <img src="../assets/images/icons/cta-circular-text.svg" alt="">
            <div class="circle"></div>
          </div>
        </div>
      </div>
      <div class="cover-pink">
        <div class="text-wrapper">
          <h1>Revivez a l’infini les emotions de votre mariage.</h1>
          <div class="cta">
            <img src="../assets/images/icons/cta-circular-text.svg" alt="">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CoverMask from "@/assets/class/CoverMask";

export default {
  name: "Cover",
  mounted() {
    CoverMask.init(this.$el);
  },
  updated() {
    CoverMask.init(this.$el);
  },
};
</script>

<style scoped lang="scss">
.cover{
  width: 100vw;
  height: 100vh;
}

.cover{
  position: relative;

  .text-wrapper{
    @media only screen and (max-width: $md) {
      width: 100%;
      flex-direction: column;
    }
    position: relative;
    display: flex;
    width: 40vw;
    .cta {
      @media only screen and (max-width: $md) {
        position: relative;
      }
      position: absolute;
      right: -10%;
      top: 100%;
    }
  }

  &-pink{
    @media only screen and (max-width: $md) {
      padding: 0 2rem;
    }

    padding: 0 15%;
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background: $pink;
  }

  &-image{
    @media only screen and (max-width: $md) {
      padding: 0 2rem;
    }

    color: $white;
    padding: 0 15%;
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background: url('../assets/images/cover-image.jpg');
    background-size: cover ;
    background-repeat: no-repeat;
    z-index: 0;
    z-index: 1;
    clip-path: circle(18vw at 69vw 45.0109vh);
    .cta{
      img{
        filter: brightness(10);
      }
      .circle{
        background: $blue;
      }
    }
  }
}

</style>
