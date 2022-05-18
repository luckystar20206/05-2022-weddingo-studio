module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/assets/styles/variables.scss";
            @import "@/assets/styles/global.scss";
          `
      }
    }
  }
}
