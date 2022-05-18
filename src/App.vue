<template>
  <div id="app">
    <div class="menu-holder">
      <div class="menu">
        <router-link class="menu-item" to="/">
          <img src="./assets/images/icons/logo.svg" alt="">
        </router-link>
        <div class="menu-burger menu-item">
          <div class="menu-burger__lines"></div>
          <div class="menu-burger__lines middle-line"></div>
          <div class="menu-burger__lines"></div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "Agrandir";
  src: url("./assets/fonts/agrandir.woff2") format("woff2-variations");
  font-display: swap;
}


@font-face {
  font-family: "Allenoire";
  src: url("./assets/fonts/allenoire.woff2") format("woff2");
}

.menu-holder{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}


.menu {
  position: fixed;
  top: 5rem;
  display: flex;
  width: 85%;
  justify-content: space-between;
  align-items: center;
  background: $white;
  border-radius: 24px;
  filter: drop-shadow(0px 4px 20px rgba(154, 40, 5, 0.1));

  .menu-item{
    padding: 2rem 5rem;
  }

  .menu-burger {
    &__lines {
      width: 5rem;
      height: 0.3rem;
      background: $blue;
      position: relative;

      &.middle-line {
        &::after {
          content: 'menu';
          position: absolute;
          font-family: $font-title;
          left: -50%;
          bottom: -300%;
          background: $white;
          padding: 0 .2rem;
        }
      }

      &:not(.menu-burger__lines:first-child) {
        margin-top: 1.5rem;
      }
    }
  }
}
</style>
