<template>
  <div class="form-box">
    <el-row>
      <el-col :span="12">
        <el-text>事务类型：</el-text
        ><el-select v-model="firstType" size="large" @change="ftChange">
          <el-option
            v-for="item in fts"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          /> </el-select></el-col
      ><el-col :span="12">
        <el-text>细分类型：</el-text
        ><el-select v-model="secondType" size="large" class="select-box">
          <el-option
            v-for="item in sts"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          /> </el-select
      ></el-col> </el-row
    ><el-row>
      <el-text>模板名称：</el-text
      ><el-input
        v-model="input"
        style="width: 240px;"
        placeholder="请输入"
        clearable
    /></el-row>
  </div>
</template>
<script>
import { applyFirstType, applySecondType } from "@/const/apply-type";
export default {
  data() {
    return {
      firstType: "0",
      secondType: "0",
      fts: applyFirstType,
      sts: applySecondType["0"],
    };
  },
  methods: {
    ftChange() {
      this.sts = applySecondType[this.firstType];
    },
  },
};
</script>

<style>
.form-box {
  border: 1px solid rgb(195, 211, 211);
  border-radius: 30px 30px;
  box-shadow: 5px 5px 3px 0px rgb(118, 158, 158);
  margin: 20px 80px;
  padding: 40px 40px;
}
</style>
