<template>
  <div v-for="item in menuList" :key="item.id">
    <el-sub-menu
      v-if="item.children && item.children.length > 0"
      :index="item.id"
    >
      <template #title
        ><el-icon><House /></el-icon> <span>{{ item.name }}</span></template
      >
      <MenuItem :menuList="item.children"></MenuItem>
    </el-sub-menu>

    <el-menu-item v-else :index="item.id" @click="handleJump">
      <el-icon><Position /></el-icon>{{ item.name }}</el-menu-item
    >
  </div>
</template>
<script>
import { defineProps } from "vue";
import MenuItem from "./menu-item.vue";

export default {
  components: {
    MenuItem,
  },
  props: { menuList: Array },
  setup() {
    const handleJump = (item) => {
      console.log(item);
    };
    return {
      handleJump,
    };
  },
};
</script>
<style>
.el-sub-menu .el-sub-menu__title {
  font-size: 18px;
}
.el-sub-menu .el-menu-item {
  font-size: 16px;
}
</style>
