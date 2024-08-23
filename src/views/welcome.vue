<template>
  <div class="div-box">
    <el-card class="card-box">
      <template #header>
        <div class="card-header">
          <span>welcome! {{ userName }}</span>
        </div>
      </template>
      <p>
        今日计划：<span class="num-box">{{ planNum }}</span> 件
      </p>
      <p>
        今日进度：<span class="num-box">{{ planPercent }}</span> %
      </p>
      <p>
        未读消息：<span class="num-box">{{ unreadNum }}</span> 条
      </p>
      <p>
        待处理事项：<span class="num-box">{{ waitNum }}</span> 件
      </p>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "Tom",
      waitNum: 0,
      planNum: 0,
      planPercent: 100,
      unreadNum: 0,
    };
  },
  methods: {},
};
</script>

<style>
.div-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-box {
  width: 480px;
  margin: 50px 0px;
}
.card-header {
  font-size: 18px;
  color: rgb(220, 194, 130);
  font-style: italic;
  padding: 8px 0px;
  display: flex;
  justify-content: center;
}
.num-box {
  color: rgb(94, 194, 131);
}
</style>
