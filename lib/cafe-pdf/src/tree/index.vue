<template>
  <ul>
    <li v-for="(item, index) of list" :key="item.title + index" class="item">
      <div class="item-title" @click="itemClick(item)">
        <i
          v-if="item.items.length > 0"
          @click.stop="toggle(item)"
          class="icon"
          :class="[{ 'up-arrow': item.show }]"
        ></i>
        <em>{{ item.title }}</em>
      </div>
      <transition name="fade">
        <div
          v-if="item.items.length > 0"
          v-show="item.show"
          class="item-children"
          :key="item.title"
        >
          <tree-list
            v-on="$listeners"
            v-bind="$attrs"
            :list="item.items"
          ></tree-list>
        </div>
      </transition>
    </li>
  </ul>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 组件名称 from '组件路径';
export default {
  name: 'tree-list',
  //引入组件
  props: {
    list: {
      type: Array,
    },
  },
  //引入混淆
  mixins: [],
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      select: null,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    itemClick(item) {
      this.$emit('item-click', item);
    },
    toggle(item) {
      item.show = !item.show;
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //生命周期 - 创建之前
  beforeCreate() {},
  //生命周期 - 挂载之前
  beforeMount() {},
  //生命周期 - 更新之前
  beforeUpdate() {},
  //生命周期 - 更新之后
  updated() {},
  //生命周期 - 销毁之前
  beforeDestroy() {},
  //生命周期 - 销毁完成
  destroyed() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
};
</script>

<style>
.pdf-catalogue {
  overflow: auto;
  width: 200px;
  padding: 0 5px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 14px;
}
.pdf-catalogue ul {
  list-style: none;
}
.pdf-catalogue .item-children {
  padding-left: 15px;
}
.pdf-catalogue .item-title {
  cursor: pointer;
  margin: 5px 0;
}
.pdf-catalogue .item-title.active {
  background-color: rgba(0, 0, 0, 0.15);
  color: rgba(0, 0, 0, 0.9);
}
.pdf-catalogue .item-title em {
  margin-left: 15px;
  display: block;
  line-height: 1;
  font-style: normal;
}
.pdf-catalogue .icon {
  float: left;
  cursor: pointer;
  position: relative;
  top: 2px;
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #555;
}
.pdf-catalogue .up-arrow {
  top: 5px;
  border-top: 5px solid #555;
  border-right: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid transparent;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  height: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
  height: auto;
}
</style>
