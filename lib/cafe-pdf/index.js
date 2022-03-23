import cafePdf from './src/index.vue'

cafePdf.install = function (Vue) {
  Vue.component(cafePdf.name, cafePdf)
}

export default cafePdf
