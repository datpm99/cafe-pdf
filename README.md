# Cafe-PDF

![NPM Publish](https://github.com/wangdaodao/cafe-pdf/actions/workflows/npm-publish.yml/badge.svg) ![NPM version](https://img.shields.io/npm/v/cafe-pdf.svg) ![GitHub stars](https://img.shields.io/github/stars/wangdaodao/cafe-pdf.svg) ![GitHub issues](https://img.shields.io/github/issues/wangdaodao/cafe-pdf.svg) ![GitHub forks](https://img.shields.io/github/forks/wangdaodao/cafe-pdf.svg)

> Render PDF files on Vue pages using pdf.js, supporting text rendering, lazy loading, paging, scaling, and printing.

* 😊 Vue 2.0 + [`pdfjs-dist 2.3.200`](https://github.com/mozilla/pdfjs-dist/releases/tag/v2.3.200);
* 😂 Support for modern browsers;
* 🀄 [中文文档](./README-zh.md)

## Install

```shell
npm install cafe-pdf --save
```

## Quick Start
```js
import cafePdf from 'cafe-pdf'
import 'cafe-pdf/package/cafe-pdf.css'
Vue.use(cafePdf)

// OR
import cafePdf from 'cafe-pdf'
import 'cafe-pdf/package/cafe-pdf.css'
export default {
  // ...
  components: {
    cafePdf
  }
  // ...
}
```

## Example

Demo：[http://demo.const.team/pdf/](http://demo.const.team/pdf/)

Note: the use of print, need to cooperate with the print style.

```vue
<template>
  <cafe-pdf ref="pdf" @on-success="load" @on-scroll="scroll" :filePath="src">
    <template slot="header">
      pdf-src:<input type="text" v-model.lazy="src" @change="fileChanged">
    </template>
    <template slot="footer">
      <button :disabled="currentNum<=1" @click="pre">pre</button>
      <input type="number" :min="1" :max="pageNum" v-model.number="currentNum" @change="pageChange(currentNum)">
      <button :disabled="currentNum>=pageNum" @click="next">next</button>
      <select v-model="scale" @change="setScale">
        <option value="auto">auto</option>
        <option value="page-actual">actual</option>
        <option value="page-fit">fit</option>
        <option value="page-width">width</option>
        <option value="0.50">50%</option>
        <option value="0.75">75%</option>
        <option value="1">100%</option>
        <option value="1.25">125%</option>
        <option value="1.50">150%</option>
        <option value="1.75">175%</option>
        <option value="2">200%</option>
        <option value="3">300%</option>
        <option value="4">400%</option>
      </select>
      <button @click="print">print</button>
    </template>
  </cafe-pdf>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      src: 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
      pageNum: null,
      scale: 1,
      currentNum: 1
    };
  },
  components: {},
  methods: {
    fileChanged() {
      this.file = this.src;
    },
    load(val) {
      this.pageNum = val;
    },
    setScale() {
      this.$refs.pdf.changeScale(this.scale);
    },
    scroll(val) {
      this.currentNum = val;
    },
    pre(){
      this.$refs.pdf.prePage();
    },
    next(){
      this.$refs.pdf.nextPage();
    },
    pageChange(val) {
      this.$refs.pdf.goToPage(val);
    },
    print() {
      this.$refs.pdf.printFile();
    }
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
#app {
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
@media print {
  #app {
    display: none;
  }
}
</style>
```

## Attributes
| Attribute      | Description          | Type      | Accepted Values      | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| filePath | pdf source | string | — | — |
| width | pdf width | string, number | — | 100% |
| height | pdf height | string, number | — | 100% |
| useOnlyCssZoom | only use css zoom | boolean | — | false |
| showNav | show catalogue ( 
If the file does not have a directory, it does not work) | boolean | — | true |
| autoWidth | Whether to scale PDF to container width during initialization | boolean | — | false |
| textLayerMode | Render in text mode, 0 use canvas，1 use text mode | number | 0/1 | 0 |

## Events
| Event Name | Description | Parameters |
| ---- | ---- | ---- |
| on-success | success event | count page, pdf obj |
| on-error | error event | error |
| on-scroll | Triggered when scrolling pdf | Current pages , Pdf Object |

## Methods
| Method | Description | Parameters |
| ---- | ---- | ---- |
| scale | scale | Scaling |
| prePage | pre page | — |
| nextPage | next page | — |
| goToPage | PDF change page | page |
| printFile | Print all pdf | scale |


## Slot
| name | Description |
|------|--------|
| header | header slot |
| footer | footer slot |