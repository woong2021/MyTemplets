module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
                data: 
                `
                    @import "@/assets/sass/base/_reset.scss";
                    @import "@/assets/sass/base/_variablesList.scss";
                    @import "@/assets/sass/components/_common.scss";
                    @import "@/assets/sass/layout/_contents.scss";
                `
            }
        }
    }
}