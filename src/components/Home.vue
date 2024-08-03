<template>
  <div class="home">
    {{ msg }}
  </div>
  <div>
    <button @click="toLogin">toLogin</button>--
    <button @click="showToken">showToken</button>--
    <button @click="test">test</button>
  </div>
</template>
<script>
import { post } from "@/share/api/api.js";

export default {
  data() {
    return {
      loginForm: {
        username: "001234",
        password: "123456",
      },
      msg: "welcome!this is home!",
    };
  },
  methods: {
    toLogin() {
      this.$router.push({
        name: "login",
      });
    },
    showToken() {
      var t = this.$store.getters["user/getToken"];
      console.log("token:", t);
    },
    async test() {
      post(
        "/api/test",
        {
          id: this.loginForm.username,
          password: this.loginForm.password,
        },
        {}
      ).then((res) => {
        console.log(res);
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
