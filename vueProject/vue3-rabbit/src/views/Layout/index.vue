<script>
import {LayoutNav} from "@/views/Layout/Components/LayoutNav.vue";
import {LayoutHeader} from "@/views/Layout/Components/LayoutHeader.vue";
import {LayoutFooter} from "@/views/Layout/Components/LayoutFooter.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {LayoutFooter, LayoutHeader, LayoutNav}
})

</script>
<template>
  <div>我是首页</div>
<!-- 二级路由出口，存在于一级路由模板里面-->
  <LayoutNav />
  <LayoutHeader />
<RouterView />
  <LayoutFooter />
</template>