<template>
  <div class="login">
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          v-model="loginForm.username"
          required
        />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="loginForm.password"
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
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
        console.log(this.$store);
        this.$store.commit("user/setToken", res.token);
        this.$router.push({
          name: "home",
        });
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 300px;
  margin: 100px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

form div {
  margin: 10px 0;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 80%;
  padding: 8px;
  margin: 5px 5px;
}

button[type="submit"] {
  width: 50%;
  padding: 10px;
  margin: 10px 5px;
  cursor: pointer;
}
</style>
