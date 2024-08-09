<template>
  <div id="login" class="login">
    <el-form :model="loginForm" class="login-form" label-width="80px">
      <div class="welcome-text">欢迎</div>
      <el-form-item label="账号" style="display: flex; align-items: center;">
        <el-input
          v-model="loginForm.username"
          type="text"
          class="form-input"
        ></el-input
      ></el-form-item>
      <el-form-item label="密码" style="display: flex; align-items: center;"
        ><el-input
          v-model="loginForm.password"
          type="password"
          class="form-input"
        ></el-input
      ></el-form-item>
      <el-button type="primary" @click="login" class="login-button"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script>
import { post } from "@/share/api/api.js";
import * as THREE from "@/assets/css/three.min.js";
import BIRDS from "@/assets/css/vanta.birds.min.js";
import { onMounted } from "vue";
let vantaEffect;

export default {
  data() {
    return {
      loginForm: {
        username: "001234",
        password: "123456",
      },
    };
  },
  methods: {
    async login() {
      post(
        "/api/login",
        {
          id: this.loginForm.username,
          password: this.loginForm.password,
        },
        {}
      ).then((res) => {
        this.$store.commit("user/setToken", res.token);
        this.$router.push({
          name: "home",
        });
      });
    },
  },
  setup() {
    onMounted(() => {
      vantaEffect = BIRDS({
        el: "#login",
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x0,
        color2: 0xff29,
      });
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

.login-form {
  max-width: 300px;
  max-height: 260px;
  margin-left: 60%;
  margin-top: 15%;
  padding: 10px 10px;
  background-color: #fff;
  border-radius: 30px;
  text-align: center;
  transform: scale(1.2);
  opacity: 0.8;
}
.form-input {
  margin: 10px 0px;
}
.login-button {
  width: 60px;
  height: 30px;
  margin: 20px 0px;
  font-size: 14px;
  border-radius: 20px;
  cursor: pointer;
  border: 2px;
}
.welcome-text {
  margin: 15px 0px;
  font-size: 26px;
}
</style>
