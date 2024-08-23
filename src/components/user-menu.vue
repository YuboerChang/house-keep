<template>
  <div class="demo-basic--circle">
    <el-dropdown placement="bottom-end"
      ><el-avatar :size="40">
        <img src="@/assets/static/default-head-sculpture.png" />
      </el-avatar>

      <template #dropdown
        ><el-dropdown-menu>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item>反馈</el-dropdown-item>
        </el-dropdown-menu>
      </template></el-dropdown
    >
  </div></template
>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  props: {},
  setup() {},
};
</script>

<style>
.demo-basic--circle {
  float: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin: 5px 20px;
}
</style>
