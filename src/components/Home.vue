<template>
  <div class="home">
    {{ msg }}
  </div>
</template>
<script>
import { post } from "@/share/api/api.js";

export default {
  data() {
    return {
      msg: "welcome!this is home!",
    };
  },
  methods: {
    toLogin() {
      this.$router.push({
        name: "login",
      });
    },
  },
};
</script>
<style scoped>
.home {
  font-size: 36px;
}
</style>
